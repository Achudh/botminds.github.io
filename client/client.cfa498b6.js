import{n as e,s as t,S as s,i as r,e as n,t as a,a as o,c as l,b as c,d as i,f as u,g as f,h,j as p,k as m,l as d,m as g,o as v,p as $,q as y,r as b,u as w,v as x,w as E,x as S,y as R,z as L,A as N,B as k,C as q,D as U,E as P,F as A,G as O}from"./index.573a671e.js";const _=[];function C(s,r=e){let n;const a=[];function o(e){if(t(s,e)&&(s=e,n)){const e=!_.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),_.push(t,s)}if(e){for(let e=0;e<_.length;e+=2)_[e][0](_[e+1]);_.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(t,l=e){const c=[t,l];return a.push(c),1===a.length&&(n=r(o)||e),t(s),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const I={},j=()=>({});function V(e,t,s){const r=Object.create(e);return r.name=t[s][0],r.link=t[s][1],r}function B(e){var t,s,r,g,v=e.name+"";return{c(){t=n("li"),s=n("a"),r=a(v),g=o(),this.h()},l(e){t=l(e,"LI",{},!1);var n=c(t);s=l(n,"A",{class:!0,href:!0},!1);var a=c(s);r=i(a,v),a.forEach(u),g=f(n),n.forEach(u),this.h()},h(){h(s,"class","px-4 hover:text-blue-800 svelte-1qzgpio"),h(s,"href","#"+(e.link||e.name)),p(s,"selected","."==e.link&&void 0===e.segment||e.segment===(e.link||e.name))},m(e,n){m(e,t,n),d(t,s),d(s,r),d(t,g)},p(e,t){(e.nav||e.segment)&&p(s,"selected","."==t.link&&void 0===t.segment||t.segment===(t.link||t.name))},d(e){e&&u(t)}}}function D(t){var s,r,$,y,b,w,x,E,S,R,L,N,k,q;let U=t.nav,P=[];for(let e=0;e<U.length;e+=1)P[e]=B(V(t,U,e));return{c(){s=n("nav"),r=n("div"),$=n("a"),y=n("img"),b=o(),w=n("div"),x=n("button"),E=g("svg"),S=g("title"),R=a("Menu"),L=g("path"),N=o(),k=n("div"),q=n("ul");for(let e=0;e<P.length;e+=1)P[e].c();this.h()},l(e){s=l(e,"NAV",{class:!0},!1);var t=c(s);r=l(t,"DIV",{class:!0},!1);var n=c(r);$=l(n,"A",{class:!0,href:!0},!1);var a=c($);y=l(a,"IMG",{class:!0,src:!0,alt:!0},!1),c(y).forEach(u),a.forEach(u),b=f(n),w=l(n,"DIV",{class:!0},!1);var o=c(w);x=l(o,"BUTTON",{class:!0},!1);var h=c(x);E=l(h,"svg",{class:!0,viewBox:!0,xmlns:!0},!0);var p=c(E);S=l(p,"title",{},!0);var m=c(S);R=i(m,"Menu"),m.forEach(u),L=l(p,"path",{d:!0},!0),c(L).forEach(u),p.forEach(u),h.forEach(u),o.forEach(u),N=f(n),k=l(n,"DIV",{class:!0},!1);var d=c(k);q=l(d,"UL",{class:!0},!1);var g=c(q);for(let e=0;e<P.length;e+=1)P[e].l(g);g.forEach(u),d.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){h(y,"class","logo"),h(y,"src","images/botmindsai.svg"),h(y,"alt","Logo"),h($,"class","font-bold text-2xl lg:text-4xl svelte-1qzgpio"),h($,"href","/"),h(L,"d","M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"),h(E,"class","fill-current h-3 w-3"),h(E,"viewBox","0 0 20 20"),h(E,"xmlns","http://www.w3.org/2000/svg"),h(x,"class","flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600\n        hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"),h(w,"class","block lg:hidden"),h(q,"class","inline-flex"),h(k,"class","hidden lg:block sm:hidden svelte-1qzgpio"),h(r,"class","container mx-auto flex justify-between items-center"),h(s,"class","svelte-1qzgpio"),p(s,"active",t.isNav)},m(e,t){m(e,s,t),d(s,r),d(r,$),d($,y),d(r,b),d(r,w),d(w,x),d(x,E),d(E,S),d(S,R),d(E,L),d(r,N),d(r,k),d(k,q);for(let e=0;e<P.length;e+=1)P[e].m(q,null)},p(e,t){if(e.nav||e.segment){let s;for(U=t.nav,s=0;s<U.length;s+=1){const r=V(t,U,s);P[s]?P[s].p(e,r):(P[s]=B(r),P[s].c(),P[s].m(q,null))}for(;s<P.length;s+=1)P[s].d(1);P.length=U.length}e.isNav&&p(s,"active",t.isNav)},i:e,o:e,d(e){e&&u(s),v(P,e)}}}function T(e,t,s){let{segment:r}=t,n=!0;let a=!1;$(()=>{a=!a,document.body.classList[a?"remove":"add"]("black-theme"),window.addEventListener("scroll",o)});const o=()=>{const e=window.scrollTop||window.pageYOffset;console.log("TCL: onScroll -> scrollTop",e),s("isNav",n=e>5)};return e.$set=e=>{"segment"in e&&s("segment",r=e.segment)},{segment:r,isNav:n,nav:[["home","home"],["solution"],["why Botminds","whyBotminds"],["industries","industries"],["team"],["customers"],["contact Us","contactUs"]]}}class z extends s{constructor(e){super(),r(this,e,T,D,t,["segment"])}}function H(t){var s,r,o,f,p,g=(new Date).getFullYear()+"";return{c(){s=n("footer"),r=n("div"),o=a("© "),f=a(g),p=a(" botminds."),this.h()},l(e){s=l(e,"FOOTER",{class:!0},!1);var t=c(s);r=l(t,"DIV",{},!1);var n=c(r);o=i(n,"© "),f=i(n,g),p=i(n," botminds."),n.forEach(u),t.forEach(u),this.h()},h(){h(s,"class","container m-auto p-6")},m(e,t){m(e,s,t),d(s,r),d(r,o),d(r,f),d(r,p)},p:e,i:e,o:e,d(e){e&&u(s)}}}class M extends s{constructor(e){super(),r(this,e,null,H,t,[])}}function J(e){var t,s,r,a,i=new z({props:{segment:e.segment}});const p=e.$$slots.default,d=y(p,e,null);var g=new M({});return{c(){i.$$.fragment.c(),t=o(),s=n("main"),d&&d.c(),r=o(),g.$$.fragment.c(),this.h()},l(e){i.$$.fragment.l(e),t=f(e),s=l(e,"MAIN",{class:!0},!1);var n=c(s);d&&d.l(n),n.forEach(u),r=f(e),g.$$.fragment.l(e),this.h()},h(){h(s,"class","antialiased svelte-1ec8bv")},m(e,n){b(i,e,n),m(e,t,n),m(e,s,n),d&&d.m(s,null),m(e,r,n),b(g,e,n),a=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),i.$set(s),d&&d.p&&e.$$scope&&d.p(w(p,t,e,null),x(p,t,null))},i(e){a||(E(i.$$.fragment,e),E(d,e),E(g.$$.fragment,e),a=!0)},o(e){S(i.$$.fragment,e),S(d,e),S(g.$$.fragment,e),a=!1},d(e){R(i,e),e&&(u(t),u(s)),d&&d.d(e),e&&u(r),R(g,e)}}}function F(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",a=e.$$scope)},{segment:r,$$slots:n,$$scope:a}}class G extends s{constructor(e){super(),r(this,e,F,J,t,["segment"])}}function K(e){var t,s,r=e.error.stack+"";return{c(){t=n("pre"),s=a(r)},l(e){t=l(e,"PRE",{},!1);var n=c(t);s=i(n,r),n.forEach(u)},m(e,r){m(e,t,r),d(t,s)},p(e,t){e.error&&r!==(r=t.error.stack+"")&&L(s,r)},d(e){e&&u(t)}}}function Y(t){var s,r,p,g,v,$,y,b,w,x=t.error.message+"";document.title=s=t.status;var E=t.dev&&t.error.stack&&K(t);return{c(){r=o(),p=n("h1"),g=a(t.status),v=o(),$=n("p"),y=a(x),b=o(),E&&E.c(),w=N(),this.h()},l(e){r=f(e),p=l(e,"H1",{class:!0},!1);var s=c(p);g=i(s,t.status),s.forEach(u),v=f(e),$=l(e,"P",{class:!0},!1);var n=c($);y=i(n,x),n.forEach(u),b=f(e),E&&E.l(e),w=N(),this.h()},h(){h(p,"class","svelte-8od9u6"),h($,"class","svelte-8od9u6")},m(e,t){m(e,r,t),m(e,p,t),d(p,g),m(e,v,t),m(e,$,t),d($,y),m(e,b,t),E&&E.m(e,t),m(e,w,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&L(g,t.status),e.error&&x!==(x=t.error.message+"")&&L(y,x),t.dev&&t.error.stack?E?E.p(e,t):((E=K(t)).c(),E.m(w.parentNode,w)):E&&(E.d(1),E=null)},i:e,o:e,d(e){e&&(u(r),u(p),u(v),u($),u(b)),E&&E.d(e),e&&u(w)}}}function W(e,t,s){let{status:r,error:n}=t;return e.$set=e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)},{status:r,error:n,dev:!1}}class X extends s{constructor(e){super(),r(this,e,W,Y,t,["status","error"])}}function Q(e){var t,s,r=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var s=0;s<r.length;s+=1)t=k(t,r[s]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=N()},l(e){o&&o.$$.fragment.l(e),t=N()},m(e,r){o&&b(o,e,r),m(e,t,r),s=!0},p(e,s){var l=e.level1?q(r,[U(s.level1.props)]):{};if(n!==(n=s.level1.component)){if(o){A();const e=o;S(e.$$.fragment,1,0,()=>{R(e,1)}),O()}n?((o=new n(a())).$$.fragment.c(),E(o.$$.fragment,1),b(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){s||(o&&E(o.$$.fragment,e),s=!0)},o(e){o&&S(o.$$.fragment,e),s=!1},d(e){e&&u(t),o&&R(o,e)}}}function Z(e){var t,s=new X({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){b(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||(E(s.$$.fragment,e),t=!0)},o(e){S(s.$$.fragment,e),t=!1},d(e){R(s,e)}}}function ee(e){var t,s,r,n,a=[Z,Q],o=[];function l(e,t){return t.error?0:1}return t=l(0,e),s=o[t]=a[t](e),{c(){s.c(),r=N()},l(e){s.l(e),r=N()},m(e,s){o[t].m(e,s),m(e,r,s),n=!0},p(e,n){var c=t;(t=l(0,n))===c?o[t].p(e,n):(A(),S(o[c],1,1,()=>{o[c]=null}),O(),(s=o[t])||(s=o[t]=a[t](n)).c(),E(s,1),s.m(r.parentNode,r))},i(e){n||(E(s),n=!0)},o(e){S(s),n=!1},d(e){o[t].d(e),e&&u(r)}}}function te(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[ee]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=k(r,s[n]);var a=new G({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){b(a,e,s),t=!0},p(e,t){var r=e.segments||e.level0?q(s,[e.segments&&{segment:t.segments[0]},e.level0&&U(t.level0.props)]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||(E(a.$$.fragment,e),t=!0)},o(e){S(a.$$.fragment,e),t=!1},d(e){R(a,e)}}}function se(e,t,s){let{stores:r,error:n,status:a,segments:o,level0:l,level1:c=null}=t;return P(I,r),e.$set=e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)},{stores:r,error:n,status:a,segments:o,level0:l,level1:c}}class re extends s{constructor(e){super(),r(this,e,se,te,t,["stores","error","status","segments","level0","level1"])}}const ne=[],ae=[{js:()=>import("./index.6e89d1a8.js"),css:["index.6e89d1a8.css"]}],oe=[{pattern:/^\/$/,parts:[{i:0}]}];const le="undefined"!=typeof __SAPPER__&&__SAPPER__;let ce,ie,ue,fe=!1,he=[],pe="{}";const me={page:C({}),preloading:C(null),session:C(le&&le.session)};let de,ge;me.session.subscribe(async e=>{if(de=e,!fe)return;ge=!0;const t=Se(new URL(location.href)),s=ie={},{redirect:r,props:n,branch:a}=await ke(t);s===ie&&await Ne(r,a,n,t.page)});let ve,$e=null;let ye,be=1;const we="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},xe={};function Ee(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function Se(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(le.baseUrl))return null;let t=e.pathname.slice(le.baseUrl.length);if(""===t&&(t="/"),!ne.some(e=>e.test(t)))for(let s=0;s<oe.length;s+=1){const r=oe[s],n=r.pattern.exec(t);if(n){const s=Ee(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},l={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:l}}}}function Re(){return{x:pageXOffset,y:pageYOffset}}async function Le(e,t,s,r){if(t)ye=t;else{const e=Re();xe[ye]=e,t=ye=++be,xe[ye]=s?e:{x:0,y:0}}ye=t,ce&&me.preloading.set(!0);const n=$e&&$e.href===e.href?$e.promise:ke(e);$e=null;const a=ie={},{redirect:o,props:l,branch:c}=await n;if(a===ie&&(await Ne(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=xe[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}xe[ye]=e,e&&scrollTo(e.x,e.y)}}async function Ne(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=Se(new URL(e,document.baseURI));return s?(we[t.replaceState?"replaceState":"pushState"]({id:ye},"",e),Le(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(me.page.set(r),me.preloading.set(!1),ce)ce.$set(s);else{s.stores={page:{subscribe:me.page.subscribe},preloading:{subscribe:me.preloading.subscribe},session:me.session},s.level0={props:await ue};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Ue(e.nextSibling);Ue(e),Ue(t)}ce=new re({target:ve,props:s,hydrate:!0})}he=t,pe=JSON.stringify(r.query),fe=!0,ge=!1}async function ke(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;ue||(ue=le.preloaded[0]||j.call(o,{host:s.host,path:s.path,query:s.query,params:{}},de));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const f=r[l];if(function(e,t,s,r){if(r!==pe)return!0;const n=he[e];return!!n&&(t!==n.segment||(!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0))}(l,f,i,n)&&(u=!0),a.segments[c]=r[l+1],!t)return{segment:f};const h=c++;if(!ge&&!u&&he[l]&&he[l].part===t.i)return he[l];u=!1;const{default:p,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(qe);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(ae[t.i]);let d;return d=fe||!le.preloaded[l+1]?m?await m.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},de):{}:le.preloaded[l+1],a[`level${h}`]={component:p,props:d,segment:f,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function qe(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=s,document.head.appendChild(r)})}function Ue(e){e.parentNode.removeChild(e)}function Pe(e){const t=Se(new URL(e,document.baseURI));if(t)return $e&&e===$e.href||function(e,t){$e={href:e,promise:t}}(e,ke(t)),$e.promise}let Ae;function Oe(e){clearTimeout(Ae),Ae=setTimeout(()=>{_e(e)},20)}function _e(e){const t=Ie(e.target);t&&"prefetch"===t.rel&&Pe(t.href)}function Ce(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ie(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=Se(n);if(a){Le(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),we.pushState({id:ye},"",n.href)}}function Ie(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function je(e){if(xe[ye]=Re(),e.state){const t=Se(new URL(location.href));t?Le(t,e.state.id):location.href=location.href}else(function(e){ye=e})(be=be+1),we.replaceState({id:ye},"",location.href)}var Ve;Ve={target:document.querySelector("#sapper")},"scrollRestoration"in we&&(we.scrollRestoration="manual"),function(e){ve=e}(Ve.target),addEventListener("click",Ce),addEventListener("popstate",je),addEventListener("touchstart",_e),addEventListener("mousemove",Oe),Promise.resolve().then(()=>{const{hash:e,href:t}=location;we.replaceState({id:be},"",t);const s=new URL(location.href);if(le.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:o,error:l}=le;ue||(ue=a&&a[0]),Ne(null,[],{error:l,status:o,session:n,level0:{props:ue},level1:{props:{status:o,error:l},component:X},segments:a},{host:t,path:s,query:Ee(r),params:{}})}();const r=Se(s);return r?Le(r,be,!0,e):void 0});