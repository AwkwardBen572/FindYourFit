(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},Ds=[],vn=()=>{},Rp=()=>!1,Ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kc=t=>t.startsWith("onUpdate:"),It=Object.assign,Qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ov=Object.prototype.hasOwnProperty,ke=(t,e)=>ov.call(t,e),ue=Array.isArray,Ns=t=>io(t)==="[object Map]",Qs=t=>io(t)==="[object Set]",Kh=t=>io(t)==="[object Date]",ge=t=>typeof t=="function",Je=t=>typeof t=="string",Pn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Sp=t=>(xe(t)||ge(t))&&ge(t.then)&&ge(t.catch),Cp=Object.prototype.toString,io=t=>Cp.call(t),av=t=>io(t).slice(8,-1),Pp=t=>io(t)==="[object Object]",Yc=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Si=Gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},lv=/-\w/g,Jt=La(t=>t.replace(lv,e=>e.slice(1).toUpperCase())),cv=/\B([A-Z])/g,fs=La(t=>t.replace(cv,"-$1").toLowerCase()),Ua=La(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nl=La(t=>t?`on${Ua(t)}`:""),br=(t,e)=>!Object.is(t,e),Ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},kp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ra=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qh;const Fa=()=>Qh||(Qh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rs(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?dv(r):rs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||xe(t))return t}const uv=/;(?![^(]*\))/g,hv=/:([^]+)/,fv=/\/\*[^]*?\*\//g;function dv(t){const e={};return t.replace(fv,"").split(uv).forEach(n=>{if(n){const r=n.split(hv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yn(t){let e="";if(Je(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Yn(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mv=Gc(pv);function Dp(t){return!!t||t===""}function gv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ss(t[r],e[r]);return n}function ss(t,e){if(t===e)return!0;let n=Kh(t),r=Kh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Pn(t),r=Pn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?gv(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ss(t[o],e[o]))return!1}}return String(t)===String(e)}function Jc(t,e){return t.findIndex(n=>ss(n,e))}const Np=t=>!!(t&&t.__v_isRef===!0),ve=t=>Je(t)?t:t==null?"":ue(t)||xe(t)&&(t.toString===Cp||!ge(t.toString))?Np(t)?ve(t.value):JSON.stringify(t,Op,2):String(t),Op=(t,e)=>Np(e)?Op(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ol(r,i)+" =>"]=s,n),{})}:Qs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ol(n))}:Pn(e)?Ol(e):xe(e)&&!ue(e)&&!Pp(e)?String(e):e,Ol=(t,e="")=>{var n;return Pn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Vp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function xp(t){return new Vp(t)}function Mp(){return yt}function _v(t,e=!1){yt&&yt.cleanups.push(t)}let Le;const Vl=new WeakSet;class Lp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vl.has(this)&&(Vl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yh(this),Bp(this);const e=Le,n=ln;Le=this,ln=!0;try{return this.fn()}finally{jp(this),Le=e,ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eu(e);this.deps=this.depsTail=void 0,Yh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oc(this)&&this.run()}get dirty(){return oc(this)}}let Up=0,Ci,Pi;function Fp(t,e=!1){if(t.flags|=8,e){t.next=Pi,Pi=t;return}t.next=Ci,Ci=t}function Xc(){Up++}function Zc(){if(--Up>0)return;if(Pi){let e=Pi;for(Pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ci;){let e=Ci;for(Ci=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Bp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),eu(r),yv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function oc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($p(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $p(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Hi)||(t.globalVersion=Hi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!oc(t))))return;t.flags|=2;const e=t.dep,n=Le,r=ln;Le=t,ln=!0;try{Bp(t);const s=t.fn(t._value);(e.version===0||br(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,ln=r,jp(t),t.flags&=-3}}function eu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)eu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ln=!0;const Hp=[];function Jn(){Hp.push(ln),ln=!1}function Xn(){const t=Hp.pop();ln=t===void 0?!0:t}function Yh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let Hi=0;class vv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!ln||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new vv(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,zp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,Hi++,this.notify(e)}notify(e){Xc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zc()}}}function zp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)zp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const sa=new WeakMap,Zr=Symbol(""),ac=Symbol(""),zi=Symbol("");function Et(t,e,n){if(ln&&Le){let r=sa.get(t);r||sa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new tu),s.map=r,s.key=n),s.track()}}function Bn(t,e,n,r,s,i){const o=sa.get(t);if(!o){Hi++;return}const l=c=>{c&&c.trigger()};if(Xc(),e==="clear")o.forEach(l);else{const c=ue(t),u=c&&Yc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===zi||!Pn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(zi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Zr)),Ns(t)&&l(o.get(ac)));break;case"delete":c||(l(o.get(Zr)),Ns(t)&&l(o.get(ac)));break;case"set":Ns(t)&&l(o.get(Zr));break}}Zc()}function Ev(t,e){const n=sa.get(t);return n&&n.get(e)}function Is(t){const e=Se(t);return e===t?e:(Et(e,"iterate",zi),Qt(t)?e:e.map(ct))}function Ba(t){return Et(t=Se(t),"iterate",zi),t}const wv={__proto__:null,[Symbol.iterator](){return xl(this,Symbol.iterator,ct)},concat(...t){return Is(this).concat(...t.map(e=>ue(e)?Is(e):e))},entries(){return xl(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return Ln(this,"every",t,e,void 0,arguments)},filter(t,e){return Ln(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return Ln(this,"find",t,e,ct,arguments)},findIndex(t,e){return Ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ln(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return Ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ml(this,"includes",t)},indexOf(...t){return Ml(this,"indexOf",t)},join(t){return Is(this).join(t)},lastIndexOf(...t){return Ml(this,"lastIndexOf",t)},map(t,e){return Ln(this,"map",t,e,void 0,arguments)},pop(){return _i(this,"pop")},push(...t){return _i(this,"push",t)},reduce(t,...e){return Jh(this,"reduce",t,e)},reduceRight(t,...e){return Jh(this,"reduceRight",t,e)},shift(){return _i(this,"shift")},some(t,e){return Ln(this,"some",t,e,void 0,arguments)},splice(...t){return _i(this,"splice",t)},toReversed(){return Is(this).toReversed()},toSorted(t){return Is(this).toSorted(t)},toSpliced(...t){return Is(this).toSpliced(...t)},unshift(...t){return _i(this,"unshift",t)},values(){return xl(this,"values",ct)}};function xl(t,e,n){const r=Ba(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Tv=Array.prototype;function Ln(t,e,n,r,s,i){const o=Ba(t),l=o!==t&&!Qt(t),c=o[e];if(c!==Tv[e]){const p=c.apply(t,i);return l?ct(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,ct(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Jh(t,e,n,r){const s=Ba(t);let i=n;return s!==t&&(Qt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ct(l),c,t)}),s[e](i,...r)}function Ml(t,e,n){const r=Se(t);Et(r,"iterate",zi);const s=r[e](...n);return(s===-1||s===!1)&&su(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function _i(t,e,n=[]){Jn(),Xc();const r=Se(t)[e].apply(t,n);return Zc(),Xn(),r}const Iv=Gc("__proto__,__v_isRef,__isVue"),qp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pn));function bv(t){Pn(t)||(t=String(t));const e=Se(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Wp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Vv:Yp:i?Qp:Kp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let c;if(o&&(c=wv[n]))return c;if(n==="hasOwnProperty")return bv}const l=Reflect.get(e,n,Ke(e)?e:r);if((Pn(n)?qp.has(n):Iv(n))||(s||Et(e,"get",n),i))return l;if(Ke(l)){const c=o&&Yc(n)?l:l.value;return s&&xe(c)?cc(c):c}return xe(l)?s?cc(l):oo(l):l}}class Gp extends Wp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Dr(i);if(!Qt(r)&&!Dr(r)&&(i=Se(i),r=Se(r)),!ue(e)&&Ke(i)&&!Ke(r))return c||(i.value=r),!0}const o=ue(e)&&Yc(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,Ke(e)?e:s);return e===Se(s)&&(o?br(r,i)&&Bn(e,"set",n,r):Bn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Pn(n)||!qp.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ue(e)?"length":Zr),Reflect.ownKeys(e)}}class Av extends Wp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Rv=new Gp,Sv=new Av,Cv=new Gp(!0);const lc=t=>t,No=t=>Reflect.getPrototypeOf(t);function Pv(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Ns(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?lc:e?ia:ct;return!e&&Et(i,"iterate",c?ac:Zr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function kv(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),l=Se(s);t||(br(s,l)&&Et(o,"get",s),Et(o,"get",l));const{has:c}=No(o),u=e?lc:t?ia:ct;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Se(s),"iterate",Zr),s.size},has(s){const i=this.__v_raw,o=Se(i),l=Se(s);return t||(br(s,l)&&Et(o,"has",s),Et(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Se(l),u=e?lc:t?ia:ct;return!t&&Et(c,"iterate",Zr),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return It(n,t?{add:Oo("add"),set:Oo("set"),delete:Oo("delete"),clear:Oo("clear")}:{add(s){!e&&!Qt(s)&&!Dr(s)&&(s=Se(s));const i=Se(this);return No(i).has.call(i,s)||(i.add(s),Bn(i,"add",s,s)),this},set(s,i){!e&&!Qt(i)&&!Dr(i)&&(i=Se(i));const o=Se(this),{has:l,get:c}=No(o);let u=l.call(o,s);u||(s=Se(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?br(i,f)&&Bn(o,"set",s,i):Bn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:l}=No(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Bn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&Bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Pv(s,t,e)}),n}function nu(t,e){const n=kv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const Dv={get:nu(!1,!1)},Nv={get:nu(!1,!0)},Ov={get:nu(!0,!1)};const Kp=new WeakMap,Qp=new WeakMap,Yp=new WeakMap,Vv=new WeakMap;function xv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mv(t){return t.__v_skip||!Object.isExtensible(t)?0:xv(av(t))}function oo(t){return Dr(t)?t:ru(t,!1,Rv,Dv,Kp)}function Jp(t){return ru(t,!1,Cv,Nv,Qp)}function cc(t){return ru(t,!0,Sv,Ov,Yp)}function ru(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Mv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Ar(t){return Dr(t)?Ar(t.__v_raw):!!(t&&t.__v_isReactive)}function Dr(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function su(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function iu(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&kp(t,"__v_skip",!0),t}const ct=t=>xe(t)?oo(t):t,ia=t=>xe(t)?cc(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function ne(t){return Xp(t,!1)}function Lv(t){return Xp(t,!0)}function Xp(t,e){return Ke(t)?t:new Uv(t,e)}class Uv{constructor(e,n){this.dep=new tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||Dr(e);e=r?e:Se(e),br(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function En(t){return Ke(t)?t.value:t}const Fv={get:(t,e,n)=>e==="__v_raw"?t:En(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zp(t){return Ar(t)?t:new Proxy(t,Fv)}function Bv(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=$v(t,n);return e}class jv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ev(Se(this._object),this._key)}}function $v(t,e,n){const r=t[e];return Ke(r)?r:new jv(t,e,n)}class Hv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Fp(this,!0),!0}get value(){const e=this.dep.track();return $p(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function zv(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new Hv(r,s,n)}const Vo={},oa=new WeakMap;let Qr;function qv(t,e=!1,n=Qr){if(n){let r=oa.get(n);r||oa.set(n,r=[]),r.push(t)}}function Wv(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=P=>s?P:Qt(P)||s===!1||s===0?jn(P,1):jn(P);let f,p,m,y,V=!1,N=!1;if(Ke(t)?(p=()=>t.value,V=Qt(t)):Ar(t)?(p=()=>u(t),V=!0):ue(t)?(N=!0,V=t.some(P=>Ar(P)||Qt(P)),p=()=>t.map(P=>{if(Ke(P))return P.value;if(Ar(P))return u(P);if(ge(P))return c?c(P,2):P()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Jn();try{m()}finally{Xn()}}const P=Qr;Qr=f;try{return c?c(t,3,[y]):t(y)}finally{Qr=P}}:p=vn,e&&s){const P=p,z=s===!0?1/0:s;p=()=>jn(P(),z)}const D=Mp(),L=()=>{f.stop(),D&&D.active&&Qc(D.effects,f)};if(i&&e){const P=e;e=(...z)=>{P(...z),L()}}let M=N?new Array(t.length).fill(Vo):Vo;const C=P=>{if(!(!(f.flags&1)||!f.dirty&&!P))if(e){const z=f.run();if(s||V||(N?z.some((Z,b)=>br(Z,M[b])):br(z,M))){m&&m();const Z=Qr;Qr=f;try{const b=[z,M===Vo?void 0:N&&M[0]===Vo?[]:M,y];M=z,c?c(e,3,b):e(...b)}finally{Qr=Z}}}else f.run()};return l&&l(C),f=new Lp(p),f.scheduler=o?()=>o(C,!1):C,y=P=>qv(P,!1,f),m=f.onStop=()=>{const P=oa.get(f);if(P){if(c)c(P,4);else for(const z of P)z();oa.delete(f)}},e?r?C(!0):M=f.run():o?o(C.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function jn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))jn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)jn(t[r],e,n);else if(Qs(t)||Ns(t))t.forEach(r=>{jn(r,e,n)});else if(Pp(t)){for(const r in t)jn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&jn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ao(t,e,n,r){try{return r?t(...r):t()}catch(s){ja(s,e,n)}}function kn(t,e,n,r){if(ge(t)){const s=ao(t,e,n,r);return s&&Sp(s)&&s.catch(i=>{ja(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(kn(t[i],e,n,r));return s}}function ja(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Jn(),ao(i,null,10,[t,c,u]),Xn();return}}Gv(t,n,s,r,o)}function Gv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ct=[];let gn=-1;const Os=[];let gr=null,As=0;const em=Promise.resolve();let aa=null;function lo(t){const e=aa||em;return t?e.then(this?t.bind(this):t):e}function Kv(t){let e=gn+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=qi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ou(t){if(!(t.flags&1)){const e=qi(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=qi(n)?Ct.push(t):Ct.splice(Kv(e),0,t),t.flags|=1,tm()}}function tm(){aa||(aa=em.then(rm))}function Qv(t){ue(t)?Os.push(...t):gr&&t.id===-1?gr.splice(As+1,0,t):t.flags&1||(Os.push(t),t.flags|=1),tm()}function Xh(t,e,n=gn+1){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nm(t){if(Os.length){const e=[...new Set(Os)].sort((n,r)=>qi(n)-qi(r));if(Os.length=0,gr){gr.push(...e);return}for(gr=e,As=0;As<gr.length;As++){const n=gr[As];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gr=null,As=0}}const qi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function rm(t){try{for(gn=0;gn<Ct.length;gn++){const e=Ct[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ao(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<Ct.length;gn++){const e=Ct[gn];e&&(e.flags&=-2)}gn=-1,Ct.length=0,nm(),aa=null,(Ct.length||Os.length)&&rm()}}let qt=null,sm=null;function la(t){const e=qt;return qt=t,sm=t&&t.type.__scopeId||null,e}function Yv(t,e=qt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ha(-1);const i=la(e);let o;try{o=t(...s)}finally{la(i),r._d&&ha(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function We(t,e){if(qt===null)return t;const n=qa(qt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ve]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&jn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Jn(),kn(c,n,8,[t.el,l,t,e]),Xn())}}const Jv=Symbol("_vte"),Xv=t=>t.__isTeleport,Zv=Symbol("_leaveCb");function au(t,e){t.shapeFlag&6&&t.component?(t.transition=e,au(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function im(t,e){return ge(t)?It({name:t.name},e,{setup:t}):t}function om(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ca=new WeakMap;function ki(t,e,n,r,s=!1){if(ue(t)){t.forEach((V,N)=>ki(V,e&&(ue(e)?e[N]:e),n,r,s));return}if(Di(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ki(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?qa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,m=Se(p),y=p===Ve?Rp:V=>ke(m,V);if(u!=null&&u!==c){if(Zh(e),Je(u))f[u]=null,y(u)&&(p[u]=null);else if(Ke(u)){u.value=null;const V=e;V.k&&(f[V.k]=null)}}if(ge(c))ao(c,l,12,[o,f]);else{const V=Je(c),N=Ke(c);if(V||N){const D=()=>{if(t.f){const L=V?y(c)?p[c]:f[c]:c.value;if(s)ue(L)&&Qc(L,i);else if(ue(L))L.includes(i)||L.push(i);else if(V)f[c]=[i],y(c)&&(p[c]=f[c]);else{const M=[i];c.value=M,t.k&&(f[t.k]=M)}}else V?(f[c]=o,y(c)&&(p[c]=o)):N&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const L=()=>{D(),ca.delete(t)};L.id=-1,ca.set(t,L),zt(L,n)}else Zh(t),D()}}}function Zh(t){const e=ca.get(t);e&&(e.flags|=8,ca.delete(t))}Fa().requestIdleCallback;Fa().cancelIdleCallback;const Di=t=>!!t.type.__asyncLoader,am=t=>t.type.__isKeepAlive;function eE(t,e){lm(t,"a",e)}function tE(t,e){lm(t,"da",e)}function lm(t,e,n=Tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($a(e,r,n),n){let s=n.parent;for(;s&&s.parent;)am(s.parent.vnode)&&nE(r,e,n,s),s=s.parent}}function nE(t,e,n,r){const s=$a(e,t,r,!0);cm(()=>{Qc(r[e],s)},n)}function $a(t,e,n=Tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Jn();const l=co(n),c=kn(e,n,t,o);return l(),Xn(),c});return r?s.unshift(i):s.push(i),i}}const rr=t=>(e,n=Tt)=>{(!Gi||t==="sp")&&$a(t,(...r)=>e(...r),n)},rE=rr("bm"),jr=rr("m"),sE=rr("bu"),iE=rr("u"),oE=rr("bum"),cm=rr("um"),aE=rr("sp"),lE=rr("rtg"),cE=rr("rtc");function uE(t,e=Tt){$a("ec",t,e)}const hE="components";function fE(t,e){return pE(hE,t,!0,e)||t}const dE=Symbol.for("v-ndc");function pE(t,e,n=!0,r=!1){const s=qt||Tt;if(s){const i=s.type;{const l=nw(i,!1);if(l&&(l===e||l===Jt(e)||l===Ua(Jt(e))))return i}const o=ef(s[t]||i[t],e)||ef(s.appContext[t],e);return!o&&r?i:o}}function ef(t,e){return t&&(t[e]||t[Jt(e)]||t[Ua(Jt(e))])}function ut(t,e,n,r){let s;const i=n,o=ue(t);if(o||Je(t)){const l=o&&Ar(t);let c=!1,u=!1;l&&(c=!Qt(t),u=Dr(t),t=Ba(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?ia(ct(t[f])):ct(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const uc=t=>t?km(t)?qa(t):uc(t.parent):null,Ni=It(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uc(t.parent),$root:t=>uc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>hm(t),$forceUpdate:t=>t.f||(t.f=()=>{ou(t.update)}),$nextTick:t=>t.n||(t.n=lo.bind(t.proxy)),$watch:t=>ME.bind(t)}),Ll=(t,e)=>t!==Ve&&!t.__isScriptSetup&&ke(t,e),mE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ll(r,e))return o[e]=1,r[e];if(s!==Ve&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Ve&&ke(n,e))return o[e]=4,n[e];hc&&(o[e]=0)}}const f=Ni[e];let p,m;if(f)return e==="$attrs"&&Et(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ve&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ll(s,e)?(s[e]=n,!0):r!==Ve&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},l){let c,u;return!!(n[l]||t!==Ve&&l[0]!=="$"&&ke(t,l)||Ll(e,l)||(c=i[0])&&ke(c,l)||ke(r,l)||ke(Ni,l)||ke(s.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tf(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hc=!0;function gE(t){const e=hm(t),n=t.proxy,r=t.ctx;hc=!1,e.beforeCreate&&nf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:V,activated:N,deactivated:D,beforeDestroy:L,beforeUnmount:M,destroyed:C,unmounted:P,render:z,renderTracked:Z,renderTriggered:b,errorCaptured:_,serverPrefetch:v,expose:w,inheritAttrs:E,components:R,directives:I,filters:He}=e;if(u&&_E(u,r,null),o)for(const me in o){const be=o[me];ge(be)&&(r[me]=be.bind(n))}if(s){const me=s.call(n,n);xe(me)&&(t.data=oo(me))}if(hc=!0,i)for(const me in i){const be=i[me],Ot=ge(be)?be.bind(n,n):ge(be.get)?be.get.bind(n,n):vn,fn=!ge(be)&&ge(be.set)?be.set.bind(n):vn,Bt=Fe({get:Ot,set:fn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:ot=>Bt.value=ot})}if(l)for(const me in l)um(l[me],r,n,me);if(c){const me=ge(c)?c.call(n):c;Reflect.ownKeys(me).forEach(be=>{zo(be,me[be])})}f&&nf(f,t,"c");function Me(me,be){ue(be)?be.forEach(Ot=>me(Ot.bind(n))):be&&me(be.bind(n))}if(Me(rE,p),Me(jr,m),Me(sE,y),Me(iE,V),Me(eE,N),Me(tE,D),Me(uE,_),Me(cE,Z),Me(lE,b),Me(oE,M),Me(cm,P),Me(aE,v),ue(w))if(w.length){const me=t.exposed||(t.exposed={});w.forEach(be=>{Object.defineProperty(me,be,{get:()=>n[be],set:Ot=>n[be]=Ot,enumerable:!0})})}else t.exposed||(t.exposed={});z&&t.render===vn&&(t.render=z),E!=null&&(t.inheritAttrs=E),R&&(t.components=R),I&&(t.directives=I),v&&om(t)}function _E(t,e,n=vn){ue(t)&&(t=fc(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=cn(s.from||r,s.default,!0):i=cn(s.from||r):i=cn(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function nf(t,e,n){kn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function um(t,e,n,r){let s=r.includes(".")?bm(n,r):()=>n[r];if(Je(t)){const i=e[t];ge(i)&&ts(s,i)}else if(ge(t))ts(s,t.bind(n));else if(xe(t))if(ue(t))t.forEach(i=>um(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&ts(s,i,t)}}function hm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ua(c,u,o,!0)),ua(c,e,o)),xe(e)&&i.set(e,c),c}function ua(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ua(t,i,n,!0),s&&s.forEach(o=>ua(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=yE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const yE={data:rf,props:sf,emits:sf,methods:Ei,computed:Ei,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Ei,directives:Ei,watch:EE,provide:rf,inject:vE};function rf(t,e){return e?t?function(){return It(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function vE(t,e){return Ei(fc(t),fc(e))}function fc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ei(t,e){return t?It(Object.create(null),t,e):e}function sf(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:It(Object.create(null),tf(t),tf(e??{})):e}function EE(t,e){if(!t)return e;if(!e)return t;const n=It(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function fm(){return{app:null,config:{isNativeTag:Rp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wE=0;function TE(t,e){return function(r,s=null){ge(r)||(r=It({},r)),s!=null&&!xe(s)&&(s=null);const i=fm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:wE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:sw,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ge(f.install)?(o.add(f),f.install(u,...p)):ge(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const y=u._ceVNode||Lt(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),c=!0,u._container=f,f.__vue_app__=u,qa(y.component)}},onUnmount(f){l.push(f)},unmount(){c&&(kn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=es;es=u;try{return f()}finally{es=p}}};return u}}let es=null;function zo(t,e){if(Tt){let n=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===n&&(n=Tt.provides=Object.create(r)),n[t]=e}}function cn(t,e,n=!1){const r=Pm();if(r||es){let s=es?es._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function IE(){return!!(Pm()||es)}const dm={},pm=()=>Object.create(dm),mm=t=>Object.getPrototypeOf(t)===dm;function bE(t,e,n,r=!1){const s={},i=pm();t.propsDefaults=Object.create(null),gm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Jp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function AE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Se(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ha(t.emitsOptions,m))continue;const y=e[m];if(c)if(ke(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const V=Jt(m);s[V]=dc(c,l,V,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{gm(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!ke(e,p)&&((f=fs(p))===p||!ke(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=dc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Bn(t.attrs,"set","")}function gm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Si(c))continue;const u=e[c];let f;s&&ke(s,f=Jt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ha(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Se(n),u=l||Ve;for(let f=0;f<i.length;f++){const p=i[f];n[p]=dc(s,c,p,u[p],t,!ke(u,p))}}return o}function dc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=co(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===fs(n))&&(r=!0))}return r}const RE=new WeakMap;function _m(t,e,n=!1){const r=n?RE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const f=p=>{c=!0;const[m,y]=_m(p,e,!0);It(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return xe(t)&&r.set(t,Ds),Ds;if(ue(i))for(let f=0;f<i.length;f++){const p=Jt(i[f]);of(p)&&(o[p]=Ve)}else if(i)for(const f in i){const p=Jt(f);if(of(p)){const m=i[f],y=o[p]=ue(m)||ge(m)?{type:m}:It({},m),V=y.type;let N=!1,D=!0;if(ue(V))for(let L=0;L<V.length;++L){const M=V[L],C=ge(M)&&M.name;if(C==="Boolean"){N=!0;break}else C==="String"&&(D=!1)}else N=ge(V)&&V.name==="Boolean";y[0]=N,y[1]=D,(N||ke(y,"default"))&&l.push(p)}}const u=[o,l];return xe(t)&&r.set(t,u),u}function of(t){return t[0]!=="$"&&!Si(t)}const lu=t=>t==="_"||t==="_ctx"||t==="$stable",cu=t=>ue(t)?t.map(yn):[yn(t)],SE=(t,e,n)=>{if(e._n)return e;const r=Yv((...s)=>cu(e(...s)),n);return r._c=!1,r},ym=(t,e,n)=>{const r=t._ctx;for(const s in t){if(lu(s))continue;const i=t[s];if(ge(i))e[s]=SE(s,i,r);else if(i!=null){const o=cu(i);e[s]=()=>o}}},vm=(t,e)=>{const n=cu(e);t.slots.default=()=>n},Em=(t,e,n)=>{for(const r in e)(n||!lu(r))&&(t[r]=e[r])},CE=(t,e,n)=>{const r=t.slots=pm();if(t.vnode.shapeFlag&32){const s=e._;s?(Em(r,e,n),n&&kp(r,"_",s,!0)):ym(e,r)}else e&&vm(t,e)},PE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Em(s,e,n):(i=!e.$stable,ym(e,s)),o=e}else e&&(vm(t,e),o={default:1});if(i)for(const l in s)!lu(l)&&o[l]==null&&delete s[l]},zt=zE;function kE(t){return DE(t)}function DE(t,e){const n=Fa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=vn,insertStaticContent:V}=t,N=(T,A,k,B=null,$=null,U=null,Y=void 0,G=null,q=!!A.dynamicChildren)=>{if(T===A)return;T&&!yi(T,A)&&(B=F(T),ot(T,$,U,!0),T=null),A.patchFlag===-2&&(q=!1,A.dynamicChildren=null);const{type:W,ref:le,shapeFlag:X}=A;switch(W){case za:D(T,A,k,B);break;case Nr:L(T,A,k,B);break;case Fl:T==null&&M(A,k,B,Y);break;case Ce:R(T,A,k,B,$,U,Y,G,q);break;default:X&1?z(T,A,k,B,$,U,Y,G,q):X&6?I(T,A,k,B,$,U,Y,G,q):(X&64||X&128)&&W.process(T,A,k,B,$,U,Y,G,q,ie)}le!=null&&$?ki(le,T&&T.ref,U,A||T,!A):le==null&&T&&T.ref!=null&&ki(T.ref,null,U,T,!0)},D=(T,A,k,B)=>{if(T==null)r(A.el=l(A.children),k,B);else{const $=A.el=T.el;A.children!==T.children&&u($,A.children)}},L=(T,A,k,B)=>{T==null?r(A.el=c(A.children||""),k,B):A.el=T.el},M=(T,A,k,B)=>{[T.el,T.anchor]=V(T.children,A,k,B,T.el,T.anchor)},C=({el:T,anchor:A},k,B)=>{let $;for(;T&&T!==A;)$=m(T),r(T,k,B),T=$;r(A,k,B)},P=({el:T,anchor:A})=>{let k;for(;T&&T!==A;)k=m(T),s(T),T=k;s(A)},z=(T,A,k,B,$,U,Y,G,q)=>{A.type==="svg"?Y="svg":A.type==="math"&&(Y="mathml"),T==null?Z(A,k,B,$,U,Y,G,q):v(T,A,$,U,Y,G,q)},Z=(T,A,k,B,$,U,Y,G)=>{let q,W;const{props:le,shapeFlag:X,transition:oe,dirs:ce}=T;if(q=T.el=o(T.type,U,le&&le.is,le),X&8?f(q,T.children):X&16&&_(T.children,q,null,B,$,Ul(T,U),Y,G),ce&&Gr(T,null,B,"created"),b(q,T,T.scopeId,Y,B),le){for(const Ne in le)Ne!=="value"&&!Si(Ne)&&i(q,Ne,null,le[Ne],U,B);"value"in le&&i(q,"value",null,le.value,U),(W=le.onVnodeBeforeMount)&&mn(W,B,T)}ce&&Gr(T,null,B,"beforeMount");const ye=NE($,oe);ye&&oe.beforeEnter(q),r(q,A,k),((W=le&&le.onVnodeMounted)||ye||ce)&&zt(()=>{W&&mn(W,B,T),ye&&oe.enter(q),ce&&Gr(T,null,B,"mounted")},$)},b=(T,A,k,B,$)=>{if(k&&y(T,k),B)for(let U=0;U<B.length;U++)y(T,B[U]);if($){let U=$.subTree;if(A===U||Rm(U.type)&&(U.ssContent===A||U.ssFallback===A)){const Y=$.vnode;b(T,Y,Y.scopeId,Y.slotScopeIds,$.parent)}}},_=(T,A,k,B,$,U,Y,G,q=0)=>{for(let W=q;W<T.length;W++){const le=T[W]=G?_r(T[W]):yn(T[W]);N(null,le,A,k,B,$,U,Y,G)}},v=(T,A,k,B,$,U,Y)=>{const G=A.el=T.el;let{patchFlag:q,dynamicChildren:W,dirs:le}=A;q|=T.patchFlag&16;const X=T.props||Ve,oe=A.props||Ve;let ce;if(k&&Kr(k,!1),(ce=oe.onVnodeBeforeUpdate)&&mn(ce,k,A,T),le&&Gr(A,T,k,"beforeUpdate"),k&&Kr(k,!0),(X.innerHTML&&oe.innerHTML==null||X.textContent&&oe.textContent==null)&&f(G,""),W?w(T.dynamicChildren,W,G,k,B,Ul(A,$),U):Y||be(T,A,G,null,k,B,Ul(A,$),U,!1),q>0){if(q&16)E(G,X,oe,k,$);else if(q&2&&X.class!==oe.class&&i(G,"class",null,oe.class,$),q&4&&i(G,"style",X.style,oe.style,$),q&8){const ye=A.dynamicProps;for(let Ne=0;Ne<ye.length;Ne++){const Re=ye[Ne],mt=X[Re],gt=oe[Re];(gt!==mt||Re==="value")&&i(G,Re,mt,gt,$,k)}}q&1&&T.children!==A.children&&f(G,A.children)}else!Y&&W==null&&E(G,X,oe,k,$);((ce=oe.onVnodeUpdated)||le)&&zt(()=>{ce&&mn(ce,k,A,T),le&&Gr(A,T,k,"updated")},B)},w=(T,A,k,B,$,U,Y)=>{for(let G=0;G<A.length;G++){const q=T[G],W=A[G],le=q.el&&(q.type===Ce||!yi(q,W)||q.shapeFlag&198)?p(q.el):k;N(q,W,le,null,B,$,U,Y,!0)}},E=(T,A,k,B,$)=>{if(A!==k){if(A!==Ve)for(const U in A)!Si(U)&&!(U in k)&&i(T,U,A[U],null,$,B);for(const U in k){if(Si(U))continue;const Y=k[U],G=A[U];Y!==G&&U!=="value"&&i(T,U,G,Y,$,B)}"value"in k&&i(T,"value",A.value,k.value,$)}},R=(T,A,k,B,$,U,Y,G,q)=>{const W=A.el=T?T.el:l(""),le=A.anchor=T?T.anchor:l("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:ce}=A;ce&&(G=G?G.concat(ce):ce),T==null?(r(W,k,B),r(le,k,B),_(A.children||[],k,le,$,U,Y,G,q)):X>0&&X&64&&oe&&T.dynamicChildren?(w(T.dynamicChildren,oe,k,$,U,Y,G),(A.key!=null||$&&A===$.subTree)&&wm(T,A,!0)):be(T,A,k,le,$,U,Y,G,q)},I=(T,A,k,B,$,U,Y,G,q)=>{A.slotScopeIds=G,T==null?A.shapeFlag&512?$.ctx.activate(A,k,B,Y,q):He(A,k,B,$,U,Y,q):dt(T,A,q)},He=(T,A,k,B,$,U,Y)=>{const G=T.component=JE(T,B,$);if(am(T)&&(G.ctx.renderer=ie),XE(G,!1,Y),G.asyncDep){if($&&$.registerDep(G,Me,Y),!T.el){const q=G.subTree=Lt(Nr);L(null,q,A,k),T.placeholder=q.el}}else Me(G,T,A,k,$,U,Y)},dt=(T,A,k)=>{const B=A.component=T.component;if($E(T,A,k))if(B.asyncDep&&!B.asyncResolved){me(B,A,k);return}else B.next=A,B.update();else A.el=T.el,B.vnode=A},Me=(T,A,k,B,$,U,Y)=>{const G=()=>{if(T.isMounted){let{next:X,bu:oe,u:ce,parent:ye,vnode:Ne}=T;{const $t=Tm(T);if($t){X&&(X.el=Ne.el,me(T,X,Y)),$t.asyncDep.then(()=>{T.isUnmounted||G()});return}}let Re=X,mt;Kr(T,!1),X?(X.el=Ne.el,me(T,X,Y)):X=Ne,oe&&Ho(oe),(mt=X.props&&X.props.onVnodeBeforeUpdate)&&mn(mt,ye,X,Ne),Kr(T,!0);const gt=lf(T),jt=T.subTree;T.subTree=gt,N(jt,gt,p(jt.el),F(jt),T,$,U),X.el=gt.el,Re===null&&HE(T,gt.el),ce&&zt(ce,$),(mt=X.props&&X.props.onVnodeUpdated)&&zt(()=>mn(mt,ye,X,Ne),$)}else{let X;const{el:oe,props:ce}=A,{bm:ye,m:Ne,parent:Re,root:mt,type:gt}=T,jt=Di(A);Kr(T,!1),ye&&Ho(ye),!jt&&(X=ce&&ce.onVnodeBeforeMount)&&mn(X,Re,A),Kr(T,!0);{mt.ce&&mt.ce._def.shadowRoot!==!1&&mt.ce._injectChildStyle(gt);const $t=T.subTree=lf(T);N(null,$t,k,B,T,$,U),A.el=$t.el}if(Ne&&zt(Ne,$),!jt&&(X=ce&&ce.onVnodeMounted)){const $t=A;zt(()=>mn(X,Re,$t),$)}(A.shapeFlag&256||Re&&Di(Re.vnode)&&Re.vnode.shapeFlag&256)&&T.a&&zt(T.a,$),T.isMounted=!0,A=k=B=null}};T.scope.on();const q=T.effect=new Lp(G);T.scope.off();const W=T.update=q.run.bind(q),le=T.job=q.runIfDirty.bind(q);le.i=T,le.id=T.uid,q.scheduler=()=>ou(le),Kr(T,!0),W()},me=(T,A,k)=>{A.component=T;const B=T.vnode.props;T.vnode=A,T.next=null,AE(T,A.props,B,k),PE(T,A.children,k),Jn(),Xh(T),Xn()},be=(T,A,k,B,$,U,Y,G,q=!1)=>{const W=T&&T.children,le=T?T.shapeFlag:0,X=A.children,{patchFlag:oe,shapeFlag:ce}=A;if(oe>0){if(oe&128){fn(W,X,k,B,$,U,Y,G,q);return}else if(oe&256){Ot(W,X,k,B,$,U,Y,G,q);return}}ce&8?(le&16&&pt(W,$,U),X!==W&&f(k,X)):le&16?ce&16?fn(W,X,k,B,$,U,Y,G,q):pt(W,$,U,!0):(le&8&&f(k,""),ce&16&&_(X,k,B,$,U,Y,G,q))},Ot=(T,A,k,B,$,U,Y,G,q)=>{T=T||Ds,A=A||Ds;const W=T.length,le=A.length,X=Math.min(W,le);let oe;for(oe=0;oe<X;oe++){const ce=A[oe]=q?_r(A[oe]):yn(A[oe]);N(T[oe],ce,k,null,$,U,Y,G,q)}W>le?pt(T,$,U,!0,!1,X):_(A,k,B,$,U,Y,G,q,X)},fn=(T,A,k,B,$,U,Y,G,q)=>{let W=0;const le=A.length;let X=T.length-1,oe=le-1;for(;W<=X&&W<=oe;){const ce=T[W],ye=A[W]=q?_r(A[W]):yn(A[W]);if(yi(ce,ye))N(ce,ye,k,null,$,U,Y,G,q);else break;W++}for(;W<=X&&W<=oe;){const ce=T[X],ye=A[oe]=q?_r(A[oe]):yn(A[oe]);if(yi(ce,ye))N(ce,ye,k,null,$,U,Y,G,q);else break;X--,oe--}if(W>X){if(W<=oe){const ce=oe+1,ye=ce<le?A[ce].el:B;for(;W<=oe;)N(null,A[W]=q?_r(A[W]):yn(A[W]),k,ye,$,U,Y,G,q),W++}}else if(W>oe)for(;W<=X;)ot(T[W],$,U,!0),W++;else{const ce=W,ye=W,Ne=new Map;for(W=ye;W<=oe;W++){const at=A[W]=q?_r(A[W]):yn(A[W]);at.key!=null&&Ne.set(at.key,W)}let Re,mt=0;const gt=oe-ye+1;let jt=!1,$t=0;const rn=new Array(gt);for(W=0;W<gt;W++)rn[W]=0;for(W=ce;W<=X;W++){const at=T[W];if(mt>=gt){ot(at,$,U,!0);continue}let rt;if(at.key!=null)rt=Ne.get(at.key);else for(Re=ye;Re<=oe;Re++)if(rn[Re-ye]===0&&yi(at,A[Re])){rt=Re;break}rt===void 0?ot(at,$,U,!0):(rn[rt-ye]=W+1,rt>=$t?$t=rt:jt=!0,N(at,A[rt],k,null,$,U,Y,G,q),mt++)}const vs=jt?OE(rn):Ds;for(Re=vs.length-1,W=gt-1;W>=0;W--){const at=ye+W,rt=A[at],ni=A[at+1],$r=at+1<le?ni.el||ni.placeholder:B;rn[W]===0?N(null,rt,k,$r,$,U,Y,G,q):jt&&(Re<0||W!==vs[Re]?Bt(rt,k,$r,2):Re--)}}},Bt=(T,A,k,B,$=null)=>{const{el:U,type:Y,transition:G,children:q,shapeFlag:W}=T;if(W&6){Bt(T.component.subTree,A,k,B);return}if(W&128){T.suspense.move(A,k,B);return}if(W&64){Y.move(T,A,k,ie);return}if(Y===Ce){r(U,A,k);for(let X=0;X<q.length;X++)Bt(q[X],A,k,B);r(T.anchor,A,k);return}if(Y===Fl){C(T,A,k);return}if(B!==2&&W&1&&G)if(B===0)G.beforeEnter(U),r(U,A,k),zt(()=>G.enter(U),$);else{const{leave:X,delayLeave:oe,afterLeave:ce}=G,ye=()=>{T.ctx.isUnmounted?s(U):r(U,A,k)},Ne=()=>{U._isLeaving&&U[Zv](!0),X(U,()=>{ye(),ce&&ce()})};oe?oe(U,ye,Ne):Ne()}else r(U,A,k)},ot=(T,A,k,B=!1,$=!1)=>{const{type:U,props:Y,ref:G,children:q,dynamicChildren:W,shapeFlag:le,patchFlag:X,dirs:oe,cacheIndex:ce}=T;if(X===-2&&($=!1),G!=null&&(Jn(),ki(G,null,k,T,!0),Xn()),ce!=null&&(A.renderCache[ce]=void 0),le&256){A.ctx.deactivate(T);return}const ye=le&1&&oe,Ne=!Di(T);let Re;if(Ne&&(Re=Y&&Y.onVnodeBeforeUnmount)&&mn(Re,A,T),le&6)nn(T.component,k,B);else{if(le&128){T.suspense.unmount(k,B);return}ye&&Gr(T,null,A,"beforeUnmount"),le&64?T.type.remove(T,A,k,ie,B):W&&!W.hasOnce&&(U!==Ce||X>0&&X&64)?pt(W,A,k,!1,!0):(U===Ce&&X&384||!$&&le&16)&&pt(q,A,k),B&&Mn(T)}(Ne&&(Re=Y&&Y.onVnodeUnmounted)||ye)&&zt(()=>{Re&&mn(Re,A,T),ye&&Gr(T,null,A,"unmounted")},k)},Mn=T=>{const{type:A,el:k,anchor:B,transition:$}=T;if(A===Ce){tn(k,B);return}if(A===Fl){P(T);return}const U=()=>{s(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(T.shapeFlag&1&&$&&!$.persisted){const{leave:Y,delayLeave:G}=$,q=()=>Y(k,U);G?G(T.el,U,q):q()}else U()},tn=(T,A)=>{let k;for(;T!==A;)k=m(T),s(T),T=k;s(A)},nn=(T,A,k)=>{const{bum:B,scope:$,job:U,subTree:Y,um:G,m:q,a:W}=T;af(q),af(W),B&&Ho(B),$.stop(),U&&(U.flags|=8,ot(Y,T,A,k)),G&&zt(G,A),zt(()=>{T.isUnmounted=!0},A)},pt=(T,A,k,B=!1,$=!1,U=0)=>{for(let Y=U;Y<T.length;Y++)ot(T[Y],A,k,B,$)},F=T=>{if(T.shapeFlag&6)return F(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const A=m(T.anchor||T.el),k=A&&A[Jv];return k?m(k):A};let ee=!1;const J=(T,A,k)=>{T==null?A._vnode&&ot(A._vnode,null,null,!0):N(A._vnode||null,T,A,null,null,null,k),A._vnode=T,ee||(ee=!0,Xh(),nm(),ee=!1)},ie={p:N,um:ot,m:Bt,r:Mn,mt:He,mc:_,pc:be,pbc:w,n:F,o:t};return{render:J,hydrate:void 0,createApp:TE(J)}}function Ul({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function NE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wm(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=_r(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&wm(o,l)),l.type===za&&l.patchFlag!==-1&&(l.el=o.el),l.type===Nr&&!l.el&&(l.el=o.el)}}function OE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Tm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tm(e)}function af(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const VE=Symbol.for("v-scx"),xE=()=>cn(VE);function ts(t,e,n){return Im(t,e,n)}function Im(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,l=It({},n),c=e&&r||!e&&i!=="post";let u;if(Gi){if(i==="sync"){const y=xE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=vn,y.resume=vn,y.pause=vn,y}}const f=Tt;l.call=(y,V,N)=>kn(y,f,V,N);let p=!1;i==="post"?l.scheduler=y=>{zt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,V)=>{V?y():ou(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=Wv(t,e,l);return Gi&&(u?u.push(m):c&&m()),m}function ME(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?bm(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=co(this),l=Im(s,i.bind(r),n);return o(),l}function bm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const LE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${fs(e)}Modifiers`];function UE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&LE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Je(f)?f.trim():f)),o.number&&(s=n.map(ra)));let l,c=r[l=Nl(e)]||r[l=Nl(Jt(e))];!c&&i&&(c=r[l=Nl(fs(e))]),c&&kn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,kn(u,t,6,s)}}const FE=new WeakMap;function Am(t,e,n=!1){const r=n?FE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=u=>{const f=Am(u,e,!0);f&&(l=!0,It(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(xe(t)&&r.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):It(o,i),xe(t)&&r.set(t,o),o)}function Ha(t,e){return!t||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,fs(e))||ke(t,e))}function lf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:y,ctx:V,inheritAttrs:N}=t,D=la(t);let L,M;try{if(n.shapeFlag&4){const P=s||r,z=P;L=yn(u.call(z,P,f,p,y,m,V)),M=l}else{const P=e;L=yn(P.length>1?P(p,{attrs:l,slots:o,emit:c}):P(p,null)),M=e.props?l:BE(l)}}catch(P){Oi.length=0,ja(P,t,1),L=Lt(Nr)}let C=L;if(M&&N!==!1){const P=Object.keys(M),{shapeFlag:z}=C;P.length&&z&7&&(i&&P.some(Kc)&&(M=jE(M,i)),C=Fs(C,M,!1,!0))}return n.dirs&&(C=Fs(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&au(C,n.transition),L=C,la(D),L}const BE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},jE=(t,e)=>{const n={};for(const r in t)(!Kc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $E(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?cf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Ha(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?cf(r,o,u):!0:!!o;return!1}function cf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ha(n,i))return!0}return!1}function HE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Rm=t=>t.__isSuspense;function zE(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):Qv(t)}const Ce=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),Nr=Symbol.for("v-cmt"),Fl=Symbol.for("v-stc"),Oi=[];let Wt=null;function Q(t=!1){Oi.push(Wt=t?null:[])}function qE(){Oi.pop(),Wt=Oi[Oi.length-1]||null}let Wi=1;function ha(t,e=!1){Wi+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function Sm(t){return t.dynamicChildren=Wi>0?Wt||Ds:null,qE(),Wi>0&&Wt&&Wt.push(t),t}function re(t,e,n,r,s,i){return Sm(S(t,e,n,r,s,i,!0))}function kt(t,e,n,r,s){return Sm(Lt(t,e,n,r,s,!0))}function fa(t){return t?t.__v_isVNode===!0:!1}function yi(t,e){return t.type===e.type&&t.key===e.key}const Cm=({key:t})=>t??null,qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ke(t)||ge(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function S(t,e=null,n=null,r=0,s=null,i=t===Ce?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cm(e),ref:e&&qo(e),scopeId:sm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qt};return l?(uu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),Wi>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const Lt=WE;function WE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===dE)&&(t=Nr),fa(t)){const l=Fs(t,e,!0);return n&&uu(l,n),Wi>0&&!i&&Wt&&(l.shapeFlag&6?Wt[Wt.indexOf(t)]=l:Wt.push(l)),l.patchFlag=-2,l}if(rw(t)&&(t=t.__vccOpts),e){e=GE(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=Yn(l)),xe(c)&&(su(c)&&!ue(c)&&(c=It({},c)),e.style=rs(c))}const o=Je(t)?1:Rm(t)?128:Xv(t)?64:xe(t)?4:ge(t)?2:0;return S(t,e,n,r,s,o,i,!0)}function GE(t){return t?su(t)||mm(t)?It({},t):t:null}function Fs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?KE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Cm(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(qo(e)):[i,qo(e)]:qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ce?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fs(t.ssContent),ssFallback:t.ssFallback&&Fs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&au(f,c.clone(f)),f}function Dt(t=" ",e=0){return Lt(za,null,t,e)}function Ut(t="",e=!1){return e?(Q(),kt(Nr,null,t)):Lt(Nr,null,t)}function yn(t){return t==null||typeof t=="boolean"?Lt(Nr):ue(t)?Lt(Ce,null,t.slice()):fa(t)?_r(t):Lt(za,null,String(t))}function _r(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fs(t)}function uu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!mm(e)?e._ctx=qt:s===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),r&64?(n=16,e=[Dt(e)]):n=8);t.children=e,t.shapeFlag|=n}function KE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yn([e.class,r.class]));else if(s==="style")e.style=rs([e.style,r.style]);else if(Ma(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function mn(t,e,n,r=null){kn(t,e,7,[n,r])}const QE=fm();let YE=0;function JE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||QE,i={uid:YE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_m(r,s),emitsOptions:Am(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=UE.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const Pm=()=>Tt||qt;let da,pc;{const t=Fa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};da=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),pc=e("__VUE_SSR_SETTERS__",n=>Gi=n)}const co=t=>{const e=Tt;return da(t),t.scope.on(),()=>{t.scope.off(),da(e)}},uf=()=>{Tt&&Tt.scope.off(),da(null)};function km(t){return t.vnode.shapeFlag&4}let Gi=!1;function XE(t,e=!1,n=!1){e&&pc(e);const{props:r,children:s}=t.vnode,i=km(t);bE(t,r,i,e),CE(t,s,n||e);const o=i?ZE(t,e):void 0;return e&&pc(!1),o}function ZE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,mE);const{setup:r}=n;if(r){Jn();const s=t.setupContext=r.length>1?tw(t):null,i=co(t),o=ao(r,t,0,[t.props,s]),l=Sp(o);if(Xn(),i(),(l||t.sp)&&!Di(t)&&om(t),l){if(o.then(uf,uf),e)return o.then(c=>{hf(t,c)}).catch(c=>{ja(c,t,0)});t.asyncDep=o}else hf(t,o)}else Dm(t)}function hf(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Zp(e)),Dm(t)}function Dm(t,e,n){const r=t.type;t.render||(t.render=r.render||vn);{const s=co(t);Jn();try{gE(t)}finally{Xn(),s()}}}const ew={get(t,e){return Et(t,"get",""),t[e]}};function tw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ew),slots:t.slots,emit:t.emit,expose:e}}function qa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zp(iu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ni)return Ni[n](t)},has(e,n){return n in e||n in Ni}})):t.proxy}function nw(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function rw(t){return ge(t)&&"__vccOpts"in t}const Fe=(t,e)=>zv(t,e,Gi);function Nm(t,e,n){try{ha(-1);const r=arguments.length;return r===2?xe(e)&&!ue(e)?fa(e)?Lt(t,null,[e]):Lt(t,e):Lt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fa(n)&&(n=[n]),Lt(t,e,n))}finally{ha(1)}}const sw="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mc;const ff=typeof window<"u"&&window.trustedTypes;if(ff)try{mc=ff.createPolicy("vue",{createHTML:t=>t})}catch{}const Om=mc?t=>mc.createHTML(t):t=>t,iw="http://www.w3.org/2000/svg",ow="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,df=Fn&&Fn.createElement("template"),aw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Fn.createElementNS(iw,t):e==="mathml"?Fn.createElementNS(ow,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{df.innerHTML=Om(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=df.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lw=Symbol("_vtc");function cw(t,e,n){const r=t[lw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pf=Symbol("_vod"),uw=Symbol("_vsh"),hw=Symbol(""),fw=/(?:^|;)\s*display\s*:/;function dw(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Wo(r,l,"")}else for(const o in e)n[o]==null&&Wo(r,o,"");for(const o in n)o==="display"&&(i=!0),Wo(r,o,n[o])}else if(s){if(e!==n){const o=r[hw];o&&(n+=";"+o),r.cssText=n,i=fw.test(n)}}else e&&t.removeAttribute("style");pf in t&&(t[pf]=i?r.display:"",t[uw]&&(r.display="none"))}const mf=/\s*!important$/;function Wo(t,e,n){if(ue(n))n.forEach(r=>Wo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pw(t,e);mf.test(n)?t.setProperty(fs(r),n.replace(mf,""),"important"):t[r]=n}}const gf=["Webkit","Moz","ms"],Bl={};function pw(t,e){const n=Bl[e];if(n)return n;let r=Jt(e);if(r!=="filter"&&r in t)return Bl[e]=r;r=Ua(r);for(let s=0;s<gf.length;s++){const i=gf[s]+r;if(i in t)return Bl[e]=i}return e}const _f="http://www.w3.org/1999/xlink";function yf(t,e,n,r,s,i=mv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_f,e.slice(6,e.length)):t.setAttributeNS(_f,e,n):n==null||i&&!Dp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Pn(n)?String(n):n)}function vf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Om(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Dp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function $n(t,e,n,r){t.addEventListener(e,n,r)}function mw(t,e,n,r){t.removeEventListener(e,n,r)}const Ef=Symbol("_vei");function gw(t,e,n,r,s=null){const i=t[Ef]||(t[Ef]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=_w(e);if(r){const u=i[e]=Ew(r,s);$n(t,l,u,c)}else o&&(mw(t,l,o,c),i[e]=void 0)}}const wf=/(?:Once|Passive|Capture)$/;function _w(t){let e;if(wf.test(t)){e={};let r;for(;r=t.match(wf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fs(t.slice(2)),e]}let jl=0;const yw=Promise.resolve(),vw=()=>jl||(yw.then(()=>jl=0),jl=Date.now());function Ew(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kn(ww(r,n.value),e,5,[r])};return n.value=t,n.attached=vw(),n}function ww(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Tw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?cw(t,r,o):e==="style"?dw(t,n,r):Ma(e)?Kc(e)||gw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iw(t,e,r,o))?(vf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?vf(t,Jt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yf(t,e,r,o))};function Iw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tf(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tf(e)&&Je(n)?!1:e in t}const Or=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Ho(e,n):e};function bw(t){t.target.composing=!0}function If(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yt=Symbol("_assign"),Nt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Yt]=Or(s);const i=r||s.props&&s.props.type==="number";$n(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ra(l)),t[Yt](l)}),n&&$n(t,"change",()=>{t.value=t.value.trim()}),e||($n(t,"compositionstart",bw),$n(t,"compositionend",If),$n(t,"change",If))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Yt]=Or(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ra(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Vm={deep:!0,created(t,e,n){t[Yt]=Or(n),$n(t,"change",()=>{const r=t._modelValue,s=Bs(t),i=t.checked,o=t[Yt];if(ue(r)){const l=Jc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Qs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(xm(t,i))})},mounted:bf,beforeUpdate(t,e,n){t[Yt]=Or(n),bf(t,e,n)}};function bf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=Jc(e,r.props.value)>-1;else if(Qs(e))s=e.has(r.props.value);else{if(e===n)return;s=ss(e,xm(t,!0))}t.checked!==s&&(t.checked=s)}const Aw={created(t,{value:e},n){t.checked=ss(e,n.props.value),t[Yt]=Or(n),$n(t,"change",()=>{t[Yt](Bs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Yt]=Or(r),e!==n&&(t.checked=ss(e,r.props.value))}},Rr={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Qs(e);$n(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ra(Bs(o)):Bs(o));t[Yt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,lo(()=>{t._assigning=!1})}),t[Yt]=Or(r)},mounted(t,{value:e}){Af(t,e)},beforeUpdate(t,e,n){t[Yt]=Or(n)},updated(t,{value:e}){t._assigning||Af(t,e)}};function Af(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!Qs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Bs(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Jc(e,l)>-1}else o.selected=e.has(l);else if(ss(Bs(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Bs(t){return"_value"in t?t._value:t.value}function xm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Rw={created(t,e,n){xo(t,e,n,null,"created")},mounted(t,e,n){xo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){xo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){xo(t,e,n,r,"updated")}};function Sw(t,e){switch(t){case"SELECT":return Rr;case"TEXTAREA":return Nt;default:switch(e){case"checkbox":return Vm;case"radio":return Aw;default:return Nt}}}function xo(t,e,n,r,s){const o=Sw(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const Cw=["ctrl","shift","alt","meta"],Pw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Cw.some(n=>t[`${n}Key`]&&!e.includes(n))},hu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=Pw[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},kw=It({patchProp:Tw},aw);let Rf;function Dw(){return Rf||(Rf=kE(kw))}const Nw=((...t)=>{const e=Dw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Vw(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ow(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Ow(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Vw(t){return Je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Mm;const Wa=t=>Mm=t,Lm=Symbol();function gc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vi||(Vi={}));function xw(){const t=xp(!0),e=t.run(()=>ne({}));let n=[],r=[];const s=iu({install(i){Wa(s),s._a=i,i.provide(Lm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Um=()=>{};function Sf(t,e,n,r=Um){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&Mp()&&_v(s),s}function bs(t,...e){t.forEach(n=>{n(...e)})}const Mw=t=>t(),Cf=Symbol(),$l=Symbol();function _c(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];gc(s)&&gc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!Ar(r)?t[n]=_c(s,r):t[n]=r}return t}const Lw=Symbol();function Uw(t){return!gc(t)||!Object.prototype.hasOwnProperty.call(t,Lw)}const{assign:mr}=Object;function Fw(t){return!!(Ke(t)&&t.effect)}function Bw(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=Bv(n.state.value[t]);return mr(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=iu(Fe(()=>{Wa(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return c=Fm(t,u,e,n,r,!0),c}function Fm(t,e,n={},r,s,i){let o;const l=mr({actions:{}},n),c={deep:!0};let u,f,p=new Set,m=new Set,y;const V=r.state.value[t];!i&&!V&&(r.state.value[t]={}),ne({});let N;function D(_){let v;u=f=!1,typeof _=="function"?(_(r.state.value[t]),v={type:Vi.patchFunction,storeId:t,events:y}):(_c(r.state.value[t],_),v={type:Vi.patchObject,payload:_,storeId:t,events:y});const w=N=Symbol();lo().then(()=>{N===w&&(u=!0)}),f=!0,bs(p,v,r.state.value[t])}const L=i?function(){const{state:v}=n,w=v?v():{};this.$patch(E=>{mr(E,w)})}:Um;function M(){o.stop(),p.clear(),m.clear(),r._s.delete(t)}const C=(_,v="")=>{if(Cf in _)return _[$l]=v,_;const w=function(){Wa(r);const E=Array.from(arguments),R=new Set,I=new Set;function He(me){R.add(me)}function dt(me){I.add(me)}bs(m,{args:E,name:w[$l],store:z,after:He,onError:dt});let Me;try{Me=_.apply(this&&this.$id===t?this:z,E)}catch(me){throw bs(I,me),me}return Me instanceof Promise?Me.then(me=>(bs(R,me),me)).catch(me=>(bs(I,me),Promise.reject(me))):(bs(R,Me),Me)};return w[Cf]=!0,w[$l]=v,w},P={_p:r,$id:t,$onAction:Sf.bind(null,m),$patch:D,$reset:L,$subscribe(_,v={}){const w=Sf(p,_,v.detached,()=>E()),E=o.run(()=>ts(()=>r.state.value[t],R=>{(v.flush==="sync"?f:u)&&_({storeId:t,type:Vi.direct,events:y},R)},mr({},c,v)));return w},$dispose:M},z=oo(P);r._s.set(t,z);const b=(r._a&&r._a.runWithContext||Mw)(()=>r._e.run(()=>(o=xp()).run(()=>e({action:C}))));for(const _ in b){const v=b[_];if(Ke(v)&&!Fw(v)||Ar(v))i||(V&&Uw(v)&&(Ke(v)?v.value=V[_]:_c(v,V[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const w=C(v,_);b[_]=w,l.actions[_]=v}}return mr(z,b),mr(Se(z),b),Object.defineProperty(z,"$state",{get:()=>r.state.value[t],set:_=>{D(v=>{mr(v,_)})}}),r._p.forEach(_=>{mr(z,o.run(()=>_({store:z,app:r._a,pinia:r,options:l})))}),V&&i&&n.hydrate&&n.hydrate(z.$state,V),u=!0,f=!0,z}/*! #__NO_SIDE_EFFECTS__ */function jw(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=IE();return o=o||(c?cn(Lm,null):null),o&&Wa(o),o=Mm,o._s.has(t)||(s?Fm(t,e,r,o):Bw(t,r,o)),o._s.get(t)}return i.$id=t,i}const $w={class:"app_holder"},Hw={__name:"App",setup(t){return(e,n)=>{const r=fE("router-view");return Q(),re("div",$w,[Lt(r)])}}};/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Rs=typeof document<"u";function Bm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Bm(t.default)}const Pe=Object.assign;function Hl(t,e){const n={};for(const r in e){const s=e[r];n[r]=hn(s)?s.map(t):t(s)}return n}const xi=()=>{},hn=Array.isArray;function Pf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const jm=/#/g,qw=/&/g,Ww=/\//g,Gw=/=/g,Kw=/\?/g,$m=/\+/g,Qw=/%5B/g,Yw=/%5D/g,Hm=/%5E/g,Jw=/%60/g,zm=/%7B/g,Xw=/%7C/g,qm=/%7D/g,Zw=/%20/g;function fu(t){return t==null?"":encodeURI(""+t).replace(Xw,"|").replace(Qw,"[").replace(Yw,"]")}function eT(t){return fu(t).replace(zm,"{").replace(qm,"}").replace(Hm,"^")}function yc(t){return fu(t).replace($m,"%2B").replace(Zw,"+").replace(jm,"%23").replace(qw,"%26").replace(Jw,"`").replace(zm,"{").replace(qm,"}").replace(Hm,"^")}function tT(t){return yc(t).replace(Gw,"%3D")}function nT(t){return fu(t).replace(jm,"%23").replace(Kw,"%3F")}function rT(t){return nT(t).replace(Ww,"%2F")}function Ki(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const sT=/\/$/,iT=t=>t.replace(sT,"");function zl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=cT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Ki(o)}}function oT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&js(e.matched[r],n.matched[s])&&Wm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lT(t[n],e[n]))return!1;return!0}function lT(t,e){return hn(t)?Df(t,e):hn(e)?Df(e,t):t===e}function Df(t,e){return hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const dr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let vc=(function(t){return t.pop="pop",t.push="push",t})({}),ql=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function uT(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iT(t)}const hT=/^[^#]+#/;function fT(t,e){return t.replace(hT,"#")+e}function dT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ga=()=>({left:window.scrollX,top:window.scrollY});function pT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=dT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nf(t,e){return(history.state?history.state.position-e:-1)+t}const Ec=new Map;function mT(t,e){Ec.set(t,e)}function gT(t){const e=Ec.get(t);return Ec.delete(t),e}function _T(t){return typeof t=="string"||t&&typeof t=="object"}function Gm(t){return typeof t=="string"||typeof t=="symbol"}let qe=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Km=Symbol("");qe.MATCHER_NOT_FOUND+"",qe.NAVIGATION_GUARD_REDIRECT+"",qe.NAVIGATION_ABORTED+"",qe.NAVIGATION_CANCELLED+"",qe.NAVIGATION_DUPLICATED+"";function $s(t,e){return Pe(new Error,{type:t,[Km]:!0},e)}function Un(t,e){return t instanceof Error&&Km in t&&(e==null||!!(t.type&e))}const yT=["params","query","hash"];function vT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of yT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function ET(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace($m," "),i=s.indexOf("="),o=Ki(i<0?s:s.slice(0,i)),l=i<0?null:Ki(s.slice(i+1));if(o in e){let c=e[o];hn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Of(t){let e="";for(let n in t){const r=t[n];if(n=tT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(r)?r.map(s=>s&&yc(s)):[r&&yc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function wT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const TT=Symbol(""),Vf=Symbol(""),Ka=Symbol(""),Qm=Symbol(""),wc=Symbol("");function vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c($s(qe.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):_T(m)?c($s(qe.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Wl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Bm(c)){const u=(c.__vccOpts||c)[e];u&&i.push(yr(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=zw(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&yr(m,n,r,o,l,s)()}))}}return i}function IT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>js(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>js(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bT=()=>location.protocol+"//"+location.host;function Ym(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),kf(l,"")}return kf(n,t)+r+s}function AT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=Ym(t,location),V=n.value,N=e.value;let D=0;if(m){if(n.value=y,e.value=m,o&&o===V){o=null;return}D=N?m.position-N.position:0}else r(y);s.forEach(L=>{L(n.value,V,{delta:D,type:vc.pop,direction:D?D>0?ql.forward:ql.back:ql.unknown})})};function c(){o=n.value}function u(m){s.push(m);const y=()=>{const V=s.indexOf(m);V>-1&&s.splice(V,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Pe({},m.state,{scroll:Ga()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function xf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ga():null}}function RT(t){const{history:e,location:n}=window,r={value:Ym(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:bT()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(c,u){i(c,Pe({},e.state,xf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const f=Pe({},s.value,e.state,{forward:c,scroll:Ga()});i(f.current,f,!0),i(c,Pe({},xf(r.value,c,null),{position:f.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function ST(t){t=uT(t);const e=RT(t),n=AT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:fT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Jr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ze=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ze||{});const CT={type:Jr.Static,value:""},PT=/[a-zA-Z0-9_]/;function kT(t){if(!t)return[[]];if(t==="/")return[[CT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=Ze.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===Ze.Static?i.push({type:Jr.Static,value:u}):n===Ze.Param||n===Ze.ParamRegExp||n===Ze.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Jr.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Ze.ParamRegExp){r=n,n=Ze.EscapeNext;continue}switch(n){case Ze.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Ze.Param):m();break;case Ze.EscapeNext:m(),n=r;break;case Ze.Param:c==="("?n=Ze.ParamRegExp:PT.test(c)?m():(p(),n=Ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Ze.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=Ze.ParamRegExpEnd:f+=c;break;case Ze.ParamRegExpEnd:p(),n=Ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===Ze.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Mf="[^/]+?",DT={sensitive:!1,strict:!1,start:!0,end:!0};var St=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(St||{});const NT=/[.+*?^${}()[\]/\\]/g;function OT(t,e){const n=Pe({},DT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[St.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=St.Segment+(n.sensitive?St.BonusCaseSensitive:0);if(m.type===Jr.Static)p||(s+="/"),s+=m.value.replace(NT,"\\$&"),y+=St.Static;else if(m.type===Jr.Param){const{value:V,repeatable:N,optional:D,regexp:L}=m;i.push({name:V,repeatable:N,optional:D});const M=L||Mf;if(M!==Mf){y+=St.BonusCustomRegExp;try{`${M}`}catch(P){throw new Error(`Invalid custom RegExp for param "${V}" (${M}): `+P.message)}}let C=N?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(C=D&&u.length<2?`(?:/${C})`:"/"+C),D&&(C+="?"),s+=C,y+=St.Dynamic,D&&(y+=St.BonusOptional),N&&(y+=St.BonusRepeatable),M===".*"&&(y+=St.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=St.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",V=i[m-1];p[V.name]=y&&V.repeatable?y.split("/"):y}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===Jr.Static)f+=y.value;else if(y.type===Jr.Param){const{value:V,repeatable:N,optional:D}=y,L=V in u?u[V]:"";if(hn(L)&&!N)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const M=hn(L)?L.join("/"):L;if(!M)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${V}"`);f+=M}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function VT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===St.Static+St.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===St.Static+St.Segment?1:-1:0}function Jm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=VT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Lf(r))return 1;if(Lf(s))return-1}return s.length-r.length}function Lf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xT={strict:!1,end:!0,sensitive:!1};function MT(t,e,n){const r=OT(kT(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function LT(t,e){const n=[],r=new Map;e=Pf(xT,e);function s(p){return r.get(p)}function i(p,m,y){const V=!y,N=Ff(p);N.aliasOf=y&&y.record;const D=Pf(e,p),L=[N];if("alias"in p){const P=typeof p.alias=="string"?[p.alias]:p.alias;for(const z of P)L.push(Ff(Pe({},N,{components:y?y.record.components:N.components,path:z,aliasOf:y?y.record:N})))}let M,C;for(const P of L){const{path:z}=P;if(m&&z[0]!=="/"){const Z=m.record.path,b=Z[Z.length-1]==="/"?"":"/";P.path=m.record.path+(z&&b+z)}if(M=MT(P,m,D),y?y.alias.push(M):(C=C||M,C!==M&&C.alias.push(M),V&&p.name&&!Bf(M)&&o(p.name)),Xm(M)&&c(M),N.children){const Z=N.children;for(let b=0;b<Z.length;b++)i(Z[b],M,y&&y.children[b])}y=y||M}return C?()=>{o(C)}:xi}function o(p){if(Gm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=BT(p,n);n.splice(m,0,p),p.record.name&&!Bf(p)&&r.set(p.record.name,p)}function u(p,m){let y,V={},N,D;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw $s(qe.MATCHER_NOT_FOUND,{location:p});D=y.record.name,V=Pe(Uf(m.params,y.keys.filter(C=>!C.optional).concat(y.parent?y.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),p.params&&Uf(p.params,y.keys.map(C=>C.name))),N=y.stringify(V)}else if(p.path!=null)N=p.path,y=n.find(C=>C.re.test(N)),y&&(V=y.parse(N),D=y.record.name);else{if(y=m.name?r.get(m.name):n.find(C=>C.re.test(m.path)),!y)throw $s(qe.MATCHER_NOT_FOUND,{location:p,currentLocation:m});D=y.record.name,V=Pe({},m.params,p.params),N=y.stringify(V)}const L=[];let M=y;for(;M;)L.unshift(M.record),M=M.parent;return{name:D,path:N,params:V,matched:L,meta:FT(L)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Uf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ff(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:UT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function UT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Bf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function FT(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function BT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Jm(t,e[i])<0?r=i:n=i+1}const s=jT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function jT(t){let e=t;for(;e=e.parent;)if(Xm(e)&&Jm(t,e)===0)return e}function Xm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jf(t){const e=cn(Ka),n=cn(Qm),r=Fe(()=>{const c=En(t.to);return e.resolve(c)}),s=Fe(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(js.bind(null,f));if(m>-1)return m;const y=$f(c[u-2]);return u>1&&$f(f)===y&&p[p.length-1].path!==y?p.findIndex(js.bind(null,c[u-2])):m}),i=Fe(()=>s.value>-1&&WT(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&Wm(n.params,r.value.params));function l(c={}){if(qT(c)){const u=e[En(t.replace)?"replace":"push"](En(t.to)).catch(xi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function $T(t){return t.length===1?t[0]:t}const HT=im({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:jf,setup(t,{slots:e}){const n=oo(jf(t)),{options:r}=cn(Ka),s=Fe(()=>({[Hf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&$T(e.default(n));return t.custom?i:Nm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zT=HT;function qT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!hn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function $f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hf=(t,e,n)=>t??e??n,GT=im({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=cn(wc),s=Fe(()=>t.route||r.value),i=cn(Vf,0),o=Fe(()=>{let u=En(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Fe(()=>s.value.matched[o.value]);zo(Vf,Fe(()=>o.value+1)),zo(TT,l),zo(wc,s);const c=ne();return ts(()=>[c.value,l.value,t.name],([u,f,p],[m,y,V])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!js(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return zf(n.default,{Component:m,route:u});const y=p.props[f],V=y?y===!0?u.params:typeof y=="function"?y(u):y:null,D=Nm(m,Pe({},V,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return zf(n.default,{Component:D,route:u})||D}}});function zf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KT=GT;function QT(t){const e=LT(t.routes,t),n=t.parseQuery||ET,r=t.stringifyQuery||Of,s=t.history,i=vi(),o=vi(),l=vi(),c=Lv(dr);let u=dr;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Hl.bind(null,F=>""+F),p=Hl.bind(null,rT),m=Hl.bind(null,Ki);function y(F,ee){let J,ie;return Gm(F)?(J=e.getRecordMatcher(F),ie=ee):ie=F,e.addRoute(ie,J)}function V(F){const ee=e.getRecordMatcher(F);ee&&e.removeRoute(ee)}function N(){return e.getRoutes().map(F=>F.record)}function D(F){return!!e.getRecordMatcher(F)}function L(F,ee){if(ee=Pe({},ee||c.value),typeof F=="string"){const k=zl(n,F,ee.path),B=e.resolve({path:k.path},ee),$=s.createHref(k.fullPath);return Pe(k,B,{params:m(B.params),hash:Ki(k.hash),redirectedFrom:void 0,href:$})}let J;if(F.path!=null)J=Pe({},F,{path:zl(n,F.path,ee.path).path});else{const k=Pe({},F.params);for(const B in k)k[B]==null&&delete k[B];J=Pe({},F,{params:p(k)}),ee.params=p(ee.params)}const ie=e.resolve(J,ee),Ee=F.hash||"";ie.params=f(m(ie.params));const T=oT(r,Pe({},F,{hash:eT(Ee),path:ie.path})),A=s.createHref(T);return Pe({fullPath:T,hash:Ee,query:r===Of?wT(F.query):F.query||{}},ie,{redirectedFrom:void 0,href:A})}function M(F){return typeof F=="string"?zl(n,F,c.value.path):Pe({},F)}function C(F,ee){if(u!==F)return $s(qe.NAVIGATION_CANCELLED,{from:ee,to:F})}function P(F){return b(F)}function z(F){return P(Pe(M(F),{replace:!0}))}function Z(F,ee){const J=F.matched[F.matched.length-1];if(J&&J.redirect){const{redirect:ie}=J;let Ee=typeof ie=="function"?ie(F,ee):ie;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=M(Ee):{path:Ee},Ee.params={}),Pe({query:F.query,hash:F.hash,params:Ee.path!=null?{}:F.params},Ee)}}function b(F,ee){const J=u=L(F),ie=c.value,Ee=F.state,T=F.force,A=F.replace===!0,k=Z(J,ie);if(k)return b(Pe(M(k),{state:typeof k=="object"?Pe({},Ee,k.state):Ee,force:T,replace:A}),ee||J);const B=J;B.redirectedFrom=ee;let $;return!T&&aT(r,ie,J)&&($=$s(qe.NAVIGATION_DUPLICATED,{to:B,from:ie}),Bt(ie,ie,!0,!1)),($?Promise.resolve($):w(B,ie)).catch(U=>Un(U)?Un(U,qe.NAVIGATION_GUARD_REDIRECT)?U:fn(U):be(U,B,ie)).then(U=>{if(U){if(Un(U,qe.NAVIGATION_GUARD_REDIRECT))return b(Pe({replace:A},M(U.to),{state:typeof U.to=="object"?Pe({},Ee,U.to.state):Ee,force:T}),ee||B)}else U=R(B,ie,!0,A,Ee);return E(B,ie,U),U})}function _(F,ee){const J=C(F,ee);return J?Promise.reject(J):Promise.resolve()}function v(F){const ee=tn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(F):F()}function w(F,ee){let J;const[ie,Ee,T]=IT(F,ee);J=Wl(ie.reverse(),"beforeRouteLeave",F,ee);for(const k of ie)k.leaveGuards.forEach(B=>{J.push(yr(B,F,ee))});const A=_.bind(null,F,ee);return J.push(A),pt(J).then(()=>{J=[];for(const k of i.list())J.push(yr(k,F,ee));return J.push(A),pt(J)}).then(()=>{J=Wl(Ee,"beforeRouteUpdate",F,ee);for(const k of Ee)k.updateGuards.forEach(B=>{J.push(yr(B,F,ee))});return J.push(A),pt(J)}).then(()=>{J=[];for(const k of T)if(k.beforeEnter)if(hn(k.beforeEnter))for(const B of k.beforeEnter)J.push(yr(B,F,ee));else J.push(yr(k.beforeEnter,F,ee));return J.push(A),pt(J)}).then(()=>(F.matched.forEach(k=>k.enterCallbacks={}),J=Wl(T,"beforeRouteEnter",F,ee,v),J.push(A),pt(J))).then(()=>{J=[];for(const k of o.list())J.push(yr(k,F,ee));return J.push(A),pt(J)}).catch(k=>Un(k,qe.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function E(F,ee,J){l.list().forEach(ie=>v(()=>ie(F,ee,J)))}function R(F,ee,J,ie,Ee){const T=C(F,ee);if(T)return T;const A=ee===dr,k=Rs?history.state:{};J&&(ie||A?s.replace(F.fullPath,Pe({scroll:A&&k&&k.scroll},Ee)):s.push(F.fullPath,Ee)),c.value=F,Bt(F,ee,J,A),fn()}let I;function He(){I||(I=s.listen((F,ee,J)=>{if(!nn.listening)return;const ie=L(F),Ee=Z(ie,nn.currentRoute.value);if(Ee){b(Pe(Ee,{replace:!0,force:!0}),ie).catch(xi);return}u=ie;const T=c.value;Rs&&mT(Nf(T.fullPath,J.delta),Ga()),w(ie,T).catch(A=>Un(A,qe.NAVIGATION_ABORTED|qe.NAVIGATION_CANCELLED)?A:Un(A,qe.NAVIGATION_GUARD_REDIRECT)?(b(Pe(M(A.to),{force:!0}),ie).then(k=>{Un(k,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===vc.pop&&s.go(-1,!1)}).catch(xi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),be(A,ie,T))).then(A=>{A=A||R(ie,T,!1),A&&(J.delta&&!Un(A,qe.NAVIGATION_CANCELLED)?s.go(-J.delta,!1):J.type===vc.pop&&Un(A,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),E(ie,T,A)}).catch(xi)}))}let dt=vi(),Me=vi(),me;function be(F,ee,J){fn(F);const ie=Me.list();return ie.length?ie.forEach(Ee=>Ee(F,ee,J)):console.error(F),Promise.reject(F)}function Ot(){return me&&c.value!==dr?Promise.resolve():new Promise((F,ee)=>{dt.add([F,ee])})}function fn(F){return me||(me=!F,He(),dt.list().forEach(([ee,J])=>F?J(F):ee()),dt.reset()),F}function Bt(F,ee,J,ie){const{scrollBehavior:Ee}=t;if(!Rs||!Ee)return Promise.resolve();const T=!J&&gT(Nf(F.fullPath,0))||(ie||!J)&&history.state&&history.state.scroll||null;return lo().then(()=>Ee(F,ee,T)).then(A=>A&&pT(A)).catch(A=>be(A,F,ee))}const ot=F=>s.go(F);let Mn;const tn=new Set,nn={currentRoute:c,listening:!0,addRoute:y,removeRoute:V,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:N,resolve:L,options:t,push:P,replace:z,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Me.add,isReady:Ot,install(F){F.component("RouterLink",zT),F.component("RouterView",KT),F.config.globalProperties.$router=nn,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>En(c)}),Rs&&!Mn&&c.value===dr&&(Mn=!0,P(s.location).catch(ie=>{}));const ee={};for(const ie in dr)Object.defineProperty(ee,ie,{get:()=>c.value[ie],enumerable:!0});F.provide(Ka,nn),F.provide(Qm,Jp(ee)),F.provide(wc,c);const J=F.unmount;tn.add(F),F.unmount=function(){tn.delete(F),tn.size<1&&(u=dr,I&&I(),I=null,c.value=dr,Mn=!1,me=!1),J()}}};function pt(F){return F.reduce((ee,J)=>ee.then(()=>v(J)),Promise.resolve())}return nn}function Qa(){return cn(Ka)}const YT=()=>{};var qf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},JT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new XT;const m=i<<2|l>>4;if(r.push(m),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const V=u<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZT=function(t){const e=Zm(t);return eg.encodeByteArray(e,!0)},pa=function(t){return ZT(t).replace(/\./g,"")},tg=function(t){try{return eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tI=()=>eI().__FIREBASE_DEFAULTS__,nI=()=>{if(typeof process>"u"||typeof qf>"u")return;const t=qf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tg(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return YT()||tI()||nI()||rI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ng=t=>Ya()?.emulatorHosts?.[t],rg=t=>{const e=ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sg=()=>Ya()?.config,ig=t=>Ya()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ds(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function du(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function og(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pa(JSON.stringify(n)),pa(JSON.stringify(o)),""].join(".")}const Mi={};function iI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Mi))Mi[e]?t.emulator.push(e):t.prod.push(e);return t}function oI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wf=!1;function pu(t,e){if(typeof window>"u"||typeof document>"u"||!ds(window.location.host)||Mi[t]===e||Mi[t]||Wf)return;Mi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=iI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Wf=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=oI(r),y=n("text"),V=document.getElementById(y)||document.createElement("span"),N=n("learnmore"),D=document.getElementById(N)||document.createElement("a"),L=n("preprendIcon"),M=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const C=m.element;l(C),f(D,N);const P=u();c(M,L),C.append(M,V,D,P),document.body.appendChild(C)}i?(V.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function lI(){const t=Ya()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fI(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dI(){return!lI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pI(){try{return typeof indexedDB=="object"}catch{return!1}}function mI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gI,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_I(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,r)}}function _I(t,e){return t.replace(yI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yI=/\{\$([^}]+)}/g;function vI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gf(i)&&Gf(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function EI(t,e){const n=new wI(t,e);return n.subscribe.bind(n)}class wI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gl),s.error===void 0&&(s.error=Gl),s.complete===void 0&&(s.complete=Gl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gl(){}/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class Vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class II{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AI(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bI(t){return t===Yr?void 0:t}function AI(t){return t.instantiationMode==="EAGER"}/**
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
 */class RI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new II(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const SI={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},CI=we.INFO,PI={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},kI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=PI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mu{constructor(e){this.name=e,this._logLevel=CI,this._logHandler=kI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const DI=(t,e)=>e.some(n=>t instanceof n);let Kf,Qf;function NI(){return Kf||(Kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OI(){return Qf||(Qf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,Tc=new WeakMap,lg=new WeakMap,Kl=new WeakMap,gu=new WeakMap;function VI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,t)}).catch(()=>{}),gu.set(e,t),e}function xI(t){if(Tc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Tc.set(t,e)}let Ic={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MI(t){Ic=t(Ic)}function LI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ql(this),e,...n);return lg.set(r,e.sort?e.sort():[e]),Sr(r)}:OI().includes(t)?function(...e){return t.apply(Ql(this),e),Sr(ag.get(this))}:function(...e){return Sr(t.apply(Ql(this),e))}}function UI(t){return typeof t=="function"?LI(t):(t instanceof IDBTransaction&&xI(t),DI(t,NI())?new Proxy(t,Ic):t)}function Sr(t){if(t instanceof IDBRequest)return VI(t);if(Kl.has(t))return Kl.get(t);const e=UI(t);return e!==t&&(Kl.set(t,e),gu.set(e,t)),e}const Ql=t=>gu.get(t);function FI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Sr(o.result),c.oldVersion,c.newVersion,Sr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const BI=["get","getKey","getAll","getAllKeys","count"],jI=["put","add","delete","clear"],Yl=new Map;function Yf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yl.get(e))return Yl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Yl.set(e,i),i}MI(t=>({...t,get:(e,n,r)=>Yf(e,n)||t.get(e,n,r),has:(e,n)=>!!Yf(e,n)||t.has(e,n)}));/**
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
 */class $I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HI(t){return t.getComponent()?.type==="VERSION"}const bc="@firebase/app",Jf="0.14.4";/**
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
 */const Zn=new mu("@firebase/app"),zI="@firebase/app-compat",qI="@firebase/analytics-compat",WI="@firebase/analytics",GI="@firebase/app-check-compat",KI="@firebase/app-check",QI="@firebase/auth",YI="@firebase/auth-compat",JI="@firebase/database",XI="@firebase/data-connect",ZI="@firebase/database-compat",eb="@firebase/functions",tb="@firebase/functions-compat",nb="@firebase/installations",rb="@firebase/installations-compat",sb="@firebase/messaging",ib="@firebase/messaging-compat",ob="@firebase/performance",ab="@firebase/performance-compat",lb="@firebase/remote-config",cb="@firebase/remote-config-compat",ub="@firebase/storage",hb="@firebase/storage-compat",fb="@firebase/firestore",db="@firebase/ai",pb="@firebase/firestore-compat",mb="firebase",gb="12.4.0";/**
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
 */const Ac="[DEFAULT]",_b={[bc]:"fire-core",[zI]:"fire-core-compat",[WI]:"fire-analytics",[qI]:"fire-analytics-compat",[KI]:"fire-app-check",[GI]:"fire-app-check-compat",[QI]:"fire-auth",[YI]:"fire-auth-compat",[JI]:"fire-rtdb",[XI]:"fire-data-connect",[ZI]:"fire-rtdb-compat",[eb]:"fire-fn",[tb]:"fire-fn-compat",[nb]:"fire-iid",[rb]:"fire-iid-compat",[sb]:"fire-fcm",[ib]:"fire-fcm-compat",[ob]:"fire-perf",[ab]:"fire-perf-compat",[lb]:"fire-rc",[cb]:"fire-rc-compat",[ub]:"fire-gcs",[hb]:"fire-gcs-compat",[fb]:"fire-fst",[pb]:"fire-fst-compat",[db]:"fire-vertex","fire-js":"fire-js",[mb]:"fire-js-all"};/**
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
 */const ma=new Map,yb=new Map,Rc=new Map;function Xf(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(Rc.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of ma.values())Xf(n,t);for(const n of yb.values())Xf(n,t);return!0}function Ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const vb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new uo("app","Firebase",vb);/**
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
 */class Eb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=gb;function cg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ac,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Cr.create("bad-app-name",{appName:String(s)});if(n||(n=sg()),!n)throw Cr.create("no-options");const i=ma.get(s);if(i){if(is(n,i.options)&&is(r,i.config))return i;throw Cr.create("duplicate-app",{appName:s})}const o=new RI(s);for(const c of Rc.values())o.addComponent(c);const l=new Eb(n,r,o);return ma.set(s,l),l}function _u(t=Ac){const e=ma.get(t);if(!e&&t===Ac&&sg())return cg();if(!e)throw Cr.create("no-app",{appName:t});return e}function wn(t,e,n){let r=_b[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(o.join(" "));return}os(new Vr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const wb="firebase-heartbeat-database",Tb=1,Qi="firebase-heartbeat-store";let Jl=null;function ug(){return Jl||(Jl=FI(wb,Tb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),Jl}async function Ib(t){try{const n=(await ug()).transaction(Qi),r=await n.objectStore(Qi).get(hg(t));return await n.done,r}catch(e){if(e instanceof Vn)Zn.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e?.message});Zn.warn(n.message)}}}async function Zf(t,e){try{const r=(await ug()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(e,hg(t)),await r.done}catch(n){if(n instanceof Vn)Zn.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n?.message});Zn.warn(r.message)}}}function hg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bb=1024,Ab=30;class Rb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ed();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Ab){const s=Pb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Zn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ed(),{heartbeatsToSend:n,unsentEntries:r}=Sb(this._heartbeatsCache.heartbeats),s=pa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Zn.warn(e),""}}}function ed(){return new Date().toISOString().substring(0,10)}function Sb(t,e=bb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),td(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),td(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pI()?mI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ib(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function td(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}function Pb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function kb(t){os(new Vr("platform-logger",e=>new $I(e),"PRIVATE")),os(new Vr("heartbeat",e=>new Rb(e),"PRIVATE")),wn(bc,Jf,t),wn(bc,Jf,"esm2020"),wn("fire-js","")}kb("");var nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,fg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function v(){}v.prototype=_.prototype,b.F=_.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(w,E,R){for(var I=Array(arguments.length-2),He=2;He<arguments.length;He++)I[He-2]=arguments[He];return _.prototype[E].apply(w,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,v){v||(v=0);const w=Array(16);if(typeof _=="string")for(var E=0;E<16;++E)w[E]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(E=0;E<16;++E)w[E]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=b.g[0],v=b.g[1],E=b.g[2];let R=b.g[3],I;I=_+(R^v&(E^R))+w[0]+3614090360&4294967295,_=v+(I<<7&4294967295|I>>>25),I=R+(E^_&(v^E))+w[1]+3905402710&4294967295,R=_+(I<<12&4294967295|I>>>20),I=E+(v^R&(_^v))+w[2]+606105819&4294967295,E=R+(I<<17&4294967295|I>>>15),I=v+(_^E&(R^_))+w[3]+3250441966&4294967295,v=E+(I<<22&4294967295|I>>>10),I=_+(R^v&(E^R))+w[4]+4118548399&4294967295,_=v+(I<<7&4294967295|I>>>25),I=R+(E^_&(v^E))+w[5]+1200080426&4294967295,R=_+(I<<12&4294967295|I>>>20),I=E+(v^R&(_^v))+w[6]+2821735955&4294967295,E=R+(I<<17&4294967295|I>>>15),I=v+(_^E&(R^_))+w[7]+4249261313&4294967295,v=E+(I<<22&4294967295|I>>>10),I=_+(R^v&(E^R))+w[8]+1770035416&4294967295,_=v+(I<<7&4294967295|I>>>25),I=R+(E^_&(v^E))+w[9]+2336552879&4294967295,R=_+(I<<12&4294967295|I>>>20),I=E+(v^R&(_^v))+w[10]+4294925233&4294967295,E=R+(I<<17&4294967295|I>>>15),I=v+(_^E&(R^_))+w[11]+2304563134&4294967295,v=E+(I<<22&4294967295|I>>>10),I=_+(R^v&(E^R))+w[12]+1804603682&4294967295,_=v+(I<<7&4294967295|I>>>25),I=R+(E^_&(v^E))+w[13]+4254626195&4294967295,R=_+(I<<12&4294967295|I>>>20),I=E+(v^R&(_^v))+w[14]+2792965006&4294967295,E=R+(I<<17&4294967295|I>>>15),I=v+(_^E&(R^_))+w[15]+1236535329&4294967295,v=E+(I<<22&4294967295|I>>>10),I=_+(E^R&(v^E))+w[1]+4129170786&4294967295,_=v+(I<<5&4294967295|I>>>27),I=R+(v^E&(_^v))+w[6]+3225465664&4294967295,R=_+(I<<9&4294967295|I>>>23),I=E+(_^v&(R^_))+w[11]+643717713&4294967295,E=R+(I<<14&4294967295|I>>>18),I=v+(R^_&(E^R))+w[0]+3921069994&4294967295,v=E+(I<<20&4294967295|I>>>12),I=_+(E^R&(v^E))+w[5]+3593408605&4294967295,_=v+(I<<5&4294967295|I>>>27),I=R+(v^E&(_^v))+w[10]+38016083&4294967295,R=_+(I<<9&4294967295|I>>>23),I=E+(_^v&(R^_))+w[15]+3634488961&4294967295,E=R+(I<<14&4294967295|I>>>18),I=v+(R^_&(E^R))+w[4]+3889429448&4294967295,v=E+(I<<20&4294967295|I>>>12),I=_+(E^R&(v^E))+w[9]+568446438&4294967295,_=v+(I<<5&4294967295|I>>>27),I=R+(v^E&(_^v))+w[14]+3275163606&4294967295,R=_+(I<<9&4294967295|I>>>23),I=E+(_^v&(R^_))+w[3]+4107603335&4294967295,E=R+(I<<14&4294967295|I>>>18),I=v+(R^_&(E^R))+w[8]+1163531501&4294967295,v=E+(I<<20&4294967295|I>>>12),I=_+(E^R&(v^E))+w[13]+2850285829&4294967295,_=v+(I<<5&4294967295|I>>>27),I=R+(v^E&(_^v))+w[2]+4243563512&4294967295,R=_+(I<<9&4294967295|I>>>23),I=E+(_^v&(R^_))+w[7]+1735328473&4294967295,E=R+(I<<14&4294967295|I>>>18),I=v+(R^_&(E^R))+w[12]+2368359562&4294967295,v=E+(I<<20&4294967295|I>>>12),I=_+(v^E^R)+w[5]+4294588738&4294967295,_=v+(I<<4&4294967295|I>>>28),I=R+(_^v^E)+w[8]+2272392833&4294967295,R=_+(I<<11&4294967295|I>>>21),I=E+(R^_^v)+w[11]+1839030562&4294967295,E=R+(I<<16&4294967295|I>>>16),I=v+(E^R^_)+w[14]+4259657740&4294967295,v=E+(I<<23&4294967295|I>>>9),I=_+(v^E^R)+w[1]+2763975236&4294967295,_=v+(I<<4&4294967295|I>>>28),I=R+(_^v^E)+w[4]+1272893353&4294967295,R=_+(I<<11&4294967295|I>>>21),I=E+(R^_^v)+w[7]+4139469664&4294967295,E=R+(I<<16&4294967295|I>>>16),I=v+(E^R^_)+w[10]+3200236656&4294967295,v=E+(I<<23&4294967295|I>>>9),I=_+(v^E^R)+w[13]+681279174&4294967295,_=v+(I<<4&4294967295|I>>>28),I=R+(_^v^E)+w[0]+3936430074&4294967295,R=_+(I<<11&4294967295|I>>>21),I=E+(R^_^v)+w[3]+3572445317&4294967295,E=R+(I<<16&4294967295|I>>>16),I=v+(E^R^_)+w[6]+76029189&4294967295,v=E+(I<<23&4294967295|I>>>9),I=_+(v^E^R)+w[9]+3654602809&4294967295,_=v+(I<<4&4294967295|I>>>28),I=R+(_^v^E)+w[12]+3873151461&4294967295,R=_+(I<<11&4294967295|I>>>21),I=E+(R^_^v)+w[15]+530742520&4294967295,E=R+(I<<16&4294967295|I>>>16),I=v+(E^R^_)+w[2]+3299628645&4294967295,v=E+(I<<23&4294967295|I>>>9),I=_+(E^(v|~R))+w[0]+4096336452&4294967295,_=v+(I<<6&4294967295|I>>>26),I=R+(v^(_|~E))+w[7]+1126891415&4294967295,R=_+(I<<10&4294967295|I>>>22),I=E+(_^(R|~v))+w[14]+2878612391&4294967295,E=R+(I<<15&4294967295|I>>>17),I=v+(R^(E|~_))+w[5]+4237533241&4294967295,v=E+(I<<21&4294967295|I>>>11),I=_+(E^(v|~R))+w[12]+1700485571&4294967295,_=v+(I<<6&4294967295|I>>>26),I=R+(v^(_|~E))+w[3]+2399980690&4294967295,R=_+(I<<10&4294967295|I>>>22),I=E+(_^(R|~v))+w[10]+4293915773&4294967295,E=R+(I<<15&4294967295|I>>>17),I=v+(R^(E|~_))+w[1]+2240044497&4294967295,v=E+(I<<21&4294967295|I>>>11),I=_+(E^(v|~R))+w[8]+1873313359&4294967295,_=v+(I<<6&4294967295|I>>>26),I=R+(v^(_|~E))+w[15]+4264355552&4294967295,R=_+(I<<10&4294967295|I>>>22),I=E+(_^(R|~v))+w[6]+2734768916&4294967295,E=R+(I<<15&4294967295|I>>>17),I=v+(R^(E|~_))+w[13]+1309151649&4294967295,v=E+(I<<21&4294967295|I>>>11),I=_+(E^(v|~R))+w[4]+4149444226&4294967295,_=v+(I<<6&4294967295|I>>>26),I=R+(v^(_|~E))+w[11]+3174756917&4294967295,R=_+(I<<10&4294967295|I>>>22),I=E+(_^(R|~v))+w[2]+718787259&4294967295,E=R+(I<<15&4294967295|I>>>17),I=v+(R^(E|~_))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(E+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.v=function(b,_){_===void 0&&(_=b.length);const v=_-this.blockSize,w=this.C;let E=this.h,R=0;for(;R<_;){if(E==0)for(;R<=v;)s(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<_;)if(w[E++]=b.charCodeAt(R++),E==this.blockSize){s(this,w),E=0;break}}else for(;R<_;)if(w[E++]=b[R++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=_},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;_=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=_&255,_/=256;for(this.v(b),b=Array(16),_=0,v=0;v<4;++v)for(let w=0;w<32;w+=8)b[_++]=this.g[v]>>>w&255;return b};function i(b,_){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=_(b)}function o(b,_){this.h=_;const v=[];let w=!0;for(let E=b.length-1;E>=0;E--){const R=b[E]|0;w&&R==_||(v[E]=R,w=!1)}this.g=v}var l={};function c(b){return-128<=b&&b<128?i(b,function(_){return new o([_|0],_<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return D(u(-b));const _=[];let v=1;for(let w=0;b>=v;w++)_[w]=b/v|0,v*=4294967296;return new o(_,0)}function f(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return D(f(b.substring(1),_));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(_,8));let w=p;for(let R=0;R<b.length;R+=8){var E=Math.min(8,b.length-R);const I=parseInt(b.substring(R,R+E),_);E<8?(E=u(Math.pow(_,E)),w=w.j(E).add(u(I))):(w=w.j(v),w=w.add(u(I)))}return w}var p=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();let b=0,_=1;for(let v=0;v<this.g.length;v++){const w=this.i(v);b+=(w>=0?w:4294967296+w)*_,_*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(V(this))return"0";if(N(this))return"-"+D(this).toString(b);const _=u(Math.pow(b,6));var v=this;let w="";for(;;){const E=P(v,_).g;v=L(v,E.j(_));let R=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=E,V(v))return R+w;for(;R.length<6;)R="0"+R;w=R+w}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function V(b){if(b.h!=0)return!1;for(let _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function N(b){return b.h==-1}t.l=function(b){return b=L(this,b),N(b)?-1:V(b)?0:1};function D(b){const _=b.g.length,v=[];for(let w=0;w<_;w++)v[w]=~b.g[w];return new o(v,~b.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(b){const _=Math.max(this.g.length,b.g.length),v=[];let w=0;for(let E=0;E<=_;E++){let R=w+(this.i(E)&65535)+(b.i(E)&65535),I=(R>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);w=I>>>16,R&=65535,I&=65535,v[E]=I<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function L(b,_){return b.add(D(_))}t.j=function(b){if(V(this)||V(b))return p;if(N(this))return N(b)?D(this).j(D(b)):D(D(this).j(b));if(N(b))return D(this.j(D(b)));if(this.l(y)<0&&b.l(y)<0)return u(this.m()*b.m());const _=this.g.length+b.g.length,v=[];for(var w=0;w<2*_;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<b.g.length;E++){const R=this.i(w)>>>16,I=this.i(w)&65535,He=b.i(E)>>>16,dt=b.i(E)&65535;v[2*w+2*E]+=I*dt,M(v,2*w+2*E),v[2*w+2*E+1]+=R*dt,M(v,2*w+2*E+1),v[2*w+2*E+1]+=I*He,M(v,2*w+2*E+1),v[2*w+2*E+2]+=R*He,M(v,2*w+2*E+2)}for(b=0;b<_;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=_;b<2*_;b++)v[b]=0;return new o(v,0)};function M(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function C(b,_){this.g=b,this.h=_}function P(b,_){if(V(_))throw Error("division by zero");if(V(b))return new C(p,p);if(N(b))return _=P(D(b),_),new C(D(_.g),D(_.h));if(N(_))return _=P(b,D(_)),new C(D(_.g),_.h);if(b.g.length>30){if(N(b)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,w=_;w.l(b)<=0;)v=z(v),w=z(w);var E=Z(v,1),R=Z(w,1);for(w=Z(w,2),v=Z(v,2);!V(w);){var I=R.add(w);I.l(b)<=0&&(E=E.add(v),R=I),w=Z(w,1),v=Z(v,1)}return _=L(b,E.j(_)),new C(E,_)}for(E=p;b.l(_)>=0;){for(v=Math.max(1,Math.floor(b.m()/_.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),R=u(v),I=R.j(_);N(I)||I.l(b)>0;)v-=w,R=u(v),I=R.j(_);V(R)&&(R=m),E=E.add(R),b=L(b,I)}return new C(E,b)}t.B=function(b){return P(this,b).h},t.and=function(b){const _=Math.max(this.g.length,b.g.length),v=[];for(let w=0;w<_;w++)v[w]=this.i(w)&b.i(w);return new o(v,this.h&b.h)},t.or=function(b){const _=Math.max(this.g.length,b.g.length),v=[];for(let w=0;w<_;w++)v[w]=this.i(w)|b.i(w);return new o(v,this.h|b.h)},t.xor=function(b){const _=Math.max(this.g.length,b.g.length),v=[];for(let w=0;w<_;w++)v[w]=this.i(w)^b.i(w);return new o(v,this.h^b.h)};function z(b){const _=b.g.length+1,v=[];for(let w=0;w<_;w++)v[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(v,b.h)}function Z(b,_){const v=_>>5;_%=32;const w=b.g.length-v,E=[];for(let R=0;R<w;R++)E[R]=_>0?b.i(R+v)>>>_|b.i(R+v+1)<<32-_:b.i(R+v);return new o(E,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,fg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Pr=o}).apply(typeof nd<"u"?nd:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dg,Ii,pg,Go,Sc,mg,gg,_g;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in d))break e;d=d[O]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=c,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,O,x){for(var K=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)K[_e-2]=arguments[_e];return h.prototype[O].apply(g,K)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function V(a,h){for(let g=1;g<arguments.length;g++){const O=arguments[g];var d=typeof O;if(d=d!="object"?d:O?Array.isArray(O)?"array":d:"null",d=="array"||d=="object"&&typeof O.length=="number"){d=a.length||0;const x=O.length||0;a.length=d+x;for(let K=0;K<x;K++)a[d+K]=O[K]}else a.push(O)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function L(){var a=b;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class M{constructor(){this.h=this.g=null}add(h,d){const g=C.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var C=new N(()=>new P,a=>a.reset());class P{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let z,Z=!1,b=new M,_=()=>{const a=Promise.resolve(void 0);z=()=>{a.then(v)}};function v(){for(var a;a=L();){try{a.h.call(a.g)}catch(d){D(d)}var h=C;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}Z=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function I(a){return/^[\s\xa0]*$/.test(a)}function He(a,h){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(He,E),He.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dt="closure_listenable_"+(Math.random()*1e6|0),Me=0;function me(a,h,d,g,O){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=O,this.key=++Me,this.da=this.fa=!1}function be(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ot(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function fn(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Bt(a){const h={};for(const d in a)h[d]=a[d];return h}const ot="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mn(a,h){let d,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(d in g)a[d]=g[d];for(let x=0;x<ot.length;x++)d=ot[x],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function tn(a){this.src=a,this.g={},this.h=0}tn.prototype.add=function(a,h,d,g,O){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const K=pt(a,h,g,O);return K>-1?(h=a[K],d||(h.fa=!1)):(h=new me(h,this.src,x,!!g,O),h.fa=d,a.push(h)),h};function nn(a,h){const d=h.type;if(d in a.g){var g=a.g[d],O=Array.prototype.indexOf.call(g,h,void 0),x;(x=O>=0)&&Array.prototype.splice.call(g,O,1),x&&(be(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function pt(a,h,d,g){for(let O=0;O<a.length;++O){const x=a[O];if(!x.da&&x.listener==h&&x.capture==!!d&&x.ha==g)return O}return-1}var F="closure_lm_"+(Math.random()*1e6|0),ee={};function J(a,h,d,g,O){if(Array.isArray(h)){for(let x=0;x<h.length;x++)J(a,h[x],d,g,O);return null}return d=Y(d),a&&a[dt]?a.J(h,d,l(g)?!!g.capture:!1,O):ie(a,h,d,!1,g,O)}function ie(a,h,d,g,O,x){if(!h)throw Error("Invalid event type");const K=l(O)?!!O.capture:!!O;let _e=$(a);if(_e||(a[F]=_e=new tn(a)),d=_e.add(h,d,g,K,x),d.proxy)return d;if(g=Ee(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(O=K),O===void 0&&(O=!1),a.addEventListener(h.toString(),g,O);else if(a.attachEvent)a.attachEvent(k(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ee(){function a(d){return h.call(a.src,a.listener,d)}const h=B;return a}function T(a,h,d,g,O){if(Array.isArray(h))for(var x=0;x<h.length;x++)T(a,h[x],d,g,O);else g=l(g)?!!g.capture:!!g,d=Y(d),a&&a[dt]?(a=a.i,x=String(h).toString(),x in a.g&&(h=a.g[x],d=pt(h,d,g,O),d>-1&&(be(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[x],a.h--)))):a&&(a=$(a))&&(h=a.g[h.toString()],a=-1,h&&(a=pt(h,d,g,O)),(d=a>-1?h[a]:null)&&A(d))}function A(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[dt])nn(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(k(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=$(h))?(nn(d,a),d.h==0&&(d.src=null,h[F]=null)):be(a)}}}function k(a){return a in ee?ee[a]:ee[a]="on"+a}function B(a,h){if(a.da)a=!0;else{h=new He(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&A(a),a=d.call(g,h)}return a}function $(a){return a=a[F],a instanceof tn?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function Y(a){return typeof a=="function"?a:(a[U]||(a[U]=function(h){return a.handleEvent(h)}),a[U])}function G(){w.call(this),this.i=new tn(this),this.M=this,this.G=null}p(G,w),G.prototype[dt]=!0,G.prototype.removeEventListener=function(a,h,d,g){T(this,a,h,d,g)};function q(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new E(h,a);else if(h instanceof E)h.target=h.target||a;else{var O=h;h=new E(g,a),Mn(h,O)}O=!0;let x,K;if(d)for(K=d.length-1;K>=0;K--)x=h.g=d[K],O=W(x,g,!0,h)&&O;if(x=h.g=a,O=W(x,g,!0,h)&&O,O=W(x,g,!1,h)&&O,d)for(K=0;K<d.length;K++)x=h.g=d[K],O=W(x,g,!1,h)&&O}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)be(d[g]);delete a.g[h],a.h--}}this.G=null},G.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},G.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function W(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let x=0;x<h.length;++x){const K=h[x];if(K&&!K.da&&K.capture==d){const _e=K.listener,Xe=K.ha||K.src;K.fa&&nn(a.i,K),O=_e.call(Xe,g)!==!1&&O}}return O&&!g.defaultPrevented}function le(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function X(a){a.g=le(()=>{a.g=null,a.i&&(a.i=!1,X(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class oe extends w{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(a){w.call(this),this.h=a,this.g={}}p(ce,w);var ye=[];function Ne(a){Ot(a.g,function(h,d){this.g.hasOwnProperty(d)&&A(h)},a),a.g={}}ce.prototype.N=function(){ce.Z.N.call(this),Ne(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Re=o.JSON.stringify,mt=o.JSON.parse,gt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function jt(){}function $t(){}var rn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vs(){E.call(this,"d")}p(vs,E);function at(){E.call(this,"c")}p(at,E);var rt={},ni=null;function $r(){return ni=ni||new G}rt.Ia="serverreachability";function oh(a){E.call(this,rt.Ia,a)}p(oh,E);function ri(a){const h=$r();q(h,new oh(h))}rt.STAT_EVENT="statevent";function ah(a,h){E.call(this,rt.STAT_EVENT,a),this.stat=h}p(ah,E);function At(a){const h=$r();q(h,new ah(h,a))}rt.Ja="timingevent";function lh(a,h){E.call(this,rt.Ja,a),this.size=h}p(lh,E);function si(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ii(){this.g=!0}ii.prototype.ua=function(){this.g=!1};function Uy(a,h,d,g,O,x){a.info(function(){if(a.g)if(x){var K="",_e=x.split("&");for(let Oe=0;Oe<_e.length;Oe++){var Xe=_e[Oe].split("=");if(Xe.length>1){const st=Xe[0];Xe=Xe[1];const pn=st.split("_");K=pn.length>=2&&pn[1]=="type"?K+(st+"="+Xe+"&"):K+(st+"=redacted&")}}}else K=null;else K=x;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+d+`
`+K})}function Fy(a,h,d,g,O,x,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+d+`
`+x+" "+K})}function Es(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+jy(a,d)+(g?" "+g:"")})}function By(a,h){a.info(function(){return"TIMEOUT: "+h})}ii.prototype.info=function(){};function jy(a,h){if(!a.g)return h;if(!h)return null;try{const x=JSON.parse(h);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var d=x[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var O=g[0];if(O!="noop"&&O!="stop"&&O!="close")for(let K=1;K<g.length;K++)g[K]=""}}}}return Re(x)}catch{return h}}var To={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ch={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},uh;function yl(){}p(yl,jt),yl.prototype.g=function(){return new XMLHttpRequest},uh=new yl;function oi(a){return encodeURIComponent(String(a))}function $y(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function ar(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ce(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hh}function hh(){this.i=null,this.g="",this.h=!1}var fh={},vl={};function El(a,h,d){a.M=1,a.A=bo(dn(h)),a.u=d,a.R=!0,dh(a,null)}function dh(a,h){a.F=Date.now(),Io(a),a.B=dn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Rh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new hh,a.g=zh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new oe(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(ye[0]=O.toString()),O=ye);for(let x=0;x<O.length;x++){const K=J(d,O[x],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?Bt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ri(),Uy(a.i,a.v,a.B,a.l,a.S,a.u)}ar.prototype.ba=function(a){a=a.target;const h=this.O;h&&ur(a)==3?h.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const _e=ur(this.g),Xe=this.g.ya(),Oe=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||Oh(this.g)))){this.K||_e!=4||Xe==7||(Xe==8||Oe<=0?ri(3):ri(2)),wl(this);var h=this.g.ca();this.X=h;var d=Hy(this);if(this.o=h==200,Fy(this.i,this.v,this.B,this.l,this.S,_e,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,O=this.g;if((g=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var x=g;break t}}x=null}if(a=x)Es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tl(this,a);else{this.o=!1,this.m=3,At(12),Hr(this),ai(this);break e}}if(this.R){a=!0;let st;for(;!this.K&&this.C<d.length;)if(st=zy(this,d),st==vl){_e==4&&(this.m=4,At(14),a=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(st==fh){this.m=4,At(15),Es(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Es(this.i,this.l,st,null),Tl(this,st);if(ph(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,At(16),a=!1),this.o=this.o&&a,!a)Es(this.i,this.l,d,"[Invalid Chunked Response]"),Hr(this),ai(this);else if(d.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),kl(K),K.P=!0,At(11))}}else Es(this.i,this.l,d,null),Tl(this,d);_e==4&&Hr(this),this.o&&!this.K&&(_e==4?Bh(this.j,this):(this.o=!1,Io(this)))}else sv(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,At(12)):(this.m=0,At(13)),Hr(this),ai(this)}}}catch{}finally{}};function Hy(a){if(!ph(a))return a.g.la();const h=Oh(a.g);if(h==="")return"";let d="";const g=h.length,O=ur(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Hr(a),ai(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<g;x++)a.h.h=!0,d+=a.h.i.decode(h[x],{stream:!(O&&x==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function ph(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function zy(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?vl:(d=Number(h.substring(d,g)),isNaN(d)?fh:(g+=1,g+d>h.length?vl:(h=h.slice(g,g+d),a.C=g+d,h)))}ar.prototype.cancel=function(){this.K=!0,Hr(this)};function Io(a){a.T=Date.now()+a.H,mh(a,a.H)}function mh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=si(u(a.aa,a),h)}function wl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ar.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(By(this.i,this.B),this.M!=2&&(ri(),At(17)),Hr(this),this.m=2,ai(this)):mh(this,this.T-a)};function ai(a){a.j.I==0||a.K||Bh(a.j,a)}function Hr(a){wl(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ne(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Tl(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Il(d.h,a))){if(!a.L&&Il(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Po(d),So(d);else break e;Pl(d),At(18)}}else d.xa=O[1],0<d.xa-d.K&&O[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=si(u(d.Va,d),6e3));yh(d.h)<=1&&d.ta&&(d.ta=void 0)}else qr(d,11)}else if((a.L||d.g==a)&&Po(d),!I(h))for(O=d.Ba.g.parse(h),h=0;h<O.length;h++){let Oe=O[h];const st=Oe[0];if(!(st<=d.K))if(d.K=st,Oe=Oe[1],d.I==2)if(Oe[0]=="c"){d.M=Oe[1],d.ba=Oe[2];const pn=Oe[3];pn!=null&&(d.ka=pn,d.j.info("VER="+d.ka));const Wr=Oe[4];Wr!=null&&(d.za=Wr,d.j.info("SVER="+d.za));const hr=Oe[5];hr!=null&&typeof hr=="number"&&hr>0&&(g=1.5*hr,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const fr=a.g;if(fr){const Do=fr.g?fr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Do){var x=g.h;x.g||Do.indexOf("spdy")==-1&&Do.indexOf("quic")==-1&&Do.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(bl(x,x.h),x.h=null))}if(g.G){const Dl=fr.g?fr.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(g.wa=Dl,Ue(g.J,g.G,Dl))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var K=a;if(g.na=Hh(g,g.L?g.ba:null,g.W),K.L){vh(g.h,K);var _e=K,Xe=g.O;Xe&&(_e.H=Xe),_e.D&&(wl(_e),Io(_e)),g.g=K}else Uh(g);d.i.length>0&&Co(d)}else Oe[0]!="stop"&&Oe[0]!="close"||qr(d,7);else d.I==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?qr(d,7):Cl(d):Oe[0]!="noop"&&d.l&&d.l.qa(Oe),d.A=0)}}ri(4)}catch{}}var qy=class{constructor(a,h){this.g=a,this.map=h}};function gh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _h(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yh(a){return a.h?1:a.g?a.g.size:0}function Il(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function bl(a,h){a.g?a.g.add(h):a.h=h}function vh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}gh.prototype.cancel=function(){if(this.i=Eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Eh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return y(a.i)}var wh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let O,x=null;g>=0?(O=a[d].substring(0,g),x=a[d].substring(g+1)):O=a[d],h(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function lr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof lr?(this.l=a.l,li(this,a.j),this.o=a.o,this.g=a.g,ci(this,a.u),this.h=a.h,Al(this,Sh(a.i)),this.m=a.m):a&&(h=String(a).match(wh))?(this.l=!1,li(this,h[1]||"",!0),this.o=ui(h[2]||""),this.g=ui(h[3]||"",!0),ci(this,h[4]),this.h=ui(h[5]||"",!0),Al(this,h[6]||"",!0),this.m=ui(h[7]||"")):(this.l=!1,this.i=new fi(null,this.l))}lr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(hi(h,Th,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(hi(h,Th,!0),"@"),a.push(oi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(hi(d,d.charAt(0)=="/"?Qy:Ky,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",hi(d,Jy)),a.join("")},lr.prototype.resolve=function(a){const h=dn(this);let d=!!a.j;d?li(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)ci(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var O=h.h.lastIndexOf("/");O!=-1&&(g=h.h.slice(0,O+1)+g)}if(O=g,O==".."||O==".")g="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){g=O.lastIndexOf("/",0)==0,O=O.split("/");const x=[];for(let K=0;K<O.length;){const _e=O[K++];_e=="."?g&&K==O.length&&x.push(""):_e==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),g&&K==O.length&&x.push("")):(x.push(_e),g=!0)}g=x.join("/")}else g=O}return d?h.h=g:d=a.i.toString()!=="",d?Al(h,Sh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function dn(a){return new lr(a)}function li(a,h,d){a.j=d?ui(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ci(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Al(a,h,d){h instanceof fi?(a.i=h,Xy(a.i,a.l)):(d||(h=hi(h,Yy)),a.i=new fi(h,a.l))}function Ue(a,h,d){a.i.set(h,d)}function bo(a){return Ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ui(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function hi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Gy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Gy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Th=/[#\/\?@]/g,Ky=/[#\?:]/g,Qy=/[#\?]/g,Yy=/[#\?@]/g,Jy=/#/g;function fi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zr(a){a.g||(a.g=new Map,a.h=0,a.i&&Wy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=fi.prototype,t.add=function(a,h){zr(this),this.i=null,a=ws(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ih(a,h){zr(a),h=ws(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function bh(a,h){return zr(a),h=ws(a,h),a.g.has(h)}t.forEach=function(a,h){zr(this),this.g.forEach(function(d,g){d.forEach(function(O){a.call(h,O,g,this)},this)},this)};function Ah(a,h){zr(a);let d=[];if(typeof h=="string")bh(a,h)&&(d=d.concat(a.g.get(ws(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return zr(this),this.i=null,a=ws(this,a),bh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Ah(this,a),a.length>0?String(a[0]):h):h};function Rh(a,h,d){Ih(a,h),d.length>0&&(a.i=null,a.g.set(ws(a,h),y(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const O=oi(d);d=Ah(this,d);for(let x=0;x<d.length;x++){let K=O;d[x]!==""&&(K+="="+oi(d[x])),a.push(K)}}return this.i=a.join("&")};function Sh(a){const h=new fi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ws(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Xy(a,h){h&&!a.j&&(zr(a),a.i=null,a.g.forEach(function(d,g){const O=g.toLowerCase();g!=O&&(Ih(this,g),Rh(this,O,d))},a)),a.j=h}function Zy(a,h){const d=new ii;if(o.Image){const g=new Image;g.onload=f(cr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(cr,d,"TestLoadImage: error",!1,h,g),g.onabort=f(cr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(cr,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function ev(a,h){const d=new ii,g=new AbortController,O=setTimeout(()=>{g.abort(),cr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(O),x.ok?cr(d,"TestPingServer: ok",!0,h):cr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),cr(d,"TestPingServer: error",!1,h)})}function cr(a,h,d,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(d)}catch{}}function tv(){this.g=new gt}function Rl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Rl,jt),Rl.prototype.g=function(){return new Ao(this.i,this.h)};function Ao(a,h){G.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ao,G),t=Ao.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,pi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,di(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ch(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ch(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?di(this):pi(this),this.readyState==3&&Ch(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,di(this))},t.Na=function(a){this.g&&(this.response=a,di(this))},t.ga=function(){this.g&&di(this)};function di(a){a.readyState=4,a.l=null,a.j=null,a.B=null,pi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ph(a){let h="";return Ot(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Sl(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ph(d),typeof a=="string"?d!=null&&oi(d):Ue(a,h,d))}function ze(a){G.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ze,G);var nv=/^https?$/i,rv=["POST","PUT"];t=ze.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():uh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){kh(this,x);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)d.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())d.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(rv,h,void 0)>=0)||g||O||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,K]of d)this.g.setRequestHeader(x,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){kh(this,x)}};function kh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Dh(a),Ro(a)}function Dh(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,q(this,"complete"),q(this,"abort"),Ro(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),ze.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Nh(this):this.Xa())},t.Xa=function(){Nh(this)};function Nh(a){if(a.h&&typeof i<"u"){if(a.v&&ur(a)==4)setTimeout(a.Ca.bind(a),0);else if(q(a,"readystatechange"),ur(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=x===0){let K=String(a.D).match(wh)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),g=!nv.test(K?K.toLowerCase():"")}d=g}if(d)q(a,"complete"),q(a,"success");else{a.o=6;try{var O=ur(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Dh(a)}}finally{Ro(a)}}}}function Ro(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||q(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ur(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),mt(h)}};function Oh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sv(a){const h={};a=(a.g&&ur(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var d=$y(a[g]);const O=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=h[O]||[];h[O]=x,x.push(d)}fn(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Vh(a){this.za=0,this.i=[],this.j=new ii,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mi("baseRetryDelayMs",5e3,a),this.Za=mi("retryDelaySeedMs",1e4,a),this.Ta=mi("forwardChannelMaxRetries",2,a),this.va=mi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new gh(a&&a.concurrentRequestLimit),this.Ba=new tv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Vh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){At(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Hh(this,null,this.W),Co(this)};function Cl(a){if(xh(a),a.I==3){var h=a.V++,d=dn(a.J);if(Ue(d,"SID",a.M),Ue(d,"RID",h),Ue(d,"TYPE","terminate"),gi(a,d),h=new ar(a,a.j,h),h.M=2,h.A=bo(dn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=zh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Io(h)}$h(a)}function So(a){a.g&&(kl(a),a.g.cancel(),a.g=null)}function xh(a){So(a),a.v&&(o.clearTimeout(a.v),a.v=null),Po(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Co(a){if(!_h(a.h)&&!a.m){a.m=!0;var h=a.Ea;z||_(),Z||(z(),Z=!0),b.add(h,a),a.D=0}}function iv(a,h){return yh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=si(u(a.Ea,a,h),jh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new ar(this,this.j,a);let x=this.o;if(this.U&&(x?(x=Bt(x),Mn(x,this.U)):x=this.U),this.u!==null||this.R||(O.J=x,x=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Lh(this,O,h),d=dn(this.J),Ue(d,"RID",a),Ue(d,"CVER",22),this.G&&Ue(d,"X-HTTP-Session-Id",this.G),gi(this,d),x&&(this.R?h="headers="+oi(Ph(x))+"&"+h:this.u&&Sl(d,this.u,x)),bl(this.h,O),this.Ra&&Ue(d,"TYPE","init"),this.S?(Ue(d,"$req",h),Ue(d,"SID","null"),O.U=!0,El(O,d,null)):El(O,d,h),this.I=2}}else this.I==3&&(a?Mh(this,a):this.i.length==0||_h(this.h)||Mh(this))};function Mh(a,h){var d;h?d=h.l:d=a.V++;const g=dn(a.J);Ue(g,"SID",a.M),Ue(g,"RID",d),Ue(g,"AID",a.K),gi(a,g),a.u&&a.o&&Sl(g,a.u,a.o),d=new ar(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Lh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),bl(a.h,d),El(d,g,h)}function gi(a,h){a.H&&Ot(a.H,function(d,g){Ue(h,g,d)}),a.l&&Ot({},function(d,g){Ue(h,g,d)})}function Lh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var O=a.i;let _e=-1;for(;;){const Xe=["count="+d];_e==-1?d>0?(_e=O[0].g,Xe.push("ofs="+_e)):_e=0:Xe.push("ofs="+_e);let Oe=!0;for(let st=0;st<d;st++){var x=O[st].g;const pn=O[st].map;if(x-=_e,x<0)_e=Math.max(0,O[st].g-100),Oe=!1;else try{x="req"+x+"_"||"";try{var K=pn instanceof Map?pn:Object.entries(pn);for(const[Wr,hr]of K){let fr=hr;l(hr)&&(fr=Re(hr)),Xe.push(x+Wr+"="+encodeURIComponent(fr))}}catch(Wr){throw Xe.push(x+"type="+encodeURIComponent("_badmap")),Wr}}catch{g&&g(pn)}}if(Oe){K=Xe.join("&");break e}}K=void 0}return a=a.i.splice(0,d),h.G=a,K}function Uh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;z||_(),Z||(z(),Z=!0),b.add(h,a),a.A=0}}function Pl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=si(u(a.Da,a),jh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Fh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=si(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,At(10),So(this),Fh(this))};function kl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Fh(a){a.g=new ar(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=dn(a.na);Ue(h,"RID","rpc"),Ue(h,"SID",a.M),Ue(h,"AID",a.K),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ue(h,"TO",a.ia),Ue(h,"TYPE","xmlhttp"),gi(a,h),a.u&&a.o&&Sl(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=bo(dn(h)),d.u=null,d.R=!0,dh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,So(this),Pl(this),At(19))};function Po(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Bh(a,h){var d=null;if(a.g==h){Po(a),kl(a),a.g=null;var g=2}else if(Il(a.h,h))d=h.G,vh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;g=$r(),q(g,new lh(g,d)),Co(a)}else Uh(a);else if(O=h.m,O==3||O==0&&h.X>0||!(g==1&&iv(a,h)||g==2&&Pl(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),O){case 1:qr(a,5);break;case 4:qr(a,10);break;case 3:qr(a,6);break;default:qr(a,2)}}}function jh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function qr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const O=!g;g=new lr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||li(g,"https"),bo(g),O?Zy(g.toString(),d):ev(g.toString(),d)}else At(2);a.I=0,a.l&&a.l.pa(h),$h(a),xh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function $h(a){if(a.I=0,a.ja=[],a.l){const h=Eh(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ja,h),V(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function Hh(a,h,d){var g=d instanceof lr?dn(d):new lr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ci(g,g.u);else{var O=o.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const x=new lr(null);g&&li(x,g),h&&(x.g=h),O&&ci(x,O),d&&(x.h=d),g=x}return d=a.G,h=a.wa,d&&h&&Ue(g,d,h),Ue(g,"VER",a.ka),gi(a,g),g}function zh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ze(new Rl({ab:d})):new ze(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qh(){}t=qh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ko(){}ko.prototype.g=function(a,h){return new Ht(a,h)};function Ht(a,h){G.call(this),this.g=new Vh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ts(this)}p(Ht,G),Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Cl(this.g)},Ht.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Re(a),a=d);h.i.push(new qy(h.Ya++,a)),h.I==3&&Co(h)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Cl(this.g),delete this.g,Ht.Z.N.call(this)};function Wh(a){vs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Wh,vs);function Gh(){at.call(this),this.status=1}p(Gh,at);function Ts(a){this.g=a}p(Ts,qh),Ts.prototype.ra=function(){q(this.g,"a")},Ts.prototype.qa=function(a){q(this.g,new Wh(a))},Ts.prototype.pa=function(a){q(this.g,new Gh)},Ts.prototype.oa=function(){q(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,_g=function(){return new ko},gg=function(){return $r()},mg=rt,Sc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},To.NO_ERROR=0,To.TIMEOUT=8,To.HTTP_ERROR=6,Go=To,ch.COMPLETE="complete",pg=ch,$t.EventType=rn,rn.OPEN="a",rn.CLOSE="b",rn.ERROR="c",rn.MESSAGE="d",G.prototype.listen=G.prototype.J,Ii=$t,ze.prototype.listenOnce=ze.prototype.K,ze.prototype.getLastError=ze.prototype.Ha,ze.prototype.getLastErrorCode=ze.prototype.ya,ze.prototype.getStatus=ze.prototype.ca,ze.prototype.getResponseJson=ze.prototype.La,ze.prototype.getResponseText=ze.prototype.la,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Fa,dg=ze}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});const rd="@firebase/firestore",sd="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new mu("@firebase/firestore");function Ss(){return as.logLevel}function te(t,...e){if(as.logLevel<=we.DEBUG){const n=e.map(yu);as.debug(`Firestore (${Ys}): ${t}`,...n)}}function er(t,...e){if(as.logLevel<=we.ERROR){const n=e.map(yu);as.error(`Firestore (${Ys}): ${t}`,...n)}}function Hs(t,...e){if(as.logLevel<=we.WARN){const n=e.map(yu);as.warn(`Firestore (${Ys}): ${t}`,...n)}}function yu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function fe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,yg(t,r,n)}function yg(t,e,n){let r=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw er(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||yg(e,s,r)}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Db{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(vt.UNAUTHENTICATED)))}shutdown(){}}class Nb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Ob{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new vg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class Vb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Vb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class id{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new id(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new id(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Lb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Cc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Xl(s)===Xl(i)?Te(s,i):Xl(s)?1:-1}return Te(t.length,e.length)}const Ub=55296,Fb=57343;function Xl(t){const e=t.charCodeAt(0);return e>=Ub&&e<=Fb}function zs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="__name__";class _n{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&fe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=_n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Te(e.length,n.length)}static compareSegments(e,n){const r=_n.isNumericId(e),s=_n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?_n.extractNumericId(e).compare(_n.extractNumericId(n)):Cc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pr.fromString(e.substring(4,e.length-2))}}class Be extends _n{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Be(n)}static emptyPath(){return new Be([])}}const Bb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends _n{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return Bb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===od}static keyField(){return new ht([od])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new se(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new se(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Be.fromString(e))}static fromName(e){return new ae(Be.fromString(e).popFirst(5))}static empty(){return new ae(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Be(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t,e,n){if(!n)throw new se(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jb(t,e,n,r){if(e===!0&&r===!0)throw new se(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ad(t){if(!ae.isDocumentKey(t))throw new se(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ld(t){if(ae.isDocumentKey(t))throw new se(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Eu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function ls(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eu(t);throw new se(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function fo(t,e){if(!wg(t))throw new se(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new se(H.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=-62135596800,ud=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ud);return new je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<cd)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ud}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fo(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:Ye("string",je._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new je(0,0))}static max(){return new de(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yi=-1;function $b(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new xr(s,ae.empty(),e)}function Hb(t){return new xr(t.readTime,t.key,Yi)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(de.min(),ae.empty(),Yi)}static max(){return new xr(de.max(),ae.empty(),Yi)}}function zb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==qb)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):j.reject(n)}static resolve(e){return new j(((n,r)=>{n(e)}))}static reject(e){return new j(((n,r)=>{r(e)}))}static waitFor(e){return new j(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next((s=>s?j.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new j(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new j(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function Gb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const wu=-1;function Za(t){return t==null}function ga(t){return t===0&&1/t==-1/0}function Kb(t){return typeof t=="number"&&Number.isInteger(t)&&!ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="";function Qb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hd(e)),e=Yb(t.get(n),e);return hd(e)}function Yb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Tg:n+="";break;default:n+=i}}return n}function hd(t){return t+Tg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ig(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new sn([])}unionWith(e){let n=new nt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class bg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bg("Invalid base64 string: "+i):i}})(e);return new ft(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Jb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=Jb.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="server_timestamp",Rg="__type__",Sg="__previous_value__",Cg="__local_write_time__";function Tu(t){return(t?.mapValue?.fields||{})[Rg]?.stringValue===Ag}function el(t){const e=t.mapValue.fields[Sg];return Tu(e)?el(e):e}function Ji(t){const e=Mr(t.mapValue.fields[Cg].timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const _a="(default)";class Xi{constructor(e,n){this.projectId=e,this.database=n||_a}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database===_a}isEqual(e){return e instanceof Xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="__type__",Zb="__max__",Uo={mapValue:{}},kg="__vector__",ya="value";function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tu(t)?4:tA(t)?9007199254740991:eA(t)?10:11:fe(28295,{value:t})}function Dn(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Mr(s.timestampValue),l=Mr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Lr(s.bytesValue).isEqual(Lr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),l=Ge(i.doubleValue);return o===l?ga(o)===ga(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fd(o)!==fd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Dn(o[c],l[c])))return!1;return!0})(t,e);default:return fe(52216,{left:t})}}function Zi(t,e){return(t.values||[]).find((n=>Dn(n,e)))!==void 0}function qs(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return pd(t.timestampValue,e.timestampValue);case 4:return pd(Ji(t),Ji(e));case 5:return Cc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Lr(i),c=Lr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Te(l[u],c[u]);if(f!==0)return f}return Te(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Te(Ge(i.latitude),Ge(o.latitude));return l!==0?l:Te(Ge(i.longitude),Ge(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return md(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const l=i.fields||{},c=o.fields||{},u=l[ya]?.arrayValue,f=c[ya]?.arrayValue,p=Te(u?.values?.length||0,f?.values?.length||0);return p!==0?p:md(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Uo.mapValue&&o===Uo.mapValue)return 0;if(i===Uo.mapValue)return 1;if(o===Uo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Cc(c[p],f[p]);if(m!==0)return m;const y=qs(l[c[p]],u[f[p]]);if(y!==0)return y}return Te(c.length,f.length)})(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function pd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Mr(t),r=Mr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function md(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qs(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Ws(t){return Pc(t)}function Pc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Mr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Lr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ae.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Pc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Pc(n.fields[o])}`;return s+"}"})(t.mapValue):fe(61005,{value:t})}function Ko(t){switch(Ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=el(t);return e?16+Ko(e):16;case 5:return 2*t.stringValue.length;case 6:return Lr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ko(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ms(r.fields,((i,o)=>{s+=i.length+Ko(o)})),s})(t.mapValue);default:throw fe(13486,{value:t})}}function kc(t){return!!t&&"integerValue"in t}function Iu(t){return!!t&&"arrayValue"in t}function gd(t){return!!t&&"nullValue"in t}function _d(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qo(t){return!!t&&"mapValue"in t}function eA(t){return(t?.mapValue?.fields||{})[Pg]?.stringValue===kg}function Li(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Li(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Li(t.arrayValue.values[n]);return e}return{...t}}function tA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Zb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Li(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Li(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Gt(Li(this.value))}}function Dg(t){const e=[];return ms(t.fields,((n,r)=>{const s=new ht([n]);if(Qo(r)){const i=Dg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new wt(e,0,de.min(),de.min(),de.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,de.min(),de.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,de.min(),de.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class va{constructor(e,n){this.position=e,this.inclusive=n}}function yd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ea{constructor(e,n="asc"){this.field=e,this.dir=n}}function nA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ng{}class et extends Ng{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sA(e,n,r):n==="array-contains"?new aA(e,r):n==="in"?new lA(e,r):n==="not-in"?new cA(e,r):n==="array-contains-any"?new uA(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new iA(e,r):new oA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qs(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends Ng{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Nn(e,n)}matches(e){return Og(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Og(t){return t.op==="and"}function Vg(t){return rA(t)&&Og(t)}function rA(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Dc(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Ws(t.value);if(Vg(t))return t.filters.map((e=>Dc(e))).join(",");{const e=t.filters.map((n=>Dc(n))).join(",");return`${t.op}(${e})`}}function xg(t,e){return t instanceof et?(function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Dn(r.value,s.value)})(t,e):t instanceof Nn?(function(r,s){return s instanceof Nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&xg(o,s.filters[l])),!0):!1})(t,e):void fe(19439)}function Mg(t){return t instanceof et?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ws(n.value)}`})(t):t instanceof Nn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Mg).join(" ,")+"}"})(t):"Filter"}class sA extends et{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class iA extends et{constructor(e,n){super(e,"in",n),this.keys=Lg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class oA extends et{constructor(e,n){super(e,"not-in",n),this.keys=Lg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Lg(t,e){return(e.arrayValue?.values||[]).map((n=>ae.fromName(n.referenceValue)))}class aA extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Iu(n)&&Zi(n.arrayValue,this.value)}}class lA extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zi(this.value.arrayValue,n)}}class cA extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Zi(this.value.arrayValue,n)}}class uA extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Zi(this.value.arrayValue,r)))}}/**
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
 */class hA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Ed(t,e=null,n=[],r=[],s=null,i=null,o=null){return new hA(t,e,n,r,s,i,o)}function bu(t){const e=pe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Dc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Za(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ws(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ws(r))).join(",")),e.Te=n}return e.Te}function Au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vd(t.startAt,e.startAt)&&vd(t.endAt,e.endAt)}function Nc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function fA(t,e,n,r,s,i,o,l){return new tl(t,e,n,r,s,i,o,l)}function Ru(t){return new tl(t)}function wd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dA(t){return t.collectionGroup!==null}function Ui(t){const e=pe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(ht.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ea(i,r))})),n.has(ht.keyField().canonicalString())||e.Ie.push(new Ea(ht.keyField(),r))}return e.Ie}function Tn(t){const e=pe(t);return e.Ee||(e.Ee=pA(e,Ui(t))),e.Ee}function pA(t,e){if(t.limitType==="F")return Ed(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ea(s.field,i)}));const n=t.endAt?new va(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new va(t.startAt.position,t.startAt.inclusive):null;return Ed(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oc(t,e,n){return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nl(t,e){return Au(Tn(t),Tn(e))&&t.limitType===e.limitType}function Ug(t){return`${bu(Tn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Mg(s))).join(", ")}]`),Za(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ws(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ws(s))).join(",")),`Target(${r})`})(Tn(t))}; limitType=${t.limitType})`}function rl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ui(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=yd(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Ui(r),s)||r.endAt&&!(function(o,l,c){const u=yd(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Ui(r),s))})(t,e)}function mA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fg(t){return(e,n)=>{let r=!1;for(const s of Ui(t)){const i=gA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gA(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?qs(c,u):fe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ig(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new $e(ae.comparator);function tr(){return _A}const Bg=new $e(ae.comparator);function bi(...t){let e=Bg;for(const n of t)e=e.insert(n.key,n);return e}function jg(t){let e=Bg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Xr(){return Fi()}function $g(){return Fi()}function Fi(){return new gs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const yA=new $e(ae.comparator),vA=new nt(ae.comparator);function Ie(...t){let e=vA;for(const n of t)e=e.add(n);return e}const EA=new nt(Te);function wA(){return EA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(e)?"-0":e}}function Hg(t){return{integerValue:""+t}}function TA(t,e){return Kb(e)?Hg(e):Su(t,e)}/**
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
 */class sl{constructor(){this._=void 0}}function IA(t,e,n){return t instanceof eo?(function(s,i){const o={fields:{[Rg]:{stringValue:Ag},[Cg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tu(i)&&(i=el(i)),i&&(o.fields[Sg]=i),{mapValue:o}})(n,e):t instanceof to?qg(t,e):t instanceof no?Wg(t,e):(function(s,i){const o=zg(s,i),l=Td(o)+Td(s.Ae);return kc(o)&&kc(s.Ae)?Hg(l):Su(s.serializer,l)})(t,e)}function bA(t,e,n){return t instanceof to?qg(t,e):t instanceof no?Wg(t,e):n}function zg(t,e){return t instanceof wa?(function(r){return kc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class eo extends sl{}class to extends sl{constructor(e){super(),this.elements=e}}function qg(t,e){const n=Gg(e);for(const r of t.elements)n.some((s=>Dn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class no extends sl{constructor(e){super(),this.elements=e}}function Wg(t,e){let n=Gg(e);for(const r of t.elements)n=n.filter((s=>!Dn(s,r)));return{arrayValue:{values:n}}}class wa extends sl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Td(t){return Ge(t.integerValue||t.doubleValue)}function Gg(t){return Iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.field=e,this.transform=n}}function RA(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof to&&s instanceof to||r instanceof no&&s instanceof no?zs(r.elements,s.elements,Dn):r instanceof wa&&s instanceof wa?Dn(r.Ae,s.Ae):r instanceof eo&&s instanceof eo})(t.transform,e.transform)}class SA{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class il{}function Kg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yg(t.key,Kn.none()):new po(t.key,t.data,Kn.none());{const n=t.data,r=Gt.empty();let s=new nt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _s(t.key,r,new sn(s.toArray()),Kn.none())}}function CA(t,e,n){t instanceof po?(function(s,i,o){const l=s.value.clone(),c=bd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof _s?(function(s,i,o){if(!Yo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=bd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Qg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Bi(t,e,n,r){return t instanceof po?(function(i,o,l,c){if(!Yo(i.precondition,o))return l;const u=i.value.clone(),f=Ad(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof _s?(function(i,o,l,c){if(!Yo(i.precondition,o))return l;const u=Ad(i.fieldTransforms,c,o),f=o.data;return f.setAll(Qg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Yo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function PA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=zg(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function Id(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zs(r,s,((i,o)=>RA(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends il{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _s extends il{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function bd(t,e,n){const r=new Map;De(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,bA(o,l,n[s]))}return r}function Ad(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,IA(i,o,e))}return r}class Yg extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kA extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&CA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$g();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Kg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ie())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,((n,r)=>Id(n,r)))&&zs(this.baseMutations,e.baseMutations,((n,r)=>Id(n,r)))}}class Cu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return yA})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Cu(e,n,r,s)}}/**
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
 */class NA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class OA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Ae;function VA(t){switch(t){case H.OK:return fe(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function Jg(t){if(t===void 0)return er("GRPC error has no .code"),H.UNKNOWN;switch(t){case Qe.OK:return H.OK;case Qe.CANCELLED:return H.CANCELLED;case Qe.UNKNOWN:return H.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return H.INTERNAL;case Qe.UNAVAILABLE:return H.UNAVAILABLE;case Qe.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Qe.NOT_FOUND:return H.NOT_FOUND;case Qe.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Qe.ABORTED:return H.ABORTED;case Qe.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Qe.DATA_LOSS:return H.DATA_LOSS;default:return fe(39323,{code:t})}}(Ae=Qe||(Qe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xA(){return new TextEncoder}/**
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
 */const MA=new Pr([4294967295,4294967295],0);function Rd(t){const e=xA().encode(t),n=new fg;return n.update(e),new Uint8Array(n.digest())}function Sd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([s,i],0)]}class Pu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ai(`Invalid padding: ${n}`);if(r<0)throw new Ai(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ai(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ai(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Pr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Pr.fromNumber(r)));return s.compare(MA)===1&&(s=new Pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Rd(e),[r,s]=Sd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Pu(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=Rd(e),[r,s]=Sd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ai extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,mo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ol(de.min(),s,new $e(Te),tr(),Ie())}}class mo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mo(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Xg{constructor(e,n){this.targetId=e,this.Ce=n}}class Zg{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cd{constructor(){this.ve=0,this.Fe=Pd(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe(38017,{changeType:i})}})),new mo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Pd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class LA{constructor(e){this.Ge=e,this.ze=new Map,this.je=tr(),this.Je=Fo(),this.He=Fo(),this.Ye=new $e(Te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Nc(i))if(r===0){const o=new ae(i.path);this.et(n,o,wt.newNoDocument(o,de.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Lr(r).toUint8Array()}catch(c){if(c instanceof bg)return Hs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Pu(o,s,i)}catch(c){return Hs(c instanceof Ai?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Nc(l.target)){const c=new ae(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,wt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Ie();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ol(e,n,this.Ye,this.je,r);return this.je=tr(),this.Je=Fo(),this.He=Fo(),this.Ye=new $e(Te),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Cd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new nt(Te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new nt(Te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fo(){return new $e(ae.comparator)}function Pd(){return new $e(ae.comparator)}const UA={asc:"ASCENDING",desc:"DESCENDING"},FA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BA={and:"AND",or:"OR"};class jA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vc(t,e){return t.useProto3Json||Za(e)?e:{value:e}}function Ta(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function e_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $A(t,e){return Ta(t,e.toTimestamp())}function In(t){return De(!!t,49232),de.fromTimestamp((function(n){const r=Mr(n);return new je(r.seconds,r.nanos)})(t))}function ku(t,e){return xc(t,e).canonicalString()}function xc(t,e){const n=(function(s){return new Be(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function t_(t){const e=Be.fromString(t);return De(o_(e),10190,{key:e.toString()}),e}function Mc(t,e){return ku(t.databaseId,e.path)}function Zl(t,e){const n=t_(e);if(n.get(1)!==t.databaseId.projectId)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(r_(n))}function n_(t,e){return ku(t.databaseId,e)}function HA(t){const e=t_(t);return e.length===4?Be.emptyPath():r_(e)}function Lc(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function r_(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function kd(t,e,n){return{name:Mc(t,e),fields:n.value.mapValue.fields}}function zA(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(De(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?H.UNKNOWN:Jg(u.code);return new se(f,u.message||"")})(o);n=new Zg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zl(t,r.document.name),i=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):de.min(),l=new Gt({mapValue:{fields:r.document.fields}}),c=wt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Jo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zl(t,r.document),i=r.readTime?In(r.readTime):de.min(),o=wt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Jo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zl(t,r.document),i=r.removedTargetIds||[];n=new Jo([],i,s,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new OA(s,i),l=r.targetId;n=new Xg(l,o)}}return n}function qA(t,e){let n;if(e instanceof po)n={update:kd(t,e.key,e.value)};else if(e instanceof Yg)n={delete:Mc(t,e.key)};else if(e instanceof _s)n={update:kd(t,e.key,e.data),updateMask:eR(e.fieldMask)};else{if(!(e instanceof kA))return fe(16599,{Vt:e.type});n={verify:Mc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof eo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof to)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof no)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw fe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:$A(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe(27497)})(t,e.precondition)),n}function WA(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?In(s.updateTime):In(i);return o.isEqual(de.min())&&(o=In(i)),new SA(o,s.transformResults||[])})(n,e)))):[]}function GA(t,e){return{documents:[n_(t,e.path)]}}function KA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=n_(t,s);const i=(function(u){if(u.length!==0)return i_(Nn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Ps(m.field),direction:JA(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function QA(t){let e=HA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=s_(p);return m instanceof Nn&&Vg(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(V){return new Ea(ks(V.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Za(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,y=p.values||[];return new va(y,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,y=p.values||[];return new va(y,m)})(n.endAt)),fA(e,s,o,i,l,"F",c,u)}function YA(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function s_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ks(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ks(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ks(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return et.create(ks(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Nn.create(n.compositeFilter.filters.map((r=>s_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(n.compositeFilter.op))})(t):fe(30097,{filter:t})}function JA(t){return UA[t]}function XA(t){return FA[t]}function ZA(t){return BA[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function ks(t){return ht.fromServerFormat(t.fieldPath)}function i_(t){return t instanceof et?(function(n){if(n.op==="=="){if(_d(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(gd(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_d(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(gd(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:XA(n.op),value:n.value}}})(t):t instanceof Nn?(function(n){const r=n.getFilters().map((s=>i_(s)));return r.length===1?r[0]:{compositeFilter:{op:ZA(n.op),filters:r}}})(t):fe(54877,{filter:t})}function eR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function o_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.yt=e}}function nR(t){const e=QA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oc(e,e.limit,"L"):e}/**
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
 */class rR{constructor(){this.Cn=new sR}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(xr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class sR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Be.comparator)).toArray()}}/**
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
 */const Dd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},a_=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(a_,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Gs(0)}static cr(){return new Gs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="LruGarbageCollector",iR=1048576;function Od([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class oR{constructor(e){this.Ir=e,this.buffer=new nt(Od),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Od(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(Nd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xs(n)?te(Nd,"Ignoring IndexedDB error during garbage collection: ",n):await Js(n)}await this.Vr(3e5)}))}}class lR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Xa.ce);const r=new oR(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Dd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Ss()<=we.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function cR(t,e){return new lR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.changes=new gs((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Bi(r.mutation,s,sn.empty(),je.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ie()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Xr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=bi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ie())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=tr();const o=Fi(),l=(function(){return Fi()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof _s)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Bi(f.mutation,u,f.mutation.getFieldMask(),je.now())):o.set(u.key,sn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>l.set(u,new hR(f,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=Fi();let s=new $e(((o,l)=>o-l)),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||sn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Ie()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=$g();f.forEach((m=>{if(!i.has(m)){const y=Kg(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Xr());let l=Yi,c=i;return o.next((u=>j.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ie()))).next((f=>({batchId:l,changes:jg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next((r=>{let s=bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=bi();return this.indexManager.getCollectionParents(e,i).next((l=>j.forEach(l,(c=>{const u=(function(p,m){return new tl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,wt.newInvalidDocument(f)))}));let l=bi();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&Bi(f.mutation,u,sn.empty(),je.now()),rl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:In(s.createTime)}})(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:nR(s.bundledQuery),readTime:In(s.readTime)}})(n)),j.resolve()}}/**
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
 */class pR{constructor(){this.overlays=new $e(ae.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return j.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Xr(),i=n.length+1,o=new ae(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Xr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Xr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return j.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NA(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class mR{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.Qr=new nt(it.$r),this.Ur=new nt(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new it(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ae(new Be([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ae(new Be([])),r=new it(n,e),s=new it(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new it(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ae.comparator(e.key,n.key)||Te(e.Yr,n.Yr)}static Kr(e,n){return Te(e.Yr,n.Yr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new nt(it.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new it(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?wu:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const l=this.Xr(o.Yr);i.push(l)})),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(Te);return n.forEach((s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{r=r.add(l.Yr)}))})),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new it(new ae(i),0);let l=new nt(Te);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)}),o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){De(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,(s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new it(n,0),s=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.ri=e,this.docs=(function(){return new $e(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))})),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tr();const o=n.path,l=new ae(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zb(Hb(f),r)<=0||(s.has(f.key)||rl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe(9500)}ii(e,n){return j.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new yR(this)}getSize(e){return j.resolve(this.size)}}class yR extends uR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.persistence=e,this.si=new gs((n=>bu(n)),Au),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new Du,this.targetCount=0,this.ai=Gs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),j.waitFor(i).next((()=>s))}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Xa(0),this.li=!1,this.li=!0,this.hi=new mR,this.referenceDelegate=e(this),this.Pi=new vR(this),this.indexManager=new rR,this.remoteDocumentCache=(function(s){return new _R(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new tR(n),this.Ii=new dR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new gR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new ER(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return j.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class ER extends Wb{constructor(e){super(),this.currentSequenceNumber=e}}class Nu{constructor(e){this.persistence=e,this.Ri=new Du,this.Vi=null}static mi(e){return new Nu(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,(r=>{const s=ae.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,de.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ia{constructor(e,n){this.persistence=e,this.pi=new gs((r=>Qb(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=cR(this,n)}static mi(e,n){return new Ia(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return j.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?j.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((l=>{l||(r++,i.removeEntry(o,de.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ko(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ou(e,n.fromCache,r,s)}}/**
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
 */class wR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class TR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return dI()?8:Gb(bt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new wR;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Ss()<=we.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Ss()<=we.DEBUG&&te("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ss()<=we.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):j.resolve())}ys(e,n){if(wd(n))return j.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Oc(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Oc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,r,s){return wd(n)||s.isEqual(de.min())?j.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(Ss()<=we.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.vs(e,o,n,$b(s,Yi)).next((l=>l)))}))}Ds(e,n){let r=new nt(Fg(e));return n.forEach(((s,i)=>{rl(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Ss()<=we.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.ps.getDocumentsMatchingQuery(e,n,xr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LocalStore",IR=3e8;class bR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new $e(Te),this.xs=new gs((i=>bu(i)),Au),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function AR(t,e,n,r){return new bR(t,e,n,r)}async function c_(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Ie();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function RR(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let y=j.resolve();return m.forEach((V=>{y=y.next((()=>f.getEntry(c,V))).next((N=>{const D=u.docVersions.get(V);De(D!==null,48541),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))}))})),y.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function u_(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function SR(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ft.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(N,D,L){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=IR?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(m,y,f)&&l.push(n.Pi.updateTargetData(i,y))}));let c=tr(),u=Ie();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(CR(i,o,e.documentUpdates).next((f=>{c=f.ks,u=f.qs}))),!r.isEqual(de.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return j.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function CR(t,e,n){let r=Ie(),s=Ie();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=tr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te(Vu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:s}}))}function PR(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=wu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function kR(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,j.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Uc(t,e,n){const r=pe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Xs(o))throw o;te(Vu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Vd(t,e,n){const r=pe(t);let s=de.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=pe(c),m=p.xs.get(f);return m!==void 0?j.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,Tn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ie()))).next((l=>(DR(r,mA(e),l),{documents:l,Qs:i})))))}function DR(t,e,n){let r=t.Os.get(e)||de.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class xd{constructor(){this.activeTargetIds=wA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NR{constructor(){this.Mo=new xd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OR{Oo(e){}shutdown(){}}/**
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
 */const Md="ConnectivityMonitor";class Ld{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(Md,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(Md,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bo=null;function Fc(){return Bo===null?Bo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Bo++,"0x"+Bo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="RestConnection",VR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===_a?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Fc(),l=this.zo(e,n.toUriEncodedString());te(ec,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),f=ds(u);return this.Jo(e,l,c,r,f).then((p=>(te(ec,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Hs(ec,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ys})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=VR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class LR extends xR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Fc();return new Promise(((l,c)=>{const u=new dg;u.setWithCredentials(!0),u.listenOnce(pg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Go.NO_ERROR:const p=u.getResponseJson();te(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Go.TIMEOUT:te(_t,`RPC '${e}' ${o} timed out`),c(new se(H.DEADLINE_EXCEEDED,"Request time out"));break;case Go.HTTP_ERROR:const m=u.getStatus();if(te(_t,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const V=y?.error;if(V&&V.status&&V.message){const N=(function(L){const M=L.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(M)>=0?M:H.UNKNOWN})(V.status);c(new se(N,V.message))}else c(new se(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new se(H.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(_t,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);te(_t,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Fc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_g(),l=gg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");te(_t,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.I_(p);let m=!1,y=!1;const V=new MR({Yo:D=>{y?te(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(te(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),te(_t,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),N=(D,L,M)=>{D.listen(L,(C=>{try{M(C)}catch(P){setTimeout((()=>{throw P}),0)}}))};return N(p,Ii.EventType.OPEN,(()=>{y||(te(_t,`RPC '${e}' stream ${s} transport opened.`),V.o_())})),N(p,Ii.EventType.CLOSE,(()=>{y||(y=!0,te(_t,`RPC '${e}' stream ${s} transport closed`),V.a_(),this.E_(p))})),N(p,Ii.EventType.ERROR,(D=>{y||(y=!0,Hs(_t,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),V.a_(new se(H.UNAVAILABLE,"The operation could not be completed")))})),N(p,Ii.EventType.MESSAGE,(D=>{if(!y){const L=D.data[0];De(!!L,16349);const M=L,C=M?.error||M[0]?.error;if(C){te(_t,`RPC '${e}' stream ${s} received error:`,C);const P=C.status;let z=(function(_){const v=Qe[_];if(v!==void 0)return Jg(v)})(P),Z=C.message;z===void 0&&(z=H.INTERNAL,Z="Unknown error status: "+P+" with message "+C.message),y=!0,V.a_(new se(z,Z)),p.close()}else te(_t,`RPC '${e}' stream ${s} received:`,L),V.u_(L)}})),N(l,mg.STAT_EVENT,(D=>{D.stat===Sc.PROXY?te(_t,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Sc.NOPROXY&&te(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.__()}),0),V}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){return new jA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="PersistentStream";class f_{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new h_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new se(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(Ud,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(te(Ud,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class UR extends f_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=zA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?In(o.readTime):de.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Lc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Nc(c)?{documents:GA(i,c)}:{query:KA(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=e_(i,o.resumeToken);const u=Vc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Ta(i,o.snapshotVersion.toTimestamp());const u=Vc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=YA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Lc(this.serializer),n.removeTarget=e,this.q_(n)}}class FR extends f_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=WA(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Lc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>qA(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{}class jR extends BR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,xc(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(H.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,xc(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(H.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class $R{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(er(n),this.aa=!1):te("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="RemoteStore";class HR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{ys(this)&&(te(cs,"Restarting streams for network reachability change."),await(async function(c){const u=pe(c);u.Ea.add(4),await go(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ll(u)})(this))}))})),this.Ra=new $R(r,s)}}async function ll(t){if(ys(t))for(const e of t.da)await e(!0)}async function go(t){for(const e of t.da)await e(!1)}function d_(t,e){const n=pe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Uu(n)?Lu(n):Zs(n).O_()&&Mu(n,e))}function xu(t,e){const n=pe(t),r=Zs(n);n.Ia.delete(e),r.O_()&&p_(n,e),n.Ia.size===0&&(r.O_()?r.L_():ys(n)&&n.Ra.set("Unknown"))}function Mu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zs(t).Y_(e)}function p_(t,e){t.Va.Ue(e),Zs(t).Z_(e)}function Lu(t){t.Va=new LA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Zs(t).start(),t.Ra.ua()}function Uu(t){return ys(t)&&!Zs(t).x_()&&t.Ia.size>0}function ys(t){return pe(t).Ea.size===0}function m_(t){t.Va=void 0}async function zR(t){t.Ra.set("Online")}async function qR(t){t.Ia.forEach(((e,n)=>{Mu(t,e)}))}async function WR(t,e){m_(t),Uu(t)?(t.Ra.ha(e),Lu(t)):t.Ra.set("Unknown")}async function GR(t,e,n){if(t.Ra.set("Online"),e instanceof Zg&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){te(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ba(t,r)}else if(e instanceof Jo?t.Va.Ze(e):e instanceof Xg?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const r=await u_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),p_(i,c);const p=new Tr(f.target,c,u,f.sequenceNumber);Mu(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){te(cs,"Failed to raise snapshot:",r),await ba(t,r)}}async function ba(t,e,n){if(!Xs(e))throw e;t.Ea.add(1),await go(t),t.Ra.set("Offline"),n||(n=()=>u_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{te(cs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ll(t)}))}function g_(t,e){return e().catch((n=>ba(t,n,e)))}async function cl(t){const e=pe(t),n=Fr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wu;for(;KR(e);)try{const s=await PR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,QR(e,s)}catch(s){await ba(e,s)}__(e)&&y_(e)}function KR(t){return ys(t)&&t.Ta.length<10}function QR(t,e){t.Ta.push(e);const n=Fr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function __(t){return ys(t)&&!Fr(t).x_()&&t.Ta.length>0}function y_(t){Fr(t).start()}async function YR(t){Fr(t).ra()}async function JR(t){const e=Fr(t);for(const n of t.Ta)e.ea(n.mutations)}async function XR(t,e,n){const r=t.Ta.shift(),s=Cu.from(r,e,n);await g_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await cl(t)}async function ZR(t,e){e&&Fr(t).X_&&await(async function(r,s){if((function(o){return VA(o)&&o!==H.ABORTED})(s.code)){const i=r.Ta.shift();Fr(r).B_(),await g_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await cl(r)}})(t,e),__(t)&&y_(t)}async function Fd(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),te(cs,"RemoteStore received new credentials");const r=ys(n);n.Ea.add(3),await go(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ll(n)}async function eS(t,e){const n=pe(t);e?(n.Ea.delete(2),await ll(n)):e||(n.Ea.add(2),await go(n),n.Ra.set("Unknown"))}function Zs(t){return t.ma||(t.ma=(function(n,r,s){const i=pe(n);return i.sa(),new UR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:zR.bind(null,t),t_:qR.bind(null,t),r_:WR.bind(null,t),H_:GR.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Uu(t)?Lu(t):t.Ra.set("Unknown")):(await t.ma.stop(),m_(t))}))),t.ma}function Fr(t){return t.fa||(t.fa=(function(n,r,s){const i=pe(n);return i.sa(),new FR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:YR.bind(null,t),r_:ZR.bind(null,t),ta:JR.bind(null,t),na:XR.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await cl(t)):(await t.fa.stop(),t.Ta.length>0&&(te(cs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Fu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bu(t,e){if(er("AsyncQueue",`${e}: ${t}`),Xs(t))return new se(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{static emptySet(e){return new Vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=bi(),this.sortedSet=new $e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.ga=new $e(ae.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ks{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Ks(e,n,Vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class nS{constructor(){this.queries=jd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=jd(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new se(H.ABORTED,"Firestore shutting down"))}}function jd(){return new gs((t=>Ug(t)),nl)}async function v_(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new tS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Bu(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ju(n)}async function E_(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rS(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&ju(n)}function sS(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function ju(t){t.Ca.forEach((e=>{e.next()}))}var Bc,$d;($d=Bc||(Bc={})).Ma="default",$d.Cache="cache";class w_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.key=e}}class I_{constructor(e){this.key=e}}class iS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=Fg(e),this.tu=new Vs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Bd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),y=rl(this.query,p)?p:null,V=!!m&&this.mutatedKeys.has(m.key),N=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;m&&y?m.data.isEqual(y.data)?V!==N&&(r.track({type:3,doc:y}),D=!0):this.su(m,y)||(r.track({type:2,doc:y}),D=!0,(c&&this.eu(y,c)>0||u&&this.eu(y,u)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),D=!0):m&&!y&&(r.track({type:1,doc:m}),D=!0,(c||u)&&(l=!0)),D&&(y?(o=o.add(y),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(y,V){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:D})}};return N(y)-N(V)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Ks(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new I_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new T_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ks.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const $u="SyncEngine";class oS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aS{constructor(e){this.key=e,this.hu=!1}}class lS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new gs((l=>Ug(l)),nl),this.Iu=new Map,this.Eu=new Set,this.du=new $e(ae.comparator),this.Au=new Map,this.Ru=new Du,this.Vu={},this.mu=new Map,this.fu=Gs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function cS(t,e,n=!0){const r=P_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await b_(r,e,n,!0),s}async function uS(t,e){const n=P_(t);await b_(n,e,!0,!1)}async function b_(t,e,n,r){const s=await kR(t.localStore,Tn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await hS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&d_(t.remoteStore,s),l}async function hS(t,e,n,r,s){t.pu=(p,m,y)=>(async function(N,D,L,M){let C=D.view.ru(L);C.Cs&&(C=await Vd(N.localStore,D.query,!1).then((({documents:b})=>D.view.ru(b,C))));const P=M&&M.targetChanges.get(D.targetId),z=M&&M.targetMismatches.get(D.targetId)!=null,Z=D.view.applyChanges(C,N.isPrimaryClient,P,z);return zd(N,D.targetId,Z.au),Z.snapshot})(t,p,m,y);const i=await Vd(t.localStore,e,!0),o=new iS(e,i.Qs),l=o.ru(i.documents),c=mo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);zd(t,n,u.au);const f=new oS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function fS(t,e,n){const r=pe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!nl(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Uc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xu(r.remoteStore,s.targetId),jc(r,s.targetId)})).catch(Js)):(jc(r,s.targetId),await Uc(r.localStore,s.targetId,!0))}async function dS(t,e){const n=pe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xu(n.remoteStore,r.targetId))}async function pS(t,e,n){const r=wS(t);try{const s=await(function(o,l){const c=pe(o),u=je.now(),f=l.reduce(((y,V)=>y.add(V.key)),Ie());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let V=tr(),N=Ie();return c.Ns.getEntries(y,f).next((D=>{V=D,V.forEach(((L,M)=>{M.isValidDocument()||(N=N.add(L))}))})).next((()=>c.localDocuments.getOverlayedDocuments(y,V))).next((D=>{p=D;const L=[];for(const M of l){const C=PA(M,p.get(M.key).overlayedDocument);C!=null&&L.push(new _s(M.key,C,Dg(C.value.mapValue),Kn.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,L,l)})).next((D=>{m=D;const L=D.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(y,D.batchId,L)}))})).then((()=>({batchId:m.batchId,changes:jg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new $e(Te)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await _o(r,s.changes),await cl(r.remoteStore)}catch(s){const i=Bu(s,"Failed to persist write");n.reject(i)}}async function A_(t,e){const n=pe(t);try{const r=await SR(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?De(o.hu,14607):s.removedDocuments.size>0&&(De(o.hu,42227),o.hu=!1))})),await _o(n,r,e)}catch(r){await Js(r)}}function Hd(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=pe(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&ju(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mS(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new $e(ae.comparator);o=o.insert(i,wt.newNoDocument(i,de.min()));const l=Ie().add(i),c=new ol(de.min(),new Map,new $e(Te),o,l);await A_(r,c),r.du=r.du.remove(i),r.Au.delete(e),Hu(r)}else await Uc(r.localStore,e,!1).then((()=>jc(r,e,n))).catch(Js)}async function gS(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await RR(n.localStore,e);S_(n,r,null),R_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _o(n,s)}catch(s){await Js(s)}}async function _S(t,e,n){const r=pe(t);try{const s=await(function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(De(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);S_(r,e,n),R_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _o(r,s)}catch(s){await Js(s)}}function R_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function S_(t,e,n){const r=pe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||C_(t,r)}))}function C_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(xu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Hu(t))}function zd(t,e,n){for(const r of n)r instanceof T_?(t.Ru.addReference(r.key,e),yS(t,r)):r instanceof I_?(te($u,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||C_(t,r.key)):fe(19791,{wu:r})}function yS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(te($u,"New document in limbo: "+n),t.Eu.add(r),Hu(t))}function Hu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ae(Be.fromString(e)),r=t.fu.next();t.Au.set(r,new aS(n)),t.du=t.du.insert(n,r),d_(t.remoteStore,new Tr(Tn(Ru(n.path)),r,"TargetPurposeLimboResolution",Xa.ce))}}async function _o(t,e,n){const r=pe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Ou.As(c.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(c,u){const f=pe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>j.forEach(u,(m=>j.forEach(m.Es,(y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y))).next((()=>j.forEach(m.ds,(y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))))))}catch(p){if(!Xs(p))throw p;te(Vu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=f.Ms.get(m),V=y.snapshotVersion,N=y.withLastLimboFreeSnapshotVersion(V);f.Ms=f.Ms.insert(m,N)}}})(r.localStore,i))}async function vS(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){te($u,"User change. New user:",e.toKey());const r=await c_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new se(H.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _o(n,r.Ls)}}function ES(t,e){const n=pe(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function P_(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=A_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ES.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mS.bind(null,e),e.Pu.H_=rS.bind(null,e.eventManager),e.Pu.yu=sS.bind(null,e.eventManager),e}function wS(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_S.bind(null,e),e}class Aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=al(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return AR(this.persistence,new TR,e.initialUser,this.serializer)}Cu(e){return new l_(Nu.mi,this.serializer)}Du(e){return new NR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Aa.provider={build:()=>new Aa};class TS extends Aa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){De(this.persistence.referenceDelegate instanceof Ia,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new aR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new l_((r=>Ia.mi(r,n)),this.serializer)}}class $c{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vS.bind(null,this.syncEngine),await eS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new nS})()}createDatastore(e){const n=al(e.databaseInfo.databaseId),r=(function(i){return new LR(i)})(e.databaseInfo);return(function(i,o,l,c){return new jR(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new HR(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Hd(this.syncEngine,n,0)),(function(){return Ld.v()?new Ld:new OR})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new lS(s,i,o,l,c,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=pe(n);te(cs,"RemoteStore shutting down."),r.Ea.add(5),await go(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}$c.provider={build:()=>new $c};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class k_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="FirestoreClient";class IS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=vu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{te(Br,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(te(Br,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Bu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),te(Br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await c_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function qd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bS(t);te(Br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Fd(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Fd(e.remoteStore,s))),t._onlineComponents=e}async function bS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(Br,"Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Hs("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new Aa)}}else te(Br,"Using default OfflineComponentProvider"),await nc(t,new TS(void 0));return t._offlineComponents}async function D_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(Br,"Using user provided OnlineComponentProvider"),await qd(t,t._uninitializedComponentsProvider._online)):(te(Br,"Using default OnlineComponentProvider"),await qd(t,new $c))),t._onlineComponents}function AS(t){return D_(t).then((e=>e.syncEngine))}async function N_(t){const e=await D_(t),n=e.eventManager;return n.onListen=cS.bind(null,e.syncEngine),n.onUnlisten=fS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=uS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dS.bind(null,e.syncEngine),n}function RS(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new k_({next:m=>{f.Nu(),o.enqueueAndForget((()=>E_(i,p)));const y=m.docs.has(l);!y&&m.fromCache?u.reject(new se(H.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new se(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new w_(Ru(l.path),f,{includeMetadataChanges:!0,qa:!0});return v_(i,p)})(await N_(t),t.asyncQueue,e,n,r))),r.promise}function SS(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new k_({next:m=>{f.Nu(),o.enqueueAndForget((()=>E_(i,p))),m.fromCache&&c.source==="server"?u.reject(new se(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new w_(l,f,{includeMetadataChanges:!0,qa:!0});return v_(i,p)})(await N_(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function O_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="firestore.googleapis.com",Gd=!0;class Kd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=V_,this.ssl=Gd}else this.host=e.host,this.ssl=e.ssl??Gd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=a_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iR)throw new se(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ul{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Db;switch(r.type){case"firstParty":return new xb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Wd.get(n);r&&(te("ComponentProvider","Removing Datastore"),Wd.delete(n),r.terminate())})(this),Promise.resolve()}}function CS(t,e,n,r={}){t=ls(t,ul);const s=ds(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(du(`https://${l}`),pu("Firestore",!0)),i.host!==V_&&i.host!==l&&Hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!is(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=vt.MOCK_USER;else{u=og(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new se(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new vt(p)}t._authCredentials=new Nb(new vg(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hl(this.firestore,e,this._query)}}class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(fo(n,tt._jsonSchema))return new tt(e,r||null,new ae(Be.fromString(n.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:Ye("string",tt._jsonSchemaVersion),referencePath:Ye("string")};class kr extends hl{constructor(e,n,r){super(e,n,Ru(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new ae(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function PS(t,e,...n){if(t=Ft(t),Eg("collection","path",e),t instanceof ul){const r=Be.fromString(e,...n);return ld(r),new kr(t,null,r)}{if(!(t instanceof tt||t instanceof kr))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return ld(r),new kr(t.firestore,null,r)}}function Mt(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=vu.newId()),Eg("doc","path",e),t instanceof ul){const r=Be.fromString(e,...n);return ad(r),new tt(t,null,new ae(r))}{if(!(t instanceof tt||t instanceof kr))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return ad(r),new tt(t.firestore,t instanceof kr?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="AsyncQueue";class Yd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new h_(this,"async_queue_retry"),this._c=()=>{const r=tc();r&&te(Qd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Gn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Xs(e))throw e;te(Qd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,er("INTERNAL UNHANDLED ERROR: ",Jd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Fu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&fe(47125,{Pc:Jd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Jd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class fl extends ul{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Yd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yd(e),this._firestoreClient=void 0,await e}}}function kS(t,e){const n=typeof t=="object"?t:_u(),r=typeof t=="string"?t:_a,s=Ja(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rg("firestore");i&&CS(s,...i)}return s}function zu(t){if(t._terminated)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||DS(t),t._firestoreClient}function DS(t){const e=t._freezeSettings(),n=(function(s,i,o,l){return new Xb(s,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,O_(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new IS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(ft.fromBase64String(e))}catch(n){throw new se(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fo(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:Ye("string",Kt._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bn._jsonSchemaVersion}}static fromJSON(e){if(fo(e,bn._jsonSchema))return new bn(e.latitude,e.longitude)}}bn._jsonSchemaVersion="firestore/geoPoint/1.0",bn._jsonSchema={type:Ye("string",bn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
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
 */class An{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:An._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fo(e,An._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new An(e.vectorValues);throw new se(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}An._jsonSchemaVersion="firestore/vectorValue/1.0",An._jsonSchema={type:Ye("string",An._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=/^__.*__$/;class OS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,n,this.fieldTransforms):new po(e,this.data,n,this.fieldTransforms)}}function x_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:t})}}class Gu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Gu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ra(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(x_(this.Ac)&&NS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class VS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||al(e)}Cc(e,n,r,s=!1){return new Gu({Ac:e,methodName:n,Dc:r,path:ht.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xS(t){const e=t._freezeSettings(),n=al(t._databaseId);return new VS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MS(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);F_("Data must be an object, but it was:",o,r);const l=L_(r,o);let c,u;if(i.merge)c=new sn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=LS(e,p,n);if(!o.contains(m))throw new se(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);FS(f,m)||f.push(m)}c=new sn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new OS(new Gt(l),c,u)}class Ku extends Wu{_toFieldTransform(e){return new AA(e.path,new eo)}isEqual(e){return e instanceof Ku}}function M_(t,e){if(U_(t=Ft(t)))return F_("Unsupported field value:",e,t),L_(t,e);if(t instanceof Wu)return(function(r,s){if(!x_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=M_(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=je.fromDate(r);return{timestampValue:Ta(s.serializer,i)}}if(r instanceof je){const i=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ta(s.serializer,i)}}if(r instanceof bn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:e_(s.serializer,r._byteString)};if(r instanceof tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ku(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof An)return(function(o,l){return{mapValue:{fields:{[Pg]:{stringValue:kg},[ya]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Su(l.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Eu(r)}`)})(t,e)}function L_(t,e){const n={};return Ig(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,((r,s)=>{const i=M_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function U_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof bn||t instanceof Kt||t instanceof tt||t instanceof Wu||t instanceof An)}function F_(t,e,n){if(!U_(n)||!wg(n)){const r=Eu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function LS(t,e,n){if((e=Ft(e))instanceof qu)return e._internalPath;if(typeof e=="string")return B_(t,e);throw Ra("Field path arguments must be of type string or ",t,!1,void 0,n)}const US=new RegExp("[~\\*/\\[\\]]");function B_(t,e,n){if(e.search(US)>=0)throw Ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qu(...e.split("."))._internalPath}catch{throw Ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ra(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new se(H.INVALID_ARGUMENT,l+t+c)}function FS(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BS extends j_{data(){return super.data()}}function $_(t,e){return typeof e=="string"?B_(t,e):e instanceof qu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $S{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[ya].arrayValue?.values?.map((r=>Ge(r.doubleValue)));return new An(n)}convertGeoPoint(e){return new bn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=el(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=Mr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);De(o_(r),9688,{name:e});const s=new Xi(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ns extends j_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ns._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",ns._jsonSchema={type:Ye("string",ns._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Xo extends ns{data(e={}){return super.data(e)}}class xs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Xo(this._firestore,this._userDataWriter,r.key,r,new Ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Xo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Xo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:zS(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){t=ls(t,tt);const e=ls(t.firestore,fl);return RS(zu(e),t._key).then((n=>GS(e,t,n)))}xs._jsonSchemaVersion="firestore/querySnapshot/1.0",xs._jsonSchema={type:Ye("string",xs._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class H_ extends $S{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function qS(t){t=ls(t,hl);const e=ls(t.firestore,fl),n=zu(e),r=new H_(e);return jS(t._query),SS(n,t._query).then((s=>new xs(e,r,t,s)))}function Rn(t,e,n){t=ls(t,tt);const r=ls(t.firestore,fl),s=HS(t.converter,e,n);return WS(r,[MS(xS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kn.none())])}function WS(t,e){return(function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget((async()=>pS(await AS(r),s,i))),i.promise})(zu(t),e)}function GS(t,e,n){const r=n.docs.get(e._key),s=new H_(t);return new ns(t,s,e._key,r,new Ri(n.hasPendingWrites,n.fromCache),e.converter)}function Sn(){return new Ku("serverTimestamp")}(function(e,n=!0){(function(s){Ys=s})(ps),os(new Vr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new fl(new Ob(r.getProvider("auth-internal")),new Mb(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),wn(rd,sd,e),wn(rd,sd,"esm2020")})();var KS="firebase",QS="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(KS,QS,"app");function z_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YS=z_,q_=new uo("auth","Firebase",z_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new mu("@firebase/auth");function JS(t,...e){Sa.logLevel<=we.WARN&&Sa.warn(`Auth (${ps}): ${t}`,...e)}function Zo(t,...e){Sa.logLevel<=we.ERROR&&Sa.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Yu(t,...e)}function un(t,...e){return Yu(t,...e)}function Qu(t,e,n){const r={...YS(),[e]:n};return new uo("auth","Firebase",r).create(e,{appName:t.name})}function Qn(t){return Qu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function W_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(t,"argument-error"),Qu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return q_.create(t,...e)}function he(t,e,...n){if(!t)throw Yu(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zo(e),new Error(e)}function nr(t,e){t||zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){return typeof self<"u"&&self.location?.href||""}function XS(){return Xd()==="http:"||Xd()==="https:"}function Xd(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XS()||uI()||"connection"in navigator)?navigator.onLine:!0}function eC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=aI()||hI()}get(){return ZS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rC=new yo(3e4,6e4);function sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ir(t,e,n,r,s={}){return K_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ho({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return cI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ds(t.emulatorConfig.host)&&(u.credentials="include"),G_.fetch()(await Q_(t,t.config.apiHost,n,l),u)})}async function K_(t,e,n){t._canInitEmulator=!1;const r={...tC,...e};try{const s=new iC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw jo(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qu(t,f,u);Xt(t,f)}}catch(s){if(s instanceof Vn)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function vo(t,e,n,r,s={}){const i=await ir(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Q_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ju(t.config,s):`${t.config.apiScheme}://${s}`;return nC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function sC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),rC.get())})}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}function Zd(t){return t!==void 0&&t.enterprise!==void 0}class oC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aC(t,e){return ir(t,"GET","/v2/recaptchaConfig",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(t,e){return ir(t,"POST","/v1/accounts:delete",e)}async function Ca(t,e){return ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cC(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=Xu(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:$i(rc(s.auth_time)),issuedAtTime:$i(rc(s.iat)),expirationTime:$i(rc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function rc(t){return Number(t)*1e3}function Xu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zo("JWT malformed, contained fewer than 3 sections"),null;try{const s=tg(n);return s?JSON.parse(s):(Zo("Failed to decode base64 JWT payload"),null)}catch(s){return Zo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ep(t){const e=Xu(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&uC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pa(t){const e=t.auth,n=await t.getIdToken(),r=await ro(t,Ca(e,{idToken:n}));he(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Y_(s.providerUserInfo):[],o=dC(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new zc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function fC(t){const e=Ft(t);await Pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Y_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e){const n=await K_(t,{},async()=>{const r=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Q_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ds(t.emulatorConfig.host)&&(c.credentials="include"),G_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mC(t,e){return ir(t,"POST","/v2/accounts:revokeToken",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ep(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=ep(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ms;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new hC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cC(this,e)}reload(){return fC(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await ro(this,lC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:V,stsTokenManager:N}=n;he(p&&N,e,"internal-error");const D=Ms.fromJSON(this.name,N);he(typeof p=="string",e,"internal-error"),pr(r,e.name),pr(s,e.name),he(typeof m=="boolean",e,"internal-error"),he(typeof y=="boolean",e,"internal-error"),pr(i,e.name),pr(o,e.name),pr(l,e.name),pr(c,e.name),pr(u,e.name),pr(f,e.name);const L=new on({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:u,lastLoginAt:f});return V&&Array.isArray(V)&&(L.providerData=V.map(M=>({...M}))),c&&(L._redirectEventId=c),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ms;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Y_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Ms;l.updateFromIdToken(r);const c=new on({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;function qn(t){nr(t instanceof Function,"Expected a class definition");let e=tp.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tp.set(t,e),e)}/**
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
 */class J_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}J_.type="NONE";const np=J_;/**
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
 */function ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ea(this.userKey,s.apiKey,i),this.fullPersistenceKey=ea("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ca(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(qn(np),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||qn(np);const o=ea(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Ca(e,{idToken:f}).catch(()=>{});if(!m)break;p=await on._fromGetAccountInfoResponse(e,m,f)}else p=on._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ls(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ls(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ty(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ry(e))return"Blackberry";if(sy(e))return"Webos";if(Z_(e))return"Safari";if((e.includes("chrome/")||ey(e))&&!e.includes("edge/"))return"Chrome";if(ny(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function X_(t=bt()){return/firefox\//i.test(t)}function Z_(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ey(t=bt()){return/crios\//i.test(t)}function ty(t=bt()){return/iemobile/i.test(t)}function ny(t=bt()){return/android/i.test(t)}function ry(t=bt()){return/blackberry/i.test(t)}function sy(t=bt()){return/webos/i.test(t)}function Zu(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gC(t=bt()){return Zu(t)&&!!window.navigator?.standalone}function _C(){return fI()&&document.documentMode===10}function iy(t=bt()){return Zu(t)||ny(t)||sy(t)||ry(t)||/windows phone/i.test(t)||ty(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e=[]){let n;switch(t){case"Browser":n=rp(bt());break;case"Worker":n=`${rp(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class yC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function vC(t,e={}){return ir(t,"GET","/v2/passwordPolicy",sr(t,e))}/**
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
 */const EC=6;class wC{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??EC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sp(this),this.idTokenSubscription=new sp(this),this.beforeStateQueue=new yC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ca(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(xt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(Qn(this));const n=e?Ft(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vC(this),n=new wC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mC(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&JS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function or(t){return Ft(t)}class sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=EI(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IC(t){dl=t}function ay(t){return dl.loadJS(t)}function bC(){return dl.recaptchaEnterpriseScript}function AC(){return dl.gapiScript}function RC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class SC{constructor(){this.enterprise=new CC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class CC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const PC="recaptcha-enterprise",ly="NO_RECAPTCHA";class kC{constructor(e){this.type=PC,this.auth=or(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{aC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new oC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Zd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ly)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new SC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Zd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=bC();c.length!==0&&(c+=l),ay(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function ip(t,e,n,r=!1,s=!1){const i=new kC(t);let o;if(s)o=ly;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ka(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ip(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ip(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t,e){const n=Ja(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(is(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function NC(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(qn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function OC(t,e,n){const r=or(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cy(e),{host:o,port:l}=VC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(is(u,r.config.emulator)&&is(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ds(o)?(du(`${i}//${o}${c}`),pu("Auth",!0)):xC()}function cy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VC(t){const e=cy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:op(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:op(o)}}}function op(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function MC(t,e){return ir(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(t,e){return vo(t,"POST","/v1/accounts:signInWithPassword",sr(t,e))}async function UC(t,e){return ir(t,"POST","/v1/accounts:sendOobCode",sr(t,e))}async function FC(t,e){return UC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}async function jC(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends eh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ka(e,n,"signInWithPassword",LC);case"emailLink":return BC(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ka(e,r,"signUpPassword",MC);case"emailLink":return jC(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e){return vo(t,"POST","/v1/accounts:signInWithIdp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="http://localhost";class us extends eh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new us(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:$C,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zC(t){const e=wi(Ti(t)).link,n=e?wi(Ti(e)).deep_link_id:null,r=wi(Ti(t)).deep_link_id;return(r?wi(Ti(r)).link:null)||r||n||e||t}class th{constructor(e){const n=wi(Ti(e)),r=n.apiKey??null,s=n.oobCode??null,i=HC(n.mode??null);he(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=zC(e);try{return new th(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.providerId=ei.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=th.parseLink(n);return he(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}ei.PROVIDER_ID="password";ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Eo{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Eo{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Eo{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e){return vo(t,"POST","/v1/accounts:signUp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),o=ap(r);return new hs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ap(r);return new hs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ap(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends Vn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Da(e,n,r,s)}}function uy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(t,i,e,r):i})}async function WC(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hs._forOperation(t,"link",r)}/**
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
 */async function GC(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(Qn(r));const s="reauthenticate";try{const i=await ro(t,uy(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Xu(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),hs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(t,e,n=!1){if(xt(t.app))return Promise.reject(Qn(t));const r="signIn",s=await uy(t,r,e),i=await hs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function KC(t,e){return hy(or(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fy(t){const e=or(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QC(t,e,n){const r=or(t);await ka(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",FC)}async function YC(t,e,n){if(xt(t.app))return Promise.reject(Qn(t));const r=or(t),o=await ka(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&fy(t),c}),l=await hs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function JC(t,e,n){return xt(t.app)?Promise.reject(Qn(t)):KC(Ft(t),ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fy(t),r})}function XC(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function ZC(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}const Na="__sak";/**
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
 */class dy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=1e3,tP=10;class py extends dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_C()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}py.type="LOCAL";const nP=py;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}my.type="SESSION";const gy=my;/**
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
 */function rP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ml(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await rP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ml.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=nh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function iP(t){Cn().location.href=t}/**
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
 */function _y(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function oP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aP(){return navigator?.serviceWorker?.controller||null}function lP(){return _y()?self:null}/**
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
 */const yy="firebaseLocalStorageDb",cP=1,Oa="firebaseLocalStorage",vy="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gl(t,e){return t.transaction([Oa],e?"readwrite":"readonly").objectStore(Oa)}function uP(){const t=indexedDB.deleteDatabase(yy);return new wo(t).toPromise()}function qc(){const t=indexedDB.open(yy,cP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oa,{keyPath:vy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oa)?e(r):(r.close(),await uP(),e(await qc()))})})}async function lp(t,e,n){const r=gl(t,!0).put({[vy]:e,value:n});return new wo(r).toPromise()}async function hP(t,e){const n=gl(t,!1).get(e),r=await new wo(n).toPromise();return r===void 0?null:r.value}function cp(t,e){const n=gl(t,!0).delete(e);return new wo(n).toPromise()}const fP=800,dP=3;class Ey{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ml._getInstance(lP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await oP(),!this.activeServiceWorker)return;this.sender=new sP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qc();return await lp(e,Na,"1"),await cp(e,Na),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gl(s,!1).getAll();return new wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ey.type="LOCAL";const pP=Ey;new yo(3e4,6e4);/**
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
 */function rh(t,e){return e?qn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sh extends eh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mP(t){return hy(t.auth,new sh(t),t.bypassAuthState)}function gP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),GC(n,new sh(t),t.bypassAuthState)}async function _P(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),WC(n,new sh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mP;case"linkViaPopup":case"linkViaRedirect":return _P;case"reauthViaPopup":case"reauthViaRedirect":return gP;default:Xt(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=new yo(2e3,1e4);async function vP(t,e,n){if(xt(t.app))return Promise.reject(un(t,"operation-not-supported-in-this-environment"));const r=or(t);W_(t,e,pl);const s=rh(r,n);return new Ir(r,"signInViaPopup",e,s).executeNotNull()}async function EP(t,e,n){const r=Ft(t);W_(r.auth,e,pl);const s=rh(r.auth,n);return new Ir(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Ir extends wy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yP.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="pendingRedirect",ta=new Map;class TP extends wy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ta.get(this.auth._key());if(!e){try{const r=await IP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ta.set(this.auth._key(),e)}return this.bypassAuthState||ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IP(t,e){const n=RP(e),r=AP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bP(t,e){ta.set(t._key(),e)}function AP(t){return qn(t._redirectPersistence)}function RP(t){return ea(wP,t.config.apiKey,t.name)}async function SP(t,e,n=!1){if(xt(t.app))return Promise.reject(Qn(t));const r=or(t),s=rh(r,e),o=await new TP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=600*1e3;class PP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Ty(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(un(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CP&&this.cachedEventUids.clear(),this.cachedEventUids.has(up(e))}saveEventToCache(e){this.cachedEventUids.add(up(e)),this.lastProcessedEventTime=Date.now()}}function up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ty({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function kP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ty(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e={}){return ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OP=/^https?/;async function VP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DP(t);for(const n of e)try{if(xP(n))return}catch{}Xt(t,"unauthorized-domain")}function xP(t){const e=Hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OP.test(n))return!1;if(NP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const MP=new yo(3e4,6e4);function hp(){const t=Cn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LP(t){return new Promise((e,n)=>{function r(){hp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hp(),n(un(t,"network-request-failed"))},timeout:MP.get()})}if(Cn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Cn().gapi?.load)r();else{const s=RC("iframefcb");return Cn()[s]=()=>{gapi.load?r():n(un(t,"network-request-failed"))},ay(`${AC()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw na=null,e})}let na=null;function UP(t){return na=na||LP(t),na}/**
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
 */const FP=new yo(5e3,15e3),BP="__/auth/iframe",jP="emulator/auth/iframe",$P={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zP(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ju(e,jP):`https://${t.config.authDomain}/${BP}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=HP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ho(r).slice(1)}`}async function qP(t){const e=await UP(t),n=Cn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:zP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$P,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=Cn().setTimeout(()=>{i(o)},FP.get());function c(){Cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const WP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GP=500,KP=600,QP="_blank",YP="http://localhost";class fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JP(t,e,n,r=GP,s=KP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...WP,width:r.toString(),height:s.toString(),top:i,left:o},u=bt().toLowerCase();n&&(l=ey(u)?QP:n),X_(u)&&(e=e||YP,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[y,V])=>`${m}${y}=${V},`,"");if(gC(u)&&l!=="_self")return XP(e||"",l),new fp(null);const p=window.open(e||"",l,f);he(p,t,"popup-blocked");try{p.focus()}catch{}return new fp(p)}function XP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZP="__/auth/handler",e0="emulator/auth/handler",t0=encodeURIComponent("fac");async function dp(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Eo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${t0}=${encodeURIComponent(c)}`:"";return`${n0(t)}?${ho(l).slice(1)}${u}`}function n0({config:t}){return t.emulator?Ju(t,e0):`https://${t.authDomain}/${ZP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="webStorageSupport";class r0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gy,this._completeRedirectFn=SP,this._overrideRedirectResult=bP}async _openPopup(e,n,r,s){nr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await dp(e,n,r,Hc(),s);return JP(e,i,nh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await dp(e,n,r,Hc(),s);return iP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qP(e),r=new PP(e);return n.register("authEvent",s=>(he(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sc,{type:sc},s=>{const i=s?.[0]?.[sc];i!==void 0&&n(!!i),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iy()||Z_()||Zu()}}const s0=r0;var pp="@firebase/auth",mp="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function a0(t){os(new Vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(t)},u=new TC(r,s,i,c);return NC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new Vr("auth-internal",e=>{const n=or(e.getProvider("auth").getImmediate());return(r=>new i0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(pp,mp,o0(t)),wn(pp,mp,"esm2020")}/**
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
 */const l0=300,c0=ig("authIdTokenMaxAge")||l0;let gp=null;const u0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>c0)return;const s=n?.token;gp!==s&&(gp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _l(t=_u()){const e=Ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DC(t,{popupRedirectResolver:s0,persistence:[pP,nP,gy]}),r=ig("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=u0(i.toString());ZC(n,o,()=>o(n.currentUser)),XC(n,l=>o(l))}}const s=ng("auth");return s&&OC(n,`http://${s}`),n}function h0(){return document.getElementsByTagName("head")?.[0]??document}IC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",h0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});a0("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firebasestorage.googleapis.com",f0="storageBucket",d0=120*1e3,p0=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Vn{constructor(e,n,r=0){super(ic(e),`Firebase Storage: ${n} (${ic(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ic(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var On;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(On||(On={}));function ic(t){return"storage/"+t}function m0(){const t="An unknown error occurred, please check the error payload for server response.";return new xn(On.UNKNOWN,t)}function g0(){return new xn(On.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _0(){return new xn(On.CANCELED,"User canceled the upload/download.")}function y0(t){return new xn(On.INVALID_URL,"Invalid URL '"+t+"'.")}function v0(t){return new xn(On.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function _p(t){return new xn(On.INVALID_ARGUMENT,t)}function by(){return new xn(On.APP_DELETED,"The Firebase app was deleted.")}function E0(t){return new xn(On.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=an.makeFromUrl(e,n)}catch{return new an(e,"")}if(r.path==="")return r;throw v0(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),V={bucket:1,path:3},N=n===Iy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",L=new RegExp(`^https?://${N}/${s}/${D}`,"i"),C=[{regex:l,indices:c,postModify:i},{regex:y,indices:V,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<C.length;P++){const z=C[P],Z=z.regex.exec(e);if(Z){const b=Z[z.indices.bucket];let _=Z[z.indices.path];_||(_=""),r=new an(b,_),z.postModify(r);break}}if(r==null)throw y0(e);return r}}class w0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...D){u||(u=!0,e.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,t(y,c())},D)}function m(){i&&clearTimeout(i)}function y(D,...L){if(u){m();return}if(D){m(),f.call(null,D,...L);return}if(c()||o){m(),f.call(null,D,...L);return}r<64&&(r*=2);let C;l===1?(l=2,C=0):C=(r+Math.random())*1e3,p(C)}let V=!1;function N(D){V||(V=!0,m(),!u&&(s!==null?(D||(l=2),clearTimeout(s),p(0)):D||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function I0(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t){return t!==void 0}function yp(t,e,n,r){if(r<e)throw _p(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _p(`Invalid value for '${t}'. Expected ${n} or less.`)}function A0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Va;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Va||(Va={}));/**
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
 */function R0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n,r,s,i,o,l,c,u,f,p,m=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((V,N)=>{this.resolve_=V,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new $o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Va.NO_ERROR,c=i.getStatus();if(!l||R0(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Va.ABORT;r(!1,new $o(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new $o(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());b0(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=m0();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?by():_0();o(c)}else{const c=g0();o(c)}};this.canceled_?n(!1,new $o(!1,null,!0)):this.backoffId_=T0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&I0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $o{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function C0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function P0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function k0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function D0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function N0(t,e,n,r,s,i,o=!0,l=!1){const c=A0(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return k0(f,e),C0(f,n),P0(f,i),D0(f,r),new S0(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function V0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class xa{constructor(e,n){this._service=e,n instanceof an?this._location=n:this._location=an.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xa(e,n)}get root(){const e=new an(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return V0(this._location.path)}get storage(){return this._service}get parent(){const e=O0(this._location.path);if(e===null)return null;const n=new an(this._location.bucket,e);return new xa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw E0(e)}}function vp(t,e){const n=e?.[f0];return n==null?null:an.makeFromBucketSpec(n,t)}function x0(t,e,n,r={}){t.host=`${e}:${n}`;const s=ds(e);s&&(du(`https://${t.host}/b`),pu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:og(i,t.app.options.projectId))}class M0{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Iy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=d0,this._maxUploadRetryTime=p0,this._requests=new Set,s!=null?this._bucket=an.makeFromBucketSpec(s,this._host):this._bucket=vp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=an.makeFromBucketSpec(this._url,e):this._bucket=vp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xa(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new w0(by());{const o=N0(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ep="@firebase/storage",wp="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="storage";function L0(t=_u(),e){t=Ft(t);const r=Ja(t,Ay).getImmediate({identifier:e}),s=rg("storage");return s&&U0(r,...s),r}function U0(t,e,n,r={}){x0(t,e,n,r)}function F0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new M0(n,r,s,e,ps)}function B0(){os(new Vr(Ay,F0,"PUBLIC").setMultipleInstances(!0)),wn(Ep,wp,""),wn(Ep,wp,"esm2020")}B0();const j0={apiKey:"AIzaSyA88mxzUStbuMFKNr9Q0OODtHXmpyuqvBY",authDomain:"findyourfit-93e9f.firebaseapp.com",projectId:"findyourfit-93e9f",storageBucket:"findyourfit-93e9f.firebasestorage.app",messagingSenderId:"715690823951",appId:"1:715690823951:web:f3af86677f7d990c55ae7a",measurementId:"G-2GTC9GRYRL"},ih=cg(j0),Pt=kS(ih),Wn=_l(ih);L0(ih);const Zt=jw("user",{state:()=>({userData:null,moodData:null,journalData:null,therapists:null}),actions:{async fetchUserData(){const t=Wn.currentUser;if(!t)return;const e=Mt(Pt,"users",t.uid),n=await ji(e);n.exists()&&(this.userData=n.data(),this.userData.streak||(this.userData.streak={count:1,lastUpdate:Sn()},await Rn(e,this.userData,{merge:!0})),await this.updateStreak(),await this.getMood(),await this.getJournalEntries(),await this.getTherapists())},setUserData(t){this.userData=t},setMoodData(t){this.moodData=t},async updateStreak(){const t=Wn.currentUser;if(!t||!this.userData?.streak)return;const{count:e,lastUpdate:n}=this.userData.streak;if(!n||typeof n.toDate!="function"){this.userData.streak={count:1,lastUpdate:Sn()},await Rn(Mt(Pt,"users",t.uid),this.userData,{merge:!0});return}const r=n.toDate(),s=new Date;this.isSameDay(r,s)||(this.isYesterday(r,s)?this.userData.streak.count=e+1:this.userData.streak.count=1,this.userData.streak.lastUpdate=Sn(),await Rn(Mt(Pt,"users",t.uid),this.userData,{merge:!0}))},isSameDay(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()},isYesterday(t){const e=t,n=new Date,r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate())-r)/(1e3*60*60*24)===1},async getMood(){const t=Wn.currentUser;if(!t)return;const e=Mt(Pt,"mood",t.uid),n=await ji(e);n.exists()&&(this.moodData=n.data())},async getJournalEntries(){const t=Wn.currentUser;if(!t)return;const e=Mt(Pt,"journals",t.uid),n=await ji(e);if(n.exists()){const r=n.data(),s=Object.entries(r).sort((i,o)=>Number(o[0])-Number(i[0])).map(([i,o])=>({id:i,...o}));this.journalData=s}},async getTherapists(){const t=[];return(await qS(PS(Pt,"therapists"))).forEach(n=>{t.push({id:n.id,...n.data()})}),this.therapists=t,this.therapists}}}),en=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},$0={class:"modal_holder"},H0={class:"modal_heading_holder inter font_size_xs"},z0=["innerHTML"],q0={__name:"errorModal",props:{errorMessage:{type:String,required:!0}},setup(t){return(e,n)=>(Q(),re("div",{class:"modal_overlay",onClick:n[1]||(n[1]=hu(r=>e.$emit("close"),["self"])),role:"dialog","aria-modal":"true"},[S("div",$0,[S("div",H0,[n[2]||(n[2]=S("span",null," Attention!",-1)),S("button",{class:"modal_close_button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×")]),S("div",{class:"modal_content_holder inter font_size_xs",innerHTML:t.errorMessage},null,8,z0)])]))}},ti=en(q0,[["__scopeId","data-v-306a9af2"]]),W0={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},G0={class:"modal_holder"},K0={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},Q0={class:"modal_content_holder inter font_size_xs"},Y0=["value"],J0=["value"],X0={__name:"userInfoModal",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),r=t,s=ne([]),i=ne("");jr(async()=>{const C=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();s.value=C.sort((P,z)=>P.name.common.localeCompare(z.name.common))});const o=Qa(),l=ne(""),c=ne(""),u=ne(""),f=ne(""),p=ne(!1),m=ne([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),y=ne("");function V(M){return/^\d{10}$/.test(M)}function N(M){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(M))return!1;const[P,z,Z]=M.split("/").map(Number),b=new Date(P,z-1,Z);return b.getFullYear()===P&&b.getMonth()===z-1&&b.getDate()===Z}const D=async()=>{if(_l().currentUser,f.value="",p.value=!1,!V(c.value)){f.value="Contact Number must be a valid 10-digit number.",p.value=!0;return}if(!N(u.value)){f.value="Date of Birth must be in the format yyyy/mm/dd.",p.value=!0;return}const C={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:r.globalUser.email,country:i.value,gender:y.value},streak:{count:parseInt(1),lastUpdate:Sn()},loginDate:new Date().toISOString(),uid:r.globalUser.uid};await Rn(Mt(Pt,"users",r.globalUser.uid),C),n.setUserData(C),o.push({name:"Navigation"})},L=()=>{p.value=!1,f.value=""};return(M,C)=>(Q(),re("div",W0,[S("div",G0,[S("div",K0,[C[6]||(C[6]=S("span",{style:{width:"80%"}},"User Information",-1)),S("button",{class:"modal_close_button",onClick:C[0]||(C[0]=P=>M.$emit("close"))},"×")]),S("div",Q0,[C[10]||(C[10]=S("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),S("form",{class:"modal_form_holder",onSubmit:hu(D,["prevent"])},[We(S("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":C[1]||(C[1]=P=>l.value=P),required:""},null,512),[[Nt,l.value]]),We(S("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":C[2]||(C[2]=P=>c.value=P),required:""},null,512),[[Nt,c.value]]),We(S("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":C[3]||(C[3]=P=>u.value=P),required:""},null,512),[[Nt,u.value]]),We(S("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":C[4]||(C[4]=P=>y.value=P)},[C[7]||(C[7]=S("option",{disabled:"",value:""},"Please select one",-1)),(Q(!0),re(Ce,null,ut(m.value,P=>(Q(),re("option",{key:P.value,value:P.value},ve(P.text),9,Y0))),128))],512),[[Rr,y.value]]),We(S("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":C[5]||(C[5]=P=>i.value=P),id:"country"},[C[8]||(C[8]=S("option",{disabled:"",value:""},"Select your country",-1)),(Q(!0),re(Ce,null,ut(s.value,P=>(Q(),re("option",{key:P.cca3,value:P.cca3},ve(P.name.common),9,J0))),128))],512),[[Rr,i.value]]),C[9]||(C[9]=S("button",{type:"submit",class:"modal_button inter font_size_xs"}," Confirm ",-1))],32)])]),p.value?(Q(),kt(ti,{key:0,errorMessage:f.value,onClose:L},null,8,["errorMessage"])):Ut("",!0)]))}},Z0=en(X0,[["__scopeId","data-v-d9949924"]]),ek={class:"login_page"},tk={class:"login_page_content"},nk={class:"login_page_form"},rk={class:"login_page_form_fields"},sk=["type"],ik={class:"show_password_toggle inter font_size_xs"},ok={class:"login_page_social_login"},ak={class:"login_page_toggle_register inter font_size_xs"},lk={__name:"loginRegister",setup(t){const e=Zt(),n=Qa(),r=ne("password"),s=ne(null),i=ne(""),o=ne(""),l=ne("login"),c=ne(!1),u=ne(""),f=ne(!1),p=new Hn;p.addScope("https://www.googleapis.com/auth/contacts.readonly");const m=P=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(P),y=()=>{r.value=r.value==="password"?"text":"password"},V=()=>{l.value=l.value==="login"?"register":"login"},N=()=>{if(i.value===""){u.value="Please enter your email to reset your password!",c.value=!0;return}QC(Wn,i.value).then(()=>{u.value="An email has been sent to reset your password!",c.value=!0})},D=async()=>{try{const Z=(await vP(Wn,p)).user;if(Z){if(!Z)return;const b=Mt(Pt,"users",Z.uid),_=await ji(b);if(_.exists()){var P=_.data();P&&await L(P)}}n.push({name:"Navigation"})}catch(z){console.log(z.message),u.value="Google login failed!",c.value=!0}},L=async P=>{if(P.streak){const z=P.streak;M(z.lastUpdate)?P.streak.count=P.streak.count+1:P.streak.count=1,P.streak.lastUpdate=Sn(),P.loginDate=Sn(),await Rn(Mt(Pt,"users",P.uid),P)}},M=P=>{const z=P.toDate(),Z=new Date,b=new Date(Z.getFullYear(),Z.getMonth(),Z.getDate()),_=new Date(b);return _.setDate(b.getDate()-1),z>=_&&z<b},C=async()=>{try{if(u.value="",c.value=!1,!m(i.value)){u.value="Invalid email format!",c.value=!0;return}if(l.value==="register"){const Z=(await YC(Wn,i.value,o.value)).user;try{await EP(Z,p)}catch(b){console.warn("Google link failed (optional):",b)}s.value={uid:Z.uid,email:Z.email},f.value=!0}else{const Z=(await JC(Wn,i.value,o.value)).user,b=Mt(Pt,"users",Z.uid),_=await ji(b);if(_.exists()){var P=_.data();P&&(await L(P),e.setUserData(P),n.push({name:"Navigation"}))}}}catch(z){z.code==="auth/invalid-credential"?u.value="Invalid login details.":z.code==="auth/email-already-in-use"?u.value="Email already in use.":u.value="An unexpected error occurred.",c.value=!0}};return(P,z)=>(Q(),re(Ce,null,[S("div",ek,[S("div",tk,[z[5]||(z[5]=S("div",{class:"login_background_holder"},null,-1)),z[6]||(z[6]=S("div",{class:"login_page_intro inter font_size_xs"},[S("div",{class:"login_page_intro_text"},[S("div",{class:"font_size_m licorice_regular"},"Welcome to Finding Your Fit"),S("br"),S("br"),Dt(" A space designed to help you understand yourself better, build emotional balance, and grow into the life that fits you best. Take a moment to reconnect, reflect, and start working toward your goals — one step at a time. ")])],-1)),S("div",nk,[S("form",rk,[We(S("input",{class:"login_page_input inter font_size_xs",type:"text",placeholder:"Email","onUpdate:modelValue":z[0]||(z[0]=Z=>i.value=Z)},null,512),[[Nt,i.value]]),We(S("input",{class:"login_page_password inter font_size_xs",type:r.value,placeholder:"Password","onUpdate:modelValue":z[1]||(z[1]=Z=>o.value=Z)},null,8,sk),[[Rw,o.value]]),S("div",ik,[S("label",null,[S("input",{type:"checkbox",onChange:y},null,32),z[4]||(z[4]=Dt(" Show Password ",-1))])])]),S("button",{class:"login_page_button inter font_size_xs",onClick:C},ve(l.value==="login"?"Login":"Register"),1),S("div",{class:"login_page_forgot_password inter font_size_xs",onClick:N},ve(l.value==="login"?"Forgot Password?":""),1)]),S("div",ok,[S("div",{class:"login_page_social_button",onClick:z[2]||(z[2]=Z=>D())})]),S("div",ak,[S("u",{onClick:V},ve(l.value==="login"?"Register":"Login"),1)])])]),c.value?(Q(),kt(ti,{key:0,errorMessage:u.value,onClose:z[3]||(z[3]=Z=>c.value=!1)},null,8,["errorMessage"])):Ut("",!0),f.value&&s.value?(Q(),kt(Z0,{key:1,globalUser:s.value},null,8,["globalUser"])):Ut("",!0)],64))}},ck=en(lk,[["__scopeId","data-v-f4d6eaa2"]]),Tp=[{content:"Success is not final, failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},{content:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{content:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"You are never too old to set another goal or to dream a new dream.",author:"C.S. Lewis"},{content:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"Don’t watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"The only limit to our realization of tomorrow is our doubts of today.",author:"Franklin D. Roosevelt"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Don’t wait. The time will never be just right.",author:"Napoleon Hill"},{content:"Believe in yourself and all that you are.",author:"Christian D. Larson"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Success is what comes after you stop making excuses.",author:"Luis Galarza"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Do what you love, love what you do.",author:"Unknown"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Motivation is what gets you started. Habit is what keeps you going.",author:"Jim Ryun"},{content:"Don’t let fear decide your future.",author:"Shalane Flanagan"},{content:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"Do one thing every day that scares you.",author:"Eleanor Roosevelt"},{content:"The best way to predict the future is to invent it.",author:"Alan Kay"},{content:"Difficult roads often lead to beautiful destinations.",author:"Unknown"},{content:"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",author:"Chantal Sutherland"},{content:"If it doesn’t challenge you, it won’t change you.",author:"Fred DeVito"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"The expert in anything was once a beginner.",author:"Helen Hayes"},{content:"Don’t count the days, make the days count.",author:"Muhammad Ali"},{content:"The harder the battle, the sweeter the victory.",author:"Les Brown"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"You don’t have to see the whole staircase, just take the first step.",author:"Martin Luther King Jr."},{content:"Small daily improvements over time lead to stunning results.",author:"Robin Sharma"},{content:"Don’t let what you cannot do interfere with what you can do.",author:"John Wooden"},{content:"The only limit is the one you set yourself.",author:"Felix Baumgartner"},{content:"Great things are done by a series of small things brought together.",author:"Vincent Van Gogh"},{content:"Your dream doesn’t have an expiration date. Take a deep breath and try again.",author:"KT Witten"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"You are braver than you believe, stronger than you seem, and smarter than you think.",author:"A.A. Milne"},{content:"Work until you no longer have to introduce yourself.",author:"Unknown"},{content:"The best revenge is massive success.",author:"Frank Sinatra"},{content:"Your only limit is your mind.",author:"Unknown"},{content:"Stop being afraid of what could go wrong and start being excited about what could go right.",author:"Unknown"},{content:"Do not wait to strike till the iron is hot; but make it hot by striking.",author:"William Butler Yeats"},{content:"Don’t let perfectionism get in the way of progress.",author:"Unknown"},{content:"Great minds discuss ideas; average minds discuss events; small minds discuss people.",author:"Eleanor Roosevelt"},{content:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Do what you can, with what you have, where you are.",author:"Theodore Roosevelt"},{content:"Success is not about the destination, it’s about the journey.",author:"Zig Ziglar"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"A year from now you may wish you had started today.",author:"Karen Lamb"},{content:"Don’t stop until you’re proud.",author:"Unknown"},{content:"Dream big. Start small. Act now.",author:"Robin Sharma"},{content:"Hard work beats talent when talent doesn’t work hard.",author:"Tim Notke"},{content:"Stay positive, work hard, make it happen.",author:"Unknown"},{content:"Your time is limited, don’t waste it living someone else’s life.",author:"Steve Jobs"},{content:"The difference between ordinary and extraordinary is that little extra.",author:"Jimmy Johnson"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Success doesn’t come to you, you go to it.",author:"Marva Collins"},{content:"A river cuts through rock not because of its power, but because of its persistence.",author:"Jim Watkins"},{content:"Discipline is the bridge between goals and accomplishment.",author:"Jim Rohn"},{content:"Do what is right, not what is easy nor what is popular.",author:"Unknown"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Don’t limit yourself. Many people limit themselves to what they think they can do.",author:"Mary Kay Ash"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Success is the progressive realization of a worthy goal or ideal.",author:"Earl Nightingale"},{content:"To succeed in life, you need two things: ignorance and confidence.",author:"Mark Twain"},{content:"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",author:"Mary Anne Radmacher"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"Don’t let small minds convince you that your dreams are too big.",author:"Unknown"},{content:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",author:"Pelé"},{content:"The best way out is always through.",author:"Robert Frost"},{content:"Failure is simply the opportunity to begin again, this time more intelligently.",author:"Henry Ford"},{content:"Don’t wish it were easier. Wish you were better.",author:"Jim Rohn"},{content:"The mind is everything. What you think you become.",author:"Buddha"},{content:"When you feel like quitting, remember why you started.",author:"Unknown"},{content:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},{content:"Don’t be afraid to give up the good to go for the great.",author:"John D. Rockefeller"},{content:"Do not be embarrassed by your failures, learn from them and start again.",author:"Richard Branson"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Small deeds done are better than great deeds planned.",author:"Peter Marshall"},{content:"Act as if what you do makes a difference. It does.",author:"William James"},{content:"Success is not how high you have climbed, but how you make a positive difference to the world.",author:"Roy T. Bennett"},{content:"Your future is created by what you do today, not tomorrow.",author:"Robert Kiyosaki"},{content:"The secret of success is to do the common thing uncommonly well.",author:"John D. Rockefeller Jr."},{content:"What seems to us as bitter trials are often blessings in disguise.",author:"Oscar Wilde"},{content:"The only place where success comes before work is in the dictionary.",author:"Vidal Sassoon"},{content:"Happiness is not something ready-made. It comes from your own actions.",author:"Dalai Lama"},{content:"Opportunities multiply as they are seized.",author:"Sun Tzu"},{content:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",author:"William James"},{content:"Don’t be afraid to start over. It’s a chance to build something better.",author:"Unknown"},{content:"Success isn’t always about greatness. It’s about consistency.",author:"Dwayne Johnson"},{content:"You are confined only by the walls you build yourself.",author:"Andrew Murphy"},{content:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t let the fear of losing be greater than the excitement of winning.",author:"Robert Kiyosaki"},{content:"You can’t cross the sea merely by standing and staring at the water.",author:"Rabindranath Tagore"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"The journey of a thousand miles begins with one step.",author:"Lao Tzu"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Jerry Dunn"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"It’s not whether you get knocked down, it’s whether you get up.",author:"Vince Lombardi"},{content:"Everything you can imagine is real.",author:"Pablo Picasso"},{content:"Success is not in never falling, but in rising every time we fall.",author:"Confucius"},{content:"Don’t wait for opportunity. Create it.",author:"George Bernard Shaw"},{content:"The best dreams happen when you’re awake.",author:"Cherie Gilderbloom"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"What you do today can improve all your tomorrows.",author:"Ralph Marston"}];function uk(){const t=Math.floor(Math.random()*Tp.length);return Tp[t]}const hk="/assets/my_therapist-BGpDoE1u.png",fk="/assets/my_journal-ByAOnFF2.png",dk="/assets/journal-BcWmOkN8.png",pk="/assets/my_courses-DAreBNF0.png",mk="/assets/therapist-sZYqYBaF.png",gk="/assets/mood_track-DScXBvTj.png",_k={class:"home_container"},yk={class:"greeting_section licorice_regular font_size_m"},vk={class:"checkin_section"},Ek={class:"feeling_section"},wk={class:"inspiration_section"},Tk={class:"quote_text inter font_size_xxs"},Ik={class:"offer_section"},bk={class:"offer_list"},Ak={class:"offer_icon_wrapper"},Rk={class:"offer_content_wrapper"},Sk={class:"offer_title inter font_size_xxs"},Ck={class:"offer_description inter font_size_xxs"},Pk={__name:"home",setup(t){const e=Zt(),n=ne({content:"",author:""});ne(!1);const r=Fe(()=>e.userData?.personalInfo.name||"");Fe(()=>[{label:"My Therapist",url:hk},{label:"Journal Entry",url:fk},{label:"Explore Courses",url:pk}]);const s=Fe(()=>[{label:"Expert support at your fingertips",content:"Find and connect with qualified therapists specializing in various areas.",icon:mk},{label:"Personalized mood tracking",content:"Log your daily mood to visualize trends, identify triggers, and gain insights.",icon:gk},{label:"Journaling",content:"A private space for self-reflection, prompts, and gain thoughts.",icon:dk}]);jr(()=>{console.log("Home mounted"),n.value=uk()});const i=()=>{const o=new Date().getHours();return o<12?"morning":o<18?"afternoon":"evening"};return(o,l)=>(Q(),re("div",_k,[S("div",yk," Good "+ve(i())+", "+ve(r.value)+"! ",1),S("div",vk,[S("div",Ek,[l[1]||(l[1]=S("div",{class:"feeling_heading inter font_size_xs"},[S("b",null,"How are you feeling today?")],-1)),l[2]||(l[2]=S("div",{class:"feeling_image"},null,-1)),S("div",{class:"checkin_button inter font_size_xxs",onClick:l[0]||(l[0]=c=>o.$emit("setPage","mood"))}," Check in now ")])]),S("div",wk,[l[3]||(l[3]=S("div",{class:"inspiration_heading inter font_size_xxs"},[S("b",null,"Inspiration")],-1)),S("div",Tk,ve(n.value.content),1)]),S("div",Ik,[l[4]||(l[4]=S("div",{class:"offer_heading inter font_size_xs"},[S("b",null,"What we offer")],-1)),S("div",bk,[(Q(!0),re(Ce,null,ut(s.value,c=>(Q(),re("div",{class:"offer_card",key:c.label},[S("div",Ak,[S("div",{class:"feature_icon",style:rs({backgroundImage:`url(${c.icon})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4)]),S("div",Rk,[S("div",Sk,[S("b",null,ve(c.label),1)]),S("div",Ck,ve(c.content),1)])]))),128))])])]))}},Ry=en(Pk,[["__scopeId","data-v-ff4796d7"]]),kk={class:"loading_page_holder"},Dk={__name:"loadingPage",setup(t){const e=Zt(),n=Qa();return jr(async()=>{e.userData?e.userData.uid?n.push({name:"Navigation"}):n.push({name:"Login"}):n.push({name:"Login"})}),(r,s)=>(Q(),re("div",kk))}},Nk=en(Dk,[["__scopeId","data-v-bc11f8f1"]]),Ok={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},Vk={class:"modal_holder"},xk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},Mk={class:"modal_content_holder inter font_size_xs"},Lk=["value"],Uk=["value"],Fk={__name:"profileEdit",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),r=e,s=t,i=ne([]),o=ne(""),l=ne(""),c=ne(""),u=ne(""),f=ne([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),p=ne(""),m=ne(""),y=ne(!1);jr(async()=>{const C=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();i.value=C.sort((P,z)=>P.name.common.localeCompare(z.name.common))});function V(M){return/^\d{10}$/.test(M)}function N(M){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(M))return!1;const[P,z,Z]=M.split("/").map(Number),b=new Date(P,z-1,Z);return b.getFullYear()===P&&b.getMonth()===z-1&&b.getDate()===Z}const D=async()=>{const C=_l().currentUser;if(m.value="",y.value=!1,!V(c.value)){m.value="Contact Number must be a valid 10-digit number.",y.value=!0;return}if(!N(u.value)){m.value="Date of Birth must be in the format yyyy/mm/dd.",y.value=!0;return}const P=s.globalUser.userData,z={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:P.email||C.email,gender:p.value,country:o.value},uid:P.uid||C.uid,loginDate:P.loginDate,streak:{count:P.streak.count,lastUpdate:P.streak.lastUpdate},profileEdited:Sn()};n.setUserData(z),await Rn(Mt(Pt,"users",P.uid||C.uid),z),r("close")},L=()=>{y.value=!1,m.value=""};return(M,C)=>(Q(),re("div",Ok,[S("div",Vk,[S("div",xk,[C[6]||(C[6]=S("span",{style:{width:"80%"}},"Edit User Information",-1)),S("button",{class:"modal_close_button",onClick:C[0]||(C[0]=P=>M.$emit("close"))},"×")]),S("div",Mk,[C[10]||(C[10]=S("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),S("form",{class:"modal_form_holder",onSubmit:hu(D,["prevent"])},[We(S("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":C[1]||(C[1]=P=>l.value=P),required:""},null,512),[[Nt,l.value]]),We(S("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":C[2]||(C[2]=P=>c.value=P),required:""},null,512),[[Nt,c.value]]),We(S("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":C[3]||(C[3]=P=>u.value=P),required:""},null,512),[[Nt,u.value]]),We(S("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":C[4]||(C[4]=P=>p.value=P)},[C[7]||(C[7]=S("option",{disabled:"",value:""},"Please select one",-1)),(Q(!0),re(Ce,null,ut(f.value,P=>(Q(),re("option",{key:P.value,value:P.value},ve(P.text),9,Lk))),128))],512),[[Rr,p.value]]),We(S("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":C[5]||(C[5]=P=>o.value=P),id:"country"},[C[8]||(C[8]=S("option",{disabled:"",value:""},"Select your country",-1)),(Q(!0),re(Ce,null,ut(i.value,P=>(Q(),re("option",{key:P.cca3,value:P.cca3},ve(P.name.common),9,Uk))),128))],512),[[Rr,o.value]]),C[9]||(C[9]=S("button",{type:"submit",class:"modal_button inter font_size_xs"},"Confirm",-1))],32)])]),y.value?(Q(),kt(ti,{key:0,errorMessage:m.value,onClose:L},null,8,["errorMessage"])):Ut("",!0)]))}},Ip=en(Fk,[["__scopeId","data-v-6e033621"]]),Sy="/assets/brown_man-DU8HBBmE.png",Cy="/assets/blonde_man-Br_WNAu2.png",Py="/assets/ginger_man-D_7vVZja.png",ky="/assets/black_man-DZoPS0-N.png",Dy="/assets/brunette_woman-C5YdWLXO.png",Ny="/assets/blonde_woman-IP-2iqnM.png",Oy="/assets/ginger_woman-5AupqmXa.png",Vy="/assets/black_woman-QP95zNq-.png",Wc="/assets/none-BOBk4slU.png",Bk={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},jk={class:"modal_holder"},$k={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},Hk={class:"modal_content_holder inter font_size_xs"},zk=["onClick"],qk=["onClick"],Wk={__name:"profileAvatar",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),r=Fe(()=>[{label:"Brown Hair",url:Sy,ref:"brown_man"},{label:"Blonde Hair",url:Cy,ref:"blonde_man"},{label:"Ginger Hair",url:Py,ref:"ginger_man"},{label:"Black Hair",url:ky,ref:"black_man"},{label:"Brown Hair Woman",url:Dy,ref:"brown_woman"},{label:"Blonde Hair Woman",url:Ny,ref:"blonde_woman"},{label:"Ginger Hair Woman",url:Oy,ref:"ginger_woman"},{label:"Black Hair Woman",url:Vy,ref:"black_woman"},{label:"None",url:Wc,ref:"none"}]),s=e,i=t,o=ne("none"),l=u=>{o.value=u},c=async()=>{const u=_l(),f=i.globalUser.userData,p=u.currentUser,m={profileAvatar:o.value,profileEdited:Sn()};await Rn(Mt(Pt,"users",f.uid?f.uid:p.uid),m,{merge:!0}),n.userData.profileAvatar=o.value,s("close")};return(u,f)=>(Q(),re("div",Bk,[S("div",jk,[S("div",$k,[f[2]||(f[2]=S("span",{style:{width:"80%"}},"Profile Avatar",-1)),S("button",{class:"modal_close_button",onClick:f[0]||(f[0]=p=>u.$emit("close"))},"×")]),S("div",Hk,[(Q(!0),re(Ce,null,ut(r.value,p=>(Q(),re("div",{class:"modal_avatars_holder",key:p.ref},[p.ref===o.value?(Q(),re("div",{key:0,class:"modal_avatar_selected",onClick:m=>l(p.ref),style:rs({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,12,zk)):(Q(),re("div",{key:1,class:"modal_avatar",onClick:m=>l(p.ref),style:rs({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,12,qk))]))),128))]),S("button",{type:"submit",class:"modal_button inter font_size_xs",onClick:f[1]||(f[1]=p=>c())}," Confirm ")])]))}},bp=en(Wk,[["__scopeId","data-v-fdbe87ea"]]),Gk={class:"profile_container"},Kk={class:"profile_header"},Qk={class:"profile_edit_btn"},Yk={class:"profile_info"},Jk={class:"profile_avatar_wrapper"},Xk={class:"pfp_edit_button"},Zk={class:"profile_user_details font_size_s inter"},e1={class:"font_size_xxs"},t1={class:"profile_stats"},n1={class:"profile_stat_top inter font_size_xs"},r1={key:0,class:"profile_stat_value"},s1={key:0},i1={key:1},o1={key:1,class:"profile_stat_value"},a1={class:"profile_stat_icon"},l1={class:"profile_stat_label inter font_size_xs"},c1={__name:"profile",setup(t){const e=Zt(),n=ne(!1),r=ne(!1),s=ne(!1),i=ne(null),o={brown_man:Sy,blonde_man:Cy,ginger_man:Py,black_man:ky,brown_woman:Dy,blonde_woman:Ny,ginger_woman:Oy,black_woman:Vy,none:Wc},l=Fe(()=>{const L=e.userData?.profileAvatar||"none";return o[L]||Wc}),c=Fe(()=>e.userData?.personalInfo.name||""),u=Fe(()=>e.userData?.personalInfo.email||""),f=Fe(()=>e.userData?.streak?.count||0),p=Fe(()=>e.journalData.length||0);Fe(()=>e.userData?.personalInfo.courses?.length||0);const m=Fe(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),y=ne([{label:"App Streak",value:f.value,icon:"fa fa-signal"},{label:"Journal Entries",value:p.value,icon:"fa fa-book"},{label:"Mood Trends",value:"",icon:"fas fa-chart-line"}]);jr(()=>{i.value=e.userData;const L=new Date().toISOString().split("T")[0];if(!e.moodData||!e.moodData[L])return;n.value=!0;const M=e.moodData[L];for(const C of m.value)if(C.ref===M.mood){y.value[2].value=C.icon;break}});const V=()=>{r.value=!0},N=()=>{s.value=!0},D=L=>{console.log("Image selected:",L.target.files[0])};return(L,M)=>(Q(),re(Ce,null,[S("div",Gk,[S("div",Kk,[M[4]||(M[4]=S("div",{class:"profile_title font_size_s inter"},null,-1)),S("div",Qk,[S("i",{class:"fas fa-edit",onClick:M[0]||(M[0]=C=>V())})])]),S("div",Yk,[S("div",Jk,[S("div",{class:"profile_avatar",style:rs({backgroundImage:`url(${l.value})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,4)]),S("div",Xk,[S("i",{class:"fas fa-edit",onClick:M[1]||(M[1]=C=>N())}),S("input",{type:"file",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:D},null,544)]),S("div",Zk,[Dt(ve(c.value)+" ",1),S("span",e1,ve(u.value),1)])]),S("div",t1,[(Q(!0),re(Ce,null,ut(y.value,(C,P)=>(Q(),re("div",{class:"profile_stat_card",key:P},[S("div",n1,[C.label==="Mood Trends"?(Q(),re("div",r1,[n.value?(Q(),re("div",s1,[S("i",{class:Yn(C.value),style:{"font-size":"1.5rem"}},null,2),M[5]||(M[5]=Dt("  ",-1))])):(Q(),re("div",i1,[...M[6]||(M[6]=[S("i",{class:"far fa-meh",style:{"font-size":"1.5rem"}},null,-1),Dt("  ",-1)])]))])):(Q(),re("div",o1,ve(C.value),1)),S("div",a1,[S("i",{class:Yn(C.icon),style:{color:"#87bfba"}},null,2)])]),S("div",l1,ve(C.label),1)]))),128))])]),r.value?(Q(),kt(Ip,{key:0,onClose:M[2]||(M[2]=C=>r.value=!1),globalUser:En(e),viewPoint:Ip},null,8,["globalUser"])):Ut("",!0),s.value?(Q(),kt(bp,{key:1,onClose:M[3]||(M[3]=C=>s.value=!1),globalUser:En(e),viewPoint:bp},null,8,["globalUser"])):Ut("",!0)],64))}},xy=en(c1,[["__scopeId","data-v-10bbea7b"]]),u1={class:"journal_selection_holder inter font_size_xs"},h1=["onClick"],f1={key:0,class:"journal_entry_holder"},d1={class:"journal_entry_date_holder inter font_size_xs"},p1={style:{width:"90%"}},m1={class:"journal_entry_content_holder"},g1={key:1},_1={key:0,class:"journal_list_holder"},y1={class:"inter font_size_sm",style:{"font-weight":"bold","margin-bottom":"0.5rem"}},v1={class:"inter font_size_xs",style:{"margin-bottom":"0.5rem"}},E1={class:"inter font_size_xxs",style:{color:"#808080"}},w1={__name:"journal",emits:["close"],setup(t,{emit:e}){const n=e,r=Zt(),s=ne("journalEntry"),i=[{key:"journalEntry",label:"New Journal Entry",cornerClass:"right-rounded"},{key:"journalList",label:"Journal List",cornerClass:"left-rounded"}],o=ne(new Date().toDateString()),l=ne(new Date().toLocaleTimeString()),c=N=>{s.value=N,o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString()},u=()=>{m.value=!1,y.value=""},f=ne(""),p=ne(""),m=ne(!1),y=ne(""),V=async()=>{if(!f.value){m.value=!0,y.value="Please give a journal title.";return}if(!p.value){m.value=!0,y.value="Please give journal content.";return}const D={[Date.now()]:{journalEntryHeading:f.value,journalEntryContent:p.value,journalEntryLogged:Sn()}};try{await Rn(Mt(Pt,"journals",r.userData.uid),D,{merge:!0}),m.value=!0,y.value="Your journal entry has been logged.",f.value="",p.value="",o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString(),n("close")}catch(L){console.error("Failed to save journal:",L),m.value=!0,y.value="Failed to save journal. Please try again."}};return(N,D)=>(Q(),re(Ce,null,[D[5]||(D[5]=S("div",{class:"journal_header_holder inter font_size_xs"}," My Journal ",-1)),S("div",u1,[(Q(),re(Ce,null,ut(i,L=>S("div",{key:L.key,class:Yn(["journal_selection",{active:s.value===L.key,[L.cornerClass]:!0}]),onClick:M=>c(L.key)},ve(L.label),11,h1)),64))]),s.value=="journalEntry"?(Q(),re("div",f1,[S("div",d1,[S("div",p1,[Dt(ve(o.value)+" ",1),D[3]||(D[3]=S("br",null,null,-1)),Dt(" "+ve(l.value),1)])]),S("div",m1,[We(S("input",{placeholder:"Give us a title.",style:{width:"90%",height:"5%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":D[0]||(D[0]=L=>f.value=L)},null,512),[[Nt,f.value]]),We(S("textarea",{placeholder:"What's weighing on your mind today? Or what's a small win?",style:{width:"90%",height:"80%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":D[1]||(D[1]=L=>p.value=L)},null,512),[[Nt,p.value]])]),D[4]||(D[4]=S("br",null,null,-1)),S("div",{class:"save_button inter font_size_xxs",onClick:D[2]||(D[2]=L=>V())},"Save"),m.value?(Q(),kt(ti,{key:0,errorMessage:y.value,onClose:u},null,8,["errorMessage"])):Ut("",!0)])):(Q(),re("div",g1,[En(r).journalData?(Q(),re("div",_1,[(Q(!0),re(Ce,null,ut(En(r).journalData,(L,M)=>(Q(),re("div",{key:M,style:{width:"90%","box-shadow":"0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4)","margin-bottom":"1rem","border-radius":"1rem",padding:"0.5rem"}},[S("div",y1,ve(L.journalEntryHeading),1),S("div",v1,ve(L.journalEntryContent),1),S("div",E1,"Logged on: "+ve(new Date(L.journalEntryLogged.seconds*1e3).toLocaleString()),1)]))),128))])):Ut("",!0)]))],64))}},My=en(w1,[["__scopeId","data-v-b89d33a8"]]),T1={class:"mood_tracker_holder"},I1={class:"mood_icons_holder"},b1=["onClick"],A1=["onClick"],R1={class:"influence_holder",style:{height:"25rem"}},S1={class:"influence_items_holder"},C1=["value"],P1={class:"influence_holder"},k1={__name:"mood",emits:["close"],setup(t,{emit:e}){const n=Zt(),r=e,s=Fe(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),i=Fe(()=>[{label:"Sleep Quality",ref:"sleep_quality"},{label:"Nutrition",ref:"nutrition"},{label:"Physical Activity",ref:"physical_activity"},{label:"Social Connection",ref:"social_connection"},{label:"Mindset",ref:"mindset"},{label:"Environment",ref:"environment"},{label:"None",ref:"none"}]),o=ne(!1),l=ne(""),c=ne([]),u=ne(""),f=ne("neutral"),p=V=>{f.value=V},m=async()=>{if(c.value.length===0){o.value=!0,l.value="Please select an influence.";return}const N={[new Date().toISOString().split("T")[0]]:{mood:f.value,influences:c.value,optional_notes:u.value,mood_logged:Sn()}};await Rn(Mt(Pt,"mood",n.userData.uid),N,{merge:!0}),o.value=!0,l.value="Thank you for logging your mood. It will be taken into consideration.",n.setMoodData(N),r("close")},y=()=>{o.value=!1,l.value=""};return(V,N)=>(Q(),re(Ce,null,[S("div",T1,[N[6]||(N[6]=S("div",{class:"mood_heading_holder inter font_size_xs"},"How am I feeling today?",-1)),S("div",I1,[(Q(!0),re(Ce,null,ut(s.value,D=>(Q(),re("div",{class:"mood_icon_holder",key:D.ref},[f.value==D.ref?(Q(),re("div",{key:0,class:Yn(D.icon),style:{"font-size":"3rem",border:"0.2rem solid #87bfba",padding:"0.5rem","border-radius":"50%"},onClick:L=>p(D.ref)},null,10,b1)):(Q(),re("div",{key:1,class:Yn(D.icon),style:{"font-size":"3rem"},onClick:L=>p(D.ref)},null,10,A1))]))),128))]),S("div",R1,[N[4]||(N[4]=S("div",{class:"influence_heading_holder inter font_size_xs"},[S("b",null,"What might be influencing this?")],-1)),S("div",S1,[(Q(!0),re(Ce,null,ut(i.value,D=>(Q(),re("div",{class:"influence_item_holder inter font_size_xxs",key:D.ref,style:{height:"12%"}},[N[3]||(N[3]=Dt("  ",-1)),We(S("input",{type:"checkbox","onUpdate:modelValue":N[0]||(N[0]=L=>c.value=L),value:D.ref},null,8,C1),[[Vm,c.value]]),Dt(" "+ve(D.label),1)]))),128))])]),S("div",P1,[N[5]||(N[5]=S("div",{class:"influence_heading_holder inter font_size_xs"},[S("b",null,"Optional Notes")],-1)),We(S("textarea",{placeholder:"Write a few words about why you feel the way you feel",style:{width:"90%",height:"60%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":N[1]||(N[1]=D=>u.value=D)},null,512),[[Nt,u.value]])]),S("div",{class:"save_button inter font_size_xxs",onClick:N[2]||(N[2]=D=>m())},"Save")]),o.value?(Q(),kt(ti,{key:0,errorMessage:l.value,onClose:y},null,8,["errorMessage"])):Ut("",!0)],64))}},D1=en(k1,[["__scopeId","data-v-c6d2a86f"]]),N1={key:0,class:"empty_therapy_list inter font_size_xs"},O1={key:1,class:"therapy_sign_up"},V1={key:0,class:"therapy_sign_up_step_1"},x1={class:"therapist_sign_up_form_holder"},M1=["value"],L1=["value"],U1=["value"],F1={key:1,style:{width:"100%",height:"100%"}},B1={key:0},j1={class:"therapist_item_holder"},$1={class:"contact_buttons_holder"},H1=["onClick"],z1=["onClick"],q1={key:1,class:"empty_therapy_list inter font_size_xs"},W1={key:2},G1={class:"therapist_item_holder"},K1={key:2,class:"sign_up_button_holder inter font_size_s"},Q1={key:3,class:"verify_therapists_holder inter font_size_s"},Y1={__name:"therapists",setup(t){const e=Zt(),n=ne(e.userData.personalInfo.email),r=ne(e.userData.personalInfo.name),s=ne(""),i=ne(e.userData.admin||0),o=ne("home_list"),l=ne([]),c=ne([]),u=ne(""),f=ne(""),p=ne(""),m=ne(null),y=ne(null),V=ne(!1),N=ne(""),D=ne([{value:"dr",text:"Dr."},{value:"mr",text:"Mr."},{value:"mrs",text:"Mrs."},{value:"miss",text:"Miss."},{value:"ms",text:"Ms."}]),L=ne([{value:"phd",text:"PhD"},{value:"msc",text:"MSc"},{value:"ma",text:"MA"}]),M=ne([{value:"psychologist",text:"Psychologist"},{value:"psychiatrist",text:"Psychiatrist"},{value:"social_worker",text:"Social Worker"}]);jr(()=>{l.value=[],c.value=[],e.therapists?.forEach(v=>{v.isVerified?l.value.push(v):c.value.push(v)})}),ts(o,async v=>{if(v!=="step_1")return;await lo();const w=new google.maps.places.Autocomplete(y.value,{types:["address"],componentRestrictions:{country:"za"}});w.addListener("place_changed",()=>{const E=w.getPlace();m.value={city:E.address_components?.find(R=>R.types.includes("locality"))?.long_name||"",province:E.address_components?.find(R=>R.types.includes("administrative_area_level_1"))?.long_name||""}})});const C=()=>o.value="step_1",P=()=>o.value="verify_therapist",z=()=>o.value="home_list",Z=async()=>{if(!m.value){N.value="Please select an address",V.value=!0;return}await Rn(Mt(Pt,"therapists",e.userData.uid),{email:n.value,nameSurname:r.value,userName:s.value,title:u.value,academicTitle:f.value,credential:p.value,address:m.value,isVerified:!1}),N.value="Thank you. You will be redirected shortly.",V.value=!0,setTimeout(()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSe2kKgs6Qnvl1uNfVSVEjUeCRmM8jv6E6O-6xhy-1mIiAYvLg/viewform"},8e3)},b=v=>{v.isVerified=!0},_=v=>{c.value=c.value.filter(w=>w!==v)};return(v,w)=>(Q(),re(Ce,null,[o.value==="home_list"&&l.value.length===0&&c.value.length===0?(Q(),re("div",N1," No therapists are listed at this moment. ")):(Q(),re("div",O1,[o.value==="step_1"?(Q(),re("div",V1,[w[10]||(w[10]=S("div",{class:"therapy_sign_up_heading inter font_size_xs"},[S("b",null,"Let's get you signed up and listed!")],-1)),w[11]||(w[11]=S("br",null,null,-1)),S("form",x1,[We(S("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Email Address","onUpdate:modelValue":w[0]||(w[0]=E=>n.value=E)},null,512),[[Nt,n.value]]),We(S("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Username","onUpdate:modelValue":w[1]||(w[1]=E=>s.value=E)},null,512),[[Nt,s.value]]),We(S("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":w[2]||(w[2]=E=>u.value=E)},[w[7]||(w[7]=S("option",{disabled:"",value:""},"Select your title",-1)),(Q(!0),re(Ce,null,ut(D.value,E=>(Q(),re("option",{key:E.value,value:E.value},ve(E.text),9,M1))),128))],512),[[Rr,u.value]]),We(S("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":w[3]||(w[3]=E=>r.value=E)},null,512),[[Nt,r.value]]),We(S("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":w[4]||(w[4]=E=>f.value=E)},[w[8]||(w[8]=S("option",{disabled:"",value:""},"Select your academic title",-1)),(Q(!0),re(Ce,null,ut(L.value,E=>(Q(),re("option",{key:E.value,value:E.value},ve(E.text),9,L1))),128))],512),[[Rr,f.value]]),We(S("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":w[5]||(w[5]=E=>p.value=E)},[w[9]||(w[9]=S("option",{disabled:"",value:""},"Select your credential",-1)),(Q(!0),re(Ce,null,ut(M.value,E=>(Q(),re("option",{key:E.value,value:E.value},ve(E.text),9,U1))),128))],512),[[Rr,p.value]]),S("input",{ref_key:"addressInput",ref:y,class:"form_input inter font_size_xs",type:"text",placeholder:"Search address"},null,512)]),S("button",{class:"form_button inter font_size_xs",onClick:Z}," Confirm ")])):o.value==="verify_therapist"?(Q(),re("div",F1,[c.value.length?(Q(),re("div",B1,[(Q(!0),re(Ce,null,ut(c.value,E=>(Q(),re("div",{class:"therapist_items_holder inter font_size_xs",key:E.userName},[S("div",j1,[S("b",null,ve(E.nameSurname),1),w[14]||(w[14]=S("br",null,null,-1)),Dt(" "+ve(E.email),1),w[15]||(w[15]=S("br",null,null,-1)),Dt(" "+ve(E.credential),1),w[16]||(w[16]=S("br",null,null,-1)),Dt(" "+ve(E.address.city)+", "+ve(E.address.province)+" ",1),S("div",$1,[S("div",{class:"contact_button",onClick:R=>b(E)},[...w[12]||(w[12]=[S("i",{class:"fas fa-user-check"},null,-1)])],8,H1),S("div",{class:"contact_button",onClick:R=>_(E)},[...w[13]||(w[13]=[S("i",{class:"fas fa-user-times"},null,-1)])],8,z1)])])]))),128))])):(Q(),re("div",q1,[w[17]||(w[17]=S("div",null,"No therapists need verifying at this moment.",-1)),S("div",{class:"sign_up_button_holder inter font_size_s"},[S("i",{class:"far fa-address-book",onClick:z})])]))])):o.value==="home_list"&&l.value.length?(Q(),re("div",W1,[(Q(!0),re(Ce,null,ut(l.value,E=>(Q(),re("div",{class:"therapist_items_holder inter font_size_xs",key:E.userName},[S("div",G1,[S("b",null,ve(E.nameSurname),1),w[18]||(w[18]=S("br",null,null,-1)),Dt(" "+ve(E.credential),1),w[19]||(w[19]=S("br",null,null,-1)),Dt(" "+ve(E.address.city)+", "+ve(E.address.province),1)])]))),128))])):Ut("",!0)])),o.value==="home_list"?(Q(),re("div",K1,[S("i",{class:"fas fa-plus",onClick:C})])):Ut("",!0),o.value==="home_list"&&i.value===1?(Q(),re("div",Q1,[S("i",{class:"fas fa-award",onClick:P})])):Ut("",!0),V.value?(Q(),kt(ti,{key:4,errorMessage:N.value,onClose:w[6]||(w[6]=E=>V.value=!1)},null,8,["errorMessage"])):Ut("",!0)],64))}},J1=en(Y1,[["__scopeId","data-v-ca0a1a6a"]]),X1={class:"navigation_bar_holder"},Z1=["onClick"],eD=["innerHTML"],tD={__name:"navigation",setup(t){const e={home:{name:"Home",icon:'<i class="fa fa-home"></i>'},therapists:{name:"Therapists",icon:'<i class="fa fa-address-book"></i>'},journal:{name:"Journal",icon:'<i class="fa fa-book"></i>'},profile:{name:"Profile",icon:'<i class="fa fa-id-card"></i>'}},n=Zt();Qa();const r=ne("home"),s=i=>{r.value=i};return ts(()=>n.userData,i=>{}),jr(()=>{}),(i,o)=>(Q(),re(Ce,null,[r.value==="profile"?(Q(),kt(xy,{key:0})):r.value==="home"?(Q(),kt(Ry,{key:1,onSetPage:s})):r.value==="mood"?(Q(),kt(D1,{key:2})):r.value==="journal"?(Q(),kt(My,{key:3})):r.value==="therapists"?(Q(),kt(J1,{key:4})):Ut("",!0),S("div",X1,[(Q(),re(Ce,null,ut(e,(l,c)=>S("div",{class:"navigation_item_holder inter font_size_xxs",key:c},[S("div",{class:Yn(["navigation_item",{active:r.value===c}]),onClick:u=>s(c)},[S("div",{innerHTML:l.icon},null,8,eD),S("div",null,ve(l.name),1)],10,Z1)])),64))])],64))}},nD=en(tD,[["__scopeId","data-v-2a13a6be"]]),rD=[{path:"/",name:"Loading",component:Nk},{path:"/login",name:"Login",component:ck},{path:"/navigation",name:"Navigation",component:nD},{path:"/home/",name:"Home",component:Ry,props:!0},{path:"/profile/",name:"Profile",component:xy,props:!0},{path:"/journal/",name:"JournalEntry",component:My,props:!0}],Ly=QT({history:ST(),routes:rD});Ly.beforeEach(async(t,e,n)=>{const r=Zt();if(r.userData||await r.fetchUserData(),!r.userData?.uid&&t.name!=="Login")return n({name:"Login"});n()});let Ap=null;Wn.onAuthStateChanged(()=>{if(!Ap){const t=Nw(Hw);t.use(xw()),t.use(Ly),t.mount("#app"),Ap=t}});
