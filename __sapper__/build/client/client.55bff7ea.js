import{s as e,n as t,S as s,i as a,e as r,a as n,t as o,c as l,b as c,d as i,f,g as h,l as u,h as d,j as m,k as p,m as v,o as g,p as $,q as b,r as y,u as E,v as w,w as S,x as _,y as x,z as I,A,B as P,C as R,D as k,E as M,F as N,G as j,H as L,I as D,J as z,K as T}from"./index.628c8320.js";import{f as C,a as O}from"./index.438f43b9.js";import{T as V}from"./TextAnimation.726056da.js";const F=[];function U(s,a=t){let r;const n=[];function o(t){if(e(s,t)&&(s=t,r)){const e=!F.length;for(let e=0;e<n.length;e+=1){const t=n[e];t[1](),F.push(t,s)}if(e){for(let e=0;e<F.length;e+=2)F[e][0](F[e+1]);F.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(e,l=t){const c=[e,l];return n.push(c),1===n.length&&(r=a(o)||t),e(s),()=>{const e=n.indexOf(c);-1!==e&&n.splice(e,1),0===n.length&&(r(),r=null)}}}}const q={},H=()=>({});function J(e){var s,a,p,v,g,$,b,y,E,w;return{c(){s=r("input"),a=n(),p=r("div"),v=n(),g=r("label"),$=r("span"),b=o("Navigation"),y=n(),E=r("span"),this.h()},l(e){s=l(e,"INPUT",{id:!0,type:!0,class:!0},!1),c(s).forEach(i),a=f(e,"\n"),p=l(e,"DIV",{class:!0},!1),c(p).forEach(i),v=f(e,"\n"),g=l(e,"LABEL",{id:!0,for:!0,class:!0},!1);var t=c(g);$=l(t,"SPAN",{class:!0},!1);var r=c($);b=f(r,"Navigation"),r.forEach(i),y=f(t,"\n    "),E=l(t,"SPAN",{class:!0,title:!0},!1),c(E).forEach(i),t.forEach(i),this.h()},h(){h(s,"id","toggle"),h(s,"type","checkbox"),h(s,"class","hide subnav-toggle hide-for-xlg svelte-9tyels"),h(p,"class","background svelte-9tyels"),h($,"class","show-for-sr svelte-9tyels"),h(E,"class","hamburger svelte-9tyels"),h(E,"title","Navigation"),h(g,"id","nav-label"),h(g,"for","toggle"),h(g,"class","hide-for-xlg svelte-9tyels"),w=u(p,"click",e.click_handler)},m(t,r){d(t,s,r),d(t,a,r),d(t,p,r),d(t,v,r),d(t,g,r),m(g,$),m($,b),m(g,y),m(g,E),e.label_binding(g)},p:t,i:t,o:t,d(t){t&&(i(s),i(a),i(p),i(v),i(g)),e.label_binding(null),w()}}}function B(e,t,s){let{toggle:a,hamburger:r}=t;return e.$set=(e=>{"toggle"in e&&s("toggle",a=e.toggle),"hamburger"in e&&s("hamburger",r=e.hamburger)}),{toggle:a,hamburger:r,click_handler:function(t){p(e,t)},label_binding:function(e){v[e?"unshift":"push"](()=>{s("hamburger",r=e)})}}}class G extends s{constructor(t){super(),a(this,t,B,J,e,["toggle","hamburger"])}}const Y=()=>({}),K=()=>({});function W(e){var t,s,a,o,p,v,x,I,A,P,R,k;const M=e.$$slots.header,N=g(M,e,K),j=e.$$slots.default,L=g(j,e,null);return{c(){t=r("div"),s=r("div"),a=n(),o=r("div"),N&&N.c(),p=n(),L&&L.c(),this.h()},l(e){t=l(e,"DIV",{class:!0},!1);var r=c(t);s=l(r,"DIV",{class:!0},!1),c(s).forEach(i),a=f(r,"\n\t"),o=l(r,"DIV",{class:!0},!1);var n=c(o);N&&N.l(n),p=f(n,"\n\t\t"),L&&L.l(n),n.forEach(i),r.forEach(i),this.h()},h(){h(s,"class","modal-background svelte-glpclt"),h(o,"class","modal svelte-glpclt"),h(t,"class",I="center-all modal-container "+(e.showModal?"show-modal":"")+" svelte-glpclt"),k=u(s,"click",e.click_handler)},m(e,r){d(e,t,r),m(t,s),m(t,a),m(t,o),N&&N.m(o,null),m(o,p),L&&L.m(o,null),R=!0},p(e,s){N&&N.p&&e.$$scope&&N.p($(M,s,e,Y),b(M,s,K)),L&&L.p&&e.$$scope&&L.p($(j,s,e,null),b(j,s,null)),R&&!e.showModal||I===(I="center-all modal-container "+(s.showModal?"show-modal":"")+" svelte-glpclt")||h(t,"class",I)},i(e){R||(y(N,e),y(L,e),E(()=>{x&&x.end(1),v||(v=w(o,C,{y:-20,duration:450,delay:200})),v.start()}),E(()=>{P&&P.end(1),A||(A=w(t,O,{})),A.start()}),R=!0)},o(e){S(N,e),S(L,e),v&&v.invalidate(),x=_(o,C,{y:-20,duration:450}),A&&A.invalidate(),P=_(t,O,{}),R=!1},d(e){e&&i(t),N&&N.d(e),L&&L.d(e),e&&(x&&x.end(),P&&P.end()),k()}}}function X(e,t,s){let{showModal:a}=t,{$$slots:r={},$$scope:n}=t;return e.$set=(e=>{"showModal"in e&&s("showModal",a=e.showModal),"$$scope"in e&&s("$$scope",n=e.$$scope)}),{showModal:a,click_handler:function(t){p(e,t)},$$slots:r,$$scope:n}}class Q extends s{constructor(t){super(),a(this,t,X,W,e,["showModal"])}}function Z(e){var s,a,o,u,p,v,g;return{c(){s=r("div"),a=r("div"),o=n(),u=r("div"),this.h()},l(e){s=l(e,"DIV",{id:!0,class:!0},!1);var t=c(s);a=l(t,"DIV",{id:!0,class:!0},!1),c(a).forEach(i),o=f(t,"\n  "),u=l(t,"DIV",{id:!0,class:!0},!1),c(u).forEach(i),t.forEach(i),this.h()},h(){h(a,"id","box"),h(a,"class","svelte-12rrru0"),h(u,"id","hill"),h(u,"class","svelte-12rrru0"),h(s,"id","loader"),h(s,"class","svelte-12rrru0")},m(e,t){d(e,s,t),m(s,a),m(s,o),m(s,u),g=!0},p:t,i(e){g||(E(()=>{v&&v.end(1),p||(p=w(s,O,{})),p.start()}),g=!0)},o(e){p&&p.invalidate(),v=_(s,O,{}),g=!1},d(e){e&&(i(s),v&&v.end())}}}class ee extends s{constructor(t){super(),a(this,t,null,Z,e,[])}}function te(e){var t,s=new Q({props:{showModal:e.showModal,$$slots:{default:[ne]},$$scope:{ctx:e}}});return s.$on("click",e.click_handler),{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,a){x(s,e,a),t=!0},p(e,t){var a={};e.showModal&&(a.showModal=t.showModal),(e.$$scope||e.formState||e.fieldInputs)&&(a.$$scope={changed:e,ctx:t}),s.$set(a)},i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){S(s.$$.fragment,e),t=!1},d(e){I(s,e)}}}function se(e){var t,s=new ee({});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,a){x(s,e,a),t=!0},i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){S(s.$$.fragment,e),t=!1},d(e){I(s,e)}}}function ae(e){var t,s,a,n,u;return{c(){t=r("h2"),s=o("SUCCESS"),this.h()},l(e){t=l(e,"H2",{class:!0},!1);var a=c(t);s=f(a,"SUCCESS"),a.forEach(i),this.h()},h(){h(t,"class","success-message svelte-7h4bgy")},m(e,a){d(e,t,a),m(t,s),u=!0},i(e){u||(E(()=>{n&&n.end(1),a||(a=w(t,C,{y:20,duration:500,delay:200})),a.start()}),u=!0)},o(e){a&&a.invalidate(),n=_(t,C,{y:-20,duration:500,delay:0}),u=!1},d(e){e&&(i(t),n&&n.end())}}}function re(e){var t,s,a,n,u;return{c(){t=r("h2"),s=o("ERROR"),this.h()},l(e){t=l(e,"H2",{class:!0},!1);var a=c(t);s=f(a,"ERROR"),a.forEach(i),this.h()},h(){h(t,"class","success-message svelte-7h4bgy")},m(e,a){d(e,t,a),m(t,s),u=!0},i(e){u||(E(()=>{n&&n.end(1),a||(a=w(t,C,{y:20,duration:500,delay:200})),a.start()}),u=!0)},o(e){a&&a.invalidate(),n=_(t,C,{y:-20,duration:500,delay:0}),u=!1},d(e){e&&(i(t),n&&n.end())}}}function ne(e){var t,s,a,p,v,g,$,b,E,w,_,x,I,A,M,N,j,L,D,z,T,C,O,V,F,U,q,H,J,B,G,Y,K,W,X,Q,Z=e.formState.submittingForm&&se(),ee=e.formState.formSuccess&&ae(),te=e.formState.formError&&re();return{c(){t=r("div"),s=r("div"),a=r("div"),p=r("h2"),v=o("Get In Touch"),g=n(),$=r("p"),b=o("Hi There! I’m Josh, \n                            I bring projects to life by innovating across every aspect of the customer journey. \n                            Send me a message if you are looking to hire a developer, collaborate on a project, or have a potential business opportunity."),w=n(),_=r("form"),x=r("label"),I=r("span"),A=o("Name"),M=n(),N=r("input"),j=n(),L=r("label"),D=r("span"),z=o("Email"),T=n(),C=r("input"),O=n(),V=r("label"),F=r("span"),U=o("Message"),q=n(),H=r("textarea"),J=n(),B=r("input"),Y=n(),Z&&Z.c(),K=n(),ee&&ee.c(),W=n(),te&&te.c(),this.h()},l(e){t=l(e,"DIV",{class:!0},!1);var r=c(t);s=l(r,"DIV",{class:!0},!1);var n=c(s);a=l(n,"DIV",{class:!0},!1);var o=c(a);p=l(o,"H2",{class:!0},!1);var h=c(p);v=f(h,"Get In Touch"),h.forEach(i),g=f(o,"\n                        "),$=l(o,"P",{class:!0},!1);var u=c($);b=f(u,"Hi There! I’m Josh, \n                            I bring projects to life by innovating across every aspect of the customer journey. \n                            Send me a message if you are looking to hire a developer, collaborate on a project, or have a potential business opportunity."),u.forEach(i),o.forEach(i),w=f(n,"\n                    "),_=l(n,"FORM",{class:!0},!1);var d=c(_);x=l(d,"LABEL",{class:!0},!1);var m=c(x);I=l(m,"SPAN",{class:!0},!1);var y=c(I);A=f(y,"Name"),y.forEach(i),M=f(m,"\n                            "),N=l(m,"INPUT",{name:!0,type:!0,class:!0},!1),c(N).forEach(i),m.forEach(i),j=f(d,"\n                        "),L=l(d,"LABEL",{class:!0},!1);var E=c(L);D=l(E,"SPAN",{class:!0},!1);var S=c(D);z=f(S,"Email"),S.forEach(i),T=f(E,"\n                            "),C=l(E,"INPUT",{required:!0,name:!0,type:!0,class:!0},!1),c(C).forEach(i),E.forEach(i),O=f(d,"\n                        "),V=l(d,"LABEL",{class:!0},!1);var P=c(V);F=l(P,"SPAN",{class:!0},!1);var R=c(F);U=f(R,"Message"),R.forEach(i),q=f(P,"\n                            "),H=l(P,"TEXTAREA",{name:!0,rows:!0,type:!0,class:!0},!1),c(H).forEach(i),P.forEach(i),J=f(d,"\n                        "),B=l(d,"INPUT",{type:!0,value:!0,class:!0},!1),c(B).forEach(i),d.forEach(i),Y=f(n,"\n\n                "),Z&&Z.l(n),K=f(n,"\n                "),ee&&ee.l(n),W=f(n,"\n                "),te&&te.l(n),n.forEach(i),r.forEach(i),this.h()},h(){h(p,"class","svelte-7h4bgy"),h($,"class","svelte-7h4bgy"),h(a,"class",E="text-container "+(e.formState.hideFields?"hide-content":"")+" "+(e.formState.hideFields?"hide-content":"")+" svelte-7h4bgy"),h(I,"class","svelte-7h4bgy"),h(N,"name","name"),h(N,"type","text"),h(N,"class","svelte-7h4bgy"),h(x,"class","svelte-7h4bgy"),h(D,"class","svelte-7h4bgy"),C.required=!0,h(C,"name","email"),h(C,"type","email"),h(C,"class","svelte-7h4bgy"),h(L,"class","svelte-7h4bgy"),h(F,"class","svelte-7h4bgy"),h(H,"name","message"),h(H,"rows","6"),h(H,"type","textarea"),h(H,"class","svelte-7h4bgy"),h(V,"class","svelte-7h4bgy"),h(B,"type","submit"),B.value="Send Message",h(B,"class","svelte-7h4bgy"),h(_,"class",G="gform "+(e.formState.hideFields?"hide-content":"")+"\n                        "+(e.formState.formSuccess?"hide-content":"")+" svelte-7h4bgy"),h(s,"class","flex-container svelte-7h4bgy"),h(t,"class","form-container svelte-7h4bgy"),Q=u(_,"submit",k(e.handleSubmit))},m(r,n){d(r,t,n),m(t,s),m(s,a),m(a,p),m(p,v),m(a,g),m(a,$),m($,b),m(s,w),m(s,_),m(_,x),m(x,I),m(I,A),m(x,M),m(x,N),e.input0_binding(N),m(_,j),m(_,L),m(L,D),m(D,z),m(L,T),m(L,C),e.input1_binding(C),m(_,O),m(_,V),m(V,F),m(F,U),m(V,q),m(V,H),e.textarea_binding(H),m(_,J),m(_,B),m(s,Y),Z&&Z.m(s,null),m(s,K),ee&&ee.m(s,null),m(s,W),te&&te.m(s,null),X=!0},p(e,t){X&&!e.formState||E===(E="text-container "+(t.formState.hideFields?"hide-content":"")+" "+(t.formState.hideFields?"hide-content":"")+" svelte-7h4bgy")||h(a,"class",E),X&&!e.formState||G===(G="gform "+(t.formState.hideFields?"hide-content":"")+"\n                        "+(t.formState.formSuccess?"hide-content":"")+" svelte-7h4bgy")||h(_,"class",G),t.formState.submittingForm?Z?y(Z,1):((Z=se()).c(),y(Z,1),Z.m(s,K)):Z&&(P(),S(Z,1,1,()=>{Z=null}),R()),t.formState.formSuccess?ee?y(ee,1):((ee=ae()).c(),y(ee,1),ee.m(s,W)):ee&&(P(),S(ee,1,1,()=>{ee=null}),R()),t.formState.formError?te?y(te,1):((te=re()).c(),y(te,1),te.m(s,null)):te&&(P(),S(te,1,1,()=>{te=null}),R())},i(e){X||(y(Z),y(ee),y(te),X=!0)},o(e){S(Z),S(ee),S(te),X=!1},d(s){s&&i(t),e.input0_binding(null),e.input1_binding(null),e.textarea_binding(null),Z&&Z.d(),ee&&ee.d(),te&&te.d(),Q()}}}function oe(e){var t,s,a=e.showModal&&!1===le&&te(e);return{c(){a&&a.c(),t=A()},l(e){a&&a.l(e),t=A()},m(e,r){a&&a.m(e,r),d(e,t,r),s=!0},p(e,s){s.showModal&&!1===le?a?(a.p(e,s),y(a,1)):((a=te(s)).c(),y(a,1),a.m(t.parentNode,t)):a&&(P(),S(a,1,1,()=>{a=null}),R())},i(e){s||(y(a),s=!0)},o(e){S(a),s=!1},d(e){a&&a.d(e),e&&i(t)}}}let le=!1;function ce(e,t,s){let{showModal:a}=t,r=[],n={submittingForm:!1,formSuccess:!1,formError:!1,hideFields:!1};function o(e){setTimeout(()=>{const e=Object.entries(n);for(const[t,a]of e)n[t]=!1,s("formState",n);r.forEach(e=>{e.value=""})},e)}return e.$set=(e=>{"showModal"in e&&s("showModal",a=e.showModal)}),{showModal:a,fieldInputs:r,formState:n,handleSubmit:async function(e){n.submittingForm=!0,s("formState",n),n.hideFields=!0,s("formState",n),n.formSuccess=!1,s("formState",n);const t={method:"POST",body:function(e,t){let s=new FormData;return t.forEach(t=>{s.append(`${t}`,`${e[t].value}`)}),s}(e.target,["name","email","message"])};try{const a=await fetch("https://script.google.com/macros/s/AKfycbyfIRXEeqnLPVq4s2hG_b35lmcm2FCn768QWC9Wfg/exec",t);await a.json(),n.submittingForm=!1,s("formState",n),n.formSuccess=!0,s("formState",n),o(1600)}catch(e){n.submittingForm=!1,s("formState",n),n.formError=!0,s("formState",n),o(1600)}},click_handler:function(t){p(e,t)},input0_binding:function(e){v[e?"unshift":"push"](()=>{r[0]=e,s("fieldInputs",r)})},input1_binding:function(e){v[e?"unshift":"push"](()=>{r[1]=e,s("fieldInputs",r)})},textarea_binding:function(e){v[e?"unshift":"push"](()=>{r[2]=e,s("fieldInputs",r)})}}}class ie extends s{constructor(t){super(),a(this,t,ce,oe,e,["showModal"])}}const{window:fe}=j;function he(e){var t,s,a,p,v,g,$,b,w,_,A,P,R,k,j,L,D,z,T,C,O,V,F,U,q,H,J,B,Y,K,W,X,Q,Z=!1,ee=()=>{Z=!1};E(e.onwindowscroll);var te=new G({props:{toggle:ue}});e.hamburger_1_binding(te),te.$on("click",e.togglerOff);var se=new ie({props:{showModal:e.showModal}});return se.$on("click",e.click_handler),{c(){s=r("header"),a=r("nav"),p=r("a"),v=r("p"),g=r("span"),$=o("<h1>"),b=o("Hi There"),w=r("span"),_=o("!"),A=r("span"),P=o("</h1>"),R=n(),te.$$.fragment.c(),k=n(),j=r("ul"),L=r("li"),D=r("span"),z=n(),T=r("li"),C=r("a"),O=o("Home"),V=n(),F=r("li"),U=r("a"),q=o("About"),H=n(),J=r("li"),B=r("a"),Y=o("Contact"),W=n(),se.$$.fragment.c(),this.h()},l(e){s=l(e,"HEADER",{class:!0},!1);var t=c(s);a=l(t,"NAV",{class:!0},!1);var r=c(a);p=l(r,"A",{href:!0,class:!0},!1);var n=c(p);v=l(n,"P",{class:!0},!1);var o=c(v);g=l(o,"SPAN",{class:!0},!1);var h=c(g);$=f(h,"<h1>"),h.forEach(i),b=f(o,"Hi There"),w=l(o,"SPAN",{class:!0},!1);var u=c(w);_=f(u,"!"),u.forEach(i),A=l(o,"SPAN",{class:!0},!1);var d=c(A);P=f(d,"</h1>"),d.forEach(i),o.forEach(i),n.forEach(i),R=f(r,"\n        "),te.$$.fragment.l(r),k=f(r,"\n        "),j=l(r,"UL",{class:!0},!1);var m=c(j);L=l(m,"LI",{class:!0},!1);var y=c(L);D=l(y,"SPAN",{class:!0},!1),c(D).forEach(i),y.forEach(i),z=f(m,"\n            "),T=l(m,"LI",{class:!0},!1);var E=c(T);C=l(E,"A",{class:!0,rel:!0,href:!0},!1);var S=c(C);O=f(S,"Home"),S.forEach(i),E.forEach(i),V=f(m,"\n            "),F=l(m,"LI",{class:!0},!1);var x=c(F);U=l(x,"A",{rel:!0,href:!0,class:!0},!1);var I=c(U);q=f(I,"About"),I.forEach(i),x.forEach(i),H=f(m,"\n            "),J=l(m,"LI",{class:!0},!1);var M=c(J);B=l(M,"A",{href:!0,class:!0},!1);var N=c(B);Y=f(N,"Contact"),N.forEach(i),M.forEach(i),m.forEach(i),r.forEach(i),t.forEach(i),W=f(e,"\n\n"),se.$$.fragment.l(e),this.h()},h(){h(g,"class","code svelte-ylyv4b"),h(w,"class","logo-hover svelte-ylyv4b"),h(A,"class","code svelte-ylyv4b"),h(v,"class","svelte-ylyv4b"),h(p,"href","/"),h(p,"class","logo svelte-ylyv4b"),h(D,"class","close svelte-ylyv4b"),h(L,"class","close-container svelte-ylyv4b"),h(C,"class"," svelte-ylyv4b"),h(C,"rel","prefetch"),h(C,"href","/"),h(T,"class","svelte-ylyv4b"),h(U,"rel","prefetch"),h(U,"href","/about"),h(U,"class","svelte-ylyv4b"),h(F,"class","svelte-ylyv4b"),h(B,"href","javascript:void(0)"),h(B,"class","svelte-ylyv4b"),h(J,"class","svelte-ylyv4b"),h(j,"class","navigation svelte-ylyv4b"),h(a,"class",K=M(e.reduceNavSize?"scrolled container":"container")+" svelte-ylyv4b"),h(s,"class","svelte-ylyv4b"),Q=[u(fe,"scroll",()=>{Z=!0,clearTimeout(t),t=setTimeout(ee,100),e.onwindowscroll()}),u(L,"click",e.togglerOff),u(C,"click",e.togglerOff),u(U,"click",e.togglerOff),u(B,"click",e.openModal)]},m(e,t){d(e,s,t),m(s,a),m(a,p),m(p,v),m(v,g),m(g,$),m(v,b),m(v,w),m(w,_),m(v,A),m(A,P),m(a,R),x(te,a,null),m(a,k),m(a,j),m(j,L),m(L,D),m(j,z),m(j,T),m(T,C),m(C,O),m(j,V),m(j,F),m(F,U),m(U,q),m(j,H),m(j,J),m(J,B),m(B,Y),d(e,W,t),x(se,e,t),X=!0},p(e,s){e.windowY&&!Z&&(Z=!0,clearTimeout(t),scrollTo(fe.pageXOffset,s.windowY),t=setTimeout(ee,100));var r={};e.toggle&&(r.toggle=ue),te.$set(r),X&&!e.reduceNavSize||K===(K=M(s.reduceNavSize?"scrolled container":"container")+" svelte-ylyv4b")||h(a,"class",K);var n={};e.showModal&&(n.showModal=s.showModal),se.$set(n)},i(e){X||(y(te.$$.fragment,e),y(se.$$.fragment,e),X=!0)},o(e){S(te.$$.fragment,e),S(se.$$.fragment,e),X=!1},d(t){t&&i(s),e.hamburger_1_binding(null),I(te),t&&i(W),I(se,t),N(Q)}}}let ue=!1;function de(e,t,s){let a,r,n,o,l=!1;return e.$$.update=((e={windowY:1})=>{e.windowY&&(o=function(e){s("reduceNavSize",l=e>75)}(r))}),{showModal:a,windowY:r,hamburger:n,reduceNavSize:l,togglerOff:function(){window.innerWidth<1023&&n&&n.$$.ctx.hamburger.click()},openModal:function(){s("showModal",a=!0)},onwindowscroll:function(){r=fe.pageYOffset,s("windowY",r)},hamburger_1_binding:function(e){v[e?"unshift":"push"](()=>{s("hamburger",n=e)})},click_handler:function(){const e=a=!1;return s("showModal",a),e}}}class me extends s{constructor(t){super(),a(this,t,de,he,e,[])}}function pe(e){var s,a,u,p,v,g,$,b,E,w,_,A,P,R,k,M,N,j,L,D,z,T,C,O,F,U,q,H,J,B,G,Y,K,W,X,Q,Z,ee,te,se,ae,re,ne,oe=new V({props:{text:"Joshua.micah.roper@gmail.com"}}),le=new V({props:{text:"Download PDF"}});return{c(){s=r("script"),a=n(),u=r("footer"),p=r("div"),v=r("div"),g=r("p"),$=o("Feel free to shoot me an "),b=r("a"),E=o("email"),w=o(" & connect through "),_=r("a"),A=o("social."),P=n(),R=r("p"),k=o("Reach out!"),M=n(),N=r("div"),j=r("div"),L=r("p"),D=o("Get In Touch!"),z=n(),T=r("a"),oe.$$.fragment.c(),C=n(),O=r("div"),F=r("p"),U=o("View Resume"),q=n(),H=r("a"),le.$$.fragment.c(),J=n(),B=r("div"),G=r("p"),Y=o("@ 2019 Joshua Roper Development"),K=n(),W=r("div"),X=r("a"),Q=r("i"),Z=n(),ee=r("a"),te=r("i"),se=n(),ae=r("a"),re=r("i"),this.h()},l(e){s=l(e,"SCRIPT",{src:!0},!1),c(s).forEach(i),a=f(e,"\n\n"),u=l(e,"FOOTER",{class:!0},!1);var t=c(u);p=l(t,"DIV",{class:!0},!1);var r=c(p);v=l(r,"DIV",{class:!0},!1);var n=c(v);g=l(n,"P",{class:!0},!1);var o=c(g);$=f(o,"Feel free to shoot me an "),b=l(o,"A",{href:!0,class:!0},!1);var h=c(b);E=f(h,"email"),h.forEach(i),w=f(o," & connect through "),_=l(o,"A",{href:!0,target:!0,class:!0},!1);var d=c(_);A=f(d,"social."),d.forEach(i),o.forEach(i),P=f(n,"\n            "),R=l(n,"P",{class:!0},!1);var m=c(R);k=f(m,"Reach out!"),m.forEach(i),n.forEach(i),M=f(r,"\n        "),N=l(r,"DIV",{class:!0},!1);var y=c(N);j=l(y,"DIV",{class:!0},!1);var S=c(j);L=l(S,"P",{class:!0},!1);var x=c(L);D=f(x,"Get In Touch!"),x.forEach(i),z=f(S,"\n                "),T=l(S,"A",{href:!0,class:!0},!1);var I=c(T);oe.$$.fragment.l(I),I.forEach(i),S.forEach(i),C=f(y,"\n            "),O=l(y,"DIV",{class:!0},!1);var V=c(O);F=l(V,"P",{class:!0},!1);var ne=c(F);U=f(ne,"View Resume"),ne.forEach(i),q=f(V,"\n                "),H=l(V,"A",{href:!0,download:!0,class:!0},!1);var ce=c(H);le.$$.fragment.l(ce),ce.forEach(i),V.forEach(i),y.forEach(i),r.forEach(i),J=f(t,"\n    "),B=l(t,"DIV",{class:!0},!1);var ie=c(B);G=l(ie,"P",{class:!0},!1);var fe=c(G);Y=f(fe,"@ 2019 Joshua Roper Development"),fe.forEach(i),K=f(ie,"\n        "),W=l(ie,"DIV",{class:!0},!1);var he=c(W);X=l(he,"A",{href:!0,"aria-label":!0,target:!0,class:!0},!1);var ue=c(X);Q=l(ue,"I",{class:!0},!1),c(Q).forEach(i),ue.forEach(i),Z=f(he,"\n            "),ee=l(he,"A",{href:!0,"aria-label":!0,target:!0,class:!0},!1);var de=c(ee);te=l(de,"I",{class:!0},!1),c(te).forEach(i),de.forEach(i),se=f(he,"\n            "),ae=l(he,"A",{href:!0,"aria-label":!0,target:!0,class:!0},!1);var me=c(ae);re=l(me,"I",{class:!0},!1),c(re).forEach(i),me.forEach(i),he.forEach(i),ie.forEach(i),t.forEach(i),this.h()},h(){h(s,"src","https://kit.fontawesome.com/1309990c29.js"),h(b,"href","mailto:joshua.micah.roper@gmail.com"),h(b,"class","svelte-1a3fz2r"),h(_,"href","https://www.linkedin.com/in/jr-dev"),h(_,"target","blank"),h(_,"class","svelte-1a3fz2r"),h(g,"class","headline svelte-1a3fz2r"),h(R,"class","svelte-1a3fz2r"),h(v,"class","left svelte-1a3fz2r"),h(L,"class","title svelte-1a3fz2r"),h(T,"href","mailto:joshua.micah.roper@gmail.com"),h(T,"class","svelte-1a3fz2r"),h(j,"class","text-cta svelte-1a3fz2r"),h(F,"class","title svelte-1a3fz2r"),h(H,"href","./images/resume-joshua-roper.pdf"),h(H,"download",""),h(H,"class","svelte-1a3fz2r"),h(O,"class","text-cta svelte-1a3fz2r"),h(N,"class","right svelte-1a3fz2r"),h(p,"class","container footer-container svelte-1a3fz2r"),h(G,"class","copyright svelte-1a3fz2r"),h(Q,"class","fab fa-github svelte-1a3fz2r"),h(X,"href","https://www.github.com/Jrope21"),h(X,"aria-label","link to Joshua Roper's GitHub account"),h(X,"target","blank"),h(X,"class","svelte-1a3fz2r"),h(te,"class","fab fa-linkedin svelte-1a3fz2r"),h(ee,"href","https://www.linkedin.com/in/JR-dev"),h(ee,"aria-label","link to Joshua Roper's LinkedIn account"),h(ee,"target","blank"),h(ee,"class","svelte-1a3fz2r"),h(re,"class","fas fa-envelope svelte-1a3fz2r"),h(ae,"href","mailto:joshua.micah.roper@gmail.com"),h(ae,"aria-label","link to send Joshua Roper an email"),h(ae,"target","blank"),h(ae,"class","svelte-1a3fz2r"),h(W,"class","social-icons svelte-1a3fz2r"),h(B,"class","bottom-row container svelte-1a3fz2r"),h(u,"class","svelte-1a3fz2r")},m(e,t){m(document.head,s),d(e,a,t),d(e,u,t),m(u,p),m(p,v),m(v,g),m(g,$),m(g,b),m(b,E),m(g,w),m(g,_),m(_,A),m(v,P),m(v,R),m(R,k),m(p,M),m(p,N),m(N,j),m(j,L),m(L,D),m(j,z),m(j,T),x(oe,T,null),m(N,C),m(N,O),m(O,F),m(F,U),m(O,q),m(O,H),x(le,H,null),m(u,J),m(u,B),m(B,G),m(G,Y),m(B,K),m(B,W),m(W,X),m(X,Q),m(W,Z),m(W,ee),m(ee,te),m(W,se),m(W,ae),m(ae,re),ne=!0},p:t,i(e){ne||(y(oe.$$.fragment,e),y(le.$$.fragment,e),ne=!0)},o(e){S(oe.$$.fragment,e),S(le.$$.fragment,e),ne=!1},d(e){i(s),e&&(i(a),i(u)),I(oe),I(le)}}}class ve extends s{constructor(t){super(),a(this,t,null,pe,e,[])}}function ge(e){var t,s,a,o,u,m=new me({});const p=e.$$slots.default,v=g(p,e,null);var E=new ve({});return{c(){m.$$.fragment.c(),t=n(),s=r("div"),a=n(),v&&v.c(),o=n(),E.$$.fragment.c(),this.h()},l(e){m.$$.fragment.l(e),t=f(e,"\n"),s=l(e,"DIV",{class:!0},!1),c(s).forEach(i),a=f(e,"\n"),v&&v.l(e),o=f(e,"\n\n"),E.$$.fragment.l(e),this.h()},h(){h(s,"class","background svelte-184cnv")},m(e,r){x(m,e,r),d(e,t,r),d(e,s,r),d(e,a,r),v&&v.m(e,r),d(e,o,r),x(E,e,r),u=!0},p(e,t){v&&v.p&&e.$$scope&&v.p($(p,t,e,null),b(p,t,null))},i(e){u||(y(m.$$.fragment,e),y(v,e),y(E.$$.fragment,e),u=!0)},o(e){S(m.$$.fragment,e),S(v,e),S(E.$$.fragment,e),u=!1},d(e){I(m,e),e&&(i(t),i(s),i(a)),v&&v.d(e),e&&i(o),I(E,e)}}}function $e(e,t,s){let{$$slots:a={},$$scope:r}=t;return e.$set=(e=>{"$$scope"in e&&s("$$scope",r=e.$$scope)}),{$$slots:a,$$scope:r}}class be extends s{constructor(t){super(),a(this,t,$e,ge,e,[])}}function ye(e){var t,s,a=e.error.stack+"";return{c(){t=r("pre"),s=o(a)},l(e){t=l(e,"PRE",{},!1);var r=c(t);s=f(r,a),r.forEach(i)},m(e,a){d(e,t,a),m(t,s)},p(e,t){e.error&&a!==(a=t.error.stack+"")&&L(s,a)},d(e){e&&i(t)}}}function Ee(e){var s,a,u,p,v,g,$,b,y,E=e.error.message+"";document.title=s=e.status;var w=e.dev&&e.error.stack&&ye(e);return{c(){a=n(),u=r("h1"),p=o(e.status),v=n(),g=r("p"),$=o(E),b=n(),w&&w.c(),y=A(),this.h()},l(t){a=f(t,"\n\n"),u=l(t,"H1",{class:!0},!1);var s=c(u);p=f(s,e.status),s.forEach(i),v=f(t,"\n\n"),g=l(t,"P",{class:!0},!1);var r=c(g);$=f(r,E),r.forEach(i),b=f(t,"\n\n"),w&&w.l(t),y=A(),this.h()},h(){h(u,"class","svelte-8od9u6"),h(g,"class","svelte-8od9u6")},m(e,t){d(e,a,t),d(e,u,t),m(u,p),d(e,v,t),d(e,g,t),m(g,$),d(e,b,t),w&&w.m(e,t),d(e,y,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&L(p,t.status),e.error&&E!==(E=t.error.message+"")&&L($,E),t.dev&&t.error.stack?w?w.p(e,t):((w=ye(t)).c(),w.m(y.parentNode,y)):w&&(w.d(1),w=null)},i:t,o:t,d(e){e&&(i(a),i(u),i(v),i(g),i(b)),w&&w.d(e),e&&i(y)}}}function we(e,t,s){let{status:a,error:r}=t;return e.$set=(e=>{"status"in e&&s("status",a=e.status),"error"in e&&s("error",r=e.error)}),{status:a,error:r,dev:!1}}class Se extends s{constructor(t){super(),a(this,t,we,Ee,e,["status","error"])}}function _e(e){var t,s,a=[e.level1.props],r=e.level1.component;function n(e){let t={};for(var s=0;s<a.length;s+=1)t=D(t,a[s]);return{props:t}}if(r)var o=new r(n());return{c(){o&&o.$$.fragment.c(),t=A()},l(e){o&&o.$$.fragment.l(e),t=A()},m(e,a){o&&x(o,e,a),d(e,t,a),s=!0},p(e,s){var l=e.level1?z(a,[s.level1.props]):{};if(r!==(r=s.level1.component)){if(o){P();const e=o;S(e.$$.fragment,1,0,()=>{I(e,1)}),R()}r?((o=new r(n())).$$.fragment.c(),y(o.$$.fragment,1),x(o,t.parentNode,t)):o=null}else r&&o.$set(l)},i(e){s||(o&&y(o.$$.fragment,e),s=!0)},o(e){o&&S(o.$$.fragment,e),s=!1},d(e){e&&i(t),o&&I(o,e)}}}function xe(e){var t,s=new Se({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,a){x(s,e,a),t=!0},p(e,t){var a={};e.error&&(a.error=t.error),e.status&&(a.status=t.status),s.$set(a)},i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){S(s.$$.fragment,e),t=!1},d(e){I(s,e)}}}function Ie(e){var t,s,a,r,n=[xe,_e],o=[];function l(e,t){return t.error?0:1}return t=l(0,e),s=o[t]=n[t](e),{c(){s.c(),a=A()},l(e){s.l(e),a=A()},m(e,s){o[t].m(e,s),d(e,a,s),r=!0},p(e,r){var c=t;(t=l(0,r))===c?o[t].p(e,r):(P(),S(o[c],1,1,()=>{o[c]=null}),R(),(s=o[t])||(s=o[t]=n[t](r)).c(),y(s,1),s.m(a.parentNode,a))},i(e){r||(y(s),r=!0)},o(e){S(s),r=!1},d(e){o[t].d(e),e&&i(a)}}}function Ae(e){var t,s=[{segment:e.segments[0]},e.level0.props];let a={$$slots:{default:[Ie]},$$scope:{ctx:e}};for(var r=0;r<s.length;r+=1)a=D(a,s[r]);var n=new be({props:a});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,s){x(n,e,s),t=!0},p(e,t){var a=e.segments||e.level0?z(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(a.$$scope={changed:e,ctx:t}),n.$set(a)},i(e){t||(y(n.$$.fragment,e),t=!0)},o(e){S(n.$$.fragment,e),t=!1},d(e){I(n,e)}}}function Pe(e,t,s){let{stores:a,error:r,status:n,segments:o,level0:l,level1:c=null}=t;return T(q,a),e.$set=(e=>{"stores"in e&&s("stores",a=e.stores),"error"in e&&s("error",r=e.error),"status"in e&&s("status",n=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)}),{stores:a,error:r,status:n,segments:o,level0:l,level1:c}}class Re extends s{constructor(t){super(),a(this,t,Pe,Ae,e,["stores","error","status","segments","level0","level1"])}}const ke=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],Me=[{js:()=>import("./index.5714dcff.js"),css:["index.5714dcff.css","TextAnimation.726056da.css"]},{js:()=>import("./about.7aec0dcd.js"),css:["about.7aec0dcd.css"]},{js:()=>import("./index.15f68ffd.js"),css:["index.15f68ffd.css"]},{js:()=>import("./[slug].1a4b0b25.js"),css:["[slug].1a4b0b25.css"]}],Ne=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const je="undefined"!=typeof __SAPPER__&&__SAPPER__;let Le,De,ze,Te=!1,Ce=[],Oe="{}";const Ve={page:U({}),preloading:U(null),session:U(je&&je.session)};let Fe,Ue;Ve.session.subscribe(async e=>{if(Fe=e,!Te)return;Ue=!0;const t=We(new URL(location.href)),s=De={},{redirect:a,props:r,branch:n}=await et(t);s===De&&await Ze(a,n,r,t.page)});let qe,He=null;let Je,Be=1;const Ge="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},Ye={};function Ke(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,a=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(a):t[s]=a}),t}function We(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(je.baseUrl))return null;let t=e.pathname.slice(je.baseUrl.length);if(""===t&&(t="/"),!ke.some(e=>e.test(t)))for(let s=0;s<Ne.length;s+=1){const a=Ne[s],r=a.pattern.exec(t);if(r){const s=Ke(e.search),n=a.parts[a.parts.length-1],o=n.params?n.params(r):{},l={host:location.host,path:t,query:s,params:o};return{href:e.href,route:a,match:r,page:l}}}}function Xe(){return{x:pageXOffset,y:pageYOffset}}async function Qe(e,t,s,a){if(t)Je=t;else{const e=Xe();Ye[Je]=e,t=Je=++Be,Ye[Je]=s?e:{x:0,y:0}}Je=t,Le&&Ve.preloading.set(!0);const r=He&&He.href===e.href?He.promise:et(e);He=null;const n=De={},{redirect:o,props:l,branch:c}=await r;if(n===De&&(await Ze(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=Ye[t];if(a){const t=document.getElementById(a.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}Ye[Je]=e,e&&scrollTo(e.x,e.y)}}async function Ze(e,t,s,a){if(e)return function(e,t={replaceState:!1}){const s=We(new URL(e,document.baseURI));return s?(Ge[t.replaceState?"replaceState":"pushState"]({id:Je},"",e),Qe(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Ve.page.set(a),Ve.preloading.set(!1),Le)Le.$set(s);else{s.stores={page:{subscribe:Ve.page.subscribe},preloading:{subscribe:Ve.preloading.subscribe},session:Ve.session},s.level0={props:await ze};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)st(e.nextSibling);st(e),st(t)}Le=new Re({target:qe,props:s,hydrate:!0})}Ce=t,Oe=JSON.stringify(a.query),Te=!0,Ue=!1}async function et(e){const{route:t,page:s}=e,a=s.path.split("/").filter(Boolean);let r=null;const n={error:null,status:200,segments:[a[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{n.error="string"==typeof t?new Error(t):t,n.status=e}};let l;ze||(ze=je.preloaded[0]||H.call(o,{host:s.host,path:s.path,query:s.query,params:{}},Fe));let c=1;try{const r=JSON.stringify(s.query),i=t.pattern.exec(s.path);let f=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const h=a[l];if(function(e,t,s,a){if(a!==Oe)return!0;const r=Ce[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,h,i,r)&&(f=!0),n.segments[c]=a[l+1],!t)return{segment:h};const u=c++;if(!Ue&&!f&&Ce[l]&&Ce[l].part===t.i)return Ce[l];f=!1;const{default:d,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(tt);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Me[t.i]);let p;return p=Te||!je.preloaded[l+1]?m?await m.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},Fe):{}:je.preloaded[l+1],n[`level${u}`]={component:d,props:p,segment:h,match:i,part:t.i}}))}catch(e){n.error=e,n.status=500,l=[]}return{redirect:r,props:n,branch:l}}function tt(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const a=document.createElement("link");a.rel="stylesheet",a.href=t,a.onload=(()=>e()),a.onerror=s,document.head.appendChild(a)})}function st(e){e.parentNode.removeChild(e)}function at(e){const t=We(new URL(e,document.baseURI));if(t)return He&&e===He.href||function(e,t){He={href:e,promise:t}}(e,et(t)),He.promise}let rt;function nt(e){clearTimeout(rt),rt=setTimeout(()=>{ot(e)},20)}function ot(e){const t=ct(e.target);t&&"prefetch"===t.rel&&at(t.href)}function lt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=ct(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,a=String(s?t.href.baseVal:t.href);if(a===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const r=new URL(a);if(r.pathname===location.pathname&&r.search===location.search)return;const n=We(r);if(n){Qe(n,null,t.hasAttribute("sapper-noscroll"),r.hash),e.preventDefault(),Ge.pushState({id:Je},"",r.href)}}function ct(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function it(e){if(Ye[Je]=Xe(),e.state){const t=We(new URL(location.href));t?Qe(t,e.state.id):location.href=location.href}else(function(e){Je=e})(Be=Be+1),Ge.replaceState({id:Je},"",location.href)}!function(e){var t;"scrollRestoration"in Ge&&(Ge.scrollRestoration="manual"),t=e.target,qe=t,addEventListener("click",lt),addEventListener("popstate",it),addEventListener("touchstart",ot),addEventListener("mousemove",nt),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ge.replaceState({id:Be},"",t);const s=new URL(location.href);if(je.error)return function(e){const{host:t,pathname:s,search:a}=location,{session:r,preloaded:n,status:o,error:l}=je;ze||(ze=n&&n[0]),Ze(null,[],{error:l,status:o,session:r,level0:{props:ze},level1:{props:{status:o,error:l},component:Se},segments:n},{host:t,path:s,query:Ke(a),params:{}})}();const a=We(s);return a?Qe(a,Be,!0,e):void 0})}({target:document.querySelector("#sapper")});
