function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){if(t){const o=a(t,n,e);return t[0](o)}}function a(t,n,o){return t[1]?e({},e(n.$$scope.ctx,t[1](o?o(n):{}))):n.$$scope.ctx}function f(t,n,o,r){return t[1]?e({},e(n.$$scope.changed||{},t[1](r?r(o):{}))):n.$$scope.changed||{}}function l(t){return null==t?"":t}const d="undefined"!=typeof window;let h=d?()=>window.performance.now():()=>Date.now(),$=d?t=>requestAnimationFrame(t):t;const p=new Set;let m,g=!1;function y(){p.forEach(t=>{t[0](h())||(p.delete(t),t[1]())}),(g=p.size>0)&&$(y)}function b(t){let n;return g||(g=!0,$(y)),{promise:new Promise(e=>{p.add(n=[t,e])}),abort(){p.delete(n)}}}function w(t,n){t.appendChild(n)}function _(t,n,e){t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function x(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function E(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function A(){return k(" ")}function C(){return k("")}function N(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function O(t){return function(n){return n.preventDefault(),t.call(this,n)}}function S(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function j(t){return Array.from(t.childNodes)}function L(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):E(n)}function M(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=n,t.splice(e,1)[0]}return k(n)}function R(t,n){n=""+n,t.data!==n&&(t.data=n)}class q{constructor(t,n=null){this.e=E("div"),this.a=n,this.u(t)}m(t,n=null){for(let e=0;e<this.n.length;e+=1)_(t,this.n[e],n);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(v)}}let z,D=0,F={};function P(t,n,e,o,r,s,i,c=0){const u=16.666/o;let a="{\n";for(let t=0;t<=1;t+=u){const o=n+(e-n)*s(t);a+=100*t+`%{${i(o,1-o)}}\n`}const f=a+`100% {${i(e,1-e)}}\n}`,l=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${c}`;if(!F[l]){if(!m){const t=E("style");document.head.appendChild(t),m=t.sheet}F[l]=!0,m.insertRule(`@keyframes ${l} ${f}`,m.cssRules.length)}const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${l} ${o}ms linear ${r}ms 1 both`,D+=1,l}function T(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--D&&$(()=>{if(D)return;let t=m.cssRules.length;for(;t--;)m.deleteRule(t);F={}})}function B(t){z=t}function H(){if(!z)throw new Error("Function called outside component initialization");return z}function G(t){H().$$.on_mount.push(t)}function I(t,n){H().$$.context.set(t,n)}function J(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}const K=[],Q=[],U=[],V=[],W=Promise.resolve();let X,Y=!1;function Z(t){U.push(t)}function tt(){const t=new Set;do{for(;K.length;){const t=K.shift();B(t),nt(t.$$)}for(;Q.length;)Q.pop()();for(let n=0;n<U.length;n+=1){const e=U[n];t.has(e)||(e(),t.add(e))}U.length=0}while(K.length);for(;V.length;)V.pop()();Y=!1}function nt(t){t.fragment&&(t.update(t.dirty),s(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(Z))}function et(){return X||(X=Promise.resolve()).then(()=>{X=null}),X}function ot(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const rt=new Set;let st;function it(){st={r:0,c:[],p:st}}function ct(){st.r||s(st.c),st=st.p}function ut(t,n){t&&t.i&&(rt.delete(t),t.i(n))}function at(t,n,e,o){if(t&&t.o){if(rt.has(t))return;rt.add(t),st.c.push(()=>{rt.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const ft={duration:0};function lt(e,o,r){let s,c,u=o(e,r),a=!1,f=0;function l(){s&&T(e,s)}function d(){const{delay:o=0,duration:r=300,easing:i=n,tick:d=t,css:$}=u||ft;$&&(s=P(e,0,1,r,o,i,$,f++)),d(0,1);const p=h()+o,m=p+r;c&&c.abort(),a=!0,Z(()=>ot(e,!0,"start")),c=b(t=>{if(a){if(t>=m)return d(1,0),ot(e,!0,"end"),l(),a=!1;if(t>=p){const n=i((t-p)/r);d(n,1-n)}}return a})}let $=!1;return{start(){$||(T(e),i(u)?(u=u(),et().then(d)):d())},invalidate(){$=!1},end(){a&&(l(),a=!1)}}}function dt(e,o,r){let c,u=o(e,r),a=!0;const f=st;function l(){const{delay:o=0,duration:r=300,easing:i=n,tick:l=t,css:d}=u||ft;d&&(c=P(e,1,0,r,o,i,d));const $=h()+o,p=$+r;Z(()=>ot(e,!1,"start")),b(t=>{if(a){if(t>=p)return l(0,1),ot(e,!1,"end"),--f.r||s(f.c),!1;if(t>=$){const n=i((t-$)/r);l(1-n,n)}}return a})}return f.r+=1,i(u)?et().then(()=>{u=u(),l()}):l(),{end(t){t&&u.tick&&u.tick(1,0),a&&(c&&T(e,c),a=!1)}}}function ht(e,o,r,c){let u=o(e,r),a=c?0:1,f=null,l=null,d=null;function $(){d&&T(e,d)}function p(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function m(o){const{delay:r=0,duration:i=300,easing:c=n,tick:m=t,css:g}=u||ft,y={start:h()+r,b:o};o||(y.group=st,st.r+=1),f?l=y:(g&&($(),d=P(e,a,o,i,r,c,g)),o&&m(0,1),f=p(y,i),Z(()=>ot(e,o,"start")),b(t=>{if(l&&t>l.start&&(f=p(l,i),l=null,ot(e,f.b,"start"),g&&($(),d=P(e,a,f.b,f.duration,0,c,u.css))),f)if(t>=f.end)m(a=f.b,1-a),ot(e,f.b,"end"),l||(f.b?$():--f.group.r||s(f.group.c)),f=null;else if(t>=f.start){const n=t-f.start;a=f.a+f.d*c(n/f.duration),m(a,1-a)}return!(!f&&!l)}))}return{run(t){i(u)?et().then(()=>{u=u(),m(t)}):m(t)},end(){$(),f=l=null}}}const $t="undefined"!=typeof window?window:global;function pt(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function mt(t,n,e){const{fragment:r,on_mount:c,on_destroy:u,after_update:a}=t.$$;r.m(n,e),Z(()=>{const n=c.map(o).filter(i);u?u.push(...n):s(n),t.$$.on_mount=[]}),a.forEach(Z)}function gt(t,n){t.$$.fragment&&(s(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function yt(t,n){t.$$.dirty||(K.push(t),Y||(Y=!0,W.then(tt)),t.$$.dirty=r()),t.$$.dirty[n]=!0}function bt(n,e,o,i,c,u){const a=z;B(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:r(),dirty:null};let d=!1;l.ctx=o?o(n,f,(t,e)=>{l.ctx&&c(l.ctx[t],l.ctx[t]=e)&&(l.bound[t]&&l.bound[t](e),d&&yt(n,t))}):f,l.update(),d=!0,s(l.before_update),l.fragment=i(l.ctx),e.target&&(e.hydrate?l.fragment.l(j(e.target)):l.fragment.c(),e.intro&&ut(n.$$.fragment),mt(n,e.target,e.anchor),tt()),B(a)}class wt{$destroy(){gt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{C as A,it as B,ct as C,O as D,l as E,s as F,G,$t as H,R as I,e as J,pt as K,I as L,q as M,x as N,ht as O,wt as S,A as a,j as b,L as c,v as d,E as e,M as f,S as g,_ as h,bt as i,w as j,J as k,N as l,Q as m,t as n,u as o,f as p,a as q,ut as r,c as s,k as t,Z as u,lt as v,at as w,dt as x,mt as y,gt as z};