(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function TS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Dh={exports:{}},da={},Nh={exports:{}},dt={};var $g;function AS(){if($g)return dt;$g=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function p(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(O,oe,be){this.props=O,this.context=oe,this.refs=M,this.updater=be||v}x.prototype.isReactComponent={},x.prototype.setState=function(O,oe){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,oe,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=x.prototype;function C(O,oe,be){this.props=O,this.context=oe,this.refs=M,this.updater=be||v}var T=C.prototype=new y;T.constructor=C,E(T,x.prototype),T.isPureReactComponent=!0;var A=Array.isArray,z=Object.prototype.hasOwnProperty,D={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function W(O,oe,be){var j,ue={},_e=null,ye=null;if(oe!=null)for(j in oe.ref!==void 0&&(ye=oe.ref),oe.key!==void 0&&(_e=""+oe.key),oe)z.call(oe,j)&&!N.hasOwnProperty(j)&&(ue[j]=oe[j]);var Ce=arguments.length-2;if(Ce===1)ue.children=be;else if(1<Ce){for(var De=Array(Ce),Ne=0;Ne<Ce;Ne++)De[Ne]=arguments[Ne+2];ue.children=De}if(O&&O.defaultProps)for(j in Ce=O.defaultProps,Ce)ue[j]===void 0&&(ue[j]=Ce[j]);return{$$typeof:n,type:O,key:_e,ref:ye,props:ue,_owner:D.current}}function L(O,oe){return{$$typeof:n,type:O.type,key:oe,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function U(O){var oe={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(be){return oe[be]})}var V=/\/+/g;function q(O,oe){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):oe.toString(36)}function X(O,oe,be,j,ue){var _e=typeof O;(_e==="undefined"||_e==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(_e){case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case n:case e:ye=!0}}if(ye)return ye=O,ue=ue(ye),O=j===""?"."+q(ye,0):j,A(ue)?(be="",O!=null&&(be=O.replace(V,"$&/")+"/"),X(ue,oe,be,"",function(Ne){return Ne})):ue!=null&&(R(ue)&&(ue=L(ue,be+(!ue.key||ye&&ye.key===ue.key?"":(""+ue.key).replace(V,"$&/")+"/")+O)),oe.push(ue)),1;if(ye=0,j=j===""?".":j+":",A(O))for(var Ce=0;Ce<O.length;Ce++){_e=O[Ce];var De=j+q(_e,Ce);ye+=X(_e,oe,be,De,ue)}else if(De=p(O),typeof De=="function")for(O=De.call(O),Ce=0;!(_e=O.next()).done;)_e=_e.value,De=j+q(_e,Ce++),ye+=X(_e,oe,be,De,ue);else if(_e==="object")throw oe=String(O),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return ye}function J(O,oe,be){if(O==null)return O;var j=[],ue=0;return X(O,j,"","",function(_e){return oe.call(be,_e,ue++)}),j}function ee(O){if(O._status===-1){var oe=O._result;oe=oe(),oe.then(function(be){(O._status===0||O._status===-1)&&(O._status=1,O._result=be)},function(be){(O._status===0||O._status===-1)&&(O._status=2,O._result=be)}),O._status===-1&&(O._status=0,O._result=oe)}if(O._status===1)return O._result.default;throw O._result}var re={current:null},B={transition:null},fe={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:B,ReactCurrentOwner:D};function ie(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:J,forEach:function(O,oe,be){J(O,function(){oe.apply(this,arguments)},be)},count:function(O){var oe=0;return J(O,function(){oe++}),oe},toArray:function(O){return J(O,function(oe){return oe})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},dt.Component=x,dt.Fragment=t,dt.Profiler=o,dt.PureComponent=C,dt.StrictMode=r,dt.Suspense=h,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,dt.act=ie,dt.cloneElement=function(O,oe,be){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var j=E({},O.props),ue=O.key,_e=O.ref,ye=O._owner;if(oe!=null){if(oe.ref!==void 0&&(_e=oe.ref,ye=D.current),oe.key!==void 0&&(ue=""+oe.key),O.type&&O.type.defaultProps)var Ce=O.type.defaultProps;for(De in oe)z.call(oe,De)&&!N.hasOwnProperty(De)&&(j[De]=oe[De]===void 0&&Ce!==void 0?Ce[De]:oe[De])}var De=arguments.length-2;if(De===1)j.children=be;else if(1<De){Ce=Array(De);for(var Ne=0;Ne<De;Ne++)Ce[Ne]=arguments[Ne+2];j.children=Ce}return{$$typeof:n,type:O.type,key:ue,ref:_e,props:j,_owner:ye}},dt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},dt.createElement=W,dt.createFactory=function(O){var oe=W.bind(null,O);return oe.type=O,oe},dt.createRef=function(){return{current:null}},dt.forwardRef=function(O){return{$$typeof:c,render:O}},dt.isValidElement=R,dt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:ee}},dt.memo=function(O,oe){return{$$typeof:d,type:O,compare:oe===void 0?null:oe}},dt.startTransition=function(O){var oe=B.transition;B.transition={};try{O()}finally{B.transition=oe}},dt.unstable_act=ie,dt.useCallback=function(O,oe){return re.current.useCallback(O,oe)},dt.useContext=function(O){return re.current.useContext(O)},dt.useDebugValue=function(){},dt.useDeferredValue=function(O){return re.current.useDeferredValue(O)},dt.useEffect=function(O,oe){return re.current.useEffect(O,oe)},dt.useId=function(){return re.current.useId()},dt.useImperativeHandle=function(O,oe,be){return re.current.useImperativeHandle(O,oe,be)},dt.useInsertionEffect=function(O,oe){return re.current.useInsertionEffect(O,oe)},dt.useLayoutEffect=function(O,oe){return re.current.useLayoutEffect(O,oe)},dt.useMemo=function(O,oe){return re.current.useMemo(O,oe)},dt.useReducer=function(O,oe,be){return re.current.useReducer(O,oe,be)},dt.useRef=function(O){return re.current.useRef(O)},dt.useState=function(O){return re.current.useState(O)},dt.useSyncExternalStore=function(O,oe,be){return re.current.useSyncExternalStore(O,oe,be)},dt.useTransition=function(){return re.current.useTransition()},dt.version="18.3.1",dt}var qg;function kd(){return qg||(qg=1,Nh.exports=AS()),Nh.exports}var Kg;function CS(){if(Kg)return da;Kg=1;var n=kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,h,d){var m,_={},p=null,v=null;d!==void 0&&(p=""+d),h.key!==void 0&&(p=""+h.key),h.ref!==void 0&&(v=h.ref);for(m in h)r.call(h,m)&&!l.hasOwnProperty(m)&&(_[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)_[m]===void 0&&(_[m]=h[m]);return{$$typeof:e,type:c,key:p,ref:v,props:_,_owner:o.current}}return da.Fragment=t,da.jsx=u,da.jsxs=u,da}var Zg;function RS(){return Zg||(Zg=1,Dh.exports=CS()),Dh.exports}var ne=RS(),Et=kd();const bS=TS(Et);var ru={},Ih={exports:{}},In={},Uh={exports:{}},Fh={};var Qg;function PS(){return Qg||(Qg=1,(function(n){function e(B,fe){var ie=B.length;B.push(fe);e:for(;0<ie;){var O=ie-1>>>1,oe=B[O];if(0<o(oe,fe))B[O]=fe,B[ie]=oe,ie=O;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var fe=B[0],ie=B.pop();if(ie!==fe){B[0]=ie;e:for(var O=0,oe=B.length,be=oe>>>1;O<be;){var j=2*(O+1)-1,ue=B[j],_e=j+1,ye=B[_e];if(0>o(ue,ie))_e<oe&&0>o(ye,ue)?(B[O]=ye,B[_e]=ie,O=_e):(B[O]=ue,B[j]=ie,O=j);else if(_e<oe&&0>o(ye,ie))B[O]=ye,B[_e]=ie,O=_e;else break e}}return fe}function o(B,fe){var ie=B.sortIndex-fe.sortIndex;return ie!==0?ie:B.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var h=[],d=[],m=1,_=null,p=3,v=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var fe=t(d);fe!==null;){if(fe.callback===null)r(d);else if(fe.startTime<=B)r(d),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=t(d)}}function A(B){if(M=!1,T(B),!E)if(t(h)!==null)E=!0,ee(z);else{var fe=t(d);fe!==null&&re(A,fe.startTime-B)}}function z(B,fe){E=!1,M&&(M=!1,y(W),W=-1),v=!0;var ie=p;try{for(T(fe),_=t(h);_!==null&&(!(_.expirationTime>fe)||B&&!U());){var O=_.callback;if(typeof O=="function"){_.callback=null,p=_.priorityLevel;var oe=O(_.expirationTime<=fe);fe=n.unstable_now(),typeof oe=="function"?_.callback=oe:_===t(h)&&r(h),T(fe)}else r(h);_=t(h)}if(_!==null)var be=!0;else{var j=t(d);j!==null&&re(A,j.startTime-fe),be=!1}return be}finally{_=null,p=ie,v=!1}}var D=!1,N=null,W=-1,L=5,R=-1;function U(){return!(n.unstable_now()-R<L)}function V(){if(N!==null){var B=n.unstable_now();R=B;var fe=!0;try{fe=N(!0,B)}finally{fe?q():(D=!1,N=null)}}else D=!1}var q;if(typeof C=="function")q=function(){C(V)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,J=X.port2;X.port1.onmessage=V,q=function(){J.postMessage(null)}}else q=function(){x(V,0)};function ee(B){N=B,D||(D=!0,q())}function re(B,fe){W=x(function(){B(n.unstable_now())},fe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){E||v||(E=!0,ee(z))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(B){switch(p){case 1:case 2:case 3:var fe=3;break;default:fe=p}var ie=p;p=fe;try{return B()}finally{p=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,fe){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ie=p;p=B;try{return fe()}finally{p=ie}},n.unstable_scheduleCallback=function(B,fe,ie){var O=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?O+ie:O):ie=O,B){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ie+oe,B={id:m++,callback:fe,priorityLevel:B,startTime:ie,expirationTime:oe,sortIndex:-1},ie>O?(B.sortIndex=ie,e(d,B),t(h)===null&&B===t(d)&&(M?(y(W),W=-1):M=!0,re(A,ie-O))):(B.sortIndex=oe,e(h,B),E||v||(E=!0,ee(z))),B},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(B){var fe=p;return function(){var ie=p;p=fe;try{return B.apply(this,arguments)}finally{p=ie}}}})(Fh)),Fh}var Jg;function LS(){return Jg||(Jg=1,Uh.exports=PS()),Uh.exports}var e_;function DS(){if(e_)return In;e_=1;var n=kd(),e=LS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function p(i){return h.call(_,i)?!0:h.call(m,i)?!1:d.test(i)?_[i]=!0:(m[i]=!0,!1)}function v(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,a,f){if(s===null||typeof s>"u"||v(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,a,f,g,S,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=S,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,C);x[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,C);x[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,C);x[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function T(i,s,a,f){var g=x.hasOwnProperty(s)?x[s]:null;(g!==null?g.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,a,g,f)&&(a=null),f||g===null?p(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):g.mustUseProperty?i[g.propertyName]=a===null?g.type===3?!1:"":a:(s=g.attributeName,f=g.attributeNamespace,a===null?i.removeAttribute(s):(g=g.type,a=g===3||g===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),D=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),U=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),B=Symbol.iterator;function fe(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var ie=Object.assign,O;function oe(i){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var be=!1;function j(i,s){if(!i||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(le){var f=le}Reflect.construct(i,[],s)}else{try{s.call()}catch(le){f=le}i.call(s.prototype)}else{try{throw Error()}catch(le){f=le}i()}}catch(le){if(le&&f&&typeof le.stack=="string"){for(var g=le.stack.split(`
`),S=f.stack.split(`
`),w=g.length-1,I=S.length-1;1<=w&&0<=I&&g[w]!==S[I];)I--;for(;1<=w&&0<=I;w--,I--)if(g[w]!==S[I]){if(w!==1||I!==1)do if(w--,I--,0>I||g[w]!==S[I]){var H=`
`+g[w].replace(" at new "," at ");return i.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",i.displayName)),H}while(1<=w&&0<=I);break}}}finally{be=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?oe(i):""}function ue(i){switch(i.tag){case 5:return oe(i.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return i=j(i.type,!1),i;case 11:return i=j(i.type.render,!1),i;case 1:return i=j(i.type,!0),i;default:return""}}function _e(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case D:return"Portal";case L:return"Profiler";case W:return"StrictMode";case q:return"Suspense";case X:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case U:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case V:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case J:return s=i.displayName||null,s!==null?s:_e(i.type)||"Memo";case ee:s=i._payload,i=i._init;try{return _e(i(s))}catch{}}return null}function ye(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(s);case 8:return s===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ce(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function De(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ne(i){var s=De(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var g=a.get,S=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return g.call(this)},set:function(w){f=""+w,S.call(this,w)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function ft(i){i._valueTracker||(i._valueTracker=Ne(i))}function k(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=De(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function _t(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ht(i,s){var a=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Mt(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=Ce(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ye(i,s){s=s.checked,s!=null&&T(i,"checked",s,!1)}function Ut(i,s){Ye(i,s);var a=Ce(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?rt(i,s.type,a):s.hasOwnProperty("defaultValue")&&rt(i,s.type,Ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function tt(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function rt(i,s,a){(s!=="number"||_t(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var F=Array.isArray;function b(i,s,a,f){if(i=i.options,s){s={};for(var g=0;g<a.length;g++)s["$"+a[g]]=!0;for(a=0;a<i.length;a++)g=s.hasOwnProperty("$"+i[a].value),i[a].selected!==g&&(i[a].selected=g),g&&f&&(i[a].defaultSelected=!0)}else{for(a=""+Ce(a),s=null,g=0;g<i.length;g++){if(i[g].value===a){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}s!==null||i[g].disabled||(s=i[g])}s!==null&&(s.selected=!0)}}function ce(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function pe(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(F(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Ce(a)}}function ve(i,s){var a=Ce(s.value),f=Ce(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function me(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function $e(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?$e(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Oe,ot=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,g){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,g)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Oe=Oe||document.createElement("div"),Oe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Oe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Me(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pt=["Webkit","ms","Moz","O"];Object.keys(Ie).forEach(function(i){pt.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ie[s]=Ie[i]})});function et(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ie.hasOwnProperty(i)&&Ie[i]?(""+s).trim():s+"px"}function ke(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,g=et(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,g):i[a]=g}}var st=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function at(i,s){if(s){if(st[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Rt(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Y=null;function we(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var he=null,de=null,Ae=null;function Ze(i){if(i=Qo(i)){if(typeof he!="function")throw Error(t(280));var s=i.stateNode;s&&(s=xl(s),he(i.stateNode,i.type,s))}}function mt(i){de?Ae?Ae.push(i):Ae=[i]:de=i}function zt(){if(de){var i=de,s=Ae;if(Ae=de=null,Ze(i),s)for(i=0;i<s.length;i++)Ze(s[i])}}function Xt(i,s){return i(s)}function vt(){}var zn=!1;function Bn(i,s,a){if(zn)return i(s,a);zn=!0;try{return Xt(i,s,a)}finally{zn=!1,(de!==null||Ae!==null)&&(vt(),zt())}}function dr(i,s){var a=i.stateNode;if(a===null)return null;var f=xl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var fi=!1;if(c)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){fi=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{fi=!1}function Ja(i,s,a,f,g,S,w,I,H){var le=Array.prototype.slice.call(arguments,3);try{s.apply(a,le)}catch(xe){this.onError(xe)}}var pr=!1,Bi=null,$r=!1,mr=null,el={onError:function(i){pr=!0,Bi=i}};function tl(i,s,a,f,g,S,w,I,H){pr=!1,Bi=null,Ja.apply(el,arguments)}function Jc(i,s,a,f,g,S,w,I,H){if(tl.apply(this,arguments),pr){if(pr){var le=Bi;pr=!1,Bi=null}else throw Error(t(198));$r||($r=!0,mr=le)}}function Hi(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function nl(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function P(i){if(Hi(i)!==i)throw Error(t(188))}function $(i){var s=i.alternate;if(!s){if(s=Hi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var g=a.return;if(g===null)break;var S=g.alternate;if(S===null){if(f=g.return,f!==null){a=f;continue}break}if(g.child===S.child){for(S=g.child;S;){if(S===a)return P(g),i;if(S===f)return P(g),s;S=S.sibling}throw Error(t(188))}if(a.return!==f.return)a=g,f=S;else{for(var w=!1,I=g.child;I;){if(I===a){w=!0,a=g,f=S;break}if(I===f){w=!0,f=g,a=S;break}I=I.sibling}if(!w){for(I=S.child;I;){if(I===a){w=!0,a=S,f=g;break}if(I===f){w=!0,f=S,a=g;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function se(i){return i=$(i),i!==null?ae(i):null}function ae(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=ae(i);if(s!==null)return s;i=i.sibling}return null}var Z=e.unstable_scheduleCallback,Te=e.unstable_cancelCallback,Ue=e.unstable_shouldYield,He=e.unstable_requestPaint,Re=e.unstable_now,Je=e.unstable_getCurrentPriorityLevel,Qe=e.unstable_ImmediatePriority,Xe=e.unstable_UserBlockingPriority,gt=e.unstable_NormalPriority,Ft=e.unstable_LowPriority,Dt=e.unstable_IdlePriority,tn=null,lt=null;function je(i){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(tn,i,void 0,(i.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:gr,yt=Math.log,Hn=Math.LN2;function gr(i){return i>>>=0,i===0?32:31-(yt(i)/Hn|0)|0}var nn=64,_r=4194304;function bt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Vn(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,g=i.suspendedLanes,S=i.pingedLanes,w=a&268435455;if(w!==0){var I=w&~g;I!==0?f=bt(I):(S&=w,S!==0&&(f=bt(S)))}else w=a&~g,w!==0?f=bt(w):S!==0&&(f=bt(S));if(f===0)return 0;if(s!==0&&s!==f&&(s&g)===0&&(g=f&-f,S=s&-s,g>=S||g===16&&(S&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-Tt(s),g=1<<a,f|=i[a],s&=~g;return f}function Io(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rn(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,S=i.pendingLanes;0<S;){var w=31-Tt(S),I=1<<w,H=g[w];H===-1?((I&a)===0||(I&f)!==0)&&(g[w]=Io(I,s)):H<=s&&(i.expiredLanes|=I),S&=~I}}function qr(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function il(){var i=nn;return nn<<=1,(nn&4194240)===0&&(nn=64),i}function bs(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function Uo(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Tt(s),i[s]=a}function jx(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var g=31-Tt(a),S=1<<g;s[g]=0,f[g]=-1,i[g]=-1,a&=~S}}function ef(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-Tt(a),g=1<<f;g&s|i[f]&s&&(i[f]|=s),a&=~g}}var At=0;function Ap(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Cp,tf,Rp,bp,Pp,nf=!1,rl=[],vr=null,xr=null,yr=null,Fo=new Map,Oo=new Map,Sr=[],Yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(i,s){switch(i){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Fo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(s.pointerId)}}function ko(i,s,a,f,g,S){return i===null||i.nativeEvent!==S?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:S,targetContainers:[g]},s!==null&&(s=Qo(s),s!==null&&tf(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),i)}function $x(i,s,a,f,g){switch(s){case"focusin":return vr=ko(vr,i,s,a,f,g),!0;case"dragenter":return xr=ko(xr,i,s,a,f,g),!0;case"mouseover":return yr=ko(yr,i,s,a,f,g),!0;case"pointerover":var S=g.pointerId;return Fo.set(S,ko(Fo.get(S)||null,i,s,a,f,g)),!0;case"gotpointercapture":return S=g.pointerId,Oo.set(S,ko(Oo.get(S)||null,i,s,a,f,g)),!0}return!1}function Dp(i){var s=Kr(i.target);if(s!==null){var a=Hi(s);if(a!==null){if(s=a.tag,s===13){if(s=nl(a),s!==null){i.blockedOn=s,Pp(i.priority,function(){Rp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function sl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=sf(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);Y=f,a.target.dispatchEvent(f),Y=null}else return s=Qo(a),s!==null&&tf(s),i.blockedOn=a,!1;s.shift()}return!0}function Np(i,s,a){sl(i)&&a.delete(s)}function qx(){nf=!1,vr!==null&&sl(vr)&&(vr=null),xr!==null&&sl(xr)&&(xr=null),yr!==null&&sl(yr)&&(yr=null),Fo.forEach(Np),Oo.forEach(Np)}function zo(i,s){i.blockedOn===s&&(i.blockedOn=null,nf||(nf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qx)))}function Bo(i){function s(g){return zo(g,i)}if(0<rl.length){zo(rl[0],i);for(var a=1;a<rl.length;a++){var f=rl[a];f.blockedOn===i&&(f.blockedOn=null)}}for(vr!==null&&zo(vr,i),xr!==null&&zo(xr,i),yr!==null&&zo(yr,i),Fo.forEach(s),Oo.forEach(s),a=0;a<Sr.length;a++)f=Sr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)Dp(a),a.blockedOn===null&&Sr.shift()}var Ps=A.ReactCurrentBatchConfig,ol=!0;function Kx(i,s,a,f){var g=At,S=Ps.transition;Ps.transition=null;try{At=1,rf(i,s,a,f)}finally{At=g,Ps.transition=S}}function Zx(i,s,a,f){var g=At,S=Ps.transition;Ps.transition=null;try{At=4,rf(i,s,a,f)}finally{At=g,Ps.transition=S}}function rf(i,s,a,f){if(ol){var g=sf(i,s,a,f);if(g===null)Mf(i,s,f,al,a),Lp(i,f);else if($x(g,i,s,a,f))f.stopPropagation();else if(Lp(i,f),s&4&&-1<Yx.indexOf(i)){for(;g!==null;){var S=Qo(g);if(S!==null&&Cp(S),S=sf(i,s,a,f),S===null&&Mf(i,s,f,al,a),S===g)break;g=S}g!==null&&f.stopPropagation()}else Mf(i,s,f,null,a)}}var al=null;function sf(i,s,a,f){if(al=null,i=we(f),i=Kr(i),i!==null)if(s=Hi(i),s===null)i=null;else if(a=s.tag,a===13){if(i=nl(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return al=i,null}function Ip(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Qe:return 1;case Xe:return 4;case gt:case Ft:return 16;case Dt:return 536870912;default:return 16}default:return 16}}var Mr=null,of=null,ll=null;function Up(){if(ll)return ll;var i,s=of,a=s.length,f,g="value"in Mr?Mr.value:Mr.textContent,S=g.length;for(i=0;i<a&&s[i]===g[i];i++);var w=a-i;for(f=1;f<=w&&s[a-f]===g[S-f];f++);return ll=g.slice(i,1<f?1-f:void 0)}function ul(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function cl(){return!0}function Fp(){return!1}function Gn(i){function s(a,f,g,S,w){this._reactName=a,this._targetInst=g,this.type=f,this.nativeEvent=S,this.target=w,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(S):S[I]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?cl:Fp,this.isPropagationStopped=Fp,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Gn(Ls),Ho=ie({},Ls,{view:0,detail:0}),Qx=Gn(Ho),lf,uf,Vo,fl=ie({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Vo&&(Vo&&i.type==="mousemove"?(lf=i.screenX-Vo.screenX,uf=i.screenY-Vo.screenY):uf=lf=0,Vo=i),lf)},movementY:function(i){return"movementY"in i?i.movementY:uf}}),Op=Gn(fl),Jx=ie({},fl,{dataTransfer:0}),ey=Gn(Jx),ty=ie({},Ho,{relatedTarget:0}),cf=Gn(ty),ny=ie({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=Gn(ny),ry=ie({},Ls,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),sy=Gn(ry),oy=ie({},Ls,{data:0}),kp=Gn(oy),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cy(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=uy[i])?!!s[i]:!1}function ff(){return cy}var fy=ie({},Ho,{key:function(i){if(i.key){var s=ay[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ul(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ly[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(i){return i.type==="keypress"?ul(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ul(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),hy=Gn(fy),dy=ie({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=Gn(dy),py=ie({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),my=Gn(py),gy=ie({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=Gn(gy),vy=ie({},fl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),xy=Gn(vy),yy=[9,13,27,32],hf=c&&"CompositionEvent"in window,Go=null;c&&"documentMode"in document&&(Go=document.documentMode);var Sy=c&&"TextEvent"in window&&!Go,Bp=c&&(!hf||Go&&8<Go&&11>=Go),Hp=" ",Vp=!1;function Gp(i,s){switch(i){case"keyup":return yy.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ds=!1;function My(i,s){switch(i){case"compositionend":return Wp(s);case"keypress":return s.which!==32?null:(Vp=!0,Hp);case"textInput":return i=s.data,i===Hp&&Vp?null:i;default:return null}}function Ey(i,s){if(Ds)return i==="compositionend"||!hf&&Gp(i,s)?(i=Up(),ll=of=Mr=null,Ds=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Bp&&s.locale!=="ko"?null:s.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!wy[i.type]:s==="textarea"}function jp(i,s,a,f){mt(f),s=gl(s,"onChange"),0<s.length&&(a=new af("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var Wo=null,Xo=null;function Ty(i){cm(i,0)}function hl(i){var s=Os(i);if(k(s))return i}function Ay(i,s){if(i==="change")return s}var Yp=!1;if(c){var df;if(c){var pf="oninput"in document;if(!pf){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),pf=typeof $p.oninput=="function"}df=pf}else df=!1;Yp=df&&(!document.documentMode||9<document.documentMode)}function qp(){Wo&&(Wo.detachEvent("onpropertychange",Kp),Xo=Wo=null)}function Kp(i){if(i.propertyName==="value"&&hl(Xo)){var s=[];jp(s,Xo,i,we(i)),Bn(Ty,s)}}function Cy(i,s,a){i==="focusin"?(qp(),Wo=s,Xo=a,Wo.attachEvent("onpropertychange",Kp)):i==="focusout"&&qp()}function Ry(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return hl(Xo)}function by(i,s){if(i==="click")return hl(s)}function Py(i,s){if(i==="input"||i==="change")return hl(s)}function Ly(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var hi=typeof Object.is=="function"?Object.is:Ly;function jo(i,s){if(hi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var g=a[f];if(!h.call(s,g)||!hi(i[g],s[g]))return!1}return!0}function Zp(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Qp(i,s){var a=Zp(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function Jp(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Jp(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function em(){for(var i=window,s=_t();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=_t(i.document)}return s}function mf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function Dy(i){var s=em(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&Jp(a.ownerDocument.documentElement,a)){if(f!==null&&mf(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var g=a.textContent.length,S=Math.min(f.start,g);f=f.end===void 0?S:Math.min(f.end,g),!i.extend&&S>f&&(g=f,f=S,S=g),g=Qp(a,S);var w=Qp(a,f);g&&w&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),i.removeAllRanges(),S>f?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Ny=c&&"documentMode"in document&&11>=document.documentMode,Ns=null,gf=null,Yo=null,_f=!1;function tm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_f||Ns==null||Ns!==_t(f)||(f=Ns,"selectionStart"in f&&mf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Yo&&jo(Yo,f)||(Yo=f,f=gl(gf,"onSelect"),0<f.length&&(s=new af("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Ns)))}function dl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Is={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},vf={},nm={};c&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function pl(i){if(vf[i])return vf[i];if(!Is[i])return i;var s=Is[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in nm)return vf[i]=s[a];return i}var im=pl("animationend"),rm=pl("animationiteration"),sm=pl("animationstart"),om=pl("transitionend"),am=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(i,s){am.set(i,s),l(s,[i])}for(var xf=0;xf<lm.length;xf++){var yf=lm[xf],Iy=yf.toLowerCase(),Uy=yf[0].toUpperCase()+yf.slice(1);Er(Iy,"on"+Uy)}Er(im,"onAnimationEnd"),Er(rm,"onAnimationIteration"),Er(sm,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(om,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function um(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,Jc(f,s,void 0,i),i.currentTarget=null}function cm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],g=f.event;f=f.listeners;e:{var S=void 0;if(s)for(var w=f.length-1;0<=w;w--){var I=f[w],H=I.instance,le=I.currentTarget;if(I=I.listener,H!==S&&g.isPropagationStopped())break e;um(g,I,le),S=H}else for(w=0;w<f.length;w++){if(I=f[w],H=I.instance,le=I.currentTarget,I=I.listener,H!==S&&g.isPropagationStopped())break e;um(g,I,le),S=H}}}if($r)throw i=mr,$r=!1,mr=null,i}function Nt(i,s){var a=s[Rf];a===void 0&&(a=s[Rf]=new Set);var f=i+"__bubble";a.has(f)||(fm(s,i,2,!1),a.add(f))}function Sf(i,s,a){var f=0;s&&(f|=4),fm(a,i,f,s)}var ml="_reactListening"+Math.random().toString(36).slice(2);function qo(i){if(!i[ml]){i[ml]=!0,r.forEach(function(a){a!=="selectionchange"&&(Fy.has(a)||Sf(a,!1,i),Sf(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ml]||(s[ml]=!0,Sf("selectionchange",!1,s))}}function fm(i,s,a,f){switch(Ip(s)){case 1:var g=Kx;break;case 4:g=Zx;break;default:g=rf}a=g.bind(null,s,a,i),g=void 0,!fi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(s,a,{capture:!0,passive:g}):i.addEventListener(s,a,!0):g!==void 0?i.addEventListener(s,a,{passive:g}):i.addEventListener(s,a,!1)}function Mf(i,s,a,f,g){var S=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var I=f.stateNode.containerInfo;if(I===g||I.nodeType===8&&I.parentNode===g)break;if(w===4)for(w=f.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===g||H.nodeType===8&&H.parentNode===g))return;w=w.return}for(;I!==null;){if(w=Kr(I),w===null)return;if(H=w.tag,H===5||H===6){f=S=w;continue e}I=I.parentNode}}f=f.return}Bn(function(){var le=S,xe=we(a),Se=[];e:{var ge=am.get(i);if(ge!==void 0){var Fe=af,Be=i;switch(i){case"keypress":if(ul(a)===0)break e;case"keydown":case"keyup":Fe=hy;break;case"focusin":Be="focus",Fe=cf;break;case"focusout":Be="blur",Fe=cf;break;case"beforeblur":case"afterblur":Fe=cf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=my;break;case im:case rm:case sm:Fe=iy;break;case om:Fe=_y;break;case"scroll":Fe=Qx;break;case"wheel":Fe=xy;break;case"copy":case"cut":case"paste":Fe=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=zp}var Ve=(s&4)!==0,Gt=!Ve&&i==="scroll",Q=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var G=le,te;G!==null;){te=G;var Ee=te.stateNode;if(te.tag===5&&Ee!==null&&(te=Ee,Q!==null&&(Ee=dr(G,Q),Ee!=null&&Ve.push(Ko(G,Ee,te)))),Gt)break;G=G.return}0<Ve.length&&(ge=new Fe(ge,Be,null,a,xe),Se.push({event:ge,listeners:Ve}))}}if((s&7)===0){e:{if(ge=i==="mouseover"||i==="pointerover",Fe=i==="mouseout"||i==="pointerout",ge&&a!==Y&&(Be=a.relatedTarget||a.fromElement)&&(Kr(Be)||Be[Vi]))break e;if((Fe||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(Be=a.relatedTarget||a.toElement,Fe=le,Be=Be?Kr(Be):null,Be!==null&&(Gt=Hi(Be),Be!==Gt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Fe=null,Be=le),Fe!==Be)){if(Ve=Op,Ee="onMouseLeave",Q="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(Ve=zp,Ee="onPointerLeave",Q="onPointerEnter",G="pointer"),Gt=Fe==null?ge:Os(Fe),te=Be==null?ge:Os(Be),ge=new Ve(Ee,G+"leave",Fe,a,xe),ge.target=Gt,ge.relatedTarget=te,Ee=null,Kr(xe)===le&&(Ve=new Ve(Q,G+"enter",Be,a,xe),Ve.target=te,Ve.relatedTarget=Gt,Ee=Ve),Gt=Ee,Fe&&Be)t:{for(Ve=Fe,Q=Be,G=0,te=Ve;te;te=Us(te))G++;for(te=0,Ee=Q;Ee;Ee=Us(Ee))te++;for(;0<G-te;)Ve=Us(Ve),G--;for(;0<te-G;)Q=Us(Q),te--;for(;G--;){if(Ve===Q||Q!==null&&Ve===Q.alternate)break t;Ve=Us(Ve),Q=Us(Q)}Ve=null}else Ve=null;Fe!==null&&hm(Se,ge,Fe,Ve,!1),Be!==null&&Gt!==null&&hm(Se,Gt,Be,Ve,!0)}}e:{if(ge=le?Os(le):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var We=Ay;else if(Xp(ge))if(Yp)We=Py;else{We=Ry;var qe=Cy}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=by);if(We&&(We=We(i,le))){jp(Se,We,a,xe);break e}qe&&qe(i,ge,le),i==="focusout"&&(qe=ge._wrapperState)&&qe.controlled&&ge.type==="number"&&rt(ge,"number",ge.value)}switch(qe=le?Os(le):window,i){case"focusin":(Xp(qe)||qe.contentEditable==="true")&&(Ns=qe,gf=le,Yo=null);break;case"focusout":Yo=gf=Ns=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,tm(Se,a,xe);break;case"selectionchange":if(Ny)break;case"keydown":case"keyup":tm(Se,a,xe)}var Ke;if(hf)e:{switch(i){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Ds?Gp(i,a)&&(nt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Bp&&a.locale!=="ko"&&(Ds||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Ds&&(Ke=Up()):(Mr=xe,of="value"in Mr?Mr.value:Mr.textContent,Ds=!0)),qe=gl(le,nt),0<qe.length&&(nt=new kp(nt,i,null,a,xe),Se.push({event:nt,listeners:qe}),Ke?nt.data=Ke:(Ke=Wp(a),Ke!==null&&(nt.data=Ke)))),(Ke=Sy?My(i,a):Ey(i,a))&&(le=gl(le,"onBeforeInput"),0<le.length&&(xe=new kp("onBeforeInput","beforeinput",null,a,xe),Se.push({event:xe,listeners:le}),xe.data=Ke))}cm(Se,s)})}function Ko(i,s,a){return{instance:i,listener:s,currentTarget:a}}function gl(i,s){for(var a=s+"Capture",f=[];i!==null;){var g=i,S=g.stateNode;g.tag===5&&S!==null&&(g=S,S=dr(i,a),S!=null&&f.unshift(Ko(i,S,g)),S=dr(i,s),S!=null&&f.push(Ko(i,S,g))),i=i.return}return f}function Us(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function hm(i,s,a,f,g){for(var S=s._reactName,w=[];a!==null&&a!==f;){var I=a,H=I.alternate,le=I.stateNode;if(H!==null&&H===f)break;I.tag===5&&le!==null&&(I=le,g?(H=dr(a,S),H!=null&&w.unshift(Ko(a,H,I))):g||(H=dr(a,S),H!=null&&w.push(Ko(a,H,I)))),a=a.return}w.length!==0&&i.push({event:s,listeners:w})}var Oy=/\r\n?/g,ky=/\u0000|\uFFFD/g;function dm(i){return(typeof i=="string"?i:""+i).replace(Oy,`
`).replace(ky,"")}function _l(i,s,a){if(s=dm(s),dm(i)!==s&&a)throw Error(t(425))}function vl(){}var Ef=null,wf=null;function Tf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(i){return pm.resolve(null).then(i).catch(Hy)}:Af;function Hy(i){setTimeout(function(){throw i})}function Cf(i,s){var a=s,f=0;do{var g=a.nextSibling;if(i.removeChild(a),g&&g.nodeType===8)if(a=g.data,a==="/$"){if(f===0){i.removeChild(g),Bo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=g}while(a);Bo(s)}function wr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function mm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Ri="__reactFiber$"+Fs,Zo="__reactProps$"+Fs,Vi="__reactContainer$"+Fs,Rf="__reactEvents$"+Fs,Vy="__reactListeners$"+Fs,Gy="__reactHandles$"+Fs;function Kr(i){var s=i[Ri];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Vi]||a[Ri]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=mm(i);i!==null;){if(a=i[Ri])return a;i=mm(i)}return s}i=a,a=i.parentNode}return null}function Qo(i){return i=i[Ri]||i[Vi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Os(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function xl(i){return i[Zo]||null}var bf=[],ks=-1;function Tr(i){return{current:i}}function It(i){0>ks||(i.current=bf[ks],bf[ks]=null,ks--)}function Pt(i,s){ks++,bf[ks]=i.current,i.current=s}var Ar={},fn=Tr(Ar),bn=Tr(!1),Zr=Ar;function zs(i,s){var a=i.type.contextTypes;if(!a)return Ar;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var g={},S;for(S in a)g[S]=s[S];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=g),g}function Pn(i){return i=i.childContextTypes,i!=null}function yl(){It(bn),It(fn)}function gm(i,s,a){if(fn.current!==Ar)throw Error(t(168));Pt(fn,s),Pt(bn,a)}function _m(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var g in f)if(!(g in s))throw Error(t(108,ye(i)||"Unknown",g));return ie({},a,f)}function Sl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ar,Zr=fn.current,Pt(fn,i),Pt(bn,bn.current),!0}function vm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=_m(i,s,Zr),f.__reactInternalMemoizedMergedChildContext=i,It(bn),It(fn),Pt(fn,i)):It(bn),Pt(bn,a)}var Gi=null,Ml=!1,Pf=!1;function xm(i){Gi===null?Gi=[i]:Gi.push(i)}function Wy(i){Ml=!0,xm(i)}function Cr(){if(!Pf&&Gi!==null){Pf=!0;var i=0,s=At;try{var a=Gi;for(At=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}Gi=null,Ml=!1}catch(g){throw Gi!==null&&(Gi=Gi.slice(i+1)),Z(Qe,Cr),g}finally{At=s,Pf=!1}}return null}var Bs=[],Hs=0,El=null,wl=0,ei=[],ti=0,Qr=null,Wi=1,Xi="";function Jr(i,s){Bs[Hs++]=wl,Bs[Hs++]=El,El=i,wl=s}function ym(i,s,a){ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=Qr,Qr=i;var f=Wi;i=Xi;var g=32-Tt(f)-1;f&=~(1<<g),a+=1;var S=32-Tt(s)+g;if(30<S){var w=g-g%5;S=(f&(1<<w)-1).toString(32),f>>=w,g-=w,Wi=1<<32-Tt(s)+g|a<<g|f,Xi=S+i}else Wi=1<<S|a<<g|f,Xi=i}function Lf(i){i.return!==null&&(Jr(i,1),ym(i,1,0))}function Df(i){for(;i===El;)El=Bs[--Hs],Bs[Hs]=null,wl=Bs[--Hs],Bs[Hs]=null;for(;i===Qr;)Qr=ei[--ti],ei[ti]=null,Xi=ei[--ti],ei[ti]=null,Wi=ei[--ti],ei[ti]=null}var Wn=null,Xn=null,Ot=!1,di=null;function Sm(i,s){var a=si(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Mm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Wn=i,Xn=wr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Wn=i,Xn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Qr!==null?{id:Wi,overflow:Xi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=si(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Wn=i,Xn=null,!0):!1;default:return!1}}function Nf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function If(i){if(Ot){var s=Xn;if(s){var a=s;if(!Mm(i,s)){if(Nf(i))throw Error(t(418));s=wr(a.nextSibling);var f=Wn;s&&Mm(i,s)?Sm(f,a):(i.flags=i.flags&-4097|2,Ot=!1,Wn=i)}}else{if(Nf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Ot=!1,Wn=i}}}function Em(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Wn=i}function Tl(i){if(i!==Wn)return!1;if(!Ot)return Em(i),Ot=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Tf(i.type,i.memoizedProps)),s&&(s=Xn)){if(Nf(i))throw wm(),Error(t(418));for(;s;)Sm(i,s),s=wr(s.nextSibling)}if(Em(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Xn=wr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Xn=null}}else Xn=Wn?wr(i.stateNode.nextSibling):null;return!0}function wm(){for(var i=Xn;i;)i=wr(i.nextSibling)}function Vs(){Xn=Wn=null,Ot=!1}function Uf(i){di===null?di=[i]:di.push(i)}var Xy=A.ReactCurrentBatchConfig;function Jo(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var g=f,S=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(w){var I=g.refs;w===null?delete I[S]:I[S]=w},s._stringRef=S,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Al(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Tm(i){var s=i._init;return s(i._payload)}function Am(i){function s(Q,G){if(i){var te=Q.deletions;te===null?(Q.deletions=[G],Q.flags|=16):te.push(G)}}function a(Q,G){if(!i)return null;for(;G!==null;)s(Q,G),G=G.sibling;return null}function f(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function g(Q,G){return Q=Ur(Q,G),Q.index=0,Q.sibling=null,Q}function S(Q,G,te){return Q.index=te,i?(te=Q.alternate,te!==null?(te=te.index,te<G?(Q.flags|=2,G):te):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function w(Q){return i&&Q.alternate===null&&(Q.flags|=2),Q}function I(Q,G,te,Ee){return G===null||G.tag!==6?(G=Ah(te,Q.mode,Ee),G.return=Q,G):(G=g(G,te),G.return=Q,G)}function H(Q,G,te,Ee){var We=te.type;return We===N?xe(Q,G,te.props.children,Ee,te.key):G!==null&&(G.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ee&&Tm(We)===G.type)?(Ee=g(G,te.props),Ee.ref=Jo(Q,G,te),Ee.return=Q,Ee):(Ee=Kl(te.type,te.key,te.props,null,Q.mode,Ee),Ee.ref=Jo(Q,G,te),Ee.return=Q,Ee)}function le(Q,G,te,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Ch(te,Q.mode,Ee),G.return=Q,G):(G=g(G,te.children||[]),G.return=Q,G)}function xe(Q,G,te,Ee,We){return G===null||G.tag!==7?(G=as(te,Q.mode,Ee,We),G.return=Q,G):(G=g(G,te),G.return=Q,G)}function Se(Q,G,te){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Ah(""+G,Q.mode,te),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case z:return te=Kl(G.type,G.key,G.props,null,Q.mode,te),te.ref=Jo(Q,null,G),te.return=Q,te;case D:return G=Ch(G,Q.mode,te),G.return=Q,G;case ee:var Ee=G._init;return Se(Q,Ee(G._payload),te)}if(F(G)||fe(G))return G=as(G,Q.mode,te,null),G.return=Q,G;Al(Q,G)}return null}function ge(Q,G,te,Ee){var We=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return We!==null?null:I(Q,G,""+te,Ee);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case z:return te.key===We?H(Q,G,te,Ee):null;case D:return te.key===We?le(Q,G,te,Ee):null;case ee:return We=te._init,ge(Q,G,We(te._payload),Ee)}if(F(te)||fe(te))return We!==null?null:xe(Q,G,te,Ee,null);Al(Q,te)}return null}function Fe(Q,G,te,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Q=Q.get(te)||null,I(G,Q,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case z:return Q=Q.get(Ee.key===null?te:Ee.key)||null,H(G,Q,Ee,We);case D:return Q=Q.get(Ee.key===null?te:Ee.key)||null,le(G,Q,Ee,We);case ee:var qe=Ee._init;return Fe(Q,G,te,qe(Ee._payload),We)}if(F(Ee)||fe(Ee))return Q=Q.get(te)||null,xe(G,Q,Ee,We,null);Al(G,Ee)}return null}function Be(Q,G,te,Ee){for(var We=null,qe=null,Ke=G,nt=G=0,on=null;Ke!==null&&nt<te.length;nt++){Ke.index>nt?(on=Ke,Ke=null):on=Ke.sibling;var St=ge(Q,Ke,te[nt],Ee);if(St===null){Ke===null&&(Ke=on);break}i&&Ke&&St.alternate===null&&s(Q,Ke),G=S(St,G,nt),qe===null?We=St:qe.sibling=St,qe=St,Ke=on}if(nt===te.length)return a(Q,Ke),Ot&&Jr(Q,nt),We;if(Ke===null){for(;nt<te.length;nt++)Ke=Se(Q,te[nt],Ee),Ke!==null&&(G=S(Ke,G,nt),qe===null?We=Ke:qe.sibling=Ke,qe=Ke);return Ot&&Jr(Q,nt),We}for(Ke=f(Q,Ke);nt<te.length;nt++)on=Fe(Ke,Q,nt,te[nt],Ee),on!==null&&(i&&on.alternate!==null&&Ke.delete(on.key===null?nt:on.key),G=S(on,G,nt),qe===null?We=on:qe.sibling=on,qe=on);return i&&Ke.forEach(function(Fr){return s(Q,Fr)}),Ot&&Jr(Q,nt),We}function Ve(Q,G,te,Ee){var We=fe(te);if(typeof We!="function")throw Error(t(150));if(te=We.call(te),te==null)throw Error(t(151));for(var qe=We=null,Ke=G,nt=G=0,on=null,St=te.next();Ke!==null&&!St.done;nt++,St=te.next()){Ke.index>nt?(on=Ke,Ke=null):on=Ke.sibling;var Fr=ge(Q,Ke,St.value,Ee);if(Fr===null){Ke===null&&(Ke=on);break}i&&Ke&&Fr.alternate===null&&s(Q,Ke),G=S(Fr,G,nt),qe===null?We=Fr:qe.sibling=Fr,qe=Fr,Ke=on}if(St.done)return a(Q,Ke),Ot&&Jr(Q,nt),We;if(Ke===null){for(;!St.done;nt++,St=te.next())St=Se(Q,St.value,Ee),St!==null&&(G=S(St,G,nt),qe===null?We=St:qe.sibling=St,qe=St);return Ot&&Jr(Q,nt),We}for(Ke=f(Q,Ke);!St.done;nt++,St=te.next())St=Fe(Ke,Q,nt,St.value,Ee),St!==null&&(i&&St.alternate!==null&&Ke.delete(St.key===null?nt:St.key),G=S(St,G,nt),qe===null?We=St:qe.sibling=St,qe=St);return i&&Ke.forEach(function(wS){return s(Q,wS)}),Ot&&Jr(Q,nt),We}function Gt(Q,G,te,Ee){if(typeof te=="object"&&te!==null&&te.type===N&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case z:e:{for(var We=te.key,qe=G;qe!==null;){if(qe.key===We){if(We=te.type,We===N){if(qe.tag===7){a(Q,qe.sibling),G=g(qe,te.props.children),G.return=Q,Q=G;break e}}else if(qe.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ee&&Tm(We)===qe.type){a(Q,qe.sibling),G=g(qe,te.props),G.ref=Jo(Q,qe,te),G.return=Q,Q=G;break e}a(Q,qe);break}else s(Q,qe);qe=qe.sibling}te.type===N?(G=as(te.props.children,Q.mode,Ee,te.key),G.return=Q,Q=G):(Ee=Kl(te.type,te.key,te.props,null,Q.mode,Ee),Ee.ref=Jo(Q,G,te),Ee.return=Q,Q=Ee)}return w(Q);case D:e:{for(qe=te.key;G!==null;){if(G.key===qe)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(Q,G.sibling),G=g(G,te.children||[]),G.return=Q,Q=G;break e}else{a(Q,G);break}else s(Q,G);G=G.sibling}G=Ch(te,Q.mode,Ee),G.return=Q,Q=G}return w(Q);case ee:return qe=te._init,Gt(Q,G,qe(te._payload),Ee)}if(F(te))return Be(Q,G,te,Ee);if(fe(te))return Ve(Q,G,te,Ee);Al(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,G!==null&&G.tag===6?(a(Q,G.sibling),G=g(G,te),G.return=Q,Q=G):(a(Q,G),G=Ah(te,Q.mode,Ee),G.return=Q,Q=G),w(Q)):a(Q,G)}return Gt}var Gs=Am(!0),Cm=Am(!1),Cl=Tr(null),Rl=null,Ws=null,Ff=null;function Of(){Ff=Ws=Rl=null}function kf(i){var s=Cl.current;It(Cl),i._currentValue=s}function zf(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function Xs(i,s){Rl=i,Ff=Ws=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Ln=!0),i.firstContext=null)}function ni(i){var s=i._currentValue;if(Ff!==i)if(i={context:i,memoizedValue:s,next:null},Ws===null){if(Rl===null)throw Error(t(308));Ws=i,Rl.dependencies={lanes:0,firstContext:i}}else Ws=Ws.next=i;return s}var es=null;function Bf(i){es===null?es=[i]:es.push(i)}function Rm(i,s,a,f){var g=s.interleaved;return g===null?(a.next=a,Bf(s)):(a.next=g.next,g.next=a),s.interleaved=a,ji(i,f)}function ji(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Rr=!1;function Hf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Yi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function br(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(xt&2)!==0){var g=f.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),f.pending=s,ji(i,a)}return g=f.interleaved,g===null?(s.next=s,Bf(f)):(s.next=g.next,g.next=s),f.interleaved=s,ji(i,a)}function bl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,ef(i,a)}}function Pm(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var g=null,S=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};S===null?g=S=w:S=S.next=w,a=a.next}while(a!==null);S===null?g=S=s:S=S.next=s}else g=S=s;a={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:S,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Pl(i,s,a,f){var g=i.updateQueue;Rr=!1;var S=g.firstBaseUpdate,w=g.lastBaseUpdate,I=g.shared.pending;if(I!==null){g.shared.pending=null;var H=I,le=H.next;H.next=null,w===null?S=le:w.next=le,w=H;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==w&&(I===null?xe.firstBaseUpdate=le:I.next=le,xe.lastBaseUpdate=H))}if(S!==null){var Se=g.baseState;w=0,xe=le=H=null,I=S;do{var ge=I.lane,Fe=I.eventTime;if((f&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Be=i,Ve=I;switch(ge=s,Fe=a,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){Se=Be.call(Fe,Se,ge);break e}Se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,ge=typeof Be=="function"?Be.call(Fe,Se,ge):Be,ge==null)break e;Se=ie({},Se,ge);break e;case 2:Rr=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,ge=g.effects,ge===null?g.effects=[I]:ge.push(I))}else Fe={eventTime:Fe,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(le=xe=Fe,H=Se):xe=xe.next=Fe,w|=ge;if(I=I.next,I===null){if(I=g.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,g.lastBaseUpdate=ge,g.shared.pending=null}}while(!0);if(xe===null&&(H=Se),g.baseState=H,g.firstBaseUpdate=le,g.lastBaseUpdate=xe,s=g.shared.interleaved,s!==null){g=s;do w|=g.lane,g=g.next;while(g!==s)}else S===null&&(g.shared.lanes=0);is|=w,i.lanes=w,i.memoizedState=Se}}function Lm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],g=f.callback;if(g!==null){if(f.callback=null,f=a,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var ea={},bi=Tr(ea),ta=Tr(ea),na=Tr(ea);function ts(i){if(i===ea)throw Error(t(174));return i}function Vf(i,s){switch(Pt(na,s),Pt(ta,i),Pt(bi,ea),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Pe(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Pe(s,i)}It(bi),Pt(bi,s)}function js(){It(bi),It(ta),It(na)}function Dm(i){ts(na.current);var s=ts(bi.current),a=Pe(s,i.type);s!==a&&(Pt(ta,i),Pt(bi,a))}function Gf(i){ta.current===i&&(It(bi),It(ta))}var Bt=Tr(0);function Ll(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Wf=[];function Xf(){for(var i=0;i<Wf.length;i++)Wf[i]._workInProgressVersionPrimary=null;Wf.length=0}var Dl=A.ReactCurrentDispatcher,jf=A.ReactCurrentBatchConfig,ns=0,Ht=null,Kt=null,rn=null,Nl=!1,ia=!1,ra=0,jy=0;function hn(){throw Error(t(321))}function Yf(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!hi(i[a],s[a]))return!1;return!0}function $f(i,s,a,f,g,S){if(ns=S,Ht=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Dl.current=i===null||i.memoizedState===null?Ky:Zy,i=a(f,g),ia){S=0;do{if(ia=!1,ra=0,25<=S)throw Error(t(301));S+=1,rn=Kt=null,s.updateQueue=null,Dl.current=Qy,i=a(f,g)}while(ia)}if(Dl.current=Fl,s=Kt!==null&&Kt.next!==null,ns=0,rn=Kt=Ht=null,Nl=!1,s)throw Error(t(300));return i}function qf(){var i=ra!==0;return ra=0,i}function Pi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Ht.memoizedState=rn=i:rn=rn.next=i,rn}function ii(){if(Kt===null){var i=Ht.alternate;i=i!==null?i.memoizedState:null}else i=Kt.next;var s=rn===null?Ht.memoizedState:rn.next;if(s!==null)rn=s,Kt=i;else{if(i===null)throw Error(t(310));Kt=i,i={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},rn===null?Ht.memoizedState=rn=i:rn=rn.next=i}return rn}function sa(i,s){return typeof s=="function"?s(i):s}function Kf(i){var s=ii(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=Kt,g=f.baseQueue,S=a.pending;if(S!==null){if(g!==null){var w=g.next;g.next=S.next,S.next=w}f.baseQueue=g=S,a.pending=null}if(g!==null){S=g.next,f=f.baseState;var I=w=null,H=null,le=S;do{var xe=le.lane;if((ns&xe)===xe)H!==null&&(H=H.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),f=le.hasEagerState?le.eagerState:i(f,le.action);else{var Se={lane:xe,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};H===null?(I=H=Se,w=f):H=H.next=Se,Ht.lanes|=xe,is|=xe}le=le.next}while(le!==null&&le!==S);H===null?w=f:H.next=I,hi(f,s.memoizedState)||(Ln=!0),s.memoizedState=f,s.baseState=w,s.baseQueue=H,a.lastRenderedState=f}if(i=a.interleaved,i!==null){g=i;do S=g.lane,Ht.lanes|=S,is|=S,g=g.next;while(g!==i)}else g===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Zf(i){var s=ii(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,g=a.pending,S=s.memoizedState;if(g!==null){a.pending=null;var w=g=g.next;do S=i(S,w.action),w=w.next;while(w!==g);hi(S,s.memoizedState)||(Ln=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),a.lastRenderedState=S}return[S,f]}function Nm(){}function Im(i,s){var a=Ht,f=ii(),g=s(),S=!hi(f.memoizedState,g);if(S&&(f.memoizedState=g,Ln=!0),f=f.queue,Qf(Om.bind(null,a,f,i),[i]),f.getSnapshot!==s||S||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,oa(9,Fm.bind(null,a,f,g,s),void 0,null),sn===null)throw Error(t(349));(ns&30)!==0||Um(a,s,g)}return g}function Um(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Fm(i,s,a,f){s.value=a,s.getSnapshot=f,km(s)&&zm(i)}function Om(i,s,a){return a(function(){km(s)&&zm(i)})}function km(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!hi(i,a)}catch{return!0}}function zm(i){var s=ji(i,1);s!==null&&_i(s,i,1,-1)}function Bm(i){var s=Pi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:i},s.queue=i,i=i.dispatch=qy.bind(null,Ht,i),[s.memoizedState,i]}function oa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function Hm(){return ii().memoizedState}function Il(i,s,a,f){var g=Pi();Ht.flags|=i,g.memoizedState=oa(1|s,a,void 0,f===void 0?null:f)}function Ul(i,s,a,f){var g=ii();f=f===void 0?null:f;var S=void 0;if(Kt!==null){var w=Kt.memoizedState;if(S=w.destroy,f!==null&&Yf(f,w.deps)){g.memoizedState=oa(s,a,S,f);return}}Ht.flags|=i,g.memoizedState=oa(1|s,a,S,f)}function Vm(i,s){return Il(8390656,8,i,s)}function Qf(i,s){return Ul(2048,8,i,s)}function Gm(i,s){return Ul(4,2,i,s)}function Wm(i,s){return Ul(4,4,i,s)}function Xm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function jm(i,s,a){return a=a!=null?a.concat([i]):null,Ul(4,4,Xm.bind(null,s,i),a)}function Jf(){}function Ym(i,s){var a=ii();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Yf(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function $m(i,s){var a=ii();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&Yf(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function qm(i,s,a){return(ns&21)===0?(i.baseState&&(i.baseState=!1,Ln=!0),i.memoizedState=a):(hi(a,s)||(a=il(),Ht.lanes|=a,is|=a,i.baseState=!0),s)}function Yy(i,s){var a=At;At=a!==0&&4>a?a:4,i(!0);var f=jf.transition;jf.transition={};try{i(!1),s()}finally{At=a,jf.transition=f}}function Km(){return ii().memoizedState}function $y(i,s,a){var f=Nr(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},Zm(i))Qm(s,a);else if(a=Rm(i,s,a,f),a!==null){var g=Mn();_i(a,i,f,g),Jm(a,s,f)}}function qy(i,s,a){var f=Nr(i),g={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zm(i))Qm(s,g);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var w=s.lastRenderedState,I=S(w,a);if(g.hasEagerState=!0,g.eagerState=I,hi(I,w)){var H=s.interleaved;H===null?(g.next=g,Bf(s)):(g.next=H.next,H.next=g),s.interleaved=g;return}}catch{}a=Rm(i,s,g,f),a!==null&&(g=Mn(),_i(a,i,f,g),Jm(a,s,f))}}function Zm(i){var s=i.alternate;return i===Ht||s!==null&&s===Ht}function Qm(i,s){ia=Nl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function Jm(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,ef(i,a)}}var Fl={readContext:ni,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},Ky={readContext:ni,useCallback:function(i,s){return Pi().memoizedState=[i,s===void 0?null:s],i},useContext:ni,useEffect:Vm,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Il(4194308,4,Xm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Il(4194308,4,i,s)},useInsertionEffect:function(i,s){return Il(4,2,i,s)},useMemo:function(i,s){var a=Pi();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Pi();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=$y.bind(null,Ht,i),[f.memoizedState,i]},useRef:function(i){var s=Pi();return i={current:i},s.memoizedState=i},useState:Bm,useDebugValue:Jf,useDeferredValue:function(i){return Pi().memoizedState=i},useTransition:function(){var i=Bm(!1),s=i[0];return i=Yy.bind(null,i[1]),Pi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Ht,g=Pi();if(Ot){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),sn===null)throw Error(t(349));(ns&30)!==0||Um(f,s,a)}g.memoizedState=a;var S={value:a,getSnapshot:s};return g.queue=S,Vm(Om.bind(null,f,S,i),[i]),f.flags|=2048,oa(9,Fm.bind(null,f,S,a,s),void 0,null),a},useId:function(){var i=Pi(),s=sn.identifierPrefix;if(Ot){var a=Xi,f=Wi;a=(f&~(1<<32-Tt(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=ra++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=jy++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},Zy={readContext:ni,useCallback:Ym,useContext:ni,useEffect:Qf,useImperativeHandle:jm,useInsertionEffect:Gm,useLayoutEffect:Wm,useMemo:$m,useReducer:Kf,useRef:Hm,useState:function(){return Kf(sa)},useDebugValue:Jf,useDeferredValue:function(i){var s=ii();return qm(s,Kt.memoizedState,i)},useTransition:function(){var i=Kf(sa)[0],s=ii().memoizedState;return[i,s]},useMutableSource:Nm,useSyncExternalStore:Im,useId:Km,unstable_isNewReconciler:!1},Qy={readContext:ni,useCallback:Ym,useContext:ni,useEffect:Qf,useImperativeHandle:jm,useInsertionEffect:Gm,useLayoutEffect:Wm,useMemo:$m,useReducer:Zf,useRef:Hm,useState:function(){return Zf(sa)},useDebugValue:Jf,useDeferredValue:function(i){var s=ii();return Kt===null?s.memoizedState=i:qm(s,Kt.memoizedState,i)},useTransition:function(){var i=Zf(sa)[0],s=ii().memoizedState;return[i,s]},useMutableSource:Nm,useSyncExternalStore:Im,useId:Km,unstable_isNewReconciler:!1};function pi(i,s){if(i&&i.defaultProps){s=ie({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function eh(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:ie({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Ol={isMounted:function(i){return(i=i._reactInternals)?Hi(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Mn(),g=Nr(i),S=Yi(f,g);S.payload=s,a!=null&&(S.callback=a),s=br(i,S,g),s!==null&&(_i(s,i,g,f),bl(s,i,g))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Mn(),g=Nr(i),S=Yi(f,g);S.tag=1,S.payload=s,a!=null&&(S.callback=a),s=br(i,S,g),s!==null&&(_i(s,i,g,f),bl(s,i,g))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Mn(),f=Nr(i),g=Yi(a,f);g.tag=2,s!=null&&(g.callback=s),s=br(i,g,f),s!==null&&(_i(s,i,f,a),bl(s,i,f))}};function eg(i,s,a,f,g,S,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,S,w):s.prototype&&s.prototype.isPureReactComponent?!jo(a,f)||!jo(g,S):!0}function tg(i,s,a){var f=!1,g=Ar,S=s.contextType;return typeof S=="object"&&S!==null?S=ni(S):(g=Pn(s)?Zr:fn.current,f=s.contextTypes,S=(f=f!=null)?zs(i,g):Ar),s=new s(a,S),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ol,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=S),s}function ng(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Ol.enqueueReplaceState(s,s.state,null)}function th(i,s,a,f){var g=i.stateNode;g.props=a,g.state=i.memoizedState,g.refs={},Hf(i);var S=s.contextType;typeof S=="object"&&S!==null?g.context=ni(S):(S=Pn(s)?Zr:fn.current,g.context=zs(i,S)),g.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(eh(i,s,S,a),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&Ol.enqueueReplaceState(g,g.state,null),Pl(i,a,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Ys(i,s){try{var a="",f=s;do a+=ue(f),f=f.return;while(f);var g=a}catch(S){g=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:s,stack:g,digest:null}}function nh(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function ih(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Jy=typeof WeakMap=="function"?WeakMap:Map;function ig(i,s,a){a=Yi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Wl||(Wl=!0,vh=f),ih(i,s)},a}function rg(i,s,a){a=Yi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=s.value;a.payload=function(){return f(g)},a.callback=function(){ih(i,s)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(a.callback=function(){ih(i,s),typeof f!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function sg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new Jy;var g=new Set;f.set(s,g)}else g=f.get(s),g===void 0&&(g=new Set,f.set(s,g));g.has(a)||(g.add(a),i=dS.bind(null,i,s,a),s.then(i,i))}function og(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function ag(i,s,a,f,g){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Yi(-1,1),s.tag=2,br(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var eS=A.ReactCurrentOwner,Ln=!1;function Sn(i,s,a,f){s.child=i===null?Cm(s,null,a,f):Gs(s,i.child,a,f)}function lg(i,s,a,f,g){a=a.render;var S=s.ref;return Xs(s,g),f=$f(i,s,a,f,S,g),a=qf(),i!==null&&!Ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,$i(i,s,g)):(Ot&&a&&Lf(s),s.flags|=1,Sn(i,s,f,g),s.child)}function ug(i,s,a,f,g){if(i===null){var S=a.type;return typeof S=="function"&&!Th(S)&&S.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=S,cg(i,s,S,f,g)):(i=Kl(a.type,null,f,s,s.mode,g),i.ref=s.ref,i.return=s,s.child=i)}if(S=i.child,(i.lanes&g)===0){var w=S.memoizedProps;if(a=a.compare,a=a!==null?a:jo,a(w,f)&&i.ref===s.ref)return $i(i,s,g)}return s.flags|=1,i=Ur(S,f),i.ref=s.ref,i.return=s,s.child=i}function cg(i,s,a,f,g){if(i!==null){var S=i.memoizedProps;if(jo(S,f)&&i.ref===s.ref)if(Ln=!1,s.pendingProps=f=S,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Ln=!0);else return s.lanes=i.lanes,$i(i,s,g)}return rh(i,s,a,f,g)}function fg(i,s,a){var f=s.pendingProps,g=f.children,S=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(qs,jn),jn|=a;else{if((a&1073741824)===0)return i=S!==null?S.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Pt(qs,jn),jn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=S!==null?S.baseLanes:a,Pt(qs,jn),jn|=f}else S!==null?(f=S.baseLanes|a,s.memoizedState=null):f=a,Pt(qs,jn),jn|=f;return Sn(i,s,g,a),s.child}function hg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function rh(i,s,a,f,g){var S=Pn(a)?Zr:fn.current;return S=zs(s,S),Xs(s,g),a=$f(i,s,a,f,S,g),f=qf(),i!==null&&!Ln?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~g,$i(i,s,g)):(Ot&&f&&Lf(s),s.flags|=1,Sn(i,s,a,g),s.child)}function dg(i,s,a,f,g){if(Pn(a)){var S=!0;Sl(s)}else S=!1;if(Xs(s,g),s.stateNode===null)zl(i,s),tg(s,a,f),th(s,a,f,g),f=!0;else if(i===null){var w=s.stateNode,I=s.memoizedProps;w.props=I;var H=w.context,le=a.contextType;typeof le=="object"&&le!==null?le=ni(le):(le=Pn(a)?Zr:fn.current,le=zs(s,le));var xe=a.getDerivedStateFromProps,Se=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==f||H!==le)&&ng(s,w,f,le),Rr=!1;var ge=s.memoizedState;w.state=ge,Pl(s,f,w,g),H=s.memoizedState,I!==f||ge!==H||bn.current||Rr?(typeof xe=="function"&&(eh(s,a,xe,f),H=s.memoizedState),(I=Rr||eg(s,a,I,f,ge,H,le))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=H),w.props=f,w.state=H,w.context=le,f=I):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{w=s.stateNode,bm(i,s),I=s.memoizedProps,le=s.type===s.elementType?I:pi(s.type,I),w.props=le,Se=s.pendingProps,ge=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=ni(H):(H=Pn(a)?Zr:fn.current,H=zs(s,H));var Fe=a.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Se||ge!==H)&&ng(s,w,f,H),Rr=!1,ge=s.memoizedState,w.state=ge,Pl(s,f,w,g);var Be=s.memoizedState;I!==Se||ge!==Be||bn.current||Rr?(typeof Fe=="function"&&(eh(s,a,Fe,f),Be=s.memoizedState),(le=Rr||eg(s,a,le,f,ge,Be,H)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,Be,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,Be,H)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Be),w.props=f,w.state=Be,w.context=H,f=le):(typeof w.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),f=!1)}return sh(i,s,a,f,S,g)}function sh(i,s,a,f,g,S){hg(i,s);var w=(s.flags&128)!==0;if(!f&&!w)return g&&vm(s,a,!1),$i(i,s,S);f=s.stateNode,eS.current=s;var I=w&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&w?(s.child=Gs(s,i.child,null,S),s.child=Gs(s,null,I,S)):Sn(i,s,I,S),s.memoizedState=f.state,g&&vm(s,a,!0),s.child}function pg(i){var s=i.stateNode;s.pendingContext?gm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&gm(i,s.context,!1),Vf(i,s.containerInfo)}function mg(i,s,a,f,g){return Vs(),Uf(g),s.flags|=256,Sn(i,s,a,f),s.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(i){return{baseLanes:i,cachePool:null,transitions:null}}function gg(i,s,a){var f=s.pendingProps,g=Bt.current,S=!1,w=(s.flags&128)!==0,I;if((I=w)||(I=i!==null&&i.memoizedState===null?!1:(g&2)!==0),I?(S=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Pt(Bt,g&1),i===null)return If(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=f.children,i=f.fallback,S?(f=s.mode,S=s.child,w={mode:"hidden",children:w},(f&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=w):S=Zl(w,f,0,null),i=as(i,f,a,null),S.return=s,i.return=s,S.sibling=i,s.child=S,s.child.memoizedState=ah(a),s.memoizedState=oh,i):lh(s,w));if(g=i.memoizedState,g!==null&&(I=g.dehydrated,I!==null))return tS(i,s,w,f,I,g,a);if(S){S=f.fallback,w=s.mode,g=i.child,I=g.sibling;var H={mode:"hidden",children:f.children};return(w&1)===0&&s.child!==g?(f=s.child,f.childLanes=0,f.pendingProps=H,s.deletions=null):(f=Ur(g,H),f.subtreeFlags=g.subtreeFlags&14680064),I!==null?S=Ur(I,S):(S=as(S,w,a,null),S.flags|=2),S.return=s,f.return=s,f.sibling=S,s.child=f,f=S,S=s.child,w=i.child.memoizedState,w=w===null?ah(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},S.memoizedState=w,S.childLanes=i.childLanes&~a,s.memoizedState=oh,f}return S=i.child,i=S.sibling,f=Ur(S,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function lh(i,s){return s=Zl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function kl(i,s,a,f){return f!==null&&Uf(f),Gs(s,i.child,null,a),i=lh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function tS(i,s,a,f,g,S,w){if(a)return s.flags&256?(s.flags&=-257,f=nh(Error(t(422))),kl(i,s,w,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(S=f.fallback,g=s.mode,f=Zl({mode:"visible",children:f.children},g,0,null),S=as(S,g,w,null),S.flags|=2,f.return=s,S.return=s,f.sibling=S,s.child=f,(s.mode&1)!==0&&Gs(s,i.child,null,w),s.child.memoizedState=ah(w),s.memoizedState=oh,S);if((s.mode&1)===0)return kl(i,s,w,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var I=f.dgst;return f=I,S=Error(t(419)),f=nh(S,f,void 0),kl(i,s,w,f)}if(I=(w&i.childLanes)!==0,Ln||I){if(f=sn,f!==null){switch(w&-w){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|w))!==0?0:g,g!==0&&g!==S.retryLane&&(S.retryLane=g,ji(i,g),_i(f,i,g,-1))}return wh(),f=nh(Error(t(421))),kl(i,s,w,f)}return g.data==="$?"?(s.flags|=128,s.child=i.child,s=pS.bind(null,i),g._reactRetry=s,null):(i=S.treeContext,Xn=wr(g.nextSibling),Wn=s,Ot=!0,di=null,i!==null&&(ei[ti++]=Wi,ei[ti++]=Xi,ei[ti++]=Qr,Wi=i.id,Xi=i.overflow,Qr=s),s=lh(s,f.children),s.flags|=4096,s)}function _g(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),zf(i.return,s,a)}function uh(i,s,a,f,g){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:g}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=f,S.tail=a,S.tailMode=g)}function vg(i,s,a){var f=s.pendingProps,g=f.revealOrder,S=f.tail;if(Sn(i,s,f.children,a),f=Bt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&_g(i,a,s);else if(i.tag===19)_g(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Pt(Bt,f),(s.mode&1)===0)s.memoizedState=null;else switch(g){case"forwards":for(a=s.child,g=null;a!==null;)i=a.alternate,i!==null&&Ll(i)===null&&(g=a),a=a.sibling;a=g,a===null?(g=s.child,s.child=null):(g=a.sibling,a.sibling=null),uh(s,!1,g,a,S);break;case"backwards":for(a=null,g=s.child,s.child=null;g!==null;){if(i=g.alternate,i!==null&&Ll(i)===null){s.child=g;break}i=g.sibling,g.sibling=a,a=g,g=i}uh(s,!0,a,null,S);break;case"together":uh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function zl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $i(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),is|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Ur(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Ur(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function nS(i,s,a){switch(s.tag){case 3:pg(s),Vs();break;case 5:Dm(s);break;case 1:Pn(s.type)&&Sl(s);break;case 4:Vf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,g=s.memoizedProps.value;Pt(Cl,f._currentValue),f._currentValue=g;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Pt(Bt,Bt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?gg(i,s,a):(Pt(Bt,Bt.current&1),i=$i(i,s,a),i!==null?i.sibling:null);Pt(Bt,Bt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return vg(i,s,a);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Pt(Bt,Bt.current),f)break;return null;case 22:case 23:return s.lanes=0,fg(i,s,a)}return $i(i,s,a)}var xg,ch,yg,Sg;xg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ch=function(){},yg=function(i,s,a,f){var g=i.memoizedProps;if(g!==f){i=s.stateNode,ts(bi.current);var S=null;switch(a){case"input":g=ht(i,g),f=ht(i,f),S=[];break;case"select":g=ie({},g,{value:void 0}),f=ie({},f,{value:void 0}),S=[];break;case"textarea":g=ce(i,g),f=ce(i,f),S=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=vl)}at(a,f);var w;a=null;for(le in g)if(!f.hasOwnProperty(le)&&g.hasOwnProperty(le)&&g[le]!=null)if(le==="style"){var I=g[le];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?S||(S=[]):(S=S||[]).push(le,null));for(le in f){var H=f[le];if(I=g?.[le],f.hasOwnProperty(le)&&H!==I&&(H!=null||I!=null))if(le==="style")if(I){for(w in I)!I.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&I[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(S||(S=[]),S.push(le,a)),a=H;else le==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(S=S||[]).push(le,H)):le==="children"?typeof H!="string"&&typeof H!="number"||(S=S||[]).push(le,""+H):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(H!=null&&le==="onScroll"&&Nt("scroll",i),S||I===H||(S=[])):(S=S||[]).push(le,H))}a&&(S=S||[]).push("style",a);var le=S;(s.updateQueue=le)&&(s.flags|=4)}},Sg=function(i,s,a,f){a!==f&&(s.flags|=4)};function aa(i,s){if(!Ot)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function dn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var g=i.child;g!==null;)a|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)a|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function iS(i,s,a){var f=s.pendingProps;switch(Df(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(s),null;case 1:return Pn(s.type)&&yl(),dn(s),null;case 3:return f=s.stateNode,js(),It(bn),It(fn),Xf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Tl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,di!==null&&(Sh(di),di=null))),ch(i,s),dn(s),null;case 5:Gf(s);var g=ts(na.current);if(a=s.type,i!==null&&s.stateNode!=null)yg(i,s,a,f,g),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return dn(s),null}if(i=ts(bi.current),Tl(s)){f=s.stateNode,a=s.type;var S=s.memoizedProps;switch(f[Ri]=s,f[Zo]=S,i=(s.mode&1)!==0,a){case"dialog":Nt("cancel",f),Nt("close",f);break;case"iframe":case"object":case"embed":Nt("load",f);break;case"video":case"audio":for(g=0;g<$o.length;g++)Nt($o[g],f);break;case"source":Nt("error",f);break;case"img":case"image":case"link":Nt("error",f),Nt("load",f);break;case"details":Nt("toggle",f);break;case"input":Mt(f,S),Nt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!S.multiple},Nt("invalid",f);break;case"textarea":pe(f,S),Nt("invalid",f)}at(a,S),g=null;for(var w in S)if(S.hasOwnProperty(w)){var I=S[w];w==="children"?typeof I=="string"?f.textContent!==I&&(S.suppressHydrationWarning!==!0&&_l(f.textContent,I,i),g=["children",I]):typeof I=="number"&&f.textContent!==""+I&&(S.suppressHydrationWarning!==!0&&_l(f.textContent,I,i),g=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Nt("scroll",f)}switch(a){case"input":ft(f),tt(f,S,!0);break;case"textarea":ft(f),me(f);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(f.onclick=vl)}f=g,s.updateQueue=f,f!==null&&(s.flags|=4)}else{w=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=$e(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=w.createElement(a,{is:f.is}):(i=w.createElement(a),a==="select"&&(w=i,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):i=w.createElementNS(i,a),i[Ri]=s,i[Zo]=f,xg(i,s,!1,!1),s.stateNode=i;e:{switch(w=Rt(a,f),a){case"dialog":Nt("cancel",i),Nt("close",i),g=f;break;case"iframe":case"object":case"embed":Nt("load",i),g=f;break;case"video":case"audio":for(g=0;g<$o.length;g++)Nt($o[g],i);g=f;break;case"source":Nt("error",i),g=f;break;case"img":case"image":case"link":Nt("error",i),Nt("load",i),g=f;break;case"details":Nt("toggle",i),g=f;break;case"input":Mt(i,f),g=ht(i,f),Nt("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=ie({},f,{value:void 0}),Nt("invalid",i);break;case"textarea":pe(i,f),g=ce(i,f),Nt("invalid",i);break;default:g=f}at(a,g),I=g;for(S in I)if(I.hasOwnProperty(S)){var H=I[S];S==="style"?ke(i,H):S==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&ot(i,H)):S==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&Me(i,H):typeof H=="number"&&Me(i,""+H):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(o.hasOwnProperty(S)?H!=null&&S==="onScroll"&&Nt("scroll",i):H!=null&&T(i,S,H,w))}switch(a){case"input":ft(i),tt(i,f,!1);break;case"textarea":ft(i),me(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ce(f.value));break;case"select":i.multiple=!!f.multiple,S=f.value,S!=null?b(i,!!f.multiple,S,!1):f.defaultValue!=null&&b(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=vl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return dn(s),null;case 6:if(i&&s.stateNode!=null)Sg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=ts(na.current),ts(bi.current),Tl(s)){if(f=s.stateNode,a=s.memoizedProps,f[Ri]=s,(S=f.nodeValue!==a)&&(i=Wn,i!==null))switch(i.tag){case 3:_l(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&_l(f.nodeValue,a,(i.mode&1)!==0)}S&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Ri]=s,s.stateNode=f}return dn(s),null;case 13:if(It(Bt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ot&&Xn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)wm(),Vs(),s.flags|=98560,S=!1;else if(S=Tl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Ri]=s}else Vs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;dn(s),S=!1}else di!==null&&(Sh(di),di=null),S=!0;if(!S)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Bt.current&1)!==0?Zt===0&&(Zt=3):wh())),s.updateQueue!==null&&(s.flags|=4),dn(s),null);case 4:return js(),ch(i,s),i===null&&qo(s.stateNode.containerInfo),dn(s),null;case 10:return kf(s.type._context),dn(s),null;case 17:return Pn(s.type)&&yl(),dn(s),null;case 19:if(It(Bt),S=s.memoizedState,S===null)return dn(s),null;if(f=(s.flags&128)!==0,w=S.rendering,w===null)if(f)aa(S,!1);else{if(Zt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Ll(i),w!==null){for(s.flags|=128,aa(S,!1),f=w.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)S=a,i=f,S.flags&=14680066,w=S.alternate,w===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=w.childLanes,S.lanes=w.lanes,S.child=w.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=w.memoizedProps,S.memoizedState=w.memoizedState,S.updateQueue=w.updateQueue,S.type=w.type,i=w.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Pt(Bt,Bt.current&1|2),s.child}i=i.sibling}S.tail!==null&&Re()>Ks&&(s.flags|=128,f=!0,aa(S,!1),s.lanes=4194304)}else{if(!f)if(i=Ll(w),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),aa(S,!0),S.tail===null&&S.tailMode==="hidden"&&!w.alternate&&!Ot)return dn(s),null}else 2*Re()-S.renderingStartTime>Ks&&a!==1073741824&&(s.flags|=128,f=!0,aa(S,!1),s.lanes=4194304);S.isBackwards?(w.sibling=s.child,s.child=w):(a=S.last,a!==null?a.sibling=w:s.child=w,S.last=w)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=Re(),s.sibling=null,a=Bt.current,Pt(Bt,f?a&1|2:a&1),s):(dn(s),null);case 22:case 23:return Eh(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(jn&1073741824)!==0&&(dn(s),s.subtreeFlags&6&&(s.flags|=8192)):dn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function rS(i,s){switch(Df(s),s.tag){case 1:return Pn(s.type)&&yl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return js(),It(bn),It(fn),Xf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Gf(s),null;case 13:if(It(Bt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Vs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return It(Bt),null;case 4:return js(),null;case 10:return kf(s.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var Bl=!1,pn=!1,sS=typeof WeakSet=="function"?WeakSet:Set,ze=null;function $s(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Vt(i,s,f)}else a.current=null}function fh(i,s,a){try{a()}catch(f){Vt(i,s,f)}}var Mg=!1;function oS(i,s){if(Ef=ol,i=em(),mf(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var g=f.anchorOffset,S=f.focusNode;f=f.focusOffset;try{a.nodeType,S.nodeType}catch{a=null;break e}var w=0,I=-1,H=-1,le=0,xe=0,Se=i,ge=null;t:for(;;){for(var Fe;Se!==a||g!==0&&Se.nodeType!==3||(I=w+g),Se!==S||f!==0&&Se.nodeType!==3||(H=w+f),Se.nodeType===3&&(w+=Se.nodeValue.length),(Fe=Se.firstChild)!==null;)ge=Se,Se=Fe;for(;;){if(Se===i)break t;if(ge===a&&++le===g&&(I=w),ge===S&&++xe===f&&(H=w),(Fe=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Fe}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:i,selectionRange:a},ol=!1,ze=s;ze!==null;)if(s=ze,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ze=i;else for(;ze!==null;){s=ze;try{var Be=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Gt=Be.memoizedState,Q=s.stateNode,G=Q.getSnapshotBeforeUpdate(s.elementType===s.type?Ve:pi(s.type,Ve),Gt);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var te=s.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Vt(s,s.return,Ee)}if(i=s.sibling,i!==null){i.return=s.return,ze=i;break}ze=s.return}return Be=Mg,Mg=!1,Be}function la(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var S=g.destroy;g.destroy=void 0,S!==void 0&&fh(s,a,S)}g=g.next}while(g!==f)}}function Hl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function hh(i){var s=i.ref;if(s!==null){var a=i.stateNode;i.tag,i=a,typeof s=="function"?s(i):s.current=i}}function Eg(i){var s=i.alternate;s!==null&&(i.alternate=null,Eg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ri],delete s[Zo],delete s[Rf],delete s[Vy],delete s[Gy])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function wg(i){return i.tag===5||i.tag===3||i.tag===4}function Tg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||wg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function dh(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=vl));else if(f!==4&&(i=i.child,i!==null))for(dh(i,s,a),i=i.sibling;i!==null;)dh(i,s,a),i=i.sibling}function ph(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(ph(i,s,a),i=i.sibling;i!==null;)ph(i,s,a),i=i.sibling}var ln=null,mi=!1;function Pr(i,s,a){for(a=a.child;a!==null;)Ag(i,s,a),a=a.sibling}function Ag(i,s,a){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(tn,a)}catch{}switch(a.tag){case 5:pn||$s(a,s);case 6:var f=ln,g=mi;ln=null,Pr(i,s,a),ln=f,mi=g,ln!==null&&(mi?(i=ln,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(mi?(i=ln,a=a.stateNode,i.nodeType===8?Cf(i.parentNode,a):i.nodeType===1&&Cf(i,a),Bo(i)):Cf(ln,a.stateNode));break;case 4:f=ln,g=mi,ln=a.stateNode.containerInfo,mi=!0,Pr(i,s,a),ln=f,mi=g;break;case 0:case 11:case 14:case 15:if(!pn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var S=g,w=S.destroy;S=S.tag,w!==void 0&&((S&2)!==0||(S&4)!==0)&&fh(a,s,w),g=g.next}while(g!==f)}Pr(i,s,a);break;case 1:if(!pn&&($s(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(I){Vt(a,s,I)}Pr(i,s,a);break;case 21:Pr(i,s,a);break;case 22:a.mode&1?(pn=(f=pn)||a.memoizedState!==null,Pr(i,s,a),pn=f):Pr(i,s,a);break;default:Pr(i,s,a)}}function Cg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new sS),s.forEach(function(f){var g=mS.bind(null,i,f);a.has(f)||(a.add(f),f.then(g,g))})}}function gi(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var g=a[f];try{var S=i,w=s,I=w;e:for(;I!==null;){switch(I.tag){case 5:ln=I.stateNode,mi=!1;break e;case 3:ln=I.stateNode.containerInfo,mi=!0;break e;case 4:ln=I.stateNode.containerInfo,mi=!0;break e}I=I.return}if(ln===null)throw Error(t(160));Ag(S,w,g),ln=null,mi=!1;var H=g.alternate;H!==null&&(H.return=null),g.return=null}catch(le){Vt(g,s,le)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Rg(s,i),s=s.sibling}function Rg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(gi(s,i),Li(i),f&4){try{la(3,i,i.return),Hl(3,i)}catch(Ve){Vt(i,i.return,Ve)}try{la(5,i,i.return)}catch(Ve){Vt(i,i.return,Ve)}}break;case 1:gi(s,i),Li(i),f&512&&a!==null&&$s(a,a.return);break;case 5:if(gi(s,i),Li(i),f&512&&a!==null&&$s(a,a.return),i.flags&32){var g=i.stateNode;try{Me(g,"")}catch(Ve){Vt(i,i.return,Ve)}}if(f&4&&(g=i.stateNode,g!=null)){var S=i.memoizedProps,w=a!==null?a.memoizedProps:S,I=i.type,H=i.updateQueue;if(i.updateQueue=null,H!==null)try{I==="input"&&S.type==="radio"&&S.name!=null&&Ye(g,S),Rt(I,w);var le=Rt(I,S);for(w=0;w<H.length;w+=2){var xe=H[w],Se=H[w+1];xe==="style"?ke(g,Se):xe==="dangerouslySetInnerHTML"?ot(g,Se):xe==="children"?Me(g,Se):T(g,xe,Se,le)}switch(I){case"input":Ut(g,S);break;case"textarea":ve(g,S);break;case"select":var ge=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!S.multiple;var Fe=S.value;Fe!=null?b(g,!!S.multiple,Fe,!1):ge!==!!S.multiple&&(S.defaultValue!=null?b(g,!!S.multiple,S.defaultValue,!0):b(g,!!S.multiple,S.multiple?[]:"",!1))}g[Zo]=S}catch(Ve){Vt(i,i.return,Ve)}}break;case 6:if(gi(s,i),Li(i),f&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,S=i.memoizedProps;try{g.nodeValue=S}catch(Ve){Vt(i,i.return,Ve)}}break;case 3:if(gi(s,i),Li(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{Bo(s.containerInfo)}catch(Ve){Vt(i,i.return,Ve)}break;case 4:gi(s,i),Li(i);break;case 13:gi(s,i),Li(i),g=i.child,g.flags&8192&&(S=g.memoizedState!==null,g.stateNode.isHidden=S,!S||g.alternate!==null&&g.alternate.memoizedState!==null||(_h=Re())),f&4&&Cg(i);break;case 22:if(xe=a!==null&&a.memoizedState!==null,i.mode&1?(pn=(le=pn)||xe,gi(s,i),pn=le):gi(s,i),Li(i),f&8192){if(le=i.memoizedState!==null,(i.stateNode.isHidden=le)&&!xe&&(i.mode&1)!==0)for(ze=i,xe=i.child;xe!==null;){for(Se=ze=xe;ze!==null;){switch(ge=ze,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:la(4,ge,ge.return);break;case 1:$s(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){f=ge,a=ge.return;try{s=f,Be.props=s.memoizedProps,Be.state=s.memoizedState,Be.componentWillUnmount()}catch(Ve){Vt(f,a,Ve)}}break;case 5:$s(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Lg(Se);continue}}Fe!==null?(Fe.return=ge,ze=Fe):Lg(Se)}xe=xe.sibling}e:for(xe=null,Se=i;;){if(Se.tag===5){if(xe===null){xe=Se;try{g=Se.stateNode,le?(S=g.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(I=Se.stateNode,H=Se.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=et("display",w))}catch(Ve){Vt(i,i.return,Ve)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=le?"":Se.memoizedProps}catch(Ve){Vt(i,i.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:gi(s,i),Li(i),f&4&&Cg(i);break;case 21:break;default:gi(s,i),Li(i)}}function Li(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(wg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(Me(g,""),f.flags&=-33);var S=Tg(i);ph(i,S,g);break;case 3:case 4:var w=f.stateNode.containerInfo,I=Tg(i);dh(i,I,w);break;default:throw Error(t(161))}}catch(H){Vt(i,i.return,H)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function aS(i,s,a){ze=i,bg(i)}function bg(i,s,a){for(var f=(i.mode&1)!==0;ze!==null;){var g=ze,S=g.child;if(g.tag===22&&f){var w=g.memoizedState!==null||Bl;if(!w){var I=g.alternate,H=I!==null&&I.memoizedState!==null||pn;I=Bl;var le=pn;if(Bl=w,(pn=H)&&!le)for(ze=g;ze!==null;)w=ze,H=w.child,w.tag===22&&w.memoizedState!==null?Dg(g):H!==null?(H.return=w,ze=H):Dg(g);for(;S!==null;)ze=S,bg(S),S=S.sibling;ze=g,Bl=I,pn=le}Pg(i)}else(g.subtreeFlags&8772)!==0&&S!==null?(S.return=g,ze=S):Pg(i)}}function Pg(i){for(;ze!==null;){var s=ze;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:pn||Hl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!pn)if(a===null)f.componentDidMount();else{var g=s.elementType===s.type?a.memoizedProps:pi(s.type,a.memoizedProps);f.componentDidUpdate(g,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&Lm(s,S,f);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Lm(s,w,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var le=s.alternate;if(le!==null){var xe=le.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&Bo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}pn||s.flags&512&&hh(s)}catch(ge){Vt(s,s.return,ge)}}if(s===i){ze=null;break}if(a=s.sibling,a!==null){a.return=s.return,ze=a;break}ze=s.return}}function Lg(i){for(;ze!==null;){var s=ze;if(s===i){ze=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ze=a;break}ze=s.return}}function Dg(i){for(;ze!==null;){var s=ze;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Hl(4,s)}catch(H){Vt(s,a,H)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var g=s.return;try{f.componentDidMount()}catch(H){Vt(s,g,H)}}var S=s.return;try{hh(s)}catch(H){Vt(s,S,H)}break;case 5:var w=s.return;try{hh(s)}catch(H){Vt(s,w,H)}}}catch(H){Vt(s,s.return,H)}if(s===i){ze=null;break}var I=s.sibling;if(I!==null){I.return=s.return,ze=I;break}ze=s.return}}var lS=Math.ceil,Vl=A.ReactCurrentDispatcher,mh=A.ReactCurrentOwner,ri=A.ReactCurrentBatchConfig,xt=0,sn=null,jt=null,un=0,jn=0,qs=Tr(0),Zt=0,ua=null,is=0,Gl=0,gh=0,ca=null,Dn=null,_h=0,Ks=1/0,qi=null,Wl=!1,vh=null,Lr=null,Xl=!1,Dr=null,jl=0,fa=0,xh=null,Yl=-1,$l=0;function Mn(){return(xt&6)!==0?Re():Yl!==-1?Yl:Yl=Re()}function Nr(i){return(i.mode&1)===0?1:(xt&2)!==0&&un!==0?un&-un:Xy.transition!==null?($l===0&&($l=il()),$l):(i=At,i!==0||(i=window.event,i=i===void 0?16:Ip(i.type)),i)}function _i(i,s,a,f){if(50<fa)throw fa=0,xh=null,Error(t(185));Uo(i,a,f),((xt&2)===0||i!==sn)&&(i===sn&&((xt&2)===0&&(Gl|=a),Zt===4&&Ir(i,un)),Nn(i,f),a===1&&xt===0&&(s.mode&1)===0&&(Ks=Re()+500,Ml&&Cr()))}function Nn(i,s){var a=i.callbackNode;Rn(i,s);var f=Vn(i,i===sn?un:0);if(f===0)a!==null&&Te(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&Te(a),s===1)i.tag===0?Wy(Ig.bind(null,i)):xm(Ig.bind(null,i)),By(function(){(xt&6)===0&&Cr()}),a=null;else{switch(Ap(f)){case 1:a=Qe;break;case 4:a=Xe;break;case 16:a=gt;break;case 536870912:a=Dt;break;default:a=gt}a=Vg(a,Ng.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Ng(i,s){if(Yl=-1,$l=0,(xt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Zs()&&i.callbackNode!==a)return null;var f=Vn(i,i===sn?un:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=ql(i,f);else{s=f;var g=xt;xt|=2;var S=Fg();(sn!==i||un!==s)&&(qi=null,Ks=Re()+500,ss(i,s));do try{fS();break}catch(I){Ug(i,I)}while(!0);Of(),Vl.current=S,xt=g,jt!==null?s=0:(sn=null,un=0,s=Zt)}if(s!==0){if(s===2&&(g=qr(i),g!==0&&(f=g,s=yh(i,g))),s===1)throw a=ua,ss(i,0),Ir(i,f),Nn(i,Re()),a;if(s===6)Ir(i,f);else{if(g=i.current.alternate,(f&30)===0&&!uS(g)&&(s=ql(i,f),s===2&&(S=qr(i),S!==0&&(f=S,s=yh(i,S))),s===1))throw a=ua,ss(i,0),Ir(i,f),Nn(i,Re()),a;switch(i.finishedWork=g,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:os(i,Dn,qi);break;case 3:if(Ir(i,f),(f&130023424)===f&&(s=_h+500-Re(),10<s)){if(Vn(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Mn(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Af(os.bind(null,i,Dn,qi),s);break}os(i,Dn,qi);break;case 4:if(Ir(i,f),(f&4194240)===f)break;for(s=i.eventTimes,g=-1;0<f;){var w=31-Tt(f);S=1<<w,w=s[w],w>g&&(g=w),f&=~S}if(f=g,f=Re()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*lS(f/1960))-f,10<f){i.timeoutHandle=Af(os.bind(null,i,Dn,qi),f);break}os(i,Dn,qi);break;case 5:os(i,Dn,qi);break;default:throw Error(t(329))}}}return Nn(i,Re()),i.callbackNode===a?Ng.bind(null,i):null}function yh(i,s){var a=ca;return i.current.memoizedState.isDehydrated&&(ss(i,s).flags|=256),i=ql(i,s),i!==2&&(s=Dn,Dn=a,s!==null&&Sh(s)),i}function Sh(i){Dn===null?Dn=i:Dn.push.apply(Dn,i)}function uS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var g=a[f],S=g.getSnapshot;g=g.value;try{if(!hi(S(),g))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ir(i,s){for(s&=~gh,s&=~Gl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Tt(s),f=1<<a;i[a]=-1,s&=~f}}function Ig(i){if((xt&6)!==0)throw Error(t(327));Zs();var s=Vn(i,0);if((s&1)===0)return Nn(i,Re()),null;var a=ql(i,s);if(i.tag!==0&&a===2){var f=qr(i);f!==0&&(s=f,a=yh(i,f))}if(a===1)throw a=ua,ss(i,0),Ir(i,s),Nn(i,Re()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,os(i,Dn,qi),Nn(i,Re()),null}function Mh(i,s){var a=xt;xt|=1;try{return i(s)}finally{xt=a,xt===0&&(Ks=Re()+500,Ml&&Cr())}}function rs(i){Dr!==null&&Dr.tag===0&&(xt&6)===0&&Zs();var s=xt;xt|=1;var a=ri.transition,f=At;try{if(ri.transition=null,At=1,i)return i()}finally{At=f,ri.transition=a,xt=s,(xt&6)===0&&Cr()}}function Eh(){jn=qs.current,It(qs)}function ss(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,zy(a)),jt!==null)for(a=jt.return;a!==null;){var f=a;switch(Df(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&yl();break;case 3:js(),It(bn),It(fn),Xf();break;case 5:Gf(f);break;case 4:js();break;case 13:It(Bt);break;case 19:It(Bt);break;case 10:kf(f.type._context);break;case 22:case 23:Eh()}a=a.return}if(sn=i,jt=i=Ur(i.current,null),un=jn=s,Zt=0,ua=null,gh=Gl=is=0,Dn=ca=null,es!==null){for(s=0;s<es.length;s++)if(a=es[s],f=a.interleaved,f!==null){a.interleaved=null;var g=f.next,S=a.pending;if(S!==null){var w=S.next;S.next=g,f.next=w}a.pending=f}es=null}return i}function Ug(i,s){do{var a=jt;try{if(Of(),Dl.current=Fl,Nl){for(var f=Ht.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Nl=!1}if(ns=0,rn=Kt=Ht=null,ia=!1,ra=0,mh.current=null,a===null||a.return===null){Zt=1,ua=s,jt=null;break}e:{var S=i,w=a.return,I=a,H=s;if(s=un,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var le=H,xe=I,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=og(w);if(Fe!==null){Fe.flags&=-257,ag(Fe,w,I,S,s),Fe.mode&1&&sg(S,le,s),s=Fe,H=le;var Be=s.updateQueue;if(Be===null){var Ve=new Set;Ve.add(H),s.updateQueue=Ve}else Be.add(H);break e}else{if((s&1)===0){sg(S,le,s),wh();break e}H=Error(t(426))}}else if(Ot&&I.mode&1){var Gt=og(w);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),ag(Gt,w,I,S,s),Uf(Ys(H,I));break e}}S=H=Ys(H,I),Zt!==4&&(Zt=2),ca===null?ca=[S]:ca.push(S),S=w;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var Q=ig(S,H,s);Pm(S,Q);break e;case 1:I=H;var G=S.type,te=S.stateNode;if((S.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Lr===null||!Lr.has(te)))){S.flags|=65536,s&=-s,S.lanes|=s;var Ee=rg(S,I,s);Pm(S,Ee);break e}}S=S.return}while(S!==null)}kg(a)}catch(We){s=We,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function Fg(){var i=Vl.current;return Vl.current=Fl,i===null?Fl:i}function wh(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),sn===null||(is&268435455)===0&&(Gl&268435455)===0||Ir(sn,un)}function ql(i,s){var a=xt;xt|=2;var f=Fg();(sn!==i||un!==s)&&(qi=null,ss(i,s));do try{cS();break}catch(g){Ug(i,g)}while(!0);if(Of(),xt=a,Vl.current=f,jt!==null)throw Error(t(261));return sn=null,un=0,Zt}function cS(){for(;jt!==null;)Og(jt)}function fS(){for(;jt!==null&&!Ue();)Og(jt)}function Og(i){var s=Hg(i.alternate,i,jn);i.memoizedProps=i.pendingProps,s===null?kg(i):jt=s,mh.current=null}function kg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=iS(a,s,jn),a!==null){jt=a;return}}else{if(a=rS(a,s),a!==null){a.flags&=32767,jt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Zt=6,jt=null;return}}if(s=s.sibling,s!==null){jt=s;return}jt=s=i}while(s!==null);Zt===0&&(Zt=5)}function os(i,s,a){var f=At,g=ri.transition;try{ri.transition=null,At=1,hS(i,s,a,f)}finally{ri.transition=g,At=f}return null}function hS(i,s,a,f){do Zs();while(Dr!==null);if((xt&6)!==0)throw Error(t(327));a=i.finishedWork;var g=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=a.lanes|a.childLanes;if(jx(i,S),i===sn&&(jt=sn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xl||(Xl=!0,Vg(gt,function(){return Zs(),null})),S=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||S){S=ri.transition,ri.transition=null;var w=At;At=1;var I=xt;xt|=4,mh.current=null,oS(i,a),Rg(a,i),Dy(wf),ol=!!Ef,wf=Ef=null,i.current=a,aS(a),He(),xt=I,At=w,ri.transition=S}else i.current=a;if(Xl&&(Xl=!1,Dr=i,jl=g),S=i.pendingLanes,S===0&&(Lr=null),je(a.stateNode),Nn(i,Re()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)g=s[a],f(g.value,{componentStack:g.stack,digest:g.digest});if(Wl)throw Wl=!1,i=vh,vh=null,i;return(jl&1)!==0&&i.tag!==0&&Zs(),S=i.pendingLanes,(S&1)!==0?i===xh?fa++:(fa=0,xh=i):fa=0,Cr(),null}function Zs(){if(Dr!==null){var i=Ap(jl),s=ri.transition,a=At;try{if(ri.transition=null,At=16>i?16:i,Dr===null)var f=!1;else{if(i=Dr,Dr=null,jl=0,(xt&6)!==0)throw Error(t(331));var g=xt;for(xt|=4,ze=i.current;ze!==null;){var S=ze,w=S.child;if((ze.flags&16)!==0){var I=S.deletions;if(I!==null){for(var H=0;H<I.length;H++){var le=I[H];for(ze=le;ze!==null;){var xe=ze;switch(xe.tag){case 0:case 11:case 15:la(8,xe,S)}var Se=xe.child;if(Se!==null)Se.return=xe,ze=Se;else for(;ze!==null;){xe=ze;var ge=xe.sibling,Fe=xe.return;if(Eg(xe),xe===le){ze=null;break}if(ge!==null){ge.return=Fe,ze=ge;break}ze=Fe}}}var Be=S.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Gt=Ve.sibling;Ve.sibling=null,Ve=Gt}while(Ve!==null)}}ze=S}}if((S.subtreeFlags&2064)!==0&&w!==null)w.return=S,ze=w;else e:for(;ze!==null;){if(S=ze,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:la(9,S,S.return)}var Q=S.sibling;if(Q!==null){Q.return=S.return,ze=Q;break e}ze=S.return}}var G=i.current;for(ze=G;ze!==null;){w=ze;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,ze=te;else e:for(w=G;ze!==null;){if(I=ze,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Hl(9,I)}}catch(We){Vt(I,I.return,We)}if(I===w){ze=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,ze=Ee;break e}ze=I.return}}if(xt=g,Cr(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(tn,i)}catch{}f=!0}return f}finally{At=a,ri.transition=s}}return!1}function zg(i,s,a){s=Ys(a,s),s=ig(i,s,1),i=br(i,s,1),s=Mn(),i!==null&&(Uo(i,1,s),Nn(i,s))}function Vt(i,s,a){if(i.tag===3)zg(i,i,a);else for(;s!==null;){if(s.tag===3){zg(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Lr===null||!Lr.has(f))){i=Ys(a,i),i=rg(s,i,1),s=br(s,i,1),i=Mn(),s!==null&&(Uo(s,1,i),Nn(s,i));break}}s=s.return}}function dS(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Mn(),i.pingedLanes|=i.suspendedLanes&a,sn===i&&(un&a)===a&&(Zt===4||Zt===3&&(un&130023424)===un&&500>Re()-_h?ss(i,0):gh|=a),Nn(i,s)}function Bg(i,s){s===0&&((i.mode&1)===0?s=1:(s=_r,_r<<=1,(_r&130023424)===0&&(_r=4194304)));var a=Mn();i=ji(i,s),i!==null&&(Uo(i,s,a),Nn(i,a))}function pS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Bg(i,a)}function mS(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(a=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Bg(i,a)}var Hg;Hg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||bn.current)Ln=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Ln=!1,nS(i,s,a);Ln=(i.flags&131072)!==0}else Ln=!1,Ot&&(s.flags&1048576)!==0&&ym(s,wl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;zl(i,s),i=s.pendingProps;var g=zs(s,fn.current);Xs(s,a),g=$f(null,s,f,i,g,a);var S=qf();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Pn(f)?(S=!0,Sl(s)):S=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Hf(s),g.updater=Ol,s.stateNode=g,g._reactInternals=s,th(s,f,i,a),s=sh(null,s,f,!0,S,a)):(s.tag=0,Ot&&S&&Lf(s),Sn(null,s,g,a),s=s.child),s;case 16:f=s.elementType;e:{switch(zl(i,s),i=s.pendingProps,g=f._init,f=g(f._payload),s.type=f,g=s.tag=_S(f),i=pi(f,i),g){case 0:s=rh(null,s,f,i,a);break e;case 1:s=dg(null,s,f,i,a);break e;case 11:s=lg(null,s,f,i,a);break e;case 14:s=ug(null,s,f,pi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:pi(f,g),rh(i,s,f,g,a);case 1:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:pi(f,g),dg(i,s,f,g,a);case 3:e:{if(pg(s),i===null)throw Error(t(387));f=s.pendingProps,S=s.memoizedState,g=S.element,bm(i,s),Pl(s,f,null,a);var w=s.memoizedState;if(f=w.element,S.isDehydrated)if(S={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){g=Ys(Error(t(423)),s),s=mg(i,s,f,a,g);break e}else if(f!==g){g=Ys(Error(t(424)),s),s=mg(i,s,f,a,g);break e}else for(Xn=wr(s.stateNode.containerInfo.firstChild),Wn=s,Ot=!0,di=null,a=Cm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),f===g){s=$i(i,s,a);break e}Sn(i,s,f,a)}s=s.child}return s;case 5:return Dm(s),i===null&&If(s),f=s.type,g=s.pendingProps,S=i!==null?i.memoizedProps:null,w=g.children,Tf(f,g)?w=null:S!==null&&Tf(f,S)&&(s.flags|=32),hg(i,s),Sn(i,s,w,a),s.child;case 6:return i===null&&If(s),null;case 13:return gg(i,s,a);case 4:return Vf(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Gs(s,null,f,a):Sn(i,s,f,a),s.child;case 11:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:pi(f,g),lg(i,s,f,g,a);case 7:return Sn(i,s,s.pendingProps,a),s.child;case 8:return Sn(i,s,s.pendingProps.children,a),s.child;case 12:return Sn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,g=s.pendingProps,S=s.memoizedProps,w=g.value,Pt(Cl,f._currentValue),f._currentValue=w,S!==null)if(hi(S.value,w)){if(S.children===g.children&&!bn.current){s=$i(i,s,a);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var I=S.dependencies;if(I!==null){w=S.child;for(var H=I.firstContext;H!==null;){if(H.context===f){if(S.tag===1){H=Yi(-1,a&-a),H.tag=2;var le=S.updateQueue;if(le!==null){le=le.shared;var xe=le.pending;xe===null?H.next=H:(H.next=xe.next,xe.next=H),le.pending=H}}S.lanes|=a,H=S.alternate,H!==null&&(H.lanes|=a),zf(S.return,a,s),I.lanes|=a;break}H=H.next}}else if(S.tag===10)w=S.type===s.type?null:S.child;else if(S.tag===18){if(w=S.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),zf(w,a,s),w=S.sibling}else w=S.child;if(w!==null)w.return=S;else for(w=S;w!==null;){if(w===s){w=null;break}if(S=w.sibling,S!==null){S.return=w.return,w=S;break}w=w.return}S=w}Sn(i,s,g.children,a),s=s.child}return s;case 9:return g=s.type,f=s.pendingProps.children,Xs(s,a),g=ni(g),f=f(g),s.flags|=1,Sn(i,s,f,a),s.child;case 14:return f=s.type,g=pi(f,s.pendingProps),g=pi(f.type,g),ug(i,s,f,g,a);case 15:return cg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,g=s.pendingProps,g=s.elementType===f?g:pi(f,g),zl(i,s),s.tag=1,Pn(f)?(i=!0,Sl(s)):i=!1,Xs(s,a),tg(s,f,g),th(s,f,g,a),sh(null,s,f,!0,i,a);case 19:return vg(i,s,a);case 22:return fg(i,s,a)}throw Error(t(156,s.tag))};function Vg(i,s){return Z(i,s)}function gS(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(i,s,a,f){return new gS(i,s,a,f)}function Th(i){return i=i.prototype,!(!i||!i.isReactComponent)}function _S(i){if(typeof i=="function")return Th(i)?1:0;if(i!=null){if(i=i.$$typeof,i===V)return 11;if(i===J)return 14}return 2}function Ur(i,s){var a=i.alternate;return a===null?(a=si(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Kl(i,s,a,f,g,S){var w=2;if(f=i,typeof i=="function")Th(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case N:return as(a.children,g,S,s);case W:w=8,g|=8;break;case L:return i=si(12,a,s,g|2),i.elementType=L,i.lanes=S,i;case q:return i=si(13,a,s,g),i.elementType=q,i.lanes=S,i;case X:return i=si(19,a,s,g),i.elementType=X,i.lanes=S,i;case re:return Zl(a,g,S,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:w=10;break e;case U:w=9;break e;case V:w=11;break e;case J:w=14;break e;case ee:w=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=si(w,a,s,g),s.elementType=i,s.type=f,s.lanes=S,s}function as(i,s,a,f){return i=si(7,i,f,s),i.lanes=a,i}function Zl(i,s,a,f){return i=si(22,i,f,s),i.elementType=re,i.lanes=a,i.stateNode={isHidden:!1},i}function Ah(i,s,a){return i=si(6,i,null,s),i.lanes=a,i}function Ch(i,s,a){return s=si(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function vS(i,s,a,f,g){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bs(0),this.expirationTimes=bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Rh(i,s,a,f,g,S,w,I,H){return i=new vS(i,s,a,I,H),s===1?(s=1,S===!0&&(s|=8)):s=0,S=si(3,null,null,s),i.current=S,S.stateNode=i,S.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(S),i}function xS(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Gg(i){if(!i)return Ar;i=i._reactInternals;e:{if(Hi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Pn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Pn(a))return _m(i,a,s)}return s}function Wg(i,s,a,f,g,S,w,I,H){return i=Rh(a,f,!0,i,g,S,w,I,H),i.context=Gg(null),a=i.current,f=Mn(),g=Nr(a),S=Yi(f,g),S.callback=s??null,br(a,S,g),i.current.lanes=g,Uo(i,g,f),Nn(i,f),i}function Ql(i,s,a,f){var g=s.current,S=Mn(),w=Nr(g);return a=Gg(a),s.context===null?s.context=a:s.pendingContext=a,s=Yi(S,w),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=br(g,s,w),i!==null&&(_i(i,g,w,S),bl(i,g,w)),w}function Jl(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function Xg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function bh(i,s){Xg(i,s),(i=i.alternate)&&Xg(i,s)}function yS(){return null}var jg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Ph(i){this._internalRoot=i}eu.prototype.render=Ph.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Ql(i,s,null,null)},eu.prototype.unmount=Ph.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;rs(function(){Ql(null,i,null,null)}),s[Vi]=null}};function eu(i){this._internalRoot=i}eu.prototype.unstable_scheduleHydration=function(i){if(i){var s=bp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<Sr.length&&s!==0&&s<Sr[a].priority;a++);Sr.splice(a,0,i),a===0&&Dp(i)}};function Lh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function tu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function SS(i,s,a,f,g){if(g){if(typeof f=="function"){var S=f;f=function(){var le=Jl(w);S.call(le)}}var w=Wg(s,f,i,0,null,!1,!1,"",Yg);return i._reactRootContainer=w,i[Vi]=w.current,qo(i.nodeType===8?i.parentNode:i),rs(),w}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var I=f;f=function(){var le=Jl(H);I.call(le)}}var H=Rh(i,0,!1,null,null,!1,!1,"",Yg);return i._reactRootContainer=H,i[Vi]=H.current,qo(i.nodeType===8?i.parentNode:i),rs(function(){Ql(s,H,a,f)}),H}function nu(i,s,a,f,g){var S=a._reactRootContainer;if(S){var w=S;if(typeof g=="function"){var I=g;g=function(){var H=Jl(w);I.call(H)}}Ql(s,w,i,g)}else w=SS(a,s,i,g,f);return Jl(w)}Cp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=bt(s.pendingLanes);a!==0&&(ef(s,a|1),Nn(s,Re()),(xt&6)===0&&(Ks=Re()+500,Cr()))}break;case 13:rs(function(){var f=ji(i,1);if(f!==null){var g=Mn();_i(f,i,1,g)}}),bh(i,1)}},tf=function(i){if(i.tag===13){var s=ji(i,134217728);if(s!==null){var a=Mn();_i(s,i,134217728,a)}bh(i,134217728)}},Rp=function(i){if(i.tag===13){var s=Nr(i),a=ji(i,s);if(a!==null){var f=Mn();_i(a,i,s,f)}bh(i,s)}},bp=function(){return At},Pp=function(i,s){var a=At;try{return At=i,s()}finally{At=a}},he=function(i,s,a){switch(s){case"input":if(Ut(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var g=xl(f);if(!g)throw Error(t(90));k(f),Ut(f,g)}}}break;case"textarea":ve(i,a);break;case"select":s=a.value,s!=null&&b(i,!!a.multiple,s,!1)}},Xt=Mh,vt=rs;var MS={usingClientEntryPoint:!1,Events:[Qo,Os,xl,mt,zt,Mh]},ha={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ES={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=se(i),i===null?null:i.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||yS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{tn=iu.inject(ES),lt=iu}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MS,In.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(s))throw Error(t(200));return xS(i,s,null,a)},In.createRoot=function(i,s){if(!Lh(i))throw Error(t(299));var a=!1,f="",g=jg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=Rh(i,1,!1,null,null,a,!1,f,g),i[Vi]=s.current,qo(i.nodeType===8?i.parentNode:i),new Ph(s)},In.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=se(s),i=i===null?null:i.stateNode,i},In.flushSync=function(i){return rs(i)},In.hydrate=function(i,s,a){if(!tu(s))throw Error(t(200));return nu(null,i,s,!0,a)},In.hydrateRoot=function(i,s,a){if(!Lh(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,g=!1,S="",w=jg;if(a!=null&&(a.unstable_strictMode===!0&&(g=!0),a.identifierPrefix!==void 0&&(S=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Wg(s,null,i,1,a??null,g,!1,S,w),i[Vi]=s.current,qo(i),f)for(i=0;i<f.length;i++)a=f[i],g=a._getVersion,g=g(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,g]:s.mutableSourceEagerHydrationData.push(a,g);return new eu(s)},In.render=function(i,s,a){if(!tu(s))throw Error(t(200));return nu(null,i,s,!1,a)},In.unmountComponentAtNode=function(i){if(!tu(i))throw Error(t(40));return i._reactRootContainer?(rs(function(){nu(null,null,i,!1,function(){i._reactRootContainer=null,i[Vi]=null})}),!0):!1},In.unstable_batchedUpdates=Mh,In.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!tu(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return nu(i,s,a,!1,f)},In.version="18.3.1-next-f1338f8080-20240426",In}var t_;function NS(){if(t_)return Ih.exports;t_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ih.exports=DS(),Ih.exports}var n_;function IS(){if(n_)return ru;n_=1;var n=NS();return ru.createRoot=n.createRoot,ru.hydrateRoot=n.hydrateRoot,ru}var US=IS();const Ic="168",xs={ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G0=0,gd=1,W0=2,zd=1,X0=2,Di=3,lr=0,xn=1,Ni=2,or=0,Wr=1,Gu=2,_d=3,vd=4,j0=5,Gr=100,Y0=101,$0=102,q0=103,K0=104,Z0=200,Q0=201,J0=202,ev=203,Wu=204,Xu=205,tv=206,nv=207,iv=208,rv=209,sv=210,ov=211,av=212,lv=213,uv=214,cv=0,fv=1,hv=2,Ua=3,dv=4,pv=5,mv=6,gv=7,Uc=0,_v=1,vv=2,ar=0,xv=1,yv=2,Sv=3,Mv=4,Ev=5,wv=6,Tv=7,Bd=300,Es=301,ws=302,ju=303,Yu=304,ja=306,Fa=1e3,ir=1001,$u=1002,An=1003,Av=1004,Ma=1005,Kn=1006,Ou=1007,rr=1008,Oi=1009,Hd=1010,Vd=1011,Eo=1012,Fc=1013,Xr=1014,Ii=1015,Ro=1016,Oc=1017,kc=1018,Ts=1020,Gd=35902,Wd=1021,Xd=1022,ui=1023,jd=1024,Yd=1025,ys=1026,As=1027,$d=1028,zc=1029,qd=1030,Bc=1031,Hc=1033,Ca=33776,Ra=33777,ba=33778,Pa=33779,qu=35840,Ku=35841,Zu=35842,Qu=35843,Ju=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,sc=37811,oc=37812,ac=37813,lc=37814,uc=37815,cc=37816,fc=37817,hc=37818,dc=37819,pc=37820,mc=37821,La=36492,gc=36494,_c=36495,Kd=36283,vc=36284,xc=36285,yc=36286,Cv=3200,Rv=3201,Vc=0,bv=1,Ei="",li="srgb",fr="srgb-linear",Gc="display-p3",Ya="display-p3-linear",Oa="linear",Lt="srgb",ka="rec709",za="p3",ps=7680,xd=519,Pv=512,Lv=513,Dv=514,Zd=515,Nv=516,Iv=517,Uv=518,Fv=519,yd=35044,Sd="300 es",Ui=2e3,Ba=2001;class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let i_=1234567;const Da=Math.PI/180,Ha=180/Math.PI;function bo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function vn(n,e,t){return Math.max(e,Math.min(t,n))}function Qd(n,e){return(n%e+e)%e}function FS(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function OS(n,e,t){return n!==e?(t-n)/(e-n):0}function Na(n,e,t){return(1-t)*n+t*e}function kS(n,e,t,r){return Na(n,e,1-Math.exp(-t*r))}function zS(n,e=1){return e-Math.abs(Qd(n,e*2)-e)}function BS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function HS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function VS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function GS(n,e){return n+Math.random()*(e-n)}function WS(n){return n*(.5-Math.random())}function XS(n){n!==void 0&&(i_=n);let e=i_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jS(n){return n*Da}function YS(n){return n*Ha}function $S(n){return(n&n-1)===0&&n!==0}function qS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function KS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ZS(n,e,t,r,o){const l=Math.cos,u=Math.sin,c=l(t/2),h=u(t/2),d=l((e+r)/2),m=u((e+r)/2),_=l((e-r)/2),p=u((e-r)/2),v=l((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":n.set(c*m,h*_,h*p,c*d);break;case"YZY":n.set(h*p,c*m,h*_,c*d);break;case"ZXZ":n.set(h*_,h*p,c*m,c*d);break;case"XZX":n.set(c*m,h*E,h*v,c*d);break;case"YXY":n.set(h*v,c*m,h*E,c*d);break;case"ZYZ":n.set(h*E,h*v,c*m,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function go(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wc={DEG2RAD:Da,RAD2DEG:Ha,generateUUID:bo,clamp:vn,euclideanModulo:Qd,mapLinear:FS,inverseLerp:OS,lerp:Na,damp:kS,pingpong:zS,smoothstep:BS,smootherstep:HS,randInt:VS,randFloat:GS,randFloatSpread:WS,seededRandom:XS,degToRad:jS,radToDeg:YS,isPowerOfTwo:$S,ceilPowerOfTwo:qS,floorPowerOfTwo:KS,setQuaternionFromProperEuler:ZS,normalize:En,denormalize:go};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,r,o,l,u,c,h,d){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,h,d)}set(e,t,r,o,l,u,c,h,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=l,m[5]=h,m[6]=r,m[7]=u,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],h=r[6],d=r[1],m=r[4],_=r[7],p=r[2],v=r[5],E=r[8],M=o[0],x=o[3],y=o[6],C=o[1],T=o[4],A=o[7],z=o[2],D=o[5],N=o[8];return l[0]=u*M+c*C+h*z,l[3]=u*x+c*T+h*D,l[6]=u*y+c*A+h*N,l[1]=d*M+m*C+_*z,l[4]=d*x+m*T+_*D,l[7]=d*y+m*A+_*N,l[2]=p*M+v*C+E*z,l[5]=p*x+v*T+E*D,l[8]=p*y+v*A+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],m=e[8];return t*u*m-t*c*d-r*l*m+r*c*h+o*l*d-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],m=e[8],_=m*u-c*d,p=c*h-m*l,v=d*l-u*h,E=t*_+r*p+o*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(o*d-m*r)*M,e[2]=(c*r-o*u)*M,e[3]=p*M,e[4]=(m*t-o*h)*M,e[5]=(o*l-c*t)*M,e[6]=v*M,e[7]=(r*h-d*t)*M,e[8]=(u*t-r*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const h=Math.cos(l),d=Math.sin(l);return this.set(r*h,r*d,-r*(h*u+d*c)+u+e,-o*d,o*h,-o*(-d*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oh=new ct;function Ov(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kv(){const n=Va("canvas");return n.style.display="block",n}const r_={};function Ia(n){n in r_||(r_[n]=!0,console.warn(n))}function QS(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const s_=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),o_=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pa={[fr]:{transfer:Oa,primaries:ka,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[li]:{transfer:Lt,primaries:ka,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ya]:{transfer:Oa,primaries:za,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(o_),fromReference:n=>n.applyMatrix3(s_)},[Gc]:{transfer:Lt,primaries:za,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(o_),fromReference:n=>n.applyMatrix3(s_).convertLinearToSRGB()}},JS=new Set([fr,Ya]),wt={enabled:!0,_workingColorSpace:fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!JS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=pa[e].toReference,o=pa[t].fromReference;return o(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return pa[n].primaries},getTransfer:function(n){return n===Ei?Oa:pa[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(pa[e].luminanceCoefficients)}};function So(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qs;class zv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=Va("canvas")),Qs.width=e.width,Qs.height=e.height;const r=Qs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=So(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(So(t[r]/255)*255):t[r]=So(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(zh(o[u].image)):l.push(zh(o[u]))}else l=zh(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tM=0;class yn extends Yr{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,r=ir,o=ir,l=Kn,u=rr,c=ui,h=Oi,d=yn.DEFAULT_ANISOTROPY,m=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=bo(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case $u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case $u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Bd;yn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,d=h[0],m=h[4],_=h[8],p=h[1],v=h[5],E=h[9],M=h[2],x=h[6],y=h[10];if(Math.abs(m-p)<.01&&Math.abs(_-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+p)<.1&&Math.abs(_+M)<.1&&Math.abs(E+x)<.1&&Math.abs(d+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,A=(v+1)/2,z=(y+1)/2,D=(m+p)/4,N=(_+M)/4,W=(E+x)/4;return T>A&&T>z?T<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(T),o=D/r,l=N/r):A>z?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=D/o,l=W/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=N/l,o=W/l),this.set(r,o,l,t),this}let C=Math.sqrt((x-E)*(x-E)+(_-M)*(_-M)+(p-m)*(p-m));return Math.abs(C)<.001&&(C=1),this.x=(x-E)/C,this.y=(_-M)/C,this.z=(p-m)/C,this.w=Math.acos((d+v+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bv extends Yr{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new yn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends Bv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ep extends yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hv extends yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let h=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];const p=l[u+0],v=l[u+1],E=l[u+2],M=l[u+3];if(c===0){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(c===1){e[t+0]=p,e[t+1]=v,e[t+2]=E,e[t+3]=M;return}if(_!==M||h!==p||d!==v||m!==E){let x=1-c;const y=h*p+d*v+m*E+_*M,C=y>=0?1:-1,T=1-y*y;if(T>Number.EPSILON){const z=Math.sqrt(T),D=Math.atan2(z,y*C);x=Math.sin(x*D)/z,c=Math.sin(c*D)/z}const A=c*C;if(h=h*x+p*A,d=d*x+v*A,m=m*x+E*A,_=_*x+M*A,x===1-c){const z=1/Math.sqrt(h*h+d*d+m*m+_*_);h*=z,d*=z,m*=z,_*=z}}e[t]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],h=r[o+1],d=r[o+2],m=r[o+3],_=l[u],p=l[u+1],v=l[u+2],E=l[u+3];return e[t]=c*E+m*_+h*v-d*p,e[t+1]=h*E+m*p+d*_-c*v,e[t+2]=d*E+m*v+c*p-h*_,e[t+3]=m*E-c*_-h*p-d*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,h=Math.sin,d=c(r/2),m=c(o/2),_=c(l/2),p=h(r/2),v=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=p*m*_+d*v*E,this._y=d*v*_-p*m*E,this._z=d*m*E+p*v*_,this._w=d*m*_-p*v*E;break;case"YXZ":this._x=p*m*_+d*v*E,this._y=d*v*_-p*m*E,this._z=d*m*E-p*v*_,this._w=d*m*_+p*v*E;break;case"ZXY":this._x=p*m*_-d*v*E,this._y=d*v*_+p*m*E,this._z=d*m*E+p*v*_,this._w=d*m*_-p*v*E;break;case"ZYX":this._x=p*m*_-d*v*E,this._y=d*v*_+p*m*E,this._z=d*m*E-p*v*_,this._w=d*m*_+p*v*E;break;case"YZX":this._x=p*m*_+d*v*E,this._y=d*v*_+p*m*E,this._z=d*m*E-p*v*_,this._w=d*m*_-p*v*E;break;case"XZY":this._x=p*m*_-d*v*E,this._y=d*v*_-p*m*E,this._z=d*m*E+p*v*_,this._w=d*m*_+p*v*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],h=t[9],d=t[2],m=t[6],_=t[10],p=r+c+_;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(m-h)*v,this._y=(l-d)*v,this._z=(u-o)*v}else if(r>c&&r>_){const v=2*Math.sqrt(1+r-c-_);this._w=(m-h)/v,this._x=.25*v,this._y=(o+u)/v,this._z=(l+d)/v}else if(c>_){const v=2*Math.sqrt(1+c-r-_);this._w=(l-d)/v,this._x=(o+u)/v,this._y=.25*v,this._z=(h+m)/v}else{const v=2*Math.sqrt(1+_-r-c);this._w=(u-o)/v,this._x=(l+d)/v,this._y=(h+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,h=t._y,d=t._z,m=t._w;return this._x=r*m+u*c+o*d-l*h,this._y=o*m+u*h+l*c-r*d,this._z=l*m+u*d+r*h-o*c,this._w=u*m-r*c-o*h-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const v=1-t;return this._w=v*u+t*this._w,this._x=v*r+t*this._x,this._y=v*o+t*this._y,this._z=v*l+t*this._z,this.normalize(),this}const d=Math.sqrt(h),m=Math.atan2(d,c),_=Math.sin((1-t)*m)/d,p=Math.sin(t*m)/d;return this._w=u*_+this._w*p,this._x=r*_+this._x*p,this._y=o*_+this._y*p,this._z=l*_+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(a_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(a_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,h=e.w,d=2*(u*o-c*r),m=2*(c*t-l*o),_=2*(l*r-u*t);return this.x=t+h*d+u*_-c*m,this.y=r+h*m+c*d-l*_,this.z=o+h*_+l*m-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,h=t.z;return this.x=o*h-l*c,this.y=l*u-r*h,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new K,a_=new jr;class Po{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(l,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),su.copy(r.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),ou.subVectors(this.max,ma),Js.subVectors(e.a,ma),eo.subVectors(e.b,ma),to.subVectors(e.c,ma),Or.subVectors(eo,Js),kr.subVectors(to,eo),ls.subVectors(Js,to);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-ls.z,ls.y,Or.z,0,-Or.x,kr.z,0,-kr.x,ls.z,0,-ls.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-ls.y,ls.x,0];return!Hh(t,Js,eo,to,ou)||(t=[1,0,0,0,1,0,0,0,1],!Hh(t,Js,eo,to,ou))?!1:(au.crossVectors(Or,kr),t=[au.x,au.y,au.z],Hh(t,Js,eo,to,ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new K,new K,new K,new K,new K,new K,new K,new K],vi=new K,su=new Po,Js=new K,eo=new K,to=new K,Or=new K,kr=new K,ls=new K,ma=new K,ou=new K,au=new K,us=new K;function Hh(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){us.fromArray(n,l);const c=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),h=e.dot(us),d=t.dot(us),m=r.dot(us);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>c)return!1}return!0}const nM=new Po,ga=new K,Vh=new K;class Lo{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):nM.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ga,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Vh)),this.expandByPoint(ga.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new K,Gh=new K,lu=new K,zr=new K,Wh=new K,uu=new K,Xh=new K;class $a{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Gh.copy(e).add(t).multiplyScalar(.5),lu.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Gh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(lu),c=zr.dot(this.direction),h=-zr.dot(lu),d=zr.lengthSq(),m=Math.abs(1-u*u);let _,p,v,E;if(m>0)if(_=u*h-c,p=u*c-h,E=l*m,_>=0)if(p>=-E)if(p<=E){const M=1/m;_*=M,p*=M,v=_*(_+u*p+2*c)+p*(u*_+p+2*h)+d}else p=l,_=Math.max(0,-(u*p+c)),v=-_*_+p*(p+2*h)+d;else p=-l,_=Math.max(0,-(u*p+c)),v=-_*_+p*(p+2*h)+d;else p<=-E?(_=Math.max(0,-(-u*l+c)),p=_>0?-l:Math.min(Math.max(-l,-h),l),v=-_*_+p*(p+2*h)+d):p<=E?(_=0,p=Math.min(Math.max(-l,-h),l),v=p*(p+2*h)+d):(_=Math.max(0,-(u*l+c)),p=_>0?l:Math.min(Math.max(-l,-h),l),v=-_*_+p*(p+2*h)+d);else p=u>0?-l:l,_=Math.max(0,-(u*p+c)),v=-_*_+p*(p+2*h)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Gh).addScaledVector(lu,p),v}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),o=Zi.dot(Zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,h=r+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,h;const d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,p=this.origin;return d>=0?(r=(e.min.x-p.x)*d,o=(e.max.x-p.x)*d):(r=(e.max.x-p.x)*d,o=(e.min.x-p.x)*d),m>=0?(l=(e.min.y-p.y)*m,u=(e.max.y-p.y)*m):(l=(e.max.y-p.y)*m,u=(e.min.y-p.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-p.z)*_,h=(e.max.z-p.z)*_):(c=(e.max.z-p.z)*_,h=(e.min.z-p.z)*_),r>h||c>o)||((c>r||r!==r)&&(r=c),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,r,o,l){Wh.subVectors(t,e),uu.subVectors(r,e),Xh.crossVectors(Wh,uu);let u=this.direction.dot(Xh),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;zr.subVectors(this.origin,e);const h=c*this.direction.dot(uu.crossVectors(zr,uu));if(h<0)return null;const d=c*this.direction.dot(Wh.cross(zr));if(d<0||h+d>u)return null;const m=-c*zr.dot(Xh);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,r,o,l,u,c,h,d,m,_,p,v,E,M,x){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,h,d,m,_,p,v,E,M,x)}set(e,t,r,o,l,u,c,h,d,m,_,p,v,E,M,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=h,y[2]=d,y[6]=m,y[10]=_,y[14]=p,y[3]=v,y[7]=E,y[11]=M,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/no.setFromMatrixColumn(e,0).length(),l=1/no.setFromMatrixColumn(e,1).length(),u=1/no.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),h=Math.cos(o),d=Math.sin(o),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const p=u*m,v=u*_,E=c*m,M=c*_;t[0]=h*m,t[4]=-h*_,t[8]=d,t[1]=v+E*d,t[5]=p-M*d,t[9]=-c*h,t[2]=M-p*d,t[6]=E+v*d,t[10]=u*h}else if(e.order==="YXZ"){const p=h*m,v=h*_,E=d*m,M=d*_;t[0]=p+M*c,t[4]=E*c-v,t[8]=u*d,t[1]=u*_,t[5]=u*m,t[9]=-c,t[2]=v*c-E,t[6]=M+p*c,t[10]=u*h}else if(e.order==="ZXY"){const p=h*m,v=h*_,E=d*m,M=d*_;t[0]=p-M*c,t[4]=-u*_,t[8]=E+v*c,t[1]=v+E*c,t[5]=u*m,t[9]=M-p*c,t[2]=-u*d,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const p=u*m,v=u*_,E=c*m,M=c*_;t[0]=h*m,t[4]=E*d-v,t[8]=p*d+M,t[1]=h*_,t[5]=M*d+p,t[9]=v*d-E,t[2]=-d,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const p=u*h,v=u*d,E=c*h,M=c*d;t[0]=h*m,t[4]=M-p*_,t[8]=E*_+v,t[1]=_,t[5]=u*m,t[9]=-c*m,t[2]=-d*m,t[6]=v*_+E,t[10]=p-M*_}else if(e.order==="XZY"){const p=u*h,v=u*d,E=c*h,M=c*d;t[0]=h*m,t[4]=-_,t[8]=d*m,t[1]=p*_+M,t[5]=u*m,t[9]=v*_-E,t[2]=E*_-v,t[6]=c*m,t[10]=M*_+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iM,e,rM)}lookAt(e,t,r){const o=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Br.crossVectors(r,Yn),Br.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Br.crossVectors(r,Yn)),Br.normalize(),cu.crossVectors(Yn,Br),o[0]=Br.x,o[4]=cu.x,o[8]=Yn.x,o[1]=Br.y,o[5]=cu.y,o[9]=Yn.y,o[2]=Br.z,o[6]=cu.z,o[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],h=r[8],d=r[12],m=r[1],_=r[5],p=r[9],v=r[13],E=r[2],M=r[6],x=r[10],y=r[14],C=r[3],T=r[7],A=r[11],z=r[15],D=o[0],N=o[4],W=o[8],L=o[12],R=o[1],U=o[5],V=o[9],q=o[13],X=o[2],J=o[6],ee=o[10],re=o[14],B=o[3],fe=o[7],ie=o[11],O=o[15];return l[0]=u*D+c*R+h*X+d*B,l[4]=u*N+c*U+h*J+d*fe,l[8]=u*W+c*V+h*ee+d*ie,l[12]=u*L+c*q+h*re+d*O,l[1]=m*D+_*R+p*X+v*B,l[5]=m*N+_*U+p*J+v*fe,l[9]=m*W+_*V+p*ee+v*ie,l[13]=m*L+_*q+p*re+v*O,l[2]=E*D+M*R+x*X+y*B,l[6]=E*N+M*U+x*J+y*fe,l[10]=E*W+M*V+x*ee+y*ie,l[14]=E*L+M*q+x*re+y*O,l[3]=C*D+T*R+A*X+z*B,l[7]=C*N+T*U+A*J+z*fe,l[11]=C*W+T*V+A*ee+z*ie,l[15]=C*L+T*q+A*re+z*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],h=e[9],d=e[13],m=e[2],_=e[6],p=e[10],v=e[14],E=e[3],M=e[7],x=e[11],y=e[15];return E*(+l*h*_-o*d*_-l*c*p+r*d*p+o*c*v-r*h*v)+M*(+t*h*v-t*d*p+l*u*p-o*u*v+o*d*m-l*h*m)+x*(+t*d*_-t*c*v-l*u*_+r*u*v+l*c*m-r*d*m)+y*(-o*c*m-t*h*_+t*c*p+o*u*_-r*u*p+r*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],d=e[7],m=e[8],_=e[9],p=e[10],v=e[11],E=e[12],M=e[13],x=e[14],y=e[15],C=_*x*d-M*p*d+M*h*v-c*x*v-_*h*y+c*p*y,T=E*p*d-m*x*d-E*h*v+u*x*v+m*h*y-u*p*y,A=m*M*d-E*_*d+E*c*v-u*M*v-m*c*y+u*_*y,z=E*_*h-m*M*h-E*c*p+u*M*p+m*c*x-u*_*x,D=t*C+r*T+o*A+l*z;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return e[0]=C*N,e[1]=(M*p*l-_*x*l-M*o*v+r*x*v+_*o*y-r*p*y)*N,e[2]=(c*x*l-M*h*l+M*o*d-r*x*d-c*o*y+r*h*y)*N,e[3]=(_*h*l-c*p*l-_*o*d+r*p*d+c*o*v-r*h*v)*N,e[4]=T*N,e[5]=(m*x*l-E*p*l+E*o*v-t*x*v-m*o*y+t*p*y)*N,e[6]=(E*h*l-u*x*l-E*o*d+t*x*d+u*o*y-t*h*y)*N,e[7]=(u*p*l-m*h*l+m*o*d-t*p*d-u*o*v+t*h*v)*N,e[8]=A*N,e[9]=(E*_*l-m*M*l-E*r*v+t*M*v+m*r*y-t*_*y)*N,e[10]=(u*M*l-E*c*l+E*r*d-t*M*d-u*r*y+t*c*y)*N,e[11]=(m*c*l-u*_*l-m*r*d+t*_*d+u*r*v-t*c*v)*N,e[12]=z*N,e[13]=(m*M*o-E*_*o+E*r*p-t*M*p-m*r*x+t*_*x)*N,e[14]=(E*c*o-u*M*o-E*r*h+t*M*h+u*r*x-t*c*x)*N,e[15]=(u*_*o-m*c*o+m*r*h-t*_*h-u*r*p+t*c*p)*N,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,h=e.z,d=l*u,m=l*c;return this.set(d*u+r,d*c-o*h,d*h+o*c,0,d*c+o*h,m*c+r,m*h-o*u,0,d*h-o*c,m*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,h=t._w,d=l+l,m=u+u,_=c+c,p=l*d,v=l*m,E=l*_,M=u*m,x=u*_,y=c*_,C=h*d,T=h*m,A=h*_,z=r.x,D=r.y,N=r.z;return o[0]=(1-(M+y))*z,o[1]=(v+A)*z,o[2]=(E-T)*z,o[3]=0,o[4]=(v-A)*D,o[5]=(1-(p+y))*D,o[6]=(x+C)*D,o[7]=0,o[8]=(E+T)*N,o[9]=(x-C)*N,o[10]=(1-(p+M))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=no.set(o[0],o[1],o[2]).length();const u=no.set(o[4],o[5],o[6]).length(),c=no.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],xi.copy(this);const d=1/l,m=1/u,_=1/c;return xi.elements[0]*=d,xi.elements[1]*=d,xi.elements[2]*=d,xi.elements[4]*=m,xi.elements[5]*=m,xi.elements[6]*=m,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,t.setFromRotationMatrix(xi),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=Ui){const h=this.elements,d=2*l/(t-e),m=2*l/(r-o),_=(t+e)/(t-e),p=(r+o)/(r-o);let v,E;if(c===Ui)v=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(c===Ba)v=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=Ui){const h=this.elements,d=1/(t-e),m=1/(r-o),_=1/(u-l),p=(t+e)*d,v=(r+o)*m;let E,M;if(c===Ui)E=(u+l)*_,M=-2*_;else if(c===Ba)E=l*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-p,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-v,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const no=new K,xi=new kt,iM=new K(0,0,0),rM=new K(1,1,1),Br=new K,cu=new K,Yn=new K,l_=new kt,u_=new jr;class ci{constructor(e=0,t=0,r=0,o=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],h=o[1],d=o[5],m=o[9],_=o[2],p=o[6],v=o[10];switch(t){case"XYZ":this._y=Math.asin(vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(vn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return l_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sM=0;const c_=new K,io=new jr,Qi=new kt,fu=new K,_a=new K,oM=new K,aM=new jr,f_=new K(1,0,0),h_=new K(0,1,0),d_=new K(0,0,1),p_={type:"added"},lM={type:"removed"},ro={type:"childadded",child:null},jh={type:"childremoved",child:null};class qt extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new K,t=new ci,r=new jr,o=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new kt},normalMatrix:{value:new ct}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,t){return io.setFromAxisAngle(e,t),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(f_,e)}rotateY(e){return this.rotateOnAxis(h_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,t){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(f_,e)}translateY(e){return this.translateOnAxis(h_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fu.copy(e):fu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(_a,fu,this.up):Qi.lookAt(fu,_a,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),io.setFromRotationMatrix(Qi),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p_),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lM),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p_),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,aM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const _=h[d];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(l(e.materials,this.material[h]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];o.animations.push(l(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),d=u(e.textures),m=u(e.images),_=u(e.shapes),p=u(e.skeletons),v=u(e.animations),E=u(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),d.length>0&&(r.textures=d),m.length>0&&(r.images=m),_.length>0&&(r.shapes=_),p.length>0&&(r.skeletons=p),v.length>0&&(r.animations=v),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}qt.DEFAULT_UP=new K(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new K,Ji=new K,Yh=new K,er=new K,so=new K,oo=new K,m_=new K,$h=new K,qh=new K,Kh=new K;class wi{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),yi.subVectors(e,t),o.cross(yi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){yi.subVectors(o,t),Ji.subVectors(r,t),Yh.subVectors(e,t);const u=yi.dot(yi),c=yi.dot(Ji),h=yi.dot(Yh),d=Ji.dot(Ji),m=Ji.dot(Yh),_=u*d-c*c;if(_===0)return l.set(0,0,0),null;const p=1/_,v=(d*h-c*m)*p,E=(u*m-c*h)*p;return l.set(1-v-E,E,v)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,r,o,l,u,c,h){return this.getBarycoord(e,t,r,o,er)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,er.x),h.addScaledVector(u,er.y),h.addScaledVector(c,er.z),h)}static isFrontFacing(e,t,r,o){return yi.subVectors(r,t),Ji.subVectors(e,t),yi.cross(Ji).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),yi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;so.subVectors(o,r),oo.subVectors(l,r),$h.subVectors(e,r);const h=so.dot($h),d=oo.dot($h);if(h<=0&&d<=0)return t.copy(r);qh.subVectors(e,o);const m=so.dot(qh),_=oo.dot(qh);if(m>=0&&_<=m)return t.copy(o);const p=h*_-m*d;if(p<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(r).addScaledVector(so,u);Kh.subVectors(e,l);const v=so.dot(Kh),E=oo.dot(Kh);if(E>=0&&v<=E)return t.copy(l);const M=v*d-h*E;if(M<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(r).addScaledVector(oo,c);const x=m*E-v*_;if(x<=0&&_-m>=0&&v-E>=0)return m_.subVectors(l,o),c=(_-m)/(_-m+(v-E)),t.copy(o).addScaledVector(m_,c);const y=1/(x+M+p);return u=M*y,c=p*y,t.copy(r).addScaledVector(so,u).addScaledVector(oo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},hu={h:0,s:0,l:0};function Zh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Ge=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=Qd(e,1),t=vn(t,0,1),r=vn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Zh(u,l,e+1/3),this.g=Zh(u,l,e),this.b=Zh(u,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=li){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const r=Vv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}copyLinearToSRGB(e){return this.r=kh(e.r),this.g=kh(e.g),this.b=kh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return wt.fromWorkingColorSpace(gn.copy(this),e),Math.round(vn(gn.r*255,0,255))*65536+Math.round(vn(gn.g*255,0,255))*256+Math.round(vn(gn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(gn.copy(this),t);const r=gn.r,o=gn.g,l=gn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let h,d;const m=(c+u)/2;if(c===u)h=0,d=0;else{const _=u-c;switch(d=m<=.5?_/(u+c):_/(2-u-c),u){case r:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-r)/_+2;break;case l:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=li){wt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,r=gn.g,o=gn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(hu);const r=Na(Hr.h,hu.h,t),o=Na(Hr.s,hu.s,t),l=Na(Hr.l,hu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const gn=new Ge;Ge.NAMES=Vv;let uM=0;class hr extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=Wr,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(r.blending=this.blending),this.side!==lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wu&&(r.blendSrc=this.blendSrc),this.blendDst!==Xu&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const h=l[c];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class np extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new K,du=new it;class Wt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=yd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ia("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)du.fromBufferAttribute(this,t),du.applyMatrix3(e),this.setXY(t,du.x,du.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=go(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array),o=En(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array),o=En(o,this.array),l=En(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yd&&(e.usage=this.usage),e}}class ip extends Wt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class rp extends Wt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class kn extends Wt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let cM=0;const oi=new kt,Qh=new qt,ao=new K,$n=new Po,va=new Po,an=new K;class cn extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ov(e)?rp:ip)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,r){return oi.makeTranslation(e,t,r),this.applyMatrix4(oi),this}scale(e,t,r){return oi.makeScale(e,t,r),this.applyMatrix4(oi),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new kn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];va.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors($n.min,va.min),$n.expandByPoint(an),an.addVectors($n.max,va.max),$n.expandByPoint(an)):($n.expandByPoint(va.min),$n.expandByPoint(va.max))}$n.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],h=this.morphTargetsRelative;for(let d=0,m=c.count;d<m;d++)an.fromBufferAttribute(c,d),h&&(ao.fromBufferAttribute(e,d),an.add(ao)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],h=[];for(let W=0;W<r.count;W++)c[W]=new K,h[W]=new K;const d=new K,m=new K,_=new K,p=new it,v=new it,E=new it,M=new K,x=new K;function y(W,L,R){d.fromBufferAttribute(r,W),m.fromBufferAttribute(r,L),_.fromBufferAttribute(r,R),p.fromBufferAttribute(l,W),v.fromBufferAttribute(l,L),E.fromBufferAttribute(l,R),m.sub(d),_.sub(d),v.sub(p),E.sub(p);const U=1/(v.x*E.y-E.x*v.y);isFinite(U)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(_,-v.y).multiplyScalar(U),x.copy(_).multiplyScalar(v.x).addScaledVector(m,-E.x).multiplyScalar(U),c[W].add(M),c[L].add(M),c[R].add(M),h[W].add(x),h[L].add(x),h[R].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let W=0,L=C.length;W<L;++W){const R=C[W],U=R.start,V=R.count;for(let q=U,X=U+V;q<X;q+=3)y(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const T=new K,A=new K,z=new K,D=new K;function N(W){z.fromBufferAttribute(o,W),D.copy(z);const L=c[W];T.copy(L),T.sub(z.multiplyScalar(z.dot(L))).normalize(),A.crossVectors(D,L);const U=A.dot(h[W])<0?-1:1;u.setXYZW(W,T.x,T.y,T.z,U)}for(let W=0,L=C.length;W<L;++W){const R=C[W],U=R.start,V=R.count;for(let q=U,X=U+V;q<X;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,v=r.count;p<v;p++)r.setXYZ(p,0,0,0);const o=new K,l=new K,u=new K,c=new K,h=new K,d=new K,m=new K,_=new K;if(e)for(let p=0,v=e.count;p<v;p+=3){const E=e.getX(p+0),M=e.getX(p+1),x=e.getX(p+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),u.fromBufferAttribute(t,x),m.subVectors(u,l),_.subVectors(o,l),m.cross(_),c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,x),c.add(m),h.add(m),d.add(m),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(x,d.x,d.y,d.z)}else for(let p=0,v=t.count;p<v;p+=3)o.fromBufferAttribute(t,p+0),l.fromBufferAttribute(t,p+1),u.fromBufferAttribute(t,p+2),m.subVectors(u,l),_.subVectors(o,l),m.cross(_),r.setXYZ(p+0,m.x,m.y,m.z),r.setXYZ(p+1,m.x,m.y,m.z),r.setXYZ(p+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(c,h){const d=c.array,m=c.itemSize,_=c.normalized,p=new d.constructor(h.length*m);let v=0,E=0;for(let M=0,x=h.length;M<x;M++){c.isInterleavedBufferAttribute?v=h[M]*c.data.stride+c.offset:v=h[M]*m;for(let y=0;y<m;y++)p[E++]=d[v++]}return new Wt(p,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,r=this.index.array,o=this.attributes;for(const c in o){const h=o[c],d=e(h,r);t.setAttribute(c,d)}const l=this.morphAttributes;for(const c in l){const h=[],d=l[c];for(let m=0,_=d.length;m<_;m++){const p=d[m],v=e(p,r);h.push(v)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const d=r[h];e.data.attributes[h]=d.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let _=0,p=d.length;_<p;_++){const v=d[_];m.push(v.toJSON(e.data))}m.length>0&&(o[h]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(t))}const l=e.morphAttributes;for(const d in l){const m=[],_=l[d];for(let p=0,v=_.length;p<v;p++)m.push(_[p].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,m=u.length;d<m;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g_=new kt,cs=new $a,pu=new Lo,__=new K,lo=new K,uo=new K,co=new K,Jh=new K,mu=new K,gu=new it,_u=new it,vu=new it,v_=new K,x_=new K,y_=new K,xu=new K,yu=new K;class Zn extends qt{constructor(e=new cn,t=new np){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){mu.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const m=c[h],_=l[h];m!==0&&(Jh.fromBufferAttribute(_,e),u?mu.addScaledVector(Jh,m):mu.addScaledVector(Jh.sub(t),m))}t.add(mu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pu.copy(r.boundingSphere),pu.applyMatrix4(l),cs.copy(e.ray).recast(e.near),!(pu.containsPoint(cs.origin)===!1&&(cs.intersectSphere(pu,__)===null||cs.origin.distanceToSquared(__)>(e.far-e.near)**2))&&(g_.copy(l).invert(),cs.copy(e.ray).applyMatrix4(g_),!(r.boundingBox!==null&&cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,h=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,p=l.groups,v=l.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=p.length;E<M;E++){const x=p[E],y=u[x.materialIndex],C=Math.max(x.start,v.start),T=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let A=C,z=T;A<z;A+=3){const D=c.getX(A),N=c.getX(A+1),W=c.getX(A+2);o=Su(this,y,e,r,d,m,_,D,N,W),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,v.start),M=Math.min(c.count,v.start+v.count);for(let x=E,y=M;x<y;x+=3){const C=c.getX(x),T=c.getX(x+1),A=c.getX(x+2);o=Su(this,u,e,r,d,m,_,C,T,A),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,M=p.length;E<M;E++){const x=p[E],y=u[x.materialIndex],C=Math.max(x.start,v.start),T=Math.min(h.count,Math.min(x.start+x.count,v.start+v.count));for(let A=C,z=T;A<z;A+=3){const D=A,N=A+1,W=A+2;o=Su(this,y,e,r,d,m,_,D,N,W),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,v.start),M=Math.min(h.count,v.start+v.count);for(let x=E,y=M;x<y;x+=3){const C=x,T=x+1,A=x+2;o=Su(this,u,e,r,d,m,_,C,T,A),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function fM(n,e,t,r,o,l,u,c){let h;if(e.side===xn?h=r.intersectTriangle(u,l,o,!0,c):h=r.intersectTriangle(o,l,u,e.side===lr,c),h===null)return null;yu.copy(c),yu.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(yu);return d<t.near||d>t.far?null:{distance:d,point:yu.clone(),object:n}}function Su(n,e,t,r,o,l,u,c,h,d){n.getVertexPosition(c,lo),n.getVertexPosition(h,uo),n.getVertexPosition(d,co);const m=fM(n,e,t,r,lo,uo,co,xu);if(m){o&&(gu.fromBufferAttribute(o,c),_u.fromBufferAttribute(o,h),vu.fromBufferAttribute(o,d),m.uv=wi.getInterpolation(xu,lo,uo,co,gu,_u,vu,new it)),l&&(gu.fromBufferAttribute(l,c),_u.fromBufferAttribute(l,h),vu.fromBufferAttribute(l,d),m.uv1=wi.getInterpolation(xu,lo,uo,co,gu,_u,vu,new it)),u&&(v_.fromBufferAttribute(u,c),x_.fromBufferAttribute(u,h),y_.fromBufferAttribute(u,d),m.normal=wi.getInterpolation(xu,lo,uo,co,v_,x_,y_,new K),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const _={a:c,b:h,c:d,normal:new K,materialIndex:0};wi.getNormal(lo,uo,co,_.normal),m.face=_}return m}class Do extends cn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],d=[],m=[],_=[];let p=0,v=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new kn(d,3)),this.setAttribute("normal",new kn(m,3)),this.setAttribute("uv",new kn(_,2));function E(M,x,y,C,T,A,z,D,N,W,L){const R=A/N,U=z/W,V=A/2,q=z/2,X=D/2,J=N+1,ee=W+1;let re=0,B=0;const fe=new K;for(let ie=0;ie<ee;ie++){const O=ie*U-q;for(let oe=0;oe<J;oe++){const be=oe*R-V;fe[M]=be*C,fe[x]=O*T,fe[y]=X,d.push(fe.x,fe.y,fe.z),fe[M]=0,fe[x]=0,fe[y]=D>0?1:-1,m.push(fe.x,fe.y,fe.z),_.push(oe/N),_.push(1-ie/W),re+=1}}for(let ie=0;ie<W;ie++)for(let O=0;O<N;O++){const oe=p+O+J*ie,be=p+O+J*(ie+1),j=p+(O+1)+J*(ie+1),ue=p+(O+1)+J*ie;h.push(oe,be,ue),h.push(be,j,ue),B+=6}c.addGroup(v,B,L),v+=B,p+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function wn(n){const e={};for(let t=0;t<n.length;t++){const r=wo(n[t]);for(const o in r)e[o]=r[o]}return e}function hM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Wv={clone:wo,merge:wn};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=hM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class sp extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new K,S_=new it,M_=new it;class qn extends sp{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,S_,M_),t.subVectors(M_,S_)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Da*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/d,o*=u.width/h,r*=u.height/d}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fo=-90,ho=1;class Xv extends qt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new qn(fo,ho,e,t);o.layers=this.layers,this.add(o);const l=new qn(fo,ho,e,t);l.layers=this.layers,this.add(l);const u=new qn(fo,ho,e,t);u.layers=this.layers,this.add(u);const c=new qn(fo,ho,e,t);c.layers=this.layers,this.add(c);const h=new qn(fo,ho,e,t);h.layers=this.layers,this.add(h);const d=new qn(fo,ho,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,h]=t;for(const d of t)this.remove(d);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ba)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,h,d,m]=this.children,_=e.getRenderTarget(),p=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,d),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(_,p,v),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class op extends yn{constructor(e,t,r,o,l,u,c,h,d,m){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,r,o,l,u,c,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jv extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new op(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Do(5,5,5),l=new Jn({name:"CubemapFromEquirect",uniforms:wo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:xn,blending:or});l.uniforms.tEquirect.value=t;const u=new Zn(o,l),c=t.minFilter;return t.minFilter===rr&&(t.minFilter=Kn),new Xv(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const ed=new K,mM=new K,gM=new ct;class nr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ed.subVectors(r,t).cross(mM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||gM.getNormalMatrix(e),o=this.coplanarPoint(ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Lo,Mu=new K;class Xc{constructor(e=new nr,t=new nr,r=new nr,o=new nr,l=new nr,u=new nr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ui){const r=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],h=o[3],d=o[4],m=o[5],_=o[6],p=o[7],v=o[8],E=o[9],M=o[10],x=o[11],y=o[12],C=o[13],T=o[14],A=o[15];if(r[0].setComponents(h-l,p-d,x-v,A-y).normalize(),r[1].setComponents(h+l,p+d,x+v,A+y).normalize(),r[2].setComponents(h+u,p+m,x+E,A+C).normalize(),r[3].setComponents(h-u,p-m,x-E,A-C).normalize(),r[4].setComponents(h-c,p-_,x-M,A-T).normalize(),t===Ui)r[5].setComponents(h+c,p+_,x+M,A+T).normalize();else if(t===Ba)r[5].setComponents(c,_,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Mu.x=o.normal.x>0?e.max.x:e.min.x,Mu.y=o.normal.y>0?e.max.y:e.min.y,Mu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yv(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function _M(n){const e=new WeakMap;function t(c,h){const d=c.array,m=c.usage,_=d.byteLength,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,d,m),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:_}}function r(c,h,d){const m=h.array,_=h._updateRange,p=h.updateRanges;if(n.bindBuffer(d,c),_.count===-1&&p.length===0&&n.bufferSubData(d,0,m),p.length!==0){for(let v=0,E=p.length;v<E;v++){const M=p[v];n.bufferSubData(d,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}_.count!==-1&&(n.bufferSubData(d,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count),_.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(n.deleteBuffer(h.buffer),e.delete(c))}function u(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:l,update:u}}class qa extends cn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),h=Math.floor(o),d=c+1,m=h+1,_=e/c,p=t/h,v=[],E=[],M=[],x=[];for(let y=0;y<m;y++){const C=y*p-u;for(let T=0;T<d;T++){const A=T*_-l;E.push(A,-C,0),M.push(0,0,1),x.push(T/c),x.push(1-y/h)}}for(let y=0;y<h;y++)for(let C=0;C<c;C++){const T=C+d*y,A=C+d*(y+1),z=C+1+d*(y+1),D=C+1+d*y;v.push(T,A,D),v.push(A,z,D)}this.setIndex(v),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xM=`#ifdef USE_ALPHAHASH
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
#endif`,yM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wM=`#ifdef USE_AOMAP
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
#endif`,TM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AM=`#ifdef USE_BATCHING
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
#endif`,CM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LM=`#ifdef USE_IRIDESCENCE
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
#endif`,DM=`#ifdef USE_BUMPMAP
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,HM=`#define PI 3.141592653589793
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
} // validated`,VM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GM=`vec3 transformedNormal = objectNormal;
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
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",qM=`
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
}`,KM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
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
}`,oE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
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
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mE=`PhysicalMaterial material;
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
#endif`,gE=`struct PhysicalMaterial {
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
}`,_E=`
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CE=`#if defined( USE_POINTS_UV )
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
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NE=`#ifdef USE_MORPHTARGETS
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
#endif`,IE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
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
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nw=`float getShadowMask() {
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
}`,iw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rw=`#ifdef USE_SKINNING
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
#endif`,sw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ow=`#ifdef USE_SKINNING
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
#endif`,aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fw=`#ifdef USE_TRANSMISSION
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
#endif`,hw=`#ifdef USE_TRANSMISSION
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
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vw=`uniform sampler2D t2D;
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
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`#include <common>
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
}`,ww=`#if DEPTH_PACKING == 3200
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
}`,Tw=`#define DISTANCE
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
}`,Aw=`#define DISTANCE
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`uniform float scale;
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
}`,Pw=`uniform vec3 diffuse;
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
}`,Lw=`#include <common>
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
}`,Dw=`uniform vec3 diffuse;
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
}`,Nw=`#define LAMBERT
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
}`,Iw=`#define LAMBERT
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
}`,Uw=`#define MATCAP
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
}`,Fw=`#define MATCAP
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
}`,Ow=`#define NORMAL
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
}`,kw=`#define NORMAL
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
}`,zw=`#define PHONG
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
}`,Bw=`#define PHONG
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
}`,Hw=`#define STANDARD
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
}`,Vw=`#define STANDARD
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
}`,Gw=`#define TOON
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
}`,Ww=`#define TOON
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
}`,Xw=`uniform float size;
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
}`,jw=`uniform vec3 diffuse;
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
}`,Yw=`#include <common>
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
}`,$w=`uniform vec3 color;
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
}`,qw=`uniform float rotation;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:vM,alphahash_pars_fragment:xM,alphamap_fragment:yM,alphamap_pars_fragment:SM,alphatest_fragment:MM,alphatest_pars_fragment:EM,aomap_fragment:wM,aomap_pars_fragment:TM,batching_pars_vertex:AM,batching_vertex:CM,begin_vertex:RM,beginnormal_vertex:bM,bsdfs:PM,iridescence_fragment:LM,bumpmap_pars_fragment:DM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:UM,clipping_planes_vertex:FM,color_fragment:OM,color_pars_fragment:kM,color_pars_vertex:zM,color_vertex:BM,common:HM,cube_uv_reflection_fragment:VM,defaultnormal_vertex:GM,displacementmap_pars_vertex:WM,displacementmap_vertex:XM,emissivemap_fragment:jM,emissivemap_pars_fragment:YM,colorspace_fragment:$M,colorspace_pars_fragment:qM,envmap_fragment:KM,envmap_common_pars_fragment:ZM,envmap_pars_fragment:QM,envmap_pars_vertex:JM,envmap_physical_pars_fragment:cE,envmap_vertex:eE,fog_vertex:tE,fog_pars_vertex:nE,fog_fragment:iE,fog_pars_fragment:rE,gradientmap_pars_fragment:sE,lightmap_pars_fragment:oE,lights_lambert_fragment:aE,lights_lambert_pars_fragment:lE,lights_pars_begin:uE,lights_toon_fragment:fE,lights_toon_pars_fragment:hE,lights_phong_fragment:dE,lights_phong_pars_fragment:pE,lights_physical_fragment:mE,lights_physical_pars_fragment:gE,lights_fragment_begin:_E,lights_fragment_maps:vE,lights_fragment_end:xE,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:ME,logdepthbuf_vertex:EE,map_fragment:wE,map_pars_fragment:TE,map_particle_fragment:AE,map_particle_pars_fragment:CE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:bE,morphinstance_vertex:PE,morphcolor_vertex:LE,morphnormal_vertex:DE,morphtarget_pars_vertex:NE,morphtarget_vertex:IE,normal_fragment_begin:UE,normal_fragment_maps:FE,normal_pars_fragment:OE,normal_pars_vertex:kE,normal_vertex:zE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:GE,iridescence_pars_fragment:WE,opaque_fragment:XE,packing:jE,premultiplied_alpha_fragment:YE,project_vertex:$E,dithering_fragment:qE,dithering_pars_fragment:KE,roughnessmap_fragment:ZE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:ew,shadowmap_vertex:tw,shadowmask_pars_fragment:nw,skinbase_vertex:iw,skinning_pars_vertex:rw,skinning_vertex:sw,skinnormal_vertex:ow,specularmap_fragment:aw,specularmap_pars_fragment:lw,tonemapping_fragment:uw,tonemapping_pars_fragment:cw,transmission_fragment:fw,transmission_pars_fragment:hw,uv_pars_fragment:dw,uv_pars_vertex:pw,uv_vertex:mw,worldpos_vertex:gw,background_vert:_w,background_frag:vw,backgroundCube_vert:xw,backgroundCube_frag:yw,cube_vert:Sw,cube_frag:Mw,depth_vert:Ew,depth_frag:ww,distanceRGBA_vert:Tw,distanceRGBA_frag:Aw,equirect_vert:Cw,equirect_frag:Rw,linedashed_vert:bw,linedashed_frag:Pw,meshbasic_vert:Lw,meshbasic_frag:Dw,meshlambert_vert:Nw,meshlambert_frag:Iw,meshmatcap_vert:Uw,meshmatcap_frag:Fw,meshnormal_vert:Ow,meshnormal_frag:kw,meshphong_vert:zw,meshphong_frag:Bw,meshphysical_vert:Hw,meshphysical_frag:Vw,meshtoon_vert:Gw,meshtoon_frag:Ww,points_vert:Xw,points_frag:jw,shadow_vert:Yw,shadow_frag:$w,sprite_vert:qw,sprite_frag:Kw},Le={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Si={basic:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:wn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:wn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:wn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:wn([Le.points,Le.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:wn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:wn([Le.common,Le.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:wn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:wn([Le.sprite,Le.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:wn([Le.common,Le.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:wn([Le.lights,Le.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Si.physical={uniforms:wn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Eu={r:0,b:0,g:0},hs=new ci,Zw=new kt;function Qw(n,e,t,r,o,l,u){const c=new Ge(0);let h=l===!0?0:1,d,m,_=null,p=0,v=null;function E(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?t:e).get(T)),T}function M(C){let T=!1;const A=E(C);A===null?y(c,h):A&&A.isColor&&(y(A,1),T=!0);const z=n.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||T)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(C,T){const A=E(T);A&&(A.isCubeTexture||A.mapping===ja)?(m===void 0&&(m=new Zn(new Do(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:wo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),hs.copy(T.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(hs)),m.material.toneMapped=wt.getTransfer(A.colorSpace)!==Lt,(_!==A||p!==A.version||v!==n.toneMapping)&&(m.material.needsUpdate=!0,_=A,p=A.version,v=n.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new Zn(new qa(2,2),new Jn({name:"BackgroundMaterial",uniforms:wo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=wt.getTransfer(A.colorSpace)!==Lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||p!==A.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,_=A,p=A.version,v=n.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function y(C,T){C.getRGB(Eu,Gv(n)),r.buffers.color.setClear(Eu.r,Eu.g,Eu.b,T,u)}return{getClearColor:function(){return c},setClearColor:function(C,T=1){c.set(C),h=T,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,y(c,h)},render:M,addToRenderList:x}}function Jw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=p(null);let l=o,u=!1;function c(R,U,V,q,X){let J=!1;const ee=_(q,V,U);l!==ee&&(l=ee,d(l.object)),J=v(R,q,V,X),J&&E(R,q,V,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,A(R,U,V,q),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function h(){return n.createVertexArray()}function d(R){return n.bindVertexArray(R)}function m(R){return n.deleteVertexArray(R)}function _(R,U,V){const q=V.wireframe===!0;let X=r[R.id];X===void 0&&(X={},r[R.id]=X);let J=X[U.id];J===void 0&&(J={},X[U.id]=J);let ee=J[q];return ee===void 0&&(ee=p(h()),J[q]=ee),ee}function p(R){const U=[],V=[],q=[];for(let X=0;X<t;X++)U[X]=0,V[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:q,object:R,attributes:{},index:null}}function v(R,U,V,q){const X=l.attributes,J=U.attributes;let ee=0;const re=V.getAttributes();for(const B in re)if(re[B].location>=0){const ie=X[B];let O=J[B];if(O===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),ie===void 0||ie.attribute!==O||O&&ie.data!==O.data)return!0;ee++}return l.attributesNum!==ee||l.index!==q}function E(R,U,V,q){const X={},J=U.attributes;let ee=0;const re=V.getAttributes();for(const B in re)if(re[B].location>=0){let ie=J[B];ie===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const O={};O.attribute=ie,ie&&ie.data&&(O.data=ie.data),X[B]=O,ee++}l.attributes=X,l.attributesNum=ee,l.index=q}function M(){const R=l.newAttributes;for(let U=0,V=R.length;U<V;U++)R[U]=0}function x(R){y(R,0)}function y(R,U){const V=l.newAttributes,q=l.enabledAttributes,X=l.attributeDivisors;V[R]=1,q[R]===0&&(n.enableVertexAttribArray(R),q[R]=1),X[R]!==U&&(n.vertexAttribDivisor(R,U),X[R]=U)}function C(){const R=l.newAttributes,U=l.enabledAttributes;for(let V=0,q=U.length;V<q;V++)U[V]!==R[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function T(R,U,V,q,X,J,ee){ee===!0?n.vertexAttribIPointer(R,U,V,X,J):n.vertexAttribPointer(R,U,V,q,X,J)}function A(R,U,V,q){M();const X=q.attributes,J=V.getAttributes(),ee=U.defaultAttributeValues;for(const re in J){const B=J[re];if(B.location>=0){let fe=X[re];if(fe===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const ie=fe.normalized,O=fe.itemSize,oe=e.get(fe);if(oe===void 0)continue;const be=oe.buffer,j=oe.type,ue=oe.bytesPerElement,_e=j===n.INT||j===n.UNSIGNED_INT||fe.gpuType===Fc;if(fe.isInterleavedBufferAttribute){const ye=fe.data,Ce=ye.stride,De=fe.offset;if(ye.isInstancedInterleavedBuffer){for(let Ne=0;Ne<B.locationSize;Ne++)y(B.location+Ne,ye.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ne=0;Ne<B.locationSize;Ne++)x(B.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Ne=0;Ne<B.locationSize;Ne++)T(B.location+Ne,O/B.locationSize,j,ie,Ce*ue,(De+O/B.locationSize*Ne)*ue,_e)}else{if(fe.isInstancedBufferAttribute){for(let ye=0;ye<B.locationSize;ye++)y(B.location+ye,fe.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ye=0;ye<B.locationSize;ye++)x(B.location+ye);n.bindBuffer(n.ARRAY_BUFFER,be);for(let ye=0;ye<B.locationSize;ye++)T(B.location+ye,O/B.locationSize,j,ie,O*ue,O/B.locationSize*ye*ue,_e)}}else if(ee!==void 0){const ie=ee[re];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(B.location,ie);break;case 3:n.vertexAttrib3fv(B.location,ie);break;case 4:n.vertexAttrib4fv(B.location,ie);break;default:n.vertexAttrib1fv(B.location,ie)}}}}C()}function z(){W();for(const R in r){const U=r[R];for(const V in U){const q=U[V];for(const X in q)m(q[X].object),delete q[X];delete U[V]}delete r[R]}}function D(R){if(r[R.id]===void 0)return;const U=r[R.id];for(const V in U){const q=U[V];for(const X in q)m(q[X].object),delete q[X];delete U[V]}delete r[R.id]}function N(R){for(const U in r){const V=r[U];if(V[R.id]===void 0)continue;const q=V[R.id];for(const X in q)m(q[X].object),delete q[X];delete V[R.id]}}function W(){L(),u=!0,l!==o&&(l=o,d(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:W,resetDefaultState:L,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:x,disableUnusedAttributes:C}}function e1(n,e,t){let r;function o(d){r=d}function l(d,m){n.drawArrays(r,d,m),t.update(m,r,1)}function u(d,m,_){_!==0&&(n.drawArraysInstanced(r,d,m,_),t.update(m,r,_))}function c(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,m,0,_);let v=0;for(let E=0;E<_;E++)v+=m[E];t.update(v,r,1)}function h(d,m,_,p){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<d.length;E++)u(d[E],m[E],p[E]);else{v.multiDrawArraysInstancedWEBGL(r,d,0,m,0,p,0,_);let E=0;for(let M=0;M<_;M++)E+=m[M];for(let M=0;M<p.length;M++)t.update(E,r,p[M])}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function t1(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==ui&&r.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const N=D===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Oi&&r.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ii&&!N)}function h(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=h(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const _=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,z=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:_,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:A,maxSamples:z}}function n1(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new nr,c=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,p){const v=_.length!==0||p||r!==0||o;return o=p,r=_.length,v},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,p){t=m(_,p,0)},this.setState=function(_,p,v){const E=_.clippingPlanes,M=_.clipIntersection,x=_.clipShadows,y=n.get(_);if(!o||E===null||E.length===0||l&&!x)l?m(null):d();else{const C=l?0:r,T=C*4;let A=y.clippingState||null;h.value=A,A=m(E,p,T,v);for(let z=0;z!==T;++z)A[z]=t[z];y.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(_,p,v,E){const M=_!==null?_.length:0;let x=null;if(M!==0){if(x=h.value,E!==!0||x===null){const y=v+M*4,C=p.matrixWorldInverse;c.getNormalMatrix(C),(x===null||x.length<y)&&(x=new Float32Array(y));for(let T=0,A=v;T!==M;++T,A+=4)u.copy(_[T]).applyMatrix4(C,c),u.normal.toArray(x,A),x[A+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function i1(n){let e=new WeakMap;function t(u,c){return c===ju?u.mapping=Es:c===Yu&&(u.mapping=ws),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===ju||c===Yu)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new jv(h.height);return d.fromEquirectangularTexture(n,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class ap extends sp{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=4,E_=[.125,.215,.35,.446,.526,.582],gs=20,td=new ap,w_=new Ge;let nd=null,id=0,rd=0,sd=!1;const ms=(1+Math.sqrt(5))/2,po=1/ms,T_=[new K(-ms,po,0),new K(ms,po,0),new K(-po,0,ms),new K(po,0,ms),new K(0,ms,-po),new K(0,ms,po),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),this._renderer.xr.enabled=sd,e.scissorTest=!1,wu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Ro,format:ui,colorSpace:fr,depthBuffer:!1},o=A_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r1(l)),this._blurMaterial=s1(l,e,t)}return o}_compileMaterial(e){const t=new Zn(this._lodPlanes[0],e);this._renderer.compile(t,td)}_sceneToCubeUV(e,t,r,o){const c=new qn(90,1,t,r),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,p=m.toneMapping;m.getClearColor(w_),m.toneMapping=ar,m.autoClear=!1;const v=new np({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),E=new Zn(new Do,v);let M=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,M=!0):(v.color.copy(w_),M=!0);for(let y=0;y<6;y++){const C=y%3;C===0?(c.up.set(0,h[y],0),c.lookAt(d[y],0,0)):C===1?(c.up.set(0,0,h[y]),c.lookAt(0,d[y],0)):(c.up.set(0,h[y],0),c.lookAt(0,0,d[y]));const T=this._cubeSize;wu(o,C*T,y>2?T:0,T,T),m.setRenderTarget(o),M&&m.render(E,c),m.render(e,c)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=p,m.autoClear=_,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Es||e.mapping===ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Zn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;wu(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,td)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=T_[(o-l-1)%T_.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Zn(this._lodPlanes[o],d),p=d.uniforms,v=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*v):2*Math.PI/(2*gs-1),M=l/E,x=isFinite(l)?1+Math.floor(m*M):gs;x>gs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${gs}`);const y=[];let C=0;for(let N=0;N<gs;++N){const W=N/M,L=Math.exp(-W*W/2);y.push(L),N===0?C+=L:N<x&&(C+=2*L)}for(let N=0;N<y.length;N++)y[N]=y[N]/C;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=y,p.latitudinal.value=u==="latitudinal",c&&(p.poleAxis.value=c);const{_lodMax:T}=this;p.dTheta.value=E,p.mipInt.value=T-r;const A=this._sizeLods[o],z=3*A*(o>T-_o?o-T+_o:0),D=4*(this._cubeSize-A);wu(t,z,D,3*A,2*A),h.setRenderTarget(t),h.render(_,td)}}function r1(n){const e=[],t=[],r=[];let o=n;const l=n-_o+1+E_.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let h=1/c;u>n-_o?h=E_[u-n+_o-1]:u===0&&(h=0),r.push(h);const d=1/(c-2),m=-d,_=1+d,p=[m,m,_,m,_,_,m,m,_,_,m,_],v=6,E=6,M=3,x=2,y=1,C=new Float32Array(M*E*v),T=new Float32Array(x*E*v),A=new Float32Array(y*E*v);for(let D=0;D<v;D++){const N=D%3*2/3-1,W=D>2?0:-1,L=[N,W,0,N+2/3,W,0,N+2/3,W+1,0,N,W,0,N+2/3,W+1,0,N,W+1,0];C.set(L,M*E*D),T.set(p,x*E*D);const R=[D,D,D,D,D,D];A.set(R,y*E*D)}const z=new cn;z.setAttribute("position",new Wt(C,M)),z.setAttribute("uv",new Wt(T,x)),z.setAttribute("faceIndex",new Wt(A,y)),e.push(z),o>_o&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function A_(n,e,t){const r=new ur(n,e,t);return r.texture.mapping=ja,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function s1(n,e,t){const r=new Float32Array(gs),o=new K(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lp(),fragmentShader:`

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
	`}function o1(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,d=h===ju||h===Yu,m=h===Es||h===ws;if(d||m){let _=e.get(c);const p=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==p)return t===null&&(t=new Md(n)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),_.texture;if(_!==void 0)return _.texture;{const v=c.image;return d&&v&&v.height>0||m&&v&&o(v)?(t===null&&(t=new Md(n)),_=d?t.fromEquirectangular(c):t.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,e.set(c,_),c.addEventListener("dispose",l),_.texture):null}}}return c}function o(c){let h=0;const d=6;for(let m=0;m<d;m++)c[m]!==void 0&&h++;return h===d}function l(c){const h=c.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function a1(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ia("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function l1(n,e,t,r){const o={},l=new WeakMap;function u(_){const p=_.target;p.index!==null&&e.remove(p.index);for(const E in p.attributes)e.remove(p.attributes[E]);for(const E in p.morphAttributes){const M=p.morphAttributes[E];for(let x=0,y=M.length;x<y;x++)e.remove(M[x])}p.removeEventListener("dispose",u),delete o[p.id];const v=l.get(p);v&&(e.remove(v),l.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(_,p){return o[p.id]===!0||(p.addEventListener("dispose",u),o[p.id]=!0,t.memory.geometries++),p}function h(_){const p=_.attributes;for(const E in p)e.update(p[E],n.ARRAY_BUFFER);const v=_.morphAttributes;for(const E in v){const M=v[E];for(let x=0,y=M.length;x<y;x++)e.update(M[x],n.ARRAY_BUFFER)}}function d(_){const p=[],v=_.index,E=_.attributes.position;let M=0;if(v!==null){const C=v.array;M=v.version;for(let T=0,A=C.length;T<A;T+=3){const z=C[T+0],D=C[T+1],N=C[T+2];p.push(z,D,D,N,N,z)}}else if(E!==void 0){const C=E.array;M=E.version;for(let T=0,A=C.length/3-1;T<A;T+=3){const z=T+0,D=T+1,N=T+2;p.push(z,D,D,N,N,z)}}else return;const x=new(Ov(p)?rp:ip)(p,1);x.version=M;const y=l.get(_);y&&e.remove(y),l.set(_,x)}function m(_){const p=l.get(_);if(p){const v=_.index;v!==null&&p.version<v.version&&d(_)}else d(_);return l.get(_)}return{get:c,update:h,getWireframeAttribute:m}}function u1(n,e,t){let r;function o(p){r=p}let l,u;function c(p){l=p.type,u=p.bytesPerElement}function h(p,v){n.drawElements(r,v,l,p*u),t.update(v,r,1)}function d(p,v,E){E!==0&&(n.drawElementsInstanced(r,v,l,p*u,E),t.update(v,r,E))}function m(p,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,p,0,E);let x=0;for(let y=0;y<E;y++)x+=v[y];t.update(x,r,1)}function _(p,v,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<p.length;y++)d(p[y]/u,v[y],M[y]);else{x.multiDrawElementsInstancedWEBGL(r,v,0,l,p,0,M,0,E);let y=0;for(let C=0;C<E;C++)y+=v[C];for(let C=0;C<M.length;C++)t.update(y,r,M[C])}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function c1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function f1(n,e,t){const r=new WeakMap,o=new $t;function l(u,c,h){const d=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=m!==void 0?m.length:0;let p=r.get(c);if(p===void 0||p.count!==_){let R=function(){W.dispose(),r.delete(c),c.removeEventListener("dispose",R)};var v=R;p!==void 0&&p.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),x===!0&&(A=3);let z=c.attributes.position.count*A,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const N=new Float32Array(z*D*4*_),W=new ep(N,z,D,_);W.type=Ii,W.needsUpdate=!0;const L=A*4;for(let U=0;U<_;U++){const V=y[U],q=C[U],X=T[U],J=z*D*4*U;for(let ee=0;ee<V.count;ee++){const re=ee*L;E===!0&&(o.fromBufferAttribute(V,ee),N[J+re+0]=o.x,N[J+re+1]=o.y,N[J+re+2]=o.z,N[J+re+3]=0),M===!0&&(o.fromBufferAttribute(q,ee),N[J+re+4]=o.x,N[J+re+5]=o.y,N[J+re+6]=o.z,N[J+re+7]=0),x===!0&&(o.fromBufferAttribute(X,ee),N[J+re+8]=o.x,N[J+re+9]=o.y,N[J+re+10]=o.z,N[J+re+11]=X.itemSize===4?o.w:1)}}p={count:_,texture:W,size:new it(z,D)},r.set(c,p),c.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<d.length;x++)E+=d[x];const M=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:l}}function h1(n,e,t,r){let o=new WeakMap;function l(h){const d=r.render.frame,m=h.geometry,_=e.get(h,m);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==d&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,d))),h.isSkinnedMesh){const p=h.skeleton;o.get(p)!==d&&(p.update(),o.set(p,d))}return _}function u(){o=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:u}}class up extends yn{constructor(e,t,r,o,l,u,c,h,d,m=ys){if(m!==ys&&m!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===ys&&(r=Xr),r===void 0&&m===As&&(r=Ts),super(null,o,l,u,c,h,m,r,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:An,this.minFilter=h!==void 0?h:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $v=new yn,b_=new up(1,1),qv=new ep,Kv=new Hv,Zv=new op,P_=[],L_=[],D_=new Float32Array(16),N_=new Float32Array(9),I_=new Float32Array(4);function No(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=P_[o];if(l===void 0&&(l=new Float32Array(o),P_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function jc(n,e){let t=L_[e];t===void 0&&(t=new Int32Array(e),L_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function d1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function g1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function _1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;I_.set(r),n.uniformMatrix2fv(this.addr,!1,I_),en(t,r)}}function v1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;N_.set(r),n.uniformMatrix3fv(this.addr,!1,N_),en(t,r)}}function x1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;D_.set(r),n.uniformMatrix4fv(this.addr,!1,D_),en(t,r)}}function y1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function S1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function M1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function E1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function w1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function T1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function C1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function R1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(b_.compareFunction=Zd,l=b_):l=$v,t.setTexture2D(e||l,o)}function b1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Kv,o)}function P1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Zv,o)}function L1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||qv,o)}function D1(n){switch(n){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return y1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return E1;case 5125:return w1;case 36294:return T1;case 36295:return A1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return L1}}function N1(n,e){n.uniform1fv(this.addr,e)}function I1(n,e){const t=No(e,this.size,2);n.uniform2fv(this.addr,t)}function U1(n,e){const t=No(e,this.size,3);n.uniform3fv(this.addr,t)}function F1(n,e){const t=No(e,this.size,4);n.uniform4fv(this.addr,t)}function O1(n,e){const t=No(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function k1(n,e){const t=No(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function z1(n,e){const t=No(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function B1(n,e){n.uniform1iv(this.addr,e)}function H1(n,e){n.uniform2iv(this.addr,e)}function V1(n,e){n.uniform3iv(this.addr,e)}function G1(n,e){n.uniform4iv(this.addr,e)}function W1(n,e){n.uniform1uiv(this.addr,e)}function X1(n,e){n.uniform2uiv(this.addr,e)}function j1(n,e){n.uniform3uiv(this.addr,e)}function Y1(n,e){n.uniform4uiv(this.addr,e)}function $1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||$v,l[u])}function q1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Kv,l[u])}function K1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Zv,l[u])}function Z1(n,e,t){const r=this.cache,o=e.length,l=jc(t,o);Jt(r,l)||(n.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||qv,l[u])}function Q1(n){switch(n){case 5126:return N1;case 35664:return I1;case 35665:return U1;case 35666:return F1;case 35674:return O1;case 35675:return k1;case 35676:return z1;case 5124:case 35670:return B1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return X1;case 36295:return j1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}class J1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=D1(t.type)}}class eT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Q1(t.type)}}class tT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const od=/(\w+)(\])?(\[|\.)?/g;function U_(n,e){n.seq.push(e),n.map[e.id]=e}function nT(n,e,t){const r=n.name,o=r.length;for(od.lastIndex=0;;){const l=od.exec(r),u=od.lastIndex;let c=l[1];const h=l[2]==="]",d=l[3];if(h&&(c=c|0),d===void 0||d==="["&&u+2===o){U_(t,d===void 0?new J1(c,n,e):new eT(c,n,e));break}else{let _=t.map[c];_===void 0&&(_=new tT(c),U_(t,_)),t=_}}}class ku{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);nT(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function F_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const iT=37297;let rT=0;function sT(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}function oT(n){const e=wt.getPrimaries(wt.workingColorSpace),t=wt.getPrimaries(n);let r;switch(e===t?r="":e===za&&t===ka?r="LinearDisplayP3ToLinearSRGB":e===ka&&t===za&&(r="LinearSRGBToLinearDisplayP3"),n){case fr:case Ya:return[r,"LinearTransferOETF"];case li:case Gc:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[r,"LinearTransferOETF"]}}function O_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+sT(n.getShaderSource(e),u)}else return o}function aT(n,e){const t=oT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function lT(n,e){let t;switch(e){case xv:t="Linear";break;case yv:t="Reinhard";break;case Sv:t="Cineon";break;case Mv:t="ACESFilmic";break;case wv:t="AgX";break;case Tv:t="Neutral";break;case Ev:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tu=new K;function uT(){wt.getLuminanceCoefficients(Tu);const n=Tu.x.toFixed(4),e=Tu.y.toFixed(4),t=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function fT(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function hT(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Ea(n){return n!==""}function k_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(n){return n.replace(dT,mT)}const pT=new Map;function mT(n,e){let t=ut[e];if(t===void 0){const r=pT.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ed(t)}const gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B_(n){return n.replace(gT,_T)}function _T(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function H_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function vT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===X0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function xT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Es:case ws:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yT(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ws&&(e="ENVMAP_MODE_REFRACTION"),e}function ST(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uc:e="ENVMAP_BLENDING_MULTIPLY";break;case _v:e="ENVMAP_BLENDING_MIX";break;case vv:e="ENVMAP_BLENDING_ADD";break}return e}function MT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function ET(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=vT(t),d=xT(t),m=yT(t),_=ST(t),p=MT(t),v=cT(t),E=fT(l),M=o.createProgram();let x,y,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ea).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ea).join(`
`),y.length>0&&(y+=`
`)):(x=[H_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),y=[H_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?ut.tonemapping_pars_fragment:"",t.toneMapping!==ar?lT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,aT("linearToOutputTexel",t.outputColorSpace),uT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),u=Ed(u),u=k_(u,t),u=z_(u,t),c=Ed(c),c=k_(c,t),c=z_(c,t),u=B_(u),c=B_(c),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=C+x+u,A=C+y+c,z=F_(o,o.VERTEX_SHADER,T),D=F_(o,o.FRAGMENT_SHADER,A);o.attachShader(M,z),o.attachShader(M,D),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function N(U){if(n.debug.checkShaderErrors){const V=o.getProgramInfoLog(M).trim(),q=o.getShaderInfoLog(z).trim(),X=o.getShaderInfoLog(D).trim();let J=!0,ee=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,M,z,D);else{const re=O_(o,z,"vertex"),B=O_(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+re+`
`+B)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(q===""||X==="")&&(ee=!1);ee&&(U.diagnostics={runnable:J,programLog:V,vertexShader:{log:q,prefix:x},fragmentShader:{log:X,prefix:y}})}o.deleteShader(z),o.deleteShader(D),W=new ku(o,M),L=hT(o,M)}let W;this.getUniforms=function(){return W===void 0&&N(this),W};let L;this.getAttributes=function(){return L===void 0&&N(this),L};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(M,iT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=z,this.fragmentShader=D,this}let wT=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new AT(e),t.set(e,r)),r}}class AT{constructor(e){this.id=wT++,this.code=e,this.usedTimes=0}}function CT(n,e,t,r,o,l,u){const c=new tp,h=new TT,d=new Set,m=[],_=o.logarithmicDepthBuffer,p=o.vertexTextures;let v=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(L){return d.add(L),L===0?"uv":`uv${L}`}function x(L,R,U,V,q){const X=V.fog,J=q.geometry,ee=L.isMeshStandardMaterial?V.environment:null,re=(L.isMeshStandardMaterial?t:e).get(L.envMap||ee),B=re&&re.mapping===ja?re.image.height:null,fe=E[L.type];L.precision!==null&&(v=o.getMaxPrecision(L.precision),v!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",v,"instead."));const ie=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,O=ie!==void 0?ie.length:0;let oe=0;J.morphAttributes.position!==void 0&&(oe=1),J.morphAttributes.normal!==void 0&&(oe=2),J.morphAttributes.color!==void 0&&(oe=3);let be,j,ue,_e;if(fe){const vt=Si[fe];be=vt.vertexShader,j=vt.fragmentShader}else be=L.vertexShader,j=L.fragmentShader,h.update(L),ue=h.getVertexShaderID(L),_e=h.getFragmentShaderID(L);const ye=n.getRenderTarget(),Ce=q.isInstancedMesh===!0,De=q.isBatchedMesh===!0,Ne=!!L.map,ft=!!L.matcap,k=!!re,_t=!!L.aoMap,ht=!!L.lightMap,Mt=!!L.bumpMap,Ye=!!L.normalMap,Ut=!!L.displacementMap,tt=!!L.emissiveMap,rt=!!L.metalnessMap,F=!!L.roughnessMap,b=L.anisotropy>0,ce=L.clearcoat>0,pe=L.dispersion>0,ve=L.iridescence>0,me=L.sheen>0,$e=L.transmission>0,Pe=b&&!!L.anisotropyMap,Oe=ce&&!!L.clearcoatMap,ot=ce&&!!L.clearcoatNormalMap,Me=ce&&!!L.clearcoatRoughnessMap,Ie=ve&&!!L.iridescenceMap,pt=ve&&!!L.iridescenceThicknessMap,et=me&&!!L.sheenColorMap,ke=me&&!!L.sheenRoughnessMap,st=!!L.specularMap,at=!!L.specularColorMap,Rt=!!L.specularIntensityMap,Y=$e&&!!L.transmissionMap,we=$e&&!!L.thicknessMap,he=!!L.gradientMap,de=!!L.alphaMap,Ae=L.alphaTest>0,Ze=!!L.alphaHash,mt=!!L.extensions;let zt=ar;L.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(zt=n.toneMapping);const Xt={shaderID:fe,shaderType:L.type,shaderName:L.name,vertexShader:be,fragmentShader:j,defines:L.defines,customVertexShaderID:ue,customFragmentShaderID:_e,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:v,batching:De,batchingColor:De&&q._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&q.instanceColor!==null,instancingMorph:Ce&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:fr,alphaToCoverage:!!L.alphaToCoverage,map:Ne,matcap:ft,envMap:k,envMapMode:k&&re.mapping,envMapCubeUVHeight:B,aoMap:_t,lightMap:ht,bumpMap:Mt,normalMap:Ye,displacementMap:p&&Ut,emissiveMap:tt,normalMapObjectSpace:Ye&&L.normalMapType===bv,normalMapTangentSpace:Ye&&L.normalMapType===Vc,metalnessMap:rt,roughnessMap:F,anisotropy:b,anisotropyMap:Pe,clearcoat:ce,clearcoatMap:Oe,clearcoatNormalMap:ot,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ve,iridescenceMap:Ie,iridescenceThicknessMap:pt,sheen:me,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:st,specularColorMap:at,specularIntensityMap:Rt,transmission:$e,transmissionMap:Y,thicknessMap:we,gradientMap:he,opaque:L.transparent===!1&&L.blending===Wr&&L.alphaToCoverage===!1,alphaMap:de,alphaTest:Ae,alphaHash:Ze,combine:L.combine,mapUv:Ne&&M(L.map.channel),aoMapUv:_t&&M(L.aoMap.channel),lightMapUv:ht&&M(L.lightMap.channel),bumpMapUv:Mt&&M(L.bumpMap.channel),normalMapUv:Ye&&M(L.normalMap.channel),displacementMapUv:Ut&&M(L.displacementMap.channel),emissiveMapUv:tt&&M(L.emissiveMap.channel),metalnessMapUv:rt&&M(L.metalnessMap.channel),roughnessMapUv:F&&M(L.roughnessMap.channel),anisotropyMapUv:Pe&&M(L.anisotropyMap.channel),clearcoatMapUv:Oe&&M(L.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&M(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&M(L.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&M(L.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(L.sheenColorMap.channel),sheenRoughnessMapUv:ke&&M(L.sheenRoughnessMap.channel),specularMapUv:st&&M(L.specularMap.channel),specularColorMapUv:at&&M(L.specularColorMap.channel),specularIntensityMapUv:Rt&&M(L.specularIntensityMap.channel),transmissionMapUv:Y&&M(L.transmissionMap.channel),thicknessMapUv:we&&M(L.thicknessMap.channel),alphaMapUv:de&&M(L.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ye||b),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(Ne||de),fog:!!X,useFog:L.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:oe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ne&&L.map.isVideoTexture===!0&&wt.getTransfer(L.map.colorSpace)===Lt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ni,flipSided:L.side===xn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:mt&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&L.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Xt.vertexUv1s=d.has(1),Xt.vertexUv2s=d.has(2),Xt.vertexUv3s=d.has(3),d.clear(),Xt}function y(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const U in L.defines)R.push(U),R.push(L.defines[U]);return L.isRawShaderMaterial===!1&&(C(R,L),T(R,L),R.push(n.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function C(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function T(L,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),L.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.skinning&&c.enable(4),R.morphTargets&&c.enable(5),R.morphNormals&&c.enable(6),R.morphColors&&c.enable(7),R.premultipliedAlpha&&c.enable(8),R.shadowMapEnabled&&c.enable(9),R.doubleSided&&c.enable(10),R.flipSided&&c.enable(11),R.useDepthPacking&&c.enable(12),R.dithering&&c.enable(13),R.transmission&&c.enable(14),R.sheen&&c.enable(15),R.opaque&&c.enable(16),R.pointsUvs&&c.enable(17),R.decodeVideoTexture&&c.enable(18),R.alphaToCoverage&&c.enable(19),L.push(c.mask)}function A(L){const R=E[L.type];let U;if(R){const V=Si[R];U=Wv.clone(V.uniforms)}else U=L.uniforms;return U}function z(L,R){let U;for(let V=0,q=m.length;V<q;V++){const X=m[V];if(X.cacheKey===R){U=X,++U.usedTimes;break}}return U===void 0&&(U=new ET(n,R,L,l),m.push(U)),U}function D(L){if(--L.usedTimes===0){const R=m.indexOf(L);m[R]=m[m.length-1],m.pop(),L.destroy()}}function N(L){h.remove(L)}function W(){h.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:A,acquireProgram:z,releaseProgram:D,releaseShaderCache:N,programs:m,dispose:W}}function RT(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,h){n.get(u)[c]=h}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function bT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function V_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function G_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,p,v,E,M,x){let y=n[e];return y===void 0?(y={id:_.id,object:_,geometry:p,material:v,groupOrder:E,renderOrder:_.renderOrder,z:M,group:x},n[e]=y):(y.id=_.id,y.object=_,y.geometry=p,y.material=v,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=M,y.group=x),e++,y}function c(_,p,v,E,M,x){const y=u(_,p,v,E,M,x);v.transmission>0?r.push(y):v.transparent===!0?o.push(y):t.push(y)}function h(_,p,v,E,M,x){const y=u(_,p,v,E,M,x);v.transmission>0?r.unshift(y):v.transparent===!0?o.unshift(y):t.unshift(y)}function d(_,p){t.length>1&&t.sort(_||bT),r.length>1&&r.sort(p||V_),o.length>1&&o.sort(p||V_)}function m(){for(let _=e,p=n.length;_<p;_++){const v=n[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:h,finish:m,sort:d}}function PT(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new G_,n.set(r,[u])):o>=l.length?(u=new G_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function LT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Ge};break;case"SpotLight":t={position:new K,direction:new K,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function DT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let NT=0;function IT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function UT(n){const e=new LT,t=DT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new K);const o=new K,l=new kt,u=new kt;function c(d){let m=0,_=0,p=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let v=0,E=0,M=0,x=0,y=0,C=0,T=0,A=0,z=0,D=0,N=0;d.sort(IT);for(let L=0,R=d.length;L<R;L++){const U=d[L],V=U.color,q=U.intensity,X=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)m+=V.r*q,_+=V.g*q,p+=V.b*q;else if(U.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(U.sh.coefficients[ee],q);N++}else if(U.isDirectionalLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const re=U.shadow,B=t.get(U);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,r.directionalShadow[v]=B,r.directionalShadowMap[v]=J,r.directionalShadowMatrix[v]=U.shadow.matrix,C++}r.directional[v]=ee,v++}else if(U.isSpotLight){const ee=e.get(U);ee.position.setFromMatrixPosition(U.matrixWorld),ee.color.copy(V).multiplyScalar(q),ee.distance=X,ee.coneCos=Math.cos(U.angle),ee.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ee.decay=U.decay,r.spot[M]=ee;const re=U.shadow;if(U.map&&(r.spotLightMap[z]=U.map,z++,re.updateMatrices(U),U.castShadow&&D++),r.spotLightMatrix[M]=re.matrix,U.castShadow){const B=t.get(U);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,r.spotShadow[M]=B,r.spotShadowMap[M]=J,A++}M++}else if(U.isRectAreaLight){const ee=e.get(U);ee.color.copy(V).multiplyScalar(q),ee.halfWidth.set(U.width*.5,0,0),ee.halfHeight.set(0,U.height*.5,0),r.rectArea[x]=ee,x++}else if(U.isPointLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),ee.distance=U.distance,ee.decay=U.decay,U.castShadow){const re=U.shadow,B=t.get(U);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,B.shadowCameraNear=re.camera.near,B.shadowCameraFar=re.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=J,r.pointShadowMatrix[E]=U.shadow.matrix,T++}r.point[E]=ee,E++}else if(U.isHemisphereLight){const ee=e.get(U);ee.skyColor.copy(U.color).multiplyScalar(q),ee.groundColor.copy(U.groundColor).multiplyScalar(q),r.hemi[y]=ee,y++}}x>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=p;const W=r.hash;(W.directionalLength!==v||W.pointLength!==E||W.spotLength!==M||W.rectAreaLength!==x||W.hemiLength!==y||W.numDirectionalShadows!==C||W.numPointShadows!==T||W.numSpotShadows!==A||W.numSpotMaps!==z||W.numLightProbes!==N)&&(r.directional.length=v,r.spot.length=M,r.rectArea.length=x,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=A+z-D,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=N,W.directionalLength=v,W.pointLength=E,W.spotLength=M,W.rectAreaLength=x,W.hemiLength=y,W.numDirectionalShadows=C,W.numPointShadows=T,W.numSpotShadows=A,W.numSpotMaps=z,W.numLightProbes=N,r.version=NT++)}function h(d,m){let _=0,p=0,v=0,E=0,M=0;const x=m.matrixWorldInverse;for(let y=0,C=d.length;y<C;y++){const T=d[y];if(T.isDirectionalLight){const A=r.directional[_];A.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(x),_++}else if(T.isSpotLight){const A=r.spot[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(x),v++}else if(T.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(x),u.identity(),l.copy(T.matrixWorld),l.premultiply(x),u.extractRotation(l),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(T.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(x),p++}else if(T.isHemisphereLight){const A=r.hemi[M];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(x),M++}}}return{setup:c,setupView:h,state:r}}function W_(n){const e=new UT(n),t=[],r=[];function o(m){d.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function c(){e.setup(t)}function h(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:c,setupLightsView:h,pushLight:l,pushShadow:u}}function FT(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new W_(n),e.set(o,[c])):l>=u.length?(c=new W_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}class Qv extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jv extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
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
}`;function zT(n,e,t){let r=new Xc;const o=new it,l=new it,u=new $t,c=new Qv({depthPacking:Rv}),h=new Jv,d={},m=t.maxTextureSize,_={[lr]:xn,[xn]:lr,[Ni]:Ni},p=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:OT,fragmentShader:kT}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const E=new cn;E.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Zn(E,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let y=this.type;this.render=function(D,N,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const L=n.getRenderTarget(),R=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),V=n.state;V.setBlending(or),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const q=y!==Di&&this.type===Di,X=y===Di&&this.type!==Di;for(let J=0,ee=D.length;J<ee;J++){const re=D[J],B=re.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const fe=B.getFrameExtents();if(o.multiply(fe),l.copy(B.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/fe.x),o.x=l.x*fe.x,B.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/fe.y),o.y=l.y*fe.y,B.mapSize.y=l.y)),B.map===null||q===!0||X===!0){const O=this.type!==Di?{minFilter:An,magFilter:An}:{};B.map!==null&&B.map.dispose(),B.map=new ur(o.x,o.y,O),B.map.texture.name=re.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ie=B.getViewportCount();for(let O=0;O<ie;O++){const oe=B.getViewport(O);u.set(l.x*oe.x,l.y*oe.y,l.x*oe.z,l.y*oe.w),V.viewport(u),B.updateMatrices(re,O),r=B.getFrustum(),A(N,W,B.camera,re,this.type)}B.isPointLightShadow!==!0&&this.type===Di&&C(B,W),B.needsUpdate=!1}y=this.type,x.needsUpdate=!1,n.setRenderTarget(L,R,U)};function C(D,N){const W=e.update(M);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,v.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ur(o.x,o.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(N,null,W,p,M,null),v.uniforms.shadow_pass.value=D.mapPass.texture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(N,null,W,v,M,null)}function T(D,N,W,L){let R=null;const U=W.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)R=U;else if(R=W.isPointLight===!0?h:c,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const V=R.uuid,q=N.uuid;let X=d[V];X===void 0&&(X={},d[V]=X);let J=X[q];J===void 0&&(J=R.clone(),X[q]=J,N.addEventListener("dispose",z)),R=J}if(R.visible=N.visible,R.wireframe=N.wireframe,L===Di?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:_[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const V=n.properties.get(R);V.light=W}return R}function A(D,N,W,L,R){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===Di)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,D.matrixWorld);const q=e.update(D),X=D.material;if(Array.isArray(X)){const J=q.groups;for(let ee=0,re=J.length;ee<re;ee++){const B=J[ee],fe=X[B.materialIndex];if(fe&&fe.visible){const ie=T(D,fe,L,R);D.onBeforeShadow(n,D,N,W,q,ie,B),n.renderBufferDirect(W,null,q,ie,D,B),D.onAfterShadow(n,D,N,W,q,ie,B)}}}else if(X.visible){const J=T(D,X,L,R);D.onBeforeShadow(n,D,N,W,q,J,null),n.renderBufferDirect(W,null,q,J,D,null),D.onAfterShadow(n,D,N,W,q,J,null)}}const V=D.children;for(let q=0,X=V.length;q<X;q++)A(V[q],N,W,L,R)}function z(D){D.target.removeEventListener("dispose",z);for(const W in d){const L=d[W],R=D.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function BT(n){function e(){let Y=!1;const we=new $t;let he=null;const de=new $t(0,0,0,0);return{setMask:function(Ae){he!==Ae&&!Y&&(n.colorMask(Ae,Ae,Ae,Ae),he=Ae)},setLocked:function(Ae){Y=Ae},setClear:function(Ae,Ze,mt,zt,Xt){Xt===!0&&(Ae*=zt,Ze*=zt,mt*=zt),we.set(Ae,Ze,mt,zt),de.equals(we)===!1&&(n.clearColor(Ae,Ze,mt,zt),de.copy(we))},reset:function(){Y=!1,he=null,de.set(-1,0,0,0)}}}function t(){let Y=!1,we=null,he=null,de=null;return{setTest:function(Ae){Ae?_e(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(Ae){we!==Ae&&!Y&&(n.depthMask(Ae),we=Ae)},setFunc:function(Ae){if(he!==Ae){switch(Ae){case cv:n.depthFunc(n.NEVER);break;case fv:n.depthFunc(n.ALWAYS);break;case hv:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case dv:n.depthFunc(n.EQUAL);break;case pv:n.depthFunc(n.GEQUAL);break;case mv:n.depthFunc(n.GREATER);break;case gv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Ae}},setLocked:function(Ae){Y=Ae},setClear:function(Ae){de!==Ae&&(n.clearDepth(Ae),de=Ae)},reset:function(){Y=!1,we=null,he=null,de=null}}}function r(){let Y=!1,we=null,he=null,de=null,Ae=null,Ze=null,mt=null,zt=null,Xt=null;return{setTest:function(vt){Y||(vt?_e(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(vt){we!==vt&&!Y&&(n.stencilMask(vt),we=vt)},setFunc:function(vt,zn,Bn){(he!==vt||de!==zn||Ae!==Bn)&&(n.stencilFunc(vt,zn,Bn),he=vt,de=zn,Ae=Bn)},setOp:function(vt,zn,Bn){(Ze!==vt||mt!==zn||zt!==Bn)&&(n.stencilOp(vt,zn,Bn),Ze=vt,mt=zn,zt=Bn)},setLocked:function(vt){Y=vt},setClear:function(vt){Xt!==vt&&(n.clearStencil(vt),Xt=vt)},reset:function(){Y=!1,we=null,he=null,de=null,Ae=null,Ze=null,mt=null,zt=null,Xt=null}}}const o=new e,l=new t,u=new r,c=new WeakMap,h=new WeakMap;let d={},m={},_=new WeakMap,p=[],v=null,E=!1,M=null,x=null,y=null,C=null,T=null,A=null,z=null,D=new Ge(0,0,0),N=0,W=!1,L=null,R=null,U=null,V=null,q=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ee=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(re)[1]),J=ee>=1):re.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),J=ee>=2);let B=null,fe={};const ie=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),oe=new $t().fromArray(ie),be=new $t().fromArray(O);function j(Y,we,he,de){const Ae=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(Y,Ze),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let mt=0;mt<he;mt++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(we+mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ze}const ue={};ue[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),_e(n.DEPTH_TEST),l.setFunc(Ua),Mt(!1),Ye(gd),_e(n.CULL_FACE),_t(or);function _e(Y){d[Y]!==!0&&(n.enable(Y),d[Y]=!0)}function ye(Y){d[Y]!==!1&&(n.disable(Y),d[Y]=!1)}function Ce(Y,we){return m[Y]!==we?(n.bindFramebuffer(Y,we),m[Y]=we,Y===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=we),Y===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=we),!0):!1}function De(Y,we){let he=p,de=!1;if(Y){he=_.get(we),he===void 0&&(he=[],_.set(we,he));const Ae=Y.textures;if(he.length!==Ae.length||he[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,mt=Ae.length;Ze<mt;Ze++)he[Ze]=n.COLOR_ATTACHMENT0+Ze;he.length=Ae.length,de=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,de=!0);de&&n.drawBuffers(he)}function Ne(Y){return v!==Y?(n.useProgram(Y),v=Y,!0):!1}const ft={[Gr]:n.FUNC_ADD,[Y0]:n.FUNC_SUBTRACT,[$0]:n.FUNC_REVERSE_SUBTRACT};ft[q0]=n.MIN,ft[K0]=n.MAX;const k={[Z0]:n.ZERO,[Q0]:n.ONE,[J0]:n.SRC_COLOR,[Wu]:n.SRC_ALPHA,[sv]:n.SRC_ALPHA_SATURATE,[iv]:n.DST_COLOR,[tv]:n.DST_ALPHA,[ev]:n.ONE_MINUS_SRC_COLOR,[Xu]:n.ONE_MINUS_SRC_ALPHA,[rv]:n.ONE_MINUS_DST_COLOR,[nv]:n.ONE_MINUS_DST_ALPHA,[ov]:n.CONSTANT_COLOR,[av]:n.ONE_MINUS_CONSTANT_COLOR,[lv]:n.CONSTANT_ALPHA,[uv]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(Y,we,he,de,Ae,Ze,mt,zt,Xt,vt){if(Y===or){E===!0&&(ye(n.BLEND),E=!1);return}if(E===!1&&(_e(n.BLEND),E=!0),Y!==j0){if(Y!==M||vt!==W){if((x!==Gr||T!==Gr)&&(n.blendEquation(n.FUNC_ADD),x=Gr,T=Gr),vt)switch(Y){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gu:n.blendFunc(n.ONE,n.ONE);break;case _d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _d:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}y=null,C=null,A=null,z=null,D.set(0,0,0),N=0,M=Y,W=vt}return}Ae=Ae||we,Ze=Ze||he,mt=mt||de,(we!==x||Ae!==T)&&(n.blendEquationSeparate(ft[we],ft[Ae]),x=we,T=Ae),(he!==y||de!==C||Ze!==A||mt!==z)&&(n.blendFuncSeparate(k[he],k[de],k[Ze],k[mt]),y=he,C=de,A=Ze,z=mt),(zt.equals(D)===!1||Xt!==N)&&(n.blendColor(zt.r,zt.g,zt.b,Xt),D.copy(zt),N=Xt),M=Y,W=!1}function ht(Y,we){Y.side===Ni?ye(n.CULL_FACE):_e(n.CULL_FACE);let he=Y.side===xn;we&&(he=!he),Mt(he),Y.blending===Wr&&Y.transparent===!1?_t(or):_t(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const de=Y.stencilWrite;u.setTest(de),de&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),tt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(Y){L!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),L=Y)}function Ye(Y){Y!==G0?(_e(n.CULL_FACE),Y!==R&&(Y===gd?n.cullFace(n.BACK):Y===W0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),R=Y}function Ut(Y){Y!==U&&(J&&n.lineWidth(Y),U=Y)}function tt(Y,we,he){Y?(_e(n.POLYGON_OFFSET_FILL),(V!==we||q!==he)&&(n.polygonOffset(we,he),V=we,q=he)):ye(n.POLYGON_OFFSET_FILL)}function rt(Y){Y?_e(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function F(Y){Y===void 0&&(Y=n.TEXTURE0+X-1),B!==Y&&(n.activeTexture(Y),B=Y)}function b(Y,we,he){he===void 0&&(B===null?he=n.TEXTURE0+X-1:he=B);let de=fe[he];de===void 0&&(de={type:void 0,texture:void 0},fe[he]=de),(de.type!==Y||de.texture!==we)&&(B!==he&&(n.activeTexture(he),B=he),n.bindTexture(Y,we||ue[Y]),de.type=Y,de.texture=we)}function ce(){const Y=fe[B];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function me(){try{n.texSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $e(){try{n.texSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ot(){try{n.texStorage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ie(){try{n.texImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{n.texImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function et(Y){oe.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),oe.copy(Y))}function ke(Y){be.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),be.copy(Y))}function st(Y,we){let he=h.get(we);he===void 0&&(he=new WeakMap,h.set(we,he));let de=he.get(Y);de===void 0&&(de=n.getUniformBlockIndex(we,Y.name),he.set(Y,de))}function at(Y,we){const de=h.get(we).get(Y);c.get(we)!==de&&(n.uniformBlockBinding(we,de,Y.__bindingPointIndex),c.set(we,de))}function Rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},B=null,fe={},m={},_=new WeakMap,p=[],v=null,E=!1,M=null,x=null,y=null,C=null,T=null,A=null,z=null,D=new Ge(0,0,0),N=0,W=!1,L=null,R=null,U=null,V=null,q=null,oe.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:_e,disable:ye,bindFramebuffer:Ce,drawBuffers:De,useProgram:Ne,setBlending:_t,setMaterial:ht,setFlipSided:Mt,setCullFace:Ye,setLineWidth:Ut,setPolygonOffset:tt,setScissorTest:rt,activeTexture:F,bindTexture:b,unbindTexture:ce,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:Ie,texImage3D:pt,updateUBOMapping:st,uniformBlockBinding:at,texStorage2D:ot,texStorage3D:Me,texSubImage2D:me,texSubImage3D:$e,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Oe,scissor:et,viewport:ke,reset:Rt}}function X_(n,e,t,r){const o=HT(r);switch(t){case Wd:return n*e;case jd:return n*e;case Yd:return n*e*2;case $d:return n*e/o.components*o.byteLength;case zc:return n*e/o.components*o.byteLength;case qd:return n*e*2/o.components*o.byteLength;case Bc:return n*e*2/o.components*o.byteLength;case Xd:return n*e*3/o.components*o.byteLength;case ui:return n*e*4/o.components*o.byteLength;case Hc:return n*e*4/o.components*o.byteLength;case Ca:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ba:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ku:case Qu:return Math.max(n,16)*Math.max(e,8)/4;case qu:case Zu:return Math.max(n,8)*Math.max(e,8)/2;case Ju:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case La:case gc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kd:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xc:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function HT(n){switch(n){case Oi:case Hd:return{byteLength:1,components:1};case Eo:case Vd:case Ro:return{byteLength:2,components:1};case Oc:case kc:return{byteLength:2,components:4};case Xr:case Fc:case Ii:return{byteLength:4,components:1};case Gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function VT(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new it,m=new WeakMap;let _;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,b){return v?new OffscreenCanvas(F,b):Va("canvas")}function M(F,b,ce){let pe=1;const ve=rt(F);if((ve.width>ce||ve.height>ce)&&(pe=ce/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const me=Math.floor(pe*ve.width),$e=Math.floor(pe*ve.height);_===void 0&&(_=E(me,$e));const Pe=b?E(me,$e):_;return Pe.width=me,Pe.height=$e,Pe.getContext("2d").drawImage(F,0,0,me,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+me+"x"+$e+")."),Pe}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),F;return F}function x(F){return F.generateMipmaps&&F.minFilter!==An&&F.minFilter!==Kn}function y(F){n.generateMipmap(F)}function C(F,b,ce,pe,ve=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let me=b;if(b===n.RED&&(ce===n.FLOAT&&(me=n.R32F),ce===n.HALF_FLOAT&&(me=n.R16F),ce===n.UNSIGNED_BYTE&&(me=n.R8)),b===n.RED_INTEGER&&(ce===n.UNSIGNED_BYTE&&(me=n.R8UI),ce===n.UNSIGNED_SHORT&&(me=n.R16UI),ce===n.UNSIGNED_INT&&(me=n.R32UI),ce===n.BYTE&&(me=n.R8I),ce===n.SHORT&&(me=n.R16I),ce===n.INT&&(me=n.R32I)),b===n.RG&&(ce===n.FLOAT&&(me=n.RG32F),ce===n.HALF_FLOAT&&(me=n.RG16F),ce===n.UNSIGNED_BYTE&&(me=n.RG8)),b===n.RG_INTEGER&&(ce===n.UNSIGNED_BYTE&&(me=n.RG8UI),ce===n.UNSIGNED_SHORT&&(me=n.RG16UI),ce===n.UNSIGNED_INT&&(me=n.RG32UI),ce===n.BYTE&&(me=n.RG8I),ce===n.SHORT&&(me=n.RG16I),ce===n.INT&&(me=n.RG32I)),b===n.RGB&&ce===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),b===n.RGBA){const $e=ve?Oa:wt.getTransfer(pe);ce===n.FLOAT&&(me=n.RGBA32F),ce===n.HALF_FLOAT&&(me=n.RGBA16F),ce===n.UNSIGNED_BYTE&&(me=$e===Lt?n.SRGB8_ALPHA8:n.RGBA8),ce===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),ce===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function T(F,b){let ce;return F?b===null||b===Xr||b===Ts?ce=n.DEPTH24_STENCIL8:b===Ii?ce=n.DEPTH32F_STENCIL8:b===Eo&&(ce=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xr||b===Ts?ce=n.DEPTH_COMPONENT24:b===Ii?ce=n.DEPTH_COMPONENT32F:b===Eo&&(ce=n.DEPTH_COMPONENT16),ce}function A(F,b){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==An&&F.minFilter!==Kn?Math.log2(Math.max(b.width,b.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?b.mipmaps.length:1}function z(F){const b=F.target;b.removeEventListener("dispose",z),N(b),b.isVideoTexture&&m.delete(b)}function D(F){const b=F.target;b.removeEventListener("dispose",D),L(b)}function N(F){const b=r.get(F);if(b.__webglInit===void 0)return;const ce=F.source,pe=p.get(ce);if(pe){const ve=pe[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&W(F),Object.keys(pe).length===0&&p.delete(ce)}r.remove(F)}function W(F){const b=r.get(F);n.deleteTexture(b.__webglTexture);const ce=F.source,pe=p.get(ce);delete pe[b.__cacheKey],u.memory.textures--}function L(F){const b=r.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let ve=0;ve<b.__webglFramebuffer[pe].length;ve++)n.deleteFramebuffer(b.__webglFramebuffer[pe][ve]);else n.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)n.deleteFramebuffer(b.__webglFramebuffer[pe]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ce=F.textures;for(let pe=0,ve=ce.length;pe<ve;pe++){const me=r.get(ce[pe]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),u.memory.textures--),r.remove(ce[pe])}r.remove(F)}let R=0;function U(){R=0}function V(){const F=R;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),R+=1,F}function q(F){const b=[];return b.push(F.wrapS),b.push(F.wrapT),b.push(F.wrapR||0),b.push(F.magFilter),b.push(F.minFilter),b.push(F.anisotropy),b.push(F.internalFormat),b.push(F.format),b.push(F.type),b.push(F.generateMipmaps),b.push(F.premultiplyAlpha),b.push(F.flipY),b.push(F.unpackAlignment),b.push(F.colorSpace),b.join()}function X(F,b){const ce=r.get(F);if(F.isVideoTexture&&Ut(F),F.isRenderTargetTexture===!1&&F.version>0&&ce.__version!==F.version){const pe=F.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(ce,F,b);return}}t.bindTexture(n.TEXTURE_2D,ce.__webglTexture,n.TEXTURE0+b)}function J(F,b){const ce=r.get(F);if(F.version>0&&ce.__version!==F.version){be(ce,F,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ce.__webglTexture,n.TEXTURE0+b)}function ee(F,b){const ce=r.get(F);if(F.version>0&&ce.__version!==F.version){be(ce,F,b);return}t.bindTexture(n.TEXTURE_3D,ce.__webglTexture,n.TEXTURE0+b)}function re(F,b){const ce=r.get(F);if(F.version>0&&ce.__version!==F.version){j(ce,F,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture,n.TEXTURE0+b)}const B={[Fa]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[$u]:n.MIRRORED_REPEAT},fe={[An]:n.NEAREST,[Av]:n.NEAREST_MIPMAP_NEAREST,[Ma]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[Ou]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},ie={[Pv]:n.NEVER,[Fv]:n.ALWAYS,[Lv]:n.LESS,[Zd]:n.LEQUAL,[Dv]:n.EQUAL,[Uv]:n.GEQUAL,[Nv]:n.GREATER,[Iv]:n.NOTEQUAL};function O(F,b){if(b.type===Ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Kn||b.magFilter===Ou||b.magFilter===Ma||b.magFilter===rr||b.minFilter===Kn||b.minFilter===Ou||b.minFilter===Ma||b.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,B[b.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,B[b.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,B[b.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,fe[b.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,fe[b.minFilter]),b.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,ie[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==Ma&&b.minFilter!==rr||b.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ce=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function oe(F,b){let ce=!1;F.__webglInit===void 0&&(F.__webglInit=!0,b.addEventListener("dispose",z));const pe=b.source;let ve=p.get(pe);ve===void 0&&(ve={},p.set(pe,ve));const me=q(b);if(me!==F.__cacheKey){ve[me]===void 0&&(ve[me]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,ce=!0),ve[me].usedTimes++;const $e=ve[F.__cacheKey];$e!==void 0&&(ve[F.__cacheKey].usedTimes--,$e.usedTimes===0&&W(b)),F.__cacheKey=me,F.__webglTexture=ve[me].texture}return ce}function be(F,b,ce){let pe=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=n.TEXTURE_3D);const ve=oe(F,b),me=b.source;t.bindTexture(pe,F.__webglTexture,n.TEXTURE0+ce);const $e=r.get(me);if(me.version!==$e.__version||ve===!0){t.activeTexture(n.TEXTURE0+ce);const Pe=wt.getPrimaries(wt.workingColorSpace),Oe=b.colorSpace===Ei?null:wt.getPrimaries(b.colorSpace),ot=b.colorSpace===Ei||Pe===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Me=M(b.image,!1,o.maxTextureSize);Me=tt(b,Me);const Ie=l.convert(b.format,b.colorSpace),pt=l.convert(b.type);let et=C(b.internalFormat,Ie,pt,b.colorSpace,b.isVideoTexture);O(pe,b);let ke;const st=b.mipmaps,at=b.isVideoTexture!==!0,Rt=$e.__version===void 0||ve===!0,Y=me.dataReady,we=A(b,Me);if(b.isDepthTexture)et=T(b.format===As,b.type),Rt&&(at?t.texStorage2D(n.TEXTURE_2D,1,et,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,et,Me.width,Me.height,0,Ie,pt,null));else if(b.isDataTexture)if(st.length>0){at&&Rt&&t.texStorage2D(n.TEXTURE_2D,we,et,st[0].width,st[0].height);for(let he=0,de=st.length;he<de;he++)ke=st[he],at?Y&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ke.width,ke.height,Ie,pt,ke.data):t.texImage2D(n.TEXTURE_2D,he,et,ke.width,ke.height,0,Ie,pt,ke.data);b.generateMipmaps=!1}else at?(Rt&&t.texStorage2D(n.TEXTURE_2D,we,et,Me.width,Me.height),Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,Ie,pt,Me.data)):t.texImage2D(n.TEXTURE_2D,0,et,Me.width,Me.height,0,Ie,pt,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,et,st[0].width,st[0].height,Me.depth);for(let he=0,de=st.length;he<de;he++)if(ke=st[he],b.format!==ui)if(Ie!==null)if(at){if(Y)if(b.layerUpdates.size>0){const Ae=X_(ke.width,ke.height,b.format,b.type);for(const Ze of b.layerUpdates){const mt=ke.data.subarray(Ze*Ae/ke.data.BYTES_PER_ELEMENT,(Ze+1)*Ae/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ze,ke.width,ke.height,1,Ie,mt,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,Me.depth,Ie,ke.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,et,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,ke.width,ke.height,Me.depth,Ie,pt,ke.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,et,ke.width,ke.height,Me.depth,0,Ie,pt,ke.data)}else{at&&Rt&&t.texStorage2D(n.TEXTURE_2D,we,et,st[0].width,st[0].height);for(let he=0,de=st.length;he<de;he++)ke=st[he],b.format!==ui?Ie!==null?at?Y&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,ke.width,ke.height,Ie,ke.data):t.compressedTexImage2D(n.TEXTURE_2D,he,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Y&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ke.width,ke.height,Ie,pt,ke.data):t.texImage2D(n.TEXTURE_2D,he,et,ke.width,ke.height,0,Ie,pt,ke.data)}else if(b.isDataArrayTexture)if(at){if(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,et,Me.width,Me.height,Me.depth),Y)if(b.layerUpdates.size>0){const he=X_(Me.width,Me.height,b.format,b.type);for(const de of b.layerUpdates){const Ae=Me.data.subarray(de*he/Me.data.BYTES_PER_ELEMENT,(de+1)*he/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,Ie,pt,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ie,pt,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,Ie,pt,Me.data);else if(b.isData3DTexture)at?(Rt&&t.texStorage3D(n.TEXTURE_3D,we,et,Me.width,Me.height,Me.depth),Y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ie,pt,Me.data)):t.texImage3D(n.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,Ie,pt,Me.data);else if(b.isFramebufferTexture){if(Rt)if(at)t.texStorage2D(n.TEXTURE_2D,we,et,Me.width,Me.height);else{let he=Me.width,de=Me.height;for(let Ae=0;Ae<we;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,et,he,de,0,Ie,pt,null),he>>=1,de>>=1}}else if(st.length>0){if(at&&Rt){const he=rt(st[0]);t.texStorage2D(n.TEXTURE_2D,we,et,he.width,he.height)}for(let he=0,de=st.length;he<de;he++)ke=st[he],at?Y&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ie,pt,ke):t.texImage2D(n.TEXTURE_2D,he,et,Ie,pt,ke);b.generateMipmaps=!1}else if(at){if(Rt){const he=rt(Me);t.texStorage2D(n.TEXTURE_2D,we,et,he.width,he.height)}Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,pt,Me)}else t.texImage2D(n.TEXTURE_2D,0,et,Ie,pt,Me);x(b)&&y(pe),$e.__version=me.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function j(F,b,ce){if(b.image.length!==6)return;const pe=oe(F,b),ve=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+ce);const me=r.get(ve);if(ve.version!==me.__version||pe===!0){t.activeTexture(n.TEXTURE0+ce);const $e=wt.getPrimaries(wt.workingColorSpace),Pe=b.colorSpace===Ei?null:wt.getPrimaries(b.colorSpace),Oe=b.colorSpace===Ei||$e===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ot=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,Ie=[];for(let de=0;de<6;de++)!ot&&!Me?Ie[de]=M(b.image[de],!0,o.maxCubemapSize):Ie[de]=Me?b.image[de].image:b.image[de],Ie[de]=tt(b,Ie[de]);const pt=Ie[0],et=l.convert(b.format,b.colorSpace),ke=l.convert(b.type),st=C(b.internalFormat,et,ke,b.colorSpace),at=b.isVideoTexture!==!0,Rt=me.__version===void 0||pe===!0,Y=ve.dataReady;let we=A(b,pt);O(n.TEXTURE_CUBE_MAP,b);let he;if(ot){at&&Rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,st,pt.width,pt.height);for(let de=0;de<6;de++){he=Ie[de].mipmaps;for(let Ae=0;Ae<he.length;Ae++){const Ze=he[Ae];b.format!==ui?et!==null?at?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,0,0,Ze.width,Ze.height,et,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,st,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,0,0,Ze.width,Ze.height,et,ke,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,st,Ze.width,Ze.height,0,et,ke,Ze.data)}}}else{if(he=b.mipmaps,at&&Rt){he.length>0&&we++;const de=rt(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,st,de.width,de.height)}for(let de=0;de<6;de++)if(Me){at?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ie[de].width,Ie[de].height,et,ke,Ie[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,st,Ie[de].width,Ie[de].height,0,et,ke,Ie[de].data);for(let Ae=0;Ae<he.length;Ae++){const mt=he[Ae].image[de].image;at?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,0,0,mt.width,mt.height,et,ke,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,st,mt.width,mt.height,0,et,ke,mt.data)}}else{at?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,et,ke,Ie[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,st,et,ke,Ie[de]);for(let Ae=0;Ae<he.length;Ae++){const Ze=he[Ae];at?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,0,0,et,ke,Ze.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,st,et,ke,Ze.image[de])}}}x(b)&&y(n.TEXTURE_CUBE_MAP),me.__version=ve.version,b.onUpdate&&b.onUpdate(b)}F.__version=b.version}function ue(F,b,ce,pe,ve,me){const $e=l.convert(ce.format,ce.colorSpace),Pe=l.convert(ce.type),Oe=C(ce.internalFormat,$e,Pe,ce.colorSpace);if(!r.get(b).__hasExternalTextures){const Me=Math.max(1,b.width>>me),Ie=Math.max(1,b.height>>me);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,me,Oe,Me,Ie,b.depth,0,$e,Pe,null):t.texImage2D(ve,me,Oe,Me,Ie,0,$e,Pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),Ye(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ve,r.get(ce).__webglTexture,0,Mt(b)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ve,r.get(ce).__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(F,b,ce){if(n.bindRenderbuffer(n.RENDERBUFFER,F),b.depthBuffer){const pe=b.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,me=T(b.stencilBuffer,ve),$e=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=Mt(b);Ye(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,me,b.width,b.height):ce?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,me,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,me,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,$e,n.RENDERBUFFER,F)}else{const pe=b.textures;for(let ve=0;ve<pe.length;ve++){const me=pe[ve],$e=l.convert(me.format,me.colorSpace),Pe=l.convert(me.type),Oe=C(me.internalFormat,$e,Pe,me.colorSpace),ot=Mt(b);ce&&Ye(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,Oe,b.width,b.height):Ye(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,Oe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(F,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);const pe=r.get(b.depthTexture).__webglTexture,ve=Mt(b);if(b.depthTexture.format===ys)Ye(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(b.depthTexture.format===As)Ye(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ce(F){const b=r.get(F),ce=F.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==F.depthTexture){const pe=F.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const ve=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),b.__depthDisposeCallback=ve}b.__boundDepthTexture=pe}if(F.depthTexture&&!b.__autoAllocateDepthBuffer){if(ce)throw new Error("target.depthTexture not supported in Cube render targets");ye(b.__webglFramebuffer,F)}else if(ce){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=n.createRenderbuffer(),_e(b.__webglDepthbuffer[pe],F,!1);else{const ve=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=b.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,me)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),_e(b.__webglDepthbuffer,F,!1);else{const pe=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(F,b,ce){const pe=r.get(F);b!==void 0&&ue(pe.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ce!==void 0&&Ce(F)}function Ne(F){const b=F.texture,ce=r.get(F),pe=r.get(b);F.addEventListener("dispose",D);const ve=F.textures,me=F.isWebGLCubeRenderTarget===!0,$e=ve.length>1;if($e||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=b.version,u.memory.textures++),me){ce.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(b.mipmaps&&b.mipmaps.length>0){ce.__webglFramebuffer[Pe]=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)ce.__webglFramebuffer[Pe][Oe]=n.createFramebuffer()}else ce.__webglFramebuffer[Pe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ce.__webglFramebuffer=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)ce.__webglFramebuffer[Pe]=n.createFramebuffer()}else ce.__webglFramebuffer=n.createFramebuffer();if($e)for(let Pe=0,Oe=ve.length;Pe<Oe;Pe++){const ot=r.get(ve[Pe]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),u.memory.textures++)}if(F.samples>0&&Ye(F)===!1){ce.__webglMultisampledFramebuffer=n.createFramebuffer(),ce.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ve.length;Pe++){const Oe=ve[Pe];ce.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ce.__webglColorRenderbuffer[Pe]);const ot=l.convert(Oe.format,Oe.colorSpace),Me=l.convert(Oe.type),Ie=C(Oe.internalFormat,ot,Me,Oe.colorSpace,F.isXRRenderTarget===!0),pt=Mt(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,Ie,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(ce.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(ce.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),O(n.TEXTURE_CUBE_MAP,b);for(let Pe=0;Pe<6;Pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)ue(ce.__webglFramebuffer[Pe][Oe],F,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe);else ue(ce.__webglFramebuffer[Pe],F,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);x(b)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Pe=0,Oe=ve.length;Pe<Oe;Pe++){const ot=ve[Pe],Me=r.get(ot);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),O(n.TEXTURE_2D,ot),ue(ce.__webglFramebuffer,F,ot,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),x(ot)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Pe=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Pe=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,pe.__webglTexture),O(Pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Oe=0;Oe<b.mipmaps.length;Oe++)ue(ce.__webglFramebuffer[Oe],F,b,n.COLOR_ATTACHMENT0,Pe,Oe);else ue(ce.__webglFramebuffer,F,b,n.COLOR_ATTACHMENT0,Pe,0);x(b)&&y(Pe),t.unbindTexture()}F.depthBuffer&&Ce(F)}function ft(F){const b=F.textures;for(let ce=0,pe=b.length;ce<pe;ce++){const ve=b[ce];if(x(ve)){const me=F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,$e=r.get(ve).__webglTexture;t.bindTexture(me,$e),y(me),t.unbindTexture()}}}const k=[],_t=[];function ht(F){if(F.samples>0){if(Ye(F)===!1){const b=F.textures,ce=F.width,pe=F.height;let ve=n.COLOR_BUFFER_BIT;const me=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$e=r.get(F),Pe=b.length>1;if(Pe)for(let Oe=0;Oe<b.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,$e.__webglColorRenderbuffer[Oe]);const ot=r.get(b[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ot,0)}n.blitFramebuffer(0,0,ce,pe,0,0,ce,pe,ve,n.NEAREST),h===!0&&(k.length=0,_t.length=0,k.push(n.COLOR_ATTACHMENT0+Oe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(k.push(me),_t.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let Oe=0;Oe<b.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,$e.__webglColorRenderbuffer[Oe]);const ot=r.get(b[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,$e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ot,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const b=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Mt(F){return Math.min(o.maxSamples,F.samples)}function Ye(F){const b=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ut(F){const b=u.render.frame;m.get(F)!==b&&(m.set(F,b),F.update())}function tt(F,b){const ce=F.colorSpace,pe=F.format,ve=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ce!==fr&&ce!==Ei&&(wt.getTransfer(ce)===Lt?(pe!==ui||ve!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ce)),b}function rt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=ee,this.setTextureCube=re,this.rebindTextures=De,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ye}function ex(n,e){function t(r,o=Ei){let l;const u=wt.getTransfer(o);if(r===Oi)return n.UNSIGNED_BYTE;if(r===Oc)return n.UNSIGNED_SHORT_4_4_4_4;if(r===kc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Hd)return n.BYTE;if(r===Vd)return n.SHORT;if(r===Eo)return n.UNSIGNED_SHORT;if(r===Fc)return n.INT;if(r===Xr)return n.UNSIGNED_INT;if(r===Ii)return n.FLOAT;if(r===Ro)return n.HALF_FLOAT;if(r===Wd)return n.ALPHA;if(r===Xd)return n.RGB;if(r===ui)return n.RGBA;if(r===jd)return n.LUMINANCE;if(r===Yd)return n.LUMINANCE_ALPHA;if(r===ys)return n.DEPTH_COMPONENT;if(r===As)return n.DEPTH_STENCIL;if(r===$d)return n.RED;if(r===zc)return n.RED_INTEGER;if(r===qd)return n.RG;if(r===Bc)return n.RG_INTEGER;if(r===Hc)return n.RGBA_INTEGER;if(r===Ca||r===Ra||r===ba||r===Pa)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ca)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ra)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ba)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ca)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ra)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ba)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pa)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qu||r===Ku||r===Zu||r===Qu)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===qu)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ku)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zu)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qu)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ju||r===ec||r===tc)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ju||r===ec)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===tc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nc||r===ic||r===rc||r===sc||r===oc||r===ac||r===lc||r===uc||r===cc||r===fc||r===hc||r===dc||r===pc||r===mc)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===nc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ic)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ac)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mc)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===La||r===gc||r===_c)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===La)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gc)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_c)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kd||r===vc||r===xc||r===yc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===La)return l.COMPRESSED_RED_RGTC1_EXT;if(r===vc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}class tx extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vo extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GT={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,r),y=this._getHandJoint(d,M);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],p=m.position.distanceTo(_.position),v=.02,E=.005;d.inputState.pinching&&p>v+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=v-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(GT)))}return c!==null&&(c.visible=o!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new vo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XT=`
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

}`;class jT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new yn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Jn({vertexShader:WT,fragmentShader:XT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zn(new qa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YT extends Yr{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",h=1,d=null,m=null,_=null,p=null,v=null,E=null;const M=new jT,x=t.getContextAttributes();let y=null,C=null;const T=[],A=[],z=new it;let D=null;const N=new qn;N.layers.enable(1),N.viewport=new $t;const W=new qn;W.layers.enable(2),W.viewport=new $t;const L=[N,W],R=new tx;R.layers.enable(1),R.layers.enable(2);let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ue=T[j];return ue===void 0&&(ue=new ad,T[j]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(j){let ue=T[j];return ue===void 0&&(ue=new ad,T[j]=ue),ue.getGripSpace()},this.getHand=function(j){let ue=T[j];return ue===void 0&&(ue=new ad,T[j]=ue),ue.getHandSpace()};function q(j){const ue=A.indexOf(j.inputSource);if(ue===-1)return;const _e=T[ue];_e!==void 0&&(_e.update(j.inputSource,j.frame,d||u),_e.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",X),o.removeEventListener("inputsourceschange",J);for(let j=0;j<T.length;j++){const ue=A[j];ue!==null&&(A[j]=null,T[j].disconnect(ue))}U=null,V=null,M.reset(),e.setRenderTarget(y),v=null,p=null,_=null,o=null,C=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){c=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(j){d=j},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(j){if(o=j,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",X),o.addEventListener("inputsourceschange",J),x.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(z),o.renderState.layers===void 0){const ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};v=new XRWebGLLayer(o,t,ue),o.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),C=new ur(v.framebufferWidth,v.framebufferHeight,{format:ui,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ue=null,_e=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?As:ys,_e=x.stencil?Ts:Xr);const Ce={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};_=new XRWebGLBinding(o,t),p=_.createProjectionLayer(Ce),o.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),C=new ur(p.textureWidth,p.textureHeight,{format:ui,type:Oi,depthTexture:new up(p.textureWidth,p.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await o.requestReferenceSpace(c),be.setContext(o),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function J(j){for(let ue=0;ue<j.removed.length;ue++){const _e=j.removed[ue],ye=A.indexOf(_e);ye>=0&&(A[ye]=null,T[ye].disconnect(_e))}for(let ue=0;ue<j.added.length;ue++){const _e=j.added[ue];let ye=A.indexOf(_e);if(ye===-1){for(let De=0;De<T.length;De++)if(De>=A.length){A.push(_e),ye=De;break}else if(A[De]===null){A[De]=_e,ye=De;break}if(ye===-1)break}const Ce=T[ye];Ce&&Ce.connect(_e)}}const ee=new K,re=new K;function B(j,ue,_e){ee.setFromMatrixPosition(ue.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);const ye=ee.distanceTo(re),Ce=ue.projectionMatrix.elements,De=_e.projectionMatrix.elements,Ne=Ce[14]/(Ce[10]-1),ft=Ce[14]/(Ce[10]+1),k=(Ce[9]+1)/Ce[5],_t=(Ce[9]-1)/Ce[5],ht=(Ce[8]-1)/Ce[0],Mt=(De[8]+1)/De[0],Ye=Ne*ht,Ut=Ne*Mt,tt=ye/(-ht+Mt),rt=tt*-ht;if(ue.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(rt),j.translateZ(tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ce[10]===-1)j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const F=Ne+tt,b=ft+tt,ce=Ye-rt,pe=Ut+(ye-rt),ve=k*ft/b*F,me=_t*ft/b*F;j.projectionMatrix.makePerspective(ce,pe,ve,me,F,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function fe(j,ue){ue===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ue.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(o===null)return;let ue=j.near,_e=j.far;M.texture!==null&&(M.depthNear>0&&(ue=M.depthNear),M.depthFar>0&&(_e=M.depthFar)),R.near=W.near=N.near=ue,R.far=W.far=N.far=_e,(U!==R.near||V!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,V=R.far);const ye=j.parent,Ce=R.cameras;fe(R,ye);for(let De=0;De<Ce.length;De++)fe(Ce[De],ye);Ce.length===2?B(R,N,W):R.projectionMatrix.copy(N.projectionMatrix),ie(j,R,ye)};function ie(j,ue,_e){_e===null?j.matrix.copy(ue.matrixWorld):(j.matrix.copy(_e.matrixWorld),j.matrix.invert(),j.matrix.multiply(ue.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ha*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&v===null))return h},this.setFoveation=function(j){h=j,p!==null&&(p.fixedFoveation=j),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let O=null;function oe(j,ue){if(m=ue.getViewerPose(d||u),E=ue,m!==null){const _e=m.views;v!==null&&(e.setRenderTargetFramebuffer(C,v.framebuffer),e.setRenderTarget(C));let ye=!1;_e.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let De=0;De<_e.length;De++){const Ne=_e[De];let ft=null;if(v!==null)ft=v.getViewport(Ne);else{const _t=_.getViewSubImage(p,Ne);ft=_t.viewport,De===0&&(e.setRenderTargetTextures(C,_t.colorTexture,p.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(C))}let k=L[De];k===void 0&&(k=new qn,k.layers.enable(De),k.viewport=new $t,L[De]=k),k.matrix.fromArray(Ne.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Ne.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(ft.x,ft.y,ft.width,ft.height),De===0&&(R.matrix.copy(k.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(k)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const De=_.getDepthInformation(_e[0]);De&&De.isValid&&De.texture&&M.init(e,De,o.renderState)}}for(let _e=0;_e<T.length;_e++){const ye=A[_e],Ce=T[_e];ye!==null&&Ce!==void 0&&Ce.update(ye,ue,d||u)}O&&O(j,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const be=new Yv;be.setAnimationLoop(oe),this.setAnimationLoop=function(j){O=j},this.dispose=function(){}}}const ds=new ci,$T=new kt;function qT(n,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,Gv(n)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,C,T,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),_(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y)):y.isMeshStandardMaterial?(l(x,y),p(x,y),y.isMeshPhysicalMaterial&&v(x,y,A)):y.isMeshMatcapMaterial?(l(x,y),E(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),M(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?h(x,y,C,T):y.isSpriteMaterial?d(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===xn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===xn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const C=e.get(y),T=C.envMap,A=C.envMapRotation;T&&(x.envMap.value=T,ds.copy(A),ds.x*=-1,ds.y*=-1,ds.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),x.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler(ds)),x.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function h(x,y,C,T){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*C,x.scale.value=T*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function p(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function v(x,y,C){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===xn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){const C=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function KT(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,T){const A=T.program;r.uniformBlockBinding(C,A)}function d(C,T){let A=o[C.id];A===void 0&&(E(C),A=m(C),o[C.id]=A,C.addEventListener("dispose",x));const z=T.program;r.updateUBOMapping(C,z);const D=e.render.frame;l[C.id]!==D&&(p(C),l[C.id]=D)}function m(C){const T=_();C.__bindingPointIndex=T;const A=n.createBuffer(),z=C.__size,D=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,z,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,A),A}function _(){for(let C=0;C<c;C++)if(u.indexOf(C)===-1)return u.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const T=o[C.id],A=C.uniforms,z=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let D=0,N=A.length;D<N;D++){const W=Array.isArray(A[D])?A[D]:[A[D]];for(let L=0,R=W.length;L<R;L++){const U=W[L];if(v(U,D,L,z)===!0){const V=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let J=0;J<q.length;J++){const ee=q[J],re=M(ee);typeof ee=="number"||typeof ee=="boolean"?(U.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,V+X,U.__data)):ee.isMatrix3?(U.__data[0]=ee.elements[0],U.__data[1]=ee.elements[1],U.__data[2]=ee.elements[2],U.__data[3]=0,U.__data[4]=ee.elements[3],U.__data[5]=ee.elements[4],U.__data[6]=ee.elements[5],U.__data[7]=0,U.__data[8]=ee.elements[6],U.__data[9]=ee.elements[7],U.__data[10]=ee.elements[8],U.__data[11]=0):(ee.toArray(U.__data,X),X+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(C,T,A,z){const D=C.value,N=T+"_"+A;if(z[N]===void 0)return typeof D=="number"||typeof D=="boolean"?z[N]=D:z[N]=D.clone(),!0;{const W=z[N];if(typeof D=="number"||typeof D=="boolean"){if(W!==D)return z[N]=D,!0}else if(W.equals(D)===!1)return W.copy(D),!0}return!1}function E(C){const T=C.uniforms;let A=0;const z=16;for(let N=0,W=T.length;N<W;N++){const L=Array.isArray(T[N])?T[N]:[T[N]];for(let R=0,U=L.length;R<U;R++){const V=L[R],q=Array.isArray(V.value)?V.value:[V.value];for(let X=0,J=q.length;X<J;X++){const ee=q[X],re=M(ee),B=A%z,fe=B%re.boundary,ie=B+fe;A+=fe,ie!==0&&z-ie<re.storage&&(A+=z-ie),V.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=re.storage}}}const D=A%z;return D>0&&(A+=z-D),C.__size=A,C.__cache={},this}function M(C){const T={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(T.boundary=4,T.storage=4):C.isVector2?(T.boundary=8,T.storage=8):C.isVector3||C.isColor?(T.boundary=16,T.storage=12):C.isVector4?(T.boundary=16,T.storage=16):C.isMatrix3?(T.boundary=48,T.storage=48):C.isMatrix4?(T.boundary=64,T.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),T}function x(C){const T=C.target;T.removeEventListener("dispose",x);const A=u.indexOf(T.__bindingPointIndex);u.splice(A,1),n.deleteBuffer(o[T.id]),delete o[T.id],delete l[T.id]}function y(){for(const C in o)n.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:d,dispose:y}}class nx{constructor(e={}){const{canvas:t=kv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=u;const v=new Uint32Array(4),E=new Int32Array(4);let M=null,x=null;const y=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=ar,this.toneMappingExposure=1;const T=this;let A=!1,z=0,D=0,N=null,W=-1,L=null;const R=new $t,U=new $t;let V=null;const q=new Ge(0);let X=0,J=t.width,ee=t.height,re=1,B=null,fe=null;const ie=new $t(0,0,J,ee),O=new $t(0,0,J,ee);let oe=!1;const be=new Xc;let j=!1,ue=!1;const _e=new kt,ye=new K,Ce=new $t,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ft(){return N===null?re:1}let k=r;function _t(P,$){return t.getContext(P,$)}try{const P={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ic}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),k===null){const $="webgl2";if(k=_t($,P),k===null)throw _t($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ht,Mt,Ye,Ut,tt,rt,F,b,ce,pe,ve,me,$e,Pe,Oe,ot,Me,Ie,pt,et,ke,st,at,Rt;function Y(){ht=new a1(k),ht.init(),st=new ex(k,ht),Mt=new t1(k,ht,e,st),Ye=new BT(k),Ut=new c1(k),tt=new RT,rt=new VT(k,ht,Ye,tt,Mt,st,Ut),F=new i1(T),b=new o1(T),ce=new _M(k),at=new Jw(k,ce),pe=new l1(k,ce,Ut,at),ve=new h1(k,pe,ce,Ut),pt=new f1(k,Mt,rt),ot=new n1(tt),me=new CT(T,F,b,ht,Mt,at,ot),$e=new qT(T,tt),Pe=new PT,Oe=new FT(ht),Ie=new Qw(T,F,b,Ye,ve,p,h),Me=new zT(T,ve,Mt),Rt=new KT(k,Ut,Mt,Ye),et=new e1(k,ht,Ut),ke=new u1(k,ht,Ut),Ut.programs=me.programs,T.capabilities=Mt,T.extensions=ht,T.properties=tt,T.renderLists=Pe,T.shadowMap=Me,T.state=Ye,T.info=Ut}Y();const we=new YT(T,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=ht.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ht.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(P){P!==void 0&&(re=P,this.setSize(J,ee,!1))},this.getSize=function(P){return P.set(J,ee)},this.setSize=function(P,$,se=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=P,ee=$,t.width=Math.floor(P*re),t.height=Math.floor($*re),se===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(J*re,ee*re).floor()},this.setDrawingBufferSize=function(P,$,se){J=P,ee=$,re=se,t.width=Math.floor(P*se),t.height=Math.floor($*se),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(ie)},this.setViewport=function(P,$,se,ae){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,$,se,ae),Ye.viewport(R.copy(ie).multiplyScalar(re).round())},this.getScissor=function(P){return P.copy(O)},this.setScissor=function(P,$,se,ae){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,$,se,ae),Ye.scissor(U.copy(O).multiplyScalar(re).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(P){Ye.setScissorTest(oe=P)},this.setOpaqueSort=function(P){B=P},this.setTransparentSort=function(P){fe=P},this.getClearColor=function(P){return P.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(P=!0,$=!0,se=!0){let ae=0;if(P){let Z=!1;if(N!==null){const Te=N.texture.format;Z=Te===Hc||Te===Bc||Te===zc}if(Z){const Te=N.texture.type,Ue=Te===Oi||Te===Xr||Te===Eo||Te===Ts||Te===Oc||Te===kc,He=Ie.getClearColor(),Re=Ie.getClearAlpha(),Je=He.r,Qe=He.g,Xe=He.b;Ue?(v[0]=Je,v[1]=Qe,v[2]=Xe,v[3]=Re,k.clearBufferuiv(k.COLOR,0,v)):(E[0]=Je,E[1]=Qe,E[2]=Xe,E[3]=Re,k.clearBufferiv(k.COLOR,0,E))}else ae|=k.COLOR_BUFFER_BIT}$&&(ae|=k.DEPTH_BUFFER_BIT),se&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Pe.dispose(),Oe.dispose(),tt.dispose(),F.dispose(),b.dispose(),ve.dispose(),at.dispose(),Rt.dispose(),me.dispose(),we.dispose(),we.removeEventListener("sessionstart",Bn),we.removeEventListener("sessionend",dr),fi.stop()};function he(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=Ut.autoReset,$=Me.enabled,se=Me.autoUpdate,ae=Me.needsUpdate,Z=Me.type;Y(),Ut.autoReset=P,Me.enabled=$,Me.autoUpdate=se,Me.needsUpdate=ae,Me.type=Z}function Ae(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ze(P){const $=P.target;$.removeEventListener("dispose",Ze),mt($)}function mt(P){zt(P),tt.remove(P)}function zt(P){const $=tt.get(P).programs;$!==void 0&&($.forEach(function(se){me.releaseProgram(se)}),P.isShaderMaterial&&me.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,se,ae,Z,Te){$===null&&($=De);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,He=Jc(P,$,se,ae,Z);Ye.setMaterial(ae,Ue);let Re=se.index,Je=1;if(ae.wireframe===!0){if(Re=pe.getWireframeAttribute(se),Re===void 0)return;Je=2}const Qe=se.drawRange,Xe=se.attributes.position;let gt=Qe.start*Je,Ft=(Qe.start+Qe.count)*Je;Te!==null&&(gt=Math.max(gt,Te.start*Je),Ft=Math.min(Ft,(Te.start+Te.count)*Je)),Re!==null?(gt=Math.max(gt,0),Ft=Math.min(Ft,Re.count)):Xe!=null&&(gt=Math.max(gt,0),Ft=Math.min(Ft,Xe.count));const Dt=Ft-gt;if(Dt<0||Dt===1/0)return;at.setup(Z,ae,He,se,Re);let tn,lt=et;if(Re!==null&&(tn=ce.get(Re),lt=ke,lt.setIndex(tn)),Z.isMesh)ae.wireframe===!0?(Ye.setLineWidth(ae.wireframeLinewidth*ft()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if(Z.isLine){let je=ae.linewidth;je===void 0&&(je=1),Ye.setLineWidth(je*ft()),Z.isLineSegments?lt.setMode(k.LINES):Z.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else Z.isPoints?lt.setMode(k.POINTS):Z.isSprite&&lt.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)lt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))lt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const je=Z._multiDrawStarts,Tt=Z._multiDrawCounts,yt=Z._multiDrawCount,Hn=Re?ce.get(Re).bytesPerElement:1,gr=tt.get(ae).currentProgram.getUniforms();for(let nn=0;nn<yt;nn++)gr.setValue(k,"_gl_DrawID",nn),lt.render(je[nn]/Hn,Tt[nn])}else if(Z.isInstancedMesh)lt.renderInstances(gt,Dt,Z.count);else if(se.isInstancedBufferGeometry){const je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Tt=Math.min(se.instanceCount,je);lt.renderInstances(gt,Dt,Tt)}else lt.render(gt,Dt)};function Xt(P,$,se){P.transparent===!0&&P.side===Ni&&P.forceSinglePass===!1?(P.side=xn,P.needsUpdate=!0,mr(P,$,se),P.side=lr,P.needsUpdate=!0,mr(P,$,se),P.side=Ni):mr(P,$,se)}this.compile=function(P,$,se=null){se===null&&(se=P),x=Oe.get(se),x.init($),C.push(x),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),P!==se&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const ae=new Set;return P.traverse(function(Z){const Te=Z.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const He=Te[Ue];Xt(He,se,Z),ae.add(He)}else Xt(Te,se,Z),ae.add(Te)}),C.pop(),x=null,ae},this.compileAsync=function(P,$,se=null){const ae=this.compile(P,$,se);return new Promise(Z=>{function Te(){if(ae.forEach(function(Ue){tt.get(Ue).currentProgram.isReady()&&ae.delete(Ue)}),ae.size===0){Z(P);return}setTimeout(Te,10)}ht.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let vt=null;function zn(P){vt&&vt(P)}function Bn(){fi.stop()}function dr(){fi.start()}const fi=new Yv;fi.setAnimationLoop(zn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(P){vt=P,we.setAnimationLoop(P),P===null?fi.stop():fi.start()},we.addEventListener("sessionstart",Bn),we.addEventListener("sessionend",dr),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera($),$=we.getCamera()),P.isScene===!0&&P.onBeforeRender(T,P,$,N),x=Oe.get(P,C.length),x.init($),C.push(x),_e.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),be.setFromProjectionMatrix(_e),ue=this.localClippingEnabled,j=ot.init(this.clippingPlanes,ue),M=Pe.get(P,y.length),M.init(),y.push(M),we.enabled===!0&&we.isPresenting===!0){const Te=T.xr.getDepthSensingMesh();Te!==null&&zi(Te,$,-1/0,T.sortObjects)}zi(P,$,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(B,fe),Ne=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Ne&&Ie.addToRenderList(M,P),this.info.render.frame++,j===!0&&ot.beginShadows();const se=x.state.shadowsArray;Me.render(se,P,$),j===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=M.opaque,Z=M.transmissive;if(x.setupLights(),$.isArrayCamera){const Te=$.cameras;if(Z.length>0)for(let Ue=0,He=Te.length;Ue<He;Ue++){const Re=Te[Ue];pr(ae,Z,P,Re)}Ne&&Ie.render(P);for(let Ue=0,He=Te.length;Ue<He;Ue++){const Re=Te[Ue];Ja(M,P,Re,Re.viewport)}}else Z.length>0&&pr(ae,Z,P,$),Ne&&Ie.render(P),Ja(M,P,$);N!==null&&(rt.updateMultisampleRenderTarget(N),rt.updateRenderTargetMipmap(N)),P.isScene===!0&&P.onAfterRender(T,P,$),at.resetDefaultState(),W=-1,L=null,C.pop(),C.length>0?(x=C[C.length-1],j===!0&&ot.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,y.pop(),y.length>0?M=y[y.length-1]:M=null};function zi(P,$,se,ae){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||be.intersectsSprite(P)){ae&&Ce.setFromMatrixPosition(P.matrixWorld).applyMatrix4(_e);const Ue=ve.update(P),He=P.material;He.visible&&M.push(P,Ue,He,se,Ce.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||be.intersectsObject(P))){const Ue=ve.update(P),He=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ce.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ce.copy(Ue.boundingSphere.center)),Ce.applyMatrix4(P.matrixWorld).applyMatrix4(_e)),Array.isArray(He)){const Re=Ue.groups;for(let Je=0,Qe=Re.length;Je<Qe;Je++){const Xe=Re[Je],gt=He[Xe.materialIndex];gt&&gt.visible&&M.push(P,Ue,gt,se,Ce.z,Xe)}}else He.visible&&M.push(P,Ue,He,se,Ce.z,null)}}const Te=P.children;for(let Ue=0,He=Te.length;Ue<He;Ue++)zi(Te[Ue],$,se,ae)}function Ja(P,$,se,ae){const Z=P.opaque,Te=P.transmissive,Ue=P.transparent;x.setupLightsView(se),j===!0&&ot.setGlobalState(T.clippingPlanes,se),ae&&Ye.viewport(R.copy(ae)),Z.length>0&&Bi(Z,$,se),Te.length>0&&Bi(Te,$,se),Ue.length>0&&Bi(Ue,$,se),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function pr(P,$,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ae.id]===void 0&&(x.state.transmissionRenderTarget[ae.id]=new ur(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Ro:Oi,minFilter:rr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Te=x.state.transmissionRenderTarget[ae.id],Ue=ae.viewport||R;Te.setSize(Ue.z,Ue.w);const He=T.getRenderTarget();T.setRenderTarget(Te),T.getClearColor(q),X=T.getClearAlpha(),X<1&&T.setClearColor(16777215,.5),T.clear(),Ne&&Ie.render(se);const Re=T.toneMapping;T.toneMapping=ar;const Je=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),x.setupLightsView(ae),j===!0&&ot.setGlobalState(T.clippingPlanes,ae),Bi(P,se,ae),rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Xe=0,gt=$.length;Xe<gt;Xe++){const Ft=$[Xe],Dt=Ft.object,tn=Ft.geometry,lt=Ft.material,je=Ft.group;if(lt.side===Ni&&Dt.layers.test(ae.layers)){const Tt=lt.side;lt.side=xn,lt.needsUpdate=!0,$r(Dt,se,ae,tn,lt,je),lt.side=Tt,lt.needsUpdate=!0,Qe=!0}}Qe===!0&&(rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te))}T.setRenderTarget(He),T.setClearColor(q,X),Je!==void 0&&(ae.viewport=Je),T.toneMapping=Re}function Bi(P,$,se){const ae=$.isScene===!0?$.overrideMaterial:null;for(let Z=0,Te=P.length;Z<Te;Z++){const Ue=P[Z],He=Ue.object,Re=Ue.geometry,Je=ae===null?Ue.material:ae,Qe=Ue.group;He.layers.test(se.layers)&&$r(He,$,se,Re,Je,Qe)}}function $r(P,$,se,ae,Z,Te){P.onBeforeRender(T,$,se,ae,Z,Te),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(T,$,se,ae,P,Te),Z.transparent===!0&&Z.side===Ni&&Z.forceSinglePass===!1?(Z.side=xn,Z.needsUpdate=!0,T.renderBufferDirect(se,$,ae,Z,P,Te),Z.side=lr,Z.needsUpdate=!0,T.renderBufferDirect(se,$,ae,Z,P,Te),Z.side=Ni):T.renderBufferDirect(se,$,ae,Z,P,Te),P.onAfterRender(T,$,se,ae,Z,Te)}function mr(P,$,se){$.isScene!==!0&&($=De);const ae=tt.get(P),Z=x.state.lights,Te=x.state.shadowsArray,Ue=Z.state.version,He=me.getParameters(P,Z.state,Te,$,se),Re=me.getProgramCacheKey(He);let Je=ae.programs;ae.environment=P.isMeshStandardMaterial?$.environment:null,ae.fog=$.fog,ae.envMap=(P.isMeshStandardMaterial?b:F).get(P.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,Je===void 0&&(P.addEventListener("dispose",Ze),Je=new Map,ae.programs=Je);let Qe=Je.get(Re);if(Qe!==void 0){if(ae.currentProgram===Qe&&ae.lightsStateVersion===Ue)return tl(P,He),Qe}else He.uniforms=me.getUniforms(P),P.onBeforeCompile(He,T),Qe=me.acquireProgram(He,Re),Je.set(Re,Qe),ae.uniforms=He.uniforms;const Xe=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=ot.uniform),tl(P,He),ae.needsLights=nl(P),ae.lightsStateVersion=Ue,ae.needsLights&&(Xe.ambientLightColor.value=Z.state.ambient,Xe.lightProbe.value=Z.state.probe,Xe.directionalLights.value=Z.state.directional,Xe.directionalLightShadows.value=Z.state.directionalShadow,Xe.spotLights.value=Z.state.spot,Xe.spotLightShadows.value=Z.state.spotShadow,Xe.rectAreaLights.value=Z.state.rectArea,Xe.ltc_1.value=Z.state.rectAreaLTC1,Xe.ltc_2.value=Z.state.rectAreaLTC2,Xe.pointLights.value=Z.state.point,Xe.pointLightShadows.value=Z.state.pointShadow,Xe.hemisphereLights.value=Z.state.hemi,Xe.directionalShadowMap.value=Z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xe.spotShadowMap.value=Z.state.spotShadowMap,Xe.spotLightMatrix.value=Z.state.spotLightMatrix,Xe.spotLightMap.value=Z.state.spotLightMap,Xe.pointShadowMap.value=Z.state.pointShadowMap,Xe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ae.currentProgram=Qe,ae.uniformsList=null,Qe}function el(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=ku.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function tl(P,$){const se=tt.get(P);se.outputColorSpace=$.outputColorSpace,se.batching=$.batching,se.batchingColor=$.batchingColor,se.instancing=$.instancing,se.instancingColor=$.instancingColor,se.instancingMorph=$.instancingMorph,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function Jc(P,$,se,ae,Z){$.isScene!==!0&&($=De),rt.resetTextureUnits();const Te=$.fog,Ue=ae.isMeshStandardMaterial?$.environment:null,He=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fr,Re=(ae.isMeshStandardMaterial?b:F).get(ae.envMap||Ue),Je=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Qe=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!se.morphAttributes.position,gt=!!se.morphAttributes.normal,Ft=!!se.morphAttributes.color;let Dt=ar;ae.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Dt=T.toneMapping);const tn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,lt=tn!==void 0?tn.length:0,je=tt.get(ae),Tt=x.state.lights;if(j===!0&&(ue===!0||P!==L)){const Rn=P===L&&ae.id===W;ot.setState(ae,P,Rn)}let yt=!1;ae.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Tt.state.version||je.outputColorSpace!==He||Z.isBatchedMesh&&je.batching===!1||!Z.isBatchedMesh&&je.batching===!0||Z.isBatchedMesh&&je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&je.instancing===!1||!Z.isInstancedMesh&&je.instancing===!0||Z.isSkinnedMesh&&je.skinning===!1||!Z.isSkinnedMesh&&je.skinning===!0||Z.isInstancedMesh&&je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&je.instancingMorph===!1&&Z.morphTexture!==null||je.envMap!==Re||ae.fog===!0&&je.fog!==Te||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ot.numPlanes||je.numIntersection!==ot.numIntersection)||je.vertexAlphas!==Je||je.vertexTangents!==Qe||je.morphTargets!==Xe||je.morphNormals!==gt||je.morphColors!==Ft||je.toneMapping!==Dt||je.morphTargetsCount!==lt)&&(yt=!0):(yt=!0,je.__version=ae.version);let Hn=je.currentProgram;yt===!0&&(Hn=mr(ae,$,Z));let gr=!1,nn=!1,_r=!1;const bt=Hn.getUniforms(),Vn=je.uniforms;if(Ye.useProgram(Hn.program)&&(gr=!0,nn=!0,_r=!0),ae.id!==W&&(W=ae.id,nn=!0),gr||L!==P){bt.setValue(k,"projectionMatrix",P.projectionMatrix),bt.setValue(k,"viewMatrix",P.matrixWorldInverse);const Rn=bt.map.cameraPosition;Rn!==void 0&&Rn.setValue(k,ye.setFromMatrixPosition(P.matrixWorld)),Mt.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&bt.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),L!==P&&(L=P,nn=!0,_r=!0)}if(Z.isSkinnedMesh){bt.setOptional(k,Z,"bindMatrix"),bt.setOptional(k,Z,"bindMatrixInverse");const Rn=Z.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),bt.setValue(k,"boneTexture",Rn.boneTexture,rt))}Z.isBatchedMesh&&(bt.setOptional(k,Z,"batchingTexture"),bt.setValue(k,"batchingTexture",Z._matricesTexture,rt),bt.setOptional(k,Z,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",Z._indirectTexture,rt),bt.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",Z._colorsTexture,rt));const Io=se.morphAttributes;if((Io.position!==void 0||Io.normal!==void 0||Io.color!==void 0)&&pt.update(Z,se,Hn),(nn||je.receiveShadow!==Z.receiveShadow)&&(je.receiveShadow=Z.receiveShadow,bt.setValue(k,"receiveShadow",Z.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Vn.envMap.value=Re,Vn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&$.environment!==null&&(Vn.envMapIntensity.value=$.environmentIntensity),nn&&(bt.setValue(k,"toneMappingExposure",T.toneMappingExposure),je.needsLights&&Hi(Vn,_r),Te&&ae.fog===!0&&$e.refreshFogUniforms(Vn,Te),$e.refreshMaterialUniforms(Vn,ae,re,ee,x.state.transmissionRenderTarget[P.id]),ku.upload(k,el(je),Vn,rt)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(ku.upload(k,el(je),Vn,rt),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&bt.setValue(k,"center",Z.center),bt.setValue(k,"modelViewMatrix",Z.modelViewMatrix),bt.setValue(k,"normalMatrix",Z.normalMatrix),bt.setValue(k,"modelMatrix",Z.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Rn=ae.uniformsGroups;for(let qr=0,il=Rn.length;qr<il;qr++){const bs=Rn[qr];Rt.update(bs,Hn),Rt.bind(bs,Hn)}}return Hn}function Hi(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function nl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(P,$,se){tt.get(P.texture).__webglTexture=$,tt.get(P.depthTexture).__webglTexture=se;const ae=tt.get(P);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){const se=tt.get(P);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,se=0){N=P,z=$,D=se;let ae=!0,Z=null,Te=!1,Ue=!1;if(P){const Re=tt.get(P);if(Re.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(k.FRAMEBUFFER,null),ae=!1;else if(Re.__webglFramebuffer===void 0)rt.setupRenderTarget(P);else if(Re.__hasExternalTextures)rt.rebindTextures(P,tt.get(P.texture).__webglTexture,tt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Xe=P.depthTexture;if(Re.__boundDepthTexture!==Xe){if(Xe!==null&&tt.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(P)}}const Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ue=!0);const Qe=tt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qe[$])?Z=Qe[$][se]:Z=Qe[$],Te=!0):P.samples>0&&rt.useMultisampledRTT(P)===!1?Z=tt.get(P).__webglMultisampledFramebuffer:Array.isArray(Qe)?Z=Qe[se]:Z=Qe,R.copy(P.viewport),U.copy(P.scissor),V=P.scissorTest}else R.copy(ie).multiplyScalar(re).floor(),U.copy(O).multiplyScalar(re).floor(),V=oe;if(Ye.bindFramebuffer(k.FRAMEBUFFER,Z)&&ae&&Ye.drawBuffers(P,Z),Ye.viewport(R),Ye.scissor(U),Ye.setScissorTest(V),Te){const Re=tt.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re.__webglTexture,se)}else if(Ue){const Re=tt.get(P.texture),Je=$||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Re.__webglTexture,se||0,Je)}W=-1},this.readRenderTargetPixels=function(P,$,se,ae,Z,Te,Ue){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=tt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He){Ye.bindFramebuffer(k.FRAMEBUFFER,He);try{const Re=P.texture,Je=Re.format,Qe=Re.type;if(!Mt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-ae&&se>=0&&se<=P.height-Z&&k.readPixels($,se,ae,Z,st.convert(Je),st.convert(Qe),Te)}finally{const Re=N!==null?tt.get(N).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(P,$,se,ae,Z,Te,Ue){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=tt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(He=He[Ue]),He){Ye.bindFramebuffer(k.FRAMEBUFFER,He);try{const Re=P.texture,Je=Re.format,Qe=Re.type;if(!Mt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-ae&&se>=0&&se<=P.height-Z){const Xe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Xe),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),k.readPixels($,se,ae,Z,st.convert(Je),st.convert(Qe),0),k.flush();const gt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await QS(k,gt,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,Xe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te)}finally{k.deleteBuffer(Xe),k.deleteSync(gt)}return Te}}finally{const Re=N!==null?tt.get(N).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(P,$=null,se=0){P.isTexture!==!0&&(Ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);const ae=Math.pow(2,-se),Z=Math.floor(P.image.width*ae),Te=Math.floor(P.image.height*ae),Ue=$!==null?$.x:0,He=$!==null?$.y:0;rt.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,Ue,He,Z,Te),Ye.unbindTexture()},this.copyTextureToTexture=function(P,$,se=null,ae=null,Z=0){P.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,P=arguments[1],$=arguments[2],Z=arguments[3]||0,se=null);let Te,Ue,He,Re,Je,Qe;se!==null?(Te=se.max.x-se.min.x,Ue=se.max.y-se.min.y,He=se.min.x,Re=se.min.y):(Te=P.image.width,Ue=P.image.height,He=0,Re=0),ae!==null?(Je=ae.x,Qe=ae.y):(Je=0,Qe=0);const Xe=st.convert($.format),gt=st.convert($.type);rt.setTexture2D($,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);const Ft=k.getParameter(k.UNPACK_ROW_LENGTH),Dt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),tn=k.getParameter(k.UNPACK_SKIP_PIXELS),lt=k.getParameter(k.UNPACK_SKIP_ROWS),je=k.getParameter(k.UNPACK_SKIP_IMAGES),Tt=P.isCompressedTexture?P.mipmaps[Z]:P.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Tt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,He),k.pixelStorei(k.UNPACK_SKIP_ROWS,Re),P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Z,Je,Qe,Te,Ue,Xe,gt,Tt.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Z,Je,Qe,Tt.width,Tt.height,Xe,Tt.data):k.texSubImage2D(k.TEXTURE_2D,Z,Je,Qe,Te,Ue,Xe,gt,Tt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ft),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Dt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tn),k.pixelStorei(k.UNPACK_SKIP_ROWS,lt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,je),Z===0&&$.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(P,$,se=null,ae=null,Z=0){P.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ae=arguments[1]||null,P=arguments[2],$=arguments[3],Z=arguments[4]||0);let Te,Ue,He,Re,Je,Qe,Xe,gt,Ft;const Dt=P.isCompressedTexture?P.mipmaps[Z]:P.image;se!==null?(Te=se.max.x-se.min.x,Ue=se.max.y-se.min.y,He=se.max.z-se.min.z,Re=se.min.x,Je=se.min.y,Qe=se.min.z):(Te=Dt.width,Ue=Dt.height,He=Dt.depth,Re=0,Je=0,Qe=0),ae!==null?(Xe=ae.x,gt=ae.y,Ft=ae.z):(Xe=0,gt=0,Ft=0);const tn=st.convert($.format),lt=st.convert($.type);let je;if($.isData3DTexture)rt.setTexture3D($,0),je=k.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)rt.setTexture2DArray($,0),je=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);const Tt=k.getParameter(k.UNPACK_ROW_LENGTH),yt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Hn=k.getParameter(k.UNPACK_SKIP_PIXELS),gr=k.getParameter(k.UNPACK_SKIP_ROWS),nn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Dt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Dt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Re),k.pixelStorei(k.UNPACK_SKIP_ROWS,Je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe),P.isDataTexture||P.isData3DTexture?k.texSubImage3D(je,Z,Xe,gt,Ft,Te,Ue,He,tn,lt,Dt.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(je,Z,Xe,gt,Ft,Te,Ue,He,tn,Dt.data):k.texSubImage3D(je,Z,Xe,gt,Ft,Te,Ue,He,tn,lt,Dt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Tt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Hn),k.pixelStorei(k.UNPACK_SKIP_ROWS,gr),k.pixelStorei(k.UNPACK_SKIP_IMAGES,nn),Z===0&&$.generateMipmaps&&k.generateMipmap(je),Ye.unbindTexture()},this.initRenderTarget=function(P){tt.get(P).__webglFramebuffer===void 0&&rt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?rt.setTextureCube(P,0):P.isData3DTexture?rt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?rt.setTexture2DArray(P,0):rt.setTexture2D(P,0),Ye.unbindTexture()},this.resetState=function(){z=0,D=0,N=null,Ye.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gc?"display-p3":"srgb",t.unpackColorSpace=wt.workingColorSpace===Ya?"display-p3":"srgb"}}class Yc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Yc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ix extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ka extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new K,Mc=new K,j_=new kt,xa=new $a,Au=new Lo,ld=new K,Y_=new K;class rx extends qt{constructor(e=new cn,t=new Ka){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Sc.fromBufferAttribute(t,o-1),Mc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Au.copy(r.boundingSphere),Au.applyMatrix4(o),Au.radius+=l,e.ray.intersectsSphere(Au)===!1)return;j_.copy(o).invert(),xa.copy(e.ray).applyMatrix4(j_);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=this.isLineSegments?2:1,m=r.index,p=r.attributes.position;if(m!==null){const v=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let M=v,x=E-1;M<x;M+=d){const y=m.getX(M),C=m.getX(M+1),T=Cu(this,e,xa,h,y,C);T&&t.push(T)}if(this.isLineLoop){const M=m.getX(E-1),x=m.getX(v),y=Cu(this,e,xa,h,M,x);y&&t.push(y)}}else{const v=Math.max(0,u.start),E=Math.min(p.count,u.start+u.count);for(let M=v,x=E-1;M<x;M+=d){const y=Cu(this,e,xa,h,M,M+1);y&&t.push(y)}if(this.isLineLoop){const M=Cu(this,e,xa,h,E-1,v);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Cu(n,e,t,r,o,l){const u=n.geometry.attributes.position;if(Sc.fromBufferAttribute(u,o),Mc.fromBufferAttribute(u,l),t.distanceSqToSegment(Sc,Mc,ld,Y_)>r)return;ld.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(ld);if(!(h<e.near||h>e.far))return{distance:h,point:Y_.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,object:n}}const $_=new K,q_=new K;class $c extends rx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)$_.fromBufferAttribute(t,o),q_.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+$_.distanceTo(q_);e.setAttribute("lineDistance",new kn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cp extends hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K_=new kt,wd=new $a,Ru=new Lo,bu=new K;class fp extends qt{constructor(e=new cn,t=new cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ru.copy(r.boundingSphere),Ru.applyMatrix4(o),Ru.radius+=l,e.ray.intersectsSphere(Ru)===!1)return;K_.copy(o).invert(),wd.copy(e.ray).applyMatrix4(K_);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=r.index,_=r.attributes.position;if(d!==null){const p=Math.max(0,u.start),v=Math.min(d.count,u.start+u.count);for(let E=p,M=v;E<M;E++){const x=d.getX(E);bu.fromBufferAttribute(_,x),Z_(bu,x,h,o,e,t,this)}}else{const p=Math.max(0,u.start),v=Math.min(_.count,u.start+u.count);for(let E=p,M=v;E<M;E++)bu.fromBufferAttribute(_,E),Z_(bu,E,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Z_(n,e,t,r,o,l,u){const c=wd.distanceSqToPoint(n);if(c<t){const h=new K;wd.closestPointToPoint(n,h),h.applyMatrix4(r);const d=o.ray.origin.distanceTo(h);if(d<o.near||d>o.far)return;l.push({distance:d,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:u})}}class Ss extends cn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+c,Math.PI);let d=0;const m=[],_=new K,p=new K,v=[],E=[],M=[],x=[];for(let y=0;y<=r;y++){const C=[],T=y/r;let A=0;y===0&&u===0?A=.5/t:y===r&&h===Math.PI&&(A=-.5/t);for(let z=0;z<=t;z++){const D=z/t;_.x=-e*Math.cos(o+D*l)*Math.sin(u+T*c),_.y=e*Math.cos(u+T*c),_.z=e*Math.sin(o+D*l)*Math.sin(u+T*c),E.push(_.x,_.y,_.z),p.copy(_).normalize(),M.push(p.x,p.y,p.z),x.push(D+A,1-T),C.push(d++)}m.push(C)}for(let y=0;y<r;y++)for(let C=0;C<t;C++){const T=m[y][C+1],A=m[y][C],z=m[y+1][C],D=m[y+1][C+1];(y!==0||u>0)&&v.push(T,A,D),(y!==r-1||h<Math.PI)&&v.push(A,z,D)}this.setIndex(v),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sx extends cn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],r=new Set,o=new K,l=new K;if(e.index!==null){const u=e.attributes.position,c=e.index;let h=e.groups;h.length===0&&(h=[{start:0,count:c.count,materialIndex:0}]);for(let d=0,m=h.length;d<m;++d){const _=h[d],p=_.start,v=_.count;for(let E=p,M=p+v;E<M;E+=3)for(let x=0;x<3;x++){const y=c.getX(E+x),C=c.getX(E+(x+1)%3);o.fromBufferAttribute(u,y),l.fromBufferAttribute(u,C),Q_(o,l,r)===!0&&(t.push(o.x,o.y,o.z),t.push(l.x,l.y,l.z))}}}else{const u=e.attributes.position;for(let c=0,h=u.count/3;c<h;c++)for(let d=0;d<3;d++){const m=3*c+d,_=3*c+(d+1)%3;o.fromBufferAttribute(u,m),l.fromBufferAttribute(u,_),Q_(o,l,r)===!0&&(t.push(o.x,o.y,o.z),t.push(l.x,l.y,l.z))}}this.setAttribute("position",new kn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Q_(n,e,t){const r=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,o=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(r)===!0||t.has(o)===!0?!1:(t.add(r),t.add(o),!0)}class ox extends hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ax extends hr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Td={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lx{constructor(e,t,r){const o=this;let l=!1,u=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(m){c++,l===!1&&o.onStart!==void 0&&o.onStart(m,u,c),l=!0},this.itemEnd=function(m){u++,o.onProgress!==void 0&&o.onProgress(m,u,c),u===c&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,_){return d.push(m,_),this},this.removeHandler=function(m){const _=d.indexOf(m);return _!==-1&&d.splice(_,2),this},this.getHandler=function(m){for(let _=0,p=d.length;_<p;_+=2){const v=d[_],E=d[_+1];if(v.global&&(v.lastIndex=0),v.test(m))return E}return null}}}const ux=new lx;class qc{constructor(e){this.manager=e!==void 0?e:ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qc.DEFAULT_MATERIAL_NAME="__DEFAULT";class cx extends qc{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Td.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const c=Va("img");function h(){m(),Td.add(e,this),t&&t(this),l.manager.itemEnd(e)}function d(_){m(),o&&o(_),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){c.removeEventListener("load",h,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(e),c.src=e,c}}class fx extends qc{constructor(e){super(e)}load(e,t,r,o){const l=new yn,u=new cx(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){l.image=c,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class hp extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class hx extends hp{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ud=new kt,J_=new K,e0=new K;class ZT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;J_.setFromMatrixPosition(e.matrixWorld),t.position.copy(J_),e0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(e0),t.updateMatrixWorld(),ud.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class QT extends ZT{constructor(){super(new ap(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dx extends hp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new QT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ad{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(vn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class px extends Yr{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);const t0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Mv,AddEquation:Gr,AddOperation:vv,AdditiveBlending:Gu,AgXToneMapping:wv,AlphaFormat:Wd,AlwaysCompare:Fv,AlwaysDepth:fv,AlwaysStencilFunc:xd,ArrayCamera:tx,BackSide:xn,BasicDepthPacking:Cv,Box3:Po,BoxGeometry:Do,BufferAttribute:Wt,BufferGeometry:cn,ByteType:Hd,Cache:Td,Camera:sp,CineonToneMapping:Sv,ClampToEdgeWrapping:ir,Color:Ge,ColorManagement:wt,ConstantAlphaFactor:lv,ConstantColorFactor:ov,Controls:px,CubeCamera:Xv,CubeReflectionMapping:Es,CubeRefractionMapping:ws,CubeTexture:op,CubeUVReflectionMapping:ja,CullFaceBack:gd,CullFaceFront:W0,CullFaceNone:G0,CustomBlending:j0,CustomToneMapping:Ev,Data3DTexture:Hv,DataArrayTexture:ep,DefaultLoadingManager:ux,DepthFormat:ys,DepthStencilFormat:As,DepthTexture:up,DirectionalLight:dx,DisplayP3ColorSpace:Gc,DoubleSide:Ni,DstAlphaFactor:tv,DstColorFactor:iv,EqualCompare:Dv,EqualDepth:dv,EquirectangularReflectionMapping:ju,EquirectangularRefractionMapping:Yu,Euler:ci,EventDispatcher:Yr,Float32BufferAttribute:kn,FloatType:Ii,FogExp2:Yc,FrontSide:lr,Frustum:Xc,GLSL3:Sd,GreaterCompare:Nv,GreaterDepth:mv,GreaterEqualCompare:Uv,GreaterEqualDepth:pv,Group:vo,HalfFloatType:Ro,HemisphereLight:hx,ImageLoader:cx,ImageUtils:zv,IntType:Fc,KeepStencilOp:ps,Layers:tp,LessCompare:Lv,LessDepth:hv,LessEqualCompare:Zd,LessEqualDepth:Ua,Light:hp,Line:rx,LineBasicMaterial:Ka,LineSegments:$c,LinearDisplayP3ColorSpace:Ya,LinearFilter:Kn,LinearMipmapLinearFilter:rr,LinearMipmapNearestFilter:Ou,LinearSRGBColorSpace:fr,LinearToneMapping:xv,LinearTransfer:Oa,Loader:qc,LoadingManager:lx,LuminanceAlphaFormat:Yd,LuminanceFormat:jd,MOUSE:xs,Material:hr,MathUtils:Wc,Matrix3:ct,Matrix4:kt,MaxEquation:K0,Mesh:Zn,MeshBasicMaterial:np,MeshDepthMaterial:Qv,MeshDistanceMaterial:Jv,MeshPhongMaterial:ax,MeshStandardMaterial:ox,MinEquation:q0,MirroredRepeatWrapping:$u,MixOperation:_v,MultiplyBlending:vd,MultiplyOperation:Uc,NearestFilter:An,NearestMipmapLinearFilter:Ma,NearestMipmapNearestFilter:Av,NeutralToneMapping:Tv,NeverCompare:Pv,NeverDepth:cv,NoBlending:or,NoColorSpace:Ei,NoToneMapping:ar,NormalBlending:Wr,NotEqualCompare:Iv,NotEqualDepth:gv,Object3D:qt,ObjectSpaceNormalMap:bv,OneFactor:Q0,OneMinusConstantAlphaFactor:uv,OneMinusConstantColorFactor:av,OneMinusDstAlphaFactor:nv,OneMinusDstColorFactor:rv,OneMinusSrcAlphaFactor:Xu,OneMinusSrcColorFactor:ev,OrthographicCamera:ap,P3Primaries:za,PCFShadowMap:zd,PCFSoftShadowMap:X0,PMREMGenerator:Md,PerspectiveCamera:qn,Plane:nr,PlaneGeometry:qa,Points:fp,PointsMaterial:cp,Quaternion:jr,RED_GREEN_RGTC2_Format:xc,RED_RGTC1_Format:Kd,REVISION:Ic,RGBADepthPacking:Rv,RGBAFormat:ui,RGBAIntegerFormat:Hc,RGBA_ASTC_10x10_Format:dc,RGBA_ASTC_10x5_Format:cc,RGBA_ASTC_10x6_Format:fc,RGBA_ASTC_10x8_Format:hc,RGBA_ASTC_12x10_Format:pc,RGBA_ASTC_12x12_Format:mc,RGBA_ASTC_4x4_Format:nc,RGBA_ASTC_5x4_Format:ic,RGBA_ASTC_5x5_Format:rc,RGBA_ASTC_6x5_Format:sc,RGBA_ASTC_6x6_Format:oc,RGBA_ASTC_8x5_Format:ac,RGBA_ASTC_8x6_Format:lc,RGBA_ASTC_8x8_Format:uc,RGBA_BPTC_Format:La,RGBA_ETC2_EAC_Format:tc,RGBA_PVRTC_2BPPV1_Format:Qu,RGBA_PVRTC_4BPPV1_Format:Zu,RGBA_S3TC_DXT1_Format:Ra,RGBA_S3TC_DXT3_Format:ba,RGBA_S3TC_DXT5_Format:Pa,RGBFormat:Xd,RGB_BPTC_SIGNED_Format:gc,RGB_BPTC_UNSIGNED_Format:_c,RGB_ETC1_Format:Ju,RGB_ETC2_Format:ec,RGB_PVRTC_2BPPV1_Format:Ku,RGB_PVRTC_4BPPV1_Format:qu,RGB_S3TC_DXT1_Format:Ca,RGFormat:qd,RGIntegerFormat:Bc,Ray:$a,Rec709Primaries:ka,RedFormat:$d,RedIntegerFormat:zc,ReinhardToneMapping:yv,RenderTarget:Bv,RepeatWrapping:Fa,ReverseSubtractEquation:$0,SIGNED_RED_GREEN_RGTC2_Format:yc,SIGNED_RED_RGTC1_Format:vc,SRGBColorSpace:li,SRGBTransfer:Lt,Scene:ix,ShaderChunk:ut,ShaderLib:Si,ShaderMaterial:Jn,ShortType:Vd,Source:Jd,Sphere:Lo,SphereGeometry:Ss,Spherical:Ad,SrcAlphaFactor:Wu,SrcAlphaSaturateFactor:sv,SrcColorFactor:J0,StaticDrawUsage:yd,SubtractEquation:Y0,SubtractiveBlending:_d,TOUCH:_s,TangentSpaceNormalMap:Vc,Texture:yn,TextureLoader:fx,Triangle:wi,UVMapping:Bd,Uint16BufferAttribute:ip,Uint32BufferAttribute:rp,UniformsLib:Le,UniformsUtils:Wv,UnsignedByteType:Oi,UnsignedInt248Type:Ts,UnsignedInt5999Type:Gd,UnsignedIntType:Xr,UnsignedShort4444Type:Oc,UnsignedShort5551Type:kc,UnsignedShortType:Eo,VSMShadowMap:Di,Vector2:it,Vector3:K,Vector4:$t,WebGLCoordinateSystem:Ui,WebGLCubeRenderTarget:jv,WebGLRenderTarget:ur,WebGLRenderer:nx,WebGLUtils:ex,WebGPUCoordinateSystem:Ba,WireframeGeometry:sx,ZeroFactor:Z0,createCanvasElement:kv},Symbol.toStringTag,{value:"Module"}));new Ge("#56b4e9"),new Ge("#0072b2"),new Ge("#009e73"),new Ge("#e69f00"),new Ge("#d55e00"),new Ge("#cc79a7"),new Ge("#364152"),new Ge("#f3f4f6");const sr=new Intl.NumberFormat("en-US"),JT=1,eA=.25,n0=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,i0=typeof window<"u"&&window.requestIdleCallback?window.requestIdleCallback.bind(window):n=>setTimeout(()=>n({timeRemaining:()=>8}),0),tA=typeof window<"u"&&window.cancelIdleCallback?window.cancelIdleCallback.bind(window):clearTimeout;function zu(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function mx(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function gx(n){let e,t,r;n.length!==2?(e=zu,t=(c,h)=>zu(n(c),h),r=(c,h)=>n(c)-h):(e=n===zu||n===mx?n:nA,t=n,r=n);function o(c,h,d=0,m=c.length){if(d<m){if(e(h,h)!==0)return m;do{const _=d+m>>>1;t(c[_],h)<0?d=_+1:m=_}while(d<m)}return d}function l(c,h,d=0,m=c.length){if(d<m){if(e(h,h)!==0)return m;do{const _=d+m>>>1;t(c[_],h)<=0?d=_+1:m=_}while(d<m)}return d}function u(c,h,d=0,m=c.length){const _=o(c,h,d,m-1);return _>d&&r(c[_-1],h)>-r(c[_],h)?_-1:_}return{left:o,center:u,right:l}}function nA(){return 0}function iA(n){return n===null?NaN:+n}const rA=gx(zu),sA=rA.right;gx(iA).center;function r0(n,e){let t,r;if(e===void 0)for(const o of n)o!=null&&(t===void 0?o>=o&&(t=r=o):(t>o&&(t=o),r<o&&(r=o)));else{let o=-1;for(let l of n)(l=e(l,++o,n))!=null&&(t===void 0?l>=l&&(t=r=l):(t>l&&(t=l),r<l&&(r=l)))}return[t,r]}class oA extends Map{constructor(e,t=uA){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[r,o]of e)this.set(r,o)}get(e){return super.get(s0(this,e))}has(e){return super.has(s0(this,e))}set(e,t){return super.set(aA(this,e),t)}delete(e){return super.delete(lA(this,e))}}function s0({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):t}function aA({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):(n.set(r,t),t)}function lA({_intern:n,_key:e},t){const r=e(t);return n.has(r)&&(t=n.get(r),n.delete(r)),t}function uA(n){return n!==null&&typeof n=="object"?n.valueOf():n}function cA(n,e,...t){return fA(n,Array.from,e,t)}function fA(n,e,t,r){return(function o(l,u){if(u>=r.length)return t(l);const c=new oA,h=r[u++];let d=-1;for(const m of l){const _=h(m,++d,l),p=c.get(_);p?p.push(m):c.set(_,[m])}for(const[m,_]of c)c.set(m,o(_,u));return e(c)})(n,0)}const hA=Math.sqrt(50),dA=Math.sqrt(10),pA=Math.sqrt(2);function Ec(n,e,t){const r=(e-n)/Math.max(0,t),o=Math.floor(Math.log10(r)),l=r/Math.pow(10,o),u=l>=hA?10:l>=dA?5:l>=pA?2:1;let c,h,d;return o<0?(d=Math.pow(10,-o)/u,c=Math.round(n*d),h=Math.round(e*d),c/d<n&&++c,h/d>e&&--h,d=-d):(d=Math.pow(10,o)*u,c=Math.round(n/d),h=Math.round(e/d),c*d<n&&++c,h*d>e&&--h),h<c&&.5<=t&&t<2?Ec(n,e,t*2):[c,h,d]}function mA(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const r=e<n,[o,l,u]=r?Ec(e,n,t):Ec(n,e,t);if(!(l>=o))return[];const c=l-o+1,h=new Array(c);if(r)if(u<0)for(let d=0;d<c;++d)h[d]=(l-d)/-u;else for(let d=0;d<c;++d)h[d]=(l-d)*u;else if(u<0)for(let d=0;d<c;++d)h[d]=(o+d)/-u;else for(let d=0;d<c;++d)h[d]=(o+d)*u;return h}function Cd(n,e,t){return e=+e,n=+n,t=+t,Ec(n,e,t)[2]}function gA(n,e,t){e=+e,n=+n,t=+t;const r=e<n,o=r?Cd(e,n,t):Cd(n,e,t);return(r?-1:1)*(o<0?1/-o:o)}function _A(n,e){let t=0,r=0;for(let o of n)o!=null&&(o=+o)>=o&&(++t,r+=o);if(t)return r/t}var vA={value:()=>{}};function dp(){for(var n=0,e=arguments.length,t={},r;n<e;++n){if(!(r=arguments[n]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new Bu(t)}function Bu(n){this._=n}function xA(n,e){return n.trim().split(/^|\s+/).map(function(t){var r="",o=t.indexOf(".");if(o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}Bu.prototype=dp.prototype={constructor:Bu,on:function(n,e){var t=this._,r=xA(n+"",t),o,l=-1,u=r.length;if(arguments.length<2){for(;++l<u;)if((o=(n=r[l]).type)&&(o=yA(t[o],n.name)))return o;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++l<u;)if(o=(n=r[l]).type)t[o]=o0(t[o],n.name,e);else if(e==null)for(o in t)t[o]=o0(t[o],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Bu(n)},call:function(n,e){if((o=arguments.length-2)>0)for(var t=new Array(o),r=0,o,l;r<o;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(l=this._[n],r=0,o=l.length;r<o;++r)l[r].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],o=0,l=r.length;o<l;++o)r[o].value.apply(e,t)}};function yA(n,e){for(var t=0,r=n.length,o;t<r;++t)if((o=n[t]).name===e)return o.value}function o0(n,e,t){for(var r=0,o=n.length;r<o;++r)if(n[r].name===e){n[r]=vA,n=n.slice(0,r).concat(n.slice(r+1));break}return t!=null&&n.push({name:e,value:t}),n}var Rd="http://www.w3.org/1999/xhtml";const a0={svg:"http://www.w3.org/2000/svg",xhtml:Rd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Kc(n){var e=n+="",t=e.indexOf(":");return t>=0&&(e=n.slice(0,t))!=="xmlns"&&(n=n.slice(t+1)),a0.hasOwnProperty(e)?{space:a0[e],local:n}:n}function SA(n){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===Rd&&e.documentElement.namespaceURI===Rd?e.createElement(n):e.createElementNS(t,n)}}function MA(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function _x(n){var e=Kc(n);return(e.local?MA:SA)(e)}function EA(){}function pp(n){return n==null?EA:function(){return this.querySelector(n)}}function wA(n){typeof n!="function"&&(n=pp(n));for(var e=this._groups,t=e.length,r=new Array(t),o=0;o<t;++o)for(var l=e[o],u=l.length,c=r[o]=new Array(u),h,d,m=0;m<u;++m)(h=l[m])&&(d=n.call(h,h.__data__,m,l))&&("__data__"in h&&(d.__data__=h.__data__),c[m]=d);return new Ai(r,this._parents)}function TA(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function AA(){return[]}function vx(n){return n==null?AA:function(){return this.querySelectorAll(n)}}function CA(n){return function(){return TA(n.apply(this,arguments))}}function RA(n){typeof n=="function"?n=CA(n):n=vx(n);for(var e=this._groups,t=e.length,r=[],o=[],l=0;l<t;++l)for(var u=e[l],c=u.length,h,d=0;d<c;++d)(h=u[d])&&(r.push(n.call(h,h.__data__,d,u)),o.push(h));return new Ai(r,o)}function xx(n){return function(){return this.matches(n)}}function yx(n){return function(e){return e.matches(n)}}var bA=Array.prototype.find;function PA(n){return function(){return bA.call(this.children,n)}}function LA(){return this.firstElementChild}function DA(n){return this.select(n==null?LA:PA(typeof n=="function"?n:yx(n)))}var NA=Array.prototype.filter;function IA(){return Array.from(this.children)}function UA(n){return function(){return NA.call(this.children,n)}}function FA(n){return this.selectAll(n==null?IA:UA(typeof n=="function"?n:yx(n)))}function OA(n){typeof n!="function"&&(n=xx(n));for(var e=this._groups,t=e.length,r=new Array(t),o=0;o<t;++o)for(var l=e[o],u=l.length,c=r[o]=[],h,d=0;d<u;++d)(h=l[d])&&n.call(h,h.__data__,d,l)&&c.push(h);return new Ai(r,this._parents)}function Sx(n){return new Array(n.length)}function kA(){return new Ai(this._enter||this._groups.map(Sx),this._parents)}function wc(n,e){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=e}wc.prototype={constructor:wc,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,e){return this._parent.insertBefore(n,e)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function zA(n){return function(){return n}}function BA(n,e,t,r,o,l){for(var u=0,c,h=e.length,d=l.length;u<d;++u)(c=e[u])?(c.__data__=l[u],r[u]=c):t[u]=new wc(n,l[u]);for(;u<h;++u)(c=e[u])&&(o[u]=c)}function HA(n,e,t,r,o,l,u){var c,h,d=new Map,m=e.length,_=l.length,p=new Array(m),v;for(c=0;c<m;++c)(h=e[c])&&(p[c]=v=u.call(h,h.__data__,c,e)+"",d.has(v)?o[c]=h:d.set(v,h));for(c=0;c<_;++c)v=u.call(n,l[c],c,l)+"",(h=d.get(v))?(r[c]=h,h.__data__=l[c],d.delete(v)):t[c]=new wc(n,l[c]);for(c=0;c<m;++c)(h=e[c])&&d.get(p[c])===h&&(o[c]=h)}function VA(n){return n.__data__}function GA(n,e){if(!arguments.length)return Array.from(this,VA);var t=e?HA:BA,r=this._parents,o=this._groups;typeof n!="function"&&(n=zA(n));for(var l=o.length,u=new Array(l),c=new Array(l),h=new Array(l),d=0;d<l;++d){var m=r[d],_=o[d],p=_.length,v=WA(n.call(m,m&&m.__data__,d,r)),E=v.length,M=c[d]=new Array(E),x=u[d]=new Array(E),y=h[d]=new Array(p);t(m,_,M,x,y,v,e);for(var C=0,T=0,A,z;C<E;++C)if(A=M[C]){for(C>=T&&(T=C+1);!(z=x[T])&&++T<E;);A._next=z||null}}return u=new Ai(u,r),u._enter=c,u._exit=h,u}function WA(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function XA(){return new Ai(this._exit||this._groups.map(Sx),this._parents)}function jA(n,e,t){var r=this.enter(),o=this,l=this.exit();return typeof n=="function"?(r=n(r),r&&(r=r.selection())):r=r.append(n+""),e!=null&&(o=e(o),o&&(o=o.selection())),t==null?l.remove():t(l),r&&o?r.merge(o).order():o}function YA(n){for(var e=n.selection?n.selection():n,t=this._groups,r=e._groups,o=t.length,l=r.length,u=Math.min(o,l),c=new Array(o),h=0;h<u;++h)for(var d=t[h],m=r[h],_=d.length,p=c[h]=new Array(_),v,E=0;E<_;++E)(v=d[E]||m[E])&&(p[E]=v);for(;h<o;++h)c[h]=t[h];return new Ai(c,this._parents)}function $A(){for(var n=this._groups,e=-1,t=n.length;++e<t;)for(var r=n[e],o=r.length-1,l=r[o],u;--o>=0;)(u=r[o])&&(l&&u.compareDocumentPosition(l)^4&&l.parentNode.insertBefore(u,l),l=u);return this}function qA(n){n||(n=KA);function e(_,p){return _&&p?n(_.__data__,p.__data__):!_-!p}for(var t=this._groups,r=t.length,o=new Array(r),l=0;l<r;++l){for(var u=t[l],c=u.length,h=o[l]=new Array(c),d,m=0;m<c;++m)(d=u[m])&&(h[m]=d);h.sort(e)}return new Ai(o,this._parents).order()}function KA(n,e){return n<e?-1:n>e?1:n>=e?0:NaN}function ZA(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function QA(){return Array.from(this)}function JA(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var r=n[e],o=0,l=r.length;o<l;++o){var u=r[o];if(u)return u}return null}function eC(){let n=0;for(const e of this)++n;return n}function tC(){return!this.node()}function nC(n){for(var e=this._groups,t=0,r=e.length;t<r;++t)for(var o=e[t],l=0,u=o.length,c;l<u;++l)(c=o[l])&&n.call(c,c.__data__,l,o);return this}function iC(n){return function(){this.removeAttribute(n)}}function rC(n){return function(){this.removeAttributeNS(n.space,n.local)}}function sC(n,e){return function(){this.setAttribute(n,e)}}function oC(n,e){return function(){this.setAttributeNS(n.space,n.local,e)}}function aC(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(n):this.setAttribute(n,t)}}function lC(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}function uC(n,e){var t=Kc(n);if(arguments.length<2){var r=this.node();return t.local?r.getAttributeNS(t.space,t.local):r.getAttribute(t)}return this.each((e==null?t.local?rC:iC:typeof e=="function"?t.local?lC:aC:t.local?oC:sC)(t,e))}function Mx(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function cC(n){return function(){this.style.removeProperty(n)}}function fC(n,e,t){return function(){this.style.setProperty(n,e,t)}}function hC(n,e,t){return function(){var r=e.apply(this,arguments);r==null?this.style.removeProperty(n):this.style.setProperty(n,r,t)}}function dC(n,e,t){return arguments.length>1?this.each((e==null?cC:typeof e=="function"?hC:fC)(n,e,t??"")):To(this.node(),n)}function To(n,e){return n.style.getPropertyValue(e)||Mx(n).getComputedStyle(n,null).getPropertyValue(e)}function pC(n){return function(){delete this[n]}}function mC(n,e){return function(){this[n]=e}}function gC(n,e){return function(){var t=e.apply(this,arguments);t==null?delete this[n]:this[n]=t}}function _C(n,e){return arguments.length>1?this.each((e==null?pC:typeof e=="function"?gC:mC)(n,e)):this.node()[n]}function Ex(n){return n.trim().split(/^|\s+/)}function mp(n){return n.classList||new wx(n)}function wx(n){this._node=n,this._names=Ex(n.getAttribute("class")||"")}wx.prototype={add:function(n){var e=this._names.indexOf(n);e<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var e=this._names.indexOf(n);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Tx(n,e){for(var t=mp(n),r=-1,o=e.length;++r<o;)t.add(e[r])}function Ax(n,e){for(var t=mp(n),r=-1,o=e.length;++r<o;)t.remove(e[r])}function vC(n){return function(){Tx(this,n)}}function xC(n){return function(){Ax(this,n)}}function yC(n,e){return function(){(e.apply(this,arguments)?Tx:Ax)(this,n)}}function SC(n,e){var t=Ex(n+"");if(arguments.length<2){for(var r=mp(this.node()),o=-1,l=t.length;++o<l;)if(!r.contains(t[o]))return!1;return!0}return this.each((typeof e=="function"?yC:e?vC:xC)(t,e))}function MC(){this.textContent=""}function EC(n){return function(){this.textContent=n}}function wC(n){return function(){var e=n.apply(this,arguments);this.textContent=e??""}}function TC(n){return arguments.length?this.each(n==null?MC:(typeof n=="function"?wC:EC)(n)):this.node().textContent}function AC(){this.innerHTML=""}function CC(n){return function(){this.innerHTML=n}}function RC(n){return function(){var e=n.apply(this,arguments);this.innerHTML=e??""}}function bC(n){return arguments.length?this.each(n==null?AC:(typeof n=="function"?RC:CC)(n)):this.node().innerHTML}function PC(){this.nextSibling&&this.parentNode.appendChild(this)}function LC(){return this.each(PC)}function DC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function NC(){return this.each(DC)}function IC(n){var e=typeof n=="function"?n:_x(n);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function UC(){return null}function FC(n,e){var t=typeof n=="function"?n:_x(n),r=e==null?UC:typeof e=="function"?e:pp(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),r.apply(this,arguments)||null)})}function OC(){var n=this.parentNode;n&&n.removeChild(this)}function kC(){return this.each(OC)}function zC(){var n=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function BC(){var n=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function HC(n){return this.select(n?BC:zC)}function VC(n){return arguments.length?this.property("__data__",n):this.node().__data__}function GC(n){return function(e){n.call(this,e,this.__data__)}}function WC(n){return n.trim().split(/^|\s+/).map(function(e){var t="",r=e.indexOf(".");return r>=0&&(t=e.slice(r+1),e=e.slice(0,r)),{type:e,name:t}})}function XC(n){return function(){var e=this.__on;if(e){for(var t=0,r=-1,o=e.length,l;t<o;++t)l=e[t],(!n.type||l.type===n.type)&&l.name===n.name?this.removeEventListener(l.type,l.listener,l.options):e[++r]=l;++r?e.length=r:delete this.__on}}}function jC(n,e,t){return function(){var r=this.__on,o,l=GC(e);if(r){for(var u=0,c=r.length;u<c;++u)if((o=r[u]).type===n.type&&o.name===n.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=l,o.options=t),o.value=e;return}}this.addEventListener(n.type,l,t),o={type:n.type,name:n.name,value:e,listener:l,options:t},r?r.push(o):this.__on=[o]}}function YC(n,e,t){var r=WC(n+""),o,l=r.length,u;if(arguments.length<2){var c=this.node().__on;if(c){for(var h=0,d=c.length,m;h<d;++h)for(o=0,m=c[h];o<l;++o)if((u=r[o]).type===m.type&&u.name===m.name)return m.value}return}for(c=e?jC:XC,o=0;o<l;++o)this.each(c(r[o],e,t));return this}function Cx(n,e,t){var r=Mx(n),o=r.CustomEvent;typeof o=="function"?o=new o(e,t):(o=r.document.createEvent("Event"),t?(o.initEvent(e,t.bubbles,t.cancelable),o.detail=t.detail):o.initEvent(e,!1,!1)),n.dispatchEvent(o)}function $C(n,e){return function(){return Cx(this,n,e)}}function qC(n,e){return function(){return Cx(this,n,e.apply(this,arguments))}}function KC(n,e){return this.each((typeof e=="function"?qC:$C)(n,e))}function*ZC(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var r=n[e],o=0,l=r.length,u;o<l;++o)(u=r[o])&&(yield u)}var QC=[null];function Ai(n,e){this._groups=n,this._parents=e}function Za(){return new Ai([[document.documentElement]],QC)}function JC(){return this}Ai.prototype=Za.prototype={constructor:Ai,select:wA,selectAll:RA,selectChild:DA,selectChildren:FA,filter:OA,data:GA,enter:kA,exit:XA,join:jA,merge:YA,selection:JC,order:$A,sort:qA,call:ZA,nodes:QA,node:JA,size:eC,empty:tC,each:nC,attr:uC,style:dC,property:_C,classed:SC,text:TC,html:bC,raise:LC,lower:NC,append:IC,insert:FC,remove:kC,clone:HC,datum:VC,on:YC,dispatch:KC,[Symbol.iterator]:ZC};function gp(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function Rx(n,e){var t=Object.create(n.prototype);for(var r in e)t[r]=e[r];return t}function Qa(){}var Ga=.7,Tc=1/Ga,Mo="\\s*([+-]?\\d+)\\s*",Wa="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Fi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",eR=/^#([0-9a-f]{3,8})$/,tR=new RegExp(`^rgb\\(${Mo},${Mo},${Mo}\\)$`),nR=new RegExp(`^rgb\\(${Fi},${Fi},${Fi}\\)$`),iR=new RegExp(`^rgba\\(${Mo},${Mo},${Mo},${Wa}\\)$`),rR=new RegExp(`^rgba\\(${Fi},${Fi},${Fi},${Wa}\\)$`),sR=new RegExp(`^hsl\\(${Wa},${Fi},${Fi}\\)$`),oR=new RegExp(`^hsla\\(${Wa},${Fi},${Fi},${Wa}\\)$`),l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};gp(Qa,Cs,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:u0,formatHex:u0,formatHex8:aR,formatHsl:lR,formatRgb:c0,toString:c0});function u0(){return this.rgb().formatHex()}function aR(){return this.rgb().formatHex8()}function lR(){return bx(this).formatHsl()}function c0(){return this.rgb().formatRgb()}function Cs(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=eR.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?f0(e):t===3?new On(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?Pu(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?Pu(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=tR.exec(n))?new On(e[1],e[2],e[3],1):(e=nR.exec(n))?new On(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=iR.exec(n))?Pu(e[1],e[2],e[3],e[4]):(e=rR.exec(n))?Pu(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=sR.exec(n))?p0(e[1],e[2]/100,e[3]/100,1):(e=oR.exec(n))?p0(e[1],e[2]/100,e[3]/100,e[4]):l0.hasOwnProperty(n)?f0(l0[n]):n==="transparent"?new On(NaN,NaN,NaN,0):null}function f0(n){return new On(n>>16&255,n>>8&255,n&255,1)}function Pu(n,e,t,r){return r<=0&&(n=e=t=NaN),new On(n,e,t,r)}function uR(n){return n instanceof Qa||(n=Cs(n)),n?(n=n.rgb(),new On(n.r,n.g,n.b,n.opacity)):new On}function bd(n,e,t,r){return arguments.length===1?uR(n):new On(n,e,t,r??1)}function On(n,e,t,r){this.r=+n,this.g=+e,this.b=+t,this.opacity=+r}gp(On,bd,Rx(Qa,{brighter(n){return n=n==null?Tc:Math.pow(Tc,n),new On(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Ga:Math.pow(Ga,n),new On(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new On(Ms(this.r),Ms(this.g),Ms(this.b),Ac(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:h0,formatHex:h0,formatHex8:cR,formatRgb:d0,toString:d0}));function h0(){return`#${vs(this.r)}${vs(this.g)}${vs(this.b)}`}function cR(){return`#${vs(this.r)}${vs(this.g)}${vs(this.b)}${vs((isNaN(this.opacity)?1:this.opacity)*255)}`}function d0(){const n=Ac(this.opacity);return`${n===1?"rgb(":"rgba("}${Ms(this.r)}, ${Ms(this.g)}, ${Ms(this.b)}${n===1?")":`, ${n})`}`}function Ac(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Ms(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function vs(n){return n=Ms(n),(n<16?"0":"")+n.toString(16)}function p0(n,e,t,r){return r<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new Ti(n,e,t,r)}function bx(n){if(n instanceof Ti)return new Ti(n.h,n.s,n.l,n.opacity);if(n instanceof Qa||(n=Cs(n)),!n)return new Ti;if(n instanceof Ti)return n;n=n.rgb();var e=n.r/255,t=n.g/255,r=n.b/255,o=Math.min(e,t,r),l=Math.max(e,t,r),u=NaN,c=l-o,h=(l+o)/2;return c?(e===l?u=(t-r)/c+(t<r)*6:t===l?u=(r-e)/c+2:u=(e-t)/c+4,c/=h<.5?l+o:2-l-o,u*=60):c=h>0&&h<1?0:u,new Ti(u,c,h,n.opacity)}function fR(n,e,t,r){return arguments.length===1?bx(n):new Ti(n,e,t,r??1)}function Ti(n,e,t,r){this.h=+n,this.s=+e,this.l=+t,this.opacity=+r}gp(Ti,fR,Rx(Qa,{brighter(n){return n=n==null?Tc:Math.pow(Tc,n),new Ti(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Ga:Math.pow(Ga,n),new Ti(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*e,o=2*t-r;return new On(cd(n>=240?n-240:n+120,o,r),cd(n,o,r),cd(n<120?n+240:n-120,o,r),this.opacity)},clamp(){return new Ti(m0(this.h),Lu(this.s),Lu(this.l),Ac(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Ac(this.opacity);return`${n===1?"hsl(":"hsla("}${m0(this.h)}, ${Lu(this.s)*100}%, ${Lu(this.l)*100}%${n===1?")":`, ${n})`}`}}));function m0(n){return n=(n||0)%360,n<0?n+360:n}function Lu(n){return Math.max(0,Math.min(1,n||0))}function cd(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const _p=n=>()=>n;function hR(n,e){return function(t){return n+t*e}}function dR(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(r){return Math.pow(n+r*e,t)}}function pR(n){return(n=+n)==1?Px:function(e,t){return t-e?dR(e,t,n):_p(isNaN(e)?t:e)}}function Px(n,e){var t=e-n;return t?hR(n,t):_p(isNaN(n)?e:n)}const Cc=(function n(e){var t=pR(e);function r(o,l){var u=t((o=bd(o)).r,(l=bd(l)).r),c=t(o.g,l.g),h=t(o.b,l.b),d=Px(o.opacity,l.opacity);return function(m){return o.r=u(m),o.g=c(m),o.b=h(m),o.opacity=d(m),o+""}}return r.gamma=n,r})(1);function mR(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,r=e.slice(),o;return function(l){for(o=0;o<t;++o)r[o]=n[o]*(1-l)+e[o]*l;return r}}function gR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _R(n,e){var t=e?e.length:0,r=n?Math.min(t,n.length):0,o=new Array(r),l=new Array(t),u;for(u=0;u<r;++u)o[u]=vp(n[u],e[u]);for(;u<t;++u)l[u]=e[u];return function(c){for(u=0;u<r;++u)l[u]=o[u](c);return l}}function vR(n,e){var t=new Date;return n=+n,e=+e,function(r){return t.setTime(n*(1-r)+e*r),t}}function Mi(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function xR(n,e){var t={},r={},o;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in n?t[o]=vp(n[o],e[o]):r[o]=e[o];return function(l){for(o in t)r[o]=t[o](l);return r}}var Pd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,fd=new RegExp(Pd.source,"g");function yR(n){return function(){return n}}function SR(n){return function(e){return n(e)+""}}function Lx(n,e){var t=Pd.lastIndex=fd.lastIndex=0,r,o,l,u=-1,c=[],h=[];for(n=n+"",e=e+"";(r=Pd.exec(n))&&(o=fd.exec(e));)(l=o.index)>t&&(l=e.slice(t,l),c[u]?c[u]+=l:c[++u]=l),(r=r[0])===(o=o[0])?c[u]?c[u]+=o:c[++u]=o:(c[++u]=null,h.push({i:u,x:Mi(r,o)})),t=fd.lastIndex;return t<e.length&&(l=e.slice(t),c[u]?c[u]+=l:c[++u]=l),c.length<2?h[0]?SR(h[0].x):yR(e):(e=h.length,function(d){for(var m=0,_;m<e;++m)c[(_=h[m]).i]=_.x(d);return c.join("")})}function vp(n,e){var t=typeof e,r;return e==null||t==="boolean"?_p(e):(t==="number"?Mi:t==="string"?(r=Cs(e))?(e=r,Cc):Lx:e instanceof Cs?Cc:e instanceof Date?vR:gR(e)?mR:Array.isArray(e)?_R:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?xR:Mi)(n,e)}function MR(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}var g0=180/Math.PI,Ld={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Dx(n,e,t,r,o,l){var u,c,h;return(u=Math.sqrt(n*n+e*e))&&(n/=u,e/=u),(h=n*t+e*r)&&(t-=n*h,r-=e*h),(c=Math.sqrt(t*t+r*r))&&(t/=c,r/=c,h/=c),n*r<e*t&&(n=-n,e=-e,h=-h,u=-u),{translateX:o,translateY:l,rotate:Math.atan2(e,n)*g0,skewX:Math.atan(h)*g0,scaleX:u,scaleY:c}}var Du;function ER(n){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return e.isIdentity?Ld:Dx(e.a,e.b,e.c,e.d,e.e,e.f)}function wR(n){return n==null||(Du||(Du=document.createElementNS("http://www.w3.org/2000/svg","g")),Du.setAttribute("transform",n),!(n=Du.transform.baseVal.consolidate()))?Ld:(n=n.matrix,Dx(n.a,n.b,n.c,n.d,n.e,n.f))}function Nx(n,e,t,r){function o(d){return d.length?d.pop()+" ":""}function l(d,m,_,p,v,E){if(d!==_||m!==p){var M=v.push("translate(",null,e,null,t);E.push({i:M-4,x:Mi(d,_)},{i:M-2,x:Mi(m,p)})}else(_||p)&&v.push("translate("+_+e+p+t)}function u(d,m,_,p){d!==m?(d-m>180?m+=360:m-d>180&&(d+=360),p.push({i:_.push(o(_)+"rotate(",null,r)-2,x:Mi(d,m)})):m&&_.push(o(_)+"rotate("+m+r)}function c(d,m,_,p){d!==m?p.push({i:_.push(o(_)+"skewX(",null,r)-2,x:Mi(d,m)}):m&&_.push(o(_)+"skewX("+m+r)}function h(d,m,_,p,v,E){if(d!==_||m!==p){var M=v.push(o(v)+"scale(",null,",",null,")");E.push({i:M-4,x:Mi(d,_)},{i:M-2,x:Mi(m,p)})}else(_!==1||p!==1)&&v.push(o(v)+"scale("+_+","+p+")")}return function(d,m){var _=[],p=[];return d=n(d),m=n(m),l(d.translateX,d.translateY,m.translateX,m.translateY,_,p),u(d.rotate,m.rotate,_,p),c(d.skewX,m.skewX,_,p),h(d.scaleX,d.scaleY,m.scaleX,m.scaleY,_,p),d=m=null,function(v){for(var E=-1,M=p.length,x;++E<M;)_[(x=p[E]).i]=x.x(v);return _.join("")}}}var TR=Nx(ER,"px, ","px)","deg)"),AR=Nx(wR,", ",")",")"),Ao=0,wa=0,ya=0,Ix=1e3,Rc,Ta,bc=0,Rs=0,Zc=0,Xa=typeof performance=="object"&&performance.now?performance:Date,Ux=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function xp(){return Rs||(Ux(CR),Rs=Xa.now()+Zc)}function CR(){Rs=0}function Pc(){this._call=this._time=this._next=null}Pc.prototype=yp.prototype={constructor:Pc,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?xp():+t)+(e==null?0:+e),!this._next&&Ta!==this&&(Ta?Ta._next=this:Rc=this,Ta=this),this._call=n,this._time=t,Dd()},stop:function(){this._call&&(this._call=null,this._time=1/0,Dd())}};function yp(n,e,t){var r=new Pc;return r.restart(n,e,t),r}function RR(){xp(),++Ao;for(var n=Rc,e;n;)(e=Rs-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Ao}function _0(){Rs=(bc=Xa.now())+Zc,Ao=wa=0;try{RR()}finally{Ao=0,PR(),Rs=0}}function bR(){var n=Xa.now(),e=n-bc;e>Ix&&(Zc-=e,bc=n)}function PR(){for(var n,e=Rc,t,r=1/0;e;)e._call?(r>e._time&&(r=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:Rc=t);Ta=n,Dd(r)}function Dd(n){if(!Ao){wa&&(wa=clearTimeout(wa));var e=n-Rs;e>24?(n<1/0&&(wa=setTimeout(_0,n-Xa.now()-Zc)),ya&&(ya=clearInterval(ya))):(ya||(bc=Xa.now(),ya=setInterval(bR,Ix)),Ao=1,Ux(_0))}}function v0(n,e,t){var r=new Pc;return e=e==null?0:+e,r.restart(o=>{r.stop(),n(o+e)},e,t),r}var LR=dp("start","end","cancel","interrupt"),DR=[],Fx=0,x0=1,Nd=2,Hu=3,y0=4,Id=5,Vu=6;function Qc(n,e,t,r,o,l){var u=n.__transition;if(!u)n.__transition={};else if(t in u)return;NR(n,t,{name:e,index:r,group:o,on:LR,tween:DR,time:l.time,delay:l.delay,duration:l.duration,ease:l.ease,timer:null,state:Fx})}function Sp(n,e){var t=Ci(n,e);if(t.state>Fx)throw new Error("too late; already scheduled");return t}function ki(n,e){var t=Ci(n,e);if(t.state>Hu)throw new Error("too late; already running");return t}function Ci(n,e){var t=n.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function NR(n,e,t){var r=n.__transition,o;r[e]=t,t.timer=yp(l,0,t.time);function l(d){t.state=x0,t.timer.restart(u,t.delay,t.time),t.delay<=d&&u(d-t.delay)}function u(d){var m,_,p,v;if(t.state!==x0)return h();for(m in r)if(v=r[m],v.name===t.name){if(v.state===Hu)return v0(u);v.state===y0?(v.state=Vu,v.timer.stop(),v.on.call("interrupt",n,n.__data__,v.index,v.group),delete r[m]):+m<e&&(v.state=Vu,v.timer.stop(),v.on.call("cancel",n,n.__data__,v.index,v.group),delete r[m])}if(v0(function(){t.state===Hu&&(t.state=y0,t.timer.restart(c,t.delay,t.time),c(d))}),t.state=Nd,t.on.call("start",n,n.__data__,t.index,t.group),t.state===Nd){for(t.state=Hu,o=new Array(p=t.tween.length),m=0,_=-1;m<p;++m)(v=t.tween[m].value.call(n,n.__data__,t.index,t.group))&&(o[++_]=v);o.length=_+1}}function c(d){for(var m=d<t.duration?t.ease.call(null,d/t.duration):(t.timer.restart(h),t.state=Id,1),_=-1,p=o.length;++_<p;)o[_].call(n,m);t.state===Id&&(t.on.call("end",n,n.__data__,t.index,t.group),h())}function h(){t.state=Vu,t.timer.stop(),delete r[e];for(var d in r)return;delete n.__transition}}function IR(n,e){var t=n.__transition,r,o,l=!0,u;if(t){e=e==null?null:e+"";for(u in t){if((r=t[u]).name!==e){l=!1;continue}o=r.state>Nd&&r.state<Id,r.state=Vu,r.timer.stop(),r.on.call(o?"interrupt":"cancel",n,n.__data__,r.index,r.group),delete t[u]}l&&delete n.__transition}}function UR(n){return this.each(function(){IR(this,n)})}function FR(n,e){var t,r;return function(){var o=ki(this,n),l=o.tween;if(l!==t){r=t=l;for(var u=0,c=r.length;u<c;++u)if(r[u].name===e){r=r.slice(),r.splice(u,1);break}}o.tween=r}}function OR(n,e,t){var r,o;if(typeof t!="function")throw new Error;return function(){var l=ki(this,n),u=l.tween;if(u!==r){o=(r=u).slice();for(var c={name:e,value:t},h=0,d=o.length;h<d;++h)if(o[h].name===e){o[h]=c;break}h===d&&o.push(c)}l.tween=o}}function kR(n,e){var t=this._id;if(n+="",arguments.length<2){for(var r=Ci(this.node(),t).tween,o=0,l=r.length,u;o<l;++o)if((u=r[o]).name===n)return u.value;return null}return this.each((e==null?FR:OR)(t,n,e))}function Mp(n,e,t){var r=n._id;return n.each(function(){var o=ki(this,r);(o.value||(o.value={}))[e]=t.apply(this,arguments)}),function(o){return Ci(o,r).value[e]}}function Ox(n,e){var t;return(typeof e=="number"?Mi:e instanceof Cs?Cc:(t=Cs(e))?(e=t,Cc):Lx)(n,e)}function zR(n){return function(){this.removeAttribute(n)}}function BR(n){return function(){this.removeAttributeNS(n.space,n.local)}}function HR(n,e,t){var r,o=t+"",l;return function(){var u=this.getAttribute(n);return u===o?null:u===r?l:l=e(r=u,t)}}function VR(n,e,t){var r,o=t+"",l;return function(){var u=this.getAttributeNS(n.space,n.local);return u===o?null:u===r?l:l=e(r=u,t)}}function GR(n,e,t){var r,o,l;return function(){var u,c=t(this),h;return c==null?void this.removeAttribute(n):(u=this.getAttribute(n),h=c+"",u===h?null:u===r&&h===o?l:(o=h,l=e(r=u,c)))}}function WR(n,e,t){var r,o,l;return function(){var u,c=t(this),h;return c==null?void this.removeAttributeNS(n.space,n.local):(u=this.getAttributeNS(n.space,n.local),h=c+"",u===h?null:u===r&&h===o?l:(o=h,l=e(r=u,c)))}}function XR(n,e){var t=Kc(n),r=t==="transform"?AR:Ox;return this.attrTween(n,typeof e=="function"?(t.local?WR:GR)(t,r,Mp(this,"attr."+n,e)):e==null?(t.local?BR:zR)(t):(t.local?VR:HR)(t,r,e))}function jR(n,e){return function(t){this.setAttribute(n,e.call(this,t))}}function YR(n,e){return function(t){this.setAttributeNS(n.space,n.local,e.call(this,t))}}function $R(n,e){var t,r;function o(){var l=e.apply(this,arguments);return l!==r&&(t=(r=l)&&YR(n,l)),t}return o._value=e,o}function qR(n,e){var t,r;function o(){var l=e.apply(this,arguments);return l!==r&&(t=(r=l)&&jR(n,l)),t}return o._value=e,o}function KR(n,e){var t="attr."+n;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var r=Kc(n);return this.tween(t,(r.local?$R:qR)(r,e))}function ZR(n,e){return function(){Sp(this,n).delay=+e.apply(this,arguments)}}function QR(n,e){return e=+e,function(){Sp(this,n).delay=e}}function JR(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?ZR:QR)(e,n)):Ci(this.node(),e).delay}function eb(n,e){return function(){ki(this,n).duration=+e.apply(this,arguments)}}function tb(n,e){return e=+e,function(){ki(this,n).duration=e}}function nb(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?eb:tb)(e,n)):Ci(this.node(),e).duration}function ib(n,e){if(typeof e!="function")throw new Error;return function(){ki(this,n).ease=e}}function rb(n){var e=this._id;return arguments.length?this.each(ib(e,n)):Ci(this.node(),e).ease}function sb(n,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;ki(this,n).ease=t}}function ob(n){if(typeof n!="function")throw new Error;return this.each(sb(this._id,n))}function ab(n){typeof n!="function"&&(n=xx(n));for(var e=this._groups,t=e.length,r=new Array(t),o=0;o<t;++o)for(var l=e[o],u=l.length,c=r[o]=[],h,d=0;d<u;++d)(h=l[d])&&n.call(h,h.__data__,d,l)&&c.push(h);return new cr(r,this._parents,this._name,this._id)}function lb(n){if(n._id!==this._id)throw new Error;for(var e=this._groups,t=n._groups,r=e.length,o=t.length,l=Math.min(r,o),u=new Array(r),c=0;c<l;++c)for(var h=e[c],d=t[c],m=h.length,_=u[c]=new Array(m),p,v=0;v<m;++v)(p=h[v]||d[v])&&(_[v]=p);for(;c<r;++c)u[c]=e[c];return new cr(u,this._parents,this._name,this._id)}function ub(n){return(n+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function cb(n,e,t){var r,o,l=ub(e)?Sp:ki;return function(){var u=l(this,n),c=u.on;c!==r&&(o=(r=c).copy()).on(e,t),u.on=o}}function fb(n,e){var t=this._id;return arguments.length<2?Ci(this.node(),t).on.on(n):this.each(cb(t,n,e))}function hb(n){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==n)return;e&&e.removeChild(this)}}function db(){return this.on("end.remove",hb(this._id))}function pb(n){var e=this._name,t=this._id;typeof n!="function"&&(n=pp(n));for(var r=this._groups,o=r.length,l=new Array(o),u=0;u<o;++u)for(var c=r[u],h=c.length,d=l[u]=new Array(h),m,_,p=0;p<h;++p)(m=c[p])&&(_=n.call(m,m.__data__,p,c))&&("__data__"in m&&(_.__data__=m.__data__),d[p]=_,Qc(d[p],e,t,p,d,Ci(m,t)));return new cr(l,this._parents,e,t)}function mb(n){var e=this._name,t=this._id;typeof n!="function"&&(n=vx(n));for(var r=this._groups,o=r.length,l=[],u=[],c=0;c<o;++c)for(var h=r[c],d=h.length,m,_=0;_<d;++_)if(m=h[_]){for(var p=n.call(m,m.__data__,_,h),v,E=Ci(m,t),M=0,x=p.length;M<x;++M)(v=p[M])&&Qc(v,e,t,M,p,E);l.push(p),u.push(m)}return new cr(l,u,e,t)}var gb=Za.prototype.constructor;function _b(){return new gb(this._groups,this._parents)}function vb(n,e){var t,r,o;return function(){var l=To(this,n),u=(this.style.removeProperty(n),To(this,n));return l===u?null:l===t&&u===r?o:o=e(t=l,r=u)}}function kx(n){return function(){this.style.removeProperty(n)}}function xb(n,e,t){var r,o=t+"",l;return function(){var u=To(this,n);return u===o?null:u===r?l:l=e(r=u,t)}}function yb(n,e,t){var r,o,l;return function(){var u=To(this,n),c=t(this),h=c+"";return c==null&&(h=c=(this.style.removeProperty(n),To(this,n))),u===h?null:u===r&&h===o?l:(o=h,l=e(r=u,c))}}function Sb(n,e){var t,r,o,l="style."+e,u="end."+l,c;return function(){var h=ki(this,n),d=h.on,m=h.value[l]==null?c||(c=kx(e)):void 0;(d!==t||o!==m)&&(r=(t=d).copy()).on(u,o=m),h.on=r}}function Mb(n,e,t){var r=(n+="")=="transform"?TR:Ox;return e==null?this.styleTween(n,vb(n,r)).on("end.style."+n,kx(n)):typeof e=="function"?this.styleTween(n,yb(n,r,Mp(this,"style."+n,e))).each(Sb(this._id,n)):this.styleTween(n,xb(n,r,e),t).on("end.style."+n,null)}function Eb(n,e,t){return function(r){this.style.setProperty(n,e.call(this,r),t)}}function wb(n,e,t){var r,o;function l(){var u=e.apply(this,arguments);return u!==o&&(r=(o=u)&&Eb(n,u,t)),r}return l._value=e,l}function Tb(n,e,t){var r="style."+(n+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(e==null)return this.tween(r,null);if(typeof e!="function")throw new Error;return this.tween(r,wb(n,e,t??""))}function Ab(n){return function(){this.textContent=n}}function Cb(n){return function(){var e=n(this);this.textContent=e??""}}function Rb(n){return this.tween("text",typeof n=="function"?Cb(Mp(this,"text",n)):Ab(n==null?"":n+""))}function bb(n){return function(e){this.textContent=n.call(this,e)}}function Pb(n){var e,t;function r(){var o=n.apply(this,arguments);return o!==t&&(e=(t=o)&&bb(o)),e}return r._value=n,r}function Lb(n){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;return this.tween(e,Pb(n))}function Db(){for(var n=this._name,e=this._id,t=zx(),r=this._groups,o=r.length,l=0;l<o;++l)for(var u=r[l],c=u.length,h,d=0;d<c;++d)if(h=u[d]){var m=Ci(h,e);Qc(h,n,t,d,u,{time:m.time+m.delay+m.duration,delay:0,duration:m.duration,ease:m.ease})}return new cr(r,this._parents,n,t)}function Nb(){var n,e,t=this,r=t._id,o=t.size();return new Promise(function(l,u){var c={value:u},h={value:function(){--o===0&&l()}};t.each(function(){var d=ki(this,r),m=d.on;m!==n&&(e=(n=m).copy(),e._.cancel.push(c),e._.interrupt.push(c),e._.end.push(h)),d.on=e}),o===0&&l()})}var Ib=0;function cr(n,e,t,r){this._groups=n,this._parents=e,this._name=t,this._id=r}function zx(){return++Ib}var tr=Za.prototype;cr.prototype={constructor:cr,select:pb,selectAll:mb,selectChild:tr.selectChild,selectChildren:tr.selectChildren,filter:ab,merge:lb,selection:_b,transition:Db,call:tr.call,nodes:tr.nodes,node:tr.node,size:tr.size,empty:tr.empty,each:tr.each,on:fb,attr:XR,attrTween:KR,style:Mb,styleTween:Tb,text:Rb,textTween:Lb,remove:db,tween:kR,delay:JR,duration:nb,ease:rb,easeVarying:ob,end:Nb,[Symbol.iterator]:tr[Symbol.iterator]};function Ub(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Fb={time:null,delay:0,duration:250,ease:Ub};function Ob(n,e){for(var t;!(t=n.__transition)||!(t=t[e]);)if(!(n=n.parentNode))throw new Error(`transition ${e} not found`);return t}function kb(n){var e,t;n instanceof cr?(e=n._id,n=n._name):(e=zx(),(t=Fb).time=xp(),n=n==null?null:n+"");for(var r=this._groups,o=r.length,l=0;l<o;++l)for(var u=r[l],c=u.length,h,d=0;d<c;++d)(h=u[d])&&Qc(h,n,e,d,u,t||Ob(h,e));return new cr(r,this._parents,n,e)}Za.prototype.interrupt=UR;Za.prototype.transition=kb;var S0={},hd={},dd=34,Sa=10,pd=13;function Bx(n){return new Function("d","return {"+n.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function zb(n,e){var t=Bx(n);return function(r,o){return e(t(r),o,n)}}function M0(n){var e=Object.create(null),t=[];return n.forEach(function(r){for(var o in r)o in e||t.push(e[o]=o)}),t}function Fn(n,e){var t=n+"",r=t.length;return r<e?new Array(e-r+1).join(0)+t:t}function Bb(n){return n<0?"-"+Fn(-n,6):n>9999?"+"+Fn(n,6):Fn(n,4)}function Hb(n){var e=n.getUTCHours(),t=n.getUTCMinutes(),r=n.getUTCSeconds(),o=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":Bb(n.getUTCFullYear())+"-"+Fn(n.getUTCMonth()+1,2)+"-"+Fn(n.getUTCDate(),2)+(o?"T"+Fn(e,2)+":"+Fn(t,2)+":"+Fn(r,2)+"."+Fn(o,3)+"Z":r?"T"+Fn(e,2)+":"+Fn(t,2)+":"+Fn(r,2)+"Z":t||e?"T"+Fn(e,2)+":"+Fn(t,2)+"Z":"")}function Vb(n){var e=new RegExp('["'+n+`
\r]`),t=n.charCodeAt(0);function r(_,p){var v,E,M=o(_,function(x,y){if(v)return v(x,y-1);E=x,v=p?zb(x,p):Bx(x)});return M.columns=E||[],M}function o(_,p){var v=[],E=_.length,M=0,x=0,y,C=E<=0,T=!1;_.charCodeAt(E-1)===Sa&&--E,_.charCodeAt(E-1)===pd&&--E;function A(){if(C)return hd;if(T)return T=!1,S0;var D,N=M,W;if(_.charCodeAt(N)===dd){for(;M++<E&&_.charCodeAt(M)!==dd||_.charCodeAt(++M)===dd;);return(D=M)>=E?C=!0:(W=_.charCodeAt(M++))===Sa?T=!0:W===pd&&(T=!0,_.charCodeAt(M)===Sa&&++M),_.slice(N+1,D-1).replace(/""/g,'"')}for(;M<E;){if((W=_.charCodeAt(D=M++))===Sa)T=!0;else if(W===pd)T=!0,_.charCodeAt(M)===Sa&&++M;else if(W!==t)continue;return _.slice(N,D)}return C=!0,_.slice(N,E)}for(;(y=A())!==hd;){for(var z=[];y!==S0&&y!==hd;)z.push(y),y=A();p&&(z=p(z,x++))==null||v.push(z)}return v}function l(_,p){return _.map(function(v){return p.map(function(E){return m(v[E])}).join(n)})}function u(_,p){return p==null&&(p=M0(_)),[p.map(m).join(n)].concat(l(_,p)).join(`
`)}function c(_,p){return p==null&&(p=M0(_)),l(_,p).join(`
`)}function h(_){return _.map(d).join(`
`)}function d(_){return _.map(m).join(n)}function m(_){return _==null?"":_ instanceof Date?Hb(_):e.test(_+="")?'"'+_.replace(/"/g,'""')+'"':_}return{parse:r,parseRows:o,format:u,formatBody:c,formatRows:h,formatRow:d,formatValue:m}}var Gb=Vb(","),E0=Gb.parseRows;function Wb(n,e){var t,r=1;n==null&&(n=0),e==null&&(e=0);function o(){var l,u=t.length,c,h=0,d=0;for(l=0;l<u;++l)c=t[l],h+=c.x,d+=c.y;for(h=(h/u-n)*r,d=(d/u-e)*r,l=0;l<u;++l)c=t[l],c.x-=h,c.y-=d}return o.initialize=function(l){t=l},o.x=function(l){return arguments.length?(n=+l,o):n},o.y=function(l){return arguments.length?(e=+l,o):e},o.strength=function(l){return arguments.length?(r=+l,o):r},o}function Xb(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Hx(this.cover(e,t),e,t,n)}function Hx(n,e,t,r){if(isNaN(e)||isNaN(t))return n;var o,l=n._root,u={data:r},c=n._x0,h=n._y0,d=n._x1,m=n._y1,_,p,v,E,M,x,y,C;if(!l)return n._root=u,n;for(;l.length;)if((M=e>=(_=(c+d)/2))?c=_:d=_,(x=t>=(p=(h+m)/2))?h=p:m=p,o=l,!(l=l[y=x<<1|M]))return o[y]=u,n;if(v=+n._x.call(null,l.data),E=+n._y.call(null,l.data),e===v&&t===E)return u.next=l,o?o[y]=u:n._root=u,n;do o=o?o[y]=new Array(4):n._root=new Array(4),(M=e>=(_=(c+d)/2))?c=_:d=_,(x=t>=(p=(h+m)/2))?h=p:m=p;while((y=x<<1|M)===(C=(E>=p)<<1|v>=_));return o[C]=l,o[y]=u,n}function jb(n){var e,t,r=n.length,o,l,u=new Array(r),c=new Array(r),h=1/0,d=1/0,m=-1/0,_=-1/0;for(t=0;t<r;++t)isNaN(o=+this._x.call(null,e=n[t]))||isNaN(l=+this._y.call(null,e))||(u[t]=o,c[t]=l,o<h&&(h=o),o>m&&(m=o),l<d&&(d=l),l>_&&(_=l));if(h>m||d>_)return this;for(this.cover(h,d).cover(m,_),t=0;t<r;++t)Hx(this,u[t],c[t],n[t]);return this}function Yb(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,r=this._y0,o=this._x1,l=this._y1;if(isNaN(t))o=(t=Math.floor(n))+1,l=(r=Math.floor(e))+1;else{for(var u=o-t||1,c=this._root,h,d;t>n||n>=o||r>e||e>=l;)switch(d=(e<r)<<1|n<t,h=new Array(4),h[d]=c,c=h,u*=2,d){case 0:o=t+u,l=r+u;break;case 1:t=o-u,l=r+u;break;case 2:o=t+u,r=l-u;break;case 3:t=o-u,r=l-u;break}this._root&&this._root.length&&(this._root=c)}return this._x0=t,this._y0=r,this._x1=o,this._y1=l,this}function $b(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function qb(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Tn(n,e,t,r,o){this.node=n,this.x0=e,this.y0=t,this.x1=r,this.y1=o}function Kb(n,e,t){var r,o=this._x0,l=this._y0,u,c,h,d,m=this._x1,_=this._y1,p=[],v=this._root,E,M;for(v&&p.push(new Tn(v,o,l,m,_)),t==null?t=1/0:(o=n-t,l=e-t,m=n+t,_=e+t,t*=t);E=p.pop();)if(!(!(v=E.node)||(u=E.x0)>m||(c=E.y0)>_||(h=E.x1)<o||(d=E.y1)<l))if(v.length){var x=(u+h)/2,y=(c+d)/2;p.push(new Tn(v[3],x,y,h,d),new Tn(v[2],u,y,x,d),new Tn(v[1],x,c,h,y),new Tn(v[0],u,c,x,y)),(M=(e>=y)<<1|n>=x)&&(E=p[p.length-1],p[p.length-1]=p[p.length-1-M],p[p.length-1-M]=E)}else{var C=n-+this._x.call(null,v.data),T=e-+this._y.call(null,v.data),A=C*C+T*T;if(A<t){var z=Math.sqrt(t=A);o=n-z,l=e-z,m=n+z,_=e+z,r=v.data}}return r}function Zb(n){if(isNaN(m=+this._x.call(null,n))||isNaN(_=+this._y.call(null,n)))return this;var e,t=this._root,r,o,l,u=this._x0,c=this._y0,h=this._x1,d=this._y1,m,_,p,v,E,M,x,y;if(!t)return this;if(t.length)for(;;){if((E=m>=(p=(u+h)/2))?u=p:h=p,(M=_>=(v=(c+d)/2))?c=v:d=v,e=t,!(t=t[x=M<<1|E]))return this;if(!t.length)break;(e[x+1&3]||e[x+2&3]||e[x+3&3])&&(r=e,y=x)}for(;t.data!==n;)if(o=t,!(t=t.next))return this;return(l=t.next)&&delete t.next,o?(l?o.next=l:delete o.next,this):e?(l?e[x]=l:delete e[x],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[y]=t:this._root=t),this):(this._root=l,this)}function Qb(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Jb(){return this._root}function e2(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function t2(n){var e=[],t,r=this._root,o,l,u,c,h;for(r&&e.push(new Tn(r,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(r=t.node,l=t.x0,u=t.y0,c=t.x1,h=t.y1)&&r.length){var d=(l+c)/2,m=(u+h)/2;(o=r[3])&&e.push(new Tn(o,d,m,c,h)),(o=r[2])&&e.push(new Tn(o,l,m,d,h)),(o=r[1])&&e.push(new Tn(o,d,u,c,m)),(o=r[0])&&e.push(new Tn(o,l,u,d,m))}return this}function n2(n){var e=[],t=[],r;for(this._root&&e.push(new Tn(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var o=r.node;if(o.length){var l,u=r.x0,c=r.y0,h=r.x1,d=r.y1,m=(u+h)/2,_=(c+d)/2;(l=o[0])&&e.push(new Tn(l,u,c,m,_)),(l=o[1])&&e.push(new Tn(l,m,c,h,_)),(l=o[2])&&e.push(new Tn(l,u,_,m,d)),(l=o[3])&&e.push(new Tn(l,m,_,h,d))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.x1,r.y1);return this}function i2(n){return n[0]}function r2(n){return arguments.length?(this._x=n,this):this._x}function s2(n){return n[1]}function o2(n){return arguments.length?(this._y=n,this):this._y}function Vx(n,e,t){var r=new Ep(e??i2,t??s2,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function Ep(n,e,t,r,o,l){this._x=n,this._y=e,this._x0=t,this._y0=r,this._x1=o,this._y1=l,this._root=void 0}function w0(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Cn=Vx.prototype=Ep.prototype;Cn.copy=function(){var n=new Ep(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=w0(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var o=0;o<4;++o)(r=e.source[o])&&(r.length?t.push({source:r,target:e.target[o]=new Array(4)}):e.target[o]=w0(r));return n};Cn.add=Xb;Cn.addAll=jb;Cn.cover=Yb;Cn.data=$b;Cn.extent=qb;Cn.find=Kb;Cn.remove=Zb;Cn.removeAll=Qb;Cn.root=Jb;Cn.size=e2;Cn.visit=t2;Cn.visitAfter=n2;Cn.x=r2;Cn.y=o2;function Qn(n){return function(){return n}}function xo(n){return(n()-.5)*1e-6}function a2(n){return n.index}function T0(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function l2(n){var e=a2,t=_,r,o=Qn(30),l,u,c,h,d,m=1;n==null&&(n=[]);function _(x){return 1/Math.min(c[x.source.index],c[x.target.index])}function p(x){for(var y=0,C=n.length;y<m;++y)for(var T=0,A,z,D,N,W,L,R;T<C;++T)A=n[T],z=A.source,D=A.target,N=D.x+D.vx-z.x-z.vx||xo(d),W=D.y+D.vy-z.y-z.vy||xo(d),L=Math.sqrt(N*N+W*W),L=(L-l[T])/L*x*r[T],N*=L,W*=L,D.vx-=N*(R=h[T]),D.vy-=W*R,z.vx+=N*(R=1-R),z.vy+=W*R}function v(){if(u){var x,y=u.length,C=n.length,T=new Map(u.map((z,D)=>[e(z,D,u),z])),A;for(x=0,c=new Array(y);x<C;++x)A=n[x],A.index=x,typeof A.source!="object"&&(A.source=T0(T,A.source)),typeof A.target!="object"&&(A.target=T0(T,A.target)),c[A.source.index]=(c[A.source.index]||0)+1,c[A.target.index]=(c[A.target.index]||0)+1;for(x=0,h=new Array(C);x<C;++x)A=n[x],h[x]=c[A.source.index]/(c[A.source.index]+c[A.target.index]);r=new Array(C),E(),l=new Array(C),M()}}function E(){if(u)for(var x=0,y=n.length;x<y;++x)r[x]=+t(n[x],x,n)}function M(){if(u)for(var x=0,y=n.length;x<y;++x)l[x]=+o(n[x],x,n)}return p.initialize=function(x,y){u=x,d=y,v()},p.links=function(x){return arguments.length?(n=x,v(),p):n},p.id=function(x){return arguments.length?(e=x,p):e},p.iterations=function(x){return arguments.length?(m=+x,p):m},p.strength=function(x){return arguments.length?(t=typeof x=="function"?x:Qn(+x),E(),p):t},p.distance=function(x){return arguments.length?(o=typeof x=="function"?x:Qn(+x),M(),p):o},p}const u2=1664525,c2=1013904223,A0=4294967296;function f2(){let n=1;return()=>(n=(u2*n+c2)%A0)/A0}function h2(n){return n.x}function d2(n){return n.y}var p2=10,m2=Math.PI*(3-Math.sqrt(5));function g2(n){var e,t=1,r=.001,o=1-Math.pow(r,1/300),l=0,u=.6,c=new Map,h=yp(_),d=dp("tick","end"),m=f2();n==null&&(n=[]);function _(){p(),d.call("tick",e),t<r&&(h.stop(),d.call("end",e))}function p(M){var x,y=n.length,C;M===void 0&&(M=1);for(var T=0;T<M;++T)for(t+=(l-t)*o,c.forEach(function(A){A(t)}),x=0;x<y;++x)C=n[x],C.fx==null?C.x+=C.vx*=u:(C.x=C.fx,C.vx=0),C.fy==null?C.y+=C.vy*=u:(C.y=C.fy,C.vy=0);return e}function v(){for(var M=0,x=n.length,y;M<x;++M){if(y=n[M],y.index=M,y.fx!=null&&(y.x=y.fx),y.fy!=null&&(y.y=y.fy),isNaN(y.x)||isNaN(y.y)){var C=p2*Math.sqrt(.5+M),T=M*m2;y.x=C*Math.cos(T),y.y=C*Math.sin(T)}(isNaN(y.vx)||isNaN(y.vy))&&(y.vx=y.vy=0)}}function E(M){return M.initialize&&M.initialize(n,m),M}return v(),e={tick:p,restart:function(){return h.restart(_),e},stop:function(){return h.stop(),e},nodes:function(M){return arguments.length?(n=M,v(),c.forEach(E),e):n},alpha:function(M){return arguments.length?(t=+M,e):t},alphaMin:function(M){return arguments.length?(r=+M,e):r},alphaDecay:function(M){return arguments.length?(o=+M,e):+o},alphaTarget:function(M){return arguments.length?(l=+M,e):l},velocityDecay:function(M){return arguments.length?(u=1-M,e):1-u},randomSource:function(M){return arguments.length?(m=M,c.forEach(E),e):m},force:function(M,x){return arguments.length>1?(x==null?c.delete(M):c.set(M,E(x)),e):c.get(M)},find:function(M,x,y){var C=0,T=n.length,A,z,D,N,W;for(y==null?y=1/0:y*=y,C=0;C<T;++C)N=n[C],A=M-N.x,z=x-N.y,D=A*A+z*z,D<y&&(W=N,y=D);return W},on:function(M,x){return arguments.length>1?(d.on(M,x),e):d.on(M)}}}function _2(){var n,e,t,r,o=Qn(-30),l,u=1,c=1/0,h=.81;function d(v){var E,M=n.length,x=Vx(n,h2,d2).visitAfter(_);for(r=v,E=0;E<M;++E)e=n[E],x.visit(p)}function m(){if(n){var v,E=n.length,M;for(l=new Array(E),v=0;v<E;++v)M=n[v],l[M.index]=+o(M,v,n)}}function _(v){var E=0,M,x,y=0,C,T,A;if(v.length){for(C=T=A=0;A<4;++A)(M=v[A])&&(x=Math.abs(M.value))&&(E+=M.value,y+=x,C+=x*M.x,T+=x*M.y);v.x=C/y,v.y=T/y}else{M=v,M.x=M.data.x,M.y=M.data.y;do E+=l[M.data.index];while(M=M.next)}v.value=E}function p(v,E,M,x){if(!v.value)return!0;var y=v.x-e.x,C=v.y-e.y,T=x-E,A=y*y+C*C;if(T*T/h<A)return A<c&&(y===0&&(y=xo(t),A+=y*y),C===0&&(C=xo(t),A+=C*C),A<u&&(A=Math.sqrt(u*A)),e.vx+=y*v.value*r/A,e.vy+=C*v.value*r/A),!0;if(v.length||A>=c)return;(v.data!==e||v.next)&&(y===0&&(y=xo(t),A+=y*y),C===0&&(C=xo(t),A+=C*C),A<u&&(A=Math.sqrt(u*A)));do v.data!==e&&(T=l[v.data.index]*r/A,e.vx+=y*T,e.vy+=C*T);while(v=v.next)}return d.initialize=function(v,E){n=v,t=E,m()},d.strength=function(v){return arguments.length?(o=typeof v=="function"?v:Qn(+v),m(),d):o},d.distanceMin=function(v){return arguments.length?(u=v*v,d):Math.sqrt(u)},d.distanceMax=function(v){return arguments.length?(c=v*v,d):Math.sqrt(c)},d.theta=function(v){return arguments.length?(h=v*v,d):Math.sqrt(h)},d}function v2(n){var e=Qn(.1),t,r,o;typeof n!="function"&&(n=Qn(n==null?0:+n));function l(c){for(var h=0,d=t.length,m;h<d;++h)m=t[h],m.vx+=(o[h]-m.x)*r[h]*c}function u(){if(t){var c,h=t.length;for(r=new Array(h),o=new Array(h),c=0;c<h;++c)r[c]=isNaN(o[c]=+n(t[c],c,t))?0:+e(t[c],c,t)}}return l.initialize=function(c){t=c,u()},l.strength=function(c){return arguments.length?(e=typeof c=="function"?c:Qn(+c),u(),l):e},l.x=function(c){return arguments.length?(n=typeof c=="function"?c:Qn(+c),u(),l):n},l}function x2(n){var e=Qn(.1),t,r,o;typeof n!="function"&&(n=Qn(n==null?0:+n));function l(c){for(var h=0,d=t.length,m;h<d;++h)m=t[h],m.vy+=(o[h]-m.y)*r[h]*c}function u(){if(t){var c,h=t.length;for(r=new Array(h),o=new Array(h),c=0;c<h;++c)r[c]=isNaN(o[c]=+n(t[c],c,t))?0:+e(t[c],c,t)}}return l.initialize=function(c){t=c,u()},l.strength=function(c){return arguments.length?(e=typeof c=="function"?c:Qn(+c),u(),l):e},l.y=function(c){return arguments.length?(n=typeof c=="function"?c:Qn(+c),u(),l):n},l}function y2(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Lc(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),r=n.slice(0,t);return[r.length>1?r[0]+r.slice(2):r,+n.slice(t+1)]}function Co(n){return n=Lc(Math.abs(n)),n?n[1]:NaN}function S2(n,e){return function(t,r){for(var o=t.length,l=[],u=0,c=n[0],h=0;o>0&&c>0&&(h+c+1>r&&(c=Math.max(1,r-h)),l.push(t.substring(o-=c,o+c)),!((h+=c+1)>r));)c=n[u=(u+1)%n.length];return l.reverse().join(e)}}function M2(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var E2=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Dc(n){if(!(e=E2.exec(n)))throw new Error("invalid format: "+n);var e;return new wp({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Dc.prototype=wp.prototype;function wp(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}wp.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function w2(n){e:for(var e=n.length,t=1,r=-1,o;t<e;++t)switch(n[t]){case".":r=o=t;break;case"0":r===0&&(r=t),o=t;break;default:if(!+n[t])break e;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(o+1):n}var Nc;function T2(n,e){var t=Lc(n,e);if(!t)return Nc=void 0,n.toPrecision(e);var r=t[0],o=t[1],l=o-(Nc=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,u=r.length;return l===u?r:l>u?r+new Array(l-u+1).join("0"):l>0?r.slice(0,l)+"."+r.slice(l):"0."+new Array(1-l).join("0")+Lc(n,Math.max(0,e+l-1))[0]}function C0(n,e){var t=Lc(n,e);if(!t)return n+"";var r=t[0],o=t[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const R0={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:y2,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>C0(n*100,e),r:C0,s:T2,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function b0(n){return n}var P0=Array.prototype.map,L0=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function A2(n){var e=n.grouping===void 0||n.thousands===void 0?b0:S2(P0.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",o=n.decimal===void 0?".":n.decimal+"",l=n.numerals===void 0?b0:M2(P0.call(n.numerals,String)),u=n.percent===void 0?"%":n.percent+"",c=n.minus===void 0?"−":n.minus+"",h=n.nan===void 0?"NaN":n.nan+"";function d(_,p){_=Dc(_);var v=_.fill,E=_.align,M=_.sign,x=_.symbol,y=_.zero,C=_.width,T=_.comma,A=_.precision,z=_.trim,D=_.type;D==="n"?(T=!0,D="g"):R0[D]||(A===void 0&&(A=12),z=!0,D="g"),(y||v==="0"&&E==="=")&&(y=!0,v="0",E="=");var N=(p&&p.prefix!==void 0?p.prefix:"")+(x==="$"?t:x==="#"&&/[boxX]/.test(D)?"0"+D.toLowerCase():""),W=(x==="$"?r:/[%p]/.test(D)?u:"")+(p&&p.suffix!==void 0?p.suffix:""),L=R0[D],R=/[defgprs%]/.test(D);A=A===void 0?6:/[gprs]/.test(D)?Math.max(1,Math.min(21,A)):Math.max(0,Math.min(20,A));function U(V){var q=N,X=W,J,ee,re;if(D==="c")X=L(V)+X,V="";else{V=+V;var B=V<0||1/V<0;if(V=isNaN(V)?h:L(Math.abs(V),A),z&&(V=w2(V)),B&&+V==0&&M!=="+"&&(B=!1),q=(B?M==="("?M:c:M==="-"||M==="("?"":M)+q,X=(D==="s"&&!isNaN(V)&&Nc!==void 0?L0[8+Nc/3]:"")+X+(B&&M==="("?")":""),R){for(J=-1,ee=V.length;++J<ee;)if(re=V.charCodeAt(J),48>re||re>57){X=(re===46?o+V.slice(J+1):V.slice(J))+X,V=V.slice(0,J);break}}}T&&!y&&(V=e(V,1/0));var fe=q.length+V.length+X.length,ie=fe<C?new Array(C-fe+1).join(v):"";switch(T&&y&&(V=e(ie+V,ie.length?C-X.length:1/0),ie=""),E){case"<":V=q+V+X+ie;break;case"=":V=q+ie+V+X;break;case"^":V=ie.slice(0,fe=ie.length>>1)+q+V+X+ie.slice(fe);break;default:V=ie+q+V+X;break}return l(V)}return U.toString=function(){return _+""},U}function m(_,p){var v=Math.max(-8,Math.min(8,Math.floor(Co(p)/3)))*3,E=Math.pow(10,-v),M=d((_=Dc(_),_.type="f",_),{suffix:L0[8+v/3]});return function(x){return M(E*x)}}return{format:d,formatPrefix:m}}var Nu,Gx,Wx;C2({thousands:",",grouping:[3],currency:["$",""]});function C2(n){return Nu=A2(n),Gx=Nu.format,Wx=Nu.formatPrefix,Nu}function R2(n){return Math.max(0,-Co(Math.abs(n)))}function b2(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Co(e)/3)))*3-Co(Math.abs(n)))}function P2(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Co(e)-Co(n))+1}function L2(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function D2(n){return function(){return n}}function N2(n){return+n}var D0=[0,1];function yo(n){return n}function Ud(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:D2(isNaN(e)?NaN:.5)}function I2(n,e){var t;return n>e&&(t=n,n=e,e=t),function(r){return Math.max(n,Math.min(e,r))}}function U2(n,e,t){var r=n[0],o=n[1],l=e[0],u=e[1];return o<r?(r=Ud(o,r),l=t(u,l)):(r=Ud(r,o),l=t(l,u)),function(c){return l(r(c))}}function F2(n,e,t){var r=Math.min(n.length,e.length)-1,o=new Array(r),l=new Array(r),u=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++u<r;)o[u]=Ud(n[u],n[u+1]),l[u]=t(e[u],e[u+1]);return function(c){var h=sA(n,c,1,r)-1;return l[h](o[h](c))}}function O2(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function k2(){var n=D0,e=D0,t=vp,r,o,l,u=yo,c,h,d;function m(){var p=Math.min(n.length,e.length);return u!==yo&&(u=I2(n[0],n[p-1])),c=p>2?F2:U2,h=d=null,_}function _(p){return p==null||isNaN(p=+p)?l:(h||(h=c(n.map(r),e,t)))(r(u(p)))}return _.invert=function(p){return u(o((d||(d=c(e,n.map(r),Mi)))(p)))},_.domain=function(p){return arguments.length?(n=Array.from(p,N2),m()):n.slice()},_.range=function(p){return arguments.length?(e=Array.from(p),m()):e.slice()},_.rangeRound=function(p){return e=Array.from(p),t=MR,m()},_.clamp=function(p){return arguments.length?(u=p?!0:yo,m()):u!==yo},_.interpolate=function(p){return arguments.length?(t=p,m()):t},_.unknown=function(p){return arguments.length?(l=p,_):l},function(p,v){return r=p,o=v,m()}}function z2(){return k2()(yo,yo)}function B2(n,e,t,r){var o=gA(n,e,t),l;switch(r=Dc(r??",f"),r.type){case"s":{var u=Math.max(Math.abs(n),Math.abs(e));return r.precision==null&&!isNaN(l=b2(o,u))&&(r.precision=l),Wx(r,u)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(l=P2(o,Math.max(Math.abs(n),Math.abs(e))))&&(r.precision=l-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(l=R2(o))&&(r.precision=l-(r.type==="%")*2);break}}return Gx(r)}function H2(n){var e=n.domain;return n.ticks=function(t){var r=e();return mA(r[0],r[r.length-1],t??10)},n.tickFormat=function(t,r){var o=e();return B2(o[0],o[o.length-1],t??10,r)},n.nice=function(t){t==null&&(t=10);var r=e(),o=0,l=r.length-1,u=r[o],c=r[l],h,d,m=10;for(c<u&&(d=u,u=c,c=d,d=o,o=l,l=d);m-- >0;){if(d=Cd(u,c,t),d===h)return r[o]=u,r[l]=c,e(r);if(d>0)u=Math.floor(u/d)*d,c=Math.ceil(c/d)*d;else if(d<0)u=Math.ceil(u*d)/d,c=Math.floor(c*d)/d;else break;h=d}return n},n}function Fd(){var n=z2();return n.copy=function(){return O2(n,Fd())},L2.apply(n,arguments),H2(n)}function Aa(n,e,t){this.k=n,this.x=e,this.y=t}Aa.prototype={constructor:Aa,scale:function(n){return n===1?this:new Aa(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new Aa(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Aa.prototype;function mo(n){return n&&n!=="\\N"}function V2(n,e){const t=E0(n),r=new Map,o=new Map;for(const p of t){if(p.length<8)continue;const v=+p[6],E=+p[7];if(!Number.isFinite(v)||!Number.isFinite(E))continue;const M={numericId:p[0],name:p[1],city:p[2],country:p[3],iata:mo(p[4])?p[4]:null,icao:mo(p[5])?p[5]:null,lat:v,lon:E,degree:0,routeCount:0,international:0,domestic:0,neighbors:new Set,index:-1,topology:null};M.id=M.iata||M.icao||`ID-${M.numericId}`,r.set(M.numericId,M),M.iata&&o.set(M.iata,M),M.icao&&o.set(M.icao,M)}const l=new Map;let u=0,c=0;for(const p of E0(e)){if(p.length<6)continue;const v=mo(p[3])&&r.get(p[3])||mo(p[2])&&o.get(p[2]),E=mo(p[5])&&r.get(p[5])||mo(p[4])&&o.get(p[4]);if(!v||!E||v===E){c++;continue}u++;const M=v.numericId<E.numericId?[v,E]:[E,v],x=`${M[0].numericId}|${M[1].numericId}`;let y=l.get(x);y||(y={source:M[0],target:M[1],weight:0,carriers:new Set,international:M[0].country!==M[1].country},l.set(x,y)),y.weight++,p[0]&&y.carriers.add(p[0])}const h=[...l.values()],d=new Set;for(const p of h)d.add(p.source),d.add(p.target),p.source.neighbors.add(p.target.numericId),p.target.neighbors.add(p.source.numericId),p.source.routeCount+=p.weight,p.target.routeCount+=p.weight,p.international?(p.source.international+=p.weight,p.target.international+=p.weight):(p.source.domestic+=p.weight,p.target.domestic+=p.weight);const m=[...d];m.forEach((p,v)=>{p.index=v,p.degree=p.neighbors.size}),h.forEach((p,v)=>{p.index=v,p.score=p.weight*20+Math.sqrt(p.source.degree*p.target.degree)}),h.sort((p,v)=>v.score-p.score);const _=cA(m,p=>p.length,p=>p.country).sort((p,v)=>mx(p[1],v[1]));return{nodes:m,links:h,countries:_,rawRouteCount:u,skipped:c}}function Od(n,e,t=1){const r=(90-n)*Math.PI/180,o=(e+180)*Math.PI/180;return new K(-Math.sin(r)*Math.cos(o),Math.cos(r),Math.sin(r)*Math.sin(o)).multiplyScalar(t)}function N0(n,e,t,r){const o=n.clone().normalize(),l=e.clone().normalize(),u=Math.acos(Wc.clamp(o.dot(l),-1,1));let c;if(u<1e-4)c=o.clone().lerp(l,t).normalize();else{const h=Math.sin(u);c=o.multiplyScalar(Math.sin((1-t)*u)/h).add(l.multiplyScalar(Math.sin(t*u)/h))}return c.multiplyScalar(1.012+Math.sin(Math.PI*t)*r)}function I0(n,e,t){const r=n===e,o=!!(e&&e.neighbors.has(n.numericId)),l=r?t.nodeSelected:o?t.nodeConnected:n.degree>45?t.node.hub:n.degree>15?t.node.mid:t.node.low,u=(4.2+Math.min(8,Math.sqrt(n.degree)*.72))*(r?1.65:o?1.2:1);return{color:l,pixelSize:u,isSelected:r,connected:o}}function U0(n,e,t,r){const o=Wc.degToRad(e.fov),l=2*Math.tan(o/2)*r,u=t/l;return n/(2*u)}const G2=1.014;function W2(n){const e=n.length,t=new Float32Array(e*3),r=new Float32Array(e*3);let o=!1;const l=new K;return n.forEach((u,c)=>{l.copy(Od(u.lat,u.lon,G2)),t[c*3]=l.x,t[c*3+1]=l.y,t[c*3+2]=l.z}),{count:e,geo:t,topology:r,get topologyReady(){return o},markTopologyReady(){o=!0},table(u){return u==="globe"||!o?t:r},read(u,c,h){const d=this.table(u);return h.set(d[c*3],d[c*3+1],d[c*3+2])}}}const X2="e3bc6dedbcceb8b7b74248a00dcd6207254da6bd",j2=`https://cdn.jsdelivr.net/gh/jpatokal/openflights@${X2}/data`,Y2=2e4,$2=["airports","routes"];async function q2(n,e,t){const r=new AbortController,o=()=>r.abort(t?.reason);t?.aborted?r.abort(t.reason):t?.addEventListener("abort",o,{once:!0});const l=e?setTimeout(()=>r.abort(new Error("timed out")),e):null;try{const u=await fetch(n,{signal:r.signal});if(!u.ok)throw new Error(`HTTP ${u.status}`);const c=await u.text();if(/^\s*<(?:!doctype|html)/i.test(c))throw new Error("received HTML, not data");return c}finally{l&&clearTimeout(l),t?.removeEventListener("abort",o)}}const Iu={local:{id:"local",label:"bundled data files",url:n=>`/openflights/${n}.dat`},upstream:{id:"upstream",label:"OpenFlights upstream (jsDelivr)",url:n=>`${j2}/${n}.dat`,timeout:Y2}};function K2(){const n=typeof window>"u"?null:new URLSearchParams(window.location.search).get("data");return n==="local"?[Iu.local]:n==="upstream"?[Iu.upstream]:[Iu.local,Iu.upstream]}async function Z2({signal:n}={}){const e=[];for(const r of K2())try{const[o,l]=await Promise.all($2.map(u=>q2(r.url(u),r.timeout,n)));return{airports:o,routes:l,source:r.id,attempts:e}}catch(o){if(n?.aborted)throw o;e.push(`${r.label}: ${o.message}`)}const t=new Error(e.join("; ")||"no data sources configured");throw t.attempts=e,t}function Q2(n,e,t){Et.useEffect(()=>{if(!n)return;let r=!1,o;const l=n.nodes.map(m=>({id:m.numericId,x:m.lon*2.1,y:-m.lat*2.1,ref:m}));new Map(l.map(m=>[m.id,m]));const u=n.links.map(m=>({source:m.source.numericId,target:m.target.numericId,weight:m.weight})),c=g2(l).force("link",l2(u).id(m=>m.id).distance(m=>18+22/Math.sqrt(m.weight)).strength(.045)).force("charge",_2().strength(-17).distanceMax(190)).force("center",Wb(0,0)).force("x",v2(0).strength(.012)).force("y",x2(0).strength(.012)).stop();let h=0;const d=m=>{for(;!r&&h<85&&m.timeRemaining()>1;)c.tick(),h++;if(!r)if(h<85)o=i0(d);else{const _=r0(l,x=>x.x),p=r0(l,x=>x.y),v=Fd().domain(_).range([-1.5,1.5]),E=Fd().domain(p).range([1.1,-1.1]),M=e.topology;for(const x of l){const y=x.ref.index;M[y*3]=v(x.x),M[y*3+1]=E(x.y),M[y*3+2]=.08*Math.log1p(x.ref.degree)}e.markTopologyReady(),t()}};return o=i0(d),()=>{r=!0,tA(o),c.stop()}},[n,t])}const F0={type:"change"},Tp={type:"start"},Xx={type:"end"},Uu=new $a,O0=new nr,J2=Math.cos(70*Wc.DEG2RAD),Qt=new K,Un=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},md=1e-6;class eP extends px{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new jr,this._lastTargetPosition=new K,this._quat=new jr().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ad,this._sphericalDelta=new Ad,this._scale=1,this._panOffset=new K,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new K,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nP.bind(this),this._onPointerDown=tP.bind(this),this._onPointerUp=iP.bind(this),this._onContextMenu=cP.bind(this),this._onMouseWheel=oP.bind(this),this._onKeyDown=aP.bind(this),this._onTouchStart=lP.bind(this),this._onTouchMove=uP.bind(this),this._onMouseDown=rP.bind(this),this._onMouseMove=sP.bind(this),this._interceptControlDown=fP.bind(this),this._interceptControlUp=hP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(F0),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Un:r>Math.PI&&(r-=Un),o<-Math.PI?o+=Un:o>Math.PI&&(o-=Un),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=Qt.length();u=this._clampDistance(c*this._scale);const h=c-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),u=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Uu.origin.copy(this.object.position),Uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uu.direction))<J2?this.object.lookAt(this.target):(O0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uu.intersectPlane(O0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>md||this._lastTargetPosition.distanceToSquared(this.target)>md?(this.dispatchEvent(F0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Qt.copy(o).sub(this.target);let l=Qt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,c=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new it,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function tP(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function nP(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function iP(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xx),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rP(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ct.DOLLY;break;case xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}break;case xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tp)}function sP(n){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function oP(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(n.preventDefault(),this.dispatchEvent(Tp),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Xx))}function aP(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function lP(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ct.TOUCH_ROTATE;break;case _s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case _s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ct.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Tp)}function uP(n){switch(this._trackPointer(n),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ct.NONE}}function cP(n){this.enabled!==!1&&n.preventDefault()}function fP(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hP(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const dP=`
varying vec2 vUv;
varying vec3 vNormal;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,pP=`
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
}`;function mP(n,e,t){const r=n.land;return new Jn({transparent:!1,uniforms:{uTerrain:{value:e},uTexel:{value:new it(1/t.x,1/t.y)},uOcean:{value:n.ocean.clone()},uOceanDeep:{value:n.oceanDeep.clone()},uShore:{value:n.shore.clone()},uRamp:{value:r.map(o=>o.color.clone())},uRampAt:{value:r.map(o=>o.at)},uRelief:{value:n.relief},uLightDir:{value:new K(.6,.45,.66).normalize()}},vertexShader:dP,fragmentShader:pP})}function gP(n,e){const t=new vo;n.add(t);const r=new ax({color:1055270,emissive:462874,specular:2704476,shininess:22,transparent:!1}),o=new Zn(new Ss(JT,96,64),r);t.add(o);const l=new Ka({color:3493992,transparent:!0,opacity:.13,depthWrite:!1}),u=new $c(new sx(new Ss(1.003,36,18)),l);t.add(u);const c=new Jn({transparent:!0,side:xn,depthWrite:!1,uniforms:{uColor:{value:new Ge("#389eeb")},uStrength:{value:.26}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){vN=normalize(normalMatrix*normal); vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform vec3 uColor; uniform float uStrength; varying vec3 vN; varying vec3 vW; void main(){vec3 V=normalize(cameraPosition-vW);float rim=pow(1.0-max(dot(vN,V),0.0),2.4);gl_FragColor=vec4(uColor,rim*uStrength);
      #include <colorspace_fragment>
    }`}),h=new Zn(new Ss(1.045,48,32),c);t.add(h);const d=new cn,m=new Float32Array(900*3);for(let C=0;C<900;C++){const T=7+Math.random()*8,A=Math.random()*2-1,z=Math.random()*Math.PI*2,D=Math.sqrt(1-A*A);m[C*3]=T*D*Math.cos(z),m[C*3+1]=T*A,m[C*3+2]=T*D*Math.sin(z)}d.setAttribute("position",new Wt(m,3));const _=new fp(d,new cp({color:8231863,size:.012,transparent:!0,opacity:.42,depthWrite:!1}));n.add(_);let p=null,v=null,E=!1,M=null;const x=(C,T)=>{p||E||!C.terrain||(E=!0,new fx().load("/openflights/geo/terrain-4096.png",A=>{E=!1,A.colorSpace=Ei,A.wrapS=Fa,A.wrapT=ir,A.minFilter=rr,A.magFilter=Kn,A.generateMipmaps=!0,A.anisotropy=8,v=A,p=mP(C.terrain,A,{x:A.image.width,y:A.image.height}),M&&M.terrain&&(o.material=p),T?.()},void 0,()=>{E=!1}))};return{globeGroup:t,globe:o,grid:u,atmosphere:h,starsObj:_,starsGeo:d,applyTheme:(C,T)=>{M=C,C.terrain?p?o.material=p:x(C,T):o.material=r,l.color.set(C.grid.color),l.opacity=C.grid.opacity,c.uniforms.uColor.value.copy(C.atmosphere.color),c.uniforms.uStrength.value=C.atmosphere.strength,_.visible=C.stars},dispose(){v?.dispose(),p?.dispose(),r.dispose()}}}function _P(n,e,t,r,o,l){const u=new Float32Array(e.nodes.length*3),c=new Float32Array(e.nodes.length*3),h=new Float32Array(e.nodes.length),d=new Float32Array(e.nodes.length),m=new Float32Array(e.nodes.length),_=new Float32Array(e.nodes.length);for(let R=0;R<m.length;R++)m[R]=R;u.set(t.geo),e.nodes.forEach((R,U)=>{h[U]=4.2+Math.min(8,Math.sqrt(R.degree)*.72),d[U]=.88});const p=new cn;p.setAttribute("position",new Wt(u,3)),p.setAttribute("color",new Wt(c,3)),p.setAttribute("aSize",new Wt(h,1)),p.setAttribute("aAlpha",new Wt(d,1)),p.setAttribute("aIndex",new Wt(m,1)),p.setAttribute("aPickable",new Wt(_,1));const v=new Jn({transparent:!0,depthWrite:!1,vertexColors:!0,uniforms:{uPixelRatio:{value:r.getPixelRatio()}},vertexShader:"attribute float aSize;attribute float aAlpha;varying vec3 vColor;varying float vAlpha;void main(){vColor=color;vAlpha=aAlpha;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(aSize*(260.0/-mv.z),2.0,18.0);gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.25,d)*vAlpha;if(a<.015)discard;gl_FragColor=vec4(vColor,a);
      #include <colorspace_fragment>
    }`}),E=new fp(p,v);n.add(E);const M=e.nodes.reduce((R,U)=>U.degree>R.degree?U:R,e.nodes[0]),x=new Ss(1,24,16),y=new ox({roughness:.32,metalness:.2}),C=new Zn(x,y);C.visible=!1,n.add(C);let T=0,A=3.55;const z=(R,U,V,q)=>{if(!V){C.visible=!1;return}const{color:X,pixelSize:J}=I0(V,U,q);t.read(R.view,V.index,C.position),W=V.index,y.color.copy(X),y.emissive.copy(X).multiplyScalar(.32),T=J,A=R.view==="globe"?3.55:4.2,C.scale.setScalar(U0(T,o,l(),A)),C.visible=!0};let D=e.nodes.map((R,U)=>U),N=t.geo,W=-1;const L=(R,U,V,q)=>{D=[];const X=t.table(R.view);X!==N&&(u.set(X),p.attributes.position.needsUpdate=!0,N=X),e.nodes.forEach((J,ee)=>{const re=!R.country||J.country===R.country,B=J.degree>=R.minDegree,fe=re&&B,{color:ie,pixelSize:O,isSelected:oe,connected:be}=I0(J,U,q);let j=oe?1:fe?.9:be?.75:eA;const ue=J===V;ue&&(j=0),c[ee*3]=ie.r,c[ee*3+1]=ie.g,c[ee*3+2]=ie.b,d[ee]=j,h[ee]=O;const _e=oe||be||fe||ue;_[ee]=_e?1:0,_e&&D.push(ee)}),p.attributes.color.needsUpdate=!0,p.attributes.aAlpha.needsUpdate=!0,p.attributes.aSize.needsUpdate=!0,p.attributes.aPickable.needsUpdate=!0};return{points:E,topHubNode:M,geometry:p,material:v,heroMesh:C,get heroIndex(){return C.visible?W:-1},positions:u,get visibleIndices(){return D},update(R,U,V,q){L(R,U,V,q),z(R,U,V,q)},resize(){C.visible&&C.scale.setScalar(U0(T,o,l(),A))},dispose(){p.dispose(),v.dispose(),x.dispose(),y.dispose()}}}function vP(n,e,t){let r=null,o=null;const l=new K,u=new K,c=(_,p)=>{t.read(_,p.source.index,l),t.read(_,p.target.index,u)},h=_=>{_&&(n.remove(_),_.geometry.dispose(),_.material.dispose())},d=(_,p,v,E,M,x,y)=>{if(!_.length)return null;let C=0;for(const W of _)C+=p.view==="globe"?(c("globe",W),l.angleTo(u)>1.25?11:7):1;const T=new Float32Array(C*2*3),A=new Float32Array(C*2*3);let z=0;for(const W of _){const R=E&&(W.source===E||W.target===E)?v.route.selected:W.international?v.route.intl:v.route.domestic;if(p.view==="globe"){c("globe",W);const U=l.angleTo(u),V=U>1.25?11:7,q=.025+Math.min(.34,U*.18)+M;let X=N0(l,u,0,q);for(let J=1;J<=V;J++){const ee=N0(l,u,J/V,q);T.set(X.toArray(),z),A.set(R.toArray(),z),z+=3,T.set(ee.toArray(),z),A.set(R.toArray(),z),z+=3,X=ee}}else c("topology",W),T.set(l.toArray(),z),A.set(R.toArray(),z),z+=3,T.set(u.toArray(),z),A.set(R.toArray(),z),z+=3}const D=new cn;D.setAttribute("position",new Wt(T,3)),D.setAttribute("color",new Wt(A,3));const N=new $c(D,new Ka({vertexColors:!0,transparent:!0,opacity:x,depthWrite:!1,blending:v.routeBlending}));return N.renderOrder=y,n.add(N),N};return{get objects(){return[r,o].filter(Boolean)},get object(){return r},update:(_,p,v)=>{h(r),h(o),r=o=null;const E=Math.ceil(e.links.length*_.density/100),M=[],x=[];let y=0;for(const A of e.links){if(y>=E)break;_.scope==="international"&&!A.international||_.scope==="domestic"&&A.international||_.country&&A.source.country!==_.country&&A.target.country!==_.country||A.source.degree<_.minDegree||A.target.degree<_.minDegree||(y++,p&&(A.source===p||A.target===p)?x.push(A):M.push(A))}const C=_.view==="globe"?"globe":"topology",T=x.length?v.routeContextOpacity[C]:v.routeOpacity[C];r=d(M,_,v,p,0,T,1),o=d(x,_,v,p,_.view==="globe"?.02:0,v.routeFocusOpacity,2)},dispose(){h(r),h(o),r=o=null}}}const xP=8,yP=["attribute float aSize;","attribute float aIndex;","attribute float aPickable;","varying vec3 vId;","void main() {","  if (aPickable < 0.5) {","    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);","    gl_PointSize = 0.0;","    return;","  }","  float id = aIndex + 1.0;","  vId = vec3(","    floor(id / 65536.0),","    floor(mod(id, 65536.0) / 256.0),","    mod(id, 256.0)","  ) / 255.0;","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  gl_PointSize = clamp(aSize * (260.0 / -mv.z), 2.0, 18.0);","  gl_Position = projectionMatrix * mv;","}"].join(`
`),SP=["varying vec3 vId;","void main() {","  if (length(gl_PointCoord - 0.5) > 0.5) discard;","  gl_FragColor = vec4(vId, 1.0);","}"].join(`
`),k0=n=>new n.ShaderMaterial({uniforms:{uId:{value:new n.Vector3}},vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 uId;void main(){gl_FragColor=vec4(uId,1.0);}"}),MP=(n,e)=>e.set(Math.floor(n/65536)/255,Math.floor(n/256)%256/255,n%256/255);function EP({renderer:n,scene:e,camera:t,data:r,sprites:o,world:l,routes:u,selectedRef:c,onHover:h,onSelect:d,onClear:m}){let _=0,p=null,v=!1,E=0,M=null,x=null;const y=new Jn({vertexShader:yP,fragmentShader:SP,transparent:!1,depthTest:!0,depthWrite:!0}),C=k0(t0),T=k0(t0),A=U=>{const V=Math.max(1,Math.round(xP*2*U)+1);V===E&&M||(M?.dispose(),E=V,M=new ur(E,E,{minFilter:An,magFilter:An,depthBuffer:!0}),M.texture.colorSpace=Ei,M.texture.generateMipmaps=!1,x=new Uint8Array(E*E*4))},z=(U,V)=>{const q=n.domElement,X=q.getBoundingClientRect();if(U<X.left||V<X.top||U>X.right||V>X.bottom)return null;const J=n.getPixelRatio();A(J);const ee=Math.round(X.width*J),re=Math.round(X.height*J),B=(U-X.left)*J,fe=(V-X.top)*J,ie=o.heroIndex,O=[],oe=Ne=>{Ne&&(O.push([Ne,"visible",Ne.visible]),Ne.visible=!1)},be=(Ne,ft)=>{O.push([Ne,"material",Ne.material]),Ne.material=ft};oe(l.starsObj),oe(l.grid),oe(l.atmosphere),u.objects.forEach(oe),be(l.globe,C),be(o.points,y),ie>=0?(MP(ie+1,T.uniforms.uId.value),be(o.heroMesh,T)):oe(o.heroMesh);const j=n.getRenderTarget(),ue=n.getClearColor(new Ge),_e=n.getClearAlpha();t.setViewOffset(ee,re,Math.round(B)-(E>>1),Math.round(fe)-(E>>1),E,E),n.setRenderTarget(M),n.setClearColor(0,1),n.clear(),n.render(e,t),n.readRenderTargetPixels(M,0,0,E,E,x),t.clearViewOffset(),n.setRenderTarget(j),n.setClearColor(ue,_e);for(let Ne=O.length-1;Ne>=0;Ne--){const[ft,k,_t]=O[Ne];ft[k]=_t}const ye=E>>1;let Ce=null,De=1/0;for(let Ne=0;Ne<E;Ne++)for(let ft=0;ft<E;ft++){const k=((E-1-Ne)*E+ft)*4,_t=x[k]<<16|x[k+1]<<8|x[k+2];if(!_t)continue;const ht=(ft-ye)*(ft-ye)+(Ne-ye)*(Ne-ye);ht<De&&(De=ht,Ce=_t-1)}return Ce!==null&&Ce<r.nodes.length?Ce:null},D=U=>{_||(_=requestAnimationFrame(()=>{if(_=0,c.current)return;const V=z(U.clientX,U.clientY);n.domElement.style.cursor=V===null?"grab":"pointer",h(V===null?null:r.nodes[V],V===null?null:{x:U.clientX,y:U.clientY})}))},N=U=>{p={x:U.clientX,y:U.clientY},v=!1},W=U=>{if(!p)return;const V=U.clientX-p.x,q=U.clientY-p.y;if(v=V*V+q*q>36,p=null,v)return;const X=z(U.clientX,U.clientY);X===null?m():d(r.nodes[X],{x:U.clientX,y:U.clientY})},L=()=>{_&&(cancelAnimationFrame(_),_=0),c.current||h(null,null)},R=n.domElement;return R.addEventListener("pointermove",D,{passive:!0}),R.addEventListener("pointerdown",N),R.addEventListener("pointerup",W),R.addEventListener("pointerleave",L),{pickAt:z,dispose(){_&&cancelAnimationFrame(_),R.removeEventListener("pointermove",D),R.removeEventListener("pointerdown",N),R.removeEventListener("pointerup",W),R.removeEventListener("pointerleave",L),M?.dispose(),y.dispose(),C.dispose(),T.dispose()}}}const z0=1.0025,wP=4,TP=2.6;function AP(n){const{scale:e,translate:t}=n.transform;return n.arcs.map(r=>{let o=0,l=0;return r.map(([u,c])=>(o+=u,l+=c,[o*e[0]+t[0],l*e[1]+t[1]]))})}function CP(n,e){const t=n.objects.countries||n.objects.land,r=[],o=l=>{const u=[];for(const c of l){const h=c<0?e[~c].slice().reverse():e[c];u.length?u.push(...h.slice(1)):u.push(...h)}return u};for(const l of t.geometries){const u=l.type==="Polygon"?[l.arcs]:l.type==="MultiPolygon"?l.arcs:[];for(const c of u)for(const h of c)r.push(o(h))}return r}function RP(n){const e=[],t=new K,r=new K;for(const l of n)for(let u=0;u<l.length-1;u++){const[c,h]=l[u],[d,m]=l[u+1];if(Math.abs(d-c)>180)continue;const _=Math.max(Math.abs(d-c),Math.abs(m-h)),p=Math.max(1,Math.ceil(_/wP));t.copy(Od(h,c,z0));for(let v=1;v<=p;v++){const E=v/p;r.copy(Od(h+(m-h)*E,c+(d-c)*E,z0)),e.push(t.x,t.y,t.z,r.x,r.y,r.z),t.copy(r)}}const o=new cn;return o.setAttribute("position",new Wt(new Float32Array(e),3)),o}function bP(n){const e=new Ka({color:2830392,transparent:!0,opacity:.5,depthWrite:!1}),t=new $c(new cn,e);t.visible=!1,t.renderOrder=0,n.add(t);const r={"110m":null,"50m":null},o={};let l=!1,u=null;const c=d=>{!r[d]||u===d||(t.geometry=r[d],u=d)},h=(d,m)=>{r[d]||o[d]||(o[d]=!0,fetch(`/openflights/geo/countries-${d}.json`).then(_=>_.ok?_.json():Promise.reject(new Error(_.status))).then(_=>{const p=AP(_);r[d]=RP(CP(_,p)),o[d]=!1,l&&(d!=="110m"||!r["50m"])&&(c(d),m?.())}).catch(()=>{o[d]=!1}))};return{object:t,setTheme(d,m){l=!!d.borders,t.visible=l,l&&(e.color.set(d.borders.color),e.opacity=d.borders.opacity,r["110m"]?c(r["50m"]?"50m":"110m"):h("110m",m))},updateDetail(d,m){l&&(d<=TP?r["50m"]?c("50m"):h("50m",m):r["110m"]&&c("110m"))},dispose(){e.dispose();for(const d of Object.keys(r))r[d]?.dispose();n.remove(t)}}}const ai={orange:"#e69f00",sky:"#56b4e9",green:"#009e73",blue:"#0072b2",vermillion:"#d55e00",purple:"#cc79a7"},_n=n=>new Ge(n),B0={dark:{fog:724242,fogDensity:.055,node:{hub:_n("#e69f00"),mid:_n("#56b4e9"),low:_n("#f3f4f6")},nodeSelected:_n(ai.orange),nodeConnected:_n(ai.purple),route:{intl:_n(ai.sky),domestic:_n(ai.green),selected:_n(ai.orange)},routeBlending:Gu,routeOpacity:{globe:.29,topology:.2},routeContextOpacity:{globe:.08,topology:.07},routeFocusOpacity:.95,globe:{color:1055270,emissive:462874,specular:2704476,shininess:22},grid:{color:3493992,opacity:.13},atmosphere:{color:new Ge("#389eeb"),strength:.26},stars:!0,terrain:!1,borders:null,lights:{hemiSky:10145778,hemiGround:659488,hemi:1.15,sun:1.4}},light:{fog:15659508,fogDensity:.03,node:{hub:_n(ai.vermillion),mid:_n(ai.blue),low:_n("#1c1f26")},nodeSelected:_n(ai.vermillion),nodeConnected:_n(ai.purple),route:{intl:_n(ai.blue),domestic:_n(ai.green),selected:_n(ai.vermillion)},routeBlending:Wr,routeOpacity:{globe:.26,topology:.22},routeContextOpacity:{globe:.09,topology:.08},routeFocusOpacity:.9,globe:{color:14673644,emissive:0,specular:2241348,shininess:4},grid:{color:4937059,opacity:.12},atmosphere:{color:new Ge("#5c8cb8"),strength:.16},stars:!1,terrain:{ocean:new Ge("#a9d3ee"),oceanDeep:new Ge("#7fbde4"),shore:new Ge("#cfe8f7"),land:[{at:0,color:new Ge("#5fae8d")},{at:.18,color:new Ge("#9ac68a")},{at:.38,color:new Ge("#f0e442")},{at:.58,color:new Ge("#e69f00")},{at:.78,color:new Ge("#d55e00")},{at:1,color:new Ge("#f4f1ec")}],relief:.55},borders:{color:2830392,opacity:.5,coastOpacity:.75},lights:{hemiSky:16777215,hemiGround:13227230,hemi:1.35,sun:.85}}},H0=n=>B0[n]||B0.dark;function PP({data:n,positions:e,options:t,sidebarOpen:r,selected:o,onHover:l,onSelect:u,onClear:c,focusRequest:h,topologyVersion:d}){const m=Et.useRef(),_=Et.useRef(),p=Et.useRef(o);return p.current=o,Et.useEffect(()=>{const v=m.current;if(!v||!n)return;let E=!1,M=0,x=performance.now(),y=[],C="globe",T=H0(t.theme);const A=new ix;A.fog=new Yc(T.fog,T.fogDensity);const z=new qn(42,1,.01,100);z.position.set(0,.3,3.55);const D=new nx({antialias:!0,alpha:!0,powerPreference:"high-performance"});D.setPixelRatio(Math.min(devicePixelRatio,1.75)),D.setSize(v.clientWidth,v.clientHeight,!1),D.outputColorSpace=li,D.domElement.tabIndex=0,D.domElement.setAttribute("role","img"),D.domElement.setAttribute("aria-label",`Interactive 3D flight network with ${sr.format(n.nodes.length)} airports and ${sr.format(n.links.length)} connections`),v.appendChild(D.domElement);const N=new eP(z,D.domElement);N.enableDamping=!0,N.dampingFactor=.065,N.enablePan=!1,N.minDistance=1.55,N.maxDistance=8,N.autoRotateSpeed=.32;const W=new hx(10145778,659488,1.15);A.add(W);const L=new dx(16777215,1.4);L.position.set(3,2,4),A.add(L);const R=()=>v.clientHeight||800,U=gP(A),V=bP(A),q=_P(A,n,e,D,z,R),X=vP(A,n,e),J=EP({renderer:D,scene:A,camera:z,data:n,sprites:q,world:U,routes:X,selectedRef:p,onHover:l,onSelect:u,onClear:c}),ee=(j=C)=>{N.target.set(0,0,0),z.position.set(0,.3,j==="globe"?3.55:4.2),N.update()},re=j=>{const ue=e.read(C,j.index,new K);if(C==="globe"){const _e=ue.clone().normalize().multiplyScalar(2.35),ye=z.position.clone(),Ce=N.target.clone(),De=performance.now(),Ne=n0?1:650,ft=k=>{const _t=Math.min(1,(k-De)/Ne),ht=1-Math.pow(1-_t,3);z.position.lerpVectors(ye,_e,ht),N.target.lerpVectors(Ce,ue.clone().multiplyScalar(.18),ht),N.update(),_t<1&&requestAnimationFrame(ft)};requestAnimationFrame(ft)}else N.target.copy(ue),z.position.set(ue.x,ue.y,ue.z+2.4),N.update()},B=()=>{A.fog.color.set(T.fog),A.fog.density=T.fogDensity,W.color.set(T.lights.hemiSky),W.groundColor.set(T.lights.hemiGround),W.intensity=T.lights.hemi,L.intensity=T.lights.sun,U.applyTheme(T),V.setTheme(T),V.object.visible=!!T.borders&&C==="globe"},fe=(j,ue)=>{C=j.view,T=H0(j.theme),B(),N.autoRotate=j.autoRotate&&!n0&&j.view==="globe";const _e=ue||q.topHubNode;q.update(j,ue,_e,T),X.update(j,ue,T),U.globeGroup.visible=j.view==="globe",N.enablePan=j.view==="topology",N.minDistance=j.view==="globe"?1.55:1.2,N.maxDistance=j.view==="globe"?8:10},ie=()=>{const j=v.clientWidth,ue=v.clientHeight;!j||!ue||(z.aspect=j/ue,z.updateProjectionMatrix(),D.setSize(j,ue,!1),q.resize())};_.current={update:fe,focusNode:re,resetCamera:ee,resize:ie},fe(t,o);const O=new ResizeObserver(ie);O.observe(v),ie();const oe=j=>{if(E)return;const ue=j-x;x=j,y.push(ue),y.length>90&&y.shift(),y.length===90&&D.getPixelRatio()>1&&_A(y)>24&&(D.setPixelRatio(1),q.material.uniforms.uPixelRatio.value=1,ie(),y=[]),N.update(),V.updateDetail(z.position.length()),D.render(A,z),M=requestAnimationFrame(oe)};M=requestAnimationFrame(oe);const be=j=>{j.key.toLowerCase()==="r"&&document.activeElement?.tagName!=="INPUT"&&ee()};return window.addEventListener("keydown",be),()=>{E=!0,cancelAnimationFrame(M),O.disconnect(),window.removeEventListener("keydown",be),J.dispose(),V.dispose(),U.dispose(),N.dispose(),A.traverse(j=>{j.geometry?.dispose?.(),Array.isArray(j.material)?j.material.forEach(ue=>ue.dispose()):j.material?.dispose?.()}),D.dispose(),D.domElement.remove(),_.current=null}},[n]),Et.useEffect(()=>{_.current?.update(t,o)},[t,o,d]),Et.useEffect(()=>{h?.node&&_.current?.focusNode(h.node)},[h]),Et.useEffect(()=>{_.current?.resize()},[r]),ne.jsx("div",{ref:m,className:"canvas-host"})}function LP(){return ne.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:ne.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.37h2.5v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.5M6.88 8.56a1.68 1.68 0 1 1 0-3.36 1.68 1.68 0 0 1 0 3.36m-1.2 10.12h2.5V9.9h-2.5v8.78z"})})}function DP(){return ne.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:ne.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.891 1.529 2.341 1.544 2.914 1.182.092-.92.349-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.139 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"})})}function NP({data:n,options:e,setOptions:t,query:r,setQuery:o,selected:l,selectNode:u,clearSelection:c,open:h}){const d=Et.useMemo(()=>{const p=r.trim().toLowerCase();return p?n.nodes.filter(v=>`${v.id} ${v.name} ${v.city} ${v.country}`.toLowerCase().includes(p)).sort((v,E)=>E.degree-v.degree).slice(0,8):[]},[n,r]),[m,_]=Et.useState(!1);return ne.jsxs("aside",{id:"controls",className:`sidebar ${h?"open":""}`,"aria-label":"Network controls",children:[ne.jsxs("section",{className:"section",children:[ne.jsxs("div",{className:"section-title",children:[ne.jsx("span",{children:"Find an airport"}),ne.jsx("span",{className:"value-pill",children:sr.format(n.nodes.length)})]}),ne.jsxs("div",{className:"search-wrap",children:[ne.jsx("input",{id:"airport-search",className:"search",value:r,onInput:p=>o(p.target.value),placeholder:"Code, city, airport…","aria-label":"Search airports",autoComplete:"off"}),ne.jsx("span",{className:"search-icon",children:"⌕"})]}),d.length>0&&ne.jsx("div",{className:"results",role:"listbox",children:d.map(p=>ne.jsxs("button",{className:"result-btn",role:"option",onClick:()=>{u(p),o("")},children:[ne.jsx("span",{className:"result-name",children:p.name}),ne.jsx("span",{className:"result-code",children:p.iata||p.icao})]},p.id))}),l&&ne.jsxs("div",{className:"selected-chip",children:[ne.jsxs("div",{children:[ne.jsx("strong",{children:l.name}),ne.jsxs("span",{children:[l.city,", ",l.country]})]}),ne.jsx("button",{className:"clear-btn",onClick:c,"aria-label":"Clear selected airport",children:"×"})]})]}),ne.jsxs("section",{className:"section",children:[ne.jsx("div",{className:"section-title",children:ne.jsx("span",{children:"View"})}),ne.jsxs("div",{className:"segmented",role:"group","aria-label":"Visualization mode",children:[ne.jsx("button",{className:`seg-btn ${e.view==="globe"?"active":""}`,"aria-pressed":e.view==="globe",onClick:()=>t(p=>({...p,view:"globe"})),children:"3D globe"}),ne.jsx("button",{className:`seg-btn ${e.view==="topology"?"active":""}`,"aria-pressed":e.view==="topology",onClick:()=>t(p=>({...p,view:"topology"})),children:"Topology"})]}),ne.jsxs("div",{className:"segmented",role:"group","aria-label":"Colour theme",style:{marginTop:"8px"},children:[ne.jsx("button",{className:`seg-btn ${e.theme==="dark"?"active":""}`,"aria-pressed":e.theme==="dark",onClick:()=>t(p=>({...p,theme:"dark"})),children:"Dark"}),ne.jsx("button",{className:`seg-btn ${e.theme==="light"?"active":""}`,"aria-pressed":e.theme==="light",onClick:()=>t(p=>({...p,theme:"light"})),children:"Light map"})]}),ne.jsxs("label",{className:"check-row",children:[ne.jsx("input",{type:"checkbox",checked:e.autoRotate,onChange:p=>t(v=>({...v,autoRotate:p.target.checked}))}),"Auto-rotate globe"]})]}),ne.jsxs("section",{className:"section",children:[ne.jsxs("div",{className:"section-title",children:[ne.jsx("span",{children:"Route filters"}),ne.jsxs("span",{className:"value-pill",children:[e.density,"%"]})]}),ne.jsxs("div",{className:"control-row",children:[ne.jsxs("div",{className:"control-label",children:[ne.jsx("span",{children:"Route density"}),ne.jsxs("span",{children:[e.density,"%"]})]}),ne.jsx("input",{type:"range",min:"5",max:"100",step:"5",value:e.density,"aria-label":"Route density: adjust from 5% to 100%",onInput:p=>t(v=>({...v,density:+p.target.value}))})]}),ne.jsxs("div",{className:"control-row",children:[ne.jsxs("div",{className:"control-label",children:[ne.jsx("span",{children:"Minimum hub degree"}),ne.jsx("span",{children:e.minDegree})]}),ne.jsx("input",{type:"range",min:"0",max:"80",step:"1",value:e.minDegree,"aria-label":"Minimum hub degree: adjust from 0 to 80 connections",onInput:p=>t(v=>({...v,minDegree:+p.target.value}))})]}),ne.jsxs("div",{className:"control-row",children:[ne.jsx("label",{className:"control-label",htmlFor:"scope",children:ne.jsx("span",{children:"Route scope"})}),ne.jsxs("select",{id:"scope",value:e.scope,onChange:p=>t(v=>({...v,scope:p.target.value})),children:[ne.jsx("option",{value:"all",children:"All routes"}),ne.jsx("option",{value:"international",children:"International only"}),ne.jsx("option",{value:"domestic",children:"Domestic only"})]})]}),ne.jsxs("div",{className:"control-row",children:[ne.jsx("label",{className:"control-label",htmlFor:"country",children:ne.jsx("span",{children:"Country focus"})}),ne.jsxs("select",{id:"country",value:e.country,onChange:p=>t(v=>({...v,country:p.target.value})),children:[ne.jsx("option",{value:"",children:"All countries"}),n.countries.map(([p,v])=>ne.jsxs("option",{value:p,children:[p," (",v,")"]},p))]})]})]}),ne.jsxs("section",{className:"section",children:[ne.jsx("div",{className:"section-title",children:ne.jsx("span",{children:"Legend"})}),ne.jsxs("div",{className:"legend",children:[ne.jsxs("div",{className:"legend-row",children:[ne.jsx("span",{className:"swatch",style:{background:"#56b4e9"}}),ne.jsx("span",{children:"International connection"})]}),ne.jsxs("div",{className:"legend-row",children:[ne.jsx("span",{className:"swatch",style:{background:"#009e73"}}),ne.jsx("span",{children:"Domestic connection"})]}),ne.jsxs("div",{className:"legend-row",children:[ne.jsx("span",{className:"swatch",style:{background:"#e69f00"}}),ne.jsx("span",{children:"Selected-airport connection"})]})]})]}),ne.jsxs("section",{className:"section help",children:["Drag to orbit · scroll to zoom · click an airport to pin.",ne.jsx("br",{}),ne.jsx("br",{}),ne.jsx("kbd",{children:"/"})," Search   ",ne.jsx("kbd",{children:"Esc"})," Clear selection  ",ne.jsx("kbd",{children:"R"})," Reset camera"]}),ne.jsxs("footer",{className:"sidebar-footer",children:[ne.jsxs("div",{className:"social-links",children:[ne.jsx("a",{href:"https://www.linkedin.com/in/jeremiahjking/",className:"social-btn",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:ne.jsx(LP,{})}),ne.jsx("a",{href:"https://github.com/unguisdraconis",className:"social-btn",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:ne.jsx(DP,{})})]}),ne.jsx("p",{className:"data-source",children:"© 2026 Jeremiah King"}),ne.jsxs("p",{className:"data-source",children:["Data from","",ne.jsx("a",{href:"https://openflights.org",target:"_blank",rel:"noreferrer",children:"OpenFlights.org"})]}),ne.jsxs("button",{type:"button",className:"about-toggle","aria-expanded":m,"aria-controls":"about-data-panel",onClick:()=>_(p=>!p),children:[m?"▾":"▸"," About this data"]}),ne.jsxs("div",{id:"about-data-panel",className:"about-panel",hidden:!m,children:[ne.jsxs("p",{children:[ne.jsx("b",{children:"~7,700 airports"})," with IATA/ICAO codes, coordinates and timezones. About 3,300 carry routes, forming the ~19,000 connections drawn here."]}),ne.jsx("p",{children:"Useful as reference data, and as a real-world scale-free network for graph analysis and visualisation."}),ne.jsxs("p",{children:[ne.jsx("b",{children:"A historical snapshot, not a live feed."})," Airports are current to roughly 2017, with the last upstream correction in 2019. There are no schedules, frequencies or fares, so it cannot tell you what flies today."]})]})]})]})}function IP({node:n,pinned:e,point:t}){if(!n||!t)return null;const r=295,o=18,l=t.x+o,c=l+r<=innerWidth?l:Math.max(0,t.x-r-o),h=Math.max(12,Math.min(t.y-20,innerHeight-190));return ne.jsxs("div",{className:`tooltip ${e?"pinned":""}`,style:{left:c,top:h},role:e?"dialog":"status","aria-label":`${n.name} airport details`,children:[ne.jsxs("div",{className:"tooltip-top",children:[ne.jsx("div",{className:"airport-code",children:n.iata||n.icao||"—"}),ne.jsxs("div",{children:[ne.jsx("h2",{children:n.name}),ne.jsxs("div",{className:"tooltip-sub",children:[n.city,", ",n.country]})]})]}),ne.jsxs("div",{className:"tooltip-grid",children:[ne.jsxs("div",{className:"tooltip-metric",children:[ne.jsx("b",{children:sr.format(n.degree)}),ne.jsx("span",{children:"Connections"})]}),ne.jsxs("div",{className:"tooltip-metric",children:[ne.jsx("b",{children:sr.format(n.routeCount)}),ne.jsx("span",{children:"Route records"})]}),ne.jsxs("div",{className:"tooltip-metric",children:[ne.jsxs("b",{children:[n.lat.toFixed(1),"°, ",n.lon.toFixed(1),"°"]}),ne.jsx("span",{children:"Coordinates"})]})]}),ne.jsx("div",{className:"tooltip-note",children:e?"Pinned — click empty space or press Escape to close.":"Click to pin this airport."})]})}function UP({onLoaded:n,loading:e,error:t}){const r=Et.useRef(),o=async l=>{const u=[...l],c=u.find(d=>/airport/i.test(d.name)),h=u.find(d=>/route/i.test(d.name));if(!c||!h)return n(null,null,"Select both airports.dat and routes.dat.");n(await c.text(),await h.text())};return ne.jsx("div",{className:"load-screen",onDragOver:l=>l.preventDefault(),onDrop:l=>{l.preventDefault(),o(l.dataTransfer.files)},children:ne.jsxs("div",{className:"load-card",children:[ne.jsx("div",{className:"eyebrow",children:"OpenFlights data loader"}),ne.jsx("h2",{children:e?"Loading the global aviation network…":"Load the global aviation network"}),e?ne.jsx("p",{role:"status","aria-live":"polite",children:"Fetching and parsing the airport and route data. This usually takes a few seconds."}):ne.jsxs("p",{children:["The dashboard first looks for ",ne.jsx("b",{children:"airports.dat"})," and"," ",ne.jsx("b",{children:"routes.dat"})," beside this HTML file. If your browser blocks local file requests, select or drop both supplied files here."]}),ne.jsx("div",{className:"drop-zone",children:ne.jsxs("div",{children:[ne.jsx("button",{className:"primary-btn",onClick:()=>r.current.click(),disabled:e,children:e?"Building network…":"Choose both data files"}),ne.jsx("input",{ref:r,className:"sr-only",type:"file",multiple:!0,accept:".txt,.dat,text/plain",onChange:l=>o(l.target.files)}),ne.jsx("div",{className:"file-note",children:"You can also drag and drop both files onto this panel."})]})}),e&&ne.jsx("div",{className:"loading-bar","aria-hidden":"true"}),t&&ne.jsx("div",{className:"error",role:"alert",children:t})]})})}function Fu({value:n,label:e}){return ne.jsxs("div",{className:"stat",children:[ne.jsx("div",{className:"stat-value",children:n}),ne.jsx("div",{className:"stat-label",children:e})]})}const FP="(min-width: 681px)",V0=()=>typeof window>"u"||!window.matchMedia?!0:window.matchMedia(FP).matches,OP=()=>{if(typeof window>"u")return"dark";try{const n=localStorage.getItem("openflights-theme");if(n==="light"||n==="dark")return n}catch{}return window.matchMedia?.("(prefers-color-scheme: light)").matches?"light":"dark"};function kP(){const[n,e]=Et.useState(null),[t,r]=Et.useState(!0),[o,l]=Et.useState(""),[u,c]=Et.useState({view:"globe",density:55,minDegree:0,scope:"all",country:"",autoRotate:!1,theme:OP()}),[h,d]=Et.useState(""),[m,_]=Et.useState(null),[p,v]=Et.useState(null),[E,M]=Et.useState(null),[x,y]=Et.useState(null),[C,T]=Et.useState(V0),[A,z]=Et.useState(0),D=Et.useCallback(()=>z(X=>X+1),[]),N=Et.useMemo(()=>n?W2(n.nodes):null,[n]);Q2(n,N,D);const W=u.view==="topology"&&A===0,L=Et.useCallback((X,J,ee)=>{if(ee){l(ee),r(!1);return}r(!0),l(""),setTimeout(()=>{try{const re=V2(X,J);if(!re.nodes.length||!re.links.length)throw new Error("No usable airport-route pairs were found.");e(re)}catch(re){l(`Could not parse the files: ${re.message}`)}finally{r(!1)}},30)},[]);Et.useEffect(()=>{let X=!1;const J=new AbortController;return Z2({signal:J.signal}).then(({airports:ee,routes:re,source:B})=>{X||(B!=="local"&&console.info(`OpenFlights data loaded from ${B}.`),L(ee,re))}).catch(ee=>{X||J.signal.aborted||L(null,null,`Could not load the flight data (${ee.message}). Select or drop airports.dat and routes.dat below.`)}),()=>{X=!0,J.abort()}},[L]),Et.useEffect(()=>{const X=document.documentElement;X.dataset.themeSwitching="",X.dataset.theme=u.theme;let J=!1;const ee=()=>{J||(J=!0,delete X.dataset.themeSwitching)},re=requestAnimationFrame(()=>requestAnimationFrame(ee)),B=setTimeout(ee,300);try{localStorage.setItem("openflights-theme",u.theme)}catch{}return()=>{cancelAnimationFrame(re),clearTimeout(B),ee()}},[u.theme]),Et.useEffect(()=>{const X=window.matchMedia?.("(prefers-color-scheme: light)");if(!X)return;const J=ee=>{let re=null;try{re=localStorage.getItem("openflights-theme")}catch{re=null}re||c(B=>({...B,theme:ee.matches?"light":"dark"}))};return X.addEventListener("change",J),()=>X.removeEventListener("change",J)},[]),Et.useEffect(()=>{const X=J=>{J.key==="/"&&document.activeElement?.tagName!=="INPUT"&&(J.preventDefault(),document.getElementById("airport-search")?.focus()),J.key==="Escape"&&(_(null),v(null),M(null))};return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[]);const R=(X,J)=>{_(X),v(null),M(J||{x:innerWidth*.56,y:innerHeight*.3}),y({node:X,id:performance.now()}),V0()||T(!1)},U=()=>{_(null),v(null),M(null)},V=m||p,q=Et.useMemo(()=>n?n.links.filter(X=>(u.scope==="all"||u.scope==="international"===X.international)&&(!u.country||X.source.country===u.country||X.target.country===u.country)&&X.source.degree>=u.minDegree&&X.target.degree>=u.minDegree).length:0,[n,u.scope,u.country,u.minDegree]);return ne.jsxs("div",{className:`app ${C?"":"sidebar-collapsed"}`,children:[ne.jsxs("header",{className:"topbar",children:[ne.jsx("button",{className:"icon-btn menu-btn",onClick:()=>T(X=>!X),"aria-label":C?"Hide controls":"Show controls","aria-expanded":C,"aria-controls":"controls",title:C?"Hide controls":"Show controls",children:"☰"}),ne.jsxs("div",{className:"brand",children:[ne.jsx("div",{className:"eyebrow",children:"Global aviation intelligence"}),ne.jsx("h1",{children:"OpenFlights Network"})]}),n&&ne.jsxs("div",{className:"stats","aria-label":"Network summary",children:[ne.jsx(Fu,{value:sr.format(n.nodes.length),label:"Airports"}),ne.jsx(Fu,{value:sr.format(n.links.length),label:"Connections"}),ne.jsx(Fu,{value:sr.format(q),label:"Visible pool"}),ne.jsx(Fu,{value:sr.format(n.countries.length),label:"Countries"})]}),ne.jsx("div",{className:"top-actions",children:ne.jsx("button",{className:"icon-btn desktop-only",onClick:()=>c(X=>({...X,autoRotate:!X.autoRotate})),"aria-label":"Toggle automatic rotation","aria-pressed":u.autoRotate,children:"◌"})})]}),ne.jsxs("main",{className:"main",children:[n&&ne.jsx(NP,{data:n,options:u,setOptions:c,query:h,setQuery:d,selected:m,selectNode:R,clearSelection:U,open:C}),ne.jsxs("section",{className:"stage","aria-label":"3D flight visualization",children:[n&&ne.jsx(PP,{data:n,positions:N,sidebarOpen:C,options:u,selected:m,topologyVersion:A,focusRequest:x,onHover:(X,J)=>{v(X),M(J)},onSelect:R,onClear:U}),n&&ne.jsxs("div",{className:"stage-badge",children:[ne.jsx("span",{className:"dot"}),ne.jsxs("span",{children:[u.view==="globe"?"GEOGRAPHIC GLOBE":"FORCE-DIRECTED TOPOLOGY"," ","· ",W?"COMPUTING LAYOUT…":`${u.density}% ROUTES`]})]}),ne.jsx(IP,{node:V,pinned:!!m,point:E}),!n&&ne.jsx(UP,{onLoaded:L,loading:t,error:o}),ne.jsx("div",{className:"sr-only",role:"status","aria-live":"polite",children:W?"Computing force-directed layout.":""}),ne.jsx("div",{className:"sr-only","aria-live":"polite",children:V?`${V.name}, ${V.city}, ${V.country}. ${V.degree} direct connections.`:""})]})]})]})}US.createRoot(document.getElementById("root")).render(ne.jsx(bS.StrictMode,{children:ne.jsx(kP,{})}));
