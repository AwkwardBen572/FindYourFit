(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},Ds=[],En=()=>{},Rp=()=>!1,La=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kc=t=>t.startsWith("onUpdate:"),bt=Object.assign,Qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ov=Object.prototype.hasOwnProperty,De=(t,e)=>ov.call(t,e),he=Array.isArray,Ns=t=>io(t)==="[object Map]",Qs=t=>io(t)==="[object Set]",Kh=t=>io(t)==="[object Date]",_e=t=>typeof t=="function",Je=t=>typeof t=="string",Pn=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Sp=t=>(Me(t)||_e(t))&&_e(t.then)&&_e(t.catch),Cp=Object.prototype.toString,io=t=>Cp.call(t),av=t=>io(t).slice(8,-1),Pp=t=>io(t)==="[object Object]",Yc=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Si=Gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},lv=/-\w/g,Jt=Ua(t=>t.replace(lv,e=>e.slice(1).toUpperCase())),cv=/\B([A-Z])/g,fs=Ua(t=>t.replace(cv,"-$1").toLowerCase()),Fa=Ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ol=Ua(t=>t?`on${Fa(t)}`:""),br=(t,e)=>!Object.is(t,e),Ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},kp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},sa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qh;const Ba=()=>Qh||(Qh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dr(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?dv(r):Dr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||Me(t))return t}const uv=/;(?![^(]*\))/g,hv=/:([^]+)/,fv=/\/\*[^]*?\*\//g;function dv(t){const e={};return t.replace(fv,"").split(uv).forEach(n=>{if(n){const r=n.split(hv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yn(t){let e="";if(Je(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=Yn(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mv=Gc(pv);function Dp(t){return!!t||t===""}function gv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ss(t[r],e[r]);return n}function ss(t,e){if(t===e)return!0;let n=Kh(t),r=Kh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Pn(t),r=Pn(e),n||r)return t===e;if(n=he(t),r=he(e),n||r)return n&&r?gv(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ss(t[o],e[o]))return!1}}return String(t)===String(e)}function Jc(t,e){return t.findIndex(n=>ss(n,e))}const Np=t=>!!(t&&t.__v_isRef===!0),Se=t=>Je(t)?t:t==null?"":he(t)||Me(t)&&(t.toString===Cp||!_e(t.toString))?Np(t)?Se(t.value):JSON.stringify(t,Op,2):String(t),Op=(t,e)=>Np(e)?Op(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Vl(r,i)+" =>"]=s,n),{})}:Qs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Vl(n))}:Pn(e)?Vl(e):Me(e)&&!he(e)&&!Pp(e)?String(e):e,Vl=(t,e="")=>{var n;return Pn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class Vp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){++this._on===1&&(this.prevScope=_t,_t=this)}off(){this._on>0&&--this._on===0&&(_t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function xp(t){return new Vp(t)}function Mp(){return _t}function _v(t,e=!1){_t&&_t.cleanups.push(t)}let Ue;const xl=new WeakSet;class Lp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_t&&_t.active&&_t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xl.has(this)&&(xl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yh(this),Bp(this);const e=Ue,n=ln;Ue=this,ln=!0;try{return this.fn()}finally{jp(this),Ue=e,ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eu(e);this.deps=this.depsTail=void 0,Yh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oc(this)&&this.run()}get dirty(){return oc(this)}}let Up=0,Ci,Pi;function Fp(t,e=!1){if(t.flags|=8,e){t.next=Pi,Pi=t;return}t.next=Ci,Ci=t}function Xc(){Up++}function Zc(){if(--Up>0)return;if(Pi){let e=Pi;for(Pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ci;){let e=Ci;for(Ci=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Bp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),eu(r),yv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function oc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($p(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $p(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Hi)||(t.globalVersion=Hi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!oc(t))))return;t.flags|=2;const e=t.dep,n=Ue,r=ln;Ue=t,ln=!0;try{Bp(t);const s=t.fn(t._value);(e.version===0||br(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,ln=r,jp(t),t.flags&=-3}}function eu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)eu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ln=!0;const Hp=[];function Jn(){Hp.push(ln),ln=!1}function Xn(){const t=Hp.pop();ln=t===void 0?!0:t}function Yh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Hi=0;class vv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ue||!ln||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new vv(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,qp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,Hi++,this.notify(e)}notify(e){Xc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zc()}}}function qp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)qp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ia=new WeakMap,es=Symbol(""),ac=Symbol(""),qi=Symbol("");function vt(t,e,n){if(ln&&Ue){let r=ia.get(t);r||ia.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new tu),s.map=r,s.key=n),s.track()}}function Bn(t,e,n,r,s,i){const o=ia.get(t);if(!o){Hi++;return}const l=c=>{c&&c.trigger()};if(Xc(),e==="clear")o.forEach(l);else{const c=he(t),u=c&&Yc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===qi||!Pn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(qi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(es)),Ns(t)&&l(o.get(ac)));break;case"delete":c||(l(o.get(es)),Ns(t)&&l(o.get(ac)));break;case"set":Ns(t)&&l(o.get(es));break}}Zc()}function Ev(t,e){const n=ia.get(t);return n&&n.get(e)}function Is(t){const e=Ce(t);return e===t?e:(vt(e,"iterate",qi),Qt(t)?e:e.map(ut))}function ja(t){return vt(t=Ce(t),"iterate",qi),t}const wv={__proto__:null,[Symbol.iterator](){return Ml(this,Symbol.iterator,ut)},concat(...t){return Is(this).concat(...t.map(e=>he(e)?Is(e):e))},entries(){return Ml(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return Ln(this,"every",t,e,void 0,arguments)},filter(t,e){return Ln(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return Ln(this,"find",t,e,ut,arguments)},findIndex(t,e){return Ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ln(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return Ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ll(this,"includes",t)},indexOf(...t){return Ll(this,"indexOf",t)},join(t){return Is(this).join(t)},lastIndexOf(...t){return Ll(this,"lastIndexOf",t)},map(t,e){return Ln(this,"map",t,e,void 0,arguments)},pop(){return _i(this,"pop")},push(...t){return _i(this,"push",t)},reduce(t,...e){return Jh(this,"reduce",t,e)},reduceRight(t,...e){return Jh(this,"reduceRight",t,e)},shift(){return _i(this,"shift")},some(t,e){return Ln(this,"some",t,e,void 0,arguments)},splice(...t){return _i(this,"splice",t)},toReversed(){return Is(this).toReversed()},toSorted(t){return Is(this).toSorted(t)},toSpliced(...t){return Is(this).toSpliced(...t)},unshift(...t){return _i(this,"unshift",t)},values(){return Ml(this,"values",ut)}};function Ml(t,e,n){const r=ja(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Tv=Array.prototype;function Ln(t,e,n,r,s,i){const o=ja(t),l=o!==t&&!Qt(t),c=o[e];if(c!==Tv[e]){const p=c.apply(t,i);return l?ut(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,ut(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Jh(t,e,n,r){const s=ja(t);let i=n;return s!==t&&(Qt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ut(l),c,t)}),s[e](i,...r)}function Ll(t,e,n){const r=Ce(t);vt(r,"iterate",qi);const s=r[e](...n);return(s===-1||s===!1)&&su(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function _i(t,e,n=[]){Jn(),Xc();const r=Ce(t)[e].apply(t,n);return Zc(),Xn(),r}const Iv=Gc("__proto__,__v_isRef,__isVue"),zp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pn));function bv(t){Pn(t)||(t=String(t));const e=Ce(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Wp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Vv:Yp:i?Qp:Kp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let c;if(o&&(c=wv[n]))return c;if(n==="hasOwnProperty")return bv}const l=Reflect.get(e,n,Ke(e)?e:r);if((Pn(n)?zp.has(n):Iv(n))||(s||vt(e,"get",n),i))return l;if(Ke(l)){const c=o&&Yc(n)?l:l.value;return s&&Me(c)?cc(c):c}return Me(l)?s?cc(l):oo(l):l}}class Gp extends Wp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Nr(i);if(!Qt(r)&&!Nr(r)&&(i=Ce(i),r=Ce(r)),!he(e)&&Ke(i)&&!Ke(r))return c||(i.value=r),!0}const o=he(e)&&Yc(n)?Number(n)<e.length:De(e,n),l=Reflect.set(e,n,r,Ke(e)?e:s);return e===Ce(s)&&(o?br(r,i)&&Bn(e,"set",n,r):Bn(e,"add",n,r)),l}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Pn(n)||!zp.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",he(e)?"length":es),Reflect.ownKeys(e)}}class Av extends Wp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Rv=new Gp,Sv=new Av,Cv=new Gp(!0);const lc=t=>t,No=t=>Reflect.getPrototypeOf(t);function Pv(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=Ns(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?lc:e?oa:ut;return!e&&vt(i,"iterate",c?ac:es),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function kv(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);t||(br(s,l)&&vt(o,"get",s),vt(o,"get",l));const{has:c}=No(o),u=e?lc:t?oa:ut;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Ce(s),"iterate",es),s.size},has(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);return t||(br(s,l)&&vt(o,"has",s),vt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ce(l),u=e?lc:t?oa:ut;return!t&&vt(c,"iterate",es),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return bt(n,t?{add:Oo("add"),set:Oo("set"),delete:Oo("delete"),clear:Oo("clear")}:{add(s){!e&&!Qt(s)&&!Nr(s)&&(s=Ce(s));const i=Ce(this);return No(i).has.call(i,s)||(i.add(s),Bn(i,"add",s,s)),this},set(s,i){!e&&!Qt(i)&&!Nr(i)&&(i=Ce(i));const o=Ce(this),{has:l,get:c}=No(o);let u=l.call(o,s);u||(s=Ce(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?br(i,f)&&Bn(o,"set",s,i):Bn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:l}=No(i);let c=o.call(i,s);c||(s=Ce(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Bn(i,"delete",s,void 0),u},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&Bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Pv(s,t,e)}),n}function nu(t,e){const n=kv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const Dv={get:nu(!1,!1)},Nv={get:nu(!1,!0)},Ov={get:nu(!0,!1)};const Kp=new WeakMap,Qp=new WeakMap,Yp=new WeakMap,Vv=new WeakMap;function xv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mv(t){return t.__v_skip||!Object.isExtensible(t)?0:xv(av(t))}function oo(t){return Nr(t)?t:ru(t,!1,Rv,Dv,Kp)}function Jp(t){return ru(t,!1,Cv,Nv,Qp)}function cc(t){return ru(t,!0,Sv,Ov,Yp)}function ru(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Mv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Ar(t){return Nr(t)?Ar(t.__v_raw):!!(t&&t.__v_isReactive)}function Nr(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function su(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function iu(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&kp(t,"__v_skip",!0),t}const ut=t=>Me(t)?oo(t):t,oa=t=>Me(t)?cc(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function Z(t){return Xp(t,!1)}function Lv(t){return Xp(t,!0)}function Xp(t,e){return Ke(t)?t:new Uv(t,e)}class Uv{constructor(e,n){this.dep=new tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||Nr(e);e=r?e:Ce(e),br(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function cn(t){return Ke(t)?t.value:t}const Fv={get:(t,e,n)=>e==="__v_raw"?t:cn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zp(t){return Ar(t)?t:new Proxy(t,Fv)}function Bv(t){const e=he(t)?new Array(t.length):{};for(const n in t)e[n]=$v(t,n);return e}class jv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ev(Ce(this._object),this._key)}}function $v(t,e,n){const r=t[e];return Ke(r)?r:new jv(t,e,n)}class Hv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return Fp(this,!0),!0}get value(){const e=this.dep.track();return $p(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qv(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new Hv(r,s,n)}const Vo={},aa=new WeakMap;let Yr;function zv(t,e=!1,n=Yr){if(n){let r=aa.get(n);r||aa.set(n,r=[]),r.push(t)}}function Wv(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=C=>s?C:Qt(C)||s===!1||s===0?jn(C,1):jn(C);let f,p,m,v,O=!1,V=!1;if(Ke(t)?(p=()=>t.value,O=Qt(t)):Ar(t)?(p=()=>u(t),O=!0):he(t)?(V=!0,O=t.some(C=>Ar(C)||Qt(C)),p=()=>t.map(C=>{if(Ke(C))return C.value;if(Ar(C))return u(C);if(_e(C))return c?c(C,2):C()})):_e(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Jn();try{m()}finally{Xn()}}const C=Yr;Yr=f;try{return c?c(t,3,[v]):t(v)}finally{Yr=C}}:p=En,e&&s){const C=p,q=s===!0?1/0:s;p=()=>jn(C(),q)}const D=Mp(),L=()=>{f.stop(),D&&D.active&&Qc(D.effects,f)};if(i&&e){const C=e;e=(...q)=>{C(...q),L()}}let x=V?new Array(t.length).fill(Vo):Vo;const S=C=>{if(!(!(f.flags&1)||!f.dirty&&!C))if(e){const q=f.run();if(s||O||(V?q.some((ee,T)=>br(ee,x[T])):br(q,x))){m&&m();const ee=Yr;Yr=f;try{const T=[q,x===Vo?void 0:V&&x[0]===Vo?[]:x,v];x=q,c?c(e,3,T):e(...T)}finally{Yr=ee}}}else f.run()};return l&&l(S),f=new Lp(p),f.scheduler=o?()=>o(S,!1):S,v=C=>zv(C,!1,f),m=f.onStop=()=>{const C=aa.get(f);if(C){if(c)c(C,4);else for(const q of C)q();aa.delete(f)}},e?r?S(!0):x=f.run():o?o(S.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function jn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))jn(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)jn(t[r],e,n);else if(Qs(t)||Ns(t))t.forEach(r=>{jn(r,e,n)});else if(Pp(t)){for(const r in t)jn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&jn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ao(t,e,n,r){try{return r?t(...r):t()}catch(s){$a(s,e,n)}}function kn(t,e,n,r){if(_e(t)){const s=ao(t,e,n,r);return s&&Sp(s)&&s.catch(i=>{$a(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(kn(t[i],e,n,r));return s}}function $a(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Jn(),ao(i,null,10,[t,c,u]),Xn();return}}Gv(t,n,s,r,o)}function Gv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Pt=[];let _n=-1;const Os=[];let gr=null,As=0;const em=Promise.resolve();let la=null;function lo(t){const e=la||em;return t?e.then(this?t.bind(this):t):e}function Kv(t){let e=_n+1,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=zi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ou(t){if(!(t.flags&1)){const e=zi(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=zi(n)?Pt.push(t):Pt.splice(Kv(e),0,t),t.flags|=1,tm()}}function tm(){la||(la=em.then(rm))}function Qv(t){he(t)?Os.push(...t):gr&&t.id===-1?gr.splice(As+1,0,t):t.flags&1||(Os.push(t),t.flags|=1),tm()}function Xh(t,e,n=_n+1){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nm(t){if(Os.length){const e=[...new Set(Os)].sort((n,r)=>zi(n)-zi(r));if(Os.length=0,gr){gr.push(...e);return}for(gr=e,As=0;As<gr.length;As++){const n=gr[As];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gr=null,As=0}}const zi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function rm(t){try{for(_n=0;_n<Pt.length;_n++){const e=Pt[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ao(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<Pt.length;_n++){const e=Pt[_n];e&&(e.flags&=-2)}_n=-1,Pt.length=0,nm(),la=null,(Pt.length||Os.length)&&rm()}}let qt=null,sm=null;function ca(t){const e=qt;return qt=t,sm=t&&t.type.__scopeId||null,e}function Yv(t,e=qt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&fa(-1);const i=ca(e);let o;try{o=t(...s)}finally{ca(i),r._d&&fa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function He(t,e){if(qt===null)return t;const n=Wa(qt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=xe]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&jn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Kr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Jn(),kn(c,n,8,[t.el,l,t,e]),Xn())}}const Jv=Symbol("_vte"),Xv=t=>t.__isTeleport,Zv=Symbol("_leaveCb");function au(t,e){t.shapeFlag&6&&t.component?(t.transition=e,au(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function im(t,e){return _e(t)?bt({name:t.name},e,{setup:t}):t}function om(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ua=new WeakMap;function ki(t,e,n,r,s=!1){if(he(t)){t.forEach((O,V)=>ki(O,e&&(he(e)?e[V]:e),n,r,s));return}if(Di(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ki(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Wa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===xe?l.refs={}:l.refs,p=l.setupState,m=Ce(p),v=p===xe?Rp:O=>De(m,O);if(u!=null&&u!==c){if(Zh(e),Je(u))f[u]=null,v(u)&&(p[u]=null);else if(Ke(u)){u.value=null;const O=e;O.k&&(f[O.k]=null)}}if(_e(c))ao(c,l,12,[o,f]);else{const O=Je(c),V=Ke(c);if(O||V){const D=()=>{if(t.f){const L=O?v(c)?p[c]:f[c]:c.value;if(s)he(L)&&Qc(L,i);else if(he(L))L.includes(i)||L.push(i);else if(O)f[c]=[i],v(c)&&(p[c]=f[c]);else{const x=[i];c.value=x,t.k&&(f[t.k]=x)}}else O?(f[c]=o,v(c)&&(p[c]=o)):V&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const L=()=>{D(),ua.delete(t)};L.id=-1,ua.set(t,L),Ht(L,n)}else Zh(t),D()}}}function Zh(t){const e=ua.get(t);e&&(e.flags|=8,ua.delete(t))}Ba().requestIdleCallback;Ba().cancelIdleCallback;const Di=t=>!!t.type.__asyncLoader,am=t=>t.type.__isKeepAlive;function eE(t,e){lm(t,"a",e)}function tE(t,e){lm(t,"da",e)}function lm(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ha(e,r,n),n){let s=n.parent;for(;s&&s.parent;)am(s.parent.vnode)&&nE(r,e,n,s),s=s.parent}}function nE(t,e,n,r){const s=Ha(e,t,r,!0);cm(()=>{Qc(r[e],s)},n)}function Ha(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Jn();const l=co(n),c=kn(e,n,t,o);return l(),Xn(),c});return r?s.unshift(i):s.push(i),i}}const rr=t=>(e,n=wt)=>{(!Gi||t==="sp")&&Ha(t,(...r)=>e(...r),n)},rE=rr("bm"),$r=rr("m"),sE=rr("bu"),iE=rr("u"),oE=rr("bum"),cm=rr("um"),aE=rr("sp"),lE=rr("rtg"),cE=rr("rtc");function uE(t,e=wt){Ha("ec",t,e)}const hE="components";function fE(t,e){return pE(hE,t,!0,e)||t}const dE=Symbol.for("v-ndc");function pE(t,e,n=!0,r=!1){const s=qt||wt;if(s){const i=s.type;{const l=rw(i,!1);if(l&&(l===e||l===Jt(e)||l===Fa(Jt(e))))return i}const o=ef(s[t]||i[t],e)||ef(s.appContext[t],e);return!o&&r?i:o}}function ef(t,e){return t&&(t[e]||t[Jt(e)]||t[Fa(Jt(e))])}function Tt(t,e,n,r){let s;const i=n,o=he(t);if(o||Je(t)){const l=o&&Ar(t);let c=!1,u=!1;l&&(c=!Qt(t),u=Nr(t),t=ja(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?oa(ut(t[f])):ut(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const uc=t=>t?km(t)?Wa(t):uc(t.parent):null,Ni=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uc(t.parent),$root:t=>uc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>hm(t),$forceUpdate:t=>t.f||(t.f=()=>{ou(t.update)}),$nextTick:t=>t.n||(t.n=lo.bind(t.proxy)),$watch:t=>ME.bind(t)}),Ul=(t,e)=>t!==xe&&!t.__isScriptSetup&&De(t,e),mE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ul(r,e))return o[e]=1,r[e];if(s!==xe&&De(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,i[e];if(n!==xe&&De(n,e))return o[e]=4,n[e];hc&&(o[e]=0)}}const f=Ni[e];let p,m;if(f)return e==="$attrs"&&vt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==xe&&De(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ul(s,e)?(s[e]=n,!0):r!==xe&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},l){let c,u;return!!(n[l]||t!==xe&&l[0]!=="$"&&De(t,l)||Ul(e,l)||(c=i[0])&&De(c,l)||De(r,l)||De(Ni,l)||De(s.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tf(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hc=!0;function gE(t){const e=hm(t),n=t.proxy,r=t.ctx;hc=!1,e.beforeCreate&&nf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:v,updated:O,activated:V,deactivated:D,beforeDestroy:L,beforeUnmount:x,destroyed:S,unmounted:C,render:q,renderTracked:ee,renderTriggered:T,errorCaptured:y,serverPrefetch:E,expose:A,inheritAttrs:b,components:R,directives:_,filters:re}=e;if(u&&_E(u,r,null),o)for(const ge in o){const be=o[ge];_e(be)&&(r[ge]=be.bind(n))}if(s){const ge=s.call(n,n);Me(ge)&&(t.data=oo(ge))}if(hc=!0,i)for(const ge in i){const be=i[ge],Ot=_e(be)?be.bind(n,n):_e(be.get)?be.get.bind(n,n):En,dn=!_e(be)&&_e(be.set)?be.set.bind(n):En,Ft=Be({get:Ot,set:dn});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:at=>Ft.value=at})}if(l)for(const ge in l)um(l[ge],r,n,ge);if(c){const ge=_e(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(be=>{qo(be,ge[be])})}f&&nf(f,t,"c");function Le(ge,be){he(be)?be.forEach(Ot=>ge(Ot.bind(n))):be&&ge(be.bind(n))}if(Le(rE,p),Le($r,m),Le(sE,v),Le(iE,O),Le(eE,V),Le(tE,D),Le(uE,y),Le(cE,ee),Le(lE,T),Le(oE,x),Le(cm,C),Le(aE,E),he(A))if(A.length){const ge=t.exposed||(t.exposed={});A.forEach(be=>{Object.defineProperty(ge,be,{get:()=>n[be],set:Ot=>n[be]=Ot,enumerable:!0})})}else t.exposed||(t.exposed={});q&&t.render===En&&(t.render=q),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),_&&(t.directives=_),E&&om(t)}function _E(t,e,n=En){he(t)&&(t=fc(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=un(s.from||r,s.default,!0):i=un(s.from||r):i=un(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function nf(t,e,n){kn(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function um(t,e,n,r){let s=r.includes(".")?bm(n,r):()=>n[r];if(Je(t)){const i=e[t];_e(i)&&ns(s,i)}else if(_e(t))ns(s,t.bind(n));else if(Me(t))if(he(t))t.forEach(i=>um(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&ns(s,i,t)}}function hm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ha(c,u,o,!0)),ha(c,e,o)),Me(e)&&i.set(e,c),c}function ha(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ha(t,i,n,!0),s&&s.forEach(o=>ha(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=yE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const yE={data:rf,props:sf,emits:sf,methods:Ei,computed:Ei,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Ei,directives:Ei,watch:EE,provide:rf,inject:vE};function rf(t,e){return e?t?function(){return bt(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function vE(t,e){return Ei(fc(t),fc(e))}function fc(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Ei(t,e){return t?bt(Object.create(null),t,e):e}function sf(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:bt(Object.create(null),tf(t),tf(e??{})):e}function EE(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function fm(){return{app:null,config:{isNativeTag:Rp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wE=0;function TE(t,e){return function(r,s=null){_e(r)||(r=bt({},r)),s!=null&&!Me(s)&&(s=null);const i=fm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:wE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:iw,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&_e(f.install)?(o.add(f),f.install(u,...p)):_e(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const v=u._ceVNode||Nt(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,f,m),c=!0,u._container=f,f.__vue_app__=u,Wa(v.component)}},onUnmount(f){l.push(f)},unmount(){c&&(kn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ts;ts=u;try{return f()}finally{ts=p}}};return u}}let ts=null;function qo(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function un(t,e,n=!1){const r=Pm();if(r||ts){let s=ts?ts._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}function IE(){return!!(Pm()||ts)}const dm={},pm=()=>Object.create(dm),mm=t=>Object.getPrototypeOf(t)===dm;function bE(t,e,n,r=!1){const s={},i=pm();t.propsDefaults=Object.create(null),gm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Jp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function AE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ce(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(qa(t.emitsOptions,m))continue;const v=e[m];if(c)if(De(i,m))v!==i[m]&&(i[m]=v,u=!0);else{const O=Jt(m);s[O]=dc(c,l,O,v,t,!1)}else v!==i[m]&&(i[m]=v,u=!0)}}}else{gm(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!De(e,p)&&((f=fs(p))===p||!De(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=dc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!De(e,p))&&(delete i[p],u=!0)}u&&Bn(t.attrs,"set","")}function gm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Si(c))continue;const u=e[c];let f;s&&De(s,f=Jt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:qa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ce(n),u=l||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=dc(s,c,p,u[p],t,!De(u,p))}}return o}function dc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=De(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=co(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===fs(n))&&(r=!0))}return r}const RE=new WeakMap;function _m(t,e,n=!1){const r=n?RE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const f=p=>{c=!0;const[m,v]=_m(p,e,!0);bt(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Me(t)&&r.set(t,Ds),Ds;if(he(i))for(let f=0;f<i.length;f++){const p=Jt(i[f]);of(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=Jt(f);if(of(p)){const m=i[f],v=o[p]=he(m)||_e(m)?{type:m}:bt({},m),O=v.type;let V=!1,D=!0;if(he(O))for(let L=0;L<O.length;++L){const x=O[L],S=_e(x)&&x.name;if(S==="Boolean"){V=!0;break}else S==="String"&&(D=!1)}else V=_e(O)&&O.name==="Boolean";v[0]=V,v[1]=D,(V||De(v,"default"))&&l.push(p)}}const u=[o,l];return Me(t)&&r.set(t,u),u}function of(t){return t[0]!=="$"&&!Si(t)}const lu=t=>t==="_"||t==="_ctx"||t==="$stable",cu=t=>he(t)?t.map(vn):[vn(t)],SE=(t,e,n)=>{if(e._n)return e;const r=Yv((...s)=>cu(e(...s)),n);return r._c=!1,r},ym=(t,e,n)=>{const r=t._ctx;for(const s in t){if(lu(s))continue;const i=t[s];if(_e(i))e[s]=SE(s,i,r);else if(i!=null){const o=cu(i);e[s]=()=>o}}},vm=(t,e)=>{const n=cu(e);t.slots.default=()=>n},Em=(t,e,n)=>{for(const r in e)(n||!lu(r))&&(t[r]=e[r])},CE=(t,e,n)=>{const r=t.slots=pm();if(t.vnode.shapeFlag&32){const s=e._;s?(Em(r,e,n),n&&kp(r,"_",s,!0)):ym(e,r)}else e&&vm(t,e)},PE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Em(s,e,n):(i=!e.$stable,ym(e,s)),o=e}else e&&(vm(t,e),o={default:1});if(i)for(const l in s)!lu(l)&&o[l]==null&&delete s[l]},Ht=qE;function kE(t){return DE(t)}function DE(t,e){const n=Ba();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:v=En,insertStaticContent:O}=t,V=(w,I,k,B=null,$=null,U=null,Q=void 0,G=null,z=!!I.dynamicChildren)=>{if(w===I)return;w&&!yi(w,I)&&(B=F(w),at(w,$,U,!0),w=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:W,ref:ce,shapeFlag:X}=I;switch(W){case za:D(w,I,k,B);break;case Or:L(w,I,k,B);break;case zo:w==null&&x(I,k,B,Q);break;case Pe:R(w,I,k,B,$,U,Q,G,z);break;default:X&1?q(w,I,k,B,$,U,Q,G,z):X&6?_(w,I,k,B,$,U,Q,G,z):(X&64||X&128)&&W.process(w,I,k,B,$,U,Q,G,z,oe)}ce!=null&&$?ki(ce,w&&w.ref,U,I||w,!I):ce==null&&w&&w.ref!=null&&ki(w.ref,null,U,w,!0)},D=(w,I,k,B)=>{if(w==null)r(I.el=l(I.children),k,B);else{const $=I.el=w.el;I.children!==w.children&&u($,I.children)}},L=(w,I,k,B)=>{w==null?r(I.el=c(I.children||""),k,B):I.el=w.el},x=(w,I,k,B)=>{[w.el,w.anchor]=O(w.children,I,k,B,w.el,w.anchor)},S=({el:w,anchor:I},k,B)=>{let $;for(;w&&w!==I;)$=m(w),r(w,k,B),w=$;r(I,k,B)},C=({el:w,anchor:I})=>{let k;for(;w&&w!==I;)k=m(w),s(w),w=k;s(I)},q=(w,I,k,B,$,U,Q,G,z)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),w==null?ee(I,k,B,$,U,Q,G,z):E(w,I,$,U,Q,G,z)},ee=(w,I,k,B,$,U,Q,G)=>{let z,W;const{props:ce,shapeFlag:X,transition:ae,dirs:ue}=w;if(z=w.el=o(w.type,U,ce&&ce.is,ce),X&8?f(z,w.children):X&16&&y(w.children,z,null,B,$,Fl(w,U),Q,G),ue&&Kr(w,null,B,"created"),T(z,w,w.scopeId,Q,B),ce){for(const Oe in ce)Oe!=="value"&&!Si(Oe)&&i(z,Oe,null,ce[Oe],U,B);"value"in ce&&i(z,"value",null,ce.value,U),(W=ce.onVnodeBeforeMount)&&gn(W,B,w)}ue&&Kr(w,null,B,"beforeMount");const ve=NE($,ae);ve&&ae.beforeEnter(z),r(z,I,k),((W=ce&&ce.onVnodeMounted)||ve||ue)&&Ht(()=>{W&&gn(W,B,w),ve&&ae.enter(z),ue&&Kr(w,null,B,"mounted")},$)},T=(w,I,k,B,$)=>{if(k&&v(w,k),B)for(let U=0;U<B.length;U++)v(w,B[U]);if($){let U=$.subTree;if(I===U||Rm(U.type)&&(U.ssContent===I||U.ssFallback===I)){const Q=$.vnode;T(w,Q,Q.scopeId,Q.slotScopeIds,$.parent)}}},y=(w,I,k,B,$,U,Q,G,z=0)=>{for(let W=z;W<w.length;W++){const ce=w[W]=G?_r(w[W]):vn(w[W]);V(null,ce,I,k,B,$,U,Q,G)}},E=(w,I,k,B,$,U,Q)=>{const G=I.el=w.el;let{patchFlag:z,dynamicChildren:W,dirs:ce}=I;z|=w.patchFlag&16;const X=w.props||xe,ae=I.props||xe;let ue;if(k&&Qr(k,!1),(ue=ae.onVnodeBeforeUpdate)&&gn(ue,k,I,w),ce&&Kr(I,w,k,"beforeUpdate"),k&&Qr(k,!0),(X.innerHTML&&ae.innerHTML==null||X.textContent&&ae.textContent==null)&&f(G,""),W?A(w.dynamicChildren,W,G,k,B,Fl(I,$),U):Q||be(w,I,G,null,k,B,Fl(I,$),U,!1),z>0){if(z&16)b(G,X,ae,k,$);else if(z&2&&X.class!==ae.class&&i(G,"class",null,ae.class,$),z&4&&i(G,"style",X.style,ae.style,$),z&8){const ve=I.dynamicProps;for(let Oe=0;Oe<ve.length;Oe++){const Re=ve[Oe],pt=X[Re],mt=ae[Re];(mt!==pt||Re==="value")&&i(G,Re,pt,mt,$,k)}}z&1&&w.children!==I.children&&f(G,I.children)}else!Q&&W==null&&b(G,X,ae,k,$);((ue=ae.onVnodeUpdated)||ce)&&Ht(()=>{ue&&gn(ue,k,I,w),ce&&Kr(I,w,k,"updated")},B)},A=(w,I,k,B,$,U,Q)=>{for(let G=0;G<I.length;G++){const z=w[G],W=I[G],ce=z.el&&(z.type===Pe||!yi(z,W)||z.shapeFlag&198)?p(z.el):k;V(z,W,ce,null,B,$,U,Q,!0)}},b=(w,I,k,B,$)=>{if(I!==k){if(I!==xe)for(const U in I)!Si(U)&&!(U in k)&&i(w,U,I[U],null,$,B);for(const U in k){if(Si(U))continue;const Q=k[U],G=I[U];Q!==G&&U!=="value"&&i(w,U,G,Q,$,B)}"value"in k&&i(w,"value",I.value,k.value,$)}},R=(w,I,k,B,$,U,Q,G,z)=>{const W=I.el=w?w.el:l(""),ce=I.anchor=w?w.anchor:l("");let{patchFlag:X,dynamicChildren:ae,slotScopeIds:ue}=I;ue&&(G=G?G.concat(ue):ue),w==null?(r(W,k,B),r(ce,k,B),y(I.children||[],k,ce,$,U,Q,G,z)):X>0&&X&64&&ae&&w.dynamicChildren?(A(w.dynamicChildren,ae,k,$,U,Q,G),(I.key!=null||$&&I===$.subTree)&&wm(w,I,!0)):be(w,I,k,ce,$,U,Q,G,z)},_=(w,I,k,B,$,U,Q,G,z)=>{I.slotScopeIds=G,w==null?I.shapeFlag&512?$.ctx.activate(I,k,B,Q,z):re(I,k,B,$,U,Q,z):rt(w,I,z)},re=(w,I,k,B,$,U,Q)=>{const G=w.component=XE(w,B,$);if(am(w)&&(G.ctx.renderer=oe),ZE(G,!1,Q),G.asyncDep){if($&&$.registerDep(G,Le,Q),!w.el){const z=G.subTree=Nt(Or);L(null,z,I,k),w.placeholder=z.el}}else Le(G,w,I,k,$,U,Q)},rt=(w,I,k)=>{const B=I.component=w.component;if($E(w,I,k))if(B.asyncDep&&!B.asyncResolved){ge(B,I,k);return}else B.next=I,B.update();else I.el=w.el,B.vnode=I},Le=(w,I,k,B,$,U,Q)=>{const G=()=>{if(w.isMounted){let{next:X,bu:ae,u:ue,parent:ve,vnode:Oe}=w;{const jt=Tm(w);if(jt){X&&(X.el=Oe.el,ge(w,X,Q)),jt.asyncDep.then(()=>{w.isUnmounted||G()});return}}let Re=X,pt;Qr(w,!1),X?(X.el=Oe.el,ge(w,X,Q)):X=Oe,ae&&Ho(ae),(pt=X.props&&X.props.onVnodeBeforeUpdate)&&gn(pt,ve,X,Oe),Qr(w,!0);const mt=lf(w),Bt=w.subTree;w.subTree=mt,V(Bt,mt,p(Bt.el),F(Bt),w,$,U),X.el=mt.el,Re===null&&HE(w,mt.el),ue&&Ht(ue,$),(pt=X.props&&X.props.onVnodeUpdated)&&Ht(()=>gn(pt,ve,X,Oe),$)}else{let X;const{el:ae,props:ue}=I,{bm:ve,m:Oe,parent:Re,root:pt,type:mt}=w,Bt=Di(I);Qr(w,!1),ve&&Ho(ve),!Bt&&(X=ue&&ue.onVnodeBeforeMount)&&gn(X,Re,I),Qr(w,!0);{pt.ce&&pt.ce._def.shadowRoot!==!1&&pt.ce._injectChildStyle(mt);const jt=w.subTree=lf(w);V(null,jt,k,B,w,$,U),I.el=jt.el}if(Oe&&Ht(Oe,$),!Bt&&(X=ue&&ue.onVnodeMounted)){const jt=I;Ht(()=>gn(X,Re,jt),$)}(I.shapeFlag&256||Re&&Di(Re.vnode)&&Re.vnode.shapeFlag&256)&&w.a&&Ht(w.a,$),w.isMounted=!0,I=k=B=null}};w.scope.on();const z=w.effect=new Lp(G);w.scope.off();const W=w.update=z.run.bind(z),ce=w.job=z.runIfDirty.bind(z);ce.i=w,ce.id=w.uid,z.scheduler=()=>ou(ce),Qr(w,!0),W()},ge=(w,I,k)=>{I.component=w;const B=w.vnode.props;w.vnode=I,w.next=null,AE(w,I.props,B,k),PE(w,I.children,k),Jn(),Xh(w),Xn()},be=(w,I,k,B,$,U,Q,G,z=!1)=>{const W=w&&w.children,ce=w?w.shapeFlag:0,X=I.children,{patchFlag:ae,shapeFlag:ue}=I;if(ae>0){if(ae&128){dn(W,X,k,B,$,U,Q,G,z);return}else if(ae&256){Ot(W,X,k,B,$,U,Q,G,z);return}}ue&8?(ce&16&&dt(W,$,U),X!==W&&f(k,X)):ce&16?ue&16?dn(W,X,k,B,$,U,Q,G,z):dt(W,$,U,!0):(ce&8&&f(k,""),ue&16&&y(X,k,B,$,U,Q,G,z))},Ot=(w,I,k,B,$,U,Q,G,z)=>{w=w||Ds,I=I||Ds;const W=w.length,ce=I.length,X=Math.min(W,ce);let ae;for(ae=0;ae<X;ae++){const ue=I[ae]=z?_r(I[ae]):vn(I[ae]);V(w[ae],ue,k,null,$,U,Q,G,z)}W>ce?dt(w,$,U,!0,!1,X):y(I,k,B,$,U,Q,G,z,X)},dn=(w,I,k,B,$,U,Q,G,z)=>{let W=0;const ce=I.length;let X=w.length-1,ae=ce-1;for(;W<=X&&W<=ae;){const ue=w[W],ve=I[W]=z?_r(I[W]):vn(I[W]);if(yi(ue,ve))V(ue,ve,k,null,$,U,Q,G,z);else break;W++}for(;W<=X&&W<=ae;){const ue=w[X],ve=I[ae]=z?_r(I[ae]):vn(I[ae]);if(yi(ue,ve))V(ue,ve,k,null,$,U,Q,G,z);else break;X--,ae--}if(W>X){if(W<=ae){const ue=ae+1,ve=ue<ce?I[ue].el:B;for(;W<=ae;)V(null,I[W]=z?_r(I[W]):vn(I[W]),k,ve,$,U,Q,G,z),W++}}else if(W>ae)for(;W<=X;)at(w[W],$,U,!0),W++;else{const ue=W,ve=W,Oe=new Map;for(W=ve;W<=ae;W++){const lt=I[W]=z?_r(I[W]):vn(I[W]);lt.key!=null&&Oe.set(lt.key,W)}let Re,pt=0;const mt=ae-ve+1;let Bt=!1,jt=0;const rn=new Array(mt);for(W=0;W<mt;W++)rn[W]=0;for(W=ue;W<=X;W++){const lt=w[W];if(pt>=mt){at(lt,$,U,!0);continue}let st;if(lt.key!=null)st=Oe.get(lt.key);else for(Re=ve;Re<=ae;Re++)if(rn[Re-ve]===0&&yi(lt,I[Re])){st=Re;break}st===void 0?at(lt,$,U,!0):(rn[st-ve]=W+1,st>=jt?jt=st:Bt=!0,V(lt,I[st],k,null,$,U,Q,G,z),pt++)}const vs=Bt?OE(rn):Ds;for(Re=vs.length-1,W=mt-1;W>=0;W--){const lt=ve+W,st=I[lt],ni=I[lt+1],Hr=lt+1<ce?ni.el||ni.placeholder:B;rn[W]===0?V(null,st,k,Hr,$,U,Q,G,z):Bt&&(Re<0||W!==vs[Re]?Ft(st,k,Hr,2):Re--)}}},Ft=(w,I,k,B,$=null)=>{const{el:U,type:Q,transition:G,children:z,shapeFlag:W}=w;if(W&6){Ft(w.component.subTree,I,k,B);return}if(W&128){w.suspense.move(I,k,B);return}if(W&64){Q.move(w,I,k,oe);return}if(Q===Pe){r(U,I,k);for(let X=0;X<z.length;X++)Ft(z[X],I,k,B);r(w.anchor,I,k);return}if(Q===zo){S(w,I,k);return}if(B!==2&&W&1&&G)if(B===0)G.beforeEnter(U),r(U,I,k),Ht(()=>G.enter(U),$);else{const{leave:X,delayLeave:ae,afterLeave:ue}=G,ve=()=>{w.ctx.isUnmounted?s(U):r(U,I,k)},Oe=()=>{U._isLeaving&&U[Zv](!0),X(U,()=>{ve(),ue&&ue()})};ae?ae(U,ve,Oe):Oe()}else r(U,I,k)},at=(w,I,k,B=!1,$=!1)=>{const{type:U,props:Q,ref:G,children:z,dynamicChildren:W,shapeFlag:ce,patchFlag:X,dirs:ae,cacheIndex:ue}=w;if(X===-2&&($=!1),G!=null&&(Jn(),ki(G,null,k,w,!0),Xn()),ue!=null&&(I.renderCache[ue]=void 0),ce&256){I.ctx.deactivate(w);return}const ve=ce&1&&ae,Oe=!Di(w);let Re;if(Oe&&(Re=Q&&Q.onVnodeBeforeUnmount)&&gn(Re,I,w),ce&6)nn(w.component,k,B);else{if(ce&128){w.suspense.unmount(k,B);return}ve&&Kr(w,null,I,"beforeUnmount"),ce&64?w.type.remove(w,I,k,oe,B):W&&!W.hasOnce&&(U!==Pe||X>0&&X&64)?dt(W,I,k,!1,!0):(U===Pe&&X&384||!$&&ce&16)&&dt(z,I,k),B&&Mn(w)}(Oe&&(Re=Q&&Q.onVnodeUnmounted)||ve)&&Ht(()=>{Re&&gn(Re,I,w),ve&&Kr(w,null,I,"unmounted")},k)},Mn=w=>{const{type:I,el:k,anchor:B,transition:$}=w;if(I===Pe){tn(k,B);return}if(I===zo){C(w);return}const U=()=>{s(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:Q,delayLeave:G}=$,z=()=>Q(k,U);G?G(w.el,U,z):z()}else U()},tn=(w,I)=>{let k;for(;w!==I;)k=m(w),s(w),w=k;s(I)},nn=(w,I,k)=>{const{bum:B,scope:$,job:U,subTree:Q,um:G,m:z,a:W}=w;af(z),af(W),B&&Ho(B),$.stop(),U&&(U.flags|=8,at(Q,w,I,k)),G&&Ht(G,I),Ht(()=>{w.isUnmounted=!0},I)},dt=(w,I,k,B=!1,$=!1,U=0)=>{for(let Q=U;Q<w.length;Q++)at(w[Q],I,k,B,$)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const I=m(w.anchor||w.el),k=I&&I[Jv];return k?m(k):I};let te=!1;const Y=(w,I,k)=>{w==null?I._vnode&&at(I._vnode,null,null,!0):V(I._vnode||null,w,I,null,null,null,k),I._vnode=w,te||(te=!0,Xh(),nm(),te=!1)},oe={p:V,um:at,m:Ft,r:Mn,mt:re,mc:y,pc:be,pbc:A,n:F,o:t};return{render:Y,hydrate:void 0,createApp:TE(Y)}}function Fl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function NE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wm(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=_r(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&wm(o,l)),l.type===za&&l.patchFlag!==-1&&(l.el=o.el),l.type===Or&&!l.el&&(l.el=o.el)}}function OE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Tm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tm(e)}function af(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const VE=Symbol.for("v-scx"),xE=()=>un(VE);function ns(t,e,n){return Im(t,e,n)}function Im(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,l=bt({},n),c=e&&r||!e&&i!=="post";let u;if(Gi){if(i==="sync"){const v=xE();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=En,v.resume=En,v.pause=En,v}}const f=wt;l.call=(v,O,V)=>kn(v,f,O,V);let p=!1;i==="post"?l.scheduler=v=>{Ht(v,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,O)=>{O?v():ou(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const m=Wv(t,e,l);return Gi&&(u?u.push(m):c&&m()),m}function ME(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?bm(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=co(this),l=Im(s,i.bind(r),n);return o(),l}function bm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const LE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${fs(e)}Modifiers`];function UE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&LE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Je(f)?f.trim():f)),o.number&&(s=n.map(sa)));let l,c=r[l=Ol(e)]||r[l=Ol(Jt(e))];!c&&i&&(c=r[l=Ol(fs(e))]),c&&kn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,kn(u,t,6,s)}}const FE=new WeakMap;function Am(t,e,n=!1){const r=n?FE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const f=Am(u,e,!0);f&&(l=!0,bt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Me(t)&&r.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):bt(o,i),Me(t)&&r.set(t,o),o)}function qa(t,e){return!t||!La(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,fs(e))||De(t,e))}function lf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:v,ctx:O,inheritAttrs:V}=t,D=ca(t);let L,x;try{if(n.shapeFlag&4){const C=s||r,q=C;L=vn(u.call(q,C,f,p,v,m,O)),x=l}else{const C=e;L=vn(C.length>1?C(p,{attrs:l,slots:o,emit:c}):C(p,null)),x=e.props?l:BE(l)}}catch(C){Oi.length=0,$a(C,t,1),L=Nt(Or)}let S=L;if(x&&V!==!1){const C=Object.keys(x),{shapeFlag:q}=S;C.length&&q&7&&(i&&C.some(Kc)&&(x=jE(x,i)),S=Fs(S,x,!1,!0))}return n.dirs&&(S=Fs(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&au(S,n.transition),L=S,ca(D),L}const BE=t=>{let e;for(const n in t)(n==="class"||n==="style"||La(n))&&((e||(e={}))[n]=t[n]);return e},jE=(t,e)=>{const n={};for(const r in t)(!Kc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $E(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?cf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!qa(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?cf(r,o,u):!0:!!o;return!1}function cf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!qa(n,i))return!0}return!1}function HE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Rm=t=>t.__isSuspense;function qE(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):Qv(t)}const Pe=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),Or=Symbol.for("v-cmt"),zo=Symbol.for("v-stc"),Oi=[];let zt=null;function J(t=!1){Oi.push(zt=t?null:[])}function zE(){Oi.pop(),zt=Oi[Oi.length-1]||null}let Wi=1;function fa(t,e=!1){Wi+=t,t<0&&zt&&e&&(zt.hasOnce=!0)}function Sm(t){return t.dynamicChildren=Wi>0?zt||Ds:null,zE(),Wi>0&&zt&&zt.push(t),t}function ie(t,e,n,r,s,i){return Sm(P(t,e,n,r,s,i,!0))}function Dt(t,e,n,r,s){return Sm(Nt(t,e,n,r,s,!0))}function da(t){return t?t.__v_isVNode===!0:!1}function yi(t,e){return t.type===e.type&&t.key===e.key}const Cm=({key:t})=>t??null,Wo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ke(t)||_e(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,s=null,i=t===Pe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cm(e),ref:e&&Wo(e),scopeId:sm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qt};return l?(uu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),Wi>0&&!o&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const Nt=WE;function WE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===dE)&&(t=Or),da(t)){const l=Fs(t,e,!0);return n&&uu(l,n),Wi>0&&!i&&zt&&(l.shapeFlag&6?zt[zt.indexOf(t)]=l:zt.push(l)),l.patchFlag=-2,l}if(sw(t)&&(t=t.__vccOpts),e){e=GE(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=Yn(l)),Me(c)&&(su(c)&&!he(c)&&(c=bt({},c)),e.style=Dr(c))}const o=Je(t)?1:Rm(t)?128:Xv(t)?64:Me(t)?4:_e(t)?2:0;return P(t,e,n,r,s,o,i,!0)}function GE(t){return t?su(t)||mm(t)?bt({},t):t:null}function Fs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?QE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Cm(u),ref:e&&e.ref?n&&i?he(i)?i.concat(Wo(e)):[i,Wo(e)]:Wo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fs(t.ssContent),ssFallback:t.ssFallback&&Fs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&au(f,c.clone(f)),f}function Wt(t=" ",e=0){return Nt(za,null,t,e)}function KE(t,e){const n=Nt(zo,null,t);return n.staticCount=e,n}function Lt(t="",e=!1){return e?(J(),Dt(Or,null,t)):Nt(Or,null,t)}function vn(t){return t==null||typeof t=="boolean"?Nt(Or):he(t)?Nt(Pe,null,t.slice()):da(t)?_r(t):Nt(za,null,String(t))}function _r(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fs(t)}function uu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!mm(e)?e._ctx=qt:s===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),r&64?(n=16,e=[Wt(e)]):n=8);t.children=e,t.shapeFlag|=n}function QE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yn([e.class,r.class]));else if(s==="style")e.style=Dr([e.style,r.style]);else if(La(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function gn(t,e,n,r=null){kn(t,e,7,[n,r])}const YE=fm();let JE=0;function XE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||YE,i={uid:JE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_m(r,s),emitsOptions:Am(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=UE.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const Pm=()=>wt||qt;let pa,pc;{const t=Ba(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};pa=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),pc=e("__VUE_SSR_SETTERS__",n=>Gi=n)}const co=t=>{const e=wt;return pa(t),t.scope.on(),()=>{t.scope.off(),pa(e)}},uf=()=>{wt&&wt.scope.off(),pa(null)};function km(t){return t.vnode.shapeFlag&4}let Gi=!1;function ZE(t,e=!1,n=!1){e&&pc(e);const{props:r,children:s}=t.vnode,i=km(t);bE(t,r,i,e),CE(t,s,n||e);const o=i?ew(t,e):void 0;return e&&pc(!1),o}function ew(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,mE);const{setup:r}=n;if(r){Jn();const s=t.setupContext=r.length>1?nw(t):null,i=co(t),o=ao(r,t,0,[t.props,s]),l=Sp(o);if(Xn(),i(),(l||t.sp)&&!Di(t)&&om(t),l){if(o.then(uf,uf),e)return o.then(c=>{hf(t,c)}).catch(c=>{$a(c,t,0)});t.asyncDep=o}else hf(t,o)}else Dm(t)}function hf(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=Zp(e)),Dm(t)}function Dm(t,e,n){const r=t.type;t.render||(t.render=r.render||En);{const s=co(t);Jn();try{gE(t)}finally{Xn(),s()}}}const tw={get(t,e){return vt(t,"get",""),t[e]}};function nw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tw),slots:t.slots,emit:t.emit,expose:e}}function Wa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zp(iu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ni)return Ni[n](t)},has(e,n){return n in e||n in Ni}})):t.proxy}function rw(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function sw(t){return _e(t)&&"__vccOpts"in t}const Be=(t,e)=>qv(t,e,Gi);function Nm(t,e,n){try{fa(-1);const r=arguments.length;return r===2?Me(e)&&!he(e)?da(e)?Nt(t,null,[e]):Nt(t,e):Nt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&da(n)&&(n=[n]),Nt(t,e,n))}finally{fa(1)}}const iw="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mc;const ff=typeof window<"u"&&window.trustedTypes;if(ff)try{mc=ff.createPolicy("vue",{createHTML:t=>t})}catch{}const Om=mc?t=>mc.createHTML(t):t=>t,ow="http://www.w3.org/2000/svg",aw="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,df=Fn&&Fn.createElement("template"),lw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Fn.createElementNS(ow,t):e==="mathml"?Fn.createElementNS(aw,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{df.innerHTML=Om(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=df.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cw=Symbol("_vtc");function uw(t,e,n){const r=t[cw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pf=Symbol("_vod"),hw=Symbol("_vsh"),fw=Symbol(""),dw=/(?:^|;)\s*display\s*:/;function pw(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Go(r,l,"")}else for(const o in e)n[o]==null&&Go(r,o,"");for(const o in n)o==="display"&&(i=!0),Go(r,o,n[o])}else if(s){if(e!==n){const o=r[fw];o&&(n+=";"+o),r.cssText=n,i=dw.test(n)}}else e&&t.removeAttribute("style");pf in t&&(t[pf]=i?r.display:"",t[hw]&&(r.display="none"))}const mf=/\s*!important$/;function Go(t,e,n){if(he(n))n.forEach(r=>Go(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mw(t,e);mf.test(n)?t.setProperty(fs(r),n.replace(mf,""),"important"):t[r]=n}}const gf=["Webkit","Moz","ms"],Bl={};function mw(t,e){const n=Bl[e];if(n)return n;let r=Jt(e);if(r!=="filter"&&r in t)return Bl[e]=r;r=Fa(r);for(let s=0;s<gf.length;s++){const i=gf[s]+r;if(i in t)return Bl[e]=i}return e}const _f="http://www.w3.org/1999/xlink";function yf(t,e,n,r,s,i=mv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_f,e.slice(6,e.length)):t.setAttributeNS(_f,e,n):n==null||i&&!Dp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Pn(n)?String(n):n)}function vf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Om(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Dp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function $n(t,e,n,r){t.addEventListener(e,n,r)}function gw(t,e,n,r){t.removeEventListener(e,n,r)}const Ef=Symbol("_vei");function _w(t,e,n,r,s=null){const i=t[Ef]||(t[Ef]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=yw(e);if(r){const u=i[e]=ww(r,s);$n(t,l,u,c)}else o&&(gw(t,l,o,c),i[e]=void 0)}}const wf=/(?:Once|Passive|Capture)$/;function yw(t){let e;if(wf.test(t)){e={};let r;for(;r=t.match(wf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fs(t.slice(2)),e]}let jl=0;const vw=Promise.resolve(),Ew=()=>jl||(vw.then(()=>jl=0),jl=Date.now());function ww(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kn(Tw(r,n.value),e,5,[r])};return n.value=t,n.attached=Ew(),n}function Tw(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Iw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?uw(t,r,o):e==="style"?pw(t,n,r):La(e)?Kc(e)||_w(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bw(t,e,r,o))?(vf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?vf(t,Jt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yf(t,e,r,o))};function bw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tf(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tf(e)&&Je(n)?!1:e in t}const Vr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>Ho(e,n):e};function Aw(t){t.target.composing=!0}function If(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yt=Symbol("_assign"),It={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Yt]=Vr(s);const i=r||s.props&&s.props.type==="number";$n(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=sa(l)),t[Yt](l)}),n&&$n(t,"change",()=>{t.value=t.value.trim()}),e||($n(t,"compositionstart",Aw),$n(t,"compositionend",If),$n(t,"change",If))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Yt]=Vr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?sa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Vm={deep:!0,created(t,e,n){t[Yt]=Vr(n),$n(t,"change",()=>{const r=t._modelValue,s=Bs(t),i=t.checked,o=t[Yt];if(he(r)){const l=Jc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Qs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(xm(t,i))})},mounted:bf,beforeUpdate(t,e,n){t[Yt]=Vr(n),bf(t,e,n)}};function bf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(he(e))s=Jc(e,r.props.value)>-1;else if(Qs(e))s=e.has(r.props.value);else{if(e===n)return;s=ss(e,xm(t,!0))}t.checked!==s&&(t.checked=s)}const Rw={created(t,{value:e},n){t.checked=ss(e,n.props.value),t[Yt]=Vr(n),$n(t,"change",()=>{t[Yt](Bs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Yt]=Vr(r),e!==n&&(t.checked=ss(e,r.props.value))}},Rr={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Qs(e);$n(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sa(Bs(o)):Bs(o));t[Yt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,lo(()=>{t._assigning=!1})}),t[Yt]=Vr(r)},mounted(t,{value:e}){Af(t,e)},beforeUpdate(t,e,n){t[Yt]=Vr(n)},updated(t,{value:e}){t._assigning||Af(t,e)}};function Af(t,e){const n=t.multiple,r=he(e);if(!(n&&!r&&!Qs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Bs(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Jc(e,l)>-1}else o.selected=e.has(l);else if(ss(Bs(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Bs(t){return"_value"in t?t._value:t.value}function xm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Sw={created(t,e,n){xo(t,e,n,null,"created")},mounted(t,e,n){xo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){xo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){xo(t,e,n,r,"updated")}};function Cw(t,e){switch(t){case"SELECT":return Rr;case"TEXTAREA":return It;default:switch(e){case"checkbox":return Vm;case"radio":return Rw;default:return It}}}function xo(t,e,n,r,s){const o=Cw(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const Pw=["ctrl","shift","alt","meta"],kw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pw.some(n=>t[`${n}Key`]&&!e.includes(n))},hu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=kw[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},Dw=bt({patchProp:Iw},lw);let Rf;function Nw(){return Rf||(Rf=kE(Dw))}const Ow=((...t)=>{const e=Nw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xw(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Vw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Vw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function xw(t){return Je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Mm;const Ga=t=>Mm=t,Lm=Symbol();function gc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vi||(Vi={}));function Mw(){const t=xp(!0),e=t.run(()=>Z({}));let n=[],r=[];const s=iu({install(i){Ga(s),s._a=i,i.provide(Lm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Um=()=>{};function Sf(t,e,n,r=Um){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&Mp()&&_v(s),s}function bs(t,...e){t.forEach(n=>{n(...e)})}const Lw=t=>t(),Cf=Symbol(),$l=Symbol();function _c(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];gc(s)&&gc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!Ar(r)?t[n]=_c(s,r):t[n]=r}return t}const Uw=Symbol();function Fw(t){return!gc(t)||!Object.prototype.hasOwnProperty.call(t,Uw)}const{assign:mr}=Object;function Bw(t){return!!(Ke(t)&&t.effect)}function jw(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=Bv(n.state.value[t]);return mr(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=iu(Be(()=>{Ga(n);const v=n._s.get(t);return o[m].call(v,v)})),p),{}))}return c=Fm(t,u,e,n,r,!0),c}function Fm(t,e,n={},r,s,i){let o;const l=mr({actions:{}},n),c={deep:!0};let u,f,p=new Set,m=new Set,v;const O=r.state.value[t];!i&&!O&&(r.state.value[t]={}),Z({});let V;function D(y){let E;u=f=!1,typeof y=="function"?(y(r.state.value[t]),E={type:Vi.patchFunction,storeId:t,events:v}):(_c(r.state.value[t],y),E={type:Vi.patchObject,payload:y,storeId:t,events:v});const A=V=Symbol();lo().then(()=>{V===A&&(u=!0)}),f=!0,bs(p,E,r.state.value[t])}const L=i?function(){const{state:E}=n,A=E?E():{};this.$patch(b=>{mr(b,A)})}:Um;function x(){o.stop(),p.clear(),m.clear(),r._s.delete(t)}const S=(y,E="")=>{if(Cf in y)return y[$l]=E,y;const A=function(){Ga(r);const b=Array.from(arguments),R=new Set,_=new Set;function re(ge){R.add(ge)}function rt(ge){_.add(ge)}bs(m,{args:b,name:A[$l],store:q,after:re,onError:rt});let Le;try{Le=y.apply(this&&this.$id===t?this:q,b)}catch(ge){throw bs(_,ge),ge}return Le instanceof Promise?Le.then(ge=>(bs(R,ge),ge)).catch(ge=>(bs(_,ge),Promise.reject(ge))):(bs(R,Le),Le)};return A[Cf]=!0,A[$l]=E,A},C={_p:r,$id:t,$onAction:Sf.bind(null,m),$patch:D,$reset:L,$subscribe(y,E={}){const A=Sf(p,y,E.detached,()=>b()),b=o.run(()=>ns(()=>r.state.value[t],R=>{(E.flush==="sync"?f:u)&&y({storeId:t,type:Vi.direct,events:v},R)},mr({},c,E)));return A},$dispose:x},q=oo(C);r._s.set(t,q);const T=(r._a&&r._a.runWithContext||Lw)(()=>r._e.run(()=>(o=xp()).run(()=>e({action:S}))));for(const y in T){const E=T[y];if(Ke(E)&&!Bw(E)||Ar(E))i||(O&&Fw(E)&&(Ke(E)?E.value=O[y]:_c(E,O[y])),r.state.value[t][y]=E);else if(typeof E=="function"){const A=S(E,y);T[y]=A,l.actions[y]=E}}return mr(q,T),mr(Ce(q),T),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:y=>{D(E=>{mr(E,y)})}}),r._p.forEach(y=>{mr(q,o.run(()=>y({store:q,app:r._a,pinia:r,options:l})))}),O&&i&&n.hydrate&&n.hydrate(q.$state,O),u=!0,f=!0,q}/*! #__NO_SIDE_EFFECTS__ */function $w(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=IE();return o=o||(c?un(Lm,null):null),o&&Ga(o),o=Mm,o._s.has(t)||(s?Fm(t,e,r,o):jw(t,r,o)),o._s.get(t)}return i.$id=t,i}const Hw={class:"app_holder"},qw={__name:"App",setup(t){return(e,n)=>{const r=fE("router-view");return J(),ie("div",Hw,[Nt(r)])}}};/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Rs=typeof document<"u";function Bm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Bm(t.default)}const ke=Object.assign;function Hl(t,e){const n={};for(const r in e){const s=e[r];n[r]=fn(s)?s.map(t):t(s)}return n}const xi=()=>{},fn=Array.isArray;function Pf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const jm=/#/g,Ww=/&/g,Gw=/\//g,Kw=/=/g,Qw=/\?/g,$m=/\+/g,Yw=/%5B/g,Jw=/%5D/g,Hm=/%5E/g,Xw=/%60/g,qm=/%7B/g,Zw=/%7C/g,zm=/%7D/g,eT=/%20/g;function fu(t){return t==null?"":encodeURI(""+t).replace(Zw,"|").replace(Yw,"[").replace(Jw,"]")}function tT(t){return fu(t).replace(qm,"{").replace(zm,"}").replace(Hm,"^")}function yc(t){return fu(t).replace($m,"%2B").replace(eT,"+").replace(jm,"%23").replace(Ww,"%26").replace(Xw,"`").replace(qm,"{").replace(zm,"}").replace(Hm,"^")}function nT(t){return yc(t).replace(Kw,"%3D")}function rT(t){return fu(t).replace(jm,"%23").replace(Qw,"%3F")}function sT(t){return rT(t).replace(Gw,"%2F")}function Ki(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const iT=/\/$/,oT=t=>t.replace(iT,"");function ql(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=uT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Ki(o)}}function aT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&js(e.matched[r],n.matched[s])&&Wm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cT(t[n],e[n]))return!1;return!0}function cT(t,e){return fn(t)?Df(t,e):fn(e)?Df(e,t):t===e}function Df(t,e){return fn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function uT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const dr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let vc=(function(t){return t.pop="pop",t.push="push",t})({}),zl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function hT(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oT(t)}const fT=/^[^#]+#/;function dT(t,e){return t.replace(fT,"#")+e}function pT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ka=()=>({left:window.scrollX,top:window.scrollY});function mT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=pT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nf(t,e){return(history.state?history.state.position-e:-1)+t}const Ec=new Map;function gT(t,e){Ec.set(t,e)}function _T(t){const e=Ec.get(t);return Ec.delete(t),e}function yT(t){return typeof t=="string"||t&&typeof t=="object"}function Gm(t){return typeof t=="string"||typeof t=="symbol"}let We=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Km=Symbol("");We.MATCHER_NOT_FOUND+"",We.NAVIGATION_GUARD_REDIRECT+"",We.NAVIGATION_ABORTED+"",We.NAVIGATION_CANCELLED+"",We.NAVIGATION_DUPLICATED+"";function $s(t,e){return ke(new Error,{type:t,[Km]:!0},e)}function Un(t,e){return t instanceof Error&&Km in t&&(e==null||!!(t.type&e))}const vT=["params","query","hash"];function ET(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of vT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function wT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace($m," "),i=s.indexOf("="),o=Ki(i<0?s:s.slice(0,i)),l=i<0?null:Ki(s.slice(i+1));if(o in e){let c=e[o];fn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Of(t){let e="";for(let n in t){const r=t[n];if(n=nT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(r)?r.map(s=>s&&yc(s)):[r&&yc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function TT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=fn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const IT=Symbol(""),Vf=Symbol(""),Qa=Symbol(""),Qm=Symbol(""),wc=Symbol("");function vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c($s(We.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):yT(m)?c($s(We.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Wl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Bm(c)){const u=(c.__vccOpts||c)[e];u&&i.push(yr(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=zw(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&yr(m,n,r,o,l,s)()}))}}return i}function bT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>js(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>js(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let AT=()=>location.protocol+"//"+location.host;function Ym(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),kf(l,"")}return kf(n,t)+r+s}function RT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const v=Ym(t,location),O=n.value,V=e.value;let D=0;if(m){if(n.value=v,e.value=m,o&&o===O){o=null;return}D=V?m.position-V.position:0}else r(v);s.forEach(L=>{L(n.value,O,{delta:D,type:vc.pop,direction:D?D>0?zl.forward:zl.back:zl.unknown})})};function c(){o=n.value}function u(m){s.push(m);const v=()=>{const O=s.indexOf(m);O>-1&&s.splice(O,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(ke({},m.state,{scroll:Ka()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function xf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ka():null}}function ST(t){const{history:e,location:n}=window,r={value:Ym(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:AT()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(c,u){i(c,ke({},e.state,xf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const f=ke({},s.value,e.state,{forward:c,scroll:Ka()});i(f.current,f,!0),i(c,ke({},xf(r.value,c,null),{position:f.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function CT(t){t=hT(t);const e=ST(t),n=RT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:dT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Xr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ze=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ze||{});const PT={type:Xr.Static,value:""},kT=/[a-zA-Z0-9_]/;function DT(t){if(!t)return[[]];if(t==="/")return[[PT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=Ze.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===Ze.Static?i.push({type:Xr.Static,value:u}):n===Ze.Param||n===Ze.ParamRegExp||n===Ze.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Xr.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Ze.ParamRegExp){r=n,n=Ze.EscapeNext;continue}switch(n){case Ze.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Ze.Param):m();break;case Ze.EscapeNext:m(),n=r;break;case Ze.Param:c==="("?n=Ze.ParamRegExp:kT.test(c)?m():(p(),n=Ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Ze.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=Ze.ParamRegExpEnd:f+=c;break;case Ze.ParamRegExpEnd:p(),n=Ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===Ze.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Mf="[^/]+?",NT={sensitive:!1,strict:!1,start:!0,end:!0};var Ct=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Ct||{});const OT=/[.+*?^${}()[\]/\\]/g;function VT(t,e){const n=ke({},NT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Ct.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=Ct.Segment+(n.sensitive?Ct.BonusCaseSensitive:0);if(m.type===Xr.Static)p||(s+="/"),s+=m.value.replace(OT,"\\$&"),v+=Ct.Static;else if(m.type===Xr.Param){const{value:O,repeatable:V,optional:D,regexp:L}=m;i.push({name:O,repeatable:V,optional:D});const x=L||Mf;if(x!==Mf){v+=Ct.BonusCustomRegExp;try{`${x}`}catch(C){throw new Error(`Invalid custom RegExp for param "${O}" (${x}): `+C.message)}}let S=V?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(S=D&&u.length<2?`(?:/${S})`:"/"+S),D&&(S+="?"),s+=S,v+=Ct.Dynamic,D&&(v+=Ct.BonusOptional),V&&(v+=Ct.BonusRepeatable),x===".*"&&(v+=Ct.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Ct.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",O=i[m-1];p[O.name]=v&&O.repeatable?v.split("/"):v}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of m)if(v.type===Xr.Static)f+=v.value;else if(v.type===Xr.Param){const{value:O,repeatable:V,optional:D}=v,L=O in u?u[O]:"";if(fn(L)&&!V)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const x=fn(L)?L.join("/"):L;if(!x)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function xT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Ct.Static+Ct.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Ct.Static+Ct.Segment?1:-1:0}function Jm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Lf(r))return 1;if(Lf(s))return-1}return s.length-r.length}function Lf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MT={strict:!1,end:!0,sensitive:!1};function LT(t,e,n){const r=VT(DT(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function UT(t,e){const n=[],r=new Map;e=Pf(MT,e);function s(p){return r.get(p)}function i(p,m,v){const O=!v,V=Ff(p);V.aliasOf=v&&v.record;const D=Pf(e,p),L=[V];if("alias"in p){const C=typeof p.alias=="string"?[p.alias]:p.alias;for(const q of C)L.push(Ff(ke({},V,{components:v?v.record.components:V.components,path:q,aliasOf:v?v.record:V})))}let x,S;for(const C of L){const{path:q}=C;if(m&&q[0]!=="/"){const ee=m.record.path,T=ee[ee.length-1]==="/"?"":"/";C.path=m.record.path+(q&&T+q)}if(x=LT(C,m,D),v?v.alias.push(x):(S=S||x,S!==x&&S.alias.push(x),O&&p.name&&!Bf(x)&&o(p.name)),Xm(x)&&c(x),V.children){const ee=V.children;for(let T=0;T<ee.length;T++)i(ee[T],x,v&&v.children[T])}v=v||x}return S?()=>{o(S)}:xi}function o(p){if(Gm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=jT(p,n);n.splice(m,0,p),p.record.name&&!Bf(p)&&r.set(p.record.name,p)}function u(p,m){let v,O={},V,D;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw $s(We.MATCHER_NOT_FOUND,{location:p});D=v.record.name,O=ke(Uf(m.params,v.keys.filter(S=>!S.optional).concat(v.parent?v.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),p.params&&Uf(p.params,v.keys.map(S=>S.name))),V=v.stringify(O)}else if(p.path!=null)V=p.path,v=n.find(S=>S.re.test(V)),v&&(O=v.parse(V),D=v.record.name);else{if(v=m.name?r.get(m.name):n.find(S=>S.re.test(m.path)),!v)throw $s(We.MATCHER_NOT_FOUND,{location:p,currentLocation:m});D=v.record.name,O=ke({},m.params,p.params),V=v.stringify(O)}const L=[];let x=v;for(;x;)L.unshift(x.record),x=x.parent;return{name:D,path:V,params:O,matched:L,meta:BT(L)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Uf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ff(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:FT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function FT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Bf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BT(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function jT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Jm(t,e[i])<0?r=i:n=i+1}const s=$T(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function $T(t){let e=t;for(;e=e.parent;)if(Xm(e)&&Jm(t,e)===0)return e}function Xm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jf(t){const e=un(Qa),n=un(Qm),r=Be(()=>{const c=cn(t.to);return e.resolve(c)}),s=Be(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(js.bind(null,f));if(m>-1)return m;const v=$f(c[u-2]);return u>1&&$f(f)===v&&p[p.length-1].path!==v?p.findIndex(js.bind(null,c[u-2])):m}),i=Be(()=>s.value>-1&&GT(n.params,r.value.params)),o=Be(()=>s.value>-1&&s.value===n.matched.length-1&&Wm(n.params,r.value.params));function l(c={}){if(WT(c)){const u=e[cn(t.replace)?"replace":"push"](cn(t.to)).catch(xi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function HT(t){return t.length===1?t[0]:t}const qT=im({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:jf,setup(t,{slots:e}){const n=oo(jf(t)),{options:r}=un(Qa),s=Be(()=>({[Hf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&HT(e.default(n));return t.custom?i:Nm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zT=qT;function WT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!fn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function $f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hf=(t,e,n)=>t??e??n,KT=im({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=un(wc),s=Be(()=>t.route||r.value),i=un(Vf,0),o=Be(()=>{let u=cn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Be(()=>s.value.matched[o.value]);qo(Vf,Be(()=>o.value+1)),qo(IT,l),qo(wc,s);const c=Z();return ns(()=>[c.value,l.value,t.name],([u,f,p],[m,v,O])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!js(f,v)||!m)&&(f.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return qf(n.default,{Component:m,route:u});const v=p.props[f],O=v?v===!0?u.params:typeof v=="function"?v(u):v:null,D=Nm(m,ke({},O,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return qf(n.default,{Component:D,route:u})||D}}});function qf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const QT=KT;function YT(t){const e=UT(t.routes,t),n=t.parseQuery||wT,r=t.stringifyQuery||Of,s=t.history,i=vi(),o=vi(),l=vi(),c=Lv(dr);let u=dr;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Hl.bind(null,F=>""+F),p=Hl.bind(null,sT),m=Hl.bind(null,Ki);function v(F,te){let Y,oe;return Gm(F)?(Y=e.getRecordMatcher(F),oe=te):oe=F,e.addRoute(oe,Y)}function O(F){const te=e.getRecordMatcher(F);te&&e.removeRoute(te)}function V(){return e.getRoutes().map(F=>F.record)}function D(F){return!!e.getRecordMatcher(F)}function L(F,te){if(te=ke({},te||c.value),typeof F=="string"){const k=ql(n,F,te.path),B=e.resolve({path:k.path},te),$=s.createHref(k.fullPath);return ke(k,B,{params:m(B.params),hash:Ki(k.hash),redirectedFrom:void 0,href:$})}let Y;if(F.path!=null)Y=ke({},F,{path:ql(n,F.path,te.path).path});else{const k=ke({},F.params);for(const B in k)k[B]==null&&delete k[B];Y=ke({},F,{params:p(k)}),te.params=p(te.params)}const oe=e.resolve(Y,te),Ee=F.hash||"";oe.params=f(m(oe.params));const w=aT(r,ke({},F,{hash:tT(Ee),path:oe.path})),I=s.createHref(w);return ke({fullPath:w,hash:Ee,query:r===Of?TT(F.query):F.query||{}},oe,{redirectedFrom:void 0,href:I})}function x(F){return typeof F=="string"?ql(n,F,c.value.path):ke({},F)}function S(F,te){if(u!==F)return $s(We.NAVIGATION_CANCELLED,{from:te,to:F})}function C(F){return T(F)}function q(F){return C(ke(x(F),{replace:!0}))}function ee(F,te){const Y=F.matched[F.matched.length-1];if(Y&&Y.redirect){const{redirect:oe}=Y;let Ee=typeof oe=="function"?oe(F,te):oe;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=x(Ee):{path:Ee},Ee.params={}),ke({query:F.query,hash:F.hash,params:Ee.path!=null?{}:F.params},Ee)}}function T(F,te){const Y=u=L(F),oe=c.value,Ee=F.state,w=F.force,I=F.replace===!0,k=ee(Y,oe);if(k)return T(ke(x(k),{state:typeof k=="object"?ke({},Ee,k.state):Ee,force:w,replace:I}),te||Y);const B=Y;B.redirectedFrom=te;let $;return!w&&lT(r,oe,Y)&&($=$s(We.NAVIGATION_DUPLICATED,{to:B,from:oe}),Ft(oe,oe,!0,!1)),($?Promise.resolve($):A(B,oe)).catch(U=>Un(U)?Un(U,We.NAVIGATION_GUARD_REDIRECT)?U:dn(U):be(U,B,oe)).then(U=>{if(U){if(Un(U,We.NAVIGATION_GUARD_REDIRECT))return T(ke({replace:I},x(U.to),{state:typeof U.to=="object"?ke({},Ee,U.to.state):Ee,force:w}),te||B)}else U=R(B,oe,!0,I,Ee);return b(B,oe,U),U})}function y(F,te){const Y=S(F,te);return Y?Promise.reject(Y):Promise.resolve()}function E(F){const te=tn.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(F):F()}function A(F,te){let Y;const[oe,Ee,w]=bT(F,te);Y=Wl(oe.reverse(),"beforeRouteLeave",F,te);for(const k of oe)k.leaveGuards.forEach(B=>{Y.push(yr(B,F,te))});const I=y.bind(null,F,te);return Y.push(I),dt(Y).then(()=>{Y=[];for(const k of i.list())Y.push(yr(k,F,te));return Y.push(I),dt(Y)}).then(()=>{Y=Wl(Ee,"beforeRouteUpdate",F,te);for(const k of Ee)k.updateGuards.forEach(B=>{Y.push(yr(B,F,te))});return Y.push(I),dt(Y)}).then(()=>{Y=[];for(const k of w)if(k.beforeEnter)if(fn(k.beforeEnter))for(const B of k.beforeEnter)Y.push(yr(B,F,te));else Y.push(yr(k.beforeEnter,F,te));return Y.push(I),dt(Y)}).then(()=>(F.matched.forEach(k=>k.enterCallbacks={}),Y=Wl(w,"beforeRouteEnter",F,te,E),Y.push(I),dt(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(yr(k,F,te));return Y.push(I),dt(Y)}).catch(k=>Un(k,We.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function b(F,te,Y){l.list().forEach(oe=>E(()=>oe(F,te,Y)))}function R(F,te,Y,oe,Ee){const w=S(F,te);if(w)return w;const I=te===dr,k=Rs?history.state:{};Y&&(oe||I?s.replace(F.fullPath,ke({scroll:I&&k&&k.scroll},Ee)):s.push(F.fullPath,Ee)),c.value=F,Ft(F,te,Y,I),dn()}let _;function re(){_||(_=s.listen((F,te,Y)=>{if(!nn.listening)return;const oe=L(F),Ee=ee(oe,nn.currentRoute.value);if(Ee){T(ke(Ee,{replace:!0,force:!0}),oe).catch(xi);return}u=oe;const w=c.value;Rs&&gT(Nf(w.fullPath,Y.delta),Ka()),A(oe,w).catch(I=>Un(I,We.NAVIGATION_ABORTED|We.NAVIGATION_CANCELLED)?I:Un(I,We.NAVIGATION_GUARD_REDIRECT)?(T(ke(x(I.to),{force:!0}),oe).then(k=>{Un(k,We.NAVIGATION_ABORTED|We.NAVIGATION_DUPLICATED)&&!Y.delta&&Y.type===vc.pop&&s.go(-1,!1)}).catch(xi),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),be(I,oe,w))).then(I=>{I=I||R(oe,w,!1),I&&(Y.delta&&!Un(I,We.NAVIGATION_CANCELLED)?s.go(-Y.delta,!1):Y.type===vc.pop&&Un(I,We.NAVIGATION_ABORTED|We.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(oe,w,I)}).catch(xi)}))}let rt=vi(),Le=vi(),ge;function be(F,te,Y){dn(F);const oe=Le.list();return oe.length?oe.forEach(Ee=>Ee(F,te,Y)):console.error(F),Promise.reject(F)}function Ot(){return ge&&c.value!==dr?Promise.resolve():new Promise((F,te)=>{rt.add([F,te])})}function dn(F){return ge||(ge=!F,re(),rt.list().forEach(([te,Y])=>F?Y(F):te()),rt.reset()),F}function Ft(F,te,Y,oe){const{scrollBehavior:Ee}=t;if(!Rs||!Ee)return Promise.resolve();const w=!Y&&_T(Nf(F.fullPath,0))||(oe||!Y)&&history.state&&history.state.scroll||null;return lo().then(()=>Ee(F,te,w)).then(I=>I&&mT(I)).catch(I=>be(I,F,te))}const at=F=>s.go(F);let Mn;const tn=new Set,nn={currentRoute:c,listening:!0,addRoute:v,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:V,resolve:L,options:t,push:C,replace:q,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Le.add,isReady:Ot,install(F){F.component("RouterLink",zT),F.component("RouterView",QT),F.config.globalProperties.$router=nn,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(c)}),Rs&&!Mn&&c.value===dr&&(Mn=!0,C(s.location).catch(oe=>{}));const te={};for(const oe in dr)Object.defineProperty(te,oe,{get:()=>c.value[oe],enumerable:!0});F.provide(Qa,nn),F.provide(Qm,Jp(te)),F.provide(wc,c);const Y=F.unmount;tn.add(F),F.unmount=function(){tn.delete(F),tn.size<1&&(u=dr,_&&_(),_=null,c.value=dr,Mn=!1,ge=!1),Y()}}};function dt(F){return F.reduce((te,Y)=>te.then(()=>E(Y)),Promise.resolve())}return nn}function Ya(){return un(Qa)}const JT=()=>{};var zf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},XT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new ZT;const m=i<<2|l>>4;if(r.push(m),u!==64){const v=l<<4&240|u>>2;if(r.push(v),p!==64){const O=u<<6&192|p;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eI=function(t){const e=Zm(t);return eg.encodeByteArray(e,!0)},ma=function(t){return eI(t).replace(/\./g,"")},tg=function(t){try{return eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nI=()=>tI().__FIREBASE_DEFAULTS__,rI=()=>{if(typeof process>"u"||typeof zf>"u")return;const t=zf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tg(t[1]);return e&&JSON.parse(e)},Ja=()=>{try{return JT()||nI()||rI()||sI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ng=t=>Ja()?.emulatorHosts?.[t],rg=t=>{const e=ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sg=()=>Ja()?.config,ig=t=>Ja()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function og(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ma(JSON.stringify(n)),ma(JSON.stringify(o)),""].join(".")}const Mi={};function oI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Mi))Mi[e]?t.emulator.push(e):t.prod.push(e);return t}function aI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wf=!1;function pu(t,e){if(typeof window>"u"||typeof document>"u"||!ds(window.location.host)||Mi[t]===e||Mi[t]||Wf)return;Mi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=oI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Wf=!0,o()},m}function f(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=aI(r),v=n("text"),O=document.getElementById(v)||document.createElement("span"),V=n("learnmore"),D=document.getElementById(V)||document.createElement("a"),L=n("preprendIcon"),x=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const S=m.element;l(S),f(D,V);const C=u();c(x,L),S.append(x,O,D,C),document.body.appendChild(S)}i?(O.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function cI(){const t=Ja()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dI(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pI(){return!cI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mI(){try{return typeof indexedDB=="object"}catch{return!1}}function gI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_I,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,r)}}function yI(t,e){return t.replace(vI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vI=/\{\$([^}]+)}/g;function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gf(i)&&Gf(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wI(t,e){const n=new TI(t,e);return n.subscribe.bind(n)}class TI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");II(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gl),s.error===void 0&&(s.error=Gl),s.complete===void 0&&(s.complete=Gl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function II(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gl(){}/**
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
 */function Ut(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jr="[DEFAULT]";/**
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
 */class bI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RI(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AI(t){return t===Jr?void 0:t}function RI(t){return t.instantiationMode==="EAGER"}/**
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
 */class SI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const CI={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},PI=we.INFO,kI={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},DI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mu{constructor(e){this.name=e,this._logLevel=PI,this._logHandler=DI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const NI=(t,e)=>e.some(n=>t instanceof n);let Kf,Qf;function OI(){return Kf||(Kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VI(){return Qf||(Qf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,Tc=new WeakMap,lg=new WeakMap,Kl=new WeakMap,gu=new WeakMap;function xI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,t)}).catch(()=>{}),gu.set(e,t),e}function MI(t){if(Tc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Tc.set(t,e)}let Ic={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LI(t){Ic=t(Ic)}function UI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ql(this),e,...n);return lg.set(r,e.sort?e.sort():[e]),Sr(r)}:VI().includes(t)?function(...e){return t.apply(Ql(this),e),Sr(ag.get(this))}:function(...e){return Sr(t.apply(Ql(this),e))}}function FI(t){return typeof t=="function"?UI(t):(t instanceof IDBTransaction&&MI(t),NI(t,OI())?new Proxy(t,Ic):t)}function Sr(t){if(t instanceof IDBRequest)return xI(t);if(Kl.has(t))return Kl.get(t);const e=FI(t);return e!==t&&(Kl.set(t,e),gu.set(e,t)),e}const Ql=t=>gu.get(t);function BI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Sr(o.result),c.oldVersion,c.newVersion,Sr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const jI=["get","getKey","getAll","getAllKeys","count"],$I=["put","add","delete","clear"],Yl=new Map;function Yf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yl.get(e))return Yl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Yl.set(e,i),i}LI(t=>({...t,get:(e,n,r)=>Yf(e,n)||t.get(e,n,r),has:(e,n)=>!!Yf(e,n)||t.has(e,n)}));/**
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
 */class HI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qI(t){return t.getComponent()?.type==="VERSION"}const bc="@firebase/app",Jf="0.14.4";/**
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
 */const Zn=new mu("@firebase/app"),zI="@firebase/app-compat",WI="@firebase/analytics-compat",GI="@firebase/analytics",KI="@firebase/app-check-compat",QI="@firebase/app-check",YI="@firebase/auth",JI="@firebase/auth-compat",XI="@firebase/database",ZI="@firebase/data-connect",eb="@firebase/database-compat",tb="@firebase/functions",nb="@firebase/functions-compat",rb="@firebase/installations",sb="@firebase/installations-compat",ib="@firebase/messaging",ob="@firebase/messaging-compat",ab="@firebase/performance",lb="@firebase/performance-compat",cb="@firebase/remote-config",ub="@firebase/remote-config-compat",hb="@firebase/storage",fb="@firebase/storage-compat",db="@firebase/firestore",pb="@firebase/ai",mb="@firebase/firestore-compat",gb="firebase",_b="12.4.0";/**
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
 */const Ac="[DEFAULT]",yb={[bc]:"fire-core",[zI]:"fire-core-compat",[GI]:"fire-analytics",[WI]:"fire-analytics-compat",[QI]:"fire-app-check",[KI]:"fire-app-check-compat",[YI]:"fire-auth",[JI]:"fire-auth-compat",[XI]:"fire-rtdb",[ZI]:"fire-data-connect",[eb]:"fire-rtdb-compat",[tb]:"fire-fn",[nb]:"fire-fn-compat",[rb]:"fire-iid",[sb]:"fire-iid-compat",[ib]:"fire-fcm",[ob]:"fire-fcm-compat",[ab]:"fire-perf",[lb]:"fire-perf-compat",[cb]:"fire-rc",[ub]:"fire-rc-compat",[hb]:"fire-gcs",[fb]:"fire-gcs-compat",[db]:"fire-fst",[mb]:"fire-fst-compat",[pb]:"fire-vertex","fire-js":"fire-js",[gb]:"fire-js-all"};/**
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
 */const ga=new Map,vb=new Map,Rc=new Map;function Xf(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(Rc.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of ga.values())Xf(n,t);for(const n of vb.values())Xf(n,t);return!0}function Xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Eb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new uo("app","Firebase",Eb);/**
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
 */class wb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=_b;function cg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ac,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Cr.create("bad-app-name",{appName:String(s)});if(n||(n=sg()),!n)throw Cr.create("no-options");const i=ga.get(s);if(i){if(is(n,i.options)&&is(r,i.config))return i;throw Cr.create("duplicate-app",{appName:s})}const o=new SI(s);for(const c of Rc.values())o.addComponent(c);const l=new wb(n,r,o);return ga.set(s,l),l}function _u(t=Ac){const e=ga.get(t);if(!e&&t===Ac&&sg())return cg();if(!e)throw Cr.create("no-app",{appName:t});return e}function wn(t,e,n){let r=yb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(o.join(" "));return}os(new xr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Tb="firebase-heartbeat-database",Ib=1,Qi="firebase-heartbeat-store";let Jl=null;function ug(){return Jl||(Jl=BI(Tb,Ib,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),Jl}async function bb(t){try{const n=(await ug()).transaction(Qi),r=await n.objectStore(Qi).get(hg(t));return await n.done,r}catch(e){if(e instanceof Vn)Zn.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e?.message});Zn.warn(n.message)}}}async function Zf(t,e){try{const r=(await ug()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(e,hg(t)),await r.done}catch(n){if(n instanceof Vn)Zn.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n?.message});Zn.warn(r.message)}}}function hg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ab=1024,Rb=30;class Sb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ed();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Rb){const s=kb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Zn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ed(),{heartbeatsToSend:n,unsentEntries:r}=Cb(this._heartbeatsCache.heartbeats),s=ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Zn.warn(e),""}}}function ed(){return new Date().toISOString().substring(0,10)}function Cb(t,e=Ab){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),td(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),td(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mI()?gI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function td(t){return ma(JSON.stringify({version:2,heartbeats:t})).length}function kb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Db(t){os(new xr("platform-logger",e=>new HI(e),"PRIVATE")),os(new xr("heartbeat",e=>new Sb(e),"PRIVATE")),wn(bc,Jf,t),wn(bc,Jf,"esm2020"),wn("fire-js","")}Db("");var nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,fg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function E(){}E.prototype=y.prototype,T.F=y.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(A,b,R){for(var _=Array(arguments.length-2),re=2;re<arguments.length;re++)_[re-2]=arguments[re];return y.prototype[b].apply(A,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,E){E||(E=0);const A=Array(16);if(typeof y=="string")for(var b=0;b<16;++b)A[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;b<16;++b)A[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=T.g[0],E=T.g[1],b=T.g[2];let R=T.g[3],_;_=y+(R^E&(b^R))+A[0]+3614090360&4294967295,y=E+(_<<7&4294967295|_>>>25),_=R+(b^y&(E^b))+A[1]+3905402710&4294967295,R=y+(_<<12&4294967295|_>>>20),_=b+(E^R&(y^E))+A[2]+606105819&4294967295,b=R+(_<<17&4294967295|_>>>15),_=E+(y^b&(R^y))+A[3]+3250441966&4294967295,E=b+(_<<22&4294967295|_>>>10),_=y+(R^E&(b^R))+A[4]+4118548399&4294967295,y=E+(_<<7&4294967295|_>>>25),_=R+(b^y&(E^b))+A[5]+1200080426&4294967295,R=y+(_<<12&4294967295|_>>>20),_=b+(E^R&(y^E))+A[6]+2821735955&4294967295,b=R+(_<<17&4294967295|_>>>15),_=E+(y^b&(R^y))+A[7]+4249261313&4294967295,E=b+(_<<22&4294967295|_>>>10),_=y+(R^E&(b^R))+A[8]+1770035416&4294967295,y=E+(_<<7&4294967295|_>>>25),_=R+(b^y&(E^b))+A[9]+2336552879&4294967295,R=y+(_<<12&4294967295|_>>>20),_=b+(E^R&(y^E))+A[10]+4294925233&4294967295,b=R+(_<<17&4294967295|_>>>15),_=E+(y^b&(R^y))+A[11]+2304563134&4294967295,E=b+(_<<22&4294967295|_>>>10),_=y+(R^E&(b^R))+A[12]+1804603682&4294967295,y=E+(_<<7&4294967295|_>>>25),_=R+(b^y&(E^b))+A[13]+4254626195&4294967295,R=y+(_<<12&4294967295|_>>>20),_=b+(E^R&(y^E))+A[14]+2792965006&4294967295,b=R+(_<<17&4294967295|_>>>15),_=E+(y^b&(R^y))+A[15]+1236535329&4294967295,E=b+(_<<22&4294967295|_>>>10),_=y+(b^R&(E^b))+A[1]+4129170786&4294967295,y=E+(_<<5&4294967295|_>>>27),_=R+(E^b&(y^E))+A[6]+3225465664&4294967295,R=y+(_<<9&4294967295|_>>>23),_=b+(y^E&(R^y))+A[11]+643717713&4294967295,b=R+(_<<14&4294967295|_>>>18),_=E+(R^y&(b^R))+A[0]+3921069994&4294967295,E=b+(_<<20&4294967295|_>>>12),_=y+(b^R&(E^b))+A[5]+3593408605&4294967295,y=E+(_<<5&4294967295|_>>>27),_=R+(E^b&(y^E))+A[10]+38016083&4294967295,R=y+(_<<9&4294967295|_>>>23),_=b+(y^E&(R^y))+A[15]+3634488961&4294967295,b=R+(_<<14&4294967295|_>>>18),_=E+(R^y&(b^R))+A[4]+3889429448&4294967295,E=b+(_<<20&4294967295|_>>>12),_=y+(b^R&(E^b))+A[9]+568446438&4294967295,y=E+(_<<5&4294967295|_>>>27),_=R+(E^b&(y^E))+A[14]+3275163606&4294967295,R=y+(_<<9&4294967295|_>>>23),_=b+(y^E&(R^y))+A[3]+4107603335&4294967295,b=R+(_<<14&4294967295|_>>>18),_=E+(R^y&(b^R))+A[8]+1163531501&4294967295,E=b+(_<<20&4294967295|_>>>12),_=y+(b^R&(E^b))+A[13]+2850285829&4294967295,y=E+(_<<5&4294967295|_>>>27),_=R+(E^b&(y^E))+A[2]+4243563512&4294967295,R=y+(_<<9&4294967295|_>>>23),_=b+(y^E&(R^y))+A[7]+1735328473&4294967295,b=R+(_<<14&4294967295|_>>>18),_=E+(R^y&(b^R))+A[12]+2368359562&4294967295,E=b+(_<<20&4294967295|_>>>12),_=y+(E^b^R)+A[5]+4294588738&4294967295,y=E+(_<<4&4294967295|_>>>28),_=R+(y^E^b)+A[8]+2272392833&4294967295,R=y+(_<<11&4294967295|_>>>21),_=b+(R^y^E)+A[11]+1839030562&4294967295,b=R+(_<<16&4294967295|_>>>16),_=E+(b^R^y)+A[14]+4259657740&4294967295,E=b+(_<<23&4294967295|_>>>9),_=y+(E^b^R)+A[1]+2763975236&4294967295,y=E+(_<<4&4294967295|_>>>28),_=R+(y^E^b)+A[4]+1272893353&4294967295,R=y+(_<<11&4294967295|_>>>21),_=b+(R^y^E)+A[7]+4139469664&4294967295,b=R+(_<<16&4294967295|_>>>16),_=E+(b^R^y)+A[10]+3200236656&4294967295,E=b+(_<<23&4294967295|_>>>9),_=y+(E^b^R)+A[13]+681279174&4294967295,y=E+(_<<4&4294967295|_>>>28),_=R+(y^E^b)+A[0]+3936430074&4294967295,R=y+(_<<11&4294967295|_>>>21),_=b+(R^y^E)+A[3]+3572445317&4294967295,b=R+(_<<16&4294967295|_>>>16),_=E+(b^R^y)+A[6]+76029189&4294967295,E=b+(_<<23&4294967295|_>>>9),_=y+(E^b^R)+A[9]+3654602809&4294967295,y=E+(_<<4&4294967295|_>>>28),_=R+(y^E^b)+A[12]+3873151461&4294967295,R=y+(_<<11&4294967295|_>>>21),_=b+(R^y^E)+A[15]+530742520&4294967295,b=R+(_<<16&4294967295|_>>>16),_=E+(b^R^y)+A[2]+3299628645&4294967295,E=b+(_<<23&4294967295|_>>>9),_=y+(b^(E|~R))+A[0]+4096336452&4294967295,y=E+(_<<6&4294967295|_>>>26),_=R+(E^(y|~b))+A[7]+1126891415&4294967295,R=y+(_<<10&4294967295|_>>>22),_=b+(y^(R|~E))+A[14]+2878612391&4294967295,b=R+(_<<15&4294967295|_>>>17),_=E+(R^(b|~y))+A[5]+4237533241&4294967295,E=b+(_<<21&4294967295|_>>>11),_=y+(b^(E|~R))+A[12]+1700485571&4294967295,y=E+(_<<6&4294967295|_>>>26),_=R+(E^(y|~b))+A[3]+2399980690&4294967295,R=y+(_<<10&4294967295|_>>>22),_=b+(y^(R|~E))+A[10]+4293915773&4294967295,b=R+(_<<15&4294967295|_>>>17),_=E+(R^(b|~y))+A[1]+2240044497&4294967295,E=b+(_<<21&4294967295|_>>>11),_=y+(b^(E|~R))+A[8]+1873313359&4294967295,y=E+(_<<6&4294967295|_>>>26),_=R+(E^(y|~b))+A[15]+4264355552&4294967295,R=y+(_<<10&4294967295|_>>>22),_=b+(y^(R|~E))+A[6]+2734768916&4294967295,b=R+(_<<15&4294967295|_>>>17),_=E+(R^(b|~y))+A[13]+1309151649&4294967295,E=b+(_<<21&4294967295|_>>>11),_=y+(b^(E|~R))+A[4]+4149444226&4294967295,y=E+(_<<6&4294967295|_>>>26),_=R+(E^(y|~b))+A[11]+3174756917&4294967295,R=y+(_<<10&4294967295|_>>>22),_=b+(y^(R|~E))+A[2]+718787259&4294967295,b=R+(_<<15&4294967295|_>>>17),_=E+(R^(b|~y))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(b+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const E=y-this.blockSize,A=this.C;let b=this.h,R=0;for(;R<y;){if(b==0)for(;R<=E;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<y;)if(A[b++]=T.charCodeAt(R++),b==this.blockSize){s(this,A),b=0;break}}else for(;R<y;)if(A[b++]=T[R++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,E=0;E<4;++E)for(let A=0;A<32;A+=8)T[y++]=this.g[E]>>>A&255;return T};function i(T,y){var E=l;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=y(T)}function o(T,y){this.h=y;const E=[];let A=!0;for(let b=T.length-1;b>=0;b--){const R=T[b]|0;A&&R==y||(E[b]=R,A=!1)}this.g=E}var l={};function c(T){return-128<=T&&T<128?i(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return D(u(-T));const y=[];let E=1;for(let A=0;T>=E;A++)y[A]=T/E|0,E*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return D(f(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(y,8));let A=p;for(let R=0;R<T.length;R+=8){var b=Math.min(8,T.length-R);const _=parseInt(T.substring(R,R+b),y);b<8?(b=u(Math.pow(y,b)),A=A.j(b).add(u(_))):(A=A.j(E),A=A.add(u(_)))}return A}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(V(this))return-D(this).m();let T=0,y=1;for(let E=0;E<this.g.length;E++){const A=this.i(E);T+=(A>=0?A:4294967296+A)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(O(this))return"0";if(V(this))return"-"+D(this).toString(T);const y=u(Math.pow(T,6));var E=this;let A="";for(;;){const b=C(E,y).g;E=L(E,b.j(y));let R=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=b,O(E))return R+A;for(;R.length<6;)R="0"+R;A=R+A}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function O(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function V(T){return T.h==-1}t.l=function(T){return T=L(this,T),V(T)?-1:O(T)?0:1};function D(T){const y=T.g.length,E=[];for(let A=0;A<y;A++)E[A]=~T.g[A];return new o(E,~T.h).add(m)}t.abs=function(){return V(this)?D(this):this},t.add=function(T){const y=Math.max(this.g.length,T.g.length),E=[];let A=0;for(let b=0;b<=y;b++){let R=A+(this.i(b)&65535)+(T.i(b)&65535),_=(R>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);A=_>>>16,R&=65535,_&=65535,E[b]=_<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function L(T,y){return T.add(D(y))}t.j=function(T){if(O(this)||O(T))return p;if(V(this))return V(T)?D(this).j(D(T)):D(D(this).j(T));if(V(T))return D(this.j(D(T)));if(this.l(v)<0&&T.l(v)<0)return u(this.m()*T.m());const y=this.g.length+T.g.length,E=[];for(var A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(let b=0;b<T.g.length;b++){const R=this.i(A)>>>16,_=this.i(A)&65535,re=T.i(b)>>>16,rt=T.i(b)&65535;E[2*A+2*b]+=_*rt,x(E,2*A+2*b),E[2*A+2*b+1]+=R*rt,x(E,2*A+2*b+1),E[2*A+2*b+1]+=_*re,x(E,2*A+2*b+1),E[2*A+2*b+2]+=R*re,x(E,2*A+2*b+2)}for(T=0;T<y;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=y;T<2*y;T++)E[T]=0;return new o(E,0)};function x(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function S(T,y){this.g=T,this.h=y}function C(T,y){if(O(y))throw Error("division by zero");if(O(T))return new S(p,p);if(V(T))return y=C(D(T),y),new S(D(y.g),D(y.h));if(V(y))return y=C(T,D(y)),new S(D(y.g),y.h);if(T.g.length>30){if(V(T)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=y;A.l(T)<=0;)E=q(E),A=q(A);var b=ee(E,1),R=ee(A,1);for(A=ee(A,2),E=ee(E,2);!O(A);){var _=R.add(A);_.l(T)<=0&&(b=b.add(E),R=_),A=ee(A,1),E=ee(E,1)}return y=L(T,b.j(y)),new S(b,y)}for(b=p;T.l(y)>=0;){for(E=Math.max(1,Math.floor(T.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),R=u(E),_=R.j(y);V(_)||_.l(T)>0;)E-=A,R=u(E),_=R.j(y);O(R)&&(R=m),b=b.add(R),T=L(T,_)}return new S(b,T)}t.B=function(T){return C(this,T).h},t.and=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)&T.i(A);return new o(E,this.h&T.h)},t.or=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)|T.i(A);return new o(E,this.h|T.h)},t.xor=function(T){const y=Math.max(this.g.length,T.g.length),E=[];for(let A=0;A<y;A++)E[A]=this.i(A)^T.i(A);return new o(E,this.h^T.h)};function q(T){const y=T.g.length+1,E=[];for(let A=0;A<y;A++)E[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(E,T.h)}function ee(T,y){const E=y>>5;y%=32;const A=T.g.length-E,b=[];for(let R=0;R<A;R++)b[R]=y>0?T.i(R+E)>>>y|T.i(R+E+1)<<32-y:T.i(R+E);return new o(b,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,fg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Pr=o}).apply(typeof nd<"u"?nd:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dg,Ii,pg,Ko,Sc,mg,gg,_g;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=c,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,N,M){for(var K=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)K[ye-2]=arguments[ye];return h.prototype[N].apply(g,K)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const M=N.length||0;a.length=d+M;for(let K=0;K<M;K++)a[d+K]=N[K]}else a.push(N)}}class V{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function L(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class x{constructor(){this.h=this.g=null}add(h,d){const g=S.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var S=new V(()=>new C,a=>a.reset());class C{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let q,ee=!1,T=new x,y=()=>{const a=Promise.resolve(void 0);q=()=>{a.then(E)}};function E(){for(var a;a=L();){try{a.h.call(a.g)}catch(d){D(d)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ee=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function re(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(re,b),re.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&re.Z.h.call(this)},re.prototype.h=function(){re.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rt="closure_listenable_"+(Math.random()*1e6|0),Le=0;function ge(a,h,d,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=N,this.key=++Le,this.da=this.fa=!1}function be(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ot(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function dn(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Ft(a){const h={};for(const d in a)h[d]=a[d];return h}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mn(a,h){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let M=0;M<at.length;M++)d=at[M],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function tn(a){this.src=a,this.g={},this.h=0}tn.prototype.add=function(a,h,d,g,N){const M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);const K=dt(a,h,g,N);return K>-1?(h=a[K],d||(h.fa=!1)):(h=new ge(h,this.src,M,!!g,N),h.fa=d,a.push(h)),h};function nn(a,h){const d=h.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,h,void 0),M;(M=N>=0)&&Array.prototype.splice.call(g,N,1),M&&(be(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function dt(a,h,d,g){for(let N=0;N<a.length;++N){const M=a[N];if(!M.da&&M.listener==h&&M.capture==!!d&&M.ha==g)return N}return-1}var F="closure_lm_"+(Math.random()*1e6|0),te={};function Y(a,h,d,g,N){if(Array.isArray(h)){for(let M=0;M<h.length;M++)Y(a,h[M],d,g,N);return null}return d=Q(d),a&&a[rt]?a.J(h,d,l(g)?!!g.capture:!1,N):oe(a,h,d,!1,g,N)}function oe(a,h,d,g,N,M){if(!h)throw Error("Invalid event type");const K=l(N)?!!N.capture:!!N;let ye=$(a);if(ye||(a[F]=ye=new tn(a)),d=ye.add(h,d,g,K,M),d.proxy)return d;if(g=Ee(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(N=K),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(k(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ee(){function a(d){return h.call(a.src,a.listener,d)}const h=B;return a}function w(a,h,d,g,N){if(Array.isArray(h))for(var M=0;M<h.length;M++)w(a,h[M],d,g,N);else g=l(g)?!!g.capture:!!g,d=Q(d),a&&a[rt]?(a=a.i,M=String(h).toString(),M in a.g&&(h=a.g[M],d=dt(h,d,g,N),d>-1&&(be(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[M],a.h--)))):a&&(a=$(a))&&(h=a.g[h.toString()],a=-1,h&&(a=dt(h,d,g,N)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[rt])nn(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(k(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=$(h))?(nn(d,a),d.h==0&&(d.src=null,h[F]=null)):be(a)}}}function k(a){return a in te?te[a]:te[a]="on"+a}function B(a,h){if(a.da)a=!0;else{h=new re(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&I(a),a=d.call(g,h)}return a}function $(a){return a=a[F],a instanceof tn?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function Q(a){return typeof a=="function"?a:(a[U]||(a[U]=function(h){return a.handleEvent(h)}),a[U])}function G(){A.call(this),this.i=new tn(this),this.M=this,this.G=null}p(G,A),G.prototype[rt]=!0,G.prototype.removeEventListener=function(a,h,d,g){w(this,a,h,d,g)};function z(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var N=h;h=new b(g,a),Mn(h,N)}N=!0;let M,K;if(d)for(K=d.length-1;K>=0;K--)M=h.g=d[K],N=W(M,g,!0,h)&&N;if(M=h.g=a,N=W(M,g,!0,h)&&N,N=W(M,g,!1,h)&&N,d)for(K=0;K<d.length;K++)M=h.g=d[K],N=W(M,g,!1,h)&&N}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)be(d[g]);delete a.g[h],a.h--}}this.G=null},G.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},G.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function W(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let M=0;M<h.length;++M){const K=h[M];if(K&&!K.da&&K.capture==d){const ye=K.listener,Xe=K.ha||K.src;K.fa&&nn(a.i,K),N=ye.call(Xe,g)!==!1&&N}}return N&&!g.defaultPrevented}function ce(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function X(a){a.g=ce(()=>{a.g=null,a.i&&(a.i=!1,X(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ae extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ue(a){A.call(this),this.h=a,this.g={}}p(ue,A);var ve=[];function Oe(a){Ot(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}ue.prototype.N=function(){ue.Z.N.call(this),Oe(this)},ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Re=o.JSON.stringify,pt=o.JSON.parse,mt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bt(){}function jt(){}var rn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vs(){b.call(this,"d")}p(vs,b);function lt(){b.call(this,"c")}p(lt,b);var st={},ni=null;function Hr(){return ni=ni||new G}st.Ia="serverreachability";function oh(a){b.call(this,st.Ia,a)}p(oh,b);function ri(a){const h=Hr();z(h,new oh(h))}st.STAT_EVENT="statevent";function ah(a,h){b.call(this,st.STAT_EVENT,a),this.stat=h}p(ah,b);function Rt(a){const h=Hr();z(h,new ah(h,a))}st.Ja="timingevent";function lh(a,h){b.call(this,st.Ja,a),this.size=h}p(lh,b);function si(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ii(){this.g=!0}ii.prototype.ua=function(){this.g=!1};function Uy(a,h,d,g,N,M){a.info(function(){if(a.g)if(M){var K="",ye=M.split("&");for(let Ve=0;Ve<ye.length;Ve++){var Xe=ye[Ve].split("=");if(Xe.length>1){const it=Xe[0];Xe=Xe[1];const mn=it.split("_");K=mn.length>=2&&mn[1]=="type"?K+(it+"="+Xe+"&"):K+(it+"=redacted&")}}}else K=null;else K=M;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+d+`
`+K})}function Fy(a,h,d,g,N,M,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+d+`
`+M+" "+K})}function Es(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+jy(a,d)+(g?" "+g:"")})}function By(a,h){a.info(function(){return"TIMEOUT: "+h})}ii.prototype.info=function(){};function jy(a,h){if(!a.g)return h;if(!h)return null;try{const M=JSON.parse(h);if(M){for(a=0;a<M.length;a++)if(Array.isArray(M[a])){var d=M[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let K=1;K<g.length;K++)g[K]=""}}}}return Re(M)}catch{return h}}var To={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ch={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},uh;function vl(){}p(vl,Bt),vl.prototype.g=function(){return new XMLHttpRequest},uh=new vl;function oi(a){return encodeURIComponent(String(a))}function $y(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function ar(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ue(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hh}function hh(){this.i=null,this.g="",this.h=!1}var fh={},El={};function wl(a,h,d){a.M=1,a.A=bo(pn(h)),a.u=d,a.R=!0,dh(a,null)}function dh(a,h){a.F=Date.now(),Io(a),a.B=pn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Rh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new hh,a.g=qh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ae(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(ve[0]=N.toString()),N=ve);for(let M=0;M<N.length;M++){const K=Y(d,N[M],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?Ft(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ri(),Uy(a.i,a.v,a.B,a.l,a.S,a.u)}ar.prototype.ba=function(a){a=a.target;const h=this.O;h&&ur(a)==3?h.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const ye=ur(this.g),Xe=this.g.ya(),Ve=this.g.ca();if(!(ye<3)&&(ye!=3||this.g&&(this.h.h||this.g.la()||Oh(this.g)))){this.K||ye!=4||Xe==7||(Xe==8||Ve<=0?ri(3):ri(2)),Tl(this);var h=this.g.ca();this.X=h;var d=Hy(this);if(this.o=h==200,Fy(this.i,this.v,this.B,this.l,this.S,ye,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var M=g;break t}}M=null}if(a=M)Es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Il(this,a);else{this.o=!1,this.m=3,Rt(12),qr(this),ai(this);break e}}if(this.R){a=!0;let it;for(;!this.K&&this.C<d.length;)if(it=qy(this,d),it==El){ye==4&&(this.m=4,Rt(14),a=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(it==fh){this.m=4,Rt(15),Es(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Es(this.i,this.l,it,null),Il(this,it);if(ph(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||d.length!=0||this.h.h||(this.m=1,Rt(16),a=!1),this.o=this.o&&a,!a)Es(this.i,this.l,d,"[Invalid Chunked Response]"),qr(this),ai(this);else if(d.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Dl(K),K.P=!0,Rt(11))}}else Es(this.i,this.l,d,null),Il(this,d);ye==4&&qr(this),this.o&&!this.K&&(ye==4?Bh(this.j,this):(this.o=!1,Io(this)))}else sv(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),qr(this),ai(this)}}}catch{}finally{}};function Hy(a){if(!ph(a))return a.g.la();const h=Oh(a.g);if(h==="")return"";let d="";const g=h.length,N=ur(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return qr(a),ai(a),"";a.h.i=new o.TextDecoder}for(let M=0;M<g;M++)a.h.h=!0,d+=a.h.i.decode(h[M],{stream:!(N&&M==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function ph(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function qy(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?El:(d=Number(h.substring(d,g)),isNaN(d)?fh:(g+=1,g+d>h.length?El:(h=h.slice(g,g+d),a.C=g+d,h)))}ar.prototype.cancel=function(){this.K=!0,qr(this)};function Io(a){a.T=Date.now()+a.H,mh(a,a.H)}function mh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=si(u(a.aa,a),h)}function Tl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ar.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(By(this.i,this.B),this.M!=2&&(ri(),Rt(17)),qr(this),this.m=2,ai(this)):mh(this,this.T-a)};function ai(a){a.j.I==0||a.K||Bh(a.j,a)}function qr(a){Tl(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Oe(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Il(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||bl(d.h,a))){if(!a.L&&bl(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Po(d),So(d);else break e;kl(d),Rt(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=si(u(d.Va,d),6e3));yh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Wr(d,11)}else if((a.L||d.g==a)&&Po(d),!_(h))for(N=d.Ba.g.parse(h),h=0;h<N.length;h++){let Ve=N[h];const it=Ve[0];if(!(it<=d.K))if(d.K=it,Ve=Ve[1],d.I==2)if(Ve[0]=="c"){d.M=Ve[1],d.ba=Ve[2];const mn=Ve[3];mn!=null&&(d.ka=mn,d.j.info("VER="+d.ka));const Gr=Ve[4];Gr!=null&&(d.za=Gr,d.j.info("SVER="+d.za));const hr=Ve[5];hr!=null&&typeof hr=="number"&&hr>0&&(g=1.5*hr,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const fr=a.g;if(fr){const Do=fr.g?fr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Do){var M=g.h;M.g||Do.indexOf("spdy")==-1&&Do.indexOf("quic")==-1&&Do.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Al(M,M.h),M.h=null))}if(g.G){const Nl=fr.g?fr.g.getResponseHeader("X-HTTP-Session-Id"):null;Nl&&(g.wa=Nl,Fe(g.J,g.G,Nl))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var K=a;if(g.na=Hh(g,g.L?g.ba:null,g.W),K.L){vh(g.h,K);var ye=K,Xe=g.O;Xe&&(ye.H=Xe),ye.D&&(Tl(ye),Io(ye)),g.g=K}else Uh(g);d.i.length>0&&Co(d)}else Ve[0]!="stop"&&Ve[0]!="close"||Wr(d,7);else d.I==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Wr(d,7):Pl(d):Ve[0]!="noop"&&d.l&&d.l.qa(Ve),d.A=0)}}ri(4)}catch{}}var zy=class{constructor(a,h){this.g=a,this.map=h}};function gh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _h(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yh(a){return a.h?1:a.g?a.g.size:0}function bl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Al(a,h){a.g?a.g.add(h):a.h=h}function vh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}gh.prototype.cancel=function(){if(this.i=Eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Eh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return v(a.i)}var wh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let N,M=null;g>=0?(N=a[d].substring(0,g),M=a[d].substring(g+1)):N=a[d],h(N,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function lr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof lr?(this.l=a.l,li(this,a.j),this.o=a.o,this.g=a.g,ci(this,a.u),this.h=a.h,Rl(this,Sh(a.i)),this.m=a.m):a&&(h=String(a).match(wh))?(this.l=!1,li(this,h[1]||"",!0),this.o=ui(h[2]||""),this.g=ui(h[3]||"",!0),ci(this,h[4]),this.h=ui(h[5]||"",!0),Rl(this,h[6]||"",!0),this.m=ui(h[7]||"")):(this.l=!1,this.i=new fi(null,this.l))}lr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(hi(h,Th,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(hi(h,Th,!0),"@"),a.push(oi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(hi(d,d.charAt(0)=="/"?Qy:Ky,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",hi(d,Jy)),a.join("")},lr.prototype.resolve=function(a){const h=pn(this);let d=!!a.j;d?li(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)ci(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const M=[];for(let K=0;K<N.length;){const ye=N[K++];ye=="."?g&&K==N.length&&M.push(""):ye==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),g&&K==N.length&&M.push("")):(M.push(ye),g=!0)}g=M.join("/")}else g=N}return d?h.h=g:d=a.i.toString()!=="",d?Rl(h,Sh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function pn(a){return new lr(a)}function li(a,h,d){a.j=d?ui(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ci(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Rl(a,h,d){h instanceof fi?(a.i=h,Xy(a.i,a.l)):(d||(h=hi(h,Yy)),a.i=new fi(h,a.l))}function Fe(a,h,d){a.i.set(h,d)}function bo(a){return Fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ui(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function hi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Gy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Gy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Th=/[#\/\?@]/g,Ky=/[#\?:]/g,Qy=/[#\?]/g,Yy=/[#\?@]/g,Jy=/#/g;function fi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zr(a){a.g||(a.g=new Map,a.h=0,a.i&&Wy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=fi.prototype,t.add=function(a,h){zr(this),this.i=null,a=ws(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ih(a,h){zr(a),h=ws(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function bh(a,h){return zr(a),h=ws(a,h),a.g.has(h)}t.forEach=function(a,h){zr(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(h,N,g,this)},this)},this)};function Ah(a,h){zr(a);let d=[];if(typeof h=="string")bh(a,h)&&(d=d.concat(a.g.get(ws(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return zr(this),this.i=null,a=ws(this,a),bh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Ah(this,a),a.length>0?String(a[0]):h):h};function Rh(a,h,d){Ih(a,h),d.length>0&&(a.i=null,a.g.set(ws(a,h),v(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const N=oi(d);d=Ah(this,d);for(let M=0;M<d.length;M++){let K=N;d[M]!==""&&(K+="="+oi(d[M])),a.push(K)}}return this.i=a.join("&")};function Sh(a){const h=new fi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ws(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Xy(a,h){h&&!a.j&&(zr(a),a.i=null,a.g.forEach(function(d,g){const N=g.toLowerCase();g!=N&&(Ih(this,g),Rh(this,N,d))},a)),a.j=h}function Zy(a,h){const d=new ii;if(o.Image){const g=new Image;g.onload=f(cr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(cr,d,"TestLoadImage: error",!1,h,g),g.onabort=f(cr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(cr,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function ev(a,h){const d=new ii,g=new AbortController,N=setTimeout(()=>{g.abort(),cr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(M=>{clearTimeout(N),M.ok?cr(d,"TestPingServer: ok",!0,h):cr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),cr(d,"TestPingServer: error",!1,h)})}function cr(a,h,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function tv(){this.g=new mt}function Sl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Sl,Bt),Sl.prototype.g=function(){return new Ao(this.i,this.h)};function Ao(a,h){G.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ao,G),t=Ao.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,pi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,di(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ch(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ch(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?di(this):pi(this),this.readyState==3&&Ch(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,di(this))},t.Na=function(a){this.g&&(this.response=a,di(this))},t.ga=function(){this.g&&di(this)};function di(a){a.readyState=4,a.l=null,a.j=null,a.B=null,pi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ph(a){let h="";return Ot(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Cl(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ph(d),typeof a=="string"?d!=null&&oi(d):Fe(a,h,d))}function ze(a){G.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ze,G);var nv=/^https?$/i,rv=["POST","PUT"];t=ze.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():uh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){kh(this,M);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())d.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(M=>M.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(rv,h,void 0)>=0)||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,K]of d)this.g.setRequestHeader(M,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(M){kh(this,M)}};function kh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Dh(a),Ro(a)}function Dh(a){a.A||(a.A=!0,z(a,"complete"),z(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,z(this,"complete"),z(this,"abort"),Ro(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),ze.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Nh(this):this.Xa())},t.Xa=function(){Nh(this)};function Nh(a){if(a.h&&typeof i<"u"){if(a.v&&ur(a)==4)setTimeout(a.Ca.bind(a),0);else if(z(a,"readystatechange"),ur(a)==4){a.h=!1;try{const M=a.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=M===0){let K=String(a.D).match(wh)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),g=!nv.test(K?K.toLowerCase():"")}d=g}if(d)z(a,"complete"),z(a,"success");else{a.o=6;try{var N=ur(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Dh(a)}}finally{Ro(a)}}}}function Ro(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||z(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ur(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),pt(h)}};function Oh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sv(a){const h={};a=(a.g&&ur(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=$y(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const M=h[N]||[];h[N]=M,M.push(d)}dn(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Vh(a){this.za=0,this.i=[],this.j=new ii,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mi("baseRetryDelayMs",5e3,a),this.Za=mi("retryDelaySeedMs",1e4,a),this.Ta=mi("forwardChannelMaxRetries",2,a),this.va=mi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new gh(a&&a.concurrentRequestLimit),this.Ba=new tv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Vh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){Rt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Hh(this,null,this.W),Co(this)};function Pl(a){if(xh(a),a.I==3){var h=a.V++,d=pn(a.J);if(Fe(d,"SID",a.M),Fe(d,"RID",h),Fe(d,"TYPE","terminate"),gi(a,d),h=new ar(a,a.j,h),h.M=2,h.A=bo(pn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=qh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Io(h)}$h(a)}function So(a){a.g&&(Dl(a),a.g.cancel(),a.g=null)}function xh(a){So(a),a.v&&(o.clearTimeout(a.v),a.v=null),Po(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Co(a){if(!_h(a.h)&&!a.m){a.m=!0;var h=a.Ea;q||y(),ee||(q(),ee=!0),T.add(h,a),a.D=0}}function iv(a,h){return yh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=si(u(a.Ea,a,h),jh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new ar(this,this.j,a);let M=this.o;if(this.U&&(M?(M=Ft(M),Mn(M,this.U)):M=this.U),this.u!==null||this.R||(N.J=M,M=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Lh(this,N,h),d=pn(this.J),Fe(d,"RID",a),Fe(d,"CVER",22),this.G&&Fe(d,"X-HTTP-Session-Id",this.G),gi(this,d),M&&(this.R?h="headers="+oi(Ph(M))+"&"+h:this.u&&Cl(d,this.u,M)),Al(this.h,N),this.Ra&&Fe(d,"TYPE","init"),this.S?(Fe(d,"$req",h),Fe(d,"SID","null"),N.U=!0,wl(N,d,null)):wl(N,d,h),this.I=2}}else this.I==3&&(a?Mh(this,a):this.i.length==0||_h(this.h)||Mh(this))};function Mh(a,h){var d;h?d=h.l:d=a.V++;const g=pn(a.J);Fe(g,"SID",a.M),Fe(g,"RID",d),Fe(g,"AID",a.K),gi(a,g),a.u&&a.o&&Cl(g,a.u,a.o),d=new ar(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Lh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Al(a.h,d),wl(d,g,h)}function gi(a,h){a.H&&Ot(a.H,function(d,g){Fe(h,g,d)}),a.l&&Ot({},function(d,g){Fe(h,g,d)})}function Lh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var N=a.i;let ye=-1;for(;;){const Xe=["count="+d];ye==-1?d>0?(ye=N[0].g,Xe.push("ofs="+ye)):ye=0:Xe.push("ofs="+ye);let Ve=!0;for(let it=0;it<d;it++){var M=N[it].g;const mn=N[it].map;if(M-=ye,M<0)ye=Math.max(0,N[it].g-100),Ve=!1;else try{M="req"+M+"_"||"";try{var K=mn instanceof Map?mn:Object.entries(mn);for(const[Gr,hr]of K){let fr=hr;l(hr)&&(fr=Re(hr)),Xe.push(M+Gr+"="+encodeURIComponent(fr))}}catch(Gr){throw Xe.push(M+"type="+encodeURIComponent("_badmap")),Gr}}catch{g&&g(mn)}}if(Ve){K=Xe.join("&");break e}}K=void 0}return a=a.i.splice(0,d),h.G=a,K}function Uh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;q||y(),ee||(q(),ee=!0),T.add(h,a),a.A=0}}function kl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=si(u(a.Da,a),jh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Fh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=si(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),So(this),Fh(this))};function Dl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Fh(a){a.g=new ar(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=pn(a.na);Fe(h,"RID","rpc"),Fe(h,"SID",a.M),Fe(h,"AID",a.K),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Fe(h,"TO",a.ia),Fe(h,"TYPE","xmlhttp"),gi(a,h),a.u&&a.o&&Cl(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=bo(pn(h)),d.u=null,d.R=!0,dh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,So(this),kl(this),Rt(19))};function Po(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Bh(a,h){var d=null;if(a.g==h){Po(a),Dl(a),a.g=null;var g=2}else if(bl(a.h,h))d=h.G,vh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=Hr(),z(g,new lh(g,d)),Co(a)}else Uh(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&iv(a,h)||g==2&&kl(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),N){case 1:Wr(a,5);break;case 4:Wr(a,10);break;case 3:Wr(a,6);break;default:Wr(a,2)}}}function jh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Wr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const N=!g;g=new lr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||li(g,"https"),bo(g),N?Zy(g.toString(),d):ev(g.toString(),d)}else Rt(2);a.I=0,a.l&&a.l.pa(h),$h(a),xh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function $h(a){if(a.I=0,a.ja=[],a.l){const h=Eh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ja,h),O(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function Hh(a,h,d){var g=d instanceof lr?pn(d):new lr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ci(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const M=new lr(null);g&&li(M,g),h&&(M.g=h),N&&ci(M,N),d&&(M.h=d),g=M}return d=a.G,h=a.wa,d&&h&&Fe(g,d,h),Fe(g,"VER",a.ka),gi(a,g),g}function qh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ze(new Sl({ab:d})):new ze(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zh(){}t=zh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ko(){}ko.prototype.g=function(a,h){return new $t(a,h)};function $t(a,h){G.call(this),this.g=new Vh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!_(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ts(this)}p($t,G),$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Pl(this.g)},$t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Re(a),a=d);h.i.push(new zy(h.Ya++,a)),h.I==3&&Co(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,Pl(this.g),delete this.g,$t.Z.N.call(this)};function Wh(a){vs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Wh,vs);function Gh(){lt.call(this),this.status=1}p(Gh,lt);function Ts(a){this.g=a}p(Ts,zh),Ts.prototype.ra=function(){z(this.g,"a")},Ts.prototype.qa=function(a){z(this.g,new Wh(a))},Ts.prototype.pa=function(a){z(this.g,new Gh)},Ts.prototype.oa=function(){z(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,_g=function(){return new ko},gg=function(){return Hr()},mg=st,Sc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},To.NO_ERROR=0,To.TIMEOUT=8,To.HTTP_ERROR=6,Ko=To,ch.COMPLETE="complete",pg=ch,jt.EventType=rn,rn.OPEN="a",rn.CLOSE="b",rn.ERROR="c",rn.MESSAGE="d",G.prototype.listen=G.prototype.J,Ii=jt,ze.prototype.listenOnce=ze.prototype.K,ze.prototype.getLastError=ze.prototype.Ha,ze.prototype.getLastErrorCode=ze.prototype.ya,ze.prototype.getStatus=ze.prototype.ca,ze.prototype.getResponseJson=ze.prototype.La,ze.prototype.getResponseText=ze.prototype.la,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Fa,dg=ze}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});const rd="@firebase/firestore",sd="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const as=new mu("@firebase/firestore");function Ss(){return as.logLevel}function ne(t,...e){if(as.logLevel<=we.DEBUG){const n=e.map(yu);as.debug(`Firestore (${Ys}): ${t}`,...n)}}function er(t,...e){if(as.logLevel<=we.ERROR){const n=e.map(yu);as.error(`Firestore (${Ys}): ${t}`,...n)}}function Hs(t,...e){if(as.logLevel<=we.WARN){const n=e.map(yu);as.warn(`Firestore (${Ys}): ${t}`,...n)}}function yu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function de(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,yg(t,r,n)}function yg(t,e,n){let r=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw er(r),new Error(r)}function Ne(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||yg(e,s,r)}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(yt.UNAUTHENTICATED)))}shutdown(){}}class Ob{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Vb{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new vg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class xb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Mb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new xb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class id{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0,3512);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new id(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ne(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new id(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ub(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Cc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Xl(s)===Xl(i)?Te(s,i):Xl(s)?1:-1}return Te(t.length,e.length)}const Fb=55296,Bb=57343;function Xl(t){const e=t.charCodeAt(0);return e>=Fb&&e<=Bb}function qs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="__name__";class yn{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&de(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=yn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Te(e.length,n.length)}static compareSegments(e,n){const r=yn.isNumericId(e),s=yn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?yn.extractNumericId(e).compare(yn.extractNumericId(n)):Cc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pr.fromString(e.substring(4,e.length-2))}}class je extends yn{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new je(n)}static emptyPath(){return new je([])}}const jb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends yn{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return jb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===od}static keyField(){return new ht([od])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new se(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new se(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Eg(t,e,n){if(!n)throw new se(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $b(t,e,n,r){if(e===!0&&r===!0)throw new se(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ad(t){if(!le.isDocumentKey(t))throw new se(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ld(t){if(le.isDocumentKey(t))throw new se(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Eu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de(12329,{type:typeof t})}function ls(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eu(t);throw new se(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const cd=-62135596800,ud=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ud);return new $e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<cd)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ud}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fo(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:Ye("string",$e._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new $e(0,0))}static max(){return new pe(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yi=-1;function Hb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Mr(s,le.empty(),e)}function qb(t){return new Mr(t.readTime,t.key,Yi)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(pe.min(),le.empty(),Yi)}static max(){return new Mr(pe.max(),le.empty(),Yi)}}function zb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==Wb)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):j.reject(n)}static resolve(e){return new j(((n,r)=>{n(e)}))}static reject(e){return new j(((n,r)=>{r(e)}))}static waitFor(e){return new j(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next((s=>s?j.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new j(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new j(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function Kb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const wu=-1;function el(t){return t==null}function _a(t){return t===0&&1/t==-1/0}function Qb(t){return typeof t=="number"&&Number.isInteger(t)&&!_a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="";function Yb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hd(e)),e=Jb(t.get(n),e);return hd(e)}function Jb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Tg:n+="";break;default:n+=i}}return n}function hd(t){return t+Tg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lo(this.root,e,this.comparator,!0)}}class Lo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new sn([])}unionWith(e){let n=new nt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bg("Invalid base64 string: "+i):i}})(e);return new ft(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Xb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(Ne(!!t,39018),typeof t=="string"){let e=0;const n=Xb.exec(t);if(Ne(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ur(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="server_timestamp",Rg="__type__",Sg="__previous_value__",Cg="__local_write_time__";function Tu(t){return(t?.mapValue?.fields||{})[Rg]?.stringValue===Ag}function tl(t){const e=t.mapValue.fields[Sg];return Tu(e)?tl(e):e}function Ji(t){const e=Lr(t.mapValue.fields[Cg].timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const ya="(default)";class Xi{constructor(e,n){this.projectId=e,this.database=n||ya}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database===ya}isEqual(e){return e instanceof Xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="__type__",eA="__max__",Uo={mapValue:{}},kg="__vector__",va="value";function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tu(t)?4:nA(t)?9007199254740991:tA(t)?10:11:de(28295,{value:t})}function Dn(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Lr(s.timestampValue),l=Lr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Ur(s.bytesValue).isEqual(Ur(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),l=Ge(i.doubleValue);return o===l?_a(o)===_a(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fd(o)!==fd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Dn(o[c],l[c])))return!1;return!0})(t,e);default:return de(52216,{left:t})}}function Zi(t,e){return(t.values||[]).find((n=>Dn(n,e)))!==void 0}function zs(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return pd(t.timestampValue,e.timestampValue);case 4:return pd(Ji(t),Ji(e));case 5:return Cc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Ur(i),c=Ur(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Te(l[u],c[u]);if(f!==0)return f}return Te(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Te(Ge(i.latitude),Ge(o.latitude));return l!==0?l:Te(Ge(i.longitude),Ge(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return md(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const l=i.fields||{},c=o.fields||{},u=l[va]?.arrayValue,f=c[va]?.arrayValue,p=Te(u?.values?.length||0,f?.values?.length||0);return p!==0?p:md(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Uo.mapValue&&o===Uo.mapValue)return 0;if(i===Uo.mapValue)return 1;if(o===Uo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Cc(c[p],f[p]);if(m!==0)return m;const v=zs(l[c[p]],u[f[p]]);if(v!==0)return v}return Te(c.length,f.length)})(t.mapValue,e.mapValue);default:throw de(23264,{he:n})}}function pd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Lr(t),r=Lr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function md(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=zs(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Ws(t){return Pc(t)}function Pc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Ur(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return le.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Pc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Pc(n.fields[o])}`;return s+"}"})(t.mapValue):de(61005,{value:t})}function Qo(t){switch(Fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tl(t);return e?16+Qo(e):16;case 5:return 2*t.stringValue.length;case 6:return Ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Qo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ms(r.fields,((i,o)=>{s+=i.length+Qo(o)})),s})(t.mapValue);default:throw de(13486,{value:t})}}function kc(t){return!!t&&"integerValue"in t}function Iu(t){return!!t&&"arrayValue"in t}function gd(t){return!!t&&"nullValue"in t}function _d(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yo(t){return!!t&&"mapValue"in t}function tA(t){return(t?.mapValue?.fields||{})[Pg]?.stringValue===kg}function Li(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Li(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Li(t.arrayValue.values[n]);return e}return{...t}}function nA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===eA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Li(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Li(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Gt(Li(this.value))}}function Dg(t){const e=[];return ms(t.fields,((n,r)=>{const s=new ht([n]);if(Yo(r)){const i=Dg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,pe.min(),pe.min(),pe.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,pe.min(),pe.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,pe.min(),pe.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ea{constructor(e,n){this.position=e,this.inclusive=n}}function yd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=zs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function rA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ng{}class et extends Ng{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iA(e,n,r):n==="array-contains"?new lA(e,r):n==="in"?new cA(e,r):n==="not-in"?new uA(e,r):n==="array-contains-any"?new hA(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oA(e,r):new aA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(zs(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends Ng{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Nn(e,n)}matches(e){return Og(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Og(t){return t.op==="and"}function Vg(t){return sA(t)&&Og(t)}function sA(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Dc(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Ws(t.value);if(Vg(t))return t.filters.map((e=>Dc(e))).join(",");{const e=t.filters.map((n=>Dc(n))).join(",");return`${t.op}(${e})`}}function xg(t,e){return t instanceof et?(function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Dn(r.value,s.value)})(t,e):t instanceof Nn?(function(r,s){return s instanceof Nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&xg(o,s.filters[l])),!0):!1})(t,e):void de(19439)}function Mg(t){return t instanceof et?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ws(n.value)}`})(t):t instanceof Nn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Mg).join(" ,")+"}"})(t):"Filter"}class iA extends et{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class oA extends et{constructor(e,n){super(e,"in",n),this.keys=Lg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class aA extends et{constructor(e,n){super(e,"not-in",n),this.keys=Lg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Lg(t,e){return(e.arrayValue?.values||[]).map((n=>le.fromName(n.referenceValue)))}class lA extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Iu(n)&&Zi(n.arrayValue,this.value)}}class cA extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zi(this.value.arrayValue,n)}}class uA extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Zi(this.value.arrayValue,n)}}class hA extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Zi(this.value.arrayValue,r)))}}/**
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
 */class fA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Ed(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fA(t,e,n,r,s,i,o)}function bu(t){const e=me(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Dc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),el(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ws(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ws(r))).join(",")),e.Te=n}return e.Te}function Au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vd(t.startAt,e.startAt)&&vd(t.endAt,e.endAt)}function Nc(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function dA(t,e,n,r,s,i,o,l){return new nl(t,e,n,r,s,i,o,l)}function Ru(t){return new nl(t)}function wd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pA(t){return t.collectionGroup!==null}function Ui(t){const e=me(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(ht.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new wa(i,r))})),n.has(ht.keyField().canonicalString())||e.Ie.push(new wa(ht.keyField(),r))}return e.Ie}function Tn(t){const e=me(t);return e.Ee||(e.Ee=mA(e,Ui(t))),e.Ee}function mA(t,e){if(t.limitType==="F")return Ed(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new wa(s.field,i)}));const n=t.endAt?new Ea(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ea(t.startAt.position,t.startAt.inclusive):null;return Ed(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Oc(t,e,n){return new nl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rl(t,e){return Au(Tn(t),Tn(e))&&t.limitType===e.limitType}function Ug(t){return`${bu(Tn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Mg(s))).join(", ")}]`),el(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ws(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ws(s))).join(",")),`Target(${r})`})(Tn(t))}; limitType=${t.limitType})`}function sl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ui(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=yd(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Ui(r),s)||r.endAt&&!(function(o,l,c){const u=yd(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Ui(r),s))})(t,e)}function gA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fg(t){return(e,n)=>{let r=!1;for(const s of Ui(t)){const i=_A(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _A(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?zs(c,u):de(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const yA=new qe(le.comparator);function tr(){return yA}const Bg=new qe(le.comparator);function bi(...t){let e=Bg;for(const n of t)e=e.insert(n.key,n);return e}function jg(t){let e=Bg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Zr(){return Fi()}function $g(){return Fi()}function Fi(){return new gs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const vA=new qe(le.comparator),EA=new nt(le.comparator);function Ie(...t){let e=EA;for(const n of t)e=e.add(n);return e}const wA=new nt(Te);function TA(){return wA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_a(e)?"-0":e}}function Hg(t){return{integerValue:""+t}}function IA(t,e){return Qb(e)?Hg(e):Su(t,e)}/**
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
 */class il{constructor(){this._=void 0}}function bA(t,e,n){return t instanceof eo?(function(s,i){const o={fields:{[Rg]:{stringValue:Ag},[Cg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tu(i)&&(i=tl(i)),i&&(o.fields[Sg]=i),{mapValue:o}})(n,e):t instanceof to?zg(t,e):t instanceof no?Wg(t,e):(function(s,i){const o=qg(s,i),l=Td(o)+Td(s.Ae);return kc(o)&&kc(s.Ae)?Hg(l):Su(s.serializer,l)})(t,e)}function AA(t,e,n){return t instanceof to?zg(t,e):t instanceof no?Wg(t,e):n}function qg(t,e){return t instanceof Ta?(function(r){return kc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class eo extends il{}class to extends il{constructor(e){super(),this.elements=e}}function zg(t,e){const n=Gg(e);for(const r of t.elements)n.some((s=>Dn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class no extends il{constructor(e){super(),this.elements=e}}function Wg(t,e){let n=Gg(e);for(const r of t.elements)n=n.filter((s=>!Dn(s,r)));return{arrayValue:{values:n}}}class Ta extends il{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Td(t){return Ge(t.integerValue||t.doubleValue)}function Gg(t){return Iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n){this.field=e,this.transform=n}}function SA(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof to&&s instanceof to||r instanceof no&&s instanceof no?qs(r.elements,s.elements,Dn):r instanceof Ta&&s instanceof Ta?Dn(r.Ae,s.Ae):r instanceof eo&&s instanceof eo})(t.transform,e.transform)}class CA{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ol{}function Kg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yg(t.key,Kn.none()):new po(t.key,t.data,Kn.none());{const n=t.data,r=Gt.empty();let s=new nt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _s(t.key,r,new sn(s.toArray()),Kn.none())}}function PA(t,e,n){t instanceof po?(function(s,i,o){const l=s.value.clone(),c=bd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof _s?(function(s,i,o){if(!Jo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=bd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Qg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Bi(t,e,n,r){return t instanceof po?(function(i,o,l,c){if(!Jo(i.precondition,o))return l;const u=i.value.clone(),f=Ad(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof _s?(function(i,o,l,c){if(!Jo(i.precondition,o))return l;const u=Ad(i.fieldTransforms,c,o),f=o.data;return f.setAll(Qg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Jo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function kA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=qg(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function Id(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qs(r,s,((i,o)=>SA(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends ol{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _s extends ol{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function bd(t,e,n){const r=new Map;Ne(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,AA(o,l,n[s]))}return r}function Ad(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,bA(i,o,e))}return r}class Yg extends ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DA extends ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$g();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Kg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ie())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,((n,r)=>Id(n,r)))&&qs(this.baseMutations,e.baseMutations,((n,r)=>Id(n,r)))}}class Cu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return vA})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Cu(e,n,r,s)}}/**
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
 */class OA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class VA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Ae;function xA(t){switch(t){case H.OK:return de(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return de(15467,{code:t})}}function Jg(t){if(t===void 0)return er("GRPC error has no .code"),H.UNKNOWN;switch(t){case Qe.OK:return H.OK;case Qe.CANCELLED:return H.CANCELLED;case Qe.UNKNOWN:return H.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return H.INTERNAL;case Qe.UNAVAILABLE:return H.UNAVAILABLE;case Qe.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Qe.NOT_FOUND:return H.NOT_FOUND;case Qe.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Qe.ABORTED:return H.ABORTED;case Qe.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Qe.DATA_LOSS:return H.DATA_LOSS;default:return de(39323,{code:t})}}(Ae=Qe||(Qe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function MA(){return new TextEncoder}/**
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
 */const LA=new Pr([4294967295,4294967295],0);function Rd(t){const e=MA().encode(t),n=new fg;return n.update(e),new Uint8Array(n.digest())}function Sd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([s,i],0)]}class Pu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ai(`Invalid padding: ${n}`);if(r<0)throw new Ai(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ai(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ai(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Pr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Pr.fromNumber(r)));return s.compare(LA)===1&&(s=new Pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Rd(e),[r,s]=Sd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Pu(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=Rd(e),[r,s]=Sd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ai extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,mo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new al(pe.min(),s,new qe(Te),tr(),Ie())}}class mo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mo(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Xg{constructor(e,n){this.targetId=e,this.Ce=n}}class Zg{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cd{constructor(){this.ve=0,this.Fe=Pd(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de(38017,{changeType:i})}})),new mo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Pd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class UA{constructor(e){this.Ge=e,this.ze=new Map,this.je=tr(),this.Je=Fo(),this.He=Fo(),this.Ye=new qe(Te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:de(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Nc(i))if(r===0){const o=new le(i.path);this.et(n,o,Et.newNoDocument(o,pe.min()))}else Ne(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ur(r).toUint8Array()}catch(c){if(c instanceof bg)return Hs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Pu(o,s,i)}catch(c){return Hs(c instanceof Ai?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Nc(l.target)){const c=new le(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Et.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Ie();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new al(e,n,this.Ye,this.je,r);return this.je=tr(),this.Je=Fo(),this.He=Fo(),this.Ye=new qe(Te),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Cd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new nt(Te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new nt(Te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fo(){return new qe(le.comparator)}function Pd(){return new qe(le.comparator)}const FA={asc:"ASCENDING",desc:"DESCENDING"},BA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jA={and:"AND",or:"OR"};class $A{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vc(t,e){return t.useProto3Json||el(e)?e:{value:e}}function Ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function e_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HA(t,e){return Ia(t,e.toTimestamp())}function In(t){return Ne(!!t,49232),pe.fromTimestamp((function(n){const r=Lr(n);return new $e(r.seconds,r.nanos)})(t))}function ku(t,e){return xc(t,e).canonicalString()}function xc(t,e){const n=(function(s){return new je(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function t_(t){const e=je.fromString(t);return Ne(o_(e),10190,{key:e.toString()}),e}function Mc(t,e){return ku(t.databaseId,e.path)}function Zl(t,e){const n=t_(e);if(n.get(1)!==t.databaseId.projectId)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(r_(n))}function n_(t,e){return ku(t.databaseId,e)}function qA(t){const e=t_(t);return e.length===4?je.emptyPath():r_(e)}function Lc(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function r_(t){return Ne(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function kd(t,e,n){return{name:Mc(t,e),fields:n.value.mapValue.fields}}function zA(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Ne(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(Ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?H.UNKNOWN:Jg(u.code);return new se(f,u.message||"")})(o);n=new Zg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zl(t,r.document.name),i=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):pe.min(),l=new Gt({mapValue:{fields:r.document.fields}}),c=Et.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Xo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zl(t,r.document),i=r.readTime?In(r.readTime):pe.min(),o=Et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Xo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zl(t,r.document),i=r.removedTargetIds||[];n=new Xo([],i,s,null)}else{if(!("filter"in e))return de(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new VA(s,i),l=r.targetId;n=new Xg(l,o)}}return n}function WA(t,e){let n;if(e instanceof po)n={update:kd(t,e.key,e.value)};else if(e instanceof Yg)n={delete:Mc(t,e.key)};else if(e instanceof _s)n={update:kd(t,e.key,e.data),updateMask:tR(e.fieldMask)};else{if(!(e instanceof DA))return de(16599,{Vt:e.type});n={verify:Mc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof eo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof to)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof no)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw de(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:HA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de(27497)})(t,e.precondition)),n}function GA(t,e){return t&&t.length>0?(Ne(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?In(s.updateTime):In(i);return o.isEqual(pe.min())&&(o=In(i)),new CA(o,s.transformResults||[])})(n,e)))):[]}function KA(t,e){return{documents:[n_(t,e.path)]}}function QA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=n_(t,s);const i=(function(u){if(u.length!==0)return i_(Nn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Ps(m.field),direction:XA(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function YA(t){let e=qA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=s_(p);return m instanceof Nn&&Vg(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(O){return new wa(ks(O.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,el(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,v=p.values||[];return new Ea(v,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,v=p.values||[];return new Ea(v,m)})(n.endAt)),dA(e,s,o,i,l,"F",c,u)}function JA(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function s_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ks(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ks(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ks(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}})(t):t.fieldFilter!==void 0?(function(n){return et.create(ks(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Nn.create(n.compositeFilter.filters.map((r=>s_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de(1026)}})(n.compositeFilter.op))})(t):de(30097,{filter:t})}function XA(t){return FA[t]}function ZA(t){return BA[t]}function eR(t){return jA[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function ks(t){return ht.fromServerFormat(t.fieldPath)}function i_(t){return t instanceof et?(function(n){if(n.op==="=="){if(_d(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(gd(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_d(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(gd(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:ZA(n.op),value:n.value}}})(t):t instanceof Nn?(function(n){const r=n.getFilters().map((s=>i_(s)));return r.length===1?r[0]:{compositeFilter:{op:eR(n.op),filters:r}}})(t):de(54877,{filter:t})}function tR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function o_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.yt=e}}function rR(t){const e=YA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oc(e,e.limit,"L"):e}/**
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
 */class sR{constructor(){this.Cn=new iR}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Mr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class iR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(je.comparator)).toArray()}}/**
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
 */const Nd="LruGarbageCollector",oR=1048576;function Od([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class aR{constructor(e){this.Ir=e,this.buffer=new nt(Od),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Od(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(Nd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xs(n)?ne(Nd,"Ignoring IndexedDB error during garbage collection: ",n):await Js(n)}await this.Vr(3e5)}))}}class cR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Za.ce);const r=new aR(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Dd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Ss()<=we.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function uR(t,e){return new cR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.changes=new gs((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Bi(r.mutation,s,sn.empty(),$e.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ie()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Zr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=bi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ie())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=tr();const o=Fi(),l=(function(){return Fi()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof _s)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Bi(f.mutation,u,f.mutation.getFieldMask(),$e.now())):o.set(u.key,sn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>l.set(u,new fR(f,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=Fi();let s=new qe(((o,l)=>o-l)),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||sn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Ie()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=$g();f.forEach((m=>{if(!i.has(m)){const v=Kg(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Zr());let l=Yi,c=i;return o.next((u=>j.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ie()))).next((f=>({batchId:l,changes:jg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next((r=>{let s=bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=bi();return this.indexManager.getCollectionParents(e,i).next((l=>j.forEach(l,(c=>{const u=(function(p,m){return new nl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Et.newInvalidDocument(f)))}));let l=bi();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&Bi(f.mutation,u,sn.empty(),$e.now()),sl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:In(s.createTime)}})(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:rR(s.bundledQuery),readTime:In(s.readTime)}})(n)),j.resolve()}}/**
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
 */class mR{constructor(){this.overlays=new qe(le.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return j.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Zr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Zr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Zr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return j.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OA(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class gR{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.Qr=new nt(ot.$r),this.Ur=new nt(ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new ot(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new le(new je([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new le(new je([])),r=new ot(n,e),s=new ot(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new ot(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return le.comparator(e.key,n.key)||Te(e.Yr,n.Yr)}static Kr(e,n){return Te(e.Yr,n.Yr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new nt(ot.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?wu:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const l=this.Xr(o.Yr);i.push(l)})),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(Te);return n.forEach((s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{r=r.add(l.Yr)}))})),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new ot(new le(i),0);let l=new nt(Te);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)}),o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ne(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,(s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new ot(n,0),s=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.ri=e,this.docs=(function(){return new qe(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))})),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tr();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zb(qb(f),r)<=0||(s.has(f.key)||sl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de(9500)}ii(e,n){return j.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new vR(this)}getSize(e){return j.resolve(this.size)}}class vR extends hR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.persistence=e,this.si=new gs((n=>bu(n)),Au),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Du,this.targetCount=0,this.ai=Gs.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),j.waitFor(i).next((()=>s))}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Za(0),this.li=!1,this.li=!0,this.hi=new gR,this.referenceDelegate=e(this),this.Pi=new ER(this),this.indexManager=new sR,this.remoteDocumentCache=(function(s){return new yR(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new nR(n),this.Ii=new pR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new _R(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new wR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return j.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class wR extends Gb{constructor(e){super(),this.currentSequenceNumber=e}}class Nu{constructor(e){this.persistence=e,this.Ri=new Du,this.Vi=null}static mi(e){return new Nu(e)}get fi(){if(this.Vi)return this.Vi;throw de(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,(r=>{const s=le.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,pe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ba{constructor(e,n){this.persistence=e,this.pi=new gs((r=>Yb(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=uR(this,n)}static mi(e,n){return new ba(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return j.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?j.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((l=>{l||(r++,i.removeEntry(o,pe.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qo(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class TR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return pI()?8:Kb(At())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new TR;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Ss()<=we.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Ss()<=we.DEBUG&&ne("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ss()<=we.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):j.resolve())}ys(e,n){if(wd(n))return j.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Oc(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Oc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,r,s){return wd(n)||s.isEqual(pe.min())?j.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(Ss()<=we.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.vs(e,o,n,Hb(s,Yi)).next((l=>l)))}))}Ds(e,n){let r=new nt(Fg(e));return n.forEach(((s,i)=>{sl(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Ss()<=we.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.ps.getDocumentsMatchingQuery(e,n,Mr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LocalStore",bR=3e8;class AR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new qe(Te),this.xs=new gs((i=>bu(i)),Au),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function RR(t,e,n,r){return new AR(t,e,n,r)}async function c_(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Ie();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function SR(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let v=j.resolve();return m.forEach((O=>{v=v.next((()=>f.getEntry(c,O))).next((V=>{const D=u.docVersions.get(O);Ne(D!==null,48541),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),f.addEntry(V)))}))})),v.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function u_(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function CR(t,e){const n=me(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ft.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),(function(V,D,L){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=bR?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(m,v,f)&&l.push(n.Pi.updateTargetData(i,v))}));let c=tr(),u=Ie();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(PR(i,o,e.documentUpdates).next((f=>{c=f.ks,u=f.qs}))),!r.isEqual(pe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return j.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function PR(t,e,n){let r=Ie(),s=Ie();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=tr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne(Vu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:s}}))}function kR(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=wu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function DR(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,j.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Uc(t,e,n){const r=me(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Xs(o))throw o;ne(Vu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Vd(t,e,n){const r=me(t);let s=pe.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=me(c),m=p.xs.get(f);return m!==void 0?j.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,Tn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ie()))).next((l=>(NR(r,gA(e),l),{documents:l,Qs:i})))))}function NR(t,e,n){let r=t.Os.get(e)||pe.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class xd{constructor(){this.activeTargetIds=TA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OR{constructor(){this.Mo=new xd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VR{Oo(e){}shutdown(){}}/**
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
 */const Md="ConnectivityMonitor";class Ld{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(Md,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(Md,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const ec="RestConnection",xR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ya?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Fc(),l=this.zo(e,n.toUriEncodedString());ne(ec,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),f=ds(u);return this.Jo(e,l,c,r,f).then((p=>(ne(ec,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Hs(ec,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ys})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=xR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class UR extends MR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Fc();return new Promise(((l,c)=>{const u=new dg;u.setWithCredentials(!0),u.listenOnce(pg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ko.NO_ERROR:const p=u.getResponseJson();ne(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ko.TIMEOUT:ne(gt,`RPC '${e}' ${o} timed out`),c(new se(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const m=u.getStatus();if(ne(gt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const O=v?.error;if(O&&O.status&&O.message){const V=(function(L){const x=L.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(x)>=0?x:H.UNKNOWN})(O.status);c(new se(V,O.message))}else c(new se(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new se(H.UNAVAILABLE,"Connection failed."));break;default:de(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ne(gt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);ne(gt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Fc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_g(),l=gg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");ne(gt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.I_(p);let m=!1,v=!1;const O=new LR({Yo:D=>{v?ne(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(ne(gt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ne(gt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),V=(D,L,x)=>{D.listen(L,(S=>{try{x(S)}catch(C){setTimeout((()=>{throw C}),0)}}))};return V(p,Ii.EventType.OPEN,(()=>{v||(ne(gt,`RPC '${e}' stream ${s} transport opened.`),O.o_())})),V(p,Ii.EventType.CLOSE,(()=>{v||(v=!0,ne(gt,`RPC '${e}' stream ${s} transport closed`),O.a_(),this.E_(p))})),V(p,Ii.EventType.ERROR,(D=>{v||(v=!0,Hs(gt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),O.a_(new se(H.UNAVAILABLE,"The operation could not be completed")))})),V(p,Ii.EventType.MESSAGE,(D=>{if(!v){const L=D.data[0];Ne(!!L,16349);const x=L,S=x?.error||x[0]?.error;if(S){ne(gt,`RPC '${e}' stream ${s} received error:`,S);const C=S.status;let q=(function(y){const E=Qe[y];if(E!==void 0)return Jg(E)})(C),ee=S.message;q===void 0&&(q=H.INTERNAL,ee="Unknown error status: "+C+" with message "+S.message),v=!0,O.a_(new se(q,ee)),p.close()}else ne(gt,`RPC '${e}' stream ${s} received:`,L),O.u_(L)}})),V(l,mg.STAT_EVENT,(D=>{D.stat===Sc.PROXY?ne(gt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Sc.NOPROXY&&ne(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){return new $A(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="PersistentStream";class f_{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new h_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new se(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(Ud,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(ne(Ud,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class FR extends f_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=zA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?In(o.readTime):pe.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Lc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Nc(c)?{documents:KA(i,c)}:{query:QA(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=e_(i,o.resumeToken);const u=Vc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=Ia(i,o.snapshotVersion.toTimestamp());const u=Vc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=JA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Lc(this.serializer),n.removeTarget=e,this.q_(n)}}class BR extends f_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=GA(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Lc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>WA(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{}class $R extends jR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,xc(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(H.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,xc(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(H.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class HR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(er(n),this.aa=!1):ne("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="RemoteStore";class qR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{ys(this)&&(ne(cs,"Restarting streams for network reachability change."),await(async function(c){const u=me(c);u.Ea.add(4),await go(u),u.Ra.set("Unknown"),u.Ea.delete(4),await cl(u)})(this))}))})),this.Ra=new HR(r,s)}}async function cl(t){if(ys(t))for(const e of t.da)await e(!0)}async function go(t){for(const e of t.da)await e(!1)}function d_(t,e){const n=me(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Uu(n)?Lu(n):Zs(n).O_()&&Mu(n,e))}function xu(t,e){const n=me(t),r=Zs(n);n.Ia.delete(e),r.O_()&&p_(n,e),n.Ia.size===0&&(r.O_()?r.L_():ys(n)&&n.Ra.set("Unknown"))}function Mu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zs(t).Y_(e)}function p_(t,e){t.Va.Ue(e),Zs(t).Z_(e)}function Lu(t){t.Va=new UA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Zs(t).start(),t.Ra.ua()}function Uu(t){return ys(t)&&!Zs(t).x_()&&t.Ia.size>0}function ys(t){return me(t).Ea.size===0}function m_(t){t.Va=void 0}async function zR(t){t.Ra.set("Online")}async function WR(t){t.Ia.forEach(((e,n)=>{Mu(t,e)}))}async function GR(t,e){m_(t),Uu(t)?(t.Ra.ha(e),Lu(t)):t.Ra.set("Unknown")}async function KR(t,e,n){if(t.Ra.set("Online"),e instanceof Zg&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){ne(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Aa(t,r)}else if(e instanceof Xo?t.Va.Ze(e):e instanceof Xg?t.Va.st(e):t.Va.tt(e),!n.isEqual(pe.min()))try{const r=await u_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),p_(i,c);const p=new Tr(f.target,c,u,f.sequenceNumber);Mu(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){ne(cs,"Failed to raise snapshot:",r),await Aa(t,r)}}async function Aa(t,e,n){if(!Xs(e))throw e;t.Ea.add(1),await go(t),t.Ra.set("Offline"),n||(n=()=>u_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ne(cs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await cl(t)}))}function g_(t,e){return e().catch((n=>Aa(t,n,e)))}async function ul(t){const e=me(t),n=Br(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wu;for(;QR(e);)try{const s=await kR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,YR(e,s)}catch(s){await Aa(e,s)}__(e)&&y_(e)}function QR(t){return ys(t)&&t.Ta.length<10}function YR(t,e){t.Ta.push(e);const n=Br(t);n.O_()&&n.X_&&n.ea(e.mutations)}function __(t){return ys(t)&&!Br(t).x_()&&t.Ta.length>0}function y_(t){Br(t).start()}async function JR(t){Br(t).ra()}async function XR(t){const e=Br(t);for(const n of t.Ta)e.ea(n.mutations)}async function ZR(t,e,n){const r=t.Ta.shift(),s=Cu.from(r,e,n);await g_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ul(t)}async function eS(t,e){e&&Br(t).X_&&await(async function(r,s){if((function(o){return xA(o)&&o!==H.ABORTED})(s.code)){const i=r.Ta.shift();Br(r).B_(),await g_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ul(r)}})(t,e),__(t)&&y_(t)}async function Fd(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ne(cs,"RemoteStore received new credentials");const r=ys(n);n.Ea.add(3),await go(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await cl(n)}async function tS(t,e){const n=me(t);e?(n.Ea.delete(2),await cl(n)):e||(n.Ea.add(2),await go(n),n.Ra.set("Unknown"))}function Zs(t){return t.ma||(t.ma=(function(n,r,s){const i=me(n);return i.sa(),new FR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:zR.bind(null,t),t_:WR.bind(null,t),r_:GR.bind(null,t),H_:KR.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Uu(t)?Lu(t):t.Ra.set("Unknown")):(await t.ma.stop(),m_(t))}))),t.ma}function Br(t){return t.fa||(t.fa=(function(n,r,s){const i=me(n);return i.sa(),new BR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:JR.bind(null,t),r_:eS.bind(null,t),ta:XR.bind(null,t),na:ZR.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await ul(t)):(await t.fa.stop(),t.Ta.length>0&&(ne(cs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vs{static emptySet(e){return new Vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=bi(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Bd{constructor(){this.ga=new qe(le.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):de(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ks{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Ks(e,n,Vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class rS{constructor(){this.queries=jd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=jd(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new se(H.ABORTED,"Firestore shutting down"))}}function jd(){return new gs((t=>Ug(t)),rl)}async function v_(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new nS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Bu(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ju(n)}async function E_(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sS(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&ju(n)}function iS(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function ju(t){t.Ca.forEach((e=>{e.next()}))}var Bc,$d;($d=Bc||(Bc={})).Ma="default",$d.Cache="cache";class w_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.key=e}}class I_{constructor(e){this.key=e}}class oS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=Fg(e),this.tu=new Vs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Bd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),v=sl(this.query,p)?p:null,O=!!m&&this.mutatedKeys.has(m.key),V=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;m&&v?m.data.isEqual(v.data)?O!==V&&(r.track({type:3,doc:v}),D=!0):this.su(m,v)||(r.track({type:2,doc:v}),D=!0,(c&&this.eu(v,c)>0||u&&this.eu(v,u)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),D=!0):m&&!v&&(r.track({type:1,doc:m}),D=!0,(c||u)&&(l=!0)),D&&(v?(o=o.add(v),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(v,O){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{Rt:D})}};return V(v)-V(O)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Ks(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new I_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new T_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ks.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const $u="SyncEngine";class aS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lS{constructor(e){this.key=e,this.hu=!1}}class cS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new gs((l=>Ug(l)),rl),this.Iu=new Map,this.Eu=new Set,this.du=new qe(le.comparator),this.Au=new Map,this.Ru=new Du,this.Vu={},this.mu=new Map,this.fu=Gs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uS(t,e,n=!0){const r=P_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await b_(r,e,n,!0),s}async function hS(t,e){const n=P_(t);await b_(n,e,!0,!1)}async function b_(t,e,n,r){const s=await DR(t.localStore,Tn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await fS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&d_(t.remoteStore,s),l}async function fS(t,e,n,r,s){t.pu=(p,m,v)=>(async function(V,D,L,x){let S=D.view.ru(L);S.Cs&&(S=await Vd(V.localStore,D.query,!1).then((({documents:T})=>D.view.ru(T,S))));const C=x&&x.targetChanges.get(D.targetId),q=x&&x.targetMismatches.get(D.targetId)!=null,ee=D.view.applyChanges(S,V.isPrimaryClient,C,q);return qd(V,D.targetId,ee.au),ee.snapshot})(t,p,m,v);const i=await Vd(t.localStore,e,!0),o=new oS(e,i.Qs),l=o.ru(i.documents),c=mo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);qd(t,n,u.au);const f=new aS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function dS(t,e,n){const r=me(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!rl(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Uc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xu(r.remoteStore,s.targetId),jc(r,s.targetId)})).catch(Js)):(jc(r,s.targetId),await Uc(r.localStore,s.targetId,!0))}async function pS(t,e){const n=me(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xu(n.remoteStore,r.targetId))}async function mS(t,e,n){const r=TS(t);try{const s=await(function(o,l){const c=me(o),u=$e.now(),f=l.reduce(((v,O)=>v.add(O.key)),Ie());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let O=tr(),V=Ie();return c.Ns.getEntries(v,f).next((D=>{O=D,O.forEach(((L,x)=>{x.isValidDocument()||(V=V.add(L))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,O))).next((D=>{p=D;const L=[];for(const x of l){const S=kA(x,p.get(x.key).overlayedDocument);S!=null&&L.push(new _s(x.key,S,Dg(S.value.mapValue),Kn.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,L,l)})).next((D=>{m=D;const L=D.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(v,D.batchId,L)}))})).then((()=>({batchId:m.batchId,changes:jg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new qe(Te)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await _o(r,s.changes),await ul(r.remoteStore)}catch(s){const i=Bu(s,"Failed to persist write");n.reject(i)}}async function A_(t,e){const n=me(t);try{const r=await CR(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ne(o.hu,14607):s.removedDocuments.size>0&&(Ne(o.hu,42227),o.hu=!1))})),await _o(n,r,e)}catch(r){await Js(r)}}function Hd(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=me(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&ju(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gS(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new qe(le.comparator);o=o.insert(i,Et.newNoDocument(i,pe.min()));const l=Ie().add(i),c=new al(pe.min(),new Map,new qe(Te),o,l);await A_(r,c),r.du=r.du.remove(i),r.Au.delete(e),Hu(r)}else await Uc(r.localStore,e,!1).then((()=>jc(r,e,n))).catch(Js)}async function _S(t,e){const n=me(t),r=e.batch.batchId;try{const s=await SR(n.localStore,e);S_(n,r,null),R_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _o(n,s)}catch(s){await Js(s)}}async function yS(t,e,n){const r=me(t);try{const s=await(function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(Ne(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);S_(r,e,n),R_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _o(r,s)}catch(s){await Js(s)}}function R_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function S_(t,e,n){const r=me(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||C_(t,r)}))}function C_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(xu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Hu(t))}function qd(t,e,n){for(const r of n)r instanceof T_?(t.Ru.addReference(r.key,e),vS(t,r)):r instanceof I_?(ne($u,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||C_(t,r.key)):de(19791,{wu:r})}function vS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ne($u,"New document in limbo: "+n),t.Eu.add(r),Hu(t))}function Hu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new le(je.fromString(e)),r=t.fu.next();t.Au.set(r,new lS(n)),t.du=t.du.insert(n,r),d_(t.remoteStore,new Tr(Tn(Ru(n.path)),r,"TargetPurposeLimboResolution",Za.ce))}}async function _o(t,e,n){const r=me(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Ou.As(c.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(c,u){const f=me(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>j.forEach(u,(m=>j.forEach(m.Es,(v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v))).next((()=>j.forEach(m.ds,(v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))))))}catch(p){if(!Xs(p))throw p;ne(Vu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=f.Ms.get(m),O=v.snapshotVersion,V=v.withLastLimboFreeSnapshotVersion(O);f.Ms=f.Ms.insert(m,V)}}})(r.localStore,i))}async function ES(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ne($u,"User change. New user:",e.toKey());const r=await c_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new se(H.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _o(n,r.Ls)}}function wS(t,e){const n=me(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function P_(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=A_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gS.bind(null,e),e.Pu.H_=sS.bind(null,e.eventManager),e.Pu.yu=iS.bind(null,e.eventManager),e}function TS(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_S.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yS.bind(null,e),e}class Ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ll(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return RR(this.persistence,new IR,e.initialUser,this.serializer)}Cu(e){return new l_(Nu.mi,this.serializer)}Du(e){return new OR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ra.provider={build:()=>new Ra};class IS extends Ra{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ne(this.persistence.referenceDelegate instanceof ba,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new l_((r=>ba.mi(r,n)),this.serializer)}}class $c{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ES.bind(null,this.syncEngine),await tS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rS})()}createDatastore(e){const n=ll(e.databaseInfo.databaseId),r=(function(i){return new UR(i)})(e.databaseInfo);return(function(i,o,l,c){return new $R(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new qR(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>Hd(this.syncEngine,n,0)),(function(){return Ld.v()?new Ld:new VR})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new cS(s,i,o,l,c,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=me(n);ne(cs,"RemoteStore shutting down."),r.Ea.add(5),await go(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}$c.provider={build:()=>new $c};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jr="FirestoreClient";class bS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=vu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{ne(jr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(ne(jr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Bu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),ne(jr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await c_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function zd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AS(t);ne(jr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Fd(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Fd(e.remoteStore,s))),t._onlineComponents=e}async function AS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne(jr,"Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Hs("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new Ra)}}else ne(jr,"Using default OfflineComponentProvider"),await nc(t,new IS(void 0));return t._offlineComponents}async function D_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne(jr,"Using user provided OnlineComponentProvider"),await zd(t,t._uninitializedComponentsProvider._online)):(ne(jr,"Using default OnlineComponentProvider"),await zd(t,new $c))),t._onlineComponents}function RS(t){return D_(t).then((e=>e.syncEngine))}async function N_(t){const e=await D_(t),n=e.eventManager;return n.onListen=uS.bind(null,e.syncEngine),n.onUnlisten=dS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=hS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=pS.bind(null,e.syncEngine),n}function SS(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new k_({next:m=>{f.Nu(),o.enqueueAndForget((()=>E_(i,p)));const v=m.docs.has(l);!v&&m.fromCache?u.reject(new se(H.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?u.reject(new se(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new w_(Ru(l.path),f,{includeMetadataChanges:!0,qa:!0});return v_(i,p)})(await N_(t),t.asyncQueue,e,n,r))),r.promise}function CS(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new k_({next:m=>{f.Nu(),o.enqueueAndForget((()=>E_(i,p))),m.fromCache&&c.source==="server"?u.reject(new se(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new w_(l,f,{includeMetadataChanges:!0,qa:!0});return v_(i,p)})(await N_(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */const V_="firestore.googleapis.com",Gd=!0;class Kd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=V_,this.ssl=Gd}else this.host=e.host,this.ssl=e.ssl??Gd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=a_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oR)throw new se(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$b("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Nb;switch(r.type){case"firstParty":return new Mb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Wd.get(n);r&&(ne("ComponentProvider","Removing Datastore"),Wd.delete(n),r.terminate())})(this),Promise.resolve()}}function PS(t,e,n,r={}){t=ls(t,hl);const s=ds(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(du(`https://${l}`),pu("Firestore",!0)),i.host!==V_&&i.host!==l&&Hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!is(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=yt.MOCK_USER;else{u=og(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new se(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new yt(p)}t._authCredentials=new Ob(new vg(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fl(this.firestore,e,this._query)}}class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(fo(n,tt._jsonSchema))return new tt(e,r||null,new le(je.fromString(n.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:Ye("string",tt._jsonSchemaVersion),referencePath:Ye("string")};class kr extends fl{constructor(e,n,r){super(e,n,Ru(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new le(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function kS(t,e,...n){if(t=Ut(t),Eg("collection","path",e),t instanceof hl){const r=je.fromString(e,...n);return ld(r),new kr(t,null,r)}{if(!(t instanceof tt||t instanceof kr))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return ld(r),new kr(t.firestore,null,r)}}function Mt(t,e,...n){if(t=Ut(t),arguments.length===1&&(e=vu.newId()),Eg("doc","path",e),t instanceof hl){const r=je.fromString(e,...n);return ad(r),new tt(t,null,new le(r))}{if(!(t instanceof tt||t instanceof kr))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return ad(r),new tt(t.firestore,t instanceof kr?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="AsyncQueue";class Yd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new h_(this,"async_queue_retry"),this._c=()=>{const r=tc();r&&ne(Qd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Gn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Xs(e))throw e;ne(Qd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,er("INTERNAL UNHANDLED ERROR: ",Jd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Fu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&de(47125,{Pc:Jd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Jd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class dl extends hl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Yd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yd(e),this._firestoreClient=void 0,await e}}}function DS(t,e){const n=typeof t=="object"?t:_u(),r=typeof t=="string"?t:ya,s=Xa(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rg("firestore");i&&PS(s,...i)}return s}function qu(t){if(t._terminated)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||NS(t),t._firestoreClient}function NS(t){const e=t._freezeSettings(),n=(function(s,i,o,l){return new Zb(s,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,O_(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new bS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const OS=/^__.*__$/;class VS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,n,this.fieldTransforms):new po(e,this.data,n,this.fieldTransforms)}}function x_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{Ac:t})}}class Gu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Gu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Sa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(x_(this.Ac)&&OS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class xS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ll(e)}Cc(e,n,r,s=!1){return new Gu({Ac:e,methodName:n,Dc:r,path:ht.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function MS(t){const e=t._freezeSettings(),n=ll(t._databaseId);return new xS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LS(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);F_("Data must be an object, but it was:",o,r);const l=L_(r,o);let c,u;if(i.merge)c=new sn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=US(e,p,n);if(!o.contains(m))throw new se(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);BS(f,m)||f.push(m)}c=new sn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new VS(new Gt(l),c,u)}class Ku extends Wu{_toFieldTransform(e){return new RA(e.path,new eo)}isEqual(e){return e instanceof Ku}}function M_(t,e){if(U_(t=Ut(t)))return F_("Unsupported field value:",e,t),L_(t,e);if(t instanceof Wu)return(function(r,s){if(!x_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=M_(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:Ia(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ia(s.serializer,i)}}if(r instanceof bn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:e_(s.serializer,r._byteString)};if(r instanceof tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ku(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof An)return(function(o,l){return{mapValue:{fields:{[Pg]:{stringValue:kg},[va]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Su(l.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Eu(r)}`)})(t,e)}function L_(t,e){const n={};return Ig(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,((r,s)=>{const i=M_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function U_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof bn||t instanceof Kt||t instanceof tt||t instanceof Wu||t instanceof An)}function F_(t,e,n){if(!U_(n)||!wg(n)){const r=Eu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function US(t,e,n){if((e=Ut(e))instanceof zu)return e._internalPath;if(typeof e=="string")return B_(t,e);throw Sa("Field path arguments must be of type string or ",t,!1,void 0,n)}const FS=new RegExp("[~\\*/\\[\\]]");function B_(t,e,n){if(e.search(FS)>=0)throw Sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zu(...e.split("."))._internalPath}catch{throw Sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new se(H.INVALID_ARGUMENT,l+t+c)}function BS(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jS extends j_{data(){return super.data()}}function $_(t,e){return typeof e=="string"?B_(t,e):e instanceof zu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class HS{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[va].arrayValue?.values?.map((r=>Ge(r.doubleValue)));return new An(n)}convertGeoPoint(e){return new bn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Ne(o_(r),9688,{name:e});const s=new Xi(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ri{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rs extends j_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=rs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",rs._jsonSchema={type:Ye("string",rs._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Zo extends rs{data(e={}){return super.data(e)}}class xs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Zo(this._firestore,this._userDataWriter,r.key,r,new Ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Zo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Zo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ri(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:zS(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){t=ls(t,tt);const e=ls(t.firestore,dl);return SS(qu(e),t._key).then((n=>KS(e,t,n)))}xs._jsonSchemaVersion="firestore/querySnapshot/1.0",xs._jsonSchema={type:Ye("string",xs._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class H_ extends HS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function WS(t){t=ls(t,fl);const e=ls(t.firestore,dl),n=qu(e),r=new H_(e);return $S(t._query),CS(n,t._query).then((s=>new xs(e,r,t,s)))}function Rn(t,e,n){t=ls(t,tt);const r=ls(t.firestore,dl),s=qS(t.converter,e,n);return GS(r,[LS(MS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kn.none())])}function GS(t,e){return(function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget((async()=>mS(await RS(r),s,i))),i.promise})(qu(t),e)}function KS(t,e,n){const r=n.docs.get(e._key),s=new H_(t);return new rs(t,s,e._key,r,new Ri(n.hasPendingWrites,n.fromCache),e.converter)}function Sn(){return new Ku("serverTimestamp")}(function(e,n=!0){(function(s){Ys=s})(ps),os(new xr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new dl(new Vb(r.getProvider("auth-internal")),new Lb(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),wn(rd,sd,e),wn(rd,sd,"esm2020")})();var QS="firebase",YS="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(QS,YS,"app");function q_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JS=q_,z_=new uo("auth","Firebase",q_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new mu("@firebase/auth");function XS(t,...e){Ca.logLevel<=we.WARN&&Ca.warn(`Auth (${ps}): ${t}`,...e)}function ea(t,...e){Ca.logLevel<=we.ERROR&&Ca.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Yu(t,...e)}function hn(t,...e){return Yu(t,...e)}function Qu(t,e,n){const r={...JS(),[e]:n};return new uo("auth","Firebase",r).create(e,{appName:t.name})}function Qn(t){return Qu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function W_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(t,"argument-error"),Qu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return z_.create(t,...e)}function fe(t,e,...n){if(!t)throw Yu(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function nr(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){return typeof self<"u"&&self.location?.href||""}function ZS(){return Xd()==="http:"||Xd()==="https:"}function Xd(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZS()||hI()||"connection"in navigator)?navigator.onLine:!0}function tC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=lI()||fI()}get(){return eC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class G_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sC=new yo(3e4,6e4);function sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ir(t,e,n,r,s={}){return K_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ho({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return uI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ds(t.emulatorConfig.host)&&(u.credentials="include"),G_.fetch()(await Q_(t,t.config.apiHost,n,l),u)})}async function K_(t,e,n){t._canInitEmulator=!1;const r={...nC,...e};try{const s=new oC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw jo(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qu(t,f,u);Xt(t,f)}}catch(s){if(s instanceof Vn)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function vo(t,e,n,r,s={}){const i=await ir(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Q_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ju(t.config,s):`${t.config.apiScheme}://${s}`;return rC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function iC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),sC.get())})}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=hn(t,e,r);return s.customData._tokenResponse=n,s}function Zd(t){return t!==void 0&&t.enterprise!==void 0}class aC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return iC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lC(t,e){return ir(t,"GET","/v2/recaptchaConfig",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e){return ir(t,"POST","/v1/accounts:delete",e)}async function Pa(t,e){return ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uC(t,e=!1){const n=Ut(t),r=await n.getIdToken(e),s=Xu(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:$i(rc(s.auth_time)),issuedAtTime:$i(rc(s.iat)),expirationTime:$i(rc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function rc(t){return Number(t)*1e3}function Xu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const s=tg(n);return s?JSON.parse(s):(ea("Failed to decode base64 JWT payload"),null)}catch(s){return ea("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ep(t){const e=Xu(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&hC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ka(t){const e=t.auth,n=await t.getIdToken(),r=await ro(t,Pa(e,{idToken:n}));fe(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Y_(s.providerUserInfo):[],o=pC(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new qc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function dC(t){const e=Ut(t);await ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Y_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e){const n=await K_(t,{},async()=>{const r=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Q_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ds(t.emulatorConfig.host)&&(c.credentials="include"),G_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gC(t,e){return ir(t,"POST","/v2/accounts:revokeToken",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ep(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=ep(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await mC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ms;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new fC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uC(this,e)}reload(){return dC(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await ro(this,cC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:O,stsTokenManager:V}=n;fe(p&&V,e,"internal-error");const D=Ms.fromJSON(this.name,V);fe(typeof p=="string",e,"internal-error"),pr(r,e.name),pr(s,e.name),fe(typeof m=="boolean",e,"internal-error"),fe(typeof v=="boolean",e,"internal-error"),pr(i,e.name),pr(o,e.name),pr(l,e.name),pr(c,e.name),pr(u,e.name),pr(f,e.name);const L=new on({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:u,lastLoginAt:f});return O&&Array.isArray(O)&&(L.providerData=O.map(x=>({...x}))),c&&(L._redirectEventId=c),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ms;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ka(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Y_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Ms;l.updateFromIdToken(r);const c=new on({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;function zn(t){nr(t instanceof Function,"Expected a class definition");let e=tp.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tp.set(t,e),e)}/**
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
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=ta("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Pa(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(zn(np),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zn(np);const o=ta(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Pa(e,{idToken:f}).catch(()=>{});if(!m)break;p=await on._fromGetAccountInfoResponse(e,m,f)}else p=on._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ls(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ls(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ty(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ry(e))return"Blackberry";if(sy(e))return"Webos";if(Z_(e))return"Safari";if((e.includes("chrome/")||ey(e))&&!e.includes("edge/"))return"Chrome";if(ny(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function X_(t=At()){return/firefox\//i.test(t)}function Z_(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ey(t=At()){return/crios\//i.test(t)}function ty(t=At()){return/iemobile/i.test(t)}function ny(t=At()){return/android/i.test(t)}function ry(t=At()){return/blackberry/i.test(t)}function sy(t=At()){return/webos/i.test(t)}function Zu(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _C(t=At()){return Zu(t)&&!!window.navigator?.standalone}function yC(){return dI()&&document.documentMode===10}function iy(t=At()){return Zu(t)||ny(t)||sy(t)||ry(t)||/windows phone/i.test(t)||ty(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e=[]){let n;switch(t){case"Browser":n=rp(At());break;case"Worker":n=`${rp(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class vC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function EC(t,e={}){return ir(t,"GET","/v2/passwordPolicy",sr(t,e))}/**
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
 */const wC=6;class TC{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??wC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sp(this),this.idTokenSubscription=new sp(this),this.beforeStateQueue=new vC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Pa(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(xt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ka(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(Qn(this));const n=e?Ut(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EC(this),n=new TC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gC(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&XS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function or(t){return Ut(t)}class sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=wI(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bC(t){pl=t}function ay(t){return pl.loadJS(t)}function AC(){return pl.recaptchaEnterpriseScript}function RC(){return pl.gapiScript}function SC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class CC{constructor(){this.enterprise=new PC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class PC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const kC="recaptcha-enterprise",ly="NO_RECAPTCHA";class DC{constructor(e){this.type=kC,this.auth=or(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{lC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new aC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Zd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ly)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Zd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=AC();c.length!==0&&(c+=l),ay(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function ip(t,e,n,r=!1,s=!1){const i=new DC(t);let o;if(s)o=ly;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Da(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ip(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ip(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t,e){const n=Xa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(is(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function OC(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(zn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function VC(t,e,n){const r=or(t);fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cy(e),{host:o,port:l}=xC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){fe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),fe(is(u,r.config.emulator)&&is(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ds(o)?(du(`${i}//${o}${c}`),pu("Auth",!0)):MC()}function cy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xC(t){const e=cy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:op(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:op(o)}}}function op(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}async function LC(t,e){return ir(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(t,e){return vo(t,"POST","/v1/accounts:signInWithPassword",sr(t,e))}async function FC(t,e){return ir(t,"POST","/v1/accounts:sendOobCode",sr(t,e))}async function BC(t,e){return FC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}async function $C(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends eh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Da(e,n,"signInWithPassword",UC);case"emailLink":return jC(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Da(e,r,"signUpPassword",LC);case"emailLink":return $C(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const HC="http://localhost";class us extends eh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new us(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:HC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zC(t){const e=wi(Ti(t)).link,n=e?wi(Ti(e)).deep_link_id:null,r=wi(Ti(t)).deep_link_id;return(r?wi(Ti(r)).link:null)||r||n||e||t}class th{constructor(e){const n=wi(Ti(e)),r=n.apiKey??null,s=n.oobCode??null,i=qC(n.mode??null);fe(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=zC(e);try{return new th(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.providerId=ei.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=th.parseLink(n);return fe(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}ei.PROVIDER_ID="password";ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends ml{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function WC(t,e){return vo(t,"POST","/v1/accounts:signUp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Na extends Vn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Na.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Na(e,n,r,s)}}function uy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Na._fromErrorAndOperation(t,i,e,r):i})}async function GC(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hs._forOperation(t,"link",r)}/**
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
 */async function KC(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(Qn(r));const s="reauthenticate";try{const i=await ro(t,uy(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Xu(i.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),hs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(t,e,n=!1){if(xt(t.app))return Promise.reject(Qn(t));const r="signIn",s=await uy(t,r,e),i=await hs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function QC(t,e){return hy(or(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fy(t){const e=or(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YC(t,e,n){const r=or(t);await Da(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",BC)}async function JC(t,e,n){if(xt(t.app))return Promise.reject(Qn(t));const r=or(t),o=await Da(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&fy(t),c}),l=await hs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function XC(t,e,n){return xt(t.app)?Promise.reject(Qn(t)):QC(Ut(t),ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fy(t),r})}function ZC(t,e,n,r){return Ut(t).onIdTokenChanged(e,n,r)}function eP(t,e,n){return Ut(t).beforeAuthStateChanged(e,n)}const Oa="__sak";/**
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
 */class dy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=1e3,nP=10;class py extends dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}py.type="LOCAL";const rP=py;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function sP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await sP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=nh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function oP(t){Cn().location.href=t}/**
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
 */function _y(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function aP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lP(){return navigator?.serviceWorker?.controller||null}function cP(){return _y()?self:null}/**
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
 */const yy="firebaseLocalStorageDb",uP=1,Va="firebaseLocalStorage",vy="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _l(t,e){return t.transaction([Va],e?"readwrite":"readonly").objectStore(Va)}function hP(){const t=indexedDB.deleteDatabase(yy);return new wo(t).toPromise()}function zc(){const t=indexedDB.open(yy,uP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Va,{keyPath:vy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Va)?e(r):(r.close(),await hP(),e(await zc()))})})}async function lp(t,e,n){const r=_l(t,!0).put({[vy]:e,value:n});return new wo(r).toPromise()}async function fP(t,e){const n=_l(t,!1).get(e),r=await new wo(n).toPromise();return r===void 0?null:r.value}function cp(t,e){const n=_l(t,!0).delete(e);return new wo(n).toPromise()}const dP=800,pP=3;class Ey{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gl._getInstance(cP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await aP(),!this.activeServiceWorker)return;this.sender=new iP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zc();return await lp(e,Oa,"1"),await cp(e,Oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_l(s,!1).getAll();return new wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ey.type="LOCAL";const mP=Ey;new yo(3e4,6e4);/**
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
 */function rh(t,e){return e?zn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sh extends eh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gP(t){return hy(t.auth,new sh(t),t.bypassAuthState)}function _P(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),KC(n,new sh(t),t.bypassAuthState)}async function yP(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),GC(n,new sh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gP;case"linkViaPopup":case"linkViaRedirect":return yP;case"reauthViaPopup":case"reauthViaRedirect":return _P;default:Xt(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=new yo(2e3,1e4);async function EP(t,e,n){if(xt(t.app))return Promise.reject(hn(t,"operation-not-supported-in-this-environment"));const r=or(t);W_(t,e,ml);const s=rh(r,n);return new Ir(r,"signInViaPopup",e,s).executeNotNull()}async function wP(t,e,n){const r=Ut(t);W_(r.auth,e,ml);const s=rh(r.auth,n);return new Ir(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Ir extends wy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vP.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP="pendingRedirect",na=new Map;class IP extends wy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await bP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bP(t,e){const n=SP(e),r=RP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function AP(t,e){na.set(t._key(),e)}function RP(t){return zn(t._redirectPersistence)}function SP(t){return ta(TP,t.config.apiKey,t.name)}async function CP(t,e,n=!1){if(xt(t.app))return Promise.reject(Qn(t));const r=or(t),s=rh(r,e),o=await new IP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=600*1e3;class kP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Ty(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(hn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PP&&this.cachedEventUids.clear(),this.cachedEventUids.has(up(e))}saveEventToCache(e){this.cachedEventUids.add(up(e)),this.lastProcessedEventTime=Date.now()}}function up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ty({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function DP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ty(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e={}){return ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VP=/^https?/;async function xP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NP(t);for(const n of e)try{if(MP(n))return}catch{}Xt(t,"unauthorized-domain")}function MP(t){const e=Hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VP.test(n))return!1;if(OP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const LP=new yo(3e4,6e4);function hp(){const t=Cn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UP(t){return new Promise((e,n)=>{function r(){hp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hp(),n(hn(t,"network-request-failed"))},timeout:LP.get()})}if(Cn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Cn().gapi?.load)r();else{const s=SC("iframefcb");return Cn()[s]=()=>{gapi.load?r():n(hn(t,"network-request-failed"))},ay(`${RC()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ra=null,e})}let ra=null;function FP(t){return ra=ra||UP(t),ra}/**
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
 */const BP=new yo(5e3,15e3),jP="__/auth/iframe",$P="emulator/auth/iframe",HP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zP(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ju(e,$P):`https://${t.config.authDomain}/${jP}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=qP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ho(r).slice(1)}`}async function WP(t){const e=await FP(t),n=Cn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:zP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),l=Cn().setTimeout(()=>{i(o)},BP.get());function c(){Cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const GP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KP=500,QP=600,YP="_blank",JP="http://localhost";class fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XP(t,e,n,r=KP,s=QP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...GP,width:r.toString(),height:s.toString(),top:i,left:o},u=At().toLowerCase();n&&(l=ey(u)?YP:n),X_(u)&&(e=e||JP,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[v,O])=>`${m}${v}=${O},`,"");if(_C(u)&&l!=="_self")return ZP(e||"",l),new fp(null);const p=window.open(e||"",l,f);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new fp(p)}function ZP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const e0="__/auth/handler",t0="emulator/auth/handler",n0=encodeURIComponent("fac");async function dp(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof ml){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Eo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${n0}=${encodeURIComponent(c)}`:"";return`${r0(t)}?${ho(l).slice(1)}${u}`}function r0({config:t}){return t.emulator?Ju(t,t0):`https://${t.authDomain}/${e0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="webStorageSupport";class s0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gy,this._completeRedirectFn=CP,this._overrideRedirectResult=AP}async _openPopup(e,n,r,s){nr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await dp(e,n,r,Hc(),s);return XP(e,i,nh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await dp(e,n,r,Hc(),s);return oP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WP(e),r=new kP(e);return n.register("authEvent",s=>(fe(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sc,{type:sc},s=>{const i=s?.[0]?.[sc];i!==void 0&&n(!!i),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iy()||Z_()||Zu()}}const i0=s0;var pp="@firebase/auth",mp="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l0(t){os(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(t)},u=new IC(r,s,i,c);return OC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new xr("auth-internal",e=>{const n=or(e.getProvider("auth").getImmediate());return(r=>new o0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(pp,mp,a0(t)),wn(pp,mp,"esm2020")}/**
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
 */const c0=300,u0=ig("authIdTokenMaxAge")||c0;let gp=null;const h0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>u0)return;const s=n?.token;gp!==s&&(gp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yl(t=_u()){const e=Xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NC(t,{popupRedirectResolver:i0,persistence:[mP,rP,gy]}),r=ig("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=h0(i.toString());eP(n,o,()=>o(n.currentUser)),ZC(n,l=>o(l))}}const s=ng("auth");return s&&VC(n,`http://${s}`),n}function f0(){return document.getElementsByTagName("head")?.[0]??document}bC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=hn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",f0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l0("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firebasestorage.googleapis.com",d0="storageBucket",p0=120*1e3,m0=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var On;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(On||(On={}));function ic(t){return"storage/"+t}function g0(){const t="An unknown error occurred, please check the error payload for server response.";return new xn(On.UNKNOWN,t)}function _0(){return new xn(On.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function y0(){return new xn(On.CANCELED,"User canceled the upload/download.")}function v0(t){return new xn(On.INVALID_URL,"Invalid URL '"+t+"'.")}function E0(t){return new xn(On.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function _p(t){return new xn(On.INVALID_ARGUMENT,t)}function by(){return new xn(On.APP_DELETED,"The Firebase app was deleted.")}function w0(t){return new xn(On.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=an.makeFromUrl(e,n)}catch{return new an(e,"")}if(r.path==="")return r;throw E0(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),O={bucket:1,path:3},V=n===Iy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",L=new RegExp(`^https?://${V}/${s}/${D}`,"i"),S=[{regex:l,indices:c,postModify:i},{regex:v,indices:O,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<S.length;C++){const q=S[C],ee=q.regex.exec(e);if(ee){const T=ee[q.indices.bucket];let y=ee[q.indices.path];y||(y=""),r=new an(T,y),q.postModify(r);break}}if(r==null)throw v0(e);return r}}class T0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...D){u||(u=!0,e.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,t(v,c())},D)}function m(){i&&clearTimeout(i)}function v(D,...L){if(u){m();return}if(D){m(),f.call(null,D,...L);return}if(c()||o){m(),f.call(null,D,...L);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,p(S)}let O=!1;function V(D){O||(O=!0,m(),!u&&(s!==null?(D||(l=2),clearTimeout(s),p(0)):D||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,V(!0)},n),V}function b0(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t){return t!==void 0}function yp(t,e,n,r){if(r<e)throw _p(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _p(`Invalid value for '${t}'. Expected ${n} or less.`)}function R0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var xa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xa||(xa={}));/**
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
 */function S0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n,r,s,i,o,l,c,u,f,p,m=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,V)=>{this.resolve_=O,this.reject_=V,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new $o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===xa.NO_ERROR,c=i.getStatus();if(!l||S0(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===xa.ABORT;r(!1,new $o(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new $o(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());A0(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=g0();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?by():y0();o(c)}else{const c=_0();o(c)}};this.canceled_?n(!1,new $o(!1,null,!0)):this.backoffId_=I0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&b0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $o{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function P0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function k0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function D0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function N0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function O0(t,e,n,r,s,i,o=!0,l=!1){const c=R0(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return D0(f,e),P0(f,n),k0(f,i),N0(f,r),new C0(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function x0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ma{constructor(e,n){this._service=e,n instanceof an?this._location=n:this._location=an.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ma(e,n)}get root(){const e=new an(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return x0(this._location.path)}get storage(){return this._service}get parent(){const e=V0(this._location.path);if(e===null)return null;const n=new an(this._location.bucket,e);return new Ma(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw w0(e)}}function vp(t,e){const n=e?.[d0];return n==null?null:an.makeFromBucketSpec(n,t)}function M0(t,e,n,r={}){t.host=`${e}:${n}`;const s=ds(e);s&&(du(`https://${t.host}/b`),pu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:og(i,t.app.options.projectId))}class L0{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Iy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=p0,this._maxUploadRetryTime=m0,this._requests=new Set,s!=null?this._bucket=an.makeFromBucketSpec(s,this._host):this._bucket=vp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=an.makeFromBucketSpec(this._url,e):this._bucket=vp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ma(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new T0(by());{const o=O0(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ep="@firebase/storage",wp="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="storage";function U0(t=_u(),e){t=Ut(t);const r=Xa(t,Ay).getImmediate({identifier:e}),s=rg("storage");return s&&F0(r,...s),r}function F0(t,e,n,r={}){M0(t,e,n,r)}function B0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new L0(n,r,s,e,ps)}function j0(){os(new xr(Ay,B0,"PUBLIC").setMultipleInstances(!0)),wn(Ep,wp,""),wn(Ep,wp,"esm2020")}j0();const $0={apiKey:"AIzaSyA88mxzUStbuMFKNr9Q0OODtHXmpyuqvBY",authDomain:"findyourfit-93e9f.firebaseapp.com",projectId:"findyourfit-93e9f",storageBucket:"findyourfit-93e9f.firebasestorage.app",messagingSenderId:"715690823951",appId:"1:715690823951:web:f3af86677f7d990c55ae7a",measurementId:"G-2GTC9GRYRL"},ih=cg($0),kt=DS(ih),Wn=yl(ih);U0(ih);const Zt=$w("user",{state:()=>({userData:null,moodData:null,journalData:null,therapists:null}),actions:{async fetchUserData(){const t=Wn.currentUser;if(!t)return;const e=Mt(kt,"users",t.uid),n=await ji(e);n.exists()&&(this.userData=n.data(),this.userData.streak||(this.userData.streak={count:1,lastUpdate:Sn()},await Rn(e,this.userData,{merge:!0})),await this.updateStreak(),await this.getMood(),await this.getJournalEntries(),await this.getTherapists())},setUserData(t){this.userData=t},setMoodData(t){this.moodData=t},async updateStreak(){const t=Wn.currentUser;if(!t||!this.userData?.streak)return;const{count:e,lastUpdate:n}=this.userData.streak;if(!n||typeof n.toDate!="function"){this.userData.streak={count:1,lastUpdate:Sn()},await Rn(Mt(kt,"users",t.uid),this.userData,{merge:!0});return}const r=n.toDate(),s=new Date;this.isSameDay(r,s)||(this.isYesterday(r,s)?this.userData.streak.count=e+1:this.userData.streak.count=1,this.userData.streak.lastUpdate=Sn(),await Rn(Mt(kt,"users",t.uid),this.userData,{merge:!0}))},isSameDay(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()},isYesterday(t){const e=t,n=new Date,r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate())-r)/(1e3*60*60*24)===1},async getMood(){const t=Wn.currentUser;if(!t)return;const e=Mt(kt,"mood",t.uid),n=await ji(e);n.exists()&&(this.moodData=n.data())},async getJournalEntries(){const t=Wn.currentUser;if(!t)return;const e=Mt(kt,"journals",t.uid),n=await ji(e);if(n.exists()){const r=n.data(),s=Object.entries(r).sort((i,o)=>Number(o[0])-Number(i[0])).map(([i,o])=>({id:i,...o}));this.journalData=s}},async getTherapists(){const t=[];return(await WS(kS(kt,"therapists"))).forEach(n=>{t.push({id:n.id,...n.data()})}),this.therapists=t,this.therapists}}}),en=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},H0={class:"modal_holder"},q0={class:"modal_heading_holder inter font_size_xs"},z0=["innerHTML"],W0={__name:"errorModal",props:{errorMessage:{type:String,required:!0}},setup(t){return(e,n)=>(J(),ie("div",{class:"modal_overlay",onClick:n[1]||(n[1]=hu(r=>e.$emit("close"),["self"])),role:"dialog","aria-modal":"true"},[P("div",H0,[P("div",q0,[n[2]||(n[2]=P("span",null," Attention!",-1)),P("button",{class:"modal_close_button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×")]),P("div",{class:"modal_content_holder inter font_size_xs",innerHTML:t.errorMessage},null,8,z0)])]))}},ti=en(W0,[["__scopeId","data-v-306a9af2"]]),G0={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},K0={class:"modal_holder"},Q0={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},Y0={class:"modal_content_holder inter font_size_xs"},J0=["value"],X0=["value"],Z0={__name:"userInfoModal",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),r=t,s=Z([]),i=Z("");$r(async()=>{const S=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();s.value=S.sort((C,q)=>C.name.common.localeCompare(q.name.common))});const o=Ya(),l=Z(""),c=Z(""),u=Z(""),f=Z(""),p=Z(!1),m=Z([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),v=Z("");function O(x){return/^\d{10}$/.test(x)}function V(x){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(x))return!1;const[C,q,ee]=x.split("/").map(Number),T=new Date(C,q-1,ee);return T.getFullYear()===C&&T.getMonth()===q-1&&T.getDate()===ee}const D=async()=>{if(yl().currentUser,f.value="",p.value=!1,!O(c.value)){f.value="Contact Number must be a valid 10-digit number.",p.value=!0;return}if(!V(u.value)){f.value="Date of Birth must be in the format yyyy/mm/dd.",p.value=!0;return}const S={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:r.globalUser.email,country:i.value,gender:v.value},streak:{count:parseInt(1),lastUpdate:Sn()},loginDate:new Date().toISOString(),uid:r.globalUser.uid};await Rn(Mt(kt,"users",r.globalUser.uid),S),n.setUserData(S),o.push({name:"Navigation"})},L=()=>{p.value=!1,f.value=""};return(x,S)=>(J(),ie("div",G0,[P("div",K0,[P("div",Q0,[S[6]||(S[6]=P("span",{style:{width:"80%"}},"User Information",-1)),P("button",{class:"modal_close_button",onClick:S[0]||(S[0]=C=>x.$emit("close"))},"×")]),P("div",Y0,[S[10]||(S[10]=P("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),P("form",{class:"modal_form_holder",onSubmit:hu(D,["prevent"])},[He(P("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":S[1]||(S[1]=C=>l.value=C),required:""},null,512),[[It,l.value]]),He(P("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":S[2]||(S[2]=C=>c.value=C),required:""},null,512),[[It,c.value]]),He(P("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":S[3]||(S[3]=C=>u.value=C),required:""},null,512),[[It,u.value]]),He(P("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":S[4]||(S[4]=C=>v.value=C)},[S[7]||(S[7]=P("option",{disabled:"",value:""},"Please select one",-1)),(J(!0),ie(Pe,null,Tt(m.value,C=>(J(),ie("option",{key:C.value,value:C.value},Se(C.text),9,J0))),128))],512),[[Rr,v.value]]),He(P("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":S[5]||(S[5]=C=>i.value=C),id:"country"},[S[8]||(S[8]=P("option",{disabled:"",value:""},"Select your country",-1)),(J(!0),ie(Pe,null,Tt(s.value,C=>(J(),ie("option",{key:C.cca3,value:C.cca3},Se(C.name.common),9,X0))),128))],512),[[Rr,i.value]]),S[9]||(S[9]=P("button",{type:"submit",class:"modal_button inter font_size_xs"}," Confirm ",-1))],32)])]),p.value?(J(),Dt(ti,{key:0,errorMessage:f.value,onClose:L},null,8,["errorMessage"])):Lt("",!0)]))}},ek=en(Z0,[["__scopeId","data-v-d9949924"]]),tk={class:"login_page"},nk={class:"login_page_content"},rk={class:"login_page_form"},sk={class:"login_page_form_fields"},ik=["type"],ok={class:"show_password_toggle inter font_size_xs"},ak={class:"login_page_social_login"},lk={class:"login_page_toggle_register inter font_size_xs"},ck={__name:"loginRegister",setup(t){const e=Zt(),n=Ya(),r=Z("password"),s=Z(null),i=Z(""),o=Z(""),l=Z("login"),c=Z(!1),u=Z(""),f=Z(!1),p=new Hn;p.addScope("https://www.googleapis.com/auth/contacts.readonly");const m=C=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(C),v=()=>{r.value=r.value==="password"?"text":"password"},O=()=>{l.value=l.value==="login"?"register":"login"},V=()=>{if(i.value===""){u.value="Please enter your email to reset your password!",c.value=!0;return}YC(Wn,i.value).then(()=>{u.value="An email has been sent to reset your password!",c.value=!0})},D=async()=>{try{const ee=(await EP(Wn,p)).user;if(ee){if(!ee)return;const T=Mt(kt,"users",ee.uid),y=await ji(T);if(y.exists()){var C=y.data();C&&await L(C)}}n.push({name:"Navigation"})}catch(q){console.log(q.message),u.value="Google login failed!",c.value=!0}},L=async C=>{if(C.streak){const q=C.streak;x(q.lastUpdate)?C.streak.count=C.streak.count+1:C.streak.count=1,C.streak.lastUpdate=Sn(),C.loginDate=Sn(),await Rn(Mt(kt,"users",C.uid),C)}},x=C=>{const q=C.toDate(),ee=new Date,T=new Date(ee.getFullYear(),ee.getMonth(),ee.getDate()),y=new Date(T);return y.setDate(T.getDate()-1),q>=y&&q<T},S=async()=>{try{if(u.value="",c.value=!1,!m(i.value)){u.value="Invalid email format!",c.value=!0;return}if(l.value==="register"){const ee=(await JC(Wn,i.value,o.value)).user;try{await wP(ee,p)}catch(T){console.warn("Google link failed (optional):",T)}s.value={uid:ee.uid,email:ee.email},f.value=!0}else{const ee=(await XC(Wn,i.value,o.value)).user,T=Mt(kt,"users",ee.uid),y=await ji(T);if(y.exists()){var C=y.data();C&&(await L(C),e.setUserData(C),n.push({name:"Navigation"}))}}}catch(q){q.code==="auth/invalid-credential"?u.value="Invalid login details.":q.code==="auth/email-already-in-use"?u.value="Email already in use.":u.value="An unexpected error occurred.",c.value=!0}};return(C,q)=>(J(),ie(Pe,null,[P("div",tk,[P("div",nk,[q[5]||(q[5]=P("div",{class:"login_background_holder"},null,-1)),q[6]||(q[6]=P("div",{class:"login_page_intro inter font_size_xs"},[P("div",{class:"login_page_intro_text"},[P("div",{class:"font_size_m licorice_regular"},"Welcome to Finding Your Fit"),P("br"),P("br"),Wt(" A space designed to help you understand yourself better, build emotional balance, and grow into the life that fits you best. Take a moment to reconnect, reflect, and start working toward your goals — one step at a time. ")])],-1)),P("div",rk,[P("form",sk,[He(P("input",{class:"login_page_input inter font_size_xs",type:"text",placeholder:"Email","onUpdate:modelValue":q[0]||(q[0]=ee=>i.value=ee)},null,512),[[It,i.value]]),He(P("input",{class:"login_page_password inter font_size_xs",type:r.value,placeholder:"Password","onUpdate:modelValue":q[1]||(q[1]=ee=>o.value=ee)},null,8,ik),[[Sw,o.value]]),P("div",ok,[P("label",null,[P("input",{type:"checkbox",onChange:v},null,32),q[4]||(q[4]=Wt(" Show Password ",-1))])])]),P("button",{class:"login_page_button inter font_size_xs",onClick:S},Se(l.value==="login"?"Login":"Register"),1),P("div",{class:"login_page_forgot_password inter font_size_xs",onClick:V},Se(l.value==="login"?"Forgot Password?":""),1)]),P("div",ak,[P("div",{class:"login_page_social_button",onClick:q[2]||(q[2]=ee=>D())})]),P("div",lk,[P("u",{onClick:O},Se(l.value==="login"?"Register":"Login"),1)])])]),c.value?(J(),Dt(ti,{key:0,errorMessage:u.value,onClose:q[3]||(q[3]=ee=>c.value=!1)},null,8,["errorMessage"])):Lt("",!0),f.value&&s.value?(J(),Dt(ek,{key:1,globalUser:s.value},null,8,["globalUser"])):Lt("",!0)],64))}},uk=en(ck,[["__scopeId","data-v-f4d6eaa2"]]),Tp=[{content:"Success is not final, failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},{content:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{content:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"You are never too old to set another goal or to dream a new dream.",author:"C.S. Lewis"},{content:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"Don’t watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"The only limit to our realization of tomorrow is our doubts of today.",author:"Franklin D. Roosevelt"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Don’t wait. The time will never be just right.",author:"Napoleon Hill"},{content:"Believe in yourself and all that you are.",author:"Christian D. Larson"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Success is what comes after you stop making excuses.",author:"Luis Galarza"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Do what you love, love what you do.",author:"Unknown"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Motivation is what gets you started. Habit is what keeps you going.",author:"Jim Ryun"},{content:"Don’t let fear decide your future.",author:"Shalane Flanagan"},{content:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"Do one thing every day that scares you.",author:"Eleanor Roosevelt"},{content:"The best way to predict the future is to invent it.",author:"Alan Kay"},{content:"Difficult roads often lead to beautiful destinations.",author:"Unknown"},{content:"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",author:"Chantal Sutherland"},{content:"If it doesn’t challenge you, it won’t change you.",author:"Fred DeVito"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"The expert in anything was once a beginner.",author:"Helen Hayes"},{content:"Don’t count the days, make the days count.",author:"Muhammad Ali"},{content:"The harder the battle, the sweeter the victory.",author:"Les Brown"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"You don’t have to see the whole staircase, just take the first step.",author:"Martin Luther King Jr."},{content:"Small daily improvements over time lead to stunning results.",author:"Robin Sharma"},{content:"Don’t let what you cannot do interfere with what you can do.",author:"John Wooden"},{content:"The only limit is the one you set yourself.",author:"Felix Baumgartner"},{content:"Great things are done by a series of small things brought together.",author:"Vincent Van Gogh"},{content:"Your dream doesn’t have an expiration date. Take a deep breath and try again.",author:"KT Witten"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"You are braver than you believe, stronger than you seem, and smarter than you think.",author:"A.A. Milne"},{content:"Work until you no longer have to introduce yourself.",author:"Unknown"},{content:"The best revenge is massive success.",author:"Frank Sinatra"},{content:"Your only limit is your mind.",author:"Unknown"},{content:"Stop being afraid of what could go wrong and start being excited about what could go right.",author:"Unknown"},{content:"Do not wait to strike till the iron is hot; but make it hot by striking.",author:"William Butler Yeats"},{content:"Don’t let perfectionism get in the way of progress.",author:"Unknown"},{content:"Great minds discuss ideas; average minds discuss events; small minds discuss people.",author:"Eleanor Roosevelt"},{content:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Do what you can, with what you have, where you are.",author:"Theodore Roosevelt"},{content:"Success is not about the destination, it’s about the journey.",author:"Zig Ziglar"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"A year from now you may wish you had started today.",author:"Karen Lamb"},{content:"Don’t stop until you’re proud.",author:"Unknown"},{content:"Dream big. Start small. Act now.",author:"Robin Sharma"},{content:"Hard work beats talent when talent doesn’t work hard.",author:"Tim Notke"},{content:"Stay positive, work hard, make it happen.",author:"Unknown"},{content:"Your time is limited, don’t waste it living someone else’s life.",author:"Steve Jobs"},{content:"The difference between ordinary and extraordinary is that little extra.",author:"Jimmy Johnson"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Success doesn’t come to you, you go to it.",author:"Marva Collins"},{content:"A river cuts through rock not because of its power, but because of its persistence.",author:"Jim Watkins"},{content:"Discipline is the bridge between goals and accomplishment.",author:"Jim Rohn"},{content:"Do what is right, not what is easy nor what is popular.",author:"Unknown"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Don’t limit yourself. Many people limit themselves to what they think they can do.",author:"Mary Kay Ash"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Success is the progressive realization of a worthy goal or ideal.",author:"Earl Nightingale"},{content:"To succeed in life, you need two things: ignorance and confidence.",author:"Mark Twain"},{content:"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",author:"Mary Anne Radmacher"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"Don’t let small minds convince you that your dreams are too big.",author:"Unknown"},{content:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",author:"Pelé"},{content:"The best way out is always through.",author:"Robert Frost"},{content:"Failure is simply the opportunity to begin again, this time more intelligently.",author:"Henry Ford"},{content:"Don’t wish it were easier. Wish you were better.",author:"Jim Rohn"},{content:"The mind is everything. What you think you become.",author:"Buddha"},{content:"When you feel like quitting, remember why you started.",author:"Unknown"},{content:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},{content:"Don’t be afraid to give up the good to go for the great.",author:"John D. Rockefeller"},{content:"Do not be embarrassed by your failures, learn from them and start again.",author:"Richard Branson"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Small deeds done are better than great deeds planned.",author:"Peter Marshall"},{content:"Act as if what you do makes a difference. It does.",author:"William James"},{content:"Success is not how high you have climbed, but how you make a positive difference to the world.",author:"Roy T. Bennett"},{content:"Your future is created by what you do today, not tomorrow.",author:"Robert Kiyosaki"},{content:"The secret of success is to do the common thing uncommonly well.",author:"John D. Rockefeller Jr."},{content:"What seems to us as bitter trials are often blessings in disguise.",author:"Oscar Wilde"},{content:"The only place where success comes before work is in the dictionary.",author:"Vidal Sassoon"},{content:"Happiness is not something ready-made. It comes from your own actions.",author:"Dalai Lama"},{content:"Opportunities multiply as they are seized.",author:"Sun Tzu"},{content:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",author:"William James"},{content:"Don’t be afraid to start over. It’s a chance to build something better.",author:"Unknown"},{content:"Success isn’t always about greatness. It’s about consistency.",author:"Dwayne Johnson"},{content:"You are confined only by the walls you build yourself.",author:"Andrew Murphy"},{content:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t let the fear of losing be greater than the excitement of winning.",author:"Robert Kiyosaki"},{content:"You can’t cross the sea merely by standing and staring at the water.",author:"Rabindranath Tagore"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"The journey of a thousand miles begins with one step.",author:"Lao Tzu"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Jerry Dunn"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"It’s not whether you get knocked down, it’s whether you get up.",author:"Vince Lombardi"},{content:"Everything you can imagine is real.",author:"Pablo Picasso"},{content:"Success is not in never falling, but in rising every time we fall.",author:"Confucius"},{content:"Don’t wait for opportunity. Create it.",author:"George Bernard Shaw"},{content:"The best dreams happen when you’re awake.",author:"Cherie Gilderbloom"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"What you do today can improve all your tomorrows.",author:"Ralph Marston"}];function hk(){const t=Math.floor(Math.random()*Tp.length);return Tp[t]}const fk="/assets/my_therapist-BGpDoE1u.png",dk="/assets/my_journal-ByAOnFF2.png",pk="/assets/journal-BcWmOkN8.png",mk="/assets/my_courses-DAreBNF0.png",gk="/assets/therapist-sZYqYBaF.png",_k="/assets/mood_track-DScXBvTj.png",yk={class:"home_container"},vk={class:"greeting_section licorice_regular font_size_m"},Ek={class:"checkin_section"},wk={class:"feeling_section"},Tk={class:"inspiration_section"},Ik={class:"quote_text inter font_size_xxs"},bk={class:"offer_section"},Ak={class:"offer_list"},Rk={class:"offer_icon_wrapper"},Sk={class:"offer_content_wrapper"},Ck={class:"offer_title inter font_size_xxs"},Pk={class:"offer_description inter font_size_xxs"},kk={__name:"home",setup(t){const e=Zt(),n=Z({content:"",author:""});Z(!1);const r=Be(()=>e.userData?.personalInfo.name||"");Be(()=>[{label:"My Therapist",url:fk},{label:"Journal Entry",url:dk},{label:"Explore Courses",url:mk}]);const s=Be(()=>[{label:"Expert support at your fingertips",content:"Find and connect with qualified therapists specializing in various areas.",icon:gk},{label:"Personalized mood tracking",content:"Log your daily mood to visualize trends, identify triggers, and gain insights.",icon:_k},{label:"Journaling",content:"A private space for self-reflection, prompts, and gain thoughts.",icon:pk}]);$r(()=>{console.log("Home mounted"),n.value=hk()});const i=()=>{const o=new Date().getHours();return o<12?"morning":o<18?"afternoon":"evening"};return(o,l)=>(J(),ie("div",yk,[P("div",vk," Good "+Se(i())+", "+Se(r.value)+"! ",1),P("div",Ek,[P("div",wk,[l[1]||(l[1]=P("div",{class:"feeling_heading inter font_size_xs"},[P("b",null,"How are you feeling today?")],-1)),l[2]||(l[2]=P("div",{class:"feeling_image"},null,-1)),P("div",{class:"checkin_button inter font_size_xxs",onClick:l[0]||(l[0]=c=>o.$emit("setPage","mood"))}," Check in now ")])]),P("div",Tk,[l[3]||(l[3]=P("div",{class:"inspiration_heading inter font_size_xxs"},[P("b",null,"Inspiration")],-1)),P("div",Ik,Se(n.value.content),1)]),P("div",bk,[l[4]||(l[4]=P("div",{class:"offer_heading inter font_size_xs"},[P("b",null,"What we offer")],-1)),P("div",Ak,[(J(!0),ie(Pe,null,Tt(s.value,c=>(J(),ie("div",{class:"offer_card",key:c.label},[P("div",Rk,[P("div",{class:"feature_icon",style:Dr({backgroundImage:`url(${c.icon})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4)]),P("div",Sk,[P("div",Ck,[P("b",null,Se(c.label),1)]),P("div",Pk,Se(c.content),1)])]))),128))])])]))}},Ry=en(kk,[["__scopeId","data-v-ff4796d7"]]),Dk={class:"loading_page_holder"},Nk={__name:"loadingPage",setup(t){const e=Zt(),n=Ya();return $r(async()=>{e.userData?e.userData.uid?n.push({name:"Navigation"}):n.push({name:"Login"}):n.push({name:"Login"})}),(r,s)=>(J(),ie("div",Dk))}},Ok=en(Nk,[["__scopeId","data-v-bc11f8f1"]]),Vk={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},xk={class:"modal_holder"},Mk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},Lk={class:"modal_content_holder inter font_size_xs"},Uk=["value"],Fk=["value"],Bk={__name:"profileEdit",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),r=e,s=t,i=Z([]),o=Z(""),l=Z(""),c=Z(""),u=Z(""),f=Z([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),p=Z(""),m=Z(""),v=Z(!1);$r(async()=>{const S=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();i.value=S.sort((C,q)=>C.name.common.localeCompare(q.name.common))});function O(x){return/^\d{10}$/.test(x)}function V(x){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(x))return!1;const[C,q,ee]=x.split("/").map(Number),T=new Date(C,q-1,ee);return T.getFullYear()===C&&T.getMonth()===q-1&&T.getDate()===ee}const D=async()=>{const S=yl().currentUser;if(m.value="",v.value=!1,!O(c.value)){m.value="Contact Number must be a valid 10-digit number.",v.value=!0;return}if(!V(u.value)){m.value="Date of Birth must be in the format yyyy/mm/dd.",v.value=!0;return}const C=s.globalUser.userData,q={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:C.email||S.email,gender:p.value,country:o.value},uid:C.uid||S.uid,loginDate:C.loginDate,streak:{count:C.streak.count,lastUpdate:C.streak.lastUpdate},profileEdited:Sn()};n.setUserData(q),await Rn(Mt(kt,"users",C.uid||S.uid),q),r("close")},L=()=>{v.value=!1,m.value=""};return(x,S)=>(J(),ie("div",Vk,[P("div",xk,[P("div",Mk,[S[6]||(S[6]=P("span",{style:{width:"80%"}},"Edit User Information",-1)),P("button",{class:"modal_close_button",onClick:S[0]||(S[0]=C=>x.$emit("close"))},"×")]),P("div",Lk,[S[10]||(S[10]=P("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),P("form",{class:"modal_form_holder",onSubmit:hu(D,["prevent"])},[He(P("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":S[1]||(S[1]=C=>l.value=C),required:""},null,512),[[It,l.value]]),He(P("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":S[2]||(S[2]=C=>c.value=C),required:""},null,512),[[It,c.value]]),He(P("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":S[3]||(S[3]=C=>u.value=C),required:""},null,512),[[It,u.value]]),He(P("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":S[4]||(S[4]=C=>p.value=C)},[S[7]||(S[7]=P("option",{disabled:"",value:""},"Please select one",-1)),(J(!0),ie(Pe,null,Tt(f.value,C=>(J(),ie("option",{key:C.value,value:C.value},Se(C.text),9,Uk))),128))],512),[[Rr,p.value]]),He(P("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":S[5]||(S[5]=C=>o.value=C),id:"country"},[S[8]||(S[8]=P("option",{disabled:"",value:""},"Select your country",-1)),(J(!0),ie(Pe,null,Tt(i.value,C=>(J(),ie("option",{key:C.cca3,value:C.cca3},Se(C.name.common),9,Fk))),128))],512),[[Rr,o.value]]),S[9]||(S[9]=P("button",{type:"submit",class:"modal_button inter font_size_xs"},"Confirm",-1))],32)])]),v.value?(J(),Dt(ti,{key:0,errorMessage:m.value,onClose:L},null,8,["errorMessage"])):Lt("",!0)]))}},Ip=en(Bk,[["__scopeId","data-v-6e033621"]]),Sy="/assets/brown_man-DU8HBBmE.png",Cy="/assets/blonde_man-Br_WNAu2.png",Py="/assets/ginger_man-D_7vVZja.png",ky="/assets/black_man-DZoPS0-N.png",Dy="/assets/brunette_woman-C5YdWLXO.png",Ny="/assets/blonde_woman-IP-2iqnM.png",Oy="/assets/ginger_woman-5AupqmXa.png",Vy="/assets/black_woman-QP95zNq-.png",Wc="/assets/none-BOBk4slU.png",jk={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},$k={class:"modal_holder"},Hk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},qk={class:"modal_content_holder inter font_size_xs"},zk=["onClick"],Wk=["onClick"],Gk={__name:"profileAvatar",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),r=Be(()=>[{label:"Brown Hair",url:Sy,ref:"brown_man"},{label:"Blonde Hair",url:Cy,ref:"blonde_man"},{label:"Ginger Hair",url:Py,ref:"ginger_man"},{label:"Black Hair",url:ky,ref:"black_man"},{label:"Brown Hair Woman",url:Dy,ref:"brown_woman"},{label:"Blonde Hair Woman",url:Ny,ref:"blonde_woman"},{label:"Ginger Hair Woman",url:Oy,ref:"ginger_woman"},{label:"Black Hair Woman",url:Vy,ref:"black_woman"},{label:"None",url:Wc,ref:"none"}]),s=e,i=t,o=Z("none"),l=u=>{o.value=u},c=async()=>{const u=yl(),f=i.globalUser.userData,p=u.currentUser,m={profileAvatar:o.value,profileEdited:Sn()};await Rn(Mt(kt,"users",f.uid?f.uid:p.uid),m,{merge:!0}),n.userData.profileAvatar=o.value,s("close")};return(u,f)=>(J(),ie("div",jk,[P("div",$k,[P("div",Hk,[f[2]||(f[2]=P("span",{style:{width:"80%"}},"Profile Avatar",-1)),P("button",{class:"modal_close_button",onClick:f[0]||(f[0]=p=>u.$emit("close"))},"×")]),P("div",qk,[(J(!0),ie(Pe,null,Tt(r.value,p=>(J(),ie("div",{class:"modal_avatars_holder",key:p.ref},[p.ref===o.value?(J(),ie("div",{key:0,class:"modal_avatar_selected",onClick:m=>l(p.ref),style:Dr({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,12,zk)):(J(),ie("div",{key:1,class:"modal_avatar",onClick:m=>l(p.ref),style:Dr({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,12,Wk))]))),128))]),P("button",{type:"submit",class:"modal_button inter font_size_xs",onClick:f[1]||(f[1]=p=>c())}," Confirm ")])]))}},bp=en(Gk,[["__scopeId","data-v-fdbe87ea"]]),Kk={class:"profile_container"},Qk={class:"profile_header"},Yk={class:"profile_edit_btn"},Jk={class:"profile_info"},Xk={class:"profile_avatar_wrapper"},Zk={class:"pfp_edit_button"},e1={class:"profile_user_details font_size_s inter"},t1={class:"font_size_xxs"},n1={class:"profile_stats"},r1={class:"profile_stat_top inter font_size_xs"},s1={key:0,class:"profile_stat_value"},i1={key:0},o1={key:1},a1={key:1,class:"profile_stat_value"},l1={class:"profile_stat_icon"},c1={class:"profile_stat_label inter font_size_xs"},u1={__name:"profile",setup(t){const e=Zt(),n=Z(!1),r=Z(!1),s=Z(!1),i=Z(null),o={brown_man:Sy,blonde_man:Cy,ginger_man:Py,black_man:ky,brown_woman:Dy,blonde_woman:Ny,ginger_woman:Oy,black_woman:Vy,none:Wc},l=Be(()=>{const L=e.userData?.profileAvatar||"none";return o[L]||Wc}),c=Be(()=>e.userData?.personalInfo.name||""),u=Be(()=>e.userData?.personalInfo.email||""),f=Be(()=>e.userData?.streak?.count||0),p=Be(()=>e.journalData.length||0);Be(()=>e.userData?.personalInfo.courses?.length||0);const m=Be(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),v=Z([{label:"App Streak",value:f.value,icon:"fa fa-signal"},{label:"Journal Entries",value:p.value,icon:"fa fa-book"},{label:"Mood Trends",value:"",icon:"fas fa-chart-line"}]);$r(()=>{i.value=e.userData;const L=new Date().toISOString().split("T")[0];if(!e.moodData||!e.moodData[L])return;n.value=!0;const x=e.moodData[L];for(const S of m.value)if(S.ref===x.mood){v.value[2].value=S.icon;break}});const O=()=>{r.value=!0},V=()=>{s.value=!0},D=L=>{console.log("Image selected:",L.target.files[0])};return(L,x)=>(J(),ie(Pe,null,[P("div",Kk,[P("div",Qk,[x[4]||(x[4]=P("div",{class:"profile_title font_size_s inter"},null,-1)),P("div",Yk,[P("i",{class:"fas fa-edit",onClick:x[0]||(x[0]=S=>O())})])]),P("div",Jk,[P("div",Xk,[P("div",{class:"profile_avatar",style:Dr({backgroundImage:`url(${l.value})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,4)]),P("div",Zk,[P("i",{class:"fas fa-edit",onClick:x[1]||(x[1]=S=>V())}),P("input",{type:"file",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:D},null,544)]),P("div",e1,[Wt(Se(c.value)+" ",1),P("span",t1,Se(u.value),1)])]),P("div",n1,[(J(!0),ie(Pe,null,Tt(v.value,(S,C)=>(J(),ie("div",{class:"profile_stat_card",key:C},[P("div",r1,[S.label==="Mood Trends"?(J(),ie("div",s1,[n.value?(J(),ie("div",i1,[P("i",{class:Yn(S.value),style:{"font-size":"1.5rem"}},null,2),x[5]||(x[5]=Wt("  ",-1))])):(J(),ie("div",o1,[...x[6]||(x[6]=[P("i",{class:"far fa-meh",style:{"font-size":"1.5rem"}},null,-1),Wt("  ",-1)])]))])):(J(),ie("div",a1,Se(S.value),1)),P("div",l1,[P("i",{class:Yn(S.icon),style:{color:"#87bfba"}},null,2)])]),P("div",c1,Se(S.label),1)]))),128))])]),r.value?(J(),Dt(Ip,{key:0,onClose:x[2]||(x[2]=S=>r.value=!1),globalUser:cn(e),viewPoint:Ip},null,8,["globalUser"])):Lt("",!0),s.value?(J(),Dt(bp,{key:1,onClose:x[3]||(x[3]=S=>s.value=!1),globalUser:cn(e),viewPoint:bp},null,8,["globalUser"])):Lt("",!0)],64))}},xy=en(u1,[["__scopeId","data-v-10bbea7b"]]),h1={class:"journal_selection_holder inter font_size_xs"},f1=["onClick"],d1={key:0,class:"journal_entry_holder"},p1={class:"journal_entry_date_holder inter font_size_xs"},m1={style:{width:"90%"}},g1={class:"journal_entry_content_holder"},_1={key:1},y1={key:0,class:"journal_list_holder"},v1={class:"inter font_size_sm",style:{"font-weight":"bold","margin-bottom":"0.5rem"}},E1={class:"inter font_size_xs",style:{"margin-bottom":"0.5rem"}},w1={class:"inter font_size_xxs",style:{color:"#808080"}},T1={__name:"journal",emits:["close"],setup(t,{emit:e}){const n=e,r=Zt(),s=Z("journalEntry"),i=[{key:"journalEntry",label:"New Journal Entry",cornerClass:"right-rounded"},{key:"journalList",label:"Journal List",cornerClass:"left-rounded"}],o=Z(new Date().toDateString()),l=Z(new Date().toLocaleTimeString()),c=V=>{s.value=V,o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString()},u=()=>{m.value=!1,v.value=""},f=Z(""),p=Z(""),m=Z(!1),v=Z(""),O=async()=>{if(!f.value){m.value=!0,v.value="Please give a journal title.";return}if(!p.value){m.value=!0,v.value="Please give journal content.";return}const D={[Date.now()]:{journalEntryHeading:f.value,journalEntryContent:p.value,journalEntryLogged:Sn()}};try{await Rn(Mt(kt,"journals",r.userData.uid),D,{merge:!0}),m.value=!0,v.value="Your journal entry has been logged.",f.value="",p.value="",o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString(),n("close")}catch(L){console.error("Failed to save journal:",L),m.value=!0,v.value="Failed to save journal. Please try again."}};return(V,D)=>(J(),ie(Pe,null,[D[5]||(D[5]=P("div",{class:"journal_header_holder inter font_size_xs"}," My Journal ",-1)),P("div",h1,[(J(),ie(Pe,null,Tt(i,L=>P("div",{key:L.key,class:Yn(["journal_selection",{active:s.value===L.key,[L.cornerClass]:!0}]),onClick:x=>c(L.key)},Se(L.label),11,f1)),64))]),s.value=="journalEntry"?(J(),ie("div",d1,[P("div",p1,[P("div",m1,[Wt(Se(o.value)+" ",1),D[3]||(D[3]=P("br",null,null,-1)),Wt(" "+Se(l.value),1)])]),P("div",g1,[He(P("input",{placeholder:"Give us a title.",style:{width:"90%",height:"5%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":D[0]||(D[0]=L=>f.value=L)},null,512),[[It,f.value]]),He(P("textarea",{placeholder:"What's weighing on your mind today? Or what's a small win?",style:{width:"90%",height:"80%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":D[1]||(D[1]=L=>p.value=L)},null,512),[[It,p.value]])]),D[4]||(D[4]=P("br",null,null,-1)),P("div",{class:"save_button inter font_size_xxs",onClick:D[2]||(D[2]=L=>O())},"Save"),m.value?(J(),Dt(ti,{key:0,errorMessage:v.value,onClose:u},null,8,["errorMessage"])):Lt("",!0)])):(J(),ie("div",_1,[cn(r).journalData?(J(),ie("div",y1,[(J(!0),ie(Pe,null,Tt(cn(r).journalData,(L,x)=>(J(),ie("div",{key:x,style:{width:"90%","box-shadow":"0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4)","margin-bottom":"1rem","border-radius":"1rem",padding:"0.5rem"}},[P("div",v1,Se(L.journalEntryHeading),1),P("div",E1,Se(L.journalEntryContent),1),P("div",w1,"Logged on: "+Se(new Date(L.journalEntryLogged.seconds*1e3).toLocaleString()),1)]))),128))])):Lt("",!0)]))],64))}},My=en(T1,[["__scopeId","data-v-b89d33a8"]]),I1={class:"mood_tracker_holder"},b1={class:"mood_icons_holder"},A1=["onClick"],R1=["onClick"],S1={class:"influence_holder",style:{height:"25rem"}},C1={class:"influence_items_holder"},P1=["value"],k1={class:"influence_holder"},D1={__name:"mood",emits:["close"],setup(t,{emit:e}){const n=Zt(),r=e,s=Be(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),i=Be(()=>[{label:"Sleep Quality",ref:"sleep_quality"},{label:"Nutrition",ref:"nutrition"},{label:"Physical Activity",ref:"physical_activity"},{label:"Social Connection",ref:"social_connection"},{label:"Mindset",ref:"mindset"},{label:"Environment",ref:"environment"},{label:"None",ref:"none"}]),o=Z(!1),l=Z(""),c=Z([]),u=Z(""),f=Z("neutral"),p=O=>{f.value=O},m=async()=>{if(c.value.length===0){o.value=!0,l.value="Please select an influence.";return}const V={[new Date().toISOString().split("T")[0]]:{mood:f.value,influences:c.value,optional_notes:u.value,mood_logged:Sn()}};await Rn(Mt(kt,"mood",n.userData.uid),V,{merge:!0}),o.value=!0,l.value="Thank you for logging your mood. It will be taken into consideration.",n.setMoodData(V),r("close")},v=()=>{o.value=!1,l.value=""};return(O,V)=>(J(),ie(Pe,null,[P("div",I1,[V[6]||(V[6]=P("div",{class:"mood_heading_holder inter font_size_xs"},"How am I feeling today?",-1)),P("div",b1,[(J(!0),ie(Pe,null,Tt(s.value,D=>(J(),ie("div",{class:"mood_icon_holder",key:D.ref},[f.value==D.ref?(J(),ie("div",{key:0,class:Yn(D.icon),style:{"font-size":"3rem",border:"0.2rem solid #87bfba",padding:"0.5rem","border-radius":"50%"},onClick:L=>p(D.ref)},null,10,A1)):(J(),ie("div",{key:1,class:Yn(D.icon),style:{"font-size":"3rem"},onClick:L=>p(D.ref)},null,10,R1))]))),128))]),P("div",S1,[V[4]||(V[4]=P("div",{class:"influence_heading_holder inter font_size_xs"},[P("b",null,"What might be influencing this?")],-1)),P("div",C1,[(J(!0),ie(Pe,null,Tt(i.value,D=>(J(),ie("div",{class:"influence_item_holder inter font_size_xxs",key:D.ref,style:{height:"12%"}},[V[3]||(V[3]=Wt("  ",-1)),He(P("input",{type:"checkbox","onUpdate:modelValue":V[0]||(V[0]=L=>c.value=L),value:D.ref},null,8,P1),[[Vm,c.value]]),Wt(" "+Se(D.label),1)]))),128))])]),P("div",k1,[V[5]||(V[5]=P("div",{class:"influence_heading_holder inter font_size_xs"},[P("b",null,"Optional Notes")],-1)),He(P("textarea",{placeholder:"Write a few words about why you feel the way you feel",style:{width:"90%",height:"60%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":V[1]||(V[1]=D=>u.value=D)},null,512),[[It,u.value]])]),P("div",{class:"save_button inter font_size_xxs",onClick:V[2]||(V[2]=D=>m())},"Save")]),o.value?(J(),Dt(ti,{key:0,errorMessage:l.value,onClose:v},null,8,["errorMessage"])):Lt("",!0)],64))}},N1=en(D1,[["__scopeId","data-v-c6d2a86f"]]),O1="/assets/verified-DtT1qxnc.png",V1={key:0,class:"empty_therapy_list inter font_size_xs"},x1={key:1,class:"therapy_sign_up"},M1={key:0,class:"therapy_sign_up_step_1"},L1={class:"therapist_sign_up_form_holder"},U1={class:"show_password_toggle inter font_size_xs"},F1={key:2},B1={class:"therapist_items_holder inter font_size_xs"},j1={class:"therapist_item_holder"},$1={class:"therapist_name"},H1={class:"name_verified"},q1={key:3,class:"sign_up_button_holder inter font_size_s"},z1={__name:"therapists",setup(t){const e=Zt();$r(()=>{m()});const n=Z(e.userData.personalInfo.email),r=Z(e.userData.personalInfo.name);Z("");const s=Z("");Z("");const i=Z("password"),o=Z(""),l=Z(!1),c=Z(""),u=Z(null),f=Z(!1);Z(!1);const p=Z([]),m=()=>{const R=e.therapists;R&&R.length>0&&(p.value=R,f.value=!0)},v=Z([{value:"dr",text:"Dr."},{value:"mr",text:"Mr."},{value:"mrs",text:"Mrs."},{value:"miss",text:"Miss."},{value:"ms",text:"Ms."},{value:"mx",text:"Mx."},{value:"prof",text:"Prof."},{value:"rev",text:"Rev."},{value:"rev_dr",text:"Rev. Dr."},{value:"rabbi",text:"Rabbi."},{value:"sister",text:"Sister."}]),O=Z(""),V=Z([{value:"mp_psych",text:"MpPsych"},{value:"phd",text:"PhD"},{value:"msc",text:"MSc"},{value:"ma",text:"Ma"},{value:"msocsci",text:"MSocSci"},{value:"mbchb",text:"MBCHb"},{value:"other",text:"Other"}]),D=Z([{value:"social_worker",text:"Social Worker"},{value:"psychiatrist",text:"Psychiatrist"},{value:"psychologist",text:"Psychologist"},{value:"g_counsellor",text:"General Counselor"},{value:"registered_psycho",text:"Registered Psychotherapist"},{value:"registered_counsellor",text:"Registered Counsellor"},{value:"other",text:"Other"}]),L=Z(""),x=Z(""),S=Z(null),C=Z(null);let q=null;function ee(){return new Promise((R,_)=>{if(window.google?.maps?.places){R();return}const re=document.createElement("script");re.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWGRHjfWWoBWojyOBuGi75ACgNAkGobws&libraries=places",re.async=!0,re.defer=!0,re.onload=R,re.onerror=_,document.head.appendChild(re)})}ns(u,async R=>{R==="step_1"&&(await lo(),await ee(),S.value&&(q=new google.maps.places.Autocomplete(S.value,{types:["address"],componentRestrictions:{country:"za"},fields:["address_components","formatted_address","geometry"]}),q.addListener("place_changed",()=>{const _=q.getPlace();_.address_components&&(C.value=T(_))})))});function T(R){const _={};return R.address_components.forEach(re=>re.types.forEach(rt=>_[rt]=re.long_name)),{fullAddress:R.formatted_address,street:`${_.street_number||""} ${_.route||""}`.trim(),city:_.locality||_.sublocality||"",province:_.administrative_area_level_1||"",postalCode:_.postal_code||"",country:_.country||"",lat:R.geometry.location.lat(),lng:R.geometry.location.lng()}}const y=()=>{u.value="step_1"},E=()=>{i.value=i.value==="password"?"text":"password"},A=async()=>{if(!b(n.value)){o.value="Invalid email format!",l.value=!0;return}if(!s.value){o.value="Please insert a username!",l.value=!0;return}if(!O.value){o.value="Please select a title!",l.value=!0;return}if(!r.value){o.value="Please insert your full name and surname!",l.value=!0;return}if(!x.value){o.value="Please select an academic title!",l.value=!0;return}if(!L.value){o.value="Please select your credentials!",l.value=!0;return}if(!C.value){o.value="Please select your address!",l.value=!0;return}const R={nameSurname:r.value,userName:s.value,title:O.value,email:n.value,credential:L.value,academicTitle:x.value,address:C.value,isVerified:!1};await Rn(Mt(kt,"therapists",e.userData.uid),R),o.value="Thank you for providing your info. You will now be taken to a form to provide us with your licensed details in order for us to verify you.",l.value=!0;const _="https://docs.google.com/forms/d/e/1FAIpQLSe2kKgs6Qnvl1uNfVSVEjUeCRmM8jv6E6O-6xhy-1mIiAYvLg/viewform?usp=sharing";setTimeout(()=>{window.location.href=_},1e4)},b=R=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(R);return(R,_)=>(J(),ie(Pe,null,[!f.value&&!u.value?(J(),ie("div",V1," No therapists are listed at this moment. ")):u.value?(J(),ie("div",x1,[_[16]||(_[16]=KE('<div class="logo_holder" data-v-3794ed49><div class="logo" data-v-3794ed49></div><div class="inter font_size_xs" data-v-3794ed49>  <b style="color:#87bfba;" data-v-3794ed49>FindingYourFit</b>  </div><div class="logo" data-v-3794ed49></div></div>',1)),u.value==="step_1"?(J(),ie("div",M1,[_[14]||(_[14]=P("div",{class:"therapy_sign_up_heading inter font_size_xs"},[P("b",null,"Let's get you signed up and listed!")],-1)),_[15]||(_[15]=P("br",null,null,-1)),P("form",L1,[He(P("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Email Address","onUpdate:modelValue":_[0]||(_[0]=re=>n.value=re),required:""},null,512),[[It,n.value]]),He(P("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Username","onUpdate:modelValue":_[1]||(_[1]=re=>s.value=re),required:""},null,512),[[It,s.value]]),P("div",U1,[P("label",null,[P("input",{type:"checkbox",onChange:E},null,32),_[10]||(_[10]=Wt(" Show Password ",-1))])]),He(P("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":_[2]||(_[2]=re=>O.value=re)},[_[11]||(_[11]=P("option",{disabled:"",value:""},"Select your title",-1)),(J(!0),ie(Pe,null,Tt(v.value,re=>(J(),ie("option",{key:re.value},Se(re.text),1))),128))],512),[[Rr,O.value]]),He(P("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":_[3]||(_[3]=re=>r.value=re),required:""},null,512),[[It,r.value]]),He(P("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":_[4]||(_[4]=re=>x.value=re)},[_[12]||(_[12]=P("option",{disabled:"",value:""},"Select your academic title",-1)),(J(!0),ie(Pe,null,Tt(V.value,re=>(J(),ie("option",{key:re.value},Se(re.text),1))),128))],512),[[Rr,x.value]]),He(P("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":_[5]||(_[5]=re=>L.value=re)},[_[13]||(_[13]=P("option",{disabled:"",value:""},"Select your credential",-1)),(J(!0),ie(Pe,null,Tt(D.value,re=>(J(),ie("option",{key:re.value},Se(re.text),1))),128))],512),[[Rr,L.value]]),He(P("input",{"onUpdate:modelValue":_[6]||(_[6]=re=>c.value=re),ref_key:"addressInput",ref:S,class:"form_input inter font_size_xs",type:"text",placeholder:"Search address"},null,512),[[It,c.value]])]),P("button",{type:"submit",class:"form_button inter font_size_xs",onClick:_[7]||(_[7]=re=>A())}," Confirm ")])):Lt("",!0)])):f.value&&!u.value?(J(),ie("div",F1,[(J(!0),ie(Pe,null,Tt(p.value,re=>(J(),ie("div",B1,[P("div",j1,[P("div",$1,[P("b",null,[P("div",H1,[P("div",null,Se(re.nameSurname),1),P("div",{style:Dr([{"margin-left":"1rem",width:"1rem",height:"1rem",display:"flex","flex-flow":"row nowrap","justify-content":"center","align-items":"center"},{backgroundImage:`url(${cn(O1)})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}])},null,4)])]),Wt(" "+Se(re.credential)+" ",1),_[17]||(_[17]=P("br",null,null,-1)),Wt(" "+Se(re.address.province)+", "+Se(re.address.city)+", "+Se(re.address.postalCode)+" ",1),_[18]||(_[18]=P("br",null,null,-1)),_[19]||(_[19]=P("br",null,null,-1)),_[20]||(_[20]=P("div",{class:"contact_buttons_holder"},[P("div",{class:"contact_button"},"Email"),P("div",{class:"contact_button"},"Call")],-1))])])]))),256))])):Lt("",!0),u.value?Lt("",!0):(J(),ie("div",q1,[P("i",{class:"fas fa-plus",onClick:_[8]||(_[8]=re=>y())})])),l.value?(J(),Dt(ti,{key:4,errorMessage:o.value,onClose:_[9]||(_[9]=re=>l.value=!1)},null,8,["errorMessage"])):Lt("",!0)],64))}},W1=en(z1,[["__scopeId","data-v-3794ed49"]]),G1={class:"navigation_bar_holder"},K1=["onClick"],Q1=["innerHTML"],Y1={__name:"navigation",setup(t){const e={home:{name:"Home",icon:'<i class="fa fa-home"></i>'},therapists:{name:"Therapists",icon:'<i class="fa fa-address-book"></i>'},journal:{name:"Journal",icon:'<i class="fa fa-book"></i>'},profile:{name:"Profile",icon:'<i class="fa fa-id-card"></i>'}},n=Zt();Ya();const r=Z("home"),s=i=>{r.value=i};return ns(()=>n.userData,i=>{}),$r(()=>{}),(i,o)=>(J(),ie(Pe,null,[r.value==="profile"?(J(),Dt(xy,{key:0})):r.value==="home"?(J(),Dt(Ry,{key:1,onSetPage:s})):r.value==="mood"?(J(),Dt(N1,{key:2})):r.value==="journal"?(J(),Dt(My,{key:3})):r.value==="therapists"?(J(),Dt(W1,{key:4})):Lt("",!0),P("div",G1,[(J(),ie(Pe,null,Tt(e,(l,c)=>P("div",{class:"navigation_item_holder inter font_size_xxs",key:c},[P("div",{class:Yn(["navigation_item",{active:r.value===c}]),onClick:u=>s(c)},[P("div",{innerHTML:l.icon},null,8,Q1),P("div",null,Se(l.name),1)],10,K1)])),64))])],64))}},J1=en(Y1,[["__scopeId","data-v-2a13a6be"]]),X1=[{path:"/",name:"Loading",component:Ok},{path:"/login",name:"Login",component:uk},{path:"/navigation",name:"Navigation",component:J1},{path:"/home/",name:"Home",component:Ry,props:!0},{path:"/profile/",name:"Profile",component:xy,props:!0},{path:"/journal/",name:"JournalEntry",component:My,props:!0}],Ly=YT({history:CT(),routes:X1});Ly.beforeEach(async(t,e,n)=>{const r=Zt();if(r.userData||await r.fetchUserData(),!r.userData?.uid&&t.name!=="Login")return n({name:"Login"});n()});let Ap=null;Wn.onAuthStateChanged(()=>{if(!Ap){const t=Ow(qw);t.use(Mw()),t.use(Ly),t.mount("#app"),Ap=t}});
