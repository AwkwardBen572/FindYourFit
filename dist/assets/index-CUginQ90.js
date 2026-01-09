(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},Dr=[],wn=()=>{},Cp=()=>!1,Ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yc=t=>t.startsWith("onUpdate:"),At=Object.assign,Jc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cv=Object.prototype.hasOwnProperty,ke=(t,e)=>cv.call(t,e),ue=Array.isArray,Nr=t=>io(t)==="[object Map]",Yr=t=>io(t)==="[object Set]",Yh=t=>io(t)==="[object Date]",ge=t=>typeof t=="function",Je=t=>typeof t=="string",kn=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Pp=t=>(Me(t)||ge(t))&&ge(t.then)&&ge(t.catch),kp=Object.prototype.toString,io=t=>kp.call(t),uv=t=>io(t).slice(8,-1),Dp=t=>io(t)==="[object Object]",Xc=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ci=Qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},hv=/-\w/g,Jt=La(t=>t.replace(hv,e=>e.slice(1).toUpperCase())),fv=/\B([A-Z])/g,fr=La(t=>t.replace(fv,"-$1").toLowerCase()),Ua=La(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nl=La(t=>t?`on${Ua(t)}`:""),As=(t,e)=>!Object.is(t,e),Ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Np=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},sa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jh;const Fa=()=>Jh||(Jh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sr(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Je(s)?gv(s):sr(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Je(t)||Me(t))return t}const dv=/;(?![^(]*\))/g,pv=/:([^]+)/,mv=/\/\*[^]*?\*\//g;function gv(t){const e={};return t.replace(mv,"").split(dv).forEach(n=>{if(n){const s=n.split(pv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Dn(t){let e="";if(Je(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const s=Dn(t[n]);s&&(e+=s+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _v="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yv=Qc(_v);function Op(t){return!!t||t===""}function vv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=rr(t[s],e[s]);return n}function rr(t,e){if(t===e)return!0;let n=Yh(t),s=Yh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=kn(t),s=kn(e),n||s)return t===e;if(n=ue(t),s=ue(e),n||s)return n&&s?vv(t,e):!1;if(n=Me(t),s=Me(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!rr(t[o],e[o]))return!1}}return String(t)===String(e)}function Zc(t,e){return t.findIndex(n=>rr(n,e))}const Vp=t=>!!(t&&t.__v_isRef===!0),ye=t=>Je(t)?t:t==null?"":ue(t)||Me(t)&&(t.toString===kp||!ge(t.toString))?Vp(t)?ye(t.value):JSON.stringify(t,xp,2):String(t),xp=(t,e)=>Vp(e)?xp(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Ol(s,i)+" =>"]=r,n),{})}:Yr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ol(n))}:kn(e)?Ol(e):Me(e)&&!ue(e)&&!Dp(e)?String(e):e,Ol=(t,e="")=>{var n;return kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Mp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Lp(t){return new Mp(t)}function Up(){return yt}function Ev(t,e=!1){yt&&yt.cleanups.push(t)}let Ue;const Vl=new WeakSet;class Fp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vl.has(this)&&(Vl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xh(this),$p(this);const e=Ue,n=ln;Ue=this,ln=!0;try{return this.fn()}finally{Hp(this),Ue=e,ln=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nu(e);this.deps=this.depsTail=void 0,Xh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lc(this)&&this.run()}get dirty(){return lc(this)}}let Bp=0,Pi,ki;function jp(t,e=!1){if(t.flags|=8,e){t.next=ki,ki=t;return}t.next=Pi,Pi=t}function eu(){Bp++}function tu(){if(--Bp>0)return;if(ki){let e=ki;for(ki=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Pi;){let e=Pi;for(Pi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function $p(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hp(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),nu(s),wv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function lc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Hi)||(t.globalVersion=Hi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!lc(t))))return;t.flags|=2;const e=t.dep,n=Ue,s=ln;Ue=t,ln=!0;try{$p(t);const r=t.fn(t._value);(e.version===0||As(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ue=n,ln=s,Hp(t),t.flags&=-3}}function nu(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)nu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function wv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ln=!0;const qp=[];function Jn(){qp.push(ln),ln=!1}function Xn(){const t=qp.pop();ln=t===void 0?!0:t}function Xh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Hi=0;class Tv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class su{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ue||!ln||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new Tv(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,Wp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=s)}return n}trigger(e){this.version++,Hi++,this.notify(e)}notify(e){eu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{tu()}}}function Wp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Wp(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ra=new WeakMap,er=Symbol(""),cc=Symbol(""),zi=Symbol("");function Et(t,e,n){if(ln&&Ue){let s=ra.get(t);s||ra.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new su),r.map=s,r.key=n),r.track()}}function $n(t,e,n,s,r,i){const o=ra.get(t);if(!o){Hi++;return}const l=c=>{c&&c.trigger()};if(eu(),e==="clear")o.forEach(l);else{const c=ue(t),u=c&&Xc(n);if(c&&n==="length"){const f=Number(s);o.forEach((p,m)=>{(m==="length"||m===zi||!kn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(zi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(er)),Nr(t)&&l(o.get(cc)));break;case"delete":c||(l(o.get(er)),Nr(t)&&l(o.get(cc)));break;case"set":Nr(t)&&l(o.get(er));break}}tu()}function Iv(t,e){const n=ra.get(t);return n&&n.get(e)}function Ir(t){const e=Se(t);return e===t?e:(Et(e,"iterate",zi),Qt(t)?e:e.map(ut))}function Ba(t){return Et(t=Se(t),"iterate",zi),t}const bv={__proto__:null,[Symbol.iterator](){return xl(this,Symbol.iterator,ut)},concat(...t){return Ir(this).concat(...t.map(e=>ue(e)?Ir(e):e))},entries(){return xl(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return Fn(this,"every",t,e,void 0,arguments)},filter(t,e){return Fn(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return Fn(this,"find",t,e,ut,arguments)},findIndex(t,e){return Fn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fn(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return Fn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ml(this,"includes",t)},indexOf(...t){return Ml(this,"indexOf",t)},join(t){return Ir(this).join(t)},lastIndexOf(...t){return Ml(this,"lastIndexOf",t)},map(t,e){return Fn(this,"map",t,e,void 0,arguments)},pop(){return yi(this,"pop")},push(...t){return yi(this,"push",t)},reduce(t,...e){return Zh(this,"reduce",t,e)},reduceRight(t,...e){return Zh(this,"reduceRight",t,e)},shift(){return yi(this,"shift")},some(t,e){return Fn(this,"some",t,e,void 0,arguments)},splice(...t){return yi(this,"splice",t)},toReversed(){return Ir(this).toReversed()},toSorted(t){return Ir(this).toSorted(t)},toSpliced(...t){return Ir(this).toSpliced(...t)},unshift(...t){return yi(this,"unshift",t)},values(){return xl(this,"values",ut)}};function xl(t,e,n){const s=Ba(t),r=s[e]();return s!==t&&!Qt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Av=Array.prototype;function Fn(t,e,n,s,r,i){const o=Ba(t),l=o!==t&&!Qt(t),c=o[e];if(c!==Av[e]){const p=c.apply(t,i);return l?ut(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,ut(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,s);return l&&r?r(f):f}function Zh(t,e,n,s){const r=Ba(t);let i=n;return r!==t&&(Qt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ut(l),c,t)}),r[e](i,...s)}function Ml(t,e,n){const s=Se(t);Et(s,"iterate",zi);const r=s[e](...n);return(r===-1||r===!1)&&ou(n[0])?(n[0]=Se(n[0]),s[e](...n)):r}function yi(t,e,n=[]){Jn(),eu();const s=Se(t)[e].apply(t,n);return tu(),Xn(),s}const Rv=Qc("__proto__,__v_isRef,__isVue"),Gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kn));function Sv(t){kn(t)||(t=String(t));const e=Se(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Kp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Lv:Xp:i?Jp:Yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ue(e);if(!r){let c;if(o&&(c=bv[n]))return c;if(n==="hasOwnProperty")return Sv}const l=Reflect.get(e,n,Ke(e)?e:s);if((kn(n)?Gp.has(n):Rv(n))||(r||Et(e,"get",n),i))return l;if(Ke(l)){const c=o&&Xc(n)?l:l.value;return r&&Me(c)?hc(c):c}return Me(l)?r?hc(l):oo(l):l}}class Qp extends Kp{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Os(i);if(!Qt(s)&&!Os(s)&&(i=Se(i),s=Se(s)),!ue(e)&&Ke(i)&&!Ke(s))return c||(i.value=s),!0}const o=ue(e)&&Xc(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,s,Ke(e)?e:r);return e===Se(r)&&(o?As(s,i)&&$n(e,"set",n,s):$n(e,"add",n,s)),l}deleteProperty(e,n){const s=ke(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&$n(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!kn(n)||!Gp.has(n))&&Et(e,"has",n),s}ownKeys(e){return Et(e,"iterate",ue(e)?"length":er),Reflect.ownKeys(e)}}class Cv extends Kp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Pv=new Qp,kv=new Cv,Dv=new Qp(!0);const uc=t=>t,No=t=>Reflect.getPrototypeOf(t);function Nv(t,e,n){return function(...s){const r=this.__v_raw,i=Se(r),o=Nr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),f=n?uc:e?ia:ut;return!e&&Et(i,"iterate",c?cc:er),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ov(t,e){const n={get(r){const i=this.__v_raw,o=Se(i),l=Se(r);t||(As(r,l)&&Et(o,"get",r),Et(o,"get",l));const{has:c}=No(o),u=e?uc:t?ia:ut;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Et(Se(r),"iterate",er),r.size},has(r){const i=this.__v_raw,o=Se(i),l=Se(r);return t||(As(r,l)&&Et(o,"has",r),Et(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=Se(l),u=e?uc:t?ia:ut;return!t&&Et(c,"iterate",er),l.forEach((f,p)=>r.call(i,u(f),u(p),o))}};return At(n,t?{add:Oo("add"),set:Oo("set"),delete:Oo("delete"),clear:Oo("clear")}:{add(r){!e&&!Qt(r)&&!Os(r)&&(r=Se(r));const i=Se(this);return No(i).has.call(i,r)||(i.add(r),$n(i,"add",r,r)),this},set(r,i){!e&&!Qt(i)&&!Os(i)&&(i=Se(i));const o=Se(this),{has:l,get:c}=No(o);let u=l.call(o,r);u||(r=Se(r),u=l.call(o,r));const f=c.call(o,r);return o.set(r,i),u?As(i,f)&&$n(o,"set",r,i):$n(o,"add",r,i),this},delete(r){const i=Se(this),{has:o,get:l}=No(i);let c=o.call(i,r);c||(r=Se(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&$n(i,"delete",r,void 0),u},clear(){const r=Se(this),i=r.size!==0,o=r.clear();return i&&$n(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Nv(r,t,e)}),n}function ru(t,e){const n=Ov(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ke(n,r)&&r in s?n:s,r,i)}const Vv={get:ru(!1,!1)},xv={get:ru(!1,!0)},Mv={get:ru(!0,!1)};const Yp=new WeakMap,Jp=new WeakMap,Xp=new WeakMap,Lv=new WeakMap;function Uv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fv(t){return t.__v_skip||!Object.isExtensible(t)?0:Uv(uv(t))}function oo(t){return Os(t)?t:iu(t,!1,Pv,Vv,Yp)}function Zp(t){return iu(t,!1,Dv,xv,Jp)}function hc(t){return iu(t,!0,kv,Mv,Xp)}function iu(t,e,n,s,r){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Fv(t);if(i===0)return t;const o=r.get(t);if(o)return o;const l=new Proxy(t,i===2?s:n);return r.set(t,l),l}function Rs(t){return Os(t)?Rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Os(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function ou(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function au(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&Np(t,"__v_skip",!0),t}const ut=t=>Me(t)?oo(t):t,ia=t=>Me(t)?hc(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function ne(t){return em(t,!1)}function Bv(t){return em(t,!0)}function em(t,e){return Ke(t)?t:new jv(t,e)}class jv{constructor(e,n){this.dep=new su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Qt(e)||Os(e);e=s?e:Se(e),As(e,n)&&(this._rawValue=e,this._value=s?e:ut(e),this.dep.trigger())}}function Tn(t){return Ke(t)?t.value:t}const $v={get:(t,e,n)=>e==="__v_raw"?t:Tn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function tm(t){return Rs(t)?t:new Proxy(t,$v)}function Hv(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=qv(t,n);return e}class zv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Iv(Se(this._object),this._key)}}function qv(t,e,n){const s=t[e];return Ke(s)?s:new zv(t,e,n)}class Wv{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return jp(this,!0),!0}get value(){const e=this.dep.track();return zp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gv(t,e,n=!1){let s,r;return ge(t)?s=t:(s=t.get,r=t.set),new Wv(s,r,n)}const Vo={},oa=new WeakMap;let Ys;function Kv(t,e=!1,n=Ys){if(n){let s=oa.get(n);s||oa.set(n,s=[]),s.push(t)}}function Qv(t,e,n=xe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=C=>r?C:Qt(C)||r===!1||r===0?Hn(C,1):Hn(C);let f,p,m,v,O=!1,D=!1;if(Ke(t)?(p=()=>t.value,O=Qt(t)):Rs(t)?(p=()=>u(t),O=!0):ue(t)?(D=!0,O=t.some(C=>Rs(C)||Qt(C)),p=()=>t.map(C=>{if(Ke(C))return C.value;if(Rs(C))return u(C);if(ge(C))return c?c(C,2):C()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Jn();try{m()}finally{Xn()}}const C=Ys;Ys=f;try{return c?c(t,3,[v]):t(v)}finally{Ys=C}}:p=wn,e&&r){const C=p,z=r===!0?1/0:r;p=()=>Hn(C(),z)}const k=Up(),M=()=>{f.stop(),k&&k.active&&Jc(k.effects,f)};if(i&&e){const C=e;e=(...z)=>{C(...z),M()}}let L=D?new Array(t.length).fill(Vo):Vo;const V=C=>{if(!(!(f.flags&1)||!f.dirty&&!C))if(e){const z=f.run();if(r||O||(D?z.some((Y,w)=>As(Y,L[w])):As(z,L))){m&&m();const Y=Ys;Ys=f;try{const w=[z,L===Vo?void 0:D&&L[0]===Vo?[]:L,v];L=z,c?c(e,3,w):e(...w)}finally{Ys=Y}}}else f.run()};return l&&l(V),f=new Fp(p),f.scheduler=o?()=>o(V,!1):V,v=C=>Kv(C,!1,f),m=f.onStop=()=>{const C=oa.get(f);if(C){if(c)c(C,4);else for(const z of C)z();oa.delete(f)}},e?s?V(!0):L=f.run():o?o(V.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function Hn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))Hn(t.value,e,n);else if(ue(t))for(let s=0;s<t.length;s++)Hn(t[s],e,n);else if(Yr(t)||Nr(t))t.forEach(s=>{Hn(s,e,n)});else if(Dp(t)){for(const s in t)Hn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Hn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ao(t,e,n,s){try{return s?t(...s):t()}catch(r){ja(r,e,n)}}function Nn(t,e,n,s){if(ge(t)){const r=ao(t,e,n,s);return r&&Pp(r)&&r.catch(i=>{ja(i,e,n)}),r}if(ue(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Nn(t[i],e,n,s));return r}}function ja(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Jn(),ao(i,null,10,[t,c,u]),Xn();return}}Yv(t,n,r,s,o)}function Yv(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const kt=[];let _n=-1;const Or=[];let _s=null,Ar=0;const nm=Promise.resolve();let aa=null;function lo(t){const e=aa||nm;return t?e.then(this?t.bind(this):t):e}function Jv(t){let e=_n+1,n=kt.length;for(;e<n;){const s=e+n>>>1,r=kt[s],i=qi(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function lu(t){if(!(t.flags&1)){const e=qi(t),n=kt[kt.length-1];!n||!(t.flags&2)&&e>=qi(n)?kt.push(t):kt.splice(Jv(e),0,t),t.flags|=1,sm()}}function sm(){aa||(aa=nm.then(im))}function Xv(t){ue(t)?Or.push(...t):_s&&t.id===-1?_s.splice(Ar+1,0,t):t.flags&1||(Or.push(t),t.flags|=1),sm()}function ef(t,e,n=_n+1){for(;n<kt.length;n++){const s=kt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;kt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function rm(t){if(Or.length){const e=[...new Set(Or)].sort((n,s)=>qi(n)-qi(s));if(Or.length=0,_s){_s.push(...e);return}for(_s=e,Ar=0;Ar<_s.length;Ar++){const n=_s[Ar];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}_s=null,Ar=0}}const qi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function im(t){try{for(_n=0;_n<kt.length;_n++){const e=kt[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ao(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<kt.length;_n++){const e=kt[_n];e&&(e.flags&=-2)}_n=-1,kt.length=0,rm(),aa=null,(kt.length||Or.length)&&im()}}let qt=null,om=null;function la(t){const e=qt;return qt=t,om=t&&t.type.__scopeId||null,e}function Zv(t,e=qt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ha(-1);const i=la(e);let o;try{o=t(...r)}finally{la(i),s._d&&ha(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function We(t,e){if(qt===null)return t;const n=qa(qt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=xe]=e[r];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Hn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ks(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(Jn(),Nn(c,n,8,[t.el,l,t,e]),Xn())}}const eE=Symbol("_vte"),tE=t=>t.__isTeleport,nE=Symbol("_leaveCb");function cu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,cu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function am(t,e){return ge(t)?At({name:t.name},e,{setup:t}):t}function lm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ca=new WeakMap;function Di(t,e,n,s,r=!1){if(ue(t)){t.forEach((O,D)=>Di(O,e&&(ue(e)?e[D]:e),n,s,r));return}if(Ni(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Di(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?qa(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===xe?l.refs={}:l.refs,p=l.setupState,m=Se(p),v=p===xe?Cp:O=>ke(m,O);if(u!=null&&u!==c){if(tf(e),Je(u))f[u]=null,v(u)&&(p[u]=null);else if(Ke(u)){u.value=null;const O=e;O.k&&(f[O.k]=null)}}if(ge(c))ao(c,l,12,[o,f]);else{const O=Je(c),D=Ke(c);if(O||D){const k=()=>{if(t.f){const M=O?v(c)?p[c]:f[c]:c.value;if(r)ue(M)&&Jc(M,i);else if(ue(M))M.includes(i)||M.push(i);else if(O)f[c]=[i],v(c)&&(p[c]=f[c]);else{const L=[i];c.value=L,t.k&&(f[t.k]=L)}}else O?(f[c]=o,v(c)&&(p[c]=o)):D&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const M=()=>{k(),ca.delete(t)};M.id=-1,ca.set(t,M),zt(M,n)}else tf(t),k()}}}function tf(t){const e=ca.get(t);e&&(e.flags|=8,ca.delete(t))}Fa().requestIdleCallback;Fa().cancelIdleCallback;const Ni=t=>!!t.type.__asyncLoader,cm=t=>t.type.__isKeepAlive;function sE(t,e){um(t,"a",e)}function rE(t,e){um(t,"da",e)}function um(t,e,n=bt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($a(e,s,n),n){let r=n.parent;for(;r&&r.parent;)cm(r.parent.vnode)&&iE(s,e,n,r),r=r.parent}}function iE(t,e,n,s){const r=$a(e,t,s,!0);hm(()=>{Jc(s[e],r)},n)}function $a(t,e,n=bt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Jn();const l=co(n),c=Nn(e,n,t,o);return l(),Xn(),c});return s?r.unshift(i):r.push(i),i}}const ss=t=>(e,n=bt)=>{(!Gi||t==="sp")&&$a(t,(...s)=>e(...s),n)},oE=ss("bm"),rs=ss("m"),aE=ss("bu"),lE=ss("u"),cE=ss("bum"),hm=ss("um"),uE=ss("sp"),hE=ss("rtg"),fE=ss("rtc");function dE(t,e=bt){$a("ec",t,e)}const pE="components";function mE(t,e){return _E(pE,t,!0,e)||t}const gE=Symbol.for("v-ndc");function _E(t,e,n=!0,s=!1){const r=qt||bt;if(r){const i=r.type;{const l=iw(i,!1);if(l&&(l===e||l===Jt(e)||l===Ua(Jt(e))))return i}const o=nf(r[t]||i[t],e)||nf(r.appContext[t],e);return!o&&s?i:o}}function nf(t,e){return t&&(t[e]||t[Jt(e)]||t[Ua(Jt(e))])}function ot(t,e,n,s){let r;const i=n,o=ue(t);if(o||Je(t)){const l=o&&Rs(t);let c=!1,u=!1;l&&(c=!Qt(t),u=Os(t),t=Ba(t)),r=new Array(t.length);for(let f=0,p=t.length;f<p;f++)r[f]=e(c?u?ia(ut(t[f])):ut(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(Me(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];r[c]=e(t[f],f,c,i)}}else r=[];return r}const fc=t=>t?Nm(t)?qa(t):fc(t.parent):null,Oi=At(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fc(t.parent),$root:t=>fc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dm(t),$forceUpdate:t=>t.f||(t.f=()=>{lu(t.update)}),$nextTick:t=>t.n||(t.n=lo.bind(t.proxy)),$watch:t=>FE.bind(t)}),Ll=(t,e)=>t!==xe&&!t.__isScriptSetup&&ke(t,e),yE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ll(s,e))return o[e]=1,s[e];if(r!==xe&&ke(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==xe&&ke(n,e))return o[e]=4,n[e];dc&&(o[e]=0)}}const f=Oi[e];let p,m;if(f)return e==="$attrs"&&Et(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==xe&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ll(r,e)?(r[e]=n,!0):s!==xe&&ke(s,e)?(s[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},l){let c,u;return!!(n[l]||t!==xe&&l[0]!=="$"&&ke(t,l)||Ll(e,l)||(c=i[0])&&ke(c,l)||ke(s,l)||ke(Oi,l)||ke(r.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sf(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dc=!0;function vE(t){const e=dm(t),n=t.proxy,s=t.ctx;dc=!1,e.beforeCreate&&rf(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:v,updated:O,activated:D,deactivated:k,beforeDestroy:M,beforeUnmount:L,destroyed:V,unmounted:C,render:z,renderTracked:Y,renderTriggered:w,errorCaptured:_,serverPrefetch:E,expose:R,inheritAttrs:I,components:b,directives:y,filters:Oe}=e;if(u&&EE(u,s,null),o)for(const me in o){const be=o[me];ge(be)&&(s[me]=be.bind(n))}if(r){const me=r.call(n,n);Me(me)&&(t.data=oo(me))}if(dc=!0,i)for(const me in i){const be=i[me],xt=ge(be)?be.bind(n,n):ge(be.get)?be.get.bind(n,n):wn,dn=!ge(be)&&ge(be.set)?be.set.bind(n):wn,Bt=$e({get:xt,set:dn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:at=>Bt.value=at})}if(l)for(const me in l)fm(l[me],s,n,me);if(c){const me=ge(c)?c.call(n):c;Reflect.ownKeys(me).forEach(be=>{zo(be,me[be])})}f&&rf(f,t,"c");function Le(me,be){ue(be)?be.forEach(xt=>me(xt.bind(n))):be&&me(be.bind(n))}if(Le(oE,p),Le(rs,m),Le(aE,v),Le(lE,O),Le(sE,D),Le(rE,k),Le(dE,_),Le(fE,Y),Le(hE,w),Le(cE,L),Le(hm,C),Le(uE,E),ue(R))if(R.length){const me=t.exposed||(t.exposed={});R.forEach(be=>{Object.defineProperty(me,be,{get:()=>n[be],set:xt=>n[be]=xt,enumerable:!0})})}else t.exposed||(t.exposed={});z&&t.render===wn&&(t.render=z),I!=null&&(t.inheritAttrs=I),b&&(t.components=b),y&&(t.directives=y),E&&lm(t)}function EE(t,e,n=wn){ue(t)&&(t=pc(t));for(const s in t){const r=t[s];let i;Me(r)?"default"in r?i=cn(r.from||s,r.default,!0):i=cn(r.from||s):i=cn(r),Ke(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function rf(t,e,n){Nn(ue(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function fm(t,e,n,s){let r=s.includes(".")?Rm(n,s):()=>n[s];if(Je(t)){const i=e[t];ge(i)&&Ss(r,i)}else if(ge(t))Ss(r,t.bind(n));else if(Me(t))if(ue(t))t.forEach(i=>fm(i,e,n,s));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Ss(r,i,t)}}function dm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>ua(c,u,o,!0)),ua(c,e,o)),Me(e)&&i.set(e,c),c}function ua(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ua(t,i,n,!0),r&&r.forEach(o=>ua(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=wE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const wE={data:of,props:af,emits:af,methods:wi,computed:wi,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:wi,directives:wi,watch:IE,provide:of,inject:TE};function of(t,e){return e?t?function(){return At(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function TE(t,e){return wi(pc(t),pc(e))}function pc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function wi(t,e){return t?At(Object.create(null),t,e):e}function af(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:At(Object.create(null),sf(t),sf(e??{})):e}function IE(t,e){if(!t)return e;if(!e)return t;const n=At(Object.create(null),t);for(const s in e)n[s]=Ct(t[s],e[s]);return n}function pm(){return{app:null,config:{isNativeTag:Cp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bE=0;function AE(t,e){return function(s,r=null){ge(s)||(s=At({},s)),r!=null&&!Me(r)&&(r=null);const i=pm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:bE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:aw,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ge(f.install)?(o.add(f),f.install(u,...p)):ge(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const v=u._ceVNode||Ut(s,r);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,f,m),c=!0,u._container=f,f.__vue_app__=u,qa(v.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Nn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=tr;tr=u;try{return f()}finally{tr=p}}};return u}}let tr=null;function zo(t,e){if(bt){let n=bt.provides;const s=bt.parent&&bt.parent.provides;s===n&&(n=bt.provides=Object.create(s)),n[t]=e}}function cn(t,e,n=!1){const s=Dm();if(s||tr){let r=tr?tr._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ge(e)?e.call(s&&s.proxy):e}}function RE(){return!!(Dm()||tr)}const mm={},gm=()=>Object.create(mm),_m=t=>Object.getPrototypeOf(t)===mm;function SE(t,e,n,s=!1){const r={},i=gm();t.propsDefaults=Object.create(null),ym(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Zp(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function CE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Se(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ha(t.emitsOptions,m))continue;const v=e[m];if(c)if(ke(i,m))v!==i[m]&&(i[m]=v,u=!0);else{const O=Jt(m);r[O]=mc(c,l,O,v,t,!1)}else v!==i[m]&&(i[m]=v,u=!0)}}}else{ym(t,e,r,i)&&(u=!0);let f;for(const p in l)(!e||!ke(e,p)&&((f=fr(p))===p||!ke(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(r[p]=mc(c,l,p,void 0,t,!0)):delete r[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&$n(t.attrs,"set","")}function ym(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ci(c))continue;const u=e[c];let f;r&&ke(r,f=Jt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ha(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Se(n),u=l||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=mc(r,c,p,u[p],t,!ke(u,p))}}return o}function mc(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const f=co(r);s=u[n]=c.call(null,e),f()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===fr(n))&&(s=!0))}return s}const PE=new WeakMap;function vm(t,e,n=!1){const s=n?PE:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const f=p=>{c=!0;const[m,v]=vm(p,e,!0);At(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Me(t)&&s.set(t,Dr),Dr;if(ue(i))for(let f=0;f<i.length;f++){const p=Jt(i[f]);lf(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=Jt(f);if(lf(p)){const m=i[f],v=o[p]=ue(m)||ge(m)?{type:m}:At({},m),O=v.type;let D=!1,k=!0;if(ue(O))for(let M=0;M<O.length;++M){const L=O[M],V=ge(L)&&L.name;if(V==="Boolean"){D=!0;break}else V==="String"&&(k=!1)}else D=ge(O)&&O.name==="Boolean";v[0]=D,v[1]=k,(D||ke(v,"default"))&&l.push(p)}}const u=[o,l];return Me(t)&&s.set(t,u),u}function lf(t){return t[0]!=="$"&&!Ci(t)}const uu=t=>t==="_"||t==="_ctx"||t==="$stable",hu=t=>ue(t)?t.map(vn):[vn(t)],kE=(t,e,n)=>{if(e._n)return e;const s=Zv((...r)=>hu(e(...r)),n);return s._c=!1,s},Em=(t,e,n)=>{const s=t._ctx;for(const r in t){if(uu(r))continue;const i=t[r];if(ge(i))e[r]=kE(r,i,s);else if(i!=null){const o=hu(i);e[r]=()=>o}}},wm=(t,e)=>{const n=hu(e);t.slots.default=()=>n},Tm=(t,e,n)=>{for(const s in e)(n||!uu(s))&&(t[s]=e[s])},DE=(t,e,n)=>{const s=t.slots=gm();if(t.vnode.shapeFlag&32){const r=e._;r?(Tm(s,e,n),n&&Np(s,"_",r,!0)):Em(e,s)}else e&&wm(t,e)},NE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=xe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Tm(r,e,n):(i=!e.$stable,Em(e,r)),o=e}else e&&(wm(t,e),o={default:1});if(i)for(const l in r)!uu(l)&&o[l]==null&&delete r[l]},zt=GE;function OE(t){return VE(t)}function VE(t,e){const n=Fa();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:v=wn,insertStaticContent:O}=t,D=(T,A,P,B=null,$=null,U=null,J=void 0,G=null,q=!!A.dynamicChildren)=>{if(T===A)return;T&&!vi(T,A)&&(B=F(T),at(T,$,U,!0),T=null),A.patchFlag===-2&&(q=!1,A.dynamicChildren=null);const{type:W,ref:le,shapeFlag:Z}=A;switch(W){case za:k(T,A,P,B);break;case Vs:M(T,A,P,B);break;case Fl:T==null&&L(A,P,B,J);break;case Ce:b(T,A,P,B,$,U,J,G,q);break;default:Z&1?z(T,A,P,B,$,U,J,G,q):Z&6?y(T,A,P,B,$,U,J,G,q):(Z&64||Z&128)&&W.process(T,A,P,B,$,U,J,G,q,ie)}le!=null&&$?Di(le,T&&T.ref,U,A||T,!A):le==null&&T&&T.ref!=null&&Di(T.ref,null,U,T,!0)},k=(T,A,P,B)=>{if(T==null)s(A.el=l(A.children),P,B);else{const $=A.el=T.el;A.children!==T.children&&u($,A.children)}},M=(T,A,P,B)=>{T==null?s(A.el=c(A.children||""),P,B):A.el=T.el},L=(T,A,P,B)=>{[T.el,T.anchor]=O(T.children,A,P,B,T.el,T.anchor)},V=({el:T,anchor:A},P,B)=>{let $;for(;T&&T!==A;)$=m(T),s(T,P,B),T=$;s(A,P,B)},C=({el:T,anchor:A})=>{let P;for(;T&&T!==A;)P=m(T),r(T),T=P;r(A)},z=(T,A,P,B,$,U,J,G,q)=>{A.type==="svg"?J="svg":A.type==="math"&&(J="mathml"),T==null?Y(A,P,B,$,U,J,G,q):E(T,A,$,U,J,G,q)},Y=(T,A,P,B,$,U,J,G)=>{let q,W;const{props:le,shapeFlag:Z,transition:oe,dirs:ce}=T;if(q=T.el=o(T.type,U,le&&le.is,le),Z&8?f(q,T.children):Z&16&&_(T.children,q,null,B,$,Ul(T,U),J,G),ce&&Ks(T,null,B,"created"),w(q,T,T.scopeId,J,B),le){for(const Ne in le)Ne!=="value"&&!Ci(Ne)&&i(q,Ne,null,le[Ne],U,B);"value"in le&&i(q,"value",null,le.value,U),(W=le.onVnodeBeforeMount)&&gn(W,B,T)}ce&&Ks(T,null,B,"beforeMount");const ve=xE($,oe);ve&&oe.beforeEnter(q),s(q,A,P),((W=le&&le.onVnodeMounted)||ve||ce)&&zt(()=>{W&&gn(W,B,T),ve&&oe.enter(q),ce&&Ks(T,null,B,"mounted")},$)},w=(T,A,P,B,$)=>{if(P&&v(T,P),B)for(let U=0;U<B.length;U++)v(T,B[U]);if($){let U=$.subTree;if(A===U||Cm(U.type)&&(U.ssContent===A||U.ssFallback===A)){const J=$.vnode;w(T,J,J.scopeId,J.slotScopeIds,$.parent)}}},_=(T,A,P,B,$,U,J,G,q=0)=>{for(let W=q;W<T.length;W++){const le=T[W]=G?ys(T[W]):vn(T[W]);D(null,le,A,P,B,$,U,J,G)}},E=(T,A,P,B,$,U,J)=>{const G=A.el=T.el;let{patchFlag:q,dynamicChildren:W,dirs:le}=A;q|=T.patchFlag&16;const Z=T.props||xe,oe=A.props||xe;let ce;if(P&&Qs(P,!1),(ce=oe.onVnodeBeforeUpdate)&&gn(ce,P,A,T),le&&Ks(A,T,P,"beforeUpdate"),P&&Qs(P,!0),(Z.innerHTML&&oe.innerHTML==null||Z.textContent&&oe.textContent==null)&&f(G,""),W?R(T.dynamicChildren,W,G,P,B,Ul(A,$),U):J||be(T,A,G,null,P,B,Ul(A,$),U,!1),q>0){if(q&16)I(G,Z,oe,P,$);else if(q&2&&Z.class!==oe.class&&i(G,"class",null,oe.class,$),q&4&&i(G,"style",Z.style,oe.style,$),q&8){const ve=A.dynamicProps;for(let Ne=0;Ne<ve.length;Ne++){const Re=ve[Ne],mt=Z[Re],gt=oe[Re];(gt!==mt||Re==="value")&&i(G,Re,mt,gt,$,P)}}q&1&&T.children!==A.children&&f(G,A.children)}else!J&&W==null&&I(G,Z,oe,P,$);((ce=oe.onVnodeUpdated)||le)&&zt(()=>{ce&&gn(ce,P,A,T),le&&Ks(A,T,P,"updated")},B)},R=(T,A,P,B,$,U,J)=>{for(let G=0;G<A.length;G++){const q=T[G],W=A[G],le=q.el&&(q.type===Ce||!vi(q,W)||q.shapeFlag&198)?p(q.el):P;D(q,W,le,null,B,$,U,J,!0)}},I=(T,A,P,B,$)=>{if(A!==P){if(A!==xe)for(const U in A)!Ci(U)&&!(U in P)&&i(T,U,A[U],null,$,B);for(const U in P){if(Ci(U))continue;const J=P[U],G=A[U];J!==G&&U!=="value"&&i(T,U,G,J,$,B)}"value"in P&&i(T,"value",A.value,P.value,$)}},b=(T,A,P,B,$,U,J,G,q)=>{const W=A.el=T?T.el:l(""),le=A.anchor=T?T.anchor:l("");let{patchFlag:Z,dynamicChildren:oe,slotScopeIds:ce}=A;ce&&(G=G?G.concat(ce):ce),T==null?(s(W,P,B),s(le,P,B),_(A.children||[],P,le,$,U,J,G,q)):Z>0&&Z&64&&oe&&T.dynamicChildren?(R(T.dynamicChildren,oe,P,$,U,J,G),(A.key!=null||$&&A===$.subTree)&&Im(T,A,!0)):be(T,A,P,le,$,U,J,G,q)},y=(T,A,P,B,$,U,J,G,q)=>{A.slotScopeIds=G,T==null?A.shapeFlag&512?$.ctx.activate(A,P,B,J,q):Oe(A,P,B,$,U,J,q):dt(T,A,q)},Oe=(T,A,P,B,$,U,J)=>{const G=T.component=ew(T,B,$);if(cm(T)&&(G.ctx.renderer=ie),tw(G,!1,J),G.asyncDep){if($&&$.registerDep(G,Le,J),!T.el){const q=G.subTree=Ut(Vs);M(null,q,A,P),T.placeholder=q.el}}else Le(G,T,A,P,$,U,J)},dt=(T,A,P)=>{const B=A.component=T.component;if(qE(T,A,P))if(B.asyncDep&&!B.asyncResolved){me(B,A,P);return}else B.next=A,B.update();else A.el=T.el,B.vnode=A},Le=(T,A,P,B,$,U,J)=>{const G=()=>{if(T.isMounted){let{next:Z,bu:oe,u:ce,parent:ve,vnode:Ne}=T;{const $t=bm(T);if($t){Z&&(Z.el=Ne.el,me(T,Z,J)),$t.asyncDep.then(()=>{T.isUnmounted||G()});return}}let Re=Z,mt;Qs(T,!1),Z?(Z.el=Ne.el,me(T,Z,J)):Z=Ne,oe&&Ho(oe),(mt=Z.props&&Z.props.onVnodeBeforeUpdate)&&gn(mt,ve,Z,Ne),Qs(T,!0);const gt=uf(T),jt=T.subTree;T.subTree=gt,D(jt,gt,p(jt.el),F(jt),T,$,U),Z.el=gt.el,Re===null&&WE(T,gt.el),ce&&zt(ce,$),(mt=Z.props&&Z.props.onVnodeUpdated)&&zt(()=>gn(mt,ve,Z,Ne),$)}else{let Z;const{el:oe,props:ce}=A,{bm:ve,m:Ne,parent:Re,root:mt,type:gt}=T,jt=Ni(A);Qs(T,!1),ve&&Ho(ve),!jt&&(Z=ce&&ce.onVnodeBeforeMount)&&gn(Z,Re,A),Qs(T,!0);{mt.ce&&mt.ce._def.shadowRoot!==!1&&mt.ce._injectChildStyle(gt);const $t=T.subTree=uf(T);D(null,$t,P,B,T,$,U),A.el=$t.el}if(Ne&&zt(Ne,$),!jt&&(Z=ce&&ce.onVnodeMounted)){const $t=A;zt(()=>gn(Z,Re,$t),$)}(A.shapeFlag&256||Re&&Ni(Re.vnode)&&Re.vnode.shapeFlag&256)&&T.a&&zt(T.a,$),T.isMounted=!0,A=P=B=null}};T.scope.on();const q=T.effect=new Fp(G);T.scope.off();const W=T.update=q.run.bind(q),le=T.job=q.runIfDirty.bind(q);le.i=T,le.id=T.uid,q.scheduler=()=>lu(le),Qs(T,!0),W()},me=(T,A,P)=>{A.component=T;const B=T.vnode.props;T.vnode=A,T.next=null,CE(T,A.props,B,P),NE(T,A.children,P),Jn(),ef(T),Xn()},be=(T,A,P,B,$,U,J,G,q=!1)=>{const W=T&&T.children,le=T?T.shapeFlag:0,Z=A.children,{patchFlag:oe,shapeFlag:ce}=A;if(oe>0){if(oe&128){dn(W,Z,P,B,$,U,J,G,q);return}else if(oe&256){xt(W,Z,P,B,$,U,J,G,q);return}}ce&8?(le&16&&pt(W,$,U),Z!==W&&f(P,Z)):le&16?ce&16?dn(W,Z,P,B,$,U,J,G,q):pt(W,$,U,!0):(le&8&&f(P,""),ce&16&&_(Z,P,B,$,U,J,G,q))},xt=(T,A,P,B,$,U,J,G,q)=>{T=T||Dr,A=A||Dr;const W=T.length,le=A.length,Z=Math.min(W,le);let oe;for(oe=0;oe<Z;oe++){const ce=A[oe]=q?ys(A[oe]):vn(A[oe]);D(T[oe],ce,P,null,$,U,J,G,q)}W>le?pt(T,$,U,!0,!1,Z):_(A,P,B,$,U,J,G,q,Z)},dn=(T,A,P,B,$,U,J,G,q)=>{let W=0;const le=A.length;let Z=T.length-1,oe=le-1;for(;W<=Z&&W<=oe;){const ce=T[W],ve=A[W]=q?ys(A[W]):vn(A[W]);if(vi(ce,ve))D(ce,ve,P,null,$,U,J,G,q);else break;W++}for(;W<=Z&&W<=oe;){const ce=T[Z],ve=A[oe]=q?ys(A[oe]):vn(A[oe]);if(vi(ce,ve))D(ce,ve,P,null,$,U,J,G,q);else break;Z--,oe--}if(W>Z){if(W<=oe){const ce=oe+1,ve=ce<le?A[ce].el:B;for(;W<=oe;)D(null,A[W]=q?ys(A[W]):vn(A[W]),P,ve,$,U,J,G,q),W++}}else if(W>oe)for(;W<=Z;)at(T[W],$,U,!0),W++;else{const ce=W,ve=W,Ne=new Map;for(W=ve;W<=oe;W++){const lt=A[W]=q?ys(A[W]):vn(A[W]);lt.key!=null&&Ne.set(lt.key,W)}let Re,mt=0;const gt=oe-ve+1;let jt=!1,$t=0;const sn=new Array(gt);for(W=0;W<gt;W++)sn[W]=0;for(W=ce;W<=Z;W++){const lt=T[W];if(mt>=gt){at(lt,$,U,!0);continue}let st;if(lt.key!=null)st=Ne.get(lt.key);else for(Re=ve;Re<=oe;Re++)if(sn[Re-ve]===0&&vi(lt,A[Re])){st=Re;break}st===void 0?at(lt,$,U,!0):(sn[st-ve]=W+1,st>=$t?$t=st:jt=!0,D(lt,A[st],P,null,$,U,J,G,q),mt++)}const vr=jt?ME(sn):Dr;for(Re=vr.length-1,W=gt-1;W>=0;W--){const lt=ve+W,st=A[lt],si=A[lt+1],Hs=lt+1<le?si.el||si.placeholder:B;sn[W]===0?D(null,st,P,Hs,$,U,J,G,q):jt&&(Re<0||W!==vr[Re]?Bt(st,P,Hs,2):Re--)}}},Bt=(T,A,P,B,$=null)=>{const{el:U,type:J,transition:G,children:q,shapeFlag:W}=T;if(W&6){Bt(T.component.subTree,A,P,B);return}if(W&128){T.suspense.move(A,P,B);return}if(W&64){J.move(T,A,P,ie);return}if(J===Ce){s(U,A,P);for(let Z=0;Z<q.length;Z++)Bt(q[Z],A,P,B);s(T.anchor,A,P);return}if(J===Fl){V(T,A,P);return}if(B!==2&&W&1&&G)if(B===0)G.beforeEnter(U),s(U,A,P),zt(()=>G.enter(U),$);else{const{leave:Z,delayLeave:oe,afterLeave:ce}=G,ve=()=>{T.ctx.isUnmounted?r(U):s(U,A,P)},Ne=()=>{U._isLeaving&&U[nE](!0),Z(U,()=>{ve(),ce&&ce()})};oe?oe(U,ve,Ne):Ne()}else s(U,A,P)},at=(T,A,P,B=!1,$=!1)=>{const{type:U,props:J,ref:G,children:q,dynamicChildren:W,shapeFlag:le,patchFlag:Z,dirs:oe,cacheIndex:ce}=T;if(Z===-2&&($=!1),G!=null&&(Jn(),Di(G,null,P,T,!0),Xn()),ce!=null&&(A.renderCache[ce]=void 0),le&256){A.ctx.deactivate(T);return}const ve=le&1&&oe,Ne=!Ni(T);let Re;if(Ne&&(Re=J&&J.onVnodeBeforeUnmount)&&gn(Re,A,T),le&6)nn(T.component,P,B);else{if(le&128){T.suspense.unmount(P,B);return}ve&&Ks(T,null,A,"beforeUnmount"),le&64?T.type.remove(T,A,P,ie,B):W&&!W.hasOnce&&(U!==Ce||Z>0&&Z&64)?pt(W,A,P,!1,!0):(U===Ce&&Z&384||!$&&le&16)&&pt(q,A,P),B&&Un(T)}(Ne&&(Re=J&&J.onVnodeUnmounted)||ve)&&zt(()=>{Re&&gn(Re,A,T),ve&&Ks(T,null,A,"unmounted")},P)},Un=T=>{const{type:A,el:P,anchor:B,transition:$}=T;if(A===Ce){tn(P,B);return}if(A===Fl){C(T);return}const U=()=>{r(P),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(T.shapeFlag&1&&$&&!$.persisted){const{leave:J,delayLeave:G}=$,q=()=>J(P,U);G?G(T.el,U,q):q()}else U()},tn=(T,A)=>{let P;for(;T!==A;)P=m(T),r(T),T=P;r(A)},nn=(T,A,P)=>{const{bum:B,scope:$,job:U,subTree:J,um:G,m:q,a:W}=T;cf(q),cf(W),B&&Ho(B),$.stop(),U&&(U.flags|=8,at(J,T,A,P)),G&&zt(G,A),zt(()=>{T.isUnmounted=!0},A)},pt=(T,A,P,B=!1,$=!1,U=0)=>{for(let J=U;J<T.length;J++)at(T[J],A,P,B,$)},F=T=>{if(T.shapeFlag&6)return F(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const A=m(T.anchor||T.el),P=A&&A[eE];return P?m(P):A};let ee=!1;const X=(T,A,P)=>{T==null?A._vnode&&at(A._vnode,null,null,!0):D(A._vnode||null,T,A,null,null,null,P),A._vnode=T,ee||(ee=!0,ef(),rm(),ee=!1)},ie={p:D,um:at,m:Bt,r:Un,mt:Oe,mc:_,pc:be,pbc:R,n:F,o:t};return{render:X,hydrate:void 0,createApp:AE(X)}}function Ul({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Im(t,e,n=!1){const s=t.children,r=e.children;if(ue(s)&&ue(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=ys(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Im(o,l)),l.type===za&&l.patchFlag!==-1&&(l.el=o.el),l.type===Vs&&!l.el&&(l.el=o.el)}}function ME(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function bm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bm(e)}function cf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const LE=Symbol.for("v-scx"),UE=()=>cn(LE);function Ss(t,e,n){return Am(t,e,n)}function Am(t,e,n=xe){const{immediate:s,deep:r,flush:i,once:o}=n,l=At({},n),c=e&&s||!e&&i!=="post";let u;if(Gi){if(i==="sync"){const v=UE();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=wn,v.resume=wn,v.pause=wn,v}}const f=bt;l.call=(v,O,D)=>Nn(v,f,O,D);let p=!1;i==="post"?l.scheduler=v=>{zt(v,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,O)=>{O?v():lu(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const m=Qv(t,e,l);return Gi&&(u?u.push(m):c&&m()),m}function FE(t,e,n){const s=this.proxy,r=Je(t)?t.includes(".")?Rm(s,t):()=>s[t]:t.bind(s,s);let i;ge(e)?i=e:(i=e.handler,n=e);const o=co(this),l=Am(r,i.bind(s),n);return o(),l}function Rm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const BE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${fr(e)}Modifiers`];function jE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||xe;let r=n;const i=e.startsWith("update:"),o=i&&BE(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>Je(f)?f.trim():f)),o.number&&(r=n.map(sa)));let l,c=s[l=Nl(e)]||s[l=Nl(Jt(e))];!c&&i&&(c=s[l=Nl(fr(e))]),c&&Nn(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Nn(u,t,6,r)}}const $E=new WeakMap;function Sm(t,e,n=!1){const s=n?$E:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=u=>{const f=Sm(u,e,!0);f&&(l=!0,At(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Me(t)&&s.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):At(o,i),Me(t)&&s.set(t,o),o)}function Ha(t,e){return!t||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,fr(e))||ke(t,e))}function uf(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:v,ctx:O,inheritAttrs:D}=t,k=la(t);let M,L;try{if(n.shapeFlag&4){const C=r||s,z=C;M=vn(u.call(z,C,f,p,v,m,O)),L=l}else{const C=e;M=vn(C.length>1?C(p,{attrs:l,slots:o,emit:c}):C(p,null)),L=e.props?l:HE(l)}}catch(C){Vi.length=0,ja(C,t,1),M=Ut(Vs)}let V=M;if(L&&D!==!1){const C=Object.keys(L),{shapeFlag:z}=V;C.length&&z&7&&(i&&C.some(Yc)&&(L=zE(L,i)),V=Br(V,L,!1,!0))}return n.dirs&&(V=Br(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&cu(V,n.transition),M=V,la(k),M}const HE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},zE=(t,e)=>{const n={};for(const s in t)(!Yc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function qE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?hf(s,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==s[m]&&!Ha(u,m))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?hf(s,o,u):!0:!!o;return!1}function hf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ha(n,i))return!0}return!1}function WE({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Cm=t=>t.__isSuspense;function GE(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):Xv(t)}const Ce=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),Vs=Symbol.for("v-cmt"),Fl=Symbol.for("v-stc"),Vi=[];let Wt=null;function K(t=!1){Vi.push(Wt=t?null:[])}function KE(){Vi.pop(),Wt=Vi[Vi.length-1]||null}let Wi=1;function ha(t,e=!1){Wi+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function Pm(t){return t.dynamicChildren=Wi>0?Wt||Dr:null,KE(),Wi>0&&Wt&&Wt.push(t),t}function se(t,e,n,s,r,i){return Pm(S(t,e,n,s,r,i,!0))}function wt(t,e,n,s,r){return Pm(Ut(t,e,n,s,r,!0))}function fa(t){return t?t.__v_isVNode===!0:!1}function vi(t,e){return t.type===e.type&&t.key===e.key}const km=({key:t})=>t??null,qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ke(t)||ge(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function S(t,e=null,n=null,s=0,r=null,i=t===Ce?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&km(e),ref:e&&qo(e),scopeId:om,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qt};return l?(fu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),Wi>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const Ut=QE;function QE(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===gE)&&(t=Vs),fa(t)){const l=Br(t,e,!0);return n&&fu(l,n),Wi>0&&!i&&Wt&&(l.shapeFlag&6?Wt[Wt.indexOf(t)]=l:Wt.push(l)),l.patchFlag=-2,l}if(ow(t)&&(t=t.__vccOpts),e){e=YE(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=Dn(l)),Me(c)&&(ou(c)&&!ue(c)&&(c=At({},c)),e.style=sr(c))}const o=Je(t)?1:Cm(t)?128:tE(t)?64:Me(t)?4:ge(t)?2:0;return S(t,e,n,s,r,o,i,!0)}function YE(t){return t?ou(t)||_m(t)?At({},t):t:null}function Br(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?JE(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&km(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(qo(e)):[i,qo(e)]:qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ce?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Br(t.ssContent),ssFallback:t.ssFallback&&Br(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&cu(f,c.clone(f)),f}function Dt(t=" ",e=0){return Ut(za,null,t,e)}function Ft(t="",e=!1){return e?(K(),wt(Vs,null,t)):Ut(Vs,null,t)}function vn(t){return t==null||typeof t=="boolean"?Ut(Vs):ue(t)?Ut(Ce,null,t.slice()):fa(t)?ys(t):Ut(za,null,String(t))}function ys(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Br(t)}function fu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),fu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!_m(e)?e._ctx=qt:r===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),s&64?(n=16,e=[Dt(e)]):n=8);t.children=e,t.shapeFlag|=n}function JE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Dn([e.class,s.class]));else if(r==="style")e.style=sr([e.style,s.style]);else if(Ma(r)){const i=e[r],o=s[r];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function gn(t,e,n,s=null){Nn(t,e,7,[n,s])}const XE=pm();let ZE=0;function ew(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||XE,i={uid:ZE++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vm(s,r),emitsOptions:Sm(s,r),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:s.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jE.bind(null,i),t.ce&&t.ce(i),i}let bt=null;const Dm=()=>bt||qt;let da,gc;{const t=Fa(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};da=e("__VUE_INSTANCE_SETTERS__",n=>bt=n),gc=e("__VUE_SSR_SETTERS__",n=>Gi=n)}const co=t=>{const e=bt;return da(t),t.scope.on(),()=>{t.scope.off(),da(e)}},ff=()=>{bt&&bt.scope.off(),da(null)};function Nm(t){return t.vnode.shapeFlag&4}let Gi=!1;function tw(t,e=!1,n=!1){e&&gc(e);const{props:s,children:r}=t.vnode,i=Nm(t);SE(t,s,i,e),DE(t,r,n||e);const o=i?nw(t,e):void 0;return e&&gc(!1),o}function nw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yE);const{setup:s}=n;if(s){Jn();const r=t.setupContext=s.length>1?rw(t):null,i=co(t),o=ao(s,t,0,[t.props,r]),l=Pp(o);if(Xn(),i(),(l||t.sp)&&!Ni(t)&&lm(t),l){if(o.then(ff,ff),e)return o.then(c=>{df(t,c)}).catch(c=>{ja(c,t,0)});t.asyncDep=o}else df(t,o)}else Om(t)}function df(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=tm(e)),Om(t)}function Om(t,e,n){const s=t.type;t.render||(t.render=s.render||wn);{const r=co(t);Jn();try{vE(t)}finally{Xn(),r()}}}const sw={get(t,e){return Et(t,"get",""),t[e]}};function rw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sw),slots:t.slots,emit:t.emit,expose:e}}function qa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tm(au(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Oi)return Oi[n](t)},has(e,n){return n in e||n in Oi}})):t.proxy}function iw(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function ow(t){return ge(t)&&"__vccOpts"in t}const $e=(t,e)=>Gv(t,e,Gi);function Vm(t,e,n){try{ha(-1);const s=arguments.length;return s===2?Me(e)&&!ue(e)?fa(e)?Ut(t,null,[e]):Ut(t,e):Ut(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&fa(n)&&(n=[n]),Ut(t,e,n))}finally{ha(1)}}const aw="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _c;const pf=typeof window<"u"&&window.trustedTypes;if(pf)try{_c=pf.createPolicy("vue",{createHTML:t=>t})}catch{}const xm=_c?t=>_c.createHTML(t):t=>t,lw="http://www.w3.org/2000/svg",cw="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,mf=jn&&jn.createElement("template"),uw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?jn.createElementNS(lw,t):e==="mathml"?jn.createElementNS(cw,t):n?jn.createElement(t,{is:n}):jn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{mf.innerHTML=xm(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=mf.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hw=Symbol("_vtc");function fw(t,e,n){const s=t[hw];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gf=Symbol("_vod"),dw=Symbol("_vsh"),pw=Symbol(""),mw=/(?:^|;)\s*display\s*:/;function gw(t,e,n){const s=t.style,r=Je(n);let i=!1;if(n&&!r){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Wo(s,l,"")}else for(const o in e)n[o]==null&&Wo(s,o,"");for(const o in n)o==="display"&&(i=!0),Wo(s,o,n[o])}else if(r){if(e!==n){const o=s[pw];o&&(n+=";"+o),s.cssText=n,i=mw.test(n)}}else e&&t.removeAttribute("style");gf in t&&(t[gf]=i?s.display:"",t[dw]&&(s.display="none"))}const _f=/\s*!important$/;function Wo(t,e,n){if(ue(n))n.forEach(s=>Wo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_w(t,e);_f.test(n)?t.setProperty(fr(s),n.replace(_f,""),"important"):t[s]=n}}const yf=["Webkit","Moz","ms"],Bl={};function _w(t,e){const n=Bl[e];if(n)return n;let s=Jt(e);if(s!=="filter"&&s in t)return Bl[e]=s;s=Ua(s);for(let r=0;r<yf.length;r++){const i=yf[r]+s;if(i in t)return Bl[e]=i}return e}const vf="http://www.w3.org/1999/xlink";function Ef(t,e,n,s,r,i=yv(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vf,e.slice(6,e.length)):t.setAttributeNS(vf,e,n):n==null||i&&!Op(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kn(n)?String(n):n)}function wf(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Op(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function zn(t,e,n,s){t.addEventListener(e,n,s)}function yw(t,e,n,s){t.removeEventListener(e,n,s)}const Tf=Symbol("_vei");function vw(t,e,n,s,r=null){const i=t[Tf]||(t[Tf]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=Ew(e);if(s){const u=i[e]=Iw(s,r);zn(t,l,u,c)}else o&&(yw(t,l,o,c),i[e]=void 0)}}const If=/(?:Once|Passive|Capture)$/;function Ew(t){let e;if(If.test(t)){e={};let s;for(;s=t.match(If);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fr(t.slice(2)),e]}let jl=0;const ww=Promise.resolve(),Tw=()=>jl||(ww.then(()=>jl=0),jl=Date.now());function Iw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Nn(bw(s,n.value),e,5,[s])};return n.value=t,n.attached=Tw(),n}function bw(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const bf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Aw=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?fw(t,s,o):e==="style"?gw(t,n,s):Ma(e)?Yc(e)||vw(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rw(t,e,s,o))?(wf(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ef(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(s))?wf(t,Jt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ef(t,e,s,o))};function Rw(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&bf(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return bf(e)&&Je(n)?!1:e in t}const xs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Ho(e,n):e};function Sw(t){t.target.composing=!0}function Af(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yt=Symbol("_assign"),Ot={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Yt]=xs(r);const i=s||r.props&&r.props.type==="number";zn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=sa(l)),t[Yt](l)}),n&&zn(t,"change",()=>{t.value=t.value.trim()}),e||(zn(t,"compositionstart",Sw),zn(t,"compositionend",Af),zn(t,"change",Af))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Yt]=xs(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?sa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},Mm={deep:!0,created(t,e,n){t[Yt]=xs(n),zn(t,"change",()=>{const s=t._modelValue,r=jr(t),i=t.checked,o=t[Yt];if(ue(s)){const l=Zc(s,r),c=l!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(l,1),o(u)}}else if(Yr(s)){const l=new Set(s);i?l.add(r):l.delete(r),o(l)}else o(Lm(t,i))})},mounted:Rf,beforeUpdate(t,e,n){t[Yt]=xs(n),Rf(t,e,n)}};function Rf(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(ue(e))r=Zc(e,s.props.value)>-1;else if(Yr(e))r=e.has(s.props.value);else{if(e===n)return;r=rr(e,Lm(t,!0))}t.checked!==r&&(t.checked=r)}const Cw={created(t,{value:e},n){t.checked=rr(e,n.props.value),t[Yt]=xs(n),zn(t,"change",()=>{t[Yt](jr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Yt]=xs(s),e!==n&&(t.checked=rr(e,s.props.value))}},Cs={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Yr(e);zn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sa(jr(o)):jr(o));t[Yt](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,lo(()=>{t._assigning=!1})}),t[Yt]=xs(s)},mounted(t,{value:e}){Sf(t,e)},beforeUpdate(t,e,n){t[Yt]=xs(n)},updated(t,{value:e}){t._assigning||Sf(t,e)}};function Sf(t,e){const n=t.multiple,s=ue(e);if(!(n&&!s&&!Yr(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],l=jr(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Zc(e,l)>-1}else o.selected=e.has(l);else if(rr(jr(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function jr(t){return"_value"in t?t._value:t.value}function Lm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Pw={created(t,e,n){xo(t,e,n,null,"created")},mounted(t,e,n){xo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){xo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){xo(t,e,n,s,"updated")}};function kw(t,e){switch(t){case"SELECT":return Cs;case"TEXTAREA":return Ot;default:switch(e){case"checkbox":return Mm;case"radio":return Cw;default:return Ot}}}function xo(t,e,n,s,r){const o=kw(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const Dw=["ctrl","shift","alt","meta"],Nw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Dw.some(n=>t[`${n}Key`]&&!e.includes(n))},du=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const l=Nw[e[o]];if(l&&l(r,e))return}return t(r,...i)}))},Ow=At({patchProp:Aw},uw);let Cf;function Vw(){return Cf||(Cf=OE(Ow))}const xw=((...t)=>{const e=Vw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Lw(s);if(!r)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Mw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Mw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lw(t){return Je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Um;const Wa=t=>Um=t,Fm=Symbol();function yc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xi||(xi={}));function Uw(){const t=Lp(!0),e=t.run(()=>ne({}));let n=[],s=[];const r=au({install(i){Wa(r),r._a=i,i.provide(Fm,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return this._a?n.push(i):s.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Bm=()=>{};function Pf(t,e,n,s=Bm){t.add(e);const r=()=>{t.delete(e)&&s()};return!n&&Up()&&Ev(r),r}function br(t,...e){t.forEach(n=>{n(...e)})}const Fw=t=>t(),kf=Symbol(),$l=Symbol();function vc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];yc(r)&&yc(s)&&t.hasOwnProperty(n)&&!Ke(s)&&!Rs(s)?t[n]=vc(r,s):t[n]=s}return t}const Bw=Symbol();function jw(t){return!yc(t)||!Object.prototype.hasOwnProperty.call(t,Bw)}const{assign:gs}=Object;function $w(t){return!!(Ke(t)&&t.effect)}function Hw(t,e,n,s){const{state:r,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=r?r():{});const f=Hv(n.state.value[t]);return gs(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=au($e(()=>{Wa(n);const v=n._s.get(t);return o[m].call(v,v)})),p),{}))}return c=jm(t,u,e,n,s,!0),c}function jm(t,e,n={},s,r,i){let o;const l=gs({actions:{}},n),c={deep:!0};let u,f,p=new Set,m=new Set,v;const O=s.state.value[t];!i&&!O&&(s.state.value[t]={}),ne({});let D;function k(_){let E;u=f=!1,typeof _=="function"?(_(s.state.value[t]),E={type:xi.patchFunction,storeId:t,events:v}):(vc(s.state.value[t],_),E={type:xi.patchObject,payload:_,storeId:t,events:v});const R=D=Symbol();lo().then(()=>{D===R&&(u=!0)}),f=!0,br(p,E,s.state.value[t])}const M=i?function(){const{state:E}=n,R=E?E():{};this.$patch(I=>{gs(I,R)})}:Bm;function L(){o.stop(),p.clear(),m.clear(),s._s.delete(t)}const V=(_,E="")=>{if(kf in _)return _[$l]=E,_;const R=function(){Wa(s);const I=Array.from(arguments),b=new Set,y=new Set;function Oe(me){b.add(me)}function dt(me){y.add(me)}br(m,{args:I,name:R[$l],store:z,after:Oe,onError:dt});let Le;try{Le=_.apply(this&&this.$id===t?this:z,I)}catch(me){throw br(y,me),me}return Le instanceof Promise?Le.then(me=>(br(b,me),me)).catch(me=>(br(y,me),Promise.reject(me))):(br(b,Le),Le)};return R[kf]=!0,R[$l]=E,R},C={_p:s,$id:t,$onAction:Pf.bind(null,m),$patch:k,$reset:M,$subscribe(_,E={}){const R=Pf(p,_,E.detached,()=>I()),I=o.run(()=>Ss(()=>s.state.value[t],b=>{(E.flush==="sync"?f:u)&&_({storeId:t,type:xi.direct,events:v},b)},gs({},c,E)));return R},$dispose:L},z=oo(C);s._s.set(t,z);const w=(s._a&&s._a.runWithContext||Fw)(()=>s._e.run(()=>(o=Lp()).run(()=>e({action:V}))));for(const _ in w){const E=w[_];if(Ke(E)&&!$w(E)||Rs(E))i||(O&&jw(E)&&(Ke(E)?E.value=O[_]:vc(E,O[_])),s.state.value[t][_]=E);else if(typeof E=="function"){const R=V(E,_);w[_]=R,l.actions[_]=E}}return gs(z,w),gs(Se(z),w),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:_=>{k(E=>{gs(E,_)})}}),s._p.forEach(_=>{gs(z,o.run(()=>_({store:z,app:s._a,pinia:s,options:l})))}),O&&i&&n.hydrate&&n.hydrate(z.$state,O),u=!0,f=!0,z}/*! #__NO_SIDE_EFFECTS__ */function zw(t,e,n){let s;const r=typeof e=="function";s=r?n:e;function i(o,l){const c=RE();return o=o||(c?cn(Fm,null):null),o&&Wa(o),o=Um,o._s.has(t)||(r?jm(t,e,s,o):Hw(t,s,o)),o._s.get(t)}return i.$id=t,i}const qw={class:"app_holder"},Ww={__name:"App",setup(t){return(e,n)=>{const s=mE("router-view");return K(),se("div",qw,[Ut(s)])}}};/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Rr=typeof document<"u";function $m(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$m(t.default)}const Pe=Object.assign;function Hl(t,e){const n={};for(const s in e){const r=e[s];n[s]=fn(r)?r.map(t):t(r)}return n}const Mi=()=>{},fn=Array.isArray;function Df(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Hm=/#/g,Kw=/&/g,Qw=/\//g,Yw=/=/g,Jw=/\?/g,zm=/\+/g,Xw=/%5B/g,Zw=/%5D/g,qm=/%5E/g,eT=/%60/g,Wm=/%7B/g,tT=/%7C/g,Gm=/%7D/g,nT=/%20/g;function pu(t){return t==null?"":encodeURI(""+t).replace(tT,"|").replace(Xw,"[").replace(Zw,"]")}function sT(t){return pu(t).replace(Wm,"{").replace(Gm,"}").replace(qm,"^")}function Ec(t){return pu(t).replace(zm,"%2B").replace(nT,"+").replace(Hm,"%23").replace(Kw,"%26").replace(eT,"`").replace(Wm,"{").replace(Gm,"}").replace(qm,"^")}function rT(t){return Ec(t).replace(Yw,"%3D")}function iT(t){return pu(t).replace(Hm,"%23").replace(Jw,"%3F")}function oT(t){return iT(t).replace(Qw,"%2F")}function Ki(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const aT=/\/$/,lT=t=>t.replace(aT,"");function zl(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(s=e.slice(0,c),i=e.slice(c,l>0?l:e.length),r=t(i.slice(1))),l>=0&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=fT(s??e,n),{fullPath:s+i+o,path:s,query:r,hash:Ki(o)}}function cT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uT(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&$r(e.matched[s],n.matched[r])&&Km(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $r(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Km(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hT(t[n],e[n]))return!1;return!0}function hT(t,e){return fn(t)?Of(t,e):fn(e)?Of(e,t):t===e}function Of(t,e){return fn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function fT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const ps={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let wc=(function(t){return t.pop="pop",t.push="push",t})({}),ql=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function dT(t){if(!t)if(Rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lT(t)}const pT=/^[^#]+#/;function mT(t,e){return t.replace(pT,"#")+e}function gT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ga=()=>({left:window.scrollX,top:window.scrollY});function _T(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=gT(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Vf(t,e){return(history.state?history.state.position-e:-1)+t}const Tc=new Map;function yT(t,e){Tc.set(t,e)}function vT(t){const e=Tc.get(t);return Tc.delete(t),e}function ET(t){return typeof t=="string"||t&&typeof t=="object"}function Qm(t){return typeof t=="string"||typeof t=="symbol"}let qe=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Ym=Symbol("");qe.MATCHER_NOT_FOUND+"",qe.NAVIGATION_GUARD_REDIRECT+"",qe.NAVIGATION_ABORTED+"",qe.NAVIGATION_CANCELLED+"",qe.NAVIGATION_DUPLICATED+"";function Hr(t,e){return Pe(new Error,{type:t,[Ym]:!0},e)}function Bn(t,e){return t instanceof Error&&Ym in t&&(e==null||!!(t.type&e))}const wT=["params","query","hash"];function TT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of wT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function IT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(zm," "),i=r.indexOf("="),o=Ki(i<0?r:r.slice(0,i)),l=i<0?null:Ki(r.slice(i+1));if(o in e){let c=e[o];fn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function xf(t){let e="";for(let n in t){const s=t[n];if(n=rT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(s)?s.map(r=>r&&Ec(r)):[s&&Ec(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function bT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=fn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const AT=Symbol(""),Mf=Symbol(""),Ka=Symbol(""),Jm=Symbol(""),Ic=Symbol("");function Ei(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vs(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Hr(qe.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):ET(m)?c(Hr(qe.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(s&&s.instances[r],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Wl(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if($m(c)){const u=(c.__vccOpts||c)[e];u&&i.push(vs(u,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Gw(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&vs(m,n,s,o,l,r)()}))}}return i}function RT(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>$r(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>$r(u,c))||r.push(c))}return[n,s,r]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ST=()=>location.protocol+"//"+location.host;function Xm(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let o=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Nf(l,"")}return Nf(n,t)+s+r}function CT(t,e,n,s){let r=[],i=[],o=null;const l=({state:m})=>{const v=Xm(t,location),O=n.value,D=e.value;let k=0;if(m){if(n.value=v,e.value=m,o&&o===O){o=null;return}k=D?m.position-D.position:0}else s(v);r.forEach(M=>{M(n.value,O,{delta:k,type:wc.pop,direction:k?k>0?ql.forward:ql.back:ql.unknown})})};function c(){o=n.value}function u(m){r.push(m);const v=()=>{const O=r.indexOf(m);O>-1&&r.splice(O,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Pe({},m.state,{scroll:Ga()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function Lf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ga():null}}function PT(t){const{history:e,location:n}=window,s={value:Xm(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:ST()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),r.value=u}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(c,u){i(c,Pe({},e.state,Lf(r.value.back,c,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=c}function l(c,u){const f=Pe({},r.value,e.state,{forward:c,scroll:Ga()});i(f.current,f,!0),i(c,Pe({},Lf(s.value,c,null),{position:f.position+1},u),!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function kT(t){t=dT(t);const e=PT(t),n=CT(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Pe({location:"",base:t,go:s,createHref:mT.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Xs=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ze=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ze||{});const DT={type:Xs.Static,value:""},NT=/[a-zA-Z0-9_]/;function OT(t){if(!t)return[[]];if(t==="/")return[[DT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=Ze.Static,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===Ze.Static?i.push({type:Xs.Static,value:u}):n===Ze.Param||n===Ze.ParamRegExp||n===Ze.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Xs.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Ze.ParamRegExp){s=n,n=Ze.EscapeNext;continue}switch(n){case Ze.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Ze.Param):m();break;case Ze.EscapeNext:m(),n=s;break;case Ze.Param:c==="("?n=Ze.ParamRegExp:NT.test(c)?m():(p(),n=Ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Ze.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=Ze.ParamRegExpEnd:f+=c;break;case Ze.ParamRegExpEnd:p(),n=Ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===Ze.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}const Uf="[^/]+?",VT={sensitive:!1,strict:!1,start:!0,end:!0};var Pt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Pt||{});const xT=/[.+*?^${}()[\]/\\]/g;function MT(t,e){const n=Pe({},VT,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Pt.Root];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=Pt.Segment+(n.sensitive?Pt.BonusCaseSensitive:0);if(m.type===Xs.Static)p||(r+="/"),r+=m.value.replace(xT,"\\$&"),v+=Pt.Static;else if(m.type===Xs.Param){const{value:O,repeatable:D,optional:k,regexp:M}=m;i.push({name:O,repeatable:D,optional:k});const L=M||Uf;if(L!==Uf){v+=Pt.BonusCustomRegExp;try{`${L}`}catch(C){throw new Error(`Invalid custom RegExp for param "${O}" (${L}): `+C.message)}}let V=D?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;p||(V=k&&u.length<2?`(?:/${V})`:"/"+V),k&&(V+="?"),r+=V,v+=Pt.Dynamic,k&&(v+=Pt.BonusOptional),D&&(v+=Pt.BonusRepeatable),L===".*"&&(v+=Pt.BonusWildcard)}f.push(v)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Pt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",O=i[m-1];p[O.name]=v&&O.repeatable?v.split("/"):v}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of m)if(v.type===Xs.Static)f+=v.value;else if(v.type===Xs.Param){const{value:O,repeatable:D,optional:k}=v,M=O in u?u[O]:"";if(fn(M)&&!D)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const L=fn(M)?M.join("/"):M;if(!L)if(k)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);f+=L}}return f||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function LT(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===Pt.Static+Pt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Pt.Static+Pt.Segment?1:-1:0}function Zm(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=LT(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ff(s))return 1;if(Ff(r))return-1}return r.length-s.length}function Ff(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const UT={strict:!1,end:!0,sensitive:!1};function FT(t,e,n){const s=MT(OT(t.path),n),r=Pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function BT(t,e){const n=[],s=new Map;e=Df(UT,e);function r(p){return s.get(p)}function i(p,m,v){const O=!v,D=jf(p);D.aliasOf=v&&v.record;const k=Df(e,p),M=[D];if("alias"in p){const C=typeof p.alias=="string"?[p.alias]:p.alias;for(const z of C)M.push(jf(Pe({},D,{components:v?v.record.components:D.components,path:z,aliasOf:v?v.record:D})))}let L,V;for(const C of M){const{path:z}=C;if(m&&z[0]!=="/"){const Y=m.record.path,w=Y[Y.length-1]==="/"?"":"/";C.path=m.record.path+(z&&w+z)}if(L=FT(C,m,k),v?v.alias.push(L):(V=V||L,V!==L&&V.alias.push(L),O&&p.name&&!$f(L)&&o(p.name)),eg(L)&&c(L),D.children){const Y=D.children;for(let w=0;w<Y.length;w++)i(Y[w],L,v&&v.children[w])}v=v||L}return V?()=>{o(V)}:Mi}function o(p){if(Qm(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=HT(p,n);n.splice(m,0,p),p.record.name&&!$f(p)&&s.set(p.record.name,p)}function u(p,m){let v,O={},D,k;if("name"in p&&p.name){if(v=s.get(p.name),!v)throw Hr(qe.MATCHER_NOT_FOUND,{location:p});k=v.record.name,O=Pe(Bf(m.params,v.keys.filter(V=>!V.optional).concat(v.parent?v.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),p.params&&Bf(p.params,v.keys.map(V=>V.name))),D=v.stringify(O)}else if(p.path!=null)D=p.path,v=n.find(V=>V.re.test(D)),v&&(O=v.parse(D),k=v.record.name);else{if(v=m.name?s.get(m.name):n.find(V=>V.re.test(m.path)),!v)throw Hr(qe.MATCHER_NOT_FOUND,{location:p,currentLocation:m});k=v.record.name,O=Pe({},m.params,p.params),D=v.stringify(O)}const M=[];let L=v;for(;L;)M.unshift(L.record),L=L.parent;return{name:k,path:D,params:O,matched:M,meta:$T(M)}}t.forEach(p=>i(p));function f(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:r}}function Bf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function jf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function $f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $T(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function HT(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Zm(t,e[i])<0?s=i:n=i+1}const r=zT(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function zT(t){let e=t;for(;e=e.parent;)if(eg(e)&&Zm(t,e)===0)return e}function eg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Hf(t){const e=cn(Ka),n=cn(Jm),s=$e(()=>{const c=Tn(t.to);return e.resolve(c)}),r=$e(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex($r.bind(null,f));if(m>-1)return m;const v=zf(c[u-2]);return u>1&&zf(f)===v&&p[p.length-1].path!==v?p.findIndex($r.bind(null,c[u-2])):m}),i=$e(()=>r.value>-1&&QT(n.params,s.value.params)),o=$e(()=>r.value>-1&&r.value===n.matched.length-1&&Km(n.params,s.value.params));function l(c={}){if(KT(c)){const u=e[Tn(t.replace)?"replace":"push"](Tn(t.to)).catch(Mi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:$e(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function qT(t){return t.length===1?t[0]:t}const WT=am({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Hf,setup(t,{slots:e}){const n=oo(Hf(t)),{options:s}=cn(Ka),r=$e(()=>({[qf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[qf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&qT(e.default(n));return t.custom?i:Vm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),GT=WT;function KT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QT(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!fn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function zf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qf=(t,e,n)=>t??e??n,YT=am({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=cn(Ic),r=$e(()=>t.route||s.value),i=cn(Mf,0),o=$e(()=>{let u=Tn(i);const{matched:f}=r.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=$e(()=>r.value.matched[o.value]);zo(Mf,$e(()=>o.value+1)),zo(AT,l),zo(Ic,r);const c=ne();return Ss(()=>[c.value,l.value,t.name],([u,f,p],[m,v,O])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!$r(f,v)||!m)&&(f.enterCallbacks[p]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=r.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return Wf(n.default,{Component:m,route:u});const v=p.props[f],O=v?v===!0?u.params:typeof v=="function"?v(u):v:null,k=Vm(m,Pe({},O,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Wf(n.default,{Component:k,route:u})||k}}});function Wf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const JT=YT;function XT(t){const e=BT(t.routes,t),n=t.parseQuery||IT,s=t.stringifyQuery||xf,r=t.history,i=Ei(),o=Ei(),l=Ei(),c=Bv(ps);let u=ps;Rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Hl.bind(null,F=>""+F),p=Hl.bind(null,oT),m=Hl.bind(null,Ki);function v(F,ee){let X,ie;return Qm(F)?(X=e.getRecordMatcher(F),ie=ee):ie=F,e.addRoute(ie,X)}function O(F){const ee=e.getRecordMatcher(F);ee&&e.removeRoute(ee)}function D(){return e.getRoutes().map(F=>F.record)}function k(F){return!!e.getRecordMatcher(F)}function M(F,ee){if(ee=Pe({},ee||c.value),typeof F=="string"){const P=zl(n,F,ee.path),B=e.resolve({path:P.path},ee),$=r.createHref(P.fullPath);return Pe(P,B,{params:m(B.params),hash:Ki(P.hash),redirectedFrom:void 0,href:$})}let X;if(F.path!=null)X=Pe({},F,{path:zl(n,F.path,ee.path).path});else{const P=Pe({},F.params);for(const B in P)P[B]==null&&delete P[B];X=Pe({},F,{params:p(P)}),ee.params=p(ee.params)}const ie=e.resolve(X,ee),Ee=F.hash||"";ie.params=f(m(ie.params));const T=cT(s,Pe({},F,{hash:sT(Ee),path:ie.path})),A=r.createHref(T);return Pe({fullPath:T,hash:Ee,query:s===xf?bT(F.query):F.query||{}},ie,{redirectedFrom:void 0,href:A})}function L(F){return typeof F=="string"?zl(n,F,c.value.path):Pe({},F)}function V(F,ee){if(u!==F)return Hr(qe.NAVIGATION_CANCELLED,{from:ee,to:F})}function C(F){return w(F)}function z(F){return C(Pe(L(F),{replace:!0}))}function Y(F,ee){const X=F.matched[F.matched.length-1];if(X&&X.redirect){const{redirect:ie}=X;let Ee=typeof ie=="function"?ie(F,ee):ie;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=L(Ee):{path:Ee},Ee.params={}),Pe({query:F.query,hash:F.hash,params:Ee.path!=null?{}:F.params},Ee)}}function w(F,ee){const X=u=M(F),ie=c.value,Ee=F.state,T=F.force,A=F.replace===!0,P=Y(X,ie);if(P)return w(Pe(L(P),{state:typeof P=="object"?Pe({},Ee,P.state):Ee,force:T,replace:A}),ee||X);const B=X;B.redirectedFrom=ee;let $;return!T&&uT(s,ie,X)&&($=Hr(qe.NAVIGATION_DUPLICATED,{to:B,from:ie}),Bt(ie,ie,!0,!1)),($?Promise.resolve($):R(B,ie)).catch(U=>Bn(U)?Bn(U,qe.NAVIGATION_GUARD_REDIRECT)?U:dn(U):be(U,B,ie)).then(U=>{if(U){if(Bn(U,qe.NAVIGATION_GUARD_REDIRECT))return w(Pe({replace:A},L(U.to),{state:typeof U.to=="object"?Pe({},Ee,U.to.state):Ee,force:T}),ee||B)}else U=b(B,ie,!0,A,Ee);return I(B,ie,U),U})}function _(F,ee){const X=V(F,ee);return X?Promise.reject(X):Promise.resolve()}function E(F){const ee=tn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(F):F()}function R(F,ee){let X;const[ie,Ee,T]=RT(F,ee);X=Wl(ie.reverse(),"beforeRouteLeave",F,ee);for(const P of ie)P.leaveGuards.forEach(B=>{X.push(vs(B,F,ee))});const A=_.bind(null,F,ee);return X.push(A),pt(X).then(()=>{X=[];for(const P of i.list())X.push(vs(P,F,ee));return X.push(A),pt(X)}).then(()=>{X=Wl(Ee,"beforeRouteUpdate",F,ee);for(const P of Ee)P.updateGuards.forEach(B=>{X.push(vs(B,F,ee))});return X.push(A),pt(X)}).then(()=>{X=[];for(const P of T)if(P.beforeEnter)if(fn(P.beforeEnter))for(const B of P.beforeEnter)X.push(vs(B,F,ee));else X.push(vs(P.beforeEnter,F,ee));return X.push(A),pt(X)}).then(()=>(F.matched.forEach(P=>P.enterCallbacks={}),X=Wl(T,"beforeRouteEnter",F,ee,E),X.push(A),pt(X))).then(()=>{X=[];for(const P of o.list())X.push(vs(P,F,ee));return X.push(A),pt(X)}).catch(P=>Bn(P,qe.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function I(F,ee,X){l.list().forEach(ie=>E(()=>ie(F,ee,X)))}function b(F,ee,X,ie,Ee){const T=V(F,ee);if(T)return T;const A=ee===ps,P=Rr?history.state:{};X&&(ie||A?r.replace(F.fullPath,Pe({scroll:A&&P&&P.scroll},Ee)):r.push(F.fullPath,Ee)),c.value=F,Bt(F,ee,X,A),dn()}let y;function Oe(){y||(y=r.listen((F,ee,X)=>{if(!nn.listening)return;const ie=M(F),Ee=Y(ie,nn.currentRoute.value);if(Ee){w(Pe(Ee,{replace:!0,force:!0}),ie).catch(Mi);return}u=ie;const T=c.value;Rr&&yT(Vf(T.fullPath,X.delta),Ga()),R(ie,T).catch(A=>Bn(A,qe.NAVIGATION_ABORTED|qe.NAVIGATION_CANCELLED)?A:Bn(A,qe.NAVIGATION_GUARD_REDIRECT)?(w(Pe(L(A.to),{force:!0}),ie).then(P=>{Bn(P,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&!X.delta&&X.type===wc.pop&&r.go(-1,!1)}).catch(Mi),Promise.reject()):(X.delta&&r.go(-X.delta,!1),be(A,ie,T))).then(A=>{A=A||b(ie,T,!1),A&&(X.delta&&!Bn(A,qe.NAVIGATION_CANCELLED)?r.go(-X.delta,!1):X.type===wc.pop&&Bn(A,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),I(ie,T,A)}).catch(Mi)}))}let dt=Ei(),Le=Ei(),me;function be(F,ee,X){dn(F);const ie=Le.list();return ie.length?ie.forEach(Ee=>Ee(F,ee,X)):console.error(F),Promise.reject(F)}function xt(){return me&&c.value!==ps?Promise.resolve():new Promise((F,ee)=>{dt.add([F,ee])})}function dn(F){return me||(me=!F,Oe(),dt.list().forEach(([ee,X])=>F?X(F):ee()),dt.reset()),F}function Bt(F,ee,X,ie){const{scrollBehavior:Ee}=t;if(!Rr||!Ee)return Promise.resolve();const T=!X&&vT(Vf(F.fullPath,0))||(ie||!X)&&history.state&&history.state.scroll||null;return lo().then(()=>Ee(F,ee,T)).then(A=>A&&_T(A)).catch(A=>be(A,F,ee))}const at=F=>r.go(F);let Un;const tn=new Set,nn={currentRoute:c,listening:!0,addRoute:v,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:D,resolve:M,options:t,push:C,replace:z,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Le.add,isReady:xt,install(F){F.component("RouterLink",GT),F.component("RouterView",JT),F.config.globalProperties.$router=nn,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Tn(c)}),Rr&&!Un&&c.value===ps&&(Un=!0,C(r.location).catch(ie=>{}));const ee={};for(const ie in ps)Object.defineProperty(ee,ie,{get:()=>c.value[ie],enumerable:!0});F.provide(Ka,nn),F.provide(Jm,Zp(ee)),F.provide(Ic,c);const X=F.unmount;tn.add(F),F.unmount=function(){tn.delete(F),tn.size<1&&(u=ps,y&&y(),y=null,c.value=ps,Un=!1,me=!1),X()}}};function pt(F){return F.reduce((ee,X)=>ee.then(()=>E(X)),Promise.resolve())}return nn}function Qa(){return cn(Ka)}const ZT=()=>{};var Gf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},eI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(m=64)),s.push(n[f],n[p],n[m],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||p==null)throw new tI;const m=i<<2|l>>4;if(s.push(m),u!==64){const v=l<<4&240|u>>2;if(s.push(v),p!==64){const O=u<<6&192|p;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(t){const e=tg(t);return ng.encodeByteArray(e,!0)},pa=function(t){return nI(t).replace(/\./g,"")},sg=function(t){try{return ng.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rI=()=>sI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof Gf>"u")return;const t=Gf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sg(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return ZT()||rI()||iI()||oI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rg=t=>Ya()?.emulatorHosts?.[t],ig=t=>{const e=rg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},og=()=>Ya()?.config,ag=t=>Ya()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function dr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function lg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pa(JSON.stringify(n)),pa(JSON.stringify(o)),""].join(".")}const Li={};function lI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Li))Li[e]?t.emulator.push(e):t.prod.push(e);return t}function cI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Kf=!1;function gu(t,e){if(typeof window>"u"||typeof document>"u"||!dr(window.location.host)||Li[t]===e||Li[t]||Kf)return;Li[t]=e;function n(m){return`__firebase__banner__${m}`}const s="__firebase__banner",i=lI().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Kf=!0,o()},m}function f(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=cI(s),v=n("text"),O=document.getElementById(v)||document.createElement("span"),D=n("learnmore"),k=document.getElementById(D)||document.createElement("a"),M=n("preprendIcon"),L=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const V=m.element;l(V),f(k,D);const C=u();c(L,M),V.append(L,O,k,C),document.body.appendChild(V)}i?(O.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function hI(){const t=Ya()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mI(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gI(){return!hI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _I(){try{return typeof indexedDB=="object"}catch{return!1}}function yI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="FirebaseError";class Mn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=vI,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?EI(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Mn(r,l,s)}}function EI(t,e){return t.replace(wI,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const wI=/\{\$([^}]+)}/g;function TI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ir(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Qf(i)&&Qf(o)){if(!ir(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Qf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function II(t,e){const n=new bI(t,e);return n.subscribe.bind(n)}class bI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");AI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Gl),r.error===void 0&&(r.error=Gl),r.complete===void 0&&(r.complete=Gl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gl(){}/**
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
 */function Vt(t){return t&&t._delegate?t._delegate:t}class Ms{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Js="[DEFAULT]";/**
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
 */class RI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new aI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CI(e))try{this.getOrInitializeService({instanceIdentifier:Js})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Js){return this.instances.has(e)}getOptions(e=Js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:SI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Js){return this.component?this.component.multipleInstances?e:Js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SI(t){return t===Js?void 0:t}function CI(t){return t.instantiationMode==="EAGER"}/**
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
 */class PI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const kI={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},DI=we.INFO,NI={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},OI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=NI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=DI,this._logHandler=OI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const VI=(t,e)=>e.some(n=>t instanceof n);let Yf,Jf;function xI(){return Yf||(Yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MI(){return Jf||(Jf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cg=new WeakMap,bc=new WeakMap,ug=new WeakMap,Kl=new WeakMap,yu=new WeakMap;function LI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ps(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cg.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function UI(t){if(bc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ug.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ps(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FI(t){Ac=t(Ac)}function BI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ql(this),e,...n);return ug.set(s,e.sort?e.sort():[e]),Ps(s)}:MI().includes(t)?function(...e){return t.apply(Ql(this),e),Ps(cg.get(this))}:function(...e){return Ps(t.apply(Ql(this),e))}}function jI(t){return typeof t=="function"?BI(t):(t instanceof IDBTransaction&&UI(t),VI(t,xI())?new Proxy(t,Ac):t)}function Ps(t){if(t instanceof IDBRequest)return LI(t);if(Kl.has(t))return Kl.get(t);const e=jI(t);return e!==t&&(Kl.set(t,e),yu.set(e,t)),e}const Ql=t=>yu.get(t);function $I(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=Ps(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ps(o.result),c.oldVersion,c.newVersion,Ps(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const HI=["get","getKey","getAll","getAllKeys","count"],zI=["put","add","delete","clear"],Yl=new Map;function Xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yl.get(e))return Yl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=zI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||HI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return Yl.set(e,i),i}FI(t=>({...t,get:(e,n,s)=>Xf(e,n)||t.get(e,n,s),has:(e,n)=>!!Xf(e,n)||t.has(e,n)}));/**
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
 */class qI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function WI(t){return t.getComponent()?.type==="VERSION"}const Rc="@firebase/app",Zf="0.14.4";/**
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
 */const Zn=new _u("@firebase/app"),GI="@firebase/app-compat",KI="@firebase/analytics-compat",QI="@firebase/analytics",YI="@firebase/app-check-compat",JI="@firebase/app-check",XI="@firebase/auth",ZI="@firebase/auth-compat",eb="@firebase/database",tb="@firebase/data-connect",nb="@firebase/database-compat",sb="@firebase/functions",rb="@firebase/functions-compat",ib="@firebase/installations",ob="@firebase/installations-compat",ab="@firebase/messaging",lb="@firebase/messaging-compat",cb="@firebase/performance",ub="@firebase/performance-compat",hb="@firebase/remote-config",fb="@firebase/remote-config-compat",db="@firebase/storage",pb="@firebase/storage-compat",mb="@firebase/firestore",gb="@firebase/ai",_b="@firebase/firestore-compat",yb="firebase",vb="12.4.0";/**
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
 */const Sc="[DEFAULT]",Eb={[Rc]:"fire-core",[GI]:"fire-core-compat",[QI]:"fire-analytics",[KI]:"fire-analytics-compat",[JI]:"fire-app-check",[YI]:"fire-app-check-compat",[XI]:"fire-auth",[ZI]:"fire-auth-compat",[eb]:"fire-rtdb",[tb]:"fire-data-connect",[nb]:"fire-rtdb-compat",[sb]:"fire-fn",[rb]:"fire-fn-compat",[ib]:"fire-iid",[ob]:"fire-iid-compat",[ab]:"fire-fcm",[lb]:"fire-fcm-compat",[cb]:"fire-perf",[ub]:"fire-perf-compat",[hb]:"fire-rc",[fb]:"fire-rc-compat",[db]:"fire-gcs",[pb]:"fire-gcs-compat",[mb]:"fire-fst",[_b]:"fire-fst-compat",[gb]:"fire-vertex","fire-js":"fire-js",[yb]:"fire-js-all"};/**
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
 */const ma=new Map,wb=new Map,Cc=new Map;function ed(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function or(t){const e=t.name;if(Cc.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of ma.values())ed(n,t);for(const n of wb.values())ed(n,t);return!0}function Ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Tb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ks=new uo("app","Firebase",Tb);/**
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
 */class Ib{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ms("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ks.create("app-deleted",{appName:this._name})}}/**
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
 */const pr=vb;function hg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Sc,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw ks.create("bad-app-name",{appName:String(r)});if(n||(n=og()),!n)throw ks.create("no-options");const i=ma.get(r);if(i){if(ir(n,i.options)&&ir(s,i.config))return i;throw ks.create("duplicate-app",{appName:r})}const o=new PI(r);for(const c of Cc.values())o.addComponent(c);const l=new Ib(n,s,o);return ma.set(r,l),l}function vu(t=Sc){const e=ma.get(t);if(!e&&t===Sc&&og())return hg();if(!e)throw ks.create("no-app",{appName:t});return e}function In(t,e,n){let s=Eb[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(o.join(" "));return}or(new Ms(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bb="firebase-heartbeat-database",Ab=1,Qi="firebase-heartbeat-store";let Jl=null;function fg(){return Jl||(Jl=$I(bb,Ab,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ks.create("idb-open",{originalErrorMessage:t.message})})),Jl}async function Rb(t){try{const n=(await fg()).transaction(Qi),s=await n.objectStore(Qi).get(dg(t));return await n.done,s}catch(e){if(e instanceof Mn)Zn.warn(e.message);else{const n=ks.create("idb-get",{originalErrorMessage:e?.message});Zn.warn(n.message)}}}async function td(t,e){try{const s=(await fg()).transaction(Qi,"readwrite");await s.objectStore(Qi).put(e,dg(t)),await s.done}catch(n){if(n instanceof Mn)Zn.warn(n.message);else{const s=ks.create("idb-set",{originalErrorMessage:n?.message});Zn.warn(s.message)}}}function dg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sb=1024,Cb=30;class Pb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Db(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Cb){const r=Nb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Zn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nd(),{heartbeatsToSend:n,unsentEntries:s}=kb(this._heartbeatsCache.heartbeats),r=pa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Zn.warn(e),""}}}function nd(){return new Date().toISOString().substring(0,10)}function kb(t,e=Sb){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),sd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),sd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Db{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _I()?yI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return td(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return td(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sd(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}function Nb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Ob(t){or(new Ms("platform-logger",e=>new qI(e),"PRIVATE")),or(new Ms("heartbeat",e=>new Pb(e),"PRIVATE")),In(Rc,Zf,t),In(Rc,Zf,"esm2020"),In("fire-js","")}Ob("");var rd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ds,pg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function E(){}E.prototype=_.prototype,w.F=_.prototype,w.prototype=new E,w.prototype.constructor=w,w.D=function(R,I,b){for(var y=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)y[Oe-2]=arguments[Oe];return _.prototype[I].apply(R,y)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,_,E){E||(E=0);const R=Array(16);if(typeof _=="string")for(var I=0;I<16;++I)R[I]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(I=0;I<16;++I)R[I]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=w.g[0],E=w.g[1],I=w.g[2];let b=w.g[3],y;y=_+(b^E&(I^b))+R[0]+3614090360&4294967295,_=E+(y<<7&4294967295|y>>>25),y=b+(I^_&(E^I))+R[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(E^b&(_^E))+R[2]+606105819&4294967295,I=b+(y<<17&4294967295|y>>>15),y=E+(_^I&(b^_))+R[3]+3250441966&4294967295,E=I+(y<<22&4294967295|y>>>10),y=_+(b^E&(I^b))+R[4]+4118548399&4294967295,_=E+(y<<7&4294967295|y>>>25),y=b+(I^_&(E^I))+R[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(E^b&(_^E))+R[6]+2821735955&4294967295,I=b+(y<<17&4294967295|y>>>15),y=E+(_^I&(b^_))+R[7]+4249261313&4294967295,E=I+(y<<22&4294967295|y>>>10),y=_+(b^E&(I^b))+R[8]+1770035416&4294967295,_=E+(y<<7&4294967295|y>>>25),y=b+(I^_&(E^I))+R[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(E^b&(_^E))+R[10]+4294925233&4294967295,I=b+(y<<17&4294967295|y>>>15),y=E+(_^I&(b^_))+R[11]+2304563134&4294967295,E=I+(y<<22&4294967295|y>>>10),y=_+(b^E&(I^b))+R[12]+1804603682&4294967295,_=E+(y<<7&4294967295|y>>>25),y=b+(I^_&(E^I))+R[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(E^b&(_^E))+R[14]+2792965006&4294967295,I=b+(y<<17&4294967295|y>>>15),y=E+(_^I&(b^_))+R[15]+1236535329&4294967295,E=I+(y<<22&4294967295|y>>>10),y=_+(I^b&(E^I))+R[1]+4129170786&4294967295,_=E+(y<<5&4294967295|y>>>27),y=b+(E^I&(_^E))+R[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^E&(b^_))+R[11]+643717713&4294967295,I=b+(y<<14&4294967295|y>>>18),y=E+(b^_&(I^b))+R[0]+3921069994&4294967295,E=I+(y<<20&4294967295|y>>>12),y=_+(I^b&(E^I))+R[5]+3593408605&4294967295,_=E+(y<<5&4294967295|y>>>27),y=b+(E^I&(_^E))+R[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^E&(b^_))+R[15]+3634488961&4294967295,I=b+(y<<14&4294967295|y>>>18),y=E+(b^_&(I^b))+R[4]+3889429448&4294967295,E=I+(y<<20&4294967295|y>>>12),y=_+(I^b&(E^I))+R[9]+568446438&4294967295,_=E+(y<<5&4294967295|y>>>27),y=b+(E^I&(_^E))+R[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^E&(b^_))+R[3]+4107603335&4294967295,I=b+(y<<14&4294967295|y>>>18),y=E+(b^_&(I^b))+R[8]+1163531501&4294967295,E=I+(y<<20&4294967295|y>>>12),y=_+(I^b&(E^I))+R[13]+2850285829&4294967295,_=E+(y<<5&4294967295|y>>>27),y=b+(E^I&(_^E))+R[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^E&(b^_))+R[7]+1735328473&4294967295,I=b+(y<<14&4294967295|y>>>18),y=E+(b^_&(I^b))+R[12]+2368359562&4294967295,E=I+(y<<20&4294967295|y>>>12),y=_+(E^I^b)+R[5]+4294588738&4294967295,_=E+(y<<4&4294967295|y>>>28),y=b+(_^E^I)+R[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^E)+R[11]+1839030562&4294967295,I=b+(y<<16&4294967295|y>>>16),y=E+(I^b^_)+R[14]+4259657740&4294967295,E=I+(y<<23&4294967295|y>>>9),y=_+(E^I^b)+R[1]+2763975236&4294967295,_=E+(y<<4&4294967295|y>>>28),y=b+(_^E^I)+R[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^E)+R[7]+4139469664&4294967295,I=b+(y<<16&4294967295|y>>>16),y=E+(I^b^_)+R[10]+3200236656&4294967295,E=I+(y<<23&4294967295|y>>>9),y=_+(E^I^b)+R[13]+681279174&4294967295,_=E+(y<<4&4294967295|y>>>28),y=b+(_^E^I)+R[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^E)+R[3]+3572445317&4294967295,I=b+(y<<16&4294967295|y>>>16),y=E+(I^b^_)+R[6]+76029189&4294967295,E=I+(y<<23&4294967295|y>>>9),y=_+(E^I^b)+R[9]+3654602809&4294967295,_=E+(y<<4&4294967295|y>>>28),y=b+(_^E^I)+R[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^E)+R[15]+530742520&4294967295,I=b+(y<<16&4294967295|y>>>16),y=E+(I^b^_)+R[2]+3299628645&4294967295,E=I+(y<<23&4294967295|y>>>9),y=_+(I^(E|~b))+R[0]+4096336452&4294967295,_=E+(y<<6&4294967295|y>>>26),y=b+(E^(_|~I))+R[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~E))+R[14]+2878612391&4294967295,I=b+(y<<15&4294967295|y>>>17),y=E+(b^(I|~_))+R[5]+4237533241&4294967295,E=I+(y<<21&4294967295|y>>>11),y=_+(I^(E|~b))+R[12]+1700485571&4294967295,_=E+(y<<6&4294967295|y>>>26),y=b+(E^(_|~I))+R[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~E))+R[10]+4293915773&4294967295,I=b+(y<<15&4294967295|y>>>17),y=E+(b^(I|~_))+R[1]+2240044497&4294967295,E=I+(y<<21&4294967295|y>>>11),y=_+(I^(E|~b))+R[8]+1873313359&4294967295,_=E+(y<<6&4294967295|y>>>26),y=b+(E^(_|~I))+R[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~E))+R[6]+2734768916&4294967295,I=b+(y<<15&4294967295|y>>>17),y=E+(b^(I|~_))+R[13]+1309151649&4294967295,E=I+(y<<21&4294967295|y>>>11),y=_+(I^(E|~b))+R[4]+4149444226&4294967295,_=E+(y<<6&4294967295|y>>>26),y=b+(E^(_|~I))+R[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~E))+R[2]+718787259&4294967295,I=b+(y<<15&4294967295|y>>>17),y=E+(b^(I|~_))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}s.prototype.v=function(w,_){_===void 0&&(_=w.length);const E=_-this.blockSize,R=this.C;let I=this.h,b=0;for(;b<_;){if(I==0)for(;b<=E;)r(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<_;)if(R[I++]=w.charCodeAt(b++),I==this.blockSize){r(this,R),I=0;break}}else for(;b<_;)if(R[I++]=w[b++],I==this.blockSize){r(this,R),I=0;break}}this.h=I,this.o+=_},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var E=w.length-8;E<w.length;++E)w[E]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,E=0;E<4;++E)for(let R=0;R<32;R+=8)w[_++]=this.g[E]>>>R&255;return w};function i(w,_){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=_(w)}function o(w,_){this.h=_;const E=[];let R=!0;for(let I=w.length-1;I>=0;I--){const b=w[I]|0;R&&b==_||(E[I]=b,R=!1)}this.g=E}var l={};function c(w){return-128<=w&&w<128?i(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return k(u(-w));const _=[];let E=1;for(let R=0;w>=E;R++)_[R]=w/E|0,E*=4294967296;return new o(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return k(f(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(_,8));let R=p;for(let b=0;b<w.length;b+=8){var I=Math.min(8,w.length-b);const y=parseInt(w.substring(b,b+I),_);I<8?(I=u(Math.pow(_,I)),R=R.j(I).add(u(y))):(R=R.j(E),R=R.add(u(y)))}return R}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(D(this))return-k(this).m();let w=0,_=1;for(let E=0;E<this.g.length;E++){const R=this.i(E);w+=(R>=0?R:4294967296+R)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(D(this))return"-"+k(this).toString(w);const _=u(Math.pow(w,6));var E=this;let R="";for(;;){const I=C(E,_).g;E=M(E,I.j(_));let b=((E.g.length>0?E.g[0]:E.h)>>>0).toString(w);if(E=I,O(E))return b+R;for(;b.length<6;)b="0"+b;R=b+R}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=M(this,w),D(w)?-1:O(w)?0:1};function k(w){const _=w.g.length,E=[];for(let R=0;R<_;R++)E[R]=~w.g[R];return new o(E,~w.h).add(m)}t.abs=function(){return D(this)?k(this):this},t.add=function(w){const _=Math.max(this.g.length,w.g.length),E=[];let R=0;for(let I=0;I<=_;I++){let b=R+(this.i(I)&65535)+(w.i(I)&65535),y=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);R=y>>>16,b&=65535,y&=65535,E[I]=y<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function M(w,_){return w.add(k(_))}t.j=function(w){if(O(this)||O(w))return p;if(D(this))return D(w)?k(this).j(k(w)):k(k(this).j(w));if(D(w))return k(this.j(k(w)));if(this.l(v)<0&&w.l(v)<0)return u(this.m()*w.m());const _=this.g.length+w.g.length,E=[];for(var R=0;R<2*_;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(let I=0;I<w.g.length;I++){const b=this.i(R)>>>16,y=this.i(R)&65535,Oe=w.i(I)>>>16,dt=w.i(I)&65535;E[2*R+2*I]+=y*dt,L(E,2*R+2*I),E[2*R+2*I+1]+=b*dt,L(E,2*R+2*I+1),E[2*R+2*I+1]+=y*Oe,L(E,2*R+2*I+1),E[2*R+2*I+2]+=b*Oe,L(E,2*R+2*I+2)}for(w=0;w<_;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=_;w<2*_;w++)E[w]=0;return new o(E,0)};function L(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function V(w,_){this.g=w,this.h=_}function C(w,_){if(O(_))throw Error("division by zero");if(O(w))return new V(p,p);if(D(w))return _=C(k(w),_),new V(k(_.g),k(_.h));if(D(_))return _=C(w,k(_)),new V(k(_.g),_.h);if(w.g.length>30){if(D(w)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,R=_;R.l(w)<=0;)E=z(E),R=z(R);var I=Y(E,1),b=Y(R,1);for(R=Y(R,2),E=Y(E,2);!O(R);){var y=b.add(R);y.l(w)<=0&&(I=I.add(E),b=y),R=Y(R,1),E=Y(E,1)}return _=M(w,I.j(_)),new V(I,_)}for(I=p;w.l(_)>=0;){for(E=Math.max(1,Math.floor(w.m()/_.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),b=u(E),y=b.j(_);D(y)||y.l(w)>0;)E-=R,b=u(E),y=b.j(_);O(b)&&(b=m),I=I.add(b),w=M(w,y)}return new V(I,w)}t.B=function(w){return C(this,w).h},t.and=function(w){const _=Math.max(this.g.length,w.g.length),E=[];for(let R=0;R<_;R++)E[R]=this.i(R)&w.i(R);return new o(E,this.h&w.h)},t.or=function(w){const _=Math.max(this.g.length,w.g.length),E=[];for(let R=0;R<_;R++)E[R]=this.i(R)|w.i(R);return new o(E,this.h|w.h)},t.xor=function(w){const _=Math.max(this.g.length,w.g.length),E=[];for(let R=0;R<_;R++)E[R]=this.i(R)^w.i(R);return new o(E,this.h^w.h)};function z(w){const _=w.g.length+1,E=[];for(let R=0;R<_;R++)E[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(E,w.h)}function Y(w,_){const E=_>>5;_%=32;const R=w.g.length-E,I=[];for(let b=0;b<R;b++)I[b]=_>0?w.i(b+E)>>>_|w.i(b+E+1)<<32-_:w.i(b+E);return new o(I,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,pg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ds=o}).apply(typeof rd<"u"?rd:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mg,bi,gg,Go,Pc,_g,yg,vg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=n(this);function r(a,h){if(h)e:{var d=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=c,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,N,x){for(var Q=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)Q[_e-2]=arguments[_e];return h.prototype[N].apply(g,Q)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const x=N.length||0;a.length=d+x;for(let Q=0;Q<x;Q++)a[d+Q]=N[Q]}else a.push(N)}}class D{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function M(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class L{constructor(){this.h=this.g=null}add(h,d){const g=V.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var V=new D(()=>new C,a=>a.reset());class C{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let z,Y=!1,w=new L,_=()=>{const a=Promise.resolve(void 0);z=()=>{a.then(E)}};function E(){for(var a;a=M();){try{a.h.call(a.g)}catch(d){k(d)}var h=V;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}Y=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Oe(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Oe,I),Oe.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dt="closure_listenable_"+(Math.random()*1e6|0),Le=0;function me(a,h,d,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=N,this.key=++Le,this.da=this.fa=!1}function be(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xt(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function dn(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Bt(a){const h={};for(const d in a)h[d]=a[d];return h}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Un(a,h){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let x=0;x<at.length;x++)d=at[x],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function tn(a){this.src=a,this.g={},this.h=0}tn.prototype.add=function(a,h,d,g,N){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const Q=pt(a,h,g,N);return Q>-1?(h=a[Q],d||(h.fa=!1)):(h=new me(h,this.src,x,!!g,N),h.fa=d,a.push(h)),h};function nn(a,h){const d=h.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,h,void 0),x;(x=N>=0)&&Array.prototype.splice.call(g,N,1),x&&(be(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function pt(a,h,d,g){for(let N=0;N<a.length;++N){const x=a[N];if(!x.da&&x.listener==h&&x.capture==!!d&&x.ha==g)return N}return-1}var F="closure_lm_"+(Math.random()*1e6|0),ee={};function X(a,h,d,g,N){if(Array.isArray(h)){for(let x=0;x<h.length;x++)X(a,h[x],d,g,N);return null}return d=J(d),a&&a[dt]?a.J(h,d,l(g)?!!g.capture:!1,N):ie(a,h,d,!1,g,N)}function ie(a,h,d,g,N,x){if(!h)throw Error("Invalid event type");const Q=l(N)?!!N.capture:!!N;let _e=$(a);if(_e||(a[F]=_e=new tn(a)),d=_e.add(h,d,g,Q,x),d.proxy)return d;if(g=Ee(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)b||(N=Q),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(P(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ee(){function a(d){return h.call(a.src,a.listener,d)}const h=B;return a}function T(a,h,d,g,N){if(Array.isArray(h))for(var x=0;x<h.length;x++)T(a,h[x],d,g,N);else g=l(g)?!!g.capture:!!g,d=J(d),a&&a[dt]?(a=a.i,x=String(h).toString(),x in a.g&&(h=a.g[x],d=pt(h,d,g,N),d>-1&&(be(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[x],a.h--)))):a&&(a=$(a))&&(h=a.g[h.toString()],a=-1,h&&(a=pt(h,d,g,N)),(d=a>-1?h[a]:null)&&A(d))}function A(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[dt])nn(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(P(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=$(h))?(nn(d,a),d.h==0&&(d.src=null,h[F]=null)):be(a)}}}function P(a){return a in ee?ee[a]:ee[a]="on"+a}function B(a,h){if(a.da)a=!0;else{h=new Oe(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&A(a),a=d.call(g,h)}return a}function $(a){return a=a[F],a instanceof tn?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function J(a){return typeof a=="function"?a:(a[U]||(a[U]=function(h){return a.handleEvent(h)}),a[U])}function G(){R.call(this),this.i=new tn(this),this.M=this,this.G=null}p(G,R),G.prototype[dt]=!0,G.prototype.removeEventListener=function(a,h,d,g){T(this,a,h,d,g)};function q(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var N=h;h=new I(g,a),Un(h,N)}N=!0;let x,Q;if(d)for(Q=d.length-1;Q>=0;Q--)x=h.g=d[Q],N=W(x,g,!0,h)&&N;if(x=h.g=a,N=W(x,g,!0,h)&&N,N=W(x,g,!1,h)&&N,d)for(Q=0;Q<d.length;Q++)x=h.g=d[Q],N=W(x,g,!1,h)&&N}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)be(d[g]);delete a.g[h],a.h--}}this.G=null},G.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},G.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function W(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let x=0;x<h.length;++x){const Q=h[x];if(Q&&!Q.da&&Q.capture==d){const _e=Q.listener,Xe=Q.ha||Q.src;Q.fa&&nn(a.i,Q),N=_e.call(Xe,g)!==!1&&N}}return N&&!g.defaultPrevented}function le(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Z(a){a.g=le(()=>{a.g=null,a.i&&(a.i=!1,Z(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class oe extends R{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Z(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(a){R.call(this),this.h=a,this.g={}}p(ce,R);var ve=[];function Ne(a){xt(a.g,function(h,d){this.g.hasOwnProperty(d)&&A(h)},a),a.g={}}ce.prototype.N=function(){ce.Z.N.call(this),Ne(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Re=o.JSON.stringify,mt=o.JSON.parse,gt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function jt(){}function $t(){}var sn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vr(){I.call(this,"d")}p(vr,I);function lt(){I.call(this,"c")}p(lt,I);var st={},si=null;function Hs(){return si=si||new G}st.Ia="serverreachability";function lh(a){I.call(this,st.Ia,a)}p(lh,I);function ri(a){const h=Hs();q(h,new lh(h))}st.STAT_EVENT="statevent";function ch(a,h){I.call(this,st.STAT_EVENT,a),this.stat=h}p(ch,I);function St(a){const h=Hs();q(h,new ch(h,a))}st.Ja="timingevent";function uh(a,h){I.call(this,st.Ja,a),this.size=h}p(uh,I);function ii(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function oi(){this.g=!0}oi.prototype.ua=function(){this.g=!1};function jy(a,h,d,g,N,x){a.info(function(){if(a.g)if(x){var Q="",_e=x.split("&");for(let Ve=0;Ve<_e.length;Ve++){var Xe=_e[Ve].split("=");if(Xe.length>1){const rt=Xe[0];Xe=Xe[1];const mn=rt.split("_");Q=mn.length>=2&&mn[1]=="type"?Q+(rt+"="+Xe+"&"):Q+(rt+"=redacted&")}}}else Q=null;else Q=x;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+d+`
`+Q})}function $y(a,h,d,g,N,x,Q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+d+`
`+x+" "+Q})}function Er(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+zy(a,d)+(g?" "+g:"")})}function Hy(a,h){a.info(function(){return"TIMEOUT: "+h})}oi.prototype.info=function(){};function zy(a,h){if(!a.g)return h;if(!h)return null;try{const x=JSON.parse(h);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var d=x[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let Q=1;Q<g.length;Q++)g[Q]=""}}}}return Re(x)}catch{return h}}var To={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fh;function yl(){}p(yl,jt),yl.prototype.g=function(){return new XMLHttpRequest},fh=new yl;function ai(a){return encodeURIComponent(String(a))}function qy(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function ls(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ce(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dh}function dh(){this.i=null,this.g="",this.h=!1}var ph={},vl={};function El(a,h,d){a.M=1,a.A=bo(pn(h)),a.u=d,a.R=!0,mh(a,null)}function mh(a,h){a.F=Date.now(),Io(a),a.B=pn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ch(d.i,"t",g),a.C=0,d=a.j.L,a.h=new dh,a.g=Wh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new oe(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(ve[0]=N.toString()),N=ve);for(let x=0;x<N.length;x++){const Q=X(d,N[x],g||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.J?Bt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ri(),jy(a.i,a.v,a.B,a.l,a.S,a.u)}ls.prototype.ba=function(a){a=a.target;const h=this.O;h&&hs(a)==3?h.j():this.Y(a)},ls.prototype.Y=function(a){try{if(a==this.g)e:{const _e=hs(this.g),Xe=this.g.ya(),Ve=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||xh(this.g)))){this.K||_e!=4||Xe==7||(Xe==8||Ve<=0?ri(3):ri(2)),wl(this);var h=this.g.ca();this.X=h;var d=Wy(this);if(this.o=h==200,$y(this.i,this.v,this.B,this.l,this.S,_e,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var x=g;break t}}x=null}if(a=x)Er(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tl(this,a);else{this.o=!1,this.m=3,St(12),zs(this),li(this);break e}}if(this.R){a=!0;let rt;for(;!this.K&&this.C<d.length;)if(rt=Gy(this,d),rt==vl){_e==4&&(this.m=4,St(14),a=!1),Er(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==ph){this.m=4,St(15),Er(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Er(this.i,this.l,rt,null),Tl(this,rt);if(gh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,St(16),a=!1),this.o=this.o&&a,!a)Er(this.i,this.l,d,"[Invalid Chunked Response]"),zs(this),li(this);else if(d.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),kl(Q),Q.P=!0,St(11))}}else Er(this.i,this.l,d,null),Tl(this,d);_e==4&&zs(this),this.o&&!this.K&&(_e==4?$h(this.j,this):(this.o=!1,Io(this)))}else av(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,St(12)):(this.m=0,St(13)),zs(this),li(this)}}}catch{}finally{}};function Wy(a){if(!gh(a))return a.g.la();const h=xh(a.g);if(h==="")return"";let d="";const g=h.length,N=hs(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return zs(a),li(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<g;x++)a.h.h=!0,d+=a.h.i.decode(h[x],{stream:!(N&&x==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function gh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Gy(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?vl:(d=Number(h.substring(d,g)),isNaN(d)?ph:(g+=1,g+d>h.length?vl:(h=h.slice(g,g+d),a.C=g+d,h)))}ls.prototype.cancel=function(){this.K=!0,zs(this)};function Io(a){a.T=Date.now()+a.H,_h(a,a.H)}function _h(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ii(u(a.aa,a),h)}function wl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ls.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Hy(this.i,this.B),this.M!=2&&(ri(),St(17)),zs(this),this.m=2,li(this)):_h(this,this.T-a)};function li(a){a.j.I==0||a.K||$h(a.j,a)}function zs(a){wl(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ne(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Tl(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Il(d.h,a))){if(!a.L&&Il(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Po(d),So(d);else break e;Pl(d),St(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ii(u(d.Va,d),6e3));Eh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Ws(d,11)}else if((a.L||d.g==a)&&Po(d),!y(h))for(N=d.Ba.g.parse(h),h=0;h<N.length;h++){let Ve=N[h];const rt=Ve[0];if(!(rt<=d.K))if(d.K=rt,Ve=Ve[1],d.I==2)if(Ve[0]=="c"){d.M=Ve[1],d.ba=Ve[2];const mn=Ve[3];mn!=null&&(d.ka=mn,d.j.info("VER="+d.ka));const Gs=Ve[4];Gs!=null&&(d.za=Gs,d.j.info("SVER="+d.za));const fs=Ve[5];fs!=null&&typeof fs=="number"&&fs>0&&(g=1.5*fs,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const ds=a.g;if(ds){const Do=ds.g?ds.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Do){var x=g.h;x.g||Do.indexOf("spdy")==-1&&Do.indexOf("quic")==-1&&Do.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(bl(x,x.h),x.h=null))}if(g.G){const Dl=ds.g?ds.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(g.wa=Dl,Fe(g.J,g.G,Dl))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var Q=a;if(g.na=qh(g,g.L?g.ba:null,g.W),Q.L){wh(g.h,Q);var _e=Q,Xe=g.O;Xe&&(_e.H=Xe),_e.D&&(wl(_e),Io(_e)),g.g=Q}else Bh(g);d.i.length>0&&Co(d)}else Ve[0]!="stop"&&Ve[0]!="close"||Ws(d,7);else d.I==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Ws(d,7):Cl(d):Ve[0]!="noop"&&d.l&&d.l.qa(Ve),d.A=0)}}ri(4)}catch{}}var Ky=class{constructor(a,h){this.g=a,this.map=h}};function yh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Eh(a){return a.h?1:a.g?a.g.size:0}function Il(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function bl(a,h){a.g?a.g.add(h):a.h=h}function wh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}yh.prototype.cancel=function(){if(this.i=Th(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Th(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return v(a.i)}var Ih=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let N,x=null;g>=0?(N=a[d].substring(0,g),x=a[d].substring(g+1)):N=a[d],h(N,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function cs(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof cs?(this.l=a.l,ci(this,a.j),this.o=a.o,this.g=a.g,ui(this,a.u),this.h=a.h,Al(this,Ph(a.i)),this.m=a.m):a&&(h=String(a).match(Ih))?(this.l=!1,ci(this,h[1]||"",!0),this.o=hi(h[2]||""),this.g=hi(h[3]||"",!0),ui(this,h[4]),this.h=hi(h[5]||"",!0),Al(this,h[6]||"",!0),this.m=hi(h[7]||"")):(this.l=!1,this.i=new di(null,this.l))}cs.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(fi(h,bh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(fi(h,bh,!0),"@"),a.push(ai(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(fi(d,d.charAt(0)=="/"?Xy:Jy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",fi(d,ev)),a.join("")},cs.prototype.resolve=function(a){const h=pn(this);let d=!!a.j;d?ci(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)ui(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const x=[];for(let Q=0;Q<N.length;){const _e=N[Q++];_e=="."?g&&Q==N.length&&x.push(""):_e==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),g&&Q==N.length&&x.push("")):(x.push(_e),g=!0)}g=x.join("/")}else g=N}return d?h.h=g:d=a.i.toString()!=="",d?Al(h,Ph(a.i)):d=!!a.m,d&&(h.m=a.m),h};function pn(a){return new cs(a)}function ci(a,h,d){a.j=d?hi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ui(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Al(a,h,d){h instanceof di?(a.i=h,tv(a.i,a.l)):(d||(h=fi(h,Zy)),a.i=new di(h,a.l))}function Fe(a,h,d){a.i.set(h,d)}function bo(a){return Fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function hi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Yy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Yy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bh=/[#\/\?@]/g,Jy=/[#\?:]/g,Xy=/[#\?]/g,Zy=/[#\?@]/g,ev=/#/g;function di(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function qs(a){a.g||(a.g=new Map,a.h=0,a.i&&Qy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=di.prototype,t.add=function(a,h){qs(this),this.i=null,a=wr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ah(a,h){qs(a),h=wr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Rh(a,h){return qs(a),h=wr(a,h),a.g.has(h)}t.forEach=function(a,h){qs(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(h,N,g,this)},this)},this)};function Sh(a,h){qs(a);let d=[];if(typeof h=="string")Rh(a,h)&&(d=d.concat(a.g.get(wr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return qs(this),this.i=null,a=wr(this,a),Rh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Sh(this,a),a.length>0?String(a[0]):h):h};function Ch(a,h,d){Ah(a,h),d.length>0&&(a.i=null,a.g.set(wr(a,h),v(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const N=ai(d);d=Sh(this,d);for(let x=0;x<d.length;x++){let Q=N;d[x]!==""&&(Q+="="+ai(d[x])),a.push(Q)}}return this.i=a.join("&")};function Ph(a){const h=new di;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function wr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function tv(a,h){h&&!a.j&&(qs(a),a.i=null,a.g.forEach(function(d,g){const N=g.toLowerCase();g!=N&&(Ah(this,g),Ch(this,N,d))},a)),a.j=h}function nv(a,h){const d=new oi;if(o.Image){const g=new Image;g.onload=f(us,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(us,d,"TestLoadImage: error",!1,h,g),g.onabort=f(us,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(us,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function sv(a,h){const d=new oi,g=new AbortController,N=setTimeout(()=>{g.abort(),us(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(N),x.ok?us(d,"TestPingServer: ok",!0,h):us(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),us(d,"TestPingServer: error",!1,h)})}function us(a,h,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function rv(){this.g=new gt}function Rl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Rl,jt),Rl.prototype.g=function(){return new Ao(this.i,this.h)};function Ao(a,h){G.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ao,G),t=Ao.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,mi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function kh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?pi(this):mi(this),this.readyState==3&&kh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,pi(this))},t.Na=function(a){this.g&&(this.response=a,pi(this))},t.ga=function(){this.g&&pi(this)};function pi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,mi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function mi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Dh(a){let h="";return xt(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Sl(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Dh(d),typeof a=="string"?d!=null&&ai(d):Fe(a,h,d))}function ze(a){G.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ze,G);var iv=/^https?$/i,ov=["POST","PUT"];t=ze.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){Nh(this,x);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())d.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ov,h,void 0)>=0)||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,Q]of d)this.g.setRequestHeader(x,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Nh(this,x)}};function Nh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Oh(a),Ro(a)}function Oh(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,q(this,"complete"),q(this,"abort"),Ro(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),ze.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Vh(this):this.Xa())},t.Xa=function(){Vh(this)};function Vh(a){if(a.h&&typeof i<"u"){if(a.v&&hs(a)==4)setTimeout(a.Ca.bind(a),0);else if(q(a,"readystatechange"),hs(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=x===0){let Q=String(a.D).match(Ih)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),g=!iv.test(Q?Q.toLowerCase():"")}d=g}if(d)q(a,"complete"),q(a,"success");else{a.o=6;try{var N=hs(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Oh(a)}}finally{Ro(a)}}}}function Ro(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||q(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function hs(a){return a.g?a.g.readyState:0}t.ca=function(){try{return hs(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),mt(h)}};function xh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function av(a){const h={};a=(a.g&&hs(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=qy(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=h[N]||[];h[N]=x,x.push(d)}dn(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Mh(a){this.za=0,this.i=[],this.j=new oi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gi("baseRetryDelayMs",5e3,a),this.Za=gi("retryDelaySeedMs",1e4,a),this.Ta=gi("forwardChannelMaxRetries",2,a),this.va=gi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new yh(a&&a.concurrentRequestLimit),this.Ba=new rv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Mh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){St(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=qh(this,null,this.W),Co(this)};function Cl(a){if(Lh(a),a.I==3){var h=a.V++,d=pn(a.J);if(Fe(d,"SID",a.M),Fe(d,"RID",h),Fe(d,"TYPE","terminate"),_i(a,d),h=new ls(a,a.j,h),h.M=2,h.A=bo(pn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Wh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Io(h)}zh(a)}function So(a){a.g&&(kl(a),a.g.cancel(),a.g=null)}function Lh(a){So(a),a.v&&(o.clearTimeout(a.v),a.v=null),Po(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Co(a){if(!vh(a.h)&&!a.m){a.m=!0;var h=a.Ea;z||_(),Y||(z(),Y=!0),w.add(h,a),a.D=0}}function lv(a,h){return Eh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ii(u(a.Ea,a,h),Hh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new ls(this,this.j,a);let x=this.o;if(this.U&&(x?(x=Bt(x),Un(x,this.U)):x=this.U),this.u!==null||this.R||(N.J=x,x=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Fh(this,N,h),d=pn(this.J),Fe(d,"RID",a),Fe(d,"CVER",22),this.G&&Fe(d,"X-HTTP-Session-Id",this.G),_i(this,d),x&&(this.R?h="headers="+ai(Dh(x))+"&"+h:this.u&&Sl(d,this.u,x)),bl(this.h,N),this.Ra&&Fe(d,"TYPE","init"),this.S?(Fe(d,"$req",h),Fe(d,"SID","null"),N.U=!0,El(N,d,null)):El(N,d,h),this.I=2}}else this.I==3&&(a?Uh(this,a):this.i.length==0||vh(this.h)||Uh(this))};function Uh(a,h){var d;h?d=h.l:d=a.V++;const g=pn(a.J);Fe(g,"SID",a.M),Fe(g,"RID",d),Fe(g,"AID",a.K),_i(a,g),a.u&&a.o&&Sl(g,a.u,a.o),d=new ls(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Fh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),bl(a.h,d),El(d,g,h)}function _i(a,h){a.H&&xt(a.H,function(d,g){Fe(h,g,d)}),a.l&&xt({},function(d,g){Fe(h,g,d)})}function Fh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var N=a.i;let _e=-1;for(;;){const Xe=["count="+d];_e==-1?d>0?(_e=N[0].g,Xe.push("ofs="+_e)):_e=0:Xe.push("ofs="+_e);let Ve=!0;for(let rt=0;rt<d;rt++){var x=N[rt].g;const mn=N[rt].map;if(x-=_e,x<0)_e=Math.max(0,N[rt].g-100),Ve=!1;else try{x="req"+x+"_"||"";try{var Q=mn instanceof Map?mn:Object.entries(mn);for(const[Gs,fs]of Q){let ds=fs;l(fs)&&(ds=Re(fs)),Xe.push(x+Gs+"="+encodeURIComponent(ds))}}catch(Gs){throw Xe.push(x+"type="+encodeURIComponent("_badmap")),Gs}}catch{g&&g(mn)}}if(Ve){Q=Xe.join("&");break e}}Q=void 0}return a=a.i.splice(0,d),h.G=a,Q}function Bh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;z||_(),Y||(z(),Y=!0),w.add(h,a),a.A=0}}function Pl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ii(u(a.Da,a),Hh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,jh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ii(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,St(10),So(this),jh(this))};function kl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function jh(a){a.g=new ls(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=pn(a.na);Fe(h,"RID","rpc"),Fe(h,"SID",a.M),Fe(h,"AID",a.K),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Fe(h,"TO",a.ia),Fe(h,"TYPE","xmlhttp"),_i(a,h),a.u&&a.o&&Sl(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=bo(pn(h)),d.u=null,d.R=!0,mh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,So(this),Pl(this),St(19))};function Po(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function $h(a,h){var d=null;if(a.g==h){Po(a),kl(a),a.g=null;var g=2}else if(Il(a.h,h))d=h.G,wh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=Hs(),q(g,new uh(g,d)),Co(a)}else Bh(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&lv(a,h)||g==2&&Pl(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),N){case 1:Ws(a,5);break;case 4:Ws(a,10);break;case 3:Ws(a,6);break;default:Ws(a,2)}}}function Hh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Ws(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const N=!g;g=new cs(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ci(g,"https"),bo(g),N?nv(g.toString(),d):sv(g.toString(),d)}else St(2);a.I=0,a.l&&a.l.pa(h),zh(a),Lh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function zh(a){if(a.I=0,a.ja=[],a.l){const h=Th(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ja,h),O(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function qh(a,h,d){var g=d instanceof cs?pn(d):new cs(d);if(g.g!="")h&&(g.g=h+"."+g.g),ui(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const x=new cs(null);g&&ci(x,g),h&&(x.g=h),N&&ui(x,N),d&&(x.h=d),g=x}return d=a.G,h=a.wa,d&&h&&Fe(g,d,h),Fe(g,"VER",a.ka),_i(a,g),g}function Wh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ze(new Rl({ab:d})):new ze(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gh(){}t=Gh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ko(){}ko.prototype.g=function(a,h){return new Ht(a,h)};function Ht(a,h){G.call(this),this.g=new Mh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Tr(this)}p(Ht,G),Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Cl(this.g)},Ht.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Re(a),a=d);h.i.push(new Ky(h.Ya++,a)),h.I==3&&Co(h)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Cl(this.g),delete this.g,Ht.Z.N.call(this)};function Kh(a){vr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Kh,vr);function Qh(){lt.call(this),this.status=1}p(Qh,lt);function Tr(a){this.g=a}p(Tr,Gh),Tr.prototype.ra=function(){q(this.g,"a")},Tr.prototype.qa=function(a){q(this.g,new Kh(a))},Tr.prototype.pa=function(a){q(this.g,new Qh)},Tr.prototype.oa=function(){q(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,vg=function(){return new ko},yg=function(){return Hs()},_g=st,Pc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},To.NO_ERROR=0,To.TIMEOUT=8,To.HTTP_ERROR=6,Go=To,hh.COMPLETE="complete",gg=hh,$t.EventType=sn,sn.OPEN="a",sn.CLOSE="b",sn.ERROR="c",sn.MESSAGE="d",G.prototype.listen=G.prototype.J,bi=$t,ze.prototype.listenOnce=ze.prototype.K,ze.prototype.getLastError=ze.prototype.Ha,ze.prototype.getLastErrorCode=ze.prototype.ya,ze.prototype.getStatus=ze.prototype.ca,ze.prototype.getResponseJson=ze.prototype.La,ze.prototype.getResponseText=ze.prototype.la,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Fa,mg=ze}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});const id="@firebase/firestore",od="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Jr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new _u("@firebase/firestore");function Sr(){return ar.logLevel}function te(t,...e){if(ar.logLevel<=we.DEBUG){const n=e.map(Eu);ar.debug(`Firestore (${Jr}): ${t}`,...n)}}function es(t,...e){if(ar.logLevel<=we.ERROR){const n=e.map(Eu);ar.error(`Firestore (${Jr}): ${t}`,...n)}}function zr(t,...e){if(ar.logLevel<=we.WARN){const n=e.map(Eu);ar.warn(`Firestore (${Jr}): ${t}`,...n)}}function Eu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function fe(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Eg(t,s,n)}function Eg(t,e,n){let s=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw es(s),new Error(s)}function De(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||Eg(e,r,s)}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(vt.UNAUTHENTICATED)))}shutdown(){}}class xb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Mb{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(De(typeof s.accessToken=="string",31837,{l:s}),new wg(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class Lb{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ub{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new Lb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ad{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const s=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ad(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ad(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Bb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function Te(t,e){return t<e?-1:t>e?1:0}function kc(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return Xl(r)===Xl(i)?Te(r,i):Xl(r)?1:-1}return Te(t.length,e.length)}const jb=55296,$b=57343;function Xl(t){const e=t.charCodeAt(0);return e>=jb&&e<=$b}function qr(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="__name__";class yn{constructor(e,n,s){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&fe(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=yn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return Te(e.length,n.length)}static compareSegments(e,n){const s=yn.isNumericId(e),r=yn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?yn.extractNumericId(e).compare(yn.extractNumericId(n)):kc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ds.fromString(e.substring(4,e.length-2))}}class Be extends yn{construct(e,n,s){return new Be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new Be(n)}static emptyPath(){return new Be([])}}const Hb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends yn{construct(e,n,s){return new ht(e,n,s)}static isValidIdentifier(e){return Hb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ld}static keyField(){return new ht([ld])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new re(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new re(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new re(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Tg(t,e,n){if(!n)throw new re(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zb(t,e,n,s){if(e===!0&&s===!0)throw new re(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cd(t){if(!ae.isDocumentKey(t))throw new re(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ud(t){if(ae.isDocumentKey(t))throw new re(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ig(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Tu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tu(t);throw new re(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function fo(t,e){if(!Ig(t))throw new re(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new re(H.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=-62135596800,fd=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*fd);return new je(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hd)throw new re(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fd}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fo(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:Ye("string",je._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Yi=-1;function qb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=de.fromTimestamp(s===1e9?new je(n+1,0):new je(n,s));return new Ls(r,ae.empty(),e)}function Wb(t){return new Ls(t.readTime,t.key,Yi)}class Ls{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ls(de.min(),ae.empty(),Yi)}static max(){return new Ls(de.max(),ae.empty(),Yi)}}function Gb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==Kb)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):j.reject(n)}static resolve(e){return new j(((n,s)=>{n(e)}))}static reject(e){return new j(((n,s)=>{s(e)}))}static waitFor(e){return new j(((n,s)=>{let r=0,i=0,o=!1;e.forEach((l=>{++r,l.next((()=>{++i,o&&i===r&&n()}),(c=>s(c)))})),o=!0,i===r&&n()}))}static or(e){let n=j.resolve(!1);for(const s of e)n=n.next((r=>r?j.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new j(((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&s(o)}),(f=>r(f)))}}))}static doWhile(e,n){return new j(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function Yb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=-1;function Za(t){return t==null}function ga(t){return t===0&&1/t==-1/0}function Jb(t){return typeof t=="number"&&Number.isInteger(t)&&!ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="";function Xb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dd(e)),e=Zb(t.get(n),e);return dd(e)}function Zb(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case bg:n+="";break;default:n+=i}}return n}function dd(t){return t+bg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ag(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lo(this.root,e,this.comparator,!0)}}class Lo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ct.RED,this.left=r??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ct(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ct.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(e){return new md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new rn([])}unionWith(e){let n=new nt(ht.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qr(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class Rg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Rg("Invalid base64 string: "+i):i}})(e);return new ft(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const eA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Us(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=eA.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fs(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="server_timestamp",Cg="__type__",Pg="__previous_value__",kg="__local_write_time__";function bu(t){return(t?.mapValue?.fields||{})[Cg]?.stringValue===Sg}function el(t){const e=t.mapValue.fields[Pg];return bu(e)?el(e):e}function Ji(t){const e=Us(t.mapValue.fields[kg].timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n,s,r,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const _a="(default)";class Xi{constructor(e,n){this.projectId=e,this.database=n||_a}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database===_a}isEqual(e){return e instanceof Xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="__type__",nA="__max__",Uo={mapValue:{}},Ng="__vector__",ya="value";function Bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bu(t)?4:rA(t)?9007199254740991:sA(t)?10:11:fe(28295,{value:t})}function On(t,e){if(t===e)return!0;const n=Bs(t);if(n!==Bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Us(r.timestampValue),l=Us(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return Fs(r.bytesValue).isEqual(Fs(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return Ge(r.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(r.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return Ge(r.integerValue)===Ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ge(r.doubleValue),l=Ge(i.doubleValue);return o===l?ga(o)===ga(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return qr(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(pd(o)!==pd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!On(o[c],l[c])))return!1;return!0})(t,e);default:return fe(52216,{left:t})}}function Zi(t,e){return(t.values||[]).find((n=>On(n,e)))!==void 0}function Wr(t,e){if(t===e)return 0;const n=Bs(t),s=Bs(e);if(n!==s)return Te(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return gd(t.timestampValue,e.timestampValue);case 4:return gd(Ji(t),Ji(e));case 5:return kc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Fs(i),c=Fs(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Te(l[u],c[u]);if(f!==0)return f}return Te(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Te(Ge(i.latitude),Ge(o.latitude));return l!==0?l:Te(Ge(i.longitude),Ge(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return _d(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const l=i.fields||{},c=o.fields||{},u=l[ya]?.arrayValue,f=c[ya]?.arrayValue,p=Te(u?.values?.length||0,f?.values?.length||0);return p!==0?p:_d(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Uo.mapValue&&o===Uo.mapValue)return 0;if(i===Uo.mapValue)return 1;if(o===Uo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=kc(c[p],f[p]);if(m!==0)return m;const v=Wr(l[c[p]],u[f[p]]);if(v!==0)return v}return Te(c.length,f.length)})(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function gd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Us(t),s=Us(e),r=Te(n.seconds,s.seconds);return r!==0?r:Te(n.nanos,s.nanos)}function _d(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Wr(n[r],s[r]);if(i)return i}return Te(n.length,s.length)}function Gr(t){return Dc(t)}function Dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Us(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Fs(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ae.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Dc(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Dc(n.fields[o])}`;return r+"}"})(t.mapValue):fe(61005,{value:t})}function Ko(t){switch(Bs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=el(t);return e?16+Ko(e):16;case 5:return 2*t.stringValue.length;case 6:return Fs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Ko(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return mr(s.fields,((i,o)=>{r+=i.length+Ko(o)})),r})(t.mapValue);default:throw fe(13486,{value:t})}}function Nc(t){return!!t&&"integerValue"in t}function Au(t){return!!t&&"arrayValue"in t}function yd(t){return!!t&&"nullValue"in t}function vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qo(t){return!!t&&"mapValue"in t}function sA(t){return(t?.mapValue?.fields||{})[Dg]?.stringValue===Ng}function Ui(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return mr(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Ui(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ui(t.arrayValue.values[n]);return e}return{...t}}function rA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===nA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(n)}setAll(e){let n=ht.emptyPath(),s={},r=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=Ui(o):r.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Qo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){mr(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Gt(Ui(this.value))}}function Og(t){const e=[];return mr(t.fields,((n,s)=>{const r=new ht([n]);if(Qo(s)){const i=Og(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,de.min(),de.min(),de.min(),Gt.empty(),0)}static newFoundDocument(e,n,s,r){return new Tt(e,1,n,de.min(),s,r,0)}static newNoDocument(e,n){return new Tt(e,2,n,de.min(),de.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,de.min(),de.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class va{constructor(e,n){this.position=e,this.inclusive=n}}function Ed(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ae.comparator(ae.fromName(o.referenceValue),n.key):s=Wr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function wd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ea{constructor(e,n="asc"){this.field=e,this.dir=n}}function iA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Vg{}class et extends Vg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new aA(e,n,s):n==="array-contains"?new uA(e,s):n==="in"?new hA(e,s):n==="not-in"?new fA(e,s):n==="array-contains-any"?new dA(e,s):new et(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new lA(e,s):new cA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Wr(n,this.value)):n!==null&&Bs(this.value)===Bs(n)&&this.matchesComparison(Wr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends Vg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Vn(e,n)}matches(e){return xg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xg(t){return t.op==="and"}function Mg(t){return oA(t)&&xg(t)}function oA(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function Oc(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Gr(t.value);if(Mg(t))return t.filters.map((e=>Oc(e))).join(",");{const e=t.filters.map((n=>Oc(n))).join(",");return`${t.op}(${e})`}}function Lg(t,e){return t instanceof et?(function(s,r){return r instanceof et&&s.op===r.op&&s.field.isEqual(r.field)&&On(s.value,r.value)})(t,e):t instanceof Vn?(function(s,r){return r instanceof Vn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,l)=>i&&Lg(o,r.filters[l])),!0):!1})(t,e):void fe(19439)}function Ug(t){return t instanceof et?(function(n){return`${n.field.canonicalString()} ${n.op} ${Gr(n.value)}`})(t):t instanceof Vn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Ug).join(" ,")+"}"})(t):"Filter"}class aA extends et{constructor(e,n,s){super(e,n,s),this.key=ae.fromName(s.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class lA extends et{constructor(e,n){super(e,"in",n),this.keys=Fg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class cA extends et{constructor(e,n){super(e,"not-in",n),this.keys=Fg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Fg(t,e){return(e.arrayValue?.values||[]).map((n=>ae.fromName(n.referenceValue)))}class uA extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Au(n)&&Zi(n.arrayValue,this.value)}}class hA extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zi(this.value.arrayValue,n)}}class fA extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Zi(this.value.arrayValue,n)}}class dA extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Au(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Zi(this.value.arrayValue,s)))}}/**
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
 */class pA{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Td(t,e=null,n=[],s=[],r=null,i=null,o=null){return new pA(t,e,n,s,r,i,o)}function Ru(t){const e=pe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Oc(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Za(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Gr(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Gr(s))).join(",")),e.Te=n}return e.Te}function Su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Lg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wd(t.startAt,e.startAt)&&wd(t.endAt,e.endAt)}function Vc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function mA(t,e,n,s,r,i,o,l){return new tl(t,e,n,s,r,i,o,l)}function Cu(t){return new tl(t)}function Id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gA(t){return t.collectionGroup!==null}function Fi(t){const e=pe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(ht.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ea(i,s))})),n.has(ht.keyField().canonicalString())||e.Ie.push(new Ea(ht.keyField(),s))}return e.Ie}function bn(t){const e=pe(t);return e.Ee||(e.Ee=_A(e,Fi(t))),e.Ee}function _A(t,e){if(t.limitType==="F")return Td(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Ea(r.field,i)}));const n=t.endAt?new va(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new va(t.startAt.position,t.startAt.inclusive):null;return Td(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function xc(t,e,n){return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nl(t,e){return Su(bn(t),bn(e))&&t.limitType===e.limitType}function Bg(t){return`${Ru(bn(t))}|lt:${t.limitType}`}function Cr(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>Ug(r))).join(", ")}]`),Za(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>Gr(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>Gr(r))).join(",")),`Target(${s})`})(bn(t))}; limitType=${t.limitType})`}function sl(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ae.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of Fi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(o,l,c){const u=Ed(o,l,c);return o.inclusive?u<=0:u<0})(s.startAt,Fi(s),r)||s.endAt&&!(function(o,l,c){const u=Ed(o,l,c);return o.inclusive?u>=0:u>0})(s.endAt,Fi(s),r))})(t,e)}function yA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jg(t){return(e,n)=>{let s=!1;for(const r of Fi(t)){const i=vA(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function vA(t,e,n){const s=t.field.isKeyField()?ae.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Wr(c,u):fe(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return fe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Ag(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=new He(ae.comparator);function ts(){return EA}const $g=new He(ae.comparator);function Ai(...t){let e=$g;for(const n of t)e=e.insert(n.key,n);return e}function Hg(t){let e=$g;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Zs(){return Bi()}function zg(){return Bi()}function Bi(){return new gr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const wA=new He(ae.comparator),TA=new nt(ae.comparator);function Ie(...t){let e=TA;for(const n of t)e=e.add(n);return e}const IA=new nt(Te);function bA(){return IA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(e)?"-0":e}}function qg(t){return{integerValue:""+t}}function AA(t,e){return Jb(e)?qg(e):Pu(t,e)}/**
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
 */class rl{constructor(){this._=void 0}}function RA(t,e,n){return t instanceof eo?(function(r,i){const o={fields:{[Cg]:{stringValue:Sg},[kg]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&bu(i)&&(i=el(i)),i&&(o.fields[Pg]=i),{mapValue:o}})(n,e):t instanceof to?Gg(t,e):t instanceof no?Kg(t,e):(function(r,i){const o=Wg(r,i),l=bd(o)+bd(r.Ae);return Nc(o)&&Nc(r.Ae)?qg(l):Pu(r.serializer,l)})(t,e)}function SA(t,e,n){return t instanceof to?Gg(t,e):t instanceof no?Kg(t,e):n}function Wg(t,e){return t instanceof wa?(function(s){return Nc(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class eo extends rl{}class to extends rl{constructor(e){super(),this.elements=e}}function Gg(t,e){const n=Qg(e);for(const s of t.elements)n.some((r=>On(r,s)))||n.push(s);return{arrayValue:{values:n}}}class no extends rl{constructor(e){super(),this.elements=e}}function Kg(t,e){let n=Qg(e);for(const s of t.elements)n=n.filter((r=>!On(r,s)));return{arrayValue:{values:n}}}class wa extends rl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function bd(t){return Ge(t.integerValue||t.doubleValue)}function Qg(t){return Au(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n){this.field=e,this.transform=n}}function PA(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof to&&r instanceof to||s instanceof no&&r instanceof no?qr(s.elements,r.elements,On):s instanceof wa&&r instanceof wa?On(s.Ae,r.Ae):s instanceof eo&&r instanceof eo})(t.transform,e.transform)}class kA{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class il{}function Yg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xg(t.key,Qn.none()):new po(t.key,t.data,Qn.none());{const n=t.data,s=Gt.empty();let r=new nt(ht.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new _r(t.key,s,new rn(r.toArray()),Qn.none())}}function DA(t,e,n){t instanceof po?(function(r,i,o){const l=r.value.clone(),c=Rd(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof _r?(function(r,i,o){if(!Yo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Rd(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Jg(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function ji(t,e,n,s){return t instanceof po?(function(i,o,l,c){if(!Yo(i.precondition,o))return l;const u=i.value.clone(),f=Sd(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof _r?(function(i,o,l,c){if(!Yo(i.precondition,o))return l;const u=Sd(i.fieldTransforms,c,o),f=o.data;return f.setAll(Jg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,s):(function(i,o,l){return Yo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function NA(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Wg(s.transform,r||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(s.field,i))}return n||null}function Ad(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&qr(s,r,((i,o)=>PA(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends il{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _r extends il{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Rd(t,e,n){const s=new Map;De(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,SA(o,l,n[r]))}return s}function Sd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,RA(i,o,e))}return s}class Xg extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OA extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&DA(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ji(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ji(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=zg();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=Yg(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ie())}isEqual(e){return this.batchId===e.batchId&&qr(this.mutations,e.mutations,((n,s)=>Ad(n,s)))&&qr(this.baseMutations,e.baseMutations,((n,s)=>Ad(n,s)))}}class ku{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){De(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return wA})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ku(e,n,s,r)}}/**
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
 */class xA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class MA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Ae;function LA(t){switch(t){case H.OK:return fe(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function Zg(t){if(t===void 0)return es("GRPC error has no .code"),H.UNKNOWN;switch(t){case Qe.OK:return H.OK;case Qe.CANCELLED:return H.CANCELLED;case Qe.UNKNOWN:return H.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return H.INTERNAL;case Qe.UNAVAILABLE:return H.UNAVAILABLE;case Qe.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Qe.NOT_FOUND:return H.NOT_FOUND;case Qe.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Qe.ABORTED:return H.ABORTED;case Qe.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Qe.DATA_LOSS:return H.DATA_LOSS;default:return fe(39323,{code:t})}}(Ae=Qe||(Qe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function UA(){return new TextEncoder}/**
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
 */const FA=new Ds([4294967295,4294967295],0);function Cd(t){const e=UA().encode(t),n=new pg;return n.update(e),new Uint8Array(n.digest())}function Pd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ds([n,s],0),new Ds([r,i],0)]}class Du{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ri(`Invalid padding: ${n}`);if(s<0)throw new Ri(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ri(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ri(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ds.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(Ds.fromNumber(s)));return r.compare(FA)===1&&(r=new Ds([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Cd(e),[s,r]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Du(i,r,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=Cd(e),[s,r]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,mo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ol(de.min(),r,new He(Te),ts(),Ie())}}class mo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new mo(s,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class e_{constructor(e,n){this.targetId=e,this.Ce=n}}class t_{constructor(e,n,s=ft.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class kd{constructor(){this.ve=0,this.Fe=Dd(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),s=Ie();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:fe(38017,{changeType:i})}})),new mo(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=Dd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class BA{constructor(e){this.Ge=e,this.ze=new Map,this.je=ts(),this.Je=Fo(),this.He=Fo(),this.Ye=new He(Te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,r)=>{this.rt(r)&&n(r)}))}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(Vc(i))if(s===0){const o=new ae(i.path);this.et(n,o,Tt.newNoDocument(o,de.min()))}else De(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Fs(s).toUint8Array()}catch(c){if(c instanceof Rg)return zr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Du(o,r,i)}catch(c){return zr(c instanceof Ri?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),r++)})),r}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Vc(l.target)){const c=new ae(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Tt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let s=Ie();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const r=new ol(e,n,this.Ye,this.je,s);return this.je=ts(),this.Je=Fo(),this.He=Fo(),this.Ye=new He(Te),r}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,n)?r.Qe(n,1):r.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new kd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new nt(Te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new nt(Te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fo(){return new He(ae.comparator)}function Dd(){return new He(ae.comparator)}const jA={asc:"ASCENDING",desc:"DESCENDING"},$A={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HA={and:"AND",or:"OR"};class zA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mc(t,e){return t.useProto3Json||Za(e)?e:{value:e}}function Ta(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function n_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qA(t,e){return Ta(t,e.toTimestamp())}function An(t){return De(!!t,49232),de.fromTimestamp((function(n){const s=Us(n);return new je(s.seconds,s.nanos)})(t))}function Nu(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=(function(r){return new Be(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function s_(t){const e=Be.fromString(t);return De(l_(e),10190,{key:e.toString()}),e}function Uc(t,e){return Nu(t.databaseId,e.path)}function Zl(t,e){const n=s_(e);if(n.get(1)!==t.databaseId.projectId)throw new re(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(i_(n))}function r_(t,e){return Nu(t.databaseId,e)}function WA(t){const e=s_(t);return e.length===4?Be.emptyPath():i_(e)}function Fc(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function i_(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Nd(t,e,n){return{name:Uc(t,e),fields:n.value.mapValue.fields}}function GA(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(De(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?H.UNKNOWN:Zg(u.code);return new re(f,u.message||"")})(o);n=new t_(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Zl(t,s.document.name),i=An(s.document.updateTime),o=s.document.createTime?An(s.document.createTime):de.min(),l=new Gt({mapValue:{fields:s.document.fields}}),c=Tt.newFoundDocument(r,i,o,l),u=s.targetIds||[],f=s.removedTargetIds||[];n=new Jo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Zl(t,s.document),i=s.readTime?An(s.readTime):de.min(),o=Tt.newNoDocument(r,i),l=s.removedTargetIds||[];n=new Jo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Zl(t,s.document),i=s.removedTargetIds||[];n=new Jo([],i,r,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new MA(r,i),l=s.targetId;n=new e_(l,o)}}return n}function KA(t,e){let n;if(e instanceof po)n={update:Nd(t,e.key,e.value)};else if(e instanceof Xg)n={delete:Uc(t,e.key)};else if(e instanceof _r)n={update:Nd(t,e.key,e.data),updateMask:sR(e.fieldMask)};else{if(!(e instanceof OA))return fe(16599,{Vt:e.type});n={verify:Uc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const l=o.transform;if(l instanceof eo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof to)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof no)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw fe(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:qA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe(27497)})(t,e.precondition)),n}function QA(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map((n=>(function(r,i){let o=r.updateTime?An(r.updateTime):An(i);return o.isEqual(de.min())&&(o=An(i)),new kA(o,r.transformResults||[])})(n,e)))):[]}function YA(t,e){return{documents:[r_(t,e.path)]}}function JA(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=r_(t,r);const i=(function(u){if(u.length!==0)return a_(Vn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Pr(m.field),direction:eR(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:r}}function XA(t){let e=WA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){De(s===1,65062);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=o_(p);return m instanceof Vn&&Mg(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(O){return new Ea(kr(O.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Za(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,v=p.values||[];return new va(v,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,v=p.values||[];return new va(v,m)})(n.endAt)),mA(e,r,o,i,l,"F",c,u)}function ZA(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function o_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=kr(n.unaryFilter.field);return et.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=kr(n.unaryFilter.field);return et.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=kr(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return et.create(kr(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Vn.create(n.compositeFilter.filters.map((s=>o_(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(n.compositeFilter.op))})(t):fe(30097,{filter:t})}function eR(t){return jA[t]}function tR(t){return $A[t]}function nR(t){return HA[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function kr(t){return ht.fromServerFormat(t.fieldPath)}function a_(t){return t instanceof et?(function(n){if(n.op==="=="){if(vd(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NAN"}};if(yd(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vd(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NAN"}};if(yd(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(n.field),op:tR(n.op),value:n.value}}})(t):t instanceof Vn?(function(n){const s=n.getFilters().map((r=>a_(r)));return s.length===1?s[0]:{compositeFilter:{op:nR(n.op),filters:s}}})(t):fe(54877,{filter:t})}function sR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function l_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,s,r,i=de.min(),o=de.min(),l=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Is(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.yt=e}}function iR(t){const e=XA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
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
 */class oR{constructor(){this.Cn=new aR}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Ls.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Ls.min())}updateCollectionGroup(e,n,s){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class aR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new nt(Be.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new nt(Be.comparator)).toArray()}}/**
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
 */const Od={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},c_=41943040;class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(c_,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Kr(0)}static cr(){return new Kr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="LruGarbageCollector",lR=1048576;function xd([t,e],[n,s]){const r=Te(t,n);return r===0?Te(e,s):r}class cR{constructor(e){this.Ir=e,this.buffer=new nt(xd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();xd(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uR{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(Vd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zr(n)?te(Vd,"Ignoring IndexedDB error during garbage collection: ",n):await Xr(n)}await this.Vr(3e5)}))}}class hR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Xa.ce);const s=new cR(n);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Od)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Od):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,r,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(u=Date.now(),Sr()<=we.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p}))))}}function fR(t,e){return new hR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.changes=new gr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?j.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&ji(s.mutation,r,rn.empty(),je.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Ie()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Ie()){const r=Zs();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let o=Ai();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=Zs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Ie())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,r){let i=ts();const o=Bi(),l=(function(){return Bi()})();return n.forEach(((c,u)=>{const f=s.get(u.key);r.has(u.key)&&(f===void 0||f.mutation instanceof _r)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ji(f.mutation,u,f.mutation.getFieldMask(),je.now())):o.set(u.key,rn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>l.set(u,new pR(f,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const s=Bi();let r=new He(((o,l)=>o-l)),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=s.get(c)||rn.empty();f=l.applyToLocalView(u,f),s.set(c,f);const p=(r.get(l.batchId)||Ie()).add(c);r=r.insert(l.batchId,p)}))})).next((()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=zg();f.forEach((m=>{if(!i.has(m)){const v=Yg(n.get(m),s.get(m));v!==null&&p.set(m,v),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):j.resolve(Zs());let l=Yi,c=i;return o.next((u=>j.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ie()))).next((f=>({batchId:l,changes:Hg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next((s=>{let r=Ai();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Ai();return this.indexManager.getCollectionParents(e,i).next((l=>j.forEach(l,(c=>{const u=(function(p,m){return new tl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))}));let l=Ai();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&ji(f.mutation,u,rn.empty(),je.now()),sl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:An(r.createTime)}})(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(r){return{name:r.name,query:iR(r.bundledQuery),readTime:An(r.readTime)}})(n)),j.resolve()}}/**
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
 */class _R{constructor(){this.overlays=new He(ae.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Zs();return j.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.St(e,n,i)})),j.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),j.resolve()}getOverlaysForCollection(e,n,s){const r=Zs(),i=n.length+1,o=new ae(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return j.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new He(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let f=i.get(u.largestBatchId);f===null&&(f=Zs(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Zs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=r)););return j.resolve(l)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new xA(n,s));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(s.key))}}/**
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
 */class yR{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.Qr=new nt(it.$r),this.Ur=new nt(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new it(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new it(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new ae(new Be([])),s=new it(n,e),r=new it(n,e+1),i=[];return this.Ur.forEachInRange([s,r],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ae(new Be([])),s=new it(n,e),r=new it(n,e+1);let i=Ie();return this.Ur.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new it(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class it{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ae.comparator(e.key,n.key)||Te(e.Yr,n.Yr)}static Kr(e,n){return Te(e.Yr,n.Yr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new nt(it.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VA(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.Zr=this.Zr.add(new it(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ei(s),i=r<0?0:r;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Iu:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new it(n,0),r=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(o=>{const l=this.Xr(o.Yr);i.push(l)})),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new nt(Te);return n.forEach((r=>{const i=new it(r,0),o=new it(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{s=s.add(l.Yr)}))})),j.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ae.isDocumentKey(i)||(i=i.child(""));const o=new it(new ae(i),0);let l=new nt(Te);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Yr)),!0)}),o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){De(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return j.forEach(n.mutations,(r=>{const i=new it(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new it(n,0),r=this.Zr.firstAfterOrEqual(s);return j.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.ri=e,this.docs=(function(){return new He(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return j.resolve(s?s.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let s=ts();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Tt.newInvalidDocument(r))})),j.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=ts();const o=n.path,l=new ae(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Gb(Wb(f),s)<=0||(r.has(f.key)||sl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,s,r){fe(9500)}ii(e,n){return j.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new wR(this)}getSize(e){return j.resolve(this.size)}}class wR extends dR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.persistence=e,this.si=new gr((n=>Ru(n)),Su),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new Ou,this.targetCount=0,this.ai=Kr.ur()}forEachTarget(e,n){return this.si.forEach(((s,r)=>n(r))),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Kr(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),j.waitFor(i).next((()=>r))}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return j.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),j.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return j.resolve(s)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Xa(0),this.li=!1,this.li=!0,this.hi=new yR,this.referenceDelegate=e(this),this.Pi=new TR(this),this.indexManager=new oR,this.remoteDocumentCache=(function(r){return new ER(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new rR(n),this.Ii=new gR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _R,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new vR(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){te("MemoryPersistence","Starting transaction:",e);const r=new IR(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,n){return j.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class IR extends Qb{constructor(e){super(),this.currentSequenceNumber=e}}class Vu{constructor(e){this.persistence=e,this.Ri=new Ou,this.Vi=null}static mi(e){return new Vu(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),j.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,(s=>{const r=ae.fromPath(s);return this.gi(e,r).next((i=>{i||n.removeEntry(r,de.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ia{constructor(e,n){this.persistence=e,this.pi=new gr((s=>Xb(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=fR(this,n)}static mi(e,n){return new Ia(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return j.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?j.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(o=>this.br(e,o,n).next((l=>{l||(s++,i.removeEntry(o,de.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ko(e.data.value)),n}br(e,n,s){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.pi.get(n);return j.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=r}static As(e,n){let s=Ie(),r=Ie();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xu(e,n.fromCache,s,r)}}/**
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
 */class bR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class AR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return gI()?8:Yb(Rt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new bR;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,s,r){return s.documentReadCount<this.fs?(Sr()<=we.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Cr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Sr()<=we.DEBUG&&te("QueryEngine","Query:",Cr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(Sr()<=we.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Cr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bn(n))):j.resolve())}ys(e,n){if(Id(n))return j.resolve(null);let s=bn(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=xc(n,null,"F"),s=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,xc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,s,r){return Id(n)||r.isEqual(de.min())?j.resolve(null):this.ps.getDocuments(e,s).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,s,r)?j.resolve(null):(Sr()<=we.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cr(n)),this.vs(e,o,n,qb(r,Yi)).next((l=>l)))}))}Ds(e,n){let s=new nt(jg(e));return n.forEach(((r,i)=>{sl(e,i)&&(s=s.add(i))})),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return Sr()<=we.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Cr(n)),this.ps.getDocumentsMatchingQuery(e,n,Ls.min(),s)}vs(e,n,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="LocalStore",RR=3e8;class SR{constructor(e,n,s,r){this.persistence=e,this.Fs=n,this.serializer=r,this.Ms=new He(Te),this.xs=new gr((i=>Ru(i)),Su),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function CR(t,e,n,s){return new SR(t,e,n,s)}async function h_(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],l=[];let c=Ie();for(const u of r){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function PR(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let v=j.resolve();return m.forEach((O=>{v=v.next((()=>f.getEntry(c,O))).next((D=>{const k=u.docVersions.get(O);De(k!==null,48541),D.version.compareTo(k)<0&&(p.applyToRemoteDocument(D,u),D.isValidDocument()&&(D.setReadTime(u.commitVersion),f.addEntry(D)))}))})),v.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=Ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function f_(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function kR(t,e){const n=pe(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});r=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const m=r.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ft.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,s)),r=r.insert(p,v),(function(D,k,M){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=RR?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(m,v,f)&&l.push(n.Pi.updateTargetData(i,v))}));let c=ts(),u=Ie();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(DR(i,o,e.documentUpdates).next((f=>{c=f.ks,u=f.qs}))),!s.isEqual(de.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(f)}return j.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=r,i)))}function DR(t,e,n){let s=Ie(),r=Ie();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let o=ts();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te(Mu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:r}}))}function NR(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Iu),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function OR(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.Pi.getTargetData(s,e).next((i=>i?(r=i,j.resolve(r)):n.Pi.allocateTargetId(s).next((o=>(r=new Is(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Bc(t,e,n){const s=pe(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Zr(o))throw o;te(Mu,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function Md(t,e,n){const s=pe(t);let r=de.min(),i=Ie();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=pe(c),m=p.xs.get(f);return m!==void 0?j.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(s,o,bn(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?r:de.min(),n?i:Ie()))).next((l=>(VR(s,yA(e),l),{documents:l,Qs:i})))))}function VR(t,e,n){let s=t.Os.get(e)||de.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.Os.set(e,s)}class Ld{constructor(){this.activeTargetIds=bA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xR{constructor(){this.Mo=new Ld,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ld,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MR{Oo(e){}shutdown(){}}/**
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
 */const Ud="ConnectivityMonitor";class Fd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(Ud,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(Ud,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bo=null;function jc(){return Bo===null?Bo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Bo++,"0x"+Bo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="RestConnection",LR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===_a?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,n,s,r,i){const o=jc(),l=this.zo(e,n.toUriEncodedString());te(ec,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,r,i);const{host:u}=new URL(l),f=dr(u);return this.Jo(e,l,c,s,f).then((p=>(te(ec,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw zr(ec,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p}))}Ho(e,n,s,r,i,o){return this.Go(e,n,s,r,i)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Jr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,n){const s=LR[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class BR extends UR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const o=jc();return new Promise(((l,c)=>{const u=new mg;u.setWithCredentials(!0),u.listenOnce(gg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Go.NO_ERROR:const p=u.getResponseJson();te(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Go.TIMEOUT:te(_t,`RPC '${e}' ${o} timed out`),c(new re(H.DEADLINE_EXCEEDED,"Request time out"));break;case Go.HTTP_ERROR:const m=u.getStatus();if(te(_t,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const O=v?.error;if(O&&O.status&&O.message){const D=(function(M){const L=M.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(L)>=0?L:H.UNKNOWN})(O.status);c(new re(D,O.message))}else c(new re(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new re(H.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(_t,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(r);te(_t,`RPC '${e}' ${o} sending request:`,r),u.send(n,"POST",f,s,15)}))}T_(e,n,s){const r=jc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vg(),l=yg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const f=i.join("");te(_t,`Creating RPC '${e}' stream ${r}: ${f}`,c);const p=o.createWebChannel(f,c);this.I_(p);let m=!1,v=!1;const O=new FR({Yo:k=>{v?te(_t,`Not sending because RPC '${e}' stream ${r} is closed:`,k):(m||(te(_t,`Opening RPC '${e}' stream ${r} transport.`),p.open(),m=!0),te(_t,`RPC '${e}' stream ${r} sending:`,k),p.send(k))},Zo:()=>p.close()}),D=(k,M,L)=>{k.listen(M,(V=>{try{L(V)}catch(C){setTimeout((()=>{throw C}),0)}}))};return D(p,bi.EventType.OPEN,(()=>{v||(te(_t,`RPC '${e}' stream ${r} transport opened.`),O.o_())})),D(p,bi.EventType.CLOSE,(()=>{v||(v=!0,te(_t,`RPC '${e}' stream ${r} transport closed`),O.a_(),this.E_(p))})),D(p,bi.EventType.ERROR,(k=>{v||(v=!0,zr(_t,`RPC '${e}' stream ${r} transport errored. Name:`,k.name,"Message:",k.message),O.a_(new re(H.UNAVAILABLE,"The operation could not be completed")))})),D(p,bi.EventType.MESSAGE,(k=>{if(!v){const M=k.data[0];De(!!M,16349);const L=M,V=L?.error||L[0]?.error;if(V){te(_t,`RPC '${e}' stream ${r} received error:`,V);const C=V.status;let z=(function(_){const E=Qe[_];if(E!==void 0)return Zg(E)})(C),Y=V.message;z===void 0&&(z=H.INTERNAL,Y="Unknown error status: "+C+" with message "+V.message),v=!0,O.a_(new re(z,Y)),p.close()}else te(_t,`RPC '${e}' stream ${r} received:`,M),O.u_(M)}})),D(l,_g.STAT_EVENT,(k=>{k.stat===Pc.PROXY?te(_t,`RPC '${e}' stream ${r} detected buffering proxy`):k.stat===Pc.NOPROXY&&te(_t,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){return new zA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&te("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="PersistentStream";class p_{constructor(e,n,s,r,i,o,l,c){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new d_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(es(n.toString()),es("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===n&&this.G_(s,r)}),(s=>{e((()=>{const r=new re(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(Bd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(te(Bd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class jR extends p_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=GA(this.serializer,e),s=(function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?An(o.readTime):de.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Fc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Vc(c)?{documents:YA(i,c)}:{query:JA(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=n_(i,o.resumeToken);const u=Mc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Ta(i,o.snapshotVersion.toTimestamp());const u=Mc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const s=ZA(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Fc(this.serializer),n.removeTarget=e,this.q_(n)}}class $R extends p_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=QA(e.writeResults,e.commitTime),s=An(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Fc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>KA(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{}class zR extends HR{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new re(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Lc(n,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(H.UNKNOWN,i.toString())}))}Ho(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Lc(n,s),r,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(H.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class qR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(es(n),this.aa=!1):te("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="RemoteStore";class WR{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{yr(this)&&(te(cr,"Restarting streams for network reachability change."),await(async function(c){const u=pe(c);u.Ea.add(4),await go(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ll(u)})(this))}))})),this.Ra=new qR(s,r)}}async function ll(t){if(yr(t))for(const e of t.da)await e(!0)}async function go(t){for(const e of t.da)await e(!1)}function m_(t,e){const n=pe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Bu(n)?Fu(n):ei(n).O_()&&Uu(n,e))}function Lu(t,e){const n=pe(t),s=ei(n);n.Ia.delete(e),s.O_()&&g_(n,e),n.Ia.size===0&&(s.O_()?s.L_():yr(n)&&n.Ra.set("Unknown"))}function Uu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ei(t).Y_(e)}function g_(t,e){t.Va.Ue(e),ei(t).Z_(e)}function Fu(t){t.Va=new BA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ei(t).start(),t.Ra.ua()}function Bu(t){return yr(t)&&!ei(t).x_()&&t.Ia.size>0}function yr(t){return pe(t).Ea.size===0}function __(t){t.Va=void 0}async function GR(t){t.Ra.set("Online")}async function KR(t){t.Ia.forEach(((e,n)=>{Uu(t,e)}))}async function QR(t,e){__(t),Bu(t)?(t.Ra.ha(e),Fu(t)):t.Ra.set("Unknown")}async function YR(t,e,n){if(t.Ra.set("Online"),e instanceof t_&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.Va.removeTarget(l))})(t,e)}catch(s){te(cr,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ba(t,s)}else if(e instanceof Jo?t.Va.Ze(e):e instanceof e_?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const s=await f_(t.localStore);n.compareTo(s)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),g_(i,c);const p=new Is(f.target,c,u,f.sequenceNumber);Uu(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){te(cr,"Failed to raise snapshot:",s),await ba(t,s)}}async function ba(t,e,n){if(!Zr(e))throw e;t.Ea.add(1),await go(t),t.Ra.set("Offline"),n||(n=()=>f_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{te(cr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ll(t)}))}function y_(t,e){return e().catch((n=>ba(t,n,e)))}async function cl(t){const e=pe(t),n=js(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Iu;for(;JR(e);)try{const r=await NR(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,XR(e,r)}catch(r){await ba(e,r)}v_(e)&&E_(e)}function JR(t){return yr(t)&&t.Ta.length<10}function XR(t,e){t.Ta.push(e);const n=js(t);n.O_()&&n.X_&&n.ea(e.mutations)}function v_(t){return yr(t)&&!js(t).x_()&&t.Ta.length>0}function E_(t){js(t).start()}async function ZR(t){js(t).ra()}async function eS(t){const e=js(t);for(const n of t.Ta)e.ea(n.mutations)}async function tS(t,e,n){const s=t.Ta.shift(),r=ku.from(s,e,n);await y_(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await cl(t)}async function nS(t,e){e&&js(t).X_&&await(async function(s,r){if((function(o){return LA(o)&&o!==H.ABORTED})(r.code)){const i=s.Ta.shift();js(s).B_(),await y_(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await cl(s)}})(t,e),v_(t)&&E_(t)}async function jd(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),te(cr,"RemoteStore received new credentials");const s=yr(n);n.Ea.add(3),await go(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ll(n)}async function sS(t,e){const n=pe(t);e?(n.Ea.delete(2),await ll(n)):e||(n.Ea.add(2),await go(n),n.Ra.set("Unknown"))}function ei(t){return t.ma||(t.ma=(function(n,s,r){const i=pe(n);return i.sa(),new jR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:GR.bind(null,t),t_:KR.bind(null,t),r_:QR.bind(null,t),H_:YR.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Bu(t)?Fu(t):t.Ra.set("Unknown")):(await t.ma.stop(),__(t))}))),t.ma}function js(t){return t.fa||(t.fa=(function(n,s,r){const i=pe(n);return i.sa(),new $R(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:ZR.bind(null,t),r_:nS.bind(null,t),ta:eS.bind(null,t),na:tS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await cl(t)):(await t.fa.stop(),t.Ta.length>0&&(te(cr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new ju(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(t,e){if(es("AsyncQueue",`${e}: ${t}`),Zr(t))return new re(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{static emptySet(e){return new Vr(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ae.comparator(n.key,s.key):(n,s)=>ae.comparator(n.key,s.key),this.keyedMap=Ai(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Vr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.ga=new He(ae.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Qr{constructor(e,n,s,r,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Qr(e,n,Vr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class iS{constructor(){this.queries=Hd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=pe(n),i=r.queries;r.queries=Hd(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(s)}))})(this,new re(H.ABORTED,"Firestore shutting down"))}}function Hd(){return new gr((t=>Bg(t)),nl)}async function w_(t,e){const n=pe(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new rS,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=$u(o,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Hu(n)}async function T_(t,e){const n=pe(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function oS(t,e){const n=pe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(r)&&(s=!0);o.wa=r}}s&&Hu(n)}function aS(t,e,n){const s=pe(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function Hu(t){t.Ca.forEach((e=>{e.next()}))}var $c,zd;(zd=$c||($c={})).Ma="default",zd.Cache="cache";class I_{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Qr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$c.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.key=e}}class A_{constructor(e){this.key=e}}class lS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=jg(e),this.tu=new Vr(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new $d,r=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,p)=>{const m=r.get(f),v=sl(this.query,p)?p:null,O=!!m&&this.mutatedKeys.has(m.key),D=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;m&&v?m.data.isEqual(v.data)?O!==D&&(s.track({type:3,doc:v}),k=!0):this.su(m,v)||(s.track({type:2,doc:v}),k=!0,(c&&this.eu(v,c)>0||u&&this.eu(v,u)<0)&&(l=!0)):!m&&v?(s.track({type:0,doc:v}),k=!0):m&&!v&&(s.track({type:1,doc:m}),k=!0,(c||u)&&(l=!0)),k&&(v?(o=o.add(v),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(v,O){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:k})}};return D(v)-D(O)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(s),r=r??!1;const l=n&&!r?this._u():[],c=this.Xa.size===0&&this.current&&!r?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Qr(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $d,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new A_(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new b_(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Qr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zu="SyncEngine";class cS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class uS{constructor(e){this.key=e,this.hu=!1}}class hS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new gr((l=>Bg(l)),nl),this.Iu=new Map,this.Eu=new Set,this.du=new He(ae.comparator),this.Au=new Map,this.Ru=new Ou,this.Vu={},this.mu=new Map,this.fu=Kr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function fS(t,e,n=!0){const s=D_(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await R_(s,e,n,!0),r}async function dS(t,e){const n=D_(t);await R_(n,e,!0,!1)}async function R_(t,e,n,s){const r=await OR(t.localStore,bn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await pS(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&m_(t.remoteStore,r),l}async function pS(t,e,n,s,r){t.pu=(p,m,v)=>(async function(D,k,M,L){let V=k.view.ru(M);V.Cs&&(V=await Md(D.localStore,k.query,!1).then((({documents:w})=>k.view.ru(w,V))));const C=L&&L.targetChanges.get(k.targetId),z=L&&L.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(V,D.isPrimaryClient,C,z);return Wd(D,k.targetId,Y.au),Y.snapshot})(t,p,m,v);const i=await Md(t.localStore,e,!0),o=new lS(e,i.Qs),l=o.ru(i.documents),c=mo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(l,t.isPrimaryClient,c);Wd(t,n,u.au);const f=new cS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function mS(t,e,n){const s=pe(t),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((o=>!nl(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Bc(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Lu(s.remoteStore,r.targetId),Hc(s,r.targetId)})).catch(Xr)):(Hc(s,r.targetId),await Bc(s.localStore,r.targetId,!0))}async function gS(t,e){const n=pe(t),s=n.Tu.get(e),r=n.Iu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Lu(n.remoteStore,s.targetId))}async function _S(t,e,n){const s=bS(t);try{const r=await(function(o,l){const c=pe(o),u=je.now(),f=l.reduce(((v,O)=>v.add(O.key)),Ie());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let O=ts(),D=Ie();return c.Ns.getEntries(v,f).next((k=>{O=k,O.forEach(((M,L)=>{L.isValidDocument()||(D=D.add(M))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,O))).next((k=>{p=k;const M=[];for(const L of l){const V=NA(L,p.get(L.key).overlayedDocument);V!=null&&M.push(new _r(L.key,V,Og(V.value.mapValue),Qn.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,M,l)})).next((k=>{m=k;const M=k.applyToLocalDocumentSet(p,D);return c.documentOverlayCache.saveOverlays(v,k.batchId,M)}))})).then((()=>({batchId:m.batchId,changes:Hg(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new He(Te)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(s,r.batchId,n),await _o(s,r.changes),await cl(s.remoteStore)}catch(r){const i=$u(r,"Failed to persist write");n.reject(i)}}async function S_(t,e){const n=pe(t);try{const s=await kR(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=n.Au.get(i);o&&(De(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?De(o.hu,14607):r.removedDocuments.size>0&&(De(o.hu,42227),o.hu=!1))})),await _o(n,s,e)}catch(s){await Xr(s)}}function qd(t,e,n){const s=pe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(o,l){const c=pe(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&Hu(c)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yS(t,e,n){const s=pe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new He(ae.comparator);o=o.insert(i,Tt.newNoDocument(i,de.min()));const l=Ie().add(i),c=new ol(de.min(),new Map,new He(Te),o,l);await S_(s,c),s.du=s.du.remove(i),s.Au.delete(e),qu(s)}else await Bc(s.localStore,e,!1).then((()=>Hc(s,e,n))).catch(Xr)}async function vS(t,e){const n=pe(t),s=e.batch.batchId;try{const r=await PR(n.localStore,e);P_(n,s,null),C_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await _o(n,r)}catch(r){await Xr(r)}}async function ES(t,e,n){const s=pe(t);try{const r=await(function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(De(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(s.localStore,e);P_(s,e,n),C_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await _o(s,r)}catch(r){await Xr(r)}}function C_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function P_(t,e,n){const s=pe(t);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function Hc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||k_(t,s)}))}function k_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Lu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),qu(t))}function Wd(t,e,n){for(const s of n)s instanceof b_?(t.Ru.addReference(s.key,e),wS(t,s)):s instanceof A_?(te(zu,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||k_(t,s.key)):fe(19791,{wu:s})}function wS(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(te(zu,"New document in limbo: "+n),t.Eu.add(s),qu(t))}function qu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ae(Be.fromString(e)),s=t.fu.next();t.Au.set(s,new uS(n)),t.du=t.du.insert(n,s),m_(t.remoteStore,new Is(bn(Cu(n.path)),s,"TargetPurposeLimboResolution",Xa.ce))}}async function _o(t,e,n){const s=pe(t),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((l,c)=>{o.push(s.pu(c,e,n).then((u=>{if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=xu.As(c.targetId,u);i.push(f)}})))})),await Promise.all(o),s.Pu.H_(r),await(async function(c,u){const f=pe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>j.forEach(u,(m=>j.forEach(m.Es,(v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v))).next((()=>j.forEach(m.ds,(v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))))))}catch(p){if(!Zr(p))throw p;te(Mu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=f.Ms.get(m),O=v.snapshotVersion,D=v.withLastLimboFreeSnapshotVersion(O);f.Ms=f.Ms.insert(m,D)}}})(s.localStore,i))}async function TS(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){te(zu,"User change. New user:",e.toKey());const s=await h_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new re(H.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await _o(n,s.Ls)}}function IS(t,e){const n=pe(t),s=n.Au.get(e);if(s&&s.hu)return Ie().add(s.key);{let r=Ie();const i=n.Iu.get(e);if(!i)return r;for(const o of i){const l=n.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function D_(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=S_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yS.bind(null,e),e.Pu.H_=oS.bind(null,e.eventManager),e.Pu.yu=aS.bind(null,e.eventManager),e}function bS(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ES.bind(null,e),e}class Aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=al(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return CR(this.persistence,new AR,e.initialUser,this.serializer)}Cu(e){return new u_(Vu.mi,this.serializer)}Du(e){return new xR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Aa.provider={build:()=>new Aa};class AS extends Aa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){De(this.persistence.referenceDelegate instanceof Ia,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new uR(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new u_((s=>Ia.mi(s,n)),this.serializer)}}class zc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>qd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=TS.bind(null,this.syncEngine),await sS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new iS})()}createDatastore(e){const n=al(e.databaseInfo.databaseId),s=(function(i){return new BR(i)})(e.databaseInfo);return(function(i,o,l,c){return new zR(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,o,l){return new WR(s,r,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>qd(this.syncEngine,n,0)),(function(){return Fd.v()?new Fd:new MR})())}createSyncEngine(e,n){return(function(r,i,o,l,c,u,f){const p=new hS(r,i,o,l,c,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=pe(n);te(cr,"RemoteStore shutting down."),s.Ea.add(5),await go(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}zc.provider={build:()=>new zc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class N_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):es("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="FirestoreClient";class RS{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=vt.UNAUTHENTICATED,this.clientId=wu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{te($s,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(te($s,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=$u(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),te($s,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await h_(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SS(t);te($s,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>jd(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>jd(e.remoteStore,r))),t._onlineComponents=e}async function SS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te($s,"Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===H.FAILED_PRECONDITION||r.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;zr("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new Aa)}}else te($s,"Using default OfflineComponentProvider"),await nc(t,new AS(void 0));return t._offlineComponents}async function O_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te($s,"Using user provided OnlineComponentProvider"),await Gd(t,t._uninitializedComponentsProvider._online)):(te($s,"Using default OnlineComponentProvider"),await Gd(t,new zc))),t._onlineComponents}function CS(t){return O_(t).then((e=>e.syncEngine))}async function V_(t){const e=await O_(t),n=e.eventManager;return n.onListen=fS.bind(null,e.syncEngine),n.onUnlisten=mS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gS.bind(null,e.syncEngine),n}function PS(t,e,n={}){const s=new Kn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new N_({next:m=>{f.Nu(),o.enqueueAndForget((()=>T_(i,p)));const v=m.docs.has(l);!v&&m.fromCache?u.reject(new re(H.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?u.reject(new re(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new I_(Cu(l.path),f,{includeMetadataChanges:!0,qa:!0});return w_(i,p)})(await V_(t),t.asyncQueue,e,n,s))),s.promise}function kS(t,e,n={}){const s=new Kn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new N_({next:m=>{f.Nu(),o.enqueueAndForget((()=>T_(i,p))),m.fromCache&&c.source==="server"?u.reject(new re(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new I_(l,f,{includeMetadataChanges:!0,qa:!0});return w_(i,p)})(await V_(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */function x_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="firestore.googleapis.com",Qd=!0;class Yd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=M_,this.ssl=Qd}else this.host=e.host,this.ssl=e.ssl??Qd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=c_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lR)throw new re(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x_(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ul{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Vb;switch(s.type){case"firstParty":return new Ub(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Kd.get(n);s&&(te("ComponentProvider","Removing Datastore"),Kd.delete(n),s.terminate())})(this),Promise.resolve()}}function DS(t,e,n,s={}){t=lr(t,ul);const r=dr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;r&&(mu(`https://${l}`),gu("Firestore",!0)),i.host!==M_&&i.host!==l&&zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:s};if(!ir(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,f;if(typeof s.mockUserToken=="string")u=s.mockUserToken,f=vt.MOCK_USER;else{u=lg(s.mockUserToken,t._app?.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new re(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new vt(p)}t._authCredentials=new xb(new wg(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new hl(this.firestore,e,this._query)}}class tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(fo(n,tt._jsonSchema))return new tt(e,s||null,new ae(Be.fromString(n.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:Ye("string",tt._jsonSchemaVersion),referencePath:Ye("string")};class Ns extends hl{constructor(e,n,s){super(e,n,Cu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new ae(e))}withConverter(e){return new Ns(this.firestore,e,this._path)}}function NS(t,e,...n){if(t=Vt(t),Tg("collection","path",e),t instanceof ul){const s=Be.fromString(e,...n);return ud(s),new Ns(t,null,s)}{if(!(t instanceof tt||t instanceof Ns))throw new re(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Be.fromString(e,...n));return ud(s),new Ns(t.firestore,null,s)}}function Nt(t,e,...n){if(t=Vt(t),arguments.length===1&&(e=wu.newId()),Tg("doc","path",e),t instanceof ul){const s=Be.fromString(e,...n);return cd(s),new tt(t,null,new ae(s))}{if(!(t instanceof tt||t instanceof Ns))throw new re(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Be.fromString(e,...n));return cd(s),new tt(t.firestore,t instanceof Ns?t.converter:null,new ae(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="AsyncQueue";class Xd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new d_(this,"async_queue_retry"),this._c=()=>{const s=tc();s&&te(Jd,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Kn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Zr(e))throw e;te(Jd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,es("INTERNAL UNHANDLED ERROR: ",Zd(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=ju.createAndSchedule(this,e,n,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&fe(47125,{Pc:Zd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Zd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class fl extends ul{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Xd,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xd(e),this._firestoreClient=void 0,await e}}}function OS(t,e){const n=typeof t=="object"?t:vu(),s=typeof t=="string"?t:_a,r=Ja(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ig("firestore");i&&DS(r,...i)}return r}function Wu(t){if(t._terminated)throw new re(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||VS(t),t._firestoreClient}function VS(t){const e=t._freezeSettings(),n=(function(r,i,o,l){return new tA(r,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,x_(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new RS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(ft.fromBase64String(e))}catch(n){throw new re(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fo(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:Ye("string",Kt._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(fo(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:Ye("string",Rn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
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
 */class Sn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fo(e,Sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Sn(e.vectorValues);throw new re(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Sn._jsonSchemaVersion="firestore/vectorValue/1.0",Sn._jsonSchema={type:Ye("string",Sn._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=/^__.*__$/;class MS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new po(e,this.data,n,this.fieldTransforms)}}function L_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:t})}}class Qu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ra(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(L_(this.Ac)&&xS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class LS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||al(e)}Cc(e,n,s,r=!1){return new Qu({Ac:e,methodName:n,Dc:s,path:ht.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function US(t){const e=t._freezeSettings(),n=al(t._databaseId);return new LS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FS(t,e,n,s,r,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,r);j_("Data must be an object, but it was:",o,s);const l=F_(s,o);let c,u;if(i.merge)c=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=BS(e,p,n);if(!o.contains(m))throw new re(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);$S(f,m)||f.push(m)}c=new rn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new MS(new Gt(l),c,u)}class Yu extends Ku{_toFieldTransform(e){return new CA(e.path,new eo)}isEqual(e){return e instanceof Yu}}function U_(t,e){if(B_(t=Vt(t)))return j_("Unsupported field value:",e,t),F_(t,e);if(t instanceof Ku)return(function(s,r){if(!L_(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const l of s){let c=U_(l,r.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=Vt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return AA(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=je.fromDate(s);return{timestampValue:Ta(r.serializer,i)}}if(s instanceof je){const i=new je(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ta(r.serializer,i)}}if(s instanceof Rn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Kt)return{bytesValue:n_(r.serializer,s._byteString)};if(s instanceof tt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nu(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Sn)return(function(o,l){return{mapValue:{fields:{[Dg]:{stringValue:Ng},[ya]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Pu(l.serializer,u)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Tu(s)}`)})(t,e)}function F_(t,e){const n={};return Ag(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(t,((s,r)=>{const i=U_(r,e.mc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function B_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Rn||t instanceof Kt||t instanceof tt||t instanceof Ku||t instanceof Sn)}function j_(t,e,n){if(!B_(n)||!Ig(n)){const s=Tu(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function BS(t,e,n){if((e=Vt(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return $_(t,e);throw Ra("Field path arguments must be of type string or ",t,!1,void 0,n)}const jS=new RegExp("[~\\*/\\[\\]]");function $_(t,e,n){if(e.search(jS)>=0)throw Ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw Ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ra(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new re(H.INVALID_ARGUMENT,l+t+c)}function $S(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(z_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HS extends H_{data(){return super.data()}}function z_(t,e){return typeof e=="string"?$_(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qS{convertValue(e,n="none"){switch(Bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return mr(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){const n=e.fields?.[ya].arrayValue?.values?.map((s=>Ge(s.doubleValue)));return new Sn(n)}convertGeoPoint(e){return new Rn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=el(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=Us(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Be.fromString(e);De(l_(s),9688,{name:e});const r=new Xi(s.get(1),s.get(3)),i=new ae(s.popFirst(5));return r.isEqual(n)||es(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nr extends H_{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(z_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=nr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}nr._jsonSchemaVersion="firestore/documentSnapshot/1.0",nr._jsonSchema={type:Ye("string",nr._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Xo extends nr{data(e={}){return super.data(e)}}class xr{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Si(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Xo(this._firestore,this._userDataWriter,s.key,s,new Si(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const c=new Xo(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Si(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Xo(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Si(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:GS(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){t=lr(t,tt);const e=lr(t.firestore,fl);return PS(Wu(e),t._key).then((n=>YS(e,t,n)))}xr._jsonSchemaVersion="firestore/querySnapshot/1.0",xr._jsonSchema={type:Ye("string",xr._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class q_ extends qS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function KS(t){t=lr(t,hl);const e=lr(t.firestore,fl),n=Wu(e),s=new q_(e);return zS(t._query),kS(n,t._query).then((r=>new xr(e,s,t,r)))}function un(t,e,n){t=lr(t,tt);const s=lr(t.firestore,fl),r=WS(t.converter,e,n);return QS(s,[FS(US(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Qn.none())])}function QS(t,e){return(function(s,r){const i=new Kn;return s.asyncQueue.enqueueAndForget((async()=>_S(await CS(s),r,i))),i.promise})(Wu(t),e)}function YS(t,e,n){const s=n.docs.get(e._key),r=new q_(t);return new nr(t,r,e._key,s,new Si(n.hasPendingWrites,n.fromCache),e.converter)}function Cn(){return new Yu("serverTimestamp")}(function(e,n=!0){(function(r){Jr=r})(pr),or(new Ms("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new fl(new Mb(s.getProvider("auth-internal")),new Fb(o,s.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(u.options.projectId,f)})(o,r),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),In(id,od,e),In(id,od,"esm2020")})();var JS="firebase",XS="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(JS,XS,"app");function W_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZS=W_,G_=new uo("auth","Firebase",W_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new _u("@firebase/auth");function eC(t,...e){Sa.logLevel<=we.WARN&&Sa.warn(`Auth (${pr}): ${t}`,...e)}function Zo(t,...e){Sa.logLevel<=we.ERROR&&Sa.error(`Auth (${pr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Xu(t,...e)}function hn(t,...e){return Xu(t,...e)}function Ju(t,e,n){const s={...ZS(),[e]:n};return new uo("auth","Firebase",s).create(e,{appName:t.name})}function Yn(t){return Ju(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function K_(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Xt(t,"argument-error"),Ju(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return G_.create(t,...e)}function he(t,e,...n){if(!t)throw Xu(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zo(e),new Error(e)}function ns(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(){return typeof self<"u"&&self.location?.href||""}function tC(){return ep()==="http:"||ep()==="https:"}function ep(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tC()||dI()||"connection"in navigator)?navigator.onLine:!0}function sC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,ns(n>e,"Short delay should be less than long delay!"),this.isMobile=uI()||pI()}get(){return nC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t,e){ns(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oC=new yo(3e4,6e4);function is(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function os(t,e,n,s,r={}){return Y_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=ho({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return fI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&dr(t.emulatorConfig.host)&&(u.credentials="include"),Q_.fetch()(await J_(t,t.config.apiHost,n,l),u)})}async function Y_(t,e,n){t._canInitEmulator=!1;const s={...rC,...e};try{const r=new lC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw jo(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ju(t,f,u);Xt(t,f)}}catch(r){if(r instanceof Mn)throw r;Xt(t,"network-request-failed",{message:String(r)})}}async function vo(t,e,n,s,r={}){const i=await os(t,e,n,s,r);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function J_(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Zu(t.config,r):`${t.config.apiScheme}://${r}`;return iC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function aC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(hn(this.auth,"network-request-failed")),oC.get())})}}function jo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=hn(t,e,s);return r.customData._tokenResponse=n,r}function tp(t){return t!==void 0&&t.enterprise!==void 0}class cC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return aC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uC(t,e){return os(t,"GET","/v2/recaptchaConfig",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e){return os(t,"POST","/v1/accounts:delete",e)}async function Ca(t,e){return os(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fC(t,e=!1){const n=Vt(t),s=await n.getIdToken(e),r=eh(s);he(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:$i(sc(r.auth_time)),issuedAtTime:$i(sc(r.iat)),expirationTime:$i(sc(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function sc(t){return Number(t)*1e3}function eh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Zo("JWT malformed, contained fewer than 3 sections"),null;try{const r=sg(n);return r?JSON.parse(r):(Zo("Failed to decode base64 JWT payload"),null)}catch(r){return Zo("Caught error parsing JWT payload as JSON",r?.toString()),null}}function np(t){const e=eh(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mn&&dC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function dC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pa(t){const e=t.auth,n=await t.getIdToken(),s=await so(t,Ca(e,{idToken:n}));he(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?X_(r.providerUserInfo):[],o=gC(t.providerData,i),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Wc(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function mC(t){const e=Vt(t);await Pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function X_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e){const n=await Y_(t,{},async()=>{const s=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await J_(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&dr(t.emulatorConfig.host)&&(c.credentials="include"),Q_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yC(t,e){return os(t,"POST","/v2/accounts:revokeToken",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):np(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=np(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await _C(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Lr;return s&&(he(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(he(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new pC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Wc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await so(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fC(this,e)}reload(){return mC(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Pa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await so(this,hC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:O,stsTokenManager:D}=n;he(p&&D,e,"internal-error");const k=Lr.fromJSON(this.name,D);he(typeof p=="string",e,"internal-error"),ms(s,e.name),ms(r,e.name),he(typeof m=="boolean",e,"internal-error"),he(typeof v=="boolean",e,"internal-error"),ms(i,e.name),ms(o,e.name),ms(l,e.name),ms(c,e.name),ms(u,e.name),ms(f,e.name);const M=new on({uid:p,auth:e,email:r,emailVerified:m,displayName:s,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:k,createdAt:u,lastLoginAt:f});return O&&Array.isArray(O)&&(M.providerData=O.map(L=>({...L}))),c&&(M._redirectEventId=c),M}static async _fromIdTokenResponse(e,n,s=!1){const r=new Lr;r.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Pa(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];he(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?X_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,l=new Lr;l.updateFromIdToken(s);const c=new on({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Wc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=new Map;function Gn(t){ns(t instanceof Function,"Expected a class definition");let e=sp.get(t);return e?(ns(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sp.set(t,e),e)}/**
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
 */class Z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Z_.type="NONE";const rp=Z_;/**
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
 */function ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Ur{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ea(this.userKey,r.apiKey,i),this.fullPersistenceKey=ea("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ca(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ur(Gn(rp),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Gn(rp);const o=ea(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Ca(e,{idToken:f}).catch(()=>{});if(!m)break;p=await on._fromGetAccountInfoResponse(e,m,f)}else p=on._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ur(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ur(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iy(e))return"Blackberry";if(oy(e))return"Webos";if(ty(e))return"Safari";if((e.includes("chrome/")||ny(e))&&!e.includes("edge/"))return"Chrome";if(ry(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function ey(t=Rt()){return/firefox\//i.test(t)}function ty(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ny(t=Rt()){return/crios\//i.test(t)}function sy(t=Rt()){return/iemobile/i.test(t)}function ry(t=Rt()){return/android/i.test(t)}function iy(t=Rt()){return/blackberry/i.test(t)}function oy(t=Rt()){return/webos/i.test(t)}function th(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vC(t=Rt()){return th(t)&&!!window.navigator?.standalone}function EC(){return mI()&&document.documentMode===10}function ay(t=Rt()){return th(t)||ry(t)||oy(t)||iy(t)||/windows phone/i.test(t)||sy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e=[]){let n;switch(t){case"Browser":n=ip(Rt());break;case"Worker":n=`${ip(Rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pr}/${s}`}/**
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
 */class wC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function TC(t,e={}){return os(t,"GET","/v2/passwordPolicy",is(t,e))}/**
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
 */const IC=6;class bC{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??IC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new op(this),this.idTokenSubscription=new op(this),this.beforeStateQueue=new wC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ur.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ca(this,{idToken:e}),s=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Lt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(Yn(this));const n=e?Vt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TC(this),n=new bC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new uo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await yC(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&eC(`Error while retrieving App Check token: ${e.error}`),e?.token}}function as(t){return Vt(t)}class op{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RC(t){dl=t}function cy(t){return dl.loadJS(t)}function SC(){return dl.recaptchaEnterpriseScript}function CC(){return dl.gapiScript}function PC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class kC{constructor(){this.enterprise=new DC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class DC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const NC="recaptcha-enterprise",uy="NO_RECAPTCHA";class OC{constructor(e){this.type=NC,this.auth=as(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{uC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new cC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,o,l){const c=window.grecaptcha;tp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(uy)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&tp(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=SC();c.length!==0&&(c+=l),cy(c).then(()=>{r(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function ap(t,e,n,s=!1,r=!1){const i=new OC(t);let o;if(r)o=uy;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ka(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ap(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ap(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t,e){const n=Ja(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ir(i,e??{}))return r;Xt(r,"already-initialized")}return n.initialize({options:e})}function xC(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Gn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function MC(t,e,n){const s=as(t);he(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=hy(e),{host:o,port:l}=LC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){he(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),he(ir(u,s.config.emulator)&&ir(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,dr(o)?(mu(`${i}//${o}${c}`),gu("Auth",!0)):UC()}function hy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LC(t){const e=hy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:lp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:lp(o)}}}function lp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function FC(t,e){return os(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,e){return vo(t,"POST","/v1/accounts:signInWithPassword",is(t,e))}async function jC(t,e){return os(t,"POST","/v1/accounts:sendOobCode",is(t,e))}async function $C(t,e){return jC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}async function zC(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends nh{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ro(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ro(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ka(e,n,"signInWithPassword",BC);case"emailLink":return HC(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ka(e,s,"signUpPassword",FC);case"emailLink":return zC(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t,e){return vo(t,"POST","/v1/accounts:signInWithIdp",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC="http://localhost";class ur extends nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new ur(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Fr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:qC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GC(t){const e=Ti(Ii(t)).link,n=e?Ti(Ii(e)).deep_link_id:null,s=Ti(Ii(t)).deep_link_id;return(s?Ti(Ii(s)).link:null)||s||n||e||t}class sh{constructor(e){const n=Ti(Ii(e)),s=n.apiKey??null,r=n.oobCode??null,i=WC(n.mode??null);he(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=GC(e);try{return new sh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(e,n){return ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=sh.parseLink(n);return he(s,"argument-error"),ro._fromEmailAndCode(e,s.code,s.tenantId)}}ti.PROVIDER_ID="password";ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Es extends Eo{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Es.credential(e.oauthAccessToken)}catch{return null}}}Es.FACEBOOK_SIGN_IN_METHOD="facebook.com";Es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qn.credential(n,s)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Eo{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ws.credential(e.oauthAccessToken)}catch{return null}}}ws.GITHUB_SIGN_IN_METHOD="github.com";ws.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Eo{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ts.credential(n,s)}catch{return null}}}Ts.TWITTER_SIGN_IN_METHOD="twitter.com";Ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(t,e){return vo(t,"POST","/v1/accounts:signUp",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await on._fromIdTokenResponse(e,s,r),o=cp(s);return new hr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=cp(s);return new hr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function cp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends Mn{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Da(e,n,s,r)}}function fy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(t,i,e,s):i})}async function QC(t,e,n=!1){const s=await so(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hr._forOperation(t,"link",s)}/**
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
 */async function YC(t,e,n=!1){const{auth:s}=t;if(Lt(s.app))return Promise.reject(Yn(s));const r="reauthenticate";try{const i=await so(t,fy(s,r,e,t),n);he(i.idToken,s,"internal-error");const o=eh(i.idToken);he(o,s,"internal-error");const{sub:l}=o;return he(t.uid===l,s,"user-mismatch"),hr._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&Xt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(t,e,n=!1){if(Lt(t.app))return Promise.reject(Yn(t));const s="signIn",r=await fy(t,s,e),i=await hr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function JC(t,e){return dy(as(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(t){const e=as(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XC(t,e,n){const s=as(t);await ka(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",$C)}async function ZC(t,e,n){if(Lt(t.app))return Promise.reject(Yn(t));const s=as(t),o=await ka(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&py(t),c}),l=await hr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function eP(t,e,n){return Lt(t.app)?Promise.reject(Yn(t)):JC(Vt(t),ti.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&py(t),s})}function tP(t,e,n,s){return Vt(t).onIdTokenChanged(e,n,s)}function nP(t,e,n){return Vt(t).beforeAuthStateChanged(e,n)}function sP(t){return Vt(t).signOut()}const Na="__sak";/**
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
 */class my{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=1e3,iP=10;class gy extends my{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ay(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);EC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,iP):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},rP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gy.type="LOCAL";const oP=gy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y extends my{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_y.type="SESSION";const yy=_y;/**
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
 */function aP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ml(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await aP(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ml.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=rh("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function cP(t){Pn().location.href=t}/**
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
 */function vy(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function uP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hP(){return navigator?.serviceWorker?.controller||null}function fP(){return vy()?self:null}/**
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
 */const Ey="firebaseLocalStorageDb",dP=1,Oa="firebaseLocalStorage",wy="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gl(t,e){return t.transaction([Oa],e?"readwrite":"readonly").objectStore(Oa)}function pP(){const t=indexedDB.deleteDatabase(Ey);return new wo(t).toPromise()}function Gc(){const t=indexedDB.open(Ey,dP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Oa,{keyPath:wy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Oa)?e(s):(s.close(),await pP(),e(await Gc()))})})}async function up(t,e,n){const s=gl(t,!0).put({[wy]:e,value:n});return new wo(s).toPromise()}async function mP(t,e){const n=gl(t,!1).get(e),s=await new wo(n).toPromise();return s===void 0?null:s.value}function hp(t,e){const n=gl(t,!0).delete(e);return new wo(n).toPromise()}const gP=800,_P=3;class Ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_P)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ml._getInstance(fP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await uP(),!this.activeServiceWorker)return;this.sender=new lP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await up(e,Na,"1"),await hp(e,Na),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>up(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>mP(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=gl(r,!1).getAll();return new wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ty.type="LOCAL";const yP=Ty;new yo(3e4,6e4);/**
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
 */function ih(t,e){return e?Gn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oh extends nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vP(t){return dy(t.auth,new oh(t),t.bypassAuthState)}function EP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),YC(n,new oh(t),t.bypassAuthState)}async function wP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),QC(n,new oh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vP;case"linkViaPopup":case"linkViaRedirect":return wP;case"reauthViaPopup":case"reauthViaRedirect":return EP;default:Xt(this.auth,"internal-error")}}resolve(e){ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=new yo(2e3,1e4);async function IP(t,e,n){if(Lt(t.app))return Promise.reject(hn(t,"operation-not-supported-in-this-environment"));const s=as(t);K_(t,e,pl);const r=ih(s,n);return new bs(s,"signInViaPopup",e,r).executeNotNull()}async function bP(t,e,n){const s=Vt(t);K_(s.auth,e,pl);const r=ih(s.auth,n);return new bs(s.auth,"linkViaPopup",e,r,s).executeNotNull()}class bs extends Iy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){ns(this.filter.length===1,"Popup operations only handle one event");const e=rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TP.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP="pendingRedirect",ta=new Map;class RP extends Iy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ta.get(this.auth._key());if(!e){try{const s=await SP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ta.set(this.auth._key(),e)}return this.bypassAuthState||ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SP(t,e){const n=kP(e),s=PP(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function CP(t,e){ta.set(t._key(),e)}function PP(t){return Gn(t._redirectPersistence)}function kP(t){return ea(AP,t.config.apiKey,t.name)}async function DP(t,e,n=!1){if(Lt(t.app))return Promise.reject(Yn(t));const s=as(t),r=ih(s,e),o=await new RP(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=600*1e3;class OP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!by(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NP&&this.cachedEventUids.clear(),this.cachedEventUids.has(fp(e))}saveEventToCache(e){this.cachedEventUids.add(fp(e)),this.lastProcessedEventTime=Date.now()}}function fp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function by({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function VP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return by(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e={}){return os(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LP=/^https?/;async function UP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xP(t);for(const n of e)try{if(FP(n))return}catch{}Xt(t,"unauthorized-domain")}function FP(t){const e=qc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!LP.test(n))return!1;if(MP.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const BP=new yo(3e4,6e4);function dp(){const t=Pn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jP(t){return new Promise((e,n)=>{function s(){dp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dp(),n(hn(t,"network-request-failed"))},timeout:BP.get()})}if(Pn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Pn().gapi?.load)s();else{const r=PC("iframefcb");return Pn()[r]=()=>{gapi.load?s():n(hn(t,"network-request-failed"))},cy(`${CC()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw na=null,e})}let na=null;function $P(t){return na=na||jP(t),na}/**
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
 */const HP=new yo(5e3,15e3),zP="__/auth/iframe",qP="emulator/auth/iframe",WP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KP(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zu(e,qP):`https://${t.config.authDomain}/${zP}`,s={apiKey:e.apiKey,appName:t.name,v:pr},r=GP.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ho(s).slice(1)}`}async function QP(t){const e=await $P(t),n=Pn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:KP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WP,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),l=Pn().setTimeout(()=>{i(o)},HP.get());function c(){Pn().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const YP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JP=500,XP=600,ZP="_blank",e0="http://localhost";class pp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t0(t,e,n,s=JP,r=XP){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...YP,width:s.toString(),height:r.toString(),top:i,left:o},u=Rt().toLowerCase();n&&(l=ny(u)?ZP:n),ey(u)&&(e=e||e0,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[v,O])=>`${m}${v}=${O},`,"");if(vC(u)&&l!=="_self")return n0(e||"",l),new pp(null);const p=window.open(e||"",l,f);he(p,t,"popup-blocked");try{p.focus()}catch{}return new pp(p)}function n0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const s0="__/auth/handler",r0="emulator/auth/handler",i0=encodeURIComponent("fac");async function mp(t,e,n,s,r,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:pr,eventId:r};if(e instanceof pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Eo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${i0}=${encodeURIComponent(c)}`:"";return`${o0(t)}?${ho(l).slice(1)}${u}`}function o0({config:t}){return t.emulator?Zu(t,r0):`https://${t.authDomain}/${s0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="webStorageSupport";class a0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yy,this._completeRedirectFn=DP,this._overrideRedirectResult=CP}async _openPopup(e,n,s,r){ns(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await mp(e,n,s,qc(),r);return t0(e,i,rh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await mp(e,n,s,qc(),r);return cP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ns(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await QP(e),s=new OP(e);return n.register("authEvent",r=>(he(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},r=>{const i=r?.[0]?.[rc];i!==void 0&&n(!!i),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ay()||ty()||th()}}const l0=a0;var gp="@firebase/auth",_p="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function h0(t){or(new Ms("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ly(t)},u=new AC(s,r,i,c);return xC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),or(new Ms("auth-internal",e=>{const n=as(e.getProvider("auth").getImmediate());return(s=>new c0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(gp,_p,u0(t)),In(gp,_p,"esm2020")}/**
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
 */const f0=300,d0=ag("authIdTokenMaxAge")||f0;let yp=null;const p0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>d0)return;const r=n?.token;yp!==r&&(yp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _l(t=vu()){const e=Ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VC(t,{popupRedirectResolver:l0,persistence:[yP,oP,yy]}),s=ag("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=p0(i.toString());nP(n,o,()=>o(n.currentUser)),tP(n,l=>o(l))}}const r=rg("auth");return r&&MC(n,`http://${r}`),n}function m0(){return document.getElementsByTagName("head")?.[0]??document}RC({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=hn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",m0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});h0("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="firebasestorage.googleapis.com",g0="storageBucket",_0=120*1e3,y0=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Mn{constructor(e,n,s=0){super(ic(e),`Firebase Storage: ${n} (${ic(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ln.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ic(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xn||(xn={}));function ic(t){return"storage/"+t}function v0(){const t="An unknown error occurred, please check the error payload for server response.";return new Ln(xn.UNKNOWN,t)}function E0(){return new Ln(xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w0(){return new Ln(xn.CANCELED,"User canceled the upload/download.")}function T0(t){return new Ln(xn.INVALID_URL,"Invalid URL '"+t+"'.")}function I0(t){return new Ln(xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vp(t){return new Ln(xn.INVALID_ARGUMENT,t)}function Ry(){return new Ln(xn.APP_DELETED,"The Firebase app was deleted.")}function b0(t){return new Ln(xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=an.makeFromUrl(e,n)}catch{return new an(e,"")}if(s.path==="")return s;throw I0(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${r}/o${m}`,"i"),O={bucket:1,path:3},D=n===Ay?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",M=new RegExp(`^https?://${D}/${r}/${k}`,"i"),V=[{regex:l,indices:c,postModify:i},{regex:v,indices:O,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<V.length;C++){const z=V[C],Y=z.regex.exec(e);if(Y){const w=Y[z.indices.bucket];let _=Y[z.indices.path];_||(_=""),s=new an(w,_),z.postModify(s);break}}if(s==null)throw T0(e);return s}}class A0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...k){u||(u=!0,e.apply(null,k))}function p(k){r=setTimeout(()=>{r=null,t(v,c())},k)}function m(){i&&clearTimeout(i)}function v(k,...M){if(u){m();return}if(k){m(),f.call(null,k,...M);return}if(c()||o){m(),f.call(null,k,...M);return}s<64&&(s*=2);let V;l===1?(l=2,V=0):V=(s+Math.random())*1e3,p(V)}let O=!1;function D(k){O||(O=!0,m(),!u&&(r!==null?(k||(l=2),clearTimeout(r),p(0)):k||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},n),D}function S0(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){return t!==void 0}function Ep(t,e,n,s){if(s<e)throw vp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw vp(`Invalid value for '${t}'. Expected ${n} or less.`)}function P0(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Va;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Va||(Va={}));/**
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
 */function k0(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,s,r,i,o,l,c,u,f,p,m=!0,v=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,D)=>{this.resolve_=O,this.reject_=D,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new $o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Va.NO_ERROR,c=i.getStatus();if(!l||k0(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Va.ABORT;s(!1,new $o(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new $o(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());C0(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=v0();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Ry():w0();o(c)}else{const c=E0();o(c)}};this.canceled_?n(!1,new $o(!1,null,!0)):this.backoffId_=R0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&S0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $o{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function N0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function O0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function V0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function x0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function M0(t,e,n,s,r,i,o=!0,l=!1){const c=P0(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return V0(f,e),N0(f,n),O0(f,i),x0(f,s),new D0(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function U0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class xa{constructor(e,n){this._service=e,n instanceof an?this._location=n:this._location=an.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xa(e,n)}get root(){const e=new an(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return U0(this._location.path)}get storage(){return this._service}get parent(){const e=L0(this._location.path);if(e===null)return null;const n=new an(this._location.bucket,e);return new xa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw b0(e)}}function wp(t,e){const n=e?.[g0];return n==null?null:an.makeFromBucketSpec(n,t)}function F0(t,e,n,s={}){t.host=`${e}:${n}`;const r=dr(e);r&&(mu(`https://${t.host}/b`),gu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:lg(i,t.app.options.projectId))}class B0{constructor(e,n,s,r,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Ay,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_0,this._maxUploadRetryTime=y0,this._requests=new Set,r!=null?this._bucket=an.makeFromBucketSpec(r,this._host):this._bucket=wp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=an.makeFromBucketSpec(this._url,e):this._bucket=wp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ep("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ep("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xa(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new A0(Ry());{const o=M0(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Tp="@firebase/storage",Ip="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="storage";function j0(t=vu(),e){t=Vt(t);const s=Ja(t,Sy).getImmediate({identifier:e}),r=ig("storage");return r&&$0(s,...r),s}function $0(t,e,n,s={}){F0(t,e,n,s)}function H0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new B0(n,s,r,e,pr)}function z0(){or(new Ms(Sy,H0,"PUBLIC").setMultipleInstances(!0)),In(Tp,Ip,""),In(Tp,Ip,"esm2020")}z0();const q0={apiKey:"AIzaSyA88mxzUStbuMFKNr9Q0OODtHXmpyuqvBY",authDomain:"findyourfit-93e9f.firebaseapp.com",projectId:"findyourfit-93e9f",storageBucket:"findyourfit-93e9f.firebasestorage.app",messagingSenderId:"715690823951",appId:"1:715690823951:web:f3af86677f7d990c55ae7a",measurementId:"G-2GTC9GRYRL"},ah=hg(q0),It=OS(ah),En=_l(ah);j0(ah);const Zt=zw("user",{state:()=>({userData:null,moodData:null,journalData:null,therapists:null}),actions:{async fetchUserData(){const t=En.currentUser;if(!t)return;const e=Nt(It,"users",t.uid),n=await Mr(e);n.exists()&&(this.userData=n.data(),this.userData.streak||(this.userData.streak={count:1,lastUpdate:Cn()},await un(e,this.userData,{merge:!0})),await this.updateStreak(),await this.getMood(),await this.getJournalEntries(),await this.getTherapists())},setUserData(t){this.userData=t},setMoodData(t){this.moodData=t},async updateStreak(){const t=En.currentUser;if(!t||!this.userData?.streak)return;const{count:e,lastUpdate:n}=this.userData.streak;if(!n||typeof n.toDate!="function"){this.userData.streak={count:1,lastUpdate:Cn()},await un(Nt(It,"users",t.uid),this.userData,{merge:!0});return}const s=n.toDate(),r=new Date;this.isSameDay(s,r)||(this.isYesterday(s,r)?this.userData.streak.count=e+1:this.userData.streak.count=1,this.userData.streak.lastUpdate=Cn(),await un(Nt(It,"users",t.uid),this.userData,{merge:!0}))},isSameDay(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()},isYesterday(t){const e=t,n=new Date,s=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate())-s)/(1e3*60*60*24)===1},async getMood(){const t=En.currentUser;if(!t)return;const e=Nt(It,"mood",t.uid),n=await Mr(e);n.exists()&&(this.moodData=n.data())},async getJournalEntries(){const t=En.currentUser;if(!t)return;const e=Nt(It,"journals",t.uid),n=await Mr(e);if(n.exists()){const s=n.data(),r=Object.entries(s).sort((i,o)=>Number(o[0])-Number(i[0])).map(([i,o])=>({id:i,...o}));this.journalData=r}},async getTherapists(){const t=[];return(await KS(NS(It,"therapists"))).forEach(n=>{t.push({id:n.id,...n.data()})}),this.therapists=t,this.therapists}}}),en=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},W0={class:"modal_holder"},G0={class:"modal_heading_holder inter font_size_xs"},K0=["innerHTML"],Q0={__name:"errorModal",props:{errorMessage:{type:String,required:!0}},setup(t){return(e,n)=>(K(),se("div",{class:"modal_overlay",onClick:n[1]||(n[1]=du(s=>e.$emit("close"),["self"])),role:"dialog","aria-modal":"true"},[S("div",W0,[S("div",G0,[n[2]||(n[2]=S("span",null," Attention!",-1)),S("button",{class:"modal_close_button",onClick:n[0]||(n[0]=s=>e.$emit("close"))},"×")]),S("div",{class:"modal_content_holder inter font_size_xs",innerHTML:t.errorMessage},null,8,K0)])]))}},ni=en(Q0,[["__scopeId","data-v-b33337de"]]),Y0={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},J0={class:"modal_holder"},X0={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},Z0={class:"modal_content_holder inter font_size_xs"},ek=["value"],tk=["value"],nk={__name:"userInfoModal",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),s=Qa(),r=t,i=ne([]),o=ne(""),l=ne(""),c=ne(""),u=ne(""),f=ne(""),p=ne([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),m=ne(!1),v=ne("");rs(async()=>{const V=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();i.value=V.sort((C,z)=>C.name.common.localeCompare(z.name.common))});const O=L=>/^\d{10}$/.test(L),D=L=>{if(!/^\d{4}\/\d{2}\/\d{2}$/.test(L))return!1;const[V,C,z]=L.split("/").map(Number),Y=new Date(V,C-1,z);return Y.getFullYear()===V&&Y.getMonth()===C-1&&Y.getDate()===z},k=async()=>{if(_l().currentUser,v.value="",m.value=!1,!O(c.value)){v.value="Contact Number must be a valid 10-digit number.",m.value=!0;return}if(!D(u.value)){v.value="Date of Birth must be in the format yyyy/mm/dd.",m.value=!0;return}const V={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:r.globalUser.email,country:o.value,gender:f.value},streak:{count:1,lastUpdate:Cn()},loginDate:new Date().toISOString(),uid:r.globalUser.uid};await un(Nt(It,"users",r.globalUser.uid),V),n.setUserData(V),s.push({name:"Navigation"})},M=()=>{m.value=!1,v.value=""};return(L,V)=>(K(),se("div",Y0,[S("div",J0,[S("div",X0,[V[6]||(V[6]=S("span",{style:{width:"80%"}},"User Information",-1)),S("button",{class:"modal_close_button",onClick:V[0]||(V[0]=C=>L.$emit("close"))},"×")]),S("div",Z0,[V[10]||(V[10]=S("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),S("form",{class:"modal_form_holder",onSubmit:du(k,["prevent"])},[We(S("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":V[1]||(V[1]=C=>l.value=C),required:""},null,512),[[Ot,l.value]]),We(S("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":V[2]||(V[2]=C=>c.value=C),required:""},null,512),[[Ot,c.value]]),We(S("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":V[3]||(V[3]=C=>u.value=C),required:""},null,512),[[Ot,u.value]]),We(S("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":V[4]||(V[4]=C=>f.value=C)},[V[7]||(V[7]=S("option",{disabled:"",value:""},"Please select one",-1)),(K(!0),se(Ce,null,ot(p.value,C=>(K(),se("option",{key:C.value,value:C.value},ye(C.text),9,ek))),128))],512),[[Cs,f.value]]),We(S("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":V[5]||(V[5]=C=>o.value=C),id:"country"},[V[8]||(V[8]=S("option",{disabled:"",value:""},"Select your country",-1)),(K(!0),se(Ce,null,ot(i.value,C=>(K(),se("option",{key:C.cca3,value:C.cca3},ye(C.name.common),9,tk))),128))],512),[[Cs,o.value]]),V[9]||(V[9]=S("button",{type:"submit",class:"modal_button inter font_size_xs"},"Confirm",-1))],32)])]),m.value?(K(),wt(ni,{key:0,errorMessage:v.value,onClose:M},null,8,["errorMessage"])):Ft("",!0)]))}},sk=en(nk,[["__scopeId","data-v-518c205f"]]),rk={class:"login_page"},ik={class:"login_page_content"},ok={class:"login_page_form"},ak={class:"login_page_form_fields"},lk=["type"],ck={class:"show_password_toggle inter font_size_xs"},uk={class:"login_page_toggle_register inter font_size_xs"},hk={__name:"loginRegister",setup(t){const e=Zt(),n=Qa(),s=ne("password"),r=ne(null),i=ne(""),o=ne(""),l=ne("login"),c=ne(!1),u=ne(""),f=ne(!1),p=new qn;p.addScope("https://www.googleapis.com/auth/contacts.readonly");const m=()=>{s.value=s.value==="password"?"text":"password"},v=()=>{l.value=l.value==="login"?"register":"login"},O=C=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(C),D=()=>{if(!i.value){u.value="Please enter your email to reset your password!",c.value=!0;return}XC(En,i.value).then(()=>{u.value="An email has been sent to reset your password!",c.value=!0})},k=C=>{const z=C.toDate(),Y=new Date,w=new Date(Y.getFullYear(),Y.getMonth(),Y.getDate()),_=new Date(w);return _.setDate(w.getDate()-1),z>=_&&z<w},M=async C=>{C.streak&&(k(C.streak.lastUpdate)?C.streak.count+=1:C.streak.count=1,C.streak.lastUpdate=Cn(),C.loginDate=Cn(),await un(Nt(It,"users",C.uid),C))},L=async()=>{try{const z=(await IP(En,p)).user;if(z){const Y=Nt(It,"users",z.uid),w=await Mr(Y);if(w.exists()){const _=w.data();_&&await M(_)}}n.push({name:"Navigation"})}catch(C){console.log(C.message),u.value="Google login failed!",c.value=!0}},V=async()=>{try{if(u.value="",c.value=!1,!O(i.value)){u.value="Invalid email format!",c.value=!0;return}if(l.value==="register"){const z=(await ZC(En,i.value,o.value)).user;try{await bP(z,p)}catch{}r.value={uid:z.uid,email:z.email},f.value=!0}else{const z=(await eP(En,i.value,o.value)).user,Y=Nt(It,"users",z.uid),w=await Mr(Y);if(w.exists()){const _=w.data();_&&(await M(_),e.setUserData(_),n.push({name:"Navigation"}))}}}catch(C){C.code==="auth/invalid-credential"?u.value="Invalid login details.":C.code==="auth/email-already-in-use"?u.value="Email already in use.":u.value="An unexpected error occurred.",c.value=!0}};return(C,z)=>(K(),se("div",rk,[S("div",ik,[z[4]||(z[4]=S("div",{class:"login_page_intro inter font_size_xs"},[S("div",{class:"login_page_intro_text"},[S("div",{class:"font_size_m licorice_regular"},"Welcome to Finding Your Fit"),S("br"),S("br"),Dt(" A space designed to help you understand yourself better, build emotional balance, and grow into the life that fits you best. Take a moment to reconnect, reflect, and start working toward your goals — one step at a time. ")])],-1)),S("div",ok,[S("form",ak,[We(S("input",{class:"login_page_input inter font_size_xs",type:"text",placeholder:"Email","onUpdate:modelValue":z[0]||(z[0]=Y=>i.value=Y)},null,512),[[Ot,i.value]]),We(S("input",{class:"login_page_password inter font_size_xs",type:s.value,placeholder:"Password","onUpdate:modelValue":z[1]||(z[1]=Y=>o.value=Y)},null,8,lk),[[Pw,o.value]]),S("div",ck,[S("label",null,[S("input",{type:"checkbox",onChange:m},null,32),z[3]||(z[3]=Dt(" Show Password ",-1))])])]),S("button",{class:"login_page_button inter font_size_xs",onClick:V},ye(l.value==="login"?"Login":"Register"),1),S("div",{class:"login_page_forgot_password inter font_size_xs",onClick:D},ye(l.value==="login"?"Forgot Password?":""),1)]),S("div",{class:"login_page_social_login"},[S("div",{class:"login_page_social_button",onClick:L})]),S("div",uk,[S("u",{onClick:v},ye(l.value==="login"?"Register":"Login"),1)])]),c.value?(K(),wt(ni,{key:0,errorMessage:u.value,onClose:z[2]||(z[2]=Y=>c.value=!1)},null,8,["errorMessage"])):Ft("",!0),f.value&&r.value?(K(),wt(sk,{key:1,globalUser:r.value},null,8,["globalUser"])):Ft("",!0)]))}},fk=en(hk,[["__scopeId","data-v-f1fb9b1e"]]),bp=[{content:"Success is not final, failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},{content:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{content:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"You are never too old to set another goal or to dream a new dream.",author:"C.S. Lewis"},{content:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"Don’t watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"The only limit to our realization of tomorrow is our doubts of today.",author:"Franklin D. Roosevelt"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Don’t wait. The time will never be just right.",author:"Napoleon Hill"},{content:"Believe in yourself and all that you are.",author:"Christian D. Larson"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Success is what comes after you stop making excuses.",author:"Luis Galarza"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Do what you love, love what you do.",author:"Unknown"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Motivation is what gets you started. Habit is what keeps you going.",author:"Jim Ryun"},{content:"Don’t let fear decide your future.",author:"Shalane Flanagan"},{content:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"Do one thing every day that scares you.",author:"Eleanor Roosevelt"},{content:"The best way to predict the future is to invent it.",author:"Alan Kay"},{content:"Difficult roads often lead to beautiful destinations.",author:"Unknown"},{content:"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",author:"Chantal Sutherland"},{content:"If it doesn’t challenge you, it won’t change you.",author:"Fred DeVito"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"The expert in anything was once a beginner.",author:"Helen Hayes"},{content:"Don’t count the days, make the days count.",author:"Muhammad Ali"},{content:"The harder the battle, the sweeter the victory.",author:"Les Brown"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"You don’t have to see the whole staircase, just take the first step.",author:"Martin Luther King Jr."},{content:"Small daily improvements over time lead to stunning results.",author:"Robin Sharma"},{content:"Don’t let what you cannot do interfere with what you can do.",author:"John Wooden"},{content:"The only limit is the one you set yourself.",author:"Felix Baumgartner"},{content:"Great things are done by a series of small things brought together.",author:"Vincent Van Gogh"},{content:"Your dream doesn’t have an expiration date. Take a deep breath and try again.",author:"KT Witten"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"You are braver than you believe, stronger than you seem, and smarter than you think.",author:"A.A. Milne"},{content:"Work until you no longer have to introduce yourself.",author:"Unknown"},{content:"The best revenge is massive success.",author:"Frank Sinatra"},{content:"Your only limit is your mind.",author:"Unknown"},{content:"Stop being afraid of what could go wrong and start being excited about what could go right.",author:"Unknown"},{content:"Do not wait to strike till the iron is hot; but make it hot by striking.",author:"William Butler Yeats"},{content:"Don’t let perfectionism get in the way of progress.",author:"Unknown"},{content:"Great minds discuss ideas; average minds discuss events; small minds discuss people.",author:"Eleanor Roosevelt"},{content:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Do what you can, with what you have, where you are.",author:"Theodore Roosevelt"},{content:"Success is not about the destination, it’s about the journey.",author:"Zig Ziglar"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"A year from now you may wish you had started today.",author:"Karen Lamb"},{content:"Don’t stop until you’re proud.",author:"Unknown"},{content:"Dream big. Start small. Act now.",author:"Robin Sharma"},{content:"Hard work beats talent when talent doesn’t work hard.",author:"Tim Notke"},{content:"Stay positive, work hard, make it happen.",author:"Unknown"},{content:"Your time is limited, don’t waste it living someone else’s life.",author:"Steve Jobs"},{content:"The difference between ordinary and extraordinary is that little extra.",author:"Jimmy Johnson"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Success doesn’t come to you, you go to it.",author:"Marva Collins"},{content:"A river cuts through rock not because of its power, but because of its persistence.",author:"Jim Watkins"},{content:"Discipline is the bridge between goals and accomplishment.",author:"Jim Rohn"},{content:"Do what is right, not what is easy nor what is popular.",author:"Unknown"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Don’t limit yourself. Many people limit themselves to what they think they can do.",author:"Mary Kay Ash"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Success is the progressive realization of a worthy goal or ideal.",author:"Earl Nightingale"},{content:"To succeed in life, you need two things: ignorance and confidence.",author:"Mark Twain"},{content:"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",author:"Mary Anne Radmacher"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"Don’t let small minds convince you that your dreams are too big.",author:"Unknown"},{content:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",author:"Pelé"},{content:"The best way out is always through.",author:"Robert Frost"},{content:"Failure is simply the opportunity to begin again, this time more intelligently.",author:"Henry Ford"},{content:"Don’t wish it were easier. Wish you were better.",author:"Jim Rohn"},{content:"The mind is everything. What you think you become.",author:"Buddha"},{content:"When you feel like quitting, remember why you started.",author:"Unknown"},{content:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},{content:"Don’t be afraid to give up the good to go for the great.",author:"John D. Rockefeller"},{content:"Do not be embarrassed by your failures, learn from them and start again.",author:"Richard Branson"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Small deeds done are better than great deeds planned.",author:"Peter Marshall"},{content:"Act as if what you do makes a difference. It does.",author:"William James"},{content:"Success is not how high you have climbed, but how you make a positive difference to the world.",author:"Roy T. Bennett"},{content:"Your future is created by what you do today, not tomorrow.",author:"Robert Kiyosaki"},{content:"The secret of success is to do the common thing uncommonly well.",author:"John D. Rockefeller Jr."},{content:"What seems to us as bitter trials are often blessings in disguise.",author:"Oscar Wilde"},{content:"The only place where success comes before work is in the dictionary.",author:"Vidal Sassoon"},{content:"Happiness is not something ready-made. It comes from your own actions.",author:"Dalai Lama"},{content:"Opportunities multiply as they are seized.",author:"Sun Tzu"},{content:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",author:"William James"},{content:"Don’t be afraid to start over. It’s a chance to build something better.",author:"Unknown"},{content:"Success isn’t always about greatness. It’s about consistency.",author:"Dwayne Johnson"},{content:"You are confined only by the walls you build yourself.",author:"Andrew Murphy"},{content:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t let the fear of losing be greater than the excitement of winning.",author:"Robert Kiyosaki"},{content:"You can’t cross the sea merely by standing and staring at the water.",author:"Rabindranath Tagore"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"The journey of a thousand miles begins with one step.",author:"Lao Tzu"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Jerry Dunn"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"It’s not whether you get knocked down, it’s whether you get up.",author:"Vince Lombardi"},{content:"Everything you can imagine is real.",author:"Pablo Picasso"},{content:"Success is not in never falling, but in rising every time we fall.",author:"Confucius"},{content:"Don’t wait for opportunity. Create it.",author:"George Bernard Shaw"},{content:"The best dreams happen when you’re awake.",author:"Cherie Gilderbloom"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"What you do today can improve all your tomorrows.",author:"Ralph Marston"}];function dk(){const t=Math.floor(Math.random()*bp.length);return bp[t]}const pk="/assets/my_therapist-BGpDoE1u.png",mk="/assets/my_journal-ByAOnFF2.png",gk="/assets/journal-BcWmOkN8.png",_k="/assets/my_courses-DAreBNF0.png",yk="/assets/mood_track-DScXBvTj.png",vk={class:"home_container"},Ek={class:"greeting_section licorice_regular font_size_m"},wk={class:"checkin_section"},Tk={class:"feeling_section"},Ik={class:"inspiration_section"},bk={class:"quote_text inter font_size_xxs"},Ak={class:"offer_section"},Rk={class:"offer_list"},Sk={class:"offer_icon_wrapper"},Ck={class:"offer_content_wrapper"},Pk={class:"offer_title inter font_size_xxs"},kk={class:"offer_description inter font_size_xxs"},Dk={__name:"home",setup(t){const e=Zt(),n=ne({content:"",author:""});ne(!1);const s=$e(()=>e.userData?.personalInfo.name||"");$e(()=>[{label:"My Therapist",url:pk},{label:"Journal Entry",url:mk},{label:"Explore Courses",url:_k}]);const r=$e(()=>[{label:"Personalized mood tracking",content:"Log your daily mood to visualize trends, identify triggers, and gain insights.",icon:yk},{label:"Journaling",content:"A private space for self-reflection, prompts, and gain thoughts.",icon:gk}]);rs(()=>{console.log("Home mounted"),n.value=dk()});const i=()=>{const o=new Date().getHours();return o<12?"morning":o<18?"afternoon":"evening"};return(o,l)=>(K(),se("div",vk,[S("div",Ek," Good "+ye(i())+", "+ye(s.value)+"! ",1),S("div",wk,[S("div",Tk,[l[1]||(l[1]=S("div",{class:"feeling_heading inter font_size_xs"},[S("b",null,"How are you feeling today?")],-1)),l[2]||(l[2]=S("div",{class:"feeling_image"},null,-1)),S("div",{class:"checkin_button inter font_size_xxs",onClick:l[0]||(l[0]=c=>o.$emit("setPage","mood"))}," Check in now ")])]),S("div",Ik,[l[3]||(l[3]=S("div",{class:"inspiration_heading inter font_size_xxs"},[S("b",null,"Inspiration")],-1)),S("div",bk,ye(n.value.content),1)]),S("div",Ak,[l[4]||(l[4]=S("div",{class:"offer_heading inter font_size_xs"},[S("b",null,"What we offer")],-1)),S("div",Rk,[(K(!0),se(Ce,null,ot(r.value,c=>(K(),se("div",{class:"offer_card",key:c.label},[S("div",Sk,[S("div",{class:"feature_icon",style:sr({backgroundImage:`url(${c.icon})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4)]),S("div",Ck,[S("div",Pk,[S("b",null,ye(c.label),1)]),S("div",kk,ye(c.content),1)])]))),128))])])]))}},Cy=en(Dk,[["__scopeId","data-v-0500334a"]]),Nk={class:"loading_page_holder"},Ok={__name:"loadingPage",setup(t){const e=Zt(),n=Qa();return rs(()=>{e.userData?.uid?n.push({name:"Navigation"}):n.push({name:"Login"})}),(s,r)=>(K(),se("div",Nk))}},Vk=en(Ok,[["__scopeId","data-v-5093d853"]]),xk={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},Mk={class:"modal_holder"},Lk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},Uk={class:"modal_content_holder inter font_size_xs"},Fk=["value"],Bk=["value"],oc="editProfileForm",Ap={__name:"profileEdit",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),s=e,r=t,i=ne([]),o=ne(""),l=ne(""),c=ne(""),u=ne(""),f=ne(""),p=ne(""),m=ne(!1),v=[{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}];rs(async()=>{const V=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3")).json();i.value=V.sort((z,Y)=>z.name.common.localeCompare(Y.name.common));const C=JSON.parse(localStorage.getItem(oc));C&&(l.value=C.nameSurname||"",c.value=C.contactNumber||"",u.value=C.dateOfBirth||"",f.value=C.selectedOption||"",o.value=C.selectedCountry||"")}),Ss([l,c,u,f,o],()=>{localStorage.setItem(oc,JSON.stringify({nameSurname:l.value,contactNumber:c.value,dateOfBirth:u.value,selectedOption:f.value,selectedCountry:o.value}))},{deep:!0});function O(L){return/^\d{10}$/.test(L)}function D(L){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(L))return!1;const[C,z,Y]=L.split("/").map(Number),w=new Date(C,z-1,Y);return w.getFullYear()===C&&w.getMonth()===z-1&&w.getDate()===Y}const k=async()=>{const V=_l().currentUser;if(m.value=!1,p.value="",!O(c.value)){p.value="Contact Number must be a valid 10-digit number.",m.value=!0;return}if(!D(u.value)){p.value="Date of Birth must be in the format yyyy/mm/dd.",m.value=!0;return}const C=r.globalUser.userData,z={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:C.email||V.email,gender:f.value,country:o.value},uid:C.uid||V.uid,loginDate:C.loginDate,streak:C.streak,profileEdited:Cn()};n.setUserData(z),await un(Nt(It,"users",z.uid),z),localStorage.removeItem(oc),s("close")},M=()=>{m.value=!1,p.value=""};return(L,V)=>(K(),se("div",xk,[S("div",Mk,[S("div",Lk,[V[6]||(V[6]=S("span",{style:{width:"80%"}},"Edit User Information",-1)),S("button",{class:"modal_close_button",onClick:V[0]||(V[0]=C=>L.$emit("close"))},"×")]),S("div",Uk,[V[10]||(V[10]=S("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),S("form",{class:"modal_form_holder",onSubmit:du(k,["prevent"])},[We(S("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":V[1]||(V[1]=C=>l.value=C),required:""},null,512),[[Ot,l.value]]),We(S("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":V[2]||(V[2]=C=>c.value=C),required:""},null,512),[[Ot,c.value]]),We(S("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":V[3]||(V[3]=C=>u.value=C),required:""},null,512),[[Ot,u.value]]),We(S("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":V[4]||(V[4]=C=>f.value=C)},[V[7]||(V[7]=S("option",{disabled:"",value:""},"Please select one",-1)),(K(),se(Ce,null,ot(v,C=>S("option",{key:C.value,value:C.value},ye(C.text),9,Fk)),64))],512),[[Cs,f.value]]),We(S("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":V[5]||(V[5]=C=>o.value=C)},[V[8]||(V[8]=S("option",{disabled:"",value:""},"Select your country",-1)),(K(!0),se(Ce,null,ot(i.value,C=>(K(),se("option",{key:C.cca3,value:C.cca3},ye(C.name.common),9,Bk))),128))],512),[[Cs,o.value]]),V[9]||(V[9]=S("button",{type:"submit",class:"modal_button inter font_size_xs"},"Confirm",-1))],32)])]),m.value?(K(),wt(ni,{key:0,errorMessage:p.value,onClose:M},null,8,["errorMessage"])):Ft("",!0)]))}},Py="/assets/brown_man-DU8HBBmE.png",ky="/assets/blonde_man-Br_WNAu2.png",Dy="/assets/ginger_man-D_7vVZja.png",Ny="/assets/black_man-DZoPS0-N.png",Oy="/assets/brunette_woman-C5YdWLXO.png",Vy="/assets/blonde_woman-IP-2iqnM.png",xy="/assets/ginger_woman-5AupqmXa.png",My="/assets/black_woman-QP95zNq-.png",Kc="/assets/none-BOBk4slU.png",jk={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},$k={class:"modal_holder"},Hk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},zk={class:"modal_content_holder inter font_size_xs"},qk=["onClick"],Wk=["onClick"],Gk={__name:"profileAvatar",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),s=$e(()=>[{label:"Brown Hair",url:Py,ref:"brown_man"},{label:"Blonde Hair",url:ky,ref:"blonde_man"},{label:"Ginger Hair",url:Dy,ref:"ginger_man"},{label:"Black Hair",url:Ny,ref:"black_man"},{label:"Brown Hair Woman",url:Oy,ref:"brown_woman"},{label:"Blonde Hair Woman",url:Vy,ref:"blonde_woman"},{label:"Ginger Hair Woman",url:xy,ref:"ginger_woman"},{label:"Black Hair Woman",url:My,ref:"black_woman"},{label:"None",url:Kc,ref:"none"}]),r=e,i=t,o=ne("none"),l=u=>{o.value=u,localStorage.setItem("selectedAvatar",u)};rs(()=>{const u=localStorage.getItem("selectedAvatar");u&&(o.value=u)});const c=async()=>{const u=_l(),f=i.globalUser.userData,p=u.currentUser;await un(Nt(It,"users",f.uid||p.uid),{profileAvatar:o.value,profileEdited:Cn()},{merge:!0}),n.userData.profileAvatar=o.value,localStorage.removeItem("selectedAvatar"),r("close")};return(u,f)=>(K(),se("div",jk,[S("div",$k,[S("div",Hk,[f[1]||(f[1]=S("span",{style:{width:"80%"}},"Profile Avatar",-1)),S("button",{class:"modal_close_button",onClick:f[0]||(f[0]=p=>u.$emit("close"))},"×")]),S("div",zk,[(K(!0),se(Ce,null,ot(s.value,p=>(K(),se("div",{class:"modal_avatars_holder",key:p.ref},[p.ref===o.value?(K(),se("div",{key:0,class:"modal_avatar_selected",onClick:m=>l(p.ref),style:sr({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,12,qk)):(K(),se("div",{key:1,class:"modal_avatar",onClick:m=>l(p.ref),style:sr({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,12,Wk))]))),128))]),S("button",{type:"submit",class:"modal_button inter font_size_xs",onClick:c}," Confirm ")])]))}},Rp=en(Gk,[["__scopeId","data-v-f54a08c5"]]),Kk={class:"profile_container"},Qk={class:"profile_header"},Yk={class:"profile_edit_btn"},Jk={class:"profile_info"},Xk={class:"profile_avatar_wrapper"},Zk={class:"pfp_edit_button"},e1={class:"profile_user_details font_size_s inter"},t1={class:"font_size_xxs"},n1={class:"profile_stats"},s1=["onClick"],r1={class:"profile_stat_top inter font_size_xs"},i1={key:0,class:"profile_stat_value"},o1={key:0},a1={key:1},l1={key:1,class:"profile_stat_value"},c1={class:"profile_stat_icon"},u1={class:"profile_stat_label inter font_size_xs"},h1={__name:"profile",emits:["setPage"],setup(t,{emit:e}){const n=e,s=Qa(),r=Zt(),i=ne(!1),o=ne(!1),l=ne(!1),c=ne(null),u={brown_man:Py,blonde_man:ky,ginger_man:Dy,black_man:Ny,brown_woman:Oy,blonde_woman:Vy,ginger_woman:xy,black_woman:My,none:Kc},f=$e(()=>{const Y=r.userData?.profileAvatar||"none";return u[Y]||Kc}),p=$e(()=>r.userData?.personalInfo.name||""),m=$e(()=>r.userData?.personalInfo.email||""),v=$e(()=>r.userData?.streak?.count||0),O=$e(()=>r.journalData&&r.journalData.length||0),D=$e(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),k=ne([{label:"App Streak",value:v.value,icon:"fa fa-signal"},{label:"Journal Entries",value:O.value,icon:"fa fa-book"},{label:"Mood Trends",value:"",icon:"fas fa-chart-line"}]);rs(()=>{c.value=r.userData;const Y=new Date().toISOString().split("T")[0];if(!r.moodData||!r.moodData[Y])return;i.value=!0;const w=r.moodData[Y];for(const _ of D.value)if(_.ref===w.mood){k.value[2].value=_.icon;break}});const M=()=>{o.value=!0},L=async()=>{await sP(En),s.push({name:"Login"})},V=()=>{l.value=!0},C=Y=>{console.log("Image selected:",Y.target.files[0])},z=Y=>{console.log(Y),Y.label=="Mood Trends"&&n("setPage","moodTrends")};return(Y,w)=>(K(),se(Ce,null,[S("div",Kk,[S("div",Qk,[w[5]||(w[5]=S("div",{class:"profile_title font_size_s inter"},null,-1)),S("div",Yk,[S("i",{class:"fas fa-edit",onClick:w[0]||(w[0]=_=>M())}),S("i",{class:"fas fa-sign-out-alt",onClick:w[1]||(w[1]=_=>L())})])]),S("div",Jk,[S("div",Xk,[S("div",{class:"profile_avatar",style:sr({backgroundImage:`url(${f.value})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,4)]),S("div",Zk,[S("i",{class:"fas fa-edit",onClick:w[2]||(w[2]=_=>V())}),S("input",{type:"file",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:C},null,544)]),S("div",e1,[Dt(ye(p.value)+" ",1),S("span",t1,ye(m.value),1)])]),S("div",n1,[(K(!0),se(Ce,null,ot(k.value,(_,E)=>(K(),se("div",{class:"profile_stat_card",key:E,onClick:R=>z(_)},[S("div",r1,[_.label==="Mood Trends"?(K(),se("div",i1,[i.value?(K(),se("div",o1,[S("i",{class:Dn(_.value),style:{"font-size":"1.5rem"}},null,2),w[6]||(w[6]=Dt("  ",-1))])):(K(),se("div",a1,[...w[7]||(w[7]=[S("i",{class:"far fa-meh",style:{"font-size":"1.5rem"}},null,-1),Dt("  ",-1)])]))])):(K(),se("div",l1,ye(_.value),1)),S("div",c1,[S("i",{class:Dn(_.icon),style:{color:"#87bfba"}},null,2)])]),S("div",u1,ye(_.label),1)],8,s1))),128))])]),o.value?(K(),wt(Ap,{key:0,onClose:w[3]||(w[3]=_=>o.value=!1),globalUser:Tn(r),viewPoint:Ap},null,8,["globalUser"])):Ft("",!0),l.value?(K(),wt(Rp,{key:1,onClose:w[4]||(w[4]=_=>l.value=!1),globalUser:Tn(r),viewPoint:Rp},null,8,["globalUser"])):Ft("",!0)],64))}},Ly=en(h1,[["__scopeId","data-v-151ee4de"]]),f1={class:"mood_trends_holder"},d1={class:"mood_trends_timerange_holder"},p1=["onClick"],m1={__name:"moodTrends",setup(t){const e=ne("7_days"),n=[{key:"7_days",label:"7 Days"},{key:"30_days",label:"30 Days"},{key:"90_days",label:"3 Months"}];return(s,r)=>(K(),se("div",f1,[r[0]||(r[0]=S("div",{class:"mood_trends_heading_holder inter font_size_xs"}," My Mood Trends ",-1)),r[1]||(r[1]=S("br",null,null,-1)),S("div",d1,[(K(),se(Ce,null,ot(n,i=>S("div",{key:i.key,class:Dn(["mood_trends_timerange inter font_size_xxs",{mood_trends_timerange_selected:e.value===i.key}]),onClick:o=>e.value=i.key},ye(i.label),11,p1)),64))])]))}},Uy=en(m1,[["__scopeId","data-v-fda87a2e"]]),g1={class:"journal_selection_holder inter font_size_xs"},_1=["onClick"],y1={key:0,class:"journal_entry_holder"},v1={class:"journal_entry_date_holder inter font_size_xs"},E1={class:"journal_entry_content_holder"},w1={key:1},T1={key:0,class:"journal_list_holder"},I1={class:"journal_list_heading inter font_size_sm"},b1={class:"journal_list_content inter font_size_xs"},A1={class:"journal_list_timestamp inter font_size_xxs"},R1={__name:"journal",emits:["close"],setup(t,{emit:e}){const n=e,s=Zt(),r=ne("journalEntry"),i=[{key:"journalEntry",label:"New Journal Entry",cornerClass:"right-rounded"},{key:"journalList",label:"Journal List",cornerClass:"left-rounded"}],o=ne(new Date().toDateString()),l=ne(new Date().toLocaleTimeString()),c=ne(""),u=ne(""),f=ne(!1),p=ne(""),m=D=>{r.value=D,o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString()},v=()=>{f.value=!1,p.value=""},O=async()=>{if(!c.value){f.value=!0,p.value="Please give a journal title.";return}if(!u.value){f.value=!0,p.value="Please give journal content.";return}const k={[Date.now()]:{journalEntryHeading:c.value,journalEntryContent:u.value,journalEntryLogged:Cn()}};try{await un(Nt(It,"journals",s.userData.uid),k,{merge:!0}),f.value=!0,p.value="Your journal entry has been logged.",c.value="",u.value="",o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString(),n("close")}catch(M){console.error("Failed to save journal:",M),f.value=!0,p.value="Failed to save journal. Please try again."}};return(D,k)=>(K(),se(Ce,null,[k[4]||(k[4]=S("div",{class:"journal_header_holder inter font_size_xs"}," My Journal ",-1)),S("div",g1,[(K(),se(Ce,null,ot(i,M=>S("div",{key:M.key,class:Dn(["journal_selection",{active:r.value===M.key,[M.cornerClass]:!0}]),onClick:L=>m(M.key)},ye(M.label),11,_1)),64))]),r.value==="journalEntry"?(K(),se("div",y1,[S("div",v1,[S("div",null,[Dt(ye(o.value)+" ",1),k[2]||(k[2]=S("br",null,null,-1)),Dt(" "+ye(l.value),1)])]),S("div",E1,[We(S("input",{placeholder:"Give us a title.",class:"journal_input inter font_size_xs","onUpdate:modelValue":k[0]||(k[0]=M=>c.value=M)},null,512),[[Ot,c.value]]),We(S("textarea",{placeholder:"What's weighing on your mind today? Or what's a small win?",class:"journal_textarea inter font_size_xs","onUpdate:modelValue":k[1]||(k[1]=M=>u.value=M)},null,512),[[Ot,u.value]])]),k[3]||(k[3]=S("br",null,null,-1)),S("div",{class:"save_button inter font_size_xxs",onClick:O}," Save "),f.value?(K(),wt(ni,{key:0,errorMessage:p.value,onClose:v},null,8,["errorMessage"])):Ft("",!0)])):(K(),se("div",w1,[Tn(s).journalData?(K(),se("div",T1,[(K(!0),se(Ce,null,ot(Tn(s).journalData,(M,L)=>(K(),se("div",{key:L,class:"journal_list_item inter"},[S("div",I1,ye(M.journalEntryHeading),1),S("div",b1,ye(M.journalEntryContent),1),S("div",A1," Logged on: "+ye(new Date(M.journalEntryLogged.seconds*1e3).toLocaleString()),1)]))),128))])):Ft("",!0)]))],64))}},Fy=en(R1,[["__scopeId","data-v-1863fd7a"]]),S1={class:"mood_tracker_holder"},C1={class:"mood_icons_holder"},P1=["onClick"],k1=["onClick"],D1={class:"influence_holder",style:{height:"25rem"}},N1={class:"influence_items_holder"},O1=["value"],V1={class:"influence_holder"},x1={style:{width:"100%",height:"15rem",display:"flex","flex-flow":"column nowrap","align-items":"center","justify-content":"center"}},M1={__name:"mood",emits:["close"],setup(t,{emit:e}){const n=Zt(),s=e,r=$e(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),i=$e(()=>[{label:"Sleep Quality",ref:"sleep_quality"},{label:"Nutrition",ref:"nutrition"},{label:"Physical Activity",ref:"physical_activity"},{label:"Social Connection",ref:"social_connection"},{label:"Mindset",ref:"mindset"},{label:"Environment",ref:"environment"},{label:"None",ref:"none"}]),o=ne(!1),l=ne(""),c=ne([]),u=ne(""),f=ne("neutral"),p=O=>{f.value=O},m=async()=>{if(c.value.length===0){o.value=!0,l.value="Please select an influence.";return}const D={[new Date().toISOString().split("T")[0]]:{mood:f.value,influences:c.value,optional_notes:u.value,mood_logged:Cn()}};await un(Nt(It,"mood",n.userData.uid),D,{merge:!0}),o.value=!0,l.value="Thank you for logging your mood. It will be taken into consideration.",n.setMoodData(D),s("close")},v=()=>{o.value=!1,l.value=""};return(O,D)=>(K(),se(Ce,null,[S("div",S1,[D[6]||(D[6]=S("div",{class:"mood_heading_holder inter font_size_xs"},"How am I feeling today?",-1)),S("div",C1,[(K(!0),se(Ce,null,ot(r.value,k=>(K(),se("div",{class:"mood_icon_holder",key:k.ref},[f.value===k.ref?(K(),se("div",{key:0,class:Dn(k.icon),style:{"font-size":"3rem",border:"0.2rem solid #87bfba",padding:"0.5rem","border-radius":"50%"},onClick:M=>p(k.ref)},null,10,P1)):(K(),se("div",{key:1,class:Dn(k.icon),style:{"font-size":"3rem"},onClick:M=>p(k.ref)},null,10,k1))]))),128))]),S("div",D1,[D[4]||(D[4]=S("div",{class:"influence_heading_holder inter font_size_xs"},[S("b",null,"What might be influencing this?")],-1)),S("div",N1,[(K(!0),se(Ce,null,ot(i.value,k=>(K(),se("div",{class:"influence_item_holder inter font_size_xxs",key:k.ref,style:{height:"12%"}},[D[3]||(D[3]=Dt("  ",-1)),We(S("input",{type:"checkbox","onUpdate:modelValue":D[0]||(D[0]=M=>c.value=M),value:k.ref},null,8,O1),[[Mm,c.value]]),Dt(" "+ye(k.label),1)]))),128))])]),S("div",V1,[S("div",x1,[D[5]||(D[5]=S("div",{class:"influence_heading_holder inter font_size_xs"},[S("b",null,"Optional Notes")],-1)),We(S("textarea",{placeholder:"Write a few words about why you feel the way you feel",style:{width:"90%",height:"60%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":D[1]||(D[1]=k=>u.value=k)},null,512),[[Ot,u.value]])])]),S("div",{class:"save_button inter font_size_xxs",onClick:D[2]||(D[2]=k=>m())},"Save")]),o.value?(K(),wt(ni,{key:0,errorMessage:l.value,onClose:v},null,8,["errorMessage"])):Ft("",!0)],64))}},L1=en(M1,[["__scopeId","data-v-7618c925"]]),U1={key:0,class:"empty_therapy_list inter font_size_xs"},F1={key:1,class:"therapy_sign_up"},B1={key:0,class:"therapy_sign_up_step_1"},j1={class:"therapist_sign_up_form_holder"},$1=["value"],H1=["value"],z1=["value"],q1={key:1,style:{width:"100%",height:"100%"}},W1={key:0},G1={class:"therapist_item_holder"},K1={class:"contact_buttons_holder"},Q1=["onClick"],Y1=["onClick"],J1={key:1,class:"empty_therapy_list inter font_size_xs"},X1={key:2,style:{width:"100%",height:"100%"}},Z1={class:"therapist_item_holder"},eD={key:2,class:"sign_up_button_holder inter font_size_s"},tD={key:3,class:"verify_therapists_holder inter font_size_s"},ac="therapist_signup_state",nD={__name:"therapists",setup(t){const e=Zt(),n=ne(e.userData.personalInfo.email),s=ne(e.userData.personalInfo.name),r=ne(""),i=ne(e.userData.admin||0),o=ne("home_list"),l=ne([]),c=ne([]),u=ne(""),f=ne(""),p=ne(""),m=ne(null),v=ne(null),O=ne(!1),D=ne(""),k=ne([{value:"dr",text:"Dr."},{value:"mr",text:"Mr."},{value:"mrs",text:"Mrs."},{value:"miss",text:"Miss."},{value:"ms",text:"Ms."}]),M=ne([{value:"phd",text:"PhD"},{value:"msc",text:"MSc"},{value:"ma",text:"MA"}]),L=ne([{value:"psychologist",text:"Psychologist"},{value:"psychiatrist",text:"Psychiatrist"},{value:"social_worker",text:"Social Worker"}]);function V(I){return I?(I.charAt(0).toUpperCase()+I.slice(1)).replace("_"," "):""}function C(){return new Promise((I,b)=>{if(window.google?.maps?.places){I();return}const y=document.createElement("script");y.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWGRHjfWWoBWojyOBuGi75ACgNAkGobws&libraries=places",y.async=!0,y.defer=!0,y.onload=I,y.onerror=b,document.head.appendChild(y)})}rs(()=>{l.value=[],c.value=[],e.therapists?.forEach(b=>{b.isVerified?l.value.push(b):c.value.push(b)});const I=JSON.parse(localStorage.getItem(ac));I&&(o.value=I.signUpStep||"home_list",r.value=I.username||"",u.value=I.selectedTitle||"",f.value=I.selectedAcademicTitle||"",p.value=I.selectedCredential||"",m.value=I.selectedAddress||null)}),Ss([o,r,u,f,p,m],()=>{localStorage.setItem(ac,JSON.stringify({signUpStep:o.value,username:r.value,selectedTitle:u.value,selectedAcademicTitle:f.value,selectedCredential:p.value,selectedAddress:m.value}))},{deep:!0}),Ss(o,async I=>{if(I!=="step_1"||(await lo(),await C(),!v.value))return;const b=new google.maps.places.Autocomplete(v.value,{types:["address"],componentRestrictions:{country:"za"}});b.addListener("place_changed",()=>{const y=b.getPlace();m.value={city:y.address_components?.find(Oe=>Oe.types.includes("locality"))?.long_name||"",province:y.address_components?.find(Oe=>Oe.types.includes("administrative_area_level_1"))?.long_name||""}})});const z=()=>o.value="step_1",Y=()=>o.value="verify_therapist",w=()=>o.value="home_list",_=async()=>{if(!m.value){D.value="Please select an address",O.value=!0;return}const I=Nt(It,"therapists",e.userData.uid);if((await Mr(I)).exists()){D.value="You are already registered as a therapist.",O.value=!0;return}await un(I,{email:n.value,nameSurname:s.value,userName:r.value,title:u.value,academicTitle:f.value,credential:p.value,address:m.value,isVerified:!1,createdAt:new Date}),localStorage.removeItem(ac),D.value="Thank you. You will be redirected shortly.",O.value=!0,setTimeout(()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSe2kKgs6Qnvl1uNfVSVEjUeCRmM8jv6E6O-6xhy-1mIiAYvLg/viewform"},8e3)},E=async I=>{await un(Nt(It,"therapists",I.id),{isVerified:!0},{merge:!0}),c.value=c.value.filter(b=>b.id!==I.id),l.value.push(I)},R=I=>{c.value=c.value.filter(b=>b.id!==I.id)};return(I,b)=>(K(),se(Ce,null,[o.value==="home_list"&&l.value.length===0&&c.value.length>=0?(K(),se("div",U1," No therapists are listed at this moment. ")):(K(),se("div",F1,[o.value==="step_1"?(K(),se("div",B1,[b[10]||(b[10]=S("div",{class:"therapy_sign_up_heading inter font_size_xs"},[S("b",null,"Let's get you signed up and listed!")],-1)),b[11]||(b[11]=S("br",null,null,-1)),S("form",j1,[We(S("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Email Address","onUpdate:modelValue":b[0]||(b[0]=y=>n.value=y)},null,512),[[Ot,n.value]]),We(S("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Username","onUpdate:modelValue":b[1]||(b[1]=y=>r.value=y)},null,512),[[Ot,r.value]]),We(S("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":b[2]||(b[2]=y=>u.value=y)},[b[7]||(b[7]=S("option",{disabled:"",value:""},"Select your title",-1)),(K(!0),se(Ce,null,ot(k.value,y=>(K(),se("option",{key:y.value,value:y.value},ye(y.text),9,$1))),128))],512),[[Cs,u.value]]),We(S("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":b[3]||(b[3]=y=>s.value=y)},null,512),[[Ot,s.value]]),We(S("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":b[4]||(b[4]=y=>f.value=y)},[b[8]||(b[8]=S("option",{disabled:"",value:""},"Select your academic title",-1)),(K(!0),se(Ce,null,ot(M.value,y=>(K(),se("option",{key:y.value,value:y.value},ye(y.text),9,H1))),128))],512),[[Cs,f.value]]),We(S("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":b[5]||(b[5]=y=>p.value=y)},[b[9]||(b[9]=S("option",{disabled:"",value:""},"Select your credential",-1)),(K(!0),se(Ce,null,ot(L.value,y=>(K(),se("option",{key:y.value,value:y.value},ye(y.text),9,z1))),128))],512),[[Cs,p.value]]),S("input",{ref_key:"addressInput",ref:v,class:"form_input inter font_size_xs",type:"text",placeholder:"Search address"},null,512)]),S("button",{class:"form_button inter font_size_xs",onClick:_}," Confirm ")])):o.value==="verify_therapist"?(K(),se("div",q1,[c.value.length?(K(),se("div",W1,[(K(!0),se(Ce,null,ot(c.value,y=>(K(),se("div",{class:"therapist_items_holder inter font_size_xs",key:y.userName},[S("div",G1,[S("b",null,ye(y.nameSurname),1),b[14]||(b[14]=S("br",null,null,-1)),Dt(" "+ye(y.email),1),b[15]||(b[15]=S("br",null,null,-1)),Dt(" "+ye(y.credential),1),b[16]||(b[16]=S("br",null,null,-1)),Dt(" "+ye(y.address.city)+", "+ye(y.address.province)+" ",1),S("div",K1,[S("div",{class:"contact_button",onClick:Oe=>E(y)},[...b[12]||(b[12]=[S("i",{class:"fas fa-user-check"},null,-1)])],8,Q1),S("div",{class:"contact_button",onClick:Oe=>R(y)},[...b[13]||(b[13]=[S("i",{class:"fas fa-user-times"},null,-1)])],8,Y1)])])]))),128))])):(K(),se("div",J1,[b[17]||(b[17]=S("div",null,"No therapists need verifying at this moment.",-1)),S("div",{class:"sign_up_button_holder inter font_size_s"},[S("i",{class:"far fa-address-book",onClick:w})])]))])):o.value==="home_list"&&l.value.length?(K(),se("div",X1,[(K(!0),se(Ce,null,ot(l.value,y=>(K(),se("div",{class:"therapist_items_holder inter font_size_xs",key:y.userName},[S("div",Z1,[S("b",null,ye(y.nameSurname),1),b[18]||(b[18]=S("br",null,null,-1)),Dt(" "+ye(V(y.credential)),1),b[19]||(b[19]=S("br",null,null,-1)),Dt(" "+ye(y.address.city)+", "+ye(y.address.province),1)])]))),128))])):Ft("",!0)])),o.value==="home_list"?(K(),se("div",eD,[S("i",{class:"fas fa-plus",onClick:z})])):Ft("",!0),o.value==="home_list"&&i.value===1?(K(),se("div",tD,[S("i",{class:"fas fa-award",onClick:Y})])):Ft("",!0),O.value?(K(),wt(ni,{key:4,errorMessage:D.value,onClose:b[6]||(b[6]=y=>O.value=!1)},null,8,["errorMessage"])):Ft("",!0)],64))}},sD=en(nD,[["__scopeId","data-v-f3b2eb5e"]]),rD={class:"navigation_bar_holder"},iD=["onClick"],oD=["innerHTML"],aD={__name:"navigation",setup(t){const e={home:{name:"Home",icon:'<i class="fa fa-home"></i>'},journal:{name:"Journal",icon:'<i class="fa fa-book"></i>'},profile:{name:"Profile",icon:'<i class="fa fa-id-card"></i>'}};Zt();const n=ne("home"),s=r=>{n.value=r,localStorage.setItem("currentPage",r)};return rs(()=>{const r=localStorage.getItem("currentPage");r&&e[r]&&(n.value=r)}),(r,i)=>(K(),se(Ce,null,[n.value==="profile"?(K(),wt(Ly,{key:0,onSetPage:s})):n.value==="home"?(K(),wt(Cy,{key:1,onSetPage:s})):n.value==="mood"?(K(),wt(L1,{key:2})):n.value==="journal"?(K(),wt(Fy,{key:3})):n.value==="therapists"?(K(),wt(sD,{key:4})):n.value==="moodTrends"?(K(),wt(Uy,{key:5})):Ft("",!0),S("div",rD,[(K(),se(Ce,null,ot(e,(o,l)=>S("div",{class:"navigation_item_holder inter font_size_xxs",key:l},[S("div",{class:Dn(["navigation_item",{active:n.value===l}]),onClick:c=>s(l)},[S("div",{innerHTML:o.icon},null,8,oD),S("div",null,ye(o.name),1)],10,iD)])),64))])],64))}},lD=en(aD,[["__scopeId","data-v-d60e32c3"]]),cD=[{path:"/",name:"Loading",component:Vk},{path:"/login",name:"Login",component:fk},{path:"/navigation",name:"Navigation",component:lD},{path:"/home/",name:"Home",component:Cy,props:!0},{path:"/profile/",name:"Profile",component:Ly,props:!0},{path:"/journal/",name:"JournalEntry",component:Fy,props:!0},{path:"/mood/",name:"MoodTrends",component:Uy,props:!0}],By=XT({history:kT(),routes:cD});By.beforeEach(async(t,e,n)=>{const s=Zt();if(s.userData||await s.fetchUserData(),!s.userData?.uid&&t.name!=="Login")return n({name:"Login"});n()});let Sp=null;En.onAuthStateChanged(()=>{if(!Sp){const t=xw(Ww);t.use(Uw()),t.use(By),t.mount("#app"),Sp=t}});
