(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function vs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ee={},At=[],Be=()=>{},ni=()=>!1,Pn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ys=e=>e.startsWith("onUpdate:"),_e=Object.assign,bs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},si=Object.prototype.hasOwnProperty,G=(e,t)=>si.call(e,t),H=Array.isArray,It=e=>Tn(e)==="[object Map]",Lo=e=>Tn(e)==="[object Set]",V=e=>typeof e=="function",ce=e=>typeof e=="string",mt=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Fo=e=>(oe(e)||V(e))&&V(e.then)&&V(e.catch),Ho=Object.prototype.toString,Tn=e=>Ho.call(e),oi=e=>Tn(e).slice(8,-1),Ko=e=>Tn(e)==="[object Object]",Ss=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wt=vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ri=/-(\w)/g,Ae=On(e=>e.replace(ri,(t,n)=>n?n.toUpperCase():"")),ii=/\B([A-Z])/g,_t=On(e=>e.replace(ii,"-$1").toLowerCase()),An=On(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vn=On(e=>e?`on${An(e)}`:""),ft=(e,t)=>!Object.is(e,t),gn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ss=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},os=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Vs;const In=()=>Vs||(Vs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mn(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=ce(s)?ui(s):Mn(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(ce(e)||oe(e))return e}const li=/;(?![^(]*\))/g,ci=/:([^]+)/,ai=/\/\*[^]*?\*\//g;function ui(e){const t={};return e.replace(ai,"").split(li).forEach(n=>{if(n){const s=n.split(ci);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function xs(e){let t="";if(ce(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const s=xs(e[n]);s&&(t+=s+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const fi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",di=vs(fi);function Vo(e){return!!e||e===""}const Bo=e=>!!(e&&e.__v_isRef===!0),te=e=>ce(e)?e:e==null?"":H(e)||oe(e)&&(e.toString===Ho||!V(e.toString))?Bo(e)?te(e.value):JSON.stringify(e,Uo,2):String(e),Uo=(e,t)=>Bo(t)?Uo(e,t.value):It(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[Bn(s,r)+" =>"]=o,n),{})}:Lo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Bn(n))}:mt(t)?Bn(t):oe(t)&&!H(t)&&!Ko(t)?String(t):t,Bn=(e,t="")=>{var n;return mt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class hi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){++this._on===1&&(this.prevScope=we,we=this)}off(){this._on>0&&--this._on===0&&(we=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function pi(){return we}let se;const Un=new WeakSet;class Wo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Un.has(this)&&(Un.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bs(this),Go(this);const t=se,n=Ie;se=this,Ie=!0;try{return this.fn()}finally{Yo(this),se=t,Ie=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Cs(t);this.deps=this.depsTail=void 0,Bs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Un.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rs(this)&&this.run()}get dirty(){return rs(this)}}let qo=0,qt,zt;function zo(e,t=!1){if(e.flags|=8,t){e.next=zt,zt=e;return}e.next=qt,qt=e}function ws(){qo++}function Es(){if(--qo>0)return;if(zt){let t=zt;for(zt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;qt;){let t=qt;for(qt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Go(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Yo(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Cs(s),gi(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function rs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Qo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===tn)||(e.globalVersion=tn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!rs(e))))return;e.flags|=2;const t=e.dep,n=se,s=Ie;se=e,Ie=!0;try{Go(e);const o=e.fn(e._value);(t.version===0||ft(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{se=n,Ie=s,Yo(e),e.flags&=-3}}function Cs(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Cs(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function gi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ie=!0;const Xo=[];function Xe(){Xo.push(Ie),Ie=!1}function Ze(){const e=Xo.pop();Ie=e===void 0?!0:e}function Bs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=se;se=void 0;try{t()}finally{se=n}}}let tn=0;class mi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!se||!Ie||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink=new mi(se,this),se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,Zo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=s)}return n}trigger(t){this.version++,tn++,this.notify(t)}notify(t){ws();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Es()}}}function Zo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Zo(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const is=new WeakMap,xt=Symbol(""),ls=Symbol(""),nn=Symbol("");function pe(e,t,n){if(Ie&&se){let s=is.get(e);s||is.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Rs),o.map=s,o.key=n),o.track()}}function Ye(e,t,n,s,o,r){const i=is.get(e);if(!i){tn++;return}const l=c=>{c&&c.trigger()};if(ws(),t==="clear")i.forEach(l);else{const c=H(e),h=c&&Ss(n);if(c&&n==="length"){const u=Number(s);i.forEach((d,g)=>{(g==="length"||g===nn||!mt(g)&&g>=u)&&l(d)})}else switch((n!==void 0||i.has(void 0))&&l(i.get(n)),h&&l(i.get(nn)),t){case"add":c?h&&l(i.get("length")):(l(i.get(xt)),It(e)&&l(i.get(ls)));break;case"delete":c||(l(i.get(xt)),It(e)&&l(i.get(ls)));break;case"set":It(e)&&l(i.get(xt));break}}Es()}function Rt(e){const t=z(e);return t===e?t:(pe(t,"iterate",nn),Oe(e)?t:t.map(de))}function $n(e){return pe(e=z(e),"iterate",nn),e}const _i={__proto__:null,[Symbol.iterator](){return Wn(this,Symbol.iterator,de)},concat(...e){return Rt(this).concat(...e.map(t=>H(t)?Rt(t):t))},entries(){return Wn(this,"entries",e=>(e[1]=de(e[1]),e))},every(e,t){return qe(this,"every",e,t,void 0,arguments)},filter(e,t){return qe(this,"filter",e,t,n=>n.map(de),arguments)},find(e,t){return qe(this,"find",e,t,de,arguments)},findIndex(e,t){return qe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return qe(this,"findLast",e,t,de,arguments)},findLastIndex(e,t){return qe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return qe(this,"forEach",e,t,void 0,arguments)},includes(...e){return qn(this,"includes",e)},indexOf(...e){return qn(this,"indexOf",e)},join(e){return Rt(this).join(e)},lastIndexOf(...e){return qn(this,"lastIndexOf",e)},map(e,t){return qe(this,"map",e,t,void 0,arguments)},pop(){return Kt(this,"pop")},push(...e){return Kt(this,"push",e)},reduce(e,...t){return Us(this,"reduce",e,t)},reduceRight(e,...t){return Us(this,"reduceRight",e,t)},shift(){return Kt(this,"shift")},some(e,t){return qe(this,"some",e,t,void 0,arguments)},splice(...e){return Kt(this,"splice",e)},toReversed(){return Rt(this).toReversed()},toSorted(e){return Rt(this).toSorted(e)},toSpliced(...e){return Rt(this).toSpliced(...e)},unshift(...e){return Kt(this,"unshift",e)},values(){return Wn(this,"values",de)}};function Wn(e,t,n){const s=$n(e),o=s[t]();return s!==e&&!Oe(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=n(r.value)),r}),o}const vi=Array.prototype;function qe(e,t,n,s,o,r){const i=$n(e),l=i!==e&&!Oe(e),c=i[t];if(c!==vi[t]){const d=c.apply(e,r);return l?de(d):d}let h=n;i!==e&&(l?h=function(d,g){return n.call(this,de(d),g,e)}:n.length>2&&(h=function(d,g){return n.call(this,d,g,e)}));const u=c.call(i,h,s);return l&&o?o(u):u}function Us(e,t,n,s){const o=$n(e);let r=n;return o!==e&&(Oe(e)?n.length>3&&(r=function(i,l,c){return n.call(this,i,l,c,e)}):r=function(i,l,c){return n.call(this,i,de(l),c,e)}),o[t](r,...s)}function qn(e,t,n){const s=z(e);pe(s,"iterate",nn);const o=s[t](...n);return(o===-1||o===!1)&&Os(n[0])?(n[0]=z(n[0]),s[t](...n)):o}function Kt(e,t,n=[]){Xe(),ws();const s=z(e)[t].apply(e,n);return Es(),Ze(),s}const yi=vs("__proto__,__v_isRef,__isVue"),er=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mt));function bi(e){mt(e)||(e=String(e));const t=z(this);return pe(t,"has",e),t.hasOwnProperty(e)}class tr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?Ai:rr:r?or:sr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=H(t);if(!o){let c;if(i&&(c=_i[n]))return c;if(n==="hasOwnProperty")return bi}const l=Reflect.get(t,n,me(t)?t:s);return(mt(n)?er.has(n):yi(n))||(o||pe(t,"get",n),r)?l:me(l)?i&&Ss(n)?l:l.value:oe(l)?o?lr(l):jn(l):l}}class nr extends tr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];if(!this._isShallow){const c=dt(r);if(!Oe(s)&&!dt(s)&&(r=z(r),s=z(s)),!H(t)&&me(r)&&!me(s))return c?!1:(r.value=s,!0)}const i=H(t)&&Ss(n)?Number(n)<t.length:G(t,n),l=Reflect.set(t,n,s,me(t)?t:o);return t===z(o)&&(i?ft(s,r)&&Ye(t,"set",n,s):Ye(t,"add",n,s)),l}deleteProperty(t,n){const s=G(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Ye(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!mt(n)||!er.has(n))&&pe(t,"has",n),s}ownKeys(t){return pe(t,"iterate",H(t)?"length":xt),Reflect.ownKeys(t)}}class Si extends tr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const xi=new nr,wi=new Si,Ei=new nr(!0);const cs=e=>e,dn=e=>Reflect.getPrototypeOf(e);function Ci(e,t,n){return function(...s){const o=this.__v_raw,r=z(o),i=It(r),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,h=o[e](...s),u=n?cs:t?bn:de;return!t&&pe(r,"iterate",c?ls:xt),{next(){const{value:d,done:g}=h.next();return g?{value:d,done:g}:{value:l?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function hn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ri(e,t){const n={get(o){const r=this.__v_raw,i=z(r),l=z(o);e||(ft(o,l)&&pe(i,"get",o),pe(i,"get",l));const{has:c}=dn(i),h=t?cs:e?bn:de;if(c.call(i,o))return h(r.get(o));if(c.call(i,l))return h(r.get(l));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&pe(z(o),"iterate",xt),Reflect.get(o,"size",o)},has(o){const r=this.__v_raw,i=z(r),l=z(o);return e||(ft(o,l)&&pe(i,"has",o),pe(i,"has",l)),o===l?r.has(o):r.has(o)||r.has(l)},forEach(o,r){const i=this,l=i.__v_raw,c=z(l),h=t?cs:e?bn:de;return!e&&pe(c,"iterate",xt),l.forEach((u,d)=>o.call(r,h(u),h(d),i))}};return _e(n,e?{add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear")}:{add(o){!t&&!Oe(o)&&!dt(o)&&(o=z(o));const r=z(this);return dn(r).has.call(r,o)||(r.add(o),Ye(r,"add",o,o)),this},set(o,r){!t&&!Oe(r)&&!dt(r)&&(r=z(r));const i=z(this),{has:l,get:c}=dn(i);let h=l.call(i,o);h||(o=z(o),h=l.call(i,o));const u=c.call(i,o);return i.set(o,r),h?ft(r,u)&&Ye(i,"set",o,r):Ye(i,"add",o,r),this},delete(o){const r=z(this),{has:i,get:l}=dn(r);let c=i.call(r,o);c||(o=z(o),c=i.call(r,o)),l&&l.call(r,o);const h=r.delete(o);return c&&Ye(r,"delete",o,void 0),h},clear(){const o=z(this),r=o.size!==0,i=o.clear();return r&&Ye(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Ci(o,e,t)}),n}function Ps(e,t){const n=Ri(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(G(n,o)&&o in s?n:s,o,r)}const Pi={get:Ps(!1,!1)},Ti={get:Ps(!1,!0)},Oi={get:Ps(!0,!1)};const sr=new WeakMap,or=new WeakMap,rr=new WeakMap,Ai=new WeakMap;function Ii(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mi(e){return e.__v_skip||!Object.isExtensible(e)?0:Ii(oi(e))}function jn(e){return dt(e)?e:Ts(e,!1,xi,Pi,sr)}function ir(e){return Ts(e,!1,Ei,Ti,or)}function lr(e){return Ts(e,!0,wi,Oi,rr)}function Ts(e,t,n,s,o){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Mi(e);if(r===0)return e;const i=o.get(e);if(i)return i;const l=new Proxy(e,r===2?s:n);return o.set(e,l),l}function Mt(e){return dt(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function dt(e){return!!(e&&e.__v_isReadonly)}function Oe(e){return!!(e&&e.__v_isShallow)}function Os(e){return e?!!e.__v_raw:!1}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function $i(e){return!G(e,"__v_skip")&&Object.isExtensible(e)&&ss(e,"__v_skip",!0),e}const de=e=>oe(e)?jn(e):e,bn=e=>oe(e)?lr(e):e;function me(e){return e?e.__v_isRef===!0:!1}function et(e){return cr(e,!1)}function ji(e){return cr(e,!0)}function cr(e,t){return me(e)?e:new Di(e,t)}class Di{constructor(t,n){this.dep=new Rs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:z(t),this._value=n?t:de(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Oe(t)||dt(t);t=s?t:z(t),ft(t,n)&&(this._rawValue=t,this._value=s?t:de(t),this.dep.trigger())}}function $t(e){return me(e)?e.value:e}const Ni={get:(e,t,n)=>t==="__v_raw"?e:$t(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return me(o)&&!me(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function ar(e){return Mt(e)?e:new Proxy(e,Ni)}class ki{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Rs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=tn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return zo(this,!0),!0}get value(){const t=this.dep.track();return Qo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ji(e,t,n=!1){let s,o;return V(e)?s=e:(s=e.get,o=e.set),new ki(s,o,n)}const pn={},Sn=new WeakMap;let St;function Li(e,t=!1,n=St){if(n){let s=Sn.get(n);s||Sn.set(n,s=[]),s.push(e)}}function Fi(e,t,n=ee){const{immediate:s,deep:o,once:r,scheduler:i,augmentJob:l,call:c}=n,h=$=>o?$:Oe($)||o===!1||o===0?Qe($,1):Qe($);let u,d,g,m,T=!1,C=!1;if(me(e)?(d=()=>e.value,T=Oe(e)):Mt(e)?(d=()=>h(e),T=!0):H(e)?(C=!0,T=e.some($=>Mt($)||Oe($)),d=()=>e.map($=>{if(me($))return $.value;if(Mt($))return h($);if(V($))return c?c($,2):$()})):V(e)?t?d=c?()=>c(e,2):e:d=()=>{if(g){Xe();try{g()}finally{Ze()}}const $=St;St=u;try{return c?c(e,3,[m]):e(m)}finally{St=$}}:d=Be,t&&o){const $=d,X=o===!0?1/0:o;d=()=>Qe($(),X)}const L=pi(),I=()=>{u.stop(),L&&L.active&&bs(L.effects,u)};if(r&&t){const $=t;t=(...X)=>{$(...X),I()}}let M=C?new Array(e.length).fill(pn):pn;const D=$=>{if(!(!(u.flags&1)||!u.dirty&&!$))if(t){const X=u.run();if(o||T||(C?X.some((fe,re)=>ft(fe,M[re])):ft(X,M))){g&&g();const fe=St;St=u;try{const re=[X,M===pn?void 0:C&&M[0]===pn?[]:M,m];M=X,c?c(t,3,re):t(...re)}finally{St=fe}}}else u.run()};return l&&l(D),u=new Wo(d),u.scheduler=i?()=>i(D,!1):D,m=$=>Li($,!1,u),g=u.onStop=()=>{const $=Sn.get(u);if($){if(c)c($,4);else for(const X of $)X();Sn.delete(u)}},t?s?D(!0):M=u.run():i?i(D.bind(null,!0),!0):u.run(),I.pause=u.pause.bind(u),I.resume=u.resume.bind(u),I.stop=I,I}function Qe(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,me(e))Qe(e.value,t,n);else if(H(e))for(let s=0;s<e.length;s++)Qe(e[s],t,n);else if(Lo(e)||It(e))e.forEach(s=>{Qe(s,t,n)});else if(Ko(e)){for(const s in e)Qe(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Qe(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function an(e,t,n,s){try{return s?e(...s):e()}catch(o){Dn(o,t,n)}}function Ue(e,t,n,s){if(V(e)){const o=an(e,t,n,s);return o&&Fo(o)&&o.catch(r=>{Dn(r,t,n)}),o}if(H(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Ue(e[r],t,n,s));return o}}function Dn(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ee;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,h)===!1)return}l=l.parent}if(r){Xe(),an(r,null,10,[e,c,h]),Ze();return}}Hi(e,n,o,s,i)}function Hi(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const ye=[];let Ke=-1;const jt=[];let ct=null,Pt=0;const ur=Promise.resolve();let xn=null;function fr(e){const t=xn||ur;return e?t.then(this?e.bind(this):e):t}function Ki(e){let t=Ke+1,n=ye.length;for(;t<n;){const s=t+n>>>1,o=ye[s],r=sn(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function As(e){if(!(e.flags&1)){const t=sn(e),n=ye[ye.length-1];!n||!(e.flags&2)&&t>=sn(n)?ye.push(e):ye.splice(Ki(t),0,e),e.flags|=1,dr()}}function dr(){xn||(xn=ur.then(pr))}function Vi(e){H(e)?jt.push(...e):ct&&e.id===-1?ct.splice(Pt+1,0,e):e.flags&1||(jt.push(e),e.flags|=1),dr()}function Ws(e,t,n=Ke+1){for(;n<ye.length;n++){const s=ye[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;ye.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function hr(e){if(jt.length){const t=[...new Set(jt)].sort((n,s)=>sn(n)-sn(s));if(jt.length=0,ct){ct.push(...t);return}for(ct=t,Pt=0;Pt<ct.length;Pt++){const n=ct[Pt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ct=null,Pt=0}}const sn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function pr(e){try{for(Ke=0;Ke<ye.length;Ke++){const t=ye[Ke];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),an(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ke<ye.length;Ke++){const t=ye[Ke];t&&(t.flags&=-2)}Ke=-1,ye.length=0,hr(),xn=null,(ye.length||jt.length)&&pr()}}let Re=null,gr=null;function wn(e){const t=Re;return Re=e,gr=e&&e.type.__scopeId||null,t}function le(e,t=Re,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&no(-1);const r=wn(t);let i;try{i=e(...o)}finally{wn(r),s._d&&no(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Bi(e,t){if(Re===null)return e;const n=Fn(Re),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,i,l,c=ee]=t[o];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&Qe(i),s.push({dir:r,instance:n,value:i,oldValue:void 0,arg:l,modifiers:c}))}return e}function yt(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];r&&(l.oldValue=r[i].value);let c=l.dir[s];c&&(Xe(),Ue(c,n,8,[e.el,l,e,t]),Ze())}}const Ui=Symbol("_vte"),Wi=e=>e.__isTeleport;function Is(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Is(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function mr(e,t){return V(e)?_e({name:e.name},t,{setup:e}):e}function _r(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Gt(e,t,n,s,o=!1){if(H(e)){e.forEach((T,C)=>Gt(T,t&&(H(t)?t[C]:t),n,s,o));return}if(Yt(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Gt(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?Fn(s.component):s.el,i=o?null:r,{i:l,r:c}=e,h=t&&t.r,u=l.refs===ee?l.refs={}:l.refs,d=l.setupState,g=z(d),m=d===ee?()=>!1:T=>G(g,T);if(h!=null&&h!==c&&(ce(h)?(u[h]=null,m(h)&&(d[h]=null)):me(h)&&(h.value=null)),V(c))an(c,l,12,[i,u]);else{const T=ce(c),C=me(c);if(T||C){const L=()=>{if(e.f){const I=T?m(c)?d[c]:u[c]:c.value;o?H(I)&&bs(I,r):H(I)?I.includes(r)||I.push(r):T?(u[c]=[r],m(c)&&(d[c]=u[c])):(c.value=[r],e.k&&(u[e.k]=c.value))}else T?(u[c]=i,m(c)&&(d[c]=i)):C&&(c.value=i,e.k&&(u[e.k]=i))};i?(L.id=-1,Ce(L,n)):L()}}}In().requestIdleCallback;In().cancelIdleCallback;const Yt=e=>!!e.type.__asyncLoader,vr=e=>e.type.__isKeepAlive;function qi(e,t){yr(e,"a",t)}function zi(e,t){yr(e,"da",t)}function yr(e,t,n=ge){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Nn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)vr(o.parent.vnode)&&Gi(s,t,n,o),o=o.parent}}function Gi(e,t,n,s){const o=Nn(t,e,s,!0);Ms(()=>{bs(s[t],o)},n)}function Nn(e,t,n=ge,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{Xe();const l=un(n),c=Ue(t,n,e,i);return l(),Ze(),c});return s?o.unshift(r):o.push(r),r}}const nt=e=>(t,n=ge)=>{(!rn||e==="sp")&&Nn(e,(...s)=>t(...s),n)},Yi=nt("bm"),kn=nt("m"),Qi=nt("bu"),Xi=nt("u"),Zi=nt("bum"),Ms=nt("um"),el=nt("sp"),tl=nt("rtg"),nl=nt("rtc");function sl(e,t=ge){Nn("ec",e,t)}const ol="components";function ht(e,t){return il(ol,e,!0,t)||e}const rl=Symbol.for("v-ndc");function il(e,t,n=!0,s=!1){const o=Re||ge;if(o){const r=o.type;{const l=Wl(r,!1);if(l&&(l===t||l===Ae(t)||l===An(Ae(t))))return r}const i=qs(o[e]||r[e],t)||qs(o.appContext[e],t);return!i&&s?r:i}}function qs(e,t){return e&&(e[t]||e[Ae(t)]||e[An(Ae(t))])}function pt(e,t,n,s){let o;const r=n,i=H(e);if(i||ce(e)){const l=i&&Mt(e);let c=!1,h=!1;l&&(c=!Oe(e),h=dt(e),e=$n(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=t(c?h?bn(de(e[u])):de(e[u]):e[u],u,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,r)}else if(oe(e))if(e[Symbol.iterator])o=Array.from(e,(l,c)=>t(l,c,void 0,r));else{const l=Object.keys(e);o=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const u=l[c];o[c]=t(e[u],u,c,r)}}else o=[];return o}const as=e=>e?Lr(e)?Fn(e):as(e.parent):null,Qt=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>as(e.parent),$root:e=>as(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Sr(e),$forceUpdate:e=>e.f||(e.f=()=>{As(e.update)}),$nextTick:e=>e.n||(e.n=fr.bind(e.proxy)),$watch:e=>Pl.bind(e)}),zn=(e,t)=>e!==ee&&!e.__isScriptSetup&&G(e,t),ll={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(zn(s,t))return i[t]=1,s[t];if(o!==ee&&G(o,t))return i[t]=2,o[t];if((h=e.propsOptions[0])&&G(h,t))return i[t]=3,r[t];if(n!==ee&&G(n,t))return i[t]=4,n[t];us&&(i[t]=0)}}const u=Qt[t];let d,g;if(u)return t==="$attrs"&&pe(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==ee&&G(n,t))return i[t]=4,n[t];if(g=c.config.globalProperties,G(g,t))return g[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return zn(o,t)?(o[t]=n,!0):s!==ee&&G(s,t)?(s[t]=n,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},i){let l;return!!n[i]||e!==ee&&G(e,i)||zn(t,i)||(l=r[0])&&G(l,i)||G(s,i)||G(Qt,i)||G(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:G(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function zs(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let us=!0;function cl(e){const t=Sr(e),n=e.proxy,s=e.ctx;us=!1,t.beforeCreate&&Gs(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:l,provide:c,inject:h,created:u,beforeMount:d,mounted:g,beforeUpdate:m,updated:T,activated:C,deactivated:L,beforeDestroy:I,beforeUnmount:M,destroyed:D,unmounted:$,render:X,renderTracked:fe,renderTriggered:re,errorCaptured:je,serverPrefetch:ot,expose:De,inheritAttrs:rt,components:vt,directives:Ne,filters:Ft}=t;if(h&&al(h,s,null),i)for(const Q in i){const W=i[Q];V(W)&&(s[Q]=W.bind(n))}if(o){const Q=o.call(n,n);oe(Q)&&(e.data=jn(Q))}if(us=!0,r)for(const Q in r){const W=r[Q],We=V(W)?W.bind(n,n):V(W.get)?W.get.bind(n,n):Be,it=!V(W)&&V(W.set)?W.set.bind(n):Be,ke=ue({get:We,set:it});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>ke.value,set:be=>ke.value=be})}if(l)for(const Q in l)br(l[Q],s,n,Q);if(c){const Q=V(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(W=>{mn(W,Q[W])})}u&&Gs(u,e,"c");function ae(Q,W){H(W)?W.forEach(We=>Q(We.bind(n))):W&&Q(W.bind(n))}if(ae(Yi,d),ae(kn,g),ae(Qi,m),ae(Xi,T),ae(qi,C),ae(zi,L),ae(sl,je),ae(nl,fe),ae(tl,re),ae(Zi,M),ae(Ms,$),ae(el,ot),H(De))if(De.length){const Q=e.exposed||(e.exposed={});De.forEach(W=>{Object.defineProperty(Q,W,{get:()=>n[W],set:We=>n[W]=We})})}else e.exposed||(e.exposed={});X&&e.render===Be&&(e.render=X),rt!=null&&(e.inheritAttrs=rt),vt&&(e.components=vt),Ne&&(e.directives=Ne),ot&&_r(e)}function al(e,t,n=Be){H(e)&&(e=fs(e));for(const s in e){const o=e[s];let r;oe(o)?"default"in o?r=Me(o.from||s,o.default,!0):r=Me(o.from||s):r=Me(o),me(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Gs(e,t,n){Ue(H(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function br(e,t,n,s){let o=s.includes(".")?$r(n,s):()=>n[s];if(ce(e)){const r=t[e];V(r)&&_n(o,r)}else if(V(e))_n(o,e.bind(n));else if(oe(e))if(H(e))e.forEach(r=>br(r,t,n,s));else{const r=V(e.handler)?e.handler.bind(n):t[e.handler];V(r)&&_n(o,r,e)}}function Sr(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,l=r.get(t);let c;return l?c=l:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(h=>En(c,h,i,!0)),En(c,t,i)),oe(t)&&r.set(t,c),c}function En(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&En(e,r,n,!0),o&&o.forEach(i=>En(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=ul[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const ul={data:Ys,props:Qs,emits:Qs,methods:Ut,computed:Ut,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:Ut,directives:Ut,watch:dl,provide:Ys,inject:fl};function Ys(e,t){return t?e?function(){return _e(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function fl(e,t){return Ut(fs(e),fs(t))}function fs(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?_e(Object.create(null),e,t):t}function Qs(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:_e(Object.create(null),zs(e),zs(t??{})):t}function dl(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const s in t)n[s]=ve(e[s],t[s]);return n}function xr(){return{app:null,config:{isNativeTag:ni,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hl=0;function pl(e,t){return function(s,o=null){V(s)||(s=_e({},s)),o!=null&&!oe(o)&&(o=null);const r=xr(),i=new WeakSet,l=[];let c=!1;const h=r.app={_uid:hl++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:zl,get config(){return r.config},set config(u){},use(u,...d){return i.has(u)||(u&&V(u.install)?(i.add(u),u.install(h,...d)):V(u)&&(i.add(u),u(h,...d))),h},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),h},component(u,d){return d?(r.components[u]=d,h):r.components[u]},directive(u,d){return d?(r.directives[u]=d,h):r.directives[u]},mount(u,d,g){if(!c){const m=h._ceVNode||U(s,o);return m.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),e(m,u,g),c=!0,h._container=u,u.__vue_app__=h,Fn(m.component)}},onUnmount(u){l.push(u)},unmount(){c&&(Ue(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(u,d){return r.provides[u]=d,h},runWithContext(u){const d=Dt;Dt=h;try{return u()}finally{Dt=d}}};return h}}let Dt=null;function mn(e,t){if(ge){let n=ge.provides;const s=ge.parent&&ge.parent.provides;s===n&&(n=ge.provides=Object.create(s)),n[e]=t}}function Me(e,t,n=!1){const s=ge||Re;if(s||Dt){let o=Dt?Dt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&V(t)?t.call(s&&s.proxy):t}}const wr={},Er=()=>Object.create(wr),Cr=e=>Object.getPrototypeOf(e)===wr;function gl(e,t,n,s=!1){const o={},r=Er();e.propsDefaults=Object.create(null),Rr(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:ir(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function ml(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,l=z(o),[c]=e.propsOptions;let h=!1;if((s||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(Jn(e.emitsOptions,g))continue;const m=t[g];if(c)if(G(r,g))m!==r[g]&&(r[g]=m,h=!0);else{const T=Ae(g);o[T]=ds(c,l,T,m,e,!1)}else m!==r[g]&&(r[g]=m,h=!0)}}}else{Rr(e,t,o,r)&&(h=!0);let u;for(const d in l)(!t||!G(t,d)&&((u=_t(d))===d||!G(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(o[d]=ds(c,l,d,void 0,e,!0)):delete o[d]);if(r!==l)for(const d in r)(!t||!G(t,d))&&(delete r[d],h=!0)}h&&Ye(e.attrs,"set","")}function Rr(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if(Wt(c))continue;const h=t[c];let u;o&&G(o,u=Ae(c))?!r||!r.includes(u)?n[u]=h:(l||(l={}))[u]=h:Jn(e.emitsOptions,c)||(!(c in s)||h!==s[c])&&(s[c]=h,i=!0)}if(r){const c=z(n),h=l||ee;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ds(o,c,d,h[d],e,!G(h,d))}}return i}function ds(e,t,n,s,o,r){const i=e[n];if(i!=null){const l=G(i,"default");if(l&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&V(c)){const{propsDefaults:h}=o;if(n in h)s=h[n];else{const u=un(o);s=h[n]=c.call(null,t),u()}}else s=c;o.ce&&o.ce._setProp(n,s)}i[0]&&(r&&!l?s=!1:i[1]&&(s===""||s===_t(n))&&(s=!0))}return s}const _l=new WeakMap;function Pr(e,t,n=!1){const s=n?_l:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},l=[];let c=!1;if(!V(e)){const u=d=>{c=!0;const[g,m]=Pr(d,t,!0);_e(i,g),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!c)return oe(e)&&s.set(e,At),At;if(H(r))for(let u=0;u<r.length;u++){const d=Ae(r[u]);Xs(d)&&(i[d]=ee)}else if(r)for(const u in r){const d=Ae(u);if(Xs(d)){const g=r[u],m=i[d]=H(g)||V(g)?{type:g}:_e({},g),T=m.type;let C=!1,L=!0;if(H(T))for(let I=0;I<T.length;++I){const M=T[I],D=V(M)&&M.name;if(D==="Boolean"){C=!0;break}else D==="String"&&(L=!1)}else C=V(T)&&T.name==="Boolean";m[0]=C,m[1]=L,(C||G(m,"default"))&&l.push(d)}}const h=[i,l];return oe(e)&&s.set(e,h),h}function Xs(e){return e[0]!=="$"&&!Wt(e)}const $s=e=>e[0]==="_"||e==="$stable",js=e=>H(e)?e.map(Ve):[Ve(e)],vl=(e,t,n)=>{if(t._n)return t;const s=le((...o)=>js(t(...o)),n);return s._c=!1,s},Tr=(e,t,n)=>{const s=e._ctx;for(const o in e){if($s(o))continue;const r=e[o];if(V(r))t[o]=vl(o,r,s);else if(r!=null){const i=js(r);t[o]=()=>i}}},Or=(e,t)=>{const n=js(t);e.slots.default=()=>n},Ar=(e,t,n)=>{for(const s in t)(n||!$s(s))&&(e[s]=t[s])},yl=(e,t,n)=>{const s=e.slots=Er();if(e.vnode.shapeFlag&32){const o=t.__;o&&ss(s,"__",o,!0);const r=t._;r?(Ar(s,t,n),n&&ss(s,"_",r,!0)):Tr(t,s)}else t&&Or(e,t)},bl=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=ee;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:Ar(o,t,n):(r=!t.$stable,Tr(t,o)),i=t}else t&&(Or(e,t),i={default:1});if(r)for(const l in o)!$s(l)&&i[l]==null&&delete o[l]},Ce=jl;function Sl(e){return xl(e)}function xl(e,t){const n=In();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:l,createComment:c,setText:h,setElementText:u,parentNode:d,nextSibling:g,setScopeId:m=Be,insertStaticContent:T}=e,C=(a,f,p,_=null,b=null,y=null,E=void 0,w=null,x=!!f.dynamicChildren)=>{if(a===f)return;a&&!Vt(a,f)&&(_=v(a),be(a,b,y,!0),a=null),f.patchFlag===-2&&(x=!1,f.dynamicChildren=null);const{type:S,ref:k,shapeFlag:P}=f;switch(S){case Ln:L(a,f,p,_);break;case gt:I(a,f,p,_);break;case Yn:a==null&&M(f,p,_,E);break;case he:vt(a,f,p,_,b,y,E,w,x);break;default:P&1?X(a,f,p,_,b,y,E,w,x):P&6?Ne(a,f,p,_,b,y,E,w,x):(P&64||P&128)&&S.process(a,f,p,_,b,y,E,w,x,j)}k!=null&&b?Gt(k,a&&a.ref,y,f||a,!f):k==null&&a&&a.ref!=null&&Gt(a.ref,null,y,a,!0)},L=(a,f,p,_)=>{if(a==null)s(f.el=l(f.children),p,_);else{const b=f.el=a.el;f.children!==a.children&&h(b,f.children)}},I=(a,f,p,_)=>{a==null?s(f.el=c(f.children||""),p,_):f.el=a.el},M=(a,f,p,_)=>{[a.el,a.anchor]=T(a.children,f,p,_,a.el,a.anchor)},D=({el:a,anchor:f},p,_)=>{let b;for(;a&&a!==f;)b=g(a),s(a,p,_),a=b;s(f,p,_)},$=({el:a,anchor:f})=>{let p;for(;a&&a!==f;)p=g(a),o(a),a=p;o(f)},X=(a,f,p,_,b,y,E,w,x)=>{f.type==="svg"?E="svg":f.type==="math"&&(E="mathml"),a==null?fe(f,p,_,b,y,E,w,x):ot(a,f,b,y,E,w,x)},fe=(a,f,p,_,b,y,E,w)=>{let x,S;const{props:k,shapeFlag:P,transition:N,dirs:K}=a;if(x=a.el=i(a.type,y,k&&k.is,k),P&8?u(x,a.children):P&16&&je(a.children,x,null,_,b,Gn(a,y),E,w),K&&yt(a,null,_,"created"),re(x,a,a.scopeId,E,_),k){for(const ne in k)ne!=="value"&&!Wt(ne)&&r(x,ne,null,k[ne],y,_);"value"in k&&r(x,"value",null,k.value,y),(S=k.onVnodeBeforeMount)&&He(S,_,a)}K&&yt(a,null,_,"beforeMount");const B=wl(b,N);B&&N.beforeEnter(x),s(x,f,p),((S=k&&k.onVnodeMounted)||B||K)&&Ce(()=>{S&&He(S,_,a),B&&N.enter(x),K&&yt(a,null,_,"mounted")},b)},re=(a,f,p,_,b)=>{if(p&&m(a,p),_)for(let y=0;y<_.length;y++)m(a,_[y]);if(b){let y=b.subTree;if(f===y||Dr(y.type)&&(y.ssContent===f||y.ssFallback===f)){const E=b.vnode;re(a,E,E.scopeId,E.slotScopeIds,b.parent)}}},je=(a,f,p,_,b,y,E,w,x=0)=>{for(let S=x;S<a.length;S++){const k=a[S]=w?at(a[S]):Ve(a[S]);C(null,k,f,p,_,b,y,E,w)}},ot=(a,f,p,_,b,y,E)=>{const w=f.el=a.el;let{patchFlag:x,dynamicChildren:S,dirs:k}=f;x|=a.patchFlag&16;const P=a.props||ee,N=f.props||ee;let K;if(p&&bt(p,!1),(K=N.onVnodeBeforeUpdate)&&He(K,p,f,a),k&&yt(f,a,p,"beforeUpdate"),p&&bt(p,!0),(P.innerHTML&&N.innerHTML==null||P.textContent&&N.textContent==null)&&u(w,""),S?De(a.dynamicChildren,S,w,p,_,Gn(f,b),y):E||W(a,f,w,null,p,_,Gn(f,b),y,!1),x>0){if(x&16)rt(w,P,N,p,b);else if(x&2&&P.class!==N.class&&r(w,"class",null,N.class,b),x&4&&r(w,"style",P.style,N.style,b),x&8){const B=f.dynamicProps;for(let ne=0;ne<B.length;ne++){const Y=B[ne],Se=P[Y],xe=N[Y];(xe!==Se||Y==="value")&&r(w,Y,Se,xe,b,p)}}x&1&&a.children!==f.children&&u(w,f.children)}else!E&&S==null&&rt(w,P,N,p,b);((K=N.onVnodeUpdated)||k)&&Ce(()=>{K&&He(K,p,f,a),k&&yt(f,a,p,"updated")},_)},De=(a,f,p,_,b,y,E)=>{for(let w=0;w<f.length;w++){const x=a[w],S=f[w],k=x.el&&(x.type===he||!Vt(x,S)||x.shapeFlag&198)?d(x.el):p;C(x,S,k,null,_,b,y,E,!0)}},rt=(a,f,p,_,b)=>{if(f!==p){if(f!==ee)for(const y in f)!Wt(y)&&!(y in p)&&r(a,y,f[y],null,b,_);for(const y in p){if(Wt(y))continue;const E=p[y],w=f[y];E!==w&&y!=="value"&&r(a,y,w,E,b,_)}"value"in p&&r(a,"value",f.value,p.value,b)}},vt=(a,f,p,_,b,y,E,w,x)=>{const S=f.el=a?a.el:l(""),k=f.anchor=a?a.anchor:l("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:K}=f;K&&(w=w?w.concat(K):K),a==null?(s(S,p,_),s(k,p,_),je(f.children||[],p,k,b,y,E,w,x)):P>0&&P&64&&N&&a.dynamicChildren?(De(a.dynamicChildren,N,p,b,y,E,w),(f.key!=null||b&&f===b.subTree)&&Ir(a,f,!0)):W(a,f,p,k,b,y,E,w,x)},Ne=(a,f,p,_,b,y,E,w,x)=>{f.slotScopeIds=w,a==null?f.shapeFlag&512?b.ctx.activate(f,p,_,E,x):Ft(f,p,_,b,y,E,x):wt(a,f,x)},Ft=(a,f,p,_,b,y,E)=>{const w=a.component=Hl(a,_,b);if(vr(a)&&(w.ctx.renderer=j),Kl(w,!1,E),w.asyncDep){if(b&&b.registerDep(w,ae,E),!a.el){const x=w.subTree=U(gt);I(null,x,f,p)}}else ae(w,a,f,p,b,y,E)},wt=(a,f,p)=>{const _=f.component=a.component;if(Ml(a,f,p))if(_.asyncDep&&!_.asyncResolved){Q(_,f,p);return}else _.next=f,_.update();else f.el=a.el,_.vnode=f},ae=(a,f,p,_,b,y,E)=>{const w=()=>{if(a.isMounted){let{next:P,bu:N,u:K,parent:B,vnode:ne}=a;{const Le=Mr(a);if(Le){P&&(P.el=ne.el,Q(a,P,E)),Le.asyncDep.then(()=>{a.isUnmounted||w()});return}}let Y=P,Se;bt(a,!1),P?(P.el=ne.el,Q(a,P,E)):P=ne,N&&gn(N),(Se=P.props&&P.props.onVnodeBeforeUpdate)&&He(Se,B,P,ne),bt(a,!0);const xe=eo(a),Je=a.subTree;a.subTree=xe,C(Je,xe,d(Je.el),v(Je),a,b,y),P.el=xe.el,Y===null&&$l(a,xe.el),K&&Ce(K,b),(Se=P.props&&P.props.onVnodeUpdated)&&Ce(()=>He(Se,B,P,ne),b)}else{let P;const{el:N,props:K}=f,{bm:B,m:ne,parent:Y,root:Se,type:xe}=a,Je=Yt(f);bt(a,!1),B&&gn(B),!Je&&(P=K&&K.onVnodeBeforeMount)&&He(P,Y,f),bt(a,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(xe);const Le=a.subTree=eo(a);C(null,Le,p,_,a,b,y),f.el=Le.el}if(ne&&Ce(ne,b),!Je&&(P=K&&K.onVnodeMounted)){const Le=f;Ce(()=>He(P,Y,Le),b)}(f.shapeFlag&256||Y&&Yt(Y.vnode)&&Y.vnode.shapeFlag&256)&&a.a&&Ce(a.a,b),a.isMounted=!0,f=p=_=null}};a.scope.on();const x=a.effect=new Wo(w);a.scope.off();const S=a.update=x.run.bind(x),k=a.job=x.runIfDirty.bind(x);k.i=a,k.id=a.uid,x.scheduler=()=>As(k),bt(a,!0),S()},Q=(a,f,p)=>{f.component=a;const _=a.vnode.props;a.vnode=f,a.next=null,ml(a,f.props,_,p),bl(a,f.children,p),Xe(),Ws(a),Ze()},W=(a,f,p,_,b,y,E,w,x=!1)=>{const S=a&&a.children,k=a?a.shapeFlag:0,P=f.children,{patchFlag:N,shapeFlag:K}=f;if(N>0){if(N&128){it(S,P,p,_,b,y,E,w,x);return}else if(N&256){We(S,P,p,_,b,y,E,w,x);return}}K&8?(k&16&&Te(S,b,y),P!==S&&u(p,P)):k&16?K&16?it(S,P,p,_,b,y,E,w,x):Te(S,b,y,!0):(k&8&&u(p,""),K&16&&je(P,p,_,b,y,E,w,x))},We=(a,f,p,_,b,y,E,w,x)=>{a=a||At,f=f||At;const S=a.length,k=f.length,P=Math.min(S,k);let N;for(N=0;N<P;N++){const K=f[N]=x?at(f[N]):Ve(f[N]);C(a[N],K,p,null,b,y,E,w,x)}S>k?Te(a,b,y,!0,!1,P):je(f,p,_,b,y,E,w,x,P)},it=(a,f,p,_,b,y,E,w,x)=>{let S=0;const k=f.length;let P=a.length-1,N=k-1;for(;S<=P&&S<=N;){const K=a[S],B=f[S]=x?at(f[S]):Ve(f[S]);if(Vt(K,B))C(K,B,p,null,b,y,E,w,x);else break;S++}for(;S<=P&&S<=N;){const K=a[P],B=f[N]=x?at(f[N]):Ve(f[N]);if(Vt(K,B))C(K,B,p,null,b,y,E,w,x);else break;P--,N--}if(S>P){if(S<=N){const K=N+1,B=K<k?f[K].el:_;for(;S<=N;)C(null,f[S]=x?at(f[S]):Ve(f[S]),p,B,b,y,E,w,x),S++}}else if(S>N)for(;S<=P;)be(a[S],b,y,!0),S++;else{const K=S,B=S,ne=new Map;for(S=B;S<=N;S++){const Ee=f[S]=x?at(f[S]):Ve(f[S]);Ee.key!=null&&ne.set(Ee.key,S)}let Y,Se=0;const xe=N-B+1;let Je=!1,Le=0;const Ht=new Array(xe);for(S=0;S<xe;S++)Ht[S]=0;for(S=K;S<=P;S++){const Ee=a[S];if(Se>=xe){be(Ee,b,y,!0);continue}let Fe;if(Ee.key!=null)Fe=ne.get(Ee.key);else for(Y=B;Y<=N;Y++)if(Ht[Y-B]===0&&Vt(Ee,f[Y])){Fe=Y;break}Fe===void 0?be(Ee,b,y,!0):(Ht[Fe-B]=S+1,Fe>=Le?Le=Fe:Je=!0,C(Ee,f[Fe],p,null,b,y,E,w,x),Se++)}const Hs=Je?El(Ht):At;for(Y=Hs.length-1,S=xe-1;S>=0;S--){const Ee=B+S,Fe=f[Ee],Ks=Ee+1<k?f[Ee+1].el:_;Ht[S]===0?C(null,Fe,p,Ks,b,y,E,w,x):Je&&(Y<0||S!==Hs[Y]?ke(Fe,p,Ks,2):Y--)}}},ke=(a,f,p,_,b=null)=>{const{el:y,type:E,transition:w,children:x,shapeFlag:S}=a;if(S&6){ke(a.component.subTree,f,p,_);return}if(S&128){a.suspense.move(f,p,_);return}if(S&64){E.move(a,f,p,j);return}if(E===he){s(y,f,p);for(let P=0;P<x.length;P++)ke(x[P],f,p,_);s(a.anchor,f,p);return}if(E===Yn){D(a,f,p);return}if(_!==2&&S&1&&w)if(_===0)w.beforeEnter(y),s(y,f,p),Ce(()=>w.enter(y),b);else{const{leave:P,delayLeave:N,afterLeave:K}=w,B=()=>{a.ctx.isUnmounted?o(y):s(y,f,p)},ne=()=>{P(y,()=>{B(),K&&K()})};N?N(y,B,ne):ne()}else s(y,f,p)},be=(a,f,p,_=!1,b=!1)=>{const{type:y,props:E,ref:w,children:x,dynamicChildren:S,shapeFlag:k,patchFlag:P,dirs:N,cacheIndex:K}=a;if(P===-2&&(b=!1),w!=null&&(Xe(),Gt(w,null,p,a,!0),Ze()),K!=null&&(f.renderCache[K]=void 0),k&256){f.ctx.deactivate(a);return}const B=k&1&&N,ne=!Yt(a);let Y;if(ne&&(Y=E&&E.onVnodeBeforeUnmount)&&He(Y,f,a),k&6)fn(a.component,p,_);else{if(k&128){a.suspense.unmount(p,_);return}B&&yt(a,null,f,"beforeUnmount"),k&64?a.type.remove(a,f,p,j,_):S&&!S.hasOnce&&(y!==he||P>0&&P&64)?Te(S,f,p,!1,!0):(y===he&&P&384||!b&&k&16)&&Te(x,f,p),_&&Et(a)}(ne&&(Y=E&&E.onVnodeUnmounted)||B)&&Ce(()=>{Y&&He(Y,f,a),B&&yt(a,null,f,"unmounted")},p)},Et=a=>{const{type:f,el:p,anchor:_,transition:b}=a;if(f===he){Ct(p,_);return}if(f===Yn){$(a);return}const y=()=>{o(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(a.shapeFlag&1&&b&&!b.persisted){const{leave:E,delayLeave:w}=b,x=()=>E(p,y);w?w(a.el,y,x):x()}else y()},Ct=(a,f)=>{let p;for(;a!==f;)p=g(a),o(a),a=p;o(f)},fn=(a,f,p)=>{const{bum:_,scope:b,job:y,subTree:E,um:w,m:x,a:S,parent:k,slots:{__:P}}=a;Zs(x),Zs(S),_&&gn(_),k&&H(P)&&P.forEach(N=>{k.renderCache[N]=void 0}),b.stop(),y&&(y.flags|=8,be(E,a,f,p)),w&&Ce(w,f),Ce(()=>{a.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Te=(a,f,p,_=!1,b=!1,y=0)=>{for(let E=y;E<a.length;E++)be(a[E],f,p,_,b)},v=a=>{if(a.shapeFlag&6)return v(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const f=g(a.anchor||a.el),p=f&&f[Ui];return p?g(p):f};let A=!1;const R=(a,f,p)=>{a==null?f._vnode&&be(f._vnode,null,null,!0):C(f._vnode||null,a,f,null,null,null,p),f._vnode=a,A||(A=!0,Ws(),hr(),A=!1)},j={p:C,um:be,m:ke,r:Et,mt:Ft,mc:je,pc:W,pbc:De,n:v,o:e};return{render:R,hydrate:void 0,createApp:pl(R)}}function Gn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function bt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function wl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ir(e,t,n=!1){const s=e.children,o=t.children;if(H(s)&&H(o))for(let r=0;r<s.length;r++){const i=s[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=at(o[r]),l.el=i.el),!n&&l.patchFlag!==-2&&Ir(i,l)),l.type===Ln&&(l.el=i.el),l.type===gt&&!l.el&&(l.el=i.el)}}function El(e){const t=e.slice(),n=[0];let s,o,r,i,l;const c=e.length;for(s=0;s<c;s++){const h=e[s];if(h!==0){if(o=n[n.length-1],e[o]<h){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)l=r+i>>1,e[n[l]]<h?r=l+1:i=l;h<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Mr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Mr(t)}function Zs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Cl=Symbol.for("v-scx"),Rl=()=>Me(Cl);function Ds(e,t){return Ns(e,null,t)}function _n(e,t,n){return Ns(e,t,n)}function Ns(e,t,n=ee){const{immediate:s,deep:o,flush:r,once:i}=n,l=_e({},n),c=t&&s||!t&&r!=="post";let h;if(rn){if(r==="sync"){const m=Rl();h=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Be,m.resume=Be,m.pause=Be,m}}const u=ge;l.call=(m,T,C)=>Ue(m,u,T,C);let d=!1;r==="post"?l.scheduler=m=>{Ce(m,u&&u.suspense)}:r!=="sync"&&(d=!0,l.scheduler=(m,T)=>{T?m():As(m)}),l.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const g=Fi(e,t,l);return rn&&(h?h.push(g):c&&g()),g}function Pl(e,t,n){const s=this.proxy,o=ce(e)?e.includes(".")?$r(s,e):()=>s[e]:e.bind(s,s);let r;V(t)?r=t:(r=t.handler,n=t);const i=un(this),l=Ns(o,r.bind(s),n);return i(),l}function $r(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const Tl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ae(t)}Modifiers`]||e[`${_t(t)}Modifiers`];function Ol(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ee;let o=n;const r=t.startsWith("update:"),i=r&&Tl(s,t.slice(7));i&&(i.trim&&(o=n.map(u=>ce(u)?u.trim():u)),i.number&&(o=n.map(os)));let l,c=s[l=Vn(t)]||s[l=Vn(Ae(t))];!c&&r&&(c=s[l=Vn(_t(t))]),c&&Ue(c,e,6,o);const h=s[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ue(h,e,6,o)}}function jr(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},l=!1;if(!V(e)){const c=h=>{const u=jr(h,t,!0);u&&(l=!0,_e(i,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(oe(e)&&s.set(e,null),null):(H(r)?r.forEach(c=>i[c]=null):_e(i,r),oe(e)&&s.set(e,i),i)}function Jn(e,t){return!e||!Pn(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,_t(t))||G(e,t))}function eo(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:l,emit:c,render:h,renderCache:u,props:d,data:g,setupState:m,ctx:T,inheritAttrs:C}=e,L=wn(e);let I,M;try{if(n.shapeFlag&4){const $=o||s,X=$;I=Ve(h.call(X,$,u,d,m,g,T)),M=l}else{const $=t;I=Ve($.length>1?$(d,{attrs:l,slots:i,emit:c}):$(d,null)),M=t.props?l:Al(l)}}catch($){Xt.length=0,Dn($,e,1),I=U(gt)}let D=I;if(M&&C!==!1){const $=Object.keys(M),{shapeFlag:X}=D;$.length&&X&7&&(r&&$.some(ys)&&(M=Il(M,r)),D=Nt(D,M,!1,!0))}return n.dirs&&(D=Nt(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&Is(D,n.transition),I=D,wn(L),I}const Al=e=>{let t;for(const n in e)(n==="class"||n==="style"||Pn(n))&&((t||(t={}))[n]=e[n]);return t},Il=(e,t)=>{const n={};for(const s in e)(!ys(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ml(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:l,patchFlag:c}=t,h=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?to(s,i,h):!!i;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(i[g]!==s[g]&&!Jn(h,g))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?to(s,i,h):!0:!!i;return!1}function to(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!Jn(n,r))return!0}return!1}function $l({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Dr=e=>e.__isSuspense;function jl(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Vi(e)}const he=Symbol.for("v-fgt"),Ln=Symbol.for("v-txt"),gt=Symbol.for("v-cmt"),Yn=Symbol.for("v-stc"),Xt=[];let Pe=null;function J(e=!1){Xt.push(Pe=e?null:[])}function Dl(){Xt.pop(),Pe=Xt[Xt.length-1]||null}let on=1;function no(e,t=!1){on+=e,e<0&&Pe&&t&&(Pe.hasOnce=!0)}function Nr(e){return e.dynamicChildren=on>0?Pe||At:null,Dl(),on>0&&Pe&&Pe.push(e),e}function F(e,t,n,s,o,r){return Nr(O(e,t,n,s,o,r,!0))}function kr(e,t,n,s,o){return Nr(U(e,t,n,s,o,!0))}function Cn(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const Jr=({key:e})=>e??null,vn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ce(e)||me(e)||V(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function O(e,t=null,n=null,s=0,o=null,r=e===he?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jr(t),ref:t&&vn(t),scopeId:gr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Re};return l?(ks(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=ce(n)?8:16),on>0&&!i&&Pe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Pe.push(c),c}const U=Nl;function Nl(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===rl)&&(e=gt),Cn(e)){const l=Nt(e,t,!0);return n&&ks(l,n),on>0&&!r&&Pe&&(l.shapeFlag&6?Pe[Pe.indexOf(e)]=l:Pe.push(l)),l.patchFlag=-2,l}if(ql(e)&&(e=e.__vccOpts),t){t=kl(t);let{class:l,style:c}=t;l&&!ce(l)&&(t.class=xs(l)),oe(c)&&(Os(c)&&!H(c)&&(c=_e({},c)),t.style=Mn(c))}const i=ce(e)?1:Dr(e)?128:Wi(e)?64:oe(e)?4:V(e)?2:0;return O(e,t,n,s,o,i,r,!0)}function kl(e){return e?Os(e)||Cr(e)?_e({},e):e:null}function Nt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:l,transition:c}=e,h=t?Jl(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Jr(h),ref:t&&t.ref?n&&r?H(r)?r.concat(vn(t)):[r,vn(t)]:vn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nt(e.ssContent),ssFallback:e.ssFallback&&Nt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Is(u,c.clone(u)),u}function ie(e=" ",t=0){return U(Ln,null,e,t)}function Lt(e="",t=!1){return t?(J(),kr(gt,null,e)):U(gt,null,e)}function Ve(e){return e==null||typeof e=="boolean"?U(gt):H(e)?U(he,null,e.slice()):Cn(e)?at(e):U(Ln,null,String(e))}function at(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nt(e)}function ks(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),ks(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Cr(t)?t._ctx=Re:o===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),s&64?(n=16,t=[ie(t)]):n=8);e.children=t,e.shapeFlag|=n}function Jl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=xs([t.class,s.class]));else if(o==="style")t.style=Mn([t.style,s.style]);else if(Pn(o)){const r=t[o],i=s[o];i&&r!==i&&!(H(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function He(e,t,n,s=null){Ue(e,t,7,[n,s])}const Ll=xr();let Fl=0;function Hl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Ll,r={uid:Fl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pr(s,o),emitsOptions:jr(s,o),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:s.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Ol.bind(null,r),e.ce&&e.ce(r),r}let ge=null,Rn,hs;{const e=In(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};Rn=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),hs=t("__VUE_SSR_SETTERS__",n=>rn=n)}const un=e=>{const t=ge;return Rn(e),e.scope.on(),()=>{e.scope.off(),Rn(t)}},so=()=>{ge&&ge.scope.off(),Rn(null)};function Lr(e){return e.vnode.shapeFlag&4}let rn=!1;function Kl(e,t=!1,n=!1){t&&hs(t);const{props:s,children:o}=e.vnode,r=Lr(e);gl(e,s,r,t),yl(e,o,n||t);const i=r?Vl(e,t):void 0;return t&&hs(!1),i}function Vl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ll);const{setup:s}=n;if(s){Xe();const o=e.setupContext=s.length>1?Ul(e):null,r=un(e),i=an(s,e,0,[e.props,o]),l=Fo(i);if(Ze(),r(),(l||e.sp)&&!Yt(e)&&_r(e),l){if(i.then(so,so),t)return i.then(c=>{oo(e,c)}).catch(c=>{Dn(c,e,0)});e.asyncDep=i}else oo(e,i)}else Fr(e)}function oo(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=ar(t)),Fr(e)}function Fr(e,t,n){const s=e.type;e.render||(e.render=s.render||Be);{const o=un(e);Xe();try{cl(e)}finally{Ze(),o()}}}const Bl={get(e,t){return pe(e,"get",""),e[t]}};function Ul(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Bl),slots:e.slots,emit:e.emit,expose:t}}function Fn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ar($i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qt)return Qt[n](e)},has(t,n){return n in t||n in Qt}})):e.proxy}function Wl(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function ql(e){return V(e)&&"__vccOpts"in e}const ue=(e,t)=>Ji(e,t,rn);function Hr(e,t,n){const s=arguments.length;return s===2?oe(t)&&!H(t)?Cn(t)?U(e,null,[t]):U(e,t):U(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Cn(n)&&(n=[n]),U(e,t,n))}const zl="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ps;const ro=typeof window<"u"&&window.trustedTypes;if(ro)try{ps=ro.createPolicy("vue",{createHTML:e=>e})}catch{}const Kr=ps?e=>ps.createHTML(e):e=>e,Gl="http://www.w3.org/2000/svg",Yl="http://www.w3.org/1998/Math/MathML",Ge=typeof document<"u"?document:null,io=Ge&&Ge.createElement("template"),Ql={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?Ge.createElementNS(Gl,e):t==="mathml"?Ge.createElementNS(Yl,e):n?Ge.createElement(e,{is:n}):Ge.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Ge.createTextNode(e),createComment:e=>Ge.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ge.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{io.innerHTML=Kr(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=io.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Xl=Symbol("_vtc");function Zl(e,t,n){const s=e[Xl];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const lo=Symbol("_vod"),ec=Symbol("_vsh"),tc=Symbol(""),nc=/(^|;)\s*display\s*:/;function sc(e,t,n){const s=e.style,o=ce(n);let r=!1;if(n&&!o){if(t)if(ce(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&yn(s,l,"")}else for(const i in t)n[i]==null&&yn(s,i,"");for(const i in n)i==="display"&&(r=!0),yn(s,i,n[i])}else if(o){if(t!==n){const i=s[tc];i&&(n+=";"+i),s.cssText=n,r=nc.test(n)}}else t&&e.removeAttribute("style");lo in e&&(e[lo]=r?s.display:"",e[ec]&&(s.display="none"))}const co=/\s*!important$/;function yn(e,t,n){if(H(n))n.forEach(s=>yn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=oc(e,t);co.test(n)?e.setProperty(_t(s),n.replace(co,""),"important"):e[s]=n}}const ao=["Webkit","Moz","ms"],Qn={};function oc(e,t){const n=Qn[t];if(n)return n;let s=Ae(t);if(s!=="filter"&&s in e)return Qn[t]=s;s=An(s);for(let o=0;o<ao.length;o++){const r=ao[o]+s;if(r in e)return Qn[t]=r}return t}const uo="http://www.w3.org/1999/xlink";function fo(e,t,n,s,o,r=di(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(uo,t.slice(6,t.length)):e.setAttributeNS(uo,t,n):n==null||r&&!Vo(n)?e.removeAttribute(t):e.setAttribute(t,r?"":mt(n)?String(n):n)}function ho(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Kr(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Vo(n):n==null&&l==="string"?(n="",i=!0):l==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(o||t)}function Tt(e,t,n,s){e.addEventListener(t,n,s)}function rc(e,t,n,s){e.removeEventListener(t,n,s)}const po=Symbol("_vei");function ic(e,t,n,s,o=null){const r=e[po]||(e[po]={}),i=r[t];if(s&&i)i.value=s;else{const[l,c]=lc(t);if(s){const h=r[t]=uc(s,o);Tt(e,l,h,c)}else i&&(rc(e,l,i,c),r[t]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function lc(e){let t;if(go.test(e)){t={};let s;for(;s=e.match(go);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_t(e.slice(2)),t]}let Xn=0;const cc=Promise.resolve(),ac=()=>Xn||(cc.then(()=>Xn=0),Xn=Date.now());function uc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ue(fc(s,n.value),t,5,[s])};return n.value=e,n.attached=ac(),n}function fc(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const mo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,dc=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?Zl(e,s,i):t==="style"?sc(e,n,s):Pn(t)?ys(t)||ic(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hc(e,t,s,i))?(ho(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&fo(e,t,s,i,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ce(s))?ho(e,Ae(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),fo(e,t,s,i))};function hc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&mo(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return mo(t)&&ce(n)?!1:t in e}const _o=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>gn(t,n):t};function pc(e){e.target.composing=!0}function vo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Zn=Symbol("_assign"),gc={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[Zn]=_o(o);const r=s||o.props&&o.props.type==="number";Tt(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),r&&(l=os(l)),e[Zn](l)}),n&&Tt(e,"change",()=>{e.value=e.value.trim()}),t||(Tt(e,"compositionstart",pc),Tt(e,"compositionend",vo),Tt(e,"change",vo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},i){if(e[Zn]=_o(i),e.composing)return;const l=(r||e.type==="number")&&!/^0\d/.test(e.value)?os(e.value):e.value,c=t??"";l!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===c)||(e.value=c))}},mc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_c=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=o=>{if(!("key"in o))return;const r=_t(o.key);if(t.some(i=>i===r||mc[i]===r))return e(o)})},vc=_e({patchProp:dc},Ql);let yo;function yc(){return yo||(yo=Sl(vc))}const bc=(...e)=>{const t=yc().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=xc(s);if(!o)return;const r=t._component;!V(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=n(o,!1,Sc(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Sc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function xc(e){return ce(e)?document.querySelector(e):e}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Ot=typeof document<"u";function Vr(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Vr(e.default)}const q=Object.assign;function es(e,t){const n={};for(const s in t){const o=t[s];n[s]=$e(o)?o.map(e):e(o)}return n}const Zt=()=>{},$e=Array.isArray,Br=/#/g,Ec=/&/g,Cc=/\//g,Rc=/=/g,Pc=/\?/g,Ur=/\+/g,Tc=/%5B/g,Oc=/%5D/g,Wr=/%5E/g,Ac=/%60/g,qr=/%7B/g,Ic=/%7C/g,zr=/%7D/g,Mc=/%20/g;function Js(e){return encodeURI(""+e).replace(Ic,"|").replace(Tc,"[").replace(Oc,"]")}function $c(e){return Js(e).replace(qr,"{").replace(zr,"}").replace(Wr,"^")}function gs(e){return Js(e).replace(Ur,"%2B").replace(Mc,"+").replace(Br,"%23").replace(Ec,"%26").replace(Ac,"`").replace(qr,"{").replace(zr,"}").replace(Wr,"^")}function jc(e){return gs(e).replace(Rc,"%3D")}function Dc(e){return Js(e).replace(Br,"%23").replace(Pc,"%3F")}function Nc(e){return e==null?"":Dc(e).replace(Cc,"%2F")}function ln(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const kc=/\/$/,Jc=e=>e.replace(kc,"");function ts(e,t,n="/"){let s,o={},r="",i="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,l>-1?l:t.length),o=e(r)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=Kc(s??t,n),{fullPath:s+(r&&"?")+r+i,path:s,query:o,hash:ln(i)}}function Lc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function bo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Fc(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&kt(t.matched[s],n.matched[o])&&Gr(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function kt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Gr(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Hc(e[n],t[n]))return!1;return!0}function Hc(e,t){return $e(e)?So(e,t):$e(t)?So(t,e):e===t}function So(e,t){return $e(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Kc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,l;for(i=0;i<s.length;i++)if(l=s[i],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var cn;(function(e){e.pop="pop",e.push="push"})(cn||(cn={}));var en;(function(e){e.back="back",e.forward="forward",e.unknown=""})(en||(en={}));function Vc(e){if(!e)if(Ot){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Jc(e)}const Bc=/^[^#]+#/;function Uc(e,t){return e.replace(Bc,"#")+t}function Wc(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Hn=()=>({left:window.scrollX,top:window.scrollY});function qc(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Wc(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function xo(e,t){return(history.state?history.state.position-t:-1)+e}const ms=new Map;function zc(e,t){ms.set(e,t)}function Gc(e){const t=ms.get(e);return ms.delete(e),t}let Yc=()=>location.protocol+"//"+location.host;function Yr(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let l=o.includes(e.slice(r))?e.slice(r).length:1,c=o.slice(l);return c[0]!=="/"&&(c="/"+c),bo(c,"")}return bo(n,e)+s+o}function Qc(e,t,n,s){let o=[],r=[],i=null;const l=({state:g})=>{const m=Yr(e,location),T=n.value,C=t.value;let L=0;if(g){if(n.value=m,t.value=g,i&&i===T){i=null;return}L=C?g.position-C.position:0}else s(m);o.forEach(I=>{I(n.value,T,{delta:L,type:cn.pop,direction:L?L>0?en.forward:en.back:en.unknown})})};function c(){i=n.value}function h(g){o.push(g);const m=()=>{const T=o.indexOf(g);T>-1&&o.splice(T,1)};return r.push(m),m}function u(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:Hn()}),"")}function d(){for(const g of r)g();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:h,destroy:d}}function wo(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?Hn():null}}function Xc(e){const{history:t,location:n}=window,s={value:Yr(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,h,u){const d=e.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Yc()+e+c;try{t[u?"replaceState":"pushState"](h,"",g),o.value=h}catch(m){console.error(m),n[u?"replace":"assign"](g)}}function i(c,h){const u=q({},t.state,wo(o.value.back,c,o.value.forward,!0),h,{position:o.value.position});r(c,u,!0),s.value=c}function l(c,h){const u=q({},o.value,t.state,{forward:c,scroll:Hn()});r(u.current,u,!0);const d=q({},wo(s.value,c,null),{position:u.position+1},h);r(c,d,!1),s.value=c}return{location:s,state:o,push:l,replace:i}}function Zc(e){e=Vc(e);const t=Xc(e),n=Qc(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=q({location:"",base:e,go:s,createHref:Uc.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function ea(e){return typeof e=="string"||e&&typeof e=="object"}function Qr(e){return typeof e=="string"||typeof e=="symbol"}const Xr=Symbol("");var Eo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Eo||(Eo={}));function Jt(e,t){return q(new Error,{type:e,[Xr]:!0},t)}function ze(e,t){return e instanceof Error&&Xr in e&&(t==null||!!(e.type&t))}const Co="[^/]+?",ta={sensitive:!1,strict:!1,start:!0,end:!0},na=/[.+*?^${}()[\]/\\]/g;function sa(e,t){const n=q({},ta,t),s=[];let o=n.start?"^":"";const r=[];for(const h of e){const u=h.length?[]:[90];n.strict&&!h.length&&(o+="/");for(let d=0;d<h.length;d++){const g=h[d];let m=40+(n.sensitive?.25:0);if(g.type===0)d||(o+="/"),o+=g.value.replace(na,"\\$&"),m+=40;else if(g.type===1){const{value:T,repeatable:C,optional:L,regexp:I}=g;r.push({name:T,repeatable:C,optional:L});const M=I||Co;if(M!==Co){m+=10;try{new RegExp(`(${M})`)}catch($){throw new Error(`Invalid custom RegExp for param "${T}" (${M}): `+$.message)}}let D=C?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(D=L&&h.length<2?`(?:/${D})`:"/"+D),L&&(D+="?"),o+=D,m+=20,L&&(m+=-8),C&&(m+=-20),M===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const h=s.length-1;s[h][s[h].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function l(h){const u=h.match(i),d={};if(!u)return null;for(let g=1;g<u.length;g++){const m=u[g]||"",T=r[g-1];d[T.name]=m&&T.repeatable?m.split("/"):m}return d}function c(h){let u="",d=!1;for(const g of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of g)if(m.type===0)u+=m.value;else if(m.type===1){const{value:T,repeatable:C,optional:L}=m,I=T in h?h[T]:"";if($e(I)&&!C)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const M=$e(I)?I.join("/"):I;if(!M)if(L)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${T}"`);u+=M}}return u||"/"}return{re:i,score:s,keys:r,parse:l,stringify:c}}function oa(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Zr(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=oa(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(Ro(s))return 1;if(Ro(o))return-1}return o.length-s.length}function Ro(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ra={type:0,value:""},ia=/[a-zA-Z0-9_]/;function la(e){if(!e)return[[]];if(e==="/")return[[ra]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${h}": ${m}`)}let n=0,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let l=0,c,h="",u="";function d(){h&&(n===0?r.push({type:0,value:h}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:h,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(h&&d(),i()):c===":"?(d(),n=1):g();break;case 4:g(),n=s;break;case 1:c==="("?n=2:ia.test(c)?g():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),d(),i(),o}function ca(e,t,n){const s=sa(la(e.path),n),o=q(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function aa(e,t){const n=[],s=new Map;t=Ao({strict:!1,end:!0,sensitive:!1},t);function o(d){return s.get(d)}function r(d,g,m){const T=!m,C=To(d);C.aliasOf=m&&m.record;const L=Ao(t,d),I=[C];if("alias"in d){const $=typeof d.alias=="string"?[d.alias]:d.alias;for(const X of $)I.push(To(q({},C,{components:m?m.record.components:C.components,path:X,aliasOf:m?m.record:C})))}let M,D;for(const $ of I){const{path:X}=$;if(g&&X[0]!=="/"){const fe=g.record.path,re=fe[fe.length-1]==="/"?"":"/";$.path=g.record.path+(X&&re+X)}if(M=ca($,g,L),m?m.alias.push(M):(D=D||M,D!==M&&D.alias.push(M),T&&d.name&&!Oo(M)&&i(d.name)),ei(M)&&c(M),C.children){const fe=C.children;for(let re=0;re<fe.length;re++)r(fe[re],M,m&&m.children[re])}m=m||M}return D?()=>{i(D)}:Zt}function i(d){if(Qr(d)){const g=s.get(d);g&&(s.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(i),g.alias.forEach(i))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return n}function c(d){const g=da(d,n);n.splice(g,0,d),d.record.name&&!Oo(d)&&s.set(d.record.name,d)}function h(d,g){let m,T={},C,L;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw Jt(1,{location:d});L=m.record.name,T=q(Po(g.params,m.keys.filter(D=>!D.optional).concat(m.parent?m.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),d.params&&Po(d.params,m.keys.map(D=>D.name))),C=m.stringify(T)}else if(d.path!=null)C=d.path,m=n.find(D=>D.re.test(C)),m&&(T=m.parse(C),L=m.record.name);else{if(m=g.name?s.get(g.name):n.find(D=>D.re.test(g.path)),!m)throw Jt(1,{location:d,currentLocation:g});L=m.record.name,T=q({},g.params,d.params),C=m.stringify(T)}const I=[];let M=m;for(;M;)I.unshift(M.record),M=M.parent;return{name:L,path:C,params:T,matched:I,meta:fa(I)}}e.forEach(d=>r(d));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:h,removeRoute:i,clearRoutes:u,getRoutes:l,getRecordMatcher:o}}function Po(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function To(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ua(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ua(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Oo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fa(e){return e.reduce((t,n)=>q(t,n.meta),{})}function Ao(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function da(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;Zr(e,t[r])<0?s=r:n=r+1}const o=ha(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function ha(e){let t=e;for(;t=t.parent;)if(ei(t)&&Zr(e,t)===0)return t}function ei({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function pa(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(Ur," "),i=r.indexOf("="),l=ln(i<0?r:r.slice(0,i)),c=i<0?null:ln(r.slice(i+1));if(l in t){let h=t[l];$e(h)||(h=t[l]=[h]),h.push(c)}else t[l]=c}return t}function Io(e){let t="";for(let n in e){const s=e[n];if(n=jc(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(s)?s.map(r=>r&&gs(r)):[s&&gs(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function ga(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=$e(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const ma=Symbol(""),Mo=Symbol(""),Kn=Symbol(""),Ls=Symbol(""),_s=Symbol("");function Bt(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ut(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(Jt(4,{from:n,to:t})):g instanceof Error?c(g):ea(g)?c(Jt(2,{from:t,to:g})):(i&&s.enterCallbacks[o]===i&&typeof g=="function"&&i.push(g),l())},u=r(()=>e.call(s&&s.instances[o],t,n,h));let d=Promise.resolve(u);e.length<3&&(d=d.then(h)),d.catch(g=>c(g))})}function ns(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const l in i.components){let c=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Vr(c)){const u=(c.__vccOpts||c)[t];u&&r.push(ut(u,n,s,i,l,o))}else{let h=c();r.push(()=>h.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const d=wc(u)?u.default:u;i.mods[l]=u,i.components[l]=d;const m=(d.__vccOpts||d)[t];return m&&ut(m,n,s,i,l,o)()}))}}return r}function $o(e){const t=Me(Kn),n=Me(Ls),s=ue(()=>{const c=$t(e.to);return t.resolve(c)}),o=ue(()=>{const{matched:c}=s.value,{length:h}=c,u=c[h-1],d=n.matched;if(!u||!d.length)return-1;const g=d.findIndex(kt.bind(null,u));if(g>-1)return g;const m=jo(c[h-2]);return h>1&&jo(u)===m&&d[d.length-1].path!==m?d.findIndex(kt.bind(null,c[h-2])):g}),r=ue(()=>o.value>-1&&Sa(n.params,s.value.params)),i=ue(()=>o.value>-1&&o.value===n.matched.length-1&&Gr(n.params,s.value.params));function l(c={}){if(ba(c)){const h=t[$t(e.replace)?"replace":"push"]($t(e.to)).catch(Zt);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:s,href:ue(()=>s.value.href),isActive:r,isExactActive:i,navigate:l}}function _a(e){return e.length===1?e[0]:e}const va=mr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:$o,setup(e,{slots:t}){const n=jn($o(e)),{options:s}=Me(Kn),o=ue(()=>({[Do(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Do(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&_a(t.default(n));return e.custom?r:Hr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),ya=va;function ba(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Sa(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!$e(o)||o.length!==s.length||s.some((r,i)=>r!==o[i]))return!1}return!0}function jo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Do=(e,t,n)=>e??t??n,xa=mr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Me(_s),o=ue(()=>e.route||s.value),r=Me(Mo,0),i=ue(()=>{let h=$t(r);const{matched:u}=o.value;let d;for(;(d=u[h])&&!d.components;)h++;return h}),l=ue(()=>o.value.matched[i.value]);mn(Mo,ue(()=>i.value+1)),mn(ma,l),mn(_s,o);const c=et();return _n(()=>[c.value,l.value,e.name],([h,u,d],[g,m,T])=>{u&&(u.instances[d]=h,m&&m!==u&&h&&h===g&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),h&&u&&(!m||!kt(u,m)||!g)&&(u.enterCallbacks[d]||[]).forEach(C=>C(h))},{flush:"post"}),()=>{const h=o.value,u=e.name,d=l.value,g=d&&d.components[u];if(!g)return No(n.default,{Component:g,route:h});const m=d.props[u],T=m?m===!0?h.params:typeof m=="function"?m(h):m:null,L=Hr(g,q({},T,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return No(n.default,{Component:L,route:h})||L}}});function No(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const wa=xa;function Ea(e){const t=aa(e.routes,e),n=e.parseQuery||pa,s=e.stringifyQuery||Io,o=e.history,r=Bt(),i=Bt(),l=Bt(),c=ji(lt);let h=lt;Ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=es.bind(null,v=>""+v),d=es.bind(null,Nc),g=es.bind(null,ln);function m(v,A){let R,j;return Qr(v)?(R=t.getRecordMatcher(v),j=A):j=v,t.addRoute(j,R)}function T(v){const A=t.getRecordMatcher(v);A&&t.removeRoute(A)}function C(){return t.getRoutes().map(v=>v.record)}function L(v){return!!t.getRecordMatcher(v)}function I(v,A){if(A=q({},A||c.value),typeof v=="string"){const p=ts(n,v,A.path),_=t.resolve({path:p.path},A),b=o.createHref(p.fullPath);return q(p,_,{params:g(_.params),hash:ln(p.hash),redirectedFrom:void 0,href:b})}let R;if(v.path!=null)R=q({},v,{path:ts(n,v.path,A.path).path});else{const p=q({},v.params);for(const _ in p)p[_]==null&&delete p[_];R=q({},v,{params:d(p)}),A.params=d(A.params)}const j=t.resolve(R,A),Z=v.hash||"";j.params=u(g(j.params));const a=Lc(s,q({},v,{hash:$c(Z),path:j.path})),f=o.createHref(a);return q({fullPath:a,hash:Z,query:s===Io?ga(v.query):v.query||{}},j,{redirectedFrom:void 0,href:f})}function M(v){return typeof v=="string"?ts(n,v,c.value.path):q({},v)}function D(v,A){if(h!==v)return Jt(8,{from:A,to:v})}function $(v){return re(v)}function X(v){return $(q(M(v),{replace:!0}))}function fe(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:R}=A;let j=typeof R=="function"?R(v):R;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=M(j):{path:j},j.params={}),q({query:v.query,hash:v.hash,params:j.path!=null?{}:v.params},j)}}function re(v,A){const R=h=I(v),j=c.value,Z=v.state,a=v.force,f=v.replace===!0,p=fe(R);if(p)return re(q(M(p),{state:typeof p=="object"?q({},Z,p.state):Z,force:a,replace:f}),A||R);const _=R;_.redirectedFrom=A;let b;return!a&&Fc(s,j,R)&&(b=Jt(16,{to:_,from:j}),ke(j,j,!0,!1)),(b?Promise.resolve(b):De(_,j)).catch(y=>ze(y)?ze(y,2)?y:it(y):W(y,_,j)).then(y=>{if(y){if(ze(y,2))return re(q({replace:f},M(y.to),{state:typeof y.to=="object"?q({},Z,y.to.state):Z,force:a}),A||_)}else y=vt(_,j,!0,f,Z);return rt(_,j,y),y})}function je(v,A){const R=D(v,A);return R?Promise.reject(R):Promise.resolve()}function ot(v){const A=Ct.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function De(v,A){let R;const[j,Z,a]=Ca(v,A);R=ns(j.reverse(),"beforeRouteLeave",v,A);for(const p of j)p.leaveGuards.forEach(_=>{R.push(ut(_,v,A))});const f=je.bind(null,v,A);return R.push(f),Te(R).then(()=>{R=[];for(const p of r.list())R.push(ut(p,v,A));return R.push(f),Te(R)}).then(()=>{R=ns(Z,"beforeRouteUpdate",v,A);for(const p of Z)p.updateGuards.forEach(_=>{R.push(ut(_,v,A))});return R.push(f),Te(R)}).then(()=>{R=[];for(const p of a)if(p.beforeEnter)if($e(p.beforeEnter))for(const _ of p.beforeEnter)R.push(ut(_,v,A));else R.push(ut(p.beforeEnter,v,A));return R.push(f),Te(R)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),R=ns(a,"beforeRouteEnter",v,A,ot),R.push(f),Te(R))).then(()=>{R=[];for(const p of i.list())R.push(ut(p,v,A));return R.push(f),Te(R)}).catch(p=>ze(p,8)?p:Promise.reject(p))}function rt(v,A,R){l.list().forEach(j=>ot(()=>j(v,A,R)))}function vt(v,A,R,j,Z){const a=D(v,A);if(a)return a;const f=A===lt,p=Ot?history.state:{};R&&(j||f?o.replace(v.fullPath,q({scroll:f&&p&&p.scroll},Z)):o.push(v.fullPath,Z)),c.value=v,ke(v,A,R,f),it()}let Ne;function Ft(){Ne||(Ne=o.listen((v,A,R)=>{if(!fn.listening)return;const j=I(v),Z=fe(j);if(Z){re(q(Z,{replace:!0,force:!0}),j).catch(Zt);return}h=j;const a=c.value;Ot&&zc(xo(a.fullPath,R.delta),Hn()),De(j,a).catch(f=>ze(f,12)?f:ze(f,2)?(re(q(M(f.to),{force:!0}),j).then(p=>{ze(p,20)&&!R.delta&&R.type===cn.pop&&o.go(-1,!1)}).catch(Zt),Promise.reject()):(R.delta&&o.go(-R.delta,!1),W(f,j,a))).then(f=>{f=f||vt(j,a,!1),f&&(R.delta&&!ze(f,8)?o.go(-R.delta,!1):R.type===cn.pop&&ze(f,20)&&o.go(-1,!1)),rt(j,a,f)}).catch(Zt)}))}let wt=Bt(),ae=Bt(),Q;function W(v,A,R){it(v);const j=ae.list();return j.length?j.forEach(Z=>Z(v,A,R)):console.error(v),Promise.reject(v)}function We(){return Q&&c.value!==lt?Promise.resolve():new Promise((v,A)=>{wt.add([v,A])})}function it(v){return Q||(Q=!v,Ft(),wt.list().forEach(([A,R])=>v?R(v):A()),wt.reset()),v}function ke(v,A,R,j){const{scrollBehavior:Z}=e;if(!Ot||!Z)return Promise.resolve();const a=!R&&Gc(xo(v.fullPath,0))||(j||!R)&&history.state&&history.state.scroll||null;return fr().then(()=>Z(v,A,a)).then(f=>f&&qc(f)).catch(f=>W(f,v,A))}const be=v=>o.go(v);let Et;const Ct=new Set,fn={currentRoute:c,listening:!0,addRoute:m,removeRoute:T,clearRoutes:t.clearRoutes,hasRoute:L,getRoutes:C,resolve:I,options:e,push:$,replace:X,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:r.add,beforeResolve:i.add,afterEach:l.add,onError:ae.add,isReady:We,install(v){const A=this;v.component("RouterLink",ya),v.component("RouterView",wa),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>$t(c)}),Ot&&!Et&&c.value===lt&&(Et=!0,$(o.location).catch(Z=>{}));const R={};for(const Z in lt)Object.defineProperty(R,Z,{get:()=>c.value[Z],enumerable:!0});v.provide(Kn,A),v.provide(Ls,ir(R)),v.provide(_s,c);const j=v.unmount;Ct.add(v),v.unmount=function(){Ct.delete(v),Ct.size<1&&(h=lt,Ne&&Ne(),Ne=null,c.value=lt,Et=!1,Q=!1),j()}}};function Te(v){return v.reduce((A,R)=>A.then(()=>ot(R)),Promise.resolve())}return fn}function Ca(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const l=t.matched[i];l&&(e.matched.find(h=>kt(h,l))?s.push(l):n.push(l));const c=e.matched[i];c&&(t.matched.find(h=>kt(h,c))||o.push(c))}return[n,s,o]}function ti(){return Me(Kn)}function Fs(e){return Me(Ls)}const st=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Ra={name:"NavBar",setup(){const e=ti(),t=et("");return{searchTerm:t,search:()=>{t.value.trim()&&(e.push(`/search?q=${encodeURIComponent(t.value)}`),t.value="")}}}},Pa={class:"navbar"},Ta={class:"container navbar-container"},Oa={class:"nav-links"},Aa={class:"nav-search"};function Ia(e,t,n,s,o,r){const i=ht("router-link");return J(),F("nav",Pa,[O("div",Ta,[U(i,{to:"/",class:"logo"},{default:le(()=>t[3]||(t[3]=[ie("相码")])),_:1,__:[3]}),O("div",Oa,[U(i,{to:"/",class:"nav-link"},{default:le(()=>t[4]||(t[4]=[O("span",{class:"icon"},"🏠",-1),ie("首页")])),_:1,__:[4]}),U(i,{to:"/tags",class:"nav-link"},{default:le(()=>t[5]||(t[5]=[O("span",{class:"icon"},"🏷️",-1),ie("标签")])),_:1,__:[5]}),U(i,{to:"/categories",class:"nav-link"},{default:le(()=>t[6]||(t[6]=[O("span",{class:"icon"},"📁",-1),ie("分类")])),_:1,__:[6]}),U(i,{to:"/timeline",class:"nav-link"},{default:le(()=>t[7]||(t[7]=[O("span",{class:"icon"},"📅",-1),ie("历程")])),_:1,__:[7]}),U(i,{to:"/about",class:"nav-link"},{default:le(()=>t[8]||(t[8]=[O("span",{class:"icon"},"ℹ️",-1),ie("知悉")])),_:1,__:[8]})]),O("div",Aa,[Bi(O("input",{type:"text",placeholder:"搜索...",class:"search-input",onKeyup:t[0]||(t[0]=_c((...l)=>s.search&&s.search(...l),["enter"])),"onUpdate:modelValue":t[1]||(t[1]=l=>s.searchTerm=l)},null,544),[[gc,s.searchTerm]]),O("button",{class:"search-btn",onClick:t[2]||(t[2]=(...l)=>s.search&&s.search(...l))},"搜索")])])])}const Ma=st(Ra,[["render",Ia],["__scopeId","data-v-86b47659"]]),$a={name:"App",components:{NavBar:Ma},data(){return{showWord:!1,word:"",clickCount:0,lastClickTime:0}},methods:{handleClick(e){const t=new Date().getTime();t-this.lastClickTime<300?(this.clickCount++,this.clickCount>=3&&(this.showWord=!0,this.word=this.getRandomWord(),this.clickCount=0,setTimeout(()=>{this.showWord=!1},2e3))):this.clickCount=1,this.lastClickTime=t},getRandomWord(){const e=["Hello","World","Click","Fun","Amazing","Wow","Cool","Nice","Great","Awesome"];return e[Math.floor(Math.random()*e.length)]}}},ja={key:0,class:"click-word"};function Da(e,t,n,s,o,r){const i=ht("NavBar"),l=ht("router-view");return J(),F("div",{id:"app",onClick:t[0]||(t[0]=(...c)=>r.handleClick&&r.handleClick(...c))},[U(i),U(l),o.showWord?(J(),F("div",ja,te(o.word),1)):Lt("",!0)])}const Na=st($a,[["render",Da]]),tt=[{id:6,title:"Java System 类详解",date:"2023-10-25",summary:"详细介绍Java标准库中的System类及其主要功能。",content:`<h2>概述</h2>
<p><code>System</code> 类是 Java 标准库中的一个核心类，位于 <code>java.lang</code> 包中。它提供了与系统相关的各种方法和属性，例如标准输入输出流、系统属性、环境变量、垃圾回收等功能。</p>

<h2>主要功能</h2>
<ol>
  <li><strong>标准输入输出流</strong>：
    <ul>
      <li><code>System.out</code>：标准输出流，通常用于打印信息到控制台。</li>
      <li><code>System.in</code>：标准输入流，用于从控制台读取输入。</li>
      <li><code>System.err</code>：标准错误输出流，用于输出错误信息。</li>
    </ul>
  </li>
  <li><strong>系统属性</strong>：
    <ul>
      <li><code>System.getProperty(String key)</code>：获取指定的系统属性值。</li>
      <li><code>System.setProperty(String key, String value)</code>：设置系统属性。</li>
    </ul>
  </li>
  <li><strong>环境变量</strong>：
    <ul>
      <li><code>System.getenv(String name)</code>：获取指定的环境变量值。</li>
      <li><code>System.getenv()</code>：获取所有环境变量的映射。</li>
    </ul>
  </li>
  <li><strong>垃圾回收</strong>：
    <ul>
      <li><code>System.gc()</code>：建议 JVM 进行垃圾回收，但不保证立即执行。</li>
    </ul>
  </li>
  <li><strong>系统时间</strong>：
    <ul>
      <li><code>System.currentTimeMillis()</code>：返回当前时间的毫秒数。</li>
      <li><code>System.nanoTime()</code>：返回当前时间的高精度纳秒数。</li>
    </ul>
  </li>
  <li><strong>程序退出</strong>：
    <ul>
      <li><code>System.exit(int status)</code>：终止当前运行的 Java 虚拟机，status 为退出状态码。</li>
    </ul>
  </li>
</ol>

<h2>代码示例</h2>
<pre><code>public class SystemExample {
  public static void main(String[] args) {
    // 获取当前时间
    long currentTime = System.currentTimeMillis();
    System.out.println("当前时间（毫秒）：" + currentTime);

    // 获取系统属性
    String javaVersion = System.getProperty("java.version");
    System.out.println("Java 版本：" + javaVersion);

    // 获取环境变量
    String path = System.getenv("PATH");
    System.out.println("PATH 环境变量：" + path);

    // 建议垃圾回收
    System.gc();

    // 程序退出
    // System.exit(0); // 正常退出
  }
}</code></pre>

<h2>注意事项</h2>
<ul>
  <li><code>System</code> 类是 final 的，不能被继承。</li>
  <li>它的构造方法是私有的，不能被实例化。</li>
  <li>使用 <code>System.exit()</code> 时要谨慎，因为它会立即终止程序，可能会导致资源未被正确释放。</li>
</ul>

<h2>源码位置</h2>
<p>在 JDK 源码中，<code>System</code> 类的定义位于 <code>java.base/java/lang/System.java</code> 文件中。如果您想深入了解其实现细节，可以查看该文件。</p>

<h2>Native 方法</h2>
<p><code>System</code> 类中包含了一些 <code>native</code> 方法，这些方法是用 C 或 C++ 等本地语言实现的，直接与底层操作系统交互。以下是一些重要的 <code>native</code> 方法：</p>
<ul>
  <li><code>currentTimeMillis()</code>：返回当前时间的毫秒数，是一个 <code>native</code> 方法，直接调用系统函数获取时间。</li>
  <li><code>nanoTime()</code>：返回当前时间的高精度纳秒数，也是一个 <code>native</code> 方法，用于性能测量。</li>
  <li><code>arraycopy(Object src, int srcPos, Object dest, int destPos, int length)</code>：用于高效地复制数组内容，是一个 <code>native</code> 方法，性能比 Java 循环复制要高。</li>
</ul>
<p>这些 <code>native</code> 方法使得 <code>System</code> 类能够直接访问底层系统资源，提供高效的操作，但也意味着它们的实现依赖于具体的操作系统和 JVM 实现。</p>`,category:"技术",tags:["Java","系统编程","核心技术"]},{id:7,title:"String 类说明",date:"2023-10-29",summary:"详细介绍Java标准库中的String类及其主要功能。",content:`<h2>概述</h2>
<p><code>String</code> 类是 Java 标准库中的一个核心类，位于 <code>java.lang</code> 包中。它用于表示字符串，即一组字符序列。<code>String</code> 类在 Java 中是最常用和基础的类之一，几乎所有的 Java 程序都会涉及到字符串操作。<code>String</code> 类具有不可变性（immutability），这意味着一旦创建了一个 <code>String</code> 对象，其内容就不能被修改。</p>

<h2>主要特性</h2>
<ol>
  <li><strong>不可变性</strong>：
    <ul>
      <li><code>String</code> 对象的内容在创建后不能被更改。任何对字符串的修改操作（如拼接、替换）都会创建一个新的 <code>String</code> 对象，而不是修改原来的对象。</li>
      <li>这种设计有助于提高字符串的安全性和线程安全性，同时也便于字符串池的使用。</li>
    </ul>
  </li>
  <li><strong>字符串池（String Pool）</strong>：
    <ul>
      <li>Java 维护一个字符串池，用于存储常用的字符串对象，以节省内存。当使用字面量创建字符串时（如 <code>String s = "hello";</code>），JVM 会检查字符串池中是否已存在相同内容的字符串，如果存在，则返回该对象的引用；如果不存在，则在池中创建新对象。</li>
      <li>使用 <code>new String("hello")</code> 创建字符串时，会在堆内存中创建一个新的对象，即使字符串池中已存在相同内容的字符串。</li>
      <li>可以通过 <code>intern()</code> 方法将字符串对象添加到字符串池中。</li>
    </ul>
  </li>
  <li><strong>实现接口</strong>：
    <ul>
      <li><code>String</code> 类实现了 <code>Serializable</code>、<code>Comparable&lt;String&gt;</code> 和 <code>CharSequence</code> 接口，支持序列化、比较和字符序列操作。</li>
    </ul>
  </li>
</ol>

<h2>构造方法</h2>
<p><code>String</code> 类提供了多种构造方法来创建字符串对象，以下是常用的几种：</p>
<ul>
  <li><code>String()</code>：创建一个空字符串。</li>
  <li><code>String(String original)</code>：通过另一个字符串创建新字符串。</li>
  <li><code>String(char[] value)</code>：通过字符数组创建字符串。</li>
  <li><code>String(byte[] bytes)</code>：通过字节数组创建字符串，使用平台默认字符集。</li>
  <li><code>String(byte[] bytes, String charsetName)</code>：通过字节数组和指定的字符集创建字符串。</li>
</ul>

<h2>常用方法</h2>
<p><code>String</code> 类提供了大量的方法用于字符串操作，以下是一些常用的方法：</p>
<ol>
  <li><strong>获取信息</strong>：
    <ul>
      <li><code>int length()</code>：返回字符串的长度。</li>
      <li><code>boolean isEmpty()</code>：检查字符串是否为空。</li>
      <li><code>char charAt(int index)</code>：获取指定索引处的字符。</li>
    </ul>
  </li>
  <li><strong>比较和搜索</strong>：
    <ul>
      <li><code>boolean equals(Object anObject)</code>：比较字符串内容是否相等。</li>
      <li><code>boolean equalsIgnoreCase(String anotherString)</code>：忽略大小写比较字符串内容。</li>
      <li><code>int compareTo(String anotherString)</code>：按字典顺序比较两个字符串。</li>
      <li><code>int indexOf(int ch)</code>：查找字符第一次出现的索引。</li>
      <li><code>int lastIndexOf(int ch)</code>：查找字符最后一次出现的索引。</li>
      <li><code>boolean contains(CharSequence s)</code>：检查字符串是否包含指定的子序列。</li>
      <li><code>boolean startsWith(String prefix)</code>：检查字符串是否以指定前缀开始。</li>
      <li><code>boolean endsWith(String suffix)</code>：检查字符串是否以指定后缀结束。</li>
    </ul>
  </li>
  <li><strong>修改和操作</strong>：
    <ul>
      <li><code>String substring(int beginIndex)</code>：从指定索引开始提取子字符串。</li>
      <li><code>String substring(int beginIndex, int endIndex)</code>：提取指定范围的子字符串。</li>
      <li><code>String replace(char oldChar, char newChar)</code>：替换字符串中出现的所有某个字符。</li>
      <li><code>String replaceAll(String regex, String replacement)</code>：使用正则表达式替换字符串中的匹配内容。</li>
      <li><code>String trim()</code>：去除字符串两端的空白字符。</li>
      <li><code>String toLowerCase()</code>：将字符串转换为小写。</li>
      <li><code>String toUpperCase()</code>：将字符串转换为大写。</li>
    </ul>
  </li>
  <li><strong>转换和分割</strong>：
    <ul>
      <li><code>char[] toCharArray()</code>：将字符串转换为字符数组。</li>
      <li><code>byte[] getBytes()</code>：将字符串转换为字节数组，使用平台默认字符集。</li>
      <li><code>String[] split(String regex)</code>：使用正则表达式分割字符串。</li>
    </ul>
  </li>
  <li><strong>其他</strong>：
    <ul>
      <li><code>String intern()</code>：将字符串添加到字符串池中，并返回池中的引用。</li>
      <li><code>String valueOf(Object obj)</code>：将对象转换为字符串表示。</li>
    </ul>
  </li>
</ol>

<h2>代码示例</h2>
<pre><code>public class StringExample {
    public static void main(String[] args) {
        // 创建字符串
        String str1 = "Hello, World!"; // 使用字符串字面量，进入字符串池
        String str2 = new String("Hello, World!"); // 在堆内存中创建新对象
        String str3 = str2.intern(); // 将 str2 添加到字符串池并返回池中引用

        // 检查字符串池效果
        System.out.println("str1 == str2: " + (str1 == str2)); // false，因为 str2 是堆中的新对象
        System.out.println("str1 == str3: " + (str1 == str3)); // true，因为 str3 是池中的引用
        System.out.println("str1.equals(str2): " + str1.equals(str2)); // true，内容相等

        // 常用方法示例
        System.out.println("长度: " + str1.length()); // 获取长度
        System.out.println("是否为空: " + str1.isEmpty()); // 检查是否为空
        System.out.println("索引 7 处的字符: " + str1.charAt(7)); // 获取指定字符
        System.out.println("子字符串: " + str1.substring(7)); // 提取子字符串
        System.out.println("是否包含 'World': " + str1.contains("World")); // 检查是否包含
        System.out.println("替换 'World' 为 'Java': " + str1.replace("World", "Java")); // 替换
        System.out.println("分割字符串: " + String.join(", ", str1.split(", "))); // 分割并重新连接

        // 不可变性示例
        String original = "Hello";
        String modified = original.concat(", World!"); // 拼接字符串，创建新对象
        System.out.println("原始字符串: " + original); // 原始字符串未变
        System.out.println("修改后字符串: " + modified); // 新字符串包含拼接结果
    }
}</code></pre>

<h2>注意事项</h2>
<ul>
  <li><strong>不可变性的影响</strong>：由于 <code>String</code> 是不可变的，频繁的字符串拼接操作（如使用 <code>+</code> 运算符或 <code>concat()</code> 方法）会创建多个中间对象，影响性能。在这种情况下，建议使用 <code>StringBuilder</code> 或 <code>StringBuffer</code> 类来构建字符串。</li>
  <li><strong>字符串池的使用</strong>：使用字符串字面量创建字符串可以利用字符串池节省内存，而使用 <code>new String()</code> 则会在堆内存中创建新对象，通常不推荐直接使用 <code>new String()</code>。</li>
  <li><strong>比较字符串</strong>：使用 <code>equals()</code> 方法比较字符串内容，而不是使用 <code>==</code> 运算符，因为 <code>==</code> 比较的是对象的引用地址。</li>
  <li><strong>编码问题</strong>：在将字符串转换为字节数组或从字节数组创建字符串时，注意字符编码问题，避免使用平台默认编码，建议显式指定编码（如 <code>UTF-8</code>）。</li>
</ul>

<h2>源码位置</h2>
<p>在 JDK 源码中，<code>String</code> 类的定义位于 <code>java.base/java/lang/String.java</code> 文件中。如果您想深入了解其实现细节（如字符串池的实现、内部字符数组存储等），可以查看该文件。</p>

<p>以上是对 <code>String</code> 类的详细介绍和使用示例，希望对您有所帮助！如果您有其他问题或需要进一步的解释，请随时告诉我。</p>`,category:"技术",tags:["Java","字符串","核心技术"]},{id:8,title:"String 类实现细节",date:"2023-10-30",summary:"深入探讨Java中String类的内部实现细节，包括字符数组存储和字符串池机制。",content:`<h2>概述</h2>
<p><code>String</code> 类是 Java 标准库中的核心类，位于 <code>java.lang</code> 包中。它的实现细节涉及到字符串的存储方式、不可变性机制以及字符串池的运作方式。深入了解这些实现细节有助于更好地理解 <code>String</code> 类的行为和性能特性。本文将重点讨论 <code>String</code> 类的内部字符数组存储和字符串池的实现。</p>

<h2>内部字符数组存储</h2>
<p>在 Java 中，<code>String</code> 类的内部实现主要依赖于一个字符数组来存储字符串的内容。以下是其内部存储的主要特点和实现细节：</p>
<ol>
  <li><strong>字符数组作为核心存储结构</strong>：
    <ul>
      <li><code>String</code> 类内部使用一个 <code>char[]</code> 数组来存储字符串的字符序列。在 JDK 8 及之前的版本中，这个数组被命名为 <code>value</code>，并且是 <code>final</code> 的，确保不可变性。</li>
      <li>例如，在 JDK 8 中，<code>String</code> 类的部分源码如下：
        <pre><code>public final class String implements java.io.Serializable, Comparable&lt;String&gt;, CharSequence {
    /** The value is used for character storage. */
    private final char value[];
    // ... 其他字段和方法 ...
}</code></pre>
      </li>
      <li>从 JDK 9 开始，为了支持紧凑字符串（Compact Strings），<code>String</code> 类内部改用 <code>byte[]</code> 数组存储字符，以减少内存使用。紧凑字符串会根据字符串的内容选择使用 Latin-1 编码（每个字符占 1 个字节）或 UTF-16 编码（每个字符占 2 个字节）。相关源码如下：
        <pre><code>public final class String implements java.io.Serializable, Comparable&lt;String&gt;, CharSequence {
    @Stable
    private final byte[] value;
    private final byte coder;
    // ... 其他字段和方法 ...
}</code></pre>
      </li>
      <li><code>coder</code> 字段用于标识编码方式，值为 <code>LATIN1</code>（0）或 <code>UTF16</code>（1）。</li>
    </ul>
  </li>
  <li><strong>不可变性的实现</strong>：
    <ul>
      <li><code>String</code> 类的不可变性通过将内部数组声明为 <code>final</code> 并确保没有公开的方法可以修改数组内容来实现。</li>
      <li>任何修改操作（如 <code>substring()</code>、<code>replace()</code>）都会创建一个新的 <code>String</code> 对象，而不是修改现有的对象。例如，<code>substring()</code> 方法会创建一个新的 <code>String</code> 对象，共享原始字符串的字符数组的一部分（在 JDK 8 中），或者复制出一部分数组（在 JDK 9 及以上版本中）。</li>
      <li>在 JDK 8 中，<code>substring()</code> 方法的实现可能如下：
        <pre><code>public String substring(int beginIndex, int endIndex) {
    // 省略参数检查
    int subLen = endIndex - beginIndex;
    return new String(value, beginIndex, subLen);
}</code></pre>
        这里 <code>value</code> 数组被共享，但由于它是 <code>final</code> 的，内容不会被修改。
      </li>
    </ul>
  </li>
  <li><strong>紧凑字符串（Compact Strings）</strong>：
    <ul>
      <li>从 JDK 9 开始引入的紧凑字符串特性是为了优化内存使用。对于只包含 Latin-1 字符（ASCII 字符）的字符串，<code>String</code> 使用 <code>byte[]</code> 数组以单字节形式存储每个字符，而不是使用 <code>char[]</code> 数组的双字节形式。</li>
      <li>如果字符串包含非 Latin-1 字符，则会使用 UTF-16 编码存储，每个字符占两个字节。</li>
      <li>这种优化显著减少了内存占用，尤其是在处理大量 ASCII 字符串的应用程序中。</li>
    </ul>
  </li>
  <li><strong>字符串拼接的性能问题</strong>：
    <ul>
      <li>由于 <code>String</code> 的不可变性，频繁的字符串拼接（如使用 <code>+</code> 运算符）会导致创建多个中间 <code>String</code> 对象，影响性能。</li>
      <li>为了解决这个问题，Java 编译器会对某些情况下的字符串拼接进行优化，将其转换为 <code>StringBuilder</code> 的操作。例如：
        <pre><code>String s = "a" + "b" + "c";</code></pre>
        会被编译器优化为类似以下代码：
        <pre><code>String s = new StringBuilder().append("a").append("b").append("c").toString();</code></pre>
      </li>
      <li>然而，在循环中进行字符串拼接时，建议显式使用 <code>StringBuilder</code> 以避免多次创建中间对象。</li>
    </ul>
  </li>
</ol>

<h2>字符串池的实现</h2>
<p>字符串池（String Pool，也称为 String Intern Pool）是 Java 用来优化字符串存储的一种机制，旨在减少内存使用和提高性能。以下是字符串池的实现细节：</p>
<ol>
  <li><strong>字符串池的位置</strong>：
    <ul>
      <li>在 JDK 6 及之前版本中，字符串池位于永久代（PermGen）中，作为方法区的一部分。</li>
      <li>从 JDK 7 开始，字符串池被移动到堆内存中，作为普通对象存储。这使得字符串池可以被垃圾回收器回收，避免了永久代内存不足的问题。</li>
      <li>在 JDK 8 及以上版本中，永久代被移除，字符串池仍然位于堆内存中，通常由垃圾回收器（如 G1、CMS）管理。</li>
    </ul>
  </li>
  <li><strong>字符串池的工作原理</strong>：
    <ul>
      <li>字符串池是一个哈希表结构，存储唯一的字符串对象。当使用字符串字面量创建字符串时（如 <code>String s = "hello";</code>），JVM 会检查字符串池中是否已存在内容相同的字符串对象。</li>
      <li>如果存在，JVM 返回池中已有对象的引用；如果不存在，JVM 在池中创建一个新的 <code>String</code> 对象，并将其添加到池中。</li>
      <li>使用 <code>new String("hello")</code> 创建字符串时，会在堆内存中创建一个新的 <code>String</code> 对象，即使字符串池中已存在相同内容的字符串。这个新对象与池中的对象是不同的实例。</li>
      <li><code>intern()</code> 方法可以将一个 <code>String</code> 对象添加到字符串池中，并返回池中对象的引用。如果池中已存在相同内容的字符串，则返回池中对象的引用；否则，将当前对象添加到池中。</li>
    </ul>
  </li>
  <li><strong>字符串池的实现代码</strong>：
    <ul>
      <li>字符串池的具体实现不在 <code>String</code> 类中，而是在 JVM 内部实现，通常由 C++ 代码管理。</li>
      <li>在 OpenJDK 中，字符串池的实现位于 <code>hotspot/src/share/vm/classfile/symbolTable.cpp</code> 和相关文件中。字符串池使用一个哈希表（<code>Hashtable</code>）来存储字符串对象，确保快速查找和唯一性。</li>
      <li><code>intern()</code> 方法的实现会调用 JVM 内部的函数 <code>JVM_InternString</code>，该函数负责检查和更新字符串池。</li>
    </ul>
  </li>
  <li><strong>字符串池的性能和内存考虑</strong>：
    <ul>
      <li>字符串池通过重用字符串对象减少了内存使用，尤其是在应用程序中使用大量重复字符串的情况下。</li>
      <li>然而，过多的字符串对象进入字符串池可能会导致内存占用增加，尤其是在 JDK 7 及以上版本中，因为字符串池位于堆内存中。</li>
      <li>在高并发环境中，字符串池的访问可能成为性能瓶颈，因为 <code>intern()</code> 方法涉及到同步操作。</li>
      <li>JVM 提供了一些参数来调整字符串池的行为，例如 <code>-XX:StringTableSize</code> 可以设置字符串池哈希表的大小（在 JDK 8 及以上版本中）。</li>
    </ul>
  </li>
  <li><strong>字符串池的行为示例</strong>：
    <ul>
      <li>以下代码展示了字符串池的工作原理：
        <pre><code>String s1 = "hello"; // 使用字面量，进入字符串池
String s2 = "hello"; // 引用字符串池中的同一对象
String s3 = new String("hello"); // 在堆中创建新对象
String s4 = s3.intern(); // 返回字符串池中的对象引用

System.out.println(s1 == s2); // true，引用同一对象
System.out.println(s1 == s3); // false，s3 是堆中的新对象
System.out.println(s1 == s4); // true，s4 是字符串池中的对象</code></pre>
      </li>
    </ul>
  </li>
</ol>

<h2>其他实现细节</h2>
<ol>
  <li><strong>哈希码计算</strong>：
    <ul>
      <li><code>String</code> 类的 <code>hashCode()</code> 方法使用一个特定的算法计算字符串的哈希值，公式为：
        <pre><code>s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]</code></pre>
        其中 <code>s[i]</code> 是字符串中第 <code>i</code> 个字符，<code>n</code> 是字符串长度，<code>31</code> 是一个质数，用于减少哈希冲突。
      </li>
      <li>从 JDK 7 开始，<code>hashCode()</code> 的结果会被缓存到一个 <code>hash</code> 字段中，避免重复计算。</li>
    </ul>
  </li>
  <li><strong>序列化支持</strong>：
    <ul>
      <li><code>String</code> 类实现了 <code>Serializable</code> 接口，支持序列化和反序列化。内部字符数组在序列化时会被正确处理。</li>
    </ul>
  </li>
  <li><strong>与 <code>StringBuilder</code> 和 <code>StringBuffer</code> 的关系</strong>：
    <ul>
      <li><code>StringBuilder</code> 和 <code>StringBuffer</code> 类用于高效地构建字符串，它们内部也使用字符数组存储内容，但不像 <code>String</code> 那样不可变。</li>
      <li><code>String</code> 类的许多方法（如 <code>toString()</code>）可以与这些类交互，例如 <code>StringBuilder.toString()</code> 会创建一个新的 <code>String</code> 对象。</li>
    </ul>
  </li>
</ol>

<h2>注意事项</h2>
<ul>
  <li><strong>内存管理</strong>：了解字符串池和内部存储机制有助于优化内存使用，避免不必要的对象创建。例如，避免频繁使用 <code>new String()</code>，尽量使用字符串字面量。</li>
  <li><strong>性能优化</strong>：在处理大量字符串操作时，优先使用 <code>StringBuilder</code> 而不是直接拼接 <code>String</code> 对象。</li>
  <li><strong>版本差异</strong>：<code>String</code> 类的实现细节在不同 JDK 版本中有所变化（如从 <code>char[]</code> 到 <code>byte[]</code> 的转变），因此在阅读源码或优化代码时需要注意 JDK 版本。</li>
</ul>

<h2>源码位置</h2>
<p>在 JDK 源码中，<code>String</code> 类的定义位于 <code>java.base/java/lang/String.java</code> 文件中。字符串池的具体实现则位于 JVM 源码中，通常在 OpenJDK 的 <code>hotspot/src/share/vm/classfile/symbolTable.cpp</code> 等文件中。如果您想深入研究这些实现细节，可以下载 OpenJDK 源码并查看相关文件。</p>

<p>以上是对 <code>String</code> 类实现细节的详细介绍，希望对您有所帮助！如果您有其他问题或需要进一步的解释，请随时告诉我。</p>`,category:"技术",tags:["Java","字符串","实现细节"]},{id:9,title:"Serializable 接口说明",date:"2023-11-01",summary:"介绍Java中的Serializable接口及其使用方法。",content:`<h2>概述</h2>
<p><code>Serializable</code> 接口是 Java 中的一个标记接口（marker interface），它用于指示一个类可以被序列化。序列化是将对象转换为字节流的过程，以便可以将其保存到文件、数据库或通过网络传输。</p>

<h2>主要特点</h2>
<ul>
  <li><strong>标记接口</strong>：<code>Serializable</code> 接口没有定义任何方法，它只是一个标记，告诉 Java 编译器这个类可以被序列化。</li>
  <li><strong>序列化过程</strong>：当一个对象被序列化时，Java 会将其状态（即对象的字段值）转换为字节流。</li>
  <li><strong>反序列化过程</strong>：反序列化是将字节流转换回对象的过程。</li>
</ul>

<h2>使用方法</h2>
<p>要使一个类可以被序列化，只需在类声明中实现 <code>Serializable</code> 接口即可。例如：</p>
<pre><code>import java.io.Serializable;

public class MyClass implements Serializable {
    private String name;
    private int age;

    public MyClass(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getters and setters
}</code></pre>

<h2>注意事项</h2>
<ul>
  <li><strong>transient 关键字</strong>：如果一个字段被标记为 <code>transient</code>，则在序列化过程中该字段将被忽略，不会保存其值。</li>
  <li><strong>serialVersionUID</strong>：为了确保序列化和反序列化过程中的版本兼容性，建议为实现 <code>Serializable</code> 接口的类定义一个 <code>serialVersionUID</code> 字段。例如：
    <pre><code>private static final long serialVersionUID = 1L;</code></pre>
  </li>
  <li><strong>继承</strong>：如果一个类实现了 <code>Serializable</code> 接口，那么它的子类也会自动实现该接口。</li>
  <li><strong>安全性</strong>：序列化可能会导致安全问题，因为它可以将对象的状态保存到外部存储中。确保敏感数据不会被意外序列化。</li>
</ul>

<h2>相关类和方法</h2>
<ul>
  <li><strong>ObjectOutputStream</strong>：用于将对象写入输出流。</li>
  <li><strong>ObjectInputStream</strong>：用于从输入流读取对象。</li>
</ul>

<p>通过实现 <code>Serializable</code> 接口，Java 提供了便捷的方式来实现对象的持久化和传输，这在分布式系统和数据存储中非常有用。</p>`,category:"技术",tags:["Java","序列化","核心技术"]},{id:10,title:"JDK 源码阅读笔记",date:"2023-11-01",summary:"对JDK源码中java.lang.Object和String等核心类的详细解读和分析。",content:`<h2>java.lang.Object 类分析</h2>
<p><code>Object</code> 是 Java 类层次结构的根类，每个 Java 类（包括数组）都直接或间接继承自 <code>Object</code>。它定义了所有对象都具备的基本行为。以下是对其核心方法的分析和讲解：</p>

<h3>1. 构造方法</h3>
<pre><code>public Object() {}</code></pre>
<ul>
  <li>空的构造方法，表明 <code>Object</code> 类没有特定的初始化逻辑。</li>
  <li>标注了 <code>@IntrinsicCandidate</code>，表示 JVM 可能会对这个方法进行特殊优化或内联处理。</li>
</ul>

<h3>2. getClass() 方法</h3>
<pre><code>public final native Class<?> getClass();</code></pre>
<ul>
  <li>返回对象的运行时类（<code>Class</code> 对象），用于反射操作。</li>
  <li><code>final</code> 修饰，子类无法重写。</li>
  <li><code>native</code> 修饰，表明这是由 JVM 底层实现的本地方法。</li>
</ul>

<h3>3. hashCode() 方法</h3>
<pre><code>public native int hashCode();</code></pre>
<ul>
  <li>返回对象的哈希码，主要用于哈希表（如 <code>HashMap</code>）中定位对象。</li>
  <li>注释详细说明了 <code>hashCode</code> 的约定：
    <ul>
      <li>同一个对象在同一执行过程中多次调用 <code>hashCode</code> 必须返回相同的整数。</li>
      <li>如果两个对象通过 <code>equals</code> 方法相等，则它们的 <code>hashCode</code> 必须相同。</li>
      <li>不相等的对象可以有相同的 <code>hashCode</code>，但为了哈希表性能，最好返回不同的值。</li>
    </ul>
  </li>
</ul>

<h3>4. equals(Object obj) 方法</h3>
<pre><code>public boolean equals(Object obj) {
    return (this == obj);
}</code></pre>
<ul>
  <li>用于判断两个对象是否相等。</li>
  <li><code>Object</code> 类的默认实现是引用相等性（<code>==</code>）。</li>
  <li>通常在自定义类中需要重写 <code>equals</code> 方法来实现内容相等性。</li>
</ul>

<h3>5. clone() 方法</h3>
<ul>
  <li>用于创建并返回对象的副本。</li>
  <li>默认实现会抛出 <code>CloneNotSupportedException</code>，除非类实现了 <code>Cloneable</code> 接口。</li>
</ul>

<h3>6. toString() 方法</h3>
<ul>
  <li>返回对象的字符串表示，默认实现是类名加上哈希码的十六进制表示。</li>
  <li>通常建议子类重写此方法以提供更有意义的字符串表示。</li>
</ul>

<h3>7. 线程同步相关方法：wait()、notify()、notifyAll()</h3>
<ul>
  <li>用于线程间的通信和同步。</li>
  <li>这些方法都是 <code>final</code> 和 <code>native</code>，由 JVM 底层实现。</li>
</ul>

<h3>8. finalize() 方法</h3>
<ul>
  <li>在对象被垃圾回收前调用，用于资源清理。</li>
  <li>已被标注为 <code>@Deprecated(since="9", forRemoval=true)</code>，不推荐使用。</li>
</ul>

<h2>java.lang.String 类分析</h2>
<p><code>String</code> 类是 Java 中表示字符序列的核心类，它是不可变的（immutable），广泛用于字符串操作。</p>

<h3>1. 基本特性</h3>
<ul>
  <li><strong>不可变性</strong>：<code>String</code> 对象创建后，其内容无法更改。</li>
  <li><strong>UTF-16 编码</strong>：使用 UTF-16 格式存储字符。</li>
  <li><strong>字符串常量池</strong>：字符串字面量会被 JVM 放入字符串常量池中，实现复用。</li>
</ul>

<h3>2. 核心字段</h3>
<pre><code>@Stable
private final byte[] value;
private final byte coder;
private int hash; // Default to 0
private boolean hashIsZero; // Default to false;</code></pre>
<ul>
  <li><code>value</code>：存储字符串的字符数据，使用 <code>byte[]</code> 而非 <code>char[]</code>（从 Java 9 开始）。</li>
  <li><code>coder</code>：指示编码方式（<code>LATIN1</code> 或 <code>UTF16</code>）。</li>
</ul>

<h3>3. 核心方法</h3>
<ul>
  <li><code>length()</code> 和 <code>isEmpty()</code>：返回字符串长度和是否为空。</li>
  <li><code>charAt(int index)</code>：获取指定索引的字符。</li>
  <li><code>equals(Object anObject)</code>：比较两个字符串内容是否相等。</li>
  <li><code>substring(int beginIndex, int endIndex)</code>：提取子字符串。</li>
  <li><code>intern()</code>：将字符串放入常量池并返回引用。</li>
</ul>

<h3>4. 设计思想</h3>
<ul>
  <li><strong>不可变性带来的好处</strong>：线程安全、缓存哈希码、常量池共享。</li>
  <li><strong>性能优化</strong>：从 Java 9 开始使用 <code>byte[]</code> 存储数据，减少内存占用。</li>
</ul>`,category:"技术",tags:["Java","JDK源码","核心技术"]},{id:11,title:"JNI 接口查找说明",date:"2023-10-26",summary:"详细介绍如何在JDK源码中查找System类中native方法对应的JNI接口实现。",content:`<h2>问题描述</h2>
<p>在 JDK 源码中找不到 <code>System</code> 类中 <code>native</code> 方法对应的 JNI 接口实现。这是一个常见的问题，因为 JNI 接口的实现并不总是显而易见地包含在 Java 源码中，而是分布在 JDK 的本地代码部分。</p>

<h2>原因分析</h2>
<ol>
  <li><strong>Java 源码中只包含声明</strong>：在 <code>java.base/java/lang/System.java</code> 文件中，<code>native</code> 方法如 <code>currentTimeMillis()</code> 只被声明，没有方法体。</li>
  <li><strong>JNI 实现位于本地代码</strong>：<code>native</code> 方法的实现通常是用 C 或 C++ 编写的，位于 JDK 源码的本地代码目录中。</li>
  <li><strong>命名规则</strong>：JNI 方法的本地实现遵循特定的命名规则，如 <code>Java_java_lang_System_currentTimeMillis</code>。</li>
  <li><strong>JVM 内部实现</strong>：某些 <code>native</code> 方法可能直接嵌入在 JVM 实现中。</li>
</ol>

<h2>如何查找 JNI 接口实现</h2>
<ol>
  <li><strong>下载完整 OpenJDK 源码</strong>：确保下载了完整的 OpenJDK 源码。</li>
  <li><strong>定位本地代码目录</strong>：导航到 <code>jdk/src/java.base/share/native/libjava/</code> 目录。</li>
  <li><strong>搜索特定方法</strong>：在 <code>System.c</code> 文件中搜索类似 <code>Java_java_lang_System_currentTimeMillis</code> 的函数名。</li>
  <li><strong>检查 JVM 源码</strong>：如果在 <code>libjava</code> 目录中找不到实现，可能需要查看 JVM 源码。</li>
</ol>

<h2>其他资源</h2>
<ul>
  <li><strong>OpenJDK 源码浏览</strong>：使用在线的 OpenJDK 源码浏览器快速定位实现。</li>
  <li><strong>JNI 文档</strong>：Oracle 提供的 JNI 文档详细说明了 JNI 的工作原理。</li>
</ul>`,category:"技术",tags:["Java","JNI","源码分析"]},{id:12,title:"JNI 使用流程说明",date:"2023-10-27",summary:"详细介绍使用C或C++编写JNI方法的具体流程和注意事项。",content:`<h2>概述</h2>
<p>JNI (Java Native Interface) 是 Java 提供的一种机制，允许 Java 代码与用 C 或 C++ 编写的本地代码进行交互。</p>

<h2>具体流程</h2>
<ol>
  <li><strong>在 Java 中声明 native 方法</strong>：
    <pre><code>public class NativeExample {
    public native void printHello();
    public native int addNumbers(int a, int b);
}</code></pre>
  </li>
  <li><strong>编译 Java 类并生成头文件</strong>：
    <pre><code>javac -h . NativeExample.java</code></pre>
  </li>
  <li><strong>编写本地代码实现</strong>：
    <pre><code>#include &lt;jni.h&gt;
#include "NativeExample.h"

JNIEXPORT void JNICALL Java_NativeExample_printHello(JNIEnv *env, jobject obj) {
    printf("Hello from C!\\n");
}</code></pre>
  </li>
  <li><strong>编译本地代码为动态链接库</strong>：
    <pre><code>gcc -shared -I$JAVA_HOME/include -o libNativeExample.so NativeExample.c</code></pre>
  </li>
  <li><strong>加载本地库并调用 native 方法</strong>：
    <pre><code>System.loadLibrary("NativeExample");</code></pre>
  </li>
</ol>

<h2>注意事项</h2>
<ul>
  <li><strong>内存管理</strong>：本地代码中分配的内存必须手动释放。</li>
  <li><strong>线程安全</strong>：本地代码需要确保线程安全。</li>
  <li><strong>平台依赖性</strong>：本地代码通常是平台相关的。</li>
</ul>`,category:"技术",tags:["Java","JNI","本地编程"]},{id:13,title:"Iterator 和 ListIterator 类深入代码分析",date:"2023-11-03",summary:"对Java集合框架中Iterator和ListIterator接口的源代码深入分析。",content:`<h2>java.util.Iterator 深入分析</h2>
<p><code>Iterator</code>是Java集合框架中的一个接口，用于遍历集合中的元素。</p>

<h3>接口定义</h3>
<pre><code>public interface Iterator&lt;E&gt; {
    boolean hasNext();
    E next();
    default void remove() {
        throw new UnsupportedOperationException("remove");
    }
    default void forEachRemaining(Consumer&lt;? super E&gt; action) {
        Objects.requireNonNull(action);
        while (hasNext())
            action.accept(next());
    }
}</code></pre>

<h3>主要方法</h3>
<ul>
  <li><code>hasNext()</code>：检查是否还有下一个元素。</li>
  <li><code>next()</code>：返回下一个元素。</li>
  <li><code>remove()</code>：删除当前元素。</li>
</ul>

<h2>java.util.ListIterator 深入分析</h2>
<p><code>ListIterator</code>是<code>Iterator</code>接口的子接口，专门用于遍历<code>List</code>接口的实现类。</p>

<h3>接口定义</h3>
<pre><code>public interface ListIterator&lt;E&gt; extends Iterator&lt;E&gt; {
    boolean hasPrevious();
    E previous();
    int nextIndex();
    int previousIndex();
    default void set(E e) {
        throw new UnsupportedOperationException("set");
    }
    default void add(E e) {
        throw new UnsupportedOperationException("add");
    }
}</code></pre>

<h3>主要方法</h3>
<ul>
  <li><code>hasPrevious()</code>：检查是否还有上一个元素。</li>
  <li><code>previous()</code>：返回上一个元素。</li>
  <li><code>set(E e)</code>：替换当前元素。</li>
</ul>

<h2>ArrayList中的实现</h2>
<p>在<code>ArrayList</code>类中，<code>Iterator</code>和<code>ListIterator</code>的具体实现是内部类<code>Itr</code>和<code>ListItr</code>，它们提供了并发修改检测机制。</p>`,category:"技术",tags:["Java","集合框架","迭代器"]}],ka={name:"Home",setup(){const e=ue(()=>[...tt].sort((s,o)=>new Date(o.date)-new Date(s.date)).slice(0,3)),t=ue(()=>tt.slice(0,2)),n=et(null);return kn(()=>{n.value=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),n.value.unobserve(o.target))})},{threshold:.1}),document.querySelectorAll(".post-item").forEach(s=>{n.value.observe(s)})}),{recentPosts:e,featuredPosts:t}}},Ja={class:"home"},La={class:"hero"},Fa={class:"container hero-container"},Ha={class:"hero-actions"},Ka={class:"container main-content"},Va={class:"content-left"},Ba={class:"recent-posts"},Ua={class:"post-list"},Wa={class:"post-title"},qa={class:"post-meta"},za={class:"post-date"},Ga={key:0,class:"post-category"},Ya={class:"post-excerpt"},Qa={class:"content-right"},Xa={class:"sidebar"},Za={class:"widget featured-posts"},eu={class:"featured-list"};function tu(e,t,n,s,o,r){const i=ht("router-link");return J(),F("div",Ja,[O("div",La,[O("div",Fa,[t[2]||(t[2]=O("h1",null,"相码",-1)),t[3]||(t[3]=O("p",{class:"motto"},"金牌选手不会从天而降，你必须用热爱、刻苦和投入来浇灌他们。",-1)),O("div",Ha,[U(i,{to:"/about",class:"btn primary-btn"},{default:le(()=>t[0]||(t[0]=[ie("开始阅读")])),_:1,__:[0]}),t[1]||(t[1]=O("a",{href:"https://github.com",target:"_blank",class:"btn secondary-btn"},"Github",-1))])])]),O("div",Ka,[O("div",Va,[O("section",Ba,[t[5]||(t[5]=O("h2",null,"最新文章",-1)),O("div",Ua,[(J(!0),F(he,null,pt(s.recentPosts,l=>(J(),F("article",{class:"post-item",key:l.id},[O("h3",Wa,[U(i,{to:`/post/${l.id}`},{default:le(()=>[ie(te(l.title),1)]),_:2},1032,["to"])]),O("div",qa,[O("span",za,te(l.date),1),l.category?(J(),F("span",Ga,[U(i,{to:`/categories/${l.category.toLowerCase()}`},{default:le(()=>[ie(te(l.category),1)]),_:2},1032,["to"])])):Lt("",!0)]),O("p",Ya,te(l.summary),1),U(i,{to:`/post/${l.id}`,class:"read-more"},{default:le(()=>t[4]||(t[4]=[ie("阅读更多")])),_:2,__:[4]},1032,["to"])]))),128))])])]),O("div",Qa,[O("aside",Xa,[O("section",Za,[t[6]||(t[6]=O("h3",{class:"widget-title"},"推荐文章",-1)),O("ul",eu,[(J(!0),F(he,null,pt(s.featuredPosts,l=>(J(),F("li",{key:l.id},[U(i,{to:`/post/${l.id}`},{default:le(()=>[ie(te(l.title),1)]),_:2},1032,["to"])]))),128))])])])])])])}const nu=st(ka,[["render",tu],["__scopeId","data-v-0164069e"]]),su={name:"About"},ou={class:"about"};function ru(e,t,n,s,o,r){return J(),F("div",ou,t[0]||(t[0]=[O("h1",null,"关于我",-1),O("div",{class:"content"},[O("p",null,"你好！我是相码，欢迎来到我的个人博客。"),O("p",null,"我是一个热爱技术、喜欢分享的忍者。在这个博客中，我会分享我的忍术心得、技术经验以及忍者生活的点滴。"),O("p",null,"如果你有任何问题或建议，欢迎通过忍者通讯与我联系。")],-1)]))}const iu=st(su,[["render",ru],["__scopeId","data-v-edc1b13c"]]),lu={name:"PostDetail",setup(){const e=ti(),t=Fs(),n=et(Number(t.params.id)),s=et(null);return kn(()=>{const r=tt.find(i=>i.id===n.value);r&&(s.value=r)}),{post:s,goBack:()=>{e.push("/")}}}},cu={class:"post-detail"},au={key:0},uu={class:"post-date"},fu=["innerHTML"],du={key:1};function hu(e,t,n,s,o,r){return J(),F("div",cu,[s.post?(J(),F("div",au,[O("h1",null,te(s.post.title),1),O("p",uu,te(s.post.date),1),O("div",{class:"post-content",innerHTML:s.post.content},null,8,fu),O("button",{onClick:t[0]||(t[0]=(...i)=>s.goBack&&s.goBack(...i)),class:"back-button"},"返回首页")])):(J(),F("div",du,[t[2]||(t[2]=O("p",null,"文章未找到",-1)),O("button",{onClick:t[1]||(t[1]=(...i)=>s.goBack&&s.goBack(...i)),class:"back-button"},"返回首页")]))])}const pu=st(lu,[["render",hu],["__scopeId","data-v-2e24ef4b"]]),gu={name:"Tags",props:{tag:{type:String,default:""}},setup(e){const t=Fs(),n=et(e.tag||t.params.tag||"");let s=null,o=0,r=null;Ds(()=>{n.value=e.tag||t.params.tag||""});const i=ue(()=>{const d={};return tt.forEach(g=>{g.tags&&Array.isArray(g.tags)&&g.tags.forEach(m=>{d[m]=(d[m]||0)+1})}),d}),l=d=>12+Math.min(d*2,12),c=ue(()=>n.value?tt.filter(d=>d.tags&&d.tags.includes(n.value)).sort((d,g)=>new Date(g.date)-new Date(d.date)):[]);kn(()=>{const d=document.querySelectorAll(".tag-item"),g=120,m=2*Math.PI/d.length;d.forEach((C,L)=>{const I=L*m,M=g*Math.cos(I),D=g*Math.sin(I);C.style.transform=`translate3d(${M}px, ${D}px, 0) rotateY(${I}rad)`,C.style.left=`calc(50% - ${C.offsetWidth/2}px)`,C.style.top=`calc(50% - ${C.offsetHeight/2}px)`});const T=()=>{o+=.01,d.forEach((C,L)=>{const I=L*m+o,M=g*Math.cos(I),D=g*Math.sin(I);C.style.transform=`translate3d(${M}px, ${D}px, 0) rotateY(${I}rad)`}),s=requestAnimationFrame(T)};s=requestAnimationFrame(T),r=document.querySelector(".tag-cloud"),r&&(r.addEventListener("mouseenter",h),r.addEventListener("mouseleave",u))}),Ms(()=>{s&&(cancelAnimationFrame(s),s=null),r&&(r.removeEventListener("mouseenter",h),r.removeEventListener("mouseleave",u),r=null)});const h=()=>{s&&(cancelAnimationFrame(s),s=null)},u=()=>{if(!s){const d=document.querySelectorAll(".tag-item");if(d.length>0){const m=2*Math.PI/d.length,T=()=>{o+=.01,d.forEach((C,L)=>{const I=L*m+o,M=120*Math.cos(I),D=120*Math.sin(I);C.style.transform=`translate3d(${M}px, ${D}px, 0) rotateY(${I}rad)`}),s=requestAnimationFrame(T)};s=requestAnimationFrame(T)}}};return{tagsWithCount:i,currentTag:n,getFontSize:l,filteredPosts:c}}},mu={class:"tags-page container"},_u={key:0,class:"tag-cloud"},vu={key:1,class:"no-tags"},yu={key:2,class:"tag-posts"},bu={key:0,class:"post-list"},Su={class:"post-title"},xu={class:"post-meta"},wu={class:"post-date"},Eu={class:"post-excerpt"},Cu={key:1,class:"no-posts"};function Ru(e,t,n,s,o,r){const i=ht("router-link");return J(),F("div",mu,[Object.keys(s.tagsWithCount).length>0?(J(),F("div",_u,[(J(!0),F(he,null,pt(s.tagsWithCount,(l,c)=>(J(),kr(i,{key:c,to:`/tags/${c}`,class:"tag-item",style:Mn({fontSize:s.getFontSize(l)+"px"})},{default:le(()=>[ie(te(c)+" ("+te(l)+") ",1)]),_:2},1032,["to","style"]))),128))])):(J(),F("p",vu,"暂无标签")),s.currentTag?(J(),F("div",yu,[O("h2",null,te(s.currentTag)+" 标签下的文章",1),s.filteredPosts.length>0?(J(),F("div",bu,[(J(!0),F(he,null,pt(s.filteredPosts,l=>(J(),F("article",{class:"post-item",key:l.id},[O("h3",Su,[U(i,{to:`/post/${l.id}`},{default:le(()=>[ie(te(l.title),1)]),_:2},1032,["to"])]),O("div",xu,[O("span",wu,te(l.date),1)]),O("p",Eu,te(l.summary),1),U(i,{to:`/post/${l.id}`,class:"read-more"},{default:le(()=>t[0]||(t[0]=[ie("阅读更多")])),_:2,__:[0]},1032,["to"])]))),128))])):(J(),F("p",Cu,"该标签下暂无文章"))])):Lt("",!0)])}const ko=st(gu,[["render",Ru],["__scopeId","data-v-7eef5b9a"]]),Pu={name:"Categories",props:{category:{type:String,default:""}},setup(e){const t=Fs(),n=et(e.category||t.params.category||"");Ds(()=>{n.value=e.category||t.params.category||""});const s=ue(()=>{const r={};return tt.forEach(i=>{i.category&&(r[i.category]=(r[i.category]||0)+1)}),r}),o=ue(()=>n.value?tt.filter(r=>r.category===n.value).sort((r,i)=>new Date(i.date)-new Date(r.date)):[]);return{categoriesWithCount:s,currentCategory:n,filteredPosts:o}}},Tu={class:"categories-page container"},Ou={key:0,class:"category-list"},Au={class:"category-name"},Iu={class:"category-count"},Mu={key:1,class:"no-categories"},$u={key:2,class:"category-posts"},ju={key:0,class:"post-list"},Du={class:"post-title"},Nu={class:"post-meta"},ku={class:"post-date"},Ju={class:"post-excerpt"},Lu={key:1,class:"no-posts"};function Fu(e,t,n,s,o,r){const i=ht("router-link");return J(),F("div",Tu,[Object.keys(s.categoriesWithCount).length>0?(J(),F("div",Ou,[(J(!0),F(he,null,pt(s.categoriesWithCount,(l,c)=>(J(),F("div",{class:"category-item",key:c},[U(i,{to:`/categories/${c}`,class:"category-link"},{default:le(()=>[O("h2",Au,te(c),1),O("span",Iu,te(l)+" 篇文章",1)]),_:2},1032,["to"])]))),128))])):(J(),F("p",Mu,"暂无分类")),s.currentCategory?(J(),F("div",$u,[O("h2",null,te(s.currentCategory)+" 分类下的文章",1),s.filteredPosts.length>0?(J(),F("div",ju,[(J(!0),F(he,null,pt(s.filteredPosts,l=>(J(),F("article",{class:"post-item",key:l.id},[O("h3",Du,[U(i,{to:`/post/${l.id}`},{default:le(()=>[ie(te(l.title),1)]),_:2},1032,["to"])]),O("div",Nu,[O("span",ku,te(l.date),1)]),O("p",Ju,te(l.summary),1),U(i,{to:`/post/${l.id}`,class:"read-more"},{default:le(()=>t[0]||(t[0]=[ie("阅读更多")])),_:2,__:[0]},1032,["to"])]))),128))])):(J(),F("p",Lu,"该分类下暂无文章"))])):Lt("",!0)])}const Jo=st(Pu,[["render",Fu],["__scopeId","data-v-aa10f5b2"]]),Hu={name:"Timeline",setup(){return{timelinePosts:ue(()=>[...tt].sort((t,n)=>new Date(n.date)-new Date(t.date)))}}},Ku={class:"timeline-page container"},Vu={key:0,class:"timeline-container"},Bu={class:"timeline-marker"},Uu={key:0,class:"timeline-line"},Wu={class:"timeline-content"},qu={class:"timeline-header"},zu={class:"post-title"},Gu={key:1,class:"no-posts"};function Yu(e,t,n,s,o,r){const i=ht("router-link");return J(),F("div",Ku,[s.timelinePosts.length>0?(J(),F("div",Vu,[(J(!0),F(he,null,pt(s.timelinePosts,(l,c)=>(J(),F("div",{class:"timeline-item",key:l.id},[O("div",Bu,[t[0]||(t[0]=O("div",{class:"marker-icon"},null,-1)),c<s.timelinePosts.length-1?(J(),F("div",Uu)):Lt("",!0)]),O("div",Wu,[O("div",qu,[O("h2",zu,[U(i,{to:`/post/${l.id}`},{default:le(()=>[ie(te(l.title),1)]),_:2},1032,["to"])])])])]))),128))])):(J(),F("p",Gu,"暂无文章"))])}const Qu=st(Hu,[["render",Yu],["__scopeId","data-v-5813cf83"]]),Xu={name:"Search",props:{query:{type:String,default:""}},setup(e){const t=et(e.query),n=et([]);return Ds(()=>{if(t.value=e.query,t.value){const o=t.value.toLowerCase();n.value=tt.filter(r=>r.title.toLowerCase().includes(o)||r.summary.toLowerCase().includes(o)||r.content.toLowerCase().includes(o)).sort((r,i)=>new Date(i.date)-new Date(r.date))}else n.value=[]}),{query:t,results:n,highlight:o=>o}}},Zu={class:"search-page container"},ef={key:0,class:"search-info"},tf={key:1,class:"search-results"},nf={class:"post-title"},sf={class:"post-meta"},of={class:"post-date"},rf=["innerHTML"],lf={key:2,class:"no-results"},cf={key:0},af={key:1};function uf(e,t,n,s,o,r){const i=ht("router-link");return J(),F("div",Zu,[t[2]||(t[2]=O("h1",null,"搜索结果",-1)),s.query?(J(),F("div",ef,[O("p",null,'为您找到关于 "'+te(s.query)+'" 的结果 '+te(s.results.length)+" 条",1)])):Lt("",!0),s.results.length>0?(J(),F("div",tf,[(J(!0),F(he,null,pt(s.results,l=>(J(),F("article",{class:"post-item",key:l.id},[O("h2",nf,[U(i,{to:`/post/${l.id}`},{default:le(()=>[ie(te(s.highlight(l.title)),1)]),_:2},1032,["to"])]),O("div",sf,[O("span",of,te(l.date),1)]),O("p",{class:"post-excerpt",innerHTML:s.highlight(l.summary)},null,8,rf),U(i,{to:`/post/${l.id}`,class:"read-more"},{default:le(()=>t[0]||(t[0]=[ie("阅读更多")])),_:2,__:[0]},1032,["to"])]))),128))])):(J(),F("div",lf,[s.query?(J(),F("p",cf,'抱歉，没有找到与 "'+te(s.query)+'" 相关的内容。',1)):(J(),F("p",af,"请输入搜索关键词。")),t[1]||(t[1]=O("p",{class:"suggestion"},[ie("您可以尝试不同的关键词，或者浏览"),O("a",{href:"/"},"首页"),ie("查看最新文章。")],-1))]))])}const ff=st(Xu,[["render",uf],["__scopeId","data-v-29195d8c"]]),df=[{path:"/",name:"Home",component:nu},{path:"/about",name:"About",component:iu},{path:"/post/:id",name:"PostDetail",component:pu,props:!0},{path:"/tags",name:"Tags",component:ko},{path:"/tags/:tag",name:"TagDetail",component:ko,props:!0},{path:"/categories",name:"Categories",component:Jo},{path:"/categories/:category",name:"CategoryDetail",component:Jo,props:!0},{path:"/timeline",name:"Timeline",component:Qu},{path:"/search",name:"Search",component:ff,props:e=>({query:e.query.q})}],hf=Ea({history:Zc(),routes:df});bc(Na).use(hf).mount("#app");
