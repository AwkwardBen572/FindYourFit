(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},Ps=[],vn=()=>{},bp=()=>!1,La=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qc=t=>t.startsWith("onUpdate:"),Tt=Object.assign,Wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zy=Object.prototype.hasOwnProperty,Ce=(t,e)=>Zy.call(t,e),ue=Array.isArray,ks=t=>so(t)==="[object Map]",Ws=t=>so(t)==="[object Set]",Gh=t=>so(t)==="[object Date]",ge=t=>typeof t=="function",Je=t=>typeof t=="string",Cn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Ap=t=>(xe(t)||ge(t))&&ge(t.then)&&ge(t.catch),Rp=Object.prototype.toString,so=t=>Rp.call(t),ev=t=>so(t).slice(8,-1),Sp=t=>so(t)==="[object Object]",Gc=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ii=zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},tv=/-\w/g,Qt=Ua(t=>t.replace(tv,e=>e.slice(1).toUpperCase())),nv=/\B([A-Z])/g,cs=Ua(t=>t.replace(nv,"-$1").toLowerCase()),Fa=Ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),kl=Ua(t=>t?`on${Fa(t)}`:""),Ir=(t,e)=>!Object.is(t,e),Ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},sa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kh;const Ba=()=>Kh||(Kh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function es(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?ov(r):es(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||xe(t))return t}const rv=/;(?![^(]*\))/g,sv=/:([^]+)/,iv=/\/\*[^]*?\*\//g;function ov(t){const e={};return t.replace(iv,"").split(rv).forEach(n=>{if(n){const r=n.split(sv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qn(t){let e="";if(Je(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Qn(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const av="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lv=zc(av);function Pp(t){return!!t||t===""}function cv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ts(t[r],e[r]);return n}function ts(t,e){if(t===e)return!0;let n=Gh(t),r=Gh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Cn(t),r=Cn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?cv(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ts(t[o],e[o]))return!1}}return String(t)===String(e)}function Kc(t,e){return t.findIndex(n=>ts(n,e))}const kp=t=>!!(t&&t.__v_isRef===!0),Ve=t=>Je(t)?t:t==null?"":ue(t)||xe(t)&&(t.toString===Rp||!ge(t.toString))?kp(t)?Ve(t.value):JSON.stringify(t,Dp,2):String(t),Dp=(t,e)=>kp(e)?Dp(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Dl(r,i)+" =>"]=s,n),{})}:Ws(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Dl(n))}:Cn(e)?Dl(e):xe(e)&&!ue(e)&&!Sp(e)?String(e):e,Dl=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class Np{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Op(t){return new Np(t)}function Vp(){return _t}function uv(t,e=!1){_t&&_t.cleanups.push(t)}let Le;const Nl=new WeakSet;class xp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nl.has(this)&&(Nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qh(this),Up(this);const e=Le,n=an;Le=this,an=!0;try{return this.fn()}finally{Fp(this),Le=e,an=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jc(e);this.deps=this.depsTail=void 0,Qh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rc(this)&&this.run()}get dirty(){return rc(this)}}let Mp=0,bi,Ai;function Lp(t,e=!1){if(t.flags|=8,e){t.next=Ai,Ai=t;return}t.next=bi,bi=t}function Qc(){Mp++}function Yc(){if(--Mp>0)return;if(Ai){let e=Ai;for(Ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;bi;){let e=bi;for(bi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Jc(r),hv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function rc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Bp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Bi)||(t.globalVersion=Bi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!rc(t))))return;t.flags|=2;const e=t.dep,n=Le,r=an;Le=t,an=!0;try{Up(t);const s=t.fn(t._value);(e.version===0||Ir(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,an=r,Fp(t),t.flags&=-3}}function Jc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Jc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function hv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let an=!0;const jp=[];function Yn(){jp.push(an),an=!1}function Jn(){const t=jp.pop();an=t===void 0?!0:t}function Qh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let Bi=0;class fv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!an||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new fv(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,$p(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,Bi++,this.notify(e)}notify(e){Qc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Yc()}}}function $p(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)$p(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ia=new WeakMap,Yr=Symbol(""),sc=Symbol(""),ji=Symbol("");function vt(t,e,n){if(an&&Le){let r=ia.get(t);r||ia.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Xc),s.map=r,s.key=n),s.track()}}function Fn(t,e,n,r,s,i){const o=ia.get(t);if(!o){Bi++;return}const l=c=>{c&&c.trigger()};if(Qc(),e==="clear")o.forEach(l);else{const c=ue(t),u=c&&Gc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===ji||!Cn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(ji)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Yr)),ks(t)&&l(o.get(sc)));break;case"delete":c||(l(o.get(Yr)),ks(t)&&l(o.get(sc)));break;case"set":ks(t)&&l(o.get(Yr));break}}Yc()}function dv(t,e){const n=ia.get(t);return n&&n.get(e)}function ws(t){const e=Re(t);return e===t?e:(vt(e,"iterate",ji),Gt(t)?e:e.map(ct))}function ja(t){return vt(t=Re(t),"iterate",ji),t}const pv={__proto__:null,[Symbol.iterator](){return Ol(this,Symbol.iterator,ct)},concat(...t){return ws(this).concat(...t.map(e=>ue(e)?ws(e):e))},entries(){return Ol(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return Mn(this,"every",t,e,void 0,arguments)},filter(t,e){return Mn(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return Mn(this,"find",t,e,ct,arguments)},findIndex(t,e){return Mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mn(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return Mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Vl(this,"includes",t)},indexOf(...t){return Vl(this,"indexOf",t)},join(t){return ws(this).join(t)},lastIndexOf(...t){return Vl(this,"lastIndexOf",t)},map(t,e){return Mn(this,"map",t,e,void 0,arguments)},pop(){return di(this,"pop")},push(...t){return di(this,"push",t)},reduce(t,...e){return Yh(this,"reduce",t,e)},reduceRight(t,...e){return Yh(this,"reduceRight",t,e)},shift(){return di(this,"shift")},some(t,e){return Mn(this,"some",t,e,void 0,arguments)},splice(...t){return di(this,"splice",t)},toReversed(){return ws(this).toReversed()},toSorted(t){return ws(this).toSorted(t)},toSpliced(...t){return ws(this).toSpliced(...t)},unshift(...t){return di(this,"unshift",t)},values(){return Ol(this,"values",ct)}};function Ol(t,e,n){const r=ja(t),s=r[e]();return r!==t&&!Gt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const mv=Array.prototype;function Mn(t,e,n,r,s,i){const o=ja(t),l=o!==t&&!Gt(t),c=o[e];if(c!==mv[e]){const p=c.apply(t,i);return l?ct(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,ct(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Yh(t,e,n,r){const s=ja(t);let i=n;return s!==t&&(Gt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ct(l),c,t)}),s[e](i,...r)}function Vl(t,e,n){const r=Re(t);vt(r,"iterate",ji);const s=r[e](...n);return(s===-1||s===!1)&&tu(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function di(t,e,n=[]){Yn(),Qc();const r=Re(t)[e].apply(t,n);return Yc(),Jn(),r}const gv=zc("__proto__,__v_isRef,__isVue"),Hp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn));function _v(t){Cn(t)||(t=String(t));const e=Re(this);return vt(e,"has",t),e.hasOwnProperty(t)}class zp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Sv:Kp:i?Gp:Wp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let c;if(o&&(c=pv[n]))return c;if(n==="hasOwnProperty")return _v}const l=Reflect.get(e,n,Ke(e)?e:r);if((Cn(n)?Hp.has(n):gv(n))||(s||vt(e,"get",n),i))return l;if(Ke(l)){const c=o&&Gc(n)?l:l.value;return s&&xe(c)?oc(c):c}return xe(l)?s?oc(l):io(l):l}}class qp extends zp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Pr(i);if(!Gt(r)&&!Pr(r)&&(i=Re(i),r=Re(r)),!ue(e)&&Ke(i)&&!Ke(r))return c||(i.value=r),!0}const o=ue(e)&&Gc(n)?Number(n)<e.length:Ce(e,n),l=Reflect.set(e,n,r,Ke(e)?e:s);return e===Re(s)&&(o?Ir(r,i)&&Fn(e,"set",n,r):Fn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Fn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Cn(n)||!Hp.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",ue(e)?"length":Yr),Reflect.ownKeys(e)}}class yv extends zp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const vv=new qp,Ev=new yv,wv=new qp(!0);const ic=t=>t,No=t=>Reflect.getPrototypeOf(t);function Tv(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=ks(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?ic:e?oa:ct;return!e&&vt(i,"iterate",c?sc:Yr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Iv(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),l=Re(s);t||(Ir(s,l)&&vt(o,"get",s),vt(o,"get",l));const{has:c}=No(o),u=e?ic:t?oa:ct;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Re(s),"iterate",Yr),s.size},has(s){const i=this.__v_raw,o=Re(i),l=Re(s);return t||(Ir(s,l)&&vt(o,"has",s),vt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Re(l),u=e?ic:t?oa:ct;return!t&&vt(c,"iterate",Yr),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Tt(n,t?{add:Oo("add"),set:Oo("set"),delete:Oo("delete"),clear:Oo("clear")}:{add(s){!e&&!Gt(s)&&!Pr(s)&&(s=Re(s));const i=Re(this);return No(i).has.call(i,s)||(i.add(s),Fn(i,"add",s,s)),this},set(s,i){!e&&!Gt(i)&&!Pr(i)&&(i=Re(i));const o=Re(this),{has:l,get:c}=No(o);let u=l.call(o,s);u||(s=Re(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Ir(i,f)&&Fn(o,"set",s,i):Fn(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:l}=No(i);let c=o.call(i,s);c||(s=Re(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Fn(i,"delete",s,void 0),u},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&Fn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Tv(s,t,e)}),n}function Zc(t,e){const n=Iv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const bv={get:Zc(!1,!1)},Av={get:Zc(!1,!0)},Rv={get:Zc(!0,!1)};const Wp=new WeakMap,Gp=new WeakMap,Kp=new WeakMap,Sv=new WeakMap;function Cv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pv(t){return t.__v_skip||!Object.isExtensible(t)?0:Cv(ev(t))}function io(t){return Pr(t)?t:eu(t,!1,vv,bv,Wp)}function Qp(t){return eu(t,!1,wv,Av,Gp)}function oc(t){return eu(t,!0,Ev,Rv,Kp)}function eu(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Pv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function br(t){return Pr(t)?br(t.__v_raw):!!(t&&t.__v_isReactive)}function Pr(t){return!!(t&&t.__v_isReadonly)}function Gt(t){return!!(t&&t.__v_isShallow)}function tu(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function nu(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Cp(t,"__v_skip",!0),t}const ct=t=>xe(t)?io(t):t,oa=t=>xe(t)?oc(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function ne(t){return Yp(t,!1)}function kv(t){return Yp(t,!0)}function Yp(t,e){return Ke(t)?t:new Dv(t,e)}class Dv{constructor(e,n){this.dep=new Xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Gt(e)||Pr(e);e=r?e:Re(e),Ir(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function En(t){return Ke(t)?t.value:t}const Nv={get:(t,e,n)=>e==="__v_raw"?t:En(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Jp(t){return br(t)?t:new Proxy(t,Nv)}function Ov(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=xv(t,n);return e}class Vv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return dv(Re(this._object),this._key)}}function xv(t,e,n){const r=t[e];return Ke(r)?r:new Vv(t,e,n)}class Mv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Lp(this,!0),!0}get value(){const e=this.dep.track();return Bp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Lv(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new Mv(r,s,n)}const Vo={},aa=new WeakMap;let Wr;function Uv(t,e=!1,n=Wr){if(n){let r=aa.get(n);r||aa.set(n,r=[]),r.push(t)}}function Fv(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=R=>s?R:Gt(R)||s===!1||s===0?Bn(R,1):Bn(R);let f,p,m,y,O=!1,D=!1;if(Ke(t)?(p=()=>t.value,O=Gt(t)):br(t)?(p=()=>u(t),O=!0):ue(t)?(D=!0,O=t.some(R=>br(R)||Gt(R)),p=()=>t.map(R=>{if(Ke(R))return R.value;if(br(R))return u(R);if(ge(R))return c?c(R,2):R()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Yn();try{m()}finally{Jn()}}const R=Wr;Wr=f;try{return c?c(t,3,[y]):t(y)}finally{Wr=R}}:p=vn,e&&s){const R=p,M=s===!0?1/0:s;p=()=>Bn(R(),M)}const S=Vp(),x=()=>{f.stop(),S&&S.active&&Wc(S.effects,f)};if(i&&e){const R=e;e=(...M)=>{R(...M),x()}}let U=D?new Array(t.length).fill(Vo):Vo;const N=R=>{if(!(!(f.flags&1)||!f.dirty&&!R))if(e){const M=f.run();if(s||O||(D?M.some((G,T)=>Ir(G,U[T])):Ir(M,U))){m&&m();const G=Wr;Wr=f;try{const T=[M,U===Vo?void 0:D&&U[0]===Vo?[]:U,y];U=M,c?c(e,3,T):e(...T)}finally{Wr=G}}}else f.run()};return l&&l(N),f=new xp(p),f.scheduler=o?()=>o(N,!1):N,y=R=>Uv(R,!1,f),m=f.onStop=()=>{const R=aa.get(f);if(R){if(c)c(R,4);else for(const M of R)M();aa.delete(f)}},e?r?N(!0):U=f.run():o?o(N.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function Bn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))Bn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Bn(t[r],e,n);else if(Ws(t)||ks(t))t.forEach(r=>{Bn(r,e,n)});else if(Sp(t)){for(const r in t)Bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oo(t,e,n,r){try{return r?t(...r):t()}catch(s){$a(s,e,n)}}function Pn(t,e,n,r){if(ge(t)){const s=oo(t,e,n,r);return s&&Ap(s)&&s.catch(i=>{$a(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Pn(t[i],e,n,r));return s}}function $a(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Yn(),oo(i,null,10,[t,c,u]),Jn();return}}Bv(t,n,s,r,o)}function Bv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let gn=-1;const Ds=[];let mr=null,Is=0;const Xp=Promise.resolve();let la=null;function ao(t){const e=la||Xp;return t?e.then(this?t.bind(this):t):e}function jv(t){let e=gn+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=$i(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ru(t){if(!(t.flags&1)){const e=$i(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=$i(n)?St.push(t):St.splice(jv(e),0,t),t.flags|=1,Zp()}}function Zp(){la||(la=Xp.then(tm))}function $v(t){ue(t)?Ds.push(...t):mr&&t.id===-1?mr.splice(Is+1,0,t):t.flags&1||(Ds.push(t),t.flags|=1),Zp()}function Jh(t,e,n=gn+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function em(t){if(Ds.length){const e=[...new Set(Ds)].sort((n,r)=>$i(n)-$i(r));if(Ds.length=0,mr){mr.push(...e);return}for(mr=e,Is=0;Is<mr.length;Is++){const n=mr[Is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mr=null,Is=0}}const $i=t=>t.id==null?t.flags&2?-1:1/0:t.id;function tm(t){try{for(gn=0;gn<St.length;gn++){const e=St[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<St.length;gn++){const e=St[gn];e&&(e.flags&=-2)}gn=-1,St.length=0,em(),la=null,(St.length||Ds.length)&&tm()}}let $t=null,nm=null;function ca(t){const e=$t;return $t=t,nm=t&&t.type.__scopeId||null,e}function Hv(t,e=$t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&fa(-1);const i=ca(e);let o;try{o=t(...s)}finally{ca(i),r._d&&fa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function We(t,e){if($t===null)return t;const n=Wa($t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Oe]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function zr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Yn(),Pn(c,n,8,[t.el,l,t,e]),Jn())}}const zv=Symbol("_vte"),qv=t=>t.__isTeleport,Wv=Symbol("_leaveCb");function su(t,e){t.shapeFlag&6&&t.component?(t.transition=e,su(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rm(t,e){return ge(t)?Tt({name:t.name},e,{setup:t}):t}function sm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ua=new WeakMap;function Ri(t,e,n,r,s=!1){if(ue(t)){t.forEach((O,D)=>Ri(O,e&&(ue(e)?e[D]:e),n,r,s));return}if(Si(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ri(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Wa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Oe?l.refs={}:l.refs,p=l.setupState,m=Re(p),y=p===Oe?bp:O=>Ce(m,O);if(u!=null&&u!==c){if(Xh(e),Je(u))f[u]=null,y(u)&&(p[u]=null);else if(Ke(u)){u.value=null;const O=e;O.k&&(f[O.k]=null)}}if(ge(c))oo(c,l,12,[o,f]);else{const O=Je(c),D=Ke(c);if(O||D){const S=()=>{if(t.f){const x=O?y(c)?p[c]:f[c]:c.value;if(s)ue(x)&&Wc(x,i);else if(ue(x))x.includes(i)||x.push(i);else if(O)f[c]=[i],y(c)&&(p[c]=f[c]);else{const U=[i];c.value=U,t.k&&(f[t.k]=U)}}else O?(f[c]=o,y(c)&&(p[c]=o)):D&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const x=()=>{S(),ua.delete(t)};x.id=-1,ua.set(t,x),Ft(x,n)}else Xh(t),S()}}}function Xh(t){const e=ua.get(t);e&&(e.flags|=8,ua.delete(t))}Ba().requestIdleCallback;Ba().cancelIdleCallback;const Si=t=>!!t.type.__asyncLoader,im=t=>t.type.__isKeepAlive;function Gv(t,e){om(t,"a",e)}function Kv(t,e){om(t,"da",e)}function om(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ha(e,r,n),n){let s=n.parent;for(;s&&s.parent;)im(s.parent.vnode)&&Qv(r,e,n,s),s=s.parent}}function Qv(t,e,n,r){const s=Ha(e,t,r,!0);am(()=>{Wc(r[e],s)},n)}function Ha(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Yn();const l=lo(n),c=Pn(e,n,t,o);return l(),Jn(),c});return r?s.unshift(i):s.push(i),i}}const nr=t=>(e,n=wt)=>{(!zi||t==="sp")&&Ha(t,(...r)=>e(...r),n)},Yv=nr("bm"),us=nr("m"),Jv=nr("bu"),Xv=nr("u"),Zv=nr("bum"),am=nr("um"),eE=nr("sp"),tE=nr("rtg"),nE=nr("rtc");function rE(t,e=wt){Ha("ec",t,e)}const sE="components";function iE(t,e){return aE(sE,t,!0,e)||t}const oE=Symbol.for("v-ndc");function aE(t,e,n=!0,r=!1){const s=$t||wt;if(s){const i=s.type;{const l=YE(i,!1);if(l&&(l===e||l===Qt(e)||l===Fa(Qt(e))))return i}const o=Zh(s[t]||i[t],e)||Zh(s.appContext[t],e);return!o&&r?i:o}}function Zh(t,e){return t&&(t[e]||t[Qt(e)]||t[Fa(Qt(e))])}function Vt(t,e,n,r){let s;const i=n,o=ue(t);if(o||Je(t)){const l=o&&br(t);let c=!1,u=!1;l&&(c=!Gt(t),u=Pr(t),t=ja(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?oa(ct(t[f])):ct(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const ac=t=>t?Cm(t)?Wa(t):ac(t.parent):null,Ci=Tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ac(t.parent),$root:t=>ac(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cm(t),$forceUpdate:t=>t.f||(t.f=()=>{ru(t.update)}),$nextTick:t=>t.n||(t.n=ao.bind(t.proxy)),$watch:t=>PE.bind(t)}),xl=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Ce(t,e),lE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(xl(r,e))return o[e]=1,r[e];if(s!==Oe&&Ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,i[e];if(n!==Oe&&Ce(n,e))return o[e]=4,n[e];lc&&(o[e]=0)}}const f=Ci[e];let p,m;if(f)return e==="$attrs"&&vt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Ce(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ce(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return xl(s,e)?(s[e]=n,!0):r!==Oe&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},l){let c,u;return!!(n[l]||t!==Oe&&l[0]!=="$"&&Ce(t,l)||xl(e,l)||(c=i[0])&&Ce(c,l)||Ce(r,l)||Ce(Ci,l)||Ce(s.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ef(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lc=!0;function cE(t){const e=cm(t),n=t.proxy,r=t.ctx;lc=!1,e.beforeCreate&&tf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:O,activated:D,deactivated:S,beforeDestroy:x,beforeUnmount:U,destroyed:N,unmounted:R,render:M,renderTracked:G,renderTriggered:T,errorCaptured:_,serverPrefetch:v,expose:A,inheritAttrs:b,components:C,directives:w,filters:He}=e;if(u&&uE(u,r,null),o)for(const me in o){const Ie=o[me];ge(Ie)&&(r[me]=Ie.bind(n))}if(s){const me=s.call(n,n);xe(me)&&(t.data=io(me))}if(lc=!0,i)for(const me in i){const Ie=i[me],kt=ge(Ie)?Ie.bind(n,n):ge(Ie.get)?Ie.get.bind(n,n):vn,fn=!ge(Ie)&&ge(Ie.set)?Ie.set.bind(n):vn,xt=Ue({get:kt,set:fn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>xt.value,set:ot=>xt.value=ot})}if(l)for(const me in l)lm(l[me],r,n,me);if(c){const me=ge(c)?c.call(n):c;Reflect.ownKeys(me).forEach(Ie=>{zo(Ie,me[Ie])})}f&&tf(f,t,"c");function Me(me,Ie){ue(Ie)?Ie.forEach(kt=>me(kt.bind(n))):Ie&&me(Ie.bind(n))}if(Me(Yv,p),Me(us,m),Me(Jv,y),Me(Xv,O),Me(Gv,D),Me(Kv,S),Me(rE,_),Me(nE,G),Me(tE,T),Me(Zv,U),Me(am,R),Me(eE,v),ue(A))if(A.length){const me=t.exposed||(t.exposed={});A.forEach(Ie=>{Object.defineProperty(me,Ie,{get:()=>n[Ie],set:kt=>n[Ie]=kt,enumerable:!0})})}else t.exposed||(t.exposed={});M&&t.render===vn&&(t.render=M),b!=null&&(t.inheritAttrs=b),C&&(t.components=C),w&&(t.directives=w),v&&sm(t)}function uE(t,e,n=vn){ue(t)&&(t=cc(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=ln(s.from||r,s.default,!0):i=ln(s.from||r):i=ln(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function tf(t,e,n){Pn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function lm(t,e,n,r){let s=r.includes(".")?Tm(n,r):()=>n[r];if(Je(t)){const i=e[t];ge(i)&&Xr(s,i)}else if(ge(t))Xr(s,t.bind(n));else if(xe(t))if(ue(t))t.forEach(i=>lm(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Xr(s,i,t)}}function cm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ha(c,u,o,!0)),ha(c,e,o)),xe(e)&&i.set(e,c),c}function ha(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ha(t,i,n,!0),s&&s.forEach(o=>ha(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=hE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const hE={data:nf,props:rf,emits:rf,methods:gi,computed:gi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:gi,directives:gi,watch:dE,provide:nf,inject:fE};function nf(t,e){return e?t?function(){return Tt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function fE(t,e){return gi(cc(t),cc(e))}function cc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function gi(t,e){return t?Tt(Object.create(null),t,e):e}function rf(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:Tt(Object.create(null),ef(t),ef(e??{})):e}function dE(t,e){if(!t)return e;if(!e)return t;const n=Tt(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function um(){return{app:null,config:{isNativeTag:bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pE=0;function mE(t,e){return function(r,s=null){ge(r)||(r=Tt({},r)),s!=null&&!xe(s)&&(s=null);const i=um(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:pE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:XE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ge(f.install)?(o.add(f),f.install(u,...p)):ge(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const y=u._ceVNode||Ct(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),c=!0,u._container=f,f.__vue_app__=u,Wa(y.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Pn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Jr;Jr=u;try{return f()}finally{Jr=p}}};return u}}let Jr=null;function zo(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function ln(t,e,n=!1){const r=Sm();if(r||Jr){let s=Jr?Jr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function gE(){return!!(Sm()||Jr)}const hm={},fm=()=>Object.create(hm),dm=t=>Object.getPrototypeOf(t)===hm;function _E(t,e,n,r=!1){const s={},i=fm();t.propsDefaults=Object.create(null),pm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Re(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(za(t.emitsOptions,m))continue;const y=e[m];if(c)if(Ce(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const O=Qt(m);s[O]=uc(c,l,O,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{pm(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Ce(e,p)&&((f=cs(p))===p||!Ce(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=uc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ce(e,p))&&(delete i[p],u=!0)}u&&Fn(t.attrs,"set","")}function pm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ii(c))continue;const u=e[c];let f;s&&Ce(s,f=Qt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:za(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Re(n),u=l||Oe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=uc(s,c,p,u[p],t,!Ce(u,p))}}return o}function uc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ce(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=lo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===cs(n))&&(r=!0))}return r}const vE=new WeakMap;function mm(t,e,n=!1){const r=n?vE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const f=p=>{c=!0;const[m,y]=mm(p,e,!0);Tt(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return xe(t)&&r.set(t,Ps),Ps;if(ue(i))for(let f=0;f<i.length;f++){const p=Qt(i[f]);sf(p)&&(o[p]=Oe)}else if(i)for(const f in i){const p=Qt(f);if(sf(p)){const m=i[f],y=o[p]=ue(m)||ge(m)?{type:m}:Tt({},m),O=y.type;let D=!1,S=!0;if(ue(O))for(let x=0;x<O.length;++x){const U=O[x],N=ge(U)&&U.name;if(N==="Boolean"){D=!0;break}else N==="String"&&(S=!1)}else D=ge(O)&&O.name==="Boolean";y[0]=D,y[1]=S,(D||Ce(y,"default"))&&l.push(p)}}const u=[o,l];return xe(t)&&r.set(t,u),u}function sf(t){return t[0]!=="$"&&!Ii(t)}const iu=t=>t==="_"||t==="_ctx"||t==="$stable",ou=t=>ue(t)?t.map(yn):[yn(t)],EE=(t,e,n)=>{if(e._n)return e;const r=Hv((...s)=>ou(e(...s)),n);return r._c=!1,r},gm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(iu(s))continue;const i=t[s];if(ge(i))e[s]=EE(s,i,r);else if(i!=null){const o=ou(i);e[s]=()=>o}}},_m=(t,e)=>{const n=ou(e);t.slots.default=()=>n},ym=(t,e,n)=>{for(const r in e)(n||!iu(r))&&(t[r]=e[r])},wE=(t,e,n)=>{const r=t.slots=fm();if(t.vnode.shapeFlag&32){const s=e._;s?(ym(r,e,n),n&&Cp(r,"_",s,!0)):gm(e,r)}else e&&_m(t,e)},TE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:ym(s,e,n):(i=!e.$stable,gm(e,s)),o=e}else e&&(_m(t,e),o={default:1});if(i)for(const l in s)!iu(l)&&o[l]==null&&delete s[l]},Ft=LE;function IE(t){return bE(t)}function bE(t,e){const n=Ba();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=vn,insertStaticContent:O}=t,D=(E,I,P,j=null,H=null,F=null,Y=void 0,K=null,q=!!I.dynamicChildren)=>{if(E===I)return;E&&!pi(E,I)&&(j=B(E),ot(E,H,F,!0),E=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:W,ref:ae,shapeFlag:X}=I;switch(W){case qa:S(E,I,P,j);break;case kr:x(E,I,P,j);break;case qo:E==null&&U(I,P,j,Y);break;case De:C(E,I,P,j,H,F,Y,K,q);break;default:X&1?M(E,I,P,j,H,F,Y,K,q):X&6?w(E,I,P,j,H,F,Y,K,q):(X&64||X&128)&&W.process(E,I,P,j,H,F,Y,K,q,se)}ae!=null&&H?Ri(ae,E&&E.ref,F,I||E,!I):ae==null&&E&&E.ref!=null&&Ri(E.ref,null,F,E,!0)},S=(E,I,P,j)=>{if(E==null)r(I.el=l(I.children),P,j);else{const H=I.el=E.el;I.children!==E.children&&u(H,I.children)}},x=(E,I,P,j)=>{E==null?r(I.el=c(I.children||""),P,j):I.el=E.el},U=(E,I,P,j)=>{[E.el,E.anchor]=O(E.children,I,P,j,E.el,E.anchor)},N=({el:E,anchor:I},P,j)=>{let H;for(;E&&E!==I;)H=m(E),r(E,P,j),E=H;r(I,P,j)},R=({el:E,anchor:I})=>{let P;for(;E&&E!==I;)P=m(E),s(E),E=P;s(I)},M=(E,I,P,j,H,F,Y,K,q)=>{I.type==="svg"?Y="svg":I.type==="math"&&(Y="mathml"),E==null?G(I,P,j,H,F,Y,K,q):v(E,I,H,F,Y,K,q)},G=(E,I,P,j,H,F,Y,K)=>{let q,W;const{props:ae,shapeFlag:X,transition:ie,dirs:ce}=E;if(q=E.el=o(E.type,F,ae&&ae.is,ae),X&8?f(q,E.children):X&16&&_(E.children,q,null,j,H,Ml(E,F),Y,K),ce&&zr(E,null,j,"created"),T(q,E,E.scopeId,Y,j),ae){for(const ke in ae)ke!=="value"&&!Ii(ke)&&i(q,ke,null,ae[ke],F,j);"value"in ae&&i(q,"value",null,ae.value,F),(W=ae.onVnodeBeforeMount)&&mn(W,j,E)}ce&&zr(E,null,j,"beforeMount");const ye=AE(H,ie);ye&&ie.beforeEnter(q),r(q,I,P),((W=ae&&ae.onVnodeMounted)||ye||ce)&&Ft(()=>{W&&mn(W,j,E),ye&&ie.enter(q),ce&&zr(E,null,j,"mounted")},H)},T=(E,I,P,j,H)=>{if(P&&y(E,P),j)for(let F=0;F<j.length;F++)y(E,j[F]);if(H){let F=H.subTree;if(I===F||bm(F.type)&&(F.ssContent===I||F.ssFallback===I)){const Y=H.vnode;T(E,Y,Y.scopeId,Y.slotScopeIds,H.parent)}}},_=(E,I,P,j,H,F,Y,K,q=0)=>{for(let W=q;W<E.length;W++){const ae=E[W]=K?gr(E[W]):yn(E[W]);D(null,ae,I,P,j,H,F,Y,K)}},v=(E,I,P,j,H,F,Y)=>{const K=I.el=E.el;let{patchFlag:q,dynamicChildren:W,dirs:ae}=I;q|=E.patchFlag&16;const X=E.props||Oe,ie=I.props||Oe;let ce;if(P&&qr(P,!1),(ce=ie.onVnodeBeforeUpdate)&&mn(ce,P,I,E),ae&&zr(I,E,P,"beforeUpdate"),P&&qr(P,!0),(X.innerHTML&&ie.innerHTML==null||X.textContent&&ie.textContent==null)&&f(K,""),W?A(E.dynamicChildren,W,K,P,j,Ml(I,H),F):Y||Ie(E,I,K,null,P,j,Ml(I,H),F,!1),q>0){if(q&16)b(K,X,ie,P,H);else if(q&2&&X.class!==ie.class&&i(K,"class",null,ie.class,H),q&4&&i(K,"style",X.style,ie.style,H),q&8){const ye=I.dynamicProps;for(let ke=0;ke<ye.length;ke++){const Ae=ye[ke],pt=X[Ae],mt=ie[Ae];(mt!==pt||Ae==="value")&&i(K,Ae,pt,mt,H,P)}}q&1&&E.children!==I.children&&f(K,I.children)}else!Y&&W==null&&b(K,X,ie,P,H);((ce=ie.onVnodeUpdated)||ae)&&Ft(()=>{ce&&mn(ce,P,I,E),ae&&zr(I,E,P,"updated")},j)},A=(E,I,P,j,H,F,Y)=>{for(let K=0;K<I.length;K++){const q=E[K],W=I[K],ae=q.el&&(q.type===De||!pi(q,W)||q.shapeFlag&198)?p(q.el):P;D(q,W,ae,null,j,H,F,Y,!0)}},b=(E,I,P,j,H)=>{if(I!==P){if(I!==Oe)for(const F in I)!Ii(F)&&!(F in P)&&i(E,F,I[F],null,H,j);for(const F in P){if(Ii(F))continue;const Y=P[F],K=I[F];Y!==K&&F!=="value"&&i(E,F,K,Y,H,j)}"value"in P&&i(E,"value",I.value,P.value,H)}},C=(E,I,P,j,H,F,Y,K,q)=>{const W=I.el=E?E.el:l(""),ae=I.anchor=E?E.anchor:l("");let{patchFlag:X,dynamicChildren:ie,slotScopeIds:ce}=I;ce&&(K=K?K.concat(ce):ce),E==null?(r(W,P,j),r(ae,P,j),_(I.children||[],P,ae,H,F,Y,K,q)):X>0&&X&64&&ie&&E.dynamicChildren?(A(E.dynamicChildren,ie,P,H,F,Y,K),(I.key!=null||H&&I===H.subTree)&&vm(E,I,!0)):Ie(E,I,P,ae,H,F,Y,K,q)},w=(E,I,P,j,H,F,Y,K,q)=>{I.slotScopeIds=K,E==null?I.shapeFlag&512?H.ctx.activate(I,P,j,Y,q):He(I,P,j,H,F,Y,q):ft(E,I,q)},He=(E,I,P,j,H,F,Y)=>{const K=E.component=qE(E,j,H);if(im(E)&&(K.ctx.renderer=se),WE(K,!1,Y),K.asyncDep){if(H&&H.registerDep(K,Me,Y),!E.el){const q=K.subTree=Ct(kr);x(null,q,I,P),E.placeholder=q.el}}else Me(K,E,I,P,H,F,Y)},ft=(E,I,P)=>{const j=I.component=E.component;if(xE(E,I,P))if(j.asyncDep&&!j.asyncResolved){me(j,I,P);return}else j.next=I,j.update();else I.el=E.el,j.vnode=I},Me=(E,I,P,j,H,F,Y)=>{const K=()=>{if(E.isMounted){let{next:X,bu:ie,u:ce,parent:ye,vnode:ke}=E;{const Lt=Em(E);if(Lt){X&&(X.el=ke.el,me(E,X,Y)),Lt.asyncDep.then(()=>{E.isUnmounted||K()});return}}let Ae=X,pt;qr(E,!1),X?(X.el=ke.el,me(E,X,Y)):X=ke,ie&&Ho(ie),(pt=X.props&&X.props.onVnodeBeforeUpdate)&&mn(pt,ye,X,ke),qr(E,!0);const mt=af(E),Mt=E.subTree;E.subTree=mt,D(Mt,mt,p(Mt.el),B(Mt),E,H,F),X.el=mt.el,Ae===null&&ME(E,mt.el),ce&&Ft(ce,H),(pt=X.props&&X.props.onVnodeUpdated)&&Ft(()=>mn(pt,ye,X,ke),H)}else{let X;const{el:ie,props:ce}=I,{bm:ye,m:ke,parent:Ae,root:pt,type:mt}=E,Mt=Si(I);qr(E,!1),ye&&Ho(ye),!Mt&&(X=ce&&ce.onVnodeBeforeMount)&&mn(X,Ae,I),qr(E,!0);{pt.ce&&pt.ce._def.shadowRoot!==!1&&pt.ce._injectChildStyle(mt);const Lt=E.subTree=af(E);D(null,Lt,P,j,E,H,F),I.el=Lt.el}if(ke&&Ft(ke,H),!Mt&&(X=ce&&ce.onVnodeMounted)){const Lt=I;Ft(()=>mn(X,Ae,Lt),H)}(I.shapeFlag&256||Ae&&Si(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&E.a&&Ft(E.a,H),E.isMounted=!0,I=P=j=null}};E.scope.on();const q=E.effect=new xp(K);E.scope.off();const W=E.update=q.run.bind(q),ae=E.job=q.runIfDirty.bind(q);ae.i=E,ae.id=E.uid,q.scheduler=()=>ru(ae),qr(E,!0),W()},me=(E,I,P)=>{I.component=E;const j=E.vnode.props;E.vnode=I,E.next=null,yE(E,I.props,j,P),TE(E,I.children,P),Yn(),Jh(E),Jn()},Ie=(E,I,P,j,H,F,Y,K,q=!1)=>{const W=E&&E.children,ae=E?E.shapeFlag:0,X=I.children,{patchFlag:ie,shapeFlag:ce}=I;if(ie>0){if(ie&128){fn(W,X,P,j,H,F,Y,K,q);return}else if(ie&256){kt(W,X,P,j,H,F,Y,K,q);return}}ce&8?(ae&16&&dt(W,H,F),X!==W&&f(P,X)):ae&16?ce&16?fn(W,X,P,j,H,F,Y,K,q):dt(W,H,F,!0):(ae&8&&f(P,""),ce&16&&_(X,P,j,H,F,Y,K,q))},kt=(E,I,P,j,H,F,Y,K,q)=>{E=E||Ps,I=I||Ps;const W=E.length,ae=I.length,X=Math.min(W,ae);let ie;for(ie=0;ie<X;ie++){const ce=I[ie]=q?gr(I[ie]):yn(I[ie]);D(E[ie],ce,P,null,H,F,Y,K,q)}W>ae?dt(E,H,F,!0,!1,X):_(I,P,j,H,F,Y,K,q,X)},fn=(E,I,P,j,H,F,Y,K,q)=>{let W=0;const ae=I.length;let X=E.length-1,ie=ae-1;for(;W<=X&&W<=ie;){const ce=E[W],ye=I[W]=q?gr(I[W]):yn(I[W]);if(pi(ce,ye))D(ce,ye,P,null,H,F,Y,K,q);else break;W++}for(;W<=X&&W<=ie;){const ce=E[X],ye=I[ie]=q?gr(I[ie]):yn(I[ie]);if(pi(ce,ye))D(ce,ye,P,null,H,F,Y,K,q);else break;X--,ie--}if(W>X){if(W<=ie){const ce=ie+1,ye=ce<ae?I[ce].el:j;for(;W<=ie;)D(null,I[W]=q?gr(I[W]):yn(I[W]),P,ye,H,F,Y,K,q),W++}}else if(W>ie)for(;W<=X;)ot(E[W],H,F,!0),W++;else{const ce=W,ye=W,ke=new Map;for(W=ye;W<=ie;W++){const at=I[W]=q?gr(I[W]):yn(I[W]);at.key!=null&&ke.set(at.key,W)}let Ae,pt=0;const mt=ie-ye+1;let Mt=!1,Lt=0;const nn=new Array(mt);for(W=0;W<mt;W++)nn[W]=0;for(W=ce;W<=X;W++){const at=E[W];if(pt>=mt){ot(at,H,F,!0);continue}let nt;if(at.key!=null)nt=ke.get(at.key);else for(Ae=ye;Ae<=ie;Ae++)if(nn[Ae-ye]===0&&pi(at,I[Ae])){nt=Ae;break}nt===void 0?ot(at,H,F,!0):(nn[nt-ye]=W+1,nt>=Lt?Lt=nt:Mt=!0,D(at,I[nt],P,null,H,F,Y,K,q),pt++)}const _s=Mt?RE(nn):Ps;for(Ae=_s.length-1,W=mt-1;W>=0;W--){const at=ye+W,nt=I[at],Xs=I[at+1],Fr=at+1<ae?Xs.el||Xs.placeholder:j;nn[W]===0?D(null,nt,P,Fr,H,F,Y,K,q):Mt&&(Ae<0||W!==_s[Ae]?xt(nt,P,Fr,2):Ae--)}}},xt=(E,I,P,j,H=null)=>{const{el:F,type:Y,transition:K,children:q,shapeFlag:W}=E;if(W&6){xt(E.component.subTree,I,P,j);return}if(W&128){E.suspense.move(I,P,j);return}if(W&64){Y.move(E,I,P,se);return}if(Y===De){r(F,I,P);for(let X=0;X<q.length;X++)xt(q[X],I,P,j);r(E.anchor,I,P);return}if(Y===qo){N(E,I,P);return}if(j!==2&&W&1&&K)if(j===0)K.beforeEnter(F),r(F,I,P),Ft(()=>K.enter(F),H);else{const{leave:X,delayLeave:ie,afterLeave:ce}=K,ye=()=>{E.ctx.isUnmounted?s(F):r(F,I,P)},ke=()=>{F._isLeaving&&F[Wv](!0),X(F,()=>{ye(),ce&&ce()})};ie?ie(F,ye,ke):ke()}else r(F,I,P)},ot=(E,I,P,j=!1,H=!1)=>{const{type:F,props:Y,ref:K,children:q,dynamicChildren:W,shapeFlag:ae,patchFlag:X,dirs:ie,cacheIndex:ce}=E;if(X===-2&&(H=!1),K!=null&&(Yn(),Ri(K,null,P,E,!0),Jn()),ce!=null&&(I.renderCache[ce]=void 0),ae&256){I.ctx.deactivate(E);return}const ye=ae&1&&ie,ke=!Si(E);let Ae;if(ke&&(Ae=Y&&Y.onVnodeBeforeUnmount)&&mn(Ae,I,E),ae&6)tn(E.component,P,j);else{if(ae&128){E.suspense.unmount(P,j);return}ye&&zr(E,null,I,"beforeUnmount"),ae&64?E.type.remove(E,I,P,se,j):W&&!W.hasOnce&&(F!==De||X>0&&X&64)?dt(W,I,P,!1,!0):(F===De&&X&384||!H&&ae&16)&&dt(q,I,P),j&&xn(E)}(ke&&(Ae=Y&&Y.onVnodeUnmounted)||ye)&&Ft(()=>{Ae&&mn(Ae,I,E),ye&&zr(E,null,I,"unmounted")},P)},xn=E=>{const{type:I,el:P,anchor:j,transition:H}=E;if(I===De){en(P,j);return}if(I===qo){R(E);return}const F=()=>{s(P),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(E.shapeFlag&1&&H&&!H.persisted){const{leave:Y,delayLeave:K}=H,q=()=>Y(P,F);K?K(E.el,F,q):q()}else F()},en=(E,I)=>{let P;for(;E!==I;)P=m(E),s(E),E=P;s(I)},tn=(E,I,P)=>{const{bum:j,scope:H,job:F,subTree:Y,um:K,m:q,a:W}=E;of(q),of(W),j&&Ho(j),H.stop(),F&&(F.flags|=8,ot(Y,E,I,P)),K&&Ft(K,I),Ft(()=>{E.isUnmounted=!0},I)},dt=(E,I,P,j=!1,H=!1,F=0)=>{for(let Y=F;Y<E.length;Y++)ot(E[Y],I,P,j,H)},B=E=>{if(E.shapeFlag&6)return B(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),P=I&&I[zv];return P?m(P):I};let Z=!1;const J=(E,I,P)=>{E==null?I._vnode&&ot(I._vnode,null,null,!0):D(I._vnode||null,E,I,null,null,null,P),I._vnode=E,Z||(Z=!0,Jh(),em(),Z=!1)},se={p:D,um:ot,m:xt,r:xn,mt:He,mc:_,pc:Ie,pbc:A,n:B,o:t};return{render:J,hydrate:void 0,createApp:mE(J)}}function Ml({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function AE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vm(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=gr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&vm(o,l)),l.type===qa&&l.patchFlag!==-1&&(l.el=o.el),l.type===kr&&!l.el&&(l.el=o.el)}}function RE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Em(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Em(e)}function of(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const SE=Symbol.for("v-scx"),CE=()=>ln(SE);function Xr(t,e,n){return wm(t,e,n)}function wm(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,l=Tt({},n),c=e&&r||!e&&i!=="post";let u;if(zi){if(i==="sync"){const y=CE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=vn,y.resume=vn,y.pause=vn,y}}const f=wt;l.call=(y,O,D)=>Pn(y,f,O,D);let p=!1;i==="post"?l.scheduler=y=>{Ft(y,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,O)=>{O?y():ru(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=Fv(t,e,l);return zi&&(u?u.push(m):c&&m()),m}function PE(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?Tm(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=lo(this),l=wm(s,i.bind(r),n);return o(),l}function Tm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const kE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qt(e)}Modifiers`]||t[`${cs(e)}Modifiers`];function DE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&kE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Je(f)?f.trim():f)),o.number&&(s=n.map(sa)));let l,c=r[l=kl(e)]||r[l=kl(Qt(e))];!c&&i&&(c=r[l=kl(cs(e))]),c&&Pn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Pn(u,t,6,s)}}const NE=new WeakMap;function Im(t,e,n=!1){const r=n?NE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=u=>{const f=Im(u,e,!0);f&&(l=!0,Tt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(xe(t)&&r.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):Tt(o,i),xe(t)&&r.set(t,o),o)}function za(t,e){return!t||!La(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,cs(e))||Ce(t,e))}function af(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:y,ctx:O,inheritAttrs:D}=t,S=ca(t);let x,U;try{if(n.shapeFlag&4){const R=s||r,M=R;x=yn(u.call(M,R,f,p,y,m,O)),U=l}else{const R=e;x=yn(R.length>1?R(p,{attrs:l,slots:o,emit:c}):R(p,null)),U=e.props?l:OE(l)}}catch(R){Pi.length=0,$a(R,t,1),x=Ct(kr)}let N=x;if(U&&D!==!1){const R=Object.keys(U),{shapeFlag:M}=N;R.length&&M&7&&(i&&R.some(qc)&&(U=VE(U,i)),N=Ms(N,U,!1,!0))}return n.dirs&&(N=Ms(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&su(N,n.transition),x=N,ca(S),x}const OE=t=>{let e;for(const n in t)(n==="class"||n==="style"||La(n))&&((e||(e={}))[n]=t[n]);return e},VE=(t,e)=>{const n={};for(const r in t)(!qc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!za(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?lf(r,o,u):!0:!!o;return!1}function lf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!za(n,i))return!0}return!1}function ME({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const bm=t=>t.__isSuspense;function LE(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):$v(t)}const De=Symbol.for("v-fgt"),qa=Symbol.for("v-txt"),kr=Symbol.for("v-cmt"),qo=Symbol.for("v-stc"),Pi=[];let Ht=null;function te(t=!1){Pi.push(Ht=t?null:[])}function UE(){Pi.pop(),Ht=Pi[Pi.length-1]||null}let Hi=1;function fa(t,e=!1){Hi+=t,t<0&&Ht&&e&&(Ht.hasOnce=!0)}function Am(t){return t.dynamicChildren=Hi>0?Ht||Ps:null,UE(),Hi>0&&Ht&&Ht.push(t),t}function oe(t,e,n,r,s,i){return Am(V(t,e,n,r,s,i,!0))}function Nt(t,e,n,r,s){return Am(Ct(t,e,n,r,s,!0))}function da(t){return t?t.__v_isVNode===!0:!1}function pi(t,e){return t.type===e.type&&t.key===e.key}const Rm=({key:t})=>t??null,Wo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ke(t)||ge(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===De?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rm(e),ref:e&&Wo(e),scopeId:nm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return l?(au(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),Hi>0&&!o&&Ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ht.push(c),c}const Ct=FE;function FE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===oE)&&(t=kr),da(t)){const l=Ms(t,e,!0);return n&&au(l,n),Hi>0&&!i&&Ht&&(l.shapeFlag&6?Ht[Ht.indexOf(t)]=l:Ht.push(l)),l.patchFlag=-2,l}if(JE(t)&&(t=t.__vccOpts),e){e=BE(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=Qn(l)),xe(c)&&(tu(c)&&!ue(c)&&(c=Tt({},c)),e.style=es(c))}const o=Je(t)?1:bm(t)?128:qv(t)?64:xe(t)?4:ge(t)?2:0;return V(t,e,n,r,s,o,i,!0)}function BE(t){return t?tu(t)||dm(t)?Tt({},t):t:null}function Ms(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?$E(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Rm(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Wo(e)):[i,Wo(e)]:Wo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ms(t.ssContent),ssFallback:t.ssFallback&&Ms(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&su(f,c.clone(f)),f}function cn(t=" ",e=0){return Ct(qa,null,t,e)}function jE(t,e){const n=Ct(qo,null,t);return n.staticCount=e,n}function Yt(t="",e=!1){return e?(te(),Nt(kr,null,t)):Ct(kr,null,t)}function yn(t){return t==null||typeof t=="boolean"?Ct(kr):ue(t)?Ct(De,null,t.slice()):da(t)?gr(t):Ct(qa,null,String(t))}function gr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ms(t)}function au(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),au(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!dm(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),r&64?(n=16,e=[cn(e)]):n=8);t.children=e,t.shapeFlag|=n}function $E(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Qn([e.class,r.class]));else if(s==="style")e.style=es([e.style,r.style]);else if(La(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function mn(t,e,n,r=null){Pn(t,e,7,[n,r])}const HE=um();let zE=0;function qE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||HE,i={uid:zE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mm(r,s),emitsOptions:Im(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=DE.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const Sm=()=>wt||$t;let pa,hc;{const t=Ba(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};pa=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),hc=e("__VUE_SSR_SETTERS__",n=>zi=n)}const lo=t=>{const e=wt;return pa(t),t.scope.on(),()=>{t.scope.off(),pa(e)}},cf=()=>{wt&&wt.scope.off(),pa(null)};function Cm(t){return t.vnode.shapeFlag&4}let zi=!1;function WE(t,e=!1,n=!1){e&&hc(e);const{props:r,children:s}=t.vnode,i=Cm(t);_E(t,r,i,e),wE(t,s,n||e);const o=i?GE(t,e):void 0;return e&&hc(!1),o}function GE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,lE);const{setup:r}=n;if(r){Yn();const s=t.setupContext=r.length>1?QE(t):null,i=lo(t),o=oo(r,t,0,[t.props,s]),l=Ap(o);if(Jn(),i(),(l||t.sp)&&!Si(t)&&sm(t),l){if(o.then(cf,cf),e)return o.then(c=>{uf(t,c)}).catch(c=>{$a(c,t,0)});t.asyncDep=o}else uf(t,o)}else Pm(t)}function uf(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Jp(e)),Pm(t)}function Pm(t,e,n){const r=t.type;t.render||(t.render=r.render||vn);{const s=lo(t);Yn();try{cE(t)}finally{Jn(),s()}}}const KE={get(t,e){return vt(t,"get",""),t[e]}};function QE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,KE),slots:t.slots,emit:t.emit,expose:e}}function Wa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jp(nu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ci)return Ci[n](t)},has(e,n){return n in e||n in Ci}})):t.proxy}function YE(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function JE(t){return ge(t)&&"__vccOpts"in t}const Ue=(t,e)=>Lv(t,e,zi);function km(t,e,n){try{fa(-1);const r=arguments.length;return r===2?xe(e)&&!ue(e)?da(e)?Ct(t,null,[e]):Ct(t,e):Ct(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&da(n)&&(n=[n]),Ct(t,e,n))}finally{fa(1)}}const XE="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fc;const hf=typeof window<"u"&&window.trustedTypes;if(hf)try{fc=hf.createPolicy("vue",{createHTML:t=>t})}catch{}const Dm=fc?t=>fc.createHTML(t):t=>t,ZE="http://www.w3.org/2000/svg",ew="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,ff=Un&&Un.createElement("template"),tw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Un.createElementNS(ZE,t):e==="mathml"?Un.createElementNS(ew,t):n?Un.createElement(t,{is:n}):Un.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ff.innerHTML=Dm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=ff.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nw=Symbol("_vtc");function rw(t,e,n){const r=t[nw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const df=Symbol("_vod"),sw=Symbol("_vsh"),iw=Symbol(""),ow=/(?:^|;)\s*display\s*:/;function aw(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Go(r,l,"")}else for(const o in e)n[o]==null&&Go(r,o,"");for(const o in n)o==="display"&&(i=!0),Go(r,o,n[o])}else if(s){if(e!==n){const o=r[iw];o&&(n+=";"+o),r.cssText=n,i=ow.test(n)}}else e&&t.removeAttribute("style");df in t&&(t[df]=i?r.display:"",t[sw]&&(r.display="none"))}const pf=/\s*!important$/;function Go(t,e,n){if(ue(n))n.forEach(r=>Go(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lw(t,e);pf.test(n)?t.setProperty(cs(r),n.replace(pf,""),"important"):t[r]=n}}const mf=["Webkit","Moz","ms"],Ll={};function lw(t,e){const n=Ll[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return Ll[e]=r;r=Fa(r);for(let s=0;s<mf.length;s++){const i=mf[s]+r;if(i in t)return Ll[e]=i}return e}const gf="http://www.w3.org/1999/xlink";function _f(t,e,n,r,s,i=lv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(gf,e.slice(6,e.length)):t.setAttributeNS(gf,e,n):n==null||i&&!Pp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Cn(n)?String(n):n)}function yf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Dm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Pp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function jn(t,e,n,r){t.addEventListener(e,n,r)}function cw(t,e,n,r){t.removeEventListener(e,n,r)}const vf=Symbol("_vei");function uw(t,e,n,r,s=null){const i=t[vf]||(t[vf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=hw(e);if(r){const u=i[e]=pw(r,s);jn(t,l,u,c)}else o&&(cw(t,l,o,c),i[e]=void 0)}}const Ef=/(?:Once|Passive|Capture)$/;function hw(t){let e;if(Ef.test(t)){e={};let r;for(;r=t.match(Ef);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let Ul=0;const fw=Promise.resolve(),dw=()=>Ul||(fw.then(()=>Ul=0),Ul=Date.now());function pw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pn(mw(r,n.value),e,5,[r])};return n.value=t,n.attached=dw(),n}function mw(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?rw(t,r,o):e==="style"?aw(t,n,r):La(e)?qc(e)||uw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_w(t,e,r,o))?(yf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_f(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?yf(t,Qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_f(t,e,r,o))};function _w(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&wf(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wf(e)&&Je(n)?!1:e in t}const Dr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Ho(e,n):e};function yw(t){t.target.composing=!0}function Tf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kt=Symbol("_assign"),Pt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Kt]=Dr(s);const i=r||s.props&&s.props.type==="number";jn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=sa(l)),t[Kt](l)}),n&&jn(t,"change",()=>{t.value=t.value.trim()}),e||(jn(t,"compositionstart",yw),jn(t,"compositionend",Tf),jn(t,"change",Tf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Kt]=Dr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?sa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Nm={deep:!0,created(t,e,n){t[Kt]=Dr(n),jn(t,"change",()=>{const r=t._modelValue,s=Ls(t),i=t.checked,o=t[Kt];if(ue(r)){const l=Kc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Ws(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Om(t,i))})},mounted:If,beforeUpdate(t,e,n){t[Kt]=Dr(n),If(t,e,n)}};function If(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=Kc(e,r.props.value)>-1;else if(Ws(e))s=e.has(r.props.value);else{if(e===n)return;s=ts(e,Om(t,!0))}t.checked!==s&&(t.checked=s)}const vw={created(t,{value:e},n){t.checked=ts(e,n.props.value),t[Kt]=Dr(n),jn(t,"change",()=>{t[Kt](Ls(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Kt]=Dr(r),e!==n&&(t.checked=ts(e,r.props.value))}},ns={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ws(e);jn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sa(Ls(o)):Ls(o));t[Kt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ao(()=>{t._assigning=!1})}),t[Kt]=Dr(r)},mounted(t,{value:e}){bf(t,e)},beforeUpdate(t,e,n){t[Kt]=Dr(n)},updated(t,{value:e}){t._assigning||bf(t,e)}};function bf(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!Ws(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ls(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Kc(e,l)>-1}else o.selected=e.has(l);else if(ts(Ls(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ls(t){return"_value"in t?t._value:t.value}function Om(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Vm={created(t,e,n){xo(t,e,n,null,"created")},mounted(t,e,n){xo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){xo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){xo(t,e,n,r,"updated")}};function Ew(t,e){switch(t){case"SELECT":return ns;case"TEXTAREA":return Pt;default:switch(e){case"checkbox":return Nm;case"radio":return vw;default:return Pt}}}function xo(t,e,n,r,s){const o=Ew(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const ww=["ctrl","shift","alt","meta"],Tw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ww.some(n=>t[`${n}Key`]&&!e.includes(n))},lu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=Tw[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},Iw=Tt({patchProp:gw},tw);let Af;function bw(){return Af||(Af=IE(Iw))}const Aw=((...t)=>{const e=bw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Sw(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Rw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Rw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Sw(t){return Je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let xm;const Ga=t=>xm=t,Mm=Symbol();function dc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ki;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ki||(ki={}));function Cw(){const t=Op(!0),e=t.run(()=>ne({}));let n=[],r=[];const s=nu({install(i){Ga(s),s._a=i,i.provide(Mm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Lm=()=>{};function Rf(t,e,n,r=Lm){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&Vp()&&uv(s),s}function Ts(t,...e){t.forEach(n=>{n(...e)})}const Pw=t=>t(),Sf=Symbol(),Fl=Symbol();function pc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];dc(s)&&dc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!br(r)?t[n]=pc(s,r):t[n]=r}return t}const kw=Symbol();function Dw(t){return!dc(t)||!Object.prototype.hasOwnProperty.call(t,kw)}const{assign:pr}=Object;function Nw(t){return!!(Ke(t)&&t.effect)}function Ow(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=Ov(n.state.value[t]);return pr(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=nu(Ue(()=>{Ga(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return c=Um(t,u,e,n,r,!0),c}function Um(t,e,n={},r,s,i){let o;const l=pr({actions:{}},n),c={deep:!0};let u,f,p=new Set,m=new Set,y;const O=r.state.value[t];!i&&!O&&(r.state.value[t]={}),ne({});let D;function S(_){let v;u=f=!1,typeof _=="function"?(_(r.state.value[t]),v={type:ki.patchFunction,storeId:t,events:y}):(pc(r.state.value[t],_),v={type:ki.patchObject,payload:_,storeId:t,events:y});const A=D=Symbol();ao().then(()=>{D===A&&(u=!0)}),f=!0,Ts(p,v,r.state.value[t])}const x=i?function(){const{state:v}=n,A=v?v():{};this.$patch(b=>{pr(b,A)})}:Lm;function U(){o.stop(),p.clear(),m.clear(),r._s.delete(t)}const N=(_,v="")=>{if(Sf in _)return _[Fl]=v,_;const A=function(){Ga(r);const b=Array.from(arguments),C=new Set,w=new Set;function He(me){C.add(me)}function ft(me){w.add(me)}Ts(m,{args:b,name:A[Fl],store:M,after:He,onError:ft});let Me;try{Me=_.apply(this&&this.$id===t?this:M,b)}catch(me){throw Ts(w,me),me}return Me instanceof Promise?Me.then(me=>(Ts(C,me),me)).catch(me=>(Ts(w,me),Promise.reject(me))):(Ts(C,Me),Me)};return A[Sf]=!0,A[Fl]=v,A},R={_p:r,$id:t,$onAction:Rf.bind(null,m),$patch:S,$reset:x,$subscribe(_,v={}){const A=Rf(p,_,v.detached,()=>b()),b=o.run(()=>Xr(()=>r.state.value[t],C=>{(v.flush==="sync"?f:u)&&_({storeId:t,type:ki.direct,events:y},C)},pr({},c,v)));return A},$dispose:U},M=io(R);r._s.set(t,M);const T=(r._a&&r._a.runWithContext||Pw)(()=>r._e.run(()=>(o=Op()).run(()=>e({action:N}))));for(const _ in T){const v=T[_];if(Ke(v)&&!Nw(v)||br(v))i||(O&&Dw(v)&&(Ke(v)?v.value=O[_]:pc(v,O[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const A=N(v,_);T[_]=A,l.actions[_]=v}}return pr(M,T),pr(Re(M),T),Object.defineProperty(M,"$state",{get:()=>r.state.value[t],set:_=>{S(v=>{pr(v,_)})}}),r._p.forEach(_=>{pr(M,o.run(()=>_({store:M,app:r._a,pinia:r,options:l})))}),O&&i&&n.hydrate&&n.hydrate(M.$state,O),u=!0,f=!0,M}/*! #__NO_SIDE_EFFECTS__ */function Vw(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=gE();return o=o||(c?ln(Mm,null):null),o&&Ga(o),o=xm,o._s.has(t)||(s?Um(t,e,r,o):Ow(t,r,o)),o._s.get(t)}return i.$id=t,i}const xw={class:"app_holder"},Mw={__name:"App",setup(t){return(e,n)=>{const r=iE("router-view");return te(),oe("div",xw,[Ct(r)])}}};/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const bs=typeof document<"u";function Fm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Fm(t.default)}const Se=Object.assign;function Bl(t,e){const n={};for(const r in e){const s=e[r];n[r]=hn(s)?s.map(t):t(s)}return n}const Di=()=>{},hn=Array.isArray;function Cf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Bm=/#/g,Uw=/&/g,Fw=/\//g,Bw=/=/g,jw=/\?/g,jm=/\+/g,$w=/%5B/g,Hw=/%5D/g,$m=/%5E/g,zw=/%60/g,Hm=/%7B/g,qw=/%7C/g,zm=/%7D/g,Ww=/%20/g;function cu(t){return t==null?"":encodeURI(""+t).replace(qw,"|").replace($w,"[").replace(Hw,"]")}function Gw(t){return cu(t).replace(Hm,"{").replace(zm,"}").replace($m,"^")}function mc(t){return cu(t).replace(jm,"%2B").replace(Ww,"+").replace(Bm,"%23").replace(Uw,"%26").replace(zw,"`").replace(Hm,"{").replace(zm,"}").replace($m,"^")}function Kw(t){return mc(t).replace(Bw,"%3D")}function Qw(t){return cu(t).replace(Bm,"%23").replace(jw,"%3F")}function Yw(t){return Qw(t).replace(Fw,"%2F")}function qi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Jw=/\/$/,Xw=t=>t.replace(Jw,"");function jl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=nT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:qi(o)}}function Zw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function eT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Us(e.matched[r],n.matched[s])&&qm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tT(t[n],e[n]))return!1;return!0}function tT(t,e){return hn(t)?kf(t,e):hn(e)?kf(e,t):t===e}function kf(t,e){return hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function nT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const fr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let gc=(function(t){return t.pop="pop",t.push="push",t})({}),$l=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function rT(t){if(!t)if(bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xw(t)}const sT=/^[^#]+#/;function iT(t,e){return t.replace(sT,"#")+e}function oT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ka=()=>({left:window.scrollX,top:window.scrollY});function aT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=oT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Df(t,e){return(history.state?history.state.position-e:-1)+t}const _c=new Map;function lT(t,e){_c.set(t,e)}function cT(t){const e=_c.get(t);return _c.delete(t),e}function uT(t){return typeof t=="string"||t&&typeof t=="object"}function Wm(t){return typeof t=="string"||typeof t=="symbol"}let qe=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Gm=Symbol("");qe.MATCHER_NOT_FOUND+"",qe.NAVIGATION_GUARD_REDIRECT+"",qe.NAVIGATION_ABORTED+"",qe.NAVIGATION_CANCELLED+"",qe.NAVIGATION_DUPLICATED+"";function Fs(t,e){return Se(new Error,{type:t,[Gm]:!0},e)}function Ln(t,e){return t instanceof Error&&Gm in t&&(e==null||!!(t.type&e))}const hT=["params","query","hash"];function fT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of hT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function dT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(jm," "),i=s.indexOf("="),o=qi(i<0?s:s.slice(0,i)),l=i<0?null:qi(s.slice(i+1));if(o in e){let c=e[o];hn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Nf(t){let e="";for(let n in t){const r=t[n];if(n=Kw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(r)?r.map(s=>s&&mc(s)):[r&&mc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function pT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const mT=Symbol(""),Of=Symbol(""),Qa=Symbol(""),Km=Symbol(""),yc=Symbol("");function mi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _r(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Fs(qe.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):uT(m)?c(Fs(qe.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Hl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Fm(c)){const u=(c.__vccOpts||c)[e];u&&i.push(_r(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Lw(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&_r(m,n,r,o,l,s)()}))}}return i}function gT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Us(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Us(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _T=()=>location.protocol+"//"+location.host;function Qm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Pf(l,"")}return Pf(n,t)+r+s}function yT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=Qm(t,location),O=n.value,D=e.value;let S=0;if(m){if(n.value=y,e.value=m,o&&o===O){o=null;return}S=D?m.position-D.position:0}else r(y);s.forEach(x=>{x(n.value,O,{delta:S,type:gc.pop,direction:S?S>0?$l.forward:$l.back:$l.unknown})})};function c(){o=n.value}function u(m){s.push(m);const y=()=>{const O=s.indexOf(m);O>-1&&s.splice(O,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Se({},m.state,{scroll:Ka()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function Vf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ka():null}}function vT(t){const{history:e,location:n}=window,r={value:Qm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:_T()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(c,u){i(c,Se({},e.state,Vf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const f=Se({},s.value,e.state,{forward:c,scroll:Ka()});i(f.current,f,!0),i(c,Se({},Vf(r.value,c,null),{position:f.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function ET(t){t=rT(t);const e=vT(t),n=yT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:iT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Kr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ze=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ze||{});const wT={type:Kr.Static,value:""},TT=/[a-zA-Z0-9_]/;function IT(t){if(!t)return[[]];if(t==="/")return[[wT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=Ze.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===Ze.Static?i.push({type:Kr.Static,value:u}):n===Ze.Param||n===Ze.ParamRegExp||n===Ze.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Kr.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Ze.ParamRegExp){r=n,n=Ze.EscapeNext;continue}switch(n){case Ze.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Ze.Param):m();break;case Ze.EscapeNext:m(),n=r;break;case Ze.Param:c==="("?n=Ze.ParamRegExp:TT.test(c)?m():(p(),n=Ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Ze.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=Ze.ParamRegExpEnd:f+=c;break;case Ze.ParamRegExpEnd:p(),n=Ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===Ze.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const xf="[^/]+?",bT={sensitive:!1,strict:!1,start:!0,end:!0};var Rt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Rt||{});const AT=/[.+*?^${}()[\]/\\]/g;function RT(t,e){const n=Se({},bT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Rt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=Rt.Segment+(n.sensitive?Rt.BonusCaseSensitive:0);if(m.type===Kr.Static)p||(s+="/"),s+=m.value.replace(AT,"\\$&"),y+=Rt.Static;else if(m.type===Kr.Param){const{value:O,repeatable:D,optional:S,regexp:x}=m;i.push({name:O,repeatable:D,optional:S});const U=x||xf;if(U!==xf){y+=Rt.BonusCustomRegExp;try{`${U}`}catch(R){throw new Error(`Invalid custom RegExp for param "${O}" (${U}): `+R.message)}}let N=D?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(N=S&&u.length<2?`(?:/${N})`:"/"+N),S&&(N+="?"),s+=N,y+=Rt.Dynamic,S&&(y+=Rt.BonusOptional),D&&(y+=Rt.BonusRepeatable),U===".*"&&(y+=Rt.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Rt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",O=i[m-1];p[O.name]=y&&O.repeatable?y.split("/"):y}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===Kr.Static)f+=y.value;else if(y.type===Kr.Param){const{value:O,repeatable:D,optional:S}=y,x=O in u?u[O]:"";if(hn(x)&&!D)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const U=hn(x)?x.join("/"):x;if(!U)if(S)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function ST(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Rt.Static+Rt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Rt.Static+Rt.Segment?1:-1:0}function Ym(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ST(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Mf(r))return 1;if(Mf(s))return-1}return s.length-r.length}function Mf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const CT={strict:!1,end:!0,sensitive:!1};function PT(t,e,n){const r=RT(IT(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kT(t,e){const n=[],r=new Map;e=Cf(CT,e);function s(p){return r.get(p)}function i(p,m,y){const O=!y,D=Uf(p);D.aliasOf=y&&y.record;const S=Cf(e,p),x=[D];if("alias"in p){const R=typeof p.alias=="string"?[p.alias]:p.alias;for(const M of R)x.push(Uf(Se({},D,{components:y?y.record.components:D.components,path:M,aliasOf:y?y.record:D})))}let U,N;for(const R of x){const{path:M}=R;if(m&&M[0]!=="/"){const G=m.record.path,T=G[G.length-1]==="/"?"":"/";R.path=m.record.path+(M&&T+M)}if(U=PT(R,m,S),y?y.alias.push(U):(N=N||U,N!==U&&N.alias.push(U),O&&p.name&&!Ff(U)&&o(p.name)),Jm(U)&&c(U),D.children){const G=D.children;for(let T=0;T<G.length;T++)i(G[T],U,y&&y.children[T])}y=y||U}return N?()=>{o(N)}:Di}function o(p){if(Wm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=OT(p,n);n.splice(m,0,p),p.record.name&&!Ff(p)&&r.set(p.record.name,p)}function u(p,m){let y,O={},D,S;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Fs(qe.MATCHER_NOT_FOUND,{location:p});S=y.record.name,O=Se(Lf(m.params,y.keys.filter(N=>!N.optional).concat(y.parent?y.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),p.params&&Lf(p.params,y.keys.map(N=>N.name))),D=y.stringify(O)}else if(p.path!=null)D=p.path,y=n.find(N=>N.re.test(D)),y&&(O=y.parse(D),S=y.record.name);else{if(y=m.name?r.get(m.name):n.find(N=>N.re.test(m.path)),!y)throw Fs(qe.MATCHER_NOT_FOUND,{location:p,currentLocation:m});S=y.record.name,O=Se({},m.params,p.params),D=y.stringify(O)}const x=[];let U=y;for(;U;)x.unshift(U.record),U=U.parent;return{name:S,path:D,params:O,matched:x,meta:NT(x)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Lf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Uf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:DT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function DT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function NT(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function OT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ym(t,e[i])<0?r=i:n=i+1}const s=VT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function VT(t){let e=t;for(;e=e.parent;)if(Jm(e)&&Ym(t,e)===0)return e}function Jm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Bf(t){const e=ln(Qa),n=ln(Km),r=Ue(()=>{const c=En(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Us.bind(null,f));if(m>-1)return m;const y=jf(c[u-2]);return u>1&&jf(f)===y&&p[p.length-1].path!==y?p.findIndex(Us.bind(null,c[u-2])):m}),i=Ue(()=>s.value>-1&&FT(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&qm(n.params,r.value.params));function l(c={}){if(UT(c)){const u=e[En(t.replace)?"replace":"push"](En(t.to)).catch(Di);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function xT(t){return t.length===1?t[0]:t}const MT=rm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Bf,setup(t,{slots:e}){const n=io(Bf(t)),{options:r}=ln(Qa),s=Ue(()=>({[$f(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$f(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&xT(e.default(n));return t.custom?i:km("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),LT=MT;function UT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!hn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $f=(t,e,n)=>t??e??n,BT=rm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ln(yc),s=Ue(()=>t.route||r.value),i=ln(Of,0),o=Ue(()=>{let u=En(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Ue(()=>s.value.matched[o.value]);zo(Of,Ue(()=>o.value+1)),zo(mT,l),zo(yc,s);const c=ne();return Xr(()=>[c.value,l.value,t.name],([u,f,p],[m,y,O])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!Us(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return Hf(n.default,{Component:m,route:u});const y=p.props[f],O=y?y===!0?u.params:typeof y=="function"?y(u):y:null,S=km(m,Se({},O,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Hf(n.default,{Component:S,route:u})||S}}});function Hf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jT=BT;function $T(t){const e=kT(t.routes,t),n=t.parseQuery||dT,r=t.stringifyQuery||Nf,s=t.history,i=mi(),o=mi(),l=mi(),c=kv(fr);let u=fr;bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Bl.bind(null,B=>""+B),p=Bl.bind(null,Yw),m=Bl.bind(null,qi);function y(B,Z){let J,se;return Wm(B)?(J=e.getRecordMatcher(B),se=Z):se=B,e.addRoute(se,J)}function O(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function D(){return e.getRoutes().map(B=>B.record)}function S(B){return!!e.getRecordMatcher(B)}function x(B,Z){if(Z=Se({},Z||c.value),typeof B=="string"){const P=jl(n,B,Z.path),j=e.resolve({path:P.path},Z),H=s.createHref(P.fullPath);return Se(P,j,{params:m(j.params),hash:qi(P.hash),redirectedFrom:void 0,href:H})}let J;if(B.path!=null)J=Se({},B,{path:jl(n,B.path,Z.path).path});else{const P=Se({},B.params);for(const j in P)P[j]==null&&delete P[j];J=Se({},B,{params:p(P)}),Z.params=p(Z.params)}const se=e.resolve(J,Z),ve=B.hash||"";se.params=f(m(se.params));const E=Zw(r,Se({},B,{hash:Gw(ve),path:se.path})),I=s.createHref(E);return Se({fullPath:E,hash:ve,query:r===Nf?pT(B.query):B.query||{}},se,{redirectedFrom:void 0,href:I})}function U(B){return typeof B=="string"?jl(n,B,c.value.path):Se({},B)}function N(B,Z){if(u!==B)return Fs(qe.NAVIGATION_CANCELLED,{from:Z,to:B})}function R(B){return T(B)}function M(B){return R(Se(U(B),{replace:!0}))}function G(B,Z){const J=B.matched[B.matched.length-1];if(J&&J.redirect){const{redirect:se}=J;let ve=typeof se=="function"?se(B,Z):se;return typeof ve=="string"&&(ve=ve.includes("?")||ve.includes("#")?ve=U(ve):{path:ve},ve.params={}),Se({query:B.query,hash:B.hash,params:ve.path!=null?{}:B.params},ve)}}function T(B,Z){const J=u=x(B),se=c.value,ve=B.state,E=B.force,I=B.replace===!0,P=G(J,se);if(P)return T(Se(U(P),{state:typeof P=="object"?Se({},ve,P.state):ve,force:E,replace:I}),Z||J);const j=J;j.redirectedFrom=Z;let H;return!E&&eT(r,se,J)&&(H=Fs(qe.NAVIGATION_DUPLICATED,{to:j,from:se}),xt(se,se,!0,!1)),(H?Promise.resolve(H):A(j,se)).catch(F=>Ln(F)?Ln(F,qe.NAVIGATION_GUARD_REDIRECT)?F:fn(F):Ie(F,j,se)).then(F=>{if(F){if(Ln(F,qe.NAVIGATION_GUARD_REDIRECT))return T(Se({replace:I},U(F.to),{state:typeof F.to=="object"?Se({},ve,F.to.state):ve,force:E}),Z||j)}else F=C(j,se,!0,I,ve);return b(j,se,F),F})}function _(B,Z){const J=N(B,Z);return J?Promise.reject(J):Promise.resolve()}function v(B){const Z=en.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function A(B,Z){let J;const[se,ve,E]=gT(B,Z);J=Hl(se.reverse(),"beforeRouteLeave",B,Z);for(const P of se)P.leaveGuards.forEach(j=>{J.push(_r(j,B,Z))});const I=_.bind(null,B,Z);return J.push(I),dt(J).then(()=>{J=[];for(const P of i.list())J.push(_r(P,B,Z));return J.push(I),dt(J)}).then(()=>{J=Hl(ve,"beforeRouteUpdate",B,Z);for(const P of ve)P.updateGuards.forEach(j=>{J.push(_r(j,B,Z))});return J.push(I),dt(J)}).then(()=>{J=[];for(const P of E)if(P.beforeEnter)if(hn(P.beforeEnter))for(const j of P.beforeEnter)J.push(_r(j,B,Z));else J.push(_r(P.beforeEnter,B,Z));return J.push(I),dt(J)}).then(()=>(B.matched.forEach(P=>P.enterCallbacks={}),J=Hl(E,"beforeRouteEnter",B,Z,v),J.push(I),dt(J))).then(()=>{J=[];for(const P of o.list())J.push(_r(P,B,Z));return J.push(I),dt(J)}).catch(P=>Ln(P,qe.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function b(B,Z,J){l.list().forEach(se=>v(()=>se(B,Z,J)))}function C(B,Z,J,se,ve){const E=N(B,Z);if(E)return E;const I=Z===fr,P=bs?history.state:{};J&&(se||I?s.replace(B.fullPath,Se({scroll:I&&P&&P.scroll},ve)):s.push(B.fullPath,ve)),c.value=B,xt(B,Z,J,I),fn()}let w;function He(){w||(w=s.listen((B,Z,J)=>{if(!tn.listening)return;const se=x(B),ve=G(se,tn.currentRoute.value);if(ve){T(Se(ve,{replace:!0,force:!0}),se).catch(Di);return}u=se;const E=c.value;bs&&lT(Df(E.fullPath,J.delta),Ka()),A(se,E).catch(I=>Ln(I,qe.NAVIGATION_ABORTED|qe.NAVIGATION_CANCELLED)?I:Ln(I,qe.NAVIGATION_GUARD_REDIRECT)?(T(Se(U(I.to),{force:!0}),se).then(P=>{Ln(P,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===gc.pop&&s.go(-1,!1)}).catch(Di),Promise.reject()):(J.delta&&s.go(-J.delta,!1),Ie(I,se,E))).then(I=>{I=I||C(se,E,!1),I&&(J.delta&&!Ln(I,qe.NAVIGATION_CANCELLED)?s.go(-J.delta,!1):J.type===gc.pop&&Ln(I,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(se,E,I)}).catch(Di)}))}let ft=mi(),Me=mi(),me;function Ie(B,Z,J){fn(B);const se=Me.list();return se.length?se.forEach(ve=>ve(B,Z,J)):console.error(B),Promise.reject(B)}function kt(){return me&&c.value!==fr?Promise.resolve():new Promise((B,Z)=>{ft.add([B,Z])})}function fn(B){return me||(me=!B,He(),ft.list().forEach(([Z,J])=>B?J(B):Z()),ft.reset()),B}function xt(B,Z,J,se){const{scrollBehavior:ve}=t;if(!bs||!ve)return Promise.resolve();const E=!J&&cT(Df(B.fullPath,0))||(se||!J)&&history.state&&history.state.scroll||null;return ao().then(()=>ve(B,Z,E)).then(I=>I&&aT(I)).catch(I=>Ie(I,B,Z))}const ot=B=>s.go(B);let xn;const en=new Set,tn={currentRoute:c,listening:!0,addRoute:y,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:D,resolve:x,options:t,push:R,replace:M,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Me.add,isReady:kt,install(B){B.component("RouterLink",LT),B.component("RouterView",jT),B.config.globalProperties.$router=tn,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>En(c)}),bs&&!xn&&c.value===fr&&(xn=!0,R(s.location).catch(se=>{}));const Z={};for(const se in fr)Object.defineProperty(Z,se,{get:()=>c.value[se],enumerable:!0});B.provide(Qa,tn),B.provide(Km,Qp(Z)),B.provide(yc,c);const J=B.unmount;en.add(B),B.unmount=function(){en.delete(B),en.size<1&&(u=fr,w&&w(),w=null,c.value=fr,xn=!1,me=!1),J()}}};function dt(B){return B.reduce((Z,J)=>Z.then(()=>v(J)),Promise.resolve())}return tn}function Ya(){return ln(Qa)}const HT=()=>{};var zf={};/**
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
 */const Xm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new qT;const m=i<<2|l>>4;if(r.push(m),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const O=u<<6&192|p;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WT=function(t){const e=Xm(t);return Zm.encodeByteArray(e,!0)},ma=function(t){return WT(t).replace(/\./g,"")},eg=function(t){try{return Zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KT=()=>GT().__FIREBASE_DEFAULTS__,QT=()=>{if(typeof process>"u"||typeof zf>"u")return;const t=zf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eg(t[1]);return e&&JSON.parse(e)},Ja=()=>{try{return HT()||KT()||QT()||YT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tg=t=>Ja()?.emulatorHosts?.[t],ng=t=>{const e=tg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rg=()=>Ja()?.config,sg=t=>Ja()?.[`_${t}`];/**
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
 */class JT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function uu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function ig(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ma(JSON.stringify(n)),ma(JSON.stringify(o)),""].join(".")}const Ni={};function XT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ni))Ni[e]?t.emulator.push(e):t.prod.push(e);return t}function ZT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qf=!1;function hu(t,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||Ni[t]===e||Ni[t]||qf)return;Ni[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=XT().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{qf=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=ZT(r),y=n("text"),O=document.getElementById(y)||document.createElement("span"),D=n("learnmore"),S=document.getElementById(D)||document.createElement("a"),x=n("preprendIcon"),U=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const N=m.element;l(N),f(S,D);const R=u();c(U,x),N.append(U,O,S,R),document.body.appendChild(N)}i?(O.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function tI(){const t=Ja()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iI(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oI(){return!tI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aI(){try{return typeof indexedDB=="object"}catch{return!1}}function lI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const cI="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cI,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?uI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new On(s,l,r)}}function uI(t,e){return t.replace(hI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hI=/\{\$([^}]+)}/g;function fI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wf(i)&&Wf(o)){if(!rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
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
 */function uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function yi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dI(t,e){const n=new pI(t,e);return n.subscribe.bind(n)}class pI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=zl),s.error===void 0&&(s.error=zl),s.complete===void 0&&(s.complete=zl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zl(){}/**
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
 */function zt(t){return t&&t._delegate?t._delegate:t}class Nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class gI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yI(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_I(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _I(t){return t===Gr?void 0:t}function yI(t){return t.instantiationMode==="EAGER"}/**
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
 */class vI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const EI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},wI=Ee.INFO,TI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},II=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=TI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fu{constructor(e){this.name=e,this._logLevel=wI,this._logHandler=II,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const bI=(t,e)=>e.some(n=>t instanceof n);let Gf,Kf;function AI(){return Gf||(Gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RI(){return Kf||(Kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const og=new WeakMap,vc=new WeakMap,ag=new WeakMap,ql=new WeakMap,du=new WeakMap;function SI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ar(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&og.set(n,t)}).catch(()=>{}),du.set(e,t),e}function CI(t){if(vc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vc.set(t,e)}let Ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ag.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PI(t){Ec=t(Ec)}function kI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wl(this),e,...n);return ag.set(r,e.sort?e.sort():[e]),Ar(r)}:RI().includes(t)?function(...e){return t.apply(Wl(this),e),Ar(og.get(this))}:function(...e){return Ar(t.apply(Wl(this),e))}}function DI(t){return typeof t=="function"?kI(t):(t instanceof IDBTransaction&&CI(t),bI(t,AI())?new Proxy(t,Ec):t)}function Ar(t){if(t instanceof IDBRequest)return SI(t);if(ql.has(t))return ql.get(t);const e=DI(t);return e!==t&&(ql.set(t,e),du.set(e,t)),e}const Wl=t=>du.get(t);function NI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ar(o.result),c.oldVersion,c.newVersion,Ar(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const OI=["get","getKey","getAll","getAllKeys","count"],VI=["put","add","delete","clear"],Gl=new Map;function Qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gl.get(e))return Gl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=VI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||OI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Gl.set(e,i),i}PI(t=>({...t,get:(e,n,r)=>Qf(e,n)||t.get(e,n,r),has:(e,n)=>!!Qf(e,n)||t.has(e,n)}));/**
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
 */class xI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MI(t){return t.getComponent()?.type==="VERSION"}const wc="@firebase/app",Yf="0.14.4";/**
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
 */const Xn=new fu("@firebase/app"),LI="@firebase/app-compat",UI="@firebase/analytics-compat",FI="@firebase/analytics",BI="@firebase/app-check-compat",jI="@firebase/app-check",$I="@firebase/auth",HI="@firebase/auth-compat",zI="@firebase/database",qI="@firebase/data-connect",WI="@firebase/database-compat",GI="@firebase/functions",KI="@firebase/functions-compat",QI="@firebase/installations",YI="@firebase/installations-compat",JI="@firebase/messaging",XI="@firebase/messaging-compat",ZI="@firebase/performance",eb="@firebase/performance-compat",tb="@firebase/remote-config",nb="@firebase/remote-config-compat",rb="@firebase/storage",sb="@firebase/storage-compat",ib="@firebase/firestore",ob="@firebase/ai",ab="@firebase/firestore-compat",lb="firebase",cb="12.4.0";/**
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
 */const Tc="[DEFAULT]",ub={[wc]:"fire-core",[LI]:"fire-core-compat",[FI]:"fire-analytics",[UI]:"fire-analytics-compat",[jI]:"fire-app-check",[BI]:"fire-app-check-compat",[$I]:"fire-auth",[HI]:"fire-auth-compat",[zI]:"fire-rtdb",[qI]:"fire-data-connect",[WI]:"fire-rtdb-compat",[GI]:"fire-fn",[KI]:"fire-fn-compat",[QI]:"fire-iid",[YI]:"fire-iid-compat",[JI]:"fire-fcm",[XI]:"fire-fcm-compat",[ZI]:"fire-perf",[eb]:"fire-perf-compat",[tb]:"fire-rc",[nb]:"fire-rc-compat",[rb]:"fire-gcs",[sb]:"fire-gcs-compat",[ib]:"fire-fst",[ab]:"fire-fst-compat",[ob]:"fire-vertex","fire-js":"fire-js",[lb]:"fire-js-all"};/**
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
 */const ga=new Map,hb=new Map,Ic=new Map;function Jf(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(Ic.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Ic.set(e,t);for(const n of ga.values())Jf(n,t);for(const n of hb.values())Jf(n,t);return!0}function Xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
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
 */const fb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new co("app","Firebase",fb);/**
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
 */class db{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=cb;function lg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Tc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Rr.create("bad-app-name",{appName:String(s)});if(n||(n=rg()),!n)throw Rr.create("no-options");const i=ga.get(s);if(i){if(rs(n,i.options)&&rs(r,i.config))return i;throw Rr.create("duplicate-app",{appName:s})}const o=new vI(s);for(const c of Ic.values())o.addComponent(c);const l=new db(n,r,o);return ga.set(s,l),l}function pu(t=Tc){const e=ga.get(t);if(!e&&t===Tc&&rg())return lg();if(!e)throw Rr.create("no-app",{appName:t});return e}function wn(t,e,n){let r=ub[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(o.join(" "));return}ss(new Nr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const pb="firebase-heartbeat-database",mb=1,Wi="firebase-heartbeat-store";let Kl=null;function cg(){return Kl||(Kl=NI(pb,mb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Kl}async function gb(t){try{const n=(await cg()).transaction(Wi),r=await n.objectStore(Wi).get(ug(t));return await n.done,r}catch(e){if(e instanceof On)Xn.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e?.message});Xn.warn(n.message)}}}async function Xf(t,e){try{const r=(await cg()).transaction(Wi,"readwrite");await r.objectStore(Wi).put(e,ug(t)),await r.done}catch(n){if(n instanceof On)Xn.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n?.message});Xn.warn(r.message)}}}function ug(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _b=1024,yb=30;class vb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>yb){const s=Tb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Xn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zf(),{heartbeatsToSend:n,unsentEntries:r}=Eb(this._heartbeatsCache.heartbeats),s=ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Xn.warn(e),""}}}function Zf(){return new Date().toISOString().substring(0,10)}function Eb(t,e=_b){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ed(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ed(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aI()?lI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ed(t){return ma(JSON.stringify({version:2,heartbeats:t})).length}function Tb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Ib(t){ss(new Nr("platform-logger",e=>new xI(e),"PRIVATE")),ss(new Nr("heartbeat",e=>new vb(e),"PRIVATE")),wn(wc,Yf,t),wn(wc,Yf,"esm2020"),wn("fire-js","")}Ib("");var td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sr,hg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function v(){}v.prototype=_.prototype,T.F=_.prototype,T.prototype=new v,T.prototype.constructor=T,T.D=function(A,b,C){for(var w=Array(arguments.length-2),He=2;He<arguments.length;He++)w[He-2]=arguments[He];return _.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,v){v||(v=0);const A=Array(16);if(typeof _=="string")for(var b=0;b<16;++b)A[b]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(b=0;b<16;++b)A[b]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=T.g[0],v=T.g[1],b=T.g[2];let C=T.g[3],w;w=_+(C^v&(b^C))+A[0]+3614090360&4294967295,_=v+(w<<7&4294967295|w>>>25),w=C+(b^_&(v^b))+A[1]+3905402710&4294967295,C=_+(w<<12&4294967295|w>>>20),w=b+(v^C&(_^v))+A[2]+606105819&4294967295,b=C+(w<<17&4294967295|w>>>15),w=v+(_^b&(C^_))+A[3]+3250441966&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(C^v&(b^C))+A[4]+4118548399&4294967295,_=v+(w<<7&4294967295|w>>>25),w=C+(b^_&(v^b))+A[5]+1200080426&4294967295,C=_+(w<<12&4294967295|w>>>20),w=b+(v^C&(_^v))+A[6]+2821735955&4294967295,b=C+(w<<17&4294967295|w>>>15),w=v+(_^b&(C^_))+A[7]+4249261313&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(C^v&(b^C))+A[8]+1770035416&4294967295,_=v+(w<<7&4294967295|w>>>25),w=C+(b^_&(v^b))+A[9]+2336552879&4294967295,C=_+(w<<12&4294967295|w>>>20),w=b+(v^C&(_^v))+A[10]+4294925233&4294967295,b=C+(w<<17&4294967295|w>>>15),w=v+(_^b&(C^_))+A[11]+2304563134&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(C^v&(b^C))+A[12]+1804603682&4294967295,_=v+(w<<7&4294967295|w>>>25),w=C+(b^_&(v^b))+A[13]+4254626195&4294967295,C=_+(w<<12&4294967295|w>>>20),w=b+(v^C&(_^v))+A[14]+2792965006&4294967295,b=C+(w<<17&4294967295|w>>>15),w=v+(_^b&(C^_))+A[15]+1236535329&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(b^C&(v^b))+A[1]+4129170786&4294967295,_=v+(w<<5&4294967295|w>>>27),w=C+(v^b&(_^v))+A[6]+3225465664&4294967295,C=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(C^_))+A[11]+643717713&4294967295,b=C+(w<<14&4294967295|w>>>18),w=v+(C^_&(b^C))+A[0]+3921069994&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^C&(v^b))+A[5]+3593408605&4294967295,_=v+(w<<5&4294967295|w>>>27),w=C+(v^b&(_^v))+A[10]+38016083&4294967295,C=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(C^_))+A[15]+3634488961&4294967295,b=C+(w<<14&4294967295|w>>>18),w=v+(C^_&(b^C))+A[4]+3889429448&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^C&(v^b))+A[9]+568446438&4294967295,_=v+(w<<5&4294967295|w>>>27),w=C+(v^b&(_^v))+A[14]+3275163606&4294967295,C=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(C^_))+A[3]+4107603335&4294967295,b=C+(w<<14&4294967295|w>>>18),w=v+(C^_&(b^C))+A[8]+1163531501&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^C&(v^b))+A[13]+2850285829&4294967295,_=v+(w<<5&4294967295|w>>>27),w=C+(v^b&(_^v))+A[2]+4243563512&4294967295,C=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(C^_))+A[7]+1735328473&4294967295,b=C+(w<<14&4294967295|w>>>18),w=v+(C^_&(b^C))+A[12]+2368359562&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(v^b^C)+A[5]+4294588738&4294967295,_=v+(w<<4&4294967295|w>>>28),w=C+(_^v^b)+A[8]+2272392833&4294967295,C=_+(w<<11&4294967295|w>>>21),w=b+(C^_^v)+A[11]+1839030562&4294967295,b=C+(w<<16&4294967295|w>>>16),w=v+(b^C^_)+A[14]+4259657740&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^C)+A[1]+2763975236&4294967295,_=v+(w<<4&4294967295|w>>>28),w=C+(_^v^b)+A[4]+1272893353&4294967295,C=_+(w<<11&4294967295|w>>>21),w=b+(C^_^v)+A[7]+4139469664&4294967295,b=C+(w<<16&4294967295|w>>>16),w=v+(b^C^_)+A[10]+3200236656&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^C)+A[13]+681279174&4294967295,_=v+(w<<4&4294967295|w>>>28),w=C+(_^v^b)+A[0]+3936430074&4294967295,C=_+(w<<11&4294967295|w>>>21),w=b+(C^_^v)+A[3]+3572445317&4294967295,b=C+(w<<16&4294967295|w>>>16),w=v+(b^C^_)+A[6]+76029189&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^C)+A[9]+3654602809&4294967295,_=v+(w<<4&4294967295|w>>>28),w=C+(_^v^b)+A[12]+3873151461&4294967295,C=_+(w<<11&4294967295|w>>>21),w=b+(C^_^v)+A[15]+530742520&4294967295,b=C+(w<<16&4294967295|w>>>16),w=v+(b^C^_)+A[2]+3299628645&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(b^(v|~C))+A[0]+4096336452&4294967295,_=v+(w<<6&4294967295|w>>>26),w=C+(v^(_|~b))+A[7]+1126891415&4294967295,C=_+(w<<10&4294967295|w>>>22),w=b+(_^(C|~v))+A[14]+2878612391&4294967295,b=C+(w<<15&4294967295|w>>>17),w=v+(C^(b|~_))+A[5]+4237533241&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~C))+A[12]+1700485571&4294967295,_=v+(w<<6&4294967295|w>>>26),w=C+(v^(_|~b))+A[3]+2399980690&4294967295,C=_+(w<<10&4294967295|w>>>22),w=b+(_^(C|~v))+A[10]+4293915773&4294967295,b=C+(w<<15&4294967295|w>>>17),w=v+(C^(b|~_))+A[1]+2240044497&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~C))+A[8]+1873313359&4294967295,_=v+(w<<6&4294967295|w>>>26),w=C+(v^(_|~b))+A[15]+4264355552&4294967295,C=_+(w<<10&4294967295|w>>>22),w=b+(_^(C|~v))+A[6]+2734768916&4294967295,b=C+(w<<15&4294967295|w>>>17),w=v+(C^(b|~_))+A[13]+1309151649&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~C))+A[4]+4149444226&4294967295,_=v+(w<<6&4294967295|w>>>26),w=C+(v^(_|~b))+A[11]+3174756917&4294967295,C=_+(w<<10&4294967295|w>>>22),w=b+(_^(C|~v))+A[2]+718787259&4294967295,b=C+(w<<15&4294967295|w>>>17),w=v+(C^(b|~_))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const v=_-this.blockSize,A=this.C;let b=this.h,C=0;for(;C<_;){if(b==0)for(;C<=v;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<_;)if(A[b++]=T.charCodeAt(C++),b==this.blockSize){s(this,A),b=0;break}}else for(;C<_;)if(A[b++]=T[C++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var v=T.length-8;v<T.length;++v)T[v]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,v=0;v<4;++v)for(let A=0;A<32;A+=8)T[_++]=this.g[v]>>>A&255;return T};function i(T,_){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=_(T)}function o(T,_){this.h=_;const v=[];let A=!0;for(let b=T.length-1;b>=0;b--){const C=T[b]|0;A&&C==_||(v[b]=C,A=!1)}this.g=v}var l={};function c(T){return-128<=T&&T<128?i(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return S(u(-T));const _=[];let v=1;for(let A=0;T>=v;A++)_[A]=T/v|0,v*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return S(f(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(_,8));let A=p;for(let C=0;C<T.length;C+=8){var b=Math.min(8,T.length-C);const w=parseInt(T.substring(C,C+b),_);b<8?(b=u(Math.pow(_,b)),A=A.j(b).add(u(w))):(A=A.j(v),A=A.add(u(w)))}return A}var p=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(D(this))return-S(this).m();let T=0,_=1;for(let v=0;v<this.g.length;v++){const A=this.i(v);T+=(A>=0?A:4294967296+A)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(O(this))return"0";if(D(this))return"-"+S(this).toString(T);const _=u(Math.pow(T,6));var v=this;let A="";for(;;){const b=R(v,_).g;v=x(v,b.j(_));let C=((v.g.length>0?v.g[0]:v.h)>>>0).toString(T);if(v=b,O(v))return C+A;for(;C.length<6;)C="0"+C;A=C+A}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function O(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function D(T){return T.h==-1}t.l=function(T){return T=x(this,T),D(T)?-1:O(T)?0:1};function S(T){const _=T.g.length,v=[];for(let A=0;A<_;A++)v[A]=~T.g[A];return new o(v,~T.h).add(m)}t.abs=function(){return D(this)?S(this):this},t.add=function(T){const _=Math.max(this.g.length,T.g.length),v=[];let A=0;for(let b=0;b<=_;b++){let C=A+(this.i(b)&65535)+(T.i(b)&65535),w=(C>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);A=w>>>16,C&=65535,w&=65535,v[b]=w<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function x(T,_){return T.add(S(_))}t.j=function(T){if(O(this)||O(T))return p;if(D(this))return D(T)?S(this).j(S(T)):S(S(this).j(T));if(D(T))return S(this.j(S(T)));if(this.l(y)<0&&T.l(y)<0)return u(this.m()*T.m());const _=this.g.length+T.g.length,v=[];for(var A=0;A<2*_;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(let b=0;b<T.g.length;b++){const C=this.i(A)>>>16,w=this.i(A)&65535,He=T.i(b)>>>16,ft=T.i(b)&65535;v[2*A+2*b]+=w*ft,U(v,2*A+2*b),v[2*A+2*b+1]+=C*ft,U(v,2*A+2*b+1),v[2*A+2*b+1]+=w*He,U(v,2*A+2*b+1),v[2*A+2*b+2]+=C*He,U(v,2*A+2*b+2)}for(T=0;T<_;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=_;T<2*_;T++)v[T]=0;return new o(v,0)};function U(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function N(T,_){this.g=T,this.h=_}function R(T,_){if(O(_))throw Error("division by zero");if(O(T))return new N(p,p);if(D(T))return _=R(S(T),_),new N(S(_.g),S(_.h));if(D(_))return _=R(T,S(_)),new N(S(_.g),_.h);if(T.g.length>30){if(D(T)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,A=_;A.l(T)<=0;)v=M(v),A=M(A);var b=G(v,1),C=G(A,1);for(A=G(A,2),v=G(v,2);!O(A);){var w=C.add(A);w.l(T)<=0&&(b=b.add(v),C=w),A=G(A,1),v=G(v,1)}return _=x(T,b.j(_)),new N(b,_)}for(b=p;T.l(_)>=0;){for(v=Math.max(1,Math.floor(T.m()/_.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),C=u(v),w=C.j(_);D(w)||w.l(T)>0;)v-=A,C=u(v),w=C.j(_);O(C)&&(C=m),b=b.add(C),T=x(T,w)}return new N(b,T)}t.B=function(T){return R(this,T).h},t.and=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)&T.i(A);return new o(v,this.h&T.h)},t.or=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)|T.i(A);return new o(v,this.h|T.h)},t.xor=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)^T.i(A);return new o(v,this.h^T.h)};function M(T){const _=T.g.length+1,v=[];for(let A=0;A<_;A++)v[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(v,T.h)}function G(T,_){const v=_>>5;_%=32;const A=T.g.length-v,b=[];for(let C=0;C<A;C++)b[C]=_>0?T.i(C+v)>>>_|T.i(C+v+1)<<32-_:T.i(C+v);return new o(b,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,hg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Sr=o}).apply(typeof td<"u"?td:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fg,vi,dg,Ko,bc,pg,mg,gg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=c,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,k,L){for(var Q=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)Q[_e-2]=arguments[_e];return h.prototype[k].apply(g,Q)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let g=1;g<arguments.length;g++){const k=arguments[g];var d=typeof k;if(d=d!="object"?d:k?Array.isArray(k)?"array":d:"null",d=="array"||d=="object"&&typeof k.length=="number"){d=a.length||0;const L=k.length||0;a.length=d+L;for(let Q=0;Q<L;Q++)a[d+Q]=k[Q]}else a.push(k)}}class D{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function S(a){o.setTimeout(()=>{throw a},0)}function x(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class U{constructor(){this.h=this.g=null}add(h,d){const g=N.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var N=new D(()=>new R,a=>a.reset());class R{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,G=!1,T=new U,_=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(v)}};function v(){for(var a;a=x();){try{a.h.call(a.g)}catch(d){S(d)}var h=N;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}G=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function w(a){return/^[\s\xa0]*$/.test(a)}function He(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(He,b),He.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ft="closure_listenable_"+(Math.random()*1e6|0),Me=0;function me(a,h,d,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=k,this.key=++Me,this.da=this.fa=!1}function Ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function kt(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function fn(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function xt(a){const h={};for(const d in a)h[d]=a[d];return h}const ot="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xn(a,h){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let L=0;L<ot.length;L++)d=ot[L],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function en(a){this.src=a,this.g={},this.h=0}en.prototype.add=function(a,h,d,g,k){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const Q=dt(a,h,g,k);return Q>-1?(h=a[Q],d||(h.fa=!1)):(h=new me(h,this.src,L,!!g,k),h.fa=d,a.push(h)),h};function tn(a,h){const d=h.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,h,void 0),L;(L=k>=0)&&Array.prototype.splice.call(g,k,1),L&&(Ie(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function dt(a,h,d,g){for(let k=0;k<a.length;++k){const L=a[k];if(!L.da&&L.listener==h&&L.capture==!!d&&L.ha==g)return k}return-1}var B="closure_lm_"+(Math.random()*1e6|0),Z={};function J(a,h,d,g,k){if(Array.isArray(h)){for(let L=0;L<h.length;L++)J(a,h[L],d,g,k);return null}return d=Y(d),a&&a[ft]?a.J(h,d,l(g)?!!g.capture:!1,k):se(a,h,d,!1,g,k)}function se(a,h,d,g,k,L){if(!h)throw Error("Invalid event type");const Q=l(k)?!!k.capture:!!k;let _e=H(a);if(_e||(a[B]=_e=new en(a)),d=_e.add(h,d,g,Q,L),d.proxy)return d;if(g=ve(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)C||(k=Q),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(P(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ve(){function a(d){return h.call(a.src,a.listener,d)}const h=j;return a}function E(a,h,d,g,k){if(Array.isArray(h))for(var L=0;L<h.length;L++)E(a,h[L],d,g,k);else g=l(g)?!!g.capture:!!g,d=Y(d),a&&a[ft]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],d=dt(h,d,g,k),d>-1&&(Ie(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=H(a))&&(h=a.g[h.toString()],a=-1,h&&(a=dt(h,d,g,k)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ft])tn(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(P(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=H(h))?(tn(d,a),d.h==0&&(d.src=null,h[B]=null)):Ie(a)}}}function P(a){return a in Z?Z[a]:Z[a]="on"+a}function j(a,h){if(a.da)a=!0;else{h=new He(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&I(a),a=d.call(g,h)}return a}function H(a){return a=a[B],a instanceof en?a:null}var F="__closure_events_fn_"+(Math.random()*1e9>>>0);function Y(a){return typeof a=="function"?a:(a[F]||(a[F]=function(h){return a.handleEvent(h)}),a[F])}function K(){A.call(this),this.i=new en(this),this.M=this,this.G=null}p(K,A),K.prototype[ft]=!0,K.prototype.removeEventListener=function(a,h,d,g){E(this,a,h,d,g)};function q(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var k=h;h=new b(g,a),xn(h,k)}k=!0;let L,Q;if(d)for(Q=d.length-1;Q>=0;Q--)L=h.g=d[Q],k=W(L,g,!0,h)&&k;if(L=h.g=a,k=W(L,g,!0,h)&&k,k=W(L,g,!1,h)&&k,d)for(Q=0;Q<d.length;Q++)L=h.g=d[Q],k=W(L,g,!1,h)&&k}K.prototype.N=function(){if(K.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Ie(d[g]);delete a.g[h],a.h--}}this.G=null},K.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},K.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function W(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let k=!0;for(let L=0;L<h.length;++L){const Q=h[L];if(Q&&!Q.da&&Q.capture==d){const _e=Q.listener,Xe=Q.ha||Q.src;Q.fa&&tn(a.i,Q),k=_e.call(Xe,g)!==!1&&k}}return k&&!g.defaultPrevented}function ae(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function X(a){a.g=ae(()=>{a.g=null,a.i&&(a.i=!1,X(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ie extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(a){A.call(this),this.h=a,this.g={}}p(ce,A);var ye=[];function ke(a){kt(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}ce.prototype.N=function(){ce.Z.N.call(this),ke(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ae=o.JSON.stringify,pt=o.JSON.parse,mt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Mt(){}function Lt(){}var nn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _s(){b.call(this,"d")}p(_s,b);function at(){b.call(this,"c")}p(at,b);var nt={},Xs=null;function Fr(){return Xs=Xs||new K}nt.Ia="serverreachability";function ih(a){b.call(this,nt.Ia,a)}p(ih,b);function Zs(a){const h=Fr();q(h,new ih(h))}nt.STAT_EVENT="statevent";function oh(a,h){b.call(this,nt.STAT_EVENT,a),this.stat=h}p(oh,b);function bt(a){const h=Fr();q(h,new oh(h,a))}nt.Ja="timingevent";function ah(a,h){b.call(this,nt.Ja,a),this.size=h}p(ah,b);function ei(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ti(){this.g=!0}ti.prototype.ua=function(){this.g=!1};function Dy(a,h,d,g,k,L){a.info(function(){if(a.g)if(L){var Q="",_e=L.split("&");for(let Ne=0;Ne<_e.length;Ne++){var Xe=_e[Ne].split("=");if(Xe.length>1){const rt=Xe[0];Xe=Xe[1];const pn=rt.split("_");Q=pn.length>=2&&pn[1]=="type"?Q+(rt+"="+Xe+"&"):Q+(rt+"=redacted&")}}}else Q=null;else Q=L;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+d+`
`+Q})}function Ny(a,h,d,g,k,L,Q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+d+`
`+L+" "+Q})}function ys(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Vy(a,d)+(g?" "+g:"")})}function Oy(a,h){a.info(function(){return"TIMEOUT: "+h})}ti.prototype.info=function(){};function Vy(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var d=L[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var k=g[0];if(k!="noop"&&k!="stop"&&k!="close")for(let Q=1;Q<g.length;Q++)g[Q]=""}}}}return Ae(L)}catch{return h}}var To={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},lh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ch;function gl(){}p(gl,Mt),gl.prototype.g=function(){return new XMLHttpRequest},ch=new gl;function ni(a){return encodeURIComponent(String(a))}function xy(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function or(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ce(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new uh}function uh(){this.i=null,this.g="",this.h=!1}var hh={},_l={};function yl(a,h,d){a.M=1,a.A=bo(dn(h)),a.u=d,a.R=!0,fh(a,null)}function fh(a,h){a.F=Date.now(),Io(a),a.B=dn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ah(d.i,"t",g),a.C=0,d=a.j.L,a.h=new uh,a.g=Hh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ie(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(ye[0]=k.toString()),k=ye);for(let L=0;L<k.length;L++){const Q=J(d,k[L],g||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.J?xt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Zs(),Dy(a.i,a.v,a.B,a.l,a.S,a.u)}or.prototype.ba=function(a){a=a.target;const h=this.O;h&&cr(a)==3?h.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const _e=cr(this.g),Xe=this.g.ya(),Ne=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||Nh(this.g)))){this.K||_e!=4||Xe==7||(Xe==8||Ne<=0?Zs(3):Zs(2)),vl(this);var h=this.g.ca();this.X=h;var d=My(this);if(this.o=h==200,Ny(this.i,this.v,this.B,this.l,this.S,_e,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,k=this.g;if((g=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var L=g;break t}}L=null}if(a=L)ys(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,El(this,a);else{this.o=!1,this.m=3,bt(12),Br(this),ri(this);break e}}if(this.R){a=!0;let rt;for(;!this.K&&this.C<d.length;)if(rt=Ly(this,d),rt==_l){_e==4&&(this.m=4,bt(14),a=!1),ys(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==hh){this.m=4,bt(15),ys(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ys(this.i,this.l,rt,null),El(this,rt);if(dh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,bt(16),a=!1),this.o=this.o&&a,!a)ys(this.i,this.l,d,"[Invalid Chunked Response]"),Br(this),ri(this);else if(d.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Cl(Q),Q.P=!0,bt(11))}}else ys(this.i,this.l,d,null),El(this,d);_e==4&&Br(this),this.o&&!this.K&&(_e==4?Fh(this.j,this):(this.o=!1,Io(this)))}else Jy(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,bt(12)):(this.m=0,bt(13)),Br(this),ri(this)}}}catch{}finally{}};function My(a){if(!dh(a))return a.g.la();const h=Nh(a.g);if(h==="")return"";let d="";const g=h.length,k=cr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Br(a),ri(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<g;L++)a.h.h=!0,d+=a.h.i.decode(h[L],{stream:!(k&&L==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function dh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ly(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?_l:(d=Number(h.substring(d,g)),isNaN(d)?hh:(g+=1,g+d>h.length?_l:(h=h.slice(g,g+d),a.C=g+d,h)))}or.prototype.cancel=function(){this.K=!0,Br(this)};function Io(a){a.T=Date.now()+a.H,ph(a,a.H)}function ph(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ei(u(a.aa,a),h)}function vl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}or.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Oy(this.i,this.B),this.M!=2&&(Zs(),bt(17)),Br(this),this.m=2,ri(this)):ph(this,this.T-a)};function ri(a){a.j.I==0||a.K||Fh(a.j,a)}function Br(a){vl(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ke(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function El(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||wl(d.h,a))){if(!a.L&&wl(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Po(d),So(d);else break e;Sl(d),bt(18)}}else d.xa=k[1],0<d.xa-d.K&&k[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ei(u(d.Va,d),6e3));_h(d.h)<=1&&d.ta&&(d.ta=void 0)}else $r(d,11)}else if((a.L||d.g==a)&&Po(d),!w(h))for(k=d.Ba.g.parse(h),h=0;h<k.length;h++){let Ne=k[h];const rt=Ne[0];if(!(rt<=d.K))if(d.K=rt,Ne=Ne[1],d.I==2)if(Ne[0]=="c"){d.M=Ne[1],d.ba=Ne[2];const pn=Ne[3];pn!=null&&(d.ka=pn,d.j.info("VER="+d.ka));const Hr=Ne[4];Hr!=null&&(d.za=Hr,d.j.info("SVER="+d.za));const ur=Ne[5];ur!=null&&typeof ur=="number"&&ur>0&&(g=1.5*ur,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const hr=a.g;if(hr){const Do=hr.g?hr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Do){var L=g.h;L.g||Do.indexOf("spdy")==-1&&Do.indexOf("quic")==-1&&Do.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Tl(L,L.h),L.h=null))}if(g.G){const Pl=hr.g?hr.g.getResponseHeader("X-HTTP-Session-Id"):null;Pl&&(g.wa=Pl,Fe(g.J,g.G,Pl))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var Q=a;if(g.na=$h(g,g.L?g.ba:null,g.W),Q.L){yh(g.h,Q);var _e=Q,Xe=g.O;Xe&&(_e.H=Xe),_e.D&&(vl(_e),Io(_e)),g.g=Q}else Lh(g);d.i.length>0&&Co(d)}else Ne[0]!="stop"&&Ne[0]!="close"||$r(d,7);else d.I==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?$r(d,7):Rl(d):Ne[0]!="noop"&&d.l&&d.l.qa(Ne),d.A=0)}}Zs(4)}catch{}}var Uy=class{constructor(a,h){this.g=a,this.map=h}};function mh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function gh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _h(a){return a.h?1:a.g?a.g.size:0}function wl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Tl(a,h){a.g?a.g.add(h):a.h=h}function yh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}mh.prototype.cancel=function(){if(this.i=vh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return y(a.i)}var Eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let k,L=null;g>=0?(k=a[d].substring(0,g),L=a[d].substring(g+1)):k=a[d],h(k,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ar(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof ar?(this.l=a.l,si(this,a.j),this.o=a.o,this.g=a.g,ii(this,a.u),this.h=a.h,Il(this,Rh(a.i)),this.m=a.m):a&&(h=String(a).match(Eh))?(this.l=!1,si(this,h[1]||"",!0),this.o=oi(h[2]||""),this.g=oi(h[3]||"",!0),ii(this,h[4]),this.h=oi(h[5]||"",!0),Il(this,h[6]||"",!0),this.m=oi(h[7]||"")):(this.l=!1,this.i=new li(null,this.l))}ar.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ai(h,wh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ai(h,wh,!0),"@"),a.push(ni(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ai(d,d.charAt(0)=="/"?$y:jy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ai(d,zy)),a.join("")},ar.prototype.resolve=function(a){const h=dn(this);let d=!!a.j;d?si(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)ii(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var k=h.h.lastIndexOf("/");k!=-1&&(g=h.h.slice(0,k+1)+g)}if(k=g,k==".."||k==".")g="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){g=k.lastIndexOf("/",0)==0,k=k.split("/");const L=[];for(let Q=0;Q<k.length;){const _e=k[Q++];_e=="."?g&&Q==k.length&&L.push(""):_e==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),g&&Q==k.length&&L.push("")):(L.push(_e),g=!0)}g=L.join("/")}else g=k}return d?h.h=g:d=a.i.toString()!=="",d?Il(h,Rh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function dn(a){return new ar(a)}function si(a,h,d){a.j=d?oi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ii(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Il(a,h,d){h instanceof li?(a.i=h,qy(a.i,a.l)):(d||(h=ai(h,Hy)),a.i=new li(h,a.l))}function Fe(a,h,d){a.i.set(h,d)}function bo(a){return Fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function oi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ai(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,By),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function By(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wh=/[#\/\?@]/g,jy=/[#\?:]/g,$y=/[#\?]/g,Hy=/[#\?@]/g,zy=/#/g;function li(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function jr(a){a.g||(a.g=new Map,a.h=0,a.i&&Fy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=li.prototype,t.add=function(a,h){jr(this),this.i=null,a=vs(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Th(a,h){jr(a),h=vs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ih(a,h){return jr(a),h=vs(a,h),a.g.has(h)}t.forEach=function(a,h){jr(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(h,k,g,this)},this)},this)};function bh(a,h){jr(a);let d=[];if(typeof h=="string")Ih(a,h)&&(d=d.concat(a.g.get(vs(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return jr(this),this.i=null,a=vs(this,a),Ih(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=bh(this,a),a.length>0?String(a[0]):h):h};function Ah(a,h,d){Th(a,h),d.length>0&&(a.i=null,a.g.set(vs(a,h),y(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const k=ni(d);d=bh(this,d);for(let L=0;L<d.length;L++){let Q=k;d[L]!==""&&(Q+="="+ni(d[L])),a.push(Q)}}return this.i=a.join("&")};function Rh(a){const h=new li;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function vs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function qy(a,h){h&&!a.j&&(jr(a),a.i=null,a.g.forEach(function(d,g){const k=g.toLowerCase();g!=k&&(Th(this,g),Ah(this,k,d))},a)),a.j=h}function Wy(a,h){const d=new ti;if(o.Image){const g=new Image;g.onload=f(lr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(lr,d,"TestLoadImage: error",!1,h,g),g.onabort=f(lr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(lr,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Gy(a,h){const d=new ti,g=new AbortController,k=setTimeout(()=>{g.abort(),lr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(k),L.ok?lr(d,"TestPingServer: ok",!0,h):lr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),lr(d,"TestPingServer: error",!1,h)})}function lr(a,h,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function Ky(){this.g=new mt}function bl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(bl,Mt),bl.prototype.g=function(){return new Ao(this.i,this.h)};function Ao(a,h){K.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ao,K),t=Ao.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ui(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ci(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ci(this):ui(this),this.readyState==3&&Sh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ci(this))},t.Na=function(a){this.g&&(this.response=a,ci(this))},t.ga=function(){this.g&&ci(this)};function ci(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ui(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ui(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ch(a){let h="";return kt(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Al(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ch(d),typeof a=="string"?d!=null&&ni(d):Fe(a,h,d))}function ze(a){K.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ze,K);var Qy=/^https?$/i,Yy=["POST","PUT"];t=ze.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ch.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Ph(this,L);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())d.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(L=>L.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Yy,h,void 0)>=0)||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,Q]of d)this.g.setRequestHeader(L,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){Ph(this,L)}};function Ph(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,kh(a),Ro(a)}function kh(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,q(this,"complete"),q(this,"abort"),Ro(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),ze.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Dh(this):this.Xa())},t.Xa=function(){Dh(this)};function Dh(a){if(a.h&&typeof i<"u"){if(a.v&&cr(a)==4)setTimeout(a.Ca.bind(a),0);else if(q(a,"readystatechange"),cr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=L===0){let Q=String(a.D).match(Eh)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),g=!Qy.test(Q?Q.toLowerCase():"")}d=g}if(d)q(a,"complete"),q(a,"success");else{a.o=6;try{var k=cr(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",kh(a)}}finally{Ro(a)}}}}function Ro(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||q(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function cr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return cr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),pt(h)}};function Nh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Jy(a){const h={};a=(a.g&&cr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=xy(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const L=h[k]||[];h[k]=L,L.push(d)}fn(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function hi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Oh(a){this.za=0,this.i=[],this.j=new ti,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=hi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=hi("baseRetryDelayMs",5e3,a),this.Za=hi("retryDelaySeedMs",1e4,a),this.Ta=hi("forwardChannelMaxRetries",2,a),this.va=hi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new mh(a&&a.concurrentRequestLimit),this.Ba=new Ky,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Oh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){bt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=$h(this,null,this.W),Co(this)};function Rl(a){if(Vh(a),a.I==3){var h=a.V++,d=dn(a.J);if(Fe(d,"SID",a.M),Fe(d,"RID",h),Fe(d,"TYPE","terminate"),fi(a,d),h=new or(a,a.j,h),h.M=2,h.A=bo(dn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Hh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Io(h)}jh(a)}function So(a){a.g&&(Cl(a),a.g.cancel(),a.g=null)}function Vh(a){So(a),a.v&&(o.clearTimeout(a.v),a.v=null),Po(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Co(a){if(!gh(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||_(),G||(M(),G=!0),T.add(h,a),a.D=0}}function Xy(a,h){return _h(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ei(u(a.Ea,a,h),Bh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new or(this,this.j,a);let L=this.o;if(this.U&&(L?(L=xt(L),xn(L,this.U)):L=this.U),this.u!==null||this.R||(k.J=L,L=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Mh(this,k,h),d=dn(this.J),Fe(d,"RID",a),Fe(d,"CVER",22),this.G&&Fe(d,"X-HTTP-Session-Id",this.G),fi(this,d),L&&(this.R?h="headers="+ni(Ch(L))+"&"+h:this.u&&Al(d,this.u,L)),Tl(this.h,k),this.Ra&&Fe(d,"TYPE","init"),this.S?(Fe(d,"$req",h),Fe(d,"SID","null"),k.U=!0,yl(k,d,null)):yl(k,d,h),this.I=2}}else this.I==3&&(a?xh(this,a):this.i.length==0||gh(this.h)||xh(this))};function xh(a,h){var d;h?d=h.l:d=a.V++;const g=dn(a.J);Fe(g,"SID",a.M),Fe(g,"RID",d),Fe(g,"AID",a.K),fi(a,g),a.u&&a.o&&Al(g,a.u,a.o),d=new or(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Mh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Tl(a.h,d),yl(d,g,h)}function fi(a,h){a.H&&kt(a.H,function(d,g){Fe(h,g,d)}),a.l&&kt({},function(d,g){Fe(h,g,d)})}function Mh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var k=a.i;let _e=-1;for(;;){const Xe=["count="+d];_e==-1?d>0?(_e=k[0].g,Xe.push("ofs="+_e)):_e=0:Xe.push("ofs="+_e);let Ne=!0;for(let rt=0;rt<d;rt++){var L=k[rt].g;const pn=k[rt].map;if(L-=_e,L<0)_e=Math.max(0,k[rt].g-100),Ne=!1;else try{L="req"+L+"_"||"";try{var Q=pn instanceof Map?pn:Object.entries(pn);for(const[Hr,ur]of Q){let hr=ur;l(ur)&&(hr=Ae(ur)),Xe.push(L+Hr+"="+encodeURIComponent(hr))}}catch(Hr){throw Xe.push(L+"type="+encodeURIComponent("_badmap")),Hr}}catch{g&&g(pn)}}if(Ne){Q=Xe.join("&");break e}}Q=void 0}return a=a.i.splice(0,d),h.G=a,Q}function Lh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||_(),G||(M(),G=!0),T.add(h,a),a.A=0}}function Sl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ei(u(a.Da,a),Bh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Uh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ei(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,bt(10),So(this),Uh(this))};function Cl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Uh(a){a.g=new or(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=dn(a.na);Fe(h,"RID","rpc"),Fe(h,"SID",a.M),Fe(h,"AID",a.K),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Fe(h,"TO",a.ia),Fe(h,"TYPE","xmlhttp"),fi(a,h),a.u&&a.o&&Al(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=bo(dn(h)),d.u=null,d.R=!0,fh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,So(this),Sl(this),bt(19))};function Po(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Fh(a,h){var d=null;if(a.g==h){Po(a),Cl(a),a.g=null;var g=2}else if(wl(a.h,h))d=h.G,yh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var k=a.D;g=Fr(),q(g,new ah(g,d)),Co(a)}else Lh(a);else if(k=h.m,k==3||k==0&&h.X>0||!(g==1&&Xy(a,h)||g==2&&Sl(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),k){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function Bh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function $r(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const k=!g;g=new ar(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||si(g,"https"),bo(g),k?Wy(g.toString(),d):Gy(g.toString(),d)}else bt(2);a.I=0,a.l&&a.l.pa(h),jh(a),Vh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function jh(a){if(a.I=0,a.ja=[],a.l){const h=vh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ja,h),O(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function $h(a,h,d){var g=d instanceof ar?dn(d):new ar(d);if(g.g!="")h&&(g.g=h+"."+g.g),ii(g,g.u);else{var k=o.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;const L=new ar(null);g&&si(L,g),h&&(L.g=h),k&&ii(L,k),d&&(L.h=d),g=L}return d=a.G,h=a.wa,d&&h&&Fe(g,d,h),Fe(g,"VER",a.ka),fi(a,g),g}function Hh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ze(new bl({ab:d})):new ze(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zh(){}t=zh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ko(){}ko.prototype.g=function(a,h){return new Ut(a,h)};function Ut(a,h){K.call(this),this.g=new Oh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!w(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Es(this)}p(Ut,K),Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Rl(this.g)},Ut.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ae(a),a=d);h.i.push(new Uy(h.Ya++,a)),h.I==3&&Co(h)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Rl(this.g),delete this.g,Ut.Z.N.call(this)};function qh(a){_s.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(qh,_s);function Wh(){at.call(this),this.status=1}p(Wh,at);function Es(a){this.g=a}p(Es,zh),Es.prototype.ra=function(){q(this.g,"a")},Es.prototype.qa=function(a){q(this.g,new qh(a))},Es.prototype.pa=function(a){q(this.g,new Wh)},Es.prototype.oa=function(){q(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,gg=function(){return new ko},mg=function(){return Fr()},pg=nt,bc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},To.NO_ERROR=0,To.TIMEOUT=8,To.HTTP_ERROR=6,Ko=To,lh.COMPLETE="complete",dg=lh,Lt.EventType=nn,nn.OPEN="a",nn.CLOSE="b",nn.ERROR="c",nn.MESSAGE="d",K.prototype.listen=K.prototype.J,vi=Lt,ze.prototype.listenOnce=ze.prototype.K,ze.prototype.getLastError=ze.prototype.Ha,ze.prototype.getLastErrorCode=ze.prototype.ya,ze.prototype.getStatus=ze.prototype.ca,ze.prototype.getResponseJson=ze.prototype.La,ze.prototype.getResponseText=ze.prototype.la,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Fa,fg=ze}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});const nd="@firebase/firestore",rd="4.9.2";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let Gs="12.3.0";/**
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
 */const is=new fu("@firebase/firestore");function As(){return is.logLevel}function ee(t,...e){if(is.logLevel<=Ee.DEBUG){const n=e.map(mu);is.debug(`Firestore (${Gs}): ${t}`,...n)}}function Zn(t,...e){if(is.logLevel<=Ee.ERROR){const n=e.map(mu);is.error(`Firestore (${Gs}): ${t}`,...n)}}function Bs(t,...e){if(is.logLevel<=Ee.WARN){const n=e.map(mu);is.warn(`Firestore (${Gs}): ${t}`,...n)}}function mu(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,_g(t,r,n)}function _g(t,e,n){let r=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Zn(r),new Error(r)}function Pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||_g(e,s,r)}function pe(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(yt.UNAUTHENTICATED)))}shutdown(){}}class Ab{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Rb{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Cr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Cr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new yg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class Sb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Sb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new sd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new sd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class gu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=kb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Ac(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ql(s)===Ql(i)?we(s,i):Ql(s)?1:-1}return we(t.length,e.length)}const Db=55296,Nb=57343;function Ql(t){const e=t.charCodeAt(0);return e>=Db&&e<=Nb}function js(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const id="__name__";class _n{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&fe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=_n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=_n.isNumericId(e),s=_n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?_n.extractNumericId(e).compare(_n.extractNumericId(n)):Ac(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Sr.fromString(e.substring(4,e.length-2))}}class je extends _n{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new je(n)}static emptyPath(){return new je([])}}const Ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends _n{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return Ob.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===id}static keyField(){return new ut([id])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(je.fromString(e))}static fromName(e){return new le(je.fromString(e).popFirst(5))}static empty(){return new le(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new je(e.slice()))}}/**
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
 */function Vb(t,e,n){if(!n)throw new re(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xb(t,e,n,r){if(e===!0&&r===!0)throw new re(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function od(t){if(!le.isDocumentKey(t))throw new re(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function Gi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_u(t);throw new re(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function ho(t,e){if(!vg(t))throw new re(z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new re(z.INVALID_ARGUMENT,n);return!0}/**
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
 */const ad=-62135596800,ld=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ld);return new Be(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ad)throw new re(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ld}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ho(e,Be._jsonSchema))return new Be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ad;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Be._jsonSchemaVersion="firestore/timestamp/1.0",Be._jsonSchema={type:Ye("string",Be._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
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
 */const Ki=-1;function Mb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Or(s,le.empty(),e)}function Lb(t){return new Or(t.readTime,t.key,Ki)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(de.min(),le.empty(),Ki)}static max(){return new Or(de.max(),le.empty(),Ki)}}function Ub(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const Fb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ks(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==Fb)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):$.reject(n)}static resolve(e){return new $(((n,r)=>{n(e)}))}static reject(e){return new $(((n,r)=>{r(e)}))}static waitFor(e){return new $(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next((s=>s?$.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new $(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new $(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function jb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Za{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Za.ce=-1;/**
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
 */const yu=-1;function el(t){return t==null}function _a(t){return t===0&&1/t==-1/0}function $b(t){return typeof t=="number"&&Number.isInteger(t)&&!_a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Eg="";function Hb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=cd(e)),e=zb(t.get(n),e);return cd(e)}function zb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Eg:n+="";break;default:n+=i}}return n}function cd(t){return t+Eg+""}/**
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
 */function ud(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class $e{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lo(this.root,e,this.comparator,!0)}}class Lo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hd(this.data.getIterator())}getIteratorFrom(e){return new hd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class hd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new rn([])}unionWith(e){let n=new tt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return js(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Tg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Tg("Invalid base64 string: "+i):i}})(e);return new ht(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const qb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=qb.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */const Ig="server_timestamp",bg="__type__",Ag="__previous_value__",Rg="__local_write_time__";function vu(t){return(t?.mapValue?.fields||{})[bg]?.stringValue===Ig}function tl(t){const e=t.mapValue.fields[Ag];return vu(e)?tl(e):e}function Qi(t){const e=Vr(t.mapValue.fields[Rg].timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class Wb{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const ya="(default)";class Yi{constructor(e,n){this.projectId=e,this.database=n||ya}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database===ya}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Sg="__type__",Gb="__max__",Uo={mapValue:{}},Cg="__vector__",va="value";function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vu(t)?4:Qb(t)?9007199254740991:Kb(t)?10:11:fe(28295,{value:t})}function kn(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qi(t).isEqual(Qi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vr(s.timestampValue),l=Vr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return xr(s.bytesValue).isEqual(xr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),l=Ge(i.doubleValue);return o===l?_a(o)===_a(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return js(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ud(o)!==ud(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!kn(o[c],l[c])))return!1;return!0})(t,e);default:return fe(52216,{left:t})}}function Ji(t,e){return(t.values||[]).find((n=>kn(n,e)))!==void 0}function $s(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return fd(t.timestampValue,e.timestampValue);case 4:return fd(Qi(t),Qi(e));case 5:return Ac(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=xr(i),c=xr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=we(l[u],c[u]);if(f!==0)return f}return we(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=we(Ge(i.latitude),Ge(o.latitude));return l!==0?l:we(Ge(i.longitude),Ge(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return dd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const l=i.fields||{},c=o.fields||{},u=l[va]?.arrayValue,f=c[va]?.arrayValue,p=we(u?.values?.length||0,f?.values?.length||0);return p!==0?p:dd(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Uo.mapValue&&o===Uo.mapValue)return 0;if(i===Uo.mapValue)return 1;if(o===Uo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Ac(c[p],f[p]);if(m!==0)return m;const y=$s(l[c[p]],u[f[p]]);if(y!==0)return y}return we(c.length,f.length)})(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Vr(t),r=Vr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function dd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=$s(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Hs(t){return Rc(t)}function Rc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return xr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return le.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Rc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Rc(n.fields[o])}`;return s+"}"})(t.mapValue):fe(61005,{value:t})}function Qo(t){switch(Mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tl(t);return e?16+Qo(e):16;case 5:return 2*t.stringValue.length;case 6:return xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Qo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ds(r.fields,((i,o)=>{s+=i.length+Qo(o)})),s})(t.mapValue);default:throw fe(13486,{value:t})}}function Sc(t){return!!t&&"integerValue"in t}function Eu(t){return!!t&&"arrayValue"in t}function pd(t){return!!t&&"nullValue"in t}function md(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yo(t){return!!t&&"mapValue"in t}function Kb(t){return(t?.mapValue?.fields||{})[Sg]?.stringValue===Cg}function Oi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Oi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oi(t.arrayValue.values[n]);return e}return{...t}}function Qb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Gb}/**
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
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Oi(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ds(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new qt(Oi(this.value))}}function Pg(t){const e=[];return ds(t.fields,((n,r)=>{const s=new ut([n]);if(Yo(r)){const i=Pg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new rn(e)}/**
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
 */class Et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,de.min(),de.min(),de.min(),qt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,de.min(),de.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,de.min(),de.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ea{constructor(e,n){this.position=e,this.inclusive=n}}function gd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=$s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _d(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function Yb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kg{}class et extends kg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Xb(e,n,r):n==="array-contains"?new tA(e,r):n==="in"?new nA(e,r):n==="not-in"?new rA(e,r):n==="array-contains-any"?new sA(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Zb(e,r):new eA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison($s(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends kg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Dn(e,n)}matches(e){return Dg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Dg(t){return t.op==="and"}function Ng(t){return Jb(t)&&Dg(t)}function Jb(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Cc(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Hs(t.value);if(Ng(t))return t.filters.map((e=>Cc(e))).join(",");{const e=t.filters.map((n=>Cc(n))).join(",");return`${t.op}(${e})`}}function Og(t,e){return t instanceof et?(function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&kn(r.value,s.value)})(t,e):t instanceof Dn?(function(r,s){return s instanceof Dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&Og(o,s.filters[l])),!0):!1})(t,e):void fe(19439)}function Vg(t){return t instanceof et?(function(n){return`${n.field.canonicalString()} ${n.op} ${Hs(n.value)}`})(t):t instanceof Dn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Vg).join(" ,")+"}"})(t):"Filter"}class Xb extends et{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class Zb extends et{constructor(e,n){super(e,"in",n),this.keys=xg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class eA extends et{constructor(e,n){super(e,"not-in",n),this.keys=xg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function xg(t,e){return(e.arrayValue?.values||[]).map((n=>le.fromName(n.referenceValue)))}class tA extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eu(n)&&Ji(n.arrayValue,this.value)}}class nA extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class rA extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ji(this.value.arrayValue,n)}}class sA extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ji(this.value.arrayValue,r)))}}/**
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
 */class iA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function yd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new iA(t,e,n,r,s,i,o)}function wu(t){const e=pe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Cc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),el(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Hs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Hs(r))).join(",")),e.Te=n}return e.Te}function Tu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Yb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Og(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_d(t.startAt,e.startAt)&&_d(t.endAt,e.endAt)}function Pc(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class nl{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function oA(t,e,n,r,s,i,o,l){return new nl(t,e,n,r,s,i,o,l)}function Iu(t){return new nl(t)}function vd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function aA(t){return t.collectionGroup!==null}function Vi(t){const e=pe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(ut.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new wa(i,r))})),n.has(ut.keyField().canonicalString())||e.Ie.push(new wa(ut.keyField(),r))}return e.Ie}function Tn(t){const e=pe(t);return e.Ee||(e.Ee=lA(e,Vi(t))),e.Ee}function lA(t,e){if(t.limitType==="F")return yd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new wa(s.field,i)}));const n=t.endAt?new Ea(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ea(t.startAt.position,t.startAt.inclusive):null;return yd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kc(t,e,n){return new nl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rl(t,e){return Tu(Tn(t),Tn(e))&&t.limitType===e.limitType}function Mg(t){return`${wu(Tn(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Vg(s))).join(", ")}]`),el(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Hs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Hs(s))).join(",")),`Target(${r})`})(Tn(t))}; limitType=${t.limitType})`}function sl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=gd(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Vi(r),s)||r.endAt&&!(function(o,l,c){const u=gd(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Vi(r),s))})(t,e)}function cA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lg(t){return(e,n)=>{let r=!1;for(const s of Vi(t)){const i=uA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uA(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?$s(c,u):fe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:t.dir})}}/**
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
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return wg(this.inner)}size(){return this.innerSize}}/**
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
 */const hA=new $e(le.comparator);function er(){return hA}const Ug=new $e(le.comparator);function Ei(...t){let e=Ug;for(const n of t)e=e.insert(n.key,n);return e}function Fg(t){let e=Ug;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Qr(){return xi()}function Bg(){return xi()}function xi(){return new ps((t=>t.toString()),((t,e)=>t.isEqual(e)))}const fA=new $e(le.comparator),dA=new tt(le.comparator);function Te(...t){let e=dA;for(const n of t)e=e.add(n);return e}const pA=new tt(we);function mA(){return pA}/**
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
 */function bu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_a(e)?"-0":e}}function jg(t){return{integerValue:""+t}}function gA(t,e){return $b(e)?jg(e):bu(t,e)}/**
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
 */class il{constructor(){this._=void 0}}function _A(t,e,n){return t instanceof Xi?(function(s,i){const o={fields:{[bg]:{stringValue:Ig},[Rg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vu(i)&&(i=tl(i)),i&&(o.fields[Ag]=i),{mapValue:o}})(n,e):t instanceof Zi?Hg(t,e):t instanceof eo?zg(t,e):(function(s,i){const o=$g(s,i),l=Ed(o)+Ed(s.Ae);return Sc(o)&&Sc(s.Ae)?jg(l):bu(s.serializer,l)})(t,e)}function yA(t,e,n){return t instanceof Zi?Hg(t,e):t instanceof eo?zg(t,e):n}function $g(t,e){return t instanceof Ta?(function(r){return Sc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Xi extends il{}class Zi extends il{constructor(e){super(),this.elements=e}}function Hg(t,e){const n=qg(e);for(const r of t.elements)n.some((s=>kn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class eo extends il{constructor(e){super(),this.elements=e}}function zg(t,e){let n=qg(e);for(const r of t.elements)n=n.filter((s=>!kn(s,r)));return{arrayValue:{values:n}}}class Ta extends il{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ed(t){return Ge(t.integerValue||t.doubleValue)}function qg(t){return Eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class vA{constructor(e,n){this.field=e,this.transform=n}}function EA(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?js(r.elements,s.elements,kn):r instanceof Ta&&s instanceof Ta?kn(r.Ae,s.Ae):r instanceof Xi&&s instanceof Xi})(t.transform,e.transform)}class wA{constructor(e,n){this.version=e,this.transformResults=n}}class Wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ol{}function Wg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kg(t.key,Wn.none()):new fo(t.key,t.data,Wn.none());{const n=t.data,r=qt.empty();let s=new tt(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ms(t.key,r,new rn(s.toArray()),Wn.none())}}function TA(t,e,n){t instanceof fo?(function(s,i,o){const l=s.value.clone(),c=Td(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof ms?(function(s,i,o){if(!Jo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Td(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Gg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Mi(t,e,n,r){return t instanceof fo?(function(i,o,l,c){if(!Jo(i.precondition,o))return l;const u=i.value.clone(),f=Id(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof ms?(function(i,o,l,c){if(!Jo(i.precondition,o))return l;const u=Id(i.fieldTransforms,c,o),f=o.data;return f.setAll(Gg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Jo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function IA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=$g(r.transform,s||null);i!=null&&(n===null&&(n=qt.empty()),n.set(r.field,i))}return n||null}function wd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&js(r,s,((i,o)=>EA(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends ol{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ms extends ol{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Gg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Td(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,yA(o,l,n[s]))}return r}function Id(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_A(i,o,e))}return r}class Kg extends ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bA extends ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&TA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Mi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Mi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Bg();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Wg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Te())}isEqual(e){return this.batchId===e.batchId&&js(this.mutations,e.mutations,((n,r)=>wd(n,r)))&&js(this.baseMutations,e.baseMutations,((n,r)=>wd(n,r)))}}class Au{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return fA})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Au(e,n,r,s)}}/**
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
 */class RA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,be;function CA(t){switch(t){case z.OK:return fe(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function Qg(t){if(t===void 0)return Zn("GRPC error has no .code"),z.UNKNOWN;switch(t){case Qe.OK:return z.OK;case Qe.CANCELLED:return z.CANCELLED;case Qe.UNKNOWN:return z.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return z.INTERNAL;case Qe.UNAVAILABLE:return z.UNAVAILABLE;case Qe.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Qe.NOT_FOUND:return z.NOT_FOUND;case Qe.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Qe.ABORTED:return z.ABORTED;case Qe.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Qe.DATA_LOSS:return z.DATA_LOSS;default:return fe(39323,{code:t})}}(be=Qe||(Qe={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function PA(){return new TextEncoder}/**
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
 */const kA=new Sr([4294967295,4294967295],0);function bd(t){const e=PA().encode(t),n=new hg;return n.update(e),new Uint8Array(n.digest())}function Ad(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Sr([n,r],0),new Sr([s,i],0)]}class Ru{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wi(`Invalid padding: ${n}`);if(r<0)throw new wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new wi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Sr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Sr.fromNumber(r)));return s.compare(kA)===1&&(s=new Sr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=bd(e),[r,s]=Ad(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ru(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=bd(e),[r,s]=Ad(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class al{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new al(de.min(),s,new $e(we),er(),Te())}}class po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new po(r,n,Te(),Te(),Te())}}/**
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
 */class Xo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Yg{constructor(e,n){this.targetId=e,this.Ce=n}}class Jg{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rd{constructor(){this.ve=0,this.Fe=Sd(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe(38017,{changeType:i})}})),new po(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Sd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class DA{constructor(e){this.Ge=e,this.ze=new Map,this.je=er(),this.Je=Fo(),this.He=Fo(),this.Ye=new $e(we)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Pc(i))if(r===0){const o=new le(i.path);this.et(n,o,Et.newNoDocument(o,de.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=xr(r).toUint8Array()}catch(c){if(c instanceof Tg)return Bs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ru(o,s,i)}catch(c){return Bs(c instanceof wi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Pc(l.target)){const c=new le(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Et.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Te();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new al(e,n,this.Ye,this.je,r);return this.je=er(),this.Je=Fo(),this.He=Fo(),this.Ye=new $e(we),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Rd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new tt(we),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new tt(we),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Rd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fo(){return new $e(le.comparator)}function Sd(){return new $e(le.comparator)}const NA={asc:"ASCENDING",desc:"DESCENDING"},OA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VA={and:"AND",or:"OR"};class xA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dc(t,e){return t.useProto3Json||el(e)?e:{value:e}}function Ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MA(t,e){return Ia(t,e.toTimestamp())}function In(t){return Pe(!!t,49232),de.fromTimestamp((function(n){const r=Vr(n);return new Be(r.seconds,r.nanos)})(t))}function Su(t,e){return Nc(t,e).canonicalString()}function Nc(t,e){const n=(function(s){return new je(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Zg(t){const e=je.fromString(t);return Pe(s_(e),10190,{key:e.toString()}),e}function Oc(t,e){return Su(t.databaseId,e.path)}function Yl(t,e){const n=Zg(e);if(n.get(1)!==t.databaseId.projectId)throw new re(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(t_(n))}function e_(t,e){return Su(t.databaseId,e)}function LA(t){const e=Zg(t);return e.length===4?je.emptyPath():t_(e)}function Vc(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function t_(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Cd(t,e,n){return{name:Oc(t,e),fields:n.value.mapValue.fields}}function UA(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),ht.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ht.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?z.UNKNOWN:Qg(u.code);return new re(f,u.message||"")})(o);n=new Jg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yl(t,r.document.name),i=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):de.min(),l=new qt({mapValue:{fields:r.document.fields}}),c=Et.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Xo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yl(t,r.document),i=r.readTime?In(r.readTime):de.min(),o=Et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Xo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yl(t,r.document),i=r.removedTargetIds||[];n=new Xo([],i,s,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new SA(s,i),l=r.targetId;n=new Yg(l,o)}}return n}function FA(t,e){let n;if(e instanceof fo)n={update:Cd(t,e.key,e.value)};else if(e instanceof Kg)n={delete:Oc(t,e.key)};else if(e instanceof ms)n={update:Cd(t,e.key,e.data),updateMask:KA(e.fieldMask)};else{if(!(e instanceof bA))return fe(16599,{Vt:e.type});n={verify:Oc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof Xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw fe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:MA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe(27497)})(t,e.precondition)),n}function BA(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?In(s.updateTime):In(i);return o.isEqual(de.min())&&(o=In(i)),new wA(o,s.transformResults||[])})(n,e)))):[]}function jA(t,e){return{documents:[e_(t,e.path)]}}function $A(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=e_(t,s);const i=(function(u){if(u.length!==0)return r_(Dn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Ss(m.field),direction:qA(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Dc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function HA(t){let e=LA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=n_(p);return m instanceof Dn&&Ng(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(O){return new wa(Cs(O.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,el(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,y=p.values||[];return new Ea(y,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,y=p.values||[];return new Ea(y,m)})(n.endAt)),oA(e,s,o,i,l,"F",c,u)}function zA(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function n_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cs(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Cs(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cs(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cs(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return et.create(Cs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Dn.create(n.compositeFilter.filters.map((r=>n_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(n.compositeFilter.op))})(t):fe(30097,{filter:t})}function qA(t){return NA[t]}function WA(t){return OA[t]}function GA(t){return VA[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Cs(t){return ut.fromServerFormat(t.fieldPath)}function r_(t){return t instanceof et?(function(n){if(n.op==="=="){if(md(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NAN"}};if(pd(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(md(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NAN"}};if(pd(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(n.field),op:WA(n.op),value:n.value}}})(t):t instanceof Dn?(function(n){const r=n.getFilters().map((s=>r_(s)));return r.length===1?r[0]:{compositeFilter:{op:GA(n.op),filters:r}}})(t):fe(54877,{filter:t})}function KA(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function s_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QA{constructor(e){this.yt=e}}function YA(t){const e=HA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
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
 */class JA{constructor(){this.Cn=new XA}addToCollectionParentIndex(e,n){return this.Cn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Or.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class XA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(je.comparator)).toArray()}}/**
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
 */const Pd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},i_=41943040;class Dt{static withCacheSize(e){return new Dt(e,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(i_,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);/**
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
 */class zs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new zs(0)}static cr(){return new zs(-1)}}/**
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
 */const kd="LruGarbageCollector",ZA=1048576;function Dd([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class eR{constructor(e){this.Ir=e,this.buffer=new tt(Dd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Dd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class tR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(kd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Qs(n)?ee(kd,"Ignoring IndexedDB error during garbage collection: ",n):await Ks(n)}await this.Vr(3e5)}))}}class nR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Za.ce);const r=new eR(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Pd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),As()<=Ee.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function rR(t,e){return new nR(t,e)}/**
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
 */class sR{constructor(){this.changes=new ps((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class oR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Mi(r.mutation,s,rn.empty(),Be.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Te()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Te()){const s=Qr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Ei();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Te())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=er();const o=xi(),l=(function(){return xi()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof ms)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Mi(f.mutation,u,f.mutation.getFieldMask(),Be.now())):o.set(u.key,rn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>l.set(u,new iR(f,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=xi();let s=new $e(((o,l)=>o-l)),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||rn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=Bg();f.forEach((m=>{if(!i.has(m)){const y=Wg(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Qr());let l=Ki,c=i;return o.next((u=>$.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Te()))).next((f=>({batchId:l,changes:Fg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next((r=>{let s=Ei();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ei();return this.indexManager.getCollectionParents(e,i).next((l=>$.forEach(l,(c=>{const u=(function(p,m){return new nl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Et.newInvalidDocument(f)))}));let l=Ei();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&Mi(f.mutation,u,rn.empty(),Be.now()),sl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
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
 */class aR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:In(s.createTime)}})(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:YA(s.bundledQuery),readTime:In(s.readTime)}})(n)),$.resolve()}}/**
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
 */class lR{constructor(){this.overlays=new $e(le.comparator),this.qr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return $.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Qr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Qr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Qr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return $.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RA(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class cR{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Cu{constructor(){this.Qr=new tt(st.$r),this.Ur=new tt(st.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new st(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new le(new je([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new le(new je([])),r=new st(n,e),s=new st(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new st(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return le.comparator(e.key,n.key)||we(e.Yr,n.Yr)}static Kr(e,n){return we(e.Yr,n.Yr)||le.comparator(e.key,n.key)}}/**
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
 */class uR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new tt(st.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?yu:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const l=this.Xr(o.Yr);i.push(l)})),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(we);return n.forEach((s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{r=r.add(l.Yr)}))})),$.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new st(new le(i),0);let l=new tt(we);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)}),o),$.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Pe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return $.forEach(n.mutations,(s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new st(n,0),s=this.Zr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hR{constructor(e){this.ri=e,this.docs=(function(){return new $e(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))})),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=er();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ub(Lb(f),r)<=0||(s.has(f.key)||sl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe(9500)}ii(e,n){return $.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new fR(this)}getSize(e){return $.resolve(this.size)}}class fR extends sR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),$.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class dR{constructor(e){this.persistence=e,this.si=new ps((n=>wu(n)),Tu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new Cu,this.targetCount=0,this.ai=zs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),$.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new zs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Pr(n),$.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),$.waitFor(i).next((()=>s))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this._i.containsKey(n))}}/**
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
 */class o_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Za(0),this.li=!1,this.li=!0,this.hi=new cR,this.referenceDelegate=e(this),this.Pi=new dR(this),this.indexManager=new JA,this.remoteDocumentCache=(function(s){return new hR(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new QA(n),this.Ii=new aR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new uR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new pR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return $.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class pR extends Bb{constructor(e){super(),this.currentSequenceNumber=e}}class Pu{constructor(e){this.persistence=e,this.Ri=new Cu,this.Vi=null}static mi(e){return new Pu(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,(r=>{const s=le.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,de.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ba{constructor(e,n){this.persistence=e,this.pi=new ps((r=>Hb(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=rR(this,n)}static mi(e,n){return new ba(e,n)}Ei(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return $.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?$.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((l=>{l||(r++,i.removeEntry(o,de.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qo(e.data.value)),n}br(e,n,r){return $.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class mR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return oI()?8:jb(It())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new mR;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(As()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(As()<=Ee.DEBUG&&ee("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(As()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):$.resolve())}ys(e,n){if(vd(n))return $.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=kc(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,kc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,r,s){return vd(n)||s.isEqual(de.min())?$.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?$.resolve(null):(As()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rs(n)),this.vs(e,o,n,Mb(s,Ki)).next((l=>l)))}))}Ds(e,n){let r=new tt(Lg(e));return n.forEach(((s,i)=>{sl(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return As()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.ps.getDocumentsMatchingQuery(e,n,Or.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Du="LocalStore",_R=3e8;class yR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new $e(we),this.xs=new ps((i=>wu(i)),Tu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function vR(t,e,n,r){return new yR(t,e,n,r)}async function a_(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function ER(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let y=$.resolve();return m.forEach((O=>{y=y.next((()=>f.getEntry(c,O))).next((D=>{const S=u.docVersions.get(O);Pe(S!==null,48541),D.version.compareTo(S)<0&&(p.applyToRemoteDocument(D,u),D.isValidDocument()&&(D.setReadTime(u.commitVersion),f.addEntry(D)))}))})),y.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function l_(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function wR(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ht.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(D,S,x){return D.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=_R?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(m,y,f)&&l.push(n.Pi.updateTargetData(i,y))}));let c=er(),u=Te();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(TR(i,o,e.documentUpdates).next((f=>{c=f.ks,u=f.qs}))),!r.isEqual(de.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return $.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function TR(t,e,n){let r=Te(),s=Te();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=er();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee(Du,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:s}}))}function IR(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=yu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function bR(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,$.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function xc(t,e,n){const r=pe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Qs(o))throw o;ee(Du,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Nd(t,e,n){const r=pe(t);let s=de.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=pe(c),m=p.xs.get(f);return m!==void 0?$.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,Tn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Te()))).next((l=>(AR(r,cA(e),l),{documents:l,Qs:i})))))}function AR(t,e,n){let r=t.Os.get(e)||de.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Od{constructor(){this.activeTargetIds=mA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RR{constructor(){this.Mo=new Od,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Od,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class SR{Oo(e){}shutdown(){}}/**
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
 */const Vd="ConnectivityMonitor";class xd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(Vd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(Vd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bo=null;function Mc(){return Bo===null?Bo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Bo++,"0x"+Bo.toString(16)}/**
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
 */const Jl="RestConnection",CR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class PR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ya?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Mc(),l=this.zo(e,n.toUriEncodedString());ee(Jl,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),f=hs(u);return this.Jo(e,l,c,r,f).then((p=>(ee(Jl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Bs(Jl,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Gs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=CR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class kR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const gt="WebChannelConnection";class DR extends PR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Mc();return new Promise(((l,c)=>{const u=new fg;u.setWithCredentials(!0),u.listenOnce(dg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ko.NO_ERROR:const p=u.getResponseJson();ee(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ko.TIMEOUT:ee(gt,`RPC '${e}' ${o} timed out`),c(new re(z.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const m=u.getStatus();if(ee(gt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const O=y?.error;if(O&&O.status&&O.message){const D=(function(x){const U=x.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(U)>=0?U:z.UNKNOWN})(O.status);c(new re(D,O.message))}else c(new re(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new re(z.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(gt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ee(gt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Mc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gg(),l=mg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ee(gt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.I_(p);let m=!1,y=!1;const O=new kR({Yo:S=>{y?ee(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(ee(gt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(gt,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},Zo:()=>p.close()}),D=(S,x,U)=>{S.listen(x,(N=>{try{U(N)}catch(R){setTimeout((()=>{throw R}),0)}}))};return D(p,vi.EventType.OPEN,(()=>{y||(ee(gt,`RPC '${e}' stream ${s} transport opened.`),O.o_())})),D(p,vi.EventType.CLOSE,(()=>{y||(y=!0,ee(gt,`RPC '${e}' stream ${s} transport closed`),O.a_(),this.E_(p))})),D(p,vi.EventType.ERROR,(S=>{y||(y=!0,Bs(gt,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),O.a_(new re(z.UNAVAILABLE,"The operation could not be completed")))})),D(p,vi.EventType.MESSAGE,(S=>{if(!y){const x=S.data[0];Pe(!!x,16349);const U=x,N=U?.error||U[0]?.error;if(N){ee(gt,`RPC '${e}' stream ${s} received error:`,N);const R=N.status;let M=(function(_){const v=Qe[_];if(v!==void 0)return Qg(v)})(R),G=N.message;M===void 0&&(M=z.INTERNAL,G="Unknown error status: "+R+" with message "+N.message),y=!0,O.a_(new re(M,G)),p.close()}else ee(gt,`RPC '${e}' stream ${s} received:`,x),O.u_(x)}})),D(l,pg.STAT_EVENT,(S=>{S.stat===bc.PROXY?ee(gt,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===bc.NOPROXY&&ee(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Xl(){return typeof document<"u"?document:null}/**
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
 */function ll(t){return new xA(t,!0)}/**
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
 */class c_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Md="PersistentStream";class u_{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new c_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new re(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ee(Md,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ee(Md,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class NR extends u_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=UA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?In(o.readTime):de.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Vc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Pc(c)?{documents:jA(i,c)}:{query:$A(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Xg(i,o.resumeToken);const u=Dc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Ia(i,o.snapshotVersion.toTimestamp());const u=Dc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=zA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Vc(this.serializer),n.removeTarget=e,this.q_(n)}}class OR extends u_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=BA(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Vc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>FA(this.serializer,r)))};this.q_(n)}}/**
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
 */class VR{}class xR extends VR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new re(z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Nc(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(z.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Nc(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(z.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class MR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Zn(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const os="RemoteStore";class LR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{gs(this)&&(ee(os,"Restarting streams for network reachability change."),await(async function(c){const u=pe(c);u.Ea.add(4),await mo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await cl(u)})(this))}))})),this.Ra=new MR(r,s)}}async function cl(t){if(gs(t))for(const e of t.da)await e(!0)}async function mo(t){for(const e of t.da)await e(!1)}function h_(t,e){const n=pe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),xu(n)?Vu(n):Ys(n).O_()&&Ou(n,e))}function Nu(t,e){const n=pe(t),r=Ys(n);n.Ia.delete(e),r.O_()&&f_(n,e),n.Ia.size===0&&(r.O_()?r.L_():gs(n)&&n.Ra.set("Unknown"))}function Ou(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ys(t).Y_(e)}function f_(t,e){t.Va.Ue(e),Ys(t).Z_(e)}function Vu(t){t.Va=new DA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ys(t).start(),t.Ra.ua()}function xu(t){return gs(t)&&!Ys(t).x_()&&t.Ia.size>0}function gs(t){return pe(t).Ea.size===0}function d_(t){t.Va=void 0}async function UR(t){t.Ra.set("Online")}async function FR(t){t.Ia.forEach(((e,n)=>{Ou(t,e)}))}async function BR(t,e){d_(t),xu(t)?(t.Ra.ha(e),Vu(t)):t.Ra.set("Unknown")}async function jR(t,e,n){if(t.Ra.set("Online"),e instanceof Jg&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){ee(os,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Aa(t,r)}else if(e instanceof Xo?t.Va.Ze(e):e instanceof Yg?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const r=await l_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),f_(i,c);const p=new wr(f.target,c,u,f.sequenceNumber);Ou(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){ee(os,"Failed to raise snapshot:",r),await Aa(t,r)}}async function Aa(t,e,n){if(!Qs(e))throw e;t.Ea.add(1),await mo(t),t.Ra.set("Offline"),n||(n=()=>l_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ee(os,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await cl(t)}))}function p_(t,e){return e().catch((n=>Aa(t,n,e)))}async function ul(t){const e=pe(t),n=Lr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:yu;for(;$R(e);)try{const s=await IR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,HR(e,s)}catch(s){await Aa(e,s)}m_(e)&&g_(e)}function $R(t){return gs(t)&&t.Ta.length<10}function HR(t,e){t.Ta.push(e);const n=Lr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function m_(t){return gs(t)&&!Lr(t).x_()&&t.Ta.length>0}function g_(t){Lr(t).start()}async function zR(t){Lr(t).ra()}async function qR(t){const e=Lr(t);for(const n of t.Ta)e.ea(n.mutations)}async function WR(t,e,n){const r=t.Ta.shift(),s=Au.from(r,e,n);await p_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ul(t)}async function GR(t,e){e&&Lr(t).X_&&await(async function(r,s){if((function(o){return CA(o)&&o!==z.ABORTED})(s.code)){const i=r.Ta.shift();Lr(r).B_(),await p_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ul(r)}})(t,e),m_(t)&&g_(t)}async function Ld(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),ee(os,"RemoteStore received new credentials");const r=gs(n);n.Ea.add(3),await mo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await cl(n)}async function KR(t,e){const n=pe(t);e?(n.Ea.delete(2),await cl(n)):e||(n.Ea.add(2),await mo(n),n.Ra.set("Unknown"))}function Ys(t){return t.ma||(t.ma=(function(n,r,s){const i=pe(n);return i.sa(),new NR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:UR.bind(null,t),t_:FR.bind(null,t),r_:BR.bind(null,t),H_:jR.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),xu(t)?Vu(t):t.Ra.set("Unknown")):(await t.ma.stop(),d_(t))}))),t.ma}function Lr(t){return t.fa||(t.fa=(function(n,r,s){const i=pe(n);return i.sa(),new OR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:zR.bind(null,t),r_:GR.bind(null,t),ta:qR.bind(null,t),na:WR.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await ul(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(os,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class Mu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Mu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lu(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),Qs(t))return new re(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ns{static emptySet(e){return new Ns(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=Ei(),this.sortedSet=new $e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ud{constructor(){this.ga=new $e(le.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class qs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new qs(e,n,Ns.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class QR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class YR{constructor(){this.queries=Fd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=Fd(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new re(z.ABORTED,"Firestore shutting down"))}}function Fd(){return new ps((t=>Mg(t)),rl)}async function JR(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new QR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Lu(o,`Initialization of query '${Rs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Uu(n)}async function XR(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZR(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Uu(n)}function eS(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Uu(t){t.Ca.forEach((e=>{e.next()}))}var Lc,Bd;(Bd=Lc||(Lc={})).Ma="default",Bd.Cache="cache";class tS{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Lc.Cache}}/**
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
 */class __{constructor(e){this.key=e}}class y_{constructor(e){this.key=e}}class nS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=Lg(e),this.tu=new Ns(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Ud,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),y=sl(this.query,p)?p:null,O=!!m&&this.mutatedKeys.has(m.key),D=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let S=!1;m&&y?m.data.isEqual(y.data)?O!==D&&(r.track({type:3,doc:y}),S=!0):this.su(m,y)||(r.track({type:2,doc:y}),S=!0,(c&&this.eu(y,c)>0||u&&this.eu(y,u)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),S=!0):m&&!y&&(r.track({type:1,doc:m}),S=!0,(c||u)&&(l=!0)),S&&(y?(o=o.add(y),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(y,O){const D=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:S})}};return D(y)-D(O)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new qs(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ud,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new y_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new __(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return qs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Fu="SyncEngine";class rS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sS{constructor(e){this.key=e,this.hu=!1}}class iS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ps((l=>Mg(l)),rl),this.Iu=new Map,this.Eu=new Set,this.du=new $e(le.comparator),this.Au=new Map,this.Ru=new Cu,this.Vu={},this.mu=new Map,this.fu=zs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function oS(t,e,n=!0){const r=b_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await v_(r,e,n,!0),s}async function aS(t,e){const n=b_(t);await v_(n,e,!0,!1)}async function v_(t,e,n,r){const s=await bR(t.localStore,Tn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await lS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&h_(t.remoteStore,s),l}async function lS(t,e,n,r,s){t.pu=(p,m,y)=>(async function(D,S,x,U){let N=S.view.ru(x);N.Cs&&(N=await Nd(D.localStore,S.query,!1).then((({documents:T})=>S.view.ru(T,N))));const R=U&&U.targetChanges.get(S.targetId),M=U&&U.targetMismatches.get(S.targetId)!=null,G=S.view.applyChanges(N,D.isPrimaryClient,R,M);return $d(D,S.targetId,G.au),G.snapshot})(t,p,m,y);const i=await Nd(t.localStore,e,!0),o=new nS(e,i.Qs),l=o.ru(i.documents),c=po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);$d(t,n,u.au);const f=new rS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function cS(t,e,n){const r=pe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!rl(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Nu(r.remoteStore,s.targetId),Uc(r,s.targetId)})).catch(Ks)):(Uc(r,s.targetId),await xc(r.localStore,s.targetId,!0))}async function uS(t,e){const n=pe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Nu(n.remoteStore,r.targetId))}async function hS(t,e,n){const r=yS(t);try{const s=await(function(o,l){const c=pe(o),u=Be.now(),f=l.reduce(((y,O)=>y.add(O.key)),Te());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let O=er(),D=Te();return c.Ns.getEntries(y,f).next((S=>{O=S,O.forEach(((x,U)=>{U.isValidDocument()||(D=D.add(x))}))})).next((()=>c.localDocuments.getOverlayedDocuments(y,O))).next((S=>{p=S;const x=[];for(const U of l){const N=IA(U,p.get(U.key).overlayedDocument);N!=null&&x.push(new ms(U.key,N,Pg(N.value.mapValue),Wn.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,x,l)})).next((S=>{m=S;const x=S.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(y,S.batchId,x)}))})).then((()=>({batchId:m.batchId,changes:Fg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new $e(we)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await go(r,s.changes),await ul(r.remoteStore)}catch(s){const i=Lu(s,"Failed to persist write");n.reject(i)}}async function E_(t,e){const n=pe(t);try{const r=await wR(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Pe(o.hu,14607):s.removedDocuments.size>0&&(Pe(o.hu,42227),o.hu=!1))})),await go(n,r,e)}catch(r){await Ks(r)}}function jd(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=pe(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&Uu(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fS(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new $e(le.comparator);o=o.insert(i,Et.newNoDocument(i,de.min()));const l=Te().add(i),c=new al(de.min(),new Map,new $e(we),o,l);await E_(r,c),r.du=r.du.remove(i),r.Au.delete(e),Bu(r)}else await xc(r.localStore,e,!1).then((()=>Uc(r,e,n))).catch(Ks)}async function dS(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await ER(n.localStore,e);T_(n,r,null),w_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await go(n,s)}catch(s){await Ks(s)}}async function pS(t,e,n){const r=pe(t);try{const s=await(function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Pe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);T_(r,e,n),w_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await go(r,s)}catch(s){await Ks(s)}}function w_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function T_(t,e,n){const r=pe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Uc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||I_(t,r)}))}function I_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Nu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Bu(t))}function $d(t,e,n){for(const r of n)r instanceof __?(t.Ru.addReference(r.key,e),mS(t,r)):r instanceof y_?(ee(Fu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||I_(t,r.key)):fe(19791,{wu:r})}function mS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(Fu,"New document in limbo: "+n),t.Eu.add(r),Bu(t))}function Bu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new le(je.fromString(e)),r=t.fu.next();t.Au.set(r,new sS(n)),t.du=t.du.insert(n,r),h_(t.remoteStore,new wr(Tn(Iu(n.path)),r,"TargetPurposeLimboResolution",Za.ce))}}async function go(t,e,n){const r=pe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=ku.As(c.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(c,u){const f=pe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>$.forEach(u,(m=>$.forEach(m.Es,(y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y))).next((()=>$.forEach(m.ds,(y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))))))}catch(p){if(!Qs(p))throw p;ee(Du,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=f.Ms.get(m),O=y.snapshotVersion,D=y.withLastLimboFreeSnapshotVersion(O);f.Ms=f.Ms.insert(m,D)}}})(r.localStore,i))}async function gS(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){ee(Fu,"User change. New user:",e.toKey());const r=await a_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new re(z.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await go(n,r.Ls)}}function _S(t,e){const n=pe(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function b_(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=E_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_S.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fS.bind(null,e),e.Pu.H_=ZR.bind(null,e.eventManager),e.Pu.yu=eS.bind(null,e.eventManager),e}function yS(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pS.bind(null,e),e}class Ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ll(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return vR(this.persistence,new gR,e.initialUser,this.serializer)}Cu(e){return new o_(Pu.mi,this.serializer)}Du(e){return new RR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ra.provider={build:()=>new Ra};class vS extends Ra{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Pe(this.persistence.referenceDelegate instanceof ba,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new tR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new o_((r=>ba.mi(r,n)),this.serializer)}}class Fc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gS.bind(null,this.syncEngine),await KR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new YR})()}createDatastore(e){const n=ll(e.databaseInfo.databaseId),r=(function(i){return new DR(i)})(e.databaseInfo);return(function(i,o,l,c){return new xR(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new LR(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>jd(this.syncEngine,n,0)),(function(){return xd.v()?new xd:new SR})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new iS(s,i,o,l,c,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=pe(n);ee(os,"RemoteStore shutting down."),r.Ea.add(5),await mo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Fc.provider={build:()=>new Fc};/**
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
 */class ES{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Ur="FirestoreClient";class wS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=gu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ee(Ur,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ee(Ur,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Zl(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Ur,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await a_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Hd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TS(t);ee(Ur,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Ld(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Ld(e.remoteStore,s))),t._onlineComponents=e}async function TS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Ur,"Using user provided OfflineComponentProvider");try{await Zl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Bs("Error using user provided cache. Falling back to memory cache: "+n),await Zl(t,new Ra)}}else ee(Ur,"Using default OfflineComponentProvider"),await Zl(t,new vS(void 0));return t._offlineComponents}async function A_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Ur,"Using user provided OnlineComponentProvider"),await Hd(t,t._uninitializedComponentsProvider._online)):(ee(Ur,"Using default OnlineComponentProvider"),await Hd(t,new Fc))),t._onlineComponents}function IS(t){return A_(t).then((e=>e.syncEngine))}async function bS(t){const e=await A_(t),n=e.eventManager;return n.onListen=oS.bind(null,e.syncEngine),n.onUnlisten=cS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=aS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uS.bind(null,e.syncEngine),n}function AS(t,e,n={}){const r=new Cr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new ES({next:m=>{f.Nu(),o.enqueueAndForget((()=>XR(i,p)));const y=m.docs.has(l);!y&&m.fromCache?u.reject(new re(z.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new re(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new tS(Iu(l.path),f,{includeMetadataChanges:!0,qa:!0});return JR(i,p)})(await bS(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function R_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const zd=new Map;/**
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
 */const S_="firestore.googleapis.com",qd=!0;class Wd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=S_,this.ssl=qd}else this.host=e.host,this.ssl=e.ssl??qd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=i_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZA)throw new re(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=R_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ju{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new bb;switch(r.type){case"firstParty":return new Cb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=zd.get(n);r&&(ee("ComponentProvider","Removing Datastore"),zd.delete(n),r.terminate())})(this),Promise.resolve()}}function RS(t,e,n,r={}){t=Gi(t,ju);const s=hs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(uu(`https://${l}`),hu("Firestore",!0)),i.host!==S_&&i.host!==l&&Bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!rs(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=yt.MOCK_USER;else{u=ig(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new re(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new yt(p)}t._authCredentials=new Ab(new yg(u,f))}}/**
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
 */class $u{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $u(this.firestore,e,this._query)}}class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new to(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ho(n,it._jsonSchema))return new it(e,r||null,new le(je.fromString(n.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:Ye("string",it._jsonSchemaVersion),referencePath:Ye("string")};class to extends $u{constructor(e,n,r){super(e,n,Iu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new le(e))}withConverter(e){return new to(this.firestore,e,this._path)}}function Bt(t,e,...n){if(t=zt(t),arguments.length===1&&(e=gu.newId()),Vb("doc","path",e),t instanceof ju){const r=je.fromString(e,...n);return od(r),new it(t,null,new le(r))}{if(!(t instanceof it||t instanceof to))throw new re(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return od(r),new it(t.firestore,t instanceof to?t.converter:null,new le(r))}}/**
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
 */const Gd="AsyncQueue";class Kd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new c_(this,"async_queue_retry"),this._c=()=>{const r=Xl();r&&ee(Gd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Xl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Cr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Qs(e))throw e;ee(Gd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Zn("INTERNAL UNHANDLED ERROR: ",Qd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Mu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&fe(47125,{Pc:Qd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Qd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Hu extends ju{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Kd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kd(e),this._firestoreClient=void 0,await e}}}function SS(t,e){const n=typeof t=="object"?t:pu(),r=typeof t=="string"?t:ya,s=Xa(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ng("firestore");i&&RS(s,...i)}return s}function C_(t){if(t._terminated)throw new re(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CS(t),t._firestoreClient}function CS(t){const e=t._freezeSettings(),n=(function(s,i,o,l){return new Wb(s,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,R_(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new wS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
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
 */class Wt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wt(ht.fromBase64String(e))}catch(n){throw new re(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wt(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ho(e,Wt._jsonSchema))return Wt.fromBase64String(e.bytes)}}Wt._jsonSchemaVersion="firestore/bytes/1.0",Wt._jsonSchema={type:Ye("string",Wt._jsonSchemaVersion),bytes:Ye("string")};/**
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
 */class zu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qu{constructor(e){this._methodName=e}}/**
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
 */class bn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bn._jsonSchemaVersion}}static fromJSON(e){if(ho(e,bn._jsonSchema))return new bn(e.latitude,e.longitude)}}bn._jsonSchemaVersion="firestore/geoPoint/1.0",bn._jsonSchema={type:Ye("string",bn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
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
 */class An{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:An._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ho(e,An._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new An(e.vectorValues);throw new re(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}An._jsonSchemaVersion="firestore/vectorValue/1.0",An._jsonSchema={type:Ye("string",An._jsonSchemaVersion),vectorValues:Ye("object")};/**
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
 */const PS=/^__.*__$/;class kS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new fo(e,this.data,n,this.fieldTransforms)}}function P_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:t})}}class Wu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Wu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Sa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(P_(this.Ac)&&PS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class DS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ll(e)}Cc(e,n,r,s=!1){return new Wu({Ac:e,methodName:n,Dc:r,path:ut.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function NS(t){const e=t._freezeSettings(),n=ll(t._databaseId);return new DS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OS(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);O_("Data must be an object, but it was:",o,r);const l=D_(r,o);let c,u;if(i.merge)c=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=VS(e,p,n);if(!o.contains(m))throw new re(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);MS(f,m)||f.push(m)}c=new rn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new kS(new qt(l),c,u)}class Gu extends qu{_toFieldTransform(e){return new vA(e.path,new Xi)}isEqual(e){return e instanceof Gu}}function k_(t,e){if(N_(t=zt(t)))return O_("Unsupported field value:",e,t),D_(t,e);if(t instanceof qu)return(function(r,s){if(!P_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=k_(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:Ia(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ia(s.serializer,i)}}if(r instanceof bn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wt)return{bytesValue:Xg(s.serializer,r._byteString)};if(r instanceof it){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Su(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof An)return(function(o,l){return{mapValue:{fields:{[Sg]:{stringValue:Cg},[va]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return bu(l.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${_u(r)}`)})(t,e)}function D_(t,e){const n={};return wg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,((r,s)=>{const i=k_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function N_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof bn||t instanceof Wt||t instanceof it||t instanceof qu||t instanceof An)}function O_(t,e,n){if(!N_(n)||!vg(n)){const r=_u(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function VS(t,e,n){if((e=zt(e))instanceof zu)return e._internalPath;if(typeof e=="string")return V_(t,e);throw Sa("Field path arguments must be of type string or ",t,!1,void 0,n)}const xS=new RegExp("[~\\*/\\[\\]]");function V_(t,e,n){if(e.search(xS)>=0)throw Sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zu(...e.split("."))._internalPath}catch{throw Sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new re(z.INVALID_ARGUMENT,l+t+c)}function MS(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class x_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(M_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LS extends x_{data(){return super.data()}}function M_(t,e){return typeof e=="string"?V_(t,e):e instanceof zu?e._internalPath:e._delegate._internalPath}class US{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ds(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[va].arrayValue?.values?.map((r=>Ge(r.doubleValue)));return new An(n)}convertGeoPoint(e){return new bn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qi(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Pe(s_(r),9688,{name:e});const s=new Yi(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||Zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function FS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zr extends x_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(M_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Zr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zr._jsonSchema={type:Ye("string",Zr._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Zo extends Zr{data(e={}){return super.data(e)}}class Li{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ti(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Zo(this._firestore,this._userDataWriter,r.key,r,new Ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Zo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ti(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Zo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ti(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:BS(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Li._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}/**
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
 */function Ui(t){t=Gi(t,it);const e=Gi(t.firestore,Hu);return AS(C_(e),t._key).then((n=>HS(e,t,n)))}Li._jsonSchemaVersion="firestore/querySnapshot/1.0",Li._jsonSchema={type:Ye("string",Li._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class jS extends US{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function Gn(t,e,n){t=Gi(t,it);const r=Gi(t.firestore,Hu),s=FS(t.converter,e,n);return $S(r,[OS(NS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wn.none())])}function $S(t,e){return(function(r,s){const i=new Cr;return r.asyncQueue.enqueueAndForget((async()=>hS(await IS(r),s,i))),i.promise})(C_(t),e)}function HS(t,e,n){const r=n.docs.get(e._key),s=new jS(t);return new Zr(t,s,e._key,r,new Ti(n.hasPendingWrites,n.fromCache),e.converter)}function Rn(){return new Gu("serverTimestamp")}(function(e,n=!0){(function(s){Gs=s})(fs),ss(new Nr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Hu(new Rb(r.getProvider("auth-internal")),new Pb(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),wn(nd,rd,e),wn(nd,rd,"esm2020")})();var zS="firebase",qS="12.4.0";/**
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
 */wn(zS,qS,"app");function L_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WS=L_,U_=new co("auth","Firebase",L_());/**
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
 */const Ca=new fu("@firebase/auth");function GS(t,...e){Ca.logLevel<=Ee.WARN&&Ca.warn(`Auth (${fs}): ${t}`,...e)}function ea(t,...e){Ca.logLevel<=Ee.ERROR&&Ca.error(`Auth (${fs}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Qu(t,...e)}function un(t,...e){return Qu(t,...e)}function Ku(t,e,n){const r={...WS(),[e]:n};return new co("auth","Firebase",r).create(e,{appName:t.name})}function Kn(t){return Ku(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function F_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),Ku(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return U_.create(t,...e)}function he(t,e,...n){if(!t)throw Qu(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function tr(t,e){t||Hn(e)}/**
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
 */function Bc(){return typeof self<"u"&&self.location?.href||""}function KS(){return Yd()==="http:"||Yd()==="https:"}function Yd(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function QS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KS()||rI()||"connection"in navigator)?navigator.onLine:!0}function YS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _o{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=eI()||sI()}get(){return QS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class B_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZS=new _o(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function sr(t,e,n,r,s={}){return j_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=uo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return nI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&hs(t.emulatorConfig.host)&&(u.credentials="include"),B_.fetch()(await $_(t,t.config.apiHost,n,l),u)})}async function j_(t,e,n){t._canInitEmulator=!1;const r={...JS,...e};try{const s=new tC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw jo(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ku(t,f,u);Jt(t,f)}}catch(s){if(s instanceof On)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function yo(t,e,n,r,s={}){const i=await sr(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function $_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Yu(t.config,s):`${t.config.apiScheme}://${s}`;return XS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function eC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),ZS.get())})}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}function Jd(t){return t!==void 0&&t.enterprise!==void 0}class nC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rC(t,e){return sr(t,"GET","/v2/recaptchaConfig",rr(t,e))}/**
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
 */async function sC(t,e){return sr(t,"POST","/v1/accounts:delete",e)}async function Pa(t,e){return sr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iC(t,e=!1){const n=zt(t),r=await n.getIdToken(e),s=Ju(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Fi(ec(s.auth_time)),issuedAtTime:Fi(ec(s.iat)),expirationTime:Fi(ec(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ec(t){return Number(t)*1e3}function Ju(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const s=eg(n);return s?JSON.parse(s):(ea("Failed to decode base64 JWT payload"),null)}catch(s){return ea("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Xd(t){const e=Ju(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function no(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&oC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fi(this.lastLoginAt),this.creationTime=Fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ka(t){const e=t.auth,n=await t.getIdToken(),r=await no(t,Pa(e,{idToken:n}));he(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?H_(s.providerUserInfo):[],o=cC(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function lC(t){const e=zt(t);await ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function H_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function uC(t,e){const n=await j_(t,{},async()=>{const r=uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await $_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&hs(t.emulatorConfig.host)&&(c.credentials="include"),B_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hC(t,e){return sr(t,"POST","/v2/accounts:revokeToken",rr(t,e))}/**
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
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Xd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Os;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
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
 */function dr(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new aC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await no(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iC(this,e)}reload(){return lC(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await no(this,sC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:O,stsTokenManager:D}=n;he(p&&D,e,"internal-error");const S=Os.fromJSON(this.name,D);he(typeof p=="string",e,"internal-error"),dr(r,e.name),dr(s,e.name),he(typeof m=="boolean",e,"internal-error"),he(typeof y=="boolean",e,"internal-error"),dr(i,e.name),dr(o,e.name),dr(l,e.name),dr(c,e.name),dr(u,e.name),dr(f,e.name);const x=new sn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:S,createdAt:u,lastLoginAt:f});return O&&Array.isArray(O)&&(x.providerData=O.map(U=>({...U}))),c&&(x._redirectEventId=c),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Os;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ka(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?H_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Os;l.updateFromIdToken(r);const c=new sn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const Zd=new Map;function zn(t){tr(t instanceof Function,"Expected a class definition");let e=Zd.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zd.set(t,e),e)}/**
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
 */class z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z_.type="NONE";const ep=z_;/**
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
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=ta("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Pa(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(zn(ep),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zn(ep);const o=ta(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Pa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await sn._fromGetAccountInfoResponse(e,m,f)}else p=sn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Vs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Vs(i,e,r))}}/**
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
 */function tp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Y_(e))return"Blackberry";if(J_(e))return"Webos";if(W_(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function q_(t=It()){return/firefox\//i.test(t)}function W_(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(t=It()){return/crios\//i.test(t)}function K_(t=It()){return/iemobile/i.test(t)}function Q_(t=It()){return/android/i.test(t)}function Y_(t=It()){return/blackberry/i.test(t)}function J_(t=It()){return/webos/i.test(t)}function Xu(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fC(t=It()){return Xu(t)&&!!window.navigator?.standalone}function dC(){return iI()&&document.documentMode===10}function X_(t=It()){return Xu(t)||Q_(t)||J_(t)||Y_(t)||/windows phone/i.test(t)||K_(t)}/**
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
 */function Z_(t,e=[]){let n;switch(t){case"Browser":n=tp(It());break;case"Worker":n=`${tp(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class pC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function mC(t,e={}){return sr(t,"GET","/v2/passwordPolicy",rr(t,e))}/**
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
 */const gC=6;class _C{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??gC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class yC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new np(this),this.idTokenSubscription=new np(this),this.beforeStateQueue=new pC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Pa(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ot(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ka(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Kn(this));const n=e?zt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mC(this),n=new _C(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hC(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&GS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ir(t){return zt(t)}class np{constructor(e){this.auth=e,this.observer=null,this.addObserver=dI(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vC(t){hl=t}function ey(t){return hl.loadJS(t)}function EC(){return hl.recaptchaEnterpriseScript}function wC(){return hl.gapiScript}function TC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class IC{constructor(){this.enterprise=new bC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class bC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const AC="recaptcha-enterprise",ty="NO_RECAPTCHA";class RC{constructor(e){this.type=AC,this.auth=ir(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{rC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new nC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Jd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ty)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Jd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=EC();c.length!==0&&(c+=l),ey(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function rp(t,e,n,r=!1,s=!1){const i=new RC(t);let o;if(s)o=ty;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Da(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await rp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await rp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function SC(t,e){const n=Xa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(rs(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function CC(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(zn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function PC(t,e,n){const r=ir(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ny(e),{host:o,port:l}=kC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(rs(u,r.config.emulator)&&rs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,hs(o)?(uu(`${i}//${o}${c}`),hu("Auth",!0)):DC()}function ny(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kC(t){const e=ny(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:sp(o)}}}function sp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Zu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function NC(t,e){return sr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OC(t,e){return yo(t,"POST","/v1/accounts:signInWithPassword",rr(t,e))}async function VC(t,e){return sr(t,"POST","/v1/accounts:sendOobCode",rr(t,e))}async function xC(t,e){return VC(t,e)}/**
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
 */async function MC(t,e){return yo(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}async function LC(t,e){return yo(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}/**
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
 */class ro extends Zu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ro(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ro(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Da(e,n,"signInWithPassword",OC);case"emailLink":return MC(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Da(e,r,"signUpPassword",NC);case"emailLink":return LC(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xs(t,e){return yo(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
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
 */const UC="http://localhost";class as extends Zu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new as(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:UC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=uo(n)}return e}}/**
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
 */function FC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BC(t){const e=_i(yi(t)).link,n=e?_i(yi(e)).deep_link_id:null,r=_i(yi(t)).deep_link_id;return(r?_i(yi(r)).link:null)||r||n||e||t}class eh{constructor(e){const n=_i(yi(e)),r=n.apiKey??null,s=n.oobCode??null,i=FC(n.mode??null);he(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=BC(e);try{return new eh(n)}catch{return null}}}/**
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
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=eh.parseLink(n);return he(r,"argument-error"),ro._fromEmailAndCode(e,r.code,r.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vo extends fl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yr extends vo{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
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
 */class $n extends vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class vr extends vo{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
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
 */class Er extends vo{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
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
 */async function jC(t,e){return yo(t,"POST","/v1/accounts:signUp",rr(t,e))}/**
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
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=ip(r);return new ls({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ip(r);return new ls({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ip(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Na extends On{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Na.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Na(e,n,r,s)}}function ry(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Na._fromErrorAndOperation(t,i,e,r):i})}async function $C(t,e,n=!1){const r=await no(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
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
 */async function HC(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(Kn(r));const s="reauthenticate";try{const i=await no(t,ry(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Ju(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),ls._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
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
 */async function sy(t,e,n=!1){if(Ot(t.app))return Promise.reject(Kn(t));const r="signIn",s=await ry(t,r,e),i=await ls._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function zC(t,e){return sy(ir(t),e)}/**
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
 */async function iy(t){const e=ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qC(t,e,n){const r=ir(t);await Da(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",xC)}async function WC(t,e,n){if(Ot(t.app))return Promise.reject(Kn(t));const r=ir(t),o=await Da(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&iy(t),c}),l=await ls._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function GC(t,e,n){return Ot(t.app)?Promise.reject(Kn(t)):zC(zt(t),Js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iy(t),r})}function KC(t,e,n,r){return zt(t).onIdTokenChanged(e,n,r)}function QC(t,e,n){return zt(t).beforeAuthStateChanged(e,n)}const Oa="__sak";/**
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
 */class oy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YC=1e3,JC=10;class ay extends oy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ay.type="LOCAL";const XC=ay;/**
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
 */class ly extends oy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ly.type="SESSION";const cy=ly;/**
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
 */function ZC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new dl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await ZC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dl.receivers=[];/**
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
 */class eP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=th("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Sn(){return window}function tP(t){Sn().location.href=t}/**
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
 */function uy(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function nP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rP(){return navigator?.serviceWorker?.controller||null}function sP(){return uy()?self:null}/**
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
 */const hy="firebaseLocalStorageDb",iP=1,Va="firebaseLocalStorage",fy="fbase_key";class Eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pl(t,e){return t.transaction([Va],e?"readwrite":"readonly").objectStore(Va)}function oP(){const t=indexedDB.deleteDatabase(hy);return new Eo(t).toPromise()}function $c(){const t=indexedDB.open(hy,iP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Va,{keyPath:fy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Va)?e(r):(r.close(),await oP(),e(await $c()))})})}async function op(t,e,n){const r=pl(t,!0).put({[fy]:e,value:n});return new Eo(r).toPromise()}async function aP(t,e){const n=pl(t,!1).get(e),r=await new Eo(n).toPromise();return r===void 0?null:r.value}function ap(t,e){const n=pl(t,!0).delete(e);return new Eo(n).toPromise()}const lP=800,cP=3;class dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dl._getInstance(sP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await nP(),!this.activeServiceWorker)return;this.sender=new eP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await op(e,Oa,"1"),await ap(e,Oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>op(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=pl(s,!1).getAll();return new Eo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dy.type="LOCAL";const uP=dy;new _o(3e4,6e4);/**
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
 */function nh(t,e){return e?zn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class rh extends Zu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hP(t){return sy(t.auth,new rh(t),t.bypassAuthState)}function fP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),HC(n,new rh(t),t.bypassAuthState)}async function dP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),$C(n,new rh(t),t.bypassAuthState)}/**
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
 */class py{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hP;case"linkViaPopup":case"linkViaRedirect":return dP;case"reauthViaPopup":case"reauthViaRedirect":return fP;default:Jt(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pP=new _o(2e3,1e4);async function mP(t,e,n){if(Ot(t.app))return Promise.reject(un(t,"operation-not-supported-in-this-environment"));const r=ir(t);F_(t,e,fl);const s=nh(r,n);return new Tr(r,"signInViaPopup",e,s).executeNotNull()}async function gP(t,e,n){const r=zt(t);F_(r.auth,e,fl);const s=nh(r.auth,n);return new Tr(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Tr extends py{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pP.get())};e()}}Tr.currentPopupAction=null;/**
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
 */const _P="pendingRedirect",na=new Map;class yP extends py{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await vP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vP(t,e){const n=TP(e),r=wP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function EP(t,e){na.set(t._key(),e)}function wP(t){return zn(t._redirectPersistence)}function TP(t){return ta(_P,t.config.apiKey,t.name)}async function IP(t,e,n=!1){if(Ot(t.app))return Promise.reject(Kn(t));const r=ir(t),s=nh(r,e),o=await new yP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const bP=600*1e3;class AP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!my(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(un(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bP&&this.cachedEventUids.clear(),this.cachedEventUids.has(lp(e))}saveEventToCache(e){this.cachedEventUids.add(lp(e)),this.lastProcessedEventTime=Date.now()}}function lp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function my({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function RP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return my(t);default:return!1}}/**
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
 */async function SP(t,e={}){return sr(t,"GET","/v1/projects",e)}/**
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
 */const CP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PP=/^https?/;async function kP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SP(t);for(const n of e)try{if(DP(n))return}catch{}Jt(t,"unauthorized-domain")}function DP(t){const e=Bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PP.test(n))return!1;if(CP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const NP=new _o(3e4,6e4);function cp(){const t=Sn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OP(t){return new Promise((e,n)=>{function r(){cp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cp(),n(un(t,"network-request-failed"))},timeout:NP.get()})}if(Sn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Sn().gapi?.load)r();else{const s=TC("iframefcb");return Sn()[s]=()=>{gapi.load?r():n(un(t,"network-request-failed"))},ey(`${wC()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ra=null,e})}let ra=null;function VP(t){return ra=ra||OP(t),ra}/**
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
 */const xP=new _o(5e3,15e3),MP="__/auth/iframe",LP="emulator/auth/iframe",UP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BP(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yu(e,LP):`https://${t.config.authDomain}/${MP}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=FP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${uo(r).slice(1)}`}async function jP(t){const e=await VP(t),n=Sn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:BP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=Sn().setTimeout(()=>{i(o)},xP.get());function c(){Sn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const $P={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HP=500,zP=600,qP="_blank",WP="http://localhost";class up{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GP(t,e,n,r=HP,s=zP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...$P,width:r.toString(),height:s.toString(),top:i,left:o},u=It().toLowerCase();n&&(l=G_(u)?qP:n),q_(u)&&(e=e||WP,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[y,O])=>`${m}${y}=${O},`,"");if(fC(u)&&l!=="_self")return KP(e||"",l),new up(null);const p=window.open(e||"",l,f);he(p,t,"popup-blocked");try{p.focus()}catch{}return new up(p)}function KP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QP="__/auth/handler",YP="emulator/auth/handler",JP=encodeURIComponent("fac");async function hp(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof fl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof vo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${JP}=${encodeURIComponent(c)}`:"";return`${XP(t)}?${uo(l).slice(1)}${u}`}function XP({config:t}){return t.emulator?Yu(t,YP):`https://${t.authDomain}/${QP}`}/**
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
 */const tc="webStorageSupport";class ZP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cy,this._completeRedirectFn=IP,this._overrideRedirectResult=EP}async _openPopup(e,n,r,s){tr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await hp(e,n,r,Bc(),s);return GP(e,i,th())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await hp(e,n,r,Bc(),s);return tP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jP(e),r=new AP(e);return n.register("authEvent",s=>(he(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tc,{type:tc},s=>{const i=s?.[0]?.[tc];i!==void 0&&n(!!i),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X_()||W_()||Xu()}}const e0=ZP;var fp="@firebase/auth",dp="1.11.0";/**
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
 */class t0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function n0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r0(t){ss(new Nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z_(t)},u=new yC(r,s,i,c);return CC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new Nr("auth-internal",e=>{const n=ir(e.getProvider("auth").getImmediate());return(r=>new t0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(fp,dp,n0(t)),wn(fp,dp,"esm2020")}/**
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
 */const s0=300,i0=sg("authIdTokenMaxAge")||s0;let pp=null;const o0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>i0)return;const s=n?.token;pp!==s&&(pp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ml(t=pu()){const e=Xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SC(t,{popupRedirectResolver:e0,persistence:[uP,XC,cy]}),r=sg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=o0(i.toString());QC(n,o,()=>o(n.currentUser)),KC(n,l=>o(l))}}const s=tg("auth");return s&&PC(n,`http://${s}`),n}function a0(){return document.getElementsByTagName("head")?.[0]??document}vC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",a0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});r0("Browser");/**
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
 */const gy="firebasestorage.googleapis.com",l0="storageBucket",c0=120*1e3,u0=600*1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Nn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Nn||(Nn={}));function nc(t){return"storage/"+t}function h0(){const t="An unknown error occurred, please check the error payload for server response.";return new Vn(Nn.UNKNOWN,t)}function f0(){return new Vn(Nn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function d0(){return new Vn(Nn.CANCELED,"User canceled the upload/download.")}function p0(t){return new Vn(Nn.INVALID_URL,"Invalid URL '"+t+"'.")}function m0(t){return new Vn(Nn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function mp(t){return new Vn(Nn.INVALID_ARGUMENT,t)}function _y(){return new Vn(Nn.APP_DELETED,"The Firebase app was deleted.")}function g0(t){return new Vn(Nn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class on{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=on.makeFromUrl(e,n)}catch{return new on(e,"")}if(r.path==="")return r;throw m0(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),O={bucket:1,path:3},D=n===gy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",x=new RegExp(`^https?://${D}/${s}/${S}`,"i"),N=[{regex:l,indices:c,postModify:i},{regex:y,indices:O,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<N.length;R++){const M=N[R],G=M.regex.exec(e);if(G){const T=G[M.indices.bucket];let _=G[M.indices.path];_||(_=""),r=new on(T,_),M.postModify(r);break}}if(r==null)throw p0(e);return r}}class _0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function y0(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...S){u||(u=!0,e.apply(null,S))}function p(S){s=setTimeout(()=>{s=null,t(y,c())},S)}function m(){i&&clearTimeout(i)}function y(S,...x){if(u){m();return}if(S){m(),f.call(null,S,...x);return}if(c()||o){m(),f.call(null,S,...x);return}r<64&&(r*=2);let N;l===1?(l=2,N=0):N=(r+Math.random())*1e3,p(N)}let O=!1;function D(S){O||(O=!0,m(),!u&&(s!==null?(S||(l=2),clearTimeout(s),p(0)):S||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},n),D}function v0(t){t(!1)}/**
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
 */function E0(t){return t!==void 0}function gp(t,e,n,r){if(r<e)throw mp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw mp(`Invalid value for '${t}'. Expected ${n} or less.`)}function w0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var xa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xa||(xa={}));/**
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
 */function T0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class I0{constructor(e,n,r,s,i,o,l,c,u,f,p,m=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,D)=>{this.resolve_=O,this.reject_=D,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new $o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===xa.NO_ERROR,c=i.getStatus();if(!l||T0(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===xa.ABORT;r(!1,new $o(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new $o(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());E0(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=h0();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?_y():d0();o(c)}else{const c=f0();o(c)}};this.canceled_?n(!1,new $o(!1,null,!0)):this.backoffId_=y0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&v0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $o{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function b0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function A0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function R0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function S0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function C0(t,e,n,r,s,i,o=!0,l=!1){const c=w0(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return R0(f,e),b0(f,n),A0(f,i),S0(f,r),new I0(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function P0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function k0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ma{constructor(e,n){this._service=e,n instanceof on?this._location=n:this._location=on.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ma(e,n)}get root(){const e=new on(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return k0(this._location.path)}get storage(){return this._service}get parent(){const e=P0(this._location.path);if(e===null)return null;const n=new on(this._location.bucket,e);return new Ma(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw g0(e)}}function _p(t,e){const n=e?.[l0];return n==null?null:on.makeFromBucketSpec(n,t)}function D0(t,e,n,r={}){t.host=`${e}:${n}`;const s=hs(e);s&&(uu(`https://${t.host}/b`),hu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ig(i,t.app.options.projectId))}class N0{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=gy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c0,this._maxUploadRetryTime=u0,this._requests=new Set,s!=null?this._bucket=on.makeFromBucketSpec(s,this._host):this._bucket=_p(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=on.makeFromBucketSpec(this._url,e):this._bucket=_p(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ma(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new _0(_y());{const o=C0(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const yp="@firebase/storage",vp="0.14.0";/**
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
 */const yy="storage";function O0(t=pu(),e){t=zt(t);const r=Xa(t,yy).getImmediate({identifier:e}),s=ng("storage");return s&&V0(r,...s),r}function V0(t,e,n,r={}){D0(t,e,n,r)}function x0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new N0(n,r,s,e,fs)}function M0(){ss(new Nr(yy,x0,"PUBLIC").setMultipleInstances(!0)),wn(yp,vp,""),wn(yp,vp,"esm2020")}M0();const L0={apiKey:"AIzaSyA88mxzUStbuMFKNr9Q0OODtHXmpyuqvBY",authDomain:"findyourfit-93e9f.firebaseapp.com",projectId:"findyourfit-93e9f",storageBucket:"findyourfit-93e9f.firebasestorage.app",messagingSenderId:"715690823951",appId:"1:715690823951:web:f3af86677f7d990c55ae7a",measurementId:"G-2GTC9GRYRL"},sh=lg(L0),jt=SS(sh),qn=ml(sh);O0(sh);const Xt=Vw("user",{state:()=>({userData:null,moodData:null,journalData:null}),actions:{async fetchUserData(){const t=qn.currentUser;if(!t)return;const e=Bt(jt,"users",t.uid),n=await Ui(e);n.exists()&&(this.userData=n.data(),this.userData.streak||(this.userData.streak={count:1,lastUpdate:Rn()},await Gn(e,this.userData,{merge:!0})),await this.updateStreak(),await this.getMood(),await this.getJournalEntries())},setUserData(t){this.userData=t},setMoodData(t){this.moodData=t},async updateStreak(){const t=qn.currentUser;if(!t||!this.userData?.streak)return;const{count:e,lastUpdate:n}=this.userData.streak;if(!n||typeof n.toDate!="function"){this.userData.streak={count:1,lastUpdate:Rn()},await Gn(Bt(jt,"users",t.uid),this.userData,{merge:!0});return}const r=n.toDate(),s=new Date;this.isSameDay(r,s)||(this.isYesterday(r,s)?this.userData.streak.count=e+1:this.userData.streak.count=1,this.userData.streak.lastUpdate=Rn(),await Gn(Bt(jt,"users",t.uid),this.userData,{merge:!0}))},isSameDay(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()},isYesterday(t){const e=t,n=new Date,r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate())-r)/(1e3*60*60*24)===1},async getMood(){const t=qn.currentUser;if(!t)return;const e=Bt(jt,"mood",t.uid),n=await Ui(e);n.exists()&&(this.moodData=n.data())},async getJournalEntries(){const t=qn.currentUser;if(!t)return;const e=Bt(jt,"journals",t.uid),n=await Ui(e);if(n.exists()){const r=n.data(),s=Object.entries(r).sort((i,o)=>Number(o[0])-Number(i[0])).map(([i,o])=>({id:i,...o}));this.journalData=s}}}}),Zt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},U0={class:"modal_holder"},F0={class:"modal_heading_holder inter font_size_xs"},B0=["innerHTML"],j0={__name:"errorModal",props:{errorMessage:{type:String,required:!0}},setup(t){return(e,n)=>(te(),oe("div",{class:"modal_overlay",onClick:n[1]||(n[1]=lu(r=>e.$emit("close"),["self"])),role:"dialog","aria-modal":"true"},[V("div",U0,[V("div",F0,[n[2]||(n[2]=V("span",null," Attention!",-1)),V("button",{class:"modal_close_button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×")]),V("div",{class:"modal_content_holder inter font_size_xs",innerHTML:t.errorMessage},null,8,B0)])]))}},wo=Zt(j0,[["__scopeId","data-v-306a9af2"]]),$0={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},H0={class:"modal_holder"},z0={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},q0={class:"modal_content_holder inter font_size_xs"},W0=["value"],G0=["value"],K0={__name:"userInfoModal",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Xt(),r=t,s=ne([]),i=ne("");us(async()=>{const N=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();s.value=N.sort((R,M)=>R.name.common.localeCompare(M.name.common))});const o=Ya(),l=ne(""),c=ne(""),u=ne(""),f=ne(""),p=ne(!1),m=ne([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),y=ne("");function O(U){return/^\d{10}$/.test(U)}function D(U){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(U))return!1;const[R,M,G]=U.split("/").map(Number),T=new Date(R,M-1,G);return T.getFullYear()===R&&T.getMonth()===M-1&&T.getDate()===G}const S=async()=>{if(ml().currentUser,f.value="",p.value=!1,!O(c.value)){f.value="Contact Number must be a valid 10-digit number.",p.value=!0;return}if(!D(u.value)){f.value="Date of Birth must be in the format yyyy/mm/dd.",p.value=!0;return}const N={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:r.globalUser.email,country:i.value,gender:y.value},streak:{count:parseInt(1),lastUpdate:Rn()},loginDate:new Date().toISOString(),uid:r.globalUser.uid};await Gn(Bt(jt,"users",r.globalUser.uid),N),n.setUserData(N),o.push({name:"Navigation"})},x=()=>{p.value=!1,f.value=""};return(U,N)=>(te(),oe("div",$0,[V("div",H0,[V("div",z0,[N[6]||(N[6]=V("span",{style:{width:"80%"}},"User Information",-1)),V("button",{class:"modal_close_button",onClick:N[0]||(N[0]=R=>U.$emit("close"))},"×")]),V("div",q0,[N[10]||(N[10]=V("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),V("form",{class:"modal_form_holder",onSubmit:lu(S,["prevent"])},[We(V("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":N[1]||(N[1]=R=>l.value=R),required:""},null,512),[[Pt,l.value]]),We(V("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":N[2]||(N[2]=R=>c.value=R),required:""},null,512),[[Pt,c.value]]),We(V("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":N[3]||(N[3]=R=>u.value=R),required:""},null,512),[[Pt,u.value]]),We(V("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":N[4]||(N[4]=R=>y.value=R)},[N[7]||(N[7]=V("option",{disabled:"",value:""},"Please select one",-1)),(te(!0),oe(De,null,Vt(m.value,R=>(te(),oe("option",{key:R.value,value:R.value},Ve(R.text),9,W0))),128))],512),[[ns,y.value]]),We(V("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":N[5]||(N[5]=R=>i.value=R),id:"country"},[N[8]||(N[8]=V("option",{disabled:"",value:""},"Select your country",-1)),(te(!0),oe(De,null,Vt(s.value,R=>(te(),oe("option",{key:R.cca3,value:R.cca3},Ve(R.name.common),9,G0))),128))],512),[[ns,i.value]]),N[9]||(N[9]=V("button",{type:"submit",class:"modal_button inter font_size_xs"}," Confirm ",-1))],32)])]),p.value?(te(),Nt(wo,{key:0,errorMessage:f.value,onClose:x},null,8,["errorMessage"])):Yt("",!0)]))}},Q0=Zt(K0,[["__scopeId","data-v-d9949924"]]),Y0={class:"login_page"},J0={class:"login_page_content"},X0={class:"login_page_form"},Z0={class:"login_page_form_fields"},ek=["type"],tk={class:"show_password_toggle inter font_size_xs"},nk={class:"login_page_social_login"},rk={class:"login_page_toggle_register inter font_size_xs"},sk={__name:"loginRegister",setup(t){const e=Xt(),n=Ya(),r=ne("password"),s=ne(null),i=ne(""),o=ne(""),l=ne("login"),c=ne(!1),u=ne(""),f=ne(!1),p=new $n;p.addScope("https://www.googleapis.com/auth/contacts.readonly");const m=R=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(R),y=()=>{r.value=r.value==="password"?"text":"password"},O=()=>{l.value=l.value==="login"?"register":"login"},D=()=>{if(i.value===""){u.value="Please enter your email to reset your password!",c.value=!0;return}qC(qn,i.value).then(()=>{u.value="An email has been sent to reset your password!",c.value=!0})},S=async()=>{try{const G=(await mP(qn,p)).user;if(G){if(!G)return;const T=Bt(jt,"users",G.uid),_=await Ui(T);if(_.exists()){var R=_.data();R&&await x(R)}}n.push({name:"Navigation"})}catch(M){console.log(M.message),u.value="Google login failed!",c.value=!0}},x=async R=>{if(R.streak){const M=R.streak;U(M.lastUpdate)?R.streak.count=R.streak.count+1:R.streak.count=1,R.streak.lastUpdate=Rn(),R.loginDate=Rn(),await Gn(Bt(jt,"users",R.uid),R)}},U=R=>{const M=R.toDate(),G=new Date,T=new Date(G.getFullYear(),G.getMonth(),G.getDate()),_=new Date(T);return _.setDate(T.getDate()-1),M>=_&&M<T},N=async()=>{try{if(u.value="",c.value=!1,!m(i.value)){u.value="Invalid email format!",c.value=!0;return}if(l.value==="register"){const G=(await WC(qn,i.value,o.value)).user;try{await gP(G,p)}catch(T){console.warn("Google link failed (optional):",T)}s.value={uid:G.uid,email:G.email},f.value=!0}else{const G=(await GC(qn,i.value,o.value)).user,T=Bt(jt,"users",G.uid),_=await Ui(T);if(_.exists()){var R=_.data();R&&(await x(R),e.setUserData(R),n.push({name:"Navigation"}))}}}catch(M){M.code==="auth/invalid-credential"?u.value="Invalid login details.":M.code==="auth/email-already-in-use"?u.value="Email already in use.":u.value="An unexpected error occurred.",c.value=!0}};return(R,M)=>(te(),oe(De,null,[V("div",Y0,[V("div",J0,[M[5]||(M[5]=V("div",{class:"login_background_holder"},null,-1)),M[6]||(M[6]=V("div",{class:"login_page_intro inter font_size_xs"},[V("div",{class:"login_page_intro_text"},[V("div",{class:"font_size_m licorice_regular"},"Welcome to Finding Your Fit"),V("br"),V("br"),cn(" A space designed to help you understand yourself better, build emotional balance, and grow into the life that fits you best. Take a moment to reconnect, reflect, and start working toward your goals — one step at a time. ")])],-1)),V("div",X0,[V("form",Z0,[We(V("input",{class:"login_page_input inter font_size_xs",type:"text",placeholder:"Email","onUpdate:modelValue":M[0]||(M[0]=G=>i.value=G)},null,512),[[Pt,i.value]]),We(V("input",{class:"login_page_password inter font_size_xs",type:r.value,placeholder:"Password","onUpdate:modelValue":M[1]||(M[1]=G=>o.value=G)},null,8,ek),[[Vm,o.value]]),V("div",tk,[V("label",null,[V("input",{type:"checkbox",onChange:y},null,32),M[4]||(M[4]=cn(" Show Password ",-1))])])]),V("button",{class:"login_page_button inter font_size_xs",onClick:N},Ve(l.value==="login"?"Login":"Register"),1),V("div",{class:"login_page_forgot_password inter font_size_xs",onClick:D},Ve(l.value==="login"?"Forgot Password?":""),1)]),V("div",nk,[V("div",{class:"login_page_social_button",onClick:M[2]||(M[2]=G=>S())})]),V("div",rk,[V("u",{onClick:O},Ve(l.value==="login"?"Register":"Login"),1)])])]),c.value?(te(),Nt(wo,{key:0,errorMessage:u.value,onClose:M[3]||(M[3]=G=>c.value=!1)},null,8,["errorMessage"])):Yt("",!0),f.value&&s.value?(te(),Nt(Q0,{key:1,globalUser:s.value},null,8,["globalUser"])):Yt("",!0)],64))}},ik=Zt(sk,[["__scopeId","data-v-f4d6eaa2"]]),Ep=[{content:"Success is not final, failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},{content:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{content:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"You are never too old to set another goal or to dream a new dream.",author:"C.S. Lewis"},{content:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"Don’t watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"The only limit to our realization of tomorrow is our doubts of today.",author:"Franklin D. Roosevelt"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Don’t wait. The time will never be just right.",author:"Napoleon Hill"},{content:"Believe in yourself and all that you are.",author:"Christian D. Larson"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Success is what comes after you stop making excuses.",author:"Luis Galarza"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Do what you love, love what you do.",author:"Unknown"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Motivation is what gets you started. Habit is what keeps you going.",author:"Jim Ryun"},{content:"Don’t let fear decide your future.",author:"Shalane Flanagan"},{content:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"Do one thing every day that scares you.",author:"Eleanor Roosevelt"},{content:"The best way to predict the future is to invent it.",author:"Alan Kay"},{content:"Difficult roads often lead to beautiful destinations.",author:"Unknown"},{content:"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",author:"Chantal Sutherland"},{content:"If it doesn’t challenge you, it won’t change you.",author:"Fred DeVito"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"The expert in anything was once a beginner.",author:"Helen Hayes"},{content:"Don’t count the days, make the days count.",author:"Muhammad Ali"},{content:"The harder the battle, the sweeter the victory.",author:"Les Brown"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"You don’t have to see the whole staircase, just take the first step.",author:"Martin Luther King Jr."},{content:"Small daily improvements over time lead to stunning results.",author:"Robin Sharma"},{content:"Don’t let what you cannot do interfere with what you can do.",author:"John Wooden"},{content:"The only limit is the one you set yourself.",author:"Felix Baumgartner"},{content:"Great things are done by a series of small things brought together.",author:"Vincent Van Gogh"},{content:"Your dream doesn’t have an expiration date. Take a deep breath and try again.",author:"KT Witten"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"You are braver than you believe, stronger than you seem, and smarter than you think.",author:"A.A. Milne"},{content:"Work until you no longer have to introduce yourself.",author:"Unknown"},{content:"The best revenge is massive success.",author:"Frank Sinatra"},{content:"Your only limit is your mind.",author:"Unknown"},{content:"Stop being afraid of what could go wrong and start being excited about what could go right.",author:"Unknown"},{content:"Do not wait to strike till the iron is hot; but make it hot by striking.",author:"William Butler Yeats"},{content:"Don’t let perfectionism get in the way of progress.",author:"Unknown"},{content:"Great minds discuss ideas; average minds discuss events; small minds discuss people.",author:"Eleanor Roosevelt"},{content:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Do what you can, with what you have, where you are.",author:"Theodore Roosevelt"},{content:"Success is not about the destination, it’s about the journey.",author:"Zig Ziglar"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"A year from now you may wish you had started today.",author:"Karen Lamb"},{content:"Don’t stop until you’re proud.",author:"Unknown"},{content:"Dream big. Start small. Act now.",author:"Robin Sharma"},{content:"Hard work beats talent when talent doesn’t work hard.",author:"Tim Notke"},{content:"Stay positive, work hard, make it happen.",author:"Unknown"},{content:"Your time is limited, don’t waste it living someone else’s life.",author:"Steve Jobs"},{content:"The difference between ordinary and extraordinary is that little extra.",author:"Jimmy Johnson"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Success doesn’t come to you, you go to it.",author:"Marva Collins"},{content:"A river cuts through rock not because of its power, but because of its persistence.",author:"Jim Watkins"},{content:"Discipline is the bridge between goals and accomplishment.",author:"Jim Rohn"},{content:"Do what is right, not what is easy nor what is popular.",author:"Unknown"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Don’t limit yourself. Many people limit themselves to what they think they can do.",author:"Mary Kay Ash"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Success is the progressive realization of a worthy goal or ideal.",author:"Earl Nightingale"},{content:"To succeed in life, you need two things: ignorance and confidence.",author:"Mark Twain"},{content:"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",author:"Mary Anne Radmacher"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"Don’t let small minds convince you that your dreams are too big.",author:"Unknown"},{content:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",author:"Pelé"},{content:"The best way out is always through.",author:"Robert Frost"},{content:"Failure is simply the opportunity to begin again, this time more intelligently.",author:"Henry Ford"},{content:"Don’t wish it were easier. Wish you were better.",author:"Jim Rohn"},{content:"The mind is everything. What you think you become.",author:"Buddha"},{content:"When you feel like quitting, remember why you started.",author:"Unknown"},{content:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},{content:"Don’t be afraid to give up the good to go for the great.",author:"John D. Rockefeller"},{content:"Do not be embarrassed by your failures, learn from them and start again.",author:"Richard Branson"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Small deeds done are better than great deeds planned.",author:"Peter Marshall"},{content:"Act as if what you do makes a difference. It does.",author:"William James"},{content:"Success is not how high you have climbed, but how you make a positive difference to the world.",author:"Roy T. Bennett"},{content:"Your future is created by what you do today, not tomorrow.",author:"Robert Kiyosaki"},{content:"The secret of success is to do the common thing uncommonly well.",author:"John D. Rockefeller Jr."},{content:"What seems to us as bitter trials are often blessings in disguise.",author:"Oscar Wilde"},{content:"The only place where success comes before work is in the dictionary.",author:"Vidal Sassoon"},{content:"Happiness is not something ready-made. It comes from your own actions.",author:"Dalai Lama"},{content:"Opportunities multiply as they are seized.",author:"Sun Tzu"},{content:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",author:"William James"},{content:"Don’t be afraid to start over. It’s a chance to build something better.",author:"Unknown"},{content:"Success isn’t always about greatness. It’s about consistency.",author:"Dwayne Johnson"},{content:"You are confined only by the walls you build yourself.",author:"Andrew Murphy"},{content:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t let the fear of losing be greater than the excitement of winning.",author:"Robert Kiyosaki"},{content:"You can’t cross the sea merely by standing and staring at the water.",author:"Rabindranath Tagore"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"The journey of a thousand miles begins with one step.",author:"Lao Tzu"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Jerry Dunn"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"It’s not whether you get knocked down, it’s whether you get up.",author:"Vince Lombardi"},{content:"Everything you can imagine is real.",author:"Pablo Picasso"},{content:"Success is not in never falling, but in rising every time we fall.",author:"Confucius"},{content:"Don’t wait for opportunity. Create it.",author:"George Bernard Shaw"},{content:"The best dreams happen when you’re awake.",author:"Cherie Gilderbloom"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"What you do today can improve all your tomorrows.",author:"Ralph Marston"}];function ok(){const t=Math.floor(Math.random()*Ep.length);return Ep[t]}const ak="/assets/my_therapist-BGpDoE1u.png",lk="/assets/my_journal-ByAOnFF2.png",ck="/assets/journal-BcWmOkN8.png",uk="/assets/my_courses-DAreBNF0.png",hk="/assets/mood_track-DScXBvTj.png",fk={class:"home_container"},dk={class:"greeting_section licorice_regular font_size_m"},pk={class:"checkin_section"},mk={class:"feeling_section"},gk={class:"inspiration_section"},_k={class:"quote_text inter font_size_xxs"},yk={class:"offer_section"},vk={class:"offer_list"},Ek={class:"offer_icon_wrapper"},wk={class:"offer_content_wrapper"},Tk={class:"offer_title inter font_size_xxs"},Ik={class:"offer_description inter font_size_xxs"},bk={__name:"home",setup(t){const e=Xt(),n=ne({content:"",author:""});ne(!1);const r=Ue(()=>e.userData?.personalInfo.name||"");Ue(()=>[{label:"My Therapist",url:ak},{label:"Journal Entry",url:lk},{label:"Explore Courses",url:uk}]);const s=Ue(()=>[{label:"Personalized mood tracking",content:"Log your daily mood to visualize trends, identify triggers, and gain insights.",icon:hk},{label:"Journaling",content:"A private space for self-reflection, prompts, and gain thoughts.",icon:ck}]);us(()=>{console.log("Home mounted"),n.value=ok()});const i=()=>{const o=new Date().getHours();return o<12?"morning":o<18?"afternoon":"evening"};return(o,l)=>(te(),oe("div",fk,[V("div",dk," Good "+Ve(i())+", "+Ve(r.value)+"! ",1),V("div",pk,[V("div",mk,[l[1]||(l[1]=V("div",{class:"feeling_heading inter font_size_xs"},[V("b",null,"How are you feeling today?")],-1)),l[2]||(l[2]=V("div",{class:"feeling_image"},null,-1)),V("div",{class:"checkin_button inter font_size_xxs",onClick:l[0]||(l[0]=c=>o.$emit("setPage","mood"))}," Check in now ")])]),V("div",gk,[l[3]||(l[3]=V("div",{class:"inspiration_heading inter font_size_xxs"},[V("b",null,"Inspiration")],-1)),V("div",_k,Ve(n.value.content),1)]),V("div",yk,[l[4]||(l[4]=V("div",{class:"offer_heading inter font_size_xs"},[V("b",null,"What we offer")],-1)),V("div",vk,[(te(!0),oe(De,null,Vt(s.value,c=>(te(),oe("div",{class:"offer_card",key:c.label},[V("div",Ek,[V("div",{class:"feature_icon",style:es({backgroundImage:`url(${c.icon})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4)]),V("div",wk,[V("div",Tk,[V("b",null,Ve(c.label),1)]),V("div",Ik,Ve(c.content),1)])]))),128))])])]))}},vy=Zt(bk,[["__scopeId","data-v-a2f018c3"]]),Ak={class:"loading_page_holder"},Rk={__name:"loadingPage",setup(t){const e=Xt(),n=Ya();return us(async()=>{e.userData?e.userData.uid?n.push({name:"Navigation"}):n.push({name:"Login"}):n.push({name:"Login"})}),(r,s)=>(te(),oe("div",Ak))}},Sk=Zt(Rk,[["__scopeId","data-v-bc11f8f1"]]),Ck={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},Pk={class:"modal_holder"},kk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},Dk={class:"modal_content_holder inter font_size_xs"},Nk=["value"],Ok=["value"],Vk={__name:"profileEdit",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Xt(),r=e,s=t,i=ne([]),o=ne("");us(async()=>{const N=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();i.value=N.sort((R,M)=>R.name.common.localeCompare(M.name.common))});const l=ne(""),c=ne(""),u=ne(""),f=ne(""),p=ne(!1),m=ne([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),y=ne("");function O(U){return/^\d{10}$/.test(U)}function D(U){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(U))return!1;const[R,M,G]=U.split("/").map(Number),T=new Date(R,M-1,G);return T.getFullYear()===R&&T.getMonth()===M-1&&T.getDate()===G}const S=async()=>{const N=ml().currentUser;if(f.value="",p.value=!1,!O(c.value)){f.value="Contact Number must be a valid 10-digit number.",p.value=!0;return}if(!D(u.value)){f.value="Date of Birth must be in the format yyyy/mm/dd.",p.value=!0;return}const R=s.globalUser.userData,M={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:R.email?R.email:N.email,gender:y.value,country:o.value},uid:R.uid?R.uid:N.uid,loginDate:R.loginDate,streak:{count:R.streak.count,lastUpdate:R.streak.lastUpdate},profileEdited:Rn()};n.setUserData(M),await Gn(Bt(jt,"users",R.uid?R.uid:N.uid),M),r("close")},x=()=>{p.value=!1,f.value=""};return(U,N)=>(te(),oe("div",Ck,[V("div",Pk,[V("div",kk,[N[6]||(N[6]=V("span",{style:{width:"80%"}},"Edit User Information",-1)),V("button",{class:"modal_close_button",onClick:N[0]||(N[0]=R=>U.$emit("close"))},"×")]),V("div",Dk,[N[10]||(N[10]=V("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),V("form",{class:"modal_form_holder",onSubmit:lu(S,["prevent"])},[We(V("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":N[1]||(N[1]=R=>l.value=R),required:""},null,512),[[Pt,l.value]]),We(V("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":N[2]||(N[2]=R=>c.value=R),required:""},null,512),[[Pt,c.value]]),We(V("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":N[3]||(N[3]=R=>u.value=R),required:""},null,512),[[Pt,u.value]]),We(V("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":N[4]||(N[4]=R=>y.value=R)},[N[7]||(N[7]=V("option",{disabled:"",value:""},"Please select one",-1)),(te(!0),oe(De,null,Vt(m.value,R=>(te(),oe("option",{key:R.value,value:R.value},Ve(R.text),9,Nk))),128))],512),[[ns,y.value]]),We(V("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":N[5]||(N[5]=R=>o.value=R),id:"country"},[N[8]||(N[8]=V("option",{disabled:"",value:""},"Select your country",-1)),(te(!0),oe(De,null,Vt(i.value,R=>(te(),oe("option",{key:R.cca3,value:R.cca3},Ve(R.name.common),9,Ok))),128))],512),[[ns,o.value]]),N[9]||(N[9]=V("button",{type:"submit",class:"modal_button inter font_size_xs"}," Confirm ",-1))],32)])]),p.value?(te(),Nt(wo,{key:0,errorMessage:f.value,onClose:x},null,8,["errorMessage"])):Yt("",!0)]))}},wp=Zt(Vk,[["__scopeId","data-v-697cab32"]]),Ey="/assets/brown_man-DU8HBBmE.png",wy="/assets/blonde_man-Br_WNAu2.png",Ty="/assets/ginger_man-D_7vVZja.png",Iy="/assets/black_man-DZoPS0-N.png",by="/assets/black_woman-QP95zNq-.png",Ay="/assets/brunette_woman-C5YdWLXO.png",Ry="/assets/ginger_woman-5AupqmXa.png",Sy="/assets/blonde_woman-IP-2iqnM.png",Hc="/assets/none-BOBk4slU.png",xk={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},Mk={class:"modal_holder"},Lk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},Uk={class:"modal_content_holder inter font_size_xs"},Fk={class:"modal_avatars_holder"},Bk=["onClick"],jk=["onClick"],$k={__name:"profileAvatar",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Xt(),r=Ue(()=>[{label:"Brown Hair",url:Ey,ref:"brown_man"},{label:"Blonde Hair",url:wy,ref:"blonde_man"},{label:"Ginger Hair",url:Ty,ref:"ginger_man"},{label:"Black Hair",url:Iy,ref:"black_man"},{label:"Brown Hair Woman",url:Ay,ref:"brown_woman"},{label:"Blonde Hair Woman",url:Sy,ref:"blonde_woman"},{label:"Ginger Hair Woman",url:Ry,ref:"ginger_woman"},{label:"Black Hair Woman",url:by,ref:"black_woman"},{label:"None",url:Hc,ref:"none"}]),s=e,i=t,o=ne("none"),l=u=>{o.value=u},c=async()=>{const u=ml(),f=i.globalUser.userData,p=u.currentUser,m={profileAvatar:o.value,profileEdited:Rn()};await Gn(Bt(jt,"users",f.uid?f.uid:p.uid),m,{merge:!0}),n.userData.profileAvatar=o.value,s("close")};return(u,f)=>(te(),oe("div",xk,[V("div",Mk,[V("div",Lk,[f[2]||(f[2]=V("span",{style:{width:"80%"}},"Profile Avatar",-1)),V("button",{class:"modal_close_button",onClick:f[0]||(f[0]=p=>u.$emit("close"))},"×")]),V("div",Uk,[(te(!0),oe(De,null,Vt(r.value,p=>(te(),oe("div",Fk,[p.ref==o.value?(te(),oe("div",{key:0,class:"modal_avatar_selected",onClick:m=>l(p.ref),style:es({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,12,Bk)):(te(),oe("div",{key:1,class:"modal_avatar",style:es({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}),onClick:m=>l(p.ref)},null,12,jk))]))),256))]),V("button",{type:"submit",class:"modal_button inter font_size_xs",onClick:f[1]||(f[1]=p=>c())}," Confirm ")])]))}},Tp=Zt($k,[["__scopeId","data-v-82d90dde"]]),Hk={class:"profile_container"},zk={class:"profile_header"},qk={class:"profile_edit_btn"},Wk={class:"profile_info"},Gk={class:"profile_avatar_wrapper"},Kk={class:"pfp_edit_button"},Qk={class:"profile_user_details font_size_s inter"},Yk={class:"font_size_xxs"},Jk={class:"profile_stats"},Xk={class:"profile_stat_top inter font_size_xs"},Zk={key:0,class:"profile_stat_value"},e1={key:0},t1={key:1},n1={key:1,class:"profile_stat_value"},r1={class:"profile_stat_icon"},s1={class:"profile_stat_label inter font_size_xs"},i1={__name:"profile",setup(t){const e=Xt(),n=ne(!1),r=ne(!1),s=ne(!1),i=ne(null);Ue(()=>e.userData.profileAvatar?e.userData.profileAvatar:"none");const o={brown_man:Ey,blonde_man:wy,ginger_man:Ty,black_man:Iy,brown_woman:Ay,blonde_woman:Sy,ginger_woman:Ry,black_woman:by,none:Hc},l=Ue(()=>{const S=e.userData?.profileAvatar||"none";return o[S]||Hc});us(()=>{const S=new Date().toISOString().split("T")[0];if(i.value=e.userData,!e.moodData||!e.moodData[S])return;n.value=!0;const x=e.moodData[S];for(const U of c.value)if(U.ref===x.mood){y.value[2].value=U.icon;break}});const c=Ue(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),u=Ue(()=>e.userData?.personalInfo.name||""),f=Ue(()=>e.userData?.personalInfo.email||""),p=Ue(()=>e.userData?.streak?.count||0),m=Ue(()=>e.journalData.length||0);Ue(()=>e.userData?.personalInfo.courses?.length||0);const y=ne([{label:"App Streak",value:p.value,icon:"fa fa-signal"},{label:"Journal Entries",value:m.value,icon:"fa fa-book"},{label:"Mood Trends",value:"",icon:"fas fa-chart-line"}]),O=()=>{r.value=!0},D=()=>{s.value=!0};return(S,x)=>(te(),oe(De,null,[V("div",Hk,[V("div",zk,[x[5]||(x[5]=V("div",{class:"profile_title font_size_s inter"},null,-1)),V("div",qk,[V("i",{class:"fas fa-edit",onClick:x[0]||(x[0]=U=>O())})])]),V("div",Wk,[V("div",Gk,[V("div",{class:"profile_avatar",style:es({backgroundImage:`url(${l.value})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,4)]),V("div",Kk,[V("i",{class:"fas fa-edit",onClick:x[1]||(x[1]=U=>D())}),V("input",{type:"file",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:x[2]||(x[2]=(...U)=>S.handleImageUpload&&S.handleImageUpload(...U))},null,544)]),V("div",Qk,[cn(Ve(u.value)+" ",1),V("span",Yk,Ve(f.value),1)])]),V("div",Jk,[(te(!0),oe(De,null,Vt(y.value,(U,N)=>(te(),oe("div",{class:"profile_stat_card",key:N},[V("div",Xk,[U.label=="Mood Trends"?(te(),oe("div",Zk,[n.value?(te(),oe("div",e1,[V("i",{class:Qn(U.value),style:{"font-size":"1.5rem"}},null,2),x[6]||(x[6]=cn("  ",-1))])):(te(),oe("div",t1,[...x[7]||(x[7]=[V("i",{class:"far fa-meh",style:{"font-size":"1.5rem"}},null,-1),cn("  ",-1)])]))])):(te(),oe("div",n1,Ve(U.value),1)),V("div",r1,[V("i",{class:Qn(U.icon),style:{color:"#87bfba"}},null,2)])]),V("div",s1,Ve(U.label),1)]))),128))])]),r.value?(te(),Nt(wp,{key:0,onClose:x[3]||(x[3]=U=>r.value=!1),globalUser:En(e),viewPoint:wp},null,8,["globalUser"])):Yt("",!0),s.value?(te(),Nt(Tp,{key:1,onClose:x[4]||(x[4]=U=>s.value=!1),globalUser:En(e),viewPoint:Tp},null,8,["globalUser"])):Yt("",!0)],64))}},Cy=Zt(i1,[["__scopeId","data-v-476bcf4d"]]),o1={class:"journal_selection_holder inter font_size_xs"},a1=["onClick"],l1={key:0,class:"journal_entry_holder"},c1={class:"journal_entry_date_holder inter font_size_xs"},u1={style:{width:"90%"}},h1={class:"journal_entry_content_holder"},f1={key:1},d1={key:0,class:"journal_list_holder"},p1={class:"inter font_size_sm",style:{"font-weight":"bold","margin-bottom":"0.5rem"}},m1={class:"inter font_size_xs",style:{"margin-bottom":"0.5rem"}},g1={class:"inter font_size_xxs",style:{color:"#808080"}},_1={__name:"journal",emits:["close"],setup(t,{emit:e}){const n=e,r=Xt(),s=ne("journalEntry"),i=[{key:"journalEntry",label:"New Journal Entry",cornerClass:"right-rounded"},{key:"journalList",label:"Journal List",cornerClass:"left-rounded"}],o=ne(new Date().toDateString()),l=ne(new Date().toLocaleTimeString()),c=D=>{s.value=D,o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString()},u=()=>{m.value=!1,y.value=""},f=ne(""),p=ne(""),m=ne(!1),y=ne(""),O=async()=>{if(!f.value){m.value=!0,y.value="Please give a journal title.";return}if(!p.value){m.value=!0,y.value="Please give journal content.";return}const S={[Date.now()]:{journalEntryHeading:f.value,journalEntryContent:p.value,journalEntryLogged:Rn()}};try{await Gn(Bt(jt,"journals",r.userData.uid),S,{merge:!0}),m.value=!0,y.value="Your journal entry has been logged.",f.value="",p.value="",o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString(),n("close")}catch(x){console.error("Failed to save journal:",x),m.value=!0,y.value="Failed to save journal. Please try again."}};return(D,S)=>(te(),oe(De,null,[S[5]||(S[5]=V("div",{class:"journal_header_holder inter font_size_xs"}," My Journal ",-1)),V("div",o1,[(te(),oe(De,null,Vt(i,x=>V("div",{key:x.key,class:Qn(["journal_selection",{active:s.value===x.key,[x.cornerClass]:!0}]),onClick:U=>c(x.key)},Ve(x.label),11,a1)),64))]),s.value=="journalEntry"?(te(),oe("div",l1,[V("div",c1,[V("div",u1,[cn(Ve(o.value)+" ",1),S[3]||(S[3]=V("br",null,null,-1)),cn(" "+Ve(l.value),1)])]),V("div",h1,[We(V("input",{placeholder:"Give us a title.",style:{width:"90%",height:"5%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":S[0]||(S[0]=x=>f.value=x)},null,512),[[Pt,f.value]]),We(V("textarea",{placeholder:"What's weighing on your mind today? Or what's a small win?",style:{width:"90%",height:"80%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":S[1]||(S[1]=x=>p.value=x)},null,512),[[Pt,p.value]])]),S[4]||(S[4]=V("br",null,null,-1)),V("div",{class:"save_button inter font_size_xxs",onClick:S[2]||(S[2]=x=>O())},"Save"),m.value?(te(),Nt(wo,{key:0,errorMessage:y.value,onClose:u},null,8,["errorMessage"])):Yt("",!0)])):(te(),oe("div",f1,[En(r).journalData?(te(),oe("div",d1,[(te(!0),oe(De,null,Vt(En(r).journalData,(x,U)=>(te(),oe("div",{key:U,style:{width:"90%","box-shadow":"0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4)","margin-bottom":"1rem","border-radius":"1rem",padding:"0.5rem"}},[V("div",p1,Ve(x.journalEntryHeading),1),V("div",m1,Ve(x.journalEntryContent),1),V("div",g1,"Logged on: "+Ve(new Date(x.journalEntryLogged.seconds*1e3).toLocaleString()),1)]))),128))])):Yt("",!0)]))],64))}},Py=Zt(_1,[["__scopeId","data-v-b89d33a8"]]),y1={class:"mood_tracker_holder"},v1={class:"mood_icons_holder"},E1={class:"mood_icon_holder"},w1=["onClick"],T1=["onClick"],I1={class:"influence_holder",style:{height:"25rem"}},b1={class:"influence_items_holder"},A1=["value"],R1={class:"influence_holder"},S1={__name:"mood",emits:["close"],setup(t,{emit:e}){const n=Xt(),r=e,s=Ue(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),i=Ue(()=>[{label:"Sleep Quality",ref:"sleep_quality"},{label:"Nutrition",ref:"nutrition"},{label:"Physical Activity",ref:"physical_activity"},{label:"Social Connection",ref:"social_connection"},{label:"Mindset",ref:"mindset"},{label:"Environment",ref:"environment"},{label:"None",ref:"none"}]),o=ne(!1),l=ne(""),c=ne([]),u=ne(""),f=ne("neutral"),p=O=>{f.value=O},m=async()=>{if(c.value.length==0){o.value=!0,l.value="Please select an influence.";return}const D={[new Date().toISOString().split("T")[0]]:{mood:f.value,influences:c.value,optional_notes:u.value,mood_logged:Rn()}};await Gn(Bt(jt,"mood",n.userData.uid),D,{merge:!0}),o.value=!0,l.value="Thank you for logging your mood. It will be taken into consideration.",n.setMoodData(D),r("close")},y=()=>{o.value=!1,l.value=""};return(O,D)=>(te(),oe(De,null,[V("div",y1,[D[6]||(D[6]=V("div",{class:"mood_heading_holder inter font_size_xs"},"How am I feeling today?",-1)),V("div",v1,[(te(!0),oe(De,null,Vt(s.value,S=>(te(),oe("div",E1,[f.value==S.ref?(te(),oe("div",{key:0,class:Qn(S.icon),style:{"font-size":"3rem",border:"0.2rem solid #87bfba",padding:"0.5rem","border-radius":"50%"},onClick:x=>p(S.ref)},null,10,w1)):(te(),oe("div",{key:1,class:Qn(S.icon),style:{"font-size":"3rem"},onClick:x=>p(S.ref)},null,10,T1))]))),256))]),V("div",I1,[D[4]||(D[4]=V("div",{class:"influence_heading_holder inter font_size_xs"},[V("b",null,"What might be influencing this?")],-1)),V("div",b1,[(te(!0),oe(De,null,Vt(i.value,S=>(te(),oe("div",{class:"influence_item_holder inter font_size_xxs",key:S.ref,style:{height:"12%"}},[D[3]||(D[3]=cn("  ",-1)),We(V("input",{type:"checkbox","onUpdate:modelValue":D[0]||(D[0]=x=>c.value=x),value:S.ref},null,8,A1),[[Nm,c.value]]),cn(" "+Ve(S.label),1)]))),128))])]),V("div",R1,[D[5]||(D[5]=V("div",{class:"influence_heading_holder inter font_size_xs"},[V("b",null,"Optional Notes")],-1)),We(V("textarea",{placeholder:"Write a few words about why you feel the way you feel",style:{width:"90%",height:"60%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":D[1]||(D[1]=S=>u.value=S)},null,512),[[Pt,u.value]])]),V("div",{class:"save_button inter font_size_xxs",onClick:D[2]||(D[2]=S=>m())},"Save")]),o.value?(te(),Nt(wo,{key:0,errorMessage:l.value,onClose:y},null,8,["errorMessage"])):Yt("",!0)],64))}},C1=Zt(S1,[["__scopeId","data-v-5fdabdf1"]]),P1={key:0,class:"empty_therapy_list inter font_size_xs"},k1={key:1,class:"therapy_sign_up"},D1={key:0,class:"therapy_sign_up_step_1"},N1={class:"therapist_sign_up_form_holder"},O1=["type"],V1={class:"show_password_toggle inter font_size_xs"},x1={key:2,class:"sign_up_button_holder inter font_size_s"},M1={__name:"therapists",setup(t){const e=Xt(),n=ne(e.userData.personalInfo.email),r=ne(e.userData.personalInfo.name),s=ne(""),i=ne(""),o=ne("password"),l=ne(null),c=ne(!1),u=ne([{value:"dr",text:"Dr."},{value:"mr",text:"Mr."},{value:"mrs",text:"Mrs."},{value:"miss",text:"Miss."},{value:"ms",text:"Ms."},{value:"mx",text:"Mx."},{value:"prof",text:"Prof."},{value:"rev",text:"Rev."},{value:"rev_dr",text:"Rev. Dr."},{value:"rabbi",text:"Rabbi."},{value:"sister",text:"Sister."}]),f=ne(""),p=ne([{value:"mp_psych",text:"MpPsych"},{value:"phd",text:"PhD"},{value:"msc",text:"MSc"},{value:"ma",text:"Ma"},{value:"msocsci",text:"MSocSci"},{value:"mbchb",text:"MBCHb"},{value:"other",text:"Other"}]),m=ne(""),y=ne(null),O=ne(null);function D(){return new Promise((R,M)=>{if(window.google?.maps?.places){R();return}const G=document.createElement("script");G.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWGRHjfWWoBWojyOBuGi75ACgNAkGobws&libraries=places",G.async=!0,G.defer=!0,G.onload=R,G.onerror=M,document.head.appendChild(G)})}let S=null;Xr(l,async R=>{R==="step_1"&&(await ao(),await D(),y.value&&(S=new google.maps.places.Autocomplete(y.value,{types:["address"],componentRestrictions:{country:"za"},fields:["address_components","formatted_address","geometry"]}),S.addListener("place_changed",()=>{const M=S.getPlace();M.address_components&&(O.value=x(M),console.log("Selected address:",O.value))})))});function x(R){const M={};return R.address_components.forEach(G=>G.types.forEach(T=>M[T]=G.long_name)),{fullAddress:R.formatted_address,street:`${M.street_number||""} ${M.route||""}`.trim(),city:M.locality||M.sublocality||"",province:M.administrative_area_level_1||"",postalCode:M.postal_code||"",country:M.country||"",lat:R.geometry.location.lat(),lng:R.geometry.location.lng()}}const U=()=>{l.value="step_1"},N=()=>{o.value=o.value==="password"?"text":"password"};return(R,M)=>(te(),oe(De,null,[!c.value&&!l.value?(te(),oe("div",P1," No therapists are listed at this moment. ")):(te(),oe("div",k1,[M[13]||(M[13]=jE('<div class="logo_holder" data-v-2be08e82><div class="logo" data-v-2be08e82></div><div class="inter font_size_xs" data-v-2be08e82>  <b style="color:#87bfba;" data-v-2be08e82>FindingYourFit</b>  </div><div class="logo" data-v-2be08e82></div></div>',1)),l.value==="step_1"?(te(),oe("div",D1,[M[11]||(M[11]=V("div",{class:"therapy_sign_up_heading inter font_size_xs"},[V("b",null,"Let's get you signed up and listed!")],-1)),M[12]||(M[12]=V("br",null,null,-1)),V("form",N1,[We(V("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Email Address","onUpdate:modelValue":M[0]||(M[0]=G=>n.value=G),required:""},null,512),[[Pt,n.value]]),We(V("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Username","onUpdate:modelValue":M[1]||(M[1]=G=>s.value=G),required:""},null,512),[[Pt,s.value]]),We(V("input",{class:"form_input inter font_size_xs",type:o.value,placeholder:"Password","onUpdate:modelValue":M[2]||(M[2]=G=>i.value=G),required:""},null,8,O1),[[Vm,i.value]]),V("div",V1,[V("label",null,[V("input",{type:"checkbox",onChange:N},null,32),M[7]||(M[7]=cn(" Show Password ",-1))])]),We(V("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":M[3]||(M[3]=G=>f.value=G)},[M[8]||(M[8]=V("option",{disabled:"",value:""},"Select your title",-1)),(te(!0),oe(De,null,Vt(u.value,G=>(te(),oe("option",{key:G.value},Ve(G.text),1))),128))],512),[[ns,f.value]]),We(V("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":M[4]||(M[4]=G=>r.value=G),required:""},null,512),[[Pt,r.value]]),We(V("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":M[5]||(M[5]=G=>m.value=G)},[M[9]||(M[9]=V("option",{disabled:"",value:""},"Select your title",-1)),(te(!0),oe(De,null,Vt(p.value,G=>(te(),oe("option",{key:G.value},Ve(G.text),1))),128))],512),[[ns,m.value]]),V("input",{ref_key:"addressInput",ref:y,class:"form_input inter font_size_xs",type:"text",placeholder:"Search address..."},null,512),M[10]||(M[10]=V("button",{type:"submit",class:"form_button inter font_size_xs"}," Confirm ",-1))])])):Yt("",!0)])),l.value?Yt("",!0):(te(),oe("div",x1,[V("i",{class:"fas fa-plus",onClick:M[6]||(M[6]=G=>U())})]))],64))}},L1=Zt(M1,[["__scopeId","data-v-2be08e82"]]),U1={class:"navigation_bar_holder"},F1=["onClick"],B1=["innerHTML"],j1={__name:"navigation",setup(t){const e={home:{name:"Home",icon:'<i class="fa fa-home"></i>'},journal:{name:"Journal",icon:'<i class="fa fa-book"></i>'},profile:{name:"Profile",icon:'<i class="fa fa-id-card"></i>'}},n=Xt();Xr(()=>n.userData,i=>{}),Ya();const r=ne("home"),s=i=>{r.value=i};return us(async()=>{}),(i,o)=>(te(),oe(De,null,[r.value==="profile"?(te(),Nt(Cy,{key:0})):r.value==="home"?(te(),Nt(vy,{key:1,onSetPage:s})):r.value==="mood"?(te(),Nt(C1,{key:2})):r.value==="journal"?(te(),Nt(Py,{key:3})):r.value==="therapists"?(te(),Nt(L1,{key:4})):Yt("",!0),V("div",U1,[(te(),oe(De,null,Vt(e,(l,c)=>V("div",{class:"navigation_item_holder inter font_size_xxs",key:c},[V("div",{class:Qn(["navigation_item",{active:r.value===c}]),onClick:u=>s(c)},[V("div",{innerHTML:l.icon},null,8,B1),V("div",null,Ve(l.name),1)],10,F1)])),64))])],64))}},$1=Zt(j1,[["__scopeId","data-v-9f36f3b6"]]),H1=[{path:"/",name:"Loading",component:Sk},{path:"/login",name:"Login",component:ik},{path:"/navigation",name:"Navigation",component:$1},{path:"/home/",name:"Home",component:vy,props:!0},{path:"/profile/",name:"Profile",component:Cy,props:!0},{path:"/journal/",name:"JournalEntry",component:Py,props:!0}],ky=$T({history:ET(),routes:H1});ky.beforeEach(async(t,e,n)=>{const r=Xt();if(r.userData||await r.fetchUserData(),!r.userData?.uid&&t.name!=="Login")return n({name:"Login"});n()});let Ip=null;qn.onAuthStateChanged(()=>{if(!Ip){const t=Aw(Mw);t.use(Cw()),t.use(ky),t.mount("#app"),Ip=t}});
