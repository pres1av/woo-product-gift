var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{o(n.next(e))}catch(r){i(r)}}function l(e){try{o(n["throw"](e))}catch(r){i(r)}}function o(e){e.done?t(e.value):a(e.value).then(s,l)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(r){return o([e,r])}}function o(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(l){s=[6,l];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,l=i.length;s<l;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="woo-product-gift";var a=0;var i=false;var s;var l;var o=false;var f=window;var u=document;var c={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var $=function(){return!!u.documentElement.attachShadow}();var v=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var h=new WeakMap;var d=function(e){return h.get(e)};var m=e("r",(function(e,r){return h.set(r.$lazyInstance$=e,r)}));var p=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return h.set(e,r)};var g=function(e,r){return r in e};var y=function(e){return console.error(e)};var w=new Map;var b=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=w.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{w.set(i,e)}return e[a]}),y)};var _=new Map;var S=[];var R=[];var x=[];var j=function(e,r){return function(t){e.push(t);if(!i){i=true;if(r&&c.$flags$&4){L(C)}else{c.raf(C)}}}};var N=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){y(t)}}e.length=0};var E=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){y(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var C=function(){a++;N(S);var e=(c.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;E(R,e);E(x,e);if(R.length>0){x.push.apply(x,R);R.length=0}if(i=S.length+R.length+x.length>0){c.raf(C)}else{a=0}};var L=function(e){return Promise.resolve().then(e)};var U=j(R,true);var A={};var O=function(e){return e!=null};var P=function(e){e=typeof e;return e==="object"||e==="function"};var k=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var M=function(e,r){if(r===void 0){r=""}{return function(){return}}};var B=function(e,r){{return function(){return}}};var I=e("a",(function(){if(!(f.CSS&&f.CSS.supports&&f.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){c.$cssShim$=f.__stencil_cssshim;if(c.$cssShim$){return c.$cssShim$.initShim()}}))}return Promise.resolve()}));var T=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,a,i,s;return __generator(this,(function(l){switch(l.label){case 0:{c.$cssShim$=f.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(u.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,f.location.href));z(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:l.sent();l.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var z=function(e){var r=k(n);try{f[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var t=new Map;f[r]=function(n){var a=new URL(n,e).href;var i=t.get(a);if(!i){var s=u.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(f[r].m);s.remove()}}));t.set(a,i);u.head.appendChild(s)}return i}}};var H=function(e,r){if(e!=null&&!P(e)){return e}return e};var q="hydrated";var V=new WeakMap;var F=function(e,r,t){var n=_.get(e);if(v&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}_.set(e,n)};var W=function(e,r,t,n){var a=G(r.$tagName$);var i=_.get(a);e=e.nodeType===11?e:u;if(i){if(typeof i==="string"){e=e.head||e;var s=V.get(e);var l=void 0;if(!s){V.set(e,s=new Set)}if(!s.has(a)){{if(c.$cssShim$){l=c.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var o=l["s-sc"];if(o){a=o;s=null}}else{l=u.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var D=function(e,r,t){var n=M("attachStyles",r.$tagName$);var a=W($&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,t,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var G=function(e,r){return"sc-"+e};var Q=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=false;var s=false;var l=[];var o=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){o(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!P(a)){a=String(a)}if(i&&s){l[l.length-1].$text$+=a}else{l.push(i?J(null,a):a)}s=i}}};o(t);if(r){{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var u=J(e,null);u.$attrs$=r;if(l.length>0){u.$children$=l}return u}));var J=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}return t};var K={};var X=function(e){return e&&e.$tag$===K};var Y=function(e,r,t,n,a,i){if(t===n){return}var s=g(e,r);var l=r.toLowerCase();if(r==="class"){var o=e.classList;var u=ee(t);var $=ee(n);o.remove.apply(o,u.filter((function(e){return e&&!$.includes(e)})));o.add.apply(o,$.filter((function(e){return e&&!u.includes(e)})))}else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(g(f,l)){r=l.slice(2)}else{r=l[2]+r.slice(3)}if(t){c.rel(e,r,t,false)}if(n){c.ael(e,r,n,false)}}else{var v=P(n);if((s||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var h=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=h){e[r]=h}}else{e[r]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!v){n=n===true?"":n;{e.setAttribute(r,n)}}}};var Z=/\s/;var ee=function(e){return!e?[]:e.split(Z)};var re=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||A;var s=r.$attrs$||A;{for(n in i){if(!(n in s)){Y(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){Y(a,n,i[n],s[n],t,r.$flags$)}};var te=function(e,r,t,n){var a=r.$children$[t];var i=0;var l;var f;if(a.$text$!==null){l=a.$elm$=u.createTextNode(a.$text$)}else{l=a.$elm$=u.createElement(a.$tag$);{re(null,a,o)}if(O(s)&&l["s-si"]!==s){l.classList.add(l["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){f=te(e,a,i);if(f){l.appendChild(f)}}}}return l};var ne=function(e,r,t,n,a,i){var s=e;var o;if(s.shadowRoot&&s.tagName===l){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=te(null,t,a);if(o){n[a].$elm$=o;s.insertBefore(o,r)}}}};var ae=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;oe(n);a.remove()}}};var ie=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var l=r[0];var o=r[s];var f=n.length-1;var u=n[0];var c=n[f];var $;while(a<=s&&i<=f){if(l==null){l=r[++a]}else if(o==null){o=r[--s]}else if(u==null){u=n[++i]}else if(c==null){c=n[--f]}else if(se(l,u)){le(l,u);l=r[++a];u=n[++i]}else if(se(o,c)){le(o,c);o=r[--s];c=n[--f]}else if(se(l,c)){le(l,c);e.insertBefore(l.$elm$,o.$elm$.nextSibling);l=r[++a];c=n[--f]}else if(se(o,u)){le(o,u);e.insertBefore(o.$elm$,l.$elm$);o=r[--s];u=n[++i]}else{{$=te(r&&r[i],t,i);u=n[++i]}if($){{l.$elm$.parentNode.insertBefore($,l.$elm$)}}}}if(a>s){ne(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){ae(r,a,s)}};var se=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var le=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;if(r.$text$===null){{{re(e,r,o)}}if(n!==null&&a!==null){ie(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}ne(t,null,r,a,0,a.length-1)}else if(n!==null){ae(n,0,n.length-1)}}else if(e.$text$!==r.$text$){t.data=r.$text$}};var oe=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(oe)}};var fe=function(e,r,t,n){l=e.tagName;var a=r.$vnode$||J(null,null);var i=X(n)?n:Q(null,null,n);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}le(a,i)};var ue=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ce=function(e,r,t,n){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=M("scheduleUpdate",t.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var l=function(){return $e(e,r,t,s,n)};ue(r,i);var o;a();return pe(o,(function(){return U(l)}))};var $e=function(e,r,t,n,a){var i=M("update",t.$tagName$);var s=e["s-rc"];if(a){D(e,t,r.$modeName$)}var l=M("render",t.$tagName$);{{try{fe(e,r,t,n.render())}catch(u){y(u)}}}if(c.$cssShim$){c.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}l();i();{var o=e["s-p"];var f=function(){return ve(e,r,t)};if(o.length===0){f()}else{Promise.all(o).then(f);r.$flags$|=4;o.length=0}}};var ve=function(e,r,t){var n=M("postUpdate",t.$tagName$);var a=r.$lazyInstance$;var i=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(q)}{me(a,"componentDidLoad")}n();{r.$onReadyResolve$(e);if(!i){de()}}}else{n()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){L((function(){return ce(e,r,t,false)}))}r.$flags$&=~(4|512)}};var he=function(e,r){{var t=d(e);if((t.$flags$&(2|16))===2){ce(e,t,r,false)}}};var de=function(e){{u.documentElement.classList.add(q)}{c.$flags$|=2}};var me=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){y(n)}}return undefined};var pe=function(e,r){return e&&e.then?e.then(r):r()};var ge=function(e,r){return d(e).$instanceValues$.get(r)};var ye=function(e,r,t,n){var a=d(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var l=a.$flags$;var o=a.$lazyInstance$;t=H(t);if(t!==s&&(!(l&8)||s===undefined)){a.$instanceValues$.set(r,t);if(o){if((l&(2|16))===2){ce(i,a,n,false)}}}};var we=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return ge(this,n)},set:function(e){ye(this,n,e,r)},configurable:true,enumerable:true})}}))}return e};var be=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var t,i,l,o,f,u,c;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=b(a);if(!s.then)return[3,2];t=B();return[4,s];case 1:s=$.sent();t();$.label=2;case 2:if(!s.isProxied){we(s,a,2);s.isProxied=true}i=M("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){y(v)}{n.$flags$&=~8}i();l=G(a.$tagName$);if(!(!_.has(l)&&s.style))return[3,5];o=M("registerStyles",a.$tagName$);f=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(f,l,false)}))];case 3:f=$.sent();$.label=4;case 4:F(l,f,!!(a.$flags$&1));o();$.label=5;case 5:u=n.$ancestorComponent$;c=function(){return ce(e,n,a,true)};if(u&&u["s-rc"]){u["s-rc"].push(c)}else{c()}return[2]}}))}))};var _e=function(e,r){if((c.$flags$&1)===0){var t=M("connectedCallback",r.$tagName$);var n=d(e);if(!(n.$flags$&1)){n.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ue(n,n.$ancestorComponent$=a);break}}}{L((function(){return be(e,n,r)}))}}t()}};var Se=function(e){if((c.$flags$&1)===0){var r=d(e);if(c.$cssShim$){c.$cssShim$.removeHost(e)}}};var Re=e("b",(function(e,r){if(r===void 0){r={}}var t=M();var n=[];var a=r.exclude||[];var i=u.head;var s=f.customElements;var l=i.querySelector("meta[charset]");var o=u.createElement("style");var v=[];var h;var m=true;Object.assign(c,r);c.$resourcesUrl$=new URL(r.resourcesUrl||"./",u.baseURI).href;if(r.syncQueue){c.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}if(!$&&t.$flags$&1){t.$flags$|=8}var i=t.$tagName$;var l=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;p(r);if(t.$flags$&1){if($){r.attachShadow({mode:"open"})}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(m){v.push(this)}else{c.jmp((function(){return _e(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return Se(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){he(this,t)};r.prototype.componentOnReady=function(){return d(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,we(l,t,1))}}))}));o.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";o.setAttribute("data-styles","");i.insertBefore(o,l?l.nextSibling:i.firstChild);m=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{c.jmp((function(){return h=setTimeout(de,30,"timeout")}))}t()}))}}}));