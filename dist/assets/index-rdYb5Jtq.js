(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},gs=[],ln=()=>{},op=()=>!1,Ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ol=t=>t.startsWith("onUpdate:"),wt=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ty=Object.prototype.hasOwnProperty,Ce=(t,e)=>Ty.call(t,e),ae=Array.isArray,_s=t=>eo(t)==="[object Map]",Us=t=>eo(t)==="[object Set]",xh=t=>eo(t)==="[object Date]",de=t=>typeof t=="function",Ye=t=>typeof t=="string",mn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",ap=t=>(Ve(t)||de(t))&&de(t.then)&&de(t.catch),cp=Object.prototype.toString,eo=t=>cp.call(t),Iy=t=>eo(t).slice(8,-1),lp=t=>eo(t)==="[object Object]",Ml=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_i=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},by=/-\w/g,Ht=Pa(t=>t.replace(by,e=>e.slice(1).toUpperCase())),Ay=/\B([A-Z])/g,Xr=Pa(t=>t.replace(Ay,"-$1").toLowerCase()),ka=Pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),vc=Pa(t=>t?`on${ka(t)}`:""),lr=(t,e)=>!Object.is(t,e),Lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},up=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mh;const Da=()=>Mh||(Mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vi(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?Py(r):Vi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||Ve(t))return t}const Ry=/;(?![^(]*\))/g,Sy=/:([^]+)/,Cy=/\/\*[^]*?\*\//g;function Py(t){const e={};return t.replace(Cy,"").split(Ry).forEach(n=>{if(n){const r=n.split(Sy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qr(t){let e="";if(Ye(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=qr(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ky="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dy=Vl(ky);function hp(t){return!!t||t===""}function Ny(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=zr(t[r],e[r]);return n}function zr(t,e){if(t===e)return!0;let n=xh(t),r=xh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=mn(t),r=mn(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?Ny(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!zr(t[o],e[o]))return!1}}return String(t)===String(e)}function Ll(t,e){return t.findIndex(n=>zr(n,e))}const fp=t=>!!(t&&t.__v_isRef===!0),Ke=t=>Ye(t)?t:t==null?"":ae(t)||Ve(t)&&(t.toString===cp||!de(t.toString))?fp(t)?Ke(t.value):JSON.stringify(t,dp,2):String(t),dp=(t,e)=>fp(e)?dp(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ec(r,i)+" =>"]=s,n),{})}:Us(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ec(n))}:mn(e)?Ec(e):Ve(e)&&!ae(e)&&!lp(e)?String(e):e,Ec=(t,e="")=>{var n;return mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class pp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){++this._on===1&&(this.prevScope=gt,gt=this)}off(){this._on>0&&--this._on===0&&(gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function mp(t){return new pp(t)}function gp(){return gt}function Vy(t,e=!1){gt&&gt.cleanups.push(t)}let xe;const wc=new WeakSet;class _p{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wc.has(this)&&(wc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lh(this),Ep(this);const e=xe,n=Jt;xe=this,Jt=!0;try{return this.fn()}finally{wp(this),xe=e,Jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bl(e);this.deps=this.depsTail=void 0,Lh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wc(this)&&this.run()}get dirty(){return Wc(this)}}let yp=0,yi,vi;function vp(t,e=!1){if(t.flags|=8,e){t.next=vi,vi=t;return}t.next=yi,yi=t}function Ul(){yp++}function Fl(){if(--yp>0)return;if(vi){let e=vi;for(vi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yi;){let e=yi;for(yi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ep(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Bl(r),Oy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Wc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Tp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oi)||(t.globalVersion=Oi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Wc(t))))return;t.flags|=2;const e=t.dep,n=xe,r=Jt;xe=t,Jt=!0;try{Ep(t);const s=t.fn(t._value);(e.version===0||lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xe=n,Jt=r,wp(t),t.flags&=-3}}function Bl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Bl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Oy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Jt=!0;const Ip=[];function On(){Ip.push(Jt),Jt=!1}function xn(){const t=Ip.pop();Jt=t===void 0?!0:t}function Lh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let Oi=0;class xy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xe||!Jt||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new xy(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,bp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=r)}return n}trigger(e){this.version++,Oi++,this.notify(e)}notify(e){Ul();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fl()}}}function bp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)bp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xo=new WeakMap,Br=Symbol(""),Gc=Symbol(""),xi=Symbol("");function yt(t,e,n){if(Jt&&xe){let r=Xo.get(t);r||Xo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new jl),s.map=r,s.key=n),s.track()}}function bn(t,e,n,r,s,i){const o=Xo.get(t);if(!o){Oi++;return}const c=l=>{l&&l.trigger()};if(Ul(),e==="clear")o.forEach(c);else{const l=ae(t),u=l&&Ml(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===xi||!mn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(xi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Br)),_s(t)&&c(o.get(Gc)));break;case"delete":l||(c(o.get(Br)),_s(t)&&c(o.get(Gc)));break;case"set":_s(t)&&c(o.get(Br));break}}Fl()}function My(t,e){const n=Xo.get(t);return n&&n.get(e)}function as(t){const e=Ae(t);return e===t?e:(yt(e,"iterate",xi),jt(t)?e:e.map(ct))}function Na(t){return yt(t=Ae(t),"iterate",xi),t}const Ly={__proto__:null,[Symbol.iterator](){return Tc(this,Symbol.iterator,ct)},concat(...t){return as(this).concat(...t.map(e=>ae(e)?as(e):e))},entries(){return Tc(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return wn(this,"every",t,e,void 0,arguments)},filter(t,e){return wn(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return wn(this,"find",t,e,ct,arguments)},findIndex(t,e){return wn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wn(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return wn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ic(this,"includes",t)},indexOf(...t){return Ic(this,"indexOf",t)},join(t){return as(this).join(t)},lastIndexOf(...t){return Ic(this,"lastIndexOf",t)},map(t,e){return wn(this,"map",t,e,void 0,arguments)},pop(){return ai(this,"pop")},push(...t){return ai(this,"push",t)},reduce(t,...e){return Uh(this,"reduce",t,e)},reduceRight(t,...e){return Uh(this,"reduceRight",t,e)},shift(){return ai(this,"shift")},some(t,e){return wn(this,"some",t,e,void 0,arguments)},splice(...t){return ai(this,"splice",t)},toReversed(){return as(this).toReversed()},toSorted(t){return as(this).toSorted(t)},toSpliced(...t){return as(this).toSpliced(...t)},unshift(...t){return ai(this,"unshift",t)},values(){return Tc(this,"values",ct)}};function Tc(t,e,n){const r=Na(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Uy=Array.prototype;function wn(t,e,n,r,s,i){const o=Na(t),c=o!==t&&!jt(t),l=o[e];if(l!==Uy[e]){const p=l.apply(t,i);return c?ct(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,ct(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Uh(t,e,n,r){const s=Na(t);let i=n;return s!==t&&(jt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ct(c),l,t)}),s[e](i,...r)}function Ic(t,e,n){const r=Ae(t);yt(r,"iterate",xi);const s=r[e](...n);return(s===-1||s===!1)&&ql(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function ai(t,e,n=[]){On(),Ul();const r=Ae(t)[e].apply(t,n);return Fl(),xn(),r}const Fy=Vl("__proto__,__v_isRef,__isVue"),Ap=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mn));function By(t){mn(t)||(t=String(t));const e=Ae(this);return yt(e,"has",t),e.hasOwnProperty(t)}class Rp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Yy:kp:i?Pp:Cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let l;if(o&&(l=Ly[n]))return l;if(n==="hasOwnProperty")return By}const c=Reflect.get(e,n,We(e)?e:r);if((mn(n)?Ap.has(n):Fy(n))||(s||yt(e,"get",n),i))return c;if(We(c)){const l=o&&Ml(n)?c:c.value;return s&&Ve(l)?Qc(l):l}return Ve(c)?s?Qc(c):to(c):c}}class Sp extends Rp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=yr(i);if(!jt(r)&&!yr(r)&&(i=Ae(i),r=Ae(r)),!ae(e)&&We(i)&&!We(r))return l||(i.value=r),!0}const o=ae(e)&&Ml(n)?Number(n)<e.length:Ce(e,n),c=Reflect.set(e,n,r,We(e)?e:s);return e===Ae(s)&&(o?lr(r,i)&&bn(e,"set",n,r):bn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!mn(n)||!Ap.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ae(e)?"length":Br),Reflect.ownKeys(e)}}class jy extends Rp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $y=new Sp,Hy=new jy,qy=new Sp(!0);const Kc=t=>t,So=t=>Reflect.getPrototypeOf(t);function zy(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=_s(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Kc:e?Zo:ct;return!e&&yt(i,"iterate",l?Gc:Br),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Co(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Wy(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(lr(s,c)&&yt(o,"get",s),yt(o,"get",c));const{has:l}=So(o),u=e?Kc:t?Zo:ct;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(Ae(s),"iterate",Br),s.size},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(lr(s,c)&&yt(o,"has",s),yt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),u=e?Kc:t?Zo:ct;return!t&&yt(l,"iterate",Br),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return wt(n,t?{add:Co("add"),set:Co("set"),delete:Co("delete"),clear:Co("clear")}:{add(s){!e&&!jt(s)&&!yr(s)&&(s=Ae(s));const i=Ae(this);return So(i).has.call(i,s)||(i.add(s),bn(i,"add",s,s)),this},set(s,i){!e&&!jt(i)&&!yr(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=So(o);let u=c.call(o,s);u||(s=Ae(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?lr(i,f)&&bn(o,"set",s,i):bn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=So(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&bn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=zy(s,t,e)}),n}function $l(t,e){const n=Wy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const Gy={get:$l(!1,!1)},Ky={get:$l(!1,!0)},Qy={get:$l(!0,!1)};const Cp=new WeakMap,Pp=new WeakMap,kp=new WeakMap,Yy=new WeakMap;function Jy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xy(t){return t.__v_skip||!Object.isExtensible(t)?0:Jy(Iy(t))}function to(t){return yr(t)?t:Hl(t,!1,$y,Gy,Cp)}function Dp(t){return Hl(t,!1,qy,Ky,Pp)}function Qc(t){return Hl(t,!0,Hy,Qy,kp)}function Hl(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Xy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function ur(t){return yr(t)?ur(t.__v_raw):!!(t&&t.__v_isReactive)}function yr(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function ql(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function zl(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&up(t,"__v_skip",!0),t}const ct=t=>Ve(t)?to(t):t,Zo=t=>Ve(t)?Qc(t):t;function We(t){return t?t.__v_isRef===!0:!1}function ve(t){return Np(t,!1)}function Zy(t){return Np(t,!0)}function Np(t,e){return We(t)?t:new ev(t,e)}class ev{constructor(e,n){this.dep=new jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||yr(e);e=r?e:Ae(e),lr(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function jr(t){return We(t)?t.value:t}const tv={get:(t,e,n)=>e==="__v_raw"?t:jr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return We(s)&&!We(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vp(t){return ur(t)?t:new Proxy(t,tv)}function nv(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=sv(t,n);return e}class rv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return My(Ae(this._object),this._key)}}function sv(t,e,n){const r=t[e];return We(r)?r:new rv(t,e,n)}class iv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return vp(this,!0),!0}get value(){const e=this.dep.track();return Tp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ov(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new iv(r,s,n)}const Po={},ea=new WeakMap;let Mr;function av(t,e=!1,n=Mr){if(n){let r=ea.get(n);r||ea.set(n,r=[]),r.push(t)}}function cv(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=P=>s?P:jt(P)||s===!1||s===0?An(P,1):An(P);let f,p,m,y,D=!1,V=!1;if(We(t)?(p=()=>t.value,D=jt(t)):ur(t)?(p=()=>u(t),D=!0):ae(t)?(V=!0,D=t.some(P=>ur(P)||jt(P)),p=()=>t.map(P=>{if(We(P))return P.value;if(ur(P))return u(P);if(de(P))return l?l(P,2):P()})):de(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){On();try{m()}finally{xn()}}const P=Mr;Mr=f;try{return l?l(t,3,[y]):t(y)}finally{Mr=P}}:p=ln,e&&s){const P=p,G=s===!0?1/0:s;p=()=>An(P(),G)}const O=gp(),H=()=>{f.stop(),O&&O.active&&xl(O.effects,f)};if(i&&e){const P=e;e=(...G)=>{P(...G),H()}}let U=V?new Array(t.length).fill(Po):Po;const k=P=>{if(!(!(f.flags&1)||!f.dirty&&!P))if(e){const G=f.run();if(s||D||(V?G.some((ee,T)=>lr(ee,U[T])):lr(G,U))){m&&m();const ee=Mr;Mr=f;try{const T=[G,U===Po?void 0:V&&U[0]===Po?[]:U,y];U=G,l?l(e,3,T):e(...T)}finally{Mr=ee}}}else f.run()};return c&&c(k),f=new _p(p),f.scheduler=o?()=>o(k,!1):k,y=P=>av(P,!1,f),m=f.onStop=()=>{const P=ea.get(f);if(P){if(l)l(P,4);else for(const G of P)G();ea.delete(f)}},e?r?k(!0):U=f.run():o?o(k.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function An(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,We(t))An(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)An(t[r],e,n);else if(Us(t)||_s(t))t.forEach(r=>{An(r,e,n)});else if(lp(t)){for(const r in t)An(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&An(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(t,e,n,r){try{return r?t(...r):t()}catch(s){Va(s,e,n)}}function gn(t,e,n,r){if(de(t)){const s=no(t,e,n,r);return s&&ap(s)&&s.catch(i=>{Va(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(gn(t[i],e,n,r));return s}}function Va(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){On(),no(i,null,10,[t,l,u]),xn();return}}lv(t,n,s,r,o)}function lv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let on=-1;const ys=[];let tr=null,ls=0;const Op=Promise.resolve();let ta=null;function Oa(t){const e=ta||Op;return t?e.then(this?t.bind(this):t):e}function uv(t){let e=on+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Mi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Wl(t){if(!(t.flags&1)){const e=Mi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Mi(n)?Rt.push(t):Rt.splice(uv(e),0,t),t.flags|=1,xp()}}function xp(){ta||(ta=Op.then(Lp))}function hv(t){ae(t)?ys.push(...t):tr&&t.id===-1?tr.splice(ls+1,0,t):t.flags&1||(ys.push(t),t.flags|=1),xp()}function Fh(t,e,n=on+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Mp(t){if(ys.length){const e=[...new Set(ys)].sort((n,r)=>Mi(n)-Mi(r));if(ys.length=0,tr){tr.push(...e);return}for(tr=e,ls=0;ls<tr.length;ls++){const n=tr[ls];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}tr=null,ls=0}}const Mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Lp(t){try{for(on=0;on<Rt.length;on++){const e=Rt[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),no(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<Rt.length;on++){const e=Rt[on];e&&(e.flags&=-2)}on=-1,Rt.length=0,Mp(),ta=null,(Rt.length||ys.length)&&Lp()}}let Mt=null,Up=null;function na(t){const e=Mt;return Mt=t,Up=t&&t.type.__scopeId||null,e}function fv(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ia(-1);const i=na(e);let o;try{o=t(...s)}finally{na(i),r._d&&ia(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ut(t,e){if(Mt===null)return t;const n=Ua(Mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&An(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Or(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(On(),gn(l,n,8,[t.el,c,t,e]),xn())}}const dv=Symbol("_vte"),pv=t=>t.__isTeleport,mv=Symbol("_leaveCb");function Gl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fp(t,e){return de(t)?wt({name:t.name},e,{setup:t}):t}function Bp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ra=new WeakMap;function Ei(t,e,n,r,s=!1){if(ae(t)){t.forEach((D,V)=>Ei(D,e&&(ae(e)?e[V]:e),n,r,s));return}if(wi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ei(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ua(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,p=c.setupState,m=Ae(p),y=p===Ne?op:D=>Ce(m,D);if(u!=null&&u!==l){if(Bh(e),Ye(u))f[u]=null,y(u)&&(p[u]=null);else if(We(u)){u.value=null;const D=e;D.k&&(f[D.k]=null)}}if(de(l))no(l,c,12,[o,f]);else{const D=Ye(l),V=We(l);if(D||V){const O=()=>{if(t.f){const H=D?y(l)?p[l]:f[l]:l.value;if(s)ae(H)&&xl(H,i);else if(ae(H))H.includes(i)||H.push(i);else if(D)f[l]=[i],y(l)&&(p[l]=f[l]);else{const U=[i];l.value=U,t.k&&(f[t.k]=U)}}else D?(f[l]=o,y(l)&&(p[l]=o)):V&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const H=()=>{O(),ra.delete(t)};H.id=-1,ra.set(t,H),Ot(H,n)}else Bh(t),O()}}}function Bh(t){const e=ra.get(t);e&&(e.flags|=8,ra.delete(t))}Da().requestIdleCallback;Da().cancelIdleCallback;const wi=t=>!!t.type.__asyncLoader,jp=t=>t.type.__isKeepAlive;function gv(t,e){$p(t,"a",e)}function _v(t,e){$p(t,"da",e)}function $p(t,e,n=Et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jp(s.parent.vnode)&&yv(r,e,n,s),s=s.parent}}function yv(t,e,n,r){const s=xa(e,t,r,!0);Hp(()=>{xl(r[e],s)},n)}function xa(t,e,n=Et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{On();const c=ro(n),l=gn(e,n,t,o);return c(),xn(),l});return r?s.unshift(i):s.push(i),i}}const Bn=t=>(e,n=Et)=>{(!Ui||t==="sp")&&xa(t,(...r)=>e(...r),n)},vv=Bn("bm"),Sr=Bn("m"),Ev=Bn("bu"),wv=Bn("u"),Tv=Bn("bum"),Hp=Bn("um"),Iv=Bn("sp"),bv=Bn("rtg"),Av=Bn("rtc");function Rv(t,e=Et){xa("ec",t,e)}const Sv="components";function Cv(t,e){return kv(Sv,t,!0,e)||t}const Pv=Symbol.for("v-ndc");function kv(t,e,n=!0,r=!1){const s=Mt||Et;if(s){const i=s.type;{const c=yE(i,!1);if(c&&(c===e||c===Ht(e)||c===ka(Ht(e))))return i}const o=jh(s[t]||i[t],e)||jh(s.appContext[t],e);return!o&&r?i:o}}function jh(t,e){return t&&(t[e]||t[Ht(e)]||t[ka(Ht(e))])}function _n(t,e,n,r){let s;const i=n,o=ae(t);if(o||Ye(t)){const c=o&&ur(t);let l=!1,u=!1;c&&(l=!jt(t),u=yr(t),t=Na(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Zo(ct(t[f])):ct(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Yc=t=>t?um(t)?Ua(t):Yc(t.parent):null,Ti=wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yc(t.parent),$root:t=>Yc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zp(t),$forceUpdate:t=>t.f||(t.f=()=>{Wl(t.update)}),$nextTick:t=>t.n||(t.n=Oa.bind(t.proxy)),$watch:t=>Xv.bind(t)}),bc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Ce(t,e),Dv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(bc(r,e))return o[e]=1,r[e];if(s!==Ne&&Ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,i[e];if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];Jc&&(o[e]=0)}}const f=Ti[e];let p,m;if(f)return e==="$attrs"&&yt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ce(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return bc(s,e)?(s[e]=n,!0):r!==Ne&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Ce(t,c)||bc(e,c)||(l=i[0])&&Ce(l,c)||Ce(r,c)||Ce(Ti,c)||Ce(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $h(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jc=!0;function Nv(t){const e=zp(t),n=t.proxy,r=t.ctx;Jc=!1,e.beforeCreate&&Hh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:D,activated:V,deactivated:O,beforeDestroy:H,beforeUnmount:U,destroyed:k,unmounted:P,render:G,renderTracked:ee,renderTriggered:T,errorCaptured:_,serverPrefetch:v,expose:A,inheritAttrs:b,components:R,directives:w,filters:je}=e;if(u&&Vv(u,r,null),o)for(const fe in o){const Te=o[fe];de(Te)&&(r[fe]=Te.bind(n))}if(s){const fe=s.call(n,n);Ve(fe)&&(t.data=to(fe))}if(Jc=!0,i)for(const fe in i){const Te=i[fe],St=de(Te)?Te.bind(n,n):de(Te.get)?Te.get.bind(n,n):ln,tn=!de(Te)&&de(Te.set)?Te.set.bind(n):ln,kt=Ue({get:St,set:tn});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>kt.value,set:it=>kt.value=it})}if(c)for(const fe in c)qp(c[fe],r,n,fe);if(l){const fe=de(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(Te=>{Uo(Te,fe[Te])})}f&&Hh(f,t,"c");function Oe(fe,Te){ae(Te)?Te.forEach(St=>fe(St.bind(n))):Te&&fe(Te.bind(n))}if(Oe(vv,p),Oe(Sr,m),Oe(Ev,y),Oe(wv,D),Oe(gv,V),Oe(_v,O),Oe(Rv,_),Oe(Av,ee),Oe(bv,T),Oe(Tv,U),Oe(Hp,P),Oe(Iv,v),ae(A))if(A.length){const fe=t.exposed||(t.exposed={});A.forEach(Te=>{Object.defineProperty(fe,Te,{get:()=>n[Te],set:St=>n[Te]=St,enumerable:!0})})}else t.exposed||(t.exposed={});G&&t.render===ln&&(t.render=G),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),w&&(t.directives=w),v&&Bp(t)}function Vv(t,e,n=ln){ae(t)&&(t=Xc(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=Xt(s.from||r,s.default,!0):i=Xt(s.from||r):i=Xt(s),We(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Hh(t,e,n){gn(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qp(t,e,n,r){let s=r.includes(".")?sm(n,r):()=>n[r];if(Ye(t)){const i=e[t];de(i)&&vs(s,i)}else if(de(t))vs(s,t.bind(n));else if(Ve(t))if(ae(t))t.forEach(i=>qp(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&vs(s,i,t)}}function zp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>sa(l,u,o,!0)),sa(l,e,o)),Ve(e)&&i.set(e,l),l}function sa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&sa(t,i,n,!0),s&&s.forEach(o=>sa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Ov[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Ov={data:qh,props:zh,emits:zh,methods:ui,computed:ui,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:ui,directives:ui,watch:Mv,provide:qh,inject:xv};function qh(t,e){return e?t?function(){return wt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function xv(t,e){return ui(Xc(t),Xc(e))}function Xc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function ui(t,e){return t?wt(Object.create(null),t,e):e}function zh(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:wt(Object.create(null),$h(t),$h(e??{})):e}function Mv(t,e){if(!t)return e;if(!e)return t;const n=wt(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function Wp(){return{app:null,config:{isNativeTag:op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lv=0;function Uv(t,e){return function(r,s=null){de(r)||(r=wt({},r)),s!=null&&!Ve(s)&&(s=null);const i=Wp(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Lv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:EE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&de(f.install)?(o.add(f),f.install(u,...p)):de(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const y=u._ceVNode||Pt(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),l=!0,u._container=f,f.__vue_app__=u,Ua(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(gn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=$r;$r=u;try{return f()}finally{$r=p}}};return u}}let $r=null;function Uo(t,e){if(Et){let n=Et.provides;const r=Et.parent&&Et.parent.provides;r===n&&(n=Et.provides=Object.create(r)),n[t]=e}}function Xt(t,e,n=!1){const r=lm();if(r||$r){let s=$r?$r._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function Fv(){return!!(lm()||$r)}const Gp={},Kp=()=>Object.create(Gp),Qp=t=>Object.getPrototypeOf(t)===Gp;function Bv(t,e,n,r=!1){const s={},i=Kp();t.propsDefaults=Object.create(null),Yp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Dp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ma(t.emitsOptions,m))continue;const y=e[m];if(l)if(Ce(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const D=Ht(m);s[D]=Zc(l,c,D,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{Yp(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Ce(e,p)&&((f=Xr(p))===p||!Ce(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Zc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ce(e,p))&&(delete i[p],u=!0)}u&&bn(t.attrs,"set","")}function Yp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(_i(l))continue;const u=e[l];let f;s&&Ce(s,f=Ht(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ma(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=c||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Zc(s,l,p,u[p],t,!Ce(u,p))}}return o}function Zc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ce(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=ro(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Xr(n))&&(r=!0))}return r}const $v=new WeakMap;function Jp(t,e,n=!1){const r=n?$v:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const f=p=>{l=!0;const[m,y]=Jp(p,e,!0);wt(o,m),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ve(t)&&r.set(t,gs),gs;if(ae(i))for(let f=0;f<i.length;f++){const p=Ht(i[f]);Wh(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=Ht(f);if(Wh(p)){const m=i[f],y=o[p]=ae(m)||de(m)?{type:m}:wt({},m),D=y.type;let V=!1,O=!0;if(ae(D))for(let H=0;H<D.length;++H){const U=D[H],k=de(U)&&U.name;if(k==="Boolean"){V=!0;break}else k==="String"&&(O=!1)}else V=de(D)&&D.name==="Boolean";y[0]=V,y[1]=O,(V||Ce(y,"default"))&&c.push(p)}}const u=[o,c];return Ve(t)&&r.set(t,u),u}function Wh(t){return t[0]!=="$"&&!_i(t)}const Kl=t=>t==="_"||t==="_ctx"||t==="$stable",Ql=t=>ae(t)?t.map(cn):[cn(t)],Hv=(t,e,n)=>{if(e._n)return e;const r=fv((...s)=>Ql(e(...s)),n);return r._c=!1,r},Xp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kl(s))continue;const i=t[s];if(de(i))e[s]=Hv(s,i,r);else if(i!=null){const o=Ql(i);e[s]=()=>o}}},Zp=(t,e)=>{const n=Ql(e);t.slots.default=()=>n},em=(t,e,n)=>{for(const r in e)(n||!Kl(r))&&(t[r]=e[r])},qv=(t,e,n)=>{const r=t.slots=Kp();if(t.vnode.shapeFlag&32){const s=e._;s?(em(r,e,n),n&&up(r,"_",s,!0)):Xp(e,r)}else e&&Zp(t,e)},zv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:em(s,e,n):(i=!e.$stable,Xp(e,s)),o=e}else e&&(Zp(t,e),o={default:1});if(i)for(const c in s)!Kl(c)&&o[c]==null&&delete s[c]},Ot=oE;function Wv(t){return Gv(t)}function Gv(t,e){const n=Da();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=ln,insertStaticContent:D}=t,V=(E,I,S,F=null,j=null,x=null,Q=void 0,W=null,q=!!I.dynamicChildren)=>{if(E===I)return;E&&!ci(E,I)&&(F=L(E),it(E,j,x,!0),E=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:z,ref:se,shapeFlag:J}=I;switch(z){case La:O(E,I,S,F);break;case vr:H(E,I,S,F);break;case Rc:E==null&&U(I,S,F,Q);break;case qe:R(E,I,S,F,j,x,Q,W,q);break;default:J&1?G(E,I,S,F,j,x,Q,W,q):J&6?w(E,I,S,F,j,x,Q,W,q):(J&64||J&128)&&z.process(E,I,S,F,j,x,Q,W,q,ne)}se!=null&&j?Ei(se,E&&E.ref,x,I||E,!I):se==null&&E&&E.ref!=null&&Ei(E.ref,null,x,E,!0)},O=(E,I,S,F)=>{if(E==null)r(I.el=c(I.children),S,F);else{const j=I.el=E.el;I.children!==E.children&&u(j,I.children)}},H=(E,I,S,F)=>{E==null?r(I.el=l(I.children||""),S,F):I.el=E.el},U=(E,I,S,F)=>{[E.el,E.anchor]=D(E.children,I,S,F,E.el,E.anchor)},k=({el:E,anchor:I},S,F)=>{let j;for(;E&&E!==I;)j=m(E),r(E,S,F),E=j;r(I,S,F)},P=({el:E,anchor:I})=>{let S;for(;E&&E!==I;)S=m(E),s(E),E=S;s(I)},G=(E,I,S,F,j,x,Q,W,q)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),E==null?ee(I,S,F,j,x,Q,W,q):v(E,I,j,x,Q,W,q)},ee=(E,I,S,F,j,x,Q,W)=>{let q,z;const{props:se,shapeFlag:J,transition:re,dirs:oe}=E;if(q=E.el=o(E.type,x,se&&se.is,se),J&8?f(q,E.children):J&16&&_(E.children,q,null,F,j,Ac(E,x),Q,W),oe&&Or(E,null,F,"created"),T(q,E,E.scopeId,Q,F),se){for(const ke in se)ke!=="value"&&!_i(ke)&&i(q,ke,null,se[ke],x,F);"value"in se&&i(q,"value",null,se.value,x),(z=se.onVnodeBeforeMount)&&sn(z,F,E)}oe&&Or(E,null,F,"beforeMount");const ge=Kv(j,re);ge&&re.beforeEnter(q),r(q,I,S),((z=se&&se.onVnodeMounted)||ge||oe)&&Ot(()=>{z&&sn(z,F,E),ge&&re.enter(q),oe&&Or(E,null,F,"mounted")},j)},T=(E,I,S,F,j)=>{if(S&&y(E,S),F)for(let x=0;x<F.length;x++)y(E,F[x]);if(j){let x=j.subTree;if(I===x||om(x.type)&&(x.ssContent===I||x.ssFallback===I)){const Q=j.vnode;T(E,Q,Q.scopeId,Q.slotScopeIds,j.parent)}}},_=(E,I,S,F,j,x,Q,W,q=0)=>{for(let z=q;z<E.length;z++){const se=E[z]=W?nr(E[z]):cn(E[z]);V(null,se,I,S,F,j,x,Q,W)}},v=(E,I,S,F,j,x,Q)=>{const W=I.el=E.el;let{patchFlag:q,dynamicChildren:z,dirs:se}=I;q|=E.patchFlag&16;const J=E.props||Ne,re=I.props||Ne;let oe;if(S&&xr(S,!1),(oe=re.onVnodeBeforeUpdate)&&sn(oe,S,I,E),se&&Or(I,E,S,"beforeUpdate"),S&&xr(S,!0),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&f(W,""),z?A(E.dynamicChildren,z,W,S,F,Ac(I,j),x):Q||Te(E,I,W,null,S,F,Ac(I,j),x,!1),q>0){if(q&16)b(W,J,re,S,j);else if(q&2&&J.class!==re.class&&i(W,"class",null,re.class,j),q&4&&i(W,"style",J.style,re.style,j),q&8){const ge=I.dynamicProps;for(let ke=0;ke<ge.length;ke++){const be=ge[ke],dt=J[be],pt=re[be];(pt!==dt||be==="value")&&i(W,be,dt,pt,j,S)}}q&1&&E.children!==I.children&&f(W,I.children)}else!Q&&z==null&&b(W,J,re,S,j);((oe=re.onVnodeUpdated)||se)&&Ot(()=>{oe&&sn(oe,S,I,E),se&&Or(I,E,S,"updated")},F)},A=(E,I,S,F,j,x,Q)=>{for(let W=0;W<I.length;W++){const q=E[W],z=I[W],se=q.el&&(q.type===qe||!ci(q,z)||q.shapeFlag&198)?p(q.el):S;V(q,z,se,null,F,j,x,Q,!0)}},b=(E,I,S,F,j)=>{if(I!==S){if(I!==Ne)for(const x in I)!_i(x)&&!(x in S)&&i(E,x,I[x],null,j,F);for(const x in S){if(_i(x))continue;const Q=S[x],W=I[x];Q!==W&&x!=="value"&&i(E,x,W,Q,j,F)}"value"in S&&i(E,"value",I.value,S.value,j)}},R=(E,I,S,F,j,x,Q,W,q)=>{const z=I.el=E?E.el:c(""),se=I.anchor=E?E.anchor:c("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:oe}=I;oe&&(W=W?W.concat(oe):oe),E==null?(r(z,S,F),r(se,S,F),_(I.children||[],S,se,j,x,Q,W,q)):J>0&&J&64&&re&&E.dynamicChildren?(A(E.dynamicChildren,re,S,j,x,Q,W),(I.key!=null||j&&I===j.subTree)&&tm(E,I,!0)):Te(E,I,S,se,j,x,Q,W,q)},w=(E,I,S,F,j,x,Q,W,q)=>{I.slotScopeIds=W,E==null?I.shapeFlag&512?j.ctx.activate(I,S,F,Q,q):je(I,S,F,j,x,Q,q):ht(E,I,q)},je=(E,I,S,F,j,x,Q)=>{const W=E.component=dE(E,F,j);if(jp(E)&&(W.ctx.renderer=ne),pE(W,!1,Q),W.asyncDep){if(j&&j.registerDep(W,Oe,Q),!E.el){const q=W.subTree=Pt(vr);H(null,q,I,S),E.placeholder=q.el}}else Oe(W,E,I,S,j,x,Q)},ht=(E,I,S)=>{const F=I.component=E.component;if(sE(E,I,S))if(F.asyncDep&&!F.asyncResolved){fe(F,I,S);return}else F.next=I,F.update();else I.el=E.el,F.vnode=I},Oe=(E,I,S,F,j,x,Q)=>{const W=()=>{if(E.isMounted){let{next:J,bu:re,u:oe,parent:ge,vnode:ke}=E;{const Nt=nm(E);if(Nt){J&&(J.el=ke.el,fe(E,J,Q)),Nt.asyncDep.then(()=>{E.isUnmounted||W()});return}}let be=J,dt;xr(E,!1),J?(J.el=ke.el,fe(E,J,Q)):J=ke,re&&Lo(re),(dt=J.props&&J.props.onVnodeBeforeUpdate)&&sn(dt,ge,J,ke),xr(E,!0);const pt=Kh(E),Dt=E.subTree;E.subTree=pt,V(Dt,pt,p(Dt.el),L(Dt),E,j,x),J.el=pt.el,be===null&&iE(E,pt.el),oe&&Ot(oe,j),(dt=J.props&&J.props.onVnodeUpdated)&&Ot(()=>sn(dt,ge,J,ke),j)}else{let J;const{el:re,props:oe}=I,{bm:ge,m:ke,parent:be,root:dt,type:pt}=E,Dt=wi(I);xr(E,!1),ge&&Lo(ge),!Dt&&(J=oe&&oe.onVnodeBeforeMount)&&sn(J,be,I),xr(E,!0);{dt.ce&&dt.ce._def.shadowRoot!==!1&&dt.ce._injectChildStyle(pt);const Nt=E.subTree=Kh(E);V(null,Nt,S,F,E,j,x),I.el=Nt.el}if(ke&&Ot(ke,j),!Dt&&(J=oe&&oe.onVnodeMounted)){const Nt=I;Ot(()=>sn(J,be,Nt),j)}(I.shapeFlag&256||be&&wi(be.vnode)&&be.vnode.shapeFlag&256)&&E.a&&Ot(E.a,j),E.isMounted=!0,I=S=F=null}};E.scope.on();const q=E.effect=new _p(W);E.scope.off();const z=E.update=q.run.bind(q),se=E.job=q.runIfDirty.bind(q);se.i=E,se.id=E.uid,q.scheduler=()=>Wl(se),xr(E,!0),z()},fe=(E,I,S)=>{I.component=E;const F=E.vnode.props;E.vnode=I,E.next=null,jv(E,I.props,F,S),zv(E,I.children,S),On(),Fh(E),xn()},Te=(E,I,S,F,j,x,Q,W,q=!1)=>{const z=E&&E.children,se=E?E.shapeFlag:0,J=I.children,{patchFlag:re,shapeFlag:oe}=I;if(re>0){if(re&128){tn(z,J,S,F,j,x,Q,W,q);return}else if(re&256){St(z,J,S,F,j,x,Q,W,q);return}}oe&8?(se&16&&ft(z,j,x),J!==z&&f(S,J)):se&16?oe&16?tn(z,J,S,F,j,x,Q,W,q):ft(z,j,x,!0):(se&8&&f(S,""),oe&16&&_(J,S,F,j,x,Q,W,q))},St=(E,I,S,F,j,x,Q,W,q)=>{E=E||gs,I=I||gs;const z=E.length,se=I.length,J=Math.min(z,se);let re;for(re=0;re<J;re++){const oe=I[re]=q?nr(I[re]):cn(I[re]);V(E[re],oe,S,null,j,x,Q,W,q)}z>se?ft(E,j,x,!0,!1,J):_(I,S,F,j,x,Q,W,q,J)},tn=(E,I,S,F,j,x,Q,W,q)=>{let z=0;const se=I.length;let J=E.length-1,re=se-1;for(;z<=J&&z<=re;){const oe=E[z],ge=I[z]=q?nr(I[z]):cn(I[z]);if(ci(oe,ge))V(oe,ge,S,null,j,x,Q,W,q);else break;z++}for(;z<=J&&z<=re;){const oe=E[J],ge=I[re]=q?nr(I[re]):cn(I[re]);if(ci(oe,ge))V(oe,ge,S,null,j,x,Q,W,q);else break;J--,re--}if(z>J){if(z<=re){const oe=re+1,ge=oe<se?I[oe].el:F;for(;z<=re;)V(null,I[z]=q?nr(I[z]):cn(I[z]),S,ge,j,x,Q,W,q),z++}}else if(z>re)for(;z<=J;)it(E[z],j,x,!0),z++;else{const oe=z,ge=z,ke=new Map;for(z=ge;z<=re;z++){const ot=I[z]=q?nr(I[z]):cn(I[z]);ot.key!=null&&ke.set(ot.key,z)}let be,dt=0;const pt=re-ge+1;let Dt=!1,Nt=0;const Kt=new Array(pt);for(z=0;z<pt;z++)Kt[z]=0;for(z=oe;z<=J;z++){const ot=E[z];if(dt>=pt){it(ot,j,x,!0);continue}let tt;if(ot.key!=null)tt=ke.get(ot.key);else for(be=ge;be<=re;be++)if(Kt[be-ge]===0&&ci(ot,I[be])){tt=be;break}tt===void 0?it(ot,j,x,!0):(Kt[tt-ge]=z+1,tt>=Nt?Nt=tt:Dt=!0,V(ot,I[tt],S,null,j,x,Q,W,q),dt++)}const rs=Dt?Qv(Kt):gs;for(be=rs.length-1,z=pt-1;z>=0;z--){const ot=ge+z,tt=I[ot],Ws=I[ot+1],Pr=ot+1<se?Ws.el||Ws.placeholder:F;Kt[z]===0?V(null,tt,S,Pr,j,x,Q,W,q):Dt&&(be<0||z!==rs[be]?kt(tt,S,Pr,2):be--)}}},kt=(E,I,S,F,j=null)=>{const{el:x,type:Q,transition:W,children:q,shapeFlag:z}=E;if(z&6){kt(E.component.subTree,I,S,F);return}if(z&128){E.suspense.move(I,S,F);return}if(z&64){Q.move(E,I,S,ne);return}if(Q===qe){r(x,I,S);for(let J=0;J<q.length;J++)kt(q[J],I,S,F);r(E.anchor,I,S);return}if(Q===Rc){k(E,I,S);return}if(F!==2&&z&1&&W)if(F===0)W.beforeEnter(x),r(x,I,S),Ot(()=>W.enter(x),j);else{const{leave:J,delayLeave:re,afterLeave:oe}=W,ge=()=>{E.ctx.isUnmounted?s(x):r(x,I,S)},ke=()=>{x._isLeaving&&x[mv](!0),J(x,()=>{ge(),oe&&oe()})};re?re(x,ge,ke):ke()}else r(x,I,S)},it=(E,I,S,F=!1,j=!1)=>{const{type:x,props:Q,ref:W,children:q,dynamicChildren:z,shapeFlag:se,patchFlag:J,dirs:re,cacheIndex:oe}=E;if(J===-2&&(j=!1),W!=null&&(On(),Ei(W,null,S,E,!0),xn()),oe!=null&&(I.renderCache[oe]=void 0),se&256){I.ctx.deactivate(E);return}const ge=se&1&&re,ke=!wi(E);let be;if(ke&&(be=Q&&Q.onVnodeBeforeUnmount)&&sn(be,I,E),se&6)Gt(E.component,S,F);else{if(se&128){E.suspense.unmount(S,F);return}ge&&Or(E,null,I,"beforeUnmount"),se&64?E.type.remove(E,I,S,ne,F):z&&!z.hasOnce&&(x!==qe||J>0&&J&64)?ft(z,I,S,!1,!0):(x===qe&&J&384||!j&&se&16)&&ft(q,I,S),F&&En(E)}(ke&&(be=Q&&Q.onVnodeUnmounted)||ge)&&Ot(()=>{be&&sn(be,I,E),ge&&Or(E,null,I,"unmounted")},S)},En=E=>{const{type:I,el:S,anchor:F,transition:j}=E;if(I===qe){Wt(S,F);return}if(I===Rc){P(E);return}const x=()=>{s(S),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(E.shapeFlag&1&&j&&!j.persisted){const{leave:Q,delayLeave:W}=j,q=()=>Q(S,x);W?W(E.el,x,q):q()}else x()},Wt=(E,I)=>{let S;for(;E!==I;)S=m(E),s(E),E=S;s(I)},Gt=(E,I,S)=>{const{bum:F,scope:j,job:x,subTree:Q,um:W,m:q,a:z}=E;Gh(q),Gh(z),F&&Lo(F),j.stop(),x&&(x.flags|=8,it(Q,E,I,S)),W&&Ot(W,I),Ot(()=>{E.isUnmounted=!0},I)},ft=(E,I,S,F=!1,j=!1,x=0)=>{for(let Q=x;Q<E.length;Q++)it(E[Q],I,S,F,j)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),S=I&&I[dv];return S?m(S):I};let X=!1;const Y=(E,I,S)=>{E==null?I._vnode&&it(I._vnode,null,null,!0):V(I._vnode||null,E,I,null,null,null,S),I._vnode=E,X||(X=!0,Fh(),Mp(),X=!1)},ne={p:V,um:it,m:kt,r:En,mt:je,mc:_,pc:Te,pbc:A,n:L,o:t};return{render:Y,hydrate:void 0,createApp:Uv(Y)}}function Ac({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Kv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function tm(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=nr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&tm(o,c)),c.type===La&&c.patchFlag!==-1&&(c.el=o.el),c.type===vr&&!c.el&&(c.el=o.el)}}function Qv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function nm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:nm(e)}function Gh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Yv=Symbol.for("v-scx"),Jv=()=>Xt(Yv);function vs(t,e,n){return rm(t,e,n)}function rm(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=wt({},n),l=e&&r||!e&&i!=="post";let u;if(Ui){if(i==="sync"){const y=Jv();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=ln,y.resume=ln,y.pause=ln,y}}const f=Et;c.call=(y,D,V)=>gn(y,f,D,V);let p=!1;i==="post"?c.scheduler=y=>{Ot(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,D)=>{D?y():Wl(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=cv(t,e,c);return Ui&&(u?u.push(m):l&&m()),m}function Xv(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?sm(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=ro(this),c=rm(s,i.bind(r),n);return o(),c}function sm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Zv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${Xr(e)}Modifiers`];function eE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&Zv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ye(f)?f.trim():f)),o.number&&(s=n.map(Jo)));let c,l=r[c=vc(e)]||r[c=vc(Ht(e))];!l&&i&&(l=r[c=vc(Xr(e))]),l&&gn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,gn(u,t,6,s)}}const tE=new WeakMap;function im(t,e,n=!1){const r=n?tE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=u=>{const f=im(u,e,!0);f&&(c=!0,wt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(ae(i)?i.forEach(l=>o[l]=null):wt(o,i),Ve(t)&&r.set(t,o),o)}function Ma(t,e){return!t||!Ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Xr(e))||Ce(t,e))}function Kh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:y,ctx:D,inheritAttrs:V}=t,O=na(t);let H,U;try{if(n.shapeFlag&4){const P=s||r,G=P;H=cn(u.call(G,P,f,p,y,m,D)),U=c}else{const P=e;H=cn(P.length>1?P(p,{attrs:c,slots:o,emit:l}):P(p,null)),U=e.props?c:nE(c)}}catch(P){Ii.length=0,Va(P,t,1),H=Pt(vr)}let k=H;if(U&&V!==!1){const P=Object.keys(U),{shapeFlag:G}=k;P.length&&G&7&&(i&&P.some(Ol)&&(U=rE(U,i)),k=bs(k,U,!1,!0))}return n.dirs&&(k=bs(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&Gl(k,n.transition),H=k,na(O),H}const nE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ca(n))&&((e||(e={}))[n]=t[n]);return e},rE=(t,e)=>{const n={};for(const r in t)(!Ol(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qh(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Ma(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Qh(r,o,u):!0:!!o;return!1}function Qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ma(n,i))return!0}return!1}function iE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const om=t=>t.__isSuspense;function oE(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):hv(t)}const qe=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),vr=Symbol.for("v-cmt"),Rc=Symbol.for("v-stc"),Ii=[];let Lt=null;function me(t=!1){Ii.push(Lt=t?null:[])}function aE(){Ii.pop(),Lt=Ii[Ii.length-1]||null}let Li=1;function ia(t,e=!1){Li+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function am(t){return t.dynamicChildren=Li>0?Lt||gs:null,aE(),Li>0&&Lt&&Lt.push(t),t}function Re(t,e,n,r,s,i){return am(M(t,e,n,r,s,i,!0))}function kn(t,e,n,r,s){return am(Pt(t,e,n,r,s,!0))}function oa(t){return t?t.__v_isVNode===!0:!1}function ci(t,e){return t.type===e.type&&t.key===e.key}const cm=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||We(t)||de(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,r=0,s=null,i=t===qe?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cm(e),ref:e&&Fo(e),scopeId:Up,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return c?(Yl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ye(n)?8:16),Li>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const Pt=cE;function cE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Pv)&&(t=vr),oa(t)){const c=bs(t,e,!0);return n&&Yl(c,n),Li>0&&!i&&Lt&&(c.shapeFlag&6?Lt[Lt.indexOf(t)]=c:Lt.push(c)),c.patchFlag=-2,c}if(vE(t)&&(t=t.__vccOpts),e){e=lE(e);let{class:c,style:l}=e;c&&!Ye(c)&&(e.class=qr(c)),Ve(l)&&(ql(l)&&!ae(l)&&(l=wt({},l)),e.style=Vi(l))}const o=Ye(t)?1:om(t)?128:pv(t)?64:Ve(t)?4:de(t)?2:0;return M(t,e,n,r,s,o,i,!0)}function lE(t){return t?ql(t)||Qp(t)?wt({},t):t:null}function bs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?uE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&cm(u),ref:e&&e.ref?n&&i?ae(i)?i.concat(Fo(e)):[i,Fo(e)]:Fo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bs(t.ssContent),ssFallback:t.ssFallback&&bs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Gl(f,l.clone(f)),f}function As(t=" ",e=0){return Pt(La,null,t,e)}function Rs(t="",e=!1){return e?(me(),kn(vr,null,t)):Pt(vr,null,t)}function cn(t){return t==null||typeof t=="boolean"?Pt(vr):ae(t)?Pt(qe,null,t.slice()):oa(t)?nr(t):Pt(La,null,String(t))}function nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bs(t)}function Yl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qp(e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[As(e)]):n=8);t.children=e,t.shapeFlag|=n}function uE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=qr([e.class,r.class]));else if(s==="style")e.style=Vi([e.style,r.style]);else if(Ca(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){gn(t,e,7,[n,r])}const hE=Wp();let fE=0;function dE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hE,i={uid:fE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jp(r,s),emitsOptions:im(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=eE.bind(null,i),t.ce&&t.ce(i),i}let Et=null;const lm=()=>Et||Mt;let aa,el;{const t=Da(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};aa=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),el=e("__VUE_SSR_SETTERS__",n=>Ui=n)}const ro=t=>{const e=Et;return aa(t),t.scope.on(),()=>{t.scope.off(),aa(e)}},Yh=()=>{Et&&Et.scope.off(),aa(null)};function um(t){return t.vnode.shapeFlag&4}let Ui=!1;function pE(t,e=!1,n=!1){e&&el(e);const{props:r,children:s}=t.vnode,i=um(t);Bv(t,r,i,e),qv(t,s,n||e);const o=i?mE(t,e):void 0;return e&&el(!1),o}function mE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dv);const{setup:r}=n;if(r){On();const s=t.setupContext=r.length>1?_E(t):null,i=ro(t),o=no(r,t,0,[t.props,s]),c=ap(o);if(xn(),i(),(c||t.sp)&&!wi(t)&&Bp(t),c){if(o.then(Yh,Yh),e)return o.then(l=>{Jh(t,l)}).catch(l=>{Va(l,t,0)});t.asyncDep=o}else Jh(t,o)}else hm(t)}function Jh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Vp(e)),hm(t)}function hm(t,e,n){const r=t.type;t.render||(t.render=r.render||ln);{const s=ro(t);On();try{Nv(t)}finally{xn(),s()}}}const gE={get(t,e){return yt(t,"get",""),t[e]}};function _E(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gE),slots:t.slots,emit:t.emit,expose:e}}function Ua(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vp(zl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ti)return Ti[n](t)},has(e,n){return n in e||n in Ti}})):t.proxy}function yE(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function vE(t){return de(t)&&"__vccOpts"in t}const Ue=(t,e)=>ov(t,e,Ui);function fm(t,e,n){try{ia(-1);const r=arguments.length;return r===2?Ve(e)&&!ae(e)?oa(e)?Pt(t,null,[e]):Pt(t,e):Pt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oa(n)&&(n=[n]),Pt(t,e,n))}finally{ia(1)}}const EE="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const Xh=typeof window<"u"&&window.trustedTypes;if(Xh)try{tl=Xh.createPolicy("vue",{createHTML:t=>t})}catch{}const dm=tl?t=>tl.createHTML(t):t=>t,wE="http://www.w3.org/2000/svg",TE="http://www.w3.org/1998/Math/MathML",In=typeof document<"u"?document:null,Zh=In&&In.createElement("template"),IE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?In.createElementNS(wE,t):e==="mathml"?In.createElementNS(TE,t):n?In.createElement(t,{is:n}):In.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zh.innerHTML=dm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Zh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bE=Symbol("_vtc");function AE(t,e,n){const r=t[bE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ef=Symbol("_vod"),RE=Symbol("_vsh"),SE=Symbol(""),CE=/(?:^|;)\s*display\s*:/;function PE(t,e,n){const r=t.style,s=Ye(n);let i=!1;if(n&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Bo(r,c,"")}else for(const o in e)n[o]==null&&Bo(r,o,"");for(const o in n)o==="display"&&(i=!0),Bo(r,o,n[o])}else if(s){if(e!==n){const o=r[SE];o&&(n+=";"+o),r.cssText=n,i=CE.test(n)}}else e&&t.removeAttribute("style");ef in t&&(t[ef]=i?r.display:"",t[RE]&&(r.display="none"))}const tf=/\s*!important$/;function Bo(t,e,n){if(ae(n))n.forEach(r=>Bo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=kE(t,e);tf.test(n)?t.setProperty(Xr(r),n.replace(tf,""),"important"):t[r]=n}}const nf=["Webkit","Moz","ms"],Sc={};function kE(t,e){const n=Sc[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return Sc[e]=r;r=ka(r);for(let s=0;s<nf.length;s++){const i=nf[s]+r;if(i in t)return Sc[e]=i}return e}const rf="http://www.w3.org/1999/xlink";function sf(t,e,n,r,s,i=Dy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rf,e.slice(6,e.length)):t.setAttributeNS(rf,e,n):n==null||i&&!hp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":mn(n)?String(n):n)}function of(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?dm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=hp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Rn(t,e,n,r){t.addEventListener(e,n,r)}function DE(t,e,n,r){t.removeEventListener(e,n,r)}const af=Symbol("_vei");function NE(t,e,n,r,s=null){const i=t[af]||(t[af]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=VE(e);if(r){const u=i[e]=ME(r,s);Rn(t,c,u,l)}else o&&(DE(t,c,o,l),i[e]=void 0)}}const cf=/(?:Once|Passive|Capture)$/;function VE(t){let e;if(cf.test(t)){e={};let r;for(;r=t.match(cf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xr(t.slice(2)),e]}let Cc=0;const OE=Promise.resolve(),xE=()=>Cc||(OE.then(()=>Cc=0),Cc=Date.now());function ME(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gn(LE(r,n.value),e,5,[r])};return n.value=t,n.attached=xE(),n}function LE(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const lf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,UE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?AE(t,r,o):e==="style"?PE(t,n,r):Ca(e)?Ol(e)||NE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):FE(t,e,r,o))?(of(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?of(t,Ht(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sf(t,e,r,o))};function FE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&lf(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lf(e)&&Ye(n)?!1:e in t}const Er=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>Lo(e,n):e};function BE(t){t.target.composing=!0}function uf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $t=Symbol("_assign"),Dn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[$t]=Er(s);const i=r||s.props&&s.props.type==="number";Rn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Jo(c)),t[$t](c)}),n&&Rn(t,"change",()=>{t.value=t.value.trim()}),e||(Rn(t,"compositionstart",BE),Rn(t,"compositionend",uf),Rn(t,"change",uf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[$t]=Er(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Jo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},jE={deep:!0,created(t,e,n){t[$t]=Er(n),Rn(t,"change",()=>{const r=t._modelValue,s=Ss(t),i=t.checked,o=t[$t];if(ae(r)){const c=Ll(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Us(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(pm(t,i))})},mounted:hf,beforeUpdate(t,e,n){t[$t]=Er(n),hf(t,e,n)}};function hf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ae(e))s=Ll(e,r.props.value)>-1;else if(Us(e))s=e.has(r.props.value);else{if(e===n)return;s=zr(e,pm(t,!0))}t.checked!==s&&(t.checked=s)}const $E={created(t,{value:e},n){t.checked=zr(e,n.props.value),t[$t]=Er(n),Rn(t,"change",()=>{t[$t](Ss(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[$t]=Er(r),e!==n&&(t.checked=zr(e,r.props.value))}},Fi={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Us(e);Rn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Jo(Ss(o)):Ss(o));t[$t](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Oa(()=>{t._assigning=!1})}),t[$t]=Er(r)},mounted(t,{value:e}){ff(t,e)},beforeUpdate(t,e,n){t[$t]=Er(n)},updated(t,{value:e}){t._assigning||ff(t,e)}};function ff(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!Us(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Ss(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Ll(e,c)>-1}else o.selected=e.has(c);else if(zr(Ss(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ss(t){return"_value"in t?t._value:t.value}function pm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const HE={created(t,e,n){ko(t,e,n,null,"created")},mounted(t,e,n){ko(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){ko(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){ko(t,e,n,r,"updated")}};function qE(t,e){switch(t){case"SELECT":return Fi;case"TEXTAREA":return Dn;default:switch(e){case"checkbox":return jE;case"radio":return $E;default:return Dn}}}function ko(t,e,n,r,s){const o=qE(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const zE=["ctrl","shift","alt","meta"],WE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>zE.some(n=>t[`${n}Key`]&&!e.includes(n))},Jl=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=WE[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},GE=wt({patchProp:UE},IE);let df;function KE(){return df||(df=Wv(GE))}const QE=((...t)=>{const e=KE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=JE(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,YE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function YE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function JE(t){return Ye(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let mm;const Fa=t=>mm=t,gm=Symbol();function nl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var bi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(bi||(bi={}));function XE(){const t=mp(!0),e=t.run(()=>ve({}));let n=[],r=[];const s=zl({install(i){Fa(s),s._a=i,i.provide(gm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const _m=()=>{};function pf(t,e,n,r=_m){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&gp()&&Vy(s),s}function cs(t,...e){t.forEach(n=>{n(...e)})}const ZE=t=>t(),mf=Symbol(),Pc=Symbol();function rl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];nl(s)&&nl(r)&&t.hasOwnProperty(n)&&!We(r)&&!ur(r)?t[n]=rl(s,r):t[n]=r}return t}const ew=Symbol();function tw(t){return!nl(t)||!Object.prototype.hasOwnProperty.call(t,ew)}const{assign:er}=Object;function nw(t){return!!(We(t)&&t.effect)}function rw(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=nv(n.state.value[t]);return er(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=zl(Ue(()=>{Fa(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return l=ym(t,u,e,n,r,!0),l}function ym(t,e,n={},r,s,i){let o;const c=er({actions:{}},n),l={deep:!0};let u,f,p=new Set,m=new Set,y;const D=r.state.value[t];!i&&!D&&(r.state.value[t]={}),ve({});let V;function O(_){let v;u=f=!1,typeof _=="function"?(_(r.state.value[t]),v={type:bi.patchFunction,storeId:t,events:y}):(rl(r.state.value[t],_),v={type:bi.patchObject,payload:_,storeId:t,events:y});const A=V=Symbol();Oa().then(()=>{V===A&&(u=!0)}),f=!0,cs(p,v,r.state.value[t])}const H=i?function(){const{state:v}=n,A=v?v():{};this.$patch(b=>{er(b,A)})}:_m;function U(){o.stop(),p.clear(),m.clear(),r._s.delete(t)}const k=(_,v="")=>{if(mf in _)return _[Pc]=v,_;const A=function(){Fa(r);const b=Array.from(arguments),R=new Set,w=new Set;function je(fe){R.add(fe)}function ht(fe){w.add(fe)}cs(m,{args:b,name:A[Pc],store:G,after:je,onError:ht});let Oe;try{Oe=_.apply(this&&this.$id===t?this:G,b)}catch(fe){throw cs(w,fe),fe}return Oe instanceof Promise?Oe.then(fe=>(cs(R,fe),fe)).catch(fe=>(cs(w,fe),Promise.reject(fe))):(cs(R,Oe),Oe)};return A[mf]=!0,A[Pc]=v,A},P={_p:r,$id:t,$onAction:pf.bind(null,m),$patch:O,$reset:H,$subscribe(_,v={}){const A=pf(p,_,v.detached,()=>b()),b=o.run(()=>vs(()=>r.state.value[t],R=>{(v.flush==="sync"?f:u)&&_({storeId:t,type:bi.direct,events:y},R)},er({},l,v)));return A},$dispose:U},G=to(P);r._s.set(t,G);const T=(r._a&&r._a.runWithContext||ZE)(()=>r._e.run(()=>(o=mp()).run(()=>e({action:k}))));for(const _ in T){const v=T[_];if(We(v)&&!nw(v)||ur(v))i||(D&&tw(v)&&(We(v)?v.value=D[_]:rl(v,D[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const A=k(v,_);T[_]=A,c.actions[_]=v}}return er(G,T),er(Ae(G),T),Object.defineProperty(G,"$state",{get:()=>r.state.value[t],set:_=>{O(v=>{er(v,_)})}}),r._p.forEach(_=>{er(G,o.run(()=>_({store:G,app:r._a,pinia:r,options:c})))}),D&&i&&n.hydrate&&n.hydrate(G.$state,D),u=!0,f=!0,G}/*! #__NO_SIDE_EFFECTS__ */function sw(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=Fv();return o=o||(l?Xt(gm,null):null),o&&Fa(o),o=mm,o._s.has(t)||(s?ym(t,e,r,o):rw(t,r,o)),o._s.get(t)}return i.$id=t,i}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const us=typeof document<"u";function vm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function iw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&vm(t.default)}const Se=Object.assign;function kc(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const Ai=()=>{},en=Array.isArray;function gf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Em=/#/g,ow=/&/g,aw=/\//g,cw=/=/g,lw=/\?/g,wm=/\+/g,uw=/%5B/g,hw=/%5D/g,Tm=/%5E/g,fw=/%60/g,Im=/%7B/g,dw=/%7C/g,bm=/%7D/g,pw=/%20/g;function Xl(t){return t==null?"":encodeURI(""+t).replace(dw,"|").replace(uw,"[").replace(hw,"]")}function mw(t){return Xl(t).replace(Im,"{").replace(bm,"}").replace(Tm,"^")}function sl(t){return Xl(t).replace(wm,"%2B").replace(pw,"+").replace(Em,"%23").replace(ow,"%26").replace(fw,"`").replace(Im,"{").replace(bm,"}").replace(Tm,"^")}function gw(t){return sl(t).replace(cw,"%3D")}function _w(t){return Xl(t).replace(Em,"%23").replace(lw,"%3F")}function yw(t){return _w(t).replace(aw,"%2F")}function Bi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const vw=/\/$/,Ew=t=>t.replace(vw,"");function Dc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=bw(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Bi(o)}}function ww(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _f(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Tw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Cs(e.matched[r],n.matched[s])&&Am(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Am(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Iw(t[n],e[n]))return!1;return!0}function Iw(t,e){return en(t)?yf(t,e):en(e)?yf(e,t):t===e}function yf(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function bw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let il=(function(t){return t.pop="pop",t.push="push",t})({}),Nc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function Aw(t){if(!t)if(us){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ew(t)}const Rw=/^[^#]+#/;function Sw(t,e){return t.replace(Rw,"#")+e}function Cw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ba=()=>({left:window.scrollX,top:window.scrollY});function Pw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Cw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vf(t,e){return(history.state?history.state.position-e:-1)+t}const ol=new Map;function kw(t,e){ol.set(t,e)}function Dw(t){const e=ol.get(t);return ol.delete(t),e}function Nw(t){return typeof t=="string"||t&&typeof t=="object"}function Rm(t){return typeof t=="string"||typeof t=="symbol"}let He=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Sm=Symbol("");He.MATCHER_NOT_FOUND+"",He.NAVIGATION_GUARD_REDIRECT+"",He.NAVIGATION_ABORTED+"",He.NAVIGATION_CANCELLED+"",He.NAVIGATION_DUPLICATED+"";function Ps(t,e){return Se(new Error,{type:t,[Sm]:!0},e)}function Tn(t,e){return t instanceof Error&&Sm in t&&(e==null||!!(t.type&e))}const Vw=["params","query","hash"];function Ow(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Vw)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function xw(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(wm," "),i=s.indexOf("="),o=Bi(i<0?s:s.slice(0,i)),c=i<0?null:Bi(s.slice(i+1));if(o in e){let l=e[o];en(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function Ef(t){let e="";for(let n in t){const r=t[n];if(n=gw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(s=>s&&sl(s)):[r&&sl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Mw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Lw=Symbol(""),wf=Symbol(""),ja=Symbol(""),Cm=Symbol(""),al=Symbol("");function li(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ps(He.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):Nw(m)?l(Ps(He.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Vc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(vm(l)){const u=(l.__vccOpts||l)[e];u&&i.push(rr(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=iw(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&rr(m,n,r,o,c,s)()}))}}return i}function Uw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Cs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Cs(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Fw=()=>location.protocol+"//"+location.host;function Pm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),_f(c,"")}return _f(n,t)+r+s}function Bw(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const y=Pm(t,location),D=n.value,V=e.value;let O=0;if(m){if(n.value=y,e.value=m,o&&o===D){o=null;return}O=V?m.position-V.position:0}else r(y);s.forEach(H=>{H(n.value,D,{delta:O,type:il.pop,direction:O?O>0?Nc.forward:Nc.back:Nc.unknown})})};function l(){o=n.value}function u(m){s.push(m);const y=()=>{const D=s.indexOf(m);D>-1&&s.splice(D,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Se({},m.state,{scroll:Ba()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function Tf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ba():null}}function jw(t){const{history:e,location:n}=window,r={value:Pm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:Fw()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(l,u){i(l,Se({},e.state,Tf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Se({},s.value,e.state,{forward:l,scroll:Ba()});i(f.current,f,!0),i(l,Se({},Tf(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function $w(t){t=Aw(t);const e=jw(t),n=Bw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:Sw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Ur=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Xe=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Xe||{});const Hw={type:Ur.Static,value:""},qw=/[a-zA-Z0-9_]/;function zw(t){if(!t)return[[]];if(t==="/")return[[Hw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=Xe.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===Xe.Static?i.push({type:Ur.Static,value:u}):n===Xe.Param||n===Xe.ParamRegExp||n===Xe.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Ur.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Xe.ParamRegExp){r=n,n=Xe.EscapeNext;continue}switch(n){case Xe.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=Xe.Param):m();break;case Xe.EscapeNext:m(),n=r;break;case Xe.Param:l==="("?n=Xe.ParamRegExp:qw.test(l)?m():(p(),n=Xe.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Xe.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Xe.ParamRegExpEnd:f+=l;break;case Xe.ParamRegExpEnd:p(),n=Xe.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Xe.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const If="[^/]+?",Ww={sensitive:!1,strict:!1,start:!0,end:!0};var At=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(At||{});const Gw=/[.+*?^${}()[\]/\\]/g;function Kw(t,e){const n=Se({},Ww,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[At.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=At.Segment+(n.sensitive?At.BonusCaseSensitive:0);if(m.type===Ur.Static)p||(s+="/"),s+=m.value.replace(Gw,"\\$&"),y+=At.Static;else if(m.type===Ur.Param){const{value:D,repeatable:V,optional:O,regexp:H}=m;i.push({name:D,repeatable:V,optional:O});const U=H||If;if(U!==If){y+=At.BonusCustomRegExp;try{`${U}`}catch(P){throw new Error(`Invalid custom RegExp for param "${D}" (${U}): `+P.message)}}let k=V?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(k=O&&u.length<2?`(?:/${k})`:"/"+k),O&&(k+="?"),s+=k,y+=At.Dynamic,O&&(y+=At.BonusOptional),V&&(y+=At.BonusRepeatable),U===".*"&&(y+=At.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=At.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",D=i[m-1];p[D.name]=y&&D.repeatable?y.split("/"):y}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===Ur.Static)f+=y.value;else if(y.type===Ur.Param){const{value:D,repeatable:V,optional:O}=y,H=D in u?u[D]:"";if(en(H)&&!V)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const U=en(H)?H.join("/"):H;if(!U)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${D}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Qw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===At.Static+At.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===At.Static+At.Segment?1:-1:0}function km(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Qw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(bf(r))return 1;if(bf(s))return-1}return s.length-r.length}function bf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Yw={strict:!1,end:!0,sensitive:!1};function Jw(t,e,n){const r=Kw(zw(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Xw(t,e){const n=[],r=new Map;e=gf(Yw,e);function s(p){return r.get(p)}function i(p,m,y){const D=!y,V=Rf(p);V.aliasOf=y&&y.record;const O=gf(e,p),H=[V];if("alias"in p){const P=typeof p.alias=="string"?[p.alias]:p.alias;for(const G of P)H.push(Rf(Se({},V,{components:y?y.record.components:V.components,path:G,aliasOf:y?y.record:V})))}let U,k;for(const P of H){const{path:G}=P;if(m&&G[0]!=="/"){const ee=m.record.path,T=ee[ee.length-1]==="/"?"":"/";P.path=m.record.path+(G&&T+G)}if(U=Jw(P,m,O),y?y.alias.push(U):(k=k||U,k!==U&&k.alias.push(U),D&&p.name&&!Sf(U)&&o(p.name)),Dm(U)&&l(U),V.children){const ee=V.children;for(let T=0;T<ee.length;T++)i(ee[T],U,y&&y.children[T])}y=y||U}return k?()=>{o(k)}:Ai}function o(p){if(Rm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=tT(p,n);n.splice(m,0,p),p.record.name&&!Sf(p)&&r.set(p.record.name,p)}function u(p,m){let y,D={},V,O;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Ps(He.MATCHER_NOT_FOUND,{location:p});O=y.record.name,D=Se(Af(m.params,y.keys.filter(k=>!k.optional).concat(y.parent?y.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),p.params&&Af(p.params,y.keys.map(k=>k.name))),V=y.stringify(D)}else if(p.path!=null)V=p.path,y=n.find(k=>k.re.test(V)),y&&(D=y.parse(V),O=y.record.name);else{if(y=m.name?r.get(m.name):n.find(k=>k.re.test(m.path)),!y)throw Ps(He.MATCHER_NOT_FOUND,{location:p,currentLocation:m});O=y.record.name,D=Se({},m.params,p.params),V=y.stringify(D)}const H=[];let U=y;for(;U;)H.unshift(U.record),U=U.parent;return{name:O,path:V,params:D,matched:H,meta:eT(H)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Af(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Rf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Zw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Zw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Sf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function eT(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function tT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;km(t,e[i])<0?r=i:n=i+1}const s=nT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function nT(t){let e=t;for(;e=e.parent;)if(Dm(e)&&km(t,e)===0)return e}function Dm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Cf(t){const e=Xt(ja),n=Xt(Cm),r=Ue(()=>{const l=jr(t.to);return e.resolve(l)}),s=Ue(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Cs.bind(null,f));if(m>-1)return m;const y=Pf(l[u-2]);return u>1&&Pf(f)===y&&p[p.length-1].path!==y?p.findIndex(Cs.bind(null,l[u-2])):m}),i=Ue(()=>s.value>-1&&aT(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Am(n.params,r.value.params));function c(l={}){if(oT(l)){const u=e[jr(t.replace)?"replace":"push"](jr(t.to)).catch(Ai);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function rT(t){return t.length===1?t[0]:t}const sT=Fp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Cf,setup(t,{slots:e}){const n=to(Cf(t)),{options:r}=Xt(ja),s=Ue(()=>({[kf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[kf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&rT(e.default(n));return t.custom?i:fm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),iT=sT;function oT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function aT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Pf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kf=(t,e,n)=>t??e??n,cT=Fp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xt(al),s=Ue(()=>t.route||r.value),i=Xt(wf,0),o=Ue(()=>{let u=jr(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Ue(()=>s.value.matched[o.value]);Uo(wf,Ue(()=>o.value+1)),Uo(Lw,c),Uo(al,s);const l=ve();return vs(()=>[l.value,c.value,t.name],([u,f,p],[m,y,D])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!Cs(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Df(n.default,{Component:m,route:u});const y=p.props[f],D=y?y===!0?u.params:typeof y=="function"?y(u):y:null,O=fm(m,Se({},D,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Df(n.default,{Component:O,route:u})||O}}});function Df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lT=cT;function uT(t){const e=Xw(t.routes,t),n=t.parseQuery||xw,r=t.stringifyQuery||Ef,s=t.history,i=li(),o=li(),c=li(),l=Zy(Xn);let u=Xn;us&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=kc.bind(null,L=>""+L),p=kc.bind(null,yw),m=kc.bind(null,Bi);function y(L,X){let Y,ne;return Rm(L)?(Y=e.getRecordMatcher(L),ne=X):ne=L,e.addRoute(ne,Y)}function D(L){const X=e.getRecordMatcher(L);X&&e.removeRoute(X)}function V(){return e.getRoutes().map(L=>L.record)}function O(L){return!!e.getRecordMatcher(L)}function H(L,X){if(X=Se({},X||l.value),typeof L=="string"){const S=Dc(n,L,X.path),F=e.resolve({path:S.path},X),j=s.createHref(S.fullPath);return Se(S,F,{params:m(F.params),hash:Bi(S.hash),redirectedFrom:void 0,href:j})}let Y;if(L.path!=null)Y=Se({},L,{path:Dc(n,L.path,X.path).path});else{const S=Se({},L.params);for(const F in S)S[F]==null&&delete S[F];Y=Se({},L,{params:p(S)}),X.params=p(X.params)}const ne=e.resolve(Y,X),_e=L.hash||"";ne.params=f(m(ne.params));const E=ww(r,Se({},L,{hash:mw(_e),path:ne.path})),I=s.createHref(E);return Se({fullPath:E,hash:_e,query:r===Ef?Mw(L.query):L.query||{}},ne,{redirectedFrom:void 0,href:I})}function U(L){return typeof L=="string"?Dc(n,L,l.value.path):Se({},L)}function k(L,X){if(u!==L)return Ps(He.NAVIGATION_CANCELLED,{from:X,to:L})}function P(L){return T(L)}function G(L){return P(Se(U(L),{replace:!0}))}function ee(L,X){const Y=L.matched[L.matched.length-1];if(Y&&Y.redirect){const{redirect:ne}=Y;let _e=typeof ne=="function"?ne(L,X):ne;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=U(_e):{path:_e},_e.params={}),Se({query:L.query,hash:L.hash,params:_e.path!=null?{}:L.params},_e)}}function T(L,X){const Y=u=H(L),ne=l.value,_e=L.state,E=L.force,I=L.replace===!0,S=ee(Y,ne);if(S)return T(Se(U(S),{state:typeof S=="object"?Se({},_e,S.state):_e,force:E,replace:I}),X||Y);const F=Y;F.redirectedFrom=X;let j;return!E&&Tw(r,ne,Y)&&(j=Ps(He.NAVIGATION_DUPLICATED,{to:F,from:ne}),kt(ne,ne,!0,!1)),(j?Promise.resolve(j):A(F,ne)).catch(x=>Tn(x)?Tn(x,He.NAVIGATION_GUARD_REDIRECT)?x:tn(x):Te(x,F,ne)).then(x=>{if(x){if(Tn(x,He.NAVIGATION_GUARD_REDIRECT))return T(Se({replace:I},U(x.to),{state:typeof x.to=="object"?Se({},_e,x.to.state):_e,force:E}),X||F)}else x=R(F,ne,!0,I,_e);return b(F,ne,x),x})}function _(L,X){const Y=k(L,X);return Y?Promise.reject(Y):Promise.resolve()}function v(L){const X=Wt.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(L):L()}function A(L,X){let Y;const[ne,_e,E]=Uw(L,X);Y=Vc(ne.reverse(),"beforeRouteLeave",L,X);for(const S of ne)S.leaveGuards.forEach(F=>{Y.push(rr(F,L,X))});const I=_.bind(null,L,X);return Y.push(I),ft(Y).then(()=>{Y=[];for(const S of i.list())Y.push(rr(S,L,X));return Y.push(I),ft(Y)}).then(()=>{Y=Vc(_e,"beforeRouteUpdate",L,X);for(const S of _e)S.updateGuards.forEach(F=>{Y.push(rr(F,L,X))});return Y.push(I),ft(Y)}).then(()=>{Y=[];for(const S of E)if(S.beforeEnter)if(en(S.beforeEnter))for(const F of S.beforeEnter)Y.push(rr(F,L,X));else Y.push(rr(S.beforeEnter,L,X));return Y.push(I),ft(Y)}).then(()=>(L.matched.forEach(S=>S.enterCallbacks={}),Y=Vc(E,"beforeRouteEnter",L,X,v),Y.push(I),ft(Y))).then(()=>{Y=[];for(const S of o.list())Y.push(rr(S,L,X));return Y.push(I),ft(Y)}).catch(S=>Tn(S,He.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function b(L,X,Y){c.list().forEach(ne=>v(()=>ne(L,X,Y)))}function R(L,X,Y,ne,_e){const E=k(L,X);if(E)return E;const I=X===Xn,S=us?history.state:{};Y&&(ne||I?s.replace(L.fullPath,Se({scroll:I&&S&&S.scroll},_e)):s.push(L.fullPath,_e)),l.value=L,kt(L,X,Y,I),tn()}let w;function je(){w||(w=s.listen((L,X,Y)=>{if(!Gt.listening)return;const ne=H(L),_e=ee(ne,Gt.currentRoute.value);if(_e){T(Se(_e,{replace:!0,force:!0}),ne).catch(Ai);return}u=ne;const E=l.value;us&&kw(vf(E.fullPath,Y.delta),Ba()),A(ne,E).catch(I=>Tn(I,He.NAVIGATION_ABORTED|He.NAVIGATION_CANCELLED)?I:Tn(I,He.NAVIGATION_GUARD_REDIRECT)?(T(Se(U(I.to),{force:!0}),ne).then(S=>{Tn(S,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&!Y.delta&&Y.type===il.pop&&s.go(-1,!1)}).catch(Ai),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Te(I,ne,E))).then(I=>{I=I||R(ne,E,!1),I&&(Y.delta&&!Tn(I,He.NAVIGATION_CANCELLED)?s.go(-Y.delta,!1):Y.type===il.pop&&Tn(I,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ne,E,I)}).catch(Ai)}))}let ht=li(),Oe=li(),fe;function Te(L,X,Y){tn(L);const ne=Oe.list();return ne.length?ne.forEach(_e=>_e(L,X,Y)):console.error(L),Promise.reject(L)}function St(){return fe&&l.value!==Xn?Promise.resolve():new Promise((L,X)=>{ht.add([L,X])})}function tn(L){return fe||(fe=!L,je(),ht.list().forEach(([X,Y])=>L?Y(L):X()),ht.reset()),L}function kt(L,X,Y,ne){const{scrollBehavior:_e}=t;if(!us||!_e)return Promise.resolve();const E=!Y&&Dw(vf(L.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return Oa().then(()=>_e(L,X,E)).then(I=>I&&Pw(I)).catch(I=>Te(I,L,X))}const it=L=>s.go(L);let En;const Wt=new Set,Gt={currentRoute:l,listening:!0,addRoute:y,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:V,resolve:H,options:t,push:P,replace:G,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Oe.add,isReady:St,install(L){L.component("RouterLink",iT),L.component("RouterView",lT),L.config.globalProperties.$router=Gt,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>jr(l)}),us&&!En&&l.value===Xn&&(En=!0,P(s.location).catch(ne=>{}));const X={};for(const ne in Xn)Object.defineProperty(X,ne,{get:()=>l.value[ne],enumerable:!0});L.provide(ja,Gt),L.provide(Cm,Dp(X)),L.provide(al,l);const Y=L.unmount;Wt.add(L),L.unmount=function(){Wt.delete(L),Wt.size<1&&(u=Xn,w&&w(),w=null,l.value=Xn,En=!1,fe=!1),Y()}}};function ft(L){return L.reduce((X,Y)=>X.then(()=>v(Y)),Promise.resolve())}return Gt}function so(){return Xt(ja)}const hT=()=>{};var Nf={};/**
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
 */const Nm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new dT;const m=i<<2|c>>4;if(r.push(m),u!==64){const y=c<<4&240|u>>2;if(r.push(y),p!==64){const D=u<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pT=function(t){const e=Nm(t);return Vm.encodeByteArray(e,!0)},ca=function(t){return pT(t).replace(/\./g,"")},Om=function(t){try{return Vm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gT=()=>mT().__FIREBASE_DEFAULTS__,_T=()=>{if(typeof process>"u"||typeof Nf>"u")return;const t=Nf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Om(t[1]);return e&&JSON.parse(e)},$a=()=>{try{return hT()||gT()||_T()||yT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xm=t=>$a()?.emulatorHosts?.[t],vT=t=>{const e=xm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mm=()=>$a()?.config,Lm=t=>$a()?.[`_${t}`];/**
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
 */class ET{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Fs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Um(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function wT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ca(JSON.stringify(n)),ca(JSON.stringify(o)),""].join(".")}const Ri={};function TT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ri))Ri[e]?t.emulator.push(e):t.prod.push(e);return t}function IT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Vf=!1;function Fm(t,e){if(typeof window>"u"||typeof document>"u"||!Fs(window.location.host)||Ri[t]===e||Ri[t]||Vf)return;Ri[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=TT().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Vf=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=IT(r),y=n("text"),D=document.getElementById(y)||document.createElement("span"),V=n("learnmore"),O=document.getElementById(V)||document.createElement("a"),H=n("preprendIcon"),U=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const k=m.element;c(k),f(O,V);const P=u();l(U,H),k.append(U,D,O,P),document.body.appendChild(k)}i?(D.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function AT(){const t=$a()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ST(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PT(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kT(){return!AT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function DT(){try{return typeof indexedDB=="object"}catch{return!1}}function NT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const VT="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VT,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?OT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new jn(s,c,r)}}function OT(t,e){return t.replace(xT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xT=/\{\$([^}]+)}/g;function MT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Of(i)&&Of(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Of(t){return t!==null&&typeof t=="object"}/**
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
 */function oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LT(t,e){const n=new UT(t,e);return n.subscribe.bind(n)}class UT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Oc),s.error===void 0&&(s.error=Oc),s.complete===void 0&&(s.complete=Oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oc(){}/**
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
 */function qt(t){return t&&t._delegate?t._delegate:t}class Gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lr="[DEFAULT]";/**
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
 */class BT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ET;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($T(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jT(t){return t===Lr?void 0:t}function $T(t){return t.instantiationMode==="EAGER"}/**
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
 */class HT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const qT={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},zT=ye.INFO,WT={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},GT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=WT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=zT,this._logHandler=GT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const KT=(t,e)=>e.some(n=>t instanceof n);let xf,Mf;function QT(){return xf||(xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YT(){return Mf||(Mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bm=new WeakMap,cl=new WeakMap,jm=new WeakMap,xc=new WeakMap,eu=new WeakMap;function JT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bm.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function XT(t){if(cl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cl.set(t,e)}let ll={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZT(t){ll=t(ll)}function eI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mc(this),e,...n);return jm.set(r,e.sort?e.sort():[e]),hr(r)}:YT().includes(t)?function(...e){return t.apply(Mc(this),e),hr(Bm.get(this))}:function(...e){return hr(t.apply(Mc(this),e))}}function tI(t){return typeof t=="function"?eI(t):(t instanceof IDBTransaction&&XT(t),KT(t,QT())?new Proxy(t,ll):t)}function hr(t){if(t instanceof IDBRequest)return JT(t);if(xc.has(t))return xc.get(t);const e=tI(t);return e!==t&&(xc.set(t,e),eu.set(e,t)),e}const Mc=t=>eu.get(t);function nI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const rI=["get","getKey","getAll","getAllKeys","count"],sI=["put","add","delete","clear"],Lc=new Map;function Lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lc.get(e))return Lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Lc.set(e,i),i}ZT(t=>({...t,get:(e,n,r)=>Lf(e,n)||t.get(e,n,r),has:(e,n)=>!!Lf(e,n)||t.has(e,n)}));/**
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
 */class iI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oI(t){return t.getComponent()?.type==="VERSION"}const ul="@firebase/app",Uf="0.14.4";/**
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
 */const Mn=new Zl("@firebase/app"),aI="@firebase/app-compat",cI="@firebase/analytics-compat",lI="@firebase/analytics",uI="@firebase/app-check-compat",hI="@firebase/app-check",fI="@firebase/auth",dI="@firebase/auth-compat",pI="@firebase/database",mI="@firebase/data-connect",gI="@firebase/database-compat",_I="@firebase/functions",yI="@firebase/functions-compat",vI="@firebase/installations",EI="@firebase/installations-compat",wI="@firebase/messaging",TI="@firebase/messaging-compat",II="@firebase/performance",bI="@firebase/performance-compat",AI="@firebase/remote-config",RI="@firebase/remote-config-compat",SI="@firebase/storage",CI="@firebase/storage-compat",PI="@firebase/firestore",kI="@firebase/ai",DI="@firebase/firestore-compat",NI="firebase",VI="12.4.0";/**
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
 */const hl="[DEFAULT]",OI={[ul]:"fire-core",[aI]:"fire-core-compat",[lI]:"fire-analytics",[cI]:"fire-analytics-compat",[hI]:"fire-app-check",[uI]:"fire-app-check-compat",[fI]:"fire-auth",[dI]:"fire-auth-compat",[pI]:"fire-rtdb",[mI]:"fire-data-connect",[gI]:"fire-rtdb-compat",[_I]:"fire-fn",[yI]:"fire-fn-compat",[vI]:"fire-iid",[EI]:"fire-iid-compat",[wI]:"fire-fcm",[TI]:"fire-fcm-compat",[II]:"fire-perf",[bI]:"fire-perf-compat",[AI]:"fire-rc",[RI]:"fire-rc-compat",[SI]:"fire-gcs",[CI]:"fire-gcs-compat",[PI]:"fire-fst",[DI]:"fire-fst-compat",[kI]:"fire-vertex","fire-js":"fire-js",[NI]:"fire-js-all"};/**
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
 */const la=new Map,xI=new Map,fl=new Map;function Ff(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ks(t){const e=t.name;if(fl.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;fl.set(e,t);for(const n of la.values())Ff(n,t);for(const n of xI.values())Ff(n,t);return!0}function tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const MI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new io("app","Firebase",MI);/**
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
 */class LI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
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
 */const Bs=VI;function $m(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:hl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw fr.create("bad-app-name",{appName:String(s)});if(n||(n=Mm()),!n)throw fr.create("no-options");const i=la.get(s);if(i){if(Wr(n,i.options)&&Wr(r,i.config))return i;throw fr.create("duplicate-app",{appName:s})}const o=new HT(s);for(const l of fl.values())o.addComponent(l);const c=new LI(n,r,o);return la.set(s,c),c}function Hm(t=hl){const e=la.get(t);if(!e&&t===hl&&Mm())return $m();if(!e)throw fr.create("no-app",{appName:t});return e}function dr(t,e,n){let r=OI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(o.join(" "));return}ks(new Gr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const UI="firebase-heartbeat-database",FI=1,ji="firebase-heartbeat-store";let Uc=null;function qm(){return Uc||(Uc=nI(UI,FI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function BI(t){try{const n=(await qm()).transaction(ji),r=await n.objectStore(ji).get(zm(t));return await n.done,r}catch(e){if(e instanceof jn)Mn.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e?.message});Mn.warn(n.message)}}}async function Bf(t,e){try{const r=(await qm()).transaction(ji,"readwrite");await r.objectStore(ji).put(e,zm(t)),await r.done}catch(n){if(n instanceof jn)Mn.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n?.message});Mn.warn(r.message)}}}function zm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jI=1024,$I=30;class HI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>$I){const s=WI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Mn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jf(),{heartbeatsToSend:n,unsentEntries:r}=qI(this._heartbeatsCache.heartbeats),s=ca(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Mn.warn(e),""}}}function jf(){return new Date().toISOString().substring(0,10)}function qI(t,e=jI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$f(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DT()?NT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $f(t){return ca(JSON.stringify({version:2,heartbeats:t})).length}function WI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function GI(t){ks(new Gr("platform-logger",e=>new iI(e),"PRIVATE")),ks(new Gr("heartbeat",e=>new HI(e),"PRIVATE")),dr(ul,Uf,t),dr(ul,Uf,"esm2020"),dr("fire-js","")}GI("");var Hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,Wm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function v(){}v.prototype=_.prototype,T.F=_.prototype,T.prototype=new v,T.prototype.constructor=T,T.D=function(A,b,R){for(var w=Array(arguments.length-2),je=2;je<arguments.length;je++)w[je-2]=arguments[je];return _.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,v){v||(v=0);const A=Array(16);if(typeof _=="string")for(var b=0;b<16;++b)A[b]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(b=0;b<16;++b)A[b]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=T.g[0],v=T.g[1],b=T.g[2];let R=T.g[3],w;w=_+(R^v&(b^R))+A[0]+3614090360&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(b^_&(v^b))+A[1]+3905402710&4294967295,R=_+(w<<12&4294967295|w>>>20),w=b+(v^R&(_^v))+A[2]+606105819&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(_^b&(R^_))+A[3]+3250441966&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(R^v&(b^R))+A[4]+4118548399&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(b^_&(v^b))+A[5]+1200080426&4294967295,R=_+(w<<12&4294967295|w>>>20),w=b+(v^R&(_^v))+A[6]+2821735955&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(_^b&(R^_))+A[7]+4249261313&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(R^v&(b^R))+A[8]+1770035416&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(b^_&(v^b))+A[9]+2336552879&4294967295,R=_+(w<<12&4294967295|w>>>20),w=b+(v^R&(_^v))+A[10]+4294925233&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(_^b&(R^_))+A[11]+2304563134&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(R^v&(b^R))+A[12]+1804603682&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(b^_&(v^b))+A[13]+4254626195&4294967295,R=_+(w<<12&4294967295|w>>>20),w=b+(v^R&(_^v))+A[14]+2792965006&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(_^b&(R^_))+A[15]+1236535329&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(b^R&(v^b))+A[1]+4129170786&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(_^v))+A[6]+3225465664&4294967295,R=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(R^_))+A[11]+643717713&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(b^R))+A[0]+3921069994&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^R&(v^b))+A[5]+3593408605&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(_^v))+A[10]+38016083&4294967295,R=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(R^_))+A[15]+3634488961&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(b^R))+A[4]+3889429448&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^R&(v^b))+A[9]+568446438&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(_^v))+A[14]+3275163606&4294967295,R=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(R^_))+A[3]+4107603335&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(b^R))+A[8]+1163531501&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^R&(v^b))+A[13]+2850285829&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(_^v))+A[2]+4243563512&4294967295,R=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(R^_))+A[7]+1735328473&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(b^R))+A[12]+2368359562&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(v^b^R)+A[5]+4294588738&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^b)+A[8]+2272392833&4294967295,R=_+(w<<11&4294967295|w>>>21),w=b+(R^_^v)+A[11]+1839030562&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^_)+A[14]+4259657740&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^R)+A[1]+2763975236&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^b)+A[4]+1272893353&4294967295,R=_+(w<<11&4294967295|w>>>21),w=b+(R^_^v)+A[7]+4139469664&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^_)+A[10]+3200236656&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^R)+A[13]+681279174&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^b)+A[0]+3936430074&4294967295,R=_+(w<<11&4294967295|w>>>21),w=b+(R^_^v)+A[3]+3572445317&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^_)+A[6]+76029189&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^R)+A[9]+3654602809&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^b)+A[12]+3873151461&4294967295,R=_+(w<<11&4294967295|w>>>21),w=b+(R^_^v)+A[15]+530742520&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^_)+A[2]+3299628645&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(b^(v|~R))+A[0]+4096336452&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~b))+A[7]+1126891415&4294967295,R=_+(w<<10&4294967295|w>>>22),w=b+(_^(R|~v))+A[14]+2878612391&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~_))+A[5]+4237533241&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~R))+A[12]+1700485571&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~b))+A[3]+2399980690&4294967295,R=_+(w<<10&4294967295|w>>>22),w=b+(_^(R|~v))+A[10]+4293915773&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~_))+A[1]+2240044497&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~R))+A[8]+1873313359&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~b))+A[15]+4264355552&4294967295,R=_+(w<<10&4294967295|w>>>22),w=b+(_^(R|~v))+A[6]+2734768916&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~_))+A[13]+1309151649&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~R))+A[4]+4149444226&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~b))+A[11]+3174756917&4294967295,R=_+(w<<10&4294967295|w>>>22),w=b+(_^(R|~v))+A[2]+718787259&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~_))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const v=_-this.blockSize,A=this.C;let b=this.h,R=0;for(;R<_;){if(b==0)for(;R<=v;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<_;)if(A[b++]=T.charCodeAt(R++),b==this.blockSize){s(this,A),b=0;break}}else for(;R<_;)if(A[b++]=T[R++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var v=T.length-8;v<T.length;++v)T[v]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,v=0;v<4;++v)for(let A=0;A<32;A+=8)T[_++]=this.g[v]>>>A&255;return T};function i(T,_){var v=c;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=_(T)}function o(T,_){this.h=_;const v=[];let A=!0;for(let b=T.length-1;b>=0;b--){const R=T[b]|0;A&&R==_||(v[b]=R,A=!1)}this.g=v}var c={};function l(T){return-128<=T&&T<128?i(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return O(u(-T));const _=[];let v=1;for(let A=0;T>=v;A++)_[A]=T/v|0,v*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return O(f(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(_,8));let A=p;for(let R=0;R<T.length;R+=8){var b=Math.min(8,T.length-R);const w=parseInt(T.substring(R,R+b),_);b<8?(b=u(Math.pow(_,b)),A=A.j(b).add(u(w))):(A=A.j(v),A=A.add(u(w)))}return A}var p=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-O(this).m();let T=0,_=1;for(let v=0;v<this.g.length;v++){const A=this.i(v);T+=(A>=0?A:4294967296+A)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(V(this))return"-"+O(this).toString(T);const _=u(Math.pow(T,6));var v=this;let A="";for(;;){const b=P(v,_).g;v=H(v,b.j(_));let R=((v.g.length>0?v.g[0]:v.h)>>>0).toString(T);if(v=b,D(v))return R+A;for(;R.length<6;)R="0"+R;A=R+A}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function V(T){return T.h==-1}t.l=function(T){return T=H(this,T),V(T)?-1:D(T)?0:1};function O(T){const _=T.g.length,v=[];for(let A=0;A<_;A++)v[A]=~T.g[A];return new o(v,~T.h).add(m)}t.abs=function(){return V(this)?O(this):this},t.add=function(T){const _=Math.max(this.g.length,T.g.length),v=[];let A=0;for(let b=0;b<=_;b++){let R=A+(this.i(b)&65535)+(T.i(b)&65535),w=(R>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);A=w>>>16,R&=65535,w&=65535,v[b]=w<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function H(T,_){return T.add(O(_))}t.j=function(T){if(D(this)||D(T))return p;if(V(this))return V(T)?O(this).j(O(T)):O(O(this).j(T));if(V(T))return O(this.j(O(T)));if(this.l(y)<0&&T.l(y)<0)return u(this.m()*T.m());const _=this.g.length+T.g.length,v=[];for(var A=0;A<2*_;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(let b=0;b<T.g.length;b++){const R=this.i(A)>>>16,w=this.i(A)&65535,je=T.i(b)>>>16,ht=T.i(b)&65535;v[2*A+2*b]+=w*ht,U(v,2*A+2*b),v[2*A+2*b+1]+=R*ht,U(v,2*A+2*b+1),v[2*A+2*b+1]+=w*je,U(v,2*A+2*b+1),v[2*A+2*b+2]+=R*je,U(v,2*A+2*b+2)}for(T=0;T<_;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=_;T<2*_;T++)v[T]=0;return new o(v,0)};function U(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function k(T,_){this.g=T,this.h=_}function P(T,_){if(D(_))throw Error("division by zero");if(D(T))return new k(p,p);if(V(T))return _=P(O(T),_),new k(O(_.g),O(_.h));if(V(_))return _=P(T,O(_)),new k(O(_.g),_.h);if(T.g.length>30){if(V(T)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,A=_;A.l(T)<=0;)v=G(v),A=G(A);var b=ee(v,1),R=ee(A,1);for(A=ee(A,2),v=ee(v,2);!D(A);){var w=R.add(A);w.l(T)<=0&&(b=b.add(v),R=w),A=ee(A,1),v=ee(v,1)}return _=H(T,b.j(_)),new k(b,_)}for(b=p;T.l(_)>=0;){for(v=Math.max(1,Math.floor(T.m()/_.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),R=u(v),w=R.j(_);V(w)||w.l(T)>0;)v-=A,R=u(v),w=R.j(_);D(R)&&(R=m),b=b.add(R),T=H(T,w)}return new k(b,T)}t.B=function(T){return P(this,T).h},t.and=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)&T.i(A);return new o(v,this.h&T.h)},t.or=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)|T.i(A);return new o(v,this.h|T.h)},t.xor=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)^T.i(A);return new o(v,this.h^T.h)};function G(T){const _=T.g.length+1,v=[];for(let A=0;A<_;A++)v[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(v,T.h)}function ee(T,_){const v=_>>5;_%=32;const A=T.g.length-v,b=[];for(let R=0;R<A;R++)b[R]=_>0?T.i(R+v)>>>_|T.i(R+v+1)<<32-_:T.i(R+v);return new o(b,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Wm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,pr=o}).apply(typeof Hf<"u"?Hf:typeof self<"u"?self:typeof window<"u"?window:{});var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gm,di,Km,jo,dl,Qm,Ym,Jm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Do=="object"&&Do];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,C,N){for(var K=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)K[pe-2]=arguments[pe];return h.prototype[C].apply(g,K)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function D(a,h){for(let g=1;g<arguments.length;g++){const C=arguments[g];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const N=C.length||0;a.length=d+N;for(let K=0;K<N;K++)a[d+K]=C[K]}else a.push(C)}}class V{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){o.setTimeout(()=>{throw a},0)}function H(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class U{constructor(){this.h=this.g=null}add(h,d){const g=k.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var k=new V(()=>new P,a=>a.reset());class P{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let G,ee=!1,T=new U,_=()=>{const a=Promise.resolve(void 0);G=()=>{a.then(v)}};function v(){for(var a;a=H();){try{a.h.call(a.g)}catch(d){O(d)}var h=k;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ee=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function w(a){return/^[\s\xa0]*$/.test(a)}function je(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(je,b),je.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&je.Z.h.call(this)},je.prototype.h=function(){je.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ht="closure_listenable_"+(Math.random()*1e6|0),Oe=0;function fe(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++Oe,this.da=this.fa=!1}function Te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function St(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function tn(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function kt(a){const h={};for(const d in a)h[d]=a[d];return h}const it="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function En(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let N=0;N<it.length;N++)d=it[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Wt(a){this.src=a,this.g={},this.h=0}Wt.prototype.add=function(a,h,d,g,C){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const K=ft(a,h,g,C);return K>-1?(h=a[K],d||(h.fa=!1)):(h=new fe(h,this.src,N,!!g,C),h.fa=d,a.push(h)),h};function Gt(a,h){const d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),N;(N=C>=0)&&Array.prototype.splice.call(g,C,1),N&&(Te(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ft(a,h,d,g){for(let C=0;C<a.length;++C){const N=a[C];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return C}return-1}var L="closure_lm_"+(Math.random()*1e6|0),X={};function Y(a,h,d,g,C){if(Array.isArray(h)){for(let N=0;N<h.length;N++)Y(a,h[N],d,g,C);return null}return d=Q(d),a&&a[ht]?a.J(h,d,c(g)?!!g.capture:!1,C):ne(a,h,d,!1,g,C)}function ne(a,h,d,g,C,N){if(!h)throw Error("Invalid event type");const K=c(C)?!!C.capture:!!C;let pe=j(a);if(pe||(a[L]=pe=new Wt(a)),d=pe.add(h,d,g,K,N),d.proxy)return d;if(g=_e(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(C=K),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(S(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function _e(){function a(d){return h.call(a.src,a.listener,d)}const h=F;return a}function E(a,h,d,g,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)E(a,h[N],d,g,C);else g=c(g)?!!g.capture:!!g,d=Q(d),a&&a[ht]?(a=a.i,N=String(h).toString(),N in a.g&&(h=a.g[N],d=ft(h,d,g,C),d>-1&&(Te(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[N],a.h--)))):a&&(a=j(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ft(h,d,g,C)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ht])Gt(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(S(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=j(h))?(Gt(d,a),d.h==0&&(d.src=null,h[L]=null)):Te(a)}}}function S(a){return a in X?X[a]:X[a]="on"+a}function F(a,h){if(a.da)a=!0;else{h=new je(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&I(a),a=d.call(g,h)}return a}function j(a){return a=a[L],a instanceof Wt?a:null}var x="__closure_events_fn_"+(Math.random()*1e9>>>0);function Q(a){return typeof a=="function"?a:(a[x]||(a[x]=function(h){return a.handleEvent(h)}),a[x])}function W(){A.call(this),this.i=new Wt(this),this.M=this,this.G=null}p(W,A),W.prototype[ht]=!0,W.prototype.removeEventListener=function(a,h,d,g){E(this,a,h,d,g)};function q(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var C=h;h=new b(g,a),En(h,C)}C=!0;let N,K;if(d)for(K=d.length-1;K>=0;K--)N=h.g=d[K],C=z(N,g,!0,h)&&C;if(N=h.g=a,C=z(N,g,!0,h)&&C,C=z(N,g,!1,h)&&C,d)for(K=0;K<d.length;K++)N=h.g=d[K],C=z(N,g,!1,h)&&C}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Te(d[g]);delete a.g[h],a.h--}}this.G=null},W.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},W.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function z(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let N=0;N<h.length;++N){const K=h[N];if(K&&!K.da&&K.capture==d){const pe=K.listener,Je=K.ha||K.src;K.fa&&Gt(a.i,K),C=pe.call(Je,g)!==!1&&C}}return C&&!g.defaultPrevented}function se(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function J(a){a.g=se(()=>{a.g=null,a.i&&(a.i=!1,J(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class re extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(a){A.call(this),this.h=a,this.g={}}p(oe,A);var ge=[];function ke(a){St(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}oe.prototype.N=function(){oe.Z.N.call(this),ke(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var be=o.JSON.stringify,dt=o.JSON.parse,pt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Dt(){}function Nt(){}var Kt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function rs(){b.call(this,"d")}p(rs,b);function ot(){b.call(this,"c")}p(ot,b);var tt={},Ws=null;function Pr(){return Ws=Ws||new W}tt.Ia="serverreachability";function Gu(a){b.call(this,tt.Ia,a)}p(Gu,b);function Gs(a){const h=Pr();q(h,new Gu(h))}tt.STAT_EVENT="statevent";function Ku(a,h){b.call(this,tt.STAT_EVENT,a),this.stat=h}p(Ku,b);function It(a){const h=Pr();q(h,new Ku(h,a))}tt.Ja="timingevent";function Qu(a,h){b.call(this,tt.Ja,a),this.size=h}p(Qu,b);function Ks(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Qs(){this.g=!0}Qs.prototype.ua=function(){this.g=!1};function ey(a,h,d,g,C,N){a.info(function(){if(a.g)if(N){var K="",pe=N.split("&");for(let De=0;De<pe.length;De++){var Je=pe[De].split("=");if(Je.length>1){const nt=Je[0];Je=Je[1];const rn=nt.split("_");K=rn.length>=2&&rn[1]=="type"?K+(nt+"="+Je+"&"):K+(nt+"=redacted&")}}}else K=null;else K=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+K})}function ty(a,h,d,g,C,N,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+N+" "+K})}function ss(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ry(a,d)+(g?" "+g:"")})}function ny(a,h){a.info(function(){return"TIMEOUT: "+h})}Qs.prototype.info=function(){};function ry(a,h){if(!a.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let K=1;K<g.length;K++)g[K]=""}}}}return be(N)}catch{return h}}var _o={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ju;function ic(){}p(ic,Dt),ic.prototype.g=function(){return new XMLHttpRequest},Ju=new ic;function Ys(a){return encodeURIComponent(String(a))}function sy(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Wn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new oe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xu}function Xu(){this.i=null,this.g="",this.h=!1}var Zu={},oc={};function ac(a,h,d){a.M=1,a.A=vo(nn(h)),a.u=d,a.R=!0,eh(a,null)}function eh(a,h){a.F=Date.now(),yo(a),a.B=nn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),dh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Xu,a.g=Dh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new re(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(ge[0]=C.toString()),C=ge);for(let N=0;N<C.length;N++){const K=Y(d,C[N],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?kt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Gs(),ey(a.i,a.v,a.B,a.l,a.S,a.u)}Wn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Qn(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const pe=Qn(this.g),Je=this.g.ya(),De=this.g.ca();if(!(pe<3)&&(pe!=3||this.g&&(this.h.h||this.g.la()||Eh(this.g)))){this.K||pe!=4||Je==7||(Je==8||De<=0?Gs(3):Gs(2)),cc(this);var h=this.g.ca();this.X=h;var d=iy(this);if(this.o=h==200,ty(this.i,this.v,this.B,this.l,this.S,pe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var N=g;break t}}N=null}if(a=N)ss(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lc(this,a);else{this.o=!1,this.m=3,It(12),kr(this),Js(this);break e}}if(this.R){a=!0;let nt;for(;!this.K&&this.C<d.length;)if(nt=oy(this,d),nt==oc){pe==4&&(this.m=4,It(14),a=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Zu){this.m=4,It(15),ss(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ss(this.i,this.l,nt,null),lc(this,nt);if(th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pe!=4||d.length!=0||this.h.h||(this.m=1,It(16),a=!1),this.o=this.o&&a,!a)ss(this.i,this.l,d,"[Invalid Chunked Response]"),kr(this),Js(this);else if(d.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),_c(K),K.P=!0,It(11))}}else ss(this.i,this.l,d,null),lc(this,d);pe==4&&kr(this),this.o&&!this.K&&(pe==4?Sh(this.j,this):(this.o=!1,yo(this)))}else Ey(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,It(12)):(this.m=0,It(13)),kr(this),Js(this)}}}catch{}finally{}};function iy(a){if(!th(a))return a.g.la();const h=Eh(a.g);if(h==="")return"";let d="";const g=h.length,C=Qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return kr(a),Js(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<g;N++)a.h.h=!0,d+=a.h.i.decode(h[N],{stream:!(C&&N==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function th(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function oy(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?oc:(d=Number(h.substring(d,g)),isNaN(d)?Zu:(g+=1,g+d>h.length?oc:(h=h.slice(g,g+d),a.C=g+d,h)))}Wn.prototype.cancel=function(){this.K=!0,kr(this)};function yo(a){a.T=Date.now()+a.H,nh(a,a.H)}function nh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ks(u(a.aa,a),h)}function cc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Wn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(ny(this.i,this.B),this.M!=2&&(Gs(),It(17)),kr(this),this.m=2,Js(this)):nh(this,this.T-a)};function Js(a){a.j.I==0||a.K||Sh(a.j,a)}function kr(a){cc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ke(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function lc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||uc(d.h,a))){if(!a.L&&uc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)bo(d),To(d);else break e;gc(d),It(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ks(u(d.Va,d),6e3));ih(d.h)<=1&&d.ta&&(d.ta=void 0)}else Nr(d,11)}else if((a.L||d.g==a)&&bo(d),!w(h))for(C=d.Ba.g.parse(h),h=0;h<C.length;h++){let De=C[h];const nt=De[0];if(!(nt<=d.K))if(d.K=nt,De=De[1],d.I==2)if(De[0]=="c"){d.M=De[1],d.ba=De[2];const rn=De[3];rn!=null&&(d.ka=rn,d.j.info("VER="+d.ka));const Vr=De[4];Vr!=null&&(d.za=Vr,d.j.info("SVER="+d.za));const Yn=De[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(g=1.5*Yn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Jn=a.g;if(Jn){const Ro=Jn.g?Jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ro){var N=g.h;N.g||Ro.indexOf("spdy")==-1&&Ro.indexOf("quic")==-1&&Ro.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(hc(N,N.h),N.h=null))}if(g.G){const yc=Jn.g?Jn.g.getResponseHeader("X-HTTP-Session-Id"):null;yc&&(g.wa=yc,Me(g.J,g.G,yc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var K=a;if(g.na=kh(g,g.L?g.ba:null,g.W),K.L){oh(g.h,K);var pe=K,Je=g.O;Je&&(pe.H=Je),pe.D&&(cc(pe),yo(pe)),g.g=K}else Ah(g);d.i.length>0&&Io(d)}else De[0]!="stop"&&De[0]!="close"||Nr(d,7);else d.I==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Nr(d,7):mc(d):De[0]!="noop"&&d.l&&d.l.qa(De),d.A=0)}}Gs(4)}catch{}}var ay=class{constructor(a,h){this.g=a,this.map=h}};function rh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ih(a){return a.h?1:a.g?a.g.size:0}function uc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function hc(a,h){a.g?a.g.add(h):a.h=h}function oh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rh.prototype.cancel=function(){if(this.i=ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ah(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return y(a.i)}var ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let C,N=null;g>=0?(C=a[d].substring(0,g),N=a[d].substring(g+1)):C=a[d],h(C,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Gn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Gn?(this.l=a.l,Xs(this,a.j),this.o=a.o,this.g=a.g,Zs(this,a.u),this.h=a.h,fc(this,ph(a.i)),this.m=a.m):a&&(h=String(a).match(ch))?(this.l=!1,Xs(this,h[1]||"",!0),this.o=ei(h[2]||""),this.g=ei(h[3]||"",!0),Zs(this,h[4]),this.h=ei(h[5]||"",!0),fc(this,h[6]||"",!0),this.m=ei(h[7]||"")):(this.l=!1,this.i=new ni(null,this.l))}Gn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ti(h,lh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ti(h,lh,!0),"@"),a.push(Ys(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ti(d,d.charAt(0)=="/"?hy:uy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ti(d,dy)),a.join("")},Gn.prototype.resolve=function(a){const h=nn(this);let d=!!a.j;d?Xs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Zs(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=h.h.lastIndexOf("/");C!=-1&&(g=h.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const N=[];for(let K=0;K<C.length;){const pe=C[K++];pe=="."?g&&K==C.length&&N.push(""):pe==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&K==C.length&&N.push("")):(N.push(pe),g=!0)}g=N.join("/")}else g=C}return d?h.h=g:d=a.i.toString()!=="",d?fc(h,ph(a.i)):d=!!a.m,d&&(h.m=a.m),h};function nn(a){return new Gn(a)}function Xs(a,h,d){a.j=d?ei(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Zs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function fc(a,h,d){h instanceof ni?(a.i=h,py(a.i,a.l)):(d||(h=ti(h,fy)),a.i=new ni(h,a.l))}function Me(a,h,d){a.i.set(h,d)}function vo(a){return Me(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ei(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ti(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,ly),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ly(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lh=/[#\/\?@]/g,uy=/[#\?:]/g,hy=/[#\?]/g,fy=/[#\?@]/g,dy=/#/g;function ni(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Dr(a){a.g||(a.g=new Map,a.h=0,a.i&&cy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ni.prototype,t.add=function(a,h){Dr(this),this.i=null,a=is(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function uh(a,h){Dr(a),h=is(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hh(a,h){return Dr(a),h=is(a,h),a.g.has(h)}t.forEach=function(a,h){Dr(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)};function fh(a,h){Dr(a);let d=[];if(typeof h=="string")hh(a,h)&&(d=d.concat(a.g.get(is(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Dr(this),this.i=null,a=is(this,a),hh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=fh(this,a),a.length>0?String(a[0]):h):h};function dh(a,h,d){uh(a,h),d.length>0&&(a.i=null,a.g.set(is(a,h),y(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const C=Ys(d);d=fh(this,d);for(let N=0;N<d.length;N++){let K=C;d[N]!==""&&(K+="="+Ys(d[N])),a.push(K)}}return this.i=a.join("&")};function ph(a){const h=new ni;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function is(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function py(a,h){h&&!a.j&&(Dr(a),a.i=null,a.g.forEach(function(d,g){const C=g.toLowerCase();g!=C&&(uh(this,g),dh(this,C,d))},a)),a.j=h}function my(a,h){const d=new Qs;if(o.Image){const g=new Image;g.onload=f(Kn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Kn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Kn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Kn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function gy(a,h){const d=new Qs,g=new AbortController,C=setTimeout(()=>{g.abort(),Kn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?Kn(d,"TestPingServer: ok",!0,h):Kn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Kn(d,"TestPingServer: error",!1,h)})}function Kn(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function _y(){this.g=new pt}function dc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(dc,Dt),dc.prototype.g=function(){return new Eo(this.i,this.h)};function Eo(a,h){W.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Eo,W),t=Eo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,si(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;mh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function mh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ri(this):si(this),this.readyState==3&&mh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ri(this))},t.Na=function(a){this.g&&(this.response=a,ri(this))},t.ga=function(){this.g&&ri(this)};function ri(a){a.readyState=4,a.l=null,a.j=null,a.B=null,si(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gh(a){let h="";return St(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function pc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=gh(d),typeof a=="string"?d!=null&&Ys(d):Me(a,h,d))}function $e(a){W.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p($e,W);var yy=/^https?$/i,vy=["POST","PUT"];t=$e.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ju.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){_h(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(vy,h,void 0)>=0)||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,K]of d)this.g.setRequestHeader(N,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){_h(this,N)}};function _h(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,yh(a),wo(a)}function yh(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,q(this,"complete"),q(this,"abort"),wo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wo(this,!0)),$e.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?vh(this):this.Xa())},t.Xa=function(){vh(this)};function vh(a){if(a.h&&typeof i<"u"){if(a.v&&Qn(a)==4)setTimeout(a.Ca.bind(a),0);else if(q(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=N===0){let K=String(a.D).match(ch)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),g=!yy.test(K?K.toLowerCase():"")}d=g}if(d)q(a,"complete"),q(a,"success");else{a.o=6;try{var C=Qn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",yh(a)}}finally{wo(a)}}}}function wo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||q(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),dt(h)}};function Eh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ey(a){const h={};a=(a.g&&Qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=sy(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[C]||[];h[C]=N,N.push(d)}tn(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ii(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function wh(a){this.za=0,this.i=[],this.j=new Qs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ii("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ii("baseRetryDelayMs",5e3,a),this.Za=ii("retryDelaySeedMs",1e4,a),this.Ta=ii("forwardChannelMaxRetries",2,a),this.va=ii("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new rh(a&&a.concurrentRequestLimit),this.Ba=new _y,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=wh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){It(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=kh(this,null,this.W),Io(this)};function mc(a){if(Th(a),a.I==3){var h=a.V++,d=nn(a.J);if(Me(d,"SID",a.M),Me(d,"RID",h),Me(d,"TYPE","terminate"),oi(a,d),h=new Wn(a,a.j,h),h.M=2,h.A=vo(nn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Dh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),yo(h)}Ph(a)}function To(a){a.g&&(_c(a),a.g.cancel(),a.g=null)}function Th(a){To(a),a.v&&(o.clearTimeout(a.v),a.v=null),bo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Io(a){if(!sh(a.h)&&!a.m){a.m=!0;var h=a.Ea;G||_(),ee||(G(),ee=!0),T.add(h,a),a.D=0}}function wy(a,h){return ih(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ks(u(a.Ea,a,h),Ch(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Wn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=kt(N),En(N,this.U)):N=this.U),this.u!==null||this.R||(C.J=N,N=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=bh(this,C,h),d=nn(this.J),Me(d,"RID",a),Me(d,"CVER",22),this.G&&Me(d,"X-HTTP-Session-Id",this.G),oi(this,d),N&&(this.R?h="headers="+Ys(gh(N))+"&"+h:this.u&&pc(d,this.u,N)),hc(this.h,C),this.Ra&&Me(d,"TYPE","init"),this.S?(Me(d,"$req",h),Me(d,"SID","null"),C.U=!0,ac(C,d,null)):ac(C,d,h),this.I=2}}else this.I==3&&(a?Ih(this,a):this.i.length==0||sh(this.h)||Ih(this))};function Ih(a,h){var d;h?d=h.l:d=a.V++;const g=nn(a.J);Me(g,"SID",a.M),Me(g,"RID",d),Me(g,"AID",a.K),oi(a,g),a.u&&a.o&&pc(g,a.u,a.o),d=new Wn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=bh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),hc(a.h,d),ac(d,g,h)}function oi(a,h){a.H&&St(a.H,function(d,g){Me(h,g,d)}),a.l&&St({},function(d,g){Me(h,g,d)})}function bh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var C=a.i;let pe=-1;for(;;){const Je=["count="+d];pe==-1?d>0?(pe=C[0].g,Je.push("ofs="+pe)):pe=0:Je.push("ofs="+pe);let De=!0;for(let nt=0;nt<d;nt++){var N=C[nt].g;const rn=C[nt].map;if(N-=pe,N<0)pe=Math.max(0,C[nt].g-100),De=!1;else try{N="req"+N+"_"||"";try{var K=rn instanceof Map?rn:Object.entries(rn);for(const[Vr,Yn]of K){let Jn=Yn;c(Yn)&&(Jn=be(Yn)),Je.push(N+Vr+"="+encodeURIComponent(Jn))}}catch(Vr){throw Je.push(N+"type="+encodeURIComponent("_badmap")),Vr}}catch{g&&g(rn)}}if(De){K=Je.join("&");break e}}K=void 0}return a=a.i.splice(0,d),h.G=a,K}function Ah(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;G||_(),ee||(G(),ee=!0),T.add(h,a),a.A=0}}function gc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ks(u(a.Da,a),Ch(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Rh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ks(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,It(10),To(this),Rh(this))};function _c(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Rh(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=nn(a.na);Me(h,"RID","rpc"),Me(h,"SID",a.M),Me(h,"AID",a.K),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Me(h,"TO",a.ia),Me(h,"TYPE","xmlhttp"),oi(a,h),a.u&&a.o&&pc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=vo(nn(h)),d.u=null,d.R=!0,eh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,To(this),gc(this),It(19))};function bo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Sh(a,h){var d=null;if(a.g==h){bo(a),_c(a),a.g=null;var g=2}else if(uc(a.h,h))d=h.G,oh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var C=a.D;g=Pr(),q(g,new Qu(g,d)),Io(a)}else Ah(a);else if(C=h.m,C==3||C==0&&h.X>0||!(g==1&&wy(a,h)||g==2&&gc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function Ch(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Nr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const C=!g;g=new Gn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Xs(g,"https"),vo(g),C?my(g.toString(),d):gy(g.toString(),d)}else It(2);a.I=0,a.l&&a.l.pa(h),Ph(a),Th(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Ph(a){if(a.I=0,a.ja=[],a.l){const h=ah(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ja,h),D(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function kh(a,h,d){var g=d instanceof Gn?nn(d):new Gn(d);if(g.g!="")h&&(g.g=h+"."+g.g),Zs(g,g.u);else{var C=o.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const N=new Gn(null);g&&Xs(N,g),h&&(N.g=h),C&&Zs(N,C),d&&(N.h=d),g=N}return d=a.G,h=a.wa,d&&h&&Me(g,d,h),Me(g,"VER",a.ka),oi(a,g),g}function Dh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new $e(new dc({ab:d})):new $e(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nh(){}t=Nh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ao(){}Ao.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){W.call(this),this.g=new wh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!w(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new os(this)}p(Vt,W),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){mc(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=be(a),a=d);h.i.push(new ay(h.Ya++,a)),h.I==3&&Io(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,mc(this.g),delete this.g,Vt.Z.N.call(this)};function Vh(a){rs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Vh,rs);function Oh(){ot.call(this),this.status=1}p(Oh,ot);function os(a){this.g=a}p(os,Nh),os.prototype.ra=function(){q(this.g,"a")},os.prototype.qa=function(a){q(this.g,new Vh(a))},os.prototype.pa=function(a){q(this.g,new Oh)},os.prototype.oa=function(){q(this.g,"b")},Ao.prototype.createWebChannel=Ao.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Jm=function(){return new Ao},Ym=function(){return Pr()},Qm=tt,dl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_o.NO_ERROR=0,_o.TIMEOUT=8,_o.HTTP_ERROR=6,jo=_o,Yu.COMPLETE="complete",Km=Yu,Nt.EventType=Kt,Kt.OPEN="a",Kt.CLOSE="b",Kt.ERROR="c",Kt.MESSAGE="d",W.prototype.listen=W.prototype.J,di=Nt,$e.prototype.listenOnce=$e.prototype.K,$e.prototype.getLastError=$e.prototype.Ha,$e.prototype.getLastErrorCode=$e.prototype.ya,$e.prototype.getStatus=$e.prototype.ca,$e.prototype.getResponseJson=$e.prototype.La,$e.prototype.getResponseText=$e.prototype.la,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Fa,Gm=$e}).apply(typeof Do<"u"?Do:typeof self<"u"?self:typeof window<"u"?window:{});const qf="@firebase/firestore",zf="4.9.2";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let js="12.3.0";/**
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
 */const Kr=new Zl("@firebase/firestore");function hs(){return Kr.logLevel}function Z(t,...e){if(Kr.logLevel<=ye.DEBUG){const n=e.map(nu);Kr.debug(`Firestore (${js}): ${t}`,...n)}}function Ln(t,...e){if(Kr.logLevel<=ye.ERROR){const n=e.map(nu);Kr.error(`Firestore (${js}): ${t}`,...n)}}function Ds(t,...e){if(Kr.logLevel<=ye.WARN){const n=e.map(nu);Kr.warn(`Firestore (${js}): ${t}`,...n)}}function nu(t){if(typeof t=="string")return t;try{/**
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
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Xm(t,r,n)}function Xm(t,e,n){let r=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ln(r),new Error(r)}function Pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Xm(e,s,r)}function he(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class Zm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(_t.UNAUTHENTICATED)))}shutdown(){}}class QI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class YI{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new Zm(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class JI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new JI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=eb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function pl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Fc(s)===Fc(i)?Ee(s,i):Fc(s)?1:-1}return Ee(t.length,e.length)}const tb=55296,nb=57343;function Fc(t){const e=t.charCodeAt(0);return e>=tb&&e<=nb}function Ns(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Gf="__name__";class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ee(e.length,n.length)}static compareSegments(e,n){const r=an.isNumericId(e),s=an.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(n)):pl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class Fe extends an{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Fe(n)}static emptyPath(){return new Fe([])}}const rb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends an{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return rb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gf}static keyField(){return new lt([Gf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Fe.fromString(e))}static fromName(e){return new ie(Fe.fromString(e).popFirst(5))}static empty(){return new ie(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Fe(e.slice()))}}/**
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
 */function sb(t,e,n){if(!n)throw new te($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ib(t,e,n,r){if(e===!0&&r===!0)throw new te($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kf(t){if(!ie.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function eg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function $i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=su(t);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ao(t,e){if(!eg(t))throw new te($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new te($.INVALID_ARGUMENT,n);return!0}/**
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
 */const Qf=-62135596800,Yf=1e6;class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Yf);return new Le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Qf)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yf}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ao(e,Le._jsonSchema))return new Le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Le._jsonSchemaVersion="firestore/timestamp/1.0",Le._jsonSchema={type:Qe("string",Le._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
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
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Le(0,0))}static max(){return new ue(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Hi=-1;function ob(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new wr(s,ie.empty(),e)}function ab(t){return new wr(t.readTime,t.key,Hi)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(ue.min(),ie.empty(),Hi)}static max(){return new wr(ue.max(),ie.empty(),Hi)}}function cb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const lb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ub{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function $s(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==lb)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):B.reject(n)}static resolve(e){return new B(((n,r)=>{n(e)}))}static reject(e){return new B(((n,r)=>{r(e)}))}static waitFor(e){return new B(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next((s=>s?B.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new B(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new B(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function hb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Hs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ha{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ha.ce=-1;/**
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
 */const iu=-1;function qa(t){return t==null}function ua(t){return t===0&&1/t==-1/0}function fb(t){return typeof t=="number"&&Number.isInteger(t)&&!ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const tg="";function db(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jf(e)),e=pb(t.get(n),e);return Jf(e)}function pb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case tg:n+="";break;default:n+=i}}return n}function Jf(t){return t+tg+""}/**
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
 */function Xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ng(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new No(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new No(this.root,e,this.comparator,!1)}getReverseIterator(){return new No(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new No(this.root,e,this.comparator,!0)}}class No{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zf(this.data.getIterator())}getIteratorFrom(e){return new Zf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Zf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new et(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class rg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rg("Invalid base64 string: "+i):i}})(e);return new ut(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const mb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=mb.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */const sg="server_timestamp",ig="__type__",og="__previous_value__",ag="__local_write_time__";function ou(t){return(t?.mapValue?.fields||{})[ig]?.stringValue===sg}function za(t){const e=t.mapValue.fields[og];return ou(e)?za(e):e}function qi(t){const e=Tr(t.mapValue.fields[ag].timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class gb{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ha="(default)";class zi{constructor(e,n){this.projectId=e,this.database=n||ha}static empty(){return new zi("","")}get isDefaultDatabase(){return this.database===ha}isEqual(e){return e instanceof zi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cg="__type__",_b="__max__",Vo={mapValue:{}},lg="__vector__",fa="value";function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ou(t)?4:vb(t)?9007199254740991:yb(t)?10:11:le(28295,{value:t})}function yn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qi(t).isEqual(qi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),c=Tr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),c=ze(i.doubleValue);return o===c?ua(o)===ua(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Xf(o)!==Xf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yn(o[l],c[l])))return!1;return!0})(t,e);default:return le(52216,{left:t})}}function Wi(t,e){return(t.values||[]).find((n=>yn(n,e)))!==void 0}function Vs(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return ed(t.timestampValue,e.timestampValue);case 4:return ed(qi(t),qi(e));case 5:return pl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=Ir(i),l=Ir(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Ee(c[u],l[u]);if(f!==0)return f}return Ee(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=Ee(ze(i.latitude),ze(o.latitude));return c!==0?c:Ee(ze(i.longitude),ze(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return td(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[fa]?.arrayValue,f=l[fa]?.arrayValue,p=Ee(u?.values?.length||0,f?.values?.length||0);return p!==0?p:td(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Vo.mapValue&&o===Vo.mapValue)return 0;if(i===Vo.mapValue)return 1;if(o===Vo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=pl(l[p],f[p]);if(m!==0)return m;const y=Vs(c[l[p]],u[f[p]]);if(y!==0)return y}return Ee(l.length,f.length)})(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function ed(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Tr(t),r=Tr(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function td(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Vs(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function Os(t){return ml(t)}function ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Ir(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ie.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ml(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ml(n.fields[o])}`;return s+"}"})(t.mapValue):le(61005,{value:t})}function $o(t){switch(br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=za(t);return e?16+$o(e):16;case 5:return 2*t.stringValue.length;case 6:return Ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+$o(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Zr(r.fields,((i,o)=>{s+=i.length+$o(o)})),s})(t.mapValue);default:throw le(13486,{value:t})}}function gl(t){return!!t&&"integerValue"in t}function au(t){return!!t&&"arrayValue"in t}function nd(t){return!!t&&"nullValue"in t}function rd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ho(t){return!!t&&"mapValue"in t}function yb(t){return(t?.mapValue?.fields||{})[cg]?.stringValue===lg}function Si(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Zr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Si(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Si(t.arrayValue.values[n]);return e}return{...t}}function vb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===_b}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Si(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Si(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Zr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ft(Si(this.value))}}function ug(t){const e=[];return Zr(t.fields,((n,r)=>{const s=new lt([n]);if(Ho(r)){const i=ug(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Qt(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new vt(e,0,ue.min(),ue.min(),ue.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,ue.min(),ue.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,ue.min(),ue.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class da{constructor(e,n){this.position=e,this.inclusive=n}}function sd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function id(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function Eb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hg{}class Ze extends hg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Tb(e,n,r):n==="array-contains"?new Ab(e,r):n==="in"?new Rb(e,r):n==="not-in"?new Sb(e,r):n==="array-contains-any"?new Cb(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ib(e,r):new bb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Vs(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends hg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new vn(e,n)}matches(e){return fg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function fg(t){return t.op==="and"}function dg(t){return wb(t)&&fg(t)}function wb(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function _l(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Os(t.value);if(dg(t))return t.filters.map((e=>_l(e))).join(",");{const e=t.filters.map((n=>_l(n))).join(",");return`${t.op}(${e})`}}function pg(t,e){return t instanceof Ze?(function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)})(t,e):t instanceof vn?(function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&pg(o,s.filters[c])),!0):!1})(t,e):void le(19439)}function mg(t){return t instanceof Ze?(function(n){return`${n.field.canonicalString()} ${n.op} ${Os(n.value)}`})(t):t instanceof vn?(function(n){return n.op.toString()+" {"+n.getFilters().map(mg).join(" ,")+"}"})(t):"Filter"}class Tb extends Ze{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ib extends Ze{constructor(e,n){super(e,"in",n),this.keys=gg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class bb extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=gg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function gg(t,e){return(e.arrayValue?.values||[]).map((n=>ie.fromName(n.referenceValue)))}class Ab extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return au(n)&&Wi(n.arrayValue,this.value)}}class Rb extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wi(this.value.arrayValue,n)}}class Sb extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Wi(this.value.arrayValue,n)}}class Cb extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!au(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Wi(this.value.arrayValue,r)))}}/**
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
 */class Pb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function od(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Pb(t,e,n,r,s,i,o)}function cu(t){const e=he(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>_l(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Os(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Os(r))).join(",")),e.Te=n}return e.Te}function lu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Eb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!id(t.startAt,e.startAt)&&id(t.endAt,e.endAt)}function yl(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Wa{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kb(t,e,n,r,s,i,o,c){return new Wa(t,e,n,r,s,i,o,c)}function uu(t){return new Wa(t)}function ad(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Db(t){return t.collectionGroup!==null}function Ci(t){const e=he(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new et(lt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new pa(i,r))})),n.has(lt.keyField().canonicalString())||e.Ie.push(new pa(lt.keyField(),r))}return e.Ie}function un(t){const e=he(t);return e.Ee||(e.Ee=Nb(e,Ci(t))),e.Ee}function Nb(t,e){if(t.limitType==="F")return od(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new pa(s.field,i)}));const n=t.endAt?new da(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new da(t.startAt.position,t.startAt.inclusive):null;return od(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vl(t,e,n){return new Wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ga(t,e){return lu(un(t),un(e))&&t.limitType===e.limitType}function _g(t){return`${cu(un(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>mg(s))).join(", ")}]`),qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Os(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Os(s))).join(",")),`Target(${r})`})(un(t))}; limitType=${t.limitType})`}function Ka(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=sd(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Ci(r),s)||r.endAt&&!(function(o,c,l){const u=sd(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Ci(r),s))})(t,e)}function Vb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yg(t){return(e,n)=>{let r=!1;for(const s of Ci(t)){const i=Ob(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ob(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Vs(l,u):le(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
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
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return ng(this.inner)}size(){return this.innerSize}}/**
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
 */const xb=new Be(ie.comparator);function Un(){return xb}const vg=new Be(ie.comparator);function pi(...t){let e=vg;for(const n of t)e=e.insert(n.key,n);return e}function Eg(t){let e=vg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Fr(){return Pi()}function wg(){return Pi()}function Pi(){return new es((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Mb=new Be(ie.comparator),Lb=new et(ie.comparator);function we(...t){let e=Lb;for(const n of t)e=e.add(n);return e}const Ub=new et(Ee);function Fb(){return Ub}/**
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
 */function hu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(e)?"-0":e}}function Tg(t){return{integerValue:""+t}}function Bb(t,e){return fb(e)?Tg(e):hu(t,e)}/**
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
 */class Qa{constructor(){this._=void 0}}function jb(t,e,n){return t instanceof Gi?(function(s,i){const o={fields:{[ig]:{stringValue:sg},[ag]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ou(i)&&(i=za(i)),i&&(o.fields[og]=i),{mapValue:o}})(n,e):t instanceof Ki?bg(t,e):t instanceof Qi?Ag(t,e):(function(s,i){const o=Ig(s,i),c=cd(o)+cd(s.Ae);return gl(o)&&gl(s.Ae)?Tg(c):hu(s.serializer,c)})(t,e)}function $b(t,e,n){return t instanceof Ki?bg(t,e):t instanceof Qi?Ag(t,e):n}function Ig(t,e){return t instanceof ma?(function(r){return gl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Gi extends Qa{}class Ki extends Qa{constructor(e){super(),this.elements=e}}function bg(t,e){const n=Rg(e);for(const r of t.elements)n.some((s=>yn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Qi extends Qa{constructor(e){super(),this.elements=e}}function Ag(t,e){let n=Rg(e);for(const r of t.elements)n=n.filter((s=>!yn(s,r)));return{arrayValue:{values:n}}}class ma extends Qa{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function cd(t){return ze(t.integerValue||t.doubleValue)}function Rg(t){return au(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Hb{constructor(e,n){this.field=e,this.transform=n}}function qb(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Ki&&s instanceof Ki||r instanceof Qi&&s instanceof Qi?Ns(r.elements,s.elements,yn):r instanceof ma&&s instanceof ma?yn(r.Ae,s.Ae):r instanceof Gi&&s instanceof Gi})(t.transform,e.transform)}class zb{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ya{}function Sg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Pg(t.key,Nn.none()):new co(t.key,t.data,Nn.none());{const n=t.data,r=Ft.empty();let s=new et(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ts(t.key,r,new Qt(s.toArray()),Nn.none())}}function Wb(t,e,n){t instanceof co?(function(s,i,o){const c=s.value.clone(),l=ud(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof ts?(function(s,i,o){if(!qo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=ud(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Cg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function ki(t,e,n,r){return t instanceof co?(function(i,o,c,l){if(!qo(i.precondition,o))return c;const u=i.value.clone(),f=hd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ts?(function(i,o,c,l){if(!qo(i.precondition,o))return c;const u=hd(i.fieldTransforms,l,o),f=o.data;return f.setAll(Cg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function Gb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ig(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function ld(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ns(r,s,((i,o)=>qb(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class co extends Ya{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ts extends Ya{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ud(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,$b(o,c,n[s]))}return r}function hd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,jb(i,o,e))}return r}class Pg extends Ya{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kb extends Ya{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Qb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Wb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wg();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Sg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),we())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,((n,r)=>ld(n,r)))&&Ns(this.baseMutations,e.baseMutations,((n,r)=>ld(n,r)))}}class fu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return Mb})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new fu(e,n,r,s)}}/**
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
 */class Yb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Jb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,Ie;function Xb(t){switch(t){case $.OK:return le(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function kg(t){if(t===void 0)return Ln("GRPC error has no .code"),$.UNKNOWN;switch(t){case Ge.OK:return $.OK;case Ge.CANCELLED:return $.CANCELLED;case Ge.UNKNOWN:return $.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return $.INTERNAL;case Ge.UNAVAILABLE:return $.UNAVAILABLE;case Ge.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ge.NOT_FOUND:return $.NOT_FOUND;case Ge.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ge.ABORTED:return $.ABORTED;case Ge.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ge.DATA_LOSS:return $.DATA_LOSS;default:return le(39323,{code:t})}}(Ie=Ge||(Ge={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Zb(){return new TextEncoder}/**
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
 */const eA=new pr([4294967295,4294967295],0);function fd(t){const e=Zb().encode(t),n=new Wm;return n.update(e),new Uint8Array(n.digest())}function dd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pr([n,r],0),new pr([s,i],0)]}class du{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mi(`Invalid padding: ${n}`);if(r<0)throw new mi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=pr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(pr.fromNumber(r)));return s.compare(eA)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=fd(e),[r,s]=dd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new du(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=fd(e),[r,s]=dd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ja{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ja(ue.min(),s,new Be(Ee),Un(),we())}}class lo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new lo(r,n,we(),we(),we())}}/**
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
 */class zo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Dg{constructor(e,n){this.targetId=e,this.Ce=n}}class Ng{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class pd{constructor(){this.ve=0,this.Fe=md(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=we(),n=we(),r=we();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}})),new lo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=md()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class tA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Un(),this.Je=Oo(),this.He=Oo(),this.Ye=new Be(Ee)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(yl(i))if(r===0){const o=new ie(i.path);this.et(n,o,vt.newNoDocument(o,ue.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Ir(r).toUint8Array()}catch(l){if(l instanceof rg)return Ds("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new du(o,s,i)}catch(l){return Ds(l instanceof mi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&yl(c.target)){const l=new ie(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=we();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Ja(e,n,this.Ye,this.je,r);return this.je=Un(),this.Je=Oo(),this.He=Oo(),this.Ye=new Be(Ee),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new pd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new et(Ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new et(Ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new pd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Oo(){return new Be(ie.comparator)}function md(){return new Be(ie.comparator)}const nA={asc:"ASCENDING",desc:"DESCENDING"},rA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sA={and:"AND",or:"OR"};class iA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function El(t,e){return t.useProto3Json||qa(e)?e:{value:e}}function ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oA(t,e){return ga(t,e.toTimestamp())}function hn(t){return Pe(!!t,49232),ue.fromTimestamp((function(n){const r=Tr(n);return new Le(r.seconds,r.nanos)})(t))}function pu(t,e){return wl(t,e).canonicalString()}function wl(t,e){const n=(function(s){return new Fe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Og(t){const e=Fe.fromString(t);return Pe(Fg(e),10190,{key:e.toString()}),e}function Tl(t,e){return pu(t.databaseId,e.path)}function Bc(t,e){const n=Og(e);if(n.get(1)!==t.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(Mg(n))}function xg(t,e){return pu(t.databaseId,e)}function aA(t){const e=Og(t);return e.length===4?Fe.emptyPath():Mg(e)}function Il(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mg(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gd(t,e,n){return{name:Tl(t,e),fields:n.value.mapValue.fields}}function cA(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),ut.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ut.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?$.UNKNOWN:kg(u.code);return new te(f,u.message||"")})(o);n=new Ng(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bc(t,r.document.name),i=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):ue.min(),c=new Ft({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new zo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bc(t,r.document),i=r.readTime?hn(r.readTime):ue.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new zo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bc(t,r.document),i=r.removedTargetIds||[];n=new zo([],i,s,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Jb(s,i),c=r.targetId;n=new Dg(c,o)}}return n}function lA(t,e){let n;if(e instanceof co)n={update:gd(t,e.key,e.value)};else if(e instanceof Pg)n={delete:Tl(t,e.key)};else if(e instanceof ts)n={update:gd(t,e.key,e.data),updateMask:yA(e.fieldMask)};else{if(!(e instanceof Kb))return le(16599,{Vt:e.type});n={verify:Tl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Gi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ki)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ma)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw le(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:oA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)})(t,e.precondition)),n}function uA(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?hn(s.updateTime):hn(i);return o.isEqual(ue.min())&&(o=hn(i)),new zb(o,s.transformResults||[])})(n,e)))):[]}function hA(t,e){return{documents:[xg(t,e.path)]}}function fA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xg(t,s);const i=(function(u){if(u.length!==0)return Ug(vn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ds(m.field),direction:mA(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=El(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function dA(t){let e=aA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Lg(p);return m instanceof vn&&dg(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(D){return new pa(ps(D.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,qa(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,y=p.values||[];return new da(y,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,y=p.values||[];return new da(y,m)})(n.endAt)),kb(e,s,o,i,c,"F",l,u)}function pA(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ps(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ze.create(ps(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return vn.create(n.compositeFilter.filters.map((r=>Lg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(n.compositeFilter.op))})(t):le(30097,{filter:t})}function mA(t){return nA[t]}function gA(t){return rA[t]}function _A(t){return sA[t]}function ds(t){return{fieldPath:t.canonicalString()}}function ps(t){return lt.fromServerFormat(t.fieldPath)}function Ug(t){return t instanceof Ze?(function(n){if(n.op==="=="){if(rd(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NAN"}};if(nd(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rd(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NAN"}};if(nd(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(n.field),op:gA(n.op),value:n.value}}})(t):t instanceof vn?(function(n){const r=n.getFilters().map((s=>Ug(s)));return r.length===1?r[0]:{compositeFilter:{op:_A(n.op),filters:r}}})(t):le(54877,{filter:t})}function yA(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Fg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ar{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vA{constructor(e){this.yt=e}}function EA(t){const e=dA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vl(e,e.limit,"L"):e}/**
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
 */class wA{constructor(){this.Cn=new TA}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(wr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class TA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(Fe.comparator)).toArray()}}/**
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
 */const _d={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bg=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(Bg,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
 */class xs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xs(0)}static cr(){return new xs(-1)}}/**
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
 */const yd="LruGarbageCollector",IA=1048576;function vd([t,e],[n,r]){const s=Ee(t,n);return s===0?Ee(e,r):s}class bA{constructor(e){this.Ir=e,this.buffer=new et(vd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();vd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class AA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(yd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Hs(n)?Z(yd,"Ignoring IndexedDB error during garbage collection: ",n):await $s(n)}await this.Vr(3e5)}))}}class RA{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Ha.ce);const r=new bA(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(_d)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_d):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),hs()<=ye.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function SA(t,e){return new RA(t,e)}/**
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
 */class CA{constructor(){this.changes=new es((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ki(r.mutation,s,Qt.empty(),Le.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,we()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=we()){const s=Fr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=pi();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,we())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Un();const o=Pi(),c=(function(){return Pi()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ts)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ki(f.mutation,u,f.mutation.getFieldMask(),Le.now())):o.set(u.key,Qt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new PA(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Pi();let s=new Be(((o,c)=>o-c)),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Qt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||we()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=wg();f.forEach((m=>{if(!i.has(m)){const y=Sg(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Db(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Fr());let c=Hi,l=i;return o.next((u=>B.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,we()))).next((f=>({batchId:c,changes:Eg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next((r=>{let s=pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=pi();return this.indexManager.getCollectionParents(e,i).next((c=>B.forEach(c,(l=>{const u=(function(p,m){return new Wa(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))}));let c=pi();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&ki(f.mutation,u,Qt.empty(),Le.now()),Ka(n,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class DA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}})(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:EA(s.bundledQuery),readTime:hn(s.readTime)}})(n)),B.resolve()}}/**
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
 */class NA{constructor(){this.overlays=new Be(ie.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return B.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new ie(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Fr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return B.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Yb(n,r));let i=this.qr.get(n);i===void 0&&(i=we(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class VA{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class mu{constructor(){this.Qr=new et(rt.$r),this.Ur=new et(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new rt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ie(new Fe([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ie(new Fe([])),r=new rt(n,e),s=new rt(n,e+1);let i=we();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new rt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ie.comparator(e.key,n.key)||Ee(e.Yr,n.Yr)}static Kr(e,n){return Ee(e.Yr,n.Yr)||ie.comparator(e.key,n.key)}}/**
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
 */class OA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new et(rt.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new rt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?iu:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(Ee);return n.forEach((s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new rt(new ie(i),0);let c=new et(Ee);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),B.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Pe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,(s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new rt(n,0),s=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class xA{constructor(e){this.ri=e,this.docs=(function(){return new Be(ie.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))})),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Un();const o=n.path,c=new ie(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||cb(ab(f),r)<=0||(s.has(f.key)||Ka(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ii(e,n){return B.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new MA(this)}getSize(e){return B.resolve(this.size)}}class MA extends CA{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class LA{constructor(e){this.persistence=e,this.si=new es((n=>cu(n)),lu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.oi=0,this._i=new mu,this.targetCount=0,this.ai=xs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),B.waitFor(i).next((()=>s))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
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
 */class jg{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ha(0),this.li=!1,this.li=!0,this.hi=new VA,this.referenceDelegate=e(this),this.Pi=new LA(this),this.indexManager=new wA,this.remoteDocumentCache=(function(s){return new xA(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new vA(n),this.Ii=new DA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new OA(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new UA(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return B.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class UA extends ub{constructor(e){super(),this.currentSequenceNumber=e}}class gu{constructor(e){this.persistence=e,this.Ri=new mu,this.Vi=null}static mi(e){return new gu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,(r=>{const s=ie.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,ue.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class _a{constructor(e,n){this.persistence=e,this.pi=new es((r=>db(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=SA(this,n)}static mi(e,n){return new _a(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return B.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?B.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ue.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=$o(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class _u{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _u(e,n.fromCache,r,s)}}/**
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
 */class FA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return kT()?8:hb(Tt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new FA;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(hs()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(hs()<=ye.DEBUG&&Z("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(hs()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):B.resolve())}ys(e,n){if(ad(n))return B.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=vl(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=we(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,vl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return ad(n)||s.isEqual(ue.min())?B.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?B.resolve(null):(hs()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fs(n)),this.vs(e,o,n,ob(s,Hi)).next((c=>c)))}))}Ds(e,n){let r=new et(yg(e));return n.forEach(((s,i)=>{Ka(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return hs()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",fs(n)),this.ps.getDocumentsMatchingQuery(e,n,wr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const yu="LocalStore",jA=3e8;class $A{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Be(Ee),this.xs=new es((i=>cu(i)),lu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function HA(t,e,n,r){return new $A(t,e,n,r)}async function $g(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=we();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function qA(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let y=B.resolve();return m.forEach((D=>{y=y.next((()=>f.getEntry(l,D))).next((V=>{const O=u.docVersions.get(D);Pe(O!==null,48541),V.version.compareTo(O)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),f.addEntry(V)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=we();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Hg(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function zA(t,e){const n=he(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ut.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(V,O,H){return V.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=jA?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(m,y,f)&&c.push(n.Pi.updateTargetData(i,y))}));let l=Un(),u=we();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(WA(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(ue.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return B.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function WA(t,e,n){let r=we(),s=we();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Un();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z(yu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function GA(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=iu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function KA(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,B.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function bl(t,e,n){const r=he(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Hs(o))throw o;Z(yu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Ed(t,e,n){const r=he(t);let s=ue.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=he(l),m=p.xs.get(f);return m!==void 0?B.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,un(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:we()))).next((c=>(QA(r,Vb(e),c),{documents:c,Qs:i})))))}function QA(t,e,n){let r=t.Os.get(e)||ue.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class wd{constructor(){this.activeTargetIds=Fb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YA{constructor(){this.Mo=new wd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new wd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class JA{Oo(e){}shutdown(){}}/**
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
 */const Td="ConnectivityMonitor";class Id{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(Td,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(Td,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xo=null;function Al(){return xo===null?xo=(function(){return 268435456+Math.round(2147483648*Math.random())})():xo++,"0x"+xo.toString(16)}/**
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
 */const jc="RestConnection",XA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ZA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ha?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Al(),c=this.zo(e,n.toUriEncodedString());Z(jc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Fs(u);return this.Jo(e,c,l,r,f).then((p=>(Z(jc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Ds(jc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+js})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=XA[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class eR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const mt="WebChannelConnection";class tR extends ZA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Al();return new Promise(((c,l)=>{const u=new Gm;u.setWithCredentials(!0),u.listenOnce(Km.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case jo.NO_ERROR:const p=u.getResponseJson();Z(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case jo.TIMEOUT:Z(mt,`RPC '${e}' ${o} timed out`),l(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case jo.HTTP_ERROR:const m=u.getStatus();if(Z(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const D=y?.error;if(D&&D.status&&D.message){const V=(function(H){const U=H.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(U)>=0?U:$.UNKNOWN})(D.status);l(new te(V,D.message))}else l(new te($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new te($.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(mt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);Z(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Al(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jm(),c=Ym(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(mt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,y=!1;const D=new eR({Yo:O=>{y?Z(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(Z(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(mt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Zo:()=>p.close()}),V=(O,H,U)=>{O.listen(H,(k=>{try{U(k)}catch(P){setTimeout((()=>{throw P}),0)}}))};return V(p,di.EventType.OPEN,(()=>{y||(Z(mt,`RPC '${e}' stream ${s} transport opened.`),D.o_())})),V(p,di.EventType.CLOSE,(()=>{y||(y=!0,Z(mt,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(p))})),V(p,di.EventType.ERROR,(O=>{y||(y=!0,Ds(mt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),D.a_(new te($.UNAVAILABLE,"The operation could not be completed")))})),V(p,di.EventType.MESSAGE,(O=>{if(!y){const H=O.data[0];Pe(!!H,16349);const U=H,k=U?.error||U[0]?.error;if(k){Z(mt,`RPC '${e}' stream ${s} received error:`,k);const P=k.status;let G=(function(_){const v=Ge[_];if(v!==void 0)return kg(v)})(P),ee=k.message;G===void 0&&(G=$.INTERNAL,ee="Unknown error status: "+P+" with message "+k.message),y=!0,D.a_(new te(G,ee)),p.close()}else Z(mt,`RPC '${e}' stream ${s} received:`,H),D.u_(H)}})),V(c,Qm.STAT_EVENT,(O=>{O.stat===dl.PROXY?Z(mt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===dl.NOPROXY&&Z(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{D.__()}),0),D}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function $c(){return typeof document<"u"?document:null}/**
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
 */function Xa(t){return new iA(t,!0)}/**
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
 */class qg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const bd="PersistentStream";class zg{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new te($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return Z(bd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(Z(bd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nR extends zg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=cA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?hn(o.readTime):ue.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Il(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=yl(l)?{documents:hA(i,l)}:{query:fA(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Vg(i,o.resumeToken);const u=El(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=ga(i,o.snapshotVersion.toTimestamp());const u=El(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=pA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Il(this.serializer),n.removeTarget=e,this.q_(n)}}class rR extends zg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=uA(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Il(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>lA(this.serializer,r)))};this.q_(n)}}/**
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
 */class sR{}class iR extends sR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,wl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te($.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,wl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te($.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class oR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ln(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Qr="RemoteStore";class aR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{ns(this)&&(Z(Qr,"Restarting streams for network reachability change."),await(async function(l){const u=he(l);u.Ea.add(4),await uo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Za(u)})(this))}))})),this.Ra=new oR(r,s)}}async function Za(t){if(ns(t))for(const e of t.da)await e(!0)}async function uo(t){for(const e of t.da)await e(!1)}function Wg(t,e){const n=he(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Tu(n)?wu(n):qs(n).O_()&&Eu(n,e))}function vu(t,e){const n=he(t),r=qs(n);n.Ia.delete(e),r.O_()&&Gg(n,e),n.Ia.size===0&&(r.O_()?r.L_():ns(n)&&n.Ra.set("Unknown"))}function Eu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qs(t).Y_(e)}function Gg(t,e){t.Va.Ue(e),qs(t).Z_(e)}function wu(t){t.Va=new tA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),qs(t).start(),t.Ra.ua()}function Tu(t){return ns(t)&&!qs(t).x_()&&t.Ia.size>0}function ns(t){return he(t).Ea.size===0}function Kg(t){t.Va=void 0}async function cR(t){t.Ra.set("Online")}async function lR(t){t.Ia.forEach(((e,n)=>{Eu(t,e)}))}async function uR(t,e){Kg(t),Tu(t)?(t.Ra.ha(e),wu(t)):t.Ra.set("Unknown")}async function hR(t,e,n){if(t.Ra.set("Online"),e instanceof Ng&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){Z(Qr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ya(t,r)}else if(e instanceof zo?t.Va.Ze(e):e instanceof Dg?t.Va.st(e):t.Va.tt(e),!n.isEqual(ue.min()))try{const r=await Hg(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),Gg(i,l);const p=new ar(f.target,l,u,f.sequenceNumber);Eu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){Z(Qr,"Failed to raise snapshot:",r),await ya(t,r)}}async function ya(t,e,n){if(!Hs(e))throw e;t.Ea.add(1),await uo(t),t.Ra.set("Offline"),n||(n=()=>Hg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Z(Qr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Za(t)}))}function Qg(t,e){return e().catch((n=>ya(t,n,e)))}async function ec(t){const e=he(t),n=Ar(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:iu;for(;fR(e);)try{const s=await GA(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,dR(e,s)}catch(s){await ya(e,s)}Yg(e)&&Jg(e)}function fR(t){return ns(t)&&t.Ta.length<10}function dR(t,e){t.Ta.push(e);const n=Ar(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Yg(t){return ns(t)&&!Ar(t).x_()&&t.Ta.length>0}function Jg(t){Ar(t).start()}async function pR(t){Ar(t).ra()}async function mR(t){const e=Ar(t);for(const n of t.Ta)e.ea(n.mutations)}async function gR(t,e,n){const r=t.Ta.shift(),s=fu.from(r,e,n);await Qg(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ec(t)}async function _R(t,e){e&&Ar(t).X_&&await(async function(r,s){if((function(o){return Xb(o)&&o!==$.ABORTED})(s.code)){const i=r.Ta.shift();Ar(r).B_(),await Qg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ec(r)}})(t,e),Yg(t)&&Jg(t)}async function Ad(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),Z(Qr,"RemoteStore received new credentials");const r=ns(n);n.Ea.add(3),await uo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Za(n)}async function yR(t,e){const n=he(t);e?(n.Ea.delete(2),await Za(n)):e||(n.Ea.add(2),await uo(n),n.Ra.set("Unknown"))}function qs(t){return t.ma||(t.ma=(function(n,r,s){const i=he(n);return i.sa(),new nR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:cR.bind(null,t),t_:lR.bind(null,t),r_:uR.bind(null,t),H_:hR.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Tu(t)?wu(t):t.Ra.set("Unknown")):(await t.ma.stop(),Kg(t))}))),t.ma}function Ar(t){return t.fa||(t.fa=(function(n,r,s){const i=he(n);return i.sa(),new rR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:pR.bind(null,t),r_:_R.bind(null,t),ta:mR.bind(null,t),na:gR.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await ec(t)):(await t.fa.stop(),t.Ta.length>0&&(Z(Qr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class Iu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Iu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bu(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Hs(t))return new te($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Es{static emptySet(e){return new Es(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=pi(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Rd{constructor(){this.ga=new Be(ie.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ms{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Ms(e,n,Es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class vR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class ER{constructor(){this.queries=Sd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=Sd(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new te($.ABORTED,"Firestore shutting down"))}}function Sd(){return new es((t=>_g(t)),Ga)}async function wR(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new vR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=bu(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Au(n)}async function TR(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function IR(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Au(n)}function bR(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Au(t){t.Ca.forEach((e=>{e.next()}))}var Rl,Cd;(Cd=Rl||(Rl={})).Ma="default",Cd.Cache="cache";class AR{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Rl.Cache}}/**
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
 */class Xg{constructor(e){this.key=e}}class Zg{constructor(e){this.key=e}}class RR{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=we(),this.mutatedKeys=we(),this.eu=yg(e),this.tu=new Es(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Rd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),y=Ka(this.query,p)?p:null,D=!!m&&this.mutatedKeys.has(m.key),V=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;m&&y?m.data.isEqual(y.data)?D!==V&&(r.track({type:3,doc:y}),O=!0):this.su(m,y)||(r.track({type:2,doc:y}),O=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),O=!0):m&&!y&&(r.track({type:1,doc:m}),O=!0,(l||u)&&(c=!0)),O&&(y?(o=o.add(y),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(y,D){const V=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:O})}};return V(y)-V(D)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Ms(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Rd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=we(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new Zg(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new Xg(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=we();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ms.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ru="SyncEngine";class SR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CR{constructor(e){this.key=e,this.hu=!1}}class PR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new es((c=>_g(c)),Ga),this.Iu=new Map,this.Eu=new Set,this.du=new Be(ie.comparator),this.Au=new Map,this.Ru=new mu,this.Vu={},this.mu=new Map,this.fu=xs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function kR(t,e,n=!0){const r=i_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await e_(r,e,n,!0),s}async function DR(t,e){const n=i_(t);await e_(n,e,!0,!1)}async function e_(t,e,n,r){const s=await KA(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await NR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Wg(t.remoteStore,s),c}async function NR(t,e,n,r,s){t.pu=(p,m,y)=>(async function(V,O,H,U){let k=O.view.ru(H);k.Cs&&(k=await Ed(V.localStore,O.query,!1).then((({documents:T})=>O.view.ru(T,k))));const P=U&&U.targetChanges.get(O.targetId),G=U&&U.targetMismatches.get(O.targetId)!=null,ee=O.view.applyChanges(k,V.isPrimaryClient,P,G);return kd(V,O.targetId,ee.au),ee.snapshot})(t,p,m,y);const i=await Ed(t.localStore,e,!0),o=new RR(e,i.Qs),c=o.ru(i.documents),l=lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);kd(t,n,u.au);const f=new SR(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function VR(t,e,n){const r=he(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Ga(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vu(r.remoteStore,s.targetId),Sl(r,s.targetId)})).catch($s)):(Sl(r,s.targetId),await bl(r.localStore,s.targetId,!0))}async function OR(t,e){const n=he(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vu(n.remoteStore,r.targetId))}async function xR(t,e,n){const r=$R(t);try{const s=await(function(o,c){const l=he(o),u=Le.now(),f=c.reduce(((y,D)=>y.add(D.key)),we());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let D=Un(),V=we();return l.Ns.getEntries(y,f).next((O=>{D=O,D.forEach(((H,U)=>{U.isValidDocument()||(V=V.add(H))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,D))).next((O=>{p=O;const H=[];for(const U of c){const k=Gb(U,p.get(U.key).overlayedDocument);k!=null&&H.push(new ts(U.key,k,ug(k.value.mapValue),Nn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,H,c)})).next((O=>{m=O;const H=O.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(y,O.batchId,H)}))})).then((()=>({batchId:m.batchId,changes:Eg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Be(Ee)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await ho(r,s.changes),await ec(r.remoteStore)}catch(s){const i=bu(s,"Failed to persist write");n.reject(i)}}async function t_(t,e){const n=he(t);try{const r=await zA(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Pe(o.hu,14607):s.removedDocuments.size>0&&(Pe(o.hu,42227),o.hu=!1))})),await ho(n,r,e)}catch(r){await $s(r)}}function Pd(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=he(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Au(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MR(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Be(ie.comparator);o=o.insert(i,vt.newNoDocument(i,ue.min()));const c=we().add(i),l=new Ja(ue.min(),new Map,new Be(Ee),o,c);await t_(r,l),r.du=r.du.remove(i),r.Au.delete(e),Su(r)}else await bl(r.localStore,e,!1).then((()=>Sl(r,e,n))).catch($s)}async function LR(t,e){const n=he(t),r=e.batch.batchId;try{const s=await qA(n.localStore,e);r_(n,r,null),n_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ho(n,s)}catch(s){await $s(s)}}async function UR(t,e,n){const r=he(t);try{const s=await(function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Pe(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);r_(r,e,n),n_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ho(r,s)}catch(s){await $s(s)}}function n_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function r_(t,e,n){const r=he(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Sl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||s_(t,r)}))}function s_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(vu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Su(t))}function kd(t,e,n){for(const r of n)r instanceof Xg?(t.Ru.addReference(r.key,e),FR(t,r)):r instanceof Zg?(Z(Ru,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||s_(t,r.key)):le(19791,{wu:r})}function FR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Z(Ru,"New document in limbo: "+n),t.Eu.add(r),Su(t))}function Su(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ie(Fe.fromString(e)),r=t.fu.next();t.Au.set(r,new CR(n)),t.du=t.du.insert(n,r),Wg(t.remoteStore,new ar(un(uu(n.path)),r,"TargetPurposeLimboResolution",Ha.ce))}}async function ho(t,e,n){const r=he(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=_u.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>B.forEach(u,(m=>B.forEach(m.Es,(y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y))).next((()=>B.forEach(m.ds,(y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))))))}catch(p){if(!Hs(p))throw p;Z(yu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=f.Ms.get(m),D=y.snapshotVersion,V=y.withLastLimboFreeSnapshotVersion(D);f.Ms=f.Ms.insert(m,V)}}})(r.localStore,i))}async function BR(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){Z(Ru,"User change. New user:",e.toKey());const r=await $g(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new te($.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ho(n,r.Ls)}}function jR(t,e){const n=he(t),r=n.Au.get(e);if(r&&r.hu)return we().add(r.key);{let s=we();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function i_(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=t_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MR.bind(null,e),e.Pu.H_=IR.bind(null,e.eventManager),e.Pu.yu=bR.bind(null,e.eventManager),e}function $R(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UR.bind(null,e),e}class va{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return HA(this.persistence,new BA,e.initialUser,this.serializer)}Cu(e){return new jg(gu.mi,this.serializer)}Du(e){return new YA}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}va.provider={build:()=>new va};class HR extends va{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Pe(this.persistence.referenceDelegate instanceof _a,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new AA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new jg((r=>_a.mi(r,n)),this.serializer)}}class Cl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BR.bind(null,this.syncEngine),await yR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ER})()}createDatastore(e){const n=Xa(e.databaseInfo.databaseId),r=(function(i){return new tR(i)})(e.databaseInfo);return(function(i,o,c,l){return new iR(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new aR(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Pd(this.syncEngine,n,0)),(function(){return Id.v()?new Id:new JA})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new PR(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=he(n);Z(Qr,"RemoteStore shutting down."),r.Ea.add(5),await uo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Cl.provider={build:()=>new Cl};/**
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
 */class qR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Rr="FirestoreClient";class zR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Z(Rr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Z(Rr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Hc(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Rr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await $g(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Dd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WR(t);Z(Rr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Ad(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Ad(e.remoteStore,s))),t._onlineComponents=e}async function WR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Rr,"Using user provided OfflineComponentProvider");try{await Hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await Hc(t,new va)}}else Z(Rr,"Using default OfflineComponentProvider"),await Hc(t,new HR(void 0));return t._offlineComponents}async function o_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Rr,"Using user provided OnlineComponentProvider"),await Dd(t,t._uninitializedComponentsProvider._online)):(Z(Rr,"Using default OnlineComponentProvider"),await Dd(t,new Cl))),t._onlineComponents}function GR(t){return o_(t).then((e=>e.syncEngine))}async function KR(t){const e=await o_(t),n=e.eventManager;return n.onListen=kR.bind(null,e.syncEngine),n.onUnlisten=VR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=DR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OR.bind(null,e.syncEngine),n}function QR(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new qR({next:m=>{f.Nu(),o.enqueueAndForget((()=>TR(i,p)));const y=m.docs.has(c);!y&&m.fromCache?u.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?u.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new AR(uu(c.path),f,{includeMetadataChanges:!0,qa:!0});return wR(i,p)})(await KR(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function a_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Nd=new Map;/**
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
 */const c_="firestore.googleapis.com",Vd=!0;class Od{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=c_,this.ssl=Vd}else this.host=e.host,this.ssl=e.ssl??Vd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<IA)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ib("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=a_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Od({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Od(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new KI;switch(r.type){case"firstParty":return new XI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Nd.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Nd.delete(n),r.terminate())})(this),Promise.resolve()}}function YR(t,e,n,r={}){t=$i(t,Cu);const s=Fs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Um(`https://${c}`),Fm("Firestore",!0)),i.host!==c_&&i.host!==c&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Wr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=_t.MOCK_USER;else{u=wT(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new _t(p)}t._authCredentials=new QI(new Zm(u,f))}}/**
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
 */class Pu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pu(this.firestore,e,this._query)}}class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ao(n,st._jsonSchema))return new st(e,r||null,new ie(Fe.fromString(n.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:Qe("string",st._jsonSchemaVersion),referencePath:Qe("string")};class Yi extends Pu{constructor(e,n,r){super(e,n,uu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new ie(e))}withConverter(e){return new Yi(this.firestore,e,this._path)}}function gr(t,e,...n){if(t=qt(t),arguments.length===1&&(e=ru.newId()),sb("doc","path",e),t instanceof Cu){const r=Fe.fromString(e,...n);return Kf(r),new st(t,null,new ie(r))}{if(!(t instanceof st||t instanceof Yi))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Kf(r),new st(t.firestore,t instanceof Yi?t.converter:null,new ie(r))}}/**
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
 */const xd="AsyncQueue";class Md{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qg(this,"async_queue_retry"),this._c=()=>{const r=$c();r&&Z(xd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=$c();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=$c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new mr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Hs(e))throw e;Z(xd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ln("INTERNAL UNHANDLED ERROR: ",Ld(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Iu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:Ld(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ld(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ku extends Cu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Md,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Md(e),this._firestoreClient=void 0,await e}}}function JR(t,e){const n=typeof t=="object"?t:Hm(),r=typeof t=="string"?t:ha,s=tu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vT("firestore");i&&YR(s,...i)}return s}function l_(t){if(t._terminated)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||XR(t),t._firestoreClient}function XR(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new gb(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,a_(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new zR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(ut.fromBase64String(e))}catch(n){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ao(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:Qe("string",Bt._jsonSchemaVersion),bytes:Qe("string")};/**
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
 */class Du{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nu{constructor(e){this._methodName=e}}/**
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
 */class fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fn._jsonSchemaVersion}}static fromJSON(e){if(ao(e,fn._jsonSchema))return new fn(e.latitude,e.longitude)}}fn._jsonSchemaVersion="firestore/geoPoint/1.0",fn._jsonSchema={type:Qe("string",fn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
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
 */class dn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ao(e,dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new dn(e.vectorValues);throw new te($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:Qe("string",dn._jsonSchemaVersion),vectorValues:Qe("object")};/**
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
 */const ZR=/^__.*__$/;class eS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new co(e,this.data,n,this.fieldTransforms)}}function u_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:t})}}class Vu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Vu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ea(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(u_(this.Ac)&&ZR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class tS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xa(e)}Cc(e,n,r,s=!1){return new Vu({Ac:e,methodName:n,Dc:r,path:lt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nS(t){const e=t._freezeSettings(),n=Xa(t._databaseId);return new tS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rS(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);p_("Data must be an object, but it was:",o,r);const c=f_(r,o);let l,u;if(i.merge)l=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=sS(e,p,n);if(!o.contains(m))throw new te($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);oS(f,m)||f.push(m)}l=new Qt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new eS(new Ft(c),l,u)}class Ou extends Nu{_toFieldTransform(e){return new Hb(e.path,new Gi)}isEqual(e){return e instanceof Ou}}function h_(t,e){if(d_(t=qt(t)))return p_("Unsupported field value:",e,t),f_(t,e);if(t instanceof Nu)return(function(r,s){if(!u_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=h_(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Bb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:ga(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ga(s.serializer,i)}}if(r instanceof fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:Vg(s.serializer,r._byteString)};if(r instanceof st){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dn)return(function(o,c){return{mapValue:{fields:{[cg]:{stringValue:lg},[fa]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return hu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${su(r)}`)})(t,e)}function f_(t,e){const n={};return ng(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(t,((r,s)=>{const i=h_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function d_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof fn||t instanceof Bt||t instanceof st||t instanceof Nu||t instanceof dn)}function p_(t,e,n){if(!d_(n)||!eg(n)){const r=su(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function sS(t,e,n){if((e=qt(e))instanceof Du)return e._internalPath;if(typeof e=="string")return m_(t,e);throw Ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const iS=new RegExp("[~\\*/\\[\\]]");function m_(t,e,n){if(e.search(iS)>=0)throw Ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Du(...e.split("."))._internalPath}catch{throw Ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new te($.INVALID_ARGUMENT,c+t+l)}function oS(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class g_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(__("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aS extends g_{data(){return super.data()}}function __(t,e){return typeof e=="string"?m_(t,e):e instanceof Du?e._internalPath:e._delegate._internalPath}class cS{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[fa].arrayValue?.values?.map((r=>ze(r.doubleValue)));return new dn(n)}convertGeoPoint(e){return new fn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=za(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qi(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Pe(Fg(r),9688,{name:e});const s=new zi(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function lS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hr extends g_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(__("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hr._jsonSchema={type:Qe("string",Hr._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Wo extends Hr{data(e={}){return super.data(e)}}class Di{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new gi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Wo(this._firestore,this._userDataWriter,r.key,r,new gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Wo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new gi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Wo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new gi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:uS(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Di._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ru.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function uS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}/**
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
 */function Pl(t){t=$i(t,st);const e=$i(t.firestore,ku);return QR(l_(e),t._key).then((n=>dS(e,t,n)))}Di._jsonSchemaVersion="firestore/querySnapshot/1.0",Di._jsonSchema={type:Qe("string",Di._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class hS extends cS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function Ji(t,e,n){t=$i(t,st);const r=$i(t.firestore,ku),s=lS(t.converter,e);return fS(r,[rS(nS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Nn.none())])}function fS(t,e){return(function(r,s){const i=new mr;return r.asyncQueue.enqueueAndForget((async()=>xR(await GR(r),s,i))),i.promise})(l_(t),e)}function dS(t,e,n){const r=n.docs.get(e._key),s=new hS(t);return new Hr(t,s,e._key,r,new gi(n.hasPendingWrites,n.fromCache),e.converter)}function Ls(){return new Ou("serverTimestamp")}(function(e,n=!0){(function(s){js=s})(Bs),ks(new Gr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ku(new YI(r.getProvider("auth-internal")),new ZI(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),dr(qf,zf,e),dr(qf,zf,"esm2020")})();var pS="firebase",mS="12.4.0";/**
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
 */dr(pS,mS,"app");function y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gS=y_,v_=new io("auth","Firebase",y_());/**
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
 */const wa=new Zl("@firebase/auth");function _S(t,...e){wa.logLevel<=ye.WARN&&wa.warn(`Auth (${Bs}): ${t}`,...e)}function Go(t,...e){wa.logLevel<=ye.ERROR&&wa.error(`Auth (${Bs}): ${t}`,...e)}/**
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
 */function zt(t,...e){throw Mu(t,...e)}function Zt(t,...e){return Mu(t,...e)}function xu(t,e,n){const r={...gS(),[e]:n};return new io("auth","Firebase",r).create(e,{appName:t.name})}function Vn(t){return xu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function E_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&zt(t,"argument-error"),xu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return v_.create(t,...e)}function ce(t,e,...n){if(!t)throw Mu(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Go(e),new Error(e)}function Fn(t,e){t||Cn(e)}/**
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
 */function kl(){return typeof self<"u"&&self.location?.href||""}function yS(){return Ud()==="http:"||Ud()==="https:"}function Ud(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function vS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yS()||ST()||"connection"in navigator)?navigator.onLine:!0}function ES(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=bT()||CT()}get(){return vS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lu(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class w_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],IS=new fo(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Hn(t,e,n,r,s={}){return T_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=oo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return RT()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Fs(t.emulatorConfig.host)&&(u.credentials="include"),w_.fetch()(await I_(t,t.config.apiHost,n,c),u)})}async function T_(t,e,n){t._canInitEmulator=!1;const r={...wS,...e};try{const s=new AS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Mo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Mo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xu(t,f,u);zt(t,f)}}catch(s){if(s instanceof jn)throw s;zt(t,"network-request-failed",{message:String(s)})}}async function po(t,e,n,r,s={}){const i=await Hn(t,e,n,r,s);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function I_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Lu(t.config,s):`${t.config.apiScheme}://${s}`;return TS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function bS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),IS.get())})}}function Mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}function Fd(t){return t!==void 0&&t.enterprise!==void 0}class RS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SS(t,e){return Hn(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
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
 */async function CS(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function Ta(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PS(t,e=!1){const n=qt(t),r=await n.getIdToken(e),s=Uu(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ni(qc(s.auth_time)),issuedAtTime:Ni(qc(s.iat)),expirationTime:Ni(qc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function qc(t){return Number(t)*1e3}function Uu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Go("JWT malformed, contained fewer than 3 sections"),null;try{const s=Om(n);return s?JSON.parse(s):(Go("Failed to decode base64 JWT payload"),null)}catch(s){return Go("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Bd(t){const e=Uu(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&kS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ia(t){const e=t.auth,n=await t.getIdToken(),r=await Xi(t,Ta(e,{idToken:n}));ce(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?b_(s.providerUserInfo):[],o=VS(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Dl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function NS(t){const e=qt(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function b_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function OS(t,e){const n=await T_(t,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await I_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Fs(t.emulatorConfig.host)&&(l.credentials="include"),w_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xS(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
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
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Bd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await OS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ws;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
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
 */function Zn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new DS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PS(this,e)}reload(){return NS(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Vn(this.auth));const e=await this.getIdToken();return await Xi(this,CS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:D,stsTokenManager:V}=n;ce(p&&V,e,"internal-error");const O=ws.fromJSON(this.name,V);ce(typeof p=="string",e,"internal-error"),Zn(r,e.name),Zn(s,e.name),ce(typeof m=="boolean",e,"internal-error"),ce(typeof y=="boolean",e,"internal-error"),Zn(i,e.name),Zn(o,e.name),Zn(c,e.name),Zn(l,e.name),Zn(u,e.name),Zn(f,e.name);const H=new Yt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:O,createdAt:u,lastLoginAt:f});return D&&Array.isArray(D)&&(H.providerData=D.map(U=>({...U}))),l&&(H._redirectEventId=l),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new ws;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ia(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?b_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ws;c.updateFromIdToken(r);const l=new Yt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Dl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
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
 */const jd=new Map;function Pn(t){Fn(t instanceof Function,"Expected a class definition");let e=jd.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jd.set(t,e),e)}/**
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
 */class A_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}A_.type="NONE";const $d=A_;/**
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
 */function Ko(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ko("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ta(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(Pn($d),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Pn($d);const o=Ko(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Ta(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Yt._fromGetAccountInfoResponse(e,m,f)}else p=Yt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ts(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ts(i,e,r))}}/**
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
 */function Hd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(P_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D_(e))return"Blackberry";if(N_(e))return"Webos";if(S_(e))return"Safari";if((e.includes("chrome/")||C_(e))&&!e.includes("edge/"))return"Chrome";if(k_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function R_(t=Tt()){return/firefox\//i.test(t)}function S_(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function C_(t=Tt()){return/crios\//i.test(t)}function P_(t=Tt()){return/iemobile/i.test(t)}function k_(t=Tt()){return/android/i.test(t)}function D_(t=Tt()){return/blackberry/i.test(t)}function N_(t=Tt()){return/webos/i.test(t)}function Fu(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MS(t=Tt()){return Fu(t)&&!!window.navigator?.standalone}function LS(){return PT()&&document.documentMode===10}function V_(t=Tt()){return Fu(t)||k_(t)||N_(t)||D_(t)||/windows phone/i.test(t)||P_(t)}/**
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
 */function O_(t,e=[]){let n;switch(t){case"Browser":n=Hd(Tt());break;case"Worker":n=`${Hd(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${r}`}/**
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
 */class US{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function FS(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
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
 */const BS=6;class jS{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??BS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class $S{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qd(this),this.idTokenSubscription=new qd(this),this.beforeStateQueue=new US(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ta(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(xt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ia(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ES()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(Vn(this));const n=e?qt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(Vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FS(this),n=new jS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xS(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&_S(`Error while retrieving App Check token: ${e.error}`),e?.token}}function qn(t){return qt(t)}class qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=LT(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HS(t){tc=t}function x_(t){return tc.loadJS(t)}function qS(){return tc.recaptchaEnterpriseScript}function zS(){return tc.gapiScript}function WS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class GS{constructor(){this.enterprise=new KS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class KS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const QS="recaptcha-enterprise",M_="NO_RECAPTCHA";class YS{constructor(e){this.type=QS,this.auth=qn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{SS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new RS(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Fd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(M_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new GS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Fd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=qS();l.length!==0&&(l+=c),x_(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function zd(t,e,n,r=!1,s=!1){const i=new YS(t);let o;if(s)o=M_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ba(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await zd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await zd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function JS(t,e){const n=tu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wr(i,e??{}))return s;zt(s,"already-initialized")}return n.initialize({options:e})}function XS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Pn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function ZS(t,e,n){const r=qn(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=L_(e),{host:o,port:c}=eC(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Wr(u,r.config.emulator)&&Wr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Fs(o)?(Um(`${i}//${o}${l}`),Fm("Auth",!0)):tC()}function L_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eC(t){const e=L_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Wd(o)}}}function Wd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function nC(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function rC(t,e){return po(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}async function sC(t,e){return Hn(t,"POST","/v1/accounts:sendOobCode",$n(t,e))}async function iC(t,e){return sC(t,e)}/**
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
 */async function oC(t,e){return po(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function aC(t,e){return po(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
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
 */class Zi extends Bu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Zi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,n,"signInWithPassword",rC);case"emailLink":return oC(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,r,"signUpPassword",nC);case"emailLink":return aC(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Is(t,e){return po(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
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
 */const cC="http://localhost";class Yr extends Bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:cC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
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
 */function lC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uC(t){const e=hi(fi(t)).link,n=e?hi(fi(e)).deep_link_id:null,r=hi(fi(t)).deep_link_id;return(r?hi(fi(r)).link:null)||r||n||e||t}class ju{constructor(e){const n=hi(fi(e)),r=n.apiKey??null,s=n.oobCode??null,i=lC(n.mode??null);ce(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=uC(e);try{return new ju(n)}catch{return null}}}/**
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
 */class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(e,n){return Zi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ju.parseLink(n);return ce(r,"argument-error"),Zi._fromEmailAndCode(e,r.code,r.tenantId)}}zs.PROVIDER_ID="password";zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class nc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mo extends nc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends mo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class Sn extends mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
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
 */class ir extends mo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class or extends mo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */async function hC(t,e){return po(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
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
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),o=Gd(r);return new Jr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gd(r);return new Jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Aa extends jn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Aa(e,n,r,s)}}function U_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,i,e,r):i})}async function fC(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",r)}/**
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
 */async function dC(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(Vn(r));const s="reauthenticate";try{const i=await Xi(t,U_(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Uu(i.idToken);ce(o,r,"internal-error");const{sub:c}=o;return ce(t.uid===c,r,"user-mismatch"),Jr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&zt(r,"user-mismatch"),i}}/**
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
 */async function F_(t,e,n=!1){if(xt(t.app))return Promise.reject(Vn(t));const r="signIn",s=await U_(t,r,e),i=await Jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function pC(t,e){return F_(qn(t),e)}/**
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
 */async function B_(t){const e=qn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mC(t,e,n){const r=qn(t);await ba(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",iC)}async function gC(t,e,n){if(xt(t.app))return Promise.reject(Vn(t));const r=qn(t),o=await ba(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hC).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&B_(t),l}),c=await Jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function _C(t,e,n){return xt(t.app)?Promise.reject(Vn(t)):pC(qt(t),zs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&B_(t),r})}function yC(t,e,n,r){return qt(t).onIdTokenChanged(e,n,r)}function vC(t,e,n){return qt(t).beforeAuthStateChanged(e,n)}const Ra="__sak";/**
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
 */class j_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const EC=1e3,wC=10;class $_ extends j_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=V_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);LS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$_.type="LOCAL";const TC=$_;/**
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
 */class H_ extends j_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}H_.type="SESSION";const q_=H_;/**
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
 */function IC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await IC(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
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
 */function $u(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=$u("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function AC(t){pn().location.href=t}/**
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
 */function z_(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function RC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SC(){return navigator?.serviceWorker?.controller||null}function CC(){return z_()?self:null}/**
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
 */const W_="firebaseLocalStorageDb",PC=1,Sa="firebaseLocalStorage",G_="fbase_key";class go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function kC(){const t=indexedDB.deleteDatabase(W_);return new go(t).toPromise()}function Nl(){const t=indexedDB.open(W_,PC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sa,{keyPath:G_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sa)?e(r):(r.close(),await kC(),e(await Nl()))})})}async function Kd(t,e,n){const r=sc(t,!0).put({[G_]:e,value:n});return new go(r).toPromise()}async function DC(t,e){const n=sc(t,!1).get(e),r=await new go(n).toPromise();return r===void 0?null:r.value}function Qd(t,e){const n=sc(t,!0).delete(e);return new go(n).toPromise()}const NC=800,VC=3;class K_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return z_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(CC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await RC(),!this.activeServiceWorker)return;this.sender=new bC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nl();return await Kd(e,Ra,"1"),await Qd(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sc(s,!1).getAll();return new go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K_.type="LOCAL";const OC=K_;new fo(3e4,6e4);/**
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
 */function Hu(t,e){return e?Pn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qu extends Bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xC(t){return F_(t.auth,new qu(t),t.bypassAuthState)}function MC(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),dC(n,new qu(t),t.bypassAuthState)}async function LC(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),fC(n,new qu(t),t.bypassAuthState)}/**
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
 */class Q_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xC;case"linkViaPopup":case"linkViaRedirect":return LC;case"reauthViaPopup":case"reauthViaRedirect":return MC;default:zt(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const UC=new fo(2e3,1e4);async function FC(t,e,n){if(xt(t.app))return Promise.reject(Zt(t,"operation-not-supported-in-this-environment"));const r=qn(t);E_(t,e,nc);const s=Hu(r,n);return new cr(r,"signInViaPopup",e,s).executeNotNull()}async function BC(t,e,n){const r=qt(t);E_(r.auth,e,nc);const s=Hu(r.auth,n);return new cr(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class cr extends Q_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=$u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UC.get())};e()}}cr.currentPopupAction=null;/**
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
 */const jC="pendingRedirect",Qo=new Map;class $C extends Q_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qo.get(this.auth._key());if(!e){try{const r=await HC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qo.set(this.auth._key(),e)}return this.bypassAuthState||Qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HC(t,e){const n=WC(e),r=zC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qC(t,e){Qo.set(t._key(),e)}function zC(t){return Pn(t._redirectPersistence)}function WC(t){return Ko(jC,t.config.apiKey,t.name)}async function GC(t,e,n=!1){if(xt(t.app))return Promise.reject(Vn(t));const r=qn(t),s=Hu(r,e),o=await new $C(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const KC=600*1e3;class QC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Y_(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Zt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yd(e))}saveEventToCache(e){this.cachedEventUids.add(Yd(e)),this.lastProcessedEventTime=Date.now()}}function Yd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Y_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function YC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Y_(t);default:return!1}}/**
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
 */async function JC(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
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
 */const XC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZC=/^https?/;async function eP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JC(t);for(const n of e)try{if(tP(n))return}catch{}zt(t,"unauthorized-domain")}function tP(t){const e=kl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZC.test(n))return!1;if(XC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const nP=new fo(3e4,6e4);function Jd(){const t=pn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rP(t){return new Promise((e,n)=>{function r(){Jd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jd(),n(Zt(t,"network-request-failed"))},timeout:nP.get()})}if(pn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(pn().gapi?.load)r();else{const s=WS("iframefcb");return pn()[s]=()=>{gapi.load?r():n(Zt(t,"network-request-failed"))},x_(`${zS()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Yo=null,e})}let Yo=null;function sP(t){return Yo=Yo||rP(t),Yo}/**
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
 */const iP=new fo(5e3,15e3),oP="__/auth/iframe",aP="emulator/auth/iframe",cP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uP(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lu(e,aP):`https://${t.config.authDomain}/${oP}`,r={apiKey:e.apiKey,appName:t.name,v:Bs},s=lP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oo(r).slice(1)}`}async function hP(t){const e=await sP(t),n=pn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:uP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),c=pn().setTimeout(()=>{i(o)},iP.get());function l(){pn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const fP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dP=500,pP=600,mP="_blank",gP="http://localhost";class Xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _P(t,e,n,r=dP,s=pP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...fP,width:r.toString(),height:s.toString(),top:i,left:o},u=Tt().toLowerCase();n&&(c=C_(u)?mP:n),R_(u)&&(e=e||gP,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[y,D])=>`${m}${y}=${D},`,"");if(MS(u)&&c!=="_self")return yP(e||"",c),new Xd(null);const p=window.open(e||"",c,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Xd(p)}function yP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vP="__/auth/handler",EP="emulator/auth/handler",wP=encodeURIComponent("fac");async function Zd(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bs,eventId:s};if(e instanceof nc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof mo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${wP}=${encodeURIComponent(l)}`:"";return`${TP(t)}?${oo(c).slice(1)}${u}`}function TP({config:t}){return t.emulator?Lu(t,EP):`https://${t.authDomain}/${vP}`}/**
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
 */const zc="webStorageSupport";class IP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q_,this._completeRedirectFn=GC,this._overrideRedirectResult=qC}async _openPopup(e,n,r,s){Fn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Zd(e,n,r,kl(),s);return _P(e,i,$u())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zd(e,n,r,kl(),s);return AC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hP(e),r=new QC(e);return n.register("authEvent",s=>(ce(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},s=>{const i=s?.[0]?.[zc];i!==void 0&&n(!!i),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return V_()||S_()||Fu()}}const bP=IP;var ep="@firebase/auth",tp="1.11.0";/**
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
 */class AP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SP(t){ks(new Gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O_(t)},u=new $S(r,s,i,l);return XS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ks(new Gr("auth-internal",e=>{const n=qn(e.getProvider("auth").getImmediate());return(r=>new AP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(ep,tp,RP(t)),dr(ep,tp,"esm2020")}/**
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
 */const CP=300,PP=Lm("authIdTokenMaxAge")||CP;let np=null;const kP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PP)return;const s=n?.token;np!==s&&(np=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zu(t=Hm()){const e=tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JS(t,{popupRedirectResolver:bP,persistence:[OC,TC,q_]}),r=Lm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=kP(i.toString());vC(n,o,()=>o(n.currentUser)),yC(n,c=>o(c))}}const s=xm("auth");return s&&ZS(n,`http://${s}`),n}function DP(){return document.getElementsByTagName("head")?.[0]??document}HS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",DP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SP("Browser");const NP={apiKey:"AIzaSyA88mxzUStbuMFKNr9Q0OODtHXmpyuqvBY",authDomain:"findyourfit-93e9f.firebaseapp.com",projectId:"findyourfit-93e9f",storageBucket:"findyourfit-93e9f.firebasestorage.app",messagingSenderId:"715690823951",appId:"1:715690823951:web:f3af86677f7d990c55ae7a",measurementId:"G-2GTC9GRYRL"},J_=$m(NP),_r=JR(J_),ms=zu(J_),Cr=sw("user",{state:()=>({userData:null}),actions:{async fetchUserData(){const t=ms.currentUser;if(!t)return;const e=gr(_r,"users",t.uid),n=await Pl(e);n.exists()&&(this.userData=n.data(),this.userData&&this.updateStreak(this.userData))},setUserData(t){this.userData=t},async updateStreak(t){if(t.streak){const e=t.streak;this.isYesterday(e.lastUpdate)?(t.streak.count=t.streak.count+1,t.streak.lastUpdate=Ls(),await Ji(gr(_r,"users",t.uid),t)):(t.streak.count=1,t.streak.lastUpdate=Ls(),await Ji(gr(_r,"users",t.uid),t))}},isYesterday(t){const e=t.toDate(),n=new Date,r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),s=new Date(r);return s.setDate(r.getDate()-1),e>=s&&e<r}}}),VP={class:"app_holder"},OP={__name:"App",setup(t){const e=so();return Sr(async()=>{await Cr().fetchUserData(),e.replace("/loading")}),(n,r)=>{const s=Cv("router-view");return me(),Re("div",VP,[Pt(s)])}}},zn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},xP={class:"modal_holder"},MP={class:"modal_heading_holder inter font_size_xs"},LP=["innerHTML"],UP={__name:"errorModal",props:{errorMessage:{type:String,required:!0}},setup(t){return(e,n)=>(me(),Re("div",{class:"modal_overlay",onClick:n[1]||(n[1]=Jl(r=>e.$emit("close"),["self"])),role:"dialog","aria-modal":"true"},[M("div",xP,[M("div",MP,[n[2]||(n[2]=M("span",null," Error!",-1)),M("button",{class:"modal_close_button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×")]),M("div",{class:"modal_content_holder inter font_size_xs",innerHTML:t.errorMessage},null,8,LP)])]))}},Wu=zn(UP,[["__scopeId","data-v-9890cb4b"]]),FP={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},BP={class:"modal_holder"},jP={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},$P={class:"modal_content_holder inter font_size_xs"},HP=["value"],qP=["value"],zP={__name:"userInfoModal",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Cr(),r=t,s=ve([]),i=ve("");Sr(async()=>{const k=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();s.value=k.sort((P,G)=>P.name.common.localeCompare(G.name.common))});const o=so(),c=ve(""),l=ve(""),u=ve(""),f=ve(""),p=ve(!1),m=ve([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),y=ve("");function D(U){return/^\d{10}$/.test(U)}function V(U){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(U))return!1;const[P,G,ee]=U.split("/").map(Number),T=new Date(P,G-1,ee);return T.getFullYear()===P&&T.getMonth()===G-1&&T.getDate()===ee}const O=async()=>{if(zu().currentUser,f.value="",p.value=!1,!D(l.value)){f.value="Contact Number must be a valid 10-digit number.",p.value=!0;return}if(!V(u.value)){f.value="Date of Birth must be in the format yyyy/mm/dd.",p.value=!0;return}const k={personalInfo:{name:c.value,contactNumber:l.value,dateOfBirth:u.value,email:r.globalUser.email,country:i.value,gender:y.value},streak:{count:parseInt(1),lastUpdate:Ls()},loginDate:new Date().toISOString(),uid:r.globalUser.uid};await Ji(gr(_r,"users",r.globalUser.uid),k),n.setUserData(k),o.push({name:"Navigation"})},H=()=>{p.value=!1,f.value=""};return(U,k)=>(me(),Re("div",FP,[M("div",BP,[M("div",jP,[k[6]||(k[6]=M("span",{style:{width:"80%"}},"User Information",-1)),M("button",{class:"modal_close_button",onClick:k[0]||(k[0]=P=>U.$emit("close"))},"×")]),M("div",$P,[k[10]||(k[10]=M("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),M("form",{class:"modal_form_holder",onSubmit:Jl(O,["prevent"])},[Ut(M("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":k[1]||(k[1]=P=>c.value=P),required:""},null,512),[[Dn,c.value]]),Ut(M("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":k[2]||(k[2]=P=>l.value=P),required:""},null,512),[[Dn,l.value]]),Ut(M("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":k[3]||(k[3]=P=>u.value=P),required:""},null,512),[[Dn,u.value]]),Ut(M("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":k[4]||(k[4]=P=>y.value=P)},[k[7]||(k[7]=M("option",{disabled:"",value:""},"Please select one",-1)),(me(!0),Re(qe,null,_n(m.value,P=>(me(),Re("option",{key:P.value,value:P.value},Ke(P.text),9,HP))),128))],512),[[Fi,y.value]]),Ut(M("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":k[5]||(k[5]=P=>i.value=P),id:"country"},[k[8]||(k[8]=M("option",{disabled:"",value:""},"Select your country",-1)),(me(!0),Re(qe,null,_n(s.value,P=>(me(),Re("option",{key:P.cca3,value:P.cca3},Ke(P.name.common),9,qP))),128))],512),[[Fi,i.value]]),k[9]||(k[9]=M("button",{type:"submit",class:"modal_button inter font_size_xs"}," Confirm ",-1))],32)])]),p.value?(me(),kn(Wu,{key:0,errorMessage:f.value,onClose:H},null,8,["errorMessage"])):Rs("",!0)]))}},WP=zn(zP,[["__scopeId","data-v-d9949924"]]),GP={class:"login_page"},KP={class:"login_page_content"},QP={class:"login_page_form"},YP={class:"login_page_form_fields"},JP=["type"],XP={class:"show_password_toggle inter font_size_xs"},ZP={class:"login_page_social_login"},e0={class:"login_page_toggle_register inter font_size_xs"},t0={__name:"loginRegister",setup(t){const e=Cr(),n=so(),r=ve("password"),s=ve(null),i=ve(""),o=ve(""),c=ve("login"),l=ve(!1),u=ve(""),f=ve(!1),p=new Sn;p.addScope("https://www.googleapis.com/auth/contacts.readonly");const m=P=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(P),y=()=>{r.value=r.value==="password"?"text":"password"},D=()=>{c.value=c.value==="login"?"register":"login"},V=()=>{if(i.value===""){u.value="Please enter your email to reset your password!",l.value=!0;return}mC(ms,i.value).then(()=>{u.value="An email has been sent to reset your password!",l.value=!0})},O=async()=>{try{const ee=(await FC(ms,p)).user;if(ee){if(!ee)return;const T=gr(_r,"users",ee.uid),_=await Pl(T);if(_.exists()){var P=_.data();P&&await H(P)}}n.push({name:"Navigation"})}catch(G){console.log(G.message),u.value="Google login failed!",l.value=!0}},H=async P=>{if(P.streak){const G=P.streak;U(G.lastUpdate)?P.streak.count=P.streak.count+1:P.streak.count=1,P.streak.lastUpdate=Ls(),P.loginDate=Ls(),await Ji(gr(_r,"users",P.uid),P)}},U=P=>{const G=P.toDate(),ee=new Date,T=new Date(ee.getFullYear(),ee.getMonth(),ee.getDate()),_=new Date(T);return _.setDate(T.getDate()-1),G>=_&&G<T},k=async()=>{try{if(u.value="",l.value=!1,!m(i.value)){u.value="Invalid email format!",l.value=!0;return}if(c.value==="register"){const ee=(await gC(ms,i.value,o.value)).user;try{await BC(ee,p)}catch(T){console.warn("Google link failed (optional):",T)}s.value={uid:ee.uid,email:ee.email},f.value=!0}else{const ee=(await _C(ms,i.value,o.value)).user,T=gr(_r,"users",ee.uid),_=await Pl(T);if(_.exists()){var P=_.data();P&&(await H(P),e.setUserData(P),n.push({name:"Navigation"}))}}}catch(G){G.code==="auth/invalid-credential"?u.value="Invalid login details.":G.code==="auth/email-already-in-use"?u.value="Email already in use.":u.value="An unexpected error occurred.",l.value=!0}};return(P,G)=>(me(),Re(qe,null,[M("div",GP,[M("div",KP,[G[5]||(G[5]=M("div",{class:"login_background_holder"},null,-1)),G[6]||(G[6]=M("div",{class:"login_page_intro inter font_size_xs"},[M("div",{class:"login_page_intro_text"},[M("div",{class:"font_size_m licorice_regular"},"Welcome to Finding Your Fit"),M("br"),M("br"),As(" A space designed to help you understand yourself better, build emotional balance, and grow into the life that fits you best. Take a moment to reconnect, reflect, and start working toward your goals — one step at a time. ")])],-1)),M("div",QP,[M("form",YP,[Ut(M("input",{class:"login_page_input inter font_size_xs",type:"text",placeholder:"Email","onUpdate:modelValue":G[0]||(G[0]=ee=>i.value=ee)},null,512),[[Dn,i.value]]),Ut(M("input",{class:"login_page_password inter font_size_xs",type:r.value,placeholder:"Password","onUpdate:modelValue":G[1]||(G[1]=ee=>o.value=ee)},null,8,JP),[[HE,o.value]]),M("div",XP,[M("label",null,[M("input",{type:"checkbox",onChange:y},null,32),G[4]||(G[4]=As(" Show Password ",-1))])])]),M("button",{class:"login_page_button inter font_size_xs",onClick:k},Ke(c.value==="login"?"Login":"Register"),1),M("div",{class:"login_page_forgot_password inter font_size_xs",onClick:V},Ke(c.value==="login"?"Forgot Password?":""),1)]),M("div",ZP,[M("div",{class:"login_page_social_button",onClick:G[2]||(G[2]=ee=>O())})]),M("div",e0,[M("u",{onClick:D},Ke(c.value==="login"?"Register":"Login"),1)])])]),l.value?(me(),kn(Wu,{key:0,errorMessage:u.value,onClose:G[3]||(G[3]=ee=>l.value=!1)},null,8,["errorMessage"])):Rs("",!0),f.value&&s.value?(me(),kn(WP,{key:1,globalUser:s.value},null,8,["globalUser"])):Rs("",!0)],64))}},n0=zn(t0,[["__scopeId","data-v-f4d6eaa2"]]),rp=[{content:"Success is not final, failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},{content:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{content:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"You are never too old to set another goal or to dream a new dream.",author:"C.S. Lewis"},{content:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"Don’t watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"The only limit to our realization of tomorrow is our doubts of today.",author:"Franklin D. Roosevelt"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Don’t wait. The time will never be just right.",author:"Napoleon Hill"},{content:"Believe in yourself and all that you are.",author:"Christian D. Larson"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Success is what comes after you stop making excuses.",author:"Luis Galarza"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Do what you love, love what you do.",author:"Unknown"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Motivation is what gets you started. Habit is what keeps you going.",author:"Jim Ryun"},{content:"Don’t let fear decide your future.",author:"Shalane Flanagan"},{content:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"Do one thing every day that scares you.",author:"Eleanor Roosevelt"},{content:"The best way to predict the future is to invent it.",author:"Alan Kay"},{content:"Difficult roads often lead to beautiful destinations.",author:"Unknown"},{content:"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",author:"Chantal Sutherland"},{content:"If it doesn’t challenge you, it won’t change you.",author:"Fred DeVito"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"The expert in anything was once a beginner.",author:"Helen Hayes"},{content:"Don’t count the days, make the days count.",author:"Muhammad Ali"},{content:"The harder the battle, the sweeter the victory.",author:"Les Brown"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"You don’t have to see the whole staircase, just take the first step.",author:"Martin Luther King Jr."},{content:"Small daily improvements over time lead to stunning results.",author:"Robin Sharma"},{content:"Don’t let what you cannot do interfere with what you can do.",author:"John Wooden"},{content:"The only limit is the one you set yourself.",author:"Felix Baumgartner"},{content:"Great things are done by a series of small things brought together.",author:"Vincent Van Gogh"},{content:"Your dream doesn’t have an expiration date. Take a deep breath and try again.",author:"KT Witten"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"You are braver than you believe, stronger than you seem, and smarter than you think.",author:"A.A. Milne"},{content:"Work until you no longer have to introduce yourself.",author:"Unknown"},{content:"The best revenge is massive success.",author:"Frank Sinatra"},{content:"Your only limit is your mind.",author:"Unknown"},{content:"Stop being afraid of what could go wrong and start being excited about what could go right.",author:"Unknown"},{content:"Do not wait to strike till the iron is hot; but make it hot by striking.",author:"William Butler Yeats"},{content:"Don’t let perfectionism get in the way of progress.",author:"Unknown"},{content:"Great minds discuss ideas; average minds discuss events; small minds discuss people.",author:"Eleanor Roosevelt"},{content:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Do what you can, with what you have, where you are.",author:"Theodore Roosevelt"},{content:"Success is not about the destination, it’s about the journey.",author:"Zig Ziglar"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"A year from now you may wish you had started today.",author:"Karen Lamb"},{content:"Don’t stop until you’re proud.",author:"Unknown"},{content:"Dream big. Start small. Act now.",author:"Robin Sharma"},{content:"Hard work beats talent when talent doesn’t work hard.",author:"Tim Notke"},{content:"Stay positive, work hard, make it happen.",author:"Unknown"},{content:"Your time is limited, don’t waste it living someone else’s life.",author:"Steve Jobs"},{content:"The difference between ordinary and extraordinary is that little extra.",author:"Jimmy Johnson"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Success doesn’t come to you, you go to it.",author:"Marva Collins"},{content:"A river cuts through rock not because of its power, but because of its persistence.",author:"Jim Watkins"},{content:"Discipline is the bridge between goals and accomplishment.",author:"Jim Rohn"},{content:"Do what is right, not what is easy nor what is popular.",author:"Unknown"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Don’t limit yourself. Many people limit themselves to what they think they can do.",author:"Mary Kay Ash"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Success is the progressive realization of a worthy goal or ideal.",author:"Earl Nightingale"},{content:"To succeed in life, you need two things: ignorance and confidence.",author:"Mark Twain"},{content:"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",author:"Mary Anne Radmacher"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"Don’t let small minds convince you that your dreams are too big.",author:"Unknown"},{content:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",author:"Pelé"},{content:"The best way out is always through.",author:"Robert Frost"},{content:"Failure is simply the opportunity to begin again, this time more intelligently.",author:"Henry Ford"},{content:"Don’t wish it were easier. Wish you were better.",author:"Jim Rohn"},{content:"The mind is everything. What you think you become.",author:"Buddha"},{content:"When you feel like quitting, remember why you started.",author:"Unknown"},{content:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},{content:"Don’t be afraid to give up the good to go for the great.",author:"John D. Rockefeller"},{content:"Do not be embarrassed by your failures, learn from them and start again.",author:"Richard Branson"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Small deeds done are better than great deeds planned.",author:"Peter Marshall"},{content:"Act as if what you do makes a difference. It does.",author:"William James"},{content:"Success is not how high you have climbed, but how you make a positive difference to the world.",author:"Roy T. Bennett"},{content:"Your future is created by what you do today, not tomorrow.",author:"Robert Kiyosaki"},{content:"The secret of success is to do the common thing uncommonly well.",author:"John D. Rockefeller Jr."},{content:"What seems to us as bitter trials are often blessings in disguise.",author:"Oscar Wilde"},{content:"The only place where success comes before work is in the dictionary.",author:"Vidal Sassoon"},{content:"Happiness is not something ready-made. It comes from your own actions.",author:"Dalai Lama"},{content:"Opportunities multiply as they are seized.",author:"Sun Tzu"},{content:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",author:"William James"},{content:"Don’t be afraid to start over. It’s a chance to build something better.",author:"Unknown"},{content:"Success isn’t always about greatness. It’s about consistency.",author:"Dwayne Johnson"},{content:"You are confined only by the walls you build yourself.",author:"Andrew Murphy"},{content:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t let the fear of losing be greater than the excitement of winning.",author:"Robert Kiyosaki"},{content:"You can’t cross the sea merely by standing and staring at the water.",author:"Rabindranath Tagore"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"The journey of a thousand miles begins with one step.",author:"Lao Tzu"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Jerry Dunn"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"It’s not whether you get knocked down, it’s whether you get up.",author:"Vince Lombardi"},{content:"Everything you can imagine is real.",author:"Pablo Picasso"},{content:"Success is not in never falling, but in rising every time we fall.",author:"Confucius"},{content:"Don’t wait for opportunity. Create it.",author:"George Bernard Shaw"},{content:"The best dreams happen when you’re awake.",author:"Cherie Gilderbloom"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"What you do today can improve all your tomorrows.",author:"Ralph Marston"}];function r0(){const t=Math.floor(Math.random()*rp.length);return rp[t]}const s0="/assets/my_therapist-BGpDoE1u.png",i0="/assets/my_journal-ByAOnFF2.png",o0="/assets/journal-BcWmOkN8.png",a0="/assets/my_courses-DAreBNF0.png",c0="/assets/therapist-sZYqYBaF.png",l0="/assets/mood_track-DScXBvTj.png",u0="/assets/courses-BeDDwdtO.png",h0="/assets/art-DRBE7P0P.png",f0={class:"home_container"},d0={class:"greeting_section licorice_regular font_size_m"},p0={class:"checkin_section"},m0={class:"feeling_section"},g0={class:"features_section"},_0={class:"feature_label inter font_size_xxs"},y0={class:"inspiration_section"},v0={class:"quote_text inter font_size_xxs"},E0={class:"offer_section"},w0={class:"offer_list"},T0={class:"offer_icon_wrapper"},I0={class:"offer_content_wrapper"},b0={class:"offer_title inter font_size_xxs"},A0={class:"offer_description inter font_size_xxs"},R0={__name:"home",setup(t){const e=Cr(),n=ve({content:"",author:""});ve(!1);const r=Ue(()=>e.userData?.personalInfo.name||""),s=Ue(()=>[{label:"My Therapist",url:s0},{label:"Journal Entry",url:i0},{label:"Explore Courses",url:a0}]),i=Ue(()=>[{label:"Expert support at your fingertips",content:"Find and connect with qualified therapists specializing in various areas.",icon:c0},{label:"Personalized mood tracking",content:"Log your daily mood to visualize trends, identify triggers, and gain insights.",icon:l0},{label:"Journaling",content:"A private space for self-reflection, prompts, and gain thoughts.",icon:o0},{label:"Curated learning courses",content:"Access a library of free and premium courses on mindfulness, stress management, and CBT techniques.",icon:u0},{label:"Art Therapy",content:"If you're feeling stressed or sad, sometimes it's easier to express it through art than words.",icon:h0}]);Sr(()=>{n.value=r0()});const o=()=>{const c=new Date().getHours();return c<12?"morning":c<18?"afternoon":"evening"};return(c,l)=>(me(),Re("div",f0,[M("div",d0," Good "+Ke(o())+", "+Ke(r.value)+"! ",1),M("div",p0,[M("div",m0,[l[1]||(l[1]=M("div",{class:"feeling_heading inter font_size_xs"},[M("b",null,"How are you feeling today?")],-1)),l[2]||(l[2]=M("div",{class:"feeling_image"},null,-1)),M("div",{class:"checkin_button inter font_size_xxs",onClick:l[0]||(l[0]=u=>c.$emit("setPage","mood"))}," Check in now ")])]),M("div",g0,[(me(!0),Re(qe,null,_n(s.value,u=>(me(),Re("div",{class:"feature_card",key:u.label},[M("div",{class:"feature_icon",style:Vi({backgroundImage:`url(${u.url})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4),M("div",_0,[M("b",null,Ke(u.label),1)])]))),128))]),M("div",y0,[l[3]||(l[3]=M("div",{class:"inspiration_heading inter font_size_xxs"},[M("b",null,"Inspiration")],-1)),M("div",v0,Ke(n.value.content),1)]),M("div",E0,[l[4]||(l[4]=M("div",{class:"offer_heading inter font_size_xs"},[M("b",null,"What we offer")],-1)),M("div",w0,[(me(!0),Re(qe,null,_n(i.value,u=>(me(),Re("div",{class:"offer_card",key:u.label},[M("div",T0,[M("div",{class:"feature_icon",style:Vi({backgroundImage:`url(${u.icon})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4)]),M("div",I0,[M("div",b0,[M("b",null,Ke(u.label),1)]),M("div",A0,Ke(u.content),1)])]))),128))])])]))}},X_=zn(R0,[["__scopeId","data-v-f203d4f3"]]),S0={class:"loading_page_holder"},C0={__name:"loadingPage",setup(t){const e=Cr(),n=so();return Sr(async()=>{e.userData?e.userData.uid?n.push({name:"Navigation"}):n.push({name:"Login"}):n.push({name:"Login"})}),(r,s)=>(me(),Re("div",S0))}},P0=zn(C0,[["__scopeId","data-v-bc11f8f1"]]),k0={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},D0={class:"modal_holder"},N0={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},V0={class:"modal_content_holder inter font_size_xs"},O0=["value"],x0=["value"],M0={__name:"profileEdit",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Cr(),r=e,s=t,i=ve([]),o=ve("");Sr(async()=>{const k=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();i.value=k.sort((P,G)=>P.name.common.localeCompare(G.name.common))});const c=ve(""),l=ve(""),u=ve(""),f=ve(""),p=ve(!1),m=ve([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),y=ve("");function D(U){return/^\d{10}$/.test(U)}function V(U){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(U))return!1;const[P,G,ee]=U.split("/").map(Number),T=new Date(P,G-1,ee);return T.getFullYear()===P&&T.getMonth()===G-1&&T.getDate()===ee}const O=async()=>{const k=zu().currentUser;if(f.value="",p.value=!1,!D(l.value)){f.value="Contact Number must be a valid 10-digit number.",p.value=!0;return}if(!V(u.value)){f.value="Date of Birth must be in the format yyyy/mm/dd.",p.value=!0;return}const P=s.globalUser.userData,G={personalInfo:{name:c.value,contactNumber:l.value,dateOfBirth:u.value,email:P.email?P.email:k.email,gender:y.value,country:o.value},uid:P.uid?P.uid:k.uid,loginDate:P.loginDate,streak:{count:P.streak.count,lastUpdate:P.streak.lastUpdate},profileEdited:Ls()};n.setUserData(G),await Ji(gr(_r,"users",P.uid?P.uid:k.uid),G),r("close")},H=()=>{p.value=!1,f.value=""};return(U,k)=>(me(),Re("div",k0,[M("div",D0,[M("div",N0,[k[6]||(k[6]=M("span",{style:{width:"80%"}},"Edit User Information",-1)),M("button",{class:"modal_close_button",onClick:k[0]||(k[0]=P=>U.$emit("close"))},"×")]),M("div",V0,[k[10]||(k[10]=M("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),M("form",{class:"modal_form_holder",onSubmit:Jl(O,["prevent"])},[Ut(M("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":k[1]||(k[1]=P=>c.value=P),required:""},null,512),[[Dn,c.value]]),Ut(M("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":k[2]||(k[2]=P=>l.value=P),required:""},null,512),[[Dn,l.value]]),Ut(M("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":k[3]||(k[3]=P=>u.value=P),required:""},null,512),[[Dn,u.value]]),Ut(M("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":k[4]||(k[4]=P=>y.value=P)},[k[7]||(k[7]=M("option",{disabled:"",value:""},"Please select one",-1)),(me(!0),Re(qe,null,_n(m.value,P=>(me(),Re("option",{key:P.value,value:P.value},Ke(P.text),9,O0))),128))],512),[[Fi,y.value]]),Ut(M("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":k[5]||(k[5]=P=>o.value=P),id:"country"},[k[8]||(k[8]=M("option",{disabled:"",value:""},"Select your country",-1)),(me(!0),Re(qe,null,_n(i.value,P=>(me(),Re("option",{key:P.cca3,value:P.cca3},Ke(P.name.common),9,x0))),128))],512),[[Fi,o.value]]),k[9]||(k[9]=M("button",{type:"submit",class:"modal_button inter font_size_xs"}," Confirm ",-1))],32)])]),p.value?(me(),kn(Wu,{key:0,errorMessage:f.value,onClose:H},null,8,["errorMessage"])):Rs("",!0)]))}},sp=zn(M0,[["__scopeId","data-v-697cab32"]]),L0={class:"profile_container"},U0={class:"profile_header"},F0={class:"profile_edit_btn"},B0={class:"profile_info"},j0={class:"profile_user_details font_size_s inter"},$0={class:"font_size_xxs"},H0={class:"profile_stats"},q0={class:"profile_stat_top inter font_size_xs"},z0={class:"profile_stat_value"},W0={class:"profile_stat_icon"},G0={class:"profile_stat_label inter font_size_xs"},K0={__name:"profile",setup(t){const e=Cr();Sr(async()=>{n.value=e.userData});const n=ve(null),r=Ue(()=>e.userData?.personalInfo.name||""),s=Ue(()=>e.userData?.personalInfo.email||"");ve("../../src/assets/user.png");const i=Ue(()=>e.userData?.streak?.count||0),o=Ue(()=>e.userData?.personalInfo.journalEntries?.length||0),c=Ue(()=>e.userData?.personalInfo.courses?.length||0),l=ve(!1),u=Ue(()=>[{label:"App Streak",value:i.value,icon:"fa fa-signal"},{label:"Journal Entries",value:o.value,icon:"fa fa-book"},{label:"Mood Trends",value:":)",icon:"fas fa-chart-line"},{label:"Courses",value:c.value,icon:"fas fa-book-open"}]),f=()=>{l.value=!0};return(p,m)=>(me(),Re(qe,null,[M("div",L0,[M("div",U0,[m[2]||(m[2]=M("div",{class:"profile_title font_size_s inter"},null,-1)),M("div",F0,[M("i",{class:"fas fa-edit",onClick:m[0]||(m[0]=y=>f())})])]),M("div",B0,[m[3]||(m[3]=M("div",{class:"profile_avatar_wrapper"},[M("i",{class:"fas fa-user-circle",style:{"font-size":"5rem",color:"#87bfba"}})],-1)),M("div",j0,[As(Ke(r.value)+" ",1),M("span",$0,Ke(s.value),1)])]),M("div",H0,[(me(!0),Re(qe,null,_n(u.value,(y,D)=>(me(),Re("div",{class:"profile_stat_card",key:D},[M("div",q0,[M("div",z0,Ke(y.value),1),M("div",W0,[M("i",{class:qr(y.icon),style:{color:"#87bfba"}},null,2)])]),M("div",G0,Ke(y.label),1)]))),128))])]),l.value?(me(),kn(sp,{key:0,onClose:m[1]||(m[1]=y=>l.value=!1),globalUser:jr(e),viewPoint:sp},null,8,["globalUser"])):Rs("",!0)],64))}},Z_=zn(K0,[["__scopeId","data-v-3615b765"]]),Q0={class:"mood_tracker_holder"},Y0={class:"mood_icons_holder"},J0={class:"mood_icon_holder"},X0=["onClick"],Z0=["onClick"],ek={class:"influence_holder"},tk={class:"influence_items_holder"},nk={class:"influence_item_holder inter font_size_xxs"},rk={__name:"mood",setup(t){const e=Ue(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),n=Ue(()=>[{label:"Sleep Quality",ref:"sleep_quality"},{label:"Nutrition",ref:"nutrition"},{label:"Physical Activity",ref:"physical_activity"},{label:"Social Connection",ref:"social_connection"},{label:"Mindset",ref:"mindset"},{label:"Environment",ref:"environment"}]),r=ve("neutral"),s=i=>{r.value=i};return(i,o)=>(me(),Re("div",Q0,[o[3]||(o[3]=M("div",{class:"mood_heading_holder inter font_size_xs"},"How am I feeling today?",-1)),M("div",Y0,[(me(!0),Re(qe,null,_n(e.value,c=>(me(),Re("div",J0,[r.value==c.ref?(me(),Re("div",{key:0,class:qr(c.icon),style:{"font-size":"3rem",border:"0.2rem solid #87bfba",padding:"0.5rem","border-radius":"50%"},onClick:l=>s(c.ref)},null,10,X0)):(me(),Re("div",{key:1,class:qr(c.icon),style:{"font-size":"3rem"},onClick:l=>s(c.ref)},null,10,Z0))]))),256))]),M("div",ek,[o[2]||(o[2]=M("div",{class:"influence_heading_holder inter font_size_xs"},[M("b",null,"What might be influencing this?")],-1)),M("div",tk,[(me(!0),Re(qe,null,_n(n.value,c=>(me(),Re("div",nk,[o[0]||(o[0]=As("  ",-1)),o[1]||(o[1]=M("input",{type:"checkbox"},null,-1)),As(" "+Ke(c.label),1)]))),256))])]),o[4]||(o[4]=M("div",{class:"influence_holder"},[M("div",{class:"influence_heading_holder inter font_size_xs"},[M("b",null,"Optional Notes")]),M("textarea",{placeholder:"Write a few words about why you feel the way you feel",style:{width:"90%",height:"60%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs"})],-1)),o[5]||(o[5]=M("div",{class:"save_button inter font_size_xxs"},"Save",-1))]))}},sk=zn(rk,[["__scopeId","data-v-401ca53a"]]),ik={class:"navigation_bar_holder"},ok=["onClick"],ak=["innerHTML"],ck={__name:"navigation",setup(t){const e={home:{name:"Home",icon:'<i class="fa fa-home"></i>'},therapists:{name:"Therapists",icon:'<i class="fa fa-address-book"></i>'},journal:{name:"Journal",icon:'<i class="fa fa-book"></i>'},content:{name:"Content",icon:'<i class="fa fa-folder-open"></i>'},profile:{name:"Profile",icon:'<i class="fa fa-id-card"></i>'}},n=Cr();vs(()=>n.userData,i=>{}),so();const r=ve("home"),s=i=>{r.value=i};return Sr(async()=>{}),(i,o)=>(me(),Re(qe,null,[r.value==="profile"?(me(),kn(Z_,{key:0})):r.value==="home"?(me(),kn(X_,{key:1,onSetPage:s})):r.value==="mood"?(me(),kn(sk,{key:2})):Rs("",!0),M("div",ik,[(me(),Re(qe,null,_n(e,(c,l)=>M("div",{class:"navigation_item_holder inter font_size_xxs",key:l},[M("div",{class:qr(["navigation_item",{active:r.value===l}]),onClick:u=>s(l)},[M("div",{innerHTML:c.icon},null,8,ak),M("div",null,Ke(c.name),1)],10,ok)])),64))])],64))}},lk=zn(ck,[["__scopeId","data-v-7951fa9a"]]),uk=[{path:"/loading",name:"Loading",component:P0},{path:"/login",name:"Login",component:n0},{path:"/navigation",name:"Navigation",component:lk},{path:"/home/",name:"Home",component:X_,props:!0},{path:"/profile/",name:"Profile",component:Z_,props:!0}],hk=uT({history:$w(),routes:uk});let ip=null;ms.onAuthStateChanged(()=>{if(!ip){const t=QE(OP);t.use(XE()),t.use(hk),t.mount("#app"),ip=t}});
