(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ol(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},Es=[],pn=()=>{},op=()=>!1,Pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xl=t=>t.startsWith("onUpdate:"),Tt=Object.assign,Ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ay=Object.prototype.hasOwnProperty,Ce=(t,e)=>Ay.call(t,e),ce=Array.isArray,ws=t=>to(t)==="[object Map]",Fs=t=>to(t)==="[object Set]",xh=t=>to(t)==="[object Date]",me=t=>typeof t=="function",Ye=t=>typeof t=="string",wn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",ap=t=>(Ve(t)||me(t))&&me(t.then)&&me(t.catch),cp=Object.prototype.toString,to=t=>cp.call(t),Sy=t=>to(t).slice(8,-1),lp=t=>to(t)==="[object Object]",Ll=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=Ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Ry=/-\w/g,Gt=ka(t=>t.replace(Ry,e=>e.slice(1).toUpperCase())),Cy=/\B([A-Z])/g,ns=ka(t=>t.replace(Cy,"-$1").toLowerCase()),Da=ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),wc=ka(t=>t?`on${Da(t)}`:""),yr=(t,e)=>!Object.is(t,e),Uo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},up=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Xo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mh;const Na=()=>Mh||(Mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xi(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?Ny(r):xi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||Ve(t))return t}const Py=/;(?![^(]*\))/g,ky=/:([^]+)/,Dy=/\/\*[^]*?\*\//g;function Ny(t){const e={};return t.replace(Dy,"").split(Py).forEach(n=>{if(n){const r=n.split(ky);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $n(t){let e="";if(Ye(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=$n(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Vy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Oy=Ol(Vy);function hp(t){return!!t||t===""}function xy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qr(t[r],e[r]);return n}function Qr(t,e){if(t===e)return!0;let n=xh(t),r=xh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=wn(t),r=wn(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?xy(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Qr(t[o],e[o]))return!1}}return String(t)===String(e)}function Ul(t,e){return t.findIndex(n=>Qr(n,e))}const fp=t=>!!(t&&t.__v_isRef===!0),Me=t=>Ye(t)?t:t==null?"":ce(t)||Ve(t)&&(t.toString===cp||!me(t.toString))?fp(t)?Me(t.value):JSON.stringify(t,dp,2):String(t),dp=(t,e)=>fp(e)?dp(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Tc(r,i)+" =>"]=s,n),{})}:Fs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tc(n))}:wn(e)?Tc(e):Ve(e)&&!ce(e)&&!lp(e)?String(e):e,Tc=(t,e="")=>{var n;return wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class pp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){++this._on===1&&(this.prevScope=gt,gt=this)}off(){this._on>0&&--this._on===0&&(gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function mp(t){return new pp(t)}function gp(){return gt}function My(t,e=!1){gt&&gt.cleanups.push(t)}let xe;const Ic=new WeakSet;class _p{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ic.has(this)&&(Ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lh(this),Ep(this);const e=xe,n=nn;xe=this,nn=!0;try{return this.fn()}finally{wp(this),xe=e,nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jl(e);this.deps=this.depsTail=void 0,Lh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Kc(this)&&this.run()}get dirty(){return Kc(this)}}let yp=0,vi,Ei;function vp(t,e=!1){if(t.flags|=8,e){t.next=Ei,Ei=t;return}t.next=vi,vi=t}function Fl(){yp++}function Bl(){if(--yp>0)return;if(Ei){let e=Ei;for(Ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vi;){let e=vi;for(vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ep(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),jl(r),Ly(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Kc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Tp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mi)||(t.globalVersion=Mi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Kc(t))))return;t.flags|=2;const e=t.dep,n=xe,r=nn;xe=t,nn=!0;try{Ep(t);const s=t.fn(t._value);(e.version===0||yr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xe=n,nn=r,wp(t),t.flags&=-3}}function jl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)jl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ly(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nn=!0;const Ip=[];function Hn(){Ip.push(nn),nn=!1}function qn(){const t=Ip.pop();nn=t===void 0?!0:t}function Lh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let Mi=0;class Uy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $l{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xe||!nn||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new Uy(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,bp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=r)}return n}trigger(e){this.version++,Mi++,this.notify(e)}notify(e){Fl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Bl()}}}function bp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)bp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Zo=new WeakMap,Wr=Symbol(""),Qc=Symbol(""),Li=Symbol("");function yt(t,e,n){if(nn&&xe){let r=Zo.get(t);r||Zo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new $l),s.map=r,s.key=n),s.track()}}function Dn(t,e,n,r,s,i){const o=Zo.get(t);if(!o){Mi++;return}const c=l=>{l&&l.trigger()};if(Fl(),e==="clear")o.forEach(c);else{const l=ce(t),u=l&&Ll(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Li||!wn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Li)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Wr)),ws(t)&&c(o.get(Qc)));break;case"delete":l||(c(o.get(Wr)),ws(t)&&c(o.get(Qc)));break;case"set":ws(t)&&c(o.get(Wr));break}}Bl()}function Fy(t,e){const n=Zo.get(t);return n&&n.get(e)}function fs(t){const e=Se(t);return e===t?e:(yt(e,"iterate",Li),qt(t)?e:e.map(ct))}function Va(t){return yt(t=Se(t),"iterate",Li),t}const By={__proto__:null,[Symbol.iterator](){return bc(this,Symbol.iterator,ct)},concat(...t){return fs(this).concat(...t.map(e=>ce(e)?fs(e):e))},entries(){return bc(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return Cn(this,"every",t,e,void 0,arguments)},filter(t,e){return Cn(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return Cn(this,"find",t,e,ct,arguments)},findIndex(t,e){return Cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Cn(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return Cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ac(this,"includes",t)},indexOf(...t){return Ac(this,"indexOf",t)},join(t){return fs(this).join(t)},lastIndexOf(...t){return Ac(this,"lastIndexOf",t)},map(t,e){return Cn(this,"map",t,e,void 0,arguments)},pop(){return ci(this,"pop")},push(...t){return ci(this,"push",t)},reduce(t,...e){return Uh(this,"reduce",t,e)},reduceRight(t,...e){return Uh(this,"reduceRight",t,e)},shift(){return ci(this,"shift")},some(t,e){return Cn(this,"some",t,e,void 0,arguments)},splice(...t){return ci(this,"splice",t)},toReversed(){return fs(this).toReversed()},toSorted(t){return fs(this).toSorted(t)},toSpliced(...t){return fs(this).toSpliced(...t)},unshift(...t){return ci(this,"unshift",t)},values(){return bc(this,"values",ct)}};function bc(t,e,n){const r=Va(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const jy=Array.prototype;function Cn(t,e,n,r,s,i){const o=Va(t),c=o!==t&&!qt(t),l=o[e];if(l!==jy[e]){const p=l.apply(t,i);return c?ct(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,ct(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Uh(t,e,n,r){const s=Va(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ct(c),l,t)}),s[e](i,...r)}function Ac(t,e,n){const r=Se(t);yt(r,"iterate",Li);const s=r[e](...n);return(s===-1||s===!1)&&zl(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function ci(t,e,n=[]){Hn(),Fl();const r=Se(t)[e].apply(t,n);return Bl(),qn(),r}const $y=Ol("__proto__,__v_isRef,__isVue"),Ap=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wn));function Hy(t){wn(t)||(t=String(t));const e=Se(this);return yt(e,"has",t),e.hasOwnProperty(t)}class Sp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Zy:kp:i?Pp:Cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=By[n]))return l;if(n==="hasOwnProperty")return Hy}const c=Reflect.get(e,n,Ge(e)?e:r);if((wn(n)?Ap.has(n):$y(n))||(s||yt(e,"get",n),i))return c;if(Ge(c)){const l=o&&Ll(n)?c:c.value;return s&&Ve(l)?Jc(l):l}return Ve(c)?s?Jc(c):no(c):c}}class Rp extends Sp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Sr(i);if(!qt(r)&&!Sr(r)&&(i=Se(i),r=Se(r)),!ce(e)&&Ge(i)&&!Ge(r))return l||(i.value=r),!0}const o=ce(e)&&Ll(n)?Number(n)<e.length:Ce(e,n),c=Reflect.set(e,n,r,Ge(e)?e:s);return e===Se(s)&&(o?yr(r,i)&&Dn(e,"set",n,r):Dn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!wn(n)||!Ap.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ce(e)?"length":Wr),Reflect.ownKeys(e)}}class qy extends Sp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zy=new Rp,Wy=new qy,Gy=new Rp(!0);const Yc=t=>t,Co=t=>Reflect.getPrototypeOf(t);function Ky(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=ws(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Yc:e?ea:ct;return!e&&yt(i,"iterate",l?Qc:Wr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Po(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qy(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),c=Se(s);t||(yr(s,c)&&yt(o,"get",s),yt(o,"get",c));const{has:l}=Co(o),u=e?Yc:t?ea:ct;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(Se(s),"iterate",Wr),s.size},has(s){const i=this.__v_raw,o=Se(i),c=Se(s);return t||(yr(s,c)&&yt(o,"has",s),yt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Se(c),u=e?Yc:t?ea:ct;return!t&&yt(l,"iterate",Wr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Tt(n,t?{add:Po("add"),set:Po("set"),delete:Po("delete"),clear:Po("clear")}:{add(s){!e&&!qt(s)&&!Sr(s)&&(s=Se(s));const i=Se(this);return Co(i).has.call(i,s)||(i.add(s),Dn(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!Sr(i)&&(i=Se(i));const o=Se(this),{has:c,get:l}=Co(o);let u=c.call(o,s);u||(s=Se(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?yr(i,f)&&Dn(o,"set",s,i):Dn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:c}=Co(i);let l=o.call(i,s);l||(s=Se(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Dn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ky(s,t,e)}),n}function Hl(t,e){const n=Qy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const Yy={get:Hl(!1,!1)},Jy={get:Hl(!1,!0)},Xy={get:Hl(!0,!1)};const Cp=new WeakMap,Pp=new WeakMap,kp=new WeakMap,Zy=new WeakMap;function ev(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tv(t){return t.__v_skip||!Object.isExtensible(t)?0:ev(Sy(t))}function no(t){return Sr(t)?t:ql(t,!1,zy,Yy,Cp)}function Dp(t){return ql(t,!1,Gy,Jy,Pp)}function Jc(t){return ql(t,!0,Wy,Xy,kp)}function ql(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=tv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function vr(t){return Sr(t)?vr(t.__v_raw):!!(t&&t.__v_isReactive)}function Sr(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function zl(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Wl(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&up(t,"__v_skip",!0),t}const ct=t=>Ve(t)?no(t):t,ea=t=>Ve(t)?Jc(t):t;function Ge(t){return t?t.__v_isRef===!0:!1}function le(t){return Np(t,!1)}function nv(t){return Np(t,!0)}function Np(t,e){return Ge(t)?t:new rv(t,e)}class rv{constructor(e,n){this.dep=new $l,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||Sr(e);e=r?e:Se(e),yr(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function Un(t){return Ge(t)?t.value:t}const sv={get:(t,e,n)=>e==="__v_raw"?t:Un(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ge(s)&&!Ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vp(t){return vr(t)?t:new Proxy(t,sv)}function iv(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=av(t,n);return e}class ov{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Fy(Se(this._object),this._key)}}function av(t,e,n){const r=t[e];return Ge(r)?r:new ov(t,e,n)}class cv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $l(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return vp(this,!0),!0}get value(){const e=this.dep.track();return Tp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lv(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new cv(r,s,n)}const ko={},ta=new WeakMap;let $r;function uv(t,e=!1,n=$r){if(n){let r=ta.get(n);r||ta.set(n,r=[]),r.push(t)}}function hv(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=D=>s?D:qt(D)||s===!1||s===0?Nn(D,1):Nn(D);let f,p,m,y,P=!1,k=!1;if(Ge(t)?(p=()=>t.value,P=qt(t)):vr(t)?(p=()=>u(t),P=!0):ce(t)?(k=!0,P=t.some(D=>vr(D)||qt(D)),p=()=>t.map(D=>{if(Ge(D))return D.value;if(vr(D))return u(D);if(me(D))return l?l(D,2):D()})):me(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Hn();try{m()}finally{qn()}}const D=$r;$r=f;try{return l?l(t,3,[y]):t(y)}finally{$r=D}}:p=pn,e&&s){const D=p,G=s===!0?1/0:s;p=()=>Nn(D(),G)}const N=gp(),M=()=>{f.stop(),N&&N.active&&Ml(N.effects,f)};if(i&&e){const D=e;e=(...G)=>{D(...G),M()}}let L=k?new Array(t.length).fill(ko):ko;const V=D=>{if(!(!(f.flags&1)||!f.dirty&&!D))if(e){const G=f.run();if(s||P||(k?G.some((ee,T)=>yr(ee,L[T])):yr(G,L))){m&&m();const ee=$r;$r=f;try{const T=[G,L===ko?void 0:k&&L[0]===ko?[]:L,y];L=G,l?l(e,3,T):e(...T)}finally{$r=ee}}}else f.run()};return c&&c(V),f=new _p(p),f.scheduler=o?()=>o(V,!1):V,y=D=>uv(D,!1,f),m=f.onStop=()=>{const D=ta.get(f);if(D){if(l)l(D,4);else for(const G of D)G();ta.delete(f)}},e?r?V(!0):L=f.run():o?o(V.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function Nn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ge(t))Nn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Nn(t[r],e,n);else if(Fs(t)||ws(t))t.forEach(r=>{Nn(r,e,n)});else if(lp(t)){for(const r in t)Nn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Nn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ro(t,e,n,r){try{return r?t(...r):t()}catch(s){Oa(s,e,n)}}function Tn(t,e,n,r){if(me(t)){const s=ro(t,e,n,r);return s&&ap(s)&&s.catch(i=>{Oa(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Tn(t[i],e,n,r));return s}}function Oa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Hn(),ro(i,null,10,[t,l,u]),qn();return}}fv(t,n,s,r,o)}function fv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let hn=-1;const Ts=[];let ur=null,ps=0;const Op=Promise.resolve();let na=null;function xa(t){const e=na||Op;return t?e.then(this?t.bind(this):t):e}function dv(t){let e=hn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Ui(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Gl(t){if(!(t.flags&1)){const e=Ui(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Ui(n)?Rt.push(t):Rt.splice(dv(e),0,t),t.flags|=1,xp()}}function xp(){na||(na=Op.then(Lp))}function pv(t){ce(t)?Ts.push(...t):ur&&t.id===-1?ur.splice(ps+1,0,t):t.flags&1||(Ts.push(t),t.flags|=1),xp()}function Fh(t,e,n=hn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Mp(t){if(Ts.length){const e=[...new Set(Ts)].sort((n,r)=>Ui(n)-Ui(r));if(Ts.length=0,ur){ur.push(...e);return}for(ur=e,ps=0;ps<ur.length;ps++){const n=ur[ps];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ur=null,ps=0}}const Ui=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Lp(t){try{for(hn=0;hn<Rt.length;hn++){const e=Rt[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ro(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<Rt.length;hn++){const e=Rt[hn];e&&(e.flags&=-2)}hn=-1,Rt.length=0,Mp(),na=null,(Rt.length||Ts.length)&&Lp()}}let Lt=null,Up=null;function ra(t){const e=Lt;return Lt=t,Up=t&&t.type.__scopeId||null,e}function mv(t,e=Lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&oa(-1);const i=ra(e);let o;try{o=t(...s)}finally{ra(i),r._d&&oa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Et(t,e){if(Lt===null)return t;const n=Fa(Lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&Nn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Br(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Hn(),Tn(l,n,8,[t.el,c,t,e]),qn())}}const gv=Symbol("_vte"),_v=t=>t.__isTeleport,yv=Symbol("_leaveCb");function Kl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Kl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fp(t,e){return me(t)?Tt({name:t.name},e,{setup:t}):t}function Bp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const sa=new WeakMap;function wi(t,e,n,r,s=!1){if(ce(t)){t.forEach((P,k)=>wi(P,e&&(ce(e)?e[k]:e),n,r,s));return}if(Ti(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&wi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Fa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,p=c.setupState,m=Se(p),y=p===Ne?op:P=>Ce(m,P);if(u!=null&&u!==l){if(Bh(e),Ye(u))f[u]=null,y(u)&&(p[u]=null);else if(Ge(u)){u.value=null;const P=e;P.k&&(f[P.k]=null)}}if(me(l))ro(l,c,12,[o,f]);else{const P=Ye(l),k=Ge(l);if(P||k){const N=()=>{if(t.f){const M=P?y(l)?p[l]:f[l]:l.value;if(s)ce(M)&&Ml(M,i);else if(ce(M))M.includes(i)||M.push(i);else if(P)f[l]=[i],y(l)&&(p[l]=f[l]);else{const L=[i];l.value=L,t.k&&(f[t.k]=L)}}else P?(f[l]=o,y(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const M=()=>{N(),sa.delete(t)};M.id=-1,sa.set(t,M),xt(M,n)}else Bh(t),N()}}}function Bh(t){const e=sa.get(t);e&&(e.flags|=8,sa.delete(t))}Na().requestIdleCallback;Na().cancelIdleCallback;const Ti=t=>!!t.type.__asyncLoader,jp=t=>t.type.__isKeepAlive;function vv(t,e){$p(t,"a",e)}function Ev(t,e){$p(t,"da",e)}function $p(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ma(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jp(s.parent.vnode)&&wv(r,e,n,s),s=s.parent}}function wv(t,e,n,r){const s=Ma(e,t,r,!0);Hp(()=>{Ml(r[e],s)},n)}function Ma(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Hn();const c=so(n),l=Tn(e,n,t,o);return c(),qn(),l});return r?s.unshift(i):s.push(i),i}}const Yn=t=>(e,n=wt)=>{(!Bi||t==="sp")&&Ma(t,(...r)=>e(...r),n)},Tv=Yn("bm"),rs=Yn("m"),Iv=Yn("bu"),bv=Yn("u"),Av=Yn("bum"),Hp=Yn("um"),Sv=Yn("sp"),Rv=Yn("rtg"),Cv=Yn("rtc");function Pv(t,e=wt){Ma("ec",t,e)}const kv="components";function Dv(t,e){return Vv(kv,t,!0,e)||t}const Nv=Symbol.for("v-ndc");function Vv(t,e,n=!0,r=!1){const s=Lt||wt;if(s){const i=s.type;{const c=wE(i,!1);if(c&&(c===e||c===Gt(e)||c===Da(Gt(e))))return i}const o=jh(s[t]||i[t],e)||jh(s.appContext[t],e);return!o&&r?i:o}}function jh(t,e){return t&&(t[e]||t[Gt(e)]||t[Da(Gt(e))])}function Kt(t,e,n,r){let s;const i=n,o=ce(t);if(o||Ye(t)){const c=o&&vr(t);let l=!1,u=!1;c&&(l=!qt(t),u=Sr(t),t=Va(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?ea(ct(t[f])):ct(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Xc=t=>t?um(t)?Fa(t):Xc(t.parent):null,Ii=Tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xc(t.parent),$root:t=>Xc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zp(t),$forceUpdate:t=>t.f||(t.f=()=>{Gl(t.update)}),$nextTick:t=>t.n||(t.n=xa.bind(t.proxy)),$watch:t=>tE.bind(t)}),Sc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Ce(t,e),Ov={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Sc(r,e))return o[e]=1,r[e];if(s!==Ne&&Ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,i[e];if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];Zc&&(o[e]=0)}}const f=Ii[e];let p,m;if(f)return e==="$attrs"&&yt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ce(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Sc(s,e)?(s[e]=n,!0):r!==Ne&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Ce(t,c)||Sc(e,c)||(l=i[0])&&Ce(l,c)||Ce(r,c)||Ce(Ii,c)||Ce(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $h(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zc=!0;function xv(t){const e=zp(t),n=t.proxy,r=t.ctx;Zc=!1,e.beforeCreate&&Hh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:P,activated:k,deactivated:N,beforeDestroy:M,beforeUnmount:L,destroyed:V,unmounted:D,render:G,renderTracked:ee,renderTriggered:T,errorCaptured:_,serverPrefetch:v,expose:A,inheritAttrs:b,components:S,directives:w,filters:He}=e;if(u&&Mv(u,r,null),o)for(const pe in o){const Ie=o[pe];me(Ie)&&(r[pe]=Ie.bind(n))}if(s){const pe=s.call(n,n);Ve(pe)&&(t.data=no(pe))}if(Zc=!0,i)for(const pe in i){const Ie=i[pe],Ct=me(Ie)?Ie.bind(n,n):me(Ie.get)?Ie.get.bind(n,n):pn,an=!me(Ie)&&me(Ie.set)?Ie.set.bind(n):pn,Dt=Be({get:Ct,set:an});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:it=>Dt.value=it})}if(c)for(const pe in c)qp(c[pe],r,n,pe);if(l){const pe=me(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(Ie=>{Fo(Ie,pe[Ie])})}f&&Hh(f,t,"c");function Oe(pe,Ie){ce(Ie)?Ie.forEach(Ct=>pe(Ct.bind(n))):Ie&&pe(Ie.bind(n))}if(Oe(Tv,p),Oe(rs,m),Oe(Iv,y),Oe(bv,P),Oe(vv,k),Oe(Ev,N),Oe(Pv,_),Oe(Cv,ee),Oe(Rv,T),Oe(Av,L),Oe(Hp,D),Oe(Sv,v),ce(A))if(A.length){const pe=t.exposed||(t.exposed={});A.forEach(Ie=>{Object.defineProperty(pe,Ie,{get:()=>n[Ie],set:Ct=>n[Ie]=Ct,enumerable:!0})})}else t.exposed||(t.exposed={});G&&t.render===pn&&(t.render=G),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),w&&(t.directives=w),v&&Bp(t)}function Mv(t,e,n=pn){ce(t)&&(t=el(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=rn(s.from||r,s.default,!0):i=rn(s.from||r):i=rn(s),Ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Hh(t,e,n){Tn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qp(t,e,n,r){let s=r.includes(".")?sm(n,r):()=>n[r];if(Ye(t)){const i=e[t];me(i)&&Is(s,i)}else if(me(t))Is(s,t.bind(n));else if(Ve(t))if(ce(t))t.forEach(i=>qp(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Is(s,i,t)}}function zp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ia(l,u,o,!0)),ia(l,e,o)),Ve(e)&&i.set(e,l),l}function ia(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ia(t,i,n,!0),s&&s.forEach(o=>ia(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Lv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Lv={data:qh,props:zh,emits:zh,methods:hi,computed:hi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:hi,directives:hi,watch:Fv,provide:qh,inject:Uv};function qh(t,e){return e?t?function(){return Tt(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function Uv(t,e){return hi(el(t),el(e))}function el(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?Tt(Object.create(null),t,e):e}function zh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:Tt(Object.create(null),$h(t),$h(e??{})):e}function Fv(t,e){if(!t)return e;if(!e)return t;const n=Tt(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Wp(){return{app:null,config:{isNativeTag:op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bv=0;function jv(t,e){return function(r,s=null){me(r)||(r=Tt({},r)),s!=null&&!Ve(s)&&(s=null);const i=Wp(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:Bv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:IE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&me(f.install)?(o.add(f),f.install(u,...p)):me(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const y=u._ceVNode||kt(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),l=!0,u._container=f,f.__vue_app__=u,Fa(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Tn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Gr;Gr=u;try{return f()}finally{Gr=p}}};return u}}let Gr=null;function Fo(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function rn(t,e,n=!1){const r=lm();if(r||Gr){let s=Gr?Gr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}function $v(){return!!(lm()||Gr)}const Gp={},Kp=()=>Object.create(Gp),Qp=t=>Object.getPrototypeOf(t)===Gp;function Hv(t,e,n,r=!1){const s={},i=Kp();t.propsDefaults=Object.create(null),Yp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Dp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Se(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(La(t.emitsOptions,m))continue;const y=e[m];if(l)if(Ce(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const P=Gt(m);s[P]=tl(l,c,P,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{Yp(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Ce(e,p)&&((f=ns(p))===p||!Ce(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=tl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ce(e,p))&&(delete i[p],u=!0)}u&&Dn(t.attrs,"set","")}function Yp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(yi(l))continue;const u=e[l];let f;s&&Ce(s,f=Gt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:La(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Se(n),u=c||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=tl(s,l,p,u[p],t,!Ce(u,p))}}return o}function tl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ce(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&me(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=so(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===ns(n))&&(r=!0))}return r}const zv=new WeakMap;function Jp(t,e,n=!1){const r=n?zv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!me(t)){const f=p=>{l=!0;const[m,y]=Jp(p,e,!0);Tt(o,m),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ve(t)&&r.set(t,Es),Es;if(ce(i))for(let f=0;f<i.length;f++){const p=Gt(i[f]);Wh(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=Gt(f);if(Wh(p)){const m=i[f],y=o[p]=ce(m)||me(m)?{type:m}:Tt({},m),P=y.type;let k=!1,N=!0;if(ce(P))for(let M=0;M<P.length;++M){const L=P[M],V=me(L)&&L.name;if(V==="Boolean"){k=!0;break}else V==="String"&&(N=!1)}else k=me(P)&&P.name==="Boolean";y[0]=k,y[1]=N,(k||Ce(y,"default"))&&c.push(p)}}const u=[o,c];return Ve(t)&&r.set(t,u),u}function Wh(t){return t[0]!=="$"&&!yi(t)}const Ql=t=>t==="_"||t==="_ctx"||t==="$stable",Yl=t=>ce(t)?t.map(dn):[dn(t)],Wv=(t,e,n)=>{if(e._n)return e;const r=mv((...s)=>Yl(e(...s)),n);return r._c=!1,r},Xp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ql(s))continue;const i=t[s];if(me(i))e[s]=Wv(s,i,r);else if(i!=null){const o=Yl(i);e[s]=()=>o}}},Zp=(t,e)=>{const n=Yl(e);t.slots.default=()=>n},em=(t,e,n)=>{for(const r in e)(n||!Ql(r))&&(t[r]=e[r])},Gv=(t,e,n)=>{const r=t.slots=Kp();if(t.vnode.shapeFlag&32){const s=e._;s?(em(r,e,n),n&&up(r,"_",s,!0)):Xp(e,r)}else e&&Zp(t,e)},Kv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:em(s,e,n):(i=!e.$stable,Xp(e,s)),o=e}else e&&(Zp(t,e),o={default:1});if(i)for(const c in s)!Ql(c)&&o[c]==null&&delete s[c]},xt=lE;function Qv(t){return Yv(t)}function Yv(t,e){const n=Na();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=pn,insertStaticContent:P}=t,k=(E,I,R,B=null,$=null,U=null,Q=void 0,W=null,q=!!I.dynamicChildren)=>{if(E===I)return;E&&!li(E,I)&&(B=F(E),it(E,$,U,!0),E=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:z,ref:ie,shapeFlag:J}=I;switch(z){case Ua:N(E,I,R,B);break;case Rr:M(E,I,R,B);break;case Cc:E==null&&L(I,R,B,Q);break;case Le:S(E,I,R,B,$,U,Q,W,q);break;default:J&1?G(E,I,R,B,$,U,Q,W,q):J&6?w(E,I,R,B,$,U,Q,W,q):(J&64||J&128)&&z.process(E,I,R,B,$,U,Q,W,q,ne)}ie!=null&&$?wi(ie,E&&E.ref,U,I||E,!I):ie==null&&E&&E.ref!=null&&wi(E.ref,null,U,E,!0)},N=(E,I,R,B)=>{if(E==null)r(I.el=c(I.children),R,B);else{const $=I.el=E.el;I.children!==E.children&&u($,I.children)}},M=(E,I,R,B)=>{E==null?r(I.el=l(I.children||""),R,B):I.el=E.el},L=(E,I,R,B)=>{[E.el,E.anchor]=P(E.children,I,R,B,E.el,E.anchor)},V=({el:E,anchor:I},R,B)=>{let $;for(;E&&E!==I;)$=m(E),r(E,R,B),E=$;r(I,R,B)},D=({el:E,anchor:I})=>{let R;for(;E&&E!==I;)R=m(E),s(E),E=R;s(I)},G=(E,I,R,B,$,U,Q,W,q)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),E==null?ee(I,R,B,$,U,Q,W,q):v(E,I,$,U,Q,W,q)},ee=(E,I,R,B,$,U,Q,W)=>{let q,z;const{props:ie,shapeFlag:J,transition:re,dirs:ae}=E;if(q=E.el=o(E.type,U,ie&&ie.is,ie),J&8?f(q,E.children):J&16&&_(E.children,q,null,B,$,Rc(E,U),Q,W),ae&&Br(E,null,B,"created"),T(q,E,E.scopeId,Q,B),ie){for(const ke in ie)ke!=="value"&&!yi(ke)&&i(q,ke,null,ie[ke],U,B);"value"in ie&&i(q,"value",null,ie.value,U),(z=ie.onVnodeBeforeMount)&&un(z,B,E)}ae&&Br(E,null,B,"beforeMount");const ye=Jv($,re);ye&&re.beforeEnter(q),r(q,I,R),((z=ie&&ie.onVnodeMounted)||ye||ae)&&xt(()=>{z&&un(z,B,E),ye&&re.enter(q),ae&&Br(E,null,B,"mounted")},$)},T=(E,I,R,B,$)=>{if(R&&y(E,R),B)for(let U=0;U<B.length;U++)y(E,B[U]);if($){let U=$.subTree;if(I===U||om(U.type)&&(U.ssContent===I||U.ssFallback===I)){const Q=$.vnode;T(E,Q,Q.scopeId,Q.slotScopeIds,$.parent)}}},_=(E,I,R,B,$,U,Q,W,q=0)=>{for(let z=q;z<E.length;z++){const ie=E[z]=W?hr(E[z]):dn(E[z]);k(null,ie,I,R,B,$,U,Q,W)}},v=(E,I,R,B,$,U,Q)=>{const W=I.el=E.el;let{patchFlag:q,dynamicChildren:z,dirs:ie}=I;q|=E.patchFlag&16;const J=E.props||Ne,re=I.props||Ne;let ae;if(R&&jr(R,!1),(ae=re.onVnodeBeforeUpdate)&&un(ae,R,I,E),ie&&Br(I,E,R,"beforeUpdate"),R&&jr(R,!0),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&f(W,""),z?A(E.dynamicChildren,z,W,R,B,Rc(I,$),U):Q||Ie(E,I,W,null,R,B,Rc(I,$),U,!1),q>0){if(q&16)b(W,J,re,R,$);else if(q&2&&J.class!==re.class&&i(W,"class",null,re.class,$),q&4&&i(W,"style",J.style,re.style,$),q&8){const ye=I.dynamicProps;for(let ke=0;ke<ye.length;ke++){const Ae=ye[ke],dt=J[Ae],pt=re[Ae];(pt!==dt||Ae==="value")&&i(W,Ae,dt,pt,$,R)}}q&1&&E.children!==I.children&&f(W,I.children)}else!Q&&z==null&&b(W,J,re,R,$);((ae=re.onVnodeUpdated)||ie)&&xt(()=>{ae&&un(ae,R,I,E),ie&&Br(I,E,R,"updated")},B)},A=(E,I,R,B,$,U,Q)=>{for(let W=0;W<I.length;W++){const q=E[W],z=I[W],ie=q.el&&(q.type===Le||!li(q,z)||q.shapeFlag&198)?p(q.el):R;k(q,z,ie,null,B,$,U,Q,!0)}},b=(E,I,R,B,$)=>{if(I!==R){if(I!==Ne)for(const U in I)!yi(U)&&!(U in R)&&i(E,U,I[U],null,$,B);for(const U in R){if(yi(U))continue;const Q=R[U],W=I[U];Q!==W&&U!=="value"&&i(E,U,W,Q,$,B)}"value"in R&&i(E,"value",I.value,R.value,$)}},S=(E,I,R,B,$,U,Q,W,q)=>{const z=I.el=E?E.el:c(""),ie=I.anchor=E?E.anchor:c("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:ae}=I;ae&&(W=W?W.concat(ae):ae),E==null?(r(z,R,B),r(ie,R,B),_(I.children||[],R,ie,$,U,Q,W,q)):J>0&&J&64&&re&&E.dynamicChildren?(A(E.dynamicChildren,re,R,$,U,Q,W),(I.key!=null||$&&I===$.subTree)&&tm(E,I,!0)):Ie(E,I,R,ie,$,U,Q,W,q)},w=(E,I,R,B,$,U,Q,W,q)=>{I.slotScopeIds=W,E==null?I.shapeFlag&512?$.ctx.activate(I,R,B,Q,q):He(I,R,B,$,U,Q,q):ht(E,I,q)},He=(E,I,R,B,$,U,Q)=>{const W=E.component=gE(E,B,$);if(jp(E)&&(W.ctx.renderer=ne),_E(W,!1,Q),W.asyncDep){if($&&$.registerDep(W,Oe,Q),!E.el){const q=W.subTree=kt(Rr);M(null,q,I,R),E.placeholder=q.el}}else Oe(W,E,I,R,$,U,Q)},ht=(E,I,R)=>{const B=I.component=E.component;if(aE(E,I,R))if(B.asyncDep&&!B.asyncResolved){pe(B,I,R);return}else B.next=I,B.update();else I.el=E.el,B.vnode=I},Oe=(E,I,R,B,$,U,Q)=>{const W=()=>{if(E.isMounted){let{next:J,bu:re,u:ae,parent:ye,vnode:ke}=E;{const Vt=nm(E);if(Vt){J&&(J.el=ke.el,pe(E,J,Q)),Vt.asyncDep.then(()=>{E.isUnmounted||W()});return}}let Ae=J,dt;jr(E,!1),J?(J.el=ke.el,pe(E,J,Q)):J=ke,re&&Uo(re),(dt=J.props&&J.props.onVnodeBeforeUpdate)&&un(dt,ye,J,ke),jr(E,!0);const pt=Kh(E),Nt=E.subTree;E.subTree=pt,k(Nt,pt,p(Nt.el),F(Nt),E,$,U),J.el=pt.el,Ae===null&&cE(E,pt.el),ae&&xt(ae,$),(dt=J.props&&J.props.onVnodeUpdated)&&xt(()=>un(dt,ye,J,ke),$)}else{let J;const{el:re,props:ae}=I,{bm:ye,m:ke,parent:Ae,root:dt,type:pt}=E,Nt=Ti(I);jr(E,!1),ye&&Uo(ye),!Nt&&(J=ae&&ae.onVnodeBeforeMount)&&un(J,Ae,I),jr(E,!0);{dt.ce&&dt.ce._def.shadowRoot!==!1&&dt.ce._injectChildStyle(pt);const Vt=E.subTree=Kh(E);k(null,Vt,R,B,E,$,U),I.el=Vt.el}if(ke&&xt(ke,$),!Nt&&(J=ae&&ae.onVnodeMounted)){const Vt=I;xt(()=>un(J,Ae,Vt),$)}(I.shapeFlag&256||Ae&&Ti(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&E.a&&xt(E.a,$),E.isMounted=!0,I=R=B=null}};E.scope.on();const q=E.effect=new _p(W);E.scope.off();const z=E.update=q.run.bind(q),ie=E.job=q.runIfDirty.bind(q);ie.i=E,ie.id=E.uid,q.scheduler=()=>Gl(ie),jr(E,!0),z()},pe=(E,I,R)=>{I.component=E;const B=E.vnode.props;E.vnode=I,E.next=null,qv(E,I.props,B,R),Kv(E,I.children,R),Hn(),Fh(E),qn()},Ie=(E,I,R,B,$,U,Q,W,q=!1)=>{const z=E&&E.children,ie=E?E.shapeFlag:0,J=I.children,{patchFlag:re,shapeFlag:ae}=I;if(re>0){if(re&128){an(z,J,R,B,$,U,Q,W,q);return}else if(re&256){Ct(z,J,R,B,$,U,Q,W,q);return}}ae&8?(ie&16&&ft(z,$,U),J!==z&&f(R,J)):ie&16?ae&16?an(z,J,R,B,$,U,Q,W,q):ft(z,$,U,!0):(ie&8&&f(R,""),ae&16&&_(J,R,B,$,U,Q,W,q))},Ct=(E,I,R,B,$,U,Q,W,q)=>{E=E||Es,I=I||Es;const z=E.length,ie=I.length,J=Math.min(z,ie);let re;for(re=0;re<J;re++){const ae=I[re]=q?hr(I[re]):dn(I[re]);k(E[re],ae,R,null,$,U,Q,W,q)}z>ie?ft(E,$,U,!0,!1,J):_(I,R,B,$,U,Q,W,q,J)},an=(E,I,R,B,$,U,Q,W,q)=>{let z=0;const ie=I.length;let J=E.length-1,re=ie-1;for(;z<=J&&z<=re;){const ae=E[z],ye=I[z]=q?hr(I[z]):dn(I[z]);if(li(ae,ye))k(ae,ye,R,null,$,U,Q,W,q);else break;z++}for(;z<=J&&z<=re;){const ae=E[J],ye=I[re]=q?hr(I[re]):dn(I[re]);if(li(ae,ye))k(ae,ye,R,null,$,U,Q,W,q);else break;J--,re--}if(z>J){if(z<=re){const ae=re+1,ye=ae<ie?I[ae].el:B;for(;z<=re;)k(null,I[z]=q?hr(I[z]):dn(I[z]),R,ye,$,U,Q,W,q),z++}}else if(z>re)for(;z<=J;)it(E[z],$,U,!0),z++;else{const ae=z,ye=z,ke=new Map;for(z=ye;z<=re;z++){const ot=I[z]=q?hr(I[z]):dn(I[z]);ot.key!=null&&ke.set(ot.key,z)}let Ae,dt=0;const pt=re-ye+1;let Nt=!1,Vt=0;const Zt=new Array(pt);for(z=0;z<pt;z++)Zt[z]=0;for(z=ae;z<=J;z++){const ot=E[z];if(dt>=pt){it(ot,$,U,!0);continue}let tt;if(ot.key!=null)tt=ke.get(ot.key);else for(Ae=ye;Ae<=re;Ae++)if(Zt[Ae-ye]===0&&li(ot,I[Ae])){tt=Ae;break}tt===void 0?it(ot,$,U,!0):(Zt[tt-ye]=z+1,tt>=Vt?Vt=tt:Nt=!0,k(ot,I[tt],R,null,$,U,Q,W,q),dt++)}const cs=Nt?Xv(Zt):Es;for(Ae=cs.length-1,z=pt-1;z>=0;z--){const ot=ye+z,tt=I[ot],Gs=I[ot+1],xr=ot+1<ie?Gs.el||Gs.placeholder:B;Zt[z]===0?k(null,tt,R,xr,$,U,Q,W,q):Nt&&(Ae<0||z!==cs[Ae]?Dt(tt,R,xr,2):Ae--)}}},Dt=(E,I,R,B,$=null)=>{const{el:U,type:Q,transition:W,children:q,shapeFlag:z}=E;if(z&6){Dt(E.component.subTree,I,R,B);return}if(z&128){E.suspense.move(I,R,B);return}if(z&64){Q.move(E,I,R,ne);return}if(Q===Le){r(U,I,R);for(let J=0;J<q.length;J++)Dt(q[J],I,R,B);r(E.anchor,I,R);return}if(Q===Cc){V(E,I,R);return}if(B!==2&&z&1&&W)if(B===0)W.beforeEnter(U),r(U,I,R),xt(()=>W.enter(U),$);else{const{leave:J,delayLeave:re,afterLeave:ae}=W,ye=()=>{E.ctx.isUnmounted?s(U):r(U,I,R)},ke=()=>{U._isLeaving&&U[yv](!0),J(U,()=>{ye(),ae&&ae()})};re?re(U,ye,ke):ke()}else r(U,I,R)},it=(E,I,R,B=!1,$=!1)=>{const{type:U,props:Q,ref:W,children:q,dynamicChildren:z,shapeFlag:ie,patchFlag:J,dirs:re,cacheIndex:ae}=E;if(J===-2&&($=!1),W!=null&&(Hn(),wi(W,null,R,E,!0),qn()),ae!=null&&(I.renderCache[ae]=void 0),ie&256){I.ctx.deactivate(E);return}const ye=ie&1&&re,ke=!Ti(E);let Ae;if(ke&&(Ae=Q&&Q.onVnodeBeforeUnmount)&&un(Ae,I,E),ie&6)Xt(E.component,R,B);else{if(ie&128){E.suspense.unmount(R,B);return}ye&&Br(E,null,I,"beforeUnmount"),ie&64?E.type.remove(E,I,R,ne,B):z&&!z.hasOnce&&(U!==Le||J>0&&J&64)?ft(z,I,R,!1,!0):(U===Le&&J&384||!$&&ie&16)&&ft(q,I,R),B&&Rn(E)}(ke&&(Ae=Q&&Q.onVnodeUnmounted)||ye)&&xt(()=>{Ae&&un(Ae,I,E),ye&&Br(E,null,I,"unmounted")},R)},Rn=E=>{const{type:I,el:R,anchor:B,transition:$}=E;if(I===Le){Jt(R,B);return}if(I===Cc){D(E);return}const U=()=>{s(R),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:Q,delayLeave:W}=$,q=()=>Q(R,U);W?W(E.el,U,q):q()}else U()},Jt=(E,I)=>{let R;for(;E!==I;)R=m(E),s(E),E=R;s(I)},Xt=(E,I,R)=>{const{bum:B,scope:$,job:U,subTree:Q,um:W,m:q,a:z}=E;Gh(q),Gh(z),B&&Uo(B),$.stop(),U&&(U.flags|=8,it(Q,E,I,R)),W&&xt(W,I),xt(()=>{E.isUnmounted=!0},I)},ft=(E,I,R,B=!1,$=!1,U=0)=>{for(let Q=U;Q<E.length;Q++)it(E[Q],I,R,B,$)},F=E=>{if(E.shapeFlag&6)return F(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),R=I&&I[gv];return R?m(R):I};let X=!1;const Y=(E,I,R)=>{E==null?I._vnode&&it(I._vnode,null,null,!0):k(I._vnode||null,E,I,null,null,null,R),I._vnode=E,X||(X=!0,Fh(),Mp(),X=!1)},ne={p:k,um:it,m:Dt,r:Rn,mt:He,mc:_,pc:Ie,pbc:A,n:F,o:t};return{render:Y,hydrate:void 0,createApp:jv(Y)}}function Rc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Jv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function tm(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=hr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&tm(o,c)),c.type===Ua&&c.patchFlag!==-1&&(c.el=o.el),c.type===Rr&&!c.el&&(c.el=o.el)}}function Xv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function nm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:nm(e)}function Gh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Zv=Symbol.for("v-scx"),eE=()=>rn(Zv);function Is(t,e,n){return rm(t,e,n)}function rm(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=Tt({},n),l=e&&r||!e&&i!=="post";let u;if(Bi){if(i==="sync"){const y=eE();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=pn,y.resume=pn,y.pause=pn,y}}const f=wt;c.call=(y,P,k)=>Tn(y,f,P,k);let p=!1;i==="post"?c.scheduler=y=>{xt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,P)=>{P?y():Gl(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=hv(t,e,c);return Bi&&(u?u.push(m):l&&m()),m}function tE(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?sm(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=so(this),c=rm(s,i.bind(r),n);return o(),c}function sm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const nE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${ns(e)}Modifiers`];function rE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&nE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ye(f)?f.trim():f)),o.number&&(s=n.map(Xo)));let c,l=r[c=wc(e)]||r[c=wc(Gt(e))];!l&&i&&(l=r[c=wc(ns(e))]),l&&Tn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Tn(u,t,6,s)}}const sE=new WeakMap;function im(t,e,n=!1){const r=n?sE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!me(t)){const l=u=>{const f=im(u,e,!0);f&&(c=!0,Tt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):Tt(o,i),Ve(t)&&r.set(t,o),o)}function La(t,e){return!t||!Pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,ns(e))||Ce(t,e))}function Kh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:y,ctx:P,inheritAttrs:k}=t,N=ra(t);let M,L;try{if(n.shapeFlag&4){const D=s||r,G=D;M=dn(u.call(G,D,f,p,y,m,P)),L=c}else{const D=e;M=dn(D.length>1?D(p,{attrs:c,slots:o,emit:l}):D(p,null)),L=e.props?c:iE(c)}}catch(D){bi.length=0,Oa(D,t,1),M=kt(Rr)}let V=M;if(L&&k!==!1){const D=Object.keys(L),{shapeFlag:G}=V;D.length&&G&7&&(i&&D.some(xl)&&(L=oE(L,i)),V=Cs(V,L,!1,!0))}return n.dirs&&(V=Cs(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&Kl(V,n.transition),M=V,ra(N),M}const iE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pa(n))&&((e||(e={}))[n]=t[n]);return e},oE=(t,e)=>{const n={};for(const r in t)(!xl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function aE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qh(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!La(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Qh(r,o,u):!0:!!o;return!1}function Qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!La(n,i))return!0}return!1}function cE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const om=t=>t.__isSuspense;function lE(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):pv(t)}const Le=Symbol.for("v-fgt"),Ua=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),Cc=Symbol.for("v-stc"),bi=[];let Ut=null;function se(t=!1){bi.push(Ut=t?null:[])}function uE(){bi.pop(),Ut=bi[bi.length-1]||null}let Fi=1;function oa(t,e=!1){Fi+=t,t<0&&Ut&&e&&(Ut.hasOnce=!0)}function am(t){return t.dynamicChildren=Fi>0?Ut||Es:null,uE(),Fi>0&&Ut&&Ut.push(t),t}function ge(t,e,n,r,s,i){return am(x(t,e,n,r,s,i,!0))}function Ht(t,e,n,r,s){return am(kt(t,e,n,r,s,!0))}function aa(t){return t?t.__v_isVNode===!0:!1}function li(t,e){return t.type===e.type&&t.key===e.key}const cm=({key:t})=>t??null,Bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||Ge(t)||me(t)?{i:Lt,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cm(e),ref:e&&Bo(e),scopeId:Up,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Lt};return c?(Jl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ye(n)?8:16),Fi>0&&!o&&Ut&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ut.push(l),l}const kt=hE;function hE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Nv)&&(t=Rr),aa(t)){const c=Cs(t,e,!0);return n&&Jl(c,n),Fi>0&&!i&&Ut&&(c.shapeFlag&6?Ut[Ut.indexOf(t)]=c:Ut.push(c)),c.patchFlag=-2,c}if(TE(t)&&(t=t.__vccOpts),e){e=fE(e);let{class:c,style:l}=e;c&&!Ye(c)&&(e.class=$n(c)),Ve(l)&&(zl(l)&&!ce(l)&&(l=Tt({},l)),e.style=xi(l))}const o=Ye(t)?1:om(t)?128:_v(t)?64:Ve(t)?4:me(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function fE(t){return t?zl(t)||Qp(t)?Tt({},t):t:null}function Cs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?dE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&cm(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Bo(e)):[i,Bo(e)]:Bo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cs(t.ssContent),ssFallback:t.ssFallback&&Cs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Kl(f,l.clone(f)),f}function mn(t=" ",e=0){return kt(Ua,null,t,e)}function zn(t="",e=!1){return e?(se(),Ht(Rr,null,t)):kt(Rr,null,t)}function dn(t){return t==null||typeof t=="boolean"?kt(Rr):ce(t)?kt(Le,null,t.slice()):aa(t)?hr(t):kt(Ua,null,String(t))}function hr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cs(t)}function Jl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Jl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qp(e)?e._ctx=Lt:s===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),r&64?(n=16,e=[mn(e)]):n=8);t.children=e,t.shapeFlag|=n}function dE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$n([e.class,r.class]));else if(s==="style")e.style=xi([e.style,r.style]);else if(Pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function un(t,e,n,r=null){Tn(t,e,7,[n,r])}const pE=Wp();let mE=0;function gE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||pE,i={uid:mE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jp(r,s),emitsOptions:im(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rE.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const lm=()=>wt||Lt;let ca,nl;{const t=Na(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ca=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),nl=e("__VUE_SSR_SETTERS__",n=>Bi=n)}const so=t=>{const e=wt;return ca(t),t.scope.on(),()=>{t.scope.off(),ca(e)}},Yh=()=>{wt&&wt.scope.off(),ca(null)};function um(t){return t.vnode.shapeFlag&4}let Bi=!1;function _E(t,e=!1,n=!1){e&&nl(e);const{props:r,children:s}=t.vnode,i=um(t);Hv(t,r,i,e),Gv(t,s,n||e);const o=i?yE(t,e):void 0;return e&&nl(!1),o}function yE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ov);const{setup:r}=n;if(r){Hn();const s=t.setupContext=r.length>1?EE(t):null,i=so(t),o=ro(r,t,0,[t.props,s]),c=ap(o);if(qn(),i(),(c||t.sp)&&!Ti(t)&&Bp(t),c){if(o.then(Yh,Yh),e)return o.then(l=>{Jh(t,l)}).catch(l=>{Oa(l,t,0)});t.asyncDep=o}else Jh(t,o)}else hm(t)}function Jh(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Vp(e)),hm(t)}function hm(t,e,n){const r=t.type;t.render||(t.render=r.render||pn);{const s=so(t);Hn();try{xv(t)}finally{qn(),s()}}}const vE={get(t,e){return yt(t,"get",""),t[e]}};function EE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,vE),slots:t.slots,emit:t.emit,expose:e}}function Fa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vp(Wl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ii)return Ii[n](t)},has(e,n){return n in e||n in Ii}})):t.proxy}function wE(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function TE(t){return me(t)&&"__vccOpts"in t}const Be=(t,e)=>lv(t,e,Bi);function fm(t,e,n){try{oa(-1);const r=arguments.length;return r===2?Ve(e)&&!ce(e)?aa(e)?kt(t,null,[e]):kt(t,e):kt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&aa(n)&&(n=[n]),kt(t,e,n))}finally{oa(1)}}const IE="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rl;const Xh=typeof window<"u"&&window.trustedTypes;if(Xh)try{rl=Xh.createPolicy("vue",{createHTML:t=>t})}catch{}const dm=rl?t=>rl.createHTML(t):t=>t,bE="http://www.w3.org/2000/svg",AE="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Zh=kn&&kn.createElement("template"),SE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?kn.createElementNS(bE,t):e==="mathml"?kn.createElementNS(AE,t):n?kn.createElement(t,{is:n}):kn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zh.innerHTML=dm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Zh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},RE=Symbol("_vtc");function CE(t,e,n){const r=t[RE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ef=Symbol("_vod"),PE=Symbol("_vsh"),kE=Symbol(""),DE=/(?:^|;)\s*display\s*:/;function NE(t,e,n){const r=t.style,s=Ye(n);let i=!1;if(n&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&jo(r,c,"")}else for(const o in e)n[o]==null&&jo(r,o,"");for(const o in n)o==="display"&&(i=!0),jo(r,o,n[o])}else if(s){if(e!==n){const o=r[kE];o&&(n+=";"+o),r.cssText=n,i=DE.test(n)}}else e&&t.removeAttribute("style");ef in t&&(t[ef]=i?r.display:"",t[PE]&&(r.display="none"))}const tf=/\s*!important$/;function jo(t,e,n){if(ce(n))n.forEach(r=>jo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=VE(t,e);tf.test(n)?t.setProperty(ns(r),n.replace(tf,""),"important"):t[r]=n}}const nf=["Webkit","Moz","ms"],Pc={};function VE(t,e){const n=Pc[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return Pc[e]=r;r=Da(r);for(let s=0;s<nf.length;s++){const i=nf[s]+r;if(i in t)return Pc[e]=i}return e}const rf="http://www.w3.org/1999/xlink";function sf(t,e,n,r,s,i=Oy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rf,e.slice(6,e.length)):t.setAttributeNS(rf,e,n):n==null||i&&!hp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":wn(n)?String(n):n)}function of(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?dm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=hp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Vn(t,e,n,r){t.addEventListener(e,n,r)}function OE(t,e,n,r){t.removeEventListener(e,n,r)}const af=Symbol("_vei");function xE(t,e,n,r,s=null){const i=t[af]||(t[af]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=ME(e);if(r){const u=i[e]=FE(r,s);Vn(t,c,u,l)}else o&&(OE(t,c,o,l),i[e]=void 0)}}const cf=/(?:Once|Passive|Capture)$/;function ME(t){let e;if(cf.test(t)){e={};let r;for(;r=t.match(cf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ns(t.slice(2)),e]}let kc=0;const LE=Promise.resolve(),UE=()=>kc||(LE.then(()=>kc=0),kc=Date.now());function FE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Tn(BE(r,n.value),e,5,[r])};return n.value=t,n.attached=UE(),n}function BE(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const lf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?CE(t,r,o):e==="style"?NE(t,n,r):Pa(e)?xl(e)||xE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$E(t,e,r,o))?(of(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?of(t,Gt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sf(t,e,r,o))};function $E(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&lf(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lf(e)&&Ye(n)?!1:e in t}const Cr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Uo(e,n):e};function HE(t){t.target.composing=!0}function uf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zt=Symbol("_assign"),Wt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[zt]=Cr(s);const i=r||s.props&&s.props.type==="number";Vn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Xo(c)),t[zt](c)}),n&&Vn(t,"change",()=>{t.value=t.value.trim()}),e||(Vn(t,"compositionstart",HE),Vn(t,"compositionend",uf),Vn(t,"change",uf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[zt]=Cr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},pm={deep:!0,created(t,e,n){t[zt]=Cr(n),Vn(t,"change",()=>{const r=t._modelValue,s=Ps(t),i=t.checked,o=t[zt];if(ce(r)){const c=Ul(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Fs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(mm(t,i))})},mounted:hf,beforeUpdate(t,e,n){t[zt]=Cr(n),hf(t,e,n)}};function hf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ce(e))s=Ul(e,r.props.value)>-1;else if(Fs(e))s=e.has(r.props.value);else{if(e===n)return;s=Qr(e,mm(t,!0))}t.checked!==s&&(t.checked=s)}const qE={created(t,{value:e},n){t.checked=Qr(e,n.props.value),t[zt]=Cr(n),Vn(t,"change",()=>{t[zt](Ps(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[zt]=Cr(r),e!==n&&(t.checked=Qr(e,r.props.value))}},ji={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Fs(e);Vn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Xo(Ps(o)):Ps(o));t[zt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,xa(()=>{t._assigning=!1})}),t[zt]=Cr(r)},mounted(t,{value:e}){ff(t,e)},beforeUpdate(t,e,n){t[zt]=Cr(n)},updated(t,{value:e}){t._assigning||ff(t,e)}};function ff(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!Fs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Ps(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Ul(e,c)>-1}else o.selected=e.has(c);else if(Qr(Ps(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ps(t){return"_value"in t?t._value:t.value}function mm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const zE={created(t,e,n){Do(t,e,n,null,"created")},mounted(t,e,n){Do(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Do(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Do(t,e,n,r,"updated")}};function WE(t,e){switch(t){case"SELECT":return ji;case"TEXTAREA":return Wt;default:switch(e){case"checkbox":return pm;case"radio":return qE;default:return Wt}}}function Do(t,e,n,r,s){const o=WE(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const GE=["ctrl","shift","alt","meta"],KE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>GE.some(n=>t[`${n}Key`]&&!e.includes(n))},Xl=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=KE[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},QE=Tt({patchProp:jE},SE);let df;function YE(){return df||(df=Qv(QE))}const JE=((...t)=>{const e=YE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ZE(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,XE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function XE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ZE(t){return Ye(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let gm;const Ba=t=>gm=t,_m=Symbol();function sl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ai;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ai||(Ai={}));function ew(){const t=mp(!0),e=t.run(()=>le({}));let n=[],r=[];const s=Wl({install(i){Ba(s),s._a=i,i.provide(_m,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ym=()=>{};function pf(t,e,n,r=ym){t.add(e);const s=()=>{t.delete(e)&&r()};return!n&&gp()&&My(s),s}function ds(t,...e){t.forEach(n=>{n(...e)})}const tw=t=>t(),mf=Symbol(),Dc=Symbol();function il(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];sl(s)&&sl(r)&&t.hasOwnProperty(n)&&!Ge(r)&&!vr(r)?t[n]=il(s,r):t[n]=r}return t}const nw=Symbol();function rw(t){return!sl(t)||!Object.prototype.hasOwnProperty.call(t,nw)}const{assign:lr}=Object;function sw(t){return!!(Ge(t)&&t.effect)}function iw(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=iv(n.state.value[t]);return lr(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Wl(Be(()=>{Ba(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return l=vm(t,u,e,n,r,!0),l}function vm(t,e,n={},r,s,i){let o;const c=lr({actions:{}},n),l={deep:!0};let u,f,p=new Set,m=new Set,y;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),le({});let k;function N(_){let v;u=f=!1,typeof _=="function"?(_(r.state.value[t]),v={type:Ai.patchFunction,storeId:t,events:y}):(il(r.state.value[t],_),v={type:Ai.patchObject,payload:_,storeId:t,events:y});const A=k=Symbol();xa().then(()=>{k===A&&(u=!0)}),f=!0,ds(p,v,r.state.value[t])}const M=i?function(){const{state:v}=n,A=v?v():{};this.$patch(b=>{lr(b,A)})}:ym;function L(){o.stop(),p.clear(),m.clear(),r._s.delete(t)}const V=(_,v="")=>{if(mf in _)return _[Dc]=v,_;const A=function(){Ba(r);const b=Array.from(arguments),S=new Set,w=new Set;function He(pe){S.add(pe)}function ht(pe){w.add(pe)}ds(m,{args:b,name:A[Dc],store:G,after:He,onError:ht});let Oe;try{Oe=_.apply(this&&this.$id===t?this:G,b)}catch(pe){throw ds(w,pe),pe}return Oe instanceof Promise?Oe.then(pe=>(ds(S,pe),pe)).catch(pe=>(ds(w,pe),Promise.reject(pe))):(ds(S,Oe),Oe)};return A[mf]=!0,A[Dc]=v,A},D={_p:r,$id:t,$onAction:pf.bind(null,m),$patch:N,$reset:M,$subscribe(_,v={}){const A=pf(p,_,v.detached,()=>b()),b=o.run(()=>Is(()=>r.state.value[t],S=>{(v.flush==="sync"?f:u)&&_({storeId:t,type:Ai.direct,events:y},S)},lr({},l,v)));return A},$dispose:L},G=no(D);r._s.set(t,G);const T=(r._a&&r._a.runWithContext||tw)(()=>r._e.run(()=>(o=mp()).run(()=>e({action:V}))));for(const _ in T){const v=T[_];if(Ge(v)&&!sw(v)||vr(v))i||(P&&rw(v)&&(Ge(v)?v.value=P[_]:il(v,P[_])),r.state.value[t][_]=v);else if(typeof v=="function"){const A=V(v,_);T[_]=A,c.actions[_]=v}}return lr(G,T),lr(Se(G),T),Object.defineProperty(G,"$state",{get:()=>r.state.value[t],set:_=>{N(v=>{lr(v,_)})}}),r._p.forEach(_=>{lr(G,o.run(()=>_({store:G,app:r._a,pinia:r,options:c})))}),P&&i&&n.hydrate&&n.hydrate(G.$state,P),u=!0,f=!0,G}/*! #__NO_SIDE_EFFECTS__ */function ow(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,c){const l=$v();return o=o||(l?rn(_m,null):null),o&&Ba(o),o=gm,o._s.has(t)||(s?vm(t,e,r,o):iw(t,r,o)),o._s.get(t)}return i.$id=t,i}const aw={class:"app_holder"},cw={__name:"App",setup(t){return(e,n)=>{const r=Dv("router-view");return se(),ge("div",aw,[kt(r)])}}};/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ms=typeof document<"u";function Em(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Em(t.default)}const Re=Object.assign;function Nc(t,e){const n={};for(const r in e){const s=e[r];n[r]=on(s)?s.map(t):t(s)}return n}const Si=()=>{},on=Array.isArray;function gf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const wm=/#/g,uw=/&/g,hw=/\//g,fw=/=/g,dw=/\?/g,Tm=/\+/g,pw=/%5B/g,mw=/%5D/g,Im=/%5E/g,gw=/%60/g,bm=/%7B/g,_w=/%7C/g,Am=/%7D/g,yw=/%20/g;function Zl(t){return t==null?"":encodeURI(""+t).replace(_w,"|").replace(pw,"[").replace(mw,"]")}function vw(t){return Zl(t).replace(bm,"{").replace(Am,"}").replace(Im,"^")}function ol(t){return Zl(t).replace(Tm,"%2B").replace(yw,"+").replace(wm,"%23").replace(uw,"%26").replace(gw,"`").replace(bm,"{").replace(Am,"}").replace(Im,"^")}function Ew(t){return ol(t).replace(fw,"%3D")}function ww(t){return Zl(t).replace(wm,"%23").replace(dw,"%3F")}function Tw(t){return ww(t).replace(hw,"%2F")}function $i(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Iw=/\/$/,bw=t=>t.replace(Iw,"");function Vc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Cw(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:$i(o)}}function Aw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _f(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ks(e.matched[r],n.matched[s])&&Sm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rw(t[n],e[n]))return!1;return!0}function Rw(t,e){return on(t)?yf(t,e):on(e)?yf(e,t):t===e}function yf(t,e){return on(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Cw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ar={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let al=(function(t){return t.pop="pop",t.push="push",t})({}),Oc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function Pw(t){if(!t)if(ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bw(t)}const kw=/^[^#]+#/;function Dw(t,e){return t.replace(kw,"#")+e}function Nw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ja=()=>({left:window.scrollX,top:window.scrollY});function Vw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Nw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vf(t,e){return(history.state?history.state.position-e:-1)+t}const cl=new Map;function Ow(t,e){cl.set(t,e)}function xw(t){const e=cl.get(t);return cl.delete(t),e}function Mw(t){return typeof t=="string"||t&&typeof t=="object"}function Rm(t){return typeof t=="string"||typeof t=="symbol"}let ze=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Cm=Symbol("");ze.MATCHER_NOT_FOUND+"",ze.NAVIGATION_GUARD_REDIRECT+"",ze.NAVIGATION_ABORTED+"",ze.NAVIGATION_CANCELLED+"",ze.NAVIGATION_DUPLICATED+"";function Ds(t,e){return Re(new Error,{type:t,[Cm]:!0},e)}function Pn(t,e){return t instanceof Error&&Cm in t&&(e==null||!!(t.type&e))}const Lw=["params","query","hash"];function Uw(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Lw)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Fw(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Tm," "),i=s.indexOf("="),o=$i(i<0?s:s.slice(0,i)),c=i<0?null:$i(s.slice(i+1));if(o in e){let l=e[o];on(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function Ef(t){let e="";for(let n in t){const r=t[n];if(n=Ew(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(r)?r.map(s=>s&&ol(s)):[r&&ol(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Bw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=on(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jw=Symbol(""),wf=Symbol(""),$a=Symbol(""),Pm=Symbol(""),ll=Symbol("");function ui(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ds(ze.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):Mw(m)?l(Ds(ze.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function xc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Em(l)){const u=(l.__vccOpts||l)[e];u&&i.push(fr(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=lw(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&fr(m,n,r,o,c,s)()}))}}return i}function $w(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>ks(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>ks(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Hw=()=>location.protocol+"//"+location.host;function km(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),_f(c,"")}return _f(n,t)+r+s}function qw(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const y=km(t,location),P=n.value,k=e.value;let N=0;if(m){if(n.value=y,e.value=m,o&&o===P){o=null;return}N=k?m.position-k.position:0}else r(y);s.forEach(M=>{M(n.value,P,{delta:N,type:al.pop,direction:N?N>0?Oc.forward:Oc.back:Oc.unknown})})};function l(){o=n.value}function u(m){s.push(m);const y=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Re({},m.state,{scroll:ja()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function Tf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ja():null}}function zw(t){const{history:e,location:n}=window,r={value:km(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:Hw()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(l,u){i(l,Re({},e.state,Tf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Re({},s.value,e.state,{forward:l,scroll:ja()});i(f.current,f,!0),i(l,Re({},Tf(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function Ww(t){t=Pw(t);const e=zw(t),n=qw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:Dw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let qr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Xe=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Xe||{});const Gw={type:qr.Static,value:""},Kw=/[a-zA-Z0-9_]/;function Qw(t){if(!t)return[[]];if(t==="/")return[[Gw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=Xe.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===Xe.Static?i.push({type:qr.Static,value:u}):n===Xe.Param||n===Xe.ParamRegExp||n===Xe.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:qr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Xe.ParamRegExp){r=n,n=Xe.EscapeNext;continue}switch(n){case Xe.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=Xe.Param):m();break;case Xe.EscapeNext:m(),n=r;break;case Xe.Param:l==="("?n=Xe.ParamRegExp:Kw.test(l)?m():(p(),n=Xe.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Xe.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Xe.ParamRegExpEnd:f+=l;break;case Xe.ParamRegExpEnd:p(),n=Xe.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Xe.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const If="[^/]+?",Yw={sensitive:!1,strict:!1,start:!0,end:!0};var St=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(St||{});const Jw=/[.+*?^${}()[\]/\\]/g;function Xw(t,e){const n=Re({},Yw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[St.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=St.Segment+(n.sensitive?St.BonusCaseSensitive:0);if(m.type===qr.Static)p||(s+="/"),s+=m.value.replace(Jw,"\\$&"),y+=St.Static;else if(m.type===qr.Param){const{value:P,repeatable:k,optional:N,regexp:M}=m;i.push({name:P,repeatable:k,optional:N});const L=M||If;if(L!==If){y+=St.BonusCustomRegExp;try{`${L}`}catch(D){throw new Error(`Invalid custom RegExp for param "${P}" (${L}): `+D.message)}}let V=k?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;p||(V=N&&u.length<2?`(?:/${V})`:"/"+V),N&&(V+="?"),s+=V,y+=St.Dynamic,N&&(y+=St.BonusOptional),k&&(y+=St.BonusRepeatable),L===".*"&&(y+=St.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=St.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",P=i[m-1];p[P.name]=y&&P.repeatable?y.split("/"):y}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===qr.Static)f+=y.value;else if(y.type===qr.Param){const{value:P,repeatable:k,optional:N}=y,M=P in u?u[P]:"";if(on(M)&&!k)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const L=on(M)?M.join("/"):M;if(!L)if(N)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);f+=L}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Zw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===St.Static+St.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===St.Static+St.Segment?1:-1:0}function Dm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Zw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(bf(r))return 1;if(bf(s))return-1}return s.length-r.length}function bf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eT={strict:!1,end:!0,sensitive:!1};function tT(t,e,n){const r=Xw(Qw(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function nT(t,e){const n=[],r=new Map;e=gf(eT,e);function s(p){return r.get(p)}function i(p,m,y){const P=!y,k=Sf(p);k.aliasOf=y&&y.record;const N=gf(e,p),M=[k];if("alias"in p){const D=typeof p.alias=="string"?[p.alias]:p.alias;for(const G of D)M.push(Sf(Re({},k,{components:y?y.record.components:k.components,path:G,aliasOf:y?y.record:k})))}let L,V;for(const D of M){const{path:G}=D;if(m&&G[0]!=="/"){const ee=m.record.path,T=ee[ee.length-1]==="/"?"":"/";D.path=m.record.path+(G&&T+G)}if(L=tT(D,m,N),y?y.alias.push(L):(V=V||L,V!==L&&V.alias.push(L),P&&p.name&&!Rf(L)&&o(p.name)),Nm(L)&&l(L),k.children){const ee=k.children;for(let T=0;T<ee.length;T++)i(ee[T],L,y&&y.children[T])}y=y||L}return V?()=>{o(V)}:Si}function o(p){if(Rm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=iT(p,n);n.splice(m,0,p),p.record.name&&!Rf(p)&&r.set(p.record.name,p)}function u(p,m){let y,P={},k,N;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Ds(ze.MATCHER_NOT_FOUND,{location:p});N=y.record.name,P=Re(Af(m.params,y.keys.filter(V=>!V.optional).concat(y.parent?y.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),p.params&&Af(p.params,y.keys.map(V=>V.name))),k=y.stringify(P)}else if(p.path!=null)k=p.path,y=n.find(V=>V.re.test(k)),y&&(P=y.parse(k),N=y.record.name);else{if(y=m.name?r.get(m.name):n.find(V=>V.re.test(m.path)),!y)throw Ds(ze.MATCHER_NOT_FOUND,{location:p,currentLocation:m});N=y.record.name,P=Re({},m.params,p.params),k=y.stringify(P)}const M=[];let L=y;for(;L;)M.unshift(L.record),L=L.parent;return{name:N,path:k,params:P,matched:M,meta:sT(M)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Af(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:rT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function rT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sT(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function iT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Dm(t,e[i])<0?r=i:n=i+1}const s=oT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function oT(t){let e=t;for(;e=e.parent;)if(Nm(e)&&Dm(t,e)===0)return e}function Nm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Cf(t){const e=rn($a),n=rn(Pm),r=Be(()=>{const l=Un(t.to);return e.resolve(l)}),s=Be(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(ks.bind(null,f));if(m>-1)return m;const y=Pf(l[u-2]);return u>1&&Pf(f)===y&&p[p.length-1].path!==y?p.findIndex(ks.bind(null,l[u-2])):m}),i=Be(()=>s.value>-1&&hT(n.params,r.value.params)),o=Be(()=>s.value>-1&&s.value===n.matched.length-1&&Sm(n.params,r.value.params));function c(l={}){if(uT(l)){const u=e[Un(t.replace)?"replace":"push"](Un(t.to)).catch(Si);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function aT(t){return t.length===1?t[0]:t}const cT=Fp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Cf,setup(t,{slots:e}){const n=no(Cf(t)),{options:r}=rn($a),s=Be(()=>({[kf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[kf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&aT(e.default(n));return t.custom?i:fm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),lT=cT;function uT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!on(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Pf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kf=(t,e,n)=>t??e??n,fT=Fp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=rn(ll),s=Be(()=>t.route||r.value),i=rn(wf,0),o=Be(()=>{let u=Un(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Be(()=>s.value.matched[o.value]);Fo(wf,Be(()=>o.value+1)),Fo(jw,c),Fo(ll,s);const l=le();return Is(()=>[l.value,c.value,t.name],([u,f,p],[m,y,P])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!ks(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Df(n.default,{Component:m,route:u});const y=p.props[f],P=y?y===!0?u.params:typeof y=="function"?y(u):y:null,N=fm(m,Re({},P,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Df(n.default,{Component:N,route:u})||N}}});function Df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dT=fT;function pT(t){const e=nT(t.routes,t),n=t.parseQuery||Fw,r=t.stringifyQuery||Ef,s=t.history,i=ui(),o=ui(),c=ui(),l=nv(ar);let u=ar;ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Nc.bind(null,F=>""+F),p=Nc.bind(null,Tw),m=Nc.bind(null,$i);function y(F,X){let Y,ne;return Rm(F)?(Y=e.getRecordMatcher(F),ne=X):ne=F,e.addRoute(ne,Y)}function P(F){const X=e.getRecordMatcher(F);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(F=>F.record)}function N(F){return!!e.getRecordMatcher(F)}function M(F,X){if(X=Re({},X||l.value),typeof F=="string"){const R=Vc(n,F,X.path),B=e.resolve({path:R.path},X),$=s.createHref(R.fullPath);return Re(R,B,{params:m(B.params),hash:$i(R.hash),redirectedFrom:void 0,href:$})}let Y;if(F.path!=null)Y=Re({},F,{path:Vc(n,F.path,X.path).path});else{const R=Re({},F.params);for(const B in R)R[B]==null&&delete R[B];Y=Re({},F,{params:p(R)}),X.params=p(X.params)}const ne=e.resolve(Y,X),ve=F.hash||"";ne.params=f(m(ne.params));const E=Aw(r,Re({},F,{hash:vw(ve),path:ne.path})),I=s.createHref(E);return Re({fullPath:E,hash:ve,query:r===Ef?Bw(F.query):F.query||{}},ne,{redirectedFrom:void 0,href:I})}function L(F){return typeof F=="string"?Vc(n,F,l.value.path):Re({},F)}function V(F,X){if(u!==F)return Ds(ze.NAVIGATION_CANCELLED,{from:X,to:F})}function D(F){return T(F)}function G(F){return D(Re(L(F),{replace:!0}))}function ee(F,X){const Y=F.matched[F.matched.length-1];if(Y&&Y.redirect){const{redirect:ne}=Y;let ve=typeof ne=="function"?ne(F,X):ne;return typeof ve=="string"&&(ve=ve.includes("?")||ve.includes("#")?ve=L(ve):{path:ve},ve.params={}),Re({query:F.query,hash:F.hash,params:ve.path!=null?{}:F.params},ve)}}function T(F,X){const Y=u=M(F),ne=l.value,ve=F.state,E=F.force,I=F.replace===!0,R=ee(Y,ne);if(R)return T(Re(L(R),{state:typeof R=="object"?Re({},ve,R.state):ve,force:E,replace:I}),X||Y);const B=Y;B.redirectedFrom=X;let $;return!E&&Sw(r,ne,Y)&&($=Ds(ze.NAVIGATION_DUPLICATED,{to:B,from:ne}),Dt(ne,ne,!0,!1)),($?Promise.resolve($):A(B,ne)).catch(U=>Pn(U)?Pn(U,ze.NAVIGATION_GUARD_REDIRECT)?U:an(U):Ie(U,B,ne)).then(U=>{if(U){if(Pn(U,ze.NAVIGATION_GUARD_REDIRECT))return T(Re({replace:I},L(U.to),{state:typeof U.to=="object"?Re({},ve,U.to.state):ve,force:E}),X||B)}else U=S(B,ne,!0,I,ve);return b(B,ne,U),U})}function _(F,X){const Y=V(F,X);return Y?Promise.reject(Y):Promise.resolve()}function v(F){const X=Jt.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(F):F()}function A(F,X){let Y;const[ne,ve,E]=$w(F,X);Y=xc(ne.reverse(),"beforeRouteLeave",F,X);for(const R of ne)R.leaveGuards.forEach(B=>{Y.push(fr(B,F,X))});const I=_.bind(null,F,X);return Y.push(I),ft(Y).then(()=>{Y=[];for(const R of i.list())Y.push(fr(R,F,X));return Y.push(I),ft(Y)}).then(()=>{Y=xc(ve,"beforeRouteUpdate",F,X);for(const R of ve)R.updateGuards.forEach(B=>{Y.push(fr(B,F,X))});return Y.push(I),ft(Y)}).then(()=>{Y=[];for(const R of E)if(R.beforeEnter)if(on(R.beforeEnter))for(const B of R.beforeEnter)Y.push(fr(B,F,X));else Y.push(fr(R.beforeEnter,F,X));return Y.push(I),ft(Y)}).then(()=>(F.matched.forEach(R=>R.enterCallbacks={}),Y=xc(E,"beforeRouteEnter",F,X,v),Y.push(I),ft(Y))).then(()=>{Y=[];for(const R of o.list())Y.push(fr(R,F,X));return Y.push(I),ft(Y)}).catch(R=>Pn(R,ze.NAVIGATION_CANCELLED)?R:Promise.reject(R))}function b(F,X,Y){c.list().forEach(ne=>v(()=>ne(F,X,Y)))}function S(F,X,Y,ne,ve){const E=V(F,X);if(E)return E;const I=X===ar,R=ms?history.state:{};Y&&(ne||I?s.replace(F.fullPath,Re({scroll:I&&R&&R.scroll},ve)):s.push(F.fullPath,ve)),l.value=F,Dt(F,X,Y,I),an()}let w;function He(){w||(w=s.listen((F,X,Y)=>{if(!Xt.listening)return;const ne=M(F),ve=ee(ne,Xt.currentRoute.value);if(ve){T(Re(ve,{replace:!0,force:!0}),ne).catch(Si);return}u=ne;const E=l.value;ms&&Ow(vf(E.fullPath,Y.delta),ja()),A(ne,E).catch(I=>Pn(I,ze.NAVIGATION_ABORTED|ze.NAVIGATION_CANCELLED)?I:Pn(I,ze.NAVIGATION_GUARD_REDIRECT)?(T(Re(L(I.to),{force:!0}),ne).then(R=>{Pn(R,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&!Y.delta&&Y.type===al.pop&&s.go(-1,!1)}).catch(Si),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Ie(I,ne,E))).then(I=>{I=I||S(ne,E,!1),I&&(Y.delta&&!Pn(I,ze.NAVIGATION_CANCELLED)?s.go(-Y.delta,!1):Y.type===al.pop&&Pn(I,ze.NAVIGATION_ABORTED|ze.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ne,E,I)}).catch(Si)}))}let ht=ui(),Oe=ui(),pe;function Ie(F,X,Y){an(F);const ne=Oe.list();return ne.length?ne.forEach(ve=>ve(F,X,Y)):console.error(F),Promise.reject(F)}function Ct(){return pe&&l.value!==ar?Promise.resolve():new Promise((F,X)=>{ht.add([F,X])})}function an(F){return pe||(pe=!F,He(),ht.list().forEach(([X,Y])=>F?Y(F):X()),ht.reset()),F}function Dt(F,X,Y,ne){const{scrollBehavior:ve}=t;if(!ms||!ve)return Promise.resolve();const E=!Y&&xw(vf(F.fullPath,0))||(ne||!Y)&&history.state&&history.state.scroll||null;return xa().then(()=>ve(F,X,E)).then(I=>I&&Vw(I)).catch(I=>Ie(I,F,X))}const it=F=>s.go(F);let Rn;const Jt=new Set,Xt={currentRoute:l,listening:!0,addRoute:y,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:k,resolve:M,options:t,push:D,replace:G,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Oe.add,isReady:Ct,install(F){F.component("RouterLink",lT),F.component("RouterView",dT),F.config.globalProperties.$router=Xt,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Un(l)}),ms&&!Rn&&l.value===ar&&(Rn=!0,D(s.location).catch(ne=>{}));const X={};for(const ne in ar)Object.defineProperty(X,ne,{get:()=>l.value[ne],enumerable:!0});F.provide($a,Xt),F.provide(Pm,Dp(X)),F.provide(ll,l);const Y=F.unmount;Jt.add(F),F.unmount=function(){Jt.delete(F),Jt.size<1&&(u=ar,w&&w(),w=null,l.value=ar,Rn=!1,pe=!1),Y()}}};function ft(F){return F.reduce((X,Y)=>X.then(()=>v(Y)),Promise.resolve())}return Xt}function Ha(){return rn($a)}const mT=()=>{};var Nf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Om={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new _T;const m=i<<2|c>>4;if(r.push(m),u!==64){const y=c<<4&240|u>>2;if(r.push(y),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _T extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yT=function(t){const e=Vm(t);return Om.encodeByteArray(e,!0)},la=function(t){return yT(t).replace(/\./g,"")},xm=function(t){try{return Om.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ET=()=>vT().__FIREBASE_DEFAULTS__,wT=()=>{if(typeof process>"u"||typeof Nf>"u")return;const t=Nf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xm(t[1]);return e&&JSON.parse(e)},qa=()=>{try{return mT()||ET()||wT()||TT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mm=t=>qa()?.emulatorHosts?.[t],IT=t=>{const e=Mm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Lm=()=>qa()?.config,Um=t=>qa()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Bs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function AT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[la(JSON.stringify(n)),la(JSON.stringify(o)),""].join(".")}const Ri={};function ST(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ri))Ri[e]?t.emulator.push(e):t.prod.push(e);return t}function RT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Vf=!1;function Bm(t,e){if(typeof window>"u"||typeof document>"u"||!Bs(window.location.host)||Ri[t]===e||Ri[t]||Vf)return;Ri[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=ST().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Vf=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=RT(r),y=n("text"),P=document.getElementById(y)||document.createElement("span"),k=n("learnmore"),N=document.getElementById(k)||document.createElement("a"),M=n("preprendIcon"),L=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const V=m.element;c(V),f(N,k);const D=u();l(L,M),V.append(L,P,N,D),document.body.appendChild(V)}i?(P.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function PT(){const t=qa()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VT(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OT(){return!PT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xT(){try{return typeof indexedDB=="object"}catch{return!1}}function MT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="FirebaseError";class Jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LT,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?UT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Jn(s,c,r)}}function UT(t,e){return t.replace(FT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const FT=/\{\$([^}]+)}/g;function BT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Of(i)&&Of(o)){if(!Yr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Of(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function di(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jT(t,e){const n=new $T(t,e);return n.subscribe.bind(n)}class $T{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mc),s.error===void 0&&(s.error=Mc),s.complete===void 0&&(s.complete=Mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}/**
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
 */function Qt(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hr="[DEFAULT]";/**
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
 */class qT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WT(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zT(t){return t===Hr?void 0:t}function WT(t){return t.instantiationMode==="EAGER"}/**
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
 */class GT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const KT={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},QT=Ee.INFO,YT={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},JT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=YT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=QT,this._logHandler=JT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const XT=(t,e)=>e.some(n=>t instanceof n);let xf,Mf;function ZT(){return xf||(xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eI(){return Mf||(Mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jm=new WeakMap,ul=new WeakMap,$m=new WeakMap,Lc=new WeakMap,tu=new WeakMap;function tI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jm.set(n,t)}).catch(()=>{}),tu.set(e,t),e}function nI(t){if(ul.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ul.set(t,e)}let hl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ul.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$m.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rI(t){hl=t(hl)}function sI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uc(this),e,...n);return $m.set(r,e.sort?e.sort():[e]),Er(r)}:eI().includes(t)?function(...e){return t.apply(Uc(this),e),Er(jm.get(this))}:function(...e){return Er(t.apply(Uc(this),e))}}function iI(t){return typeof t=="function"?sI(t):(t instanceof IDBTransaction&&nI(t),XT(t,ZT())?new Proxy(t,hl):t)}function Er(t){if(t instanceof IDBRequest)return tI(t);if(Lc.has(t))return Lc.get(t);const e=iI(t);return e!==t&&(Lc.set(t,e),tu.set(e,t)),e}const Uc=t=>tu.get(t);function oI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Er(o.result),l.oldVersion,l.newVersion,Er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const aI=["get","getKey","getAll","getAllKeys","count"],cI=["put","add","delete","clear"],Fc=new Map;function Lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||aI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Fc.set(e,i),i}rI(t=>({...t,get:(e,n,r)=>Lf(e,n)||t.get(e,n,r),has:(e,n)=>!!Lf(e,n)||t.has(e,n)}));/**
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
 */class lI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uI(t){return t.getComponent()?.type==="VERSION"}const fl="@firebase/app",Uf="0.14.4";/**
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
 */const Wn=new eu("@firebase/app"),hI="@firebase/app-compat",fI="@firebase/analytics-compat",dI="@firebase/analytics",pI="@firebase/app-check-compat",mI="@firebase/app-check",gI="@firebase/auth",_I="@firebase/auth-compat",yI="@firebase/database",vI="@firebase/data-connect",EI="@firebase/database-compat",wI="@firebase/functions",TI="@firebase/functions-compat",II="@firebase/installations",bI="@firebase/installations-compat",AI="@firebase/messaging",SI="@firebase/messaging-compat",RI="@firebase/performance",CI="@firebase/performance-compat",PI="@firebase/remote-config",kI="@firebase/remote-config-compat",DI="@firebase/storage",NI="@firebase/storage-compat",VI="@firebase/firestore",OI="@firebase/ai",xI="@firebase/firestore-compat",MI="firebase",LI="12.4.0";/**
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
 */const dl="[DEFAULT]",UI={[fl]:"fire-core",[hI]:"fire-core-compat",[dI]:"fire-analytics",[fI]:"fire-analytics-compat",[mI]:"fire-app-check",[pI]:"fire-app-check-compat",[gI]:"fire-auth",[_I]:"fire-auth-compat",[yI]:"fire-rtdb",[vI]:"fire-data-connect",[EI]:"fire-rtdb-compat",[wI]:"fire-fn",[TI]:"fire-fn-compat",[II]:"fire-iid",[bI]:"fire-iid-compat",[AI]:"fire-fcm",[SI]:"fire-fcm-compat",[RI]:"fire-perf",[CI]:"fire-perf-compat",[PI]:"fire-rc",[kI]:"fire-rc-compat",[DI]:"fire-gcs",[NI]:"fire-gcs-compat",[VI]:"fire-fst",[xI]:"fire-fst-compat",[OI]:"fire-vertex","fire-js":"fire-js",[MI]:"fire-js-all"};/**
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
 */const ua=new Map,FI=new Map,pl=new Map;function Ff(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ns(t){const e=t.name;if(pl.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;pl.set(e,t);for(const n of ua.values())Ff(n,t);for(const n of FI.values())Ff(n,t);return!0}function nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const BI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new io("app","Firebase",BI);/**
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
 */class jI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const js=LI;function Hm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:dl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw wr.create("bad-app-name",{appName:String(s)});if(n||(n=Lm()),!n)throw wr.create("no-options");const i=ua.get(s);if(i){if(Yr(n,i.options)&&Yr(r,i.config))return i;throw wr.create("duplicate-app",{appName:s})}const o=new GT(s);for(const l of pl.values())o.addComponent(l);const c=new jI(n,r,o);return ua.set(s,c),c}function qm(t=dl){const e=ua.get(t);if(!e&&t===dl&&Lm())return Hm();if(!e)throw wr.create("no-app",{appName:t});return e}function Tr(t,e,n){let r=UI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(o.join(" "));return}Ns(new Jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const $I="firebase-heartbeat-database",HI=1,Hi="firebase-heartbeat-store";let Bc=null;function zm(){return Bc||(Bc=oI($I,HI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function qI(t){try{const n=(await zm()).transaction(Hi),r=await n.objectStore(Hi).get(Wm(t));return await n.done,r}catch(e){if(e instanceof Jn)Wn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e?.message});Wn.warn(n.message)}}}async function Bf(t,e){try{const r=(await zm()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(e,Wm(t)),await r.done}catch(n){if(n instanceof Jn)Wn.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n?.message});Wn.warn(r.message)}}}function Wm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zI=1024,WI=30;class GI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>WI){const s=YI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Wn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jf(),{heartbeatsToSend:n,unsentEntries:r}=KI(this._heartbeatsCache.heartbeats),s=la(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Wn.warn(e),""}}}function jf(){return new Date().toISOString().substring(0,10)}function KI(t,e=zI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$f(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xT()?MT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $f(t){return la(JSON.stringify({version:2,heartbeats:t})).length}function YI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function JI(t){Ns(new Jr("platform-logger",e=>new lI(e),"PRIVATE")),Ns(new Jr("heartbeat",e=>new GI(e),"PRIVATE")),Tr(fl,Uf,t),Tr(fl,Uf,"esm2020"),Tr("fire-js","")}JI("");var Hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,Gm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function v(){}v.prototype=_.prototype,T.F=_.prototype,T.prototype=new v,T.prototype.constructor=T,T.D=function(A,b,S){for(var w=Array(arguments.length-2),He=2;He<arguments.length;He++)w[He-2]=arguments[He];return _.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,v){v||(v=0);const A=Array(16);if(typeof _=="string")for(var b=0;b<16;++b)A[b]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(b=0;b<16;++b)A[b]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=T.g[0],v=T.g[1],b=T.g[2];let S=T.g[3],w;w=_+(S^v&(b^S))+A[0]+3614090360&4294967295,_=v+(w<<7&4294967295|w>>>25),w=S+(b^_&(v^b))+A[1]+3905402710&4294967295,S=_+(w<<12&4294967295|w>>>20),w=b+(v^S&(_^v))+A[2]+606105819&4294967295,b=S+(w<<17&4294967295|w>>>15),w=v+(_^b&(S^_))+A[3]+3250441966&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(S^v&(b^S))+A[4]+4118548399&4294967295,_=v+(w<<7&4294967295|w>>>25),w=S+(b^_&(v^b))+A[5]+1200080426&4294967295,S=_+(w<<12&4294967295|w>>>20),w=b+(v^S&(_^v))+A[6]+2821735955&4294967295,b=S+(w<<17&4294967295|w>>>15),w=v+(_^b&(S^_))+A[7]+4249261313&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(S^v&(b^S))+A[8]+1770035416&4294967295,_=v+(w<<7&4294967295|w>>>25),w=S+(b^_&(v^b))+A[9]+2336552879&4294967295,S=_+(w<<12&4294967295|w>>>20),w=b+(v^S&(_^v))+A[10]+4294925233&4294967295,b=S+(w<<17&4294967295|w>>>15),w=v+(_^b&(S^_))+A[11]+2304563134&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(S^v&(b^S))+A[12]+1804603682&4294967295,_=v+(w<<7&4294967295|w>>>25),w=S+(b^_&(v^b))+A[13]+4254626195&4294967295,S=_+(w<<12&4294967295|w>>>20),w=b+(v^S&(_^v))+A[14]+2792965006&4294967295,b=S+(w<<17&4294967295|w>>>15),w=v+(_^b&(S^_))+A[15]+1236535329&4294967295,v=b+(w<<22&4294967295|w>>>10),w=_+(b^S&(v^b))+A[1]+4129170786&4294967295,_=v+(w<<5&4294967295|w>>>27),w=S+(v^b&(_^v))+A[6]+3225465664&4294967295,S=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(S^_))+A[11]+643717713&4294967295,b=S+(w<<14&4294967295|w>>>18),w=v+(S^_&(b^S))+A[0]+3921069994&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^S&(v^b))+A[5]+3593408605&4294967295,_=v+(w<<5&4294967295|w>>>27),w=S+(v^b&(_^v))+A[10]+38016083&4294967295,S=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(S^_))+A[15]+3634488961&4294967295,b=S+(w<<14&4294967295|w>>>18),w=v+(S^_&(b^S))+A[4]+3889429448&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^S&(v^b))+A[9]+568446438&4294967295,_=v+(w<<5&4294967295|w>>>27),w=S+(v^b&(_^v))+A[14]+3275163606&4294967295,S=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(S^_))+A[3]+4107603335&4294967295,b=S+(w<<14&4294967295|w>>>18),w=v+(S^_&(b^S))+A[8]+1163531501&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(b^S&(v^b))+A[13]+2850285829&4294967295,_=v+(w<<5&4294967295|w>>>27),w=S+(v^b&(_^v))+A[2]+4243563512&4294967295,S=_+(w<<9&4294967295|w>>>23),w=b+(_^v&(S^_))+A[7]+1735328473&4294967295,b=S+(w<<14&4294967295|w>>>18),w=v+(S^_&(b^S))+A[12]+2368359562&4294967295,v=b+(w<<20&4294967295|w>>>12),w=_+(v^b^S)+A[5]+4294588738&4294967295,_=v+(w<<4&4294967295|w>>>28),w=S+(_^v^b)+A[8]+2272392833&4294967295,S=_+(w<<11&4294967295|w>>>21),w=b+(S^_^v)+A[11]+1839030562&4294967295,b=S+(w<<16&4294967295|w>>>16),w=v+(b^S^_)+A[14]+4259657740&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^S)+A[1]+2763975236&4294967295,_=v+(w<<4&4294967295|w>>>28),w=S+(_^v^b)+A[4]+1272893353&4294967295,S=_+(w<<11&4294967295|w>>>21),w=b+(S^_^v)+A[7]+4139469664&4294967295,b=S+(w<<16&4294967295|w>>>16),w=v+(b^S^_)+A[10]+3200236656&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^S)+A[13]+681279174&4294967295,_=v+(w<<4&4294967295|w>>>28),w=S+(_^v^b)+A[0]+3936430074&4294967295,S=_+(w<<11&4294967295|w>>>21),w=b+(S^_^v)+A[3]+3572445317&4294967295,b=S+(w<<16&4294967295|w>>>16),w=v+(b^S^_)+A[6]+76029189&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(v^b^S)+A[9]+3654602809&4294967295,_=v+(w<<4&4294967295|w>>>28),w=S+(_^v^b)+A[12]+3873151461&4294967295,S=_+(w<<11&4294967295|w>>>21),w=b+(S^_^v)+A[15]+530742520&4294967295,b=S+(w<<16&4294967295|w>>>16),w=v+(b^S^_)+A[2]+3299628645&4294967295,v=b+(w<<23&4294967295|w>>>9),w=_+(b^(v|~S))+A[0]+4096336452&4294967295,_=v+(w<<6&4294967295|w>>>26),w=S+(v^(_|~b))+A[7]+1126891415&4294967295,S=_+(w<<10&4294967295|w>>>22),w=b+(_^(S|~v))+A[14]+2878612391&4294967295,b=S+(w<<15&4294967295|w>>>17),w=v+(S^(b|~_))+A[5]+4237533241&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~S))+A[12]+1700485571&4294967295,_=v+(w<<6&4294967295|w>>>26),w=S+(v^(_|~b))+A[3]+2399980690&4294967295,S=_+(w<<10&4294967295|w>>>22),w=b+(_^(S|~v))+A[10]+4293915773&4294967295,b=S+(w<<15&4294967295|w>>>17),w=v+(S^(b|~_))+A[1]+2240044497&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~S))+A[8]+1873313359&4294967295,_=v+(w<<6&4294967295|w>>>26),w=S+(v^(_|~b))+A[15]+4264355552&4294967295,S=_+(w<<10&4294967295|w>>>22),w=b+(_^(S|~v))+A[6]+2734768916&4294967295,b=S+(w<<15&4294967295|w>>>17),w=v+(S^(b|~_))+A[13]+1309151649&4294967295,v=b+(w<<21&4294967295|w>>>11),w=_+(b^(v|~S))+A[4]+4149444226&4294967295,_=v+(w<<6&4294967295|w>>>26),w=S+(v^(_|~b))+A[11]+3174756917&4294967295,S=_+(w<<10&4294967295|w>>>22),w=b+(_^(S|~v))+A[2]+718787259&4294967295,b=S+(w<<15&4294967295|w>>>17),w=v+(S^(b|~_))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const v=_-this.blockSize,A=this.C;let b=this.h,S=0;for(;S<_;){if(b==0)for(;S<=v;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<_;)if(A[b++]=T.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<_;)if(A[b++]=T[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var v=T.length-8;v<T.length;++v)T[v]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,v=0;v<4;++v)for(let A=0;A<32;A+=8)T[_++]=this.g[v]>>>A&255;return T};function i(T,_){var v=c;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=_(T)}function o(T,_){this.h=_;const v=[];let A=!0;for(let b=T.length-1;b>=0;b--){const S=T[b]|0;A&&S==_||(v[b]=S,A=!1)}this.g=v}var c={};function l(T){return-128<=T&&T<128?i(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return N(u(-T));const _=[];let v=1;for(let A=0;T>=v;A++)_[A]=T/v|0,v*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return N(f(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(_,8));let A=p;for(let S=0;S<T.length;S+=8){var b=Math.min(8,T.length-S);const w=parseInt(T.substring(S,S+b),_);b<8?(b=u(Math.pow(_,b)),A=A.j(b).add(u(w))):(A=A.j(v),A=A.add(u(w)))}return A}var p=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();let T=0,_=1;for(let v=0;v<this.g.length;v++){const A=this.i(v);T+=(A>=0?A:4294967296+A)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(k(this))return"-"+N(this).toString(T);const _=u(Math.pow(T,6));var v=this;let A="";for(;;){const b=D(v,_).g;v=M(v,b.j(_));let S=((v.g.length>0?v.g[0]:v.h)>>>0).toString(T);if(v=b,P(v))return S+A;for(;S.length<6;)S="0"+S;A=S+A}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=M(this,T),k(T)?-1:P(T)?0:1};function N(T){const _=T.g.length,v=[];for(let A=0;A<_;A++)v[A]=~T.g[A];return new o(v,~T.h).add(m)}t.abs=function(){return k(this)?N(this):this},t.add=function(T){const _=Math.max(this.g.length,T.g.length),v=[];let A=0;for(let b=0;b<=_;b++){let S=A+(this.i(b)&65535)+(T.i(b)&65535),w=(S>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);A=w>>>16,S&=65535,w&=65535,v[b]=w<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function M(T,_){return T.add(N(_))}t.j=function(T){if(P(this)||P(T))return p;if(k(this))return k(T)?N(this).j(N(T)):N(N(this).j(T));if(k(T))return N(this.j(N(T)));if(this.l(y)<0&&T.l(y)<0)return u(this.m()*T.m());const _=this.g.length+T.g.length,v=[];for(var A=0;A<2*_;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(let b=0;b<T.g.length;b++){const S=this.i(A)>>>16,w=this.i(A)&65535,He=T.i(b)>>>16,ht=T.i(b)&65535;v[2*A+2*b]+=w*ht,L(v,2*A+2*b),v[2*A+2*b+1]+=S*ht,L(v,2*A+2*b+1),v[2*A+2*b+1]+=w*He,L(v,2*A+2*b+1),v[2*A+2*b+2]+=S*He,L(v,2*A+2*b+2)}for(T=0;T<_;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=_;T<2*_;T++)v[T]=0;return new o(v,0)};function L(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function V(T,_){this.g=T,this.h=_}function D(T,_){if(P(_))throw Error("division by zero");if(P(T))return new V(p,p);if(k(T))return _=D(N(T),_),new V(N(_.g),N(_.h));if(k(_))return _=D(T,N(_)),new V(N(_.g),_.h);if(T.g.length>30){if(k(T)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,A=_;A.l(T)<=0;)v=G(v),A=G(A);var b=ee(v,1),S=ee(A,1);for(A=ee(A,2),v=ee(v,2);!P(A);){var w=S.add(A);w.l(T)<=0&&(b=b.add(v),S=w),A=ee(A,1),v=ee(v,1)}return _=M(T,b.j(_)),new V(b,_)}for(b=p;T.l(_)>=0;){for(v=Math.max(1,Math.floor(T.m()/_.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),S=u(v),w=S.j(_);k(w)||w.l(T)>0;)v-=A,S=u(v),w=S.j(_);P(S)&&(S=m),b=b.add(S),T=M(T,w)}return new V(b,T)}t.B=function(T){return D(this,T).h},t.and=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)&T.i(A);return new o(v,this.h&T.h)},t.or=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)|T.i(A);return new o(v,this.h|T.h)},t.xor=function(T){const _=Math.max(this.g.length,T.g.length),v=[];for(let A=0;A<_;A++)v[A]=this.i(A)^T.i(A);return new o(v,this.h^T.h)};function G(T){const _=T.g.length+1,v=[];for(let A=0;A<_;A++)v[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(v,T.h)}function ee(T,_){const v=_>>5;_%=32;const A=T.g.length-v,b=[];for(let S=0;S<A;S++)b[S]=_>0?T.i(S+v)>>>_|T.i(S+v+1)<<32-_:T.i(S+v);return new o(b,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Gm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ir=o}).apply(typeof Hf<"u"?Hf:typeof self<"u"?self:typeof window<"u"?window:{});var No=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Km,pi,Qm,$o,ml,Ym,Jm,Xm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof No=="object"&&No];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,C,O){for(var K=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)K[_e-2]=arguments[_e];return h.prototype[C].apply(g,K)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function P(a,h){for(let g=1;g<arguments.length;g++){const C=arguments[g];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const O=C.length||0;a.length=d+O;for(let K=0;K<O;K++)a[d+K]=C[K]}else a.push(C)}}class k{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){o.setTimeout(()=>{throw a},0)}function M(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class L{constructor(){this.h=this.g=null}add(h,d){const g=V.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var V=new k(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let G,ee=!1,T=new L,_=()=>{const a=Promise.resolve(void 0);G=()=>{a.then(v)}};function v(){for(var a;a=M();){try{a.h.call(a.g)}catch(d){N(d)}var h=V;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ee=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function w(a){return/^[\s\xa0]*$/.test(a)}function He(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(He,b),He.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ht="closure_listenable_"+(Math.random()*1e6|0),Oe=0;function pe(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++Oe,this.da=this.fa=!1}function Ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ct(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function an(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Dt(a){const h={};for(const d in a)h[d]=a[d];return h}const it="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rn(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let O=0;O<it.length;O++)d=it[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Jt(a){this.src=a,this.g={},this.h=0}Jt.prototype.add=function(a,h,d,g,C){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const K=ft(a,h,g,C);return K>-1?(h=a[K],d||(h.fa=!1)):(h=new pe(h,this.src,O,!!g,C),h.fa=d,a.push(h)),h};function Xt(a,h){const d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),O;(O=C>=0)&&Array.prototype.splice.call(g,C,1),O&&(Ie(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ft(a,h,d,g){for(let C=0;C<a.length;++C){const O=a[C];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==g)return C}return-1}var F="closure_lm_"+(Math.random()*1e6|0),X={};function Y(a,h,d,g,C){if(Array.isArray(h)){for(let O=0;O<h.length;O++)Y(a,h[O],d,g,C);return null}return d=Q(d),a&&a[ht]?a.J(h,d,c(g)?!!g.capture:!1,C):ne(a,h,d,!1,g,C)}function ne(a,h,d,g,C,O){if(!h)throw Error("Invalid event type");const K=c(C)?!!C.capture:!!C;let _e=$(a);if(_e||(a[F]=_e=new Jt(a)),d=_e.add(h,d,g,K,O),d.proxy)return d;if(g=ve(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(C=K),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(R(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ve(){function a(d){return h.call(a.src,a.listener,d)}const h=B;return a}function E(a,h,d,g,C){if(Array.isArray(h))for(var O=0;O<h.length;O++)E(a,h[O],d,g,C);else g=c(g)?!!g.capture:!!g,d=Q(d),a&&a[ht]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],d=ft(h,d,g,C),d>-1&&(Ie(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=$(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ft(h,d,g,C)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ht])Xt(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(R(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=$(h))?(Xt(d,a),d.h==0&&(d.src=null,h[F]=null)):Ie(a)}}}function R(a){return a in X?X[a]:X[a]="on"+a}function B(a,h){if(a.da)a=!0;else{h=new He(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&I(a),a=d.call(g,h)}return a}function $(a){return a=a[F],a instanceof Jt?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function Q(a){return typeof a=="function"?a:(a[U]||(a[U]=function(h){return a.handleEvent(h)}),a[U])}function W(){A.call(this),this.i=new Jt(this),this.M=this,this.G=null}p(W,A),W.prototype[ht]=!0,W.prototype.removeEventListener=function(a,h,d,g){E(this,a,h,d,g)};function q(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var C=h;h=new b(g,a),Rn(h,C)}C=!0;let O,K;if(d)for(K=d.length-1;K>=0;K--)O=h.g=d[K],C=z(O,g,!0,h)&&C;if(O=h.g=a,C=z(O,g,!0,h)&&C,C=z(O,g,!1,h)&&C,d)for(K=0;K<d.length;K++)O=h.g=d[K],C=z(O,g,!1,h)&&C}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)Ie(d[g]);delete a.g[h],a.h--}}this.G=null},W.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},W.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function z(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let O=0;O<h.length;++O){const K=h[O];if(K&&!K.da&&K.capture==d){const _e=K.listener,Je=K.ha||K.src;K.fa&&Xt(a.i,K),C=_e.call(Je,g)!==!1&&C}}return C&&!g.defaultPrevented}function ie(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function J(a){a.g=ie(()=>{a.g=null,a.i&&(a.i=!1,J(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class re extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(a){A.call(this),this.h=a,this.g={}}p(ae,A);var ye=[];function ke(a){Ct(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}ae.prototype.N=function(){ae.Z.N.call(this),ke(this)},ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ae=o.JSON.stringify,dt=o.JSON.parse,pt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Nt(){}function Vt(){}var Zt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cs(){b.call(this,"d")}p(cs,b);function ot(){b.call(this,"c")}p(ot,b);var tt={},Gs=null;function xr(){return Gs=Gs||new W}tt.Ia="serverreachability";function Gu(a){b.call(this,tt.Ia,a)}p(Gu,b);function Ks(a){const h=xr();q(h,new Gu(h))}tt.STAT_EVENT="statevent";function Ku(a,h){b.call(this,tt.STAT_EVENT,a),this.stat=h}p(Ku,b);function bt(a){const h=xr();q(h,new Ku(h,a))}tt.Ja="timingevent";function Qu(a,h){b.call(this,tt.Ja,a),this.size=h}p(Qu,b);function Qs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ys(){this.g=!0}Ys.prototype.ua=function(){this.g=!1};function ry(a,h,d,g,C,O){a.info(function(){if(a.g)if(O){var K="",_e=O.split("&");for(let De=0;De<_e.length;De++){var Je=_e[De].split("=");if(Je.length>1){const nt=Je[0];Je=Je[1];const ln=nt.split("_");K=ln.length>=2&&ln[1]=="type"?K+(nt+"="+Je+"&"):K+(nt+"=redacted&")}}}else K=null;else K=O;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+K})}function sy(a,h,d,g,C,O,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+O+" "+K})}function ls(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+oy(a,d)+(g?" "+g:"")})}function iy(a,h){a.info(function(){return"TIMEOUT: "+h})}Ys.prototype.info=function(){};function oy(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var d=O[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let K=1;K<g.length;K++)g[K]=""}}}}return Ae(O)}catch{return h}}var yo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ju;function ac(){}p(ac,Nt),ac.prototype.g=function(){return new XMLHttpRequest},Ju=new ac;function Js(a){return encodeURIComponent(String(a))}function ay(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function tr(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ae(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xu}function Xu(){this.i=null,this.g="",this.h=!1}var Zu={},cc={};function lc(a,h,d){a.M=1,a.A=Eo(cn(h)),a.u=d,a.R=!0,eh(a,null)}function eh(a,h){a.F=Date.now(),vo(a),a.B=cn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),dh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Xu,a.g=Dh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new re(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(ye[0]=C.toString()),C=ye);for(let O=0;O<C.length;O++){const K=Y(d,C[O],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?Dt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ks(),ry(a.i,a.v,a.B,a.l,a.S,a.u)}tr.prototype.ba=function(a){a=a.target;const h=this.O;h&&sr(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const _e=sr(this.g),Je=this.g.ya(),De=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||Eh(this.g)))){this.K||_e!=4||Je==7||(Je==8||De<=0?Ks(3):Ks(2)),uc(this);var h=this.g.ca();this.X=h;var d=cy(this);if(this.o=h==200,sy(this.i,this.v,this.B,this.l,this.S,_e,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var O=g;break t}}O=null}if(a=O)ls(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,hc(this,a);else{this.o=!1,this.m=3,bt(12),Mr(this),Xs(this);break e}}if(this.R){a=!0;let nt;for(;!this.K&&this.C<d.length;)if(nt=ly(this,d),nt==cc){_e==4&&(this.m=4,bt(14),a=!1),ls(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Zu){this.m=4,bt(15),ls(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ls(this.i,this.l,nt,null),hc(this,nt);if(th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,bt(16),a=!1),this.o=this.o&&a,!a)ls(this.i,this.l,d,"[Invalid Chunked Response]"),Mr(this),Xs(this);else if(d.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),vc(K),K.P=!0,bt(11))}}else ls(this.i,this.l,d,null),hc(this,d);_e==4&&Mr(this),this.o&&!this.K&&(_e==4?Rh(this.j,this):(this.o=!1,vo(this)))}else Iy(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,bt(12)):(this.m=0,bt(13)),Mr(this),Xs(this)}}}catch{}finally{}};function cy(a){if(!th(a))return a.g.la();const h=Eh(a.g);if(h==="")return"";let d="";const g=h.length,C=sr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Mr(a),Xs(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<g;O++)a.h.h=!0,d+=a.h.i.decode(h[O],{stream:!(C&&O==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function th(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ly(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?cc:(d=Number(h.substring(d,g)),isNaN(d)?Zu:(g+=1,g+d>h.length?cc:(h=h.slice(g,g+d),a.C=g+d,h)))}tr.prototype.cancel=function(){this.K=!0,Mr(this)};function vo(a){a.T=Date.now()+a.H,nh(a,a.H)}function nh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Qs(u(a.aa,a),h)}function uc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}tr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(iy(this.i,this.B),this.M!=2&&(Ks(),bt(17)),Mr(this),this.m=2,Xs(this)):nh(this,this.T-a)};function Xs(a){a.j.I==0||a.K||Rh(a.j,a)}function Mr(a){uc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ke(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function hc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||fc(d.h,a))){if(!a.L&&fc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ao(d),Io(d);else break e;yc(d),bt(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Qs(u(d.Va,d),6e3));ih(d.h)<=1&&d.ta&&(d.ta=void 0)}else Ur(d,11)}else if((a.L||d.g==a)&&Ao(d),!w(h))for(C=d.Ba.g.parse(h),h=0;h<C.length;h++){let De=C[h];const nt=De[0];if(!(nt<=d.K))if(d.K=nt,De=De[1],d.I==2)if(De[0]=="c"){d.M=De[1],d.ba=De[2];const ln=De[3];ln!=null&&(d.ka=ln,d.j.info("VER="+d.ka));const Fr=De[4];Fr!=null&&(d.za=Fr,d.j.info("SVER="+d.za));const ir=De[5];ir!=null&&typeof ir=="number"&&ir>0&&(g=1.5*ir,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const or=a.g;if(or){const Ro=or.g?or.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ro){var O=g.h;O.g||Ro.indexOf("spdy")==-1&&Ro.indexOf("quic")==-1&&Ro.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(dc(O,O.h),O.h=null))}if(g.G){const Ec=or.g?or.g.getResponseHeader("X-HTTP-Session-Id"):null;Ec&&(g.wa=Ec,Ue(g.J,g.G,Ec))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var K=a;if(g.na=kh(g,g.L?g.ba:null,g.W),K.L){oh(g.h,K);var _e=K,Je=g.O;Je&&(_e.H=Je),_e.D&&(uc(_e),vo(_e)),g.g=K}else Ah(g);d.i.length>0&&bo(d)}else De[0]!="stop"&&De[0]!="close"||Ur(d,7);else d.I==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Ur(d,7):_c(d):De[0]!="noop"&&d.l&&d.l.qa(De),d.A=0)}}Ks(4)}catch{}}var uy=class{constructor(a,h){this.g=a,this.map=h}};function rh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ih(a){return a.h?1:a.g?a.g.size:0}function fc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function dc(a,h){a.g?a.g.add(h):a.h=h}function oh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rh.prototype.cancel=function(){if(this.i=ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ah(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return y(a.i)}var ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let C,O=null;g>=0?(C=a[d].substring(0,g),O=a[d].substring(g+1)):C=a[d],h(C,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function nr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof nr?(this.l=a.l,Zs(this,a.j),this.o=a.o,this.g=a.g,ei(this,a.u),this.h=a.h,pc(this,ph(a.i)),this.m=a.m):a&&(h=String(a).match(ch))?(this.l=!1,Zs(this,h[1]||"",!0),this.o=ti(h[2]||""),this.g=ti(h[3]||"",!0),ei(this,h[4]),this.h=ti(h[5]||"",!0),pc(this,h[6]||"",!0),this.m=ti(h[7]||"")):(this.l=!1,this.i=new ri(null,this.l))}nr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ni(h,lh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ni(h,lh,!0),"@"),a.push(Js(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ni(d,d.charAt(0)=="/"?py:dy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ni(d,gy)),a.join("")},nr.prototype.resolve=function(a){const h=cn(this);let d=!!a.j;d?Zs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)ei(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=h.h.lastIndexOf("/");C!=-1&&(g=h.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const O=[];for(let K=0;K<C.length;){const _e=C[K++];_e=="."?g&&K==C.length&&O.push(""):_e==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),g&&K==C.length&&O.push("")):(O.push(_e),g=!0)}g=O.join("/")}else g=C}return d?h.h=g:d=a.i.toString()!=="",d?pc(h,ph(a.i)):d=!!a.m,d&&(h.m=a.m),h};function cn(a){return new nr(a)}function Zs(a,h,d){a.j=d?ti(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ei(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function pc(a,h,d){h instanceof ri?(a.i=h,_y(a.i,a.l)):(d||(h=ni(h,my)),a.i=new ri(h,a.l))}function Ue(a,h,d){a.i.set(h,d)}function Eo(a){return Ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ti(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ni(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,fy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lh=/[#\/\?@]/g,dy=/[#\?:]/g,py=/[#\?]/g,my=/[#\?@]/g,gy=/#/g;function ri(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Lr(a){a.g||(a.g=new Map,a.h=0,a.i&&hy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ri.prototype,t.add=function(a,h){Lr(this),this.i=null,a=us(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function uh(a,h){Lr(a),h=us(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hh(a,h){return Lr(a),h=us(a,h),a.g.has(h)}t.forEach=function(a,h){Lr(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)};function fh(a,h){Lr(a);let d=[];if(typeof h=="string")hh(a,h)&&(d=d.concat(a.g.get(us(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Lr(this),this.i=null,a=us(this,a),hh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=fh(this,a),a.length>0?String(a[0]):h):h};function dh(a,h,d){uh(a,h),d.length>0&&(a.i=null,a.g.set(us(a,h),y(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const C=Js(d);d=fh(this,d);for(let O=0;O<d.length;O++){let K=C;d[O]!==""&&(K+="="+Js(d[O])),a.push(K)}}return this.i=a.join("&")};function ph(a){const h=new ri;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function us(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function _y(a,h){h&&!a.j&&(Lr(a),a.i=null,a.g.forEach(function(d,g){const C=g.toLowerCase();g!=C&&(uh(this,g),dh(this,C,d))},a)),a.j=h}function yy(a,h){const d=new Ys;if(o.Image){const g=new Image;g.onload=f(rr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(rr,d,"TestLoadImage: error",!1,h,g),g.onabort=f(rr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(rr,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function vy(a,h){const d=new Ys,g=new AbortController,C=setTimeout(()=>{g.abort(),rr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(C),O.ok?rr(d,"TestPingServer: ok",!0,h):rr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),rr(d,"TestPingServer: error",!1,h)})}function rr(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function Ey(){this.g=new pt}function mc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(mc,Nt),mc.prototype.g=function(){return new wo(this.i,this.h)};function wo(a,h){W.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(wo,W),t=wo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ii(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;mh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function mh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?si(this):ii(this),this.readyState==3&&mh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,si(this))},t.Na=function(a){this.g&&(this.response=a,si(this))},t.ga=function(){this.g&&si(this)};function si(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ii(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ii(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gh(a){let h="";return Ct(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function gc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=gh(d),typeof a=="string"?d!=null&&Js(d):Ue(a,h,d))}function qe(a){W.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(qe,W);var wy=/^https?$/i,Ty=["POST","PUT"];t=qe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ju.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){_h(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Ty,h,void 0)>=0)||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of d)this.g.setRequestHeader(O,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){_h(this,O)}};function _h(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,yh(a),To(a)}function yh(a){a.A||(a.A=!0,q(a,"complete"),q(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,q(this,"complete"),q(this,"abort"),To(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),To(this,!0)),qe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?vh(this):this.Xa())},t.Xa=function(){vh(this)};function vh(a){if(a.h&&typeof i<"u"){if(a.v&&sr(a)==4)setTimeout(a.Ca.bind(a),0);else if(q(a,"readystatechange"),sr(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=O===0){let K=String(a.D).match(ch)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),g=!wy.test(K?K.toLowerCase():"")}d=g}if(d)q(a,"complete"),q(a,"success");else{a.o=6;try{var C=sr(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",yh(a)}}finally{To(a)}}}}function To(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||q(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function sr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return sr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),dt(h)}};function Eh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Iy(a){const h={};a=(a.g&&sr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=ay(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[C]||[];h[C]=O,O.push(d)}an(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function oi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function wh(a){this.za=0,this.i=[],this.j=new Ys,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=oi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=oi("baseRetryDelayMs",5e3,a),this.Za=oi("retryDelaySeedMs",1e4,a),this.Ta=oi("forwardChannelMaxRetries",2,a),this.va=oi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new rh(a&&a.concurrentRequestLimit),this.Ba=new Ey,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=wh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){bt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=kh(this,null,this.W),bo(this)};function _c(a){if(Th(a),a.I==3){var h=a.V++,d=cn(a.J);if(Ue(d,"SID",a.M),Ue(d,"RID",h),Ue(d,"TYPE","terminate"),ai(a,d),h=new tr(a,a.j,h),h.M=2,h.A=Eo(cn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Dh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),vo(h)}Ph(a)}function Io(a){a.g&&(vc(a),a.g.cancel(),a.g=null)}function Th(a){Io(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ao(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function bo(a){if(!sh(a.h)&&!a.m){a.m=!0;var h=a.Ea;G||_(),ee||(G(),ee=!0),T.add(h,a),a.D=0}}function by(a,h){return ih(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Qs(u(a.Ea,a,h),Ch(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new tr(this,this.j,a);let O=this.o;if(this.U&&(O?(O=Dt(O),Rn(O,this.U)):O=this.U),this.u!==null||this.R||(C.J=O,O=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=bh(this,C,h),d=cn(this.J),Ue(d,"RID",a),Ue(d,"CVER",22),this.G&&Ue(d,"X-HTTP-Session-Id",this.G),ai(this,d),O&&(this.R?h="headers="+Js(gh(O))+"&"+h:this.u&&gc(d,this.u,O)),dc(this.h,C),this.Ra&&Ue(d,"TYPE","init"),this.S?(Ue(d,"$req",h),Ue(d,"SID","null"),C.U=!0,lc(C,d,null)):lc(C,d,h),this.I=2}}else this.I==3&&(a?Ih(this,a):this.i.length==0||sh(this.h)||Ih(this))};function Ih(a,h){var d;h?d=h.l:d=a.V++;const g=cn(a.J);Ue(g,"SID",a.M),Ue(g,"RID",d),Ue(g,"AID",a.K),ai(a,g),a.u&&a.o&&gc(g,a.u,a.o),d=new tr(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=bh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),dc(a.h,d),lc(d,g,h)}function ai(a,h){a.H&&Ct(a.H,function(d,g){Ue(h,g,d)}),a.l&&Ct({},function(d,g){Ue(h,g,d)})}function bh(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var C=a.i;let _e=-1;for(;;){const Je=["count="+d];_e==-1?d>0?(_e=C[0].g,Je.push("ofs="+_e)):_e=0:Je.push("ofs="+_e);let De=!0;for(let nt=0;nt<d;nt++){var O=C[nt].g;const ln=C[nt].map;if(O-=_e,O<0)_e=Math.max(0,C[nt].g-100),De=!1;else try{O="req"+O+"_"||"";try{var K=ln instanceof Map?ln:Object.entries(ln);for(const[Fr,ir]of K){let or=ir;c(ir)&&(or=Ae(ir)),Je.push(O+Fr+"="+encodeURIComponent(or))}}catch(Fr){throw Je.push(O+"type="+encodeURIComponent("_badmap")),Fr}}catch{g&&g(ln)}}if(De){K=Je.join("&");break e}}K=void 0}return a=a.i.splice(0,d),h.G=a,K}function Ah(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;G||_(),ee||(G(),ee=!0),T.add(h,a),a.A=0}}function yc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Qs(u(a.Da,a),Ch(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Sh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Qs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,bt(10),Io(this),Sh(this))};function vc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Sh(a){a.g=new tr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=cn(a.na);Ue(h,"RID","rpc"),Ue(h,"SID",a.M),Ue(h,"AID",a.K),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ue(h,"TO",a.ia),Ue(h,"TYPE","xmlhttp"),ai(a,h),a.u&&a.o&&gc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Eo(cn(h)),d.u=null,d.R=!0,eh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Io(this),yc(this),bt(19))};function Ao(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Rh(a,h){var d=null;if(a.g==h){Ao(a),vc(a),a.g=null;var g=2}else if(fc(a.h,h))d=h.G,oh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var C=a.D;g=xr(),q(g,new Qu(g,d)),bo(a)}else Ah(a);else if(C=h.m,C==3||C==0&&h.X>0||!(g==1&&by(a,h)||g==2&&yc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Ur(a,5);break;case 4:Ur(a,10);break;case 3:Ur(a,6);break;default:Ur(a,2)}}}function Ch(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Ur(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const C=!g;g=new nr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Zs(g,"https"),Eo(g),C?yy(g.toString(),d):vy(g.toString(),d)}else bt(2);a.I=0,a.l&&a.l.pa(h),Ph(a),Th(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Ph(a){if(a.I=0,a.ja=[],a.l){const h=ah(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function kh(a,h,d){var g=d instanceof nr?cn(d):new nr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ei(g,g.u);else{var C=o.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const O=new nr(null);g&&Zs(O,g),h&&(O.g=h),C&&ei(O,C),d&&(O.h=d),g=O}return d=a.G,h=a.wa,d&&h&&Ue(g,d,h),Ue(g,"VER",a.ka),ai(a,g),g}function Dh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new qe(new mc({ab:d})):new qe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nh(){}t=Nh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function So(){}So.prototype.g=function(a,h){return new Ot(a,h)};function Ot(a,h){W.call(this),this.g=new wh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!w(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new hs(this)}p(Ot,W),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){_c(this.g)},Ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ae(a),a=d);h.i.push(new uy(h.Ya++,a)),h.I==3&&bo(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,_c(this.g),delete this.g,Ot.Z.N.call(this)};function Vh(a){cs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Vh,cs);function Oh(){ot.call(this),this.status=1}p(Oh,ot);function hs(a){this.g=a}p(hs,Nh),hs.prototype.ra=function(){q(this.g,"a")},hs.prototype.qa=function(a){q(this.g,new Vh(a))},hs.prototype.pa=function(a){q(this.g,new Oh)},hs.prototype.oa=function(){q(this.g,"b")},So.prototype.createWebChannel=So.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,Xm=function(){return new So},Jm=function(){return xr()},Ym=tt,ml={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yo.NO_ERROR=0,yo.TIMEOUT=8,yo.HTTP_ERROR=6,$o=yo,Yu.COMPLETE="complete",Qm=Yu,Vt.EventType=Zt,Zt.OPEN="a",Zt.CLOSE="b",Zt.ERROR="c",Zt.MESSAGE="d",W.prototype.listen=W.prototype.J,pi=Vt,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,Km=qe}).apply(typeof No<"u"?No:typeof self<"u"?self:typeof window<"u"?window:{});const qf="@firebase/firestore",zf="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let $s="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new eu("@firebase/firestore");function gs(){return Xr.logLevel}function Z(t,...e){if(Xr.logLevel<=Ee.DEBUG){const n=e.map(ru);Xr.debug(`Firestore (${$s}): ${t}`,...n)}}function Gn(t,...e){if(Xr.logLevel<=Ee.ERROR){const n=e.map(ru);Xr.error(`Firestore (${$s}): ${t}`,...n)}}function Vs(t,...e){if(Xr.logLevel<=Ee.WARN){const n=e.map(ru);Xr.warn(`Firestore (${$s}): ${t}`,...n)}}function ru(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function he(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Zm(t,r,n)}function Zm(t,e,n){let r=`FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Gn(r),new Error(r)}function Pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Zm(e,s,r)}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(_t.UNAUTHENTICATED)))}shutdown(){}}class ZI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class eb{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new br,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new br)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new eg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class tb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new tb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function gl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return jc(s)===jc(i)?we(s,i):jc(s)?1:-1}return we(t.length,e.length)}const ib=55296,ob=57343;function jc(t){const e=t.charCodeAt(0);return e>=ib&&e<=ob}function Os(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="__name__";class fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&he(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=fn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=fn.isNumericId(e),s=fn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?fn.extractNumericId(e).compare(fn.extractNumericId(n)):gl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ir.fromString(e.substring(4,e.length-2))}}class je extends fn{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new je(n)}static emptyPath(){return new je([])}}const ab=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends fn{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return ab.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gf}static keyField(){return new lt([Gf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new te(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new te(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(je.fromString(e))}static fromName(e){return new oe(je.fromString(e).popFirst(5))}static empty(){return new oe(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new je(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t,e,n){if(!n)throw new te(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lb(t,e,n,r){if(e===!0&&r===!0)throw new te(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kf(t){if(!oe.isDocumentKey(t))throw new te(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he(12329,{type:typeof t})}function qi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=iu(t);throw new te(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ao(t,e){if(!tg(t))throw new te(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new te(H.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=-62135596800,Yf=1e6;class Fe{static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Yf);return new Fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Qf)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yf}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ao(e,Fe._jsonSchema))return new Fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fe._jsonSchemaVersion="firestore/timestamp/1.0",Fe._jsonSchema={type:Qe("string",Fe._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Fe(0,0))}static max(){return new fe(new Fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const zi=-1;function ub(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Pr(s,oe.empty(),e)}function hb(t){return new Pr(t.readTime,t.key,zi)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(fe.min(),oe.empty(),zi)}static max(){return new Pr(fe.max(),oe.empty(),zi)}}function fb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==db)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):j.reject(n)}static resolve(e){return new j(((n,r)=>{n(e)}))}static reject(e){return new j(((n,r)=>{r(e)}))}static waitFor(e){return new j(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next((s=>s?j.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new j(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new j(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function mb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class za{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}za.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=-1;function Wa(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function gb(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="";function _b(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jf(e)),e=yb(t.get(n),e);return Jf(e)}function yb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case ng:n+="";break;default:n+=i}}return n}function Jf(t){return t+ng+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vo(this.root,e,this.comparator,!0)}}class Vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw he(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zf(this.data.getIterator())}getIteratorFrom(e){return new Zf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Zf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new en([])}unionWith(e){let n=new et(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class sg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sg("Invalid base64 string: "+i):i}})(e);return new ut(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const vb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=vb.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="server_timestamp",og="__type__",ag="__previous_value__",cg="__local_write_time__";function au(t){return(t?.mapValue?.fields||{})[og]?.stringValue===ig}function Ga(t){const e=t.mapValue.fields[ag];return au(e)?Ga(e):e}function Wi(t){const e=kr(t.mapValue.fields[cg].timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const fa="(default)";class Gi{constructor(e,n){this.projectId=e,this.database=n||fa}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database===fa}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="__type__",wb="__max__",Oo={mapValue:{}},ug="__vector__",da="value";function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?au(t)?4:Ib(t)?9007199254740991:Tb(t)?10:11:he(28295,{value:t})}function In(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kr(s.timestampValue),c=kr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Dr(s.bytesValue).isEqual(Dr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?ha(o)===ha(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Xf(o)!==Xf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!In(o[l],c[l])))return!1;return!0})(t,e);default:return he(52216,{left:t})}}function Ki(t,e){return(t.values||[]).find((n=>In(n,e)))!==void 0}function xs(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return ed(t.timestampValue,e.timestampValue);case 4:return ed(Wi(t),Wi(e));case 5:return gl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=Dr(i),l=Dr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=we(c[u],l[u]);if(f!==0)return f}return we(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=we(We(i.latitude),We(o.latitude));return c!==0?c:we(We(i.longitude),We(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return td(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[da]?.arrayValue,f=l[da]?.arrayValue,p=we(u?.values?.length||0,f?.values?.length||0);return p!==0?p:td(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Oo.mapValue&&o===Oo.mapValue)return 0;if(i===Oo.mapValue)return 1;if(o===Oo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=gl(l[p],f[p]);if(m!==0)return m;const y=xs(c[l[p]],u[f[p]]);if(y!==0)return y}return we(l.length,f.length)})(t.mapValue,e.mapValue);default:throw he(23264,{he:n})}}function ed(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=kr(t),r=kr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function td(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=xs(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function Ms(t){return _l(t)}function _l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Dr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return oe.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=_l(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_l(n.fields[o])}`;return s+"}"})(t.mapValue):he(61005,{value:t})}function Ho(t){switch(Nr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ga(t);return e?16+Ho(e):16;case 5:return 2*t.stringValue.length;case 6:return Dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ho(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return ss(r.fields,((i,o)=>{s+=i.length+Ho(o)})),s})(t.mapValue);default:throw he(13486,{value:t})}}function yl(t){return!!t&&"integerValue"in t}function cu(t){return!!t&&"arrayValue"in t}function nd(t){return!!t&&"nullValue"in t}function rd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qo(t){return!!t&&"mapValue"in t}function Tb(t){return(t?.mapValue?.fields||{})[lg]?.stringValue===ug}function Ci(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ci(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return{...t}}function Ib(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===wb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ci(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ss(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ft(Ci(this.value))}}function hg(t){const e=[];return ss(t.fields,((n,r)=>{const s=new lt([n]);if(qo(r)){const i=hg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new vt(e,0,fe.min(),fe.min(),fe.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,fe.min(),fe.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,fe.min(),fe.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pa{constructor(e,n){this.position=e,this.inclusive=n}}function sd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=xs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function id(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ma{constructor(e,n="asc"){this.field=e,this.dir=n}}function bb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class fg{}class Ze extends fg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Sb(e,n,r):n==="array-contains"?new Pb(e,r):n==="in"?new kb(e,r):n==="not-in"?new Db(e,r):n==="array-contains-any"?new Nb(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Rb(e,r):new Cb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(xs(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends fg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new bn(e,n)}matches(e){return dg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function dg(t){return t.op==="and"}function pg(t){return Ab(t)&&dg(t)}function Ab(t){for(const e of t.filters)if(e instanceof bn)return!1;return!0}function vl(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(pg(t))return t.filters.map((e=>vl(e))).join(",");{const e=t.filters.map((n=>vl(n))).join(",");return`${t.op}(${e})`}}function mg(t,e){return t instanceof Ze?(function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)})(t,e):t instanceof bn?(function(r,s){return s instanceof bn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&mg(o,s.filters[c])),!0):!1})(t,e):void he(19439)}function gg(t){return t instanceof Ze?(function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`})(t):t instanceof bn?(function(n){return n.op.toString()+" {"+n.getFilters().map(gg).join(" ,")+"}"})(t):"Filter"}class Sb extends Ze{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class Rb extends Ze{constructor(e,n){super(e,"in",n),this.keys=_g("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class Cb extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=_g("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function _g(t,e){return(e.arrayValue?.values||[]).map((n=>oe.fromName(n.referenceValue)))}class Pb extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cu(n)&&Ki(n.arrayValue,this.value)}}class kb extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ki(this.value.arrayValue,n)}}class Db extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ki(this.value.arrayValue,n)}}class Nb extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ki(this.value.arrayValue,r)))}}/**
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
 */class Vb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function od(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Vb(t,e,n,r,s,i,o)}function lu(t){const e=de(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>vl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Wa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Ms(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Ms(r))).join(",")),e.Te=n}return e.Te}function uu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!id(t.startAt,e.startAt)&&id(t.endAt,e.endAt)}function El(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ob(t,e,n,r,s,i,o,c){return new Ka(t,e,n,r,s,i,o,c)}function hu(t){return new Ka(t)}function ad(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xb(t){return t.collectionGroup!==null}function Pi(t){const e=de(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new et(lt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ma(i,r))})),n.has(lt.keyField().canonicalString())||e.Ie.push(new ma(lt.keyField(),r))}return e.Ie}function gn(t){const e=de(t);return e.Ee||(e.Ee=Mb(e,Pi(t))),e.Ee}function Mb(t,e){if(t.limitType==="F")return od(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ma(s.field,i)}));const n=t.endAt?new pa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pa(t.startAt.position,t.startAt.inclusive):null;return od(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wl(t,e,n){return new Ka(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qa(t,e){return uu(gn(t),gn(e))&&t.limitType===e.limitType}function yg(t){return`${lu(gn(t))}|lt:${t.limitType}`}function _s(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>gg(s))).join(", ")}]`),Wa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Ms(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Ms(s))).join(",")),`Target(${r})`})(gn(t))}; limitType=${t.limitType})`}function Ya(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Pi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=sd(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Pi(r),s)||r.endAt&&!(function(o,c,l){const u=sd(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Pi(r),s))})(t,e)}function Lb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vg(t){return(e,n)=>{let r=!1;for(const s of Pi(t)){const i=Ub(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ub(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?xs(l,u):he(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return rg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=new $e(oe.comparator);function Kn(){return Fb}const Eg=new $e(oe.comparator);function mi(...t){let e=Eg;for(const n of t)e=e.insert(n.key,n);return e}function wg(t){let e=Eg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function zr(){return ki()}function Tg(){return ki()}function ki(){return new is((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Bb=new $e(oe.comparator),jb=new et(oe.comparator);function Te(...t){let e=jb;for(const n of t)e=e.add(n);return e}const $b=new et(we);function Hb(){return $b}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function Ig(t){return{integerValue:""+t}}function qb(t,e){return gb(e)?Ig(e):fu(t,e)}/**
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
 */class Ja{constructor(){this._=void 0}}function zb(t,e,n){return t instanceof Qi?(function(s,i){const o={fields:{[og]:{stringValue:ig},[cg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&au(i)&&(i=Ga(i)),i&&(o.fields[ag]=i),{mapValue:o}})(n,e):t instanceof Yi?Ag(t,e):t instanceof Ji?Sg(t,e):(function(s,i){const o=bg(s,i),c=cd(o)+cd(s.Ae);return yl(o)&&yl(s.Ae)?Ig(c):fu(s.serializer,c)})(t,e)}function Wb(t,e,n){return t instanceof Yi?Ag(t,e):t instanceof Ji?Sg(t,e):n}function bg(t,e){return t instanceof ga?(function(r){return yl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Qi extends Ja{}class Yi extends Ja{constructor(e){super(),this.elements=e}}function Ag(t,e){const n=Rg(e);for(const r of t.elements)n.some((s=>In(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Ji extends Ja{constructor(e){super(),this.elements=e}}function Sg(t,e){let n=Rg(e);for(const r of t.elements)n=n.filter((s=>!In(s,r)));return{arrayValue:{values:n}}}class ga extends Ja{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function cd(t){return We(t.integerValue||t.doubleValue)}function Rg(t){return cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n){this.field=e,this.transform=n}}function Kb(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Yi&&s instanceof Yi||r instanceof Ji&&s instanceof Ji?Os(r.elements,s.elements,In):r instanceof ga&&s instanceof ga?In(r.Ae,s.Ae):r instanceof Qi&&s instanceof Qi})(t.transform,e.transform)}class Qb{constructor(e,n){this.version=e,this.transformResults=n}}class Fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xa{}function Cg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kg(t.key,Fn.none()):new co(t.key,t.data,Fn.none());{const n=t.data,r=Ft.empty();let s=new et(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new os(t.key,r,new en(s.toArray()),Fn.none())}}function Yb(t,e,n){t instanceof co?(function(s,i,o){const c=s.value.clone(),l=ud(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof os?(function(s,i,o){if(!zo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=ud(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Pg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Di(t,e,n,r){return t instanceof co?(function(i,o,c,l){if(!zo(i.precondition,o))return c;const u=i.value.clone(),f=hd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof os?(function(i,o,c,l){if(!zo(i.precondition,o))return c;const u=hd(i.fieldTransforms,l,o),f=o.data;return f.setAll(Pg(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return zo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function Jb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bg(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function ld(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Os(r,s,((i,o)=>Kb(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class co extends Xa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class os extends Xa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ud(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Wb(o,c,n[s]))}return r}function hd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,zb(i,o,e))}return r}class kg extends Xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xb extends Xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Yb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tg();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Cg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Te())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,((n,r)=>ld(n,r)))&&Os(this.baseMutations,e.baseMutations,((n,r)=>ld(n,r)))}}class du{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return Bb})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new du(e,n,r,s)}}/**
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
 */class eA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,be;function nA(t){switch(t){case H.OK:return he(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return he(15467,{code:t})}}function Dg(t){if(t===void 0)return Gn("GRPC error has no .code"),H.UNKNOWN;switch(t){case Ke.OK:return H.OK;case Ke.CANCELLED:return H.CANCELLED;case Ke.UNKNOWN:return H.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return H.INTERNAL;case Ke.UNAVAILABLE:return H.UNAVAILABLE;case Ke.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ke.NOT_FOUND:return H.NOT_FOUND;case Ke.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ke.ABORTED:return H.ABORTED;case Ke.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ke.DATA_LOSS:return H.DATA_LOSS;default:return he(39323,{code:t})}}(be=Ke||(Ke={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rA(){return new TextEncoder}/**
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
 */const sA=new Ir([4294967295,4294967295],0);function fd(t){const e=rA().encode(t),n=new Gm;return n.update(e),new Uint8Array(n.digest())}function dd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([s,i],0)]}class pu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gi(`Invalid padding: ${n}`);if(r<0)throw new gi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ir.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Ir.fromNumber(r)));return s.compare(sA)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=fd(e),[r,s]=dd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new pu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=fd(e),[r,s]=dd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Za(fe.min(),s,new $e(we),Kn(),Te())}}class lo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new lo(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Ng{constructor(e,n){this.targetId=e,this.Ce=n}}class Vg{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class pd{constructor(){this.ve=0,this.Fe=md(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he(38017,{changeType:i})}})),new lo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=md()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class iA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kn(),this.Je=xo(),this.He=xo(),this.Ye=new $e(we)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:he(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(El(i))if(r===0){const o=new oe(i.path);this.et(n,o,vt.newNoDocument(o,fe.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Dr(r).toUint8Array()}catch(l){if(l instanceof sg)return Vs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new pu(o,s,i)}catch(l){return Vs(l instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&El(c.target)){const l=new oe(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=Te();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Za(e,n,this.Ye,this.je,r);return this.je=Kn(),this.Je=xo(),this.He=xo(),this.Ye=new $e(we),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new pd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new et(we),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new et(we),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new pd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function xo(){return new $e(oe.comparator)}function md(){return new $e(oe.comparator)}const oA={asc:"ASCENDING",desc:"DESCENDING"},aA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cA={and:"AND",or:"OR"};class lA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tl(t,e){return t.useProto3Json||Wa(e)?e:{value:e}}function _a(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Og(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uA(t,e){return _a(t,e.toTimestamp())}function _n(t){return Pe(!!t,49232),fe.fromTimestamp((function(n){const r=kr(n);return new Fe(r.seconds,r.nanos)})(t))}function mu(t,e){return Il(t,e).canonicalString()}function Il(t,e){const n=(function(s){return new je(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function xg(t){const e=je.fromString(t);return Pe(Bg(e),10190,{key:e.toString()}),e}function bl(t,e){return mu(t.databaseId,e.path)}function $c(t,e){const n=xg(e);if(n.get(1)!==t.databaseId.projectId)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(Lg(n))}function Mg(t,e){return mu(t.databaseId,e)}function hA(t){const e=xg(t);return e.length===4?je.emptyPath():Lg(e)}function Al(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lg(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gd(t,e,n){return{name:bl(t,e),fields:n.value.mapValue.fields}}function fA(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),ut.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ut.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?H.UNKNOWN:Dg(u.code);return new te(f,u.message||"")})(o);n=new Vg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=$c(t,r.document.name),i=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):fe.min(),c=new Ft({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Wo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=$c(t,r.document),i=r.readTime?_n(r.readTime):fe.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Wo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=$c(t,r.document),i=r.removedTargetIds||[];n=new Wo([],i,s,null)}else{if(!("filter"in e))return he(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new tA(s,i),c=r.targetId;n=new Ng(c,o)}}return n}function dA(t,e){let n;if(e instanceof co)n={update:gd(t,e.key,e.value)};else if(e instanceof kg)n={delete:bl(t,e.key)};else if(e instanceof os)n={update:gd(t,e.key,e.data),updateMask:TA(e.fieldMask)};else{if(!(e instanceof Xb))return he(16599,{Vt:e.type});n={verify:bl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Qi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Yi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ji)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ga)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw he(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:uA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he(27497)})(t,e.precondition)),n}function pA(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?_n(s.updateTime):_n(i);return o.isEqual(fe.min())&&(o=_n(i)),new Qb(o,s.transformResults||[])})(n,e)))):[]}function mA(t,e){return{documents:[Mg(t,e.path)]}}function gA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mg(t,s);const i=(function(u){if(u.length!==0)return Fg(bn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ys(m.field),direction:vA(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Tl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function _A(t){let e=hA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=Ug(p);return m instanceof bn&&pg(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(P){return new ma(vs(P.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Wa(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,y=p.values||[];return new pa(y,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,y=p.values||[];return new pa(y,m)})(n.endAt)),Ob(e,s,o,i,c,"F",l,u)}function yA(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ug(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return he(61313);default:return he(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ze.create(vs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return he(58110);default:return he(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return bn.create(n.compositeFilter.filters.map((r=>Ug(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he(1026)}})(n.compositeFilter.op))})(t):he(30097,{filter:t})}function vA(t){return oA[t]}function EA(t){return aA[t]}function wA(t){return cA[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return lt.fromServerFormat(t.fieldPath)}function Fg(t){return t instanceof Ze?(function(n){if(n.op==="=="){if(rd(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(nd(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rd(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(nd(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:EA(n.op),value:n.value}}})(t):t instanceof bn?(function(n){const r=n.getFilters().map((s=>Fg(s)));return r.length===1?r[0]:{compositeFilter:{op:wA(n.op),filters:r}}})(t):he(54877,{filter:t})}function TA(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Bg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,s,i=fe.min(),o=fe.min(),c=ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.yt=e}}function bA(t){const e=_A({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wl(e,e.limit,"L"):e}/**
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
 */class AA{constructor(){this.Cn=new SA}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Pr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class SA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(je.comparator)).toArray()}}/**
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
 */const _d={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jg=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(jg,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ls(0)}static cr(){return new Ls(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="LruGarbageCollector",RA=1048576;function vd([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class CA{constructor(e){this.Ir=e,this.buffer=new et(vd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();vd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class PA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(yd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qs(n)?Z(yd,"Ignoring IndexedDB error during garbage collection: ",n):await Hs(n)}await this.Vr(3e5)}))}}class kA{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return j.resolve(za.ce);const r=new CA(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(_d)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_d):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),gs()<=Ee.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function DA(t,e){return new kA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.changes=new is((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Di(r.mutation,s,en.empty(),Fe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Te()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Te()){const s=zr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=mi();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Te())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Kn();const o=ki(),c=(function(){return ki()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof os)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Di(f.mutation,u,f.mutation.getFieldMask(),Fe.now())):o.set(u.key,en.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new VA(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=ki();let s=new $e(((o,c)=>o-c)),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||en.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Te()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=Tg();f.forEach((m=>{if(!i.has(m)){const y=Cg(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(zr());let c=zi,l=i;return o.next((u=>j.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Te()))).next((f=>({batchId:c,changes:wg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next((r=>{let s=mi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=mi();return this.indexManager.getCollectionParents(e,i).next((c=>j.forEach(c,(l=>{const u=(function(p,m){return new Ka(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))}));let c=mi();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Di(f.mutation,u,en.empty(),Fe.now()),Ya(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:_n(s.createTime)}})(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:bA(s.bundledQuery),readTime:_n(s.readTime)}})(n)),j.resolve()}}/**
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
 */class MA{constructor(){this.overlays=new $e(oe.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return j.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=zr(),i=n.length+1,o=new oe(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=zr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=zr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return j.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eA(n,r));let i=this.qr.get(n);i===void 0&&(i=Te(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class LA{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.Qr=new et(rt.$r),this.Ur=new et(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new rt(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new oe(new je([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new oe(new je([])),r=new rt(n,e),s=new rt(n,e+1);let i=Te();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new rt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return oe.comparator(e.key,n.key)||we(e.Yr,n.Yr)}static Kr(e,n){return we(e.Yr,n.Yr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new et(rt.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new rt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?ou:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(we);return n.forEach((s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new rt(new oe(i),0);let c=new et(we);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),j.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Pe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,(s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new rt(n,0),s=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.ri=e,this.docs=(function(){return new $e(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))})),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,c=new oe(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||fb(hb(f),r)<=0||(s.has(f.key)||Ya(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he(9500)}ii(e,n){return j.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new BA(this)}getSize(e){return j.resolve(this.size)}}class BA extends NA{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.persistence=e,this.si=new is((n=>lu(n)),uu),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.oi=0,this._i=new gu,this.targetCount=0,this.ai=Ls.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),j.waitFor(i).next((()=>s))}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.ui={},this.overlays={},this.ci=new za(0),this.li=!1,this.li=!0,this.hi=new LA,this.referenceDelegate=e(this),this.Pi=new jA(this),this.indexManager=new AA,this.remoteDocumentCache=(function(s){return new FA(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new IA(n),this.Ii=new xA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new UA(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new $A(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return j.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class $A extends pb{constructor(e){super(),this.currentSequenceNumber=e}}class _u{constructor(e){this.persistence=e,this.Ri=new gu,this.Vi=null}static mi(e){return new _u(e)}get fi(){if(this.Vi)return this.Vi;throw he(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,(r=>{const s=oe.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,fe.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ya{constructor(e,n){this.persistence=e,this.pi=new is((r=>_b(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=DA(this,n)}static mi(e,n){return new ya(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return j.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?j.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,fe.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ho(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yu(e,n.fromCache,r,s)}}/**
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
 */class HA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class qA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return OT()?8:mb(It())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new HA;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(gs()<=Ee.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",_s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(gs()<=Ee.DEBUG&&Z("QueryEngine","Query:",_s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(gs()<=Ee.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",_s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):j.resolve())}ys(e,n){if(ad(n))return j.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=wl(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Te(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,wl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return ad(n)||s.isEqual(fe.min())?j.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(gs()<=Ee.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_s(n)),this.vs(e,o,n,ub(s,zi)).next((c=>c)))}))}Ds(e,n){let r=new et(vg(e));return n.forEach(((s,i)=>{Ya(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return gs()<=Ee.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",_s(n)),this.ps.getDocumentsMatchingQuery(e,n,Pr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="LocalStore",zA=3e8;class WA{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new $e(we),this.xs=new is((i=>lu(i)),uu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function GA(t,e,n,r){return new WA(t,e,n,r)}async function Hg(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Te();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function KA(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let y=j.resolve();return m.forEach((P=>{y=y.next((()=>f.getEntry(l,P))).next((k=>{const N=u.docVersions.get(P);Pe(N!==null,48541),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Te();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function qg(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function QA(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ut.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(k,N,M){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=zA?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(m,y,f)&&c.push(n.Pi.updateTargetData(i,y))}));let l=Kn(),u=Te();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(YA(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(fe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return j.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function YA(t,e,n){let r=Te(),s=Te();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Kn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z(vu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function JA(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ou),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function XA(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,j.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Sl(t,e,n){const r=de(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!qs(o))throw o;Z(vu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Ed(t,e,n){const r=de(t);let s=fe.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=de(l),m=p.xs.get(f);return m!==void 0?j.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,gn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:Te()))).next((c=>(ZA(r,Lb(e),c),{documents:c,Qs:i})))))}function ZA(t,e,n){let r=t.Os.get(e)||fe.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class wd{constructor(){this.activeTargetIds=Hb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eS{constructor(){this.Mo=new wd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new wd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tS{Oo(e){}shutdown(){}}/**
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
 */let Mo=null;function Rl(){return Mo===null?Mo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mo++,"0x"+Mo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="RestConnection",nS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===fa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Rl(),c=this.zo(e,n.toUriEncodedString());Z(Hc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Bs(u);return this.Jo(e,c,l,r,f).then((p=>(Z(Hc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Vs(Hc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+$s})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=nS[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class iS extends rS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Rl();return new Promise(((c,l)=>{const u=new Km;u.setWithCredentials(!0),u.listenOnce(Qm.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case $o.NO_ERROR:const p=u.getResponseJson();Z(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case $o.TIMEOUT:Z(mt,`RPC '${e}' ${o} timed out`),l(new te(H.DEADLINE_EXCEEDED,"Request time out"));break;case $o.HTTP_ERROR:const m=u.getStatus();if(Z(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const P=y?.error;if(P&&P.status&&P.message){const k=(function(M){const L=M.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(L)>=0?L:H.UNKNOWN})(P.status);l(new te(k,P.message))}else l(new te(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new te(H.UNAVAILABLE,"Connection failed."));break;default:he(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(mt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);Z(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Rl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Xm(),c=Jm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(mt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,y=!1;const P=new sS({Yo:N=>{y?Z(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(Z(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(mt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Zo:()=>p.close()}),k=(N,M,L)=>{N.listen(M,(V=>{try{L(V)}catch(D){setTimeout((()=>{throw D}),0)}}))};return k(p,pi.EventType.OPEN,(()=>{y||(Z(mt,`RPC '${e}' stream ${s} transport opened.`),P.o_())})),k(p,pi.EventType.CLOSE,(()=>{y||(y=!0,Z(mt,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))})),k(p,pi.EventType.ERROR,(N=>{y||(y=!0,Vs(mt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),P.a_(new te(H.UNAVAILABLE,"The operation could not be completed")))})),k(p,pi.EventType.MESSAGE,(N=>{if(!y){const M=N.data[0];Pe(!!M,16349);const L=M,V=L?.error||L[0]?.error;if(V){Z(mt,`RPC '${e}' stream ${s} received error:`,V);const D=V.status;let G=(function(_){const v=Ke[_];if(v!==void 0)return Dg(v)})(D),ee=V.message;G===void 0&&(G=H.INTERNAL,ee="Unknown error status: "+D+" with message "+V.message),y=!0,P.a_(new te(G,ee)),p.close()}else Z(mt,`RPC '${e}' stream ${s} received:`,M),P.u_(M)}})),k(c,Ym.STAT_EVENT,(N=>{N.stat===ml.PROXY?Z(mt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===ml.NOPROXY&&Z(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.__()}),0),P}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){return new lA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="PersistentStream";class Wg{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new te(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return Z(bd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(Z(bd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oS extends Wg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=fA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?_n(o.readTime):fe.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Al(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=El(l)?{documents:mA(i,l)}:{query:gA(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Og(i,o.resumeToken);const u=Tl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){c.readTime=_a(i,o.snapshotVersion.toTimestamp());const u=Tl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=yA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Al(this.serializer),n.removeTarget=e,this.q_(n)}}class aS extends Wg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=pA(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Al(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>dA(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{}class lS extends cS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Il(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(H.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Il(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(H.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class uS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gn(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="RemoteStore";class hS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{as(this)&&(Z(Zr,"Restarting streams for network reachability change."),await(async function(l){const u=de(l);u.Ea.add(4),await uo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await tc(u)})(this))}))})),this.Ra=new uS(r,s)}}async function tc(t){if(as(t))for(const e of t.da)await e(!0)}async function uo(t){for(const e of t.da)await e(!1)}function Gg(t,e){const n=de(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Iu(n)?Tu(n):zs(n).O_()&&wu(n,e))}function Eu(t,e){const n=de(t),r=zs(n);n.Ia.delete(e),r.O_()&&Kg(n,e),n.Ia.size===0&&(r.O_()?r.L_():as(n)&&n.Ra.set("Unknown"))}function wu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zs(t).Y_(e)}function Kg(t,e){t.Va.Ue(e),zs(t).Z_(e)}function Tu(t){t.Va=new iA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),zs(t).start(),t.Ra.ua()}function Iu(t){return as(t)&&!zs(t).x_()&&t.Ia.size>0}function as(t){return de(t).Ea.size===0}function Qg(t){t.Va=void 0}async function fS(t){t.Ra.set("Online")}async function dS(t){t.Ia.forEach(((e,n)=>{wu(t,e)}))}async function pS(t,e){Qg(t),Iu(t)?(t.Ra.ha(e),Tu(t)):t.Ra.set("Unknown")}async function mS(t,e,n){if(t.Ra.set("Online"),e instanceof Vg&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){Z(Zr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await va(t,r)}else if(e instanceof Wo?t.Va.Ze(e):e instanceof Ng?t.Va.st(e):t.Va.tt(e),!n.isEqual(fe.min()))try{const r=await qg(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),Kg(i,l);const p=new gr(f.target,l,u,f.sequenceNumber);wu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){Z(Zr,"Failed to raise snapshot:",r),await va(t,r)}}async function va(t,e,n){if(!qs(e))throw e;t.Ea.add(1),await uo(t),t.Ra.set("Offline"),n||(n=()=>qg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Z(Zr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await tc(t)}))}function Yg(t,e){return e().catch((n=>va(t,n,e)))}async function nc(t){const e=de(t),n=Vr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ou;for(;gS(e);)try{const s=await JA(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,_S(e,s)}catch(s){await va(e,s)}Jg(e)&&Xg(e)}function gS(t){return as(t)&&t.Ta.length<10}function _S(t,e){t.Ta.push(e);const n=Vr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Jg(t){return as(t)&&!Vr(t).x_()&&t.Ta.length>0}function Xg(t){Vr(t).start()}async function yS(t){Vr(t).ra()}async function vS(t){const e=Vr(t);for(const n of t.Ta)e.ea(n.mutations)}async function ES(t,e,n){const r=t.Ta.shift(),s=du.from(r,e,n);await Yg(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await nc(t)}async function wS(t,e){e&&Vr(t).X_&&await(async function(r,s){if((function(o){return nA(o)&&o!==H.ABORTED})(s.code)){const i=r.Ta.shift();Vr(r).B_(),await Yg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await nc(r)}})(t,e),Jg(t)&&Xg(t)}async function Ad(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z(Zr,"RemoteStore received new credentials");const r=as(n);n.Ea.add(3),await uo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await tc(n)}async function TS(t,e){const n=de(t);e?(n.Ea.delete(2),await tc(n)):e||(n.Ea.add(2),await uo(n),n.Ra.set("Unknown"))}function zs(t){return t.ma||(t.ma=(function(n,r,s){const i=de(n);return i.sa(),new oS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:fS.bind(null,t),t_:dS.bind(null,t),r_:pS.bind(null,t),H_:mS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Iu(t)?Tu(t):t.Ra.set("Unknown")):(await t.ma.stop(),Qg(t))}))),t.ma}function Vr(t){return t.fa||(t.fa=(function(n,r,s){const i=de(n);return i.sa(),new aS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:yS.bind(null,t),r_:wS.bind(null,t),ta:vS.bind(null,t),na:ES.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await nc(t)):(await t.fa.stop(),t.Ta.length>0&&(Z(Zr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new bu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Au(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),qs(t))return new te(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static emptySet(e){return new bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=mi(),this.sortedSet=new $e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.ga=new $e(oe.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):he(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Us{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Us(e,n,bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class bS{constructor(){this.queries=Rd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Rd(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new te(H.ABORTED,"Firestore shutting down"))}}function Rd(){return new is((t=>yg(t)),Qa)}async function AS(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new IS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Au(o,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Su(n)}async function SS(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RS(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Su(n)}function CS(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Su(t){t.Ca.forEach((e=>{e.next()}))}var Cl,Cd;(Cd=Cl||(Cl={})).Ma="default",Cd.Cache="cache";class PS{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Cl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.key=e}}class e_{constructor(e){this.key=e}}class kS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=vg(e),this.tu=new bs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Sd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),y=Ya(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let N=!1;m&&y?m.data.isEqual(y.data)?P!==k&&(r.track({type:3,doc:y}),N=!0):this.su(m,y)||(r.track({type:2,doc:y}),N=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),N=!0):m&&!y&&(r.track({type:1,doc:m}),N=!0,(l||u)&&(c=!0)),N&&(y?(o=o.add(y),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(y,P){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he(20277,{Rt:N})}};return k(y)-k(P)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Us(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Sd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new e_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new Zg(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Us.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ru="SyncEngine";class DS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NS{constructor(e){this.key=e,this.hu=!1}}class VS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new is((c=>yg(c)),Qa),this.Iu=new Map,this.Eu=new Set,this.du=new $e(oe.comparator),this.Au=new Map,this.Ru=new gu,this.Vu={},this.mu=new Map,this.fu=Ls.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function OS(t,e,n=!0){const r=o_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await t_(r,e,n,!0),s}async function xS(t,e){const n=o_(t);await t_(n,e,!0,!1)}async function t_(t,e,n,r){const s=await XA(t.localStore,gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await MS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Gg(t.remoteStore,s),c}async function MS(t,e,n,r,s){t.pu=(p,m,y)=>(async function(k,N,M,L){let V=N.view.ru(M);V.Cs&&(V=await Ed(k.localStore,N.query,!1).then((({documents:T})=>N.view.ru(T,V))));const D=L&&L.targetChanges.get(N.targetId),G=L&&L.targetMismatches.get(N.targetId)!=null,ee=N.view.applyChanges(V,k.isPrimaryClient,D,G);return kd(k,N.targetId,ee.au),ee.snapshot})(t,p,m,y);const i=await Ed(t.localStore,e,!0),o=new kS(e,i.Qs),c=o.ru(i.documents),l=lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);kd(t,n,u.au);const f=new DS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function LS(t,e,n){const r=de(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Qa(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Sl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Eu(r.remoteStore,s.targetId),Pl(r,s.targetId)})).catch(Hs)):(Pl(r,s.targetId),await Sl(r.localStore,s.targetId,!0))}async function US(t,e){const n=de(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Eu(n.remoteStore,r.targetId))}async function FS(t,e,n){const r=WS(t);try{const s=await(function(o,c){const l=de(o),u=Fe.now(),f=c.reduce(((y,P)=>y.add(P.key)),Te());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let P=Kn(),k=Te();return l.Ns.getEntries(y,f).next((N=>{P=N,P.forEach(((M,L)=>{L.isValidDocument()||(k=k.add(M))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,P))).next((N=>{p=N;const M=[];for(const L of c){const V=Jb(L,p.get(L.key).overlayedDocument);V!=null&&M.push(new os(L.key,V,hg(V.value.mapValue),Fn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,M,c)})).next((N=>{m=N;const M=N.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(y,N.batchId,M)}))})).then((()=>({batchId:m.batchId,changes:wg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new $e(we)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await ho(r,s.changes),await nc(r.remoteStore)}catch(s){const i=Au(s,"Failed to persist write");n.reject(i)}}async function n_(t,e){const n=de(t);try{const r=await QA(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Pe(o.hu,14607):s.removedDocuments.size>0&&(Pe(o.hu,42227),o.hu=!1))})),await ho(n,r,e)}catch(r){await Hs(r)}}function Pd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&Su(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BS(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new $e(oe.comparator);o=o.insert(i,vt.newNoDocument(i,fe.min()));const c=Te().add(i),l=new Za(fe.min(),new Map,new $e(we),o,c);await n_(r,l),r.du=r.du.remove(i),r.Au.delete(e),Cu(r)}else await Sl(r.localStore,e,!1).then((()=>Pl(r,e,n))).catch(Hs)}async function jS(t,e){const n=de(t),r=e.batch.batchId;try{const s=await KA(n.localStore,e);s_(n,r,null),r_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ho(n,s)}catch(s){await Hs(s)}}async function $S(t,e,n){const r=de(t);try{const s=await(function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Pe(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);s_(r,e,n),r_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ho(r,s)}catch(s){await Hs(s)}}function r_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function s_(t,e,n){const r=de(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Pl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||i_(t,r)}))}function i_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Eu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Cu(t))}function kd(t,e,n){for(const r of n)r instanceof Zg?(t.Ru.addReference(r.key,e),HS(t,r)):r instanceof e_?(Z(Ru,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||i_(t,r.key)):he(19791,{wu:r})}function HS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Z(Ru,"New document in limbo: "+n),t.Eu.add(r),Cu(t))}function Cu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new oe(je.fromString(e)),r=t.fu.next();t.Au.set(r,new NS(n)),t.du=t.du.insert(n,r),Gg(t.remoteStore,new gr(gn(hu(n.path)),r,"TargetPurposeLimboResolution",za.ce))}}async function ho(t,e,n){const r=de(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=yu.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>j.forEach(u,(m=>j.forEach(m.Es,(y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y))).next((()=>j.forEach(m.ds,(y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))))))}catch(p){if(!qs(p))throw p;Z(vu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=f.Ms.get(m),P=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(m,k)}}})(r.localStore,i))}async function qS(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z(Ru,"User change. New user:",e.toKey());const r=await Hg(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new te(H.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ho(n,r.Ls)}}function zS(t,e){const n=de(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function o_(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=n_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BS.bind(null,e),e.Pu.H_=RS.bind(null,e.eventManager),e.Pu.yu=CS.bind(null,e.eventManager),e}function WS(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$S.bind(null,e),e}class Ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return GA(this.persistence,new qA,e.initialUser,this.serializer)}Cu(e){return new $g(_u.mi,this.serializer)}Du(e){return new eS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ea.provider={build:()=>new Ea};class GS extends Ea{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Pe(this.persistence.referenceDelegate instanceof ya,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new PA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new $g((r=>ya.mi(r,n)),this.serializer)}}class kl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qS.bind(null,this.syncEngine),await TS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new bS})()}createDatastore(e){const n=ec(e.databaseInfo.databaseId),r=(function(i){return new iS(i)})(e.databaseInfo);return(function(i,o,c,l){return new lS(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new hS(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Pd(this.syncEngine,n,0)),(function(){return Id.v()?new Id:new tS})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new VS(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=de(n);Z(Zr,"RemoteStore shutting down."),r.Ea.add(5),await uo(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}kl.provider={build:()=>new kl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class KS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="FirestoreClient";class QS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=su.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Z(Or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Z(Or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Au(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function zc(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Hg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Dd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YS(t);Z(Or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Ad(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Ad(e.remoteStore,s))),t._onlineComponents=e}async function YS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Or,"Using user provided OfflineComponentProvider");try{await zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await zc(t,new Ea)}}else Z(Or,"Using default OfflineComponentProvider"),await zc(t,new GS(void 0));return t._offlineComponents}async function a_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Or,"Using user provided OnlineComponentProvider"),await Dd(t,t._uninitializedComponentsProvider._online)):(Z(Or,"Using default OnlineComponentProvider"),await Dd(t,new kl))),t._onlineComponents}function JS(t){return a_(t).then((e=>e.syncEngine))}async function XS(t){const e=await a_(t),n=e.eventManager;return n.onListen=OS.bind(null,e.syncEngine),n.onUnlisten=LS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=US.bind(null,e.syncEngine),n}function ZS(t,e,n={}){const r=new br;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new KS({next:m=>{f.Nu(),o.enqueueAndForget((()=>SS(i,p)));const y=m.docs.has(c);!y&&m.fromCache?u.reject(new te(H.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?u.reject(new te(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new PS(hu(c.path),f,{includeMetadataChanges:!0,qa:!0});return AS(i,p)})(await XS(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function c_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const l_="firestore.googleapis.com",Vd=!0;class Od{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=l_,this.ssl=Vd}else this.host=e.host,this.ssl=e.ssl??Vd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<RA)throw new te(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=c_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new te(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Od({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Od(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new XI;switch(r.type){case"firstParty":return new nb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Nd.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Nd.delete(n),r.terminate())})(this),Promise.resolve()}}function eR(t,e,n,r={}){t=qi(t,Pu);const s=Bs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Fm(`https://${c}`),Bm("Firestore",!0)),i.host!==l_&&i.host!==c&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Yr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=_t.MOCK_USER;else{u=AT(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new te(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new _t(p)}t._authCredentials=new ZI(new eg(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ku(this.firestore,e,this._query)}}class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ao(n,st._jsonSchema))return new st(e,r||null,new oe(je.fromString(n.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:Qe("string",st._jsonSchemaVersion),referencePath:Qe("string")};class Xi extends ku{constructor(e,n,r){super(e,n,hu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new oe(e))}withConverter(e){return new Xi(this.firestore,e,this._path)}}function Bt(t,e,...n){if(t=Qt(t),arguments.length===1&&(e=su.newId()),cb("doc","path",e),t instanceof Pu){const r=je.fromString(e,...n);return Kf(r),new st(t,null,new oe(r))}{if(!(t instanceof st||t instanceof Xi))throw new te(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Kf(r),new st(t.firestore,t instanceof Xi?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="AsyncQueue";class Md{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zg(this,"async_queue_retry"),this._c=()=>{const r=qc();r&&Z(xd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new br;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!qs(e))throw e;Z(xd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Gn("INTERNAL UNHANDLED ERROR: ",Ld(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=bu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&he(47125,{Pc:Ld(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ld(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Du extends Pu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Md,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Md(e),this._firestoreClient=void 0,await e}}}function tR(t,e){const n=typeof t=="object"?t:qm(),r=typeof t=="string"?t:fa,s=nu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=IT("firestore");i&&eR(s,...i)}return s}function u_(t){if(t._terminated)throw new te(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||nR(t),t._firestoreClient}function nR(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new Eb(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c_(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new QS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(ut.fromBase64String(e))}catch(n){throw new te(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ao(e,jt._jsonSchema))return jt.fromBase64String(e.bytes)}}jt._jsonSchemaVersion="firestore/bytes/1.0",jt._jsonSchema={type:Qe("string",jt._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yn._jsonSchemaVersion}}static fromJSON(e){if(ao(e,yn._jsonSchema))return new yn(e.latitude,e.longitude)}}yn._jsonSchemaVersion="firestore/geoPoint/1.0",yn._jsonSchema={type:Qe("string",yn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
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
 */class vn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ao(e,vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new vn(e.vectorValues);throw new te(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vn._jsonSchemaVersion="firestore/vectorValue/1.0",vn._jsonSchema={type:Qe("string",vn._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=/^__.*__$/;class sR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new co(e,this.data,n,this.fieldTransforms)}}function h_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{Ac:t})}}class Ou{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ou({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(h_(this.Ac)&&rR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class iR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ec(e)}Cc(e,n,r,s=!1){return new Ou({Ac:e,methodName:n,Dc:r,path:lt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oR(t){const e=t._freezeSettings(),n=ec(t._databaseId);return new iR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aR(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);m_("Data must be an object, but it was:",o,r);const c=d_(r,o);let l,u;if(i.merge)l=new en(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=cR(e,p,n);if(!o.contains(m))throw new te(H.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);uR(f,m)||f.push(m)}l=new en(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new sR(new Ft(c),l,u)}class xu extends Vu{_toFieldTransform(e){return new Gb(e.path,new Qi)}isEqual(e){return e instanceof xu}}function f_(t,e){if(p_(t=Qt(t)))return m_("Unsupported field value:",e,t),d_(t,e);if(t instanceof Vu)return(function(r,s){if(!h_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=f_(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:_a(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_a(s.serializer,i)}}if(r instanceof yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jt)return{bytesValue:Og(s.serializer,r._byteString)};if(r instanceof st){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vn)return(function(o,c){return{mapValue:{fields:{[lg]:{stringValue:ug},[da]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return fu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${iu(r)}`)})(t,e)}function d_(t,e){const n={};return rg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,((r,s)=>{const i=f_(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function p_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof yn||t instanceof jt||t instanceof st||t instanceof Vu||t instanceof vn)}function m_(t,e,n){if(!p_(n)||!tg(n)){const r=iu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function cR(t,e,n){if((e=Qt(e))instanceof Nu)return e._internalPath;if(typeof e=="string")return g_(t,e);throw wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const lR=new RegExp("[~\\*/\\[\\]]");function g_(t,e,n){if(e.search(lR)>=0)throw wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nu(...e.split("."))._internalPath}catch{throw wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new te(H.INVALID_ARGUMENT,c+t+l)}function uR(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(y_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hR extends __{data(){return super.data()}}function y_(t,e){return typeof e=="string"?g_(t,e):e instanceof Nu?e._internalPath:e._delegate._internalPath}class fR{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[da].arrayValue?.values?.map((r=>We(r.doubleValue)));return new vn(n)}convertGeoPoint(e){return new yn(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ga(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Pe(Bg(r),9688,{name:e});const s=new Gi(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class _i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kr extends __{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(y_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Kr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Kr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Kr._jsonSchema={type:Qe("string",Kr._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Go extends Kr{data(e={}){return super.data(e)}}class Ni{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _i(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Go(this._firestore,this._userDataWriter,r.key,r,new _i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Go(s._firestore,s._userDataWriter,c.doc.key,c.doc,new _i(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Go(s._firestore,s._userDataWriter,c.doc.key,c.doc,new _i(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:pR(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ni._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=su.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){t=qi(t,st);const e=qi(t.firestore,Du);return ZS(u_(e),t._key).then((n=>_R(e,t,n)))}Ni._jsonSchemaVersion="firestore/querySnapshot/1.0",Ni._jsonSchema={type:Qe("string",Ni._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class mR extends fR{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function Ar(t,e,n){t=qi(t,st);const r=qi(t.firestore,Du),s=dR(t.converter,e,n);return gR(r,[aR(oR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Fn.none())])}function gR(t,e){return(function(r,s){const i=new br;return r.asyncQueue.enqueueAndForget((async()=>FS(await JS(r),s,i))),i.promise})(u_(t),e)}function _R(t,e,n){const r=n.docs.get(e._key),s=new mR(t);return new Kr(t,s,e._key,r,new _i(n.hasPendingWrites,n.fromCache),e.converter)}function Bn(){return new xu("serverTimestamp")}(function(e,n=!0){(function(s){$s=s})(js),Ns(new Jr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Du(new eb(r.getProvider("auth-internal")),new rb(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Tr(qf,zf,e),Tr(qf,zf,"esm2020")})();var yR="firebase",vR="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tr(yR,vR,"app");function v_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ER=v_,E_=new io("auth","Firebase",v_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new eu("@firebase/auth");function wR(t,...e){Ta.logLevel<=Ee.WARN&&Ta.warn(`Auth (${js}): ${t}`,...e)}function Ko(t,...e){Ta.logLevel<=Ee.ERROR&&Ta.error(`Auth (${js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw Lu(t,...e)}function sn(t,...e){return Lu(t,...e)}function Mu(t,e,n){const r={...ER(),[e]:n};return new io("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return Mu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function w_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),Mu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return E_.create(t,...e)}function ue(t,e,...n){if(!t)throw Lu(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ko(e),new Error(e)}function Qn(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){return typeof self<"u"&&self.location?.href||""}function TR(){return Ud()==="http:"||Ud()==="https:"}function Ud(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TR()||DT()||"connection"in navigator)?navigator.onLine:!0}function bR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=CT()||NT()}get(){return IR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],RR=new fo(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Zn(t,e,n,r,s={}){return I_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=oo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return kT()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Bs(t.emulatorConfig.host)&&(u.credentials="include"),T_.fetch()(await b_(t,t.config.apiHost,n,c),u)})}async function I_(t,e,n){t._canInitEmulator=!1;const r={...AR,...e};try{const s=new PR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Lo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Lo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Lo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mu(t,f,u);Yt(t,f)}}catch(s){if(s instanceof Jn)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function po(t,e,n,r,s={}){const i=await Zn(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function b_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Uu(t.config,s):`${t.config.apiScheme}://${s}`;return SR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function CR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),RR.get())})}}function Lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}function Fd(t){return t!==void 0&&t.enterprise!==void 0}class kR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return CR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DR(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function Ia(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VR(t,e=!1){const n=Qt(t),r=await n.getIdToken(e),s=Fu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Oi(Wc(s.auth_time)),issuedAtTime:Oi(Wc(s.iat)),expirationTime:Oi(Wc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Wc(t){return Number(t)*1e3}function Fu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=xm(n);return s?JSON.parse(s):(Ko("Failed to decode base64 JWT payload"),null)}catch(s){return Ko("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Bd(t){const e=Fu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jn&&OR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oi(this.lastLoginAt),this.creationTime=Oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ba(t){const e=t.auth,n=await t.getIdToken(),r=await Zi(t,Ia(e,{idToken:n}));ue(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?A_(s.providerUserInfo):[],o=LR(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Nl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function MR(t){const e=Qt(t);await ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function A_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e){const n=await I_(t,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await b_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Bs(t.emulatorConfig.host)&&(l.credentials="include"),T_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FR(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Bd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await UR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new As;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new xR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zi(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VR(this,e)}reload(){return MR(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await Zi(this,NR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:P,stsTokenManager:k}=n;ue(p&&k,e,"internal-error");const N=As.fromJSON(this.name,k);ue(typeof p=="string",e,"internal-error"),cr(r,e.name),cr(s,e.name),ue(typeof m=="boolean",e,"internal-error"),ue(typeof y=="boolean",e,"internal-error"),cr(i,e.name),cr(o,e.name),cr(c,e.name),cr(l,e.name),cr(u,e.name),cr(f,e.name);const M=new tn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:u,lastLoginAt:f});return P&&Array.isArray(P)&&(M.providerData=P.map(L=>({...L}))),l&&(M._redirectEventId=l),M}static async _fromIdTokenResponse(e,n,r=!1){const s=new As;s.updateFromServerResponse(n);const i=new tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ba(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?A_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new As;c.updateFromIdToken(r);const l=new tn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Nl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Map;function Mn(t){Qn(t instanceof Function,"Expected a class definition");let e=jd.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jd.set(t,e),e)}/**
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
 */class S_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}S_.type="NONE";const $d=S_;/**
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
 */function Qo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ia(this.auth,{idToken:e}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,e):null}return tn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ss(Mn($d),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Mn($d);const o=Qo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Ia(e,{idToken:f}).catch(()=>{});if(!m)break;p=await tn._fromGetAccountInfoResponse(e,m,f)}else p=tn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ss(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ss(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(N_(e))return"Blackberry";if(V_(e))return"Webos";if(C_(e))return"Safari";if((e.includes("chrome/")||P_(e))&&!e.includes("edge/"))return"Chrome";if(D_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function R_(t=It()){return/firefox\//i.test(t)}function C_(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P_(t=It()){return/crios\//i.test(t)}function k_(t=It()){return/iemobile/i.test(t)}function D_(t=It()){return/android/i.test(t)}function N_(t=It()){return/blackberry/i.test(t)}function V_(t=It()){return/webos/i.test(t)}function Bu(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BR(t=It()){return Bu(t)&&!!window.navigator?.standalone}function jR(){return VT()&&document.documentMode===10}function O_(t=It()){return Bu(t)||D_(t)||V_(t)||N_(t)||/windows phone/i.test(t)||k_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t,e=[]){let n;switch(t){case"Browser":n=Hd(It());break;case"Worker":n=`${Hd(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class $R{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function HR(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Xn(t,e))}/**
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
 */const qR=6;class zR{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??qR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qd(this),this.idTokenSubscription=new qd(this),this.beforeStateQueue=new $R(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ia(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Mt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ba(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(jn(this));const n=e?Qt(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HR(this),n=new zR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FR(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&wR(`Error while retrieving App Check token: ${e.error}`),e?.token}}function er(t){return Qt(t)}class qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=jT(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GR(t){rc=t}function M_(t){return rc.loadJS(t)}function KR(){return rc.recaptchaEnterpriseScript}function QR(){return rc.gapiScript}function YR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class JR{constructor(){this.enterprise=new XR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class XR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ZR="recaptcha-enterprise",L_="NO_RECAPTCHA";class eC{constructor(e){this.type=ZR,this.auth=er(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{DR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new kR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Fd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(L_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Fd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=KR();l.length!==0&&(l+=c),M_(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function zd(t,e,n,r=!1,s=!1){const i=new eC(t);let o;if(s)o=L_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Aa(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await zd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await zd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e){const n=nu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Yr(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function nC(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Mn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function rC(t,e,n){const r=er(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=U_(e),{host:o,port:c}=sC(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(Yr(u,r.config.emulator)&&Yr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Bs(o)?(Fm(`${i}//${o}${l}`),Bm("Auth",!0)):iC()}function U_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sC(t){const e=U_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Wd(o)}}}function Wd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function oC(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e){return po(t,"POST","/v1/accounts:signInWithPassword",Xn(t,e))}async function cC(t,e){return Zn(t,"POST","/v1/accounts:sendOobCode",Xn(t,e))}async function lC(t,e){return cC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e){return po(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}async function hC(t,e){return po(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends ju{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new eo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new eo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Aa(e,n,"signInWithPassword",aC);case"emailLink":return uC(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Aa(e,r,"signUpPassword",oC);case"emailLink":return hC(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t,e){return po(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="http://localhost";class es extends ju{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:fC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pC(t){const e=fi(di(t)).link,n=e?fi(di(e)).deep_link_id:null,r=fi(di(t)).deep_link_id;return(r?fi(di(r)).link:null)||r||n||e||t}class $u{constructor(e){const n=fi(di(e)),r=n.apiKey??null,s=n.oobCode??null,i=dC(n.mode??null);ue(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=pC(e);try{return new $u(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return eo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$u.parseLink(n);return ue(r,"argument-error"),eo._fromEmailAndCode(e,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mo extends sc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends mo{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends mo{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends mo{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e){return po(t,"POST","/v1/accounts:signUp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),o=Gd(r);return new ts({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gd(r);return new ts({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends Jn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sa(e,n,r,s)}}function F_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,i,e,r):i})}async function gC(t,e,n=!1){const r=await Zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",r)}/**
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
 */async function _C(t,e,n=!1){const{auth:r}=t;if(Mt(r.app))return Promise.reject(jn(r));const s="reauthenticate";try{const i=await Zi(t,F_(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=Fu(i.idToken);ue(o,r,"internal-error");const{sub:c}=o;return ue(t.uid===c,r,"user-mismatch"),ts._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(t,e,n=!1){if(Mt(t.app))return Promise.reject(jn(t));const r="signIn",s=await F_(t,r,e),i=await ts._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function yC(t,e){return B_(er(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(t){const e=er(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vC(t,e,n){const r=er(t);await Aa(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",lC)}async function EC(t,e,n){if(Mt(t.app))return Promise.reject(jn(t));const r=er(t),o=await Aa(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mC).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&j_(t),l}),c=await ts._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function wC(t,e,n){return Mt(t.app)?Promise.reject(jn(t)):yC(Qt(t),Ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&j_(t),r})}function TC(t,e,n,r){return Qt(t).onIdTokenChanged(e,n,r)}function IC(t,e,n){return Qt(t).beforeAuthStateChanged(e,n)}const Ra="__sak";/**
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
 */class $_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=1e3,AC=10;class H_ extends $_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=O_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}H_.type="LOCAL";const SC=H_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_ extends $_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}q_.type="SESSION";const z_=q_;/**
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
 */function RC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ic(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await RC(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ic.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class CC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Hu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function PC(t){En().location.href=t}/**
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
 */function W_(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function kC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DC(){return navigator?.serviceWorker?.controller||null}function NC(){return W_()?self:null}/**
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
 */const G_="firebaseLocalStorageDb",VC=1,Ca="firebaseLocalStorage",K_="fbase_key";class go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([Ca],e?"readwrite":"readonly").objectStore(Ca)}function OC(){const t=indexedDB.deleteDatabase(G_);return new go(t).toPromise()}function Vl(){const t=indexedDB.open(G_,VC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ca,{keyPath:K_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ca)?e(r):(r.close(),await OC(),e(await Vl()))})})}async function Kd(t,e,n){const r=oc(t,!0).put({[K_]:e,value:n});return new go(r).toPromise()}async function xC(t,e){const n=oc(t,!1).get(e),r=await new go(n).toPromise();return r===void 0?null:r.value}function Qd(t,e){const n=oc(t,!0).delete(e);return new go(n).toPromise()}const MC=800,LC=3;class Q_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return W_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ic._getInstance(NC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await kC(),!this.activeServiceWorker)return;this.sender=new CC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vl();return await Kd(e,Ra,"1"),await Qd(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=oc(s,!1).getAll();return new go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Q_.type="LOCAL";const UC=Q_;new fo(3e4,6e4);/**
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
 */function qu(t,e){return e?Mn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zu extends ju{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FC(t){return B_(t.auth,new zu(t),t.bypassAuthState)}function BC(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),_C(n,new zu(t),t.bypassAuthState)}async function jC(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),gC(n,new zu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FC;case"linkViaPopup":case"linkViaRedirect":return jC;case"reauthViaPopup":case"reauthViaRedirect":return BC;default:Yt(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=new fo(2e3,1e4);async function HC(t,e,n){if(Mt(t.app))return Promise.reject(sn(t,"operation-not-supported-in-this-environment"));const r=er(t);w_(t,e,sc);const s=qu(r,n);return new _r(r,"signInViaPopup",e,s).executeNotNull()}async function qC(t,e,n){const r=Qt(t);w_(r.auth,e,sc);const s=qu(r.auth,n);return new _r(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class _r extends Y_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$C.get())};e()}}_r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="pendingRedirect",Yo=new Map;class WC extends Y_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const r=await GC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GC(t,e){const n=YC(e),r=QC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function KC(t,e){Yo.set(t._key(),e)}function QC(t){return Mn(t._redirectPersistence)}function YC(t){return Qo(zC,t.config.apiKey,t.name)}async function JC(t,e,n=!1){if(Mt(t.app))return Promise.reject(jn(t));const r=er(t),s=qu(r,e),o=await new WC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=600*1e3;class ZC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!J_(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(sn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yd(e))}saveEventToCache(e){this.cachedEventUids.add(Yd(e)),this.lastProcessedEventTime=Date.now()}}function Yd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function J_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function eP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rP=/^https?/;async function sP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tP(t);for(const n of e)try{if(iP(n))return}catch{}Yt(t,"unauthorized-domain")}function iP(t){const e=Dl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rP.test(n))return!1;if(nP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const oP=new fo(3e4,6e4);function Jd(){const t=En().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aP(t){return new Promise((e,n)=>{function r(){Jd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jd(),n(sn(t,"network-request-failed"))},timeout:oP.get()})}if(En().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(En().gapi?.load)r();else{const s=YR("iframefcb");return En()[s]=()=>{gapi.load?r():n(sn(t,"network-request-failed"))},M_(`${QR()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Jo=null,e})}let Jo=null;function cP(t){return Jo=Jo||aP(t),Jo}/**
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
 */const lP=new fo(5e3,15e3),uP="__/auth/iframe",hP="emulator/auth/iframe",fP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pP(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uu(e,hP):`https://${t.config.authDomain}/${uP}`,r={apiKey:e.apiKey,appName:t.name,v:js},s=dP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oo(r).slice(1)}`}async function mP(t){const e=await cP(t),n=En().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:pP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),c=En().setTimeout(()=>{i(o)},lP.get());function l(){En().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const gP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_P=500,yP=600,vP="_blank",EP="http://localhost";class Xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wP(t,e,n,r=_P,s=yP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...gP,width:r.toString(),height:s.toString(),top:i,left:o},u=It().toLowerCase();n&&(c=P_(u)?vP:n),R_(u)&&(e=e||EP,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[y,P])=>`${m}${y}=${P},`,"");if(BR(u)&&c!=="_self")return TP(e||"",c),new Xd(null);const p=window.open(e||"",c,f);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new Xd(p)}function TP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const IP="__/auth/handler",bP="emulator/auth/handler",AP=encodeURIComponent("fac");async function Zd(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:s};if(e instanceof sc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof mo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${AP}=${encodeURIComponent(l)}`:"";return`${SP(t)}?${oo(c).slice(1)}${u}`}function SP({config:t}){return t.emulator?Uu(t,bP):`https://${t.authDomain}/${IP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="webStorageSupport";class RP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z_,this._completeRedirectFn=JC,this._overrideRedirectResult=KC}async _openPopup(e,n,r,s){Qn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Zd(e,n,r,Dl(),s);return wP(e,i,Hu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zd(e,n,r,Dl(),s);return PC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mP(e),r=new ZC(e);return n.register("authEvent",s=>(ue(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gc,{type:Gc},s=>{const i=s?.[0]?.[Gc];i!==void 0&&n(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return O_()||C_()||Bu()}}const CP=RP;var ep="@firebase/auth",tp="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DP(t){Ns(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x_(t)},u=new WR(r,s,i,l);return nC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ns(new Jr("auth-internal",e=>{const n=er(e.getProvider("auth").getImmediate());return(r=>new PP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(ep,tp,kP(t)),Tr(ep,tp,"esm2020")}/**
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
 */const NP=300,VP=Um("authIdTokenMaxAge")||NP;let np=null;const OP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>VP)return;const s=n?.token;np!==s&&(np=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wu(t=qm()){const e=nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tC(t,{popupRedirectResolver:CP,persistence:[UC,SC,z_]}),r=Um("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=OP(i.toString());IC(n,o,()=>o(n.currentUser)),TC(n,c=>o(c))}}const s=Mm("auth");return s&&rC(n,`http://${s}`),n}function xP(){return document.getElementsByTagName("head")?.[0]??document}GR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",xP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DP("Browser");const MP={apiKey:"AIzaSyA88mxzUStbuMFKNr9Q0OODtHXmpyuqvBY",authDomain:"findyourfit-93e9f.firebaseapp.com",projectId:"findyourfit-93e9f",storageBucket:"findyourfit-93e9f.firebasestorage.app",messagingSenderId:"715690823951",appId:"1:715690823951:web:f3af86677f7d990c55ae7a",measurementId:"G-2GTC9GRYRL"},X_=Hm(MP),$t=tR(X_),Ln=Wu(X_),An=ow("user",{state:()=>({userData:null,moodData:null,journalData:null}),actions:{async fetchUserData(){const t=Ln.currentUser;if(!t)return;const e=Bt($t,"users",t.uid),n=await Vi(e);n.exists()&&(this.userData=n.data(),this.userData.streak||(this.userData.streak={count:1,lastUpdate:Bn()},await Ar(e,this.userData,{merge:!0})),await this.updateStreak(),await this.getMood(),await this.getJournalEntries())},setUserData(t){this.userData=t},setMoodData(t){this.moodData=t},async updateStreak(){const t=Ln.currentUser;if(!t||!this.userData?.streak)return;const{count:e,lastUpdate:n}=this.userData.streak;if(!n||typeof n.toDate!="function"){this.userData.streak={count:1,lastUpdate:Bn()},await Ar(Bt($t,"users",t.uid),this.userData,{merge:!0});return}const r=n.toDate(),s=new Date;this.isSameDay(r,s)||(this.isYesterday(r,s)?this.userData.streak.count=e+1:this.userData.streak.count=1,this.userData.streak.lastUpdate=Bn(),await Ar(Bt($t,"users",t.uid),this.userData,{merge:!0}))},isSameDay(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()},isYesterday(t){const e=t,n=new Date,r=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate())-r)/(1e3*60*60*24)===1},async getMood(){const t=Ln.currentUser;if(!t)return;const e=Bt($t,"mood",t.uid),n=await Vi(e);n.exists()&&(this.moodData=n.data())},async getJournalEntries(){const t=Ln.currentUser;if(!t)return;const e=Bt($t,"journals",t.uid),n=await Vi(e);if(n.exists()){const r=n.data(),s=Object.entries(r).sort((i,o)=>Number(o[0])-Number(i[0])).map(([i,o])=>({id:i,...o}));this.journalData=s}}}}),Sn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},LP={class:"modal_holder"},UP={class:"modal_heading_holder inter font_size_xs"},FP=["innerHTML"],BP={__name:"errorModal",props:{errorMessage:{type:String,required:!0}},setup(t){return(e,n)=>(se(),ge("div",{class:"modal_overlay",onClick:n[1]||(n[1]=Xl(r=>e.$emit("close"),["self"])),role:"dialog","aria-modal":"true"},[x("div",LP,[x("div",UP,[n[2]||(n[2]=x("span",null," Attention!",-1)),x("button",{class:"modal_close_button",onClick:n[0]||(n[0]=r=>e.$emit("close"))},"×")]),x("div",{class:"modal_content_holder inter font_size_xs",innerHTML:t.errorMessage},null,8,FP)])]))}},_o=Sn(BP,[["__scopeId","data-v-306a9af2"]]),jP={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},$P={class:"modal_holder"},HP={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},qP={class:"modal_content_holder inter font_size_xs"},zP=["value"],WP=["value"],GP={__name:"userInfoModal",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=An(),r=t,s=le([]),i=le("");rs(async()=>{const V=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();s.value=V.sort((D,G)=>D.name.common.localeCompare(G.name.common))});const o=Ha(),c=le(""),l=le(""),u=le(""),f=le(""),p=le(!1),m=le([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),y=le("");function P(L){return/^\d{10}$/.test(L)}function k(L){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(L))return!1;const[D,G,ee]=L.split("/").map(Number),T=new Date(D,G-1,ee);return T.getFullYear()===D&&T.getMonth()===G-1&&T.getDate()===ee}const N=async()=>{if(Wu().currentUser,f.value="",p.value=!1,!P(l.value)){f.value="Contact Number must be a valid 10-digit number.",p.value=!0;return}if(!k(u.value)){f.value="Date of Birth must be in the format yyyy/mm/dd.",p.value=!0;return}const V={personalInfo:{name:c.value,contactNumber:l.value,dateOfBirth:u.value,email:r.globalUser.email,country:i.value,gender:y.value},streak:{count:parseInt(1),lastUpdate:Bn()},loginDate:new Date().toISOString(),uid:r.globalUser.uid};await Ar(Bt($t,"users",r.globalUser.uid),V),n.setUserData(V),o.push({name:"Navigation"})},M=()=>{p.value=!1,f.value=""};return(L,V)=>(se(),ge("div",jP,[x("div",$P,[x("div",HP,[V[6]||(V[6]=x("span",{style:{width:"80%"}},"User Information",-1)),x("button",{class:"modal_close_button",onClick:V[0]||(V[0]=D=>L.$emit("close"))},"×")]),x("div",qP,[V[10]||(V[10]=x("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),x("form",{class:"modal_form_holder",onSubmit:Xl(N,["prevent"])},[Et(x("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":V[1]||(V[1]=D=>c.value=D),required:""},null,512),[[Wt,c.value]]),Et(x("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":V[2]||(V[2]=D=>l.value=D),required:""},null,512),[[Wt,l.value]]),Et(x("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":V[3]||(V[3]=D=>u.value=D),required:""},null,512),[[Wt,u.value]]),Et(x("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":V[4]||(V[4]=D=>y.value=D)},[V[7]||(V[7]=x("option",{disabled:"",value:""},"Please select one",-1)),(se(!0),ge(Le,null,Kt(m.value,D=>(se(),ge("option",{key:D.value,value:D.value},Me(D.text),9,zP))),128))],512),[[ji,y.value]]),Et(x("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":V[5]||(V[5]=D=>i.value=D),id:"country"},[V[8]||(V[8]=x("option",{disabled:"",value:""},"Select your country",-1)),(se(!0),ge(Le,null,Kt(s.value,D=>(se(),ge("option",{key:D.cca3,value:D.cca3},Me(D.name.common),9,WP))),128))],512),[[ji,i.value]]),V[9]||(V[9]=x("button",{type:"submit",class:"modal_button inter font_size_xs"}," Confirm ",-1))],32)])]),p.value?(se(),Ht(_o,{key:0,errorMessage:f.value,onClose:M},null,8,["errorMessage"])):zn("",!0)]))}},KP=Sn(GP,[["__scopeId","data-v-d9949924"]]),QP={class:"login_page"},YP={class:"login_page_content"},JP={class:"login_page_form"},XP={class:"login_page_form_fields"},ZP=["type"],e0={class:"show_password_toggle inter font_size_xs"},t0={class:"login_page_social_login"},n0={class:"login_page_toggle_register inter font_size_xs"},r0={__name:"loginRegister",setup(t){const e=An(),n=Ha(),r=le("password"),s=le(null),i=le(""),o=le(""),c=le("login"),l=le(!1),u=le(""),f=le(!1),p=new On;p.addScope("https://www.googleapis.com/auth/contacts.readonly");const m=D=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D),y=()=>{r.value=r.value==="password"?"text":"password"},P=()=>{c.value=c.value==="login"?"register":"login"},k=()=>{if(i.value===""){u.value="Please enter your email to reset your password!",l.value=!0;return}vC(Ln,i.value).then(()=>{u.value="An email has been sent to reset your password!",l.value=!0})},N=async()=>{try{const ee=(await HC(Ln,p)).user;if(ee){if(!ee)return;const T=Bt($t,"users",ee.uid),_=await Vi(T);if(_.exists()){var D=_.data();D&&await M(D)}}n.push({name:"Navigation"})}catch(G){console.log(G.message),u.value="Google login failed!",l.value=!0}},M=async D=>{if(D.streak){const G=D.streak;L(G.lastUpdate)?D.streak.count=D.streak.count+1:D.streak.count=1,D.streak.lastUpdate=Bn(),D.loginDate=Bn(),await Ar(Bt($t,"users",D.uid),D)}},L=D=>{const G=D.toDate(),ee=new Date,T=new Date(ee.getFullYear(),ee.getMonth(),ee.getDate()),_=new Date(T);return _.setDate(T.getDate()-1),G>=_&&G<T},V=async()=>{try{if(u.value="",l.value=!1,!m(i.value)){u.value="Invalid email format!",l.value=!0;return}if(c.value==="register"){const ee=(await EC(Ln,i.value,o.value)).user;try{await qC(ee,p)}catch(T){console.warn("Google link failed (optional):",T)}s.value={uid:ee.uid,email:ee.email},f.value=!0}else{const ee=(await wC(Ln,i.value,o.value)).user,T=Bt($t,"users",ee.uid),_=await Vi(T);if(_.exists()){var D=_.data();D&&(await M(D),e.setUserData(D),n.push({name:"Navigation"}))}}}catch(G){G.code==="auth/invalid-credential"?u.value="Invalid login details.":G.code==="auth/email-already-in-use"?u.value="Email already in use.":u.value="An unexpected error occurred.",l.value=!0}};return(D,G)=>(se(),ge(Le,null,[x("div",QP,[x("div",YP,[G[5]||(G[5]=x("div",{class:"login_background_holder"},null,-1)),G[6]||(G[6]=x("div",{class:"login_page_intro inter font_size_xs"},[x("div",{class:"login_page_intro_text"},[x("div",{class:"font_size_m licorice_regular"},"Welcome to Finding Your Fit"),x("br"),x("br"),mn(" A space designed to help you understand yourself better, build emotional balance, and grow into the life that fits you best. Take a moment to reconnect, reflect, and start working toward your goals — one step at a time. ")])],-1)),x("div",JP,[x("form",XP,[Et(x("input",{class:"login_page_input inter font_size_xs",type:"text",placeholder:"Email","onUpdate:modelValue":G[0]||(G[0]=ee=>i.value=ee)},null,512),[[Wt,i.value]]),Et(x("input",{class:"login_page_password inter font_size_xs",type:r.value,placeholder:"Password","onUpdate:modelValue":G[1]||(G[1]=ee=>o.value=ee)},null,8,ZP),[[zE,o.value]]),x("div",e0,[x("label",null,[x("input",{type:"checkbox",onChange:y},null,32),G[4]||(G[4]=mn(" Show Password ",-1))])])]),x("button",{class:"login_page_button inter font_size_xs",onClick:V},Me(c.value==="login"?"Login":"Register"),1),x("div",{class:"login_page_forgot_password inter font_size_xs",onClick:k},Me(c.value==="login"?"Forgot Password?":""),1)]),x("div",t0,[x("div",{class:"login_page_social_button",onClick:G[2]||(G[2]=ee=>N())})]),x("div",n0,[x("u",{onClick:P},Me(c.value==="login"?"Register":"Login"),1)])])]),l.value?(se(),Ht(_o,{key:0,errorMessage:u.value,onClose:G[3]||(G[3]=ee=>l.value=!1)},null,8,["errorMessage"])):zn("",!0),f.value&&s.value?(se(),Ht(KP,{key:1,globalUser:s.value},null,8,["globalUser"])):zn("",!0)],64))}},s0=Sn(r0,[["__scopeId","data-v-f4d6eaa2"]]),rp=[{content:"Success is not final, failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},{content:"The only way to do great work is to love what you do.",author:"Steve Jobs"},{content:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"You are never too old to set another goal or to dream a new dream.",author:"C.S. Lewis"},{content:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"Don’t watch the clock; do what it does. Keep going.",author:"Sam Levenson"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"The only limit to our realization of tomorrow is our doubts of today.",author:"Franklin D. Roosevelt"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Don’t wait. The time will never be just right.",author:"Napoleon Hill"},{content:"Believe in yourself and all that you are.",author:"Christian D. Larson"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Success is what comes after you stop making excuses.",author:"Luis Galarza"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Dream it. Wish it. Do it.",author:"Unknown"},{content:"Success doesn’t just find you. You have to go out and get it.",author:"Unknown"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Don’t stop when you’re tired. Stop when you’re done.",author:"Unknown"},{content:"Wake up with determination. Go to bed with satisfaction.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Unknown"},{content:"Little things make big days.",author:"Unknown"},{content:"It’s going to be hard, but hard does not mean impossible.",author:"Unknown"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",author:"Unknown"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"Dream bigger. Do bigger.",author:"Unknown"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Unknown"},{content:"What you get by achieving your goals is not as important as what you become by achieving your goals.",author:"Zig Ziglar"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"The future depends on what you do today.",author:"Mahatma Gandhi"},{content:"Hustle in silence. Let your success make the noise.",author:"Unknown"},{content:"If you want to achieve greatness stop asking for permission.",author:"Unknown"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"Hardships often prepare ordinary people for an extraordinary destiny.",author:"C.S. Lewis"},{content:"Fall seven times and stand up eight.",author:"Japanese Proverb"},{content:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",author:"Roy T. Bennett"},{content:"Doubt kills more dreams than failure ever will.",author:"Suzy Kassem"},{content:"The only way to achieve the impossible is to believe it is possible.",author:"Charles Kingsleigh"},{content:"Do what you can with all you have, wherever you are.",author:"Theodore Roosevelt"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Work hard in silence. Let success be your noise.",author:"Frank Ocean"},{content:"Success is not in what you have, but who you are.",author:"Bo Bennett"},{content:"The secret of getting ahead is getting started.",author:"Mark Twain"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"Push yourself, because no one else is going to do it for you.",author:"Unknown"},{content:"Failure is the condiment that gives success its flavor.",author:"Truman Capote"},{content:"Don’t quit. Suffer now and live the rest of your life as a champion.",author:"Muhammad Ali"},{content:"The harder you work for something, the greater you’ll feel when you achieve it.",author:"Unknown"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"Little by little, day by day, what is meant for you will find its way.",author:"Unknown"},{content:"You are capable of amazing things.",author:"Unknown"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"The way to get started is to quit talking and begin doing.",author:"Walt Disney"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"You don’t have to be great to start, but you have to start to be great.",author:"Zig Ziglar"},{content:"Opportunities don’t happen. You create them.",author:"Chris Grosser"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"Do what you love, love what you do.",author:"Unknown"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Motivation is what gets you started. Habit is what keeps you going.",author:"Jim Ryun"},{content:"Don’t let fear decide your future.",author:"Shalane Flanagan"},{content:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},{content:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},{content:"Do one thing every day that scares you.",author:"Eleanor Roosevelt"},{content:"The best way to predict the future is to invent it.",author:"Alan Kay"},{content:"Difficult roads often lead to beautiful destinations.",author:"Unknown"},{content:"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",author:"Chantal Sutherland"},{content:"If it doesn’t challenge you, it won’t change you.",author:"Fred DeVito"},{content:"It always seems impossible until it’s done.",author:"Nelson Mandela"},{content:"The expert in anything was once a beginner.",author:"Helen Hayes"},{content:"Don’t count the days, make the days count.",author:"Muhammad Ali"},{content:"The harder the battle, the sweeter the victory.",author:"Les Brown"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"You don’t have to see the whole staircase, just take the first step.",author:"Martin Luther King Jr."},{content:"Small daily improvements over time lead to stunning results.",author:"Robin Sharma"},{content:"Don’t let what you cannot do interfere with what you can do.",author:"John Wooden"},{content:"The only limit is the one you set yourself.",author:"Felix Baumgartner"},{content:"Great things are done by a series of small things brought together.",author:"Vincent Van Gogh"},{content:"Your dream doesn’t have an expiration date. Take a deep breath and try again.",author:"KT Witten"},{content:"Action is the foundational key to all success.",author:"Pablo Picasso"},{content:"You are braver than you believe, stronger than you seem, and smarter than you think.",author:"A.A. Milne"},{content:"Work until you no longer have to introduce yourself.",author:"Unknown"},{content:"The best revenge is massive success.",author:"Frank Sinatra"},{content:"Your only limit is your mind.",author:"Unknown"},{content:"Stop being afraid of what could go wrong and start being excited about what could go right.",author:"Unknown"},{content:"Do not wait to strike till the iron is hot; but make it hot by striking.",author:"William Butler Yeats"},{content:"Don’t let perfectionism get in the way of progress.",author:"Unknown"},{content:"Great minds discuss ideas; average minds discuss events; small minds discuss people.",author:"Eleanor Roosevelt"},{content:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{content:"Your passion is waiting for your courage to catch up.",author:"Isabelle Lafleche"},{content:"Do what you can, with what you have, where you are.",author:"Theodore Roosevelt"},{content:"Success is not about the destination, it’s about the journey.",author:"Zig Ziglar"},{content:"The key to success is to focus on goals, not obstacles.",author:"Unknown"},{content:"A year from now you may wish you had started today.",author:"Karen Lamb"},{content:"Don’t stop until you’re proud.",author:"Unknown"},{content:"Dream big. Start small. Act now.",author:"Robin Sharma"},{content:"Hard work beats talent when talent doesn’t work hard.",author:"Tim Notke"},{content:"Stay positive, work hard, make it happen.",author:"Unknown"},{content:"Your time is limited, don’t waste it living someone else’s life.",author:"Steve Jobs"},{content:"The difference between ordinary and extraordinary is that little extra.",author:"Jimmy Johnson"},{content:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},{content:"Don’t wait for opportunity. Create it.",author:"Unknown"},{content:"Success doesn’t come to you, you go to it.",author:"Marva Collins"},{content:"A river cuts through rock not because of its power, but because of its persistence.",author:"Jim Watkins"},{content:"Discipline is the bridge between goals and accomplishment.",author:"Jim Rohn"},{content:"Do what is right, not what is easy nor what is popular.",author:"Unknown"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Don’t limit yourself. Many people limit themselves to what they think they can do.",author:"Mary Kay Ash"},{content:"Your life does not get better by chance, it gets better by change.",author:"Jim Rohn"},{content:"Success is the progressive realization of a worthy goal or ideal.",author:"Earl Nightingale"},{content:"To succeed in life, you need two things: ignorance and confidence.",author:"Mark Twain"},{content:"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",author:"Mary Anne Radmacher"},{content:"Start each day with a positive thought and a grateful heart.",author:"Roy T. Bennett"},{content:"Don’t let small minds convince you that your dreams are too big.",author:"Unknown"},{content:"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",author:"Pelé"},{content:"The best way out is always through.",author:"Robert Frost"},{content:"Failure is simply the opportunity to begin again, this time more intelligently.",author:"Henry Ford"},{content:"Don’t wish it were easier. Wish you were better.",author:"Jim Rohn"},{content:"The mind is everything. What you think you become.",author:"Buddha"},{content:"When you feel like quitting, remember why you started.",author:"Unknown"},{content:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},{content:"Don’t be afraid to give up the good to go for the great.",author:"John D. Rockefeller"},{content:"Do not be embarrassed by your failures, learn from them and start again.",author:"Richard Branson"},{content:"Don’t wait for the perfect moment. Take the moment and make it perfect.",author:"Unknown"},{content:"Small deeds done are better than great deeds planned.",author:"Peter Marshall"},{content:"Act as if what you do makes a difference. It does.",author:"William James"},{content:"Success is not how high you have climbed, but how you make a positive difference to the world.",author:"Roy T. Bennett"},{content:"Your future is created by what you do today, not tomorrow.",author:"Robert Kiyosaki"},{content:"The secret of success is to do the common thing uncommonly well.",author:"John D. Rockefeller Jr."},{content:"What seems to us as bitter trials are often blessings in disguise.",author:"Oscar Wilde"},{content:"The only place where success comes before work is in the dictionary.",author:"Vidal Sassoon"},{content:"Happiness is not something ready-made. It comes from your own actions.",author:"Dalai Lama"},{content:"Opportunities multiply as they are seized.",author:"Sun Tzu"},{content:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{content:"Success is liking yourself, liking what you do, and liking how you do it.",author:"Maya Angelou"},{content:"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",author:"William James"},{content:"Don’t be afraid to start over. It’s a chance to build something better.",author:"Unknown"},{content:"Success isn’t always about greatness. It’s about consistency.",author:"Dwayne Johnson"},{content:"You are confined only by the walls you build yourself.",author:"Andrew Murphy"},{content:"The best time to plant a tree was 20 years ago. The second best time is now.",author:"Chinese Proverb"},{content:"Dreams don’t work unless you do.",author:"John C. Maxwell"},{content:"Don’t let the fear of losing be greater than the excitement of winning.",author:"Robert Kiyosaki"},{content:"You can’t cross the sea merely by standing and staring at the water.",author:"Rabindranath Tagore"},{content:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},{content:"Be so good they can’t ignore you.",author:"Steve Martin"},{content:"Your limitation—it’s only your imagination.",author:"Unknown"},{content:"The journey of a thousand miles begins with one step.",author:"Lao Tzu"},{content:"Don’t limit your challenges. Challenge your limits.",author:"Jerry Dunn"},{content:"Great things never come from comfort zones.",author:"Unknown"},{content:"It’s not whether you get knocked down, it’s whether you get up.",author:"Vince Lombardi"},{content:"Everything you can imagine is real.",author:"Pablo Picasso"},{content:"Success is not in never falling, but in rising every time we fall.",author:"Confucius"},{content:"Don’t wait for opportunity. Create it.",author:"George Bernard Shaw"},{content:"The best dreams happen when you’re awake.",author:"Cherie Gilderbloom"},{content:"Do something today that your future self will thank you for.",author:"Sean Patrick Flanery"},{content:"What you do today can improve all your tomorrows.",author:"Ralph Marston"}];function i0(){const t=Math.floor(Math.random()*rp.length);return rp[t]}const o0="/assets/my_therapist-BGpDoE1u.png",a0="/assets/my_journal-ByAOnFF2.png",c0="/assets/journal-BcWmOkN8.png",l0="/assets/my_courses-DAreBNF0.png",u0="/assets/therapist-sZYqYBaF.png",h0="/assets/mood_track-DScXBvTj.png",f0="/assets/courses-BeDDwdtO.png",d0="/assets/art-DRBE7P0P.png",p0={class:"home_container"},m0={class:"greeting_section licorice_regular font_size_m"},g0={class:"checkin_section"},_0={class:"feeling_section"},y0={class:"features_section"},v0={class:"feature_label inter font_size_xxs"},E0={class:"inspiration_section"},w0={class:"quote_text inter font_size_xxs"},T0={class:"offer_section"},I0={class:"offer_list"},b0={class:"offer_icon_wrapper"},A0={class:"offer_content_wrapper"},S0={class:"offer_title inter font_size_xxs"},R0={class:"offer_description inter font_size_xxs"},C0={__name:"home",setup(t){const e=An(),n=le({content:"",author:""});le(!1);const r=Be(()=>e.userData?.personalInfo.name||""),s=Be(()=>[{label:"My Therapist",url:o0},{label:"Journal Entry",url:a0},{label:"Explore Courses",url:l0}]),i=Be(()=>[{label:"Expert support at your fingertips",content:"Find and connect with qualified therapists specializing in various areas.",icon:u0},{label:"Personalized mood tracking",content:"Log your daily mood to visualize trends, identify triggers, and gain insights.",icon:h0},{label:"Journaling",content:"A private space for self-reflection, prompts, and gain thoughts.",icon:c0},{label:"Curated learning courses",content:"Access a library of free and premium courses on mindfulness, stress management, and CBT techniques.",icon:f0},{label:"Art Therapy",content:"If you're feeling stressed or sad, sometimes it's easier to express it through art than words.",icon:d0}]);rs(()=>{console.log("Home mounted"),n.value=i0()});const o=()=>{const c=new Date().getHours();return c<12?"morning":c<18?"afternoon":"evening"};return(c,l)=>(se(),ge("div",p0,[x("div",m0," Good "+Me(o())+", "+Me(r.value)+"! ",1),x("div",g0,[x("div",_0,[l[1]||(l[1]=x("div",{class:"feeling_heading inter font_size_xs"},[x("b",null,"How are you feeling today?")],-1)),l[2]||(l[2]=x("div",{class:"feeling_image"},null,-1)),x("div",{class:"checkin_button inter font_size_xxs",onClick:l[0]||(l[0]=u=>c.$emit("setPage","mood"))}," Check in now ")])]),x("div",y0,[(se(!0),ge(Le,null,Kt(s.value,u=>(se(),ge("div",{class:"feature_card",key:u.label},[x("div",{class:"feature_icon",style:xi({backgroundImage:`url(${u.url})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4),x("div",v0,[x("b",null,Me(u.label),1)])]))),128))]),x("div",E0,[l[3]||(l[3]=x("div",{class:"inspiration_heading inter font_size_xxs"},[x("b",null,"Inspiration")],-1)),x("div",w0,Me(n.value.content),1)]),x("div",T0,[l[4]||(l[4]=x("div",{class:"offer_heading inter font_size_xs"},[x("b",null,"What we offer")],-1)),x("div",I0,[(se(!0),ge(Le,null,Kt(i.value,u=>(se(),ge("div",{class:"offer_card",key:u.label},[x("div",b0,[x("div",{class:"feature_icon",style:xi({backgroundImage:`url(${u.icon})`,backgroundSize:"50% 80%",backgroundPosition:"center",backgroundRepeat:"no-repeat"})},null,4)]),x("div",A0,[x("div",S0,[x("b",null,Me(u.label),1)]),x("div",R0,Me(u.content),1)])]))),128))])])]))}},Z_=Sn(C0,[["__scopeId","data-v-d1238674"]]),P0={class:"loading_page_holder"},k0={__name:"loadingPage",setup(t){const e=An(),n=Ha();return rs(async()=>{e.userData?e.userData.uid?n.push({name:"Navigation"}):n.push({name:"Login"}):n.push({name:"Login"})}),(r,s)=>(se(),ge("div",P0))}},D0=Sn(k0,[["__scopeId","data-v-bc11f8f1"]]),N0={class:"modal_overlay",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},V0={class:"modal_holder"},O0={id:"modal-title",class:"modal_heading_holder inter font_size_xs"},x0={class:"modal_content_holder inter font_size_xs"},M0=["value"],L0=["value"],U0={__name:"profileEdit",props:{globalUser:{type:Object,required:!0}},emits:["close"],setup(t,{emit:e}){const n=An(),r=e,s=t,i=le([]),o=le("");rs(async()=>{const V=await(await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,flags")).json();i.value=V.sort((D,G)=>D.name.common.localeCompare(G.name.common))});const c=le(""),l=le(""),u=le(""),f=le(""),p=le(!1),m=le([{value:"male",text:"Male"},{value:"female",text:"Female"},{value:"other",text:"Other"}]),y=le("");function P(L){return/^\d{10}$/.test(L)}function k(L){if(!/^\d{4}\/\d{2}\/\d{2}$/.test(L))return!1;const[D,G,ee]=L.split("/").map(Number),T=new Date(D,G-1,ee);return T.getFullYear()===D&&T.getMonth()===G-1&&T.getDate()===ee}const N=async()=>{const V=Wu().currentUser;if(f.value="",p.value=!1,!P(l.value)){f.value="Contact Number must be a valid 10-digit number.",p.value=!0;return}if(!k(u.value)){f.value="Date of Birth must be in the format yyyy/mm/dd.",p.value=!0;return}const D=s.globalUser.userData,G={personalInfo:{name:c.value,contactNumber:l.value,dateOfBirth:u.value,email:D.email?D.email:V.email,gender:y.value,country:o.value},uid:D.uid?D.uid:V.uid,loginDate:D.loginDate,streak:{count:D.streak.count,lastUpdate:D.streak.lastUpdate},profileEdited:Bn()};n.setUserData(G),await Ar(Bt($t,"users",D.uid?D.uid:V.uid),G),r("close")},M=()=>{p.value=!1,f.value=""};return(L,V)=>(se(),ge("div",N0,[x("div",V0,[x("div",O0,[V[6]||(V[6]=x("span",{style:{width:"80%"}},"Edit User Information",-1)),x("button",{class:"modal_close_button",onClick:V[0]||(V[0]=D=>L.$emit("close"))},"×")]),x("div",x0,[V[10]||(V[10]=x("div",{class:"modal_content_description"}," We collect your name, date of birth, and contact number to create your profile, personalize your therapy experience, and stay in touch for updates or support. Your information is kept secure and private at all times. ",-1)),x("form",{class:"modal_form_holder",onSubmit:Xl(N,["prevent"])},[Et(x("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Name & Surname","onUpdate:modelValue":V[1]||(V[1]=D=>c.value=D),required:""},null,512),[[Wt,c.value]]),Et(x("input",{class:"modal_input inter font_size_xs",type:"tel",placeholder:"Contact Number","onUpdate:modelValue":V[2]||(V[2]=D=>l.value=D),required:""},null,512),[[Wt,l.value]]),Et(x("input",{class:"modal_input inter font_size_xs",type:"text",placeholder:"Date of Birth (yyyy/mm/dd)","onUpdate:modelValue":V[3]||(V[3]=D=>u.value=D),required:""},null,512),[[Wt,u.value]]),Et(x("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":V[4]||(V[4]=D=>y.value=D)},[V[7]||(V[7]=x("option",{disabled:"",value:""},"Please select one",-1)),(se(!0),ge(Le,null,Kt(m.value,D=>(se(),ge("option",{key:D.value,value:D.value},Me(D.text),9,M0))),128))],512),[[ji,y.value]]),Et(x("select",{class:"modal_input inter font_size_xs","onUpdate:modelValue":V[5]||(V[5]=D=>o.value=D),id:"country"},[V[8]||(V[8]=x("option",{disabled:"",value:""},"Select your country",-1)),(se(!0),ge(Le,null,Kt(i.value,D=>(se(),ge("option",{key:D.cca3,value:D.cca3},Me(D.name.common),9,L0))),128))],512),[[ji,o.value]]),V[9]||(V[9]=x("button",{type:"submit",class:"modal_button inter font_size_xs"}," Confirm ",-1))],32)])]),p.value?(se(),Ht(_o,{key:0,errorMessage:f.value,onClose:M},null,8,["errorMessage"])):zn("",!0)]))}},sp=Sn(U0,[["__scopeId","data-v-697cab32"]]),F0={class:"profile_container"},B0={class:"profile_header"},j0={class:"profile_edit_btn"},$0={class:"profile_info"},H0={class:"profile_user_details font_size_s inter"},q0={class:"font_size_xxs"},z0={class:"profile_stats"},W0={class:"profile_stat_top inter font_size_xs"},G0={key:0,class:"profile_stat_value"},K0={key:0},Q0={key:1},Y0={key:1,class:"profile_stat_value"},J0={class:"profile_stat_icon"},X0={class:"profile_stat_label inter font_size_xs"},Z0={__name:"profile",setup(t){const e=An(),n=le(!1);rs(()=>{const y=new Date().toISOString().split("T")[0];if(s.value=e.userData,!e.moodData||!e.moodData[y])return;n.value=!0;const P=e.moodData[y];for(const k of r.value)if(k.ref===P.mood){p.value[2].value=k.icon;break}});const r=Be(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]);le();const s=le(null),i=Be(()=>e.userData?.personalInfo.name||""),o=Be(()=>e.userData?.personalInfo.email||"");le("../../src/assets/user.png");const c=Be(()=>e.userData?.streak?.count||0),l=Be(()=>e.userData?.personalInfo.journalEntries?.length||0),u=Be(()=>e.userData?.personalInfo.courses?.length||0),f=le(!1),p=le([{label:"App Streak",value:c.value,icon:"fa fa-signal"},{label:"Journal Entries",value:l.value,icon:"fa fa-book"},{label:"Mood Trends",value:"",icon:"fas fa-chart-line"},{label:"Courses",value:u.value,icon:"fas fa-book-open"}]),m=()=>{f.value=!0};return(y,P)=>(se(),ge(Le,null,[x("div",F0,[x("div",B0,[P[2]||(P[2]=x("div",{class:"profile_title font_size_s inter"},null,-1)),x("div",j0,[x("i",{class:"fas fa-edit",onClick:P[0]||(P[0]=k=>m())})])]),x("div",$0,[P[3]||(P[3]=x("div",{class:"profile_avatar_wrapper"},[x("i",{class:"fas fa-user-circle",style:{"font-size":"5rem",color:"#87bfba"}})],-1)),x("div",H0,[mn(Me(i.value)+" ",1),x("span",q0,Me(o.value),1)])]),x("div",z0,[(se(!0),ge(Le,null,Kt(p.value,(k,N)=>(se(),ge("div",{class:"profile_stat_card",key:N},[x("div",W0,[k.label=="Mood Trends"?(se(),ge("div",G0,[n.value?(se(),ge("div",K0,[x("i",{class:$n(k.value),style:{"font-size":"1.5rem"}},null,2),P[4]||(P[4]=mn("  ",-1))])):(se(),ge("div",Q0,[...P[5]||(P[5]=[x("i",{class:"far fa-meh",style:{"font-size":"1.5rem"}},null,-1),mn("  ",-1)])]))])):(se(),ge("div",Y0,Me(k.value),1)),x("div",J0,[x("i",{class:$n(k.icon),style:{color:"#87bfba"}},null,2)])]),x("div",X0,Me(k.label),1)]))),128))])]),f.value?(se(),Ht(sp,{key:0,onClose:P[1]||(P[1]=k=>f.value=!1),globalUser:Un(e),viewPoint:sp},null,8,["globalUser"])):zn("",!0)],64))}},ey=Sn(Z0,[["__scopeId","data-v-e6e0b8d3"]]),ek={class:"journal_selection_holder inter font_size_xs"},tk=["onClick"],nk={key:0,class:"journal_entry_holder"},rk={class:"journal_entry_date_holder inter font_size_xs"},sk={style:{width:"90%"}},ik={class:"journal_entry_content_holder"},ok={key:1},ak={key:0,class:"journal_list_holder"},ck={class:"inter font_size_sm",style:{"font-weight":"bold","margin-bottom":"0.5rem"}},lk={class:"inter font_size_xs",style:{"margin-bottom":"0.5rem"}},uk={class:"inter font_size_xxs",style:{color:"#808080"}},hk={__name:"journal",emits:["close"],setup(t,{emit:e}){const n=e,r=An(),s=le("journalEntry"),i=[{key:"journalEntry",label:"New Journal Entry",cornerClass:"right-rounded"},{key:"journalList",label:"Journal List",cornerClass:"left-rounded"}],o=le(new Date().toDateString()),c=le(new Date().toLocaleTimeString()),l=k=>{s.value=k,o.value=new Date().toDateString(),c.value=new Date().toLocaleTimeString()},u=()=>{m.value=!1,y.value=""},f=le(""),p=le(""),m=le(!1),y=le(""),P=async()=>{if(!f.value){m.value=!0,y.value="Please give a journal title.";return}if(!p.value){m.value=!0,y.value="Please give journal content.";return}const N={[Date.now()]:{journalEntryHeading:f.value,journalEntryContent:p.value,journalEntryLogged:Bn()}};try{await Ar(Bt($t,"journals",r.userData.uid),N,{merge:!0}),m.value=!0,y.value="Your journal entry has been logged.",f.value="",p.value="",o.value=new Date().toDateString(),c.value=new Date().toLocaleTimeString(),n("close")}catch(M){console.error("Failed to save journal:",M),m.value=!0,y.value="Failed to save journal. Please try again."}};return(k,N)=>(se(),ge(Le,null,[N[5]||(N[5]=x("div",{class:"journal_header_holder inter font_size_xs"}," My Journal ",-1)),x("div",ek,[(se(),ge(Le,null,Kt(i,M=>x("div",{key:M.key,class:$n(["journal_selection",{active:s.value===M.key,[M.cornerClass]:!0}]),onClick:L=>l(M.key)},Me(M.label),11,tk)),64))]),s.value=="journalEntry"?(se(),ge("div",nk,[x("div",rk,[x("div",sk,[mn(Me(o.value)+" ",1),N[3]||(N[3]=x("br",null,null,-1)),mn(" "+Me(c.value),1)])]),x("div",ik,[Et(x("input",{placeholder:"Give us a title.",style:{width:"90%",height:"5%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":N[0]||(N[0]=M=>f.value=M)},null,512),[[Wt,f.value]]),Et(x("textarea",{placeholder:"What's weighing on your mind today? Or what's a small win?",style:{width:"90%",height:"80%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":N[1]||(N[1]=M=>p.value=M)},null,512),[[Wt,p.value]])]),N[4]||(N[4]=x("br",null,null,-1)),x("div",{class:"save_button inter font_size_xxs",onClick:N[2]||(N[2]=M=>P())},"Save"),m.value?(se(),Ht(_o,{key:0,errorMessage:y.value,onClose:u},null,8,["errorMessage"])):zn("",!0)])):(se(),ge("div",ok,[Un(r).journalData?(se(),ge("div",ak,[(se(!0),ge(Le,null,Kt(Un(r).journalData,(M,L)=>(se(),ge("div",{key:L,style:{width:"90%","box-shadow":"0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4)","margin-bottom":"1rem","border-radius":"1rem",padding:"0.5rem"}},[x("div",ck,Me(M.journalEntryHeading),1),x("div",lk,Me(M.journalEntryContent),1),x("div",uk,"Logged on: "+Me(new Date(M.journalEntryLogged.seconds*1e3).toLocaleString()),1)]))),128))])):zn("",!0)]))],64))}},ty=Sn(hk,[["__scopeId","data-v-b89d33a8"]]),fk={class:"mood_tracker_holder"},dk={class:"mood_icons_holder"},pk={class:"mood_icon_holder"},mk=["onClick"],gk=["onClick"],_k={class:"influence_holder",style:{height:"25rem"}},yk={class:"influence_items_holder"},vk=["value"],Ek={class:"influence_holder"},wk={__name:"mood",emits:["close"],setup(t,{emit:e}){const n=An(),r=e,s=Be(()=>[{label:"Very Sad",ref:"very_sad",icon:"far fa-sad-tear"},{label:"Sad",ref:"sad",icon:"far fa-frown"},{label:"Neutral",ref:"neutral",icon:"far fa-meh"},{label:"Happy",ref:"happy",icon:"far fa-grin"},{label:"Very Happy",ref:"very_happy",icon:"far fa-grin-beam"}]),i=Be(()=>[{label:"Sleep Quality",ref:"sleep_quality"},{label:"Nutrition",ref:"nutrition"},{label:"Physical Activity",ref:"physical_activity"},{label:"Social Connection",ref:"social_connection"},{label:"Mindset",ref:"mindset"},{label:"Environment",ref:"environment"},{label:"None",ref:"none"}]),o=le(!1),c=le(""),l=le([]),u=le(""),f=le("neutral"),p=P=>{f.value=P},m=async()=>{if(l.value.length==0){o.value=!0,c.value="Please select an influence.";return}const k={[new Date().toISOString().split("T")[0]]:{mood:f.value,influences:l.value,optional_notes:u.value,mood_logged:Bn()}};await Ar(Bt($t,"mood",n.userData.uid),k,{merge:!0}),o.value=!0,c.value="Thank you for logging your mood. It will be taken into consideration.",n.setMoodData(k),r("close")},y=()=>{o.value=!1,c.value=""};return(P,k)=>(se(),ge(Le,null,[x("div",fk,[k[6]||(k[6]=x("div",{class:"mood_heading_holder inter font_size_xs"},"How am I feeling today?",-1)),x("div",dk,[(se(!0),ge(Le,null,Kt(s.value,N=>(se(),ge("div",pk,[f.value==N.ref?(se(),ge("div",{key:0,class:$n(N.icon),style:{"font-size":"3rem",border:"0.2rem solid #87bfba",padding:"0.5rem","border-radius":"50%"},onClick:M=>p(N.ref)},null,10,mk)):(se(),ge("div",{key:1,class:$n(N.icon),style:{"font-size":"3rem"},onClick:M=>p(N.ref)},null,10,gk))]))),256))]),x("div",_k,[k[4]||(k[4]=x("div",{class:"influence_heading_holder inter font_size_xs"},[x("b",null,"What might be influencing this?")],-1)),x("div",yk,[(se(!0),ge(Le,null,Kt(i.value,N=>(se(),ge("div",{class:"influence_item_holder inter font_size_xxs",key:N.ref,style:{height:"12%"}},[k[3]||(k[3]=mn("  ",-1)),Et(x("input",{type:"checkbox","onUpdate:modelValue":k[0]||(k[0]=M=>l.value=M),value:N.ref},null,8,vk),[[pm,l.value]]),mn(" "+Me(N.label),1)]))),128))])]),x("div",Ek,[k[5]||(k[5]=x("div",{class:"influence_heading_holder inter font_size_xs"},[x("b",null,"Optional Notes")],-1)),Et(x("textarea",{placeholder:"Write a few words about why you feel the way you feel",style:{width:"90%",height:"60%",padding:"0.5rem",border:"0.1rem solid #87bfba","border-radius":"1rem"},class:"inter font_size_xs","onUpdate:modelValue":k[1]||(k[1]=N=>u.value=N)},null,512),[[Wt,u.value]])]),x("div",{class:"save_button inter font_size_xxs",onClick:k[2]||(k[2]=N=>m())},"Save")]),o.value?(se(),Ht(_o,{key:0,errorMessage:c.value,onClose:y},null,8,["errorMessage"])):zn("",!0)],64))}},Tk=Sn(wk,[["__scopeId","data-v-5fdabdf1"]]),Ik={class:"navigation_bar_holder"},bk=["onClick"],Ak=["innerHTML"],Sk={__name:"navigation",setup(t){const e={home:{name:"Home",icon:'<i class="fa fa-home"></i>'},therapists:{name:"Therapists",icon:'<i class="fa fa-address-book"></i>'},journal:{name:"Journal",icon:'<i class="fa fa-book"></i>'},content:{name:"Content",icon:'<i class="fa fa-folder-open"></i>'},profile:{name:"Profile",icon:'<i class="fa fa-id-card"></i>'}},n=An();Is(()=>n.userData,i=>{}),Ha();const r=le("home"),s=i=>{r.value=i};return rs(async()=>{}),(i,o)=>(se(),ge(Le,null,[r.value==="profile"?(se(),Ht(ey,{key:0})):r.value==="home"?(se(),Ht(Z_,{key:1,onSetPage:s})):r.value==="mood"?(se(),Ht(Tk,{key:2})):r.value==="journal"?(se(),Ht(ty,{key:3})):zn("",!0),x("div",Ik,[(se(),ge(Le,null,Kt(e,(c,l)=>x("div",{class:"navigation_item_holder inter font_size_xxs",key:l},[x("div",{class:$n(["navigation_item",{active:r.value===l}]),onClick:u=>s(l)},[x("div",{innerHTML:c.icon},null,8,Ak),x("div",null,Me(c.name),1)],10,bk)])),64))])],64))}},Rk=Sn(Sk,[["__scopeId","data-v-c604fc6b"]]),Ck=[{path:"/",name:"Loading",component:D0},{path:"/login",name:"Login",component:s0},{path:"/navigation",name:"Navigation",component:Rk},{path:"/home/",name:"Home",component:Z_,props:!0},{path:"/profile/",name:"Profile",component:ey,props:!0},{path:"/journal/",name:"JournalEntry",component:ty,props:!0}],ny=pT({history:Ww(),routes:Ck});ny.beforeEach(async(t,e,n)=>{const r=An();if(r.userData||await r.fetchUserData(),!r.userData?.uid&&t.name!=="Login")return n({name:"Login"});n()});let ip=null;Ln.onAuthStateChanged(()=>{if(!ip){const t=JE(cw);t.use(ew()),t.use(ny),t.mount("#app"),ip=t}});
