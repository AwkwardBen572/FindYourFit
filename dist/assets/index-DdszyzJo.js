(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},Ds=[],wn=()=>{},Cp=()=>!1,Ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yc=t=>t.startsWith("onUpdate:"),bt=Object.assign,Jc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lv=Object.prototype.hasOwnProperty,ke=(t,e)=>lv.call(t,e),ue=Array.isArray,Ns=t=>io(t)==="[object Map]",Ys=t=>io(t)==="[object Set]",Yh=t=>io(t)==="[object Date]",ge=t=>typeof t=="function",Je=t=>typeof t=="string",kn=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Pp=t=>(Me(t)||ge(t))&&ge(t.then)&&ge(t.catch),kp=Object.prototype.toString,io=t=>kp.call(t),cv=t=>io(t).slice(8,-1),Dp=t=>io(t)==="[object Object]",Xc=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ci=Qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},uv=/-\w/g,Jt=La(t=>t.replace(uv,e=>e.slice(1).toUpperCase())),hv=/\B([A-Z])/g,fs=La(t=>t.replace(hv,"-$1").toLowerCase()),Ua=La(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nl=La(t=>t?`on${Ua(t)}`:""),Ar=(t,e)=>!Object.is(t,e),Ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Np=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ra=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jh;const Fa=()=>Jh||(Jh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rs(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?mv(r):rs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||Me(t))return t}const fv=/;(?![^(]*\))/g,dv=/:([^]+)/,pv=/\/\*[^]*?\*\//g;function mv(t){const e={};return t.replace(pv,"").split(fv).forEach(n=>{if(n){const r=n.split(dv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yn(t){let e="";if(Je(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Yn(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_v=Qc(gv);function Op(t){return!!t||t===""}function yv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ss(t[r],e[r]);return n}function ss(t,e){if(t===e)return!0;let n=Yh(t),r=Yh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=kn(t),r=kn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?yv(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ss(t[o],e[o]))return!1}}return String(t)===String(e)}function Zc(t,e){return t.findIndex(n=>ss(n,e))}const Vp=t=>!!(t&&t.__v_isRef===!0),ve=t=>Je(t)?t:t==null?"":ue(t)||Me(t)&&(t.toString===kp||!ge(t.toString))?Vp(t)?ve(t.value):JSON.stringify(t,xp,2):String(t),xp=(t,e)=>Vp(e)?xp(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ol(r,i)+" =>"]=s,n),{})}:Ys(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ol(n))}:kn(e)?Ol(e):Me(e)&&!ue(e)&&!Dp(e)?String(e):e,Ol=(t,e="")=>{var n;return kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Mp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Lp(t){return new Mp(t)}function Up(){return yt}function vv(t,e=!1){yt&&yt.cleanups.push(t)}let Ue;const Vl=new WeakSet;class Fp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vl.has(this)&&(Vl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xh(this),$p(this);const e=Ue,n=an;Ue=this,an=!0;try{return this.fn()}finally{Hp(this),Ue=e,an=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nu(e);this.deps=this.depsTail=void 0,Xh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lc(this)&&this.run()}get dirty(){return lc(this)}}let Bp=0,Pi,ki;function jp(t,e=!1){if(t.flags|=8,e){t.next=ki,ki=t;return}t.next=Pi,Pi=t}function eu(){Bp++}function tu(){if(--Bp>0)return;if(ki){let e=ki;for(ki=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Pi;){let e=Pi;for(Pi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function $p(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),nu(r),Ev(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function lc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Hi)||(t.globalVersion=Hi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!lc(t))))return;t.flags|=2;const e=t.dep,n=Ue,r=an;Ue=t,an=!0;try{$p(t);const s=t.fn(t._value);(e.version===0||Ar(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,an=r,Hp(t),t.flags&=-3}}function nu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)nu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ev(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let an=!0;const qp=[];function Jn(){qp.push(an),an=!1}function Xn(){const t=qp.pop();an=t===void 0?!0:t}function Xh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Hi=0;class wv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ru{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ue||!an||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new wv(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,Wp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,Hi++,this.notify(e)}notify(e){eu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{tu()}}}function Wp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const sa=new WeakMap,es=Symbol(""),cc=Symbol(""),zi=Symbol("");function Et(t,e,n){if(an&&Ue){let r=sa.get(t);r||sa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ru),s.map=r,s.key=n),s.track()}}function jn(t,e,n,r,s,i){const o=sa.get(t);if(!o){Hi++;return}const l=c=>{c&&c.trigger()};if(eu(),e==="clear")o.forEach(l);else{const c=ue(t),u=c&&Xc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===zi||!kn(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(zi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(es)),Ns(t)&&l(o.get(cc)));break;case"delete":c||(l(o.get(es)),Ns(t)&&l(o.get(cc)));break;case"set":Ns(t)&&l(o.get(es));break}}tu()}function Tv(t,e){const n=sa.get(t);return n&&n.get(e)}function Is(t){const e=Se(t);return e===t?e:(Et(e,"iterate",zi),Qt(t)?e:e.map(ct))}function Ba(t){return Et(t=Se(t),"iterate",zi),t}const Iv={__proto__:null,[Symbol.iterator](){return xl(this,Symbol.iterator,ct)},concat(...t){return Is(this).concat(...t.map(e=>ue(e)?Is(e):e))},entries(){return xl(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return Un(this,"every",t,e,void 0,arguments)},filter(t,e){return Un(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return Un(this,"find",t,e,ct,arguments)},findIndex(t,e){return Un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Un(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return Un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Un(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ml(this,"includes",t)},indexOf(...t){return Ml(this,"indexOf",t)},join(t){return Is(this).join(t)},lastIndexOf(...t){return Ml(this,"lastIndexOf",t)},map(t,e){return Un(this,"map",t,e,void 0,arguments)},pop(){return yi(this,"pop")},push(...t){return yi(this,"push",t)},reduce(t,...e){return Zh(this,"reduce",t,e)},reduceRight(t,...e){return Zh(this,"reduceRight",t,e)},shift(){return yi(this,"shift")},some(t,e){return Un(this,"some",t,e,void 0,arguments)},splice(...t){return yi(this,"splice",t)},toReversed(){return Is(this).toReversed()},toSorted(t){return Is(this).toSorted(t)},toSpliced(...t){return Is(this).toSpliced(...t)},unshift(...t){return yi(this,"unshift",t)},values(){return xl(this,"values",ct)}};function xl(t,e,n){const r=Ba(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const bv=Array.prototype;function Un(t,e,n,r,s,i){const o=Ba(t),l=o!==t&&!Qt(t),c=o[e];if(c!==bv[e]){const p=c.apply(t,i);return l?ct(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,ct(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Zh(t,e,n,r){const s=Ba(t);let i=n;return s!==t&&(Qt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ct(l),c,t)}),s[e](i,...r)}function Ml(t,e,n){const r=Se(t);Et(r,"iterate",zi);const s=r[e](...n);return(s===-1||s===!1)&&ou(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function yi(t,e,n=[]){Jn(),eu();const r=Se(t)[e].apply(t,n);return tu(),Xn(),r}const Av=Qc("__proto__,__v_isRef,__isVue"),Gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kn));function Rv(t){kn(t)||(t=String(t));const e=Se(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Kp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Mv:Xp:i?Jp:Yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let c;if(o&&(c=Iv[n]))return c;if(n==="hasOwnProperty")return Rv}const l=Reflect.get(e,n,Ke(e)?e:r);if((kn(n)?Gp.has(n):Av(n))||(s||Et(e,"get",n),i))return l;if(Ke(l)){const c=o&&Xc(n)?l:l.value;return s&&Me(c)?hc(c):c}return Me(l)?s?hc(l):oo(l):l}}class Qp extends Kp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Or(i);if(!Qt(r)&&!Or(r)&&(i=Se(i),r=Se(r)),!ue(e)&&Ke(i)&&!Ke(r))return c||(i.value=r),!0}const o=ue(e)&&Xc(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,Ke(e)?e:s);return e===Se(s)&&(o?Ar(r,i)&&jn(e,"set",n,r):jn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&jn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!kn(n)||!Gp.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ue(e)?"length":es),Reflect.ownKeys(e)}}class Sv extends Kp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Cv=new Qp,Pv=new Sv,kv=new Qp(!0);const uc=t=>t,No=t=>Reflect.getPrototypeOf(t);function Dv(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Ns(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?uc:e?ia:ct;return!e&&Et(i,"iterate",c?cc:es),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Nv(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),l=Se(s);t||(Ar(s,l)&&Et(o,"get",s),Et(o,"get",l));const{has:c}=No(o),u=e?uc:t?ia:ct;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Se(s),"iterate",es),s.size},has(s){const i=this.__v_raw,o=Se(i),l=Se(s);return t||(Ar(s,l)&&Et(o,"has",s),Et(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Se(l),u=e?uc:t?ia:ct;return!t&&Et(c,"iterate",es),l.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return bt(n,t?{add:Oo("add"),set:Oo("set"),delete:Oo("delete"),clear:Oo("clear")}:{add(s){!e&&!Qt(s)&&!Or(s)&&(s=Se(s));const i=Se(this);return No(i).has.call(i,s)||(i.add(s),jn(i,"add",s,s)),this},set(s,i){!e&&!Qt(i)&&!Or(i)&&(i=Se(i));const o=Se(this),{has:l,get:c}=No(o);let u=l.call(o,s);u||(s=Se(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?Ar(i,f)&&jn(o,"set",s,i):jn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:l}=No(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&jn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&jn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Dv(s,t,e)}),n}function su(t,e){const n=Nv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const Ov={get:su(!1,!1)},Vv={get:su(!1,!0)},xv={get:su(!0,!1)};const Yp=new WeakMap,Jp=new WeakMap,Xp=new WeakMap,Mv=new WeakMap;function Lv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uv(t){return t.__v_skip||!Object.isExtensible(t)?0:Lv(cv(t))}function oo(t){return Or(t)?t:iu(t,!1,Cv,Ov,Yp)}function Zp(t){return iu(t,!1,kv,Vv,Jp)}function hc(t){return iu(t,!0,Pv,xv,Xp)}function iu(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Uv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Rr(t){return Or(t)?Rr(t.__v_raw):!!(t&&t.__v_isReactive)}function Or(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function ou(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function au(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&Np(t,"__v_skip",!0),t}const ct=t=>Me(t)?oo(t):t,ia=t=>Me(t)?hc(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function ne(t){return em(t,!1)}function Fv(t){return em(t,!0)}function em(t,e){return Ke(t)?t:new Bv(t,e)}class Bv{constructor(e,n){this.dep=new ru,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||Or(e);e=r?e:Se(e),Ar(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function Tn(t){return Ke(t)?t.value:t}const jv={get:(t,e,n)=>e==="__v_raw"?t:Tn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function tm(t){return Rr(t)?t:new Proxy(t,jv)}function $v(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=zv(t,n);return e}class Hv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Tv(Se(this._object),this._key)}}function zv(t,e,n){const r=t[e];return Ke(r)?r:new Hv(t,e,n)}class qv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ru(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return jp(this,!0),!0}get value(){const e=this.dep.track();return zp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wv(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new qv(r,s,n)}const Vo={},oa=new WeakMap;let Yr;function Gv(t,e=!1,n=Yr){if(n){let r=oa.get(n);r||oa.set(n,r=[]),r.push(t)}}function Kv(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=S=>s?S:Qt(S)||s===!1||s===0?$n(S,1):$n(S);let f,p,m,v,O=!1,N=!1;if(Ke(t)?(p=()=>t.value,O=Qt(t)):Rr(t)?(p=()=>u(t),O=!0):ue(t)?(N=!0,O=t.some(S=>Rr(S)||Qt(S)),p=()=>t.map(S=>{if(Ke(S))return S.value;if(Rr(S))return u(S);if(ge(S))return c?c(S,2):S()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Jn();try{m()}finally{Xn()}}const S=Yr;Yr=f;try{return c?c(t,3,[v]):t(v)}finally{Yr=S}}:p=wn,e&&s){const S=p,j=s===!0?1/0:s;p=()=>$n(S(),j)}const k=Up(),M=()=>{f.stop(),k&&k.active&&Jc(k.effects,f)};if(i&&e){const S=e;e=(...j)=>{S(...j),M()}}let L=N?new Array(t.length).fill(Vo):Vo;const D=S=>{if(!(!(f.flags&1)||!f.dirty&&!S))if(e){const j=f.run();if(s||O||(N?j.some((Z,I)=>Ar(Z,L[I])):Ar(j,L))){m&&m();const Z=Yr;Yr=f;try{const I=[j,L===Vo?void 0:N&&L[0]===Vo?[]:L,v];L=j,c?c(e,3,I):e(...I)}finally{Yr=Z}}}else f.run()};return l&&l(D),f=new Fp(p),f.scheduler=o?()=>o(D,!1):D,v=S=>Gv(S,!1,f),m=f.onStop=()=>{const S=oa.get(f);if(S){if(c)c(S,4);else for(const j of S)j();oa.delete(f)}},e?r?D(!0):L=f.run():o?o(D.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function $n(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ke(t))$n(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)$n(t[r],e,n);else if(Ys(t)||Ns(t))t.forEach(r=>{$n(r,e,n)});else if(Dp(t)){for(const r in t)$n(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&$n(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ao(t,e,n,r){try{return r?t(...r):t()}catch(s){ja(s,e,n)}}function Dn(t,e,n,r){if(ge(t)){const s=ao(t,e,n,r);return s&&Pp(s)&&s.catch(i=>{ja(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Dn(t[i],e,n,r));return s}}function ja(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Jn(),ao(i,null,10,[t,c,u]),Xn();return}}Qv(t,n,s,r,o)}function Qv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Pt=[];let _n=-1;const Os=[];let _r=null,As=0;const nm=Promise.resolve();let aa=null;function lo(t){const e=aa||nm;return t?e.then(this?t.bind(this):t):e}function Yv(t){let e=_n+1,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=qi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function lu(t){if(!(t.flags&1)){const e=qi(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=qi(n)?Pt.push(t):Pt.splice(Yv(e),0,t),t.flags|=1,rm()}}function rm(){aa||(aa=nm.then(im))}function Jv(t){ue(t)?Os.push(...t):_r&&t.id===-1?_r.splice(As+1,0,t):t.flags&1||(Os.push(t),t.flags|=1),rm()}function ef(t,e,n=_n+1){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function sm(t){if(Os.length){const e=[...new Set(Os)].sort((n,r)=>qi(n)-qi(r));if(Os.length=0,_r){_r.push(...e);return}for(_r=e,As=0;As<_r.length;As++){const n=_r[As];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}_r=null,As=0}}const qi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function im(t){try{for(_n=0;_n<Pt.length;_n++){const e=Pt[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ao(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<Pt.length;_n++){const e=Pt[_n];e&&(e.flags&=-2)}_n=-1,Pt.length=0,sm(),aa=null,(Pt.length||Os.length)&&im()}}let qt=null,om=null;function la(t){const e=qt;return qt=t,om=t&&t.type.__scopeId||null,e}function Xv(t,e=qt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ha(-1);const i=la(e);let o;try{o=t(...s)}finally{la(i),r._d&&ha(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function We(t,e){if(qt===null)return t;const n=qa(qt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=xe]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&$n(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Kr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Jn(),Dn(c,n,8,[t.el,l,t,e]),Xn())}}const Zv=Symbol("_vte"),eE=t=>t.__isTeleport,tE=Symbol("_leaveCb");function cu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,cu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function am(t,e){return ge(t)?bt({name:t.name},e,{setup:t}):t}function lm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ca=new WeakMap;function Di(t,e,n,r,s=!1){if(ue(t)){t.forEach((O,N)=>Di(O,e&&(ue(e)?e[N]:e),n,r,s));return}if(Ni(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Di(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?qa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===xe?l.refs={}:l.refs,p=l.setupState,m=Se(p),v=p===xe?Cp:O=>ke(m,O);if(u!=null&&u!==c){if(tf(e),Je(u))f[u]=null,v(u)&&(p[u]=null);else if(Ke(u)){u.value=null;const O=e;O.k&&(f[O.k]=null)}}if(ge(c))ao(c,l,12,[o,f]);else{const O=Je(c),N=Ke(c);if(O||N){const k=()=>{if(t.f){const M=O?v(c)?p[c]:f[c]:c.value;if(s)ue(M)&&Jc(M,i);else if(ue(M))M.includes(i)||M.push(i);else if(O)f[c]=[i],v(c)&&(p[c]=f[c]);else{const L=[i];c.value=L,t.k&&(f[t.k]=L)}}else O?(f[c]=o,v(c)&&(p[c]=o)):N&&(c.value=o,t.k&&(f[t.k]=o))};if(o){const M=()=>{k(),ca.delete(t)};M.id=-1,ca.set(t,M),zt(M,n)}else tf(t),k()}}}function tf(t){const e=ca.get(t);e&&(e.flags|=8,ca.delete(t))}Fa().requestIdleCallback;Fa().cancelIdleCallback;const Ni=t=>!!t.type.__asyncLoader,cm=t=>t.type.__isKeepAlive;function nE(t,e){um(t,"a",e)}function rE(t,e){um(t,"da",e)}function um(t,e,n=It){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($a(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cm(s.parent.vnode)&&sE(r,e,n,s),s=s.parent}}function sE(t,e,n,r){const s=$a(e,t,r,!0);hm(()=>{Jc(r[e],s)},n)}function $a(t,e,n=It,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Jn();const l=co(n),c=Dn(e,n,t,o);return l(),Xn(),c});return r?s.unshift(i):s.push(i),i}}const rr=t=>(e,n=It)=>{(!Gi||t==="sp")&&$a(t,(...r)=>e(...r),n)},iE=rr("bm"),sr=rr("m"),oE=rr("bu"),aE=rr("u"),lE=rr("bum"),hm=rr("um"),cE=rr("sp"),uE=rr("rtg"),hE=rr("rtc");function fE(t,e=It){$a("ec",t,e)}const dE="components";function pE(t,e){return gE(dE,t,!0,e)||t}const mE=Symbol.for("v-ndc");function gE(t,e,n=!0,r=!1){const s=qt||It;if(s){const i=s.type;{const l=sw(i,!1);if(l&&(l===e||l===Jt(e)||l===Ua(Jt(e))))return i}const o=nf(s[t]||i[t],e)||nf(s.appContext[t],e);return!o&&r?i:o}}function nf(t,e){return t&&(t[e]||t[Jt(e)]||t[Ua(Jt(e))])}function ut(t,e,n,r){let s;const i=n,o=ue(t);if(o||Je(t)){const l=o&&Rr(t);let c=!1,u=!1;l&&(c=!Qt(t),u=Or(t),t=Ba(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?ia(ct(t[f])):ct(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const fc=t=>t?Nm(t)?qa(t):fc(t.parent):null,Oi=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fc(t.parent),$root:t=>fc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dm(t),$forceUpdate:t=>t.f||(t.f=()=>{lu(t.update)}),$nextTick:t=>t.n||(t.n=lo.bind(t.proxy)),$watch:t=>UE.bind(t)}),Ll=(t,e)=>t!==xe&&!t.__isScriptSetup&&ke(t,e),_E={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ll(r,e))return o[e]=1,r[e];if(s!==xe&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==xe&&ke(n,e))return o[e]=4,n[e];dc&&(o[e]=0)}}const f=Oi[e];let p,m;if(f)return e==="$attrs"&&Et(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==xe&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ll(s,e)?(s[e]=n,!0):r!==xe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},l){let c,u;return!!(n[l]||t!==xe&&l[0]!=="$"&&ke(t,l)||Ll(e,l)||(c=i[0])&&ke(c,l)||ke(r,l)||ke(Oi,l)||ke(s.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rf(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dc=!0;function yE(t){const e=dm(t),n=t.proxy,r=t.ctx;dc=!1,e.beforeCreate&&sf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:v,updated:O,activated:N,deactivated:k,beforeDestroy:M,beforeUnmount:L,destroyed:D,unmounted:S,render:j,renderTracked:Z,renderTriggered:I,errorCaptured:y,serverPrefetch:E,expose:R,inheritAttrs:T,components:b,directives:_,filters:Oe}=e;if(u&&vE(u,r,null),o)for(const me in o){const be=o[me];ge(be)&&(r[me]=be.bind(n))}if(s){const me=s.call(n,n);Me(me)&&(t.data=oo(me))}if(dc=!0,i)for(const me in i){const be=i[me],xt=ge(be)?be.bind(n,n):ge(be.get)?be.get.bind(n,n):wn,dn=!ge(be)&&ge(be.set)?be.set.bind(n):wn,Bt=$e({get:xt,set:dn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:ot=>Bt.value=ot})}if(l)for(const me in l)fm(l[me],r,n,me);if(c){const me=ge(c)?c.call(n):c;Reflect.ownKeys(me).forEach(be=>{zo(be,me[be])})}f&&sf(f,t,"c");function Le(me,be){ue(be)?be.forEach(xt=>me(xt.bind(n))):be&&me(be.bind(n))}if(Le(iE,p),Le(sr,m),Le(oE,v),Le(aE,O),Le(nE,N),Le(rE,k),Le(fE,y),Le(hE,Z),Le(uE,I),Le(lE,L),Le(hm,S),Le(cE,E),ue(R))if(R.length){const me=t.exposed||(t.exposed={});R.forEach(be=>{Object.defineProperty(me,be,{get:()=>n[be],set:xt=>n[be]=xt,enumerable:!0})})}else t.exposed||(t.exposed={});j&&t.render===wn&&(t.render=j),T!=null&&(t.inheritAttrs=T),b&&(t.components=b),_&&(t.directives=_),E&&lm(t)}function vE(t,e,n=wn){ue(t)&&(t=pc(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=ln(s.from||r,s.default,!0):i=ln(s.from||r):i=ln(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sf(t,e,n){Dn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fm(t,e,n,r){let s=r.includes(".")?Rm(n,r):()=>n[r];if(Je(t)){const i=e[t];ge(i)&&Sr(s,i)}else if(ge(t))Sr(s,t.bind(n));else if(Me(t))if(ue(t))t.forEach(i=>fm(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Sr(s,i,t)}}function dm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ua(c,u,o,!0)),ua(c,e,o)),Me(e)&&i.set(e,c),c}function ua(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ua(t,i,n,!0),s&&s.forEach(o=>ua(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=EE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const EE={data:of,props:af,emits:af,methods:wi,computed:wi,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:wi,directives:wi,watch:TE,provide:of,inject:wE};function of(t,e){return e?t?function(){return bt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function wE(t,e){return wi(pc(t),pc(e))}function pc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function wi(t,e){return t?bt(Object.create(null),t,e):e}function af(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:bt(Object.create(null),rf(t),rf(e??{})):e}function TE(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function pm(){return{app:null,config:{isNativeTag:Cp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let IE=0;function bE(t,e){return function(r,s=null){ge(r)||(r=bt({},r)),s!=null&&!Me(s)&&(s=null);const i=pm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:IE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ow,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ge(f.install)?(o.add(f),f.install(u,...p)):ge(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!c){const v=u._ceVNode||Ut(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,f,m),c=!0,u._container=f,f.__vue_app__=u,qa(v.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Dn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ts;ts=u;try{return f()}finally{ts=p}}};return u}}let ts=null;function zo(t,e){if(It){let n=It.provides;const r=It.parent&&It.parent.provides;r===n&&(n=It.provides=Object.create(r)),n[t]=e}}function ln(t,e,n=!1){const r=Dm();if(r||ts){let s=ts?ts._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function AE(){return!!(Dm()||ts)}const mm={},gm=()=>Object.create(mm),_m=t=>Object.getPrototypeOf(t)===mm;function RE(t,e,n,r=!1){const s={},i=gm();t.propsDefaults=Object.create(null),ym(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Zp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function SE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Se(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ha(t.emitsOptions,m))continue;const v=e[m];if(c)if(ke(i,m))v!==i[m]&&(i[m]=v,u=!0);else{const O=Jt(m);s[O]=mc(c,l,O,v,t,!1)}else v!==i[m]&&(i[m]=v,u=!0)}}}else{ym(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!ke(e,p)&&((f=fs(p))===p||!ke(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=mc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&jn(t.attrs,"set","")}function ym(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ci(c))continue;const u=e[c];let f;s&&ke(s,f=Jt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Ha(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Se(n),u=l||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=mc(s,c,p,u[p],t,!ke(u,p))}}return o}function mc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=co(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===fs(n))&&(r=!0))}return r}const CE=new WeakMap;function vm(t,e,n=!1){const r=n?CE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const f=p=>{c=!0;const[m,v]=vm(p,e,!0);bt(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Me(t)&&r.set(t,Ds),Ds;if(ue(i))for(let f=0;f<i.length;f++){const p=Jt(i[f]);lf(p)&&(o[p]=xe)}else if(i)for(const f in i){const p=Jt(f);if(lf(p)){const m=i[f],v=o[p]=ue(m)||ge(m)?{type:m}:bt({},m),O=v.type;let N=!1,k=!0;if(ue(O))for(let M=0;M<O.length;++M){const L=O[M],D=ge(L)&&L.name;if(D==="Boolean"){N=!0;break}else D==="String"&&(k=!1)}else N=ge(O)&&O.name==="Boolean";v[0]=N,v[1]=k,(N||ke(v,"default"))&&l.push(p)}}const u=[o,l];return Me(t)&&r.set(t,u),u}function lf(t){return t[0]!=="$"&&!Ci(t)}const uu=t=>t==="_"||t==="_ctx"||t==="$stable",hu=t=>ue(t)?t.map(vn):[vn(t)],PE=(t,e,n)=>{if(e._n)return e;const r=Xv((...s)=>hu(e(...s)),n);return r._c=!1,r},Em=(t,e,n)=>{const r=t._ctx;for(const s in t){if(uu(s))continue;const i=t[s];if(ge(i))e[s]=PE(s,i,r);else if(i!=null){const o=hu(i);e[s]=()=>o}}},wm=(t,e)=>{const n=hu(e);t.slots.default=()=>n},Tm=(t,e,n)=>{for(const r in e)(n||!uu(r))&&(t[r]=e[r])},kE=(t,e,n)=>{const r=t.slots=gm();if(t.vnode.shapeFlag&32){const s=e._;s?(Tm(r,e,n),n&&Np(r,"_",s,!0)):Em(e,r)}else e&&wm(t,e)},DE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Tm(s,e,n):(i=!e.$stable,Em(e,s)),o=e}else e&&(wm(t,e),o={default:1});if(i)for(const l in s)!uu(l)&&o[l]==null&&delete s[l]},zt=WE;function NE(t){return OE(t)}function OE(t,e){const n=Fa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:v=wn,insertStaticContent:O}=t,N=(w,A,P,B=null,H=null,U=null,Y=void 0,G=null,q=!!A.dynamicChildren)=>{if(w===A)return;w&&!vi(w,A)&&(B=F(w),ot(w,H,U,!0),w=null),A.patchFlag===-2&&(q=!1,A.dynamicChildren=null);const{type:W,ref:le,shapeFlag:X}=A;switch(W){case za:k(w,A,P,B);break;case Vr:M(w,A,P,B);break;case Fl:w==null&&L(A,P,B,Y);break;case Ce:b(w,A,P,B,H,U,Y,G,q);break;default:X&1?j(w,A,P,B,H,U,Y,G,q):X&6?_(w,A,P,B,H,U,Y,G,q):(X&64||X&128)&&W.process(w,A,P,B,H,U,Y,G,q,ie)}le!=null&&H?Di(le,w&&w.ref,U,A||w,!A):le==null&&w&&w.ref!=null&&Di(w.ref,null,U,w,!0)},k=(w,A,P,B)=>{if(w==null)r(A.el=l(A.children),P,B);else{const H=A.el=w.el;A.children!==w.children&&u(H,A.children)}},M=(w,A,P,B)=>{w==null?r(A.el=c(A.children||""),P,B):A.el=w.el},L=(w,A,P,B)=>{[w.el,w.anchor]=O(w.children,A,P,B,w.el,w.anchor)},D=({el:w,anchor:A},P,B)=>{let H;for(;w&&w!==A;)H=m(w),r(w,P,B),w=H;r(A,P,B)},S=({el:w,anchor:A})=>{let P;for(;w&&w!==A;)P=m(w),s(w),w=P;s(A)},j=(w,A,P,B,H,U,Y,G,q)=>{A.type==="svg"?Y="svg":A.type==="math"&&(Y="mathml"),w==null?Z(A,P,B,H,U,Y,G,q):E(w,A,H,U,Y,G,q)},Z=(w,A,P,B,H,U,Y,G)=>{let q,W;const{props:le,shapeFlag:X,transition:oe,dirs:ce}=w;if(q=w.el=o(w.type,U,le&&le.is,le),X&8?f(q,w.children):X&16&&y(w.children,q,null,B,H,Ul(w,U),Y,G),ce&&Kr(w,null,B,"created"),I(q,w,w.scopeId,Y,B),le){for(const Ne in le)Ne!=="value"&&!Ci(Ne)&&i(q,Ne,null,le[Ne],U,B);"value"in le&&i(q,"value",null,le.value,U),(W=le.onVnodeBeforeMount)&&gn(W,B,w)}ce&&Kr(w,null,B,"beforeMount");const ye=VE(H,oe);ye&&oe.beforeEnter(q),r(q,A,P),((W=le&&le.onVnodeMounted)||ye||ce)&&zt(()=>{W&&gn(W,B,w),ye&&oe.enter(q),ce&&Kr(w,null,B,"mounted")},H)},I=(w,A,P,B,H)=>{if(P&&v(w,P),B)for(let U=0;U<B.length;U++)v(w,B[U]);if(H){let U=H.subTree;if(A===U||Cm(U.type)&&(U.ssContent===A||U.ssFallback===A)){const Y=H.vnode;I(w,Y,Y.scopeId,Y.slotScopeIds,H.parent)}}},y=(w,A,P,B,H,U,Y,G,q=0)=>{for(let W=q;W<w.length;W++){const le=w[W]=G?yr(w[W]):vn(w[W]);N(null,le,A,P,B,H,U,Y,G)}},E=(w,A,P,B,H,U,Y)=>{const G=A.el=w.el;let{patchFlag:q,dynamicChildren:W,dirs:le}=A;q|=w.patchFlag&16;const X=w.props||xe,oe=A.props||xe;let ce;if(P&&Qr(P,!1),(ce=oe.onVnodeBeforeUpdate)&&gn(ce,P,A,w),le&&Kr(A,w,P,"beforeUpdate"),P&&Qr(P,!0),(X.innerHTML&&oe.innerHTML==null||X.textContent&&oe.textContent==null)&&f(G,""),W?R(w.dynamicChildren,W,G,P,B,Ul(A,H),U):Y||be(w,A,G,null,P,B,Ul(A,H),U,!1),q>0){if(q&16)T(G,X,oe,P,H);else if(q&2&&X.class!==oe.class&&i(G,"class",null,oe.class,H),q&4&&i(G,"style",X.style,oe.style,H),q&8){const ye=A.dynamicProps;for(let Ne=0;Ne<ye.length;Ne++){const Re=ye[Ne],mt=X[Re],gt=oe[Re];(gt!==mt||Re==="value")&&i(G,Re,mt,gt,H,P)}}q&1&&w.children!==A.children&&f(G,A.children)}else!Y&&W==null&&T(G,X,oe,P,H);((ce=oe.onVnodeUpdated)||le)&&zt(()=>{ce&&gn(ce,P,A,w),le&&Kr(A,w,P,"updated")},B)},R=(w,A,P,B,H,U,Y)=>{for(let G=0;G<A.length;G++){const q=w[G],W=A[G],le=q.el&&(q.type===Ce||!vi(q,W)||q.shapeFlag&198)?p(q.el):P;N(q,W,le,null,B,H,U,Y,!0)}},T=(w,A,P,B,H)=>{if(A!==P){if(A!==xe)for(const U in A)!Ci(U)&&!(U in P)&&i(w,U,A[U],null,H,B);for(const U in P){if(Ci(U))continue;const Y=P[U],G=A[U];Y!==G&&U!=="value"&&i(w,U,G,Y,H,B)}"value"in P&&i(w,"value",A.value,P.value,H)}},b=(w,A,P,B,H,U,Y,G,q)=>{const W=A.el=w?w.el:l(""),le=A.anchor=w?w.anchor:l("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:ce}=A;ce&&(G=G?G.concat(ce):ce),w==null?(r(W,P,B),r(le,P,B),y(A.children||[],P,le,H,U,Y,G,q)):X>0&&X&64&&oe&&w.dynamicChildren?(R(w.dynamicChildren,oe,P,H,U,Y,G),(A.key!=null||H&&A===H.subTree)&&Im(w,A,!0)):be(w,A,P,le,H,U,Y,G,q)},_=(w,A,P,B,H,U,Y,G,q)=>{A.slotScopeIds=G,w==null?A.shapeFlag&512?H.ctx.activate(A,P,B,Y,q):Oe(A,P,B,H,U,Y,q):dt(w,A,q)},Oe=(w,A,P,B,H,U,Y)=>{const G=w.component=ZE(w,B,H);if(cm(w)&&(G.ctx.renderer=ie),ew(G,!1,Y),G.asyncDep){if(H&&H.registerDep(G,Le,Y),!w.el){const q=G.subTree=Ut(Vr);M(null,q,A,P),w.placeholder=q.el}}else Le(G,w,A,P,H,U,Y)},dt=(w,A,P)=>{const B=A.component=w.component;if(zE(w,A,P))if(B.asyncDep&&!B.asyncResolved){me(B,A,P);return}else B.next=A,B.update();else A.el=w.el,B.vnode=A},Le=(w,A,P,B,H,U,Y)=>{const G=()=>{if(w.isMounted){let{next:X,bu:oe,u:ce,parent:ye,vnode:Ne}=w;{const $t=bm(w);if($t){X&&(X.el=Ne.el,me(w,X,Y)),$t.asyncDep.then(()=>{w.isUnmounted||G()});return}}let Re=X,mt;Qr(w,!1),X?(X.el=Ne.el,me(w,X,Y)):X=Ne,oe&&Ho(oe),(mt=X.props&&X.props.onVnodeBeforeUpdate)&&gn(mt,ye,X,Ne),Qr(w,!0);const gt=uf(w),jt=w.subTree;w.subTree=gt,N(jt,gt,p(jt.el),F(jt),w,H,U),X.el=gt.el,Re===null&&qE(w,gt.el),ce&&zt(ce,H),(mt=X.props&&X.props.onVnodeUpdated)&&zt(()=>gn(mt,ye,X,Ne),H)}else{let X;const{el:oe,props:ce}=A,{bm:ye,m:Ne,parent:Re,root:mt,type:gt}=w,jt=Ni(A);Qr(w,!1),ye&&Ho(ye),!jt&&(X=ce&&ce.onVnodeBeforeMount)&&gn(X,Re,A),Qr(w,!0);{mt.ce&&mt.ce._def.shadowRoot!==!1&&mt.ce._injectChildStyle(gt);const $t=w.subTree=uf(w);N(null,$t,P,B,w,H,U),A.el=$t.el}if(Ne&&zt(Ne,H),!jt&&(X=ce&&ce.onVnodeMounted)){const $t=A;zt(()=>gn(X,Re,$t),H)}(A.shapeFlag&256||Re&&Ni(Re.vnode)&&Re.vnode.shapeFlag&256)&&w.a&&zt(w.a,H),w.isMounted=!0,A=P=B=null}};w.scope.on();const q=w.effect=new Fp(G);w.scope.off();const W=w.update=q.run.bind(q),le=w.job=q.runIfDirty.bind(q);le.i=w,le.id=w.uid,q.scheduler=()=>lu(le),Qr(w,!0),W()},me=(w,A,P)=>{A.component=w;const B=w.vnode.props;w.vnode=A,w.next=null,SE(w,A.props,B,P),DE(w,A.children,P),Jn(),ef(w),Xn()},be=(w,A,P,B,H,U,Y,G,q=!1)=>{const W=w&&w.children,le=w?w.shapeFlag:0,X=A.children,{patchFlag:oe,shapeFlag:ce}=A;if(oe>0){if(oe&128){dn(W,X,P,B,H,U,Y,G,q);return}else if(oe&256){xt(W,X,P,B,H,U,Y,G,q);return}}ce&8?(le&16&&pt(W,H,U),X!==W&&f(P,X)):le&16?ce&16?dn(W,X,P,B,H,U,Y,G,q):pt(W,H,U,!0):(le&8&&f(P,""),ce&16&&y(X,P,B,H,U,Y,G,q))},xt=(w,A,P,B,H,U,Y,G,q)=>{w=w||Ds,A=A||Ds;const W=w.length,le=A.length,X=Math.min(W,le);let oe;for(oe=0;oe<X;oe++){const ce=A[oe]=q?yr(A[oe]):vn(A[oe]);N(w[oe],ce,P,null,H,U,Y,G,q)}W>le?pt(w,H,U,!0,!1,X):y(A,P,B,H,U,Y,G,q,X)},dn=(w,A,P,B,H,U,Y,G,q)=>{let W=0;const le=A.length;let X=w.length-1,oe=le-1;for(;W<=X&&W<=oe;){const ce=w[W],ye=A[W]=q?yr(A[W]):vn(A[W]);if(vi(ce,ye))N(ce,ye,P,null,H,U,Y,G,q);else break;W++}for(;W<=X&&W<=oe;){const ce=w[X],ye=A[oe]=q?yr(A[oe]):vn(A[oe]);if(vi(ce,ye))N(ce,ye,P,null,H,U,Y,G,q);else break;X--,oe--}if(W>X){if(W<=oe){const ce=oe+1,ye=ce<le?A[ce].el:B;for(;W<=oe;)N(null,A[W]=q?yr(A[W]):vn(A[W]),P,ye,H,U,Y,G,q),W++}}else if(W>oe)for(;W<=X;)ot(w[W],H,U,!0),W++;else{const ce=W,ye=W,Ne=new Map;for(W=ye;W<=oe;W++){const at=A[W]=q?yr(A[W]):vn(A[W]);at.key!=null&&Ne.set(at.key,W)}let Re,mt=0;const gt=oe-ye+1;let jt=!1,$t=0;const nn=new Array(gt);for(W=0;W<gt;W++)nn[W]=0;for(W=ce;W<=X;W++){const at=w[W];if(mt>=gt){ot(at,H,U,!0);continue}let rt;if(at.key!=null)rt=Ne.get(at.key);else for(Re=ye;Re<=oe;Re++)if(nn[Re-ye]===0&&vi(at,A[Re])){rt=Re;break}rt===void 0?ot(at,H,U,!0):(nn[rt-ye]=W+1,rt>=$t?$t=rt:jt=!0,N(at,A[rt],P,null,H,U,Y,G,q),mt++)}const vs=jt?xE(nn):Ds;for(Re=vs.length-1,W=gt-1;W>=0;W--){const at=ye+W,rt=A[at],ri=A[at+1],Hr=at+1<le?ri.el||ri.placeholder:B;nn[W]===0?N(null,rt,P,Hr,H,U,Y,G,q):jt&&(Re<0||W!==vs[Re]?Bt(rt,P,Hr,2):Re--)}}},Bt=(w,A,P,B,H=null)=>{const{el:U,type:Y,transition:G,children:q,shapeFlag:W}=w;if(W&6){Bt(w.component.subTree,A,P,B);return}if(W&128){w.suspense.move(A,P,B);return}if(W&64){Y.move(w,A,P,ie);return}if(Y===Ce){r(U,A,P);for(let X=0;X<q.length;X++)Bt(q[X],A,P,B);r(w.anchor,A,P);return}if(Y===Fl){D(w,A,P);return}if(B!==2&&W&1&&G)if(B===0)G.beforeEnter(U),r(U,A,P),zt(()=>G.enter(U),H);else{const{leave:X,delayLeave:oe,afterLeave:ce}=G,ye=()=>{w.ctx.isUnmounted?s(U):r(U,A,P)},Ne=()=>{U._isLeaving&&U[tE](!0),X(U,()=>{ye(),ce&&ce()})};oe?oe(U,ye,Ne):Ne()}else r(U,A,P)},ot=(w,A,P,B=!1,H=!1)=>{const{type:U,props:Y,ref:G,children:q,dynamicChildren:W,shapeFlag:le,patchFlag:X,dirs:oe,cacheIndex:ce}=w;if(X===-2&&(H=!1),G!=null&&(Jn(),Di(G,null,P,w,!0),Xn()),ce!=null&&(A.renderCache[ce]=void 0),le&256){A.ctx.deactivate(w);return}const ye=le&1&&oe,Ne=!Ni(w);let Re;if(Ne&&(Re=Y&&Y.onVnodeBeforeUnmount)&&gn(Re,A,w),le&6)tn(w.component,P,B);else{if(le&128){w.suspense.unmount(P,B);return}ye&&Kr(w,null,A,"beforeUnmount"),le&64?w.type.remove(w,A,P,ie,B):W&&!W.hasOnce&&(U!==Ce||X>0&&X&64)?pt(W,A,P,!1,!0):(U===Ce&&X&384||!H&&le&16)&&pt(q,A,P),B&&Ln(w)}(Ne&&(Re=Y&&Y.onVnodeUnmounted)||ye)&&zt(()=>{Re&&gn(Re,A,w),ye&&Kr(w,null,A,"unmounted")},P)},Ln=w=>{const{type:A,el:P,anchor:B,transition:H}=w;if(A===Ce){en(P,B);return}if(A===Fl){S(w);return}const U=()=>{s(P),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(w.shapeFlag&1&&H&&!H.persisted){const{leave:Y,delayLeave:G}=H,q=()=>Y(P,U);G?G(w.el,U,q):q()}else U()},en=(w,A)=>{let P;for(;w!==A;)P=m(w),s(w),w=P;s(A)},tn=(w,A,P)=>{const{bum:B,scope:H,job:U,subTree:Y,um:G,m:q,a:W}=w;cf(q),cf(W),B&&Ho(B),H.stop(),U&&(U.flags|=8,ot(Y,w,A,P)),G&&zt(G,A),zt(()=>{w.isUnmounted=!0},A)},pt=(w,A,P,B=!1,H=!1,U=0)=>{for(let Y=U;Y<w.length;Y++)ot(w[Y],A,P,B,H)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const A=m(w.anchor||w.el),P=A&&A[Zv];return P?m(P):A};let ee=!1;const J=(w,A,P)=>{w==null?A._vnode&&ot(A._vnode,null,null,!0):N(A._vnode||null,w,A,null,null,null,P),A._vnode=w,ee||(ee=!0,ef(),sm(),ee=!1)},ie={p:N,um:ot,m:Bt,r:Ln,mt:Oe,mc:y,pc:be,pbc:R,n:F,o:t};return{render:J,hydrate:void 0,createApp:bE(J)}}function Ul({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function VE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Im(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=yr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Im(o,l)),l.type===za&&l.patchFlag!==-1&&(l.el=o.el),l.type===Vr&&!l.el&&(l.el=o.el)}}function xE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function bm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bm(e)}function cf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ME=Symbol.for("v-scx"),LE=()=>ln(ME);function Sr(t,e,n){return Am(t,e,n)}function Am(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,l=bt({},n),c=e&&r||!e&&i!=="post";let u;if(Gi){if(i==="sync"){const v=LE();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=wn,v.resume=wn,v.pause=wn,v}}const f=It;l.call=(v,O,N)=>Dn(v,f,O,N);let p=!1;i==="post"?l.scheduler=v=>{zt(v,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,O)=>{O?v():lu(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const m=Kv(t,e,l);return Gi&&(u?u.push(m):c&&m()),m}function UE(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?Rm(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=co(this),l=Am(s,i.bind(r),n);return o(),l}function Rm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const FE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${fs(e)}Modifiers`];function BE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&FE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Je(f)?f.trim():f)),o.number&&(s=n.map(ra)));let l,c=r[l=Nl(e)]||r[l=Nl(Jt(e))];!c&&i&&(c=r[l=Nl(fs(e))]),c&&Dn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Dn(u,t,6,s)}}const jE=new WeakMap;function Sm(t,e,n=!1){const r=n?jE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=u=>{const f=Sm(u,e,!0);f&&(l=!0,bt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Me(t)&&r.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):bt(o,i),Me(t)&&r.set(t,o),o)}function Ha(t,e){return!t||!Ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,fs(e))||ke(t,e))}function uf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:v,ctx:O,inheritAttrs:N}=t,k=la(t);let M,L;try{if(n.shapeFlag&4){const S=s||r,j=S;M=vn(u.call(j,S,f,p,v,m,O)),L=l}else{const S=e;M=vn(S.length>1?S(p,{attrs:l,slots:o,emit:c}):S(p,null)),L=e.props?l:$E(l)}}catch(S){Vi.length=0,ja(S,t,1),M=Ut(Vr)}let D=M;if(L&&N!==!1){const S=Object.keys(L),{shapeFlag:j}=D;S.length&&j&7&&(i&&S.some(Yc)&&(L=HE(L,i)),D=Bs(D,L,!1,!0))}return n.dirs&&(D=Bs(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&cu(D,n.transition),M=D,la(k),M}const $E=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ma(n))&&((e||(e={}))[n]=t[n]);return e},HE=(t,e)=>{const n={};for(const r in t)(!Yc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hf(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Ha(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?hf(r,o,u):!0:!!o;return!1}function hf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ha(n,i))return!0}return!1}function qE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Cm=t=>t.__isSuspense;function WE(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):Jv(t)}const Ce=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),Vr=Symbol.for("v-cmt"),Fl=Symbol.for("v-stc"),Vi=[];let Wt=null;function Q(t=!1){Vi.push(Wt=t?null:[])}function GE(){Vi.pop(),Wt=Vi[Vi.length-1]||null}let Wi=1;function ha(t,e=!1){Wi+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function Pm(t){return t.dynamicChildren=Wi>0?Wt||Ds:null,GE(),Wi>0&&Wt&&Wt.push(t),t}function re(t,e,n,r,s,i){return Pm(C(t,e,n,r,s,i,!0))}function kt(t,e,n,r,s){return Pm(Ut(t,e,n,r,s,!0))}function fa(t){return t?t.__v_isVNode===!0:!1}function vi(t,e){return t.type===e.type&&t.key===e.key}const km=({key:t})=>t??null,qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||Ke(t)||ge(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===Ce?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&km(e),ref:e&&qo(e),scopeId:om,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qt};return l?(fu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),Wi>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const Ut=KE;function KE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mE)&&(t=Vr),fa(t)){const l=Bs(t,e,!0);return n&&fu(l,n),Wi>0&&!i&&Wt&&(l.shapeFlag&6?Wt[Wt.indexOf(t)]=l:Wt.push(l)),l.patchFlag=-2,l}if(iw(t)&&(t=t.__vccOpts),e){e=QE(e);let{class:l,style:c}=e;l&&!Je(l)&&(e.class=Yn(l)),Me(c)&&(ou(c)&&!ue(c)&&(c=bt({},c)),e.style=rs(c))}const o=Je(t)?1:Cm(t)?128:eE(t)?64:Me(t)?4:ge(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function QE(t){return t?ou(t)||_m(t)?bt({},t):t:null}function Bs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?YE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&km(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(qo(e)):[i,qo(e)]:qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ce?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bs(t.ssContent),ssFallback:t.ssFallback&&Bs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&cu(f,c.clone(f)),f}function Dt(t=" ",e=0){return Ut(za,null,t,e)}function Ft(t="",e=!1){return e?(Q(),kt(Vr,null,t)):Ut(Vr,null,t)}function vn(t){return t==null||typeof t=="boolean"?Ut(Vr):ue(t)?Ut(Ce,null,t.slice()):fa(t)?yr(t):Ut(za,null,String(t))}function yr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bs(t)}function fu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!_m(e)?e._ctx=qt:s===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),r&64?(n=16,e=[Dt(e)]):n=8);t.children=e,t.shapeFlag|=n}function YE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yn([e.class,r.class]));else if(s==="style")e.style=rs([e.style,r.style]);else if(Ma(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function gn(t,e,n,r=null){Dn(t,e,7,[n,r])}const JE=pm();let XE=0;function ZE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||JE,i={uid:XE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vm(r,s),emitsOptions:Sm(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=BE.bind(null,i),t.ce&&t.ce(i),i}let It=null;const Dm=()=>It||qt;let da,gc;{const t=Fa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};da=e("__VUE_INSTANCE_SETTERS__",n=>It=n),gc=e("__VUE_SSR_SETTERS__",n=>Gi=n)}const co=t=>{const e=It;return da(t),t.scope.on(),()=>{t.scope.off(),da(e)}},ff=()=>{It&&It.scope.off(),da(null)};function Nm(t){return t.vnode.shapeFlag&4}let Gi=!1;function ew(t,e=!1,n=!1){e&&gc(e);const{props:r,children:s}=t.vnode,i=Nm(t);RE(t,r,i,e),kE(t,s,n||e);const o=i?tw(t,e):void 0;return e&&gc(!1),o}function tw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_E);const{setup:r}=n;if(r){Jn();const s=t.setupContext=r.length>1?rw(t):null,i=co(t),o=ao(r,t,0,[t.props,s]),l=Pp(o);if(Xn(),i(),(l||t.sp)&&!Ni(t)&&lm(t),l){if(o.then(ff,ff),e)return o.then(c=>{df(t,c)}).catch(c=>{ja(c,t,0)});t.asyncDep=o}else df(t,o)}else Om(t)}function df(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=tm(e)),Om(t)}function Om(t,e,n){const r=t.type;t.render||(t.render=r.render||wn);{const s=co(t);Jn();try{yE(t)}finally{Xn(),s()}}}const nw={get(t,e){return Et(t,"get",""),t[e]}};function rw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,nw),slots:t.slots,emit:t.emit,expose:e}}function qa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tm(au(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Oi)return Oi[n](t)},has(e,n){return n in e||n in Oi}})):t.proxy}function sw(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function iw(t){return ge(t)&&"__vccOpts"in t}const $e=(t,e)=>Wv(t,e,Gi);function Vm(t,e,n){try{ha(-1);const r=arguments.length;return r===2?Me(e)&&!ue(e)?fa(e)?Ut(t,null,[e]):Ut(t,e):Ut(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fa(n)&&(n=[n]),Ut(t,e,n))}finally{ha(1)}}const ow="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _c;const pf=typeof window<"u"&&window.trustedTypes;if(pf)try{_c=pf.createPolicy("vue",{createHTML:t=>t})}catch{}const xm=_c?t=>_c.createHTML(t):t=>t,aw="http://www.w3.org/2000/svg",lw="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,mf=Bn&&Bn.createElement("template"),cw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Bn.createElementNS(aw,t):e==="mathml"?Bn.createElementNS(lw,t):n?Bn.createElement(t,{is:n}):Bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Bn.createTextNode(t),createComment:t=>Bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mf.innerHTML=xm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=mf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},uw=Symbol("_vtc");function hw(t,e,n){const r=t[uw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gf=Symbol("_vod"),fw=Symbol("_vsh"),dw=Symbol(""),pw=/(?:^|;)\s*display\s*:/;function mw(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Wo(r,l,"")}else for(const o in e)n[o]==null&&Wo(r,o,"");for(const o in n)o==="display"&&(i=!0),Wo(r,o,n[o])}else if(s){if(e!==n){const o=r[dw];o&&(n+=";"+o),r.cssText=n,i=pw.test(n)}}else e&&t.removeAttribute("style");gf in t&&(t[gf]=i?r.display:"",t[fw]&&(r.display="none"))}const _f=/\s*!important$/;function Wo(t,e,n){if(ue(n))n.forEach(r=>Wo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=gw(t,e);_f.test(n)?t.setProperty(fs(r),n.replace(_f,""),"important"):t[r]=n}}const yf=["Webkit","Moz","ms"],Bl={};function gw(t,e){const n=Bl[e];if(n)return n;let r=Jt(e);if(r!=="filter"&&r in t)return Bl[e]=r;r=Ua(r);for(let s=0;s<yf.length;s++){const i=yf[s]+r;if(i in t)return Bl[e]=i}return e}const vf="http://www.w3.org/1999/xlink";function Ef(t,e,n,r,s,i=_v(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vf,e.slice(6,e.length)):t.setAttributeNS(vf,e,n):n==null||i&&!Op(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kn(n)?String(n):n)}function wf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Op(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Hn(t,e,n,r){t.addEventListener(e,n,r)}function _w(t,e,n,r){t.removeEventListener(e,n,r)}const Tf=Symbol("_vei");function yw(t,e,n,r,s=null){const i=t[Tf]||(t[Tf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=vw(e);if(r){const u=i[e]=Tw(r,s);Hn(t,l,u,c)}else o&&(_w(t,l,o,c),i[e]=void 0)}}const If=/(?:Once|Passive|Capture)$/;function vw(t){let e;if(If.test(t)){e={};let r;for(;r=t.match(If);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fs(t.slice(2)),e]}let jl=0;const Ew=Promise.resolve(),ww=()=>jl||(Ew.then(()=>jl=0),jl=Date.now());function Tw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dn(Iw(r,n.value),e,5,[r])};return n.value=t,n.attached=ww(),n}function Iw(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const bf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?hw(t,r,o):e==="style"?mw(t,n,r):Ma(e)?Yc(e)||yw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Aw(t,e,r,o))?(wf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ef(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Je(r))?wf(t,Jt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ef(t,e,r,o))};function Aw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&bf(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bf(e)&&Je(n)?!1:e in t}const xr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Ho(e,n):e};function Rw(t){t.target.composing=!0}function Af(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yt=Symbol("_assign"),Ot={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Yt]=xr(s);const i=r||s.props&&s.props.type==="number";Hn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ra(l)),t[Yt](l)}),n&&Hn(t,"change",()=>{t.value=t.value.trim()}),e||(Hn(t,"compositionstart",Rw),Hn(t,"compositionend",Af),Hn(t,"change",Af))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Yt]=xr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ra(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Mm={deep:!0,created(t,e,n){t[Yt]=xr(n),Hn(t,"change",()=>{const r=t._modelValue,s=js(t),i=t.checked,o=t[Yt];if(ue(r)){const l=Zc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Ys(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Lm(t,i))})},mounted:Rf,beforeUpdate(t,e,n){t[Yt]=xr(n),Rf(t,e,n)}};function Rf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=Zc(e,r.props.value)>-1;else if(Ys(e))s=e.has(r.props.value);else{if(e===n)return;s=ss(e,Lm(t,!0))}t.checked!==s&&(t.checked=s)}const Sw={created(t,{value:e},n){t.checked=ss(e,n.props.value),t[Yt]=xr(n),Hn(t,"change",()=>{t[Yt](js(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Yt]=xr(r),e!==n&&(t.checked=ss(e,r.props.value))}},Cr={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ys(e);Hn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ra(js(o)):js(o));t[Yt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,lo(()=>{t._assigning=!1})}),t[Yt]=xr(r)},mounted(t,{value:e}){Sf(t,e)},beforeUpdate(t,e,n){t[Yt]=xr(n)},updated(t,{value:e}){t._assigning||Sf(t,e)}};function Sf(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!Ys(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=js(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Zc(e,l)>-1}else o.selected=e.has(l);else if(ss(js(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function js(t){return"_value"in t?t._value:t.value}function Lm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Cw={created(t,e,n){xo(t,e,n,null,"created")},mounted(t,e,n){xo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){xo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){xo(t,e,n,r,"updated")}};function Pw(t,e){switch(t){case"SELECT":return Cr;case"TEXTAREA":return Ot;default:switch(e){case"checkbox":return Mm;case"radio":return Sw;default:return Ot}}}function xo(t,e,n,r,s){const o=Pw(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const kw=["ctrl","shift","alt","meta"],Dw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kw.some(n=>t[`${n}Key`]&&!e.includes(n))},du=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const l=Dw[e[o]];if(l&&l(s,e))return}return t(s,...i)}))},Nw=bt({patchProp:bw},cw);let Cf;function Ow(){return Cf||(Cf=NE(Nw))}const Vw=((...t)=>{const e=Ow().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Mw(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,xw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function xw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Mw(t){return Je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Um;const Wa=t=>Um=t,Fm=Symbol();function yc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xi||(xi={}));function Lw(){const t=Lp(!0),e=t.run(()=>ne({}));let n=[],r=[];const s=au({install(i){Wa(s),s._a=i,i.provide(Fm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Bm=()=>{};function Pf(t,e,n,r=Bm){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&Up()&&vv(s),s}function bs(t,...e){t.forEach(n=>{n(...e)})}const Uw=t=>t(),kf=Symbol(),$l=Symbol();function vc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];yc(s)&&yc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!Rr(r)?t[n]=vc(s,r):t[n]=r}return t}const Fw=Symbol();function Bw(t){return!yc(t)||!Object.prototype.hasOwnProperty.call(t,Fw)}const{assign:gr}=Object;function jw(t){return!!(Ke(t)&&t.effect)}function $w(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const f=$v(n.state.value[t]);return gr(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=au($e(()=>{Wa(n);const v=n._s.get(t);return o[m].call(v,v)})),p),{}))}return c=jm(t,u,e,n,r,!0),c}function jm(t,e,n={},r,s,i){let o;const l=gr({actions:{}},n),c={deep:!0};let u,f,p=new Set,m=new Set,v;const O=r.state.value[t];!i&&!O&&(r.state.value[t]={}),ne({});let N;function k(y){let E;u=f=!1,typeof y=="function"?(y(r.state.value[t]),E={type:xi.patchFunction,storeId:t,events:v}):(vc(r.state.value[t],y),E={type:xi.patchObject,payload:y,storeId:t,events:v});const R=N=Symbol();lo().then(()=>{N===R&&(u=!0)}),f=!0,bs(p,E,r.state.value[t])}const M=i?function(){const{state:E}=n,R=E?E():{};this.$patch(T=>{gr(T,R)})}:Bm;function L(){o.stop(),p.clear(),m.clear(),r._s.delete(t)}const D=(y,E="")=>{if(kf in y)return y[$l]=E,y;const R=function(){Wa(r);const T=Array.from(arguments),b=new Set,_=new Set;function Oe(me){b.add(me)}function dt(me){_.add(me)}bs(m,{args:T,name:R[$l],store:j,after:Oe,onError:dt});let Le;try{Le=y.apply(this&&this.$id===t?this:j,T)}catch(me){throw bs(_,me),me}return Le instanceof Promise?Le.then(me=>(bs(b,me),me)).catch(me=>(bs(_,me),Promise.reject(me))):(bs(b,Le),Le)};return R[kf]=!0,R[$l]=E,R},S={_p:r,$id:t,$onAction:Pf.bind(null,m),$patch:k,$reset:M,$subscribe(y,E={}){const R=Pf(p,y,E.detached,()=>T()),T=o.run(()=>Sr(()=>r.state.value[t],b=>{(E.flush==="sync"?f:u)&&y({storeId:t,type:xi.direct,events:v},b)},gr({},c,E)));return R},$dispose:L},j=oo(S);r._s.set(t,j);const I=(r._a&&r._a.runWithContext||Uw)(()=>r._e.run(()=>(o=Lp()).run(()=>e({action:D}))));for(const y in I){const E=I[y];if(Ke(E)&&!jw(E)||Rr(E))i||(O&&Bw(E)&&(Ke(E)?E.value=O[y]:vc(E,O[y])),r.state.value[t][y]=E);else if(typeof E=="function"){const R=D(E,y);I[y]=R,l.actions[y]=E}}return gr(j,I),gr(Se(j),I),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:y=>{k(E=>{gr(E,y)})}}),r._p.forEach(y=>{gr(j,o.run(()=>y({store:j,app:r._a,pinia:r,options:l})))}),O&&i&&n.hydrate&&n.hydrate(j.$state,O),u=!0,f=!0,j}/*! #__NO_SIDE_EFFECTS__ */function Hw(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=AE();return o=o||(c?ln(Fm,null):null),o&&Wa(o),o=Um,o._s.has(t)||(s?jm(t,e,r,o):$w(t,r,o)),o._s.get(t)}return i.$id=t,i}const zw={class:"app_holder"},qw={__name:"App",setup(t){return(e,n)=>{const r=pE("router-view");return Q(),re("div",zw,[Ut(r)])}}};/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Rs=typeof document<"u";function $m(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ww(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$m(t.default)}const Pe=Object.assign;function Hl(t,e){const n={};for(const r in e){const s=e[r];n[r]=hn(s)?s.map(t):t(s)}return n}const Mi=()=>{},hn=Array.isArray;function Df(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Hm=/#/g,Gw=/&/g,Kw=/\//g,Qw=/=/g,Yw=/\?/g,zm=/\+/g,Jw=/%5B/g,Xw=/%5D/g,qm=/%5E/g,Zw=/%60/g,Wm=/%7B/g,eT=/%7C/g,Gm=/%7D/g,tT=/%20/g;function pu(t){return t==null?"":encodeURI(""+t).replace(eT,"|").replace(Jw,"[").replace(Xw,"]")}function nT(t){return pu(t).replace(Wm,"{").replace(Gm,"}").replace(qm,"^")}function Ec(t){return pu(t).replace(zm,"%2B").replace(tT,"+").replace(Hm,"%23").replace(Gw,"%26").replace(Zw,"`").replace(Wm,"{").replace(Gm,"}").replace(qm,"^")}function rT(t){return Ec(t).replace(Qw,"%3D")}function sT(t){return pu(t).replace(Hm,"%23").replace(Yw,"%3F")}function iT(t){return sT(t).replace(Kw,"%2F")}function Ki(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const oT=/\/$/,aT=t=>t.replace(oT,"");function zl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=hT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Ki(o)}}function lT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&$s(e.matched[r],n.matched[s])&&Km(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $s(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Km(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uT(t[n],e[n]))return!1;return!0}function uT(t,e){return hn(t)?Of(t,e):hn(e)?Of(e,t):t===e}function Of(t,e){return hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const pr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let wc=(function(t){return t.pop="pop",t.push="push",t})({}),ql=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function fT(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aT(t)}const dT=/^[^#]+#/;function pT(t,e){return t.replace(dT,"#")+e}function mT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ga=()=>({left:window.scrollX,top:window.scrollY});function gT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Vf(t,e){return(history.state?history.state.position-e:-1)+t}const Tc=new Map;function _T(t,e){Tc.set(t,e)}function yT(t){const e=Tc.get(t);return Tc.delete(t),e}function vT(t){return typeof t=="string"||t&&typeof t=="object"}function Qm(t){return typeof t=="string"||typeof t=="symbol"}let qe=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Ym=Symbol("");qe.MATCHER_NOT_FOUND+"",qe.NAVIGATION_GUARD_REDIRECT+"",qe.NAVIGATION_ABORTED+"",qe.NAVIGATION_CANCELLED+"",qe.NAVIGATION_DUPLICATED+"";function Hs(t,e){return Pe(new Error,{type:t,[Ym]:!0},e)}function Fn(t,e){return t instanceof Error&&Ym in t&&(e==null||!!(t.type&e))}const ET=["params","query","hash"];function wT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of ET)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function TT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(zm," "),i=s.indexOf("="),o=Ki(i<0?s:s.slice(0,i)),l=i<0?null:Ki(s.slice(i+1));if(o in e){let c=e[o];hn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function xf(t){let e="";for(let n in t){const r=t[n];if(n=rT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(r)?r.map(s=>s&&Ec(s)):[r&&Ec(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function IT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const bT=Symbol(""),Mf=Symbol(""),Ka=Symbol(""),Jm=Symbol(""),Ic=Symbol("");function Ei(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Hs(qe.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):vT(m)?c(Hs(qe.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Wl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if($m(c)){const u=(c.__vccOpts||c)[e];u&&i.push(vr(u,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Ww(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&vr(m,n,r,o,l,s)()}))}}return i}function AT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>$s(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>$s(u,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let RT=()=>location.protocol+"//"+location.host;function Xm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Nf(l,"")}return Nf(n,t)+r+s}function ST(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const v=Xm(t,location),O=n.value,N=e.value;let k=0;if(m){if(n.value=v,e.value=m,o&&o===O){o=null;return}k=N?m.position-N.position:0}else r(v);s.forEach(M=>{M(n.value,O,{delta:k,type:wc.pop,direction:k?k>0?ql.forward:ql.back:ql.unknown})})};function c(){o=n.value}function u(m){s.push(m);const v=()=>{const O=s.indexOf(m);O>-1&&s.splice(O,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Pe({},m.state,{scroll:Ga()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:u,destroy:p}}function Lf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ga():null}}function CT(t){const{history:e,location:n}=window,r={value:Xm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:RT()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(c,u){i(c,Pe({},e.state,Lf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=c}function l(c,u){const f=Pe({},s.value,e.state,{forward:c,scroll:Ga()});i(f.current,f,!0),i(c,Pe({},Lf(r.value,c,null),{position:f.position+1},u),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function PT(t){t=fT(t);const e=CT(t),n=ST(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:pT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Xr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ze=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ze||{});const kT={type:Xr.Static,value:""},DT=/[a-zA-Z0-9_]/;function NT(t){if(!t)return[[]];if(t==="/")return[[kT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=Ze.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===Ze.Static?i.push({type:Xr.Static,value:u}):n===Ze.Param||n===Ze.ParamRegExp||n===Ze.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Xr.Param,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==Ze.ParamRegExp){r=n,n=Ze.EscapeNext;continue}switch(n){case Ze.Static:c==="/"?(u&&p(),o()):c===":"?(p(),n=Ze.Param):m();break;case Ze.EscapeNext:m(),n=r;break;case Ze.Param:c==="("?n=Ze.ParamRegExp:DT.test(c)?m():(p(),n=Ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Ze.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=Ze.ParamRegExpEnd:f+=c;break;case Ze.ParamRegExpEnd:p(),n=Ze.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===Ze.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Uf="[^/]+?",OT={sensitive:!1,strict:!1,start:!0,end:!0};var Ct=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Ct||{});const VT=/[.+*?^${}()[\]/\\]/g;function xT(t,e){const n=Pe({},OT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Ct.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=Ct.Segment+(n.sensitive?Ct.BonusCaseSensitive:0);if(m.type===Xr.Static)p||(s+="/"),s+=m.value.replace(VT,"\\$&"),v+=Ct.Static;else if(m.type===Xr.Param){const{value:O,repeatable:N,optional:k,regexp:M}=m;i.push({name:O,repeatable:N,optional:k});const L=M||Uf;if(L!==Uf){v+=Ct.BonusCustomRegExp;try{`${L}`}catch(S){throw new Error(`Invalid custom RegExp for param "${O}" (${L}): `+S.message)}}let D=N?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;p||(D=k&&u.length<2?`(?:/${D})`:"/"+D),k&&(D+="?"),s+=D,v+=Ct.Dynamic,k&&(v+=Ct.BonusOptional),N&&(v+=Ct.BonusRepeatable),L===".*"&&(v+=Ct.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Ct.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",O=i[m-1];p[O.name]=v&&O.repeatable?v.split("/"):v}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of m)if(v.type===Xr.Static)f+=v.value;else if(v.type===Xr.Param){const{value:O,repeatable:N,optional:k}=v,M=O in u?u[O]:"";if(hn(M)&&!N)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const L=hn(M)?M.join("/"):M;if(!L)if(k)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);f+=L}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function MT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Ct.Static+Ct.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Ct.Static+Ct.Segment?1:-1:0}function Zm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=MT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ff(r))return 1;if(Ff(s))return-1}return s.length-r.length}function Ff(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const LT={strict:!1,end:!0,sensitive:!1};function UT(t,e,n){const r=xT(NT(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FT(t,e){const n=[],r=new Map;e=Df(LT,e);function s(p){return r.get(p)}function i(p,m,v){const O=!v,N=jf(p);N.aliasOf=v&&v.record;const k=Df(e,p),M=[N];if("alias"in p){const S=typeof p.alias=="string"?[p.alias]:p.alias;for(const j of S)M.push(jf(Pe({},N,{components:v?v.record.components:N.components,path:j,aliasOf:v?v.record:N})))}let L,D;for(const S of M){const{path:j}=S;if(m&&j[0]!=="/"){const Z=m.record.path,I=Z[Z.length-1]==="/"?"":"/";S.path=m.record.path+(j&&I+j)}if(L=UT(S,m,k),v?v.alias.push(L):(D=D||L,D!==L&&D.alias.push(L),O&&p.name&&!$f(L)&&o(p.name)),eg(L)&&c(L),N.children){const Z=N.children;for(let I=0;I<Z.length;I++)i(Z[I],L,v&&v.children[I])}v=v||L}return D?()=>{o(D)}:Mi}function o(p){if(Qm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=$T(p,n);n.splice(m,0,p),p.record.name&&!$f(p)&&r.set(p.record.name,p)}function u(p,m){let v,O={},N,k;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw Hs(qe.MATCHER_NOT_FOUND,{location:p});k=v.record.name,O=Pe(Bf(m.params,v.keys.filter(D=>!D.optional).concat(v.parent?v.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),p.params&&Bf(p.params,v.keys.map(D=>D.name))),N=v.stringify(O)}else if(p.path!=null)N=p.path,v=n.find(D=>D.re.test(N)),v&&(O=v.parse(N),k=v.record.name);else{if(v=m.name?r.get(m.name):n.find(D=>D.re.test(m.path)),!v)throw Hs(qe.MATCHER_NOT_FOUND,{location:p,currentLocation:m});k=v.record.name,O=Pe({},m.params,p.params),N=v.stringify(O)}const M=[];let L=v;for(;L;)M.unshift(L.record),L=L.parent;return{name:k,path:N,params:O,matched:M,meta:jT(M)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Bf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:BT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function BT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jT(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function $T(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Zm(t,e[i])<0?r=i:n=i+1}const s=HT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function HT(t){let e=t;for(;e=e.parent;)if(eg(e)&&Zm(t,e)===0)return e}function eg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Hf(t){const e=ln(Ka),n=ln(Jm),r=$e(()=>{const c=Tn(t.to);return e.resolve(c)}),s=$e(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex($s.bind(null,f));if(m>-1)return m;const v=zf(c[u-2]);return u>1&&zf(f)===v&&p[p.length-1].path!==v?p.findIndex($s.bind(null,c[u-2])):m}),i=$e(()=>s.value>-1&&KT(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&Km(n.params,r.value.params));function l(c={}){if(GT(c)){const u=e[Tn(t.replace)?"replace":"push"](Tn(t.to)).catch(Mi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function zT(t){return t.length===1?t[0]:t}const qT=am({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Hf,setup(t,{slots:e}){const n=oo(Hf(t)),{options:r}=ln(Ka),s=$e(()=>({[qf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&zT(e.default(n));return t.custom?i:Vm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),WT=qT;function GT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function KT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!hn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function zf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qf=(t,e,n)=>t??e??n,QT=am({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ln(Ic),s=$e(()=>t.route||r.value),i=ln(Mf,0),o=$e(()=>{let u=Tn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=$e(()=>s.value.matched[o.value]);zo(Mf,$e(()=>o.value+1)),zo(bT,l),zo(Ic,s);const c=ne();return Sr(()=>[c.value,l.value,t.name],([u,f,p],[m,v,O])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!$s(f,v)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return Wf(n.default,{Component:m,route:u});const v=p.props[f],O=v?v===!0?u.params:typeof v=="function"?v(u):v:null,k=Vm(m,Pe({},O,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Wf(n.default,{Component:k,route:u})||k}}});function Wf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YT=QT;function JT(t){const e=FT(t.routes,t),n=t.parseQuery||TT,r=t.stringifyQuery||xf,s=t.history,i=Ei(),o=Ei(),l=Ei(),c=Fv(pr);let u=pr;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Hl.bind(null,F=>""+F),p=Hl.bind(null,iT),m=Hl.bind(null,Ki);function v(F,ee){let J,ie;return Qm(F)?(J=e.getRecordMatcher(F),ie=ee):ie=F,e.addRoute(ie,J)}function O(F){const ee=e.getRecordMatcher(F);ee&&e.removeRoute(ee)}function N(){return e.getRoutes().map(F=>F.record)}function k(F){return!!e.getRecordMatcher(F)}function M(F,ee){if(ee=Pe({},ee||c.value),typeof F=="string"){const P=zl(n,F,ee.path),B=e.resolve({path:P.path},ee),H=s.createHref(P.fullPath);return Pe(P,B,{params:m(B.params),hash:Ki(P.hash),redirectedFrom:void 0,href:H})}let J;if(F.path!=null)J=Pe({},F,{path:zl(n,F.path,ee.path).path});else{const P=Pe({},F.params);for(const B in P)P[B]==null&&delete P[B];J=Pe({},F,{params:p(P)}),ee.params=p(ee.params)}const ie=e.resolve(J,ee),Ee=F.hash||"";ie.params=f(m(ie.params));const w=lT(r,Pe({},F,{hash:nT(Ee),path:ie.path})),A=s.createHref(w);return Pe({fullPath:w,hash:Ee,query:r===xf?IT(F.query):F.query||{}},ie,{redirectedFrom:void 0,href:A})}function L(F){return typeof F=="string"?zl(n,F,c.value.path):Pe({},F)}function D(F,ee){if(u!==F)return Hs(qe.NAVIGATION_CANCELLED,{from:ee,to:F})}function S(F){return I(F)}function j(F){return S(Pe(L(F),{replace:!0}))}function Z(F,ee){const J=F.matched[F.matched.length-1];if(J&&J.redirect){const{redirect:ie}=J;let Ee=typeof ie=="function"?ie(F,ee):ie;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=L(Ee):{path:Ee},Ee.params={}),Pe({query:F.query,hash:F.hash,params:Ee.path!=null?{}:F.params},Ee)}}function I(F,ee){const J=u=M(F),ie=c.value,Ee=F.state,w=F.force,A=F.replace===!0,P=Z(J,ie);if(P)return I(Pe(L(P),{state:typeof P=="object"?Pe({},Ee,P.state):Ee,force:w,replace:A}),ee||J);const B=J;B.redirectedFrom=ee;let H;return!w&&cT(r,ie,J)&&(H=Hs(qe.NAVIGATION_DUPLICATED,{to:B,from:ie}),Bt(ie,ie,!0,!1)),(H?Promise.resolve(H):R(B,ie)).catch(U=>Fn(U)?Fn(U,qe.NAVIGATION_GUARD_REDIRECT)?U:dn(U):be(U,B,ie)).then(U=>{if(U){if(Fn(U,qe.NAVIGATION_GUARD_REDIRECT))return I(Pe({replace:A},L(U.to),{state:typeof U.to=="object"?Pe({},Ee,U.to.state):Ee,force:w}),ee||B)}else U=b(B,ie,!0,A,Ee);return T(B,ie,U),U})}function y(F,ee){const J=D(F,ee);return J?Promise.reject(J):Promise.resolve()}function E(F){const ee=en.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(F):F()}function R(F,ee){let J;const[ie,Ee,w]=AT(F,ee);J=Wl(ie.reverse(),"beforeRouteLeave",F,ee);for(const P of ie)P.leaveGuards.forEach(B=>{J.push(vr(B,F,ee))});const A=y.bind(null,F,ee);return J.push(A),pt(J).then(()=>{J=[];for(const P of i.list())J.push(vr(P,F,ee));return J.push(A),pt(J)}).then(()=>{J=Wl(Ee,"beforeRouteUpdate",F,ee);for(const P of Ee)P.updateGuards.forEach(B=>{J.push(vr(B,F,ee))});return J.push(A),pt(J)}).then(()=>{J=[];for(const P of w)if(P.beforeEnter)if(hn(P.beforeEnter))for(const B of P.beforeEnter)J.push(vr(B,F,ee));else J.push(vr(P.beforeEnter,F,ee));return J.push(A),pt(J)}).then(()=>(F.matched.forEach(P=>P.enterCallbacks={}),J=Wl(w,"beforeRouteEnter",F,ee,E),J.push(A),pt(J))).then(()=>{J=[];for(const P of o.list())J.push(vr(P,F,ee));return J.push(A),pt(J)}).catch(P=>Fn(P,qe.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function T(F,ee,J){l.list().forEach(ie=>E(()=>ie(F,ee,J)))}function b(F,ee,J,ie,Ee){const w=D(F,ee);if(w)return w;const A=ee===pr,P=Rs?history.state:{};J&&(ie||A?s.replace(F.fullPath,Pe({scroll:A&&P&&P.scroll},Ee)):s.push(F.fullPath,Ee)),c.value=F,Bt(F,ee,J,A),dn()}let _;function Oe(){_||(_=s.listen((F,ee,J)=>{if(!tn.listening)return;const ie=M(F),Ee=Z(ie,tn.currentRoute.value);if(Ee){I(Pe(Ee,{replace:!0,force:!0}),ie).catch(Mi);return}u=ie;const w=c.value;Rs&&_T(Vf(w.fullPath,J.delta),Ga()),R(ie,w).catch(A=>Fn(A,qe.NAVIGATION_ABORTED|qe.NAVIGATION_CANCELLED)?A:Fn(A,qe.NAVIGATION_GUARD_REDIRECT)?(I(Pe(L(A.to),{force:!0}),ie).then(P=>{Fn(P,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===wc.pop&&s.go(-1,!1)}).catch(Mi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),be(A,ie,w))).then(A=>{A=A||b(ie,w,!1),A&&(J.delta&&!Fn(A,qe.NAVIGATION_CANCELLED)?s.go(-J.delta,!1):J.type===wc.pop&&Fn(A,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),T(ie,w,A)}).catch(Mi)}))}let dt=Ei(),Le=Ei(),me;function be(F,ee,J){dn(F);const ie=Le.list();return ie.length?ie.forEach(Ee=>Ee(F,ee,J)):console.error(F),Promise.reject(F)}function xt(){return me&&c.value!==pr?Promise.resolve():new Promise((F,ee)=>{dt.add([F,ee])})}function dn(F){return me||(me=!F,Oe(),dt.list().forEach(([ee,J])=>F?J(F):ee()),dt.reset()),F}function Bt(F,ee,J,ie){const{scrollBehavior:Ee}=t;if(!Rs||!Ee)return Promise.resolve();const w=!J&&yT(Vf(F.fullPath,0))||(ie||!J)&&history.state&&history.state.scroll||null;return lo().then(()=>Ee(F,ee,w)).then(A=>A&&gT(A)).catch(A=>be(A,F,ee))}const ot=F=>s.go(F);let Ln;const en=new Set,tn={currentRoute:c,listening:!0,addRoute:v,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:N,resolve:M,options:t,push:S,replace:j,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Le.add,isReady:xt,install(F){F.component("RouterLink",WT),F.component("RouterView",YT),F.config.globalProperties.$router=tn,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Tn(c)}),Rs&&!Ln&&c.value===pr&&(Ln=!0,S(s.location).catch(ie=>{}));const ee={};for(const ie in pr)Object.defineProperty(ee,ie,{get:()=>c.value[ie],enumerable:!0});F.provide(Ka,tn),F.provide(Jm,Zp(ee)),F.provide(Ic,c);const J=F.unmount;en.add(F),F.unmount=function(){en.delete(F),en.size<1&&(u=pr,_&&_(),_=null,c.value=pr,Ln=!1,me=!1),J()}}};function pt(F){return F.reduce((ee,J)=>ee.then(()=>E(J)),Promise.resolve())}return tn}function Qa(){return ln(Ka)}const XT=()=>{};var Gf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ZT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ng={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new eI;const m=i<<2|l>>4;if(r.push(m),u!==64){const v=l<<4&240|u>>2;if(r.push(v),p!==64){const O=u<<6&192|p;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tI=function(t){const e=tg(t);return ng.encodeByteArray(e,!0)},pa=function(t){return tI(t).replace(/\./g,"")},rg=function(t){try{return ng.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rI=()=>nI().__FIREBASE_DEFAULTS__,sI=()=>{if(typeof process>"u"||typeof Gf>"u")return;const t=Gf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rg(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return XT()||rI()||sI()||iI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sg=t=>Ya()?.emulatorHosts?.[t],ig=t=>{const e=sg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},og=()=>Ya()?.config,ag=t=>Ya()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ds(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function lg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pa(JSON.stringify(n)),pa(JSON.stringify(o)),""].join(".")}const Li={};function aI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Li))Li[e]?t.emulator.push(e):t.prod.push(e);return t}function lI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Kf=!1;function gu(t,e){if(typeof window>"u"||typeof document>"u"||!ds(window.location.host)||Li[t]===e||Li[t]||Kf)return;Li[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=aI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Kf=!0,o()},m}function f(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=lI(r),v=n("text"),O=document.getElementById(v)||document.createElement("span"),N=n("learnmore"),k=document.getElementById(N)||document.createElement("a"),M=n("preprendIcon"),L=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const D=m.element;l(D),f(k,N);const S=u();c(L,M),D.append(L,O,k,S),document.body.appendChild(D)}i?(O.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function uI(){const t=Ya()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pI(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mI(){return!uI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gI(){try{return typeof indexedDB=="object"}catch{return!1}}function _I(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yI,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new xn(s,l,r)}}function vI(t,e){return t.replace(EI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const EI=/\{\$([^}]+)}/g;function wI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qf(i)&&Qf(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TI(t,e){const n=new II(t,e);return n.subscribe.bind(n)}class II{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gl),s.error===void 0&&(s.error=Gl),s.complete===void 0&&(s.complete=Gl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gl(){}/**
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
 */function Vt(t){return t&&t._delegate?t._delegate:t}class Mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class AI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SI(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RI(t){return t===Jr?void 0:t}function SI(t){return t.instantiationMode==="EAGER"}/**
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
 */class CI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const PI={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},kI=we.INFO,DI={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},NI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=DI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=kI,this._logHandler=NI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const OI=(t,e)=>e.some(n=>t instanceof n);let Yf,Jf;function VI(){return Yf||(Yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xI(){return Jf||(Jf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cg=new WeakMap,bc=new WeakMap,ug=new WeakMap,Kl=new WeakMap,yu=new WeakMap;function MI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cg.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function LI(t){if(bc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ug.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UI(t){Ac=t(Ac)}function FI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ql(this),e,...n);return ug.set(r,e.sort?e.sort():[e]),Pr(r)}:xI().includes(t)?function(...e){return t.apply(Ql(this),e),Pr(cg.get(this))}:function(...e){return Pr(t.apply(Ql(this),e))}}function BI(t){return typeof t=="function"?FI(t):(t instanceof IDBTransaction&&LI(t),OI(t,VI())?new Proxy(t,Ac):t)}function Pr(t){if(t instanceof IDBRequest)return MI(t);if(Kl.has(t))return Kl.get(t);const e=BI(t);return e!==t&&(Kl.set(t,e),yu.set(e,t)),e}const Ql=t=>yu.get(t);function jI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Pr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pr(o.result),c.oldVersion,c.newVersion,Pr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const $I=["get","getKey","getAll","getAllKeys","count"],HI=["put","add","delete","clear"],Yl=new Map;function Xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yl.get(e))return Yl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=HI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$I.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Yl.set(e,i),i}UI(t=>({...t,get:(e,n,r)=>Xf(e,n)||t.get(e,n,r),has:(e,n)=>!!Xf(e,n)||t.has(e,n)}));/**
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
 */class zI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qI(t){return t.getComponent()?.type==="VERSION"}const Rc="@firebase/app",Zf="0.14.4";/**
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
 */const Zn=new _u("@firebase/app"),WI="@firebase/app-compat",GI="@firebase/analytics-compat",KI="@firebase/analytics",QI="@firebase/app-check-compat",YI="@firebase/app-check",JI="@firebase/auth",XI="@firebase/auth-compat",ZI="@firebase/database",eb="@firebase/data-connect",tb="@firebase/database-compat",nb="@firebase/functions",rb="@firebase/functions-compat",sb="@firebase/installations",ib="@firebase/installations-compat",ob="@firebase/messaging",ab="@firebase/messaging-compat",lb="@firebase/performance",cb="@firebase/performance-compat",ub="@firebase/remote-config",hb="@firebase/remote-config-compat",fb="@firebase/storage",db="@firebase/storage-compat",pb="@firebase/firestore",mb="@firebase/ai",gb="@firebase/firestore-compat",_b="firebase",yb="12.4.0";/**
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
 */const Sc="[DEFAULT]",vb={[Rc]:"fire-core",[WI]:"fire-core-compat",[KI]:"fire-analytics",[GI]:"fire-analytics-compat",[YI]:"fire-app-check",[QI]:"fire-app-check-compat",[JI]:"fire-auth",[XI]:"fire-auth-compat",[ZI]:"fire-rtdb",[eb]:"fire-data-connect",[tb]:"fire-rtdb-compat",[nb]:"fire-fn",[rb]:"fire-fn-compat",[sb]:"fire-iid",[ib]:"fire-iid-compat",[ob]:"fire-fcm",[ab]:"fire-fcm-compat",[lb]:"fire-perf",[cb]:"fire-perf-compat",[ub]:"fire-rc",[hb]:"fire-rc-compat",[fb]:"fire-gcs",[db]:"fire-gcs-compat",[pb]:"fire-fst",[gb]:"fire-fst-compat",[mb]:"fire-vertex","fire-js":"fire-js",[_b]:"fire-js-all"};/**
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
 */const ma=new Map,Eb=new Map,Cc=new Map;function ed(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(Cc.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of ma.values())ed(n,t);for(const n of Eb.values())ed(n,t);return!0}function Ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const wb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new uo("app","Firebase",wb);/**
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
 */class Tb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=yb;function hg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Sc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw kr.create("bad-app-name",{appName:String(s)});if(n||(n=og()),!n)throw kr.create("no-options");const i=ma.get(s);if(i){if(is(n,i.options)&&is(r,i.config))return i;throw kr.create("duplicate-app",{appName:s})}const o=new CI(s);for(const c of Cc.values())o.addComponent(c);const l=new Tb(n,r,o);return ma.set(s,l),l}function vu(t=Sc){const e=ma.get(t);if(!e&&t===Sc&&og())return hg();if(!e)throw kr.create("no-app",{appName:t});return e}function In(t,e,n){let r=vb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(o.join(" "));return}os(new Mr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ib="firebase-heartbeat-database",bb=1,Qi="firebase-heartbeat-store";let Jl=null;function fg(){return Jl||(Jl=jI(Ib,bb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),Jl}async function Ab(t){try{const n=(await fg()).transaction(Qi),r=await n.objectStore(Qi).get(dg(t));return await n.done,r}catch(e){if(e instanceof xn)Zn.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e?.message});Zn.warn(n.message)}}}async function td(t,e){try{const r=(await fg()).transaction(Qi,"readwrite");await r.objectStore(Qi).put(e,dg(t)),await r.done}catch(n){if(n instanceof xn)Zn.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n?.message});Zn.warn(r.message)}}}function dg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Rb=1024,Sb=30;class Cb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nd();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Sb){const s=Db(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Zn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nd(),{heartbeatsToSend:n,unsentEntries:r}=Pb(this._heartbeatsCache.heartbeats),s=pa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Zn.warn(e),""}}}function nd(){return new Date().toISOString().substring(0,10)}function Pb(t,e=Rb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),rd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gI()?_I().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ab(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return td(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return td(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rd(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}function Db(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Nb(t){os(new Mr("platform-logger",e=>new zI(e),"PRIVATE")),os(new Mr("heartbeat",e=>new Cb(e),"PRIVATE")),In(Rc,Zf,t),In(Rc,Zf,"esm2020"),In("fire-js","")}Nb("");var sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,pg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function E(){}E.prototype=y.prototype,I.F=y.prototype,I.prototype=new E,I.prototype.constructor=I,I.D=function(R,T,b){for(var _=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)_[Oe-2]=arguments[Oe];return y.prototype[T].apply(R,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,E){E||(E=0);const R=Array(16);if(typeof y=="string")for(var T=0;T<16;++T)R[T]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(T=0;T<16;++T)R[T]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=I.g[0],E=I.g[1],T=I.g[2];let b=I.g[3],_;_=y+(b^E&(T^b))+R[0]+3614090360&4294967295,y=E+(_<<7&4294967295|_>>>25),_=b+(T^y&(E^T))+R[1]+3905402710&4294967295,b=y+(_<<12&4294967295|_>>>20),_=T+(E^b&(y^E))+R[2]+606105819&4294967295,T=b+(_<<17&4294967295|_>>>15),_=E+(y^T&(b^y))+R[3]+3250441966&4294967295,E=T+(_<<22&4294967295|_>>>10),_=y+(b^E&(T^b))+R[4]+4118548399&4294967295,y=E+(_<<7&4294967295|_>>>25),_=b+(T^y&(E^T))+R[5]+1200080426&4294967295,b=y+(_<<12&4294967295|_>>>20),_=T+(E^b&(y^E))+R[6]+2821735955&4294967295,T=b+(_<<17&4294967295|_>>>15),_=E+(y^T&(b^y))+R[7]+4249261313&4294967295,E=T+(_<<22&4294967295|_>>>10),_=y+(b^E&(T^b))+R[8]+1770035416&4294967295,y=E+(_<<7&4294967295|_>>>25),_=b+(T^y&(E^T))+R[9]+2336552879&4294967295,b=y+(_<<12&4294967295|_>>>20),_=T+(E^b&(y^E))+R[10]+4294925233&4294967295,T=b+(_<<17&4294967295|_>>>15),_=E+(y^T&(b^y))+R[11]+2304563134&4294967295,E=T+(_<<22&4294967295|_>>>10),_=y+(b^E&(T^b))+R[12]+1804603682&4294967295,y=E+(_<<7&4294967295|_>>>25),_=b+(T^y&(E^T))+R[13]+4254626195&4294967295,b=y+(_<<12&4294967295|_>>>20),_=T+(E^b&(y^E))+R[14]+2792965006&4294967295,T=b+(_<<17&4294967295|_>>>15),_=E+(y^T&(b^y))+R[15]+1236535329&4294967295,E=T+(_<<22&4294967295|_>>>10),_=y+(T^b&(E^T))+R[1]+4129170786&4294967295,y=E+(_<<5&4294967295|_>>>27),_=b+(E^T&(y^E))+R[6]+3225465664&4294967295,b=y+(_<<9&4294967295|_>>>23),_=T+(y^E&(b^y))+R[11]+643717713&4294967295,T=b+(_<<14&4294967295|_>>>18),_=E+(b^y&(T^b))+R[0]+3921069994&4294967295,E=T+(_<<20&4294967295|_>>>12),_=y+(T^b&(E^T))+R[5]+3593408605&4294967295,y=E+(_<<5&4294967295|_>>>27),_=b+(E^T&(y^E))+R[10]+38016083&4294967295,b=y+(_<<9&4294967295|_>>>23),_=T+(y^E&(b^y))+R[15]+3634488961&4294967295,T=b+(_<<14&4294967295|_>>>18),_=E+(b^y&(T^b))+R[4]+3889429448&4294967295,E=T+(_<<20&4294967295|_>>>12),_=y+(T^b&(E^T))+R[9]+568446438&4294967295,y=E+(_<<5&4294967295|_>>>27),_=b+(E^T&(y^E))+R[14]+3275163606&4294967295,b=y+(_<<9&4294967295|_>>>23),_=T+(y^E&(b^y))+R[3]+4107603335&4294967295,T=b+(_<<14&4294967295|_>>>18),_=E+(b^y&(T^b))+R[8]+1163531501&4294967295,E=T+(_<<20&4294967295|_>>>12),_=y+(T^b&(E^T))+R[13]+2850285829&4294967295,y=E+(_<<5&4294967295|_>>>27),_=b+(E^T&(y^E))+R[2]+4243563512&4294967295,b=y+(_<<9&4294967295|_>>>23),_=T+(y^E&(b^y))+R[7]+1735328473&4294967295,T=b+(_<<14&4294967295|_>>>18),_=E+(b^y&(T^b))+R[12]+2368359562&4294967295,E=T+(_<<20&4294967295|_>>>12),_=y+(E^T^b)+R[5]+4294588738&4294967295,y=E+(_<<4&4294967295|_>>>28),_=b+(y^E^T)+R[8]+2272392833&4294967295,b=y+(_<<11&4294967295|_>>>21),_=T+(b^y^E)+R[11]+1839030562&4294967295,T=b+(_<<16&4294967295|_>>>16),_=E+(T^b^y)+R[14]+4259657740&4294967295,E=T+(_<<23&4294967295|_>>>9),_=y+(E^T^b)+R[1]+2763975236&4294967295,y=E+(_<<4&4294967295|_>>>28),_=b+(y^E^T)+R[4]+1272893353&4294967295,b=y+(_<<11&4294967295|_>>>21),_=T+(b^y^E)+R[7]+4139469664&4294967295,T=b+(_<<16&4294967295|_>>>16),_=E+(T^b^y)+R[10]+3200236656&4294967295,E=T+(_<<23&4294967295|_>>>9),_=y+(E^T^b)+R[13]+681279174&4294967295,y=E+(_<<4&4294967295|_>>>28),_=b+(y^E^T)+R[0]+3936430074&4294967295,b=y+(_<<11&4294967295|_>>>21),_=T+(b^y^E)+R[3]+3572445317&4294967295,T=b+(_<<16&4294967295|_>>>16),_=E+(T^b^y)+R[6]+76029189&4294967295,E=T+(_<<23&4294967295|_>>>9),_=y+(E^T^b)+R[9]+3654602809&4294967295,y=E+(_<<4&4294967295|_>>>28),_=b+(y^E^T)+R[12]+3873151461&4294967295,b=y+(_<<11&4294967295|_>>>21),_=T+(b^y^E)+R[15]+530742520&4294967295,T=b+(_<<16&4294967295|_>>>16),_=E+(T^b^y)+R[2]+3299628645&4294967295,E=T+(_<<23&4294967295|_>>>9),_=y+(T^(E|~b))+R[0]+4096336452&4294967295,y=E+(_<<6&4294967295|_>>>26),_=b+(E^(y|~T))+R[7]+1126891415&4294967295,b=y+(_<<10&4294967295|_>>>22),_=T+(y^(b|~E))+R[14]+2878612391&4294967295,T=b+(_<<15&4294967295|_>>>17),_=E+(b^(T|~y))+R[5]+4237533241&4294967295,E=T+(_<<21&4294967295|_>>>11),_=y+(T^(E|~b))+R[12]+1700485571&4294967295,y=E+(_<<6&4294967295|_>>>26),_=b+(E^(y|~T))+R[3]+2399980690&4294967295,b=y+(_<<10&4294967295|_>>>22),_=T+(y^(b|~E))+R[10]+4293915773&4294967295,T=b+(_<<15&4294967295|_>>>17),_=E+(b^(T|~y))+R[1]+2240044497&4294967295,E=T+(_<<21&4294967295|_>>>11),_=y+(T^(E|~b))+R[8]+1873313359&4294967295,y=E+(_<<6&4294967295|_>>>26),_=b+(E^(y|~T))+R[15]+4264355552&4294967295,b=y+(_<<10&4294967295|_>>>22),_=T+(y^(b|~E))+R[6]+2734768916&4294967295,T=b+(_<<15&4294967295|_>>>17),_=E+(b^(T|~y))+R[13]+1309151649&4294967295,E=T+(_<<21&4294967295|_>>>11),_=y+(T^(E|~b))+R[4]+4149444226&4294967295,y=E+(_<<6&4294967295|_>>>26),_=b+(E^(y|~T))+R[11]+3174756917&4294967295,b=y+(_<<10&4294967295|_>>>22),_=T+(y^(b|~E))+R[2]+718787259&4294967295,T=b+(_<<15&4294967295|_>>>17),_=E+(b^(T|~y))+R[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.v=function(I,y){y===void 0&&(y=I.length);const E=y-this.blockSize,R=this.C;let T=this.h,b=0;for(;b<y;){if(T==0)for(;b<=E;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<y;)if(R[T++]=I.charCodeAt(b++),T==this.blockSize){s(this,R),T=0;break}}else for(;b<y;)if(R[T++]=I[b++],T==this.blockSize){s(this,R),T=0;break}}this.h=T,this.o+=y},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;y=this.o*8;for(var E=I.length-8;E<I.length;++E)I[E]=y&255,y/=256;for(this.v(I),I=Array(16),y=0,E=0;E<4;++E)for(let R=0;R<32;R+=8)I[y++]=this.g[E]>>>R&255;return I};function i(I,y){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=y(I)}function o(I,y){this.h=y;const E=[];let R=!0;for(let T=I.length-1;T>=0;T--){const b=I[T]|0;R&&b==y||(E[T]=b,R=!1)}this.g=E}var l={};function c(I){return-128<=I&&I<128?i(I,function(y){return new o([y|0],y<0?-1:0)}):new o([I|0],I<0?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return k(u(-I));const y=[];let E=1;for(let R=0;I>=E;R++)y[R]=I/E|0,E*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return k(f(I.substring(1),y));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(y,8));let R=p;for(let b=0;b<I.length;b+=8){var T=Math.min(8,I.length-b);const _=parseInt(I.substring(b,b+T),y);T<8?(T=u(Math.pow(y,T)),R=R.j(T).add(u(_))):(R=R.j(E),R=R.add(u(_)))}return R}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-k(this).m();let I=0,y=1;for(let E=0;E<this.g.length;E++){const R=this.i(E);I+=(R>=0?R:4294967296+R)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(O(this))return"0";if(N(this))return"-"+k(this).toString(I);const y=u(Math.pow(I,6));var E=this;let R="";for(;;){const T=S(E,y).g;E=M(E,T.j(y));let b=((E.g.length>0?E.g[0]:E.h)>>>0).toString(I);if(E=T,O(E))return b+R;for(;b.length<6;)b="0"+b;R=b+R}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function O(I){if(I.h!=0)return!1;for(let y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=M(this,I),N(I)?-1:O(I)?0:1};function k(I){const y=I.g.length,E=[];for(let R=0;R<y;R++)E[R]=~I.g[R];return new o(E,~I.h).add(m)}t.abs=function(){return N(this)?k(this):this},t.add=function(I){const y=Math.max(this.g.length,I.g.length),E=[];let R=0;for(let T=0;T<=y;T++){let b=R+(this.i(T)&65535)+(I.i(T)&65535),_=(b>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);R=_>>>16,b&=65535,_&=65535,E[T]=_<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function M(I,y){return I.add(k(y))}t.j=function(I){if(O(this)||O(I))return p;if(N(this))return N(I)?k(this).j(k(I)):k(k(this).j(I));if(N(I))return k(this.j(k(I)));if(this.l(v)<0&&I.l(v)<0)return u(this.m()*I.m());const y=this.g.length+I.g.length,E=[];for(var R=0;R<2*y;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(let T=0;T<I.g.length;T++){const b=this.i(R)>>>16,_=this.i(R)&65535,Oe=I.i(T)>>>16,dt=I.i(T)&65535;E[2*R+2*T]+=_*dt,L(E,2*R+2*T),E[2*R+2*T+1]+=b*dt,L(E,2*R+2*T+1),E[2*R+2*T+1]+=_*Oe,L(E,2*R+2*T+1),E[2*R+2*T+2]+=b*Oe,L(E,2*R+2*T+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new o(E,0)};function L(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function D(I,y){this.g=I,this.h=y}function S(I,y){if(O(y))throw Error("division by zero");if(O(I))return new D(p,p);if(N(I))return y=S(k(I),y),new D(k(y.g),k(y.h));if(N(y))return y=S(I,k(y)),new D(k(y.g),y.h);if(I.g.length>30){if(N(I)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,R=y;R.l(I)<=0;)E=j(E),R=j(R);var T=Z(E,1),b=Z(R,1);for(R=Z(R,2),E=Z(E,2);!O(R);){var _=b.add(R);_.l(I)<=0&&(T=T.add(E),b=_),R=Z(R,1),E=Z(E,1)}return y=M(I,T.j(y)),new D(T,y)}for(T=p;I.l(y)>=0;){for(E=Math.max(1,Math.floor(I.m()/y.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),b=u(E),_=b.j(y);N(_)||_.l(I)>0;)E-=R,b=u(E),_=b.j(y);O(b)&&(b=m),T=T.add(b),I=M(I,_)}return new D(T,I)}t.B=function(I){return S(this,I).h},t.and=function(I){const y=Math.max(this.g.length,I.g.length),E=[];for(let R=0;R<y;R++)E[R]=this.i(R)&I.i(R);return new o(E,this.h&I.h)},t.or=function(I){const y=Math.max(this.g.length,I.g.length),E=[];for(let R=0;R<y;R++)E[R]=this.i(R)|I.i(R);return new o(E,this.h|I.h)},t.xor=function(I){const y=Math.max(this.g.length,I.g.length),E=[];for(let R=0;R<y;R++)E[R]=this.i(R)^I.i(R);return new o(E,this.h^I.h)};function j(I){const y=I.g.length+1,E=[];for(let R=0;R<y;R++)E[R]=I.i(R)<<1|I.i(R-1)>>>31;return new o(E,I.h)}function Z(I,y){const E=y>>5;y%=32;const R=I.g.length-E,T=[];for(let b=0;b<R;b++)T[b]=y>0?I.i(b+E)>>>y|I.i(b+E+1)<<32-y:I.i(b+E);return new o(T,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,pg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Dr=o}).apply(typeof sd<"u"?sd:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mg,bi,gg,Go,Pc,_g,yg,vg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var V=a[g];if(!(V in d))break e;d=d[V]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=c,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,V,x){for(var K=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)K[_e-2]=arguments[_e];return h.prototype[V].apply(g,K)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let g=1;g<arguments.length;g++){const V=arguments[g];var d=typeof V;if(d=d!="object"?d:V?Array.isArray(V)?"array":d:"null",d=="array"||d=="object"&&typeof V.length=="number"){d=a.length||0;const x=V.length||0;a.length=d+x;for(let K=0;K<x;K++)a[d+K]=V[K]}else a.push(V)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function M(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class L{constructor(){this.h=this.g=null}add(h,d){const g=D.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var D=new N(()=>new S,a=>a.reset());class S{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,Z=!1,I=new L,y=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(E)}};function E(){for(var a;a=M();){try{a.h.call(a.g)}catch(d){k(d)}var h=D;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}Z=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function Oe(a,h){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Oe,T),Oe.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dt="closure_listenable_"+(Math.random()*1e6|0),Le=0;function me(a,h,d,g,V){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=V,this.key=++Le,this.da=this.fa=!1}function be(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xt(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function dn(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Bt(a){const h={};for(const d in a)h[d]=a[d];return h}const ot="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ln(a,h){let d,g;for(let V=1;V<arguments.length;V++){g=arguments[V];for(d in g)a[d]=g[d];for(let x=0;x<ot.length;x++)d=ot[x],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function en(a){this.src=a,this.g={},this.h=0}en.prototype.add=function(a,h,d,g,V){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const K=pt(a,h,g,V);return K>-1?(h=a[K],d||(h.fa=!1)):(h=new me(h,this.src,x,!!g,V),h.fa=d,a.push(h)),h};function tn(a,h){const d=h.type;if(d in a.g){var g=a.g[d],V=Array.prototype.indexOf.call(g,h,void 0),x;(x=V>=0)&&Array.prototype.splice.call(g,V,1),x&&(be(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function pt(a,h,d,g){for(let V=0;V<a.length;++V){const x=a[V];if(!x.da&&x.listener==h&&x.capture==!!d&&x.ha==g)return V}return-1}var F="closure_lm_"+(Math.random()*1e6|0),ee={};function J(a,h,d,g,V){if(Array.isArray(h)){for(let x=0;x<h.length;x++)J(a,h[x],d,g,V);return null}return d=Y(d),a&&a[dt]?a.J(h,d,l(g)?!!g.capture:!1,V):ie(a,h,d,!1,g,V)}function ie(a,h,d,g,V,x){if(!h)throw Error("Invalid event type");const K=l(V)?!!V.capture:!!V;let _e=H(a);if(_e||(a[F]=_e=new en(a)),d=_e.add(h,d,g,K,x),d.proxy)return d;if(g=Ee(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)b||(V=K),V===void 0&&(V=!1),a.addEventListener(h.toString(),g,V);else if(a.attachEvent)a.attachEvent(P(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ee(){function a(d){return h.call(a.src,a.listener,d)}const h=B;return a}function w(a,h,d,g,V){if(Array.isArray(h))for(var x=0;x<h.length;x++)w(a,h[x],d,g,V);else g=l(g)?!!g.capture:!!g,d=Y(d),a&&a[dt]?(a=a.i,x=String(h).toString(),x in a.g&&(h=a.g[x],d=pt(h,d,g,V),d>-1&&(be(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[x],a.h--)))):a&&(a=H(a))&&(h=a.g[h.toString()],a=-1,h&&(a=pt(h,d,g,V)),(d=a>-1?h[a]:null)&&A(d))}function A(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[dt])tn(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(P(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=H(h))?(tn(d,a),d.h==0&&(d.src=null,h[F]=null)):be(a)}}}function P(a){return a in ee?ee[a]:ee[a]="on"+a}function B(a,h){if(a.da)a=!0;else{h=new Oe(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&A(a),a=d.call(g,h)}return a}function H(a){return a=a[F],a instanceof en?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function Y(a){return typeof a=="function"?a:(a[U]||(a[U]=function(h){return a.handleEvent(h)}),a[U])}function G(){R.call(this),this.i=new en(this),this.M=this,this.G=null}p(G,R),G.prototype[dt]=!0,G.prototype.removeEventListener=function(a,h,d,g){w(this,a,h,d,g)};function q(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new T(h,a);else if(h instanceof T)h.target=h.target||a;else{var V=h;h=new T(g,a),Ln(h,V)}V=!0;let x,K;if(d)for(K=d.length-1;K>=0;K--)x=h.g=d[K],V=W(x,g,!0,h)&&V;if(x=h.g=a,V=W(x,g,!0,h)&&V,V=W(x,g,!1,h)&&V,d)for(K=0;K<d.length;K++)x=h.g=d[K],V=W(x,g,!1,h)&&V}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)be(d[g]);delete a.g[h],a.h--}}this.G=null},G.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},G.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function W(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let V=!0;for(let x=0;x<h.length;++x){const K=h[x];if(K&&!K.da&&K.capture==d){const _e=K.listener,Xe=K.ha||K.src;K.fa&&tn(a.i,K),V=_e.call(Xe,g)!==!1&&V}}return V&&!g.defaultPrevented}function le(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function X(a){a.g=le(()=>{a.g=null,a.i&&(a.i=!1,X(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class oe extends R{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(a){R.call(this),this.h=a,this.g={}}p(ce,R);var ye=[];function Ne(a){xt(a.g,function(h,d){this.g.hasOwnProperty(d)&&A(h)},a),a.g={}}ce.prototype.N=function(){ce.Z.N.call(this),Ne(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Re=o.JSON.stringify,mt=o.JSON.parse,gt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function jt(){}function $t(){}var nn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vs(){T.call(this,"d")}p(vs,T);function at(){T.call(this,"c")}p(at,T);var rt={},ri=null;function Hr(){return ri=ri||new G}rt.Ia="serverreachability";function lh(a){T.call(this,rt.Ia,a)}p(lh,T);function si(a){const h=Hr();q(h,new lh(h))}rt.STAT_EVENT="statevent";function ch(a,h){T.call(this,rt.STAT_EVENT,a),this.stat=h}p(ch,T);function Rt(a){const h=Hr();q(h,new ch(h,a))}rt.Ja="timingevent";function uh(a,h){T.call(this,rt.Ja,a),this.size=h}p(uh,T);function ii(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function oi(){this.g=!0}oi.prototype.ua=function(){this.g=!1};function By(a,h,d,g,V,x){a.info(function(){if(a.g)if(x){var K="",_e=x.split("&");for(let Ve=0;Ve<_e.length;Ve++){var Xe=_e[Ve].split("=");if(Xe.length>1){const st=Xe[0];Xe=Xe[1];const mn=st.split("_");K=mn.length>=2&&mn[1]=="type"?K+(st+"="+Xe+"&"):K+(st+"=redacted&")}}}else K=null;else K=x;return"XMLHTTP REQ ("+g+") [attempt "+V+"]: "+h+`
`+d+`
`+K})}function jy(a,h,d,g,V,x,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+V+"]: "+h+`
`+d+`
`+x+" "+K})}function Es(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Hy(a,d)+(g?" "+g:"")})}function $y(a,h){a.info(function(){return"TIMEOUT: "+h})}oi.prototype.info=function(){};function Hy(a,h){if(!a.g)return h;if(!h)return null;try{const x=JSON.parse(h);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var d=x[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var V=g[0];if(V!="noop"&&V!="stop"&&V!="close")for(let K=1;K<g.length;K++)g[K]=""}}}}return Re(x)}catch{return h}}var To={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fh;function yl(){}p(yl,jt),yl.prototype.g=function(){return new XMLHttpRequest},fh=new yl;function ai(a){return encodeURIComponent(String(a))}function zy(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function lr(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ce(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dh}function dh(){this.i=null,this.g="",this.h=!1}var ph={},vl={};function El(a,h,d){a.M=1,a.A=bo(pn(h)),a.u=d,a.R=!0,mh(a,null)}function mh(a,h){a.F=Date.now(),Io(a),a.B=pn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ch(d.i,"t",g),a.C=0,d=a.j.L,a.h=new dh,a.g=Wh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new oe(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var V="readystatechange";Array.isArray(V)||(V&&(ye[0]=V.toString()),V=ye);for(let x=0;x<V.length;x++){const K=J(d,V[x],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?Bt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),si(),By(a.i,a.v,a.B,a.l,a.S,a.u)}lr.prototype.ba=function(a){a=a.target;const h=this.O;h&&hr(a)==3?h.j():this.Y(a)},lr.prototype.Y=function(a){try{if(a==this.g)e:{const _e=hr(this.g),Xe=this.g.ya(),Ve=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||xh(this.g)))){this.K||_e!=4||Xe==7||(Xe==8||Ve<=0?si(3):si(2)),wl(this);var h=this.g.ca();this.X=h;var d=qy(this);if(this.o=h==200,jy(this.i,this.v,this.B,this.l,this.S,_e,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,V=this.g;if((g=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var x=g;break t}}x=null}if(a=x)Es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tl(this,a);else{this.o=!1,this.m=3,Rt(12),zr(this),li(this);break e}}if(this.R){a=!0;let st;for(;!this.K&&this.C<d.length;)if(st=Wy(this,d),st==vl){_e==4&&(this.m=4,Rt(14),a=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(st==ph){this.m=4,Rt(15),Es(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Es(this.i,this.l,st,null),Tl(this,st);if(gh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,Rt(16),a=!1),this.o=this.o&&a,!a)Es(this.i,this.l,d,"[Invalid Chunked Response]"),zr(this),li(this);else if(d.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),kl(K),K.P=!0,Rt(11))}}else Es(this.i,this.l,d,null),Tl(this,d);_e==4&&zr(this),this.o&&!this.K&&(_e==4?$h(this.j,this):(this.o=!1,Io(this)))}else ov(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),zr(this),li(this)}}}catch{}finally{}};function qy(a){if(!gh(a))return a.g.la();const h=xh(a.g);if(h==="")return"";let d="";const g=h.length,V=hr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return zr(a),li(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<g;x++)a.h.h=!0,d+=a.h.i.decode(h[x],{stream:!(V&&x==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function gh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Wy(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?vl:(d=Number(h.substring(d,g)),isNaN(d)?ph:(g+=1,g+d>h.length?vl:(h=h.slice(g,g+d),a.C=g+d,h)))}lr.prototype.cancel=function(){this.K=!0,zr(this)};function Io(a){a.T=Date.now()+a.H,_h(a,a.H)}function _h(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ii(u(a.aa,a),h)}function wl(a){a.D&&(o.clearTimeout(a.D),a.D=null)}lr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?($y(this.i,this.B),this.M!=2&&(si(),Rt(17)),zr(this),this.m=2,li(this)):_h(this,this.T-a)};function li(a){a.j.I==0||a.K||$h(a.j,a)}function zr(a){wl(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ne(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Tl(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Il(d.h,a))){if(!a.L&&Il(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var V=g;if(V[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Po(d),So(d);else break e;Pl(d),Rt(18)}}else d.xa=V[1],0<d.xa-d.K&&V[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ii(u(d.Va,d),6e3));Eh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Wr(d,11)}else if((a.L||d.g==a)&&Po(d),!_(h))for(V=d.Ba.g.parse(h),h=0;h<V.length;h++){let Ve=V[h];const st=Ve[0];if(!(st<=d.K))if(d.K=st,Ve=Ve[1],d.I==2)if(Ve[0]=="c"){d.M=Ve[1],d.ba=Ve[2];const mn=Ve[3];mn!=null&&(d.ka=mn,d.j.info("VER="+d.ka));const Gr=Ve[4];Gr!=null&&(d.za=Gr,d.j.info("SVER="+d.za));const fr=Ve[5];fr!=null&&typeof fr=="number"&&fr>0&&(g=1.5*fr,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const dr=a.g;if(dr){const Do=dr.g?dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Do){var x=g.h;x.g||Do.indexOf("spdy")==-1&&Do.indexOf("quic")==-1&&Do.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(bl(x,x.h),x.h=null))}if(g.G){const Dl=dr.g?dr.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(g.wa=Dl,Fe(g.J,g.G,Dl))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var K=a;if(g.na=qh(g,g.L?g.ba:null,g.W),K.L){wh(g.h,K);var _e=K,Xe=g.O;Xe&&(_e.H=Xe),_e.D&&(wl(_e),Io(_e)),g.g=K}else Bh(g);d.i.length>0&&Co(d)}else Ve[0]!="stop"&&Ve[0]!="close"||Wr(d,7);else d.I==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Wr(d,7):Cl(d):Ve[0]!="noop"&&d.l&&d.l.qa(Ve),d.A=0)}}si(4)}catch{}}var Gy=class{constructor(a,h){this.g=a,this.map=h}};function yh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Eh(a){return a.h?1:a.g?a.g.size:0}function Il(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function bl(a,h){a.g?a.g.add(h):a.h=h}function wh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}yh.prototype.cancel=function(){if(this.i=Th(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Th(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return v(a.i)}var Ih=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ky(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let V,x=null;g>=0?(V=a[d].substring(0,g),x=a[d].substring(g+1)):V=a[d],h(V,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function cr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof cr?(this.l=a.l,ci(this,a.j),this.o=a.o,this.g=a.g,ui(this,a.u),this.h=a.h,Al(this,Ph(a.i)),this.m=a.m):a&&(h=String(a).match(Ih))?(this.l=!1,ci(this,h[1]||"",!0),this.o=hi(h[2]||""),this.g=hi(h[3]||"",!0),ui(this,h[4]),this.h=hi(h[5]||"",!0),Al(this,h[6]||"",!0),this.m=hi(h[7]||"")):(this.l=!1,this.i=new di(null,this.l))}cr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(fi(h,bh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(fi(h,bh,!0),"@"),a.push(ai(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(fi(d,d.charAt(0)=="/"?Jy:Yy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",fi(d,Zy)),a.join("")},cr.prototype.resolve=function(a){const h=pn(this);let d=!!a.j;d?ci(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)ui(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var V=h.h.lastIndexOf("/");V!=-1&&(g=h.h.slice(0,V+1)+g)}if(V=g,V==".."||V==".")g="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){g=V.lastIndexOf("/",0)==0,V=V.split("/");const x=[];for(let K=0;K<V.length;){const _e=V[K++];_e=="."?g&&K==V.length&&x.push(""):_e==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),g&&K==V.length&&x.push("")):(x.push(_e),g=!0)}g=x.join("/")}else g=V}return d?h.h=g:d=a.i.toString()!=="",d?Al(h,Ph(a.i)):d=!!a.m,d&&(h.m=a.m),h};function pn(a){return new cr(a)}function ci(a,h,d){a.j=d?hi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ui(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Al(a,h,d){h instanceof di?(a.i=h,ev(a.i,a.l)):(d||(h=fi(h,Xy)),a.i=new di(h,a.l))}function Fe(a,h,d){a.i.set(h,d)}function bo(a){return Fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function hi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Qy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Qy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bh=/[#\/\?@]/g,Yy=/[#\?:]/g,Jy=/[#\?]/g,Xy=/[#\?@]/g,Zy=/#/g;function di(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function qr(a){a.g||(a.g=new Map,a.h=0,a.i&&Ky(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=di.prototype,t.add=function(a,h){qr(this),this.i=null,a=ws(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ah(a,h){qr(a),h=ws(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Rh(a,h){return qr(a),h=ws(a,h),a.g.has(h)}t.forEach=function(a,h){qr(this),this.g.forEach(function(d,g){d.forEach(function(V){a.call(h,V,g,this)},this)},this)};function Sh(a,h){qr(a);let d=[];if(typeof h=="string")Rh(a,h)&&(d=d.concat(a.g.get(ws(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return qr(this),this.i=null,a=ws(this,a),Rh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Sh(this,a),a.length>0?String(a[0]):h):h};function Ch(a,h,d){Ah(a,h),d.length>0&&(a.i=null,a.g.set(ws(a,h),v(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const V=ai(d);d=Sh(this,d);for(let x=0;x<d.length;x++){let K=V;d[x]!==""&&(K+="="+ai(d[x])),a.push(K)}}return this.i=a.join("&")};function Ph(a){const h=new di;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ws(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ev(a,h){h&&!a.j&&(qr(a),a.i=null,a.g.forEach(function(d,g){const V=g.toLowerCase();g!=V&&(Ah(this,g),Ch(this,V,d))},a)),a.j=h}function tv(a,h){const d=new oi;if(o.Image){const g=new Image;g.onload=f(ur,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(ur,d,"TestLoadImage: error",!1,h,g),g.onabort=f(ur,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(ur,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function nv(a,h){const d=new oi,g=new AbortController,V=setTimeout(()=>{g.abort(),ur(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(V),x.ok?ur(d,"TestPingServer: ok",!0,h):ur(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),ur(d,"TestPingServer: error",!1,h)})}function ur(a,h,d,g,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),g(d)}catch{}}function rv(){this.g=new gt}function Rl(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Rl,jt),Rl.prototype.g=function(){return new Ao(this.i,this.h)};function Ao(a,h){G.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ao,G),t=Ao.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,mi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;kh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function kh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?pi(this):mi(this),this.readyState==3&&kh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,pi(this))},t.Na=function(a){this.g&&(this.response=a,pi(this))},t.ga=function(){this.g&&pi(this)};function pi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,mi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function mi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Dh(a){let h="";return xt(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Sl(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Dh(d),typeof a=="string"?d!=null&&ai(d):Fe(a,h,d))}function ze(a){G.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ze,G);var sv=/^https?$/i,iv=["POST","PUT"];t=ze.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fh.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){Nh(this,x);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var V in g)d.set(V,g[V]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())d.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),V=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(iv,h,void 0)>=0)||g||V||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,K]of d)this.g.setRequestHeader(x,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Nh(this,x)}};function Nh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Oh(a),Ro(a)}function Oh(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,q(this,"complete"),q(this,"abort"),Ro(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),ze.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Vh(this):this.Xa())},t.Xa=function(){Vh(this)};function Vh(a){if(a.h&&typeof i<"u"){if(a.v&&hr(a)==4)setTimeout(a.Ca.bind(a),0);else if(q(a,"readystatechange"),hr(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=x===0){let K=String(a.D).match(Ih)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),g=!sv.test(K?K.toLowerCase():"")}d=g}if(d)q(a,"complete"),q(a,"success");else{a.o=6;try{var V=hr(a)>2?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.ca()+"]",Oh(a)}}finally{Ro(a)}}}}function Ro(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||q(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function hr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return hr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),mt(h)}};function xh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ov(a){const h={};a=(a.g&&hr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=zy(a[g]);const V=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=h[V]||[];h[V]=x,x.push(d)}dn(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Mh(a){this.za=0,this.i=[],this.j=new oi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gi("baseRetryDelayMs",5e3,a),this.Za=gi("retryDelaySeedMs",1e4,a),this.Ta=gi("forwardChannelMaxRetries",2,a),this.va=gi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new yh(a&&a.concurrentRequestLimit),this.Ba=new rv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Mh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){Rt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=qh(this,null,this.W),Co(this)};function Cl(a){if(Lh(a),a.I==3){var h=a.V++,d=pn(a.J);if(Fe(d,"SID",a.M),Fe(d,"RID",h),Fe(d,"TYPE","terminate"),_i(a,d),h=new lr(a,a.j,h),h.M=2,h.A=bo(pn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Wh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Io(h)}zh(a)}function So(a){a.g&&(kl(a),a.g.cancel(),a.g=null)}function Lh(a){So(a),a.v&&(o.clearTimeout(a.v),a.v=null),Po(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Co(a){if(!vh(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||y(),Z||(j(),Z=!0),I.add(h,a),a.D=0}}function av(a,h){return Eh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ii(u(a.Ea,a,h),Hh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const V=new lr(this,this.j,a);let x=this.o;if(this.U&&(x?(x=Bt(x),Ln(x,this.U)):x=this.U),this.u!==null||this.R||(V.J=x,x=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Fh(this,V,h),d=pn(this.J),Fe(d,"RID",a),Fe(d,"CVER",22),this.G&&Fe(d,"X-HTTP-Session-Id",this.G),_i(this,d),x&&(this.R?h="headers="+ai(Dh(x))+"&"+h:this.u&&Sl(d,this.u,x)),bl(this.h,V),this.Ra&&Fe(d,"TYPE","init"),this.S?(Fe(d,"$req",h),Fe(d,"SID","null"),V.U=!0,El(V,d,null)):El(V,d,h),this.I=2}}else this.I==3&&(a?Uh(this,a):this.i.length==0||vh(this.h)||Uh(this))};function Uh(a,h){var d;h?d=h.l:d=a.V++;const g=pn(a.J);Fe(g,"SID",a.M),Fe(g,"RID",d),Fe(g,"AID",a.K),_i(a,g),a.u&&a.o&&Sl(g,a.u,a.o),d=new lr(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Fh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),bl(a.h,d),El(d,g,h)}function _i(a,h){a.H&&xt(a.H,function(d,g){Fe(h,g,d)}),a.l&&xt({},function(d,g){Fe(h,g,d)})}function Fh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var V=a.i;let _e=-1;for(;;){const Xe=["count="+d];_e==-1?d>0?(_e=V[0].g,Xe.push("ofs="+_e)):_e=0:Xe.push("ofs="+_e);let Ve=!0;for(let st=0;st<d;st++){var x=V[st].g;const mn=V[st].map;if(x-=_e,x<0)_e=Math.max(0,V[st].g-100),Ve=!1;else try{x="req"+x+"_"||"";try{var K=mn instanceof Map?mn:Object.entries(mn);for(const[Gr,fr]of K){let dr=fr;l(fr)&&(dr=Re(fr)),Xe.push(x+Gr+"="+encodeURIComponent(dr))}}catch(Gr){throw Xe.push(x+"type="+encodeURIComponent("_badmap")),Gr}}catch{g&&g(mn)}}if(Ve){K=Xe.join("&");break e}}K=void 0}return a=a.i.splice(0,d),h.G=a,K}function Bh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||y(),Z||(j(),Z=!0),I.add(h,a),a.A=0}}function Pl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ii(u(a.Da,a),Hh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,jh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ii(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),So(this),jh(this))};function kl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function jh(a){a.g=new lr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=pn(a.na);Fe(h,"RID","rpc"),Fe(h,"SID",a.M),Fe(h,"AID",a.K),Fe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Fe(h,"TO",a.ia),Fe(h,"TYPE","xmlhttp"),_i(a,h),a.u&&a.o&&Sl(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=bo(pn(h)),d.u=null,d.R=!0,mh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,So(this),Pl(this),Rt(19))};function Po(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function $h(a,h){var d=null;if(a.g==h){Po(a),kl(a),a.g=null;var g=2}else if(Il(a.h,h))d=h.G,wh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var V=a.D;g=Hr(),q(g,new uh(g,d)),Co(a)}else Bh(a);else if(V=h.m,V==3||V==0&&h.X>0||!(g==1&&av(a,h)||g==2&&Pl(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),V){case 1:Wr(a,5);break;case 4:Wr(a,10);break;case 3:Wr(a,6);break;default:Wr(a,2)}}}function Hh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Wr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const V=!g;g=new cr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ci(g,"https"),bo(g),V?tv(g.toString(),d):nv(g.toString(),d)}else Rt(2);a.I=0,a.l&&a.l.pa(h),zh(a),Lh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function zh(a){if(a.I=0,a.ja=[],a.l){const h=Th(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ja,h),O(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function qh(a,h,d){var g=d instanceof cr?pn(d):new cr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ui(g,g.u);else{var V=o.location;g=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;const x=new cr(null);g&&ci(x,g),h&&(x.g=h),V&&ui(x,V),d&&(x.h=d),g=x}return d=a.G,h=a.wa,d&&h&&Fe(g,d,h),Fe(g,"VER",a.ka),_i(a,g),g}function Wh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ze(new Rl({ab:d})):new ze(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gh(){}t=Gh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ko(){}ko.prototype.g=function(a,h){return new Ht(a,h)};function Ht(a,h){G.call(this),this.g=new Mh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!_(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ts(this)}p(Ht,G),Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Cl(this.g)},Ht.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Re(a),a=d);h.i.push(new Gy(h.Ya++,a)),h.I==3&&Co(h)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Cl(this.g),delete this.g,Ht.Z.N.call(this)};function Kh(a){vs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Kh,vs);function Qh(){at.call(this),this.status=1}p(Qh,at);function Ts(a){this.g=a}p(Ts,Gh),Ts.prototype.ra=function(){q(this.g,"a")},Ts.prototype.qa=function(a){q(this.g,new Kh(a))},Ts.prototype.pa=function(a){q(this.g,new Qh)},Ts.prototype.oa=function(){q(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,vg=function(){return new ko},yg=function(){return Hr()},_g=rt,Pc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},To.NO_ERROR=0,To.TIMEOUT=8,To.HTTP_ERROR=6,Go=To,hh.COMPLETE="complete",gg=hh,$t.EventType=nn,nn.OPEN="a",nn.CLOSE="b",nn.ERROR="c",nn.MESSAGE="d",G.prototype.listen=G.prototype.J,bi=$t,ze.prototype.listenOnce=ze.prototype.K,ze.prototype.getLastError=ze.prototype.Ha,ze.prototype.getLastErrorCode=ze.prototype.ya,ze.prototype.getStatus=ze.prototype.ca,ze.prototype.getResponseJson=ze.prototype.La,ze.prototype.getResponseText=ze.prototype.la,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Fa,mg=ze}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});const id="@firebase/firestore",od="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Js="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new _u("@firebase/firestore");function Ss(){return as.logLevel}function te(t,...e){if(as.logLevel<=we.DEBUG){const n=e.map(Eu);as.debug(`Firestore (${Js}): ${t}`,...n)}}function er(t,...e){if(as.logLevel<=we.ERROR){const n=e.map(Eu);as.error(`Firestore (${Js}): ${t}`,...n)}}function zs(t,...e){if(as.logLevel<=we.WARN){const n=e.map(Eu);as.warn(`Firestore (${Js}): ${t}`,...n)}}function Eu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function fe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Eg(t,r,n)}function Eg(t,e,n){let r=`FIRESTORE (${Js}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw er(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Eg(e,s,r)}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ob{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(vt.UNAUTHENTICATED)))}shutdown(){}}class Vb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class xb{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new wg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class Mb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Mb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ad{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ub{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ad(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ad(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Fb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function kc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Xl(s)===Xl(i)?Te(s,i):Xl(s)?1:-1}return Te(t.length,e.length)}const Bb=55296,jb=57343;function Xl(t){const e=t.charCodeAt(0);return e>=Bb&&e<=jb}function qs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="__name__";class yn{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&fe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=yn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Te(e.length,n.length)}static compareSegments(e,n){const r=yn.isNumericId(e),s=yn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?yn.extractNumericId(e).compare(yn.extractNumericId(n)):kc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class Be extends yn{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Be(n)}static emptyPath(){return new Be([])}}const $b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends yn{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return $b.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ld}static keyField(){return new ht([ld])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new se(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new se(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new se(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Tg(t,e,n){if(!n)throw new se(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hb(t,e,n,r){if(e===!0&&r===!0)throw new se(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cd(t){if(!ae.isDocumentKey(t))throw new se(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ud(t){if(ae.isDocumentKey(t))throw new se(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ig(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Tu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function ls(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tu(t);throw new se(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function fo(t,e){if(!Ig(t))throw new se(z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new se(z.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=-62135596800,fd=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*fd);return new je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hd)throw new se(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fd}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fo(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:Ye("string",je._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Yi=-1;function zb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Lr(s,ae.empty(),e)}function qb(t){return new Lr(t.readTime,t.key,Yi)}class Lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lr(de.min(),ae.empty(),Yi)}static max(){return new Lr(de.max(),ae.empty(),Yi)}}function Wb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==Gb)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):$.reject(n)}static resolve(e){return new $(((n,r)=>{n(e)}))}static reject(e){return new $(((n,r)=>{r(e)}))}static waitFor(e){return new $(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next((s=>s?$.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new $(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((f=>{o[u]=f,++l,l===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new $(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function Qb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const Iu=-1;function Za(t){return t==null}function ga(t){return t===0&&1/t==-1/0}function Yb(t){return typeof t=="number"&&Number.isInteger(t)&&!ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="";function Jb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dd(e)),e=Xb(t.get(n),e);return dd(e)}function Xb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case bg:n+="";break;default:n+=i}}return n}function dd(t){return t+bg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ag(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lo(this.root,e,this.comparator,!0)}}class Lo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(e){return new md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new rn([])}unionWith(e){let n=new nt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Rg("Invalid base64 string: "+i):i}})(e);return new ft(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Zb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=Zb.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="server_timestamp",Cg="__type__",Pg="__previous_value__",kg="__local_write_time__";function bu(t){return(t?.mapValue?.fields||{})[Cg]?.stringValue===Sg}function el(t){const e=t.mapValue.fields[Pg];return bu(e)?el(e):e}function Ji(t){const e=Ur(t.mapValue.fields[kg].timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const _a="(default)";class Xi{constructor(e,n){this.projectId=e,this.database=n||_a}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database===_a}isEqual(e){return e instanceof Xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="__type__",tA="__max__",Uo={mapValue:{}},Ng="__vector__",ya="value";function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bu(t)?4:rA(t)?9007199254740991:nA(t)?10:11:fe(28295,{value:t})}function Nn(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ur(s.timestampValue),l=Ur(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Fr(s.bytesValue).isEqual(Fr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),l=Ge(i.doubleValue);return o===l?ga(o)===ga(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(pd(o)!==pd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Nn(o[c],l[c])))return!1;return!0})(t,e);default:return fe(52216,{left:t})}}function Zi(t,e){return(t.values||[]).find((n=>Nn(n,e)))!==void 0}function Ws(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return gd(t.timestampValue,e.timestampValue);case 4:return gd(Ji(t),Ji(e));case 5:return kc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Fr(i),c=Fr(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Te(l[u],c[u]);if(f!==0)return f}return Te(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Te(Ge(i.latitude),Ge(o.latitude));return l!==0?l:Te(Ge(i.longitude),Ge(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return _d(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const l=i.fields||{},c=o.fields||{},u=l[ya]?.arrayValue,f=c[ya]?.arrayValue,p=Te(u?.values?.length||0,f?.values?.length||0);return p!==0?p:_d(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Uo.mapValue&&o===Uo.mapValue)return 0;if(i===Uo.mapValue)return 1;if(o===Uo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=kc(c[p],f[p]);if(m!==0)return m;const v=Ws(l[c[p]],u[f[p]]);if(v!==0)return v}return Te(c.length,f.length)})(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function gd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Ur(t),r=Ur(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function _d(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ws(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Gs(t){return Dc(t)}function Dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Ur(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Fr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ae.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Dc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Dc(n.fields[o])}`;return s+"}"})(t.mapValue):fe(61005,{value:t})}function Ko(t){switch(Br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=el(t);return e?16+Ko(e):16;case 5:return 2*t.stringValue.length;case 6:return Fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ko(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ms(r.fields,((i,o)=>{s+=i.length+Ko(o)})),s})(t.mapValue);default:throw fe(13486,{value:t})}}function Nc(t){return!!t&&"integerValue"in t}function Au(t){return!!t&&"arrayValue"in t}function yd(t){return!!t&&"nullValue"in t}function vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qo(t){return!!t&&"mapValue"in t}function nA(t){return(t?.mapValue?.fields||{})[Dg]?.stringValue===Ng}function Ui(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ui(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ui(t.arrayValue.values[n]);return e}return{...t}}function rA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===tA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ui(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Gt(Ui(this.value))}}function Og(t){const e=[];return ms(t.fields,((n,r)=>{const s=new ht([n]);if(Qo(r)){const i=Og(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class va{constructor(e,n){this.position=e,this.inclusive=n}}function Ed(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=Ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ea{constructor(e,n="asc"){this.field=e,this.dir=n}}function sA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Vg{}class et extends Vg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oA(e,n,r):n==="array-contains"?new cA(e,r):n==="in"?new uA(e,r):n==="not-in"?new hA(e,r):n==="array-contains-any"?new fA(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aA(e,r):new lA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ws(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends Vg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new On(e,n)}matches(e){return xg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xg(t){return t.op==="and"}function Mg(t){return iA(t)&&xg(t)}function iA(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function Oc(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(Mg(t))return t.filters.map((e=>Oc(e))).join(",");{const e=t.filters.map((n=>Oc(n))).join(",");return`${t.op}(${e})`}}function Lg(t,e){return t instanceof et?(function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Nn(r.value,s.value)})(t,e):t instanceof On?(function(r,s){return s instanceof On&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&Lg(o,s.filters[l])),!0):!1})(t,e):void fe(19439)}function Ug(t){return t instanceof et?(function(n){return`${n.field.canonicalString()} ${n.op} ${Gs(n.value)}`})(t):t instanceof On?(function(n){return n.op.toString()+" {"+n.getFilters().map(Ug).join(" ,")+"}"})(t):"Filter"}class oA extends et{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class aA extends et{constructor(e,n){super(e,"in",n),this.keys=Fg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class lA extends et{constructor(e,n){super(e,"not-in",n),this.keys=Fg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Fg(t,e){return(e.arrayValue?.values||[]).map((n=>ae.fromName(n.referenceValue)))}class cA extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Au(n)&&Zi(n.arrayValue,this.value)}}class uA extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zi(this.value.arrayValue,n)}}class hA extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Zi(this.value.arrayValue,n)}}class fA extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Au(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Zi(this.value.arrayValue,r)))}}/**
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
 */class dA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Td(t,e=null,n=[],r=[],s=null,i=null,o=null){return new dA(t,e,n,r,s,i,o)}function Ru(t){const e=pe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Oc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Za(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Gs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Gs(r))).join(",")),e.Te=n}return e.Te}function Su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Lg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wd(t.startAt,e.startAt)&&wd(t.endAt,e.endAt)}function Vc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function pA(t,e,n,r,s,i,o,l){return new tl(t,e,n,r,s,i,o,l)}function Cu(t){return new tl(t)}function Id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mA(t){return t.collectionGroup!==null}function Fi(t){const e=pe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(ht.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ea(i,r))})),n.has(ht.keyField().canonicalString())||e.Ie.push(new Ea(ht.keyField(),r))}return e.Ie}function bn(t){const e=pe(t);return e.Ee||(e.Ee=gA(e,Fi(t))),e.Ee}function gA(t,e){if(t.limitType==="F")return Td(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ea(s.field,i)}));const n=t.endAt?new va(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new va(t.startAt.position,t.startAt.inclusive):null;return Td(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xc(t,e,n){return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nl(t,e){return Su(bn(t),bn(e))&&t.limitType===e.limitType}function Bg(t){return`${Ru(bn(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Ug(s))).join(", ")}]`),Za(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Gs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Gs(s))).join(",")),`Target(${r})`})(bn(t))}; limitType=${t.limitType})`}function rl(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Fi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=Ed(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Fi(r),s)||r.endAt&&!(function(o,l,c){const u=Ed(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Fi(r),s))})(t,e)}function _A(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jg(t){return(e,n)=>{let r=!1;for(const s of Fi(t)){const i=yA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yA(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ws(c,u):fe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ag(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=new He(ae.comparator);function tr(){return vA}const $g=new He(ae.comparator);function Ai(...t){let e=$g;for(const n of t)e=e.insert(n.key,n);return e}function Hg(t){let e=$g;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Zr(){return Bi()}function zg(){return Bi()}function Bi(){return new gs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const EA=new He(ae.comparator),wA=new nt(ae.comparator);function Ie(...t){let e=wA;for(const n of t)e=e.add(n);return e}const TA=new nt(Te);function IA(){return TA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(e)?"-0":e}}function qg(t){return{integerValue:""+t}}function bA(t,e){return Yb(e)?qg(e):Pu(t,e)}/**
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
 */class sl{constructor(){this._=void 0}}function AA(t,e,n){return t instanceof eo?(function(s,i){const o={fields:{[Cg]:{stringValue:Sg},[kg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bu(i)&&(i=el(i)),i&&(o.fields[Pg]=i),{mapValue:o}})(n,e):t instanceof to?Gg(t,e):t instanceof no?Kg(t,e):(function(s,i){const o=Wg(s,i),l=bd(o)+bd(s.Ae);return Nc(o)&&Nc(s.Ae)?qg(l):Pu(s.serializer,l)})(t,e)}function RA(t,e,n){return t instanceof to?Gg(t,e):t instanceof no?Kg(t,e):n}function Wg(t,e){return t instanceof wa?(function(r){return Nc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class eo extends sl{}class to extends sl{constructor(e){super(),this.elements=e}}function Gg(t,e){const n=Qg(e);for(const r of t.elements)n.some((s=>Nn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class no extends sl{constructor(e){super(),this.elements=e}}function Kg(t,e){let n=Qg(e);for(const r of t.elements)n=n.filter((s=>!Nn(s,r)));return{arrayValue:{values:n}}}class wa extends sl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function bd(t){return Ge(t.integerValue||t.doubleValue)}function Qg(t){return Au(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n){this.field=e,this.transform=n}}function CA(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof to&&s instanceof to||r instanceof no&&s instanceof no?qs(r.elements,s.elements,Nn):r instanceof wa&&s instanceof wa?Nn(r.Ae,s.Ae):r instanceof eo&&s instanceof eo})(t.transform,e.transform)}class PA{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class il{}function Yg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xg(t.key,Kn.none()):new po(t.key,t.data,Kn.none());{const n=t.data,r=Gt.empty();let s=new nt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _s(t.key,r,new rn(s.toArray()),Kn.none())}}function kA(t,e,n){t instanceof po?(function(s,i,o){const l=s.value.clone(),c=Rd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof _s?(function(s,i,o){if(!Yo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Rd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Jg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function ji(t,e,n,r){return t instanceof po?(function(i,o,l,c){if(!Yo(i.precondition,o))return l;const u=i.value.clone(),f=Sd(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof _s?(function(i,o,l,c){if(!Yo(i.precondition,o))return l;const u=Sd(i.fieldTransforms,c,o),f=o.data;return f.setAll(Jg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,l){return Yo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function DA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Wg(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function Ad(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qs(r,s,((i,o)=>CA(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends il{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _s extends il{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Jg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Rd(t,e,n){const r=new Map;De(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,RA(o,l,n[s]))}return r}function Sd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,AA(i,o,e))}return r}class Xg extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NA extends il{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&kA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ji(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ji(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zg();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Yg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ie())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,((n,r)=>Ad(n,r)))&&qs(this.baseMutations,e.baseMutations,((n,r)=>Ad(n,r)))}}class ku{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return EA})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ku(e,n,r,s)}}/**
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
 */class VA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Ae;function MA(t){switch(t){case z.OK:return fe(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function Zg(t){if(t===void 0)return er("GRPC error has no .code"),z.UNKNOWN;switch(t){case Qe.OK:return z.OK;case Qe.CANCELLED:return z.CANCELLED;case Qe.UNKNOWN:return z.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return z.INTERNAL;case Qe.UNAVAILABLE:return z.UNAVAILABLE;case Qe.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Qe.NOT_FOUND:return z.NOT_FOUND;case Qe.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Qe.ABORTED:return z.ABORTED;case Qe.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Qe.DATA_LOSS:return z.DATA_LOSS;default:return fe(39323,{code:t})}}(Ae=Qe||(Qe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function LA(){return new TextEncoder}/**
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
 */const UA=new Dr([4294967295,4294967295],0);function Cd(t){const e=LA().encode(t),n=new pg;return n.update(e),new Uint8Array(n.digest())}function Pd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class Du{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ri(`Invalid padding: ${n}`);if(r<0)throw new Ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ri(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ri(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Dr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(UA)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Cd(e),[r,s]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Du(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=Cd(e),[r,s]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,mo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ol(de.min(),s,new He(Te),tr(),Ie())}}class mo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new mo(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class e_{constructor(e,n){this.targetId=e,this.Ce=n}}class t_{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class kd{constructor(){this.ve=0,this.Fe=Dd(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe(38017,{changeType:i})}})),new mo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Dd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class FA{constructor(e){this.Ge=e,this.ze=new Map,this.je=tr(),this.Je=Fo(),this.He=Fo(),this.Ye=new He(Te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Vc(i))if(r===0){const o=new ae(i.path);this.et(n,o,wt.newNoDocument(o,de.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Fr(r).toUint8Array()}catch(c){if(c instanceof Rg)return zs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Du(o,s,i)}catch(c){return zs(c instanceof Ri?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Vc(l.target)){const c=new ae(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,wt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Ie();this.He.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ol(e,n,this.Ye,this.je,r);return this.je=tr(),this.Je=Fo(),this.He=Fo(),this.Ye=new He(Te),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new kd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new nt(Te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new nt(Te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fo(){return new He(ae.comparator)}function Dd(){return new He(ae.comparator)}const BA={asc:"ASCENDING",desc:"DESCENDING"},jA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$A={and:"AND",or:"OR"};class HA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mc(t,e){return t.useProto3Json||Za(e)?e:{value:e}}function Ta(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function n_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zA(t,e){return Ta(t,e.toTimestamp())}function An(t){return De(!!t,49232),de.fromTimestamp((function(n){const r=Ur(n);return new je(r.seconds,r.nanos)})(t))}function Nu(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=(function(s){return new Be(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function r_(t){const e=Be.fromString(t);return De(l_(e),10190,{key:e.toString()}),e}function Uc(t,e){return Nu(t.databaseId,e.path)}function Zl(t,e){const n=r_(e);if(n.get(1)!==t.databaseId.projectId)throw new se(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(i_(n))}function s_(t,e){return Nu(t.databaseId,e)}function qA(t){const e=r_(t);return e.length===4?Be.emptyPath():i_(e)}function Fc(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function i_(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Nd(t,e,n){return{name:Uc(t,e),fields:n.value.mapValue.fields}}function WA(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(De(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const f=u.code===void 0?z.UNKNOWN:Zg(u.code);return new se(f,u.message||"")})(o);n=new t_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zl(t,r.document.name),i=An(r.document.updateTime),o=r.document.createTime?An(r.document.createTime):de.min(),l=new Gt({mapValue:{fields:r.document.fields}}),c=wt.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Jo(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zl(t,r.document),i=r.readTime?An(r.readTime):de.min(),o=wt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Jo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zl(t,r.document),i=r.removedTargetIds||[];n=new Jo([],i,s,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new xA(s,i),l=r.targetId;n=new e_(l,o)}}return n}function GA(t,e){let n;if(e instanceof po)n={update:Nd(t,e.key,e.value)};else if(e instanceof Xg)n={delete:Uc(t,e.key)};else if(e instanceof _s)n={update:Nd(t,e.key,e.data),updateMask:nR(e.fieldMask)};else{if(!(e instanceof NA))return fe(16599,{Vt:e.type});n={verify:Uc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof eo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof to)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof no)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wa)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw fe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:zA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe(27497)})(t,e.precondition)),n}function KA(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?An(s.updateTime):An(i);return o.isEqual(de.min())&&(o=An(i)),new PA(o,s.transformResults||[])})(n,e)))):[]}function QA(t,e){return{documents:[s_(t,e.path)]}}function YA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=s_(t,s);const i=(function(u){if(u.length!==0)return a_(On.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:Ps(m.field),direction:ZA(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function JA(t){let e=qA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=o_(p);return m instanceof On&&Mg(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(O){return new Ea(ks(O.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let m;return m=typeof p=="object"?p.value:p,Za(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(p){const m=!!p.before,v=p.values||[];return new va(v,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,v=p.values||[];return new va(v,m)})(n.endAt)),pA(e,s,o,i,l,"F",c,u)}function XA(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function o_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ks(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ks(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ks(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return et.create(ks(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return On.create(n.compositeFilter.filters.map((r=>o_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(n.compositeFilter.op))})(t):fe(30097,{filter:t})}function ZA(t){return BA[t]}function eR(t){return jA[t]}function tR(t){return $A[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function ks(t){return ht.fromServerFormat(t.fieldPath)}function a_(t){return t instanceof et?(function(n){if(n.op==="=="){if(vd(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(yd(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vd(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(yd(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:eR(n.op),value:n.value}}})(t):t instanceof On?(function(n){const r=n.getFilters().map((s=>a_(s)));return r.length===1?r[0]:{compositeFilter:{op:tR(n.op),filters:r}}})(t):fe(54877,{filter:t})}function nR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function l_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r,s,i=de.min(),o=de.min(),l=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.yt=e}}function sR(t){const e=JA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
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
 */class iR{constructor(){this.Cn=new oR}addToCollectionParentIndex(e,n){return this.Cn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Lr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class oR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Be.comparator)).toArray()}}/**
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
 */const Od={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},c_=41943040;class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ks{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ks(0)}static cr(){return new Ks(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="LruGarbageCollector",aR=1048576;function xd([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class lR{constructor(e){this.Ir=e,this.buffer=new nt(xd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();xd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(Vd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zs(n)?te(Vd,"Ignoring IndexedDB error during garbage collection: ",n):await Xs(n)}await this.Vr(3e5)}))}}class uR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Xa.ce);const r=new lR(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Od)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Od):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Ss()<=we.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function hR(t,e){return new uR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.changes=new gs((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ji(r.mutation,s,rn.empty(),je.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ie()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Zr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Ai();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ie())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=tr();const o=Bi(),l=(function(){return Bi()})();return n.forEach(((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof _s)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ji(f.mutation,u,f.mutation.getFieldMask(),je.now())):o.set(u.key,rn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>l.set(u,new dR(f,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=Bi();let s=new He(((o,l)=>o-l)),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||rn.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Ie()).add(c);s=s.insert(l.batchId,p)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=zg();f.forEach((m=>{if(!i.has(m)){const v=Yg(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Zr());let l=Yi,c=i;return o.next((u=>$.forEach(u,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ie()))).next((f=>({batchId:l,changes:Hg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next((r=>{let s=Ai();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ai();return this.indexManager.getCollectionParents(e,i).next((l=>$.forEach(l,(c=>{const u=(function(p,m){return new tl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,wt.newInvalidDocument(f)))}));let l=Ai();return o.forEach(((c,u)=>{const f=i.get(c);f!==void 0&&ji(f.mutation,u,rn.empty(),je.now()),rl(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:An(s.createTime)}})(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:sR(s.bundledQuery),readTime:An(s.readTime)}})(n)),$.resolve()}}/**
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
 */class gR{constructor(){this.overlays=new He(ae.comparator),this.qr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return $.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Zr(),i=n.length+1,o=new ae(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Zr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Zr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,f)=>l.set(u,f))),!(l.size()>=s)););return $.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VA(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class _R{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.Qr=new nt(it.$r),this.Ur=new nt(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new it(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ae(new Be([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ae(new Be([])),r=new it(n,e),s=new it(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new it(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ae.comparator(e.key,n.key)||Te(e.Yr,n.Yr)}static Kr(e,n){return Te(e.Yr,n.Yr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new nt(it.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new it(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Iu:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const l=this.Xr(o.Yr);i.push(l)})),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(Te);return n.forEach((s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(l=>{r=r.add(l.Yr)}))})),$.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new it(new ae(i),0);let l=new nt(Te);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)}),o),$.resolve(this.ti(l))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){De(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return $.forEach(n.mutations,(s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new it(n,0),s=this.Zr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.ri=e,this.docs=(function(){return new He(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))})),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tr();const o=n.path,l=new ae(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Wb(qb(f),r)<=0||(s.has(f.key)||rl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe(9500)}ii(e,n){return $.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new ER(this)}getSize(e){return $.resolve(this.size)}}class ER extends fR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),$.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.persistence=e,this.si=new gs((n=>Ru(n)),Su),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new Ou,this.targetCount=0,this.ai=Ks.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),$.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ks(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Pr(n),$.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),$.waitFor(i).next((()=>s))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Xa(0),this.li=!1,this.li=!0,this.hi=new _R,this.referenceDelegate=e(this),this.Pi=new wR(this),this.indexManager=new iR,this.remoteDocumentCache=(function(s){return new vR(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new rR(n),this.Ii=new mR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new yR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new TR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return $.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class TR extends Kb{constructor(e){super(),this.currentSequenceNumber=e}}class Vu{constructor(e){this.persistence=e,this.Ri=new Ou,this.Vi=null}static mi(e){return new Vu(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,(r=>{const s=ae.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,de.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ia{constructor(e,n){this.persistence=e,this.pi=new gs((r=>Jb(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=hR(this,n)}static mi(e,n){return new Ia(e,n)}Ei(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return $.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?$.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((l=>{l||(r++,i.removeEntry(o,de.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ko(e.data.value)),n}br(e,n,r){return $.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xu(e,n.fromCache,r,s)}}/**
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
 */class IR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class bR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return mI()?8:Qb(At())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new IR;return this.Ss(e,n,o).next((l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Ss()<=we.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(Ss()<=we.DEBUG&&te("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ss()<=we.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bn(n))):$.resolve())}ys(e,n){if(Id(n))return $.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=xc(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,xc(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,r,s){return Id(n)||s.isEqual(de.min())?$.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?$.resolve(null):(Ss()<=we.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.vs(e,o,n,zb(s,Yi)).next((l=>l)))}))}Ds(e,n){let r=new nt(jg(e));return n.forEach(((s,i)=>{rl(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Ss()<=we.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.ps.getDocumentsMatchingQuery(e,n,Lr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="LocalStore",AR=3e8;class RR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new He(Te),this.xs=new gs((i=>Ru(i)),Su),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function SR(t,e,n,r){return new RR(t,e,n,r)}async function h_(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=Ie();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function CR(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,f){const p=u.batch,m=p.keys();let v=$.resolve();return m.forEach((O=>{v=v.next((()=>f.getEntry(c,O))).next((N=>{const k=u.docVersions.get(O);De(k!==null,48541),N.version.compareTo(k)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))}))})),v.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function f_(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function PR(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ft.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),(function(N,k,M){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=AR?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(m,v,f)&&l.push(n.Pi.updateTargetData(i,v))}));let c=tr(),u=Ie();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(kR(i,o,e.documentUpdates).next((f=>{c=f.ks,u=f.qs}))),!r.isEqual(de.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(f)}return $.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=s,i)))}function kR(t,e,n){let r=Ie(),s=Ie();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=tr();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te(Mu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:s}}))}function DR(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Iu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function NR(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,$.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Bc(t,e,n){const r=pe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Zs(o))throw o;te(Mu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Md(t,e,n){const r=pe(t);let s=de.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,f){const p=pe(c),m=p.xs.get(f);return m!==void 0?$.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,bn(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ie()))).next((l=>(OR(r,_A(e),l),{documents:l,Qs:i})))))}function OR(t,e,n){let r=t.Os.get(e)||de.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Ld{constructor(){this.activeTargetIds=IA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VR{constructor(){this.Mo=new Ld,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ld,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xR{Oo(e){}shutdown(){}}/**
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
 */const ec="RestConnection",MR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class LR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===_a?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=jc(),l=this.zo(e,n.toUriEncodedString());te(ec,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),f=ds(u);return this.Jo(e,l,c,r,f).then((p=>(te(ec,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw zs(ec,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Js})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=MR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class FR extends LR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=jc();return new Promise(((l,c)=>{const u=new mg;u.setWithCredentials(!0),u.listenOnce(gg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Go.NO_ERROR:const p=u.getResponseJson();te(_t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Go.TIMEOUT:te(_t,`RPC '${e}' ${o} timed out`),c(new se(z.DEADLINE_EXCEEDED,"Request time out"));break;case Go.HTTP_ERROR:const m=u.getStatus();if(te(_t,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const O=v?.error;if(O&&O.status&&O.message){const N=(function(M){const L=M.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(L)>=0?L:z.UNKNOWN})(O.status);c(new se(N,O.message))}else c(new se(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new se(z.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(_t,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);te(_t,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=jc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vg(),l=yg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");te(_t,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);this.I_(p);let m=!1,v=!1;const O=new UR({Yo:k=>{v?te(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(te(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),te(_t,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Zo:()=>p.close()}),N=(k,M,L)=>{k.listen(M,(D=>{try{L(D)}catch(S){setTimeout((()=>{throw S}),0)}}))};return N(p,bi.EventType.OPEN,(()=>{v||(te(_t,`RPC '${e}' stream ${s} transport opened.`),O.o_())})),N(p,bi.EventType.CLOSE,(()=>{v||(v=!0,te(_t,`RPC '${e}' stream ${s} transport closed`),O.a_(),this.E_(p))})),N(p,bi.EventType.ERROR,(k=>{v||(v=!0,zs(_t,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),O.a_(new se(z.UNAVAILABLE,"The operation could not be completed")))})),N(p,bi.EventType.MESSAGE,(k=>{if(!v){const M=k.data[0];De(!!M,16349);const L=M,D=L?.error||L[0]?.error;if(D){te(_t,`RPC '${e}' stream ${s} received error:`,D);const S=D.status;let j=(function(y){const E=Qe[y];if(E!==void 0)return Zg(E)})(S),Z=D.message;j===void 0&&(j=z.INTERNAL,Z="Unknown error status: "+S+" with message "+D.message),v=!0,O.a_(new se(j,Z)),p.close()}else te(_t,`RPC '${e}' stream ${s} received:`,M),O.u_(M)}})),N(l,_g.STAT_EVENT,(k=>{k.stat===Pc.PROXY?te(_t,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Pc.NOPROXY&&te(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){return new HA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="PersistentStream";class p_{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new d_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new se(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(Bd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(te(Bd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class BR extends p_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=WA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?An(o.readTime):de.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Fc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Vc(c)?{documents:QA(i,c)}:{query:YA(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=n_(i,o.resumeToken);const u=Mc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Ta(i,o.snapshotVersion.toTimestamp());const u=Mc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=XA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Fc(this.serializer),n.removeTarget=e,this.q_(n)}}class jR extends p_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=KA(e.writeResults,e.commitTime),r=An(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Fc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>GA(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{}class HR extends $R{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new se(z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Lc(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(z.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,Lc(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(z.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class zR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const cs="RemoteStore";class qR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{ys(this)&&(te(cs,"Restarting streams for network reachability change."),await(async function(c){const u=pe(c);u.Ea.add(4),await go(u),u.Ra.set("Unknown"),u.Ea.delete(4),await ll(u)})(this))}))})),this.Ra=new zR(r,s)}}async function ll(t){if(ys(t))for(const e of t.da)await e(!0)}async function go(t){for(const e of t.da)await e(!1)}function m_(t,e){const n=pe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Bu(n)?Fu(n):ei(n).O_()&&Uu(n,e))}function Lu(t,e){const n=pe(t),r=ei(n);n.Ia.delete(e),r.O_()&&g_(n,e),n.Ia.size===0&&(r.O_()?r.L_():ys(n)&&n.Ra.set("Unknown"))}function Uu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ei(t).Y_(e)}function g_(t,e){t.Va.Ue(e),ei(t).Z_(e)}function Fu(t){t.Va=new FA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ei(t).start(),t.Ra.ua()}function Bu(t){return ys(t)&&!ei(t).x_()&&t.Ia.size>0}function ys(t){return pe(t).Ea.size===0}function __(t){t.Va=void 0}async function WR(t){t.Ra.set("Online")}async function GR(t){t.Ia.forEach(((e,n)=>{Uu(t,e)}))}async function KR(t,e){__(t),Bu(t)?(t.Ra.ha(e),Fu(t)):t.Ra.set("Unknown")}async function QR(t,e,n){if(t.Ra.set("Online"),e instanceof t_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))})(t,e)}catch(r){te(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ba(t,r)}else if(e instanceof Jo?t.Va.Ze(e):e instanceof e_?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const r=await f_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),g_(i,c);const p=new Ir(f.target,c,u,f.sequenceNumber);Uu(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){te(cs,"Failed to raise snapshot:",r),await ba(t,r)}}async function ba(t,e,n){if(!Zs(e))throw e;t.Ea.add(1),await go(t),t.Ra.set("Offline"),n||(n=()=>f_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{te(cs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ll(t)}))}function y_(t,e){return e().catch((n=>ba(t,n,e)))}async function cl(t){const e=pe(t),n=jr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Iu;for(;YR(e);)try{const s=await DR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,JR(e,s)}catch(s){await ba(e,s)}v_(e)&&E_(e)}function YR(t){return ys(t)&&t.Ta.length<10}function JR(t,e){t.Ta.push(e);const n=jr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function v_(t){return ys(t)&&!jr(t).x_()&&t.Ta.length>0}function E_(t){jr(t).start()}async function XR(t){jr(t).ra()}async function ZR(t){const e=jr(t);for(const n of t.Ta)e.ea(n.mutations)}async function eS(t,e,n){const r=t.Ta.shift(),s=ku.from(r,e,n);await y_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await cl(t)}async function tS(t,e){e&&jr(t).X_&&await(async function(r,s){if((function(o){return MA(o)&&o!==z.ABORTED})(s.code)){const i=r.Ta.shift();jr(r).B_(),await y_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await cl(r)}})(t,e),v_(t)&&E_(t)}async function jd(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),te(cs,"RemoteStore received new credentials");const r=ys(n);n.Ea.add(3),await go(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ll(n)}async function nS(t,e){const n=pe(t);e?(n.Ea.delete(2),await ll(n)):e||(n.Ea.add(2),await go(n),n.Ra.set("Unknown"))}function ei(t){return t.ma||(t.ma=(function(n,r,s){const i=pe(n);return i.sa(),new BR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:WR.bind(null,t),t_:GR.bind(null,t),r_:KR.bind(null,t),H_:QR.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Bu(t)?Fu(t):t.Ra.set("Unknown")):(await t.ma.stop(),__(t))}))),t.ma}function jr(t){return t.fa||(t.fa=(function(n,r,s){const i=pe(n);return i.sa(),new jR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:XR.bind(null,t),r_:tS.bind(null,t),ta:ZR.bind(null,t),na:eS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await cl(t)):(await t.fa.stop(),t.Ta.length>0&&(te(cs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ju(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(t,e){if(er("AsyncQueue",`${e}: ${t}`),Zs(t))return new se(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{static emptySet(e){return new Vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=Ai(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class $d{constructor(){this.ga=new He(ae.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Qs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Qs(e,n,Vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class sS{constructor(){this.queries=Hd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=Hd(),i.forEach(((o,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new se(z.ABORTED,"Firestore shutting down"))}}function Hd(){return new gs((t=>Bg(t)),nl)}async function w_(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new rS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=$u(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Hu(n)}async function T_(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function iS(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Hu(n)}function oS(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Hu(t){t.Ca.forEach((e=>{e.next()}))}var $c,zd;(zd=$c||($c={})).Ma="default",zd.Cache="cache";class I_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$c.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.key=e}}class A_{constructor(e){this.key=e}}class aS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=jg(e),this.tu=new Vs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new $d,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),v=rl(this.query,p)?p:null,O=!!m&&this.mutatedKeys.has(m.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;m&&v?m.data.isEqual(v.data)?O!==N&&(r.track({type:3,doc:v}),k=!0):this.su(m,v)||(r.track({type:2,doc:v}),k=!0,(c&&this.eu(v,c)>0||u&&this.eu(v,u)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),k=!0):m&&!v&&(r.track({type:1,doc:m}),k=!0,(c||u)&&(l=!0)),k&&(v?(o=o.add(v),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(v,O){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:k})}};return N(v)-N(O)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Qs(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $d,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new A_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new b_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Qs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zu="SyncEngine";class lS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cS{constructor(e){this.key=e,this.hu=!1}}class uS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new gs((l=>Bg(l)),nl),this.Iu=new Map,this.Eu=new Set,this.du=new He(ae.comparator),this.Au=new Map,this.Ru=new Ou,this.Vu={},this.mu=new Map,this.fu=Ks.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function hS(t,e,n=!0){const r=D_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await R_(r,e,n,!0),s}async function fS(t,e){const n=D_(t);await R_(n,e,!0,!1)}async function R_(t,e,n,r){const s=await NR(t.localStore,bn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await dS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&m_(t.remoteStore,s),l}async function dS(t,e,n,r,s){t.pu=(p,m,v)=>(async function(N,k,M,L){let D=k.view.ru(M);D.Cs&&(D=await Md(N.localStore,k.query,!1).then((({documents:I})=>k.view.ru(I,D))));const S=L&&L.targetChanges.get(k.targetId),j=L&&L.targetMismatches.get(k.targetId)!=null,Z=k.view.applyChanges(D,N.isPrimaryClient,S,j);return Wd(N,k.targetId,Z.au),Z.snapshot})(t,p,m,v);const i=await Md(t.localStore,e,!0),o=new aS(e,i.Qs),l=o.ru(i.documents),c=mo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Wd(t,n,u.au);const f=new lS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function pS(t,e,n){const r=pe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!nl(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Lu(r.remoteStore,s.targetId),Hc(r,s.targetId)})).catch(Xs)):(Hc(r,s.targetId),await Bc(r.localStore,s.targetId,!0))}async function mS(t,e){const n=pe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Lu(n.remoteStore,r.targetId))}async function gS(t,e,n){const r=IS(t);try{const s=await(function(o,l){const c=pe(o),u=je.now(),f=l.reduce(((v,O)=>v.add(O.key)),Ie());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let O=tr(),N=Ie();return c.Ns.getEntries(v,f).next((k=>{O=k,O.forEach(((M,L)=>{L.isValidDocument()||(N=N.add(M))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,O))).next((k=>{p=k;const M=[];for(const L of l){const D=DA(L,p.get(L.key).overlayedDocument);D!=null&&M.push(new _s(L.key,D,Og(D.value.mapValue),Kn.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,M,l)})).next((k=>{m=k;const M=k.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(v,k.batchId,M)}))})).then((()=>({batchId:m.batchId,changes:Hg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new He(Te)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await _o(r,s.changes),await cl(r.remoteStore)}catch(s){const i=$u(s,"Failed to persist write");n.reject(i)}}async function S_(t,e){const n=pe(t);try{const r=await PR(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?De(o.hu,14607):s.removedDocuments.size>0&&(De(o.hu,42227),o.hu=!1))})),await _o(n,r,e)}catch(r){await Xs(r)}}function qd(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=pe(o);c.onlineState=l;let u=!1;c.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(l)&&(u=!0)})),u&&Hu(c)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _S(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new He(ae.comparator);o=o.insert(i,wt.newNoDocument(i,de.min()));const l=Ie().add(i),c=new ol(de.min(),new Map,new He(Te),o,l);await S_(r,c),r.du=r.du.remove(i),r.Au.delete(e),qu(r)}else await Bc(r.localStore,e,!1).then((()=>Hc(r,e,n))).catch(Xs)}async function yS(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await CR(n.localStore,e);P_(n,r,null),C_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _o(n,s)}catch(s){await Xs(s)}}async function vS(t,e,n){const r=pe(t);try{const s=await(function(o,l){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(De(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>c.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);P_(r,e,n),C_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _o(r,s)}catch(s){await Xs(s)}}function C_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function P_(t,e,n){const r=pe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Hc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||k_(t,r)}))}function k_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Lu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),qu(t))}function Wd(t,e,n){for(const r of n)r instanceof b_?(t.Ru.addReference(r.key,e),ES(t,r)):r instanceof A_?(te(zu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||k_(t,r.key)):fe(19791,{wu:r})}function ES(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(te(zu,"New document in limbo: "+n),t.Eu.add(r),qu(t))}function qu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ae(Be.fromString(e)),r=t.fu.next();t.Au.set(r,new cS(n)),t.du=t.du.insert(n,r),m_(t.remoteStore,new Ir(bn(Cu(n.path)),r,"TargetPurposeLimboResolution",Xa.ce))}}async function _o(t,e,n){const r=pe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=xu.As(c.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(c,u){const f=pe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>$.forEach(u,(m=>$.forEach(m.Es,(v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v))).next((()=>$.forEach(m.ds,(v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))))))}catch(p){if(!Zs(p))throw p;te(Mu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=f.Ms.get(m),O=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(O);f.Ms=f.Ms.insert(m,N)}}})(r.localStore,i))}async function wS(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){te(zu,"User change. New user:",e.toKey());const r=await h_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new se(z.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _o(n,r.Ls)}}function TS(t,e){const n=pe(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function D_(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=S_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_S.bind(null,e),e.Pu.H_=iS.bind(null,e.eventManager),e.Pu.yu=oS.bind(null,e.eventManager),e}function IS(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vS.bind(null,e),e}class Aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=al(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return SR(this.persistence,new bR,e.initialUser,this.serializer)}Cu(e){return new u_(Vu.mi,this.serializer)}Du(e){return new VR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Aa.provider={build:()=>new Aa};class bS extends Aa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){De(this.persistence.referenceDelegate instanceof Ia,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new u_((r=>Ia.mi(r,n)),this.serializer)}}class zc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wS.bind(null,this.syncEngine),await nS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sS})()}createDatastore(e){const n=al(e.databaseInfo.databaseId),r=(function(i){return new FR(i)})(e.databaseInfo);return(function(i,o,l,c){return new HR(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new qR(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>qd(this.syncEngine,n,0)),(function(){return Fd.v()?new Fd:new xR})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,f){const p=new uS(s,i,o,l,c,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=pe(n);te(cs,"RemoteStore shutting down."),r.Ea.add(5),await go(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}zc.provider={build:()=>new zc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class N_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="FirestoreClient";class AS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=wu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{te($r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(te($r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$u(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),te($r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await h_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RS(t);te($r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>jd(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>jd(e.remoteStore,s))),t._onlineComponents=e}async function RS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te($r,"Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;zs("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new Aa)}}else te($r,"Using default OfflineComponentProvider"),await nc(t,new bS(void 0));return t._offlineComponents}async function O_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te($r,"Using user provided OnlineComponentProvider"),await Gd(t,t._uninitializedComponentsProvider._online)):(te($r,"Using default OnlineComponentProvider"),await Gd(t,new zc))),t._onlineComponents}function SS(t){return O_(t).then((e=>e.syncEngine))}async function V_(t){const e=await O_(t),n=e.eventManager;return n.onListen=hS.bind(null,e.syncEngine),n.onUnlisten=pS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mS.bind(null,e.syncEngine),n}function CS(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new N_({next:m=>{f.Nu(),o.enqueueAndForget((()=>T_(i,p)));const v=m.docs.has(l);!v&&m.fromCache?u.reject(new se(z.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?u.reject(new se(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new I_(Cu(l.path),f,{includeMetadataChanges:!0,qa:!0});return w_(i,p)})(await V_(t),t.asyncQueue,e,n,r))),r.promise}function PS(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const f=new N_({next:m=>{f.Nu(),o.enqueueAndForget((()=>T_(i,p))),m.fromCache&&c.source==="server"?u.reject(new se(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new I_(l,f,{includeMetadataChanges:!0,qa:!0});return w_(i,p)})(await V_(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */const M_="firestore.googleapis.com",Qd=!0;class Yd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=M_,this.ssl=Qd}else this.host=e.host,this.ssl=e.ssl??Qd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=c_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aR)throw new se(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new se(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new se(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new se(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ul{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ob;switch(r.type){case"firstParty":return new Lb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Kd.get(n);r&&(te("ComponentProvider","Removing Datastore"),Kd.delete(n),r.terminate())})(this),Promise.resolve()}}function kS(t,e,n,r={}){t=ls(t,ul);const s=ds(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(mu(`https://${l}`),gu("Firestore",!0)),i.host!==M_&&i.host!==l&&zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!is(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=vt.MOCK_USER;else{u=lg(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new se(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new vt(p)}t._authCredentials=new Vb(new wg(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hl(this.firestore,e,this._query)}}class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(fo(n,tt._jsonSchema))return new tt(e,r||null,new ae(Be.fromString(n.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:Ye("string",tt._jsonSchemaVersion),referencePath:Ye("string")};class Nr extends hl{constructor(e,n,r){super(e,n,Cu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new ae(e))}withConverter(e){return new Nr(this.firestore,e,this._path)}}function DS(t,e,...n){if(t=Vt(t),Tg("collection","path",e),t instanceof ul){const r=Be.fromString(e,...n);return ud(r),new Nr(t,null,r)}{if(!(t instanceof tt||t instanceof Nr))throw new se(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return ud(r),new Nr(t.firestore,null,r)}}function Nt(t,e,...n){if(t=Vt(t),arguments.length===1&&(e=wu.newId()),Tg("doc","path",e),t instanceof ul){const r=Be.fromString(e,...n);return cd(r),new tt(t,null,new ae(r))}{if(!(t instanceof tt||t instanceof Nr))throw new se(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return cd(r),new tt(t.firestore,t instanceof Nr?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="AsyncQueue";class Xd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new d_(this,"async_queue_retry"),this._c=()=>{const r=tc();r&&te(Jd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Gn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Zs(e))throw e;te(Jd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,er("INTERNAL UNHANDLED ERROR: ",Zd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=ju.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&fe(47125,{Pc:Zd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Zd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class fl extends ul{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xd(e),this._firestoreClient=void 0,await e}}}function NS(t,e){const n=typeof t=="object"?t:vu(),r=typeof t=="string"?t:_a,s=Ja(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ig("firestore");i&&kS(s,...i)}return s}function Wu(t){if(t._terminated)throw new se(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||OS(t),t._firestoreClient}function OS(t){const e=t._freezeSettings(),n=(function(s,i,o,l){return new eA(s,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,x_(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new AS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(ft.fromBase64String(e))}catch(n){throw new se(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fo(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:Ye("string",Kt._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(fo(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:Ye("string",Rn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
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
 */class Sn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fo(e,Sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Sn(e.vectorValues);throw new se(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Sn._jsonSchemaVersion="firestore/vectorValue/1.0",Sn._jsonSchema={type:Ye("string",Sn._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=/^__.*__$/;class xS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,n,this.fieldTransforms):new po(e,this.data,n,this.fieldTransforms)}}function L_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:t})}}class Qu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ra(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(L_(this.Ac)&&VS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class MS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||al(e)}Cc(e,n,r,s=!1){return new Qu({Ac:e,methodName:n,Dc:r,path:ht.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function LS(t){const e=t._freezeSettings(),n=al(t._databaseId);return new MS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function US(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);j_("Data must be an object, but it was:",o,r);const l=F_(r,o);let c,u;if(i.merge)c=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=FS(e,p,n);if(!o.contains(m))throw new se(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);jS(f,m)||f.push(m)}c=new rn(f),u=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=o.fieldTransforms;return new xS(new Gt(l),c,u)}class Yu extends Ku{_toFieldTransform(e){return new SA(e.path,new eo)}isEqual(e){return e instanceof Yu}}function U_(t,e){if(B_(t=Vt(t)))return j_("Unsupported field value:",e,t),F_(t,e);if(t instanceof Ku)return(function(r,s){if(!L_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=U_(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=je.fromDate(r);return{timestampValue:Ta(s.serializer,i)}}if(r instanceof je){const i=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ta(s.serializer,i)}}if(r instanceof Rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:n_(s.serializer,r._byteString)};if(r instanceof tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Sn)return(function(o,l){return{mapValue:{fields:{[Dg]:{stringValue:Ng},[ya]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Pu(l.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Tu(r)}`)})(t,e)}function F_(t,e){const n={};return Ag(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,((r,s)=>{const i=U_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function B_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Rn||t instanceof Kt||t instanceof tt||t instanceof Ku||t instanceof Sn)}function j_(t,e,n){if(!B_(n)||!Ig(n)){const r=Tu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function FS(t,e,n){if((e=Vt(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return $_(t,e);throw Ra("Field path arguments must be of type string or ",t,!1,void 0,n)}const BS=new RegExp("[~\\*/\\[\\]]");function $_(t,e,n){if(e.search(BS)>=0)throw Ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw Ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ra(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new se(z.INVALID_ARGUMENT,l+t+c)}function jS(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $S(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(z_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $S extends H_{data(){return super.data()}}function z_(t,e){return typeof e=="string"?$_(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zS{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[ya].arrayValue?.values?.map((r=>Ge(r.doubleValue)));return new Sn(n)}convertGeoPoint(e){return new Rn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=el(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=Ur(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);De(l_(r),9688,{name:e});const s=new Xi(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ns extends H_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(z_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ns._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",ns._jsonSchema={type:Ye("string",ns._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Xo extends ns{data(e={}){return super.data(e)}}class xs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Si(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Xo(this._firestore,this._userDataWriter,r.key,r,new Si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Xo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Si(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Xo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Si(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:WS(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){t=ls(t,tt);const e=ls(t.firestore,fl);return CS(Wu(e),t._key).then((n=>QS(e,t,n)))}xs._jsonSchemaVersion="firestore/querySnapshot/1.0",xs._jsonSchema={type:Ye("string",xs._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class q_ extends zS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function GS(t){t=ls(t,hl);const e=ls(t.firestore,fl),n=Wu(e),r=new q_(e);return HS(t._query),PS(n,t._query).then((s=>new xs(e,r,t,s)))}function cn(t,e,n){t=ls(t,tt);const r=ls(t.firestore,fl),s=qS(t.converter,e,n);return KS(r,[US(LS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kn.none())])}function KS(t,e){return(function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget((async()=>gS(await SS(r),s,i))),i.promise})(Wu(t),e)}function QS(t,e,n){const r=n.docs.get(e._key),s=new q_(t);return new ns(t,s,e._key,r,new Si(n.hasPendingWrites,n.fromCache),e.converter)}function Cn(){return new Yu("serverTimestamp")}(function(e,n=!0){(function(s){Js=s})(ps),os(new Mr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new fl(new xb(r.getProvider("auth-internal")),new Ub(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),In(id,od,e),In(id,od,"esm2020")})();var YS="firebase",JS="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(YS,JS,"app");function W_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XS=W_,G_=new uo("auth","Firebase",W_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new _u("@firebase/auth");function ZS(t,...e){Sa.logLevel<=we.WARN&&Sa.warn(`Auth (${ps}): ${t}`,...e)}function Zo(t,...e){Sa.logLevel<=we.ERROR&&Sa.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Xu(t,...e)}function un(t,...e){return Xu(t,...e)}function Ju(t,e,n){const r={...XS(),[e]:n};return new uo("auth","Firebase",r).create(e,{appName:t.name})}function Qn(t){return Ju(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function K_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(t,"argument-error"),Ju(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return G_.create(t,...e)}function he(t,e,...n){if(!t)throw Xu(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zo(e),new Error(e)}function nr(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(){return typeof self<"u"&&self.location?.href||""}function eC(){return ep()==="http:"||ep()==="https:"}function ep(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eC()||fI()||"connection"in navigator)?navigator.onLine:!0}function nC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=cI()||dI()}get(){return tC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const sC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iC=new yo(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function or(t,e,n,r,s={}){return Y_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ho({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return hI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ds(t.emulatorConfig.host)&&(u.credentials="include"),Q_.fetch()(await J_(t,t.config.apiHost,n,l),u)})}async function Y_(t,e,n){t._canInitEmulator=!1;const r={...rC,...e};try{const s=new aC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw jo(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ju(t,f,u);Xt(t,f)}}catch(s){if(s instanceof xn)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function vo(t,e,n,r,s={}){const i=await or(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function J_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Zu(t.config,s):`${t.config.apiScheme}://${s}`;return sC.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function oC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),iC.get())})}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}function tp(t){return t!==void 0&&t.enterprise!==void 0}class lC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cC(t,e){return or(t,"GET","/v2/recaptchaConfig",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function Ca(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hC(t,e=!1){const n=Vt(t),r=await n.getIdToken(e),s=eh(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:$i(rc(s.auth_time)),issuedAtTime:$i(rc(s.iat)),expirationTime:$i(rc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function rc(t){return Number(t)*1e3}function eh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zo("JWT malformed, contained fewer than 3 sections"),null;try{const s=rg(n);return s?JSON.parse(s):(Zo("Failed to decode base64 JWT payload"),null)}catch(s){return Zo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function np(t){const e=eh(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&fC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Pa(t){const e=t.auth,n=await t.getIdToken(),r=await ro(t,Ca(e,{idToken:n}));he(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?X_(s.providerUserInfo):[],o=mC(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Wc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function pC(t){const e=Vt(t);await Pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function X_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){const n=await Y_(t,{},async()=>{const r=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await J_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ds(t.emulatorConfig.host)&&(c.credentials="include"),Q_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _C(t,e){return or(t,"POST","/v2/accounts:revokeToken",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):np(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=np(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await gC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ls;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new dC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hC(this,e)}reload(){return pC(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await ro(this,uC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:O,stsTokenManager:N}=n;he(p&&N,e,"internal-error");const k=Ls.fromJSON(this.name,N);he(typeof p=="string",e,"internal-error"),mr(r,e.name),mr(s,e.name),he(typeof m=="boolean",e,"internal-error"),he(typeof v=="boolean",e,"internal-error"),mr(i,e.name),mr(o,e.name),mr(l,e.name),mr(c,e.name),mr(u,e.name),mr(f,e.name);const M=new sn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:k,createdAt:u,lastLoginAt:f});return O&&Array.isArray(O)&&(M.providerData=O.map(L=>({...L}))),c&&(M._redirectEventId=c),M}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ls;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?X_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Ls;l.updateFromIdToken(r);const c=new sn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=new Map;function Wn(t){nr(t instanceof Function,"Expected a class definition");let e=rp.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rp.set(t,e),e)}/**
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
 */class Z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Z_.type="NONE";const sp=Z_;/**
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
 */function ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ea(this.userKey,s.apiKey,i),this.fullPersistenceKey=ea("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ca(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Us(Wn(sp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Wn(sp);const o=ea(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Ca(e,{idToken:f}).catch(()=>{});if(!m)break;p=await sn._fromGetAccountInfoResponse(e,m,f)}else p=sn._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Us(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Us(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iy(e))return"Blackberry";if(oy(e))return"Webos";if(ty(e))return"Safari";if((e.includes("chrome/")||ny(e))&&!e.includes("edge/"))return"Chrome";if(sy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function ey(t=At()){return/firefox\//i.test(t)}function ty(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ny(t=At()){return/crios\//i.test(t)}function ry(t=At()){return/iemobile/i.test(t)}function sy(t=At()){return/android/i.test(t)}function iy(t=At()){return/blackberry/i.test(t)}function oy(t=At()){return/webos/i.test(t)}function th(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yC(t=At()){return th(t)&&!!window.navigator?.standalone}function vC(){return pI()&&document.documentMode===10}function ay(t=At()){return th(t)||sy(t)||oy(t)||iy(t)||/windows phone/i.test(t)||ry(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e=[]){let n;switch(t){case"Browser":n=ip(At());break;case"Worker":n=`${ip(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class EC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function wC(t,e={}){return or(t,"GET","/v2/passwordPolicy",ir(t,e))}/**
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
 */const TC=6;class IC{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??TC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new op(this),this.idTokenSubscription=new op(this),this.beforeStateQueue=new EC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ca(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Lt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(Qn(this));const n=e?Vt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wC(this),n=new IC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _C(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ZS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ar(t){return Vt(t)}class op{constructor(e){this.auth=e,this.observer=null,this.addObserver=TI(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AC(t){dl=t}function cy(t){return dl.loadJS(t)}function RC(){return dl.recaptchaEnterpriseScript}function SC(){return dl.gapiScript}function CC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class PC{constructor(){this.enterprise=new kC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class kC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const DC="recaptcha-enterprise",uy="NO_RECAPTCHA";class NC{constructor(e){this.type=DC,this.auth=ar(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{cC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new lC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;tp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(uy)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new PC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&tp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=RC();c.length!==0&&(c+=l),cy(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function ap(t,e,n,r=!1,s=!1){const i=new NC(t);let o;if(s)o=uy;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ka(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ap(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ap(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t,e){const n=Ja(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(is(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function VC(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Wn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function xC(t,e,n){const r=ar(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=hy(e),{host:o,port:l}=MC(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(is(u,r.config.emulator)&&is(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ds(o)?(mu(`${i}//${o}${c}`),gu("Auth",!0)):LC()}function hy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MC(t){const e=hy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lp(o)}}}function lp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}async function UC(t,e){return or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){return vo(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}async function BC(t,e){return or(t,"POST","/v1/accounts:sendOobCode",ir(t,e))}async function jC(t,e){return BC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function HC(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends nh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ka(e,n,"signInWithPassword",FC);case"emailLink":return $C(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ka(e,r,"signUpPassword",UC);case"emailLink":return HC(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e){return vo(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="http://localhost";class us extends nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new us(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fs(e,n)}buildRequest(){const e={requestUri:zC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WC(t){const e=Ti(Ii(t)).link,n=e?Ti(Ii(e)).deep_link_id:null,r=Ti(Ii(t)).deep_link_id;return(r?Ti(Ii(r)).link:null)||r||n||e||t}class rh{constructor(e){const n=Ti(Ii(e)),r=n.apiKey??null,s=n.oobCode??null,i=qC(n.mode??null);he(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=WC(e);try{return new rh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rh.parseLink(n);return he(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}ti.PROVIDER_ID="password";ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Er extends Eo{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Eo{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Eo{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t,e){return vo(t,"POST","/v1/accounts:signUp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=cp(r);return new hs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=cp(r);return new hs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function cp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends xn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Da(e,n,r,s)}}function fy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(t,i,e,r):i})}async function KC(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hs._forOperation(t,"link",r)}/**
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
 */async function QC(t,e,n=!1){const{auth:r}=t;if(Lt(r.app))return Promise.reject(Qn(r));const s="reauthenticate";try{const i=await ro(t,fy(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=eh(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),hs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(t,e,n=!1){if(Lt(t.app))return Promise.reject(Qn(t));const r="signIn",s=await fy(t,r,e),i=await hs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function YC(t,e){return dy(ar(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(t){const e=ar(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JC(t,e,n){const r=ar(t);await ka(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",jC)}async function XC(t,e,n){if(Lt(t.app))return Promise.reject(Qn(t));const r=ar(t),o=await ka(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&py(t),c}),l=await hs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ZC(t,e,n){return Lt(t.app)?Promise.reject(Qn(t)):YC(Vt(t),ti.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&py(t),r})}function eP(t,e,n,r){return Vt(t).onIdTokenChanged(e,n,r)}function tP(t,e,n){return Vt(t).beforeAuthStateChanged(e,n)}function nP(t){return Vt(t).signOut()}const Na="__sak";/**
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
 */const rP=1e3,sP=10;class gy extends my{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ay(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);vC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gy.type="LOCAL";const iP=gy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function oP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ml(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await oP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ml.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=sh("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function lP(t){Pn().location.href=t}/**
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
 */function vy(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function cP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uP(){return navigator?.serviceWorker?.controller||null}function hP(){return vy()?self:null}/**
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
 */const Ey="firebaseLocalStorageDb",fP=1,Oa="firebaseLocalStorage",wy="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gl(t,e){return t.transaction([Oa],e?"readwrite":"readonly").objectStore(Oa)}function dP(){const t=indexedDB.deleteDatabase(Ey);return new wo(t).toPromise()}function Gc(){const t=indexedDB.open(Ey,fP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oa,{keyPath:wy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oa)?e(r):(r.close(),await dP(),e(await Gc()))})})}async function up(t,e,n){const r=gl(t,!0).put({[wy]:e,value:n});return new wo(r).toPromise()}async function pP(t,e){const n=gl(t,!1).get(e),r=await new wo(n).toPromise();return r===void 0?null:r.value}function hp(t,e){const n=gl(t,!0).delete(e);return new wo(n).toPromise()}const mP=800,gP=3;class Ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ml._getInstance(hP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await cP(),!this.activeServiceWorker)return;this.sender=new aP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await up(e,Na,"1"),await hp(e,Na),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>up(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gl(s,!1).getAll();return new wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ty.type="LOCAL";const _P=Ty;new yo(3e4,6e4);/**
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
 */function ih(t,e){return e?Wn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oh extends nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yP(t){return dy(t.auth,new oh(t),t.bypassAuthState)}function vP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),QC(n,new oh(t),t.bypassAuthState)}async function EP(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),KC(n,new oh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yP;case"linkViaPopup":case"linkViaRedirect":return EP;case"reauthViaPopup":case"reauthViaRedirect":return vP;default:Xt(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=new yo(2e3,1e4);async function TP(t,e,n){if(Lt(t.app))return Promise.reject(un(t,"operation-not-supported-in-this-environment"));const r=ar(t);K_(t,e,pl);const s=ih(r,n);return new br(r,"signInViaPopup",e,s).executeNotNull()}async function IP(t,e,n){const r=Vt(t);K_(r.auth,e,pl);const s=ih(r.auth,n);return new br(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class br extends Iy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wP.get())};e()}}br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP="pendingRedirect",ta=new Map;class AP extends Iy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ta.get(this.auth._key());if(!e){try{const r=await RP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ta.set(this.auth._key(),e)}return this.bypassAuthState||ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RP(t,e){const n=PP(e),r=CP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function SP(t,e){ta.set(t._key(),e)}function CP(t){return Wn(t._redirectPersistence)}function PP(t){return ea(bP,t.config.apiKey,t.name)}async function kP(t,e,n=!1){if(Lt(t.app))return Promise.reject(Qn(t));const r=ar(t),s=ih(r,e),o=await new AP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=600*1e3;class NP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!by(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(un(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DP&&this.cachedEventUids.clear(),this.cachedEventUids.has(fp(e))}saveEventToCache(e){this.cachedEventUids.add(fp(e)),this.lastProcessedEventTime=Date.now()}}function fp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function by({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function OP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return by(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e={}){return or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MP=/^https?/;async function LP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VP(t);for(const n of e)try{if(UP(n))return}catch{}Xt(t,"unauthorized-domain")}function UP(t){const e=qc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MP.test(n))return!1;if(xP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const FP=new yo(3e4,6e4);function dp(){const t=Pn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BP(t){return new Promise((e,n)=>{function r(){dp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dp(),n(un(t,"network-request-failed"))},timeout:FP.get()})}if(Pn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Pn().gapi?.load)r();else{const s=CC("iframefcb");return Pn()[s]=()=>{gapi.load?r():n(un(t,"network-request-failed"))},cy(`${SC()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw na=null,e})}let na=null;function jP(t){return na=na||BP(t),na}/**
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
 */const $P=new yo(5e3,15e3),HP="__/auth/iframe",zP="emulator/auth/iframe",qP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GP(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zu(e,zP):`https://${t.config.authDomain}/${HP}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=WP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ho(r).slice(1)}`}async function KP(t){const e=await jP(t),n=Pn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:GP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=Pn().setTimeout(()=>{i(o)},$P.get());function c(){Pn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const QP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YP=500,JP=600,XP="_blank",ZP="http://localhost";class pp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function e0(t,e,n,r=YP,s=JP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...QP,width:r.toString(),height:s.toString(),top:i,left:o},u=At().toLowerCase();n&&(l=ny(u)?XP:n),ey(u)&&(e=e||ZP,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[v,O])=>`${m}${v}=${O},`,"");if(yC(u)&&l!=="_self")return t0(e||"",l),new pp(null);const p=window.open(e||"",l,f);he(p,t,"popup-blocked");try{p.focus()}catch{}return new pp(p)}function t0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const n0="__/auth/handler",r0="emulator/auth/handler",s0=encodeURIComponent("fac");async function mp(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Eo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${s0}=${encodeURIComponent(c)}`:"";return`${i0(t)}?${ho(l).slice(1)}${u}`}function i0({config:t}){return t.emulator?Zu(t,r0):`https://${t.authDomain}/${n0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="webStorageSupport";class o0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yy,this._completeRedirectFn=kP,this._overrideRedirectResult=SP}async _openPopup(e,n,r,s){nr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await mp(e,n,r,qc(),s);return e0(e,i,sh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await mp(e,n,r,qc(),s);return lP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KP(e),r=new NP(e);return n.register("authEvent",s=>(he(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sc,{type:sc},s=>{const i=s?.[0]?.[sc];i!==void 0&&n(!!i),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ay()||ty()||th()}}const a0=o0;var gp="@firebase/auth",_p="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function u0(t){os(new Mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ly(t)},u=new bC(r,s,i,c);return VC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new Mr("auth-internal",e=>{const n=ar(e.getProvider("auth").getImmediate());return(r=>new l0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(gp,_p,c0(t)),In(gp,_p,"esm2020")}/**
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
 */const h0=300,f0=ag("authIdTokenMaxAge")||h0;let yp=null;const d0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>f0)return;const s=n?.token;yp!==s&&(yp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _l(t=vu()){const e=Ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OC(t,{popupRedirectResolver:a0,persistence:[_P,iP,yy]}),r=ag("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=d0(i.toString());tP(n,o,()=>o(n.currentUser)),eP(n,l=>o(l))}}const s=sg("auth");return s&&xC(n,`http://${s}`),n}function p0(){return document.getElementsByTagName("head")?.[0]??document}AC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",p0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});u0("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="firebasestorage.googleapis.com",m0="storageBucket",g0=120*1e3,_0=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends xn{constructor(e,n,r=0){super(ic(e),`Firebase Storage: ${n} (${ic(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Mn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ic(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function ic(t){return"storage/"+t}function y0(){const t="An unknown error occurred, please check the error payload for server response.";return new Mn(Vn.UNKNOWN,t)}function v0(){return new Mn(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function E0(){return new Mn(Vn.CANCELED,"User canceled the upload/download.")}function w0(t){return new Mn(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function T0(t){return new Mn(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vp(t){return new Mn(Vn.INVALID_ARGUMENT,t)}function Ry(){return new Mn(Vn.APP_DELETED,"The Firebase app was deleted.")}function I0(t){return new Mn(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=on.makeFromUrl(e,n)}catch{return new on(e,"")}if(r.path==="")return r;throw T0(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),O={bucket:1,path:3},N=n===Ay?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",M=new RegExp(`^https?://${N}/${s}/${k}`,"i"),D=[{regex:l,indices:c,postModify:i},{regex:v,indices:O,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<D.length;S++){const j=D[S],Z=j.regex.exec(e);if(Z){const I=Z[j.indices.bucket];let y=Z[j.indices.path];y||(y=""),r=new on(I,y),j.postModify(r);break}}if(r==null)throw w0(e);return r}}class b0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...k){u||(u=!0,e.apply(null,k))}function p(k){s=setTimeout(()=>{s=null,t(v,c())},k)}function m(){i&&clearTimeout(i)}function v(k,...M){if(u){m();return}if(k){m(),f.call(null,k,...M);return}if(c()||o){m(),f.call(null,k,...M);return}r<64&&(r*=2);let D;l===1?(l=2,D=0):D=(r+Math.random())*1e3,p(D)}let O=!1;function N(k){O||(O=!0,m(),!u&&(s!==null?(k||(l=2),clearTimeout(s),p(0)):k||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function R0(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t){return t!==void 0}function Ep(t,e,n,r){if(r<e)throw vp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw vp(`Invalid value for '${t}'. Expected ${n} or less.`)}function C0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Va;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Va||(Va={}));/**
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
 */function P0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n,r,s,i,o,l,c,u,f,p,m=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,N)=>{this.resolve_=O,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new $o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Va.NO_ERROR,c=i.getStatus();if(!l||P0(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Va.ABORT;r(!1,new $o(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new $o(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());S0(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=y0();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ry():E0();o(c)}else{const c=v0();o(c)}};this.canceled_?n(!1,new $o(!1,null,!0)):this.backoffId_=A0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&R0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $o{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function D0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function N0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function O0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function V0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function x0(t,e,n,r,s,i,o=!0,l=!1){const c=C0(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return O0(f,e),D0(f,n),N0(f,i),V0(f,r),new k0(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function L0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class xa{constructor(e,n){this._service=e,n instanceof on?this._location=n:this._location=on.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xa(e,n)}get root(){const e=new on(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return L0(this._location.path)}get storage(){return this._service}get parent(){const e=M0(this._location.path);if(e===null)return null;const n=new on(this._location.bucket,e);return new xa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw I0(e)}}function wp(t,e){const n=e?.[m0];return n==null?null:on.makeFromBucketSpec(n,t)}function U0(t,e,n,r={}){t.host=`${e}:${n}`;const s=ds(e);s&&(mu(`https://${t.host}/b`),gu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:lg(i,t.app.options.projectId))}class F0{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Ay,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=g0,this._maxUploadRetryTime=_0,this._requests=new Set,s!=null?this._bucket=on.makeFromBucketSpec(s,this._host):this._bucket=wp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=on.makeFromBucketSpec(this._url,e):this._bucket=wp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ep("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ep("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xa(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new b0(Ry());{const o=x0(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Tp="@firebase/storage",Ip="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="storage";function B0(t=vu(),e){t=Vt(t);const r=Ja(t,Sy).getImmediate({identifier:e}),s=ig("storage");return s&&j0(r,...s),r}function j0(t,e,n,r={}){U0(t,e,n,r)}function $0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new F0(n,r,s,e,ps)}function H0(){os(new Mr(Sy,$0,"PUBLIC").setMultipleInstances(!0)),In(Tp,Ip,""),In(Tp,Ip,"esm2020")}H0();const z0={apiKey:"AIzaSyA88mxzUStbuMFKNr9Q0OODtHXmpyuqvBY",authDomain:"findyourfit-93e9f.firebaseapp.com",projectId:"findyourfit-93e9f",storageBucket:"findyourfit-93e9f.firebasestorage.app",messagingSenderId:"715690823951",appId:"1:715690823951:web:f3af86677f7d990c55ae7a",measurementId:"G-2GTC9GRYRL"},ah=hg(z0),Tt=NS(ah),En=_l(ah);B0(ah);const Zt=Hw("user",{state:()=>({userData:null,moodData:null,journalData:null,therapists:null}),actions:{async fetchUserData(){const t=En.currentUser;if(!t)return;const e=Nt(Tt,"users",t.uid),n=await Ms(e);n.exists()&&(this.userData=n.data(),this.userData.streak||(this.userData.streak={count:1,lastUpdate:Cn()},await cn(e,this.userData,{merge:!0})),await this.updateStreak(),await this.getMood(),await this.getJournalEntries(),await this.getTherapists())},setUserData(t){this.userData=t},setMoodData(t){this.moodData=t},async updateStreak(){const t=En.currentUser;if(!t||!this.userData?.streak)return;const{count:e,lastUpdate:n}=this.userData.streak;if(!n||typeof n.toDate!="function"){this.userData.streak={count:1,lastUpdate:Cn()},await cn(Nt(Tt,"users",t.uid),this.userData,{merge:!0});return}const r=n.toDate(),s=new Date;this.isSameDay(r,s)||(this.isYesterday(r,s)?this.userData.streak.count=e+1:this.userData.streak.count=1,this.userData.streak.lastUpdate=Cn(),await cn(Nt(Tt,"users",t.uid),this.userData,{merge:!0}))},isSameDay(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()},isYesterday(t){const e=t,n=new Date,r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate())-r)/(1e3*60*60*24)===1},async getMood(){const t=En.currentUser;if(!t)return;const e=Nt(Tt,"mood",t.uid),n=await Ms(e);n.exists()&&(this.moodData=n.data())},async getJournalEntries(){const t=En.currentUser;if(!t)return;const e=Nt(Tt,"journals",t.uid),n=await Ms(e);if(n.exists()){const r=n.data(),s=Object.entries(r).sort((i,o)=>Number(o[0])-Number(i[0])).map(([i,o])=>({id:i,...o}));this.journalData=s}},async getTherapists(){const t=[];return(await GS(DS(Tt,"therapists"))).forEach(n=>{t.push({id:n.id,...n.data()})}),this.therapists=t,this.therapists}}}),fn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},q0={class:"modal_holder"},W0={class:"modal_heading_holder inter font_size_xs"},G0=["innerHTML"],K0={__name:"errorModal",props:{errorMessage:{type:String,required:!0}},setup(t){return(e,n)=>(Q(),re("div",{class:"modal_overlay",onClick:n[1]||(n[1]=du(r=>e.$emit("close"),["self"])),role:"dialog","aria-modal":"true"},[C("div",q0,[C("div",W0,[n[2]||(n[2]=C("span",null," Attention!",-1)),C("button",{class:"modal_close_button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×")]),C("div",{class:"modal_content_holder inter font_size_xs",innerHTML:t.errorMessage},null,8,G0)])]))}},ni=fn(K0,[["__scopeId","data-v-b33337de"]]),Q0={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},Y0={class:"modal_holder"},J0={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},X0={class:"modal_content_holder inter font_size_xs"},Z0=["value"],ek=["value"],tk={__name:"userInfoModal",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),r=Qa(),s=t,i=ne([]),o=ne(""),l=ne(""),c=ne(""),u=ne(""),f=ne(""),p=ne([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),m=ne(!1),v=ne("");sr(async()=>{const D=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();i.value=D.sort((S,j)=>S.name.common.localeCompare(j.name.common))});const O=L=>/^\d{10}$/.test(L),N=L=>{if(!/^\d{4}\/\d{2}\/\d{2}$/.test(L))return!1;const[D,S,j]=L.split("/").map(Number),Z=new Date(D,S-1,j);return Z.getFullYear()===D&&Z.getMonth()===S-1&&Z.getDate()===j},k=async()=>{if(_l().currentUser,v.value="",m.value=!1,!O(c.value)){v.value="Contact Number must be a valid 10-digit number.",m.value=!0;return}if(!N(u.value)){v.value="Date of Birth must be in the format yyyy/mm/dd.",m.value=!0;return}const D={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:s.globalUser.email,country:o.value,gender:f.value},streak:{count:1,lastUpdate:Cn()},loginDate:new Date().toISOString(),uid:s.globalUser.uid};await cn(Nt(Tt,"users",s.globalUser.uid),D),n.setUserData(D),r.push({name:"Navigation"})},M=()=>{m.value=!1,v.value=""};return(L,D)=>(Q(),re("div",Q0,[C("div",Y0,[C("div",J0,[D[6]||(D[6]=C("span",{style:{width:"80%"}},"User Information",-1)),C("button",{class:"modal_close_button",onClick:D[0]||(D[0]=S=>L.$emit("close"))},"×")]),C("div",X0,[D[10]||(D[10]=C("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),C("form",{class:"modal_form_holder",onSubmit:du(k,["prevent"])},[We(C("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":D[1]||(D[1]=S=>l.value=S),required:""},null,512),[[Ot,l.value]]),We(C("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":D[2]||(D[2]=S=>c.value=S),required:""},null,512),[[Ot,c.value]]),We(C("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":D[3]||(D[3]=S=>u.value=S),required:""},null,512),[[Ot,u.value]]),We(C("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":D[4]||(D[4]=S=>f.value=S)},[D[7]||(D[7]=C("option",{disabled:"",value:""},"Please select one",-1)),(Q(!0),re(Ce,null,ut(p.value,S=>(Q(),re("option",{key:S.value,value:S.value},ve(S.text),9,Z0))),128))],512),[[Cr,f.value]]),We(C("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":D[5]||(D[5]=S=>o.value=S),id:"country"},[D[8]||(D[8]=C("option",{disabled:"",value:""},"Select your country",-1)),(Q(!0),re(Ce,null,ut(i.value,S=>(Q(),re("option",{key:S.cca3,value:S.cca3},ve(S.name.common),9,ek))),128))],512),[[Cr,o.value]]),D[9]||(D[9]=C("button",{type:"submit",class:"modal_button inter font_size_xs"},"Confirm",-1))],32)])]),m.value?(Q(),kt(ni,{key:0,errorMessage:v.value,onClose:M},null,8,["errorMessage"])):Ft("",!0)]))}},nk=fn(tk,[["__scopeId","data-v-518c205f"]]),rk={class:"login_page"},sk={class:"login_page_content"},ik={class:"login_page_form"},ok={class:"login_page_form_fields"},ak=["type"],lk={class:"show_password_toggle inter font_size_xs"},ck={class:"login_page_toggle_register inter font_size_xs"},uk={__name:"loginRegister",setup(t){const e=Zt(),n=Qa(),r=ne("password"),s=ne(null),i=ne(""),o=ne(""),l=ne("login"),c=ne(!1),u=ne(""),f=ne(!1),p=new zn;p.addScope("https://www.googleapis.com/auth/contacts.readonly");const m=()=>{r.value=r.value==="password"?"text":"password"},v=()=>{l.value=l.value==="login"?"register":"login"},O=S=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(S),N=()=>{if(!i.value){u.value="Please enter your email to reset your password!",c.value=!0;return}JC(En,i.value).then(()=>{u.value="An email has been sent to reset your password!",c.value=!0})},k=S=>{const j=S.toDate(),Z=new Date,I=new Date(Z.getFullYear(),Z.getMonth(),Z.getDate()),y=new Date(I);return y.setDate(I.getDate()-1),j>=y&&j<I},M=async S=>{S.streak&&(k(S.streak.lastUpdate)?S.streak.count+=1:S.streak.count=1,S.streak.lastUpdate=Cn(),S.loginDate=Cn(),await cn(Nt(Tt,"users",S.uid),S))},L=async()=>{try{const j=(await TP(En,p)).user;if(j){const Z=Nt(Tt,"users",j.uid),I=await Ms(Z);if(I.exists()){const y=I.data();y&&await M(y)}}n.push({name:"Navigation"})}catch(S){console.log(S.message),u.value="Google login failed!",c.value=!0}},D=async()=>{try{if(u.value="",c.value=!1,!O(i.value)){u.value="Invalid email format!",c.value=!0;return}if(l.value==="register"){const j=(await XC(En,i.value,o.value)).user;try{await IP(j,p)}catch{}s.value={uid:j.uid,email:j.email},f.value=!0}else{const j=(await ZC(En,i.value,o.value)).user,Z=Nt(Tt,"users",j.uid),I=await Ms(Z);if(I.exists()){const y=I.data();y&&(await M(y),e.setUserData(y),n.push({name:"Navigation"}))}}}catch(S){S.code==="auth/invalid-credential"?u.value="Invalid login details.":S.code==="auth/email-already-in-use"?u.value="Email already in use.":u.value="An unexpected error occurred.",c.value=!0}};return(S,j)=>(Q(),re("div",rk,[C("div",sk,[j[4]||(j[4]=C("div",{class:"login_page_intro inter font_size_xs"},[C("div",{class:"login_page_intro_text"},[C("div",{class:"font_size_m licorice_regular"},"Welcome to Finding Your Fit"),C("br"),C("br"),Dt(" A space designed to help you understand yourself better, build emotional balance, and grow into the life that fits you best. Take a moment to reconnect, reflect, and start working toward your goals — one step at a time. ")])],-1)),C("div",ik,[C("form",ok,[We(C("input",{class:"login_page_input inter font_size_xs",type:"text",placeholder:"Email","onUpdate:modelValue":j[0]||(j[0]=Z=>i.value=Z)},null,512),[[Ot,i.value]]),We(C("input",{class:"login_page_password inter font_size_xs",type:r.value,placeholder:"Password","onUpdate:modelValue":j[1]||(j[1]=Z=>o.value=Z)},null,8,ak),[[Cw,o.value]]),C("div",lk,[C("label",null,[C("input",{type:"checkbox",onChange:m},null,32),j[3]||(j[3]=Dt(" Show Password ",-1))])])]),C("button",{class:"login_page_button inter font_size_xs",onClick:D},ve(l.value==="login"?"Login":"Register"),1),C("div",{class:"login_page_forgot_password inter font_size_xs",onClick:N},ve(l.value==="login"?"Forgot Password?":""),1)]),C("div",{class:"login_page_social_login"},[C("div",{class:"login_page_social_button",onClick:L})]),C("div",ck,[C("u",{onClick:v},ve(l.value==="login"?"Register":"Login"),1)])]),c.value?(Q(),kt(ni,{key:0,errorMessage:u.value,onClose:j[2]||(j[2]=Z=>c.value=!1)},null,8,["errorMessage"])):Ft("",!0),f.value&&s.value?(Q(),kt(nk,{key:1,globalUser:s.value},null,8,["globalUser"])):Ft("",!0)]))}},hk=fn(uk,[["__scopeId","data-v-f1fb9b1e"]]),bp=[{content:"Success is not final, failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},{content:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{content:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"You are never too old to set another goal or to dream a new dream.",author:"C.S. Lewis"},{content:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"Don’t watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"The only limit to our realization of tomorrow is our doubts of today.",author:"Franklin D. Roosevelt"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Don’t wait. The time will never be just right.",author:"Napoleon Hill"},{content:"Believe in yourself and all that you are.",author:"Christian D. Larson"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Success is what comes after you stop making excuses.",author:"Luis Galarza"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Do what you love, love what you do.",author:"Unknown"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Motivation is what gets you started. Habit is what keeps you going.",author:"Jim Ryun"},{content:"Don’t let fear decide your future.",author:"Shalane Flanagan"},{content:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"Do one thing every day that scares you.",author:"Eleanor Roosevelt"},{content:"The best way to predict the future is to invent it.",author:"Alan Kay"},{content:"Difficult roads often lead to beautiful destinations.",author:"Unknown"},{content:"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",author:"Chantal Sutherland"},{content:"If it doesn’t challenge you, it won’t change you.",author:"Fred DeVito"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"The expert in anything was once a beginner.",author:"Helen Hayes"},{content:"Don’t count the days, make the days count.",author:"Muhammad Ali"},{content:"The harder the battle, the sweeter the victory.",author:"Les Brown"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"You don’t have to see the whole staircase, just take the first step.",author:"Martin Luther King Jr."},{content:"Small daily improvements over time lead to stunning results.",author:"Robin Sharma"},{content:"Don’t let what you cannot do interfere with what you can do.",author:"John Wooden"},{content:"The only limit is the one you set yourself.",author:"Felix Baumgartner"},{content:"Great things are done by a series of small things brought together.",author:"Vincent Van Gogh"},{content:"Your dream doesn’t have an expiration date. Take a deep breath and try again.",author:"KT Witten"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"You are braver than you believe, stronger than you seem, and smarter than you think.",author:"A.A. Milne"},{content:"Work until you no longer have to introduce yourself.",author:"Unknown"},{content:"The best revenge is massive success.",author:"Frank Sinatra"},{content:"Your only limit is your mind.",author:"Unknown"},{content:"Stop being afraid of what could go wrong and start being excited about what could go right.",author:"Unknown"},{content:"Do not wait to strike till the iron is hot; but make it hot by striking.",author:"William Butler Yeats"},{content:"Don’t let perfectionism get in the way of progress.",author:"Unknown"},{content:"Great minds discuss ideas; average minds discuss events; small minds discuss people.",author:"Eleanor Roosevelt"},{content:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Do what you can, with what you have, where you are.",author:"Theodore Roosevelt"},{content:"Success is not about the destination, it’s about the journey.",author:"Zig Ziglar"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"A year from now you may wish you had started today.",author:"Karen Lamb"},{content:"Don’t stop until you’re proud.",author:"Unknown"},{content:"Dream big. Start small. Act now.",author:"Robin Sharma"},{content:"Hard work beats talent when talent doesn’t work hard.",author:"Tim Notke"},{content:"Stay positive, work hard, make it happen.",author:"Unknown"},{content:"Your time is limited, don’t waste it living someone else’s life.",author:"Steve Jobs"},{content:"The difference between ordinary and extraordinary is that little extra.",author:"Jimmy Johnson"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Success doesn’t come to you, you go to it.",author:"Marva Collins"},{content:"A river cuts through rock not because of its power, but because of its persistence.",author:"Jim Watkins"},{content:"Discipline is the bridge between goals and accomplishment.",author:"Jim Rohn"},{content:"Do what is right, not what is easy nor what is popular.",author:"Unknown"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Don’t limit yourself. Many people limit themselves to what they think they can do.",author:"Mary Kay Ash"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Success is the progressive realization of a worthy goal or ideal.",author:"Earl Nightingale"},{content:"To succeed in life, you need two things: ignorance and confidence.",author:"Mark Twain"},{content:"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",author:"Mary Anne Radmacher"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"Don’t let small minds convince you that your dreams are too big.",author:"Unknown"},{content:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",author:"Pelé"},{content:"The best way out is always through.",author:"Robert Frost"},{content:"Failure is simply the opportunity to begin again, this time more intelligently.",author:"Henry Ford"},{content:"Don’t wish it were easier. Wish you were better.",author:"Jim Rohn"},{content:"The mind is everything. What you think you become.",author:"Buddha"},{content:"When you feel like quitting, remember why you started.",author:"Unknown"},{content:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},{content:"Don’t be afraid to give up the good to go for the great.",author:"John D. Rockefeller"},{content:"Do not be embarrassed by your failures, learn from them and start again.",author:"Richard Branson"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Small deeds done are better than great deeds planned.",author:"Peter Marshall"},{content:"Act as if what you do makes a difference. It does.",author:"William James"},{content:"Success is not how high you have climbed, but how you make a positive difference to the world.",author:"Roy T. Bennett"},{content:"Your future is created by what you do today, not tomorrow.",author:"Robert Kiyosaki"},{content:"The secret of success is to do the common thing uncommonly well.",author:"John D. Rockefeller Jr."},{content:"What seems to us as bitter trials are often blessings in disguise.",author:"Oscar Wilde"},{content:"The only place where success comes before work is in the dictionary.",author:"Vidal Sassoon"},{content:"Happiness is not something ready-made. It comes from your own actions.",author:"Dalai Lama"},{content:"Opportunities multiply as they are seized.",author:"Sun Tzu"},{content:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",author:"William James"},{content:"Don’t be afraid to start over. It’s a chance to build something better.",author:"Unknown"},{content:"Success isn’t always about greatness. It’s about consistency.",author:"Dwayne Johnson"},{content:"You are confined only by the walls you build yourself.",author:"Andrew Murphy"},{content:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t let the fear of losing be greater than the excitement of winning.",author:"Robert Kiyosaki"},{content:"You can’t cross the sea merely by standing and staring at the water.",author:"Rabindranath Tagore"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"The journey of a thousand miles begins with one step.",author:"Lao Tzu"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Jerry Dunn"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"It’s not whether you get knocked down, it’s whether you get up.",author:"Vince Lombardi"},{content:"Everything you can imagine is real.",author:"Pablo Picasso"},{content:"Success is not in never falling, but in rising every time we fall.",author:"Confucius"},{content:"Don’t wait for opportunity. Create it.",author:"George Bernard Shaw"},{content:"The best dreams happen when you’re awake.",author:"Cherie Gilderbloom"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"What you do today can improve all your tomorrows.",author:"Ralph Marston"}];function fk(){const t=Math.floor(Math.random()*bp.length);return bp[t]}const dk="/assets/my_therapist-BGpDoE1u.png",pk="/assets/my_journal-ByAOnFF2.png",mk="/assets/journal-BcWmOkN8.png",gk="/assets/my_courses-DAreBNF0.png",_k="/assets/therapist-sZYqYBaF.png",yk="/assets/mood_track-DScXBvTj.png",vk={class:"home_container"},Ek={class:"greeting_section licorice_regular font_size_m"},wk={class:"checkin_section"},Tk={class:"feeling_section"},Ik={class:"inspiration_section"},bk={class:"quote_text inter font_size_xxs"},Ak={class:"offer_section"},Rk={class:"offer_list"},Sk={class:"offer_icon_wrapper"},Ck={class:"offer_content_wrapper"},Pk={class:"offer_title inter font_size_xxs"},kk={class:"offer_description inter font_size_xxs"},Dk={__name:"home",setup(t){const e=Zt(),n=ne({content:"",author:""});ne(!1);const r=$e(()=>e.userData?.personalInfo.name||"");$e(()=>[{label:"My Therapist",url:dk},{label:"Journal Entry",url:pk},{label:"Explore Courses",url:gk}]);const s=$e(()=>[{label:"Expert support at your fingertips",content:"Find and connect with qualified therapists specializing in various areas.",icon:_k},{label:"Personalized mood tracking",content:"Log your daily mood to visualize trends, identify triggers, and gain insights.",icon:yk},{label:"Journaling",content:"A private space for self-reflection, prompts, and gain thoughts.",icon:mk}]);sr(()=>{console.log("Home mounted"),n.value=fk()});const i=()=>{const o=new Date().getHours();return o<12?"morning":o<18?"afternoon":"evening"};return(o,l)=>(Q(),re("div",vk,[C("div",Ek," Good "+ve(i())+", "+ve(r.value)+"! ",1),C("div",wk,[C("div",Tk,[l[1]||(l[1]=C("div",{class:"feeling_heading inter font_size_xs"},[C("b",null,"How are you feeling today?")],-1)),l[2]||(l[2]=C("div",{class:"feeling_image"},null,-1)),C("div",{class:"checkin_button inter font_size_xxs",onClick:l[0]||(l[0]=c=>o.$emit("setPage","mood"))}," Check in now ")])]),C("div",Ik,[l[3]||(l[3]=C("div",{class:"inspiration_heading inter font_size_xxs"},[C("b",null,"Inspiration")],-1)),C("div",bk,ve(n.value.content),1)]),C("div",Ak,[l[4]||(l[4]=C("div",{class:"offer_heading inter font_size_xs"},[C("b",null,"What we offer")],-1)),C("div",Rk,[(Q(!0),re(Ce,null,ut(s.value,c=>(Q(),re("div",{class:"offer_card",key:c.label},[C("div",Sk,[C("div",{class:"feature_icon",style:rs({backgroundImage:`url(${c.icon})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4)]),C("div",Ck,[C("div",Pk,[C("b",null,ve(c.label),1)]),C("div",kk,ve(c.content),1)])]))),128))])])]))}},Cy=fn(Dk,[["__scopeId","data-v-b59b103f"]]),Nk={class:"loading_page_holder"},Ok={__name:"loadingPage",setup(t){const e=Zt(),n=Qa();return sr(()=>{e.userData?.uid?n.push({name:"Navigation"}):n.push({name:"Login"})}),(r,s)=>(Q(),re("div",Nk))}},Vk=fn(Ok,[["__scopeId","data-v-5093d853"]]),xk={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},Mk={class:"modal_holder"},Lk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},Uk={class:"modal_content_holder inter font_size_xs"},Fk=["value"],Bk=["value"],oc="editProfileForm",Ap={__name:"profileEdit",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),r=e,s=t,i=ne([]),o=ne(""),l=ne(""),c=ne(""),u=ne(""),f=ne(""),p=ne(""),m=ne(!1),v=[{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}];sr(async()=>{const D=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3")).json();i.value=D.sort((j,Z)=>j.name.common.localeCompare(Z.name.common));const S=JSON.parse(localStorage.getItem(oc));S&&(l.value=S.nameSurname||"",c.value=S.contactNumber||"",u.value=S.dateOfBirth||"",f.value=S.selectedOption||"",o.value=S.selectedCountry||"")}),Sr([l,c,u,f,o],()=>{localStorage.setItem(oc,JSON.stringify({nameSurname:l.value,contactNumber:c.value,dateOfBirth:u.value,selectedOption:f.value,selectedCountry:o.value}))},{deep:!0});function O(L){return/^\d{10}$/.test(L)}function N(L){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(L))return!1;const[S,j,Z]=L.split("/").map(Number),I=new Date(S,j-1,Z);return I.getFullYear()===S&&I.getMonth()===j-1&&I.getDate()===Z}const k=async()=>{const D=_l().currentUser;if(m.value=!1,p.value="",!O(c.value)){p.value="Contact Number must be a valid 10-digit number.",m.value=!0;return}if(!N(u.value)){p.value="Date of Birth must be in the format yyyy/mm/dd.",m.value=!0;return}const S=s.globalUser.userData,j={personalInfo:{name:l.value,contactNumber:c.value,dateOfBirth:u.value,email:S.email||D.email,gender:f.value,country:o.value},uid:S.uid||D.uid,loginDate:S.loginDate,streak:S.streak,profileEdited:Cn()};n.setUserData(j),await cn(Nt(Tt,"users",j.uid),j),localStorage.removeItem(oc),r("close")},M=()=>{m.value=!1,p.value=""};return(L,D)=>(Q(),re("div",xk,[C("div",Mk,[C("div",Lk,[D[6]||(D[6]=C("span",{style:{width:"80%"}},"Edit User Information",-1)),C("button",{class:"modal_close_button",onClick:D[0]||(D[0]=S=>L.$emit("close"))},"×")]),C("div",Uk,[D[10]||(D[10]=C("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),C("form",{class:"modal_form_holder",onSubmit:du(k,["prevent"])},[We(C("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":D[1]||(D[1]=S=>l.value=S),required:""},null,512),[[Ot,l.value]]),We(C("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":D[2]||(D[2]=S=>c.value=S),required:""},null,512),[[Ot,c.value]]),We(C("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":D[3]||(D[3]=S=>u.value=S),required:""},null,512),[[Ot,u.value]]),We(C("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":D[4]||(D[4]=S=>f.value=S)},[D[7]||(D[7]=C("option",{disabled:"",value:""},"Please select one",-1)),(Q(),re(Ce,null,ut(v,S=>C("option",{key:S.value,value:S.value},ve(S.text),9,Fk)),64))],512),[[Cr,f.value]]),We(C("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":D[5]||(D[5]=S=>o.value=S)},[D[8]||(D[8]=C("option",{disabled:"",value:""},"Select your country",-1)),(Q(!0),re(Ce,null,ut(i.value,S=>(Q(),re("option",{key:S.cca3,value:S.cca3},ve(S.name.common),9,Bk))),128))],512),[[Cr,o.value]]),D[9]||(D[9]=C("button",{type:"submit",class:"modal_button inter font_size_xs"},"Confirm",-1))],32)])]),m.value?(Q(),kt(ni,{key:0,errorMessage:p.value,onClose:M},null,8,["errorMessage"])):Ft("",!0)]))}},Py="/assets/brown_man-DU8HBBmE.png",ky="/assets/blonde_man-Br_WNAu2.png",Dy="/assets/ginger_man-D_7vVZja.png",Ny="/assets/black_man-DZoPS0-N.png",Oy="/assets/brunette_woman-C5YdWLXO.png",Vy="/assets/blonde_woman-IP-2iqnM.png",xy="/assets/ginger_woman-5AupqmXa.png",My="/assets/black_woman-QP95zNq-.png",Kc="/assets/none-BOBk4slU.png",jk={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},$k={class:"modal_holder"},Hk={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},zk={class:"modal_content_holder inter font_size_xs"},qk=["onClick"],Wk=["onClick"],Gk={__name:"profileAvatar",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=Zt(),r=$e(()=>[{label:"Brown Hair",url:Py,ref:"brown_man"},{label:"Blonde Hair",url:ky,ref:"blonde_man"},{label:"Ginger Hair",url:Dy,ref:"ginger_man"},{label:"Black Hair",url:Ny,ref:"black_man"},{label:"Brown Hair Woman",url:Oy,ref:"brown_woman"},{label:"Blonde Hair Woman",url:Vy,ref:"blonde_woman"},{label:"Ginger Hair Woman",url:xy,ref:"ginger_woman"},{label:"Black Hair Woman",url:My,ref:"black_woman"},{label:"None",url:Kc,ref:"none"}]),s=e,i=t,o=ne("none"),l=u=>{o.value=u,localStorage.setItem("selectedAvatar",u)};sr(()=>{const u=localStorage.getItem("selectedAvatar");u&&(o.value=u)});const c=async()=>{const u=_l(),f=i.globalUser.userData,p=u.currentUser;await cn(Nt(Tt,"users",f.uid||p.uid),{profileAvatar:o.value,profileEdited:Cn()},{merge:!0}),n.userData.profileAvatar=o.value,localStorage.removeItem("selectedAvatar"),s("close")};return(u,f)=>(Q(),re("div",jk,[C("div",$k,[C("div",Hk,[f[1]||(f[1]=C("span",{style:{width:"80%"}},"Profile Avatar",-1)),C("button",{class:"modal_close_button",onClick:f[0]||(f[0]=p=>u.$emit("close"))},"×")]),C("div",zk,[(Q(!0),re(Ce,null,ut(r.value,p=>(Q(),re("div",{class:"modal_avatars_holder",key:p.ref},[p.ref===o.value?(Q(),re("div",{key:0,class:"modal_avatar_selected",onClick:m=>l(p.ref),style:rs({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,12,qk)):(Q(),re("div",{key:1,class:"modal_avatar",onClick:m=>l(p.ref),style:rs({backgroundImage:`url(${p.url})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,12,Wk))]))),128))]),C("button",{type:"submit",class:"modal_button inter font_size_xs",onClick:c}," Confirm ")])]))}},Rp=fn(Gk,[["__scopeId","data-v-f54a08c5"]]),Kk={class:"profile_container"},Qk={class:"profile_header"},Yk={class:"profile_edit_btn"},Jk={class:"profile_info"},Xk={class:"profile_avatar_wrapper"},Zk={class:"pfp_edit_button"},e1={class:"profile_user_details font_size_s inter"},t1={class:"font_size_xxs"},n1={class:"profile_stats"},r1={class:"profile_stat_top inter font_size_xs"},s1={key:0,class:"profile_stat_value"},i1={key:0},o1={key:1},a1={key:1,class:"profile_stat_value"},l1={class:"profile_stat_icon"},c1={class:"profile_stat_label inter font_size_xs"},u1={__name:"profile",setup(t){const e=Qa(),n=Zt(),r=ne(!1),s=ne(!1),i=ne(!1),o=ne(null),l={brown_man:Py,blonde_man:ky,ginger_man:Dy,black_man:Ny,brown_woman:Oy,blonde_woman:Vy,ginger_woman:xy,black_woman:My,none:Kc},c=$e(()=>{const D=n.userData?.profileAvatar||"none";return l[D]||Kc}),u=$e(()=>n.userData?.personalInfo.name||""),f=$e(()=>n.userData?.personalInfo.email||""),p=$e(()=>n.userData?.streak?.count||0),m=$e(()=>n.journalData.length||0),v=$e(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),O=ne([{label:"App Streak",value:p.value,icon:"fa fa-signal"},{label:"Journal Entries",value:m.value,icon:"fa fa-book"},{label:"Mood Trends",value:"",icon:"fas fa-chart-line"}]);sr(()=>{o.value=n.userData;const D=new Date().toISOString().split("T")[0];if(!n.moodData||!n.moodData[D])return;r.value=!0;const S=n.moodData[D];for(const j of v.value)if(j.ref===S.mood){O.value[2].value=j.icon;break}});const N=()=>{s.value=!0},k=async()=>{await nP(En),e.push({name:"Login"})},M=()=>{i.value=!0},L=D=>{console.log("Image selected:",D.target.files[0])};return(D,S)=>(Q(),re(Ce,null,[C("div",Kk,[C("div",Qk,[S[5]||(S[5]=C("div",{class:"profile_title font_size_s inter"},null,-1)),C("div",Yk,[C("i",{class:"fas fa-edit",onClick:S[0]||(S[0]=j=>N())}),C("i",{class:"fas fa-sign-out-alt",onClick:S[1]||(S[1]=j=>k())})])]),C("div",Jk,[C("div",Xk,[C("div",{class:"profile_avatar",style:rs({backgroundImage:`url(${c.value})`,backgroundSize:"100% 100%",backgroundPosition:"center center",backgroundRepeat:"no-repeat"})},null,4)]),C("div",Zk,[C("i",{class:"fas fa-edit",onClick:S[2]||(S[2]=j=>M())}),C("input",{type:"file",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:L},null,544)]),C("div",e1,[Dt(ve(u.value)+" ",1),C("span",t1,ve(f.value),1)])]),C("div",n1,[(Q(!0),re(Ce,null,ut(O.value,(j,Z)=>(Q(),re("div",{class:"profile_stat_card",key:Z},[C("div",r1,[j.label==="Mood Trends"?(Q(),re("div",s1,[r.value?(Q(),re("div",i1,[C("i",{class:Yn(j.value),style:{"font-size":"1.5rem"}},null,2),S[6]||(S[6]=Dt("  ",-1))])):(Q(),re("div",o1,[...S[7]||(S[7]=[C("i",{class:"far fa-meh",style:{"font-size":"1.5rem"}},null,-1),Dt("  ",-1)])]))])):(Q(),re("div",a1,ve(j.value),1)),C("div",l1,[C("i",{class:Yn(j.icon),style:{color:"#87bfba"}},null,2)])]),C("div",c1,ve(j.label),1)]))),128))])]),s.value?(Q(),kt(Ap,{key:0,onClose:S[3]||(S[3]=j=>s.value=!1),globalUser:Tn(n),viewPoint:Ap},null,8,["globalUser"])):Ft("",!0),i.value?(Q(),kt(Rp,{key:1,onClose:S[4]||(S[4]=j=>i.value=!1),globalUser:Tn(n),viewPoint:Rp},null,8,["globalUser"])):Ft("",!0)],64))}},Ly=fn(u1,[["__scopeId","data-v-029c0a0e"]]),h1={class:"journal_selection_holder inter font_size_xs"},f1=["onClick"],d1={key:0,class:"journal_entry_holder"},p1={class:"journal_entry_date_holder inter font_size_xs"},m1={class:"journal_entry_content_holder"},g1={key:1},_1={key:0,class:"journal_list_holder"},y1={class:"journal_list_heading inter font_size_sm"},v1={class:"journal_list_content inter font_size_xs"},E1={class:"journal_list_timestamp inter font_size_xxs"},w1={__name:"journal",emits:["close"],setup(t,{emit:e}){const n=e,r=Zt(),s=ne("journalEntry"),i=[{key:"journalEntry",label:"New Journal Entry",cornerClass:"right-rounded"},{key:"journalList",label:"Journal List",cornerClass:"left-rounded"}],o=ne(new Date().toDateString()),l=ne(new Date().toLocaleTimeString()),c=ne(""),u=ne(""),f=ne(!1),p=ne(""),m=N=>{s.value=N,o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString()},v=()=>{f.value=!1,p.value=""},O=async()=>{if(!c.value){f.value=!0,p.value="Please give a journal title.";return}if(!u.value){f.value=!0,p.value="Please give journal content.";return}const k={[Date.now()]:{journalEntryHeading:c.value,journalEntryContent:u.value,journalEntryLogged:Cn()}};try{await cn(Nt(Tt,"journals",r.userData.uid),k,{merge:!0}),f.value=!0,p.value="Your journal entry has been logged.",c.value="",u.value="",o.value=new Date().toDateString(),l.value=new Date().toLocaleTimeString(),n("close")}catch(M){console.error("Failed to save journal:",M),f.value=!0,p.value="Failed to save journal. Please try again."}};return(N,k)=>(Q(),re(Ce,null,[k[4]||(k[4]=C("div",{class:"journal_header_holder inter font_size_xs"}," My Journal ",-1)),C("div",h1,[(Q(),re(Ce,null,ut(i,M=>C("div",{key:M.key,class:Yn(["journal_selection",{active:s.value===M.key,[M.cornerClass]:!0}]),onClick:L=>m(M.key)},ve(M.label),11,f1)),64))]),s.value==="journalEntry"?(Q(),re("div",d1,[C("div",p1,[C("div",null,[Dt(ve(o.value)+" ",1),k[2]||(k[2]=C("br",null,null,-1)),Dt(" "+ve(l.value),1)])]),C("div",m1,[We(C("input",{placeholder:"Give us a title.",class:"journal_input inter font_size_xs","onUpdate:modelValue":k[0]||(k[0]=M=>c.value=M)},null,512),[[Ot,c.value]]),We(C("textarea",{placeholder:"What's weighing on your mind today? Or what's a small win?",class:"journal_textarea inter font_size_xs","onUpdate:modelValue":k[1]||(k[1]=M=>u.value=M)},null,512),[[Ot,u.value]])]),k[3]||(k[3]=C("br",null,null,-1)),C("div",{class:"save_button inter font_size_xxs",onClick:O}," Save "),f.value?(Q(),kt(ni,{key:0,errorMessage:p.value,onClose:v},null,8,["errorMessage"])):Ft("",!0)])):(Q(),re("div",g1,[Tn(r).journalData?(Q(),re("div",_1,[(Q(!0),re(Ce,null,ut(Tn(r).journalData,(M,L)=>(Q(),re("div",{key:L,class:"journal_list_item inter"},[C("div",y1,ve(M.journalEntryHeading),1),C("div",v1,ve(M.journalEntryContent),1),C("div",E1," Logged on: "+ve(new Date(M.journalEntryLogged.seconds*1e3).toLocaleString()),1)]))),128))])):Ft("",!0)]))],64))}},Uy=fn(w1,[["__scopeId","data-v-1863fd7a"]]),T1={class:"mood_tracker_holder"},I1={class:"mood_icons_holder"},b1=["onClick"],A1=["onClick"],R1={class:"influence_holder",style:{height:"25rem"}},S1={class:"influence_items_holder"},C1=["value"],P1={class:"influence_holder"},k1={__name:"mood",emits:["close"],setup(t,{emit:e}){const n=Zt(),r=e,s=$e(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),i=$e(()=>[{label:"Sleep Quality",ref:"sleep_quality"},{label:"Nutrition",ref:"nutrition"},{label:"Physical Activity",ref:"physical_activity"},{label:"Social Connection",ref:"social_connection"},{label:"Mindset",ref:"mindset"},{label:"Environment",ref:"environment"},{label:"None",ref:"none"}]),o=ne(!1),l=ne(""),c=ne([]),u=ne(""),f=ne("neutral"),p=O=>{f.value=O},m=async()=>{if(c.value.length===0){o.value=!0,l.value="Please select an influence.";return}const N={[new Date().toISOString().split("T")[0]]:{mood:f.value,influences:c.value,optional_notes:u.value,mood_logged:Cn()}};await cn(Nt(Tt,"mood",n.userData.uid),N,{merge:!0}),o.value=!0,l.value="Thank you for logging your mood. It will be taken into consideration.",n.setMoodData(N),r("close")},v=()=>{o.value=!1,l.value=""};return(O,N)=>(Q(),re(Ce,null,[C("div",T1,[N[6]||(N[6]=C("div",{class:"mood_heading_holder inter font_size_xs"},"How am I feeling today?",-1)),C("div",I1,[(Q(!0),re(Ce,null,ut(s.value,k=>(Q(),re("div",{class:"mood_icon_holder",key:k.ref},[f.value===k.ref?(Q(),re("div",{key:0,class:Yn(k.icon),style:{"font-size":"3rem",border:"0.2rem solid #87bfba",padding:"0.5rem","border-radius":"50%"},onClick:M=>p(k.ref)},null,10,b1)):(Q(),re("div",{key:1,class:Yn(k.icon),style:{"font-size":"3rem"},onClick:M=>p(k.ref)},null,10,A1))]))),128))]),C("div",R1,[N[4]||(N[4]=C("div",{class:"influence_heading_holder inter font_size_xs"},[C("b",null,"What might be influencing this?")],-1)),C("div",S1,[(Q(!0),re(Ce,null,ut(i.value,k=>(Q(),re("div",{class:"influence_item_holder inter font_size_xxs",key:k.ref,style:{height:"12%"}},[N[3]||(N[3]=Dt("  ",-1)),We(C("input",{type:"checkbox","onUpdate:modelValue":N[0]||(N[0]=M=>c.value=M),value:k.ref},null,8,C1),[[Mm,c.value]]),Dt(" "+ve(k.label),1)]))),128))])]),C("div",P1,[N[5]||(N[5]=C("div",{class:"influence_heading_holder inter font_size_xs"},[C("b",null,"Optional Notes")],-1)),We(C("textarea",{placeholder:"Write a few words about why you feel the way you feel",style:{width:"90%",height:"60%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":N[1]||(N[1]=k=>u.value=k)},null,512),[[Ot,u.value]])]),C("div",{class:"save_button inter font_size_xxs",onClick:N[2]||(N[2]=k=>m())},"Save")]),o.value?(Q(),kt(ni,{key:0,errorMessage:l.value,onClose:v},null,8,["errorMessage"])):Ft("",!0)],64))}},D1=fn(k1,[["__scopeId","data-v-ed625be9"]]),N1={key:0,class:"empty_therapy_list inter font_size_xs"},O1={key:1,class:"therapy_sign_up"},V1={key:0,class:"therapy_sign_up_step_1"},x1={class:"therapist_sign_up_form_holder"},M1=["value"],L1=["value"],U1=["value"],F1={key:1,style:{width:"100%",height:"100%"}},B1={key:0},j1={class:"therapist_item_holder"},$1={class:"contact_buttons_holder"},H1=["onClick"],z1=["onClick"],q1={key:1,class:"empty_therapy_list inter font_size_xs"},W1={key:2,style:{width:"100%",height:"100%"}},G1={class:"therapist_item_holder"},K1={key:2,class:"sign_up_button_holder inter font_size_s"},Q1={key:3,class:"verify_therapists_holder inter font_size_s"},ac="therapist_signup_state",Y1={__name:"therapists",setup(t){const e=Zt(),n=ne(e.userData.personalInfo.email),r=ne(e.userData.personalInfo.name),s=ne(""),i=ne(e.userData.admin||0),o=ne("home_list"),l=ne([]),c=ne([]),u=ne(""),f=ne(""),p=ne(""),m=ne(null),v=ne(null),O=ne(!1),N=ne(""),k=ne([{value:"dr",text:"Dr."},{value:"mr",text:"Mr."},{value:"mrs",text:"Mrs."},{value:"miss",text:"Miss."},{value:"ms",text:"Ms."}]),M=ne([{value:"phd",text:"PhD"},{value:"msc",text:"MSc"},{value:"ma",text:"MA"}]),L=ne([{value:"psychologist",text:"Psychologist"},{value:"psychiatrist",text:"Psychiatrist"},{value:"social_worker",text:"Social Worker"}]);function D(T){return T?(T.charAt(0).toUpperCase()+T.slice(1)).replace("_"," "):""}function S(){return new Promise((T,b)=>{if(window.google?.maps?.places){T();return}const _=document.createElement("script");_.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWGRHjfWWoBWojyOBuGi75ACgNAkGobws&libraries=places",_.async=!0,_.defer=!0,_.onload=T,_.onerror=b,document.head.appendChild(_)})}sr(()=>{l.value=[],c.value=[],e.therapists?.forEach(b=>{b.isVerified?l.value.push(b):c.value.push(b)});const T=JSON.parse(localStorage.getItem(ac));T&&(o.value=T.signUpStep||"home_list",s.value=T.username||"",u.value=T.selectedTitle||"",f.value=T.selectedAcademicTitle||"",p.value=T.selectedCredential||"",m.value=T.selectedAddress||null)}),Sr([o,s,u,f,p,m],()=>{localStorage.setItem(ac,JSON.stringify({signUpStep:o.value,username:s.value,selectedTitle:u.value,selectedAcademicTitle:f.value,selectedCredential:p.value,selectedAddress:m.value}))},{deep:!0}),Sr(o,async T=>{if(T!=="step_1"||(await lo(),await S(),!v.value))return;const b=new google.maps.places.Autocomplete(v.value,{types:["address"],componentRestrictions:{country:"za"}});b.addListener("place_changed",()=>{const _=b.getPlace();m.value={city:_.address_components?.find(Oe=>Oe.types.includes("locality"))?.long_name||"",province:_.address_components?.find(Oe=>Oe.types.includes("administrative_area_level_1"))?.long_name||""}})});const j=()=>o.value="step_1",Z=()=>o.value="verify_therapist",I=()=>o.value="home_list",y=async()=>{if(!m.value){N.value="Please select an address",O.value=!0;return}const T=Nt(Tt,"therapists",e.userData.uid);if((await Ms(T)).exists()){N.value="You are already registered as a therapist.",O.value=!0;return}await cn(T,{email:n.value,nameSurname:r.value,userName:s.value,title:u.value,academicTitle:f.value,credential:p.value,address:m.value,isVerified:!1,createdAt:new Date}),localStorage.removeItem(ac),N.value="Thank you. You will be redirected shortly.",O.value=!0,setTimeout(()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSe2kKgs6Qnvl1uNfVSVEjUeCRmM8jv6E6O-6xhy-1mIiAYvLg/viewform"},8e3)},E=async T=>{await cn(Nt(Tt,"therapists",T.id),{isVerified:!0},{merge:!0}),c.value=c.value.filter(b=>b.id!==T.id),l.value.push(T)},R=T=>{c.value=c.value.filter(b=>b.id!==T.id)};return(T,b)=>(Q(),re(Ce,null,[o.value==="home_list"&&l.value.length===0&&c.value.length>=0?(Q(),re("div",N1," No therapists are listed at this moment. ")):(Q(),re("div",O1,[o.value==="step_1"?(Q(),re("div",V1,[b[10]||(b[10]=C("div",{class:"therapy_sign_up_heading inter font_size_xs"},[C("b",null,"Let's get you signed up and listed!")],-1)),b[11]||(b[11]=C("br",null,null,-1)),C("form",x1,[We(C("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Email Address","onUpdate:modelValue":b[0]||(b[0]=_=>n.value=_)},null,512),[[Ot,n.value]]),We(C("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Username","onUpdate:modelValue":b[1]||(b[1]=_=>s.value=_)},null,512),[[Ot,s.value]]),We(C("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":b[2]||(b[2]=_=>u.value=_)},[b[7]||(b[7]=C("option",{disabled:"",value:""},"Select your title",-1)),(Q(!0),re(Ce,null,ut(k.value,_=>(Q(),re("option",{key:_.value,value:_.value},ve(_.text),9,M1))),128))],512),[[Cr,u.value]]),We(C("input",{class:"form_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":b[3]||(b[3]=_=>r.value=_)},null,512),[[Ot,r.value]]),We(C("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":b[4]||(b[4]=_=>f.value=_)},[b[8]||(b[8]=C("option",{disabled:"",value:""},"Select your academic title",-1)),(Q(!0),re(Ce,null,ut(M.value,_=>(Q(),re("option",{key:_.value,value:_.value},ve(_.text),9,L1))),128))],512),[[Cr,f.value]]),We(C("select",{class:"form_input inter font_size_xs","onUpdate:modelValue":b[5]||(b[5]=_=>p.value=_)},[b[9]||(b[9]=C("option",{disabled:"",value:""},"Select your credential",-1)),(Q(!0),re(Ce,null,ut(L.value,_=>(Q(),re("option",{key:_.value,value:_.value},ve(_.text),9,U1))),128))],512),[[Cr,p.value]]),C("input",{ref_key:"addressInput",ref:v,class:"form_input inter font_size_xs",type:"text",placeholder:"Search address"},null,512)]),C("button",{class:"form_button inter font_size_xs",onClick:y}," Confirm ")])):o.value==="verify_therapist"?(Q(),re("div",F1,[c.value.length?(Q(),re("div",B1,[(Q(!0),re(Ce,null,ut(c.value,_=>(Q(),re("div",{class:"therapist_items_holder inter font_size_xs",key:_.userName},[C("div",j1,[C("b",null,ve(_.nameSurname),1),b[14]||(b[14]=C("br",null,null,-1)),Dt(" "+ve(_.email),1),b[15]||(b[15]=C("br",null,null,-1)),Dt(" "+ve(_.credential),1),b[16]||(b[16]=C("br",null,null,-1)),Dt(" "+ve(_.address.city)+", "+ve(_.address.province)+" ",1),C("div",$1,[C("div",{class:"contact_button",onClick:Oe=>E(_)},[...b[12]||(b[12]=[C("i",{class:"fas fa-user-check"},null,-1)])],8,H1),C("div",{class:"contact_button",onClick:Oe=>R(_)},[...b[13]||(b[13]=[C("i",{class:"fas fa-user-times"},null,-1)])],8,z1)])])]))),128))])):(Q(),re("div",q1,[b[17]||(b[17]=C("div",null,"No therapists need verifying at this moment.",-1)),C("div",{class:"sign_up_button_holder inter font_size_s"},[C("i",{class:"far fa-address-book",onClick:I})])]))])):o.value==="home_list"&&l.value.length?(Q(),re("div",W1,[(Q(!0),re(Ce,null,ut(l.value,_=>(Q(),re("div",{class:"therapist_items_holder inter font_size_xs",key:_.userName},[C("div",G1,[C("b",null,ve(_.nameSurname),1),b[18]||(b[18]=C("br",null,null,-1)),Dt(" "+ve(D(_.credential)),1),b[19]||(b[19]=C("br",null,null,-1)),Dt(" "+ve(_.address.city)+", "+ve(_.address.province),1)])]))),128))])):Ft("",!0)])),o.value==="home_list"?(Q(),re("div",K1,[C("i",{class:"fas fa-plus",onClick:j})])):Ft("",!0),o.value==="home_list"&&i.value===1?(Q(),re("div",Q1,[C("i",{class:"fas fa-award",onClick:Z})])):Ft("",!0),O.value?(Q(),kt(ni,{key:4,errorMessage:N.value,onClose:b[6]||(b[6]=_=>O.value=!1)},null,8,["errorMessage"])):Ft("",!0)],64))}},J1=fn(Y1,[["__scopeId","data-v-f3b2eb5e"]]),X1={class:"navigation_bar_holder"},Z1=["onClick"],eD=["innerHTML"],tD={__name:"navigation",setup(t){const e={home:{name:"Home",icon:'<i class="fa fa-home"></i>'},journal:{name:"Journal",icon:'<i class="fa fa-book"></i>'},profile:{name:"Profile",icon:'<i class="fa fa-id-card"></i>'}};Zt();const n=ne("home"),r=s=>{n.value=s,localStorage.setItem("currentPage",s)};return sr(()=>{const s=localStorage.getItem("currentPage");s&&e[s]&&(n.value=s)}),(s,i)=>(Q(),re(Ce,null,[n.value==="profile"?(Q(),kt(Ly,{key:0})):n.value==="home"?(Q(),kt(Cy,{key:1,onSetPage:r})):n.value==="mood"?(Q(),kt(D1,{key:2})):n.value==="journal"?(Q(),kt(Uy,{key:3})):n.value==="therapists"?(Q(),kt(J1,{key:4})):Ft("",!0),C("div",X1,[(Q(),re(Ce,null,ut(e,(o,l)=>C("div",{class:"navigation_item_holder inter font_size_xxs",key:l},[C("div",{class:Yn(["navigation_item",{active:n.value===l}]),onClick:c=>r(l)},[C("div",{innerHTML:o.icon},null,8,eD),C("div",null,ve(o.name),1)],10,Z1)])),64))])],64))}},nD=fn(tD,[["__scopeId","data-v-3bf8a914"]]),rD=[{path:"/",name:"Loading",component:Vk},{path:"/login",name:"Login",component:hk},{path:"/navigation",name:"Navigation",component:nD},{path:"/home/",name:"Home",component:Cy,props:!0},{path:"/profile/",name:"Profile",component:Ly,props:!0},{path:"/journal/",name:"JournalEntry",component:Uy,props:!0}],Fy=JT({history:PT(),routes:rD});Fy.beforeEach(async(t,e,n)=>{const r=Zt();if(r.userData||await r.fetchUserData(),!r.userData?.uid&&t.name!=="Login")return n({name:"Login"});n()});let Sp=null;En.onAuthStateChanged(()=>{if(!Sp){const t=Vw(qw);t.use(Lw()),t.use(Fy),t.mount("#app"),Sp=t}});
