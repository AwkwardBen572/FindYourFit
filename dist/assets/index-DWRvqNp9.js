(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},Ss=[],_n=()=>{},bp=()=>!1,xa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zc=t=>t.startsWith("onUpdate:"),Tt=Object.assign,Wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xy=Object.prototype.hasOwnProperty,Ce=(t,e)=>Xy.call(t,e),ce=Array.isArray,Cs=t=>so(t)==="[object Map]",zs=t=>so(t)==="[object Set]",Gh=t=>so(t)==="[object Date]",ge=t=>typeof t=="function",Ye=t=>typeof t=="string",Sn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Ap=t=>(Ve(t)||ge(t))&&ge(t.then)&&ge(t.catch),Rp=Object.prototype.toString,so=t=>Rp.call(t),Zy=t=>so(t).slice(8,-1),Sp=t=>so(t)==="[object Object]",Gc=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ti=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},ev=/-\w/g,Qt=Ma(t=>t.replace(ev,e=>e.slice(1).toUpperCase())),tv=/\B([A-Z])/g,as=Ma(t=>t.replace(tv,"-$1").toLowerCase()),La=Ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pl=Ma(t=>t?`on${La(t)}`:""),Ir=(t,e)=>!Object.is(t,e),$o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},na=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kh;const Ua=()=>Kh||(Kh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pr(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?iv(r):Pr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||Ve(t))return t}const nv=/;(?![^(]*\))/g,rv=/:([^]+)/,sv=/\/\*[^]*?\*\//g;function iv(t){const e={};return t.replace(sv,"").split(nv).forEach(n=>{if(n){const r=n.split(rv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qn(t){let e="";if(Ye(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Qn(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ov="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",av=qc(ov);function Pp(t){return!!t||t===""}function lv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=es(t[r],e[r]);return n}function es(t,e){if(t===e)return!0;let n=Gh(t),r=Gh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Sn(t),r=Sn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?lv(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!es(t[o],e[o]))return!1}}return String(t)===String(e)}function Kc(t,e){return t.findIndex(n=>es(n,e))}const kp=t=>!!(t&&t.__v_isRef===!0),Ue=t=>Ye(t)?t:t==null?"":ce(t)||Ve(t)&&(t.toString===Rp||!ge(t.toString))?kp(t)?Ue(t.value):JSON.stringify(t,Dp,2):String(t),Dp=(t,e)=>kp(e)?Dp(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[kl(r,i)+" =>"]=s,n),{})}:zs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>kl(n))}:Sn(e)?kl(e):Ve(e)&&!ce(e)&&!Sp(e)?String(e):e,kl=(t,e="")=>{var n;return Sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class Np{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){++this._on===1&&(this.prevScope=gt,gt=this)}off(){this._on>0&&--this._on===0&&(gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Op(t){return new Np(t)}function Vp(){return gt}function cv(t,e=!1){gt&&gt.cleanups.push(t)}let Me;const Dl=new WeakSet;class xp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Dl.has(this)&&(Dl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qh(this),Up(this);const e=Me,n=sn;Me=this,sn=!0;try{return this.fn()}finally{Fp(this),Me=e,sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jc(e);this.deps=this.depsTail=void 0,Qh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Dl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rc(this)&&this.run()}get dirty(){return rc(this)}}let Mp=0,Ii,bi;function Lp(t,e=!1){if(t.flags|=8,e){t.next=bi,bi=t;return}t.next=Ii,Ii=t}function Qc(){Mp++}function Yc(){if(--Mp>0)return;if(bi){let e=bi;for(bi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ii;){let e=Ii;for(Ii=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Jc(r),uv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function rc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Bp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Fi)||(t.globalVersion=Fi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!rc(t))))return;t.flags|=2;const e=t.dep,n=Me,r=sn;Me=t,sn=!0;try{Up(t);const s=t.fn(t._value);(e.version===0||Ir(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,sn=r,Fp(t),t.flags&=-3}}function Jc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Jc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function uv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let sn=!0;const jp=[];function Yn(){jp.push(sn),sn=!1}function Jn(){const t=jp.pop();sn=t===void 0?!0:t}function Qh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Fi=0;class hv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!sn||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new hv(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,$p(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Fi++,this.notify(e)}notify(e){Qc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Yc()}}}function $p(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)$p(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ra=new WeakMap,Jr=Symbol(""),sc=Symbol(""),Bi=Symbol("");function yt(t,e,n){if(sn&&Me){let r=ra.get(t);r||ra.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Xc),s.map=r,s.key=n),s.track()}}function Fn(t,e,n,r,s,i){const o=ra.get(t);if(!o){Fi++;return}const l=c=>{c&&c.trigger()};if(Qc(),e==="clear")o.forEach(l);else{const c=ce(t),u=c&&Gc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Bi||!Sn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Bi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Jr)),Cs(t)&&l(o.get(sc)));break;case"delete":c||(l(o.get(Jr)),Cs(t)&&l(o.get(sc)));break;case"set":Cs(t)&&l(o.get(Jr));break}}Yc()}function fv(t,e){const n=ra.get(t);return n&&n.get(e)}function vs(t){const e=Re(t);return e===t?e:(yt(e,"iterate",Bi),Wt(t)?e:e.map(lt))}function Fa(t){return yt(t=Re(t),"iterate",Bi),t}const dv={__proto__:null,[Symbol.iterator](){return Nl(this,Symbol.iterator,lt)},concat(...t){return vs(this).concat(...t.map(e=>ce(e)?vs(e):e))},entries(){return Nl(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return Mn(this,"every",t,e,void 0,arguments)},filter(t,e){return Mn(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return Mn(this,"find",t,e,lt,arguments)},findIndex(t,e){return Mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mn(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return Mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ol(this,"includes",t)},indexOf(...t){return Ol(this,"indexOf",t)},join(t){return vs(this).join(t)},lastIndexOf(...t){return Ol(this,"lastIndexOf",t)},map(t,e){return Mn(this,"map",t,e,void 0,arguments)},pop(){return fi(this,"pop")},push(...t){return fi(this,"push",t)},reduce(t,...e){return Yh(this,"reduce",t,e)},reduceRight(t,...e){return Yh(this,"reduceRight",t,e)},shift(){return fi(this,"shift")},some(t,e){return Mn(this,"some",t,e,void 0,arguments)},splice(...t){return fi(this,"splice",t)},toReversed(){return vs(this).toReversed()},toSorted(t){return vs(this).toSorted(t)},toSpliced(...t){return vs(this).toSpliced(...t)},unshift(...t){return fi(this,"unshift",t)},values(){return Nl(this,"values",lt)}};function Nl(t,e,n){const r=Fa(t),s=r[e]();return r!==t&&!Wt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const pv=Array.prototype;function Mn(t,e,n,r,s,i){const o=Fa(t),l=o!==t&&!Wt(t),c=o[e];if(c!==pv[e]){const p=c.apply(t,i);return l?lt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,lt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Yh(t,e,n,r){const s=Fa(t);let i=n;return s!==t&&(Wt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,lt(l),c,t)}),s[e](i,...r)}function Ol(t,e,n){const r=Re(t);yt(r,"iterate",Bi);const s=r[e](...n);return(s===-1||s===!1)&&tu(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function fi(t,e,n=[]){Yn(),Qc();const r=Re(t)[e].apply(t,n);return Yc(),Jn(),r}const mv=qc("__proto__,__v_isRef,__isVue"),Hp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sn));function gv(t){Sn(t)||(t=String(t));const e=Re(this);return yt(e,"has",t),e.hasOwnProperty(t)}class qp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Rv:Kp:i?Gp:Wp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=dv[n]))return c;if(n==="hasOwnProperty")return gv}const l=Reflect.get(e,n,Ge(e)?e:r);if((Sn(n)?Hp.has(n):mv(n))||(s||yt(e,"get",n),i))return l;if(Ge(l)){const c=o&&Gc(n)?l:l.value;return s&&Ve(c)?oc(c):c}return Ve(l)?s?oc(l):io(l):l}}class zp extends qp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=kr(i);if(!Wt(r)&&!kr(r)&&(i=Re(i),r=Re(r)),!ce(e)&&Ge(i)&&!Ge(r))return c||(i.value=r),!0}const o=ce(e)&&Gc(n)?Number(n)<e.length:Ce(e,n),l=Reflect.set(e,n,r,Ge(e)?e:s);return e===Re(s)&&(o?Ir(r,i)&&Fn(e,"set",n,r):Fn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Fn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Sn(n)||!Hp.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ce(e)?"length":Jr),Reflect.ownKeys(e)}}class _v extends qp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const yv=new zp,vv=new _v,Ev=new zp(!0);const ic=t=>t,Do=t=>Reflect.getPrototypeOf(t);function wv(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=Cs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?ic:e?sa:lt;return!e&&yt(i,"iterate",c?sc:Jr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function No(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Tv(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),l=Re(s);t||(Ir(s,l)&&yt(o,"get",s),yt(o,"get",l));const{has:c}=Do(o),u=e?ic:t?sa:lt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(Re(s),"iterate",Jr),s.size},has(s){const i=this.__v_raw,o=Re(i),l=Re(s);return t||(Ir(s,l)&&yt(o,"has",s),yt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Re(l),u=e?ic:t?sa:lt;return!t&&yt(c,"iterate",Jr),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Tt(n,t?{add:No("add"),set:No("set"),delete:No("delete"),clear:No("clear")}:{add(s){!e&&!Wt(s)&&!kr(s)&&(s=Re(s));const i=Re(this);return Do(i).has.call(i,s)||(i.add(s),Fn(i,"add",s,s)),this},set(s,i){!e&&!Wt(i)&&!kr(i)&&(i=Re(i));const o=Re(this),{has:l,get:c}=Do(o);let u=l.call(o,s);u||(s=Re(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Ir(i,f)&&Fn(o,"set",s,i):Fn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:l}=Do(i);let c=o.call(i,s);c||(s=Re(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Fn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Fn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=wv(s,t,e)}),n}function Zc(t,e){const n=Tv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const Iv={get:Zc(!1,!1)},bv={get:Zc(!1,!0)},Av={get:Zc(!0,!1)};const Wp=new WeakMap,Gp=new WeakMap,Kp=new WeakMap,Rv=new WeakMap;function Sv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cv(t){return t.__v_skip||!Object.isExtensible(t)?0:Sv(Zy(t))}function io(t){return kr(t)?t:eu(t,!1,yv,Iv,Wp)}function Qp(t){return eu(t,!1,Ev,bv,Gp)}function oc(t){return eu(t,!0,vv,Av,Kp)}function eu(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Cv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function br(t){return kr(t)?br(t.__v_raw):!!(t&&t.__v_isReactive)}function kr(t){return!!(t&&t.__v_isReadonly)}function Wt(t){return!!(t&&t.__v_isShallow)}function tu(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function nu(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Cp(t,"__v_skip",!0),t}const lt=t=>Ve(t)?io(t):t,sa=t=>Ve(t)?oc(t):t;function Ge(t){return t?t.__v_isRef===!0:!1}function oe(t){return Yp(t,!1)}function Pv(t){return Yp(t,!0)}function Yp(t,e){return Ge(t)?t:new kv(t,e)}class kv{constructor(e,n){this.dep=new Xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Wt(e)||kr(e);e=r?e:Re(e),Ir(e,n)&&(this._rawValue=e,this._value=r?e:lt(e),this.dep.trigger())}}function yn(t){return Ge(t)?t.value:t}const Dv={get:(t,e,n)=>e==="__v_raw"?t:yn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ge(s)&&!Ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Jp(t){return br(t)?t:new Proxy(t,Dv)}function Nv(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=Vv(t,n);return e}class Ov{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fv(Re(this._object),this._key)}}function Vv(t,e,n){const r=t[e];return Ge(r)?r:new Ov(t,e,n)}class xv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Lp(this,!0),!0}get value(){const e=this.dep.track();return Bp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Mv(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new xv(r,s,n)}const Oo={},ia=new WeakMap;let Gr;function Lv(t,e=!1,n=Gr){if(n){let r=ia.get(n);r||ia.set(n,r=[]),r.push(t)}}function Uv(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=C=>s?C:Wt(C)||s===!1||s===0?Bn(C,1):Bn(C);let f,p,m,y,O=!1,N=!1;if(Ge(t)?(p=()=>t.value,O=Wt(t)):br(t)?(p=()=>u(t),O=!0):ce(t)?(N=!0,O=t.some(C=>br(C)||Wt(C)),p=()=>t.map(C=>{if(Ge(C))return C.value;if(br(C))return u(C);if(ge(C))return c?c(C,2):C()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Yn();try{m()}finally{Jn()}}const C=Gr;Gr=f;try{return c?c(t,3,[y]):t(y)}finally{Gr=C}}:p=_n,e&&s){const C=p,q=s===!0?1/0:s;p=()=>Bn(C(),q)}const k=Vp(),L=()=>{f.stop(),k&&k.active&&Wc(k.effects,f)};if(i&&e){const C=e;e=(...q)=>{C(...q),L()}}let M=N?new Array(t.length).fill(Oo):Oo;const S=C=>{if(!(!(f.flags&1)||!f.dirty&&!C))if(e){const q=f.run();if(s||O||(N?q.some((ee,T)=>Ir(ee,M[T])):Ir(q,M))){m&&m();const ee=Gr;Gr=f;try{const T=[q,M===Oo?void 0:N&&M[0]===Oo?[]:M,y];M=q,c?c(e,3,T):e(...T)}finally{Gr=ee}}}else f.run()};return l&&l(S),f=new xp(p),f.scheduler=o?()=>o(S,!1):S,y=C=>Lv(C,!1,f),m=f.onStop=()=>{const C=ia.get(f);if(C){if(c)c(C,4);else for(const q of C)q();ia.delete(f)}},e?r?S(!0):M=f.run():o?o(S.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function Bn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ge(t))Bn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Bn(t[r],e,n);else if(zs(t)||Cs(t))t.forEach(r=>{Bn(r,e,n)});else if(Sp(t)){for(const r in t)Bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oo(t,e,n,r){try{return r?t(...r):t()}catch(s){Ba(s,e,n)}}function Cn(t,e,n,r){if(ge(t)){const s=oo(t,e,n,r);return s&&Ap(s)&&s.catch(i=>{Ba(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Cn(t[i],e,n,r));return s}}function Ba(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Yn(),oo(i,null,10,[t,c,u]),Jn();return}}Fv(t,n,s,r,o)}function Fv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let pn=-1;const Ps=[];let mr=null,ws=0;const Xp=Promise.resolve();let oa=null;function ja(t){const e=oa||Xp;return t?e.then(this?t.bind(this):t):e}function Bv(t){let e=pn+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=ji(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ru(t){if(!(t.flags&1)){const e=ji(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=ji(n)?St.push(t):St.splice(Bv(e),0,t),t.flags|=1,Zp()}}function Zp(){oa||(oa=Xp.then(tm))}function jv(t){ce(t)?Ps.push(...t):mr&&t.id===-1?mr.splice(ws+1,0,t):t.flags&1||(Ps.push(t),t.flags|=1),Zp()}function Jh(t,e,n=pn+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function em(t){if(Ps.length){const e=[...new Set(Ps)].sort((n,r)=>ji(n)-ji(r));if(Ps.length=0,mr){mr.push(...e);return}for(mr=e,ws=0;ws<mr.length;ws++){const n=mr[ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mr=null,ws=0}}const ji=t=>t.id==null?t.flags&2?-1:1/0:t.id;function tm(t){try{for(pn=0;pn<St.length;pn++){const e=St[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<St.length;pn++){const e=St[pn];e&&(e.flags&=-2)}pn=-1,St.length=0,em(),oa=null,(St.length||Ps.length)&&tm()}}let Bt=null,nm=null;function aa(t){const e=Bt;return Bt=t,nm=t&&t.type.__scopeId||null,e}function $v(t,e=Bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ua(-1);const i=aa(e);let o;try{o=t(...s)}finally{aa(i),r._d&&ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Et(t,e){if(Bt===null)return t;const n=za(Bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Oe]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function zr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Yn(),Cn(c,n,8,[t.el,l,t,e]),Jn())}}const Hv=Symbol("_vte"),qv=t=>t.__isTeleport,zv=Symbol("_leaveCb");function su(t,e){t.shapeFlag&6&&t.component?(t.transition=e,su(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rm(t,e){return ge(t)?Tt({name:t.name},e,{setup:t}):t}function sm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const la=new WeakMap;function Ai(t,e,n,r,s=!1){if(ce(t)){t.forEach((O,N)=>Ai(O,e&&(ce(e)?e[N]:e),n,r,s));return}if(Ri(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ai(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?za(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Oe?l.refs={}:l.refs,p=l.setupState,m=Re(p),y=p===Oe?bp:O=>Ce(m,O);if(u!=null&&u!==c){if(Xh(e),Ye(u))f[u]=null,y(u)&&(p[u]=null);else if(Ge(u)){u.value=null;const O=e;O.k&&(f[O.k]=null)}}if(ge(c))oo(c,l,12,[o,f]);else{const O=Ye(c),N=Ge(c);if(O||N){const k=()=>{if(t.f){const L=O?y(c)?p[c]:f[c]:c.value;if(s)ce(L)&&Wc(L,i);else if(ce(L))L.includes(i)||L.push(i);else if(O)f[c]=[i],y(c)&&(p[c]=f[c]);else{const M=[i];c.value=M,t.k&&(f[t.k]=M)}}else O?(f[c]=o,y(c)&&(p[c]=o)):N&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const L=()=>{k(),la.delete(t)};L.id=-1,la.set(t,L),Lt(L,n)}else Xh(t),k()}}}function Xh(t){const e=la.get(t);e&&(e.flags|=8,la.delete(t))}Ua().requestIdleCallback;Ua().cancelIdleCallback;const Ri=t=>!!t.type.__asyncLoader,im=t=>t.type.__isKeepAlive;function Wv(t,e){om(t,"a",e)}function Gv(t,e){om(t,"da",e)}function om(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($a(e,r,n),n){let s=n.parent;for(;s&&s.parent;)im(s.parent.vnode)&&Kv(r,e,n,s),s=s.parent}}function Kv(t,e,n,r){const s=$a(e,t,r,!0);am(()=>{Wc(r[e],s)},n)}function $a(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Yn();const l=ao(n),c=Cn(e,n,t,o);return l(),Jn(),c});return r?s.unshift(i):s.push(i),i}}const nr=t=>(e,n=wt)=>{(!Hi||t==="sp")&&$a(t,(...r)=>e(...r),n)},Qv=nr("bm"),ls=nr("m"),Yv=nr("bu"),Jv=nr("u"),Xv=nr("bum"),am=nr("um"),Zv=nr("sp"),eE=nr("rtg"),tE=nr("rtc");function nE(t,e=wt){$a("ec",t,e)}const rE="components";function sE(t,e){return oE(rE,t,!0,e)||t}const iE=Symbol.for("v-ndc");function oE(t,e,n=!0,r=!1){const s=Bt||wt;if(s){const i=s.type;{const l=KE(i,!1);if(l&&(l===e||l===Qt(e)||l===La(Qt(e))))return i}const o=Zh(s[t]||i[t],e)||Zh(s.appContext[t],e);return!o&&r?i:o}}function Zh(t,e){return t&&(t[e]||t[Qt(e)]||t[La(Qt(e))])}function $t(t,e,n,r){let s;const i=n,o=ce(t);if(o||Ye(t)){const l=o&&br(t);let c=!1,u=!1;l&&(c=!Wt(t),u=kr(t),t=Fa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?sa(lt(t[f])):lt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const ac=t=>t?Cm(t)?za(t):ac(t.parent):null,Si=Tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ac(t.parent),$root:t=>ac(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cm(t),$forceUpdate:t=>t.f||(t.f=()=>{ru(t.update)}),$nextTick:t=>t.n||(t.n=ja.bind(t.proxy)),$watch:t=>CE.bind(t)}),Vl=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Ce(t,e),aE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Vl(r,e))return o[e]=1,r[e];if(s!==Oe&&Ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,i[e];if(n!==Oe&&Ce(n,e))return o[e]=4,n[e];lc&&(o[e]=0)}}const f=Si[e];let p,m;if(f)return e==="$attrs"&&yt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Ce(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ce(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Vl(s,e)?(s[e]=n,!0):r!==Oe&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},l){let c,u;return!!(n[l]||t!==Oe&&l[0]!=="$"&&Ce(t,l)||Vl(e,l)||(c=i[0])&&Ce(c,l)||Ce(r,l)||Ce(Si,l)||Ce(s.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ef(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lc=!0;function lE(t){const e=cm(t),n=t.proxy,r=t.ctx;lc=!1,e.beforeCreate&&tf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:O,activated:N,deactivated:k,beforeDestroy:L,beforeUnmount:M,destroyed:S,unmounted:C,render:q,renderTracked:ee,renderTriggered:T,errorCaptured:_,serverPrefetch:v,expose:A,inheritAttrs:b,components:R,directives:w,filters:He}=e;if(u&&cE(u,r,null),o)for(const me in o){const Ie=o[me];ge(Ie)&&(r[me]=Ie.bind(n))}if(s){const me=s.call(n,n);Ve(me)&&(t.data=io(me))}if(lc=!0,i)for(const me in i){const Ie=i[me],Ct=ge(Ie)?Ie.bind(n,n):ge(Ie.get)?Ie.get.bind(n,n):_n,un=!ge(Ie)&&ge(Ie.set)?Ie.set.bind(n):_n,Ot=Le({get:Ct,set:un});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:it=>Ot.value=it})}if(l)for(const me in l)lm(l[me],r,n,me);if(c){const me=ge(c)?c.call(n):c;Reflect.ownKeys(me).forEach(Ie=>{Ho(Ie,me[Ie])})}f&&tf(f,t,"c");function xe(me,Ie){ce(Ie)?Ie.forEach(Ct=>me(Ct.bind(n))):Ie&&me(Ie.bind(n))}if(xe(Qv,p),xe(ls,m),xe(Yv,y),xe(Jv,O),xe(Wv,N),xe(Gv,k),xe(nE,_),xe(tE,ee),xe(eE,T),xe(Xv,M),xe(am,C),xe(Zv,v),ce(A))if(A.length){const me=t.exposed||(t.exposed={});A.forEach(Ie=>{Object.defineProperty(me,Ie,{get:()=>n[Ie],set:Ct=>n[Ie]=Ct,enumerable:!0})})}else t.exposed||(t.exposed={});q&&t.render===_n&&(t.render=q),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),w&&(t.directives=w),v&&sm(t)}function cE(t,e,n=_n){ce(t)&&(t=cc(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=on(s.from||r,s.default,!0):i=on(s.from||r):i=on(s),Ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function tf(t,e,n){Cn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function lm(t,e,n,r){let s=r.includes(".")?Tm(n,r):()=>n[r];if(Ye(t)){const i=e[t];ge(i)&&ks(s,i)}else if(ge(t))ks(s,t.bind(n));else if(Ve(t))if(ce(t))t.forEach(i=>lm(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&ks(s,i,t)}}function cm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ca(c,u,o,!0)),ca(c,e,o)),Ve(e)&&i.set(e,c),c}function ca(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ca(t,i,n,!0),s&&s.forEach(o=>ca(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=uE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const uE={data:nf,props:rf,emits:rf,methods:mi,computed:mi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:mi,directives:mi,watch:fE,provide:nf,inject:hE};function nf(t,e){return e?t?function(){return Tt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function hE(t,e){return mi(cc(t),cc(e))}function cc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function mi(t,e){return t?Tt(Object.create(null),t,e):e}function rf(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:Tt(Object.create(null),ef(t),ef(e??{})):e}function fE(t,e){if(!t)return e;if(!e)return t;const n=Tt(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function um(){return{app:null,config:{isNativeTag:bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dE=0;function pE(t,e){return function(r,s=null){ge(r)||(r=Tt({},r)),s!=null&&!Ve(s)&&(s=null);const i=um(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:dE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:YE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ge(f.install)?(o.add(f),f.install(u,...p)):ge(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const y=u._ceVNode||Nt(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),c=!0,u._container=f,f.__vue_app__=u,za(y.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Cn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Xr;Xr=u;try{return f()}finally{Xr=p}}};return u}}let Xr=null;function Ho(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function on(t,e,n=!1){const r=Sm();if(r||Xr){let s=Xr?Xr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function mE(){return!!(Sm()||Xr)}const hm={},fm=()=>Object.create(hm),dm=t=>Object.getPrototypeOf(t)===hm;function gE(t,e,n,r=!1){const s={},i=fm();t.propsDefaults=Object.create(null),pm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function _E(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Re(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ha(t.emitsOptions,m))continue;const y=e[m];if(c)if(Ce(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const O=Qt(m);s[O]=uc(c,l,O,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{pm(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Ce(e,p)&&((f=as(p))===p||!Ce(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=uc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ce(e,p))&&(delete i[p],u=!0)}u&&Fn(t.attrs,"set","")}function pm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ti(c))continue;const u=e[c];let f;s&&Ce(s,f=Qt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ha(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Re(n),u=l||Oe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=uc(s,c,p,u[p],t,!Ce(u,p))}}return o}function uc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ce(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=ao(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===as(n))&&(r=!0))}return r}const yE=new WeakMap;function mm(t,e,n=!1){const r=n?yE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const f=p=>{c=!0;const[m,y]=mm(p,e,!0);Tt(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ve(t)&&r.set(t,Ss),Ss;if(ce(i))for(let f=0;f<i.length;f++){const p=Qt(i[f]);sf(p)&&(o[p]=Oe)}else if(i)for(const f in i){const p=Qt(f);if(sf(p)){const m=i[f],y=o[p]=ce(m)||ge(m)?{type:m}:Tt({},m),O=y.type;let N=!1,k=!0;if(ce(O))for(let L=0;L<O.length;++L){const M=O[L],S=ge(M)&&M.name;if(S==="Boolean"){N=!0;break}else S==="String"&&(k=!1)}else N=ge(O)&&O.name==="Boolean";y[0]=N,y[1]=k,(N||Ce(y,"default"))&&l.push(p)}}const u=[o,l];return Ve(t)&&r.set(t,u),u}function sf(t){return t[0]!=="$"&&!Ti(t)}const iu=t=>t==="_"||t==="_ctx"||t==="$stable",ou=t=>ce(t)?t.map(gn):[gn(t)],vE=(t,e,n)=>{if(e._n)return e;const r=$v((...s)=>ou(e(...s)),n);return r._c=!1,r},gm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(iu(s))continue;const i=t[s];if(ge(i))e[s]=vE(s,i,r);else if(i!=null){const o=ou(i);e[s]=()=>o}}},_m=(t,e)=>{const n=ou(e);t.slots.default=()=>n},ym=(t,e,n)=>{for(const r in e)(n||!iu(r))&&(t[r]=e[r])},EE=(t,e,n)=>{const r=t.slots=fm();if(t.vnode.shapeFlag&32){const s=e._;s?(ym(r,e,n),n&&Cp(r,"_",s,!0)):gm(e,r)}else e&&_m(t,e)},wE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:ym(s,e,n):(i=!e.$stable,gm(e,s)),o=e}else e&&(_m(t,e),o={default:1});if(i)for(const l in s)!iu(l)&&o[l]==null&&delete s[l]},Lt=ME;function TE(t){return IE(t)}function IE(t,e){const n=Ua();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=_n,insertStaticContent:O}=t,N=(E,I,P,B=null,$=null,U=null,Q=void 0,G=null,z=!!I.dynamicChildren)=>{if(E===I)return;E&&!di(E,I)&&(B=F(E),it(E,$,U,!0),E=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:W,ref:ie,shapeFlag:J}=I;switch(W){case qa:k(E,I,P,B);break;case Dr:L(E,I,P,B);break;case Ml:E==null&&M(I,P,B,Q);break;case De:R(E,I,P,B,$,U,Q,G,z);break;default:J&1?q(E,I,P,B,$,U,Q,G,z):J&6?w(E,I,P,B,$,U,Q,G,z):(J&64||J&128)&&W.process(E,I,P,B,$,U,Q,G,z,re)}ie!=null&&$?Ai(ie,E&&E.ref,U,I||E,!I):ie==null&&E&&E.ref!=null&&Ai(E.ref,null,U,E,!0)},k=(E,I,P,B)=>{if(E==null)r(I.el=l(I.children),P,B);else{const $=I.el=E.el;I.children!==E.children&&u($,I.children)}},L=(E,I,P,B)=>{E==null?r(I.el=c(I.children||""),P,B):I.el=E.el},M=(E,I,P,B)=>{[E.el,E.anchor]=O(E.children,I,P,B,E.el,E.anchor)},S=({el:E,anchor:I},P,B)=>{let $;for(;E&&E!==I;)$=m(E),r(E,P,B),E=$;r(I,P,B)},C=({el:E,anchor:I})=>{let P;for(;E&&E!==I;)P=m(E),s(E),E=P;s(I)},q=(E,I,P,B,$,U,Q,G,z)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),E==null?ee(I,P,B,$,U,Q,G,z):v(E,I,$,U,Q,G,z)},ee=(E,I,P,B,$,U,Q,G)=>{let z,W;const{props:ie,shapeFlag:J,transition:se,dirs:le}=E;if(z=E.el=o(E.type,U,ie&&ie.is,ie),J&8?f(z,E.children):J&16&&_(E.children,z,null,B,$,xl(E,U),Q,G),le&&zr(E,null,B,"created"),T(z,E,E.scopeId,Q,B),ie){for(const ke in ie)ke!=="value"&&!Ti(ke)&&i(z,ke,null,ie[ke],U,B);"value"in ie&&i(z,"value",null,ie.value,U),(W=ie.onVnodeBeforeMount)&&dn(W,B,E)}le&&zr(E,null,B,"beforeMount");const ye=bE($,se);ye&&se.beforeEnter(z),r(z,I,P),((W=ie&&ie.onVnodeMounted)||ye||le)&&Lt(()=>{W&&dn(W,B,E),ye&&se.enter(z),le&&zr(E,null,B,"mounted")},$)},T=(E,I,P,B,$)=>{if(P&&y(E,P),B)for(let U=0;U<B.length;U++)y(E,B[U]);if($){let U=$.subTree;if(I===U||bm(U.type)&&(U.ssContent===I||U.ssFallback===I)){const Q=$.vnode;T(E,Q,Q.scopeId,Q.slotScopeIds,$.parent)}}},_=(E,I,P,B,$,U,Q,G,z=0)=>{for(let W=z;W<E.length;W++){const ie=E[W]=G?gr(E[W]):gn(E[W]);N(null,ie,I,P,B,$,U,Q,G)}},v=(E,I,P,B,$,U,Q)=>{const G=I.el=E.el;let{patchFlag:z,dynamicChildren:W,dirs:ie}=I;z|=E.patchFlag&16;const J=E.props||Oe,se=I.props||Oe;let le;if(P&&Wr(P,!1),(le=se.onVnodeBeforeUpdate)&&dn(le,P,I,E),ie&&zr(I,E,P,"beforeUpdate"),P&&Wr(P,!0),(J.innerHTML&&se.innerHTML==null||J.textContent&&se.textContent==null)&&f(G,""),W?A(E.dynamicChildren,W,G,P,B,xl(I,$),U):Q||Ie(E,I,G,null,P,B,xl(I,$),U,!1),z>0){if(z&16)b(G,J,se,P,$);else if(z&2&&J.class!==se.class&&i(G,"class",null,se.class,$),z&4&&i(G,"style",J.style,se.style,$),z&8){const ye=I.dynamicProps;for(let ke=0;ke<ye.length;ke++){const Ae=ye[ke],dt=J[Ae],pt=se[Ae];(pt!==dt||Ae==="value")&&i(G,Ae,dt,pt,$,P)}}z&1&&E.children!==I.children&&f(G,I.children)}else!Q&&W==null&&b(G,J,se,P,$);((le=se.onVnodeUpdated)||ie)&&Lt(()=>{le&&dn(le,P,I,E),ie&&zr(I,E,P,"updated")},B)},A=(E,I,P,B,$,U,Q)=>{for(let G=0;G<I.length;G++){const z=E[G],W=I[G],ie=z.el&&(z.type===De||!di(z,W)||z.shapeFlag&198)?p(z.el):P;N(z,W,ie,null,B,$,U,Q,!0)}},b=(E,I,P,B,$)=>{if(I!==P){if(I!==Oe)for(const U in I)!Ti(U)&&!(U in P)&&i(E,U,I[U],null,$,B);for(const U in P){if(Ti(U))continue;const Q=P[U],G=I[U];Q!==G&&U!=="value"&&i(E,U,G,Q,$,B)}"value"in P&&i(E,"value",I.value,P.value,$)}},R=(E,I,P,B,$,U,Q,G,z)=>{const W=I.el=E?E.el:l(""),ie=I.anchor=E?E.anchor:l("");let{patchFlag:J,dynamicChildren:se,slotScopeIds:le}=I;le&&(G=G?G.concat(le):le),E==null?(r(W,P,B),r(ie,P,B),_(I.children||[],P,ie,$,U,Q,G,z)):J>0&&J&64&&se&&E.dynamicChildren?(A(E.dynamicChildren,se,P,$,U,Q,G),(I.key!=null||$&&I===$.subTree)&&vm(E,I,!0)):Ie(E,I,P,ie,$,U,Q,G,z)},w=(E,I,P,B,$,U,Q,G,z)=>{I.slotScopeIds=G,E==null?I.shapeFlag&512?$.ctx.activate(I,P,B,Q,z):He(I,P,B,$,U,Q,z):ht(E,I,z)},He=(E,I,P,B,$,U,Q)=>{const G=E.component=HE(E,B,$);if(im(E)&&(G.ctx.renderer=re),qE(G,!1,Q),G.asyncDep){if($&&$.registerDep(G,xe,Q),!E.el){const z=G.subTree=Nt(Dr);L(null,z,I,P),E.placeholder=z.el}}else xe(G,E,I,P,$,U,Q)},ht=(E,I,P)=>{const B=I.component=E.component;if(VE(E,I,P))if(B.asyncDep&&!B.asyncResolved){me(B,I,P);return}else B.next=I,B.update();else I.el=E.el,B.vnode=I},xe=(E,I,P,B,$,U,Q)=>{const G=()=>{if(E.isMounted){let{next:J,bu:se,u:le,parent:ye,vnode:ke}=E;{const xt=Em(E);if(xt){J&&(J.el=ke.el,me(E,J,Q)),xt.asyncDep.then(()=>{E.isUnmounted||G()});return}}let Ae=J,dt;Wr(E,!1),J?(J.el=ke.el,me(E,J,Q)):J=ke,se&&$o(se),(dt=J.props&&J.props.onVnodeBeforeUpdate)&&dn(dt,ye,J,ke),Wr(E,!0);const pt=af(E),Vt=E.subTree;E.subTree=pt,N(Vt,pt,p(Vt.el),F(Vt),E,$,U),J.el=pt.el,Ae===null&&xE(E,pt.el),le&&Lt(le,$),(dt=J.props&&J.props.onVnodeUpdated)&&Lt(()=>dn(dt,ye,J,ke),$)}else{let J;const{el:se,props:le}=I,{bm:ye,m:ke,parent:Ae,root:dt,type:pt}=E,Vt=Ri(I);Wr(E,!1),ye&&$o(ye),!Vt&&(J=le&&le.onVnodeBeforeMount)&&dn(J,Ae,I),Wr(E,!0);{dt.ce&&dt.ce._def.shadowRoot!==!1&&dt.ce._injectChildStyle(pt);const xt=E.subTree=af(E);N(null,xt,P,B,E,$,U),I.el=xt.el}if(ke&&Lt(ke,$),!Vt&&(J=le&&le.onVnodeMounted)){const xt=I;Lt(()=>dn(J,Ae,xt),$)}(I.shapeFlag&256||Ae&&Ri(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&E.a&&Lt(E.a,$),E.isMounted=!0,I=P=B=null}};E.scope.on();const z=E.effect=new xp(G);E.scope.off();const W=E.update=z.run.bind(z),ie=E.job=z.runIfDirty.bind(z);ie.i=E,ie.id=E.uid,z.scheduler=()=>ru(ie),Wr(E,!0),W()},me=(E,I,P)=>{I.component=E;const B=E.vnode.props;E.vnode=I,E.next=null,_E(E,I.props,B,P),wE(E,I.children,P),Yn(),Jh(E),Jn()},Ie=(E,I,P,B,$,U,Q,G,z=!1)=>{const W=E&&E.children,ie=E?E.shapeFlag:0,J=I.children,{patchFlag:se,shapeFlag:le}=I;if(se>0){if(se&128){un(W,J,P,B,$,U,Q,G,z);return}else if(se&256){Ct(W,J,P,B,$,U,Q,G,z);return}}le&8?(ie&16&&ft(W,$,U),J!==W&&f(P,J)):ie&16?le&16?un(W,J,P,B,$,U,Q,G,z):ft(W,$,U,!0):(ie&8&&f(P,""),le&16&&_(J,P,B,$,U,Q,G,z))},Ct=(E,I,P,B,$,U,Q,G,z)=>{E=E||Ss,I=I||Ss;const W=E.length,ie=I.length,J=Math.min(W,ie);let se;for(se=0;se<J;se++){const le=I[se]=z?gr(I[se]):gn(I[se]);N(E[se],le,P,null,$,U,Q,G,z)}W>ie?ft(E,$,U,!0,!1,J):_(I,P,B,$,U,Q,G,z,J)},un=(E,I,P,B,$,U,Q,G,z)=>{let W=0;const ie=I.length;let J=E.length-1,se=ie-1;for(;W<=J&&W<=se;){const le=E[W],ye=I[W]=z?gr(I[W]):gn(I[W]);if(di(le,ye))N(le,ye,P,null,$,U,Q,G,z);else break;W++}for(;W<=J&&W<=se;){const le=E[J],ye=I[se]=z?gr(I[se]):gn(I[se]);if(di(le,ye))N(le,ye,P,null,$,U,Q,G,z);else break;J--,se--}if(W>J){if(W<=se){const le=se+1,ye=le<ie?I[le].el:B;for(;W<=se;)N(null,I[W]=z?gr(I[W]):gn(I[W]),P,ye,$,U,Q,G,z),W++}}else if(W>se)for(;W<=J;)it(E[W],$,U,!0),W++;else{const le=W,ye=W,ke=new Map;for(W=ye;W<=se;W++){const ot=I[W]=z?gr(I[W]):gn(I[W]);ot.key!=null&&ke.set(ot.key,W)}let Ae,dt=0;const pt=se-ye+1;let Vt=!1,xt=0;const en=new Array(pt);for(W=0;W<pt;W++)en[W]=0;for(W=le;W<=J;W++){const ot=E[W];if(dt>=pt){it(ot,$,U,!0);continue}let tt;if(ot.key!=null)tt=ke.get(ot.key);else for(Ae=ye;Ae<=se;Ae++)if(en[Ae-ye]===0&&di(ot,I[Ae])){tt=Ae;break}tt===void 0?it(ot,$,U,!0):(en[tt-ye]=W+1,tt>=xt?xt=tt:Vt=!0,N(ot,I[tt],P,null,$,U,Q,G,z),dt++)}const ms=Vt?AE(en):Ss;for(Ae=ms.length-1,W=pt-1;W>=0;W--){const ot=ye+W,tt=I[ot],Js=I[ot+1],Br=ot+1<ie?Js.el||Js.placeholder:B;en[W]===0?N(null,tt,P,Br,$,U,Q,G,z):Vt&&(Ae<0||W!==ms[Ae]?Ot(tt,P,Br,2):Ae--)}}},Ot=(E,I,P,B,$=null)=>{const{el:U,type:Q,transition:G,children:z,shapeFlag:W}=E;if(W&6){Ot(E.component.subTree,I,P,B);return}if(W&128){E.suspense.move(I,P,B);return}if(W&64){Q.move(E,I,P,re);return}if(Q===De){r(U,I,P);for(let J=0;J<z.length;J++)Ot(z[J],I,P,B);r(E.anchor,I,P);return}if(Q===Ml){S(E,I,P);return}if(B!==2&&W&1&&G)if(B===0)G.beforeEnter(U),r(U,I,P),Lt(()=>G.enter(U),$);else{const{leave:J,delayLeave:se,afterLeave:le}=G,ye=()=>{E.ctx.isUnmounted?s(U):r(U,I,P)},ke=()=>{U._isLeaving&&U[zv](!0),J(U,()=>{ye(),le&&le()})};se?se(U,ye,ke):ke()}else r(U,I,P)},it=(E,I,P,B=!1,$=!1)=>{const{type:U,props:Q,ref:G,children:z,dynamicChildren:W,shapeFlag:ie,patchFlag:J,dirs:se,cacheIndex:le}=E;if(J===-2&&($=!1),G!=null&&(Yn(),Ai(G,null,P,E,!0),Jn()),le!=null&&(I.renderCache[le]=void 0),ie&256){I.ctx.deactivate(E);return}const ye=ie&1&&se,ke=!Ri(E);let Ae;if(ke&&(Ae=Q&&Q.onVnodeBeforeUnmount)&&dn(Ae,I,E),ie&6)Zt(E.component,P,B);else{if(ie&128){E.suspense.unmount(P,B);return}ye&&zr(E,null,I,"beforeUnmount"),ie&64?E.type.remove(E,I,P,re,B):W&&!W.hasOnce&&(U!==De||J>0&&J&64)?ft(W,I,P,!1,!0):(U===De&&J&384||!$&&ie&16)&&ft(z,I,P),B&&xn(E)}(ke&&(Ae=Q&&Q.onVnodeUnmounted)||ye)&&Lt(()=>{Ae&&dn(Ae,I,E),ye&&zr(E,null,I,"unmounted")},P)},xn=E=>{const{type:I,el:P,anchor:B,transition:$}=E;if(I===De){Xt(P,B);return}if(I===Ml){C(E);return}const U=()=>{s(P),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:Q,delayLeave:G}=$,z=()=>Q(P,U);G?G(E.el,U,z):z()}else U()},Xt=(E,I)=>{let P;for(;E!==I;)P=m(E),s(E),E=P;s(I)},Zt=(E,I,P)=>{const{bum:B,scope:$,job:U,subTree:Q,um:G,m:z,a:W}=E;of(z),of(W),B&&$o(B),$.stop(),U&&(U.flags|=8,it(Q,E,I,P)),G&&Lt(G,I),Lt(()=>{E.isUnmounted=!0},I)},ft=(E,I,P,B=!1,$=!1,U=0)=>{for(let Q=U;Q<E.length;Q++)it(E[Q],I,P,B,$)},F=E=>{if(E.shapeFlag&6)return F(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),P=I&&I[Hv];return P?m(P):I};let X=!1;const Y=(E,I,P)=>{E==null?I._vnode&&it(I._vnode,null,null,!0):N(I._vnode||null,E,I,null,null,null,P),I._vnode=E,X||(X=!0,Jh(),em(),X=!1)},re={p:N,um:it,m:Ot,r:xn,mt:He,mc:_,pc:Ie,pbc:A,n:F,o:t};return{render:Y,hydrate:void 0,createApp:pE(Y)}}function xl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function bE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vm(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=gr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&vm(o,l)),l.type===qa&&l.patchFlag!==-1&&(l.el=o.el),l.type===Dr&&!l.el&&(l.el=o.el)}}function AE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Em(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Em(e)}function of(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const RE=Symbol.for("v-scx"),SE=()=>on(RE);function ks(t,e,n){return wm(t,e,n)}function wm(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,l=Tt({},n),c=e&&r||!e&&i!=="post";let u;if(Hi){if(i==="sync"){const y=SE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=_n,y.resume=_n,y.pause=_n,y}}const f=wt;l.call=(y,O,N)=>Cn(y,f,O,N);let p=!1;i==="post"?l.scheduler=y=>{Lt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,O)=>{O?y():ru(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=Uv(t,e,l);return Hi&&(u?u.push(m):c&&m()),m}function CE(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?Tm(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=ao(this),l=wm(s,i.bind(r),n);return o(),l}function Tm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const PE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qt(e)}Modifiers`]||t[`${as(e)}Modifiers`];function kE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&PE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ye(f)?f.trim():f)),o.number&&(s=n.map(na)));let l,c=r[l=Pl(e)]||r[l=Pl(Qt(e))];!c&&i&&(c=r[l=Pl(as(e))]),c&&Cn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Cn(u,t,6,s)}}const DE=new WeakMap;function Im(t,e,n=!1){const r=n?DE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=u=>{const f=Im(u,e,!0);f&&(l=!0,Tt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ve(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):Tt(o,i),Ve(t)&&r.set(t,o),o)}function Ha(t,e){return!t||!xa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,as(e))||Ce(t,e))}function af(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:y,ctx:O,inheritAttrs:N}=t,k=aa(t);let L,M;try{if(n.shapeFlag&4){const C=s||r,q=C;L=gn(u.call(q,C,f,p,y,m,O)),M=l}else{const C=e;L=gn(C.length>1?C(p,{attrs:l,slots:o,emit:c}):C(p,null)),M=e.props?l:NE(l)}}catch(C){Ci.length=0,Ba(C,t,1),L=Nt(Dr)}let S=L;if(M&&N!==!1){const C=Object.keys(M),{shapeFlag:q}=S;C.length&&q&7&&(i&&C.some(zc)&&(M=OE(M,i)),S=xs(S,M,!1,!0))}return n.dirs&&(S=xs(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&su(S,n.transition),L=S,aa(k),L}const NE=t=>{let e;for(const n in t)(n==="class"||n==="style"||xa(n))&&((e||(e={}))[n]=t[n]);return e},OE=(t,e)=>{const n={};for(const r in t)(!zc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function VE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Ha(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?lf(r,o,u):!0:!!o;return!1}function lf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ha(n,i))return!0}return!1}function xE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const bm=t=>t.__isSuspense;function ME(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):jv(t)}const De=Symbol.for("v-fgt"),qa=Symbol.for("v-txt"),Dr=Symbol.for("v-cmt"),Ml=Symbol.for("v-stc"),Ci=[];let jt=null;function te(t=!1){Ci.push(jt=t?null:[])}function LE(){Ci.pop(),jt=Ci[Ci.length-1]||null}let $i=1;function ua(t,e=!1){$i+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function Am(t){return t.dynamicChildren=$i>0?jt||Ss:null,LE(),$i>0&&jt&&jt.push(t),t}function ue(t,e,n,r,s,i){return Am(V(t,e,n,r,s,i,!0))}function kt(t,e,n,r,s){return Am(Nt(t,e,n,r,s,!0))}function ha(t){return t?t.__v_isVNode===!0:!1}function di(t,e){return t.type===e.type&&t.key===e.key}const Rm=({key:t})=>t??null,qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||Ge(t)||ge(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===De?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rm(e),ref:e&&qo(e),scopeId:nm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return l?(au(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),$i>0&&!o&&jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&jt.push(c),c}const Nt=UE;function UE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iE)&&(t=Dr),ha(t)){const l=xs(t,e,!0);return n&&au(l,n),$i>0&&!i&&jt&&(l.shapeFlag&6?jt[jt.indexOf(t)]=l:jt.push(l)),l.patchFlag=-2,l}if(QE(t)&&(t=t.__vccOpts),e){e=FE(e);let{class:l,style:c}=e;l&&!Ye(l)&&(e.class=Qn(l)),Ve(c)&&(tu(c)&&!ce(c)&&(c=Tt({},c)),e.style=Pr(c))}const o=Ye(t)?1:bm(t)?128:qv(t)?64:Ve(t)?4:ge(t)?2:0;return V(t,e,n,r,s,o,i,!0)}function FE(t){return t?tu(t)||dm(t)?Tt({},t):t:null}function xs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?BE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Rm(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(qo(e)):[i,qo(e)]:qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xs(t.ssContent),ssFallback:t.ssFallback&&xs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&su(f,c.clone(f)),f}function vn(t=" ",e=0){return Nt(qa,null,t,e)}function Pn(t="",e=!1){return e?(te(),kt(Dr,null,t)):Nt(Dr,null,t)}function gn(t){return t==null||typeof t=="boolean"?Nt(Dr):ce(t)?Nt(De,null,t.slice()):ha(t)?gr(t):Nt(qa,null,String(t))}function gr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xs(t)}function au(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),au(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!dm(e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),r&64?(n=16,e=[vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function BE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Qn([e.class,r.class]));else if(s==="style")e.style=Pr([e.style,r.style]);else if(xa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dn(t,e,n,r=null){Cn(t,e,7,[n,r])}const jE=um();let $E=0;function HE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jE,i={uid:$E++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mm(r,s),emitsOptions:Im(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=kE.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const Sm=()=>wt||Bt;let fa,hc;{const t=Ua(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};fa=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),hc=e("__VUE_SSR_SETTERS__",n=>Hi=n)}const ao=t=>{const e=wt;return fa(t),t.scope.on(),()=>{t.scope.off(),fa(e)}},cf=()=>{wt&&wt.scope.off(),fa(null)};function Cm(t){return t.vnode.shapeFlag&4}let Hi=!1;function qE(t,e=!1,n=!1){e&&hc(e);const{props:r,children:s}=t.vnode,i=Cm(t);gE(t,r,i,e),EE(t,s,n||e);const o=i?zE(t,e):void 0;return e&&hc(!1),o}function zE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,aE);const{setup:r}=n;if(r){Yn();const s=t.setupContext=r.length>1?GE(t):null,i=ao(t),o=oo(r,t,0,[t.props,s]),l=Ap(o);if(Jn(),i(),(l||t.sp)&&!Ri(t)&&sm(t),l){if(o.then(cf,cf),e)return o.then(c=>{uf(t,c)}).catch(c=>{Ba(c,t,0)});t.asyncDep=o}else uf(t,o)}else Pm(t)}function uf(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Jp(e)),Pm(t)}function Pm(t,e,n){const r=t.type;t.render||(t.render=r.render||_n);{const s=ao(t);Yn();try{lE(t)}finally{Jn(),s()}}}const WE={get(t,e){return yt(t,"get",""),t[e]}};function GE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,WE),slots:t.slots,emit:t.emit,expose:e}}function za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jp(nu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Si)return Si[n](t)},has(e,n){return n in e||n in Si}})):t.proxy}function KE(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function QE(t){return ge(t)&&"__vccOpts"in t}const Le=(t,e)=>Mv(t,e,Hi);function km(t,e,n){try{ua(-1);const r=arguments.length;return r===2?Ve(e)&&!ce(e)?ha(e)?Nt(t,null,[e]):Nt(t,e):Nt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ha(n)&&(n=[n]),Nt(t,e,n))}finally{ua(1)}}const YE="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fc;const hf=typeof window<"u"&&window.trustedTypes;if(hf)try{fc=hf.createPolicy("vue",{createHTML:t=>t})}catch{}const Dm=fc?t=>fc.createHTML(t):t=>t,JE="http://www.w3.org/2000/svg",XE="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,ff=Un&&Un.createElement("template"),ZE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Un.createElementNS(JE,t):e==="mathml"?Un.createElementNS(XE,t):n?Un.createElement(t,{is:n}):Un.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ff.innerHTML=Dm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=ff.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ew=Symbol("_vtc");function tw(t,e,n){const r=t[ew];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const df=Symbol("_vod"),nw=Symbol("_vsh"),rw=Symbol(""),sw=/(?:^|;)\s*display\s*:/;function iw(t,e,n){const r=t.style,s=Ye(n);let i=!1;if(n&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&zo(r,l,"")}else for(const o in e)n[o]==null&&zo(r,o,"");for(const o in n)o==="display"&&(i=!0),zo(r,o,n[o])}else if(s){if(e!==n){const o=r[rw];o&&(n+=";"+o),r.cssText=n,i=sw.test(n)}}else e&&t.removeAttribute("style");df in t&&(t[df]=i?r.display:"",t[nw]&&(r.display="none"))}const pf=/\s*!important$/;function zo(t,e,n){if(ce(n))n.forEach(r=>zo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ow(t,e);pf.test(n)?t.setProperty(as(r),n.replace(pf,""),"important"):t[r]=n}}const mf=["Webkit","Moz","ms"],Ll={};function ow(t,e){const n=Ll[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return Ll[e]=r;r=La(r);for(let s=0;s<mf.length;s++){const i=mf[s]+r;if(i in t)return Ll[e]=i}return e}const gf="http://www.w3.org/1999/xlink";function _f(t,e,n,r,s,i=av(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(gf,e.slice(6,e.length)):t.setAttributeNS(gf,e,n):n==null||i&&!Pp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Sn(n)?String(n):n)}function yf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Dm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Pp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function jn(t,e,n,r){t.addEventListener(e,n,r)}function aw(t,e,n,r){t.removeEventListener(e,n,r)}const vf=Symbol("_vei");function lw(t,e,n,r,s=null){const i=t[vf]||(t[vf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=cw(e);if(r){const u=i[e]=fw(r,s);jn(t,l,u,c)}else o&&(aw(t,l,o,c),i[e]=void 0)}}const Ef=/(?:Once|Passive|Capture)$/;function cw(t){let e;if(Ef.test(t)){e={};let r;for(;r=t.match(Ef);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):as(t.slice(2)),e]}let Ul=0;const uw=Promise.resolve(),hw=()=>Ul||(uw.then(()=>Ul=0),Ul=Date.now());function fw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Cn(dw(r,n.value),e,5,[r])};return n.value=t,n.attached=hw(),n}function dw(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?tw(t,r,o):e==="style"?iw(t,n,r):xa(e)?zc(e)||lw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mw(t,e,r,o))?(yf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_f(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?yf(t,Qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_f(t,e,r,o))};function mw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&wf(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wf(e)&&Ye(n)?!1:e in t}const Nr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>$o(e,n):e};function gw(t){t.target.composing=!0}function Tf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gt=Symbol("_assign"),Kt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Gt]=Nr(s);const i=r||s.props&&s.props.type==="number";jn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=na(l)),t[Gt](l)}),n&&jn(t,"change",()=>{t.value=t.value.trim()}),e||(jn(t,"compositionstart",gw),jn(t,"compositionend",Tf),jn(t,"change",Tf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Gt]=Nr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?na(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Nm={deep:!0,created(t,e,n){t[Gt]=Nr(n),jn(t,"change",()=>{const r=t._modelValue,s=Ms(t),i=t.checked,o=t[Gt];if(ce(r)){const l=Kc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(zs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Om(t,i))})},mounted:If,beforeUpdate(t,e,n){t[Gt]=Nr(n),If(t,e,n)}};function If(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ce(e))s=Kc(e,r.props.value)>-1;else if(zs(e))s=e.has(r.props.value);else{if(e===n)return;s=es(e,Om(t,!0))}t.checked!==s&&(t.checked=s)}const _w={created(t,{value:e},n){t.checked=es(e,n.props.value),t[Gt]=Nr(n),jn(t,"change",()=>{t[Gt](Ms(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Gt]=Nr(r),e!==n&&(t.checked=es(e,r.props.value))}},qi={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=zs(e);jn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?na(Ms(o)):Ms(o));t[Gt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ja(()=>{t._assigning=!1})}),t[Gt]=Nr(r)},mounted(t,{value:e}){bf(t,e)},beforeUpdate(t,e,n){t[Gt]=Nr(n)},updated(t,{value:e}){t._assigning||bf(t,e)}};function bf(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!zs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ms(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Kc(e,l)>-1}else o.selected=e.has(l);else if(es(Ms(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ms(t){return"_value"in t?t._value:t.value}function Om(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const yw={created(t,e,n){Vo(t,e,n,null,"created")},mounted(t,e,n){Vo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Vo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Vo(t,e,n,r,"updated")}};function vw(t,e){switch(t){case"SELECT":return qi;case"TEXTAREA":return Kt;default:switch(e){case"checkbox":return Nm;case"radio":return _w;default:return Kt}}}function Vo(t,e,n,r,s){const o=vw(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const Ew=["ctrl","shift","alt","meta"],ww={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ew.some(n=>t[`${n}Key`]&&!e.includes(n))},lu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=ww[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},Tw=Tt({patchProp:pw},ZE);let Af;function Iw(){return Af||(Af=TE(Tw))}const bw=((...t)=>{const e=Iw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Rw(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Aw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Aw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Rw(t){return Ye(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Vm;const Wa=t=>Vm=t,xm=Symbol();function dc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Pi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Pi||(Pi={}));function Sw(){const t=Op(!0),e=t.run(()=>oe({}));let n=[],r=[];const s=nu({install(i){Wa(s),s._a=i,i.provide(xm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Mm=()=>{};function Rf(t,e,n,r=Mm){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&Vp()&&cv(s),s}function Es(t,...e){t.forEach(n=>{n(...e)})}const Cw=t=>t(),Sf=Symbol(),Fl=Symbol();function pc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];dc(s)&&dc(r)&&t.hasOwnProperty(n)&&!Ge(r)&&!br(r)?t[n]=pc(s,r):t[n]=r}return t}const Pw=Symbol();function kw(t){return!dc(t)||!Object.prototype.hasOwnProperty.call(t,Pw)}const{assign:pr}=Object;function Dw(t){return!!(Ge(t)&&t.effect)}function Nw(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=Nv(n.state.value[t]);return pr(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=nu(Le(()=>{Wa(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return c=Lm(t,u,e,n,r,!0),c}function Lm(t,e,n={},r,s,i){let o;const l=pr({actions:{}},n),c={deep:!0};let u,f,p=new Set,m=new Set,y;const O=r.state.value[t];!i&&!O&&(r.state.value[t]={}),oe({});let N;function k(_){let v;u=f=!1,typeof _=="function"?(_(r.state.value[t]),v={type:Pi.patchFunction,storeId:t,events:y}):(pc(r.state.value[t],_),v={type:Pi.patchObject,payload:_,storeId:t,events:y});const A=N=Symbol();ja().then(()=>{N===A&&(u=!0)}),f=!0,Es(p,v,r.state.value[t])}const L=i?function(){const{state:v}=n,A=v?v():{};this.$patch(b=>{pr(b,A)})}:Mm;function M(){o.stop(),p.clear(),m.clear(),r._s.delete(t)}const S=(_,v="")=>{if(Sf in _)return _[Fl]=v,_;const A=function(){Wa(r);const b=Array.from(arguments),R=new Set,w=new Set;function He(me){R.add(me)}function ht(me){w.add(me)}Es(m,{args:b,name:A[Fl],store:q,after:He,onError:ht});let xe;try{xe=_.apply(this&&this.$id===t?this:q,b)}catch(me){throw Es(w,me),me}return xe instanceof Promise?xe.then(me=>(Es(R,me),me)).catch(me=>(Es(w,me),Promise.reject(me))):(Es(R,xe),xe)};return A[Sf]=!0,A[Fl]=v,A},C={_p:r,$id:t,$onAction:Rf.bind(null,m),$patch:k,$reset:L,$subscribe(_,v={}){const A=Rf(p,_,v.detached,()=>b()),b=o.run(()=>ks(()=>r.state.value[t],R=>{(v.flush==="sync"?f:u)&&_({storeId:t,type:Pi.direct,events:y},R)},pr({},c,v)));return A},$dispose:M},q=io(C);r._s.set(t,q);const T=(r._a&&r._a.runWithContext||Cw)(()=>r._e.run(()=>(o=Op()).run(()=>e({action:S}))));for(const _ in T){const v=T[_];if(Ge(v)&&!Dw(v)||br(v))i||(O&&kw(v)&&(Ge(v)?v.value=O[_]:pc(v,O[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const A=S(v,_);T[_]=A,l.actions[_]=v}}return pr(q,T),pr(Re(q),T),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:_=>{k(v=>{pr(v,_)})}}),r._p.forEach(_=>{pr(q,o.run(()=>_({store:q,app:r._a,pinia:r,options:l})))}),O&&i&&n.hydrate&&n.hydrate(q.$state,O),u=!0,f=!0,q}/*! #__NO_SIDE_EFFECTS__ */function Ow(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=mE();return o=o||(c?on(xm,null):null),o&&Wa(o),o=Vm,o._s.has(t)||(s?Lm(t,e,r,o):Nw(t,r,o)),o._s.get(t)}return i.$id=t,i}const Vw={class:"app_holder"},xw={__name:"App",setup(t){return(e,n)=>{const r=sE("router-view");return te(),ue("div",Vw,[Nt(r)])}}};/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ts=typeof document<"u";function Um(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Um(t.default)}const Se=Object.assign;function Bl(t,e){const n={};for(const r in e){const s=e[r];n[r]=ln(s)?s.map(t):t(s)}return n}const ki=()=>{},ln=Array.isArray;function Cf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Fm=/#/g,Lw=/&/g,Uw=/\//g,Fw=/=/g,Bw=/\?/g,Bm=/\+/g,jw=/%5B/g,$w=/%5D/g,jm=/%5E/g,Hw=/%60/g,$m=/%7B/g,qw=/%7C/g,Hm=/%7D/g,zw=/%20/g;function cu(t){return t==null?"":encodeURI(""+t).replace(qw,"|").replace(jw,"[").replace($w,"]")}function Ww(t){return cu(t).replace($m,"{").replace(Hm,"}").replace(jm,"^")}function mc(t){return cu(t).replace(Bm,"%2B").replace(zw,"+").replace(Fm,"%23").replace(Lw,"%26").replace(Hw,"`").replace($m,"{").replace(Hm,"}").replace(jm,"^")}function Gw(t){return mc(t).replace(Fw,"%3D")}function Kw(t){return cu(t).replace(Fm,"%23").replace(Bw,"%3F")}function Qw(t){return Kw(t).replace(Uw,"%2F")}function zi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Yw=/\/$/,Jw=t=>t.replace(Yw,"");function jl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=tT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:zi(o)}}function Xw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ls(e.matched[r],n.matched[s])&&qm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!eT(t[n],e[n]))return!1;return!0}function eT(t,e){return ln(t)?kf(t,e):ln(e)?kf(e,t):t===e}function kf(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function tT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const fr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let gc=(function(t){return t.pop="pop",t.push="push",t})({}),$l=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function nT(t){if(!t)if(Ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Jw(t)}const rT=/^[^#]+#/;function sT(t,e){return t.replace(rT,"#")+e}function iT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ga=()=>({left:window.scrollX,top:window.scrollY});function oT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=iT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Df(t,e){return(history.state?history.state.position-e:-1)+t}const _c=new Map;function aT(t,e){_c.set(t,e)}function lT(t){const e=_c.get(t);return _c.delete(t),e}function cT(t){return typeof t=="string"||t&&typeof t=="object"}function zm(t){return typeof t=="string"||typeof t=="symbol"}let ze=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Wm=Symbol("");ze.MATCHER_NOT_FOUND+"",ze.NAVIGATION_GUARD_REDIRECT+"",ze.NAVIGATION_ABORTED+"",ze.NAVIGATION_CANCELLED+"",ze.NAVIGATION_DUPLICATED+"";function Us(t,e){return Se(new Error,{type:t,[Wm]:!0},e)}function Ln(t,e){return t instanceof Error&&Wm in t&&(e==null||!!(t.type&e))}const uT=["params","query","hash"];function hT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of uT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function fT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Bm," "),i=s.indexOf("="),o=zi(i<0?s:s.slice(0,i)),l=i<0?null:zi(s.slice(i+1));if(o in e){let c=e[o];ln(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Nf(t){let e="";for(let n in t){const r=t[n];if(n=Gw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(s=>s&&mc(s)):[r&&mc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function dT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pT=Symbol(""),Of=Symbol(""),Ka=Symbol(""),Gm=Symbol(""),yc=Symbol("");function pi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _r(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Us(ze.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):cT(m)?c(Us(ze.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Hl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Um(c)){const u=(c.__vccOpts||c)[e];u&&i.push(_r(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Mw(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&_r(m,n,r,o,l,s)()}))}}return i}function mT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Ls(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Ls(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let gT=()=>location.protocol+"//"+location.host;function Km(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Pf(l,"")}return Pf(n,t)+r+s}function _T(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=Km(t,location),O=n.value,N=e.value;let k=0;if(m){if(n.value=y,e.value=m,o&&o===O){o=null;return}k=N?m.position-N.position:0}else r(y);s.forEach(L=>{L(n.value,O,{delta:k,type:gc.pop,direction:k?k>0?$l.forward:$l.back:$l.unknown})})};function c(){o=n.value}function u(m){s.push(m);const y=()=>{const O=s.indexOf(m);O>-1&&s.splice(O,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Se({},m.state,{scroll:Ga()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function Vf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ga():null}}function yT(t){const{history:e,location:n}=window,r={value:Km(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:gT()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(c,u){i(c,Se({},e.state,Vf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const f=Se({},s.value,e.state,{forward:c,scroll:Ga()});i(f.current,f,!0),i(c,Se({},Vf(r.value,c,null),{position:f.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function vT(t){t=nT(t);const e=yT(t),n=_T(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:sT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Qr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Xe=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Xe||{});const ET={type:Qr.Static,value:""},wT=/[a-zA-Z0-9_]/;function TT(t){if(!t)return[[]];if(t==="/")return[[ET]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=Xe.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===Xe.Static?i.push({type:Qr.Static,value:u}):n===Xe.Param||n===Xe.ParamRegExp||n===Xe.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Qr.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Xe.ParamRegExp){r=n,n=Xe.EscapeNext;continue}switch(n){case Xe.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Xe.Param):m();break;case Xe.EscapeNext:m(),n=r;break;case Xe.Param:c==="("?n=Xe.ParamRegExp:wT.test(c)?m():(p(),n=Xe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Xe.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=Xe.ParamRegExpEnd:f+=c;break;case Xe.ParamRegExpEnd:p(),n=Xe.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===Xe.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const xf="[^/]+?",IT={sensitive:!1,strict:!1,start:!0,end:!0};var Rt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Rt||{});const bT=/[.+*?^${}()[\]/\\]/g;function AT(t,e){const n=Se({},IT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Rt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=Rt.Segment+(n.sensitive?Rt.BonusCaseSensitive:0);if(m.type===Qr.Static)p||(s+="/"),s+=m.value.replace(bT,"\\$&"),y+=Rt.Static;else if(m.type===Qr.Param){const{value:O,repeatable:N,optional:k,regexp:L}=m;i.push({name:O,repeatable:N,optional:k});const M=L||xf;if(M!==xf){y+=Rt.BonusCustomRegExp;try{`${M}`}catch(C){throw new Error(`Invalid custom RegExp for param "${O}" (${M}): `+C.message)}}let S=N?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(S=k&&u.length<2?`(?:/${S})`:"/"+S),k&&(S+="?"),s+=S,y+=Rt.Dynamic,k&&(y+=Rt.BonusOptional),N&&(y+=Rt.BonusRepeatable),M===".*"&&(y+=Rt.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Rt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",O=i[m-1];p[O.name]=y&&O.repeatable?y.split("/"):y}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===Qr.Static)f+=y.value;else if(y.type===Qr.Param){const{value:O,repeatable:N,optional:k}=y,L=O in u?u[O]:"";if(ln(L)&&!N)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const M=ln(L)?L.join("/"):L;if(!M)if(k)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);f+=M}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function RT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Rt.Static+Rt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Rt.Static+Rt.Segment?1:-1:0}function Qm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=RT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Mf(r))return 1;if(Mf(s))return-1}return s.length-r.length}function Mf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ST={strict:!1,end:!0,sensitive:!1};function CT(t,e,n){const r=AT(TT(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function PT(t,e){const n=[],r=new Map;e=Cf(ST,e);function s(p){return r.get(p)}function i(p,m,y){const O=!y,N=Uf(p);N.aliasOf=y&&y.record;const k=Cf(e,p),L=[N];if("alias"in p){const C=typeof p.alias=="string"?[p.alias]:p.alias;for(const q of C)L.push(Uf(Se({},N,{components:y?y.record.components:N.components,path:q,aliasOf:y?y.record:N})))}let M,S;for(const C of L){const{path:q}=C;if(m&&q[0]!=="/"){const ee=m.record.path,T=ee[ee.length-1]==="/"?"":"/";C.path=m.record.path+(q&&T+q)}if(M=CT(C,m,k),y?y.alias.push(M):(S=S||M,S!==M&&S.alias.push(M),O&&p.name&&!Ff(M)&&o(p.name)),Ym(M)&&c(M),N.children){const ee=N.children;for(let T=0;T<ee.length;T++)i(ee[T],M,y&&y.children[T])}y=y||M}return S?()=>{o(S)}:ki}function o(p){if(zm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=NT(p,n);n.splice(m,0,p),p.record.name&&!Ff(p)&&r.set(p.record.name,p)}function u(p,m){let y,O={},N,k;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Us(ze.MATCHER_NOT_FOUND,{location:p});k=y.record.name,O=Se(Lf(m.params,y.keys.filter(S=>!S.optional).concat(y.parent?y.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),p.params&&Lf(p.params,y.keys.map(S=>S.name))),N=y.stringify(O)}else if(p.path!=null)N=p.path,y=n.find(S=>S.re.test(N)),y&&(O=y.parse(N),k=y.record.name);else{if(y=m.name?r.get(m.name):n.find(S=>S.re.test(m.path)),!y)throw Us(ze.MATCHER_NOT_FOUND,{location:p,currentLocation:m});k=y.record.name,O=Se({},m.params,p.params),N=y.stringify(O)}const L=[];let M=y;for(;M;)L.unshift(M.record),M=M.parent;return{name:k,path:N,params:O,matched:L,meta:DT(L)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Lf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Uf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:kT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function kT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function DT(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function NT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Qm(t,e[i])<0?r=i:n=i+1}const s=OT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function OT(t){let e=t;for(;e=e.parent;)if(Ym(e)&&Qm(t,e)===0)return e}function Ym({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Bf(t){const e=on(Ka),n=on(Gm),r=Le(()=>{const c=yn(t.to);return e.resolve(c)}),s=Le(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Ls.bind(null,f));if(m>-1)return m;const y=jf(c[u-2]);return u>1&&jf(f)===y&&p[p.length-1].path!==y?p.findIndex(Ls.bind(null,c[u-2])):m}),i=Le(()=>s.value>-1&&UT(n.params,r.value.params)),o=Le(()=>s.value>-1&&s.value===n.matched.length-1&&qm(n.params,r.value.params));function l(c={}){if(LT(c)){const u=e[yn(t.replace)?"replace":"push"](yn(t.to)).catch(ki);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Le(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function VT(t){return t.length===1?t[0]:t}const xT=rm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Bf,setup(t,{slots:e}){const n=io(Bf(t)),{options:r}=on(Ka),s=Le(()=>({[$f(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$f(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&VT(e.default(n));return t.custom?i:km("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),MT=xT;function LT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $f=(t,e,n)=>t??e??n,FT=rm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=on(yc),s=Le(()=>t.route||r.value),i=on(Of,0),o=Le(()=>{let u=yn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Le(()=>s.value.matched[o.value]);Ho(Of,Le(()=>o.value+1)),Ho(pT,l),Ho(yc,s);const c=oe();return ks(()=>[c.value,l.value,t.name],([u,f,p],[m,y,O])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!Ls(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return Hf(n.default,{Component:m,route:u});const y=p.props[f],O=y?y===!0?u.params:typeof y=="function"?y(u):y:null,k=km(m,Se({},O,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Hf(n.default,{Component:k,route:u})||k}}});function Hf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const BT=FT;function jT(t){const e=PT(t.routes,t),n=t.parseQuery||fT,r=t.stringifyQuery||Nf,s=t.history,i=pi(),o=pi(),l=pi(),c=Pv(fr);let u=fr;Ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Bl.bind(null,F=>""+F),p=Bl.bind(null,Qw),m=Bl.bind(null,zi);function y(F,X){let Y,re;return zm(F)?(Y=e.getRecordMatcher(F),re=X):re=F,e.addRoute(re,Y)}function O(F){const X=e.getRecordMatcher(F);X&&e.removeRoute(X)}function N(){return e.getRoutes().map(F=>F.record)}function k(F){return!!e.getRecordMatcher(F)}function L(F,X){if(X=Se({},X||c.value),typeof F=="string"){const P=jl(n,F,X.path),B=e.resolve({path:P.path},X),$=s.createHref(P.fullPath);return Se(P,B,{params:m(B.params),hash:zi(P.hash),redirectedFrom:void 0,href:$})}let Y;if(F.path!=null)Y=Se({},F,{path:jl(n,F.path,X.path).path});else{const P=Se({},F.params);for(const B in P)P[B]==null&&delete P[B];Y=Se({},F,{params:p(P)}),X.params=p(X.params)}const re=e.resolve(Y,X),ve=F.hash||"";re.params=f(m(re.params));const E=Xw(r,Se({},F,{hash:Ww(ve),path:re.path})),I=s.createHref(E);return Se({fullPath:E,hash:ve,query:r===Nf?dT(F.query):F.query||{}},re,{redirectedFrom:void 0,href:I})}function M(F){return typeof F=="string"?jl(n,F,c.value.path):Se({},F)}function S(F,X){if(u!==F)return Us(ze.NAVIGATION_CANCELLED,{from:X,to:F})}function C(F){return T(F)}function q(F){return C(Se(M(F),{replace:!0}))}function ee(F,X){const Y=F.matched[F.matched.length-1];if(Y&&Y.redirect){const{redirect:re}=Y;let ve=typeof re=="function"?re(F,X):re;return typeof ve=="string"&&(ve=ve.includes("?")||ve.includes("#")?ve=M(ve):{path:ve},ve.params={}),Se({query:F.query,hash:F.hash,params:ve.path!=null?{}:F.params},ve)}}function T(F,X){const Y=u=L(F),re=c.value,ve=F.state,E=F.force,I=F.replace===!0,P=ee(Y,re);if(P)return T(Se(M(P),{state:typeof P=="object"?Se({},ve,P.state):ve,force:E,replace:I}),X||Y);const B=Y;B.redirectedFrom=X;let $;return!E&&Zw(r,re,Y)&&($=Us(ze.NAVIGATION_DUPLICATED,{to:B,from:re}),Ot(re,re,!0,!1)),($?Promise.resolve($):A(B,re)).catch(U=>Ln(U)?Ln(U,ze.NAVIGATION_GUARD_REDIRECT)?U:un(U):Ie(U,B,re)).then(U=>{if(U){if(Ln(U,ze.NAVIGATION_GUARD_REDIRECT))return T(Se({replace:I},M(U.to),{state:typeof U.to=="object"?Se({},ve,U.to.state):ve,force:E}),X||B)}else U=R(B,re,!0,I,ve);return b(B,re,U),U})}function _(F,X){const Y=S(F,X);return Y?Promise.reject(Y):Promise.resolve()}function v(F){const X=Xt.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(F):F()}function A(F,X){let Y;const[re,ve,E]=mT(F,X);Y=Hl(re.reverse(),"beforeRouteLeave",F,X);for(const P of re)P.leaveGuards.forEach(B=>{Y.push(_r(B,F,X))});const I=_.bind(null,F,X);return Y.push(I),ft(Y).then(()=>{Y=[];for(const P of i.list())Y.push(_r(P,F,X));return Y.push(I),ft(Y)}).then(()=>{Y=Hl(ve,"beforeRouteUpdate",F,X);for(const P of ve)P.updateGuards.forEach(B=>{Y.push(_r(B,F,X))});return Y.push(I),ft(Y)}).then(()=>{Y=[];for(const P of E)if(P.beforeEnter)if(ln(P.beforeEnter))for(const B of P.beforeEnter)Y.push(_r(B,F,X));else Y.push(_r(P.beforeEnter,F,X));return Y.push(I),ft(Y)}).then(()=>(F.matched.forEach(P=>P.enterCallbacks={}),Y=Hl(E,"beforeRouteEnter",F,X,v),Y.push(I),ft(Y))).then(()=>{Y=[];for(const P of o.list())Y.push(_r(P,F,X));return Y.push(I),ft(Y)}).catch(P=>Ln(P,ze.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function b(F,X,Y){l.list().forEach(re=>v(()=>re(F,X,Y)))}function R(F,X,Y,re,ve){const E=S(F,X);if(E)return E;const I=X===fr,P=Ts?history.state:{};Y&&(re||I?s.replace(F.fullPath,Se({scroll:I&&P&&P.scroll},ve)):s.push(F.fullPath,ve)),c.value=F,Ot(F,X,Y,I),un()}let w;function He(){w||(w=s.listen((F,X,Y)=>{if(!Zt.listening)return;const re=L(F),ve=ee(re,Zt.currentRoute.value);if(ve){T(Se(ve,{replace:!0,force:!0}),re).catch(ki);return}u=re;const E=c.value;Ts&&aT(Df(E.fullPath,Y.delta),Ga()),A(re,E).catch(I=>Ln(I,ze.NAVIGATION_ABORTED|ze.NAVIGATION_CANCELLED)?I:Ln(I,ze.NAVIGATION_GUARD_REDIRECT)?(T(Se(M(I.to),{force:!0}),re).then(P=>{Ln(P,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&!Y.delta&&Y.type===gc.pop&&s.go(-1,!1)}).catch(ki),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Ie(I,re,E))).then(I=>{I=I||R(re,E,!1),I&&(Y.delta&&!Ln(I,ze.NAVIGATION_CANCELLED)?s.go(-Y.delta,!1):Y.type===gc.pop&&Ln(I,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(re,E,I)}).catch(ki)}))}let ht=pi(),xe=pi(),me;function Ie(F,X,Y){un(F);const re=xe.list();return re.length?re.forEach(ve=>ve(F,X,Y)):console.error(F),Promise.reject(F)}function Ct(){return me&&c.value!==fr?Promise.resolve():new Promise((F,X)=>{ht.add([F,X])})}function un(F){return me||(me=!F,He(),ht.list().forEach(([X,Y])=>F?Y(F):X()),ht.reset()),F}function Ot(F,X,Y,re){const{scrollBehavior:ve}=t;if(!Ts||!ve)return Promise.resolve();const E=!Y&&lT(Df(F.fullPath,0))||(re||!Y)&&history.state&&history.state.scroll||null;return ja().then(()=>ve(F,X,E)).then(I=>I&&oT(I)).catch(I=>Ie(I,F,X))}const it=F=>s.go(F);let xn;const Xt=new Set,Zt={currentRoute:c,listening:!0,addRoute:y,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:N,resolve:L,options:t,push:C,replace:q,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:xe.add,isReady:Ct,install(F){F.component("RouterLink",MT),F.component("RouterView",BT),F.config.globalProperties.$router=Zt,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>yn(c)}),Ts&&!xn&&c.value===fr&&(xn=!0,C(s.location).catch(re=>{}));const X={};for(const re in fr)Object.defineProperty(X,re,{get:()=>c.value[re],enumerable:!0});F.provide(Ka,Zt),F.provide(Gm,Qp(X)),F.provide(yc,c);const Y=F.unmount;Xt.add(F),F.unmount=function(){Xt.delete(F),Xt.size<1&&(u=fr,w&&w(),w=null,c.value=fr,xn=!1,me=!1),Y()}}};function ft(F){return F.reduce((X,Y)=>X.then(()=>v(Y)),Promise.resolve())}return Zt}function Qa(){return on(Ka)}const $T=()=>{};var qf={};/**
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
 */const Jm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},HT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new qT;const m=i<<2|l>>4;if(r.push(m),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const O=u<<6&192|p;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zT=function(t){const e=Jm(t);return Xm.encodeByteArray(e,!0)},da=function(t){return zT(t).replace(/\./g,"")},Zm=function(t){try{return Xm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function WT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GT=()=>WT().__FIREBASE_DEFAULTS__,KT=()=>{if(typeof process>"u"||typeof qf>"u")return;const t=qf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zm(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return $T()||GT()||KT()||QT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eg=t=>Ya()?.emulatorHosts?.[t],tg=t=>{const e=eg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ng=()=>Ya()?.config,rg=t=>Ya()?.[`_${t}`];/**
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
 */class YT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function uu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function sg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[da(JSON.stringify(n)),da(JSON.stringify(o)),""].join(".")}const Di={};function JT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Di))Di[e]?t.emulator.push(e):t.prod.push(e);return t}function XT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let zf=!1;function hu(t,e){if(typeof window>"u"||typeof document>"u"||!cs(window.location.host)||Di[t]===e||Di[t]||zf)return;Di[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=JT().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{zf=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=XT(r),y=n("text"),O=document.getElementById(y)||document.createElement("span"),N=n("learnmore"),k=document.getElementById(N)||document.createElement("a"),L=n("preprendIcon"),M=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const S=m.element;l(S),f(k,N);const C=u();c(M,L),S.append(M,O,k,C),document.body.appendChild(S)}i?(O.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function eI(){const t=Ya()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sI(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iI(){return!eI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oI(){try{return typeof indexedDB=="object"}catch{return!1}}function aI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const lI="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lI,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new On(s,l,r)}}function cI(t,e){return t.replace(uI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uI=/\{\$([^}]+)}/g;function hI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ts(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wf(i)&&Wf(o)){if(!ts(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
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
 */function co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function _i(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fI(t,e){const n=new dI(t,e);return n.subscribe.bind(n)}class dI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ql),s.error===void 0&&(s.error=ql),s.complete===void 0&&(s.complete=ql);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ql(){}/**
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
 */function Ht(t){return t&&t._delegate?t._delegate:t}class Or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class mI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_I(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gI(t){return t===Kr?void 0:t}function _I(t){return t.instantiationMode==="EAGER"}/**
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
 */class yI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const vI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},EI=Ee.INFO,wI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},TI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=wI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fu{constructor(e){this.name=e,this._logLevel=EI,this._logHandler=TI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const II=(t,e)=>e.some(n=>t instanceof n);let Gf,Kf;function bI(){return Gf||(Gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AI(){return Kf||(Kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ig=new WeakMap,vc=new WeakMap,og=new WeakMap,zl=new WeakMap,du=new WeakMap;function RI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ar(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ig.set(n,t)}).catch(()=>{}),du.set(e,t),e}function SI(t){if(vc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vc.set(t,e)}let Ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||og.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CI(t){Ec=t(Ec)}function PI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wl(this),e,...n);return og.set(r,e.sort?e.sort():[e]),Ar(r)}:AI().includes(t)?function(...e){return t.apply(Wl(this),e),Ar(ig.get(this))}:function(...e){return Ar(t.apply(Wl(this),e))}}function kI(t){return typeof t=="function"?PI(t):(t instanceof IDBTransaction&&SI(t),II(t,bI())?new Proxy(t,Ec):t)}function Ar(t){if(t instanceof IDBRequest)return RI(t);if(zl.has(t))return zl.get(t);const e=kI(t);return e!==t&&(zl.set(t,e),du.set(e,t)),e}const Wl=t=>du.get(t);function DI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ar(o.result),c.oldVersion,c.newVersion,Ar(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const NI=["get","getKey","getAll","getAllKeys","count"],OI=["put","add","delete","clear"],Gl=new Map;function Qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gl.get(e))return Gl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=OI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||NI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Gl.set(e,i),i}CI(t=>({...t,get:(e,n,r)=>Qf(e,n)||t.get(e,n,r),has:(e,n)=>!!Qf(e,n)||t.has(e,n)}));/**
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
 */class VI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xI(t){return t.getComponent()?.type==="VERSION"}const wc="@firebase/app",Yf="0.14.4";/**
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
 */const Xn=new fu("@firebase/app"),MI="@firebase/app-compat",LI="@firebase/analytics-compat",UI="@firebase/analytics",FI="@firebase/app-check-compat",BI="@firebase/app-check",jI="@firebase/auth",$I="@firebase/auth-compat",HI="@firebase/database",qI="@firebase/data-connect",zI="@firebase/database-compat",WI="@firebase/functions",GI="@firebase/functions-compat",KI="@firebase/installations",QI="@firebase/installations-compat",YI="@firebase/messaging",JI="@firebase/messaging-compat",XI="@firebase/performance",ZI="@firebase/performance-compat",eb="@firebase/remote-config",tb="@firebase/remote-config-compat",nb="@firebase/storage",rb="@firebase/storage-compat",sb="@firebase/firestore",ib="@firebase/ai",ob="@firebase/firestore-compat",ab="firebase",lb="12.4.0";/**
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
 */const Tc="[DEFAULT]",cb={[wc]:"fire-core",[MI]:"fire-core-compat",[UI]:"fire-analytics",[LI]:"fire-analytics-compat",[BI]:"fire-app-check",[FI]:"fire-app-check-compat",[jI]:"fire-auth",[$I]:"fire-auth-compat",[HI]:"fire-rtdb",[qI]:"fire-data-connect",[zI]:"fire-rtdb-compat",[WI]:"fire-fn",[GI]:"fire-fn-compat",[KI]:"fire-iid",[QI]:"fire-iid-compat",[YI]:"fire-fcm",[JI]:"fire-fcm-compat",[XI]:"fire-perf",[ZI]:"fire-perf-compat",[eb]:"fire-rc",[tb]:"fire-rc-compat",[nb]:"fire-gcs",[rb]:"fire-gcs-compat",[sb]:"fire-fst",[ob]:"fire-fst-compat",[ib]:"fire-vertex","fire-js":"fire-js",[ab]:"fire-js-all"};/**
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
 */const pa=new Map,ub=new Map,Ic=new Map;function Jf(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Ic.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Ic.set(e,t);for(const n of pa.values())Jf(n,t);for(const n of ub.values())Jf(n,t);return!0}function Ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const hb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new lo("app","Firebase",hb);/**
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
 */class fb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const us=lb;function ag(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Tc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Rr.create("bad-app-name",{appName:String(s)});if(n||(n=ng()),!n)throw Rr.create("no-options");const i=pa.get(s);if(i){if(ts(n,i.options)&&ts(r,i.config))return i;throw Rr.create("duplicate-app",{appName:s})}const o=new yI(s);for(const c of Ic.values())o.addComponent(c);const l=new fb(n,r,o);return pa.set(s,l),l}function pu(t=Tc){const e=pa.get(t);if(!e&&t===Tc&&ng())return ag();if(!e)throw Rr.create("no-app",{appName:t});return e}function En(t,e,n){let r=cb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(o.join(" "));return}ns(new Or(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const db="firebase-heartbeat-database",pb=1,Wi="firebase-heartbeat-store";let Kl=null;function lg(){return Kl||(Kl=DI(db,pb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Kl}async function mb(t){try{const n=(await lg()).transaction(Wi),r=await n.objectStore(Wi).get(cg(t));return await n.done,r}catch(e){if(e instanceof On)Xn.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e?.message});Xn.warn(n.message)}}}async function Xf(t,e){try{const r=(await lg()).transaction(Wi,"readwrite");await r.objectStore(Wi).put(e,cg(t)),await r.done}catch(n){if(n instanceof On)Xn.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n?.message});Xn.warn(r.message)}}}function cg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gb=1024,_b=30;class yb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Eb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>_b){const s=wb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Xn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zf(),{heartbeatsToSend:n,unsentEntries:r}=vb(this._heartbeatsCache.heartbeats),s=da(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Xn.warn(e),""}}}function Zf(){return new Date().toISOString().substring(0,10)}function vb(t,e=gb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ed(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ed(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Eb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oI()?aI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ed(t){return da(JSON.stringify({version:2,heartbeats:t})).length}function wb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Tb(t){ns(new Or("platform-logger",e=>new VI(e),"PRIVATE")),ns(new Or("heartbeat",e=>new yb(e),"PRIVATE")),En(wc,Yf,t),En(wc,Yf,"esm2020"),En("fire-js","")}Tb("");var td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sr,ug;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function v(){}v.prototype=_.prototype,T.F=_.prototype,T.prototype=new v,T.prototype.constructor=T,T.D=function(A,b,R){for(var w=Array(arguments.length-2),He=2;He<arguments.length;He++)w[He-2]=arguments[He];return _.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,v){v||(v=0);const A=Array(16);if(typeof _=="string")for(var b=0;b<16;++b)A[b]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(b=0;b<16;++b)A[b]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=T.g[0],v=T.g[1],b=T.g[2];let R=T.g[3],w;w=_+(R^v&(b^R))+A[0]+3614090360&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(b^_&(v^b))+A[1]+3905402710&4294967295,R=_+(w<<12&4294967295|w>>>20),w=b+(v^R&(_^v))+A[2]+606105819&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(_^b&(R^_))+A[3]+3250441966&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(R^v&(b^R))+A[4]+4118548399&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(b^_&(v^b))+A[5]+1200080426&4294967295,R=_+(w<<12&4294967295|w>>>20),w=b+(v^R&(_^v))+A[6]+2821735955&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(_^b&(R^_))+A[7]+4249261313&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(R^v&(b^R))+A[8]+1770035416&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(b^_&(v^b))+A[9]+2336552879&4294967295,R=_+(w<<12&4294967295|w>>>20),w=b+(v^R&(_^v))+A[10]+4294925233&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(_^b&(R^_))+A[11]+2304563134&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(R^v&(b^R))+A[12]+1804603682&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(b^_&(v^b))+A[13]+4254626195&4294967295,R=_+(w<<12&4294967295|w>>>20),w=b+(v^R&(_^v))+A[14]+2792965006&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(_^b&(R^_))+A[15]+1236535329&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(b^R&(v^b))+A[1]+4129170786&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(_^v))+A[6]+3225465664&4294967295,R=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(R^_))+A[11]+643717713&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(b^R))+A[0]+3921069994&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^R&(v^b))+A[5]+3593408605&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(_^v))+A[10]+38016083&4294967295,R=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(R^_))+A[15]+3634488961&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(b^R))+A[4]+3889429448&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^R&(v^b))+A[9]+568446438&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(_^v))+A[14]+3275163606&4294967295,R=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(R^_))+A[3]+4107603335&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(b^R))+A[8]+1163531501&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^R&(v^b))+A[13]+2850285829&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(_^v))+A[2]+4243563512&4294967295,R=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(R^_))+A[7]+1735328473&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(b^R))+A[12]+2368359562&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(v^b^R)+A[5]+4294588738&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^b)+A[8]+2272392833&4294967295,R=_+(w<<11&4294967295|w>>>21),w=b+(R^_^v)+A[11]+1839030562&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^_)+A[14]+4259657740&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^R)+A[1]+2763975236&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^b)+A[4]+1272893353&4294967295,R=_+(w<<11&4294967295|w>>>21),w=b+(R^_^v)+A[7]+4139469664&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^_)+A[10]+3200236656&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^R)+A[13]+681279174&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^b)+A[0]+3936430074&4294967295,R=_+(w<<11&4294967295|w>>>21),w=b+(R^_^v)+A[3]+3572445317&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^_)+A[6]+76029189&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^R)+A[9]+3654602809&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^b)+A[12]+3873151461&4294967295,R=_+(w<<11&4294967295|w>>>21),w=b+(R^_^v)+A[15]+530742520&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^_)+A[2]+3299628645&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(b^(v|~R))+A[0]+4096336452&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~b))+A[7]+1126891415&4294967295,R=_+(w<<10&4294967295|w>>>22),w=b+(_^(R|~v))+A[14]+2878612391&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~_))+A[5]+4237533241&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~R))+A[12]+1700485571&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~b))+A[3]+2399980690&4294967295,R=_+(w<<10&4294967295|w>>>22),w=b+(_^(R|~v))+A[10]+4293915773&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~_))+A[1]+2240044497&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~R))+A[8]+1873313359&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~b))+A[15]+4264355552&4294967295,R=_+(w<<10&4294967295|w>>>22),w=b+(_^(R|~v))+A[6]+2734768916&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~_))+A[13]+1309151649&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~R))+A[4]+4149444226&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~b))+A[11]+3174756917&4294967295,R=_+(w<<10&4294967295|w>>>22),w=b+(_^(R|~v))+A[2]+718787259&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~_))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const v=_-this.blockSize,A=this.C;let b=this.h,R=0;for(;R<_;){if(b==0)for(;R<=v;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<_;)if(A[b++]=T.charCodeAt(R++),b==this.blockSize){s(this,A),b=0;break}}else for(;R<_;)if(A[b++]=T[R++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var v=T.length-8;v<T.length;++v)T[v]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,v=0;v<4;++v)for(let A=0;A<32;A+=8)T[_++]=this.g[v]>>>A&255;return T};function i(T,_){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=_(T)}function o(T,_){this.h=_;const v=[];let A=!0;for(let b=T.length-1;b>=0;b--){const R=T[b]|0;A&&R==_||(v[b]=R,A=!1)}this.g=v}var l={};function c(T){return-128<=T&&T<128?i(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return k(u(-T));const _=[];let v=1;for(let A=0;T>=v;A++)_[A]=T/v|0,v*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return k(f(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(_,8));let A=p;for(let R=0;R<T.length;R+=8){var b=Math.min(8,T.length-R);const w=parseInt(T.substring(R,R+b),_);b<8?(b=u(Math.pow(_,b)),A=A.j(b).add(u(w))):(A=A.j(v),A=A.add(u(w)))}return A}var p=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-k(this).m();let T=0,_=1;for(let v=0;v<this.g.length;v++){const A=this.i(v);T+=(A>=0?A:4294967296+A)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(O(this))return"0";if(N(this))return"-"+k(this).toString(T);const _=u(Math.pow(T,6));var v=this;let A="";for(;;){const b=C(v,_).g;v=L(v,b.j(_));let R=((v.g.length>0?v.g[0]:v.h)>>>0).toString(T);if(v=b,O(v))return R+A;for(;R.length<6;)R="0"+R;A=R+A}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function O(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function N(T){return T.h==-1}t.l=function(T){return T=L(this,T),N(T)?-1:O(T)?0:1};function k(T){const _=T.g.length,v=[];for(let A=0;A<_;A++)v[A]=~T.g[A];return new o(v,~T.h).add(m)}t.abs=function(){return N(this)?k(this):this},t.add=function(T){const _=Math.max(this.g.length,T.g.length),v=[];let A=0;for(let b=0;b<=_;b++){let R=A+(this.i(b)&65535)+(T.i(b)&65535),w=(R>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);A=w>>>16,R&=65535,w&=65535,v[b]=w<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function L(T,_){return T.add(k(_))}t.j=function(T){if(O(this)||O(T))return p;if(N(this))return N(T)?k(this).j(k(T)):k(k(this).j(T));if(N(T))return k(this.j(k(T)));if(this.l(y)<0&&T.l(y)<0)return u(this.m()*T.m());const _=this.g.length+T.g.length,v=[];for(var A=0;A<2*_;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(let b=0;b<T.g.length;b++){const R=this.i(A)>>>16,w=this.i(A)&65535,He=T.i(b)>>>16,ht=T.i(b)&65535;v[2*A+2*b]+=w*ht,M(v,2*A+2*b),v[2*A+2*b+1]+=R*ht,M(v,2*A+2*b+1),v[2*A+2*b+1]+=w*He,M(v,2*A+2*b+1),v[2*A+2*b+2]+=R*He,M(v,2*A+2*b+2)}for(T=0;T<_;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=_;T<2*_;T++)v[T]=0;return new o(v,0)};function M(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function S(T,_){this.g=T,this.h=_}function C(T,_){if(O(_))throw Error("division by zero");if(O(T))return new S(p,p);if(N(T))return _=C(k(T),_),new S(k(_.g),k(_.h));if(N(_))return _=C(T,k(_)),new S(k(_.g),_.h);if(T.g.length>30){if(N(T)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,A=_;A.l(T)<=0;)v=q(v),A=q(A);var b=ee(v,1),R=ee(A,1);for(A=ee(A,2),v=ee(v,2);!O(A);){var w=R.add(A);w.l(T)<=0&&(b=b.add(v),R=w),A=ee(A,1),v=ee(v,1)}return _=L(T,b.j(_)),new S(b,_)}for(b=p;T.l(_)>=0;){for(v=Math.max(1,Math.floor(T.m()/_.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),R=u(v),w=R.j(_);N(w)||w.l(T)>0;)v-=A,R=u(v),w=R.j(_);O(R)&&(R=m),b=b.add(R),T=L(T,w)}return new S(b,T)}t.B=function(T){return C(this,T).h},t.and=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)&T.i(A);return new o(v,this.h&T.h)},t.or=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)|T.i(A);return new o(v,this.h|T.h)},t.xor=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)^T.i(A);return new o(v,this.h^T.h)};function q(T){const _=T.g.length+1,v=[];for(let A=0;A<_;A++)v[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(v,T.h)}function ee(T,_){const v=_>>5;_%=32;const A=T.g.length-v,b=[];for(let R=0;R<A;R++)b[R]=_>0?T.i(R+v)>>>_|T.i(R+v+1)<<32-_:T.i(R+v);return new o(b,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ug=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Sr=o}).apply(typeof td<"u"?td:typeof self<"u"?self:typeof window<"u"?window:{});var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hg,yi,fg,Wo,bc,dg,pg,mg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xo=="object"&&xo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var D=a[g];if(!(D in d))break e;d=d[D]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=c,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,D,x){for(var K=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)K[_e-2]=arguments[_e];return h.prototype[D].apply(g,K)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let g=1;g<arguments.length;g++){const D=arguments[g];var d=typeof D;if(d=d!="object"?d:D?Array.isArray(D)?"array":d:"null",d=="array"||d=="object"&&typeof D.length=="number"){d=a.length||0;const x=D.length||0;a.length=d+x;for(let K=0;K<x;K++)a[d+K]=D[K]}else a.push(D)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function L(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class M{constructor(){this.h=this.g=null}add(h,d){const g=S.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var S=new N(()=>new C,a=>a.reset());class C{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let q,ee=!1,T=new M,_=()=>{const a=Promise.resolve(void 0);q=()=>{a.then(v)}};function v(){for(var a;a=L();){try{a.h.call(a.g)}catch(d){k(d)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ee=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function w(a){return/^[\s\xa0]*$/.test(a)}function He(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(He,b),He.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ht="closure_listenable_"+(Math.random()*1e6|0),xe=0;function me(a,h,d,g,D){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=D,this.key=++xe,this.da=this.fa=!1}function Ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ct(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function un(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Ot(a){const h={};for(const d in a)h[d]=a[d];return h}const it="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xn(a,h){let d,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(d in g)a[d]=g[d];for(let x=0;x<it.length;x++)d=it[x],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Xt(a){this.src=a,this.g={},this.h=0}Xt.prototype.add=function(a,h,d,g,D){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const K=ft(a,h,g,D);return K>-1?(h=a[K],d||(h.fa=!1)):(h=new me(h,this.src,x,!!g,D),h.fa=d,a.push(h)),h};function Zt(a,h){const d=h.type;if(d in a.g){var g=a.g[d],D=Array.prototype.indexOf.call(g,h,void 0),x;(x=D>=0)&&Array.prototype.splice.call(g,D,1),x&&(Ie(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ft(a,h,d,g){for(let D=0;D<a.length;++D){const x=a[D];if(!x.da&&x.listener==h&&x.capture==!!d&&x.ha==g)return D}return-1}var F="closure_lm_"+(Math.random()*1e6|0),X={};function Y(a,h,d,g,D){if(Array.isArray(h)){for(let x=0;x<h.length;x++)Y(a,h[x],d,g,D);return null}return d=Q(d),a&&a[ht]?a.J(h,d,l(g)?!!g.capture:!1,D):re(a,h,d,!1,g,D)}function re(a,h,d,g,D,x){if(!h)throw Error("Invalid event type");const K=l(D)?!!D.capture:!!D;let _e=$(a);if(_e||(a[F]=_e=new Xt(a)),d=_e.add(h,d,g,K,x),d.proxy)return d;if(g=ve(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(D=K),D===void 0&&(D=!1),a.addEventListener(h.toString(),g,D);else if(a.attachEvent)a.attachEvent(P(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ve(){function a(d){return h.call(a.src,a.listener,d)}const h=B;return a}function E(a,h,d,g,D){if(Array.isArray(h))for(var x=0;x<h.length;x++)E(a,h[x],d,g,D);else g=l(g)?!!g.capture:!!g,d=Q(d),a&&a[ht]?(a=a.i,x=String(h).toString(),x in a.g&&(h=a.g[x],d=ft(h,d,g,D),d>-1&&(Ie(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[x],a.h--)))):a&&(a=$(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ft(h,d,g,D)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ht])Zt(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(P(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=$(h))?(Zt(d,a),d.h==0&&(d.src=null,h[F]=null)):Ie(a)}}}function P(a){return a in X?X[a]:X[a]="on"+a}function B(a,h){if(a.da)a=!0;else{h=new He(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&I(a),a=d.call(g,h)}return a}function $(a){return a=a[F],a instanceof Xt?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function Q(a){return typeof a=="function"?a:(a[U]||(a[U]=function(h){return a.handleEvent(h)}),a[U])}function G(){A.call(this),this.i=new Xt(this),this.M=this,this.G=null}p(G,A),G.prototype[ht]=!0,G.prototype.removeEventListener=function(a,h,d,g){E(this,a,h,d,g)};function z(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var D=h;h=new b(g,a),xn(h,D)}D=!0;let x,K;if(d)for(K=d.length-1;K>=0;K--)x=h.g=d[K],D=W(x,g,!0,h)&&D;if(x=h.g=a,D=W(x,g,!0,h)&&D,D=W(x,g,!1,h)&&D,d)for(K=0;K<d.length;K++)x=h.g=d[K],D=W(x,g,!1,h)&&D}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Ie(d[g]);delete a.g[h],a.h--}}this.G=null},G.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},G.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function W(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let x=0;x<h.length;++x){const K=h[x];if(K&&!K.da&&K.capture==d){const _e=K.listener,Je=K.ha||K.src;K.fa&&Zt(a.i,K),D=_e.call(Je,g)!==!1&&D}}return D&&!g.defaultPrevented}function ie(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function J(a){a.g=ie(()=>{a.g=null,a.i&&(a.i=!1,J(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class se extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function le(a){A.call(this),this.h=a,this.g={}}p(le,A);var ye=[];function ke(a){Ct(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}le.prototype.N=function(){le.Z.N.call(this),ke(this)},le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ae=o.JSON.stringify,dt=o.JSON.parse,pt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Vt(){}function xt(){}var en={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ms(){b.call(this,"d")}p(ms,b);function ot(){b.call(this,"c")}p(ot,b);var tt={},Js=null;function Br(){return Js=Js||new G}tt.Ia="serverreachability";function ih(a){b.call(this,tt.Ia,a)}p(ih,b);function Xs(a){const h=Br();z(h,new ih(h))}tt.STAT_EVENT="statevent";function oh(a,h){b.call(this,tt.STAT_EVENT,a),this.stat=h}p(oh,b);function bt(a){const h=Br();z(h,new oh(h,a))}tt.Ja="timingevent";function ah(a,h){b.call(this,tt.Ja,a),this.size=h}p(ah,b);function Zs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ei(){this.g=!0}ei.prototype.ua=function(){this.g=!1};function ky(a,h,d,g,D,x){a.info(function(){if(a.g)if(x){var K="",_e=x.split("&");for(let Ne=0;Ne<_e.length;Ne++){var Je=_e[Ne].split("=");if(Je.length>1){const nt=Je[0];Je=Je[1];const fn=nt.split("_");K=fn.length>=2&&fn[1]=="type"?K+(nt+"="+Je+"&"):K+(nt+"=redacted&")}}}else K=null;else K=x;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+d+`
`+K})}function Dy(a,h,d,g,D,x,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+d+`
`+x+" "+K})}function gs(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Oy(a,d)+(g?" "+g:"")})}function Ny(a,h){a.info(function(){return"TIMEOUT: "+h})}ei.prototype.info=function(){};function Oy(a,h){if(!a.g)return h;if(!h)return null;try{const x=JSON.parse(h);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var d=x[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var D=g[0];if(D!="noop"&&D!="stop"&&D!="close")for(let K=1;K<g.length;K++)g[K]=""}}}}return Ae(x)}catch{return h}}var wo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},lh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ch;function ml(){}p(ml,Vt),ml.prototype.g=function(){return new XMLHttpRequest},ch=new ml;function ti(a){return encodeURIComponent(String(a))}function Vy(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function or(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new le(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new uh}function uh(){this.i=null,this.g="",this.h=!1}var hh={},gl={};function _l(a,h,d){a.M=1,a.A=Io(hn(h)),a.u=d,a.R=!0,fh(a,null)}function fh(a,h){a.F=Date.now(),To(a),a.B=hn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ah(d.i,"t",g),a.C=0,d=a.j.L,a.h=new uh,a.g=Hh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new se(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(ye[0]=D.toString()),D=ye);for(let x=0;x<D.length;x++){const K=Y(d,D[x],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?Ot(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Xs(),ky(a.i,a.v,a.B,a.l,a.S,a.u)}or.prototype.ba=function(a){a=a.target;const h=this.O;h&&cr(a)==3?h.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const _e=cr(this.g),Je=this.g.ya(),Ne=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||Nh(this.g)))){this.K||_e!=4||Je==7||(Je==8||Ne<=0?Xs(3):Xs(2)),yl(this);var h=this.g.ca();this.X=h;var d=xy(this);if(this.o=h==200,Dy(this.i,this.v,this.B,this.l,this.S,_e,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,D=this.g;if((g=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var x=g;break t}}x=null}if(a=x)gs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vl(this,a);else{this.o=!1,this.m=3,bt(12),jr(this),ni(this);break e}}if(this.R){a=!0;let nt;for(;!this.K&&this.C<d.length;)if(nt=My(this,d),nt==gl){_e==4&&(this.m=4,bt(14),a=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==hh){this.m=4,bt(15),gs(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else gs(this.i,this.l,nt,null),vl(this,nt);if(dh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,bt(16),a=!1),this.o=this.o&&a,!a)gs(this.i,this.l,d,"[Invalid Chunked Response]"),jr(this),ni(this);else if(d.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Sl(K),K.P=!0,bt(11))}}else gs(this.i,this.l,d,null),vl(this,d);_e==4&&jr(this),this.o&&!this.K&&(_e==4?Fh(this.j,this):(this.o=!1,To(this)))}else Yy(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,bt(12)):(this.m=0,bt(13)),jr(this),ni(this)}}}catch{}finally{}};function xy(a){if(!dh(a))return a.g.la();const h=Nh(a.g);if(h==="")return"";let d="";const g=h.length,D=cr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return jr(a),ni(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<g;x++)a.h.h=!0,d+=a.h.i.decode(h[x],{stream:!(D&&x==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function dh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function My(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?gl:(d=Number(h.substring(d,g)),isNaN(d)?hh:(g+=1,g+d>h.length?gl:(h=h.slice(g,g+d),a.C=g+d,h)))}or.prototype.cancel=function(){this.K=!0,jr(this)};function To(a){a.T=Date.now()+a.H,ph(a,a.H)}function ph(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Zs(u(a.aa,a),h)}function yl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}or.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ny(this.i,this.B),this.M!=2&&(Xs(),bt(17)),jr(this),this.m=2,ni(this)):ph(this,this.T-a)};function ni(a){a.j.I==0||a.K||Fh(a.j,a)}function jr(a){yl(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ke(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function vl(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||El(d.h,a))){if(!a.L&&El(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Co(d),Ro(d);else break e;Rl(d),bt(18)}}else d.xa=D[1],0<d.xa-d.K&&D[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Zs(u(d.Va,d),6e3));_h(d.h)<=1&&d.ta&&(d.ta=void 0)}else Hr(d,11)}else if((a.L||d.g==a)&&Co(d),!w(h))for(D=d.Ba.g.parse(h),h=0;h<D.length;h++){let Ne=D[h];const nt=Ne[0];if(!(nt<=d.K))if(d.K=nt,Ne=Ne[1],d.I==2)if(Ne[0]=="c"){d.M=Ne[1],d.ba=Ne[2];const fn=Ne[3];fn!=null&&(d.ka=fn,d.j.info("VER="+d.ka));const qr=Ne[4];qr!=null&&(d.za=qr,d.j.info("SVER="+d.za));const ur=Ne[5];ur!=null&&typeof ur=="number"&&ur>0&&(g=1.5*ur,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const hr=a.g;if(hr){const ko=hr.g?hr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ko){var x=g.h;x.g||ko.indexOf("spdy")==-1&&ko.indexOf("quic")==-1&&ko.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(wl(x,x.h),x.h=null))}if(g.G){const Cl=hr.g?hr.g.getResponseHeader("X-HTTP-Session-Id"):null;Cl&&(g.wa=Cl,Fe(g.J,g.G,Cl))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var K=a;if(g.na=$h(g,g.L?g.ba:null,g.W),K.L){yh(g.h,K);var _e=K,Je=g.O;Je&&(_e.H=Je),_e.D&&(yl(_e),To(_e)),g.g=K}else Lh(g);d.i.length>0&&So(d)}else Ne[0]!="stop"&&Ne[0]!="close"||Hr(d,7);else d.I==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Hr(d,7):Al(d):Ne[0]!="noop"&&d.l&&d.l.qa(Ne),d.A=0)}}Xs(4)}catch{}}var Ly=class{constructor(a,h){this.g=a,this.map=h}};function mh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function gh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _h(a){return a.h?1:a.g?a.g.size:0}function El(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function wl(a,h){a.g?a.g.add(h):a.h=h}function yh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}mh.prototype.cancel=function(){if(this.i=vh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return y(a.i)}var Eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let D,x=null;g>=0?(D=a[d].substring(0,g),x=a[d].substring(g+1)):D=a[d],h(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function ar(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof ar?(this.l=a.l,ri(this,a.j),this.o=a.o,this.g=a.g,si(this,a.u),this.h=a.h,Tl(this,Rh(a.i)),this.m=a.m):a&&(h=String(a).match(Eh))?(this.l=!1,ri(this,h[1]||"",!0),this.o=ii(h[2]||""),this.g=ii(h[3]||"",!0),si(this,h[4]),this.h=ii(h[5]||"",!0),Tl(this,h[6]||"",!0),this.m=ii(h[7]||"")):(this.l=!1,this.i=new ai(null,this.l))}ar.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(oi(h,wh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(oi(h,wh,!0),"@"),a.push(ti(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(oi(d,d.charAt(0)=="/"?jy:By,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",oi(d,Hy)),a.join("")},ar.prototype.resolve=function(a){const h=hn(this);let d=!!a.j;d?ri(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)si(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var D=h.h.lastIndexOf("/");D!=-1&&(g=h.h.slice(0,D+1)+g)}if(D=g,D==".."||D==".")g="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){g=D.lastIndexOf("/",0)==0,D=D.split("/");const x=[];for(let K=0;K<D.length;){const _e=D[K++];_e=="."?g&&K==D.length&&x.push(""):_e==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),g&&K==D.length&&x.push("")):(x.push(_e),g=!0)}g=x.join("/")}else g=D}return d?h.h=g:d=a.i.toString()!=="",d?Tl(h,Rh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function hn(a){return new ar(a)}function ri(a,h,d){a.j=d?ii(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function si(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Tl(a,h,d){h instanceof ai?(a.i=h,qy(a.i,a.l)):(d||(h=oi(h,$y)),a.i=new ai(h,a.l))}function Fe(a,h,d){a.i.set(h,d)}function Io(a){return Fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ii(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function oi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Fy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Fy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wh=/[#\/\?@]/g,By=/[#\?:]/g,jy=/[#\?]/g,$y=/[#\?@]/g,Hy=/#/g;function ai(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $r(a){a.g||(a.g=new Map,a.h=0,a.i&&Uy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ai.prototype,t.add=function(a,h){$r(this),this.i=null,a=_s(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Th(a,h){$r(a),h=_s(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ih(a,h){return $r(a),h=_s(a,h),a.g.has(h)}t.forEach=function(a,h){$r(this),this.g.forEach(function(d,g){d.forEach(function(D){a.call(h,D,g,this)},this)},this)};function bh(a,h){$r(a);let d=[];if(typeof h=="string")Ih(a,h)&&(d=d.concat(a.g.get(_s(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return $r(this),this.i=null,a=_s(this,a),Ih(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=bh(this,a),a.length>0?String(a[0]):h):h};function Ah(a,h,d){Th(a,h),d.length>0&&(a.i=null,a.g.set(_s(a,h),y(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const D=ti(d);d=bh(this,d);for(let x=0;x<d.length;x++){let K=D;d[x]!==""&&(K+="="+ti(d[x])),a.push(K)}}return this.i=a.join("&")};function Rh(a){const h=new ai;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function _s(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function qy(a,h){h&&!a.j&&($r(a),a.i=null,a.g.forEach(function(d,g){const D=g.toLowerCase();g!=D&&(Th(this,g),Ah(this,D,d))},a)),a.j=h}function zy(a,h){const d=new ei;if(o.Image){const g=new Image;g.onload=f(lr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(lr,d,"TestLoadImage: error",!1,h,g),g.onabort=f(lr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(lr,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Wy(a,h){const d=new ei,g=new AbortController,D=setTimeout(()=>{g.abort(),lr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(D),x.ok?lr(d,"TestPingServer: ok",!0,h):lr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),lr(d,"TestPingServer: error",!1,h)})}function lr(a,h,d,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(d)}catch{}}function Gy(){this.g=new pt}function Il(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Il,Vt),Il.prototype.g=function(){return new bo(this.i,this.h)};function bo(a,h){G.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(bo,G),t=bo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ci(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?li(this):ci(this),this.readyState==3&&Sh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,li(this))},t.Na=function(a){this.g&&(this.response=a,li(this))},t.ga=function(){this.g&&li(this)};function li(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ci(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ci(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ch(a){let h="";return Ct(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function bl(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ch(d),typeof a=="string"?d!=null&&ti(d):Fe(a,h,d))}function qe(a){G.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(qe,G);var Ky=/^https?$/i,Qy=["POST","PUT"];t=qe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ch.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){Ph(this,x);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)d.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())d.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Qy,h,void 0)>=0)||g||D||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,K]of d)this.g.setRequestHeader(x,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Ph(this,x)}};function Ph(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,kh(a),Ao(a)}function kh(a){a.A||(a.A=!0,z(a,"complete"),z(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,z(this,"complete"),z(this,"abort"),Ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ao(this,!0)),qe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Dh(this):this.Xa())},t.Xa=function(){Dh(this)};function Dh(a){if(a.h&&typeof i<"u"){if(a.v&&cr(a)==4)setTimeout(a.Ca.bind(a),0);else if(z(a,"readystatechange"),cr(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=x===0){let K=String(a.D).match(Eh)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),g=!Ky.test(K?K.toLowerCase():"")}d=g}if(d)z(a,"complete"),z(a,"success");else{a.o=6;try{var D=cr(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",kh(a)}}finally{Ao(a)}}}}function Ao(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||z(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function cr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return cr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),dt(h)}};function Nh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Yy(a){const h={};a=(a.g&&cr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=Vy(a[g]);const D=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=h[D]||[];h[D]=x,x.push(d)}un(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ui(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Oh(a){this.za=0,this.i=[],this.j=new ei,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ui("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ui("baseRetryDelayMs",5e3,a),this.Za=ui("retryDelaySeedMs",1e4,a),this.Ta=ui("forwardChannelMaxRetries",2,a),this.va=ui("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new mh(a&&a.concurrentRequestLimit),this.Ba=new Gy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Oh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){bt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=$h(this,null,this.W),So(this)};function Al(a){if(Vh(a),a.I==3){var h=a.V++,d=hn(a.J);if(Fe(d,"SID",a.M),Fe(d,"RID",h),Fe(d,"TYPE","terminate"),hi(a,d),h=new or(a,a.j,h),h.M=2,h.A=Io(hn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Hh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),To(h)}jh(a)}function Ro(a){a.g&&(Sl(a),a.g.cancel(),a.g=null)}function Vh(a){Ro(a),a.v&&(o.clearTimeout(a.v),a.v=null),Co(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function So(a){if(!gh(a.h)&&!a.m){a.m=!0;var h=a.Ea;q||_(),ee||(q(),ee=!0),T.add(h,a),a.D=0}}function Jy(a,h){return _h(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Zs(u(a.Ea,a,h),Bh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new or(this,this.j,a);let x=this.o;if(this.U&&(x?(x=Ot(x),xn(x,this.U)):x=this.U),this.u!==null||this.R||(D.J=x,x=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Mh(this,D,h),d=hn(this.J),Fe(d,"RID",a),Fe(d,"CVER",22),this.G&&Fe(d,"X-HTTP-Session-Id",this.G),hi(this,d),x&&(this.R?h="headers="+ti(Ch(x))+"&"+h:this.u&&bl(d,this.u,x)),wl(this.h,D),this.Ra&&Fe(d,"TYPE","init"),this.S?(Fe(d,"$req",h),Fe(d,"SID","null"),D.U=!0,_l(D,d,null)):_l(D,d,h),this.I=2}}else this.I==3&&(a?xh(this,a):this.i.length==0||gh(this.h)||xh(this))};function xh(a,h){var d;h?d=h.l:d=a.V++;const g=hn(a.J);Fe(g,"SID",a.M),Fe(g,"RID",d),Fe(g,"AID",a.K),hi(a,g),a.u&&a.o&&bl(g,a.u,a.o),d=new or(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Mh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),wl(a.h,d),_l(d,g,h)}function hi(a,h){a.H&&Ct(a.H,function(d,g){Fe(h,g,d)}),a.l&&Ct({},function(d,g){Fe(h,g,d)})}function Mh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var D=a.i;let _e=-1;for(;;){const Je=["count="+d];_e==-1?d>0?(_e=D[0].g,Je.push("ofs="+_e)):_e=0:Je.push("ofs="+_e);let Ne=!0;for(let nt=0;nt<d;nt++){var x=D[nt].g;const fn=D[nt].map;if(x-=_e,x<0)_e=Math.max(0,D[nt].g-100),Ne=!1;else try{x="req"+x+"_"||"";try{var K=fn instanceof Map?fn:Object.entries(fn);for(const[qr,ur]of K){let hr=ur;l(ur)&&(hr=Ae(ur)),Je.push(x+qr+"="+encodeURIComponent(hr))}}catch(qr){throw Je.push(x+"type="+encodeURIComponent("_badmap")),qr}}catch{g&&g(fn)}}if(Ne){K=Je.join("&");break e}}K=void 0}return a=a.i.splice(0,d),h.G=a,K}function Lh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;q||_(),ee||(q(),ee=!0),T.add(h,a),a.A=0}}function Rl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Zs(u(a.Da,a),Bh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Uh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Zs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,bt(10),Ro(this),Uh(this))};function Sl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Uh(a){a.g=new or(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=hn(a.na);Fe(h,"RID","rpc"),Fe(h,"SID",a.M),Fe(h,"AID",a.K),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Fe(h,"TO",a.ia),Fe(h,"TYPE","xmlhttp"),hi(a,h),a.u&&a.o&&bl(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Io(hn(h)),d.u=null,d.R=!0,fh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ro(this),Rl(this),bt(19))};function Co(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Fh(a,h){var d=null;if(a.g==h){Co(a),Sl(a),a.g=null;var g=2}else if(El(a.h,h))d=h.G,yh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;g=Br(),z(g,new ah(g,d)),So(a)}else Lh(a);else if(D=h.m,D==3||D==0&&h.X>0||!(g==1&&Jy(a,h)||g==2&&Rl(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),D){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function Bh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Hr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const D=!g;g=new ar(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ri(g,"https"),Io(g),D?zy(g.toString(),d):Wy(g.toString(),d)}else bt(2);a.I=0,a.l&&a.l.pa(h),jh(a),Vh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function jh(a){if(a.I=0,a.ja=[],a.l){const h=vh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ja,h),O(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function $h(a,h,d){var g=d instanceof ar?hn(d):new ar(d);if(g.g!="")h&&(g.g=h+"."+g.g),si(g,g.u);else{var D=o.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const x=new ar(null);g&&ri(x,g),h&&(x.g=h),D&&si(x,D),d&&(x.h=d),g=x}return d=a.G,h=a.wa,d&&h&&Fe(g,d,h),Fe(g,"VER",a.ka),hi(a,g),g}function Hh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new qe(new Il({ab:d})):new qe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qh(){}t=qh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Po(){}Po.prototype.g=function(a,h){return new Mt(a,h)};function Mt(a,h){G.call(this),this.g=new Oh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!w(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ys(this)}p(Mt,G),Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Al(this.g)},Mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ae(a),a=d);h.i.push(new Ly(h.Ya++,a)),h.I==3&&So(h)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Al(this.g),delete this.g,Mt.Z.N.call(this)};function zh(a){ms.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(zh,ms);function Wh(){ot.call(this),this.status=1}p(Wh,ot);function ys(a){this.g=a}p(ys,qh),ys.prototype.ra=function(){z(this.g,"a")},ys.prototype.qa=function(a){z(this.g,new zh(a))},ys.prototype.pa=function(a){z(this.g,new Wh)},ys.prototype.oa=function(){z(this.g,"b")},Po.prototype.createWebChannel=Po.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,mg=function(){return new Po},pg=function(){return Br()},dg=tt,bc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},wo.NO_ERROR=0,wo.TIMEOUT=8,wo.HTTP_ERROR=6,Wo=wo,lh.COMPLETE="complete",fg=lh,xt.EventType=en,en.OPEN="a",en.CLOSE="b",en.ERROR="c",en.MESSAGE="d",G.prototype.listen=G.prototype.J,yi=xt,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,hg=qe}).apply(typeof xo<"u"?xo:typeof self<"u"?self:typeof window<"u"?window:{});const nd="@firebase/firestore",rd="4.9.2";/**
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
 */let Ws="12.3.0";/**
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
 */const rs=new fu("@firebase/firestore");function Is(){return rs.logLevel}function Z(t,...e){if(rs.logLevel<=Ee.DEBUG){const n=e.map(mu);rs.debug(`Firestore (${Ws}): ${t}`,...n)}}function Zn(t,...e){if(rs.logLevel<=Ee.ERROR){const n=e.map(mu);rs.error(`Firestore (${Ws}): ${t}`,...n)}}function Fs(t,...e){if(rs.logLevel<=Ee.WARN){const n=e.map(mu);rs.warn(`Firestore (${Ws}): ${t}`,...n)}}function mu(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,gg(t,r,n)}function gg(t,e,n){let r=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Zn(r),new Error(r)}function Pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||gg(e,s,r)}function pe(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class _g{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ib{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(_t.UNAUTHENTICATED)))}shutdown(){}}class bb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Ab{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new _g(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class Rb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Sb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Rb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new sd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new sd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Pb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class gu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Pb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Ac(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ql(s)===Ql(i)?we(s,i):Ql(s)?1:-1}return we(t.length,e.length)}const kb=55296,Db=57343;function Ql(t){const e=t.charCodeAt(0);return e>=kb&&e<=Db}function Bs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const id="__name__";class mn{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&fe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=mn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=mn.isNumericId(e),s=mn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?mn.extractNumericId(e).compare(mn.extractNumericId(n)):Ac(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Sr.fromString(e.substring(4,e.length-2))}}class je extends mn{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new je(n)}static emptyPath(){return new je([])}}const Nb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends mn{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return Nb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===id}static keyField(){return new ct([id])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(je.fromString(e))}static fromName(e){return new ae(je.fromString(e).popFirst(5))}static empty(){return new ae(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new je(e.slice()))}}/**
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
 */function Ob(t,e,n){if(!n)throw new ne(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vb(t,e,n,r){if(e===!0&&r===!0)throw new ne(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function od(t){if(!ae.isDocumentKey(t))throw new ne(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function Gi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_u(t);throw new ne(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function uo(t,e){if(!yg(t))throw new ne(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ne(H.INVALID_ARGUMENT,n);return!0}/**
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
 */const ad=-62135596800,ld=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ld);return new Be(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ad)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ld}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(uo(e,Be._jsonSchema))return new Be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ad;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Be._jsonSchemaVersion="firestore/timestamp/1.0",Be._jsonSchema={type:Qe("string",Be._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new Be(0,0))}static max(){return new de(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ki=-1;function xb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Vr(s,ae.empty(),e)}function Mb(t){return new Vr(t.readTime,t.key,Ki)}class Vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vr(de.min(),ae.empty(),Ki)}static max(){return new Vr(de.max(),ae.empty(),Ki)}}function Lb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ub="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Gs(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==Ub)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):j.reject(n)}static resolve(e){return new j(((n,r)=>{n(e)}))}static reject(e){return new j(((n,r)=>{r(e)}))}static waitFor(e){return new j(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next((s=>s?j.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new j(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new j(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function Bb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xa.ce=-1;/**
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
 */const yu=-1;function Za(t){return t==null}function ma(t){return t===0&&1/t==-1/0}function jb(t){return typeof t=="number"&&Number.isInteger(t)&&!ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const vg="";function $b(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=cd(e)),e=Hb(t.get(n),e);return cd(e)}function Hb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case vg:n+="";break;default:n+=i}}return n}function cd(t){return t+vg+""}/**
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
 */function ud(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Eg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class $e{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hd(this.data.getIterator())}getIteratorFrom(e){return new hd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class hd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tn{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new tn([])}unionWith(e){let n=new et(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class wg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wg("Invalid base64 string: "+i):i}})(e);return new ut(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const qb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=qb.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */const Tg="server_timestamp",Ig="__type__",bg="__previous_value__",Ag="__local_write_time__";function vu(t){return(t?.mapValue?.fields||{})[Ig]?.stringValue===Tg}function el(t){const e=t.mapValue.fields[bg];return vu(e)?el(e):e}function Qi(t){const e=xr(t.mapValue.fields[Ag].timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class zb{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const ga="(default)";class Yi{constructor(e,n){this.projectId=e,this.database=n||ga}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database===ga}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Rg="__type__",Wb="__max__",Lo={mapValue:{}},Sg="__vector__",_a="value";function Lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vu(t)?4:Kb(t)?9007199254740991:Gb(t)?10:11:fe(28295,{value:t})}function kn(t,e){if(t===e)return!0;const n=Lr(t);if(n!==Lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qi(t).isEqual(Qi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=xr(s.timestampValue),l=xr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Mr(s.bytesValue).isEqual(Mr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),l=We(i.doubleValue);return o===l?ma(o)===ma(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ud(o)!==ud(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!kn(o[c],l[c])))return!1;return!0})(t,e);default:return fe(52216,{left:t})}}function Ji(t,e){return(t.values||[]).find((n=>kn(n,e)))!==void 0}function js(t,e){if(t===e)return 0;const n=Lr(t),r=Lr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=We(i.integerValue||i.doubleValue),c=We(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return fd(t.timestampValue,e.timestampValue);case 4:return fd(Qi(t),Qi(e));case 5:return Ac(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Mr(i),c=Mr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=we(l[u],c[u]);if(f!==0)return f}return we(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=we(We(i.latitude),We(o.latitude));return l!==0?l:we(We(i.longitude),We(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return dd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const l=i.fields||{},c=o.fields||{},u=l[_a]?.arrayValue,f=c[_a]?.arrayValue,p=we(u?.values?.length||0,f?.values?.length||0);return p!==0?p:dd(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Lo.mapValue&&o===Lo.mapValue)return 0;if(i===Lo.mapValue)return 1;if(o===Lo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Ac(c[p],f[p]);if(m!==0)return m;const y=js(l[c[p]],u[f[p]]);if(y!==0)return y}return we(c.length,f.length)})(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=xr(t),r=xr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function dd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=js(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function $s(t){return Rc(t)}function Rc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=xr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Mr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ae.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Rc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Rc(n.fields[o])}`;return s+"}"})(t.mapValue):fe(61005,{value:t})}function Go(t){switch(Lr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=el(t);return e?16+Go(e):16;case 5:return 2*t.stringValue.length;case 6:return Mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Go(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return hs(r.fields,((i,o)=>{s+=i.length+Go(o)})),s})(t.mapValue);default:throw fe(13486,{value:t})}}function Sc(t){return!!t&&"integerValue"in t}function Eu(t){return!!t&&"arrayValue"in t}function pd(t){return!!t&&"nullValue"in t}function md(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ko(t){return!!t&&"mapValue"in t}function Gb(t){return(t?.mapValue?.fields||{})[Rg]?.stringValue===Sg}function Ni(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hs(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ni(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ni(t.arrayValue.values[n]);return e}return{...t}}function Kb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Wb}/**
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
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ni(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ni(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hs(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new qt(Ni(this.value))}}function Cg(t){const e=[];return hs(t.fields,((n,r)=>{const s=new ct([n]);if(Ko(r)){const i=Cg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new tn(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,de.min(),de.min(),de.min(),qt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,de.min(),de.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,de.min(),de.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ya{constructor(e,n){this.position=e,this.inclusive=n}}function gd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=js(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class va{constructor(e,n="asc"){this.field=e,this.dir=n}}function Qb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Pg{}class Ze extends Pg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Jb(e,n,r):n==="array-contains"?new eA(e,r):n==="in"?new tA(e,r):n==="not-in"?new nA(e,r):n==="array-contains-any"?new rA(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Xb(e,r):new Zb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(js(n,this.value)):n!==null&&Lr(this.value)===Lr(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends Pg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Dn(e,n)}matches(e){return kg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function kg(t){return t.op==="and"}function Dg(t){return Yb(t)&&kg(t)}function Yb(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Cc(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+$s(t.value);if(Dg(t))return t.filters.map((e=>Cc(e))).join(",");{const e=t.filters.map((n=>Cc(n))).join(",");return`${t.op}(${e})`}}function Ng(t,e){return t instanceof Ze?(function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&kn(r.value,s.value)})(t,e):t instanceof Dn?(function(r,s){return s instanceof Dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&Ng(o,s.filters[l])),!0):!1})(t,e):void fe(19439)}function Og(t){return t instanceof Ze?(function(n){return`${n.field.canonicalString()} ${n.op} ${$s(n.value)}`})(t):t instanceof Dn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Og).join(" ,")+"}"})(t):"Filter"}class Jb extends Ze{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class Xb extends Ze{constructor(e,n){super(e,"in",n),this.keys=Vg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class Zb extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Vg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Vg(t,e){return(e.arrayValue?.values||[]).map((n=>ae.fromName(n.referenceValue)))}class eA extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eu(n)&&Ji(n.arrayValue,this.value)}}class tA extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class nA extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ji(this.value.arrayValue,n)}}class rA extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ji(this.value.arrayValue,r)))}}/**
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
 */class sA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function yd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new sA(t,e,n,r,s,i,o)}function wu(t){const e=pe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Cc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Za(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>$s(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>$s(r))).join(",")),e.Te=n}return e.Te}function Tu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Qb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ng(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_d(t.startAt,e.startAt)&&_d(t.endAt,e.endAt)}function Pc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class tl{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function iA(t,e,n,r,s,i,o,l){return new tl(t,e,n,r,s,i,o,l)}function Iu(t){return new tl(t)}function vd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oA(t){return t.collectionGroup!==null}function Oi(t){const e=pe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new et(ct.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new va(i,r))})),n.has(ct.keyField().canonicalString())||e.Ie.push(new va(ct.keyField(),r))}return e.Ie}function wn(t){const e=pe(t);return e.Ee||(e.Ee=aA(e,Oi(t))),e.Ee}function aA(t,e){if(t.limitType==="F")return yd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new va(s.field,i)}));const n=t.endAt?new ya(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ya(t.startAt.position,t.startAt.inclusive):null;return yd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kc(t,e,n){return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nl(t,e){return Tu(wn(t),wn(e))&&t.limitType===e.limitType}function xg(t){return`${wu(wn(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Og(s))).join(", ")}]`),Za(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>$s(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>$s(s))).join(",")),`Target(${r})`})(wn(t))}; limitType=${t.limitType})`}function rl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Oi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=gd(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Oi(r),s)||r.endAt&&!(function(o,l,c){const u=gd(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Oi(r),s))})(t,e)}function lA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Mg(t){return(e,n)=>{let r=!1;for(const s of Oi(t)){const i=cA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cA(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?js(c,u):fe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:t.dir})}}/**
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
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Eg(this.inner)}size(){return this.innerSize}}/**
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
 */const uA=new $e(ae.comparator);function er(){return uA}const Lg=new $e(ae.comparator);function vi(...t){let e=Lg;for(const n of t)e=e.insert(n.key,n);return e}function Ug(t){let e=Lg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Yr(){return Vi()}function Fg(){return Vi()}function Vi(){return new fs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const hA=new $e(ae.comparator),fA=new et(ae.comparator);function Te(...t){let e=fA;for(const n of t)e=e.add(n);return e}const dA=new et(we);function pA(){return dA}/**
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
 */function bu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function Bg(t){return{integerValue:""+t}}function mA(t,e){return jb(e)?Bg(e):bu(t,e)}/**
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
 */class sl{constructor(){this._=void 0}}function gA(t,e,n){return t instanceof Xi?(function(s,i){const o={fields:{[Ig]:{stringValue:Tg},[Ag]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vu(i)&&(i=el(i)),i&&(o.fields[bg]=i),{mapValue:o}})(n,e):t instanceof Zi?$g(t,e):t instanceof eo?Hg(t,e):(function(s,i){const o=jg(s,i),l=Ed(o)+Ed(s.Ae);return Sc(o)&&Sc(s.Ae)?Bg(l):bu(s.serializer,l)})(t,e)}function _A(t,e,n){return t instanceof Zi?$g(t,e):t instanceof eo?Hg(t,e):n}function jg(t,e){return t instanceof Ea?(function(r){return Sc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Xi extends sl{}class Zi extends sl{constructor(e){super(),this.elements=e}}function $g(t,e){const n=qg(e);for(const r of t.elements)n.some((s=>kn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class eo extends sl{constructor(e){super(),this.elements=e}}function Hg(t,e){let n=qg(e);for(const r of t.elements)n=n.filter((s=>!kn(s,r)));return{arrayValue:{values:n}}}class Ea extends sl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ed(t){return We(t.integerValue||t.doubleValue)}function qg(t){return Eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class yA{constructor(e,n){this.field=e,this.transform=n}}function vA(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?Bs(r.elements,s.elements,kn):r instanceof Ea&&s instanceof Ea?kn(r.Ae,s.Ae):r instanceof Xi&&s instanceof Xi})(t.transform,e.transform)}class EA{constructor(e,n){this.version=e,this.transformResults=n}}class Wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class il{}function zg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gg(t.key,Wn.none()):new ho(t.key,t.data,Wn.none());{const n=t.data,r=qt.empty();let s=new et(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ds(t.key,r,new tn(s.toArray()),Wn.none())}}function wA(t,e,n){t instanceof ho?(function(s,i,o){const l=s.value.clone(),c=Td(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof ds?(function(s,i,o){if(!Qo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Td(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Wg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function xi(t,e,n,r){return t instanceof ho?(function(i,o,l,c){if(!Qo(i.precondition,o))return l;const u=i.value.clone(),f=Id(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ds?(function(i,o,l,c){if(!Qo(i.precondition,o))return l;const u=Id(i.fieldTransforms,c,o),f=o.data;return f.setAll(Wg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function TA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=jg(r.transform,s||null);i!=null&&(n===null&&(n=qt.empty()),n.set(r.field,i))}return n||null}function wd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bs(r,s,((i,o)=>vA(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ho extends il{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ds extends il{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Td(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,_A(o,l,n[s]))}return r}function Id(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,gA(i,o,e))}return r}class Gg extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IA extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Fg();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=zg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Te())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,((n,r)=>wd(n,r)))&&Bs(this.baseMutations,e.baseMutations,((n,r)=>wd(n,r)))}}class Au{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return hA})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Au(e,n,r,s)}}/**
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
 */class AA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,be;function SA(t){switch(t){case H.OK:return fe(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function Kg(t){if(t===void 0)return Zn("GRPC error has no .code"),H.UNKNOWN;switch(t){case Ke.OK:return H.OK;case Ke.CANCELLED:return H.CANCELLED;case Ke.UNKNOWN:return H.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return H.INTERNAL;case Ke.UNAVAILABLE:return H.UNAVAILABLE;case Ke.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ke.NOT_FOUND:return H.NOT_FOUND;case Ke.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ke.ABORTED:return H.ABORTED;case Ke.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ke.DATA_LOSS:return H.DATA_LOSS;default:return fe(39323,{code:t})}}(be=Ke||(Ke={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CA(){return new TextEncoder}/**
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
 */const PA=new Sr([4294967295,4294967295],0);function bd(t){const e=CA().encode(t),n=new ug;return n.update(e),new Uint8Array(n.digest())}function Ad(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Sr([n,r],0),new Sr([s,i],0)]}class Ru{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ei(`Invalid padding: ${n}`);if(r<0)throw new Ei(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ei(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ei(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Sr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Sr.fromNumber(r)));return s.compare(PA)===1&&(s=new Sr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=bd(e),[r,s]=Ad(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ru(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=bd(e),[r,s]=Ad(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ei extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ol{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ol(de.min(),s,new $e(we),er(),Te())}}class fo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fo(r,n,Te(),Te(),Te())}}/**
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
 */class Yo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Qg{constructor(e,n){this.targetId=e,this.Ce=n}}class Yg{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rd{constructor(){this.ve=0,this.Fe=Sd(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe(38017,{changeType:i})}})),new fo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Sd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class kA{constructor(e){this.Ge=e,this.ze=new Map,this.je=er(),this.Je=Uo(),this.He=Uo(),this.Ye=new $e(we)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Pc(i))if(r===0){const o=new ae(i.path);this.et(n,o,vt.newNoDocument(o,de.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Mr(r).toUint8Array()}catch(c){if(c instanceof wg)return Fs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ru(o,s,i)}catch(c){return Fs(c instanceof Ei?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Pc(l.target)){const c=new ae(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,vt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Te();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ol(e,n,this.Ye,this.je,r);return this.je=er(),this.Je=Uo(),this.He=Uo(),this.Ye=new $e(we),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Rd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new et(we),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new et(we),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Rd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Uo(){return new $e(ae.comparator)}function Sd(){return new $e(ae.comparator)}const DA={asc:"ASCENDING",desc:"DESCENDING"},NA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OA={and:"AND",or:"OR"};class VA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dc(t,e){return t.useProto3Json||Za(e)?e:{value:e}}function wa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xA(t,e){return wa(t,e.toTimestamp())}function Tn(t){return Pe(!!t,49232),de.fromTimestamp((function(n){const r=xr(n);return new Be(r.seconds,r.nanos)})(t))}function Su(t,e){return Nc(t,e).canonicalString()}function Nc(t,e){const n=(function(s){return new je(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Xg(t){const e=je.fromString(t);return Pe(r_(e),10190,{key:e.toString()}),e}function Oc(t,e){return Su(t.databaseId,e.path)}function Yl(t,e){const n=Xg(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(e_(n))}function Zg(t,e){return Su(t.databaseId,e)}function MA(t){const e=Xg(t);return e.length===4?je.emptyPath():e_(e)}function Vc(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function e_(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Cd(t,e,n){return{name:Oc(t,e),fields:n.value.mapValue.fields}}function LA(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),ut.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ut.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?H.UNKNOWN:Kg(u.code);return new ne(f,u.message||"")})(o);n=new Yg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yl(t,r.document.name),i=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):de.min(),l=new qt({mapValue:{fields:r.document.fields}}),c=vt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Yo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yl(t,r.document),i=r.readTime?Tn(r.readTime):de.min(),o=vt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Yo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yl(t,r.document),i=r.removedTargetIds||[];n=new Yo([],i,s,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new RA(s,i),l=r.targetId;n=new Qg(l,o)}}return n}function UA(t,e){let n;if(e instanceof ho)n={update:Cd(t,e.key,e.value)};else if(e instanceof Gg)n={delete:Oc(t,e.key)};else if(e instanceof ds)n={update:Cd(t,e.key,e.data),updateMask:GA(e.fieldMask)};else{if(!(e instanceof IA))return fe(16599,{Vt:e.type});n={verify:Oc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof Xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ea)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw fe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:xA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe(27497)})(t,e.precondition)),n}function FA(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Tn(s.updateTime):Tn(i);return o.isEqual(de.min())&&(o=Tn(i)),new EA(o,s.transformResults||[])})(n,e)))):[]}function BA(t,e){return{documents:[Zg(t,e.path)]}}function jA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Zg(t,s);const i=(function(u){if(u.length!==0)return n_(Dn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:As(m.field),direction:qA(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Dc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function $A(t){let e=MA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=t_(p);return m instanceof Dn&&Dg(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(O){return new va(Rs(O.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Za(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,y=p.values||[];return new ya(y,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,y=p.values||[];return new ya(y,m)})(n.endAt)),iA(e,s,o,i,l,"F",c,u)}function HA(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function t_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rs(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rs(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ze.create(Rs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Dn.create(n.compositeFilter.filters.map((r=>t_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(n.compositeFilter.op))})(t):fe(30097,{filter:t})}function qA(t){return DA[t]}function zA(t){return NA[t]}function WA(t){return OA[t]}function As(t){return{fieldPath:t.canonicalString()}}function Rs(t){return ct.fromServerFormat(t.fieldPath)}function n_(t){return t instanceof Ze?(function(n){if(n.op==="=="){if(md(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NAN"}};if(pd(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(md(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NAN"}};if(pd(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(n.field),op:zA(n.op),value:n.value}}})(t):t instanceof Dn?(function(n){const r=n.getFilters().map((s=>n_(s)));return r.length===1?r[0]:{compositeFilter:{op:WA(n.op),filters:r}}})(t):fe(54877,{filter:t})}function GA(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function r_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=ut.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class KA{constructor(e){this.yt=e}}function QA(t){const e=$A({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
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
 */class YA{constructor(){this.Cn=new JA}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Vr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class JA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(je.comparator)).toArray()}}/**
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
 */const Pd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},s_=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(s_,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
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
 */class Hs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Hs(0)}static cr(){return new Hs(-1)}}/**
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
 */const kd="LruGarbageCollector",XA=1048576;function Dd([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class ZA{constructor(e){this.Ir=e,this.buffer=new et(Dd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Dd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class eR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(kd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ks(n)?Z(kd,"Ignoring IndexedDB error during garbage collection: ",n):await Gs(n)}await this.Vr(3e5)}))}}class tR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Xa.ce);const r=new ZA(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Pd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Is()<=Ee.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function nR(t,e){return new tR(t,e)}/**
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
 */class rR{constructor(){this.changes=new fs((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class iR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&xi(r.mutation,s,tn.empty(),Be.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Te()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Te()){const s=Yr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=vi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Te())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=er();const o=Vi(),l=(function(){return Vi()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ds)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),xi(f.mutation,u,f.mutation.getFieldMask(),Be.now())):o.set(u.key,tn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>l.set(u,new sR(f,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=Vi();let s=new $e(((o,l)=>o-l)),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||tn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=Fg();f.forEach((m=>{if(!i.has(m)){const y=zg(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Yr());let l=Ki,c=i;return o.next((u=>j.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Te()))).next((f=>({batchId:l,changes:Ug(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next((r=>{let s=vi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=vi();return this.indexManager.getCollectionParents(e,i).next((l=>j.forEach(l,(c=>{const u=(function(p,m){return new tl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))}));let l=vi();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&xi(f.mutation,u,tn.empty(),Be.now()),rl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class oR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Tn(s.createTime)}})(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:QA(s.bundledQuery),readTime:Tn(s.readTime)}})(n)),j.resolve()}}/**
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
 */class aR{constructor(){this.overlays=new $e(ae.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return j.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new ae(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Yr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return j.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AA(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class lR{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Cu{constructor(){this.Qr=new et(rt.$r),this.Ur=new et(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new rt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ae(new je([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ae(new je([])),r=new rt(n,e),s=new rt(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new rt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ae.comparator(e.key,n.key)||we(e.Yr,n.Yr)}static Kr(e,n){return we(e.Yr,n.Yr)||ae.comparator(e.key,n.key)}}/**
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
 */class cR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new et(rt.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new rt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?yu:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const l=this.Xr(o.Yr);i.push(l)})),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(we);return n.forEach((s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{r=r.add(l.Yr)}))})),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new rt(new ae(i),0);let l=new et(we);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)}),o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Pe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,(s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new rt(n,0),s=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class uR{constructor(e){this.ri=e,this.docs=(function(){return new $e(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))})),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=er();const o=n.path,l=new ae(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Lb(Mb(f),r)<=0||(s.has(f.key)||rl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe(9500)}ii(e,n){return j.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new hR(this)}getSize(e){return j.resolve(this.size)}}class hR extends rR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class fR{constructor(e){this.persistence=e,this.si=new fs((n=>wu(n)),Tu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new Cu,this.targetCount=0,this.ai=Hs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),j.waitFor(i).next((()=>s))}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
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
 */class i_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Xa(0),this.li=!1,this.li=!0,this.hi=new lR,this.referenceDelegate=e(this),this.Pi=new fR(this),this.indexManager=new YA,this.remoteDocumentCache=(function(s){return new uR(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new KA(n),this.Ii=new oR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new cR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new dR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return j.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class dR extends Fb{constructor(e){super(),this.currentSequenceNumber=e}}class Pu{constructor(e){this.persistence=e,this.Ri=new Cu,this.Vi=null}static mi(e){return new Pu(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,(r=>{const s=ae.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,de.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ta{constructor(e,n){this.persistence=e,this.pi=new fs((r=>$b(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=nR(this,n)}static mi(e,n){return new Ta(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return j.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?j.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((l=>{l||(r++,i.removeEntry(o,de.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Go(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ku{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ku(e,n.fromCache,r,s)}}/**
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
 */class pR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return iI()?8:Bb(It())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new pR;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Is()<=Ee.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Is()<=Ee.DEBUG&&Z("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Is()<=Ee.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):j.resolve())}ys(e,n){if(vd(n))return j.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=kc(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,kc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,r,s){return vd(n)||s.isEqual(de.min())?j.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(Is()<=Ee.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bs(n)),this.vs(e,o,n,xb(s,Ki)).next((l=>l)))}))}Ds(e,n){let r=new et(Mg(e));return n.forEach(((s,i)=>{rl(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Is()<=Ee.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",bs(n)),this.ps.getDocumentsMatchingQuery(e,n,Vr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Du="LocalStore",gR=3e8;class _R{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new $e(we),this.xs=new fs((i=>wu(i)),Tu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function yR(t,e,n,r){return new _R(t,e,n,r)}async function o_(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function vR(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let y=j.resolve();return m.forEach((O=>{y=y.next((()=>f.getEntry(c,O))).next((N=>{const k=u.docVersions.get(O);Pe(k!==null,48541),N.version.compareTo(k)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))}))})),y.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function a_(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function ER(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ut.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(N,k,L){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=gR?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(m,y,f)&&l.push(n.Pi.updateTargetData(i,y))}));let c=er(),u=Te();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(wR(i,o,e.documentUpdates).next((f=>{c=f.ks,u=f.qs}))),!r.isEqual(de.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return j.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function wR(t,e,n){let r=Te(),s=Te();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=er();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z(Du,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:s}}))}function TR(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=yu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function IR(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,j.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function xc(t,e,n){const r=pe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ks(o))throw o;Z(Du,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Nd(t,e,n){const r=pe(t);let s=de.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=pe(c),m=p.xs.get(f);return m!==void 0?j.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,wn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Te()))).next((l=>(bR(r,lA(e),l),{documents:l,Qs:i})))))}function bR(t,e,n){let r=t.Os.get(e)||de.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Od{constructor(){this.activeTargetIds=pA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AR{constructor(){this.Mo=new Od,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Od,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RR{Oo(e){}shutdown(){}}/**
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
 */const Vd="ConnectivityMonitor";class xd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(Vd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(Vd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fo=null;function Mc(){return Fo===null?Fo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Fo++,"0x"+Fo.toString(16)}/**
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
 */const Jl="RestConnection",SR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class CR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ga?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Mc(),l=this.zo(e,n.toUriEncodedString());Z(Jl,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),f=cs(u);return this.Jo(e,l,c,r,f).then((p=>(Z(Jl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Fs(Jl,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ws})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=SR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class PR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const mt="WebChannelConnection";class kR extends CR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Mc();return new Promise(((l,c)=>{const u=new hg;u.setWithCredentials(!0),u.listenOnce(fg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Wo.NO_ERROR:const p=u.getResponseJson();Z(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Wo.TIMEOUT:Z(mt,`RPC '${e}' ${o} timed out`),c(new ne(H.DEADLINE_EXCEEDED,"Request time out"));break;case Wo.HTTP_ERROR:const m=u.getStatus();if(Z(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const O=y?.error;if(O&&O.status&&O.message){const N=(function(L){const M=L.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(M)>=0?M:H.UNKNOWN})(O.status);c(new ne(N,O.message))}else c(new ne(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ne(H.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(mt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);Z(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Mc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mg(),l=pg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(mt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.I_(p);let m=!1,y=!1;const O=new PR({Yo:k=>{y?Z(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(Z(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(mt,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Zo:()=>p.close()}),N=(k,L,M)=>{k.listen(L,(S=>{try{M(S)}catch(C){setTimeout((()=>{throw C}),0)}}))};return N(p,yi.EventType.OPEN,(()=>{y||(Z(mt,`RPC '${e}' stream ${s} transport opened.`),O.o_())})),N(p,yi.EventType.CLOSE,(()=>{y||(y=!0,Z(mt,`RPC '${e}' stream ${s} transport closed`),O.a_(),this.E_(p))})),N(p,yi.EventType.ERROR,(k=>{y||(y=!0,Fs(mt,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),O.a_(new ne(H.UNAVAILABLE,"The operation could not be completed")))})),N(p,yi.EventType.MESSAGE,(k=>{if(!y){const L=k.data[0];Pe(!!L,16349);const M=L,S=M?.error||M[0]?.error;if(S){Z(mt,`RPC '${e}' stream ${s} received error:`,S);const C=S.status;let q=(function(_){const v=Ke[_];if(v!==void 0)return Kg(v)})(C),ee=S.message;q===void 0&&(q=H.INTERNAL,ee="Unknown error status: "+C+" with message "+S.message),y=!0,O.a_(new ne(q,ee)),p.close()}else Z(mt,`RPC '${e}' stream ${s} received:`,L),O.u_(L)}})),N(l,dg.STAT_EVENT,(k=>{k.stat===bc.PROXY?Z(mt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===bc.NOPROXY&&Z(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Xl(){return typeof document<"u"?document:null}/**
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
 */function al(t){return new VA(t,!0)}/**
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
 */class l_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Md="PersistentStream";class c_{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new l_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new ne(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return Z(Md,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(Z(Md,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class DR extends c_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=LA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Tn(o.readTime):de.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Vc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Pc(c)?{documents:BA(i,c)}:{query:jA(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Jg(i,o.resumeToken);const u=Dc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=wa(i,o.snapshotVersion.toTimestamp());const u=Dc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=HA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Vc(this.serializer),n.removeTarget=e,this.q_(n)}}class NR extends c_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=FA(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Vc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>UA(this.serializer,r)))};this.q_(n)}}/**
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
 */class OR{}class VR extends OR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Nc(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(H.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Nc(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(H.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class xR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Zn(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ss="RemoteStore";class MR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{ps(this)&&(Z(ss,"Restarting streams for network reachability change."),await(async function(c){const u=pe(c);u.Ea.add(4),await po(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ll(u)})(this))}))})),this.Ra=new xR(r,s)}}async function ll(t){if(ps(t))for(const e of t.da)await e(!0)}async function po(t){for(const e of t.da)await e(!1)}function u_(t,e){const n=pe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),xu(n)?Vu(n):Qs(n).O_()&&Ou(n,e))}function Nu(t,e){const n=pe(t),r=Qs(n);n.Ia.delete(e),r.O_()&&h_(n,e),n.Ia.size===0&&(r.O_()?r.L_():ps(n)&&n.Ra.set("Unknown"))}function Ou(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).Y_(e)}function h_(t,e){t.Va.Ue(e),Qs(t).Z_(e)}function Vu(t){t.Va=new kA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.Ra.ua()}function xu(t){return ps(t)&&!Qs(t).x_()&&t.Ia.size>0}function ps(t){return pe(t).Ea.size===0}function f_(t){t.Va=void 0}async function LR(t){t.Ra.set("Online")}async function UR(t){t.Ia.forEach(((e,n)=>{Ou(t,e)}))}async function FR(t,e){f_(t),xu(t)?(t.Ra.ha(e),Vu(t)):t.Ra.set("Unknown")}async function BR(t,e,n){if(t.Ra.set("Online"),e instanceof Yg&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){Z(ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ia(t,r)}else if(e instanceof Yo?t.Va.Ze(e):e instanceof Qg?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const r=await a_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),h_(i,c);const p=new wr(f.target,c,u,f.sequenceNumber);Ou(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){Z(ss,"Failed to raise snapshot:",r),await Ia(t,r)}}async function Ia(t,e,n){if(!Ks(e))throw e;t.Ea.add(1),await po(t),t.Ra.set("Offline"),n||(n=()=>a_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Z(ss,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ll(t)}))}function d_(t,e){return e().catch((n=>Ia(t,n,e)))}async function cl(t){const e=pe(t),n=Ur(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:yu;for(;jR(e);)try{const s=await TR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,$R(e,s)}catch(s){await Ia(e,s)}p_(e)&&m_(e)}function jR(t){return ps(t)&&t.Ta.length<10}function $R(t,e){t.Ta.push(e);const n=Ur(t);n.O_()&&n.X_&&n.ea(e.mutations)}function p_(t){return ps(t)&&!Ur(t).x_()&&t.Ta.length>0}function m_(t){Ur(t).start()}async function HR(t){Ur(t).ra()}async function qR(t){const e=Ur(t);for(const n of t.Ta)e.ea(n.mutations)}async function zR(t,e,n){const r=t.Ta.shift(),s=Au.from(r,e,n);await d_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await cl(t)}async function WR(t,e){e&&Ur(t).X_&&await(async function(r,s){if((function(o){return SA(o)&&o!==H.ABORTED})(s.code)){const i=r.Ta.shift();Ur(r).B_(),await d_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await cl(r)}})(t,e),p_(t)&&m_(t)}async function Ld(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),Z(ss,"RemoteStore received new credentials");const r=ps(n);n.Ea.add(3),await po(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ll(n)}async function GR(t,e){const n=pe(t);e?(n.Ea.delete(2),await ll(n)):e||(n.Ea.add(2),await po(n),n.Ra.set("Unknown"))}function Qs(t){return t.ma||(t.ma=(function(n,r,s){const i=pe(n);return i.sa(),new DR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:LR.bind(null,t),t_:UR.bind(null,t),r_:FR.bind(null,t),H_:BR.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),xu(t)?Vu(t):t.Ra.set("Unknown")):(await t.ma.stop(),f_(t))}))),t.ma}function Ur(t){return t.fa||(t.fa=(function(n,r,s){const i=pe(n);return i.sa(),new NR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:HR.bind(null,t),r_:WR.bind(null,t),ta:qR.bind(null,t),na:zR.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await cl(t)):(await t.fa.stop(),t.Ta.length>0&&(Z(ss,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class Mu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Mu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lu(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),Ks(t))return new ne(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ds{static emptySet(e){return new Ds(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=vi(),this.sortedSet=new $e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ud{constructor(){this.ga=new $e(ae.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class qs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new qs(e,n,Ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class KR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class QR{constructor(){this.queries=Fd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=Fd(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new ne(H.ABORTED,"Firestore shutting down"))}}function Fd(){return new fs((t=>xg(t)),nl)}async function YR(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new KR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Lu(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Uu(n)}async function JR(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XR(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Uu(n)}function ZR(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Uu(t){t.Ca.forEach((e=>{e.next()}))}var Lc,Bd;(Bd=Lc||(Lc={})).Ma="default",Bd.Cache="cache";class eS{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Lc.Cache}}/**
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
 */class g_{constructor(e){this.key=e}}class __{constructor(e){this.key=e}}class tS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=Mg(e),this.tu=new Ds(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Ud,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),y=rl(this.query,p)?p:null,O=!!m&&this.mutatedKeys.has(m.key),N=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;m&&y?m.data.isEqual(y.data)?O!==N&&(r.track({type:3,doc:y}),k=!0):this.su(m,y)||(r.track({type:2,doc:y}),k=!0,(c&&this.eu(y,c)>0||u&&this.eu(y,u)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),k=!0):m&&!y&&(r.track({type:1,doc:m}),k=!0,(c||u)&&(l=!0)),k&&(y?(o=o.add(y),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(y,O){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:k})}};return N(y)-N(O)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new qs(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ud,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new __(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new g_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return qs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Fu="SyncEngine";class nS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rS{constructor(e){this.key=e,this.hu=!1}}class sS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new fs((l=>xg(l)),nl),this.Iu=new Map,this.Eu=new Set,this.du=new $e(ae.comparator),this.Au=new Map,this.Ru=new Cu,this.Vu={},this.mu=new Map,this.fu=Hs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function iS(t,e,n=!0){const r=I_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await y_(r,e,n,!0),s}async function oS(t,e){const n=I_(t);await y_(n,e,!0,!1)}async function y_(t,e,n,r){const s=await IR(t.localStore,wn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await aS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&u_(t.remoteStore,s),l}async function aS(t,e,n,r,s){t.pu=(p,m,y)=>(async function(N,k,L,M){let S=k.view.ru(L);S.Cs&&(S=await Nd(N.localStore,k.query,!1).then((({documents:T})=>k.view.ru(T,S))));const C=M&&M.targetChanges.get(k.targetId),q=M&&M.targetMismatches.get(k.targetId)!=null,ee=k.view.applyChanges(S,N.isPrimaryClient,C,q);return $d(N,k.targetId,ee.au),ee.snapshot})(t,p,m,y);const i=await Nd(t.localStore,e,!0),o=new tS(e,i.Qs),l=o.ru(i.documents),c=fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);$d(t,n,u.au);const f=new nS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function lS(t,e,n){const r=pe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!nl(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Nu(r.remoteStore,s.targetId),Uc(r,s.targetId)})).catch(Gs)):(Uc(r,s.targetId),await xc(r.localStore,s.targetId,!0))}async function cS(t,e){const n=pe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Nu(n.remoteStore,r.targetId))}async function uS(t,e,n){const r=_S(t);try{const s=await(function(o,l){const c=pe(o),u=Be.now(),f=l.reduce(((y,O)=>y.add(O.key)),Te());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let O=er(),N=Te();return c.Ns.getEntries(y,f).next((k=>{O=k,O.forEach(((L,M)=>{M.isValidDocument()||(N=N.add(L))}))})).next((()=>c.localDocuments.getOverlayedDocuments(y,O))).next((k=>{p=k;const L=[];for(const M of l){const S=TA(M,p.get(M.key).overlayedDocument);S!=null&&L.push(new ds(M.key,S,Cg(S.value.mapValue),Wn.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,L,l)})).next((k=>{m=k;const L=k.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(y,k.batchId,L)}))})).then((()=>({batchId:m.batchId,changes:Ug(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new $e(we)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await mo(r,s.changes),await cl(r.remoteStore)}catch(s){const i=Lu(s,"Failed to persist write");n.reject(i)}}async function v_(t,e){const n=pe(t);try{const r=await ER(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Pe(o.hu,14607):s.removedDocuments.size>0&&(Pe(o.hu,42227),o.hu=!1))})),await mo(n,r,e)}catch(r){await Gs(r)}}function jd(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=pe(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&Uu(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hS(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new $e(ae.comparator);o=o.insert(i,vt.newNoDocument(i,de.min()));const l=Te().add(i),c=new ol(de.min(),new Map,new $e(we),o,l);await v_(r,c),r.du=r.du.remove(i),r.Au.delete(e),Bu(r)}else await xc(r.localStore,e,!1).then((()=>Uc(r,e,n))).catch(Gs)}async function fS(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await vR(n.localStore,e);w_(n,r,null),E_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mo(n,s)}catch(s){await Gs(s)}}async function dS(t,e,n){const r=pe(t);try{const s=await(function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Pe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);w_(r,e,n),E_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mo(r,s)}catch(s){await Gs(s)}}function E_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function w_(t,e,n){const r=pe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Uc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||T_(t,r)}))}function T_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Nu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Bu(t))}function $d(t,e,n){for(const r of n)r instanceof g_?(t.Ru.addReference(r.key,e),pS(t,r)):r instanceof __?(Z(Fu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||T_(t,r.key)):fe(19791,{wu:r})}function pS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Z(Fu,"New document in limbo: "+n),t.Eu.add(r),Bu(t))}function Bu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ae(je.fromString(e)),r=t.fu.next();t.Au.set(r,new rS(n)),t.du=t.du.insert(n,r),u_(t.remoteStore,new wr(wn(Iu(n.path)),r,"TargetPurposeLimboResolution",Xa.ce))}}async function mo(t,e,n){const r=pe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=ku.As(c.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(c,u){const f=pe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>j.forEach(u,(m=>j.forEach(m.Es,(y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y))).next((()=>j.forEach(m.ds,(y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))))))}catch(p){if(!Ks(p))throw p;Z(Du,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=f.Ms.get(m),O=y.snapshotVersion,N=y.withLastLimboFreeSnapshotVersion(O);f.Ms=f.Ms.insert(m,N)}}})(r.localStore,i))}async function mS(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){Z(Fu,"User change. New user:",e.toKey());const r=await o_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new ne(H.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mo(n,r.Ls)}}function gS(t,e){const n=pe(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function I_(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=v_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hS.bind(null,e),e.Pu.H_=XR.bind(null,e.eventManager),e.Pu.yu=ZR.bind(null,e.eventManager),e}function _S(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dS.bind(null,e),e}class ba{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=al(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return yR(this.persistence,new mR,e.initialUser,this.serializer)}Cu(e){return new i_(Pu.mi,this.serializer)}Du(e){return new AR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ba.provider={build:()=>new ba};class yS extends ba{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Pe(this.persistence.referenceDelegate instanceof Ta,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new eR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new i_((r=>Ta.mi(r,n)),this.serializer)}}class Fc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mS.bind(null,this.syncEngine),await GR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new QR})()}createDatastore(e){const n=al(e.databaseInfo.databaseId),r=(function(i){return new kR(i)})(e.databaseInfo);return(function(i,o,l,c){return new VR(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new MR(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>jd(this.syncEngine,n,0)),(function(){return xd.v()?new xd:new RR})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new sS(s,i,o,l,c,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=pe(n);Z(ss,"RemoteStore shutting down."),r.Ea.add(5),await po(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Fc.provider={build:()=>new Fc};/**
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
 */class vS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Fr="FirestoreClient";class ES{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=gu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Z(Fr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Z(Fr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Zl(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Fr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await o_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Hd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wS(t);Z(Fr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Ld(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Ld(e.remoteStore,s))),t._onlineComponents=e}async function wS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Fr,"Using user provided OfflineComponentProvider");try{await Zl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Fs("Error using user provided cache. Falling back to memory cache: "+n),await Zl(t,new ba)}}else Z(Fr,"Using default OfflineComponentProvider"),await Zl(t,new yS(void 0));return t._offlineComponents}async function b_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Fr,"Using user provided OnlineComponentProvider"),await Hd(t,t._uninitializedComponentsProvider._online)):(Z(Fr,"Using default OnlineComponentProvider"),await Hd(t,new Fc))),t._onlineComponents}function TS(t){return b_(t).then((e=>e.syncEngine))}async function IS(t){const e=await b_(t),n=e.eventManager;return n.onListen=iS.bind(null,e.syncEngine),n.onUnlisten=lS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cS.bind(null,e.syncEngine),n}function bS(t,e,n={}){const r=new Cr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new vS({next:m=>{f.Nu(),o.enqueueAndForget((()=>JR(i,p)));const y=m.docs.has(l);!y&&m.fromCache?u.reject(new ne(H.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new ne(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new eS(Iu(l.path),f,{includeMetadataChanges:!0,qa:!0});return YR(i,p)})(await IS(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function A_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const qd=new Map;/**
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
 */const R_="firestore.googleapis.com",zd=!0;class Wd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=R_,this.ssl=zd}else this.host=e.host,this.ssl=e.ssl??zd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=s_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<XA)throw new ne(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ju{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ib;switch(r.type){case"firstParty":return new Sb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=qd.get(n);r&&(Z("ComponentProvider","Removing Datastore"),qd.delete(n),r.terminate())})(this),Promise.resolve()}}function AS(t,e,n,r={}){t=Gi(t,ju);const s=cs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(uu(`https://${l}`),hu("Firestore",!0)),i.host!==R_&&i.host!==l&&Fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!ts(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=_t.MOCK_USER;else{u=sg(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ne(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new _t(p)}t._authCredentials=new bb(new _g(u,f))}}/**
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
 */class $u{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $u(this.firestore,e,this._query)}}class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new to(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(uo(n,st._jsonSchema))return new st(e,r||null,new ae(je.fromString(n.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:Qe("string",st._jsonSchemaVersion),referencePath:Qe("string")};class to extends $u{constructor(e,n,r){super(e,n,Iu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new ae(e))}withConverter(e){return new to(this.firestore,e,this._path)}}function Ut(t,e,...n){if(t=Ht(t),arguments.length===1&&(e=gu.newId()),Ob("doc","path",e),t instanceof ju){const r=je.fromString(e,...n);return od(r),new st(t,null,new ae(r))}{if(!(t instanceof st||t instanceof to))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return od(r),new st(t.firestore,t instanceof to?t.converter:null,new ae(r))}}/**
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
 */const Gd="AsyncQueue";class Kd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new l_(this,"async_queue_retry"),this._c=()=>{const r=Xl();r&&Z(Gd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Xl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Cr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ks(e))throw e;Z(Gd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Zn("INTERNAL UNHANDLED ERROR: ",Qd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Mu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&fe(47125,{Pc:Qd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Qd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Hu extends ju{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Kd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kd(e),this._firestoreClient=void 0,await e}}}function RS(t,e){const n=typeof t=="object"?t:pu(),r=typeof t=="string"?t:ga,s=Ja(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tg("firestore");i&&AS(s,...i)}return s}function S_(t){if(t._terminated)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||SS(t),t._firestoreClient}function SS(t){const e=t._freezeSettings(),n=(function(s,i,o,l){return new zb(s,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,A_(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ES(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(ut.fromBase64String(e))}catch(n){throw new ne(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(uo(e,zt._jsonSchema))return zt.fromBase64String(e.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:Qe("string",zt._jsonSchemaVersion),bytes:Qe("string")};/**
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
 */class qu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zu{constructor(e){this._methodName=e}}/**
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
 */class In{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:In._jsonSchemaVersion}}static fromJSON(e){if(uo(e,In._jsonSchema))return new In(e.latitude,e.longitude)}}In._jsonSchemaVersion="firestore/geoPoint/1.0",In._jsonSchema={type:Qe("string",In._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
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
 */class bn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(uo(e,bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new bn(e.vectorValues);throw new ne(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bn._jsonSchemaVersion="firestore/vectorValue/1.0",bn._jsonSchema={type:Qe("string",bn._jsonSchemaVersion),vectorValues:Qe("object")};/**
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
 */const CS=/^__.*__$/;class PS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new ho(e,this.data,n,this.fieldTransforms)}}function C_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:t})}}class Wu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Wu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Aa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(C_(this.Ac)&&CS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class kS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||al(e)}Cc(e,n,r,s=!1){return new Wu({Ac:e,methodName:n,Dc:r,path:ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function DS(t){const e=t._freezeSettings(),n=al(t._databaseId);return new kS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function NS(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);N_("Data must be an object, but it was:",o,r);const l=k_(r,o);let c,u;if(i.merge)c=new tn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=OS(e,p,n);if(!o.contains(m))throw new ne(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xS(f,m)||f.push(m)}c=new tn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new PS(new qt(l),c,u)}class Gu extends zu{_toFieldTransform(e){return new yA(e.path,new Xi)}isEqual(e){return e instanceof Gu}}function P_(t,e){if(D_(t=Ht(t)))return N_("Unsupported field value:",e,t),k_(t,e);if(t instanceof zu)return(function(r,s){if(!C_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=P_(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:wa(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wa(s.serializer,i)}}if(r instanceof In)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:Jg(s.serializer,r._byteString)};if(r instanceof st){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Su(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof bn)return(function(o,l){return{mapValue:{fields:{[Rg]:{stringValue:Sg},[_a]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return bu(l.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${_u(r)}`)})(t,e)}function k_(t,e){const n={};return Eg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(t,((r,s)=>{const i=P_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function D_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof In||t instanceof zt||t instanceof st||t instanceof zu||t instanceof bn)}function N_(t,e,n){if(!D_(n)||!yg(n)){const r=_u(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function OS(t,e,n){if((e=Ht(e))instanceof qu)return e._internalPath;if(typeof e=="string")return O_(t,e);throw Aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const VS=new RegExp("[~\\*/\\[\\]]");function O_(t,e,n){if(e.search(VS)>=0)throw Aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qu(...e.split("."))._internalPath}catch{throw Aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Aa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(H.INVALID_ARGUMENT,l+t+c)}function xS(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class V_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(x_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MS extends V_{data(){return super.data()}}function x_(t,e){return typeof e=="string"?O_(t,e):e instanceof qu?e._internalPath:e._delegate._internalPath}class LS{convertValue(e,n="none"){switch(Lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hs(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[_a].arrayValue?.values?.map((r=>We(r.doubleValue)));return new bn(n)}convertGeoPoint(e){return new In(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=el(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qi(e));default:return null}}convertTimestamp(e){const n=xr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Pe(r_(r),9688,{name:e});const s=new Yi(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||Zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function US(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zr extends V_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(x_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Zr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zr._jsonSchema={type:Qe("string",Zr._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Jo extends Zr{data(e={}){return super.data(e)}}class Mi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new wi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Jo(this._firestore,this._userDataWriter,r.key,r,new wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:FS(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Mi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function FS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}/**
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
 */function Li(t){t=Gi(t,st);const e=Gi(t.firestore,Hu);return bS(S_(e),t._key).then((n=>$S(e,t,n)))}Mi._jsonSchemaVersion="firestore/querySnapshot/1.0",Mi._jsonSchema={type:Qe("string",Mi._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class BS extends LS{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function Gn(t,e,n){t=Gi(t,st);const r=Gi(t.firestore,Hu),s=US(t.converter,e,n);return jS(r,[NS(DS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wn.none())])}function jS(t,e){return(function(r,s){const i=new Cr;return r.asyncQueue.enqueueAndForget((async()=>uS(await TS(r),s,i))),i.promise})(S_(t),e)}function $S(t,e,n){const r=n.docs.get(e._key),s=new BS(t);return new Zr(t,s,e._key,r,new wi(n.hasPendingWrites,n.fromCache),e.converter)}function An(){return new Gu("serverTimestamp")}(function(e,n=!0){(function(s){Ws=s})(us),ns(new Or("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Hu(new Ab(r.getProvider("auth-internal")),new Cb(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),En(nd,rd,e),En(nd,rd,"esm2020")})();var HS="firebase",qS="12.4.0";/**
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
 */En(HS,qS,"app");function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zS=M_,L_=new lo("auth","Firebase",M_());/**
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
 */const Ra=new fu("@firebase/auth");function WS(t,...e){Ra.logLevel<=Ee.WARN&&Ra.warn(`Auth (${us}): ${t}`,...e)}function Xo(t,...e){Ra.logLevel<=Ee.ERROR&&Ra.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw Qu(t,...e)}function an(t,...e){return Qu(t,...e)}function Ku(t,e,n){const r={...zS(),[e]:n};return new lo("auth","Firebase",r).create(e,{appName:t.name})}function Kn(t){return Ku(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function U_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),Ku(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L_.create(t,...e)}function he(t,e,...n){if(!t)throw Qu(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xo(e),new Error(e)}function tr(t,e){t||Hn(e)}/**
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
 */function Bc(){return typeof self<"u"&&self.location?.href||""}function GS(){return Yd()==="http:"||Yd()==="https:"}function Yd(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function KS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GS()||nI()||"connection"in navigator)?navigator.onLine:!0}function QS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class go{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=ZT()||rI()}get(){return KS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yu(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class F_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const YS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],XS=new go(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function sr(t,e,n,r,s={}){return B_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=co({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return tI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&cs(t.emulatorConfig.host)&&(u.credentials="include"),F_.fetch()(await j_(t,t.config.apiHost,n,l),u)})}async function B_(t,e,n){t._canInitEmulator=!1;const r={...YS,...e};try{const s=new eC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Bo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Bo(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ku(t,f,u);Yt(t,f)}}catch(s){if(s instanceof On)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function _o(t,e,n,r,s={}){const i=await sr(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function j_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Yu(t.config,s):`${t.config.apiScheme}://${s}`;return JS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function ZS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),XS.get())})}}function Bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Jd(t){return t!==void 0&&t.enterprise!==void 0}class tC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nC(t,e){return sr(t,"GET","/v2/recaptchaConfig",rr(t,e))}/**
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
 */async function rC(t,e){return sr(t,"POST","/v1/accounts:delete",e)}async function Sa(t,e){return sr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sC(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),s=Ju(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ui(ec(s.auth_time)),issuedAtTime:Ui(ec(s.iat)),expirationTime:Ui(ec(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ec(t){return Number(t)*1e3}function Ju(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zm(n);return s?JSON.parse(s):(Xo("Failed to decode base64 JWT payload"),null)}catch(s){return Xo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Xd(t){const e=Ju(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function no(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&iC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ca(t){const e=t.auth,n=await t.getIdToken(),r=await no(t,Sa(e,{idToken:n}));he(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?$_(s.providerUserInfo):[],o=lC(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function aC(t){const e=Ht(t);await Ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function cC(t,e){const n=await B_(t,{},async()=>{const r=co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await j_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&cs(t.emulatorConfig.host)&&(c.credentials="include"),F_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uC(t,e){return sr(t,"POST","/v2/accounts:revokeToken",rr(t,e))}/**
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
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Xd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ns;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
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
 */function dr(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new oC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await no(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sC(this,e)}reload(){return aC(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await no(this,rC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:O,stsTokenManager:N}=n;he(p&&N,e,"internal-error");const k=Ns.fromJSON(this.name,N);he(typeof p=="string",e,"internal-error"),dr(r,e.name),dr(s,e.name),he(typeof m=="boolean",e,"internal-error"),he(typeof y=="boolean",e,"internal-error"),dr(i,e.name),dr(o,e.name),dr(l,e.name),dr(c,e.name),dr(u,e.name),dr(f,e.name);const L=new nn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:k,createdAt:u,lastLoginAt:f});return O&&Array.isArray(O)&&(L.providerData=O.map(M=>({...M}))),c&&(L._redirectEventId=c),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ns;s.updateFromServerResponse(n);const i=new nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ca(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Ns;l.updateFromIdToken(r);const c=new nn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const Zd=new Map;function qn(t){tr(t instanceof Function,"Expected a class definition");let e=Zd.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zd.set(t,e),e)}/**
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
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const ep=H_;/**
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
 */function Zo(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Sa(this.auth,{idToken:e}).catch(()=>{});return n?nn._fromGetAccountInfoResponse(this.auth,n,e):null}return nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(qn(ep),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||qn(ep);const o=Zo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Sa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await nn._fromGetAccountInfoResponse(e,m,f)}else p=nn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Os(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Os(i,e,r))}}/**
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
 */function tp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q_(e))return"Blackberry";if(Y_(e))return"Webos";if(z_(e))return"Safari";if((e.includes("chrome/")||W_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function q_(t=It()){return/firefox\//i.test(t)}function z_(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W_(t=It()){return/crios\//i.test(t)}function G_(t=It()){return/iemobile/i.test(t)}function K_(t=It()){return/android/i.test(t)}function Q_(t=It()){return/blackberry/i.test(t)}function Y_(t=It()){return/webos/i.test(t)}function Xu(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hC(t=It()){return Xu(t)&&!!window.navigator?.standalone}function fC(){return sI()&&document.documentMode===10}function J_(t=It()){return Xu(t)||K_(t)||Y_(t)||Q_(t)||/windows phone/i.test(t)||G_(t)}/**
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
 */function X_(t,e=[]){let n;switch(t){case"Browser":n=tp(It());break;case"Worker":n=`${tp(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class dC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function pC(t,e={}){return sr(t,"GET","/v2/passwordPolicy",rr(t,e))}/**
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
 */const mC=6;class gC{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??mC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class _C{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new np(this),this.idTokenSubscription=new np(this),this.beforeStateQueue=new dC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sa(this,{idToken:e}),r=await nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Dt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ca(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Kn(this));const n=e?Ht(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pC(this),n=new gC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uC(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&WS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ir(t){return Ht(t)}class np{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yC(t){ul=t}function Z_(t){return ul.loadJS(t)}function vC(){return ul.recaptchaEnterpriseScript}function EC(){return ul.gapiScript}function wC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class TC{constructor(){this.enterprise=new IC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class IC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const bC="recaptcha-enterprise",ey="NO_RECAPTCHA";class AC{constructor(e){this.type=bC,this.auth=ir(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{nC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new tC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Jd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ey)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new TC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Jd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=vC();c.length!==0&&(c+=l),Z_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function rp(t,e,n,r=!1,s=!1){const i=new AC(t);let o;if(s)o=ey;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Pa(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await rp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await rp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function RC(t,e){const n=Ja(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ts(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function SC(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(qn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function CC(t,e,n){const r=ir(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ty(e),{host:o,port:l}=PC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(ts(u,r.config.emulator)&&ts(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,cs(o)?(uu(`${i}//${o}${c}`),hu("Auth",!0)):kC()}function ty(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PC(t){const e=ty(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:sp(o)}}}function sp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Zu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function DC(t,e){return sr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NC(t,e){return _o(t,"POST","/v1/accounts:signInWithPassword",rr(t,e))}async function OC(t,e){return sr(t,"POST","/v1/accounts:sendOobCode",rr(t,e))}async function VC(t,e){return OC(t,e)}/**
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
 */async function xC(t,e){return _o(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}async function MC(t,e){return _o(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}/**
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
 */class ro extends Zu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ro(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ro(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pa(e,n,"signInWithPassword",NC);case"emailLink":return xC(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pa(e,r,"signUpPassword",DC);case"emailLink":return MC(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vs(t,e){return _o(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
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
 */const LC="http://localhost";class is extends Zu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:LC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=co(n)}return e}}/**
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
 */function UC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FC(t){const e=gi(_i(t)).link,n=e?gi(_i(e)).deep_link_id:null,r=gi(_i(t)).deep_link_id;return(r?gi(_i(r)).link:null)||r||n||e||t}class eh{constructor(e){const n=gi(_i(e)),r=n.apiKey??null,s=n.oobCode??null,i=UC(n.mode??null);he(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=FC(e);try{return new eh(n)}catch{return null}}}/**
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
 */class Ys{constructor(){this.providerId=Ys.PROVIDER_ID}static credential(e,n){return ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=eh.parseLink(n);return he(r,"argument-error"),ro._fromEmailAndCode(e,r.code,r.tenantId)}}Ys.PROVIDER_ID="password";Ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yo extends hl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yr extends yo{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
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
 */class $n extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class vr extends yo{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
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
 */class Er extends yo{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
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
 */async function BC(t,e){return _o(t,"POST","/v1/accounts:signUp",rr(t,e))}/**
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
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nn._fromIdTokenResponse(e,r,s),o=ip(r);return new os({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ip(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ip(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ka extends On{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ka(e,n,r,s)}}function ny(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ka._fromErrorAndOperation(t,i,e,r):i})}async function jC(t,e,n=!1){const r=await no(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
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
 */async function $C(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(Kn(r));const s="reauthenticate";try{const i=await no(t,ny(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Ju(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),os._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function ry(t,e,n=!1){if(Dt(t.app))return Promise.reject(Kn(t));const r="signIn",s=await ny(t,r,e),i=await os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function HC(t,e){return ry(ir(t),e)}/**
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
 */async function sy(t){const e=ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qC(t,e,n){const r=ir(t);await Pa(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",VC)}async function zC(t,e,n){if(Dt(t.app))return Promise.reject(Kn(t));const r=ir(t),o=await Pa(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&sy(t),c}),l=await os._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function WC(t,e,n){return Dt(t.app)?Promise.reject(Kn(t)):HC(Ht(t),Ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sy(t),r})}function GC(t,e,n,r){return Ht(t).onIdTokenChanged(e,n,r)}function KC(t,e,n){return Ht(t).beforeAuthStateChanged(e,n)}const Da="__sak";/**
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
 */class iy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Da,"1"),this.storage.removeItem(Da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const QC=1e3,YC=10;class oy extends iy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=J_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,YC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oy.type="LOCAL";const JC=oy;/**
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
 */class ay extends iy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ay.type="SESSION";const ly=ay;/**
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
 */function XC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await XC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fl.receivers=[];/**
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
 */function th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=th("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function eP(t){Rn().location.href=t}/**
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
 */function cy(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function tP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nP(){return navigator?.serviceWorker?.controller||null}function rP(){return cy()?self:null}/**
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
 */const uy="firebaseLocalStorageDb",sP=1,Na="firebaseLocalStorage",hy="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dl(t,e){return t.transaction([Na],e?"readwrite":"readonly").objectStore(Na)}function iP(){const t=indexedDB.deleteDatabase(uy);return new vo(t).toPromise()}function $c(){const t=indexedDB.open(uy,sP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Na,{keyPath:hy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Na)?e(r):(r.close(),await iP(),e(await $c()))})})}async function op(t,e,n){const r=dl(t,!0).put({[hy]:e,value:n});return new vo(r).toPromise()}async function oP(t,e){const n=dl(t,!1).get(e),r=await new vo(n).toPromise();return r===void 0?null:r.value}function ap(t,e){const n=dl(t,!0).delete(e);return new vo(n).toPromise()}const aP=800,lP=3;class fy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fl._getInstance(rP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await tP(),!this.activeServiceWorker)return;this.sender=new ZC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await op(e,Da,"1"),await ap(e,Da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>op(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=dl(s,!1).getAll();return new vo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fy.type="LOCAL";const cP=fy;new go(3e4,6e4);/**
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
 */function nh(t,e){return e?qn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class rh extends Zu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uP(t){return ry(t.auth,new rh(t),t.bypassAuthState)}function hP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),$C(n,new rh(t),t.bypassAuthState)}async function fP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),jC(n,new rh(t),t.bypassAuthState)}/**
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
 */class dy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uP;case"linkViaPopup":case"linkViaRedirect":return fP;case"reauthViaPopup":case"reauthViaRedirect":return hP;default:Yt(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dP=new go(2e3,1e4);async function pP(t,e,n){if(Dt(t.app))return Promise.reject(an(t,"operation-not-supported-in-this-environment"));const r=ir(t);U_(t,e,hl);const s=nh(r,n);return new Tr(r,"signInViaPopup",e,s).executeNotNull()}async function mP(t,e,n){const r=Ht(t);U_(r.auth,e,hl);const s=nh(r.auth,n);return new Tr(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Tr extends dy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dP.get())};e()}}Tr.currentPopupAction=null;/**
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
 */const gP="pendingRedirect",ea=new Map;class _P extends dy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ea.get(this.auth._key());if(!e){try{const r=await yP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ea.set(this.auth._key(),e)}return this.bypassAuthState||ea.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yP(t,e){const n=wP(e),r=EP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function vP(t,e){ea.set(t._key(),e)}function EP(t){return qn(t._redirectPersistence)}function wP(t){return Zo(gP,t.config.apiKey,t.name)}async function TP(t,e,n=!1){if(Dt(t.app))return Promise.reject(Kn(t));const r=ir(t),s=nh(r,e),o=await new _P(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const IP=600*1e3;class bP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!py(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(an(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IP&&this.cachedEventUids.clear(),this.cachedEventUids.has(lp(e))}saveEventToCache(e){this.cachedEventUids.add(lp(e)),this.lastProcessedEventTime=Date.now()}}function lp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function py({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function AP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return py(t);default:return!1}}/**
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
 */async function RP(t,e={}){return sr(t,"GET","/v1/projects",e)}/**
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
 */const SP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CP=/^https?/;async function PP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RP(t);for(const n of e)try{if(kP(n))return}catch{}Yt(t,"unauthorized-domain")}function kP(t){const e=Bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CP.test(n))return!1;if(SP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const DP=new go(3e4,6e4);function cp(){const t=Rn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NP(t){return new Promise((e,n)=>{function r(){cp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cp(),n(an(t,"network-request-failed"))},timeout:DP.get()})}if(Rn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Rn().gapi?.load)r();else{const s=wC("iframefcb");return Rn()[s]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},Z_(`${EC()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ta=null,e})}let ta=null;function OP(t){return ta=ta||NP(t),ta}/**
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
 */const VP=new go(5e3,15e3),xP="__/auth/iframe",MP="emulator/auth/iframe",LP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FP(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yu(e,MP):`https://${t.config.authDomain}/${xP}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=UP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${co(r).slice(1)}`}async function BP(t){const e=await OP(t),n=Rn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:FP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},VP.get());function c(){Rn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const jP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$P=500,HP=600,qP="_blank",zP="http://localhost";class up{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WP(t,e,n,r=$P,s=HP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...jP,width:r.toString(),height:s.toString(),top:i,left:o},u=It().toLowerCase();n&&(l=W_(u)?qP:n),q_(u)&&(e=e||zP,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[y,O])=>`${m}${y}=${O},`,"");if(hC(u)&&l!=="_self")return GP(e||"",l),new up(null);const p=window.open(e||"",l,f);he(p,t,"popup-blocked");try{p.focus()}catch{}return new up(p)}function GP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const KP="__/auth/handler",QP="emulator/auth/handler",YP=encodeURIComponent("fac");async function hp(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof hl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof yo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${YP}=${encodeURIComponent(c)}`:"";return`${JP(t)}?${co(l).slice(1)}${u}`}function JP({config:t}){return t.emulator?Yu(t,QP):`https://${t.authDomain}/${KP}`}/**
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
 */const tc="webStorageSupport";class XP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ly,this._completeRedirectFn=TP,this._overrideRedirectResult=vP}async _openPopup(e,n,r,s){tr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await hp(e,n,r,Bc(),s);return WP(e,i,th())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await hp(e,n,r,Bc(),s);return eP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BP(e),r=new bP(e);return n.register("authEvent",s=>(he(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tc,{type:tc},s=>{const i=s?.[0]?.[tc];i!==void 0&&n(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J_()||z_()||Xu()}}const ZP=XP;var fp="@firebase/auth",dp="1.11.0";/**
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
 */class e0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function t0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n0(t){ns(new Or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X_(t)},u=new _C(r,s,i,c);return SC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new Or("auth-internal",e=>{const n=ir(e.getProvider("auth").getImmediate());return(r=>new e0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(fp,dp,t0(t)),En(fp,dp,"esm2020")}/**
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
 */const r0=300,s0=rg("authIdTokenMaxAge")||r0;let pp=null;const i0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>s0)return;const s=n?.token;pp!==s&&(pp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pl(t=pu()){const e=Ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RC(t,{popupRedirectResolver:ZP,persistence:[cP,JC,ly]}),r=rg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=i0(i.toString());KC(n,o,()=>o(n.currentUser)),GC(n,l=>o(l))}}const s=eg("auth");return s&&CC(n,`http://${s}`),n}function o0(){return document.getElementsByTagName("head")?.[0]??document}yC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",o0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n0("Browser");/**
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
 */const my="firebasestorage.googleapis.com",a0="storageBucket",l0=120*1e3,c0=600*1e3;/**
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
 */class Vn extends On{constructor(e,n,r=0){super(nc(e),`Firebase Storage: ${n} (${nc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Nn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Nn||(Nn={}));function nc(t){return"storage/"+t}function u0(){const t="An unknown error occurred, please check the error payload for server response.";return new Vn(Nn.UNKNOWN,t)}function h0(){return new Vn(Nn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function f0(){return new Vn(Nn.CANCELED,"User canceled the upload/download.")}function d0(t){return new Vn(Nn.INVALID_URL,"Invalid URL '"+t+"'.")}function p0(t){return new Vn(Nn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function mp(t){return new Vn(Nn.INVALID_ARGUMENT,t)}function gy(){return new Vn(Nn.APP_DELETED,"The Firebase app was deleted.")}function m0(t){return new Vn(Nn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw p0(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),O={bucket:1,path:3},N=n===my?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",L=new RegExp(`^https?://${N}/${s}/${k}`,"i"),S=[{regex:l,indices:c,postModify:i},{regex:y,indices:O,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<S.length;C++){const q=S[C],ee=q.regex.exec(e);if(ee){const T=ee[q.indices.bucket];let _=ee[q.indices.path];_||(_=""),r=new rn(T,_),q.postModify(r);break}}if(r==null)throw d0(e);return r}}class g0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function _0(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...k){u||(u=!0,e.apply(null,k))}function p(k){s=setTimeout(()=>{s=null,t(y,c())},k)}function m(){i&&clearTimeout(i)}function y(k,...L){if(u){m();return}if(k){m(),f.call(null,k,...L);return}if(c()||o){m(),f.call(null,k,...L);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,p(S)}let O=!1;function N(k){O||(O=!0,m(),!u&&(s!==null?(k||(l=2),clearTimeout(s),p(0)):k||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function y0(t){t(!1)}/**
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
 */function v0(t){return t!==void 0}function gp(t,e,n,r){if(r<e)throw mp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw mp(`Invalid value for '${t}'. Expected ${n} or less.`)}function E0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Oa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Oa||(Oa={}));/**
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
 */function w0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class T0{constructor(e,n,r,s,i,o,l,c,u,f,p,m=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,N)=>{this.resolve_=O,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new jo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Oa.NO_ERROR,c=i.getStatus();if(!l||w0(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Oa.ABORT;r(!1,new jo(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new jo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());v0(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=u0();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?gy():f0();o(c)}else{const c=h0();o(c)}};this.canceled_?n(!1,new jo(!1,null,!0)):this.backoffId_=_0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&y0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class jo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function I0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function b0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function A0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function R0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function S0(t,e,n,r,s,i,o=!0,l=!1){const c=E0(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return A0(f,e),I0(f,n),b0(f,i),R0(f,r),new T0(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function C0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function P0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Va{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Va(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return P0(this._location.path)}get storage(){return this._service}get parent(){const e=C0(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new Va(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw m0(e)}}function _p(t,e){const n=e?.[a0];return n==null?null:rn.makeFromBucketSpec(n,t)}function k0(t,e,n,r={}){t.host=`${e}:${n}`;const s=cs(e);s&&(uu(`https://${t.host}/b`),hu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:sg(i,t.app.options.projectId))}class D0{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=my,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l0,this._maxUploadRetryTime=c0,this._requests=new Set,s!=null?this._bucket=rn.makeFromBucketSpec(s,this._host):this._bucket=_p(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=_p(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Va(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new g0(gy());{const o=S0(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const yp="@firebase/storage",vp="0.14.0";/**
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
 */const _y="storage";function N0(t=pu(),e){t=Ht(t);const r=Ja(t,_y).getImmediate({identifier:e}),s=tg("storage");return s&&O0(r,...s),r}function O0(t,e,n,r={}){k0(t,e,n,r)}function V0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new D0(n,r,s,e,us)}function x0(){ns(new Or(_y,V0,"PUBLIC").setMultipleInstances(!0)),En(yp,vp,""),En(yp,vp,"esm2020")}x0();const M0={apiKey:"AIzaSyA88mxzUStbuMFKNr9Q0OODtHXmpyuqvBY",authDomain:"findyourfit-93e9f.firebaseapp.com",projectId:"findyourfit-93e9f",storageBucket:"findyourfit-93e9f.firebasestorage.app",messagingSenderId:"715690823951",appId:"1:715690823951:web:f3af86677f7d990c55ae7a",measurementId:"G-2GTC9GRYRL"},sh=ag(M0),Ft=RS(sh),zn=pl(sh);N0(sh);const cn=Ow("user",{state:()=>({userData:null,moodData:null,journalData:null}),actions:{async fetchUserData(){const t=zn.currentUser;if(!t)return;const e=Ut(Ft,"users",t.uid),n=await Li(e);n.exists()&&(this.userData=n.data(),this.userData.streak||(this.userData.streak={count:1,lastUpdate:An()},await Gn(e,this.userData,{merge:!0})),await this.updateStreak(),await this.getMood(),await this.getJournalEntries())},setUserData(t){this.userData=t},setMoodData(t){this.moodData=t},async updateStreak(){const t=zn.currentUser;if(!t||!this.userData?.streak)return;const{count:e,lastUpdate:n}=this.userData.streak;if(!n||typeof n.toDate!="function"){this.userData.streak={count:1,lastUpdate:An()},await Gn(Ut(Ft,"users",t.uid),this.userData,{merge:!0});return}const r=n.toDate(),s=new Date;this.isSameDay(r,s)||(this.isYesterday(r,s)?this.userData.streak.count=e+1:this.userData.streak.count=1,this.userData.streak.lastUpdate=An(),await Gn(Ut(Ft,"users",t.uid),this.userData,{merge:!0}))},isSameDay(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()},isYesterday(t){const e=t,n=new Date,r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate())-r)/(1e3*60*60*24)===1},async getMood(){const t=zn.currentUser;if(!t)return;const e=Ut(Ft,"mood",t.uid),n=await Li(e);n.exists()&&(this.moodData=n.data())},async getJournalEntries(){const t=zn.currentUser;if(!t)return;const e=Ut(Ft,"journals",t.uid),n=await Li(e);if(n.exists()){const r=n.data(),s=Object.entries(r).sort((i,o)=>Number(o[0])-Number(i[0])).map(([i,o])=>({id:i,...o}));this.journalData=s}}}}),Jt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},L0={class:"modal_holder"},U0={class:"modal_heading_holder inter font_size_xs"},F0=["innerHTML"],B0={__name:"errorModal",props:{errorMessage:{type:String,required:!0}},setup(t){return(e,n)=>(te(),ue("div",{class:"modal_overlay",onClick:n[1]||(n[1]=lu(r=>e.$emit("close"),["self"])),role:"dialog","aria-modal":"true"},[V("div",L0,[V("div",U0,[n[2]||(n[2]=V("span",null," Attention!",-1)),V("button",{class:"modal_close_button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×")]),V("div",{class:"modal_content_holder inter font_size_xs",innerHTML:t.errorMessage},null,8,F0)])]))}},Eo=Jt(B0,[["__scopeId","data-v-306a9af2"]]),j0={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},$0={class:"modal_holder"},H0={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},q0={class:"modal_content_holder inter font_size_xs"},z0=["value"],W0=["value"],G0={__name:"userInfoModal",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=cn(),r=t,s=oe([]),i=oe("");ls(async()=>{const S=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();s.value=S.sort((C,q)=>C.name.common.localeCompare(q.name.common))});const o=Qa(),l=oe(""),c=oe(""),u=oe(""),f=oe(""),p=oe(!1),m=oe([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),y=oe("");function O(M){return/^\d{10}$/.test(M)}function N(M){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(M))return!1;const[C,q,ee]=M.split("/").map(Number),T=new Date(C,q-1,ee);return T.getFullYear()===C&&T.getMonth()===q-1&&T.getDate()===ee}const k=async()=>{if(pl().currentUser,f.value="",p.value=!1,!O(c.value)){f.value="Contact Number must be a valid 10-digit number.",p.value=!0;return}if(!N(u.value)){f.value="Date of Birth must be in the format yyyy/mm/dd.",p.value=!0;return}const S={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:r.globalUser.email,country:i.value,gender:y.value},streak:{count:parseInt(1),lastUpdate:An()},loginDate:new Date().toISOString(),uid:r.globalUser.uid};await Gn(Ut(Ft,"users",r.globalUser.uid),S),n.setUserData(S),o.push({name:"Navigation"})},L=()=>{p.value=!1,f.value=""};return(M,S)=>(te(),ue("div",j0,[V("div",$0,[V("div",H0,[S[6]||(S[6]=V("span",{style:{width:"80%"}},"User Information",-1)),V("button",{class:"modal_close_button",onClick:S[0]||(S[0]=C=>M.$emit("close"))},"×")]),V("div",q0,[S[10]||(S[10]=V("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),V("form",{class:"modal_form_holder",onSubmit:lu(k,["prevent"])},[Et(V("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":S[1]||(S[1]=C=>l.value=C),required:""},null,512),[[Kt,l.value]]),Et(V("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":S[2]||(S[2]=C=>c.value=C),required:""},null,512),[[Kt,c.value]]),Et(V("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":S[3]||(S[3]=C=>u.value=C),required:""},null,512),[[Kt,u.value]]),Et(V("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":S[4]||(S[4]=C=>y.value=C)},[S[7]||(S[7]=V("option",{disabled:"",value:""},"Please select one",-1)),(te(!0),ue(De,null,$t(m.value,C=>(te(),ue("option",{key:C.value,value:C.value},Ue(C.text),9,z0))),128))],512),[[qi,y.value]]),Et(V("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":S[5]||(S[5]=C=>i.value=C),id:"country"},[S[8]||(S[8]=V("option",{disabled:"",value:""},"Select your country",-1)),(te(!0),ue(De,null,$t(s.value,C=>(te(),ue("option",{key:C.cca3,value:C.cca3},Ue(C.name.common),9,W0))),128))],512),[[qi,i.value]]),S[9]||(S[9]=V("button",{type:"submit",class:"modal_button inter font_size_xs"}," Confirm ",-1))],32)])]),p.value?(te(),kt(Eo,{key:0,errorMessage:f.value,onClose:L},null,8,["errorMessage"])):Pn("",!0)]))}},K0=Jt(G0,[["__scopeId","data-v-d9949924"]]),Q0={class:"login_page"},Y0={class:"login_page_content"},J0={class:"login_page_form"},X0={class:"login_page_form_fields"},Z0=["type"],ek={class:"show_password_toggle inter font_size_xs"},tk={class:"login_page_social_login"},nk={class:"login_page_toggle_register inter font_size_xs"},rk={__name:"loginRegister",setup(t){const e=cn(),n=Qa(),r=oe("password"),s=oe(null),i=oe(""),o=oe(""),l=oe("login"),c=oe(!1),u=oe(""),f=oe(!1),p=new $n;p.addScope("https://www.googleapis.com/auth/contacts.readonly");const m=C=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(C),y=()=>{r.value=r.value==="password"?"text":"password"},O=()=>{l.value=l.value==="login"?"register":"login"},N=()=>{if(i.value===""){u.value="Please enter your email to reset your password!",c.value=!0;return}qC(zn,i.value).then(()=>{u.value="An email has been sent to reset your password!",c.value=!0})},k=async()=>{try{const ee=(await pP(zn,p)).user;if(ee){if(!ee)return;const T=Ut(Ft,"users",ee.uid),_=await Li(T);if(_.exists()){var C=_.data();C&&await L(C)}}n.push({name:"Navigation"})}catch(q){console.log(q.message),u.value="Google login failed!",c.value=!0}},L=async C=>{if(C.streak){const q=C.streak;M(q.lastUpdate)?C.streak.count=C.streak.count+1:C.streak.count=1,C.streak.lastUpdate=An(),C.loginDate=An(),await Gn(Ut(Ft,"users",C.uid),C)}},M=C=>{const q=C.toDate(),ee=new Date,T=new Date(ee.getFullYear(),ee.getMonth(),ee.getDate()),_=new Date(T);return _.setDate(T.getDate()-1),q>=_&&q<T},S=async()=>{try{if(u.value="",c.value=!1,!m(i.value)){u.value="Invalid email format!",c.value=!0;return}if(l.value==="register"){const ee=(await zC(zn,i.value,o.value)).user;try{await mP(ee,p)}catch(T){console.warn("Google link failed (optional):",T)}s.value={uid:ee.uid,email:ee.email},f.value=!0}else{const ee=(await WC(zn,i.value,o.value)).user,T=Ut(Ft,"users",ee.uid),_=await Li(T);if(_.exists()){var C=_.data();C&&(await L(C),e.setUserData(C),n.push({name:"Navigation"}))}}}catch(q){q.code==="auth/invalid-credential"?u.value="Invalid login details.":q.code==="auth/email-already-in-use"?u.value="Email already in use.":u.value="An unexpected error occurred.",c.value=!0}};return(C,q)=>(te(),ue(De,null,[V("div",Q0,[V("div",Y0,[q[5]||(q[5]=V("div",{class:"login_background_holder"},null,-1)),q[6]||(q[6]=V("div",{class:"login_page_intro inter font_size_xs"},[V("div",{class:"login_page_intro_text"},[V("div",{class:"font_size_m licorice_regular"},"Welcome to Finding Your Fit"),V("br"),V("br"),vn(" A space designed to help you understand yourself better, build emotional balance, and grow into the life that fits you best. Take a moment to reconnect, reflect, and start working toward your goals — one step at a time. ")])],-1)),V("div",J0,[V("form",X0,[Et(V("input",{class:"login_page_input inter font_size_xs",type:"text",placeholder:"Email","onUpdate:modelValue":q[0]||(q[0]=ee=>i.value=ee)},null,512),[[Kt,i.value]]),Et(V("input",{class:"login_page_password inter font_size_xs",type:r.value,placeholder:"Password","onUpdate:modelValue":q[1]||(q[1]=ee=>o.value=ee)},null,8,Z0),[[yw,o.value]]),V("div",ek,[V("label",null,[V("input",{type:"checkbox",onChange:y},null,32),q[4]||(q[4]=vn(" Show Password ",-1))])])]),V("button",{class:"login_page_button inter font_size_xs",onClick:S},Ue(l.value==="login"?"Login":"Register"),1),V("div",{class:"login_page_forgot_password inter font_size_xs",onClick:N},Ue(l.value==="login"?"Forgot Password?":""),1)]),V("div",tk,[V("div",{class:"login_page_social_button",onClick:q[2]||(q[2]=ee=>k())})]),V("div",nk,[V("u",{onClick:O},Ue(l.value==="login"?"Register":"Login"),1)])])]),c.value?(te(),kt(Eo,{key:0,errorMessage:u.value,onClose:q[3]||(q[3]=ee=>c.value=!1)},null,8,["errorMessage"])):Pn("",!0),f.value&&s.value?(te(),kt(K0,{key:1,globalUser:s.value},null,8,["globalUser"])):Pn("",!0)],64))}},sk=Jt(rk,[["__scopeId","data-v-f4d6eaa2"]]),Ep=[{content:"Success is not final, failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},{content:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{content:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"You are never too old to set another goal or to dream a new dream.",author:"C.S. Lewis"},{content:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"Don’t watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"The only limit to our realization of tomorrow is our doubts of today.",author:"Franklin D. Roosevelt"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Don’t wait. The time will never be just right.",author:"Napoleon Hill"},{content:"Believe in yourself and all that you are.",author:"Christian D. Larson"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Success is what comes after you stop making excuses.",author:"Luis Galarza"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Do what you love, love what you do.",author:"Unknown"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Motivation is what gets you started. Habit is what keeps you going.",author:"Jim Ryun"},{content:"Don’t let fear decide your future.",author:"Shalane Flanagan"},{content:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"Do one thing every day that scares you.",author:"Eleanor Roosevelt"},{content:"The best way to predict the future is to invent it.",author:"Alan Kay"},{content:"Difficult roads often lead to beautiful destinations.",author:"Unknown"},{content:"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",author:"Chantal Sutherland"},{content:"If it doesn’t challenge you, it won’t change you.",author:"Fred DeVito"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"The expert in anything was once a beginner.",author:"Helen Hayes"},{content:"Don’t count the days, make the days count.",author:"Muhammad Ali"},{content:"The harder the battle, the sweeter the victory.",author:"Les Brown"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"You don’t have to see the whole staircase, just take the first step.",author:"Martin Luther King Jr."},{content:"Small daily improvements over time lead to stunning results.",author:"Robin Sharma"},{content:"Don’t let what you cannot do interfere with what you can do.",author:"John Wooden"},{content:"The only limit is the one you set yourself.",author:"Felix Baumgartner"},{content:"Great things are done by a series of small things brought together.",author:"Vincent Van Gogh"},{content:"Your dream doesn’t have an expiration date. Take a deep breath and try again.",author:"KT Witten"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"You are braver than you believe, stronger than you seem, and smarter than you think.",author:"A.A. Milne"},{content:"Work until you no longer have to introduce yourself.",author:"Unknown"},{content:"The best revenge is massive success.",author:"Frank Sinatra"},{content:"Your only limit is your mind.",author:"Unknown"},{content:"Stop being afraid of what could go wrong and start being excited about what could go right.",author:"Unknown"},{content:"Do not wait to strike till the iron is hot; but make it hot by striking.",author:"William Butler Yeats"},{content:"Don’t let perfectionism get in the way of progress.",author:"Unknown"},{content:"Great minds discuss ideas; average minds discuss events; small minds discuss people.",author:"Eleanor Roosevelt"},{content:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Do what you can, with what you have, where you are.",author:"Theodore Roosevelt"},{content:"Success is not about the destination, it’s about the journey.",author:"Zig Ziglar"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"A year from now you may wish you had started today.",author:"Karen Lamb"},{content:"Don’t stop until you’re proud.",author:"Unknown"},{content:"Dream big. Start small. Act now.",author:"Robin Sharma"},{content:"Hard work beats talent when talent doesn’t work hard.",author:"Tim Notke"},{content:"Stay positive, work hard, make it happen.",author:"Unknown"},{content:"Your time is limited, don’t waste it living someone else’s life.",author:"Steve Jobs"},{content:"The difference between ordinary and extraordinary is that little extra.",author:"Jimmy Johnson"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Success doesn’t come to you, you go to it.",author:"Marva Collins"},{content:"A river cuts through rock not because of its power, but because of its persistence.",author:"Jim Watkins"},{content:"Discipline is the bridge between goals and accomplishment.",author:"Jim Rohn"},{content:"Do what is right, not what is easy nor what is popular.",author:"Unknown"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Don’t limit yourself. Many people limit themselves to what they think they can do.",author:"Mary Kay Ash"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Success is the progressive realization of a worthy goal or ideal.",author:"Earl Nightingale"},{content:"To succeed in life, you need two things: ignorance and confidence.",author:"Mark Twain"},{content:"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",author:"Mary Anne Radmacher"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"Don’t let small minds convince you that your dreams are too big.",author:"Unknown"},{content:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",author:"Pelé"},{content:"The best way out is always through.",author:"Robert Frost"},{content:"Failure is simply the opportunity to begin again, this time more intelligently.",author:"Henry Ford"},{content:"Don’t wish it were easier. Wish you were better.",author:"Jim Rohn"},{content:"The mind is everything. What you think you become.",author:"Buddha"},{content:"When you feel like quitting, remember why you started.",author:"Unknown"},{content:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},{content:"Don’t be afraid to give up the good to go for the great.",author:"John D. Rockefeller"},{content:"Do not be embarrassed by your failures, learn from them and start again.",author:"Richard Branson"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Small deeds done are better than great deeds planned.",author:"Peter Marshall"},{content:"Act as if what you do makes a difference. It does.",author:"William James"},{content:"Success is not how high you have climbed, but how you make a positive difference to the world.",author:"Roy T. Bennett"},{content:"Your future is created by what you do today, not tomorrow.",author:"Robert Kiyosaki"},{content:"The secret of success is to do the common thing uncommonly well.",author:"John D. Rockefeller Jr."},{content:"What seems to us as bitter trials are often blessings in disguise.",author:"Oscar Wilde"},{content:"The only place where success comes before work is in the dictionary.",author:"Vidal Sassoon"},{content:"Happiness is not something ready-made. It comes from your own actions.",author:"Dalai Lama"},{content:"Opportunities multiply as they are seized.",author:"Sun Tzu"},{content:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",author:"William James"},{content:"Don’t be afraid to start over. It’s a chance to build something better.",author:"Unknown"},{content:"Success isn’t always about greatness. It’s about consistency.",author:"Dwayne Johnson"},{content:"You are confined only by the walls you build yourself.",author:"Andrew Murphy"},{content:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t let the fear of losing be greater than the excitement of winning.",author:"Robert Kiyosaki"},{content:"You can’t cross the sea merely by standing and staring at the water.",author:"Rabindranath Tagore"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"The journey of a thousand miles begins with one step.",author:"Lao Tzu"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Jerry Dunn"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"It’s not whether you get knocked down, it’s whether you get up.",author:"Vince Lombardi"},{content:"Everything you can imagine is real.",author:"Pablo Picasso"},{content:"Success is not in never falling, but in rising every time we fall.",author:"Confucius"},{content:"Don’t wait for opportunity. Create it.",author:"George Bernard Shaw"},{content:"The best dreams happen when you’re awake.",author:"Cherie Gilderbloom"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"What you do today can improve all your tomorrows.",author:"Ralph Marston"}];function ik(){const t=Math.floor(Math.random()*Ep.length);return Ep[t]}const ok="/assets/my_therapist-BGpDoE1u.png",ak="/assets/my_journal-ByAOnFF2.png",lk="/assets/journal-BcWmOkN8.png",ck="/assets/my_courses-DAreBNF0.png",uk="/assets/therapist-sZYqYBaF.png",hk="/assets/mood_track-DScXBvTj.png",fk="/assets/courses-BeDDwdtO.png",dk="/assets/art-DRBE7P0P.png",pk={class:"home_container"},mk={class:"greeting_section licorice_regular font_size_m"},gk={class:"checkin_section"},_k={class:"feeling_section"},yk={class:"features_section"},vk={class:"feature_label inter font_size_xxs"},Ek={class:"inspiration_section"},wk={class:"quote_text inter font_size_xxs"},Tk={class:"offer_section"},Ik={class:"offer_list"},bk={class:"offer_icon_wrapper"},Ak={class:"offer_content_wrapper"},Rk={class:"offer_title inter font_size_xxs"},Sk={class:"offer_description inter font_size_xxs"},Ck={__name:"home",setup(t){const e=cn(),n=oe({content:"",author:""});oe(!1);const r=Le(()=>e.userData?.personalInfo.name||""),s=Le(()=>[{label:"My Therapist",url:ok},{label:"Journal Entry",url:ak},{label:"Explore Courses",url:ck}]),i=Le(()=>[{label:"Expert support at your fingertips",content:"Find and connect with qualified therapists specializing in various areas.",icon:uk},{label:"Personalized mood tracking",content:"Log your daily mood to visualize trends, identify triggers, and gain insights.",icon:hk},{label:"Journaling",content:"A private space for self-reflection, prompts, and gain thoughts.",icon:lk},{label:"Curated learning courses",content:"Access a library of free and premium courses on mindfulness, stress management, and CBT techniques.",icon:fk},{label:"Art Therapy",content:"If you're feeling stressed or sad, sometimes it's easier to express it through art than words.",icon:dk}]);ls(()=>{console.log("Home mounted"),n.value=ik()});const o=()=>{const l=new Date().getHours();return l<12?"morning":l<18?"afternoon":"evening"};return(l,c)=>(te(),ue("div",pk,[V("div",mk," Good "+Ue(o())+", "+Ue(r.value)+"! ",1),V("div",gk,[V("div",_k,[c[1]||(c[1]=V("div",{class:"feeling_heading inter font_size_xs"},[V("b",null,"How are you feeling today?")],-1)),c[2]||(c[2]=V("div",{class:"feeling_image"},null,-1)),V("div",{class:"checkin_button inter font_size_xxs",onClick:c[0]||(c[0]=u=>l.$emit("setPage","mood"))}," Check in now ")])]),V("div",yk,[(te(!0),ue(De,null,$t(s.value,u=>(te(),ue("div",{class:"feature_card",key:u.label},[V("div",{class:"feature_icon",style:Pr({backgroundImage:`url(${u.url})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4),V("div",vk,[V("b",null,Ue(u.label),1)])]))),128))]),V("div",Ek,[c[3]||(c[3]=V("div",{class:"inspiration_heading inter font_size_xxs"},[V("b",null,"Inspiration")],-1)),V("div",wk,Ue(n.value.content),1)]),V("div",Tk,[c[4]||(c[4]=V("div",{class:"offer_heading inter font_size_xs"},[V("b",null,"What we offer")],-1)),V("div",Ik,[(te(!0),ue(De,null,$t(i.value,u=>(te(),ue("div",{class:"offer_card",key:u.label},[V("div",bk,[V("div",{class:"feature_icon",style:Pr({backgroundImage:`url(${u.icon})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4)]),V("div",Ak,[V("div",Rk,[V("b",null,Ue(u.label),1)]),V("div",Sk,Ue(u.content),1)])]))),128))])])]))}},yy=Jt(Ck,[["__scopeId","data-v-d1238674"]]),Pk={class:"loading_page_holder"},kk={__name:"loadingPage",setup(t){const e=cn(),n=Qa();return ls(async()=>{e.userData?e.userData.uid?n.push({name:"Navigation"}):n.push({name:"Login"}):n.push({name:"Login"})}),(r,s)=>(te(),ue("div",Pk))}},Dk=Jt(kk,[["__scopeId","data-v-bc11f8f1"]]),Nk={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},Ok={class:"modal_holder"},Vk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},xk={class:"modal_content_holder inter font_size_xs"},Mk=["value"],Lk=["value"],Uk={__name:"profileEdit",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=cn(),r=e,s=t,i=oe([]),o=oe("");ls(async()=>{const S=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();i.value=S.sort((C,q)=>C.name.common.localeCompare(q.name.common))});const l=oe(""),c=oe(""),u=oe(""),f=oe(""),p=oe(!1),m=oe([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),y=oe("");function O(M){return/^\d{10}$/.test(M)}function N(M){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(M))return!1;const[C,q,ee]=M.split("/").map(Number),T=new Date(C,q-1,ee);return T.getFullYear()===C&&T.getMonth()===q-1&&T.getDate()===ee}const k=async()=>{const S=pl().currentUser;if(f.value="",p.value=!1,!O(c.value)){f.value="Contact Number must be a valid 10-digit number.",p.value=!0;return}if(!N(u.value)){f.value="Date of Birth must be in the format yyyy/mm/dd.",p.value=!0;return}const C=s.globalUser.userData,q={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:C.email?C.email:S.email,gender:y.value,country:o.value},uid:C.uid?C.uid:S.uid,loginDate:C.loginDate,streak:{count:C.streak.count,lastUpdate:C.streak.lastUpdate},profileEdited:An()};n.setUserData(q),await Gn(Ut(Ft,"users",C.uid?C.uid:S.uid),q),r("close")},L=()=>{p.value=!1,f.value=""};return(M,S)=>(te(),ue("div",Nk,[V("div",Ok,[V("div",Vk,[S[6]||(S[6]=V("span",{style:{width:"80%"}},"Edit User Information",-1)),V("button",{class:"modal_close_button",onClick:S[0]||(S[0]=C=>M.$emit("close"))},"×")]),V("div",xk,[S[10]||(S[10]=V("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),V("form",{class:"modal_form_holder",onSubmit:lu(k,["prevent"])},[Et(V("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":S[1]||(S[1]=C=>l.value=C),required:""},null,512),[[Kt,l.value]]),Et(V("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":S[2]||(S[2]=C=>c.value=C),required:""},null,512),[[Kt,c.value]]),Et(V("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":S[3]||(S[3]=C=>u.value=C),required:""},null,512),[[Kt,u.value]]),Et(V("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":S[4]||(S[4]=C=>y.value=C)},[S[7]||(S[7]=V("option",{disabled:"",value:""},"Please select one",-1)),(te(!0),ue(De,null,$t(m.value,C=>(te(),ue("option",{key:C.value,value:C.value},Ue(C.text),9,Mk))),128))],512),[[qi,y.value]]),Et(V("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":S[5]||(S[5]=C=>o.value=C),id:"country"},[S[8]||(S[8]=V("option",{disabled:"",value:""},"Select your country",-1)),(te(!0),ue(De,null,$t(i.value,C=>(te(),ue("option",{key:C.cca3,value:C.cca3},Ue(C.name.common),9,Lk))),128))],512),[[qi,o.value]]),S[9]||(S[9]=V("button",{type:"submit",class:"modal_button inter font_size_xs"}," Confirm ",-1))],32)])]),p.value?(te(),kt(Eo,{key:0,errorMessage:f.value,onClose:L},null,8,["errorMessage"])):Pn("",!0)]))}},wp=Jt(Uk,[["__scopeId","data-v-697cab32"]]),vy="/assets/brown_man-DU8HBBmE.png",Ey="/assets/blonde_man-Br_WNAu2.png",wy="/assets/ginger_man-D_7vVZja.png",Ty="/assets/black_man-DZoPS0-N.png",Iy="/assets/black_woman-QP95zNq-.png",by="/assets/brunette_woman-C5YdWLXO.png",Ay="/assets/ginger_woman-5AupqmXa.png",Ry="/assets/blonde_woman-IP-2iqnM.png",Hc="/assets/none-BOBk4slU.png",Fk={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},Bk={class:"modal_holder"},jk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},$k={class:"modal_content_holder inter font_size_xs"},Hk={class:"modal_avatars_holder"},qk=["onClick"],zk=["onClick"],Wk={__name:"profileAvatar",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=cn(),r=Le(()=>[{label:"Brown Hair",url:vy,ref:"brown_man"},{label:"Blonde Hair",url:Ey,ref:"blonde_man"},{label:"Ginger Hair",url:wy,ref:"ginger_man"},{label:"Black Hair",url:Ty,ref:"black_man"},{label:"Brown Hair Woman",url:by,ref:"brown_woman"},{label:"Blonde Hair Woman",url:Ry,ref:"blonde_woman"},{label:"Ginger Hair Woman",url:Ay,ref:"ginger_woman"},{label:"Black Hair Woman",url:Iy,ref:"black_woman"},{label:"None",url:Hc,ref:"none"}]),s=e,i=t,o=oe("none"),l=u=>{o.value=u},c=async()=>{const u=pl(),f=i.globalUser.userData,p=u.currentUser,m={profileAvatar:o.value,profileEdited:An()};await Gn(Ut(Ft,"users",f.uid?f.uid:p.uid),m,{merge:!0}),n.userData.profileAvatar=o.value,s("close")};return(u,f)=>(te(),ue("div",Fk,[V("div",Bk,[V("div",jk,[f[2]||(f[2]=V("span",{style:{width:"80%"}},"Profile Avatar",-1)),V("button",{class:"modal_close_button",onClick:f[0]||(f[0]=p=>u.$emit("close"))},"×")]),V("div",$k,[(te(!0),ue(De,null,$t(r.value,p=>(te(),ue("div",Hk,[p.ref==o.value?(te(),ue("div",{key:0,class:"modal_avatar_selected",onClick:m=>l(p.ref),style:Pr({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,12,qk)):(te(),ue("div",{key:1,class:"modal_avatar",style:Pr({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}),onClick:m=>l(p.ref)},null,12,zk))]))),256))]),V("button",{type:"submit",class:"modal_button inter font_size_xs",onClick:f[1]||(f[1]=p=>c())}," Confirm ")])]))}},Tp=Jt(Wk,[["__scopeId","data-v-82d90dde"]]),Gk={class:"profile_container"},Kk={class:"profile_header"},Qk={class:"profile_edit_btn"},Yk={class:"profile_info"},Jk={class:"profile_avatar_wrapper"},Xk={class:"pfp_edit_button"},Zk={class:"profile_user_details font_size_s inter"},e1={class:"font_size_xxs"},t1={class:"profile_stats"},n1={class:"profile_stat_top inter font_size_xs"},r1={key:0,class:"profile_stat_value"},s1={key:0},i1={key:1},o1={key:1,class:"profile_stat_value"},a1={class:"profile_stat_icon"},l1={class:"profile_stat_label inter font_size_xs"},c1={__name:"profile",setup(t){const e=cn(),n=oe(!1),r=oe(!1),s=oe(!1),i=oe(null);Le(()=>e.userData.profileAvatar?e.userData.profileAvatar:"none");const o={brown_man:vy,blonde_man:Ey,ginger_man:wy,black_man:Ty,brown_woman:by,blonde_woman:Ry,ginger_woman:Ay,black_woman:Iy,none:Hc},l=Le(()=>{const L=e.userData?.profileAvatar||"none";return o[L]||Hc});ls(()=>{const L=new Date().toISOString().split("T")[0];if(i.value=e.userData,!e.moodData||!e.moodData[L])return;n.value=!0;const M=e.moodData[L];for(const S of c.value)if(S.ref===M.mood){O.value[2].value=S.icon;break}});const c=Le(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),u=Le(()=>e.userData?.personalInfo.name||""),f=Le(()=>e.userData?.personalInfo.email||""),p=Le(()=>e.userData?.streak?.count||0),m=Le(()=>e.journalData.length||0),y=Le(()=>e.userData?.personalInfo.courses?.length||0),O=oe([{label:"App Streak",value:p.value,icon:"fa fa-signal"},{label:"Journal Entries",value:m.value,icon:"fa fa-book"},{label:"Mood Trends",value:"",icon:"fas fa-chart-line"},{label:"Courses",value:y.value,icon:"fas fa-book-open"}]),N=()=>{r.value=!0},k=()=>{s.value=!0};return(L,M)=>(te(),ue(De,null,[V("div",Gk,[V("div",Kk,[M[5]||(M[5]=V("div",{class:"profile_title font_size_s inter"},null,-1)),V("div",Qk,[V("i",{class:"fas fa-edit",onClick:M[0]||(M[0]=S=>N())})])]),V("div",Yk,[V("div",Jk,[V("div",{class:"profile_avatar",style:Pr({backgroundImage:`url(${l.value})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,4)]),V("div",Xk,[V("i",{class:"fas fa-edit",onClick:M[1]||(M[1]=S=>k())}),V("input",{type:"file",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:M[2]||(M[2]=(...S)=>L.handleImageUpload&&L.handleImageUpload(...S))},null,544)]),V("div",Zk,[vn(Ue(u.value)+" ",1),V("span",e1,Ue(f.value),1)])]),V("div",t1,[(te(!0),ue(De,null,$t(O.value,(S,C)=>(te(),ue("div",{class:"profile_stat_card",key:C},[V("div",n1,[S.label=="Mood Trends"?(te(),ue("div",r1,[n.value?(te(),ue("div",s1,[V("i",{class:Qn(S.value),style:{"font-size":"1.5rem"}},null,2),M[6]||(M[6]=vn("  ",-1))])):(te(),ue("div",i1,[...M[7]||(M[7]=[V("i",{class:"far fa-meh",style:{"font-size":"1.5rem"}},null,-1),vn("  ",-1)])]))])):(te(),ue("div",o1,Ue(S.value),1)),V("div",a1,[V("i",{class:Qn(S.icon),style:{color:"#87bfba"}},null,2)])]),V("div",l1,Ue(S.label),1)]))),128))])]),r.value?(te(),kt(wp,{key:0,onClose:M[3]||(M[3]=S=>r.value=!1),globalUser:yn(e),viewPoint:wp},null,8,["globalUser"])):Pn("",!0),s.value?(te(),kt(Tp,{key:1,onClose:M[4]||(M[4]=S=>s.value=!1),globalUser:yn(e),viewPoint:Tp},null,8,["globalUser"])):Pn("",!0)],64))}},Sy=Jt(c1,[["__scopeId","data-v-e9da20db"]]),u1={class:"journal_selection_holder inter font_size_xs"},h1=["onClick"],f1={key:0,class:"journal_entry_holder"},d1={class:"journal_entry_date_holder inter font_size_xs"},p1={style:{width:"90%"}},m1={class:"journal_entry_content_holder"},g1={key:1},_1={key:0,class:"journal_list_holder"},y1={class:"inter font_size_sm",style:{"font-weight":"bold","margin-bottom":"0.5rem"}},v1={class:"inter font_size_xs",style:{"margin-bottom":"0.5rem"}},E1={class:"inter font_size_xxs",style:{color:"#808080"}},w1={__name:"journal",emits:["close"],setup(t,{emit:e}){const n=e,r=cn(),s=oe("journalEntry"),i=[{key:"journalEntry",label:"New Journal Entry",cornerClass:"right-rounded"},{key:"journalList",label:"Journal List",cornerClass:"left-rounded"}],o=oe(new Date().toDateString()),l=oe(new Date().toLocaleTimeString()),c=N=>{s.value=N,o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString()},u=()=>{m.value=!1,y.value=""},f=oe(""),p=oe(""),m=oe(!1),y=oe(""),O=async()=>{if(!f.value){m.value=!0,y.value="Please give a journal title.";return}if(!p.value){m.value=!0,y.value="Please give journal content.";return}const k={[Date.now()]:{journalEntryHeading:f.value,journalEntryContent:p.value,journalEntryLogged:An()}};try{await Gn(Ut(Ft,"journals",r.userData.uid),k,{merge:!0}),m.value=!0,y.value="Your journal entry has been logged.",f.value="",p.value="",o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString(),n("close")}catch(L){console.error("Failed to save journal:",L),m.value=!0,y.value="Failed to save journal. Please try again."}};return(N,k)=>(te(),ue(De,null,[k[5]||(k[5]=V("div",{class:"journal_header_holder inter font_size_xs"}," My Journal ",-1)),V("div",u1,[(te(),ue(De,null,$t(i,L=>V("div",{key:L.key,class:Qn(["journal_selection",{active:s.value===L.key,[L.cornerClass]:!0}]),onClick:M=>c(L.key)},Ue(L.label),11,h1)),64))]),s.value=="journalEntry"?(te(),ue("div",f1,[V("div",d1,[V("div",p1,[vn(Ue(o.value)+" ",1),k[3]||(k[3]=V("br",null,null,-1)),vn(" "+Ue(l.value),1)])]),V("div",m1,[Et(V("input",{placeholder:"Give us a title.",style:{width:"90%",height:"5%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":k[0]||(k[0]=L=>f.value=L)},null,512),[[Kt,f.value]]),Et(V("textarea",{placeholder:"What's weighing on your mind today? Or what's a small win?",style:{width:"90%",height:"80%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":k[1]||(k[1]=L=>p.value=L)},null,512),[[Kt,p.value]])]),k[4]||(k[4]=V("br",null,null,-1)),V("div",{class:"save_button inter font_size_xxs",onClick:k[2]||(k[2]=L=>O())},"Save"),m.value?(te(),kt(Eo,{key:0,errorMessage:y.value,onClose:u},null,8,["errorMessage"])):Pn("",!0)])):(te(),ue("div",g1,[yn(r).journalData?(te(),ue("div",_1,[(te(!0),ue(De,null,$t(yn(r).journalData,(L,M)=>(te(),ue("div",{key:M,style:{width:"90%","box-shadow":"0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4)","margin-bottom":"1rem","border-radius":"1rem",padding:"0.5rem"}},[V("div",y1,Ue(L.journalEntryHeading),1),V("div",v1,Ue(L.journalEntryContent),1),V("div",E1,"Logged on: "+Ue(new Date(L.journalEntryLogged.seconds*1e3).toLocaleString()),1)]))),128))])):Pn("",!0)]))],64))}},Cy=Jt(w1,[["__scopeId","data-v-b89d33a8"]]),T1={class:"mood_tracker_holder"},I1={class:"mood_icons_holder"},b1={class:"mood_icon_holder"},A1=["onClick"],R1=["onClick"],S1={class:"influence_holder",style:{height:"25rem"}},C1={class:"influence_items_holder"},P1=["value"],k1={class:"influence_holder"},D1={__name:"mood",emits:["close"],setup(t,{emit:e}){const n=cn(),r=e,s=Le(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),i=Le(()=>[{label:"Sleep Quality",ref:"sleep_quality"},{label:"Nutrition",ref:"nutrition"},{label:"Physical Activity",ref:"physical_activity"},{label:"Social Connection",ref:"social_connection"},{label:"Mindset",ref:"mindset"},{label:"Environment",ref:"environment"},{label:"None",ref:"none"}]),o=oe(!1),l=oe(""),c=oe([]),u=oe(""),f=oe("neutral"),p=O=>{f.value=O},m=async()=>{if(c.value.length==0){o.value=!0,l.value="Please select an influence.";return}const N={[new Date().toISOString().split("T")[0]]:{mood:f.value,influences:c.value,optional_notes:u.value,mood_logged:An()}};await Gn(Ut(Ft,"mood",n.userData.uid),N,{merge:!0}),o.value=!0,l.value="Thank you for logging your mood. It will be taken into consideration.",n.setMoodData(N),r("close")},y=()=>{o.value=!1,l.value=""};return(O,N)=>(te(),ue(De,null,[V("div",T1,[N[6]||(N[6]=V("div",{class:"mood_heading_holder inter font_size_xs"},"How am I feeling today?",-1)),V("div",I1,[(te(!0),ue(De,null,$t(s.value,k=>(te(),ue("div",b1,[f.value==k.ref?(te(),ue("div",{key:0,class:Qn(k.icon),style:{"font-size":"3rem",border:"0.2rem solid #87bfba",padding:"0.5rem","border-radius":"50%"},onClick:L=>p(k.ref)},null,10,A1)):(te(),ue("div",{key:1,class:Qn(k.icon),style:{"font-size":"3rem"},onClick:L=>p(k.ref)},null,10,R1))]))),256))]),V("div",S1,[N[4]||(N[4]=V("div",{class:"influence_heading_holder inter font_size_xs"},[V("b",null,"What might be influencing this?")],-1)),V("div",C1,[(te(!0),ue(De,null,$t(i.value,k=>(te(),ue("div",{class:"influence_item_holder inter font_size_xxs",key:k.ref,style:{height:"12%"}},[N[3]||(N[3]=vn("  ",-1)),Et(V("input",{type:"checkbox","onUpdate:modelValue":N[0]||(N[0]=L=>c.value=L),value:k.ref},null,8,P1),[[Nm,c.value]]),vn(" "+Ue(k.label),1)]))),128))])]),V("div",k1,[N[5]||(N[5]=V("div",{class:"influence_heading_holder inter font_size_xs"},[V("b",null,"Optional Notes")],-1)),Et(V("textarea",{placeholder:"Write a few words about why you feel the way you feel",style:{width:"90%",height:"60%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":N[1]||(N[1]=k=>u.value=k)},null,512),[[Kt,u.value]])]),V("div",{class:"save_button inter font_size_xxs",onClick:N[2]||(N[2]=k=>m())},"Save")]),o.value?(te(),kt(Eo,{key:0,errorMessage:l.value,onClose:y},null,8,["errorMessage"])):Pn("",!0)],64))}},N1=Jt(D1,[["__scopeId","data-v-5fdabdf1"]]),O1={key:0,class:"empty_therapy_list inter font_size_xs"},V1={key:1},x1={__name:"therapists",setup(t){oe();const e=oe(!1);return(n,r)=>(te(),ue(De,null,[e.value?(te(),ue("div",V1)):(te(),ue("div",O1,"No therapists are listed at this moment.")),r[0]||(r[0]=V("div",{class:"sign_up_button_holder inter font_size_s"},[V("i",{class:"fas fa-plus"})],-1))],64))}},M1=Jt(x1,[["__scopeId","data-v-fc91358b"]]),L1={class:"navigation_bar_holder"},U1=["onClick"],F1=["innerHTML"],B1={__name:"navigation",setup(t){const e={home:{name:"Home",icon:'<i class="fa fa-home"></i>'},therapists:{name:"Therapists",icon:'<i class="fa fa-address-book"></i>'},journal:{name:"Journal",icon:'<i class="fa fa-book"></i>'},content:{name:"Content",icon:'<i class="fa fa-folder-open"></i>'},profile:{name:"Profile",icon:'<i class="fa fa-id-card"></i>'}},n=cn();ks(()=>n.userData,i=>{}),Qa();const r=oe("home"),s=i=>{r.value=i};return ls(async()=>{}),(i,o)=>(te(),ue(De,null,[r.value==="profile"?(te(),kt(Sy,{key:0})):r.value==="home"?(te(),kt(yy,{key:1,onSetPage:s})):r.value==="mood"?(te(),kt(N1,{key:2})):r.value==="journal"?(te(),kt(Cy,{key:3})):r.value==="therapists"?(te(),kt(M1,{key:4})):Pn("",!0),V("div",L1,[(te(),ue(De,null,$t(e,(l,c)=>V("div",{class:"navigation_item_holder inter font_size_xxs",key:c},[V("div",{class:Qn(["navigation_item",{active:r.value===c}]),onClick:u=>s(c)},[V("div",{innerHTML:l.icon},null,8,F1),V("div",null,Ue(l.name),1)],10,U1)])),64))])],64))}},j1=Jt(B1,[["__scopeId","data-v-4dc7e021"]]),$1=[{path:"/",name:"Loading",component:Dk},{path:"/login",name:"Login",component:sk},{path:"/navigation",name:"Navigation",component:j1},{path:"/home/",name:"Home",component:yy,props:!0},{path:"/profile/",name:"Profile",component:Sy,props:!0},{path:"/journal/",name:"JournalEntry",component:Cy,props:!0}],Py=jT({history:vT(),routes:$1});Py.beforeEach(async(t,e,n)=>{const r=cn();if(r.userData||await r.fetchUserData(),!r.userData?.uid&&t.name!=="Login")return n({name:"Login"});n()});let Ip=null;zn.onAuthStateChanged(()=>{if(!Ip){const t=bw(xw);t.use(Sw()),t.use(Py),t.mount("#app"),Ip=t}});
