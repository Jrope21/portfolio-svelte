import{s as e,n as t,S as s,i as a,e as r,a as n,t as o,c as l,b as c,d as i,f as u,g as h,l as f,h as d,j as m,k as p,m as v,o as g,p as $,q as E,r as w,u as b,v as x,w as S,x as y,y as k,z as _,A,B as q,C as P,D as M,E as I,F as R,G as N,H as j,I as L,J as C,K as D,L as O}from"./index.c479666d.js";import{f as T,a as V}from"./index.f4e27f23.js";import{T as F}from"./TextAnimation.7189b7ad.js";const H=[];function U(s,a=t){let r;const n=[];function o(t){if(e(s,t)&&(s=t,r)){const e=!H.length;for(let e=0;e<n.length;e+=1){const t=n[e];t[1](),H.push(t,s)}if(e){for(let e=0;e<H.length;e+=2)H[e][0](H[e+1]);H.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(e,l=t){const c=[e,l];return n.push(c),1===n.length&&(r=a(o)||t),e(s),()=>{const e=n.indexOf(c);-1!==e&&n.splice(e,1),0===n.length&&(r(),r=null)}}}}const J={},z=()=>({});function Y(e){var s,a,p,v,g,$,E,w,b,x,S;return{c(){s=r("input"),a=n(),p=r("div"),v=n(),g=r("label"),$=r("span"),E=o("Navigation"),w=n(),b=r("span"),x=r("span"),this.h()},l(e){s=l(e,"INPUT",{id:!0,type:!0,class:!0},!1),c(s).forEach(i),a=u(e,"\n"),p=l(e,"DIV",{class:!0},!1),c(p).forEach(i),v=u(e,"\n"),g=l(e,"LABEL",{id:!0,for:!0,class:!0},!1);var t=c(g);$=l(t,"SPAN",{class:!0},!1);var r=c($);E=u(r,"Navigation"),r.forEach(i),w=u(t,"\n    "),b=l(t,"SPAN",{class:!0,title:!0},!1);var n=c(b);x=l(n,"SPAN",{class:!0},!1),c(x).forEach(i),n.forEach(i),t.forEach(i),this.h()},h(){h(s,"id","toggle"),h(s,"type","checkbox"),h(s,"class","hide subnav-toggle hide-for-xlg svelte-mu5x5a"),h(p,"class","background svelte-mu5x5a"),h($,"class","show-for-sr svelte-mu5x5a"),h(x,"class","middle svelte-mu5x5a"),h(b,"class","hamburger svelte-mu5x5a"),h(b,"title","Navigation"),h(g,"id","nav-label"),h(g,"for","toggle"),h(g,"class","hide-for-xlg svelte-mu5x5a"),S=f(p,"click",e.click_handler)},m(t,r){d(t,s,r),d(t,a,r),d(t,p,r),d(t,v,r),d(t,g,r),m(g,$),m($,E),m(g,w),m(g,b),m(b,x),e.span2_binding(b)},p:t,i:t,o:t,d(t){t&&(i(s),i(a),i(p),i(v),i(g)),e.span2_binding(null),S()}}}function B(e,t,s){let{toggle:a,hamburger:r}=t;return e.$set=(e=>{"toggle"in e&&s("toggle",a=e.toggle),"hamburger"in e&&s("hamburger",r=e.hamburger)}),{toggle:a,hamburger:r,click_handler:function(t){p(e,t)},span2_binding:function(e){v[e?"unshift":"push"](()=>{s("hamburger",r=e)})}}}class G extends s{constructor(t){super(),a(this,t,B,Y,e,["toggle","hamburger"])}}const K=()=>({}),W=()=>({});function X(e){var t,s,a,o,p,v,k,_,A,q,P,M;const I=e.$$slots.header,R=g(I,e,W),N=e.$$slots.default,j=g(N,e,null);return{c(){t=r("div"),s=r("div"),a=n(),o=r("div"),R&&R.c(),p=n(),j&&j.c(),this.h()},l(e){t=l(e,"DIV",{class:!0},!1);var r=c(t);s=l(r,"DIV",{class:!0},!1),c(s).forEach(i),a=u(r,"\n\t"),o=l(r,"DIV",{class:!0},!1);var n=c(o);R&&R.l(n),p=u(n,"\n\t\t"),j&&j.l(n),n.forEach(i),r.forEach(i),this.h()},h(){h(s,"class","modal-background svelte-fsnz0w"),h(o,"class","modal svelte-fsnz0w"),h(t,"class",_="center-all modal-container "+(e.showModal?"show-modal":"")+" svelte-fsnz0w"),M=f(s,"click",e.click_handler)},m(e,r){d(e,t,r),m(t,s),m(t,a),m(t,o),R&&R.m(o,null),m(o,p),j&&j.m(o,null),P=!0},p(e,s){R&&R.p&&e.$$scope&&R.p($(I,s,e,K),E(I,s,W)),j&&j.p&&e.$$scope&&j.p($(N,s,e,null),E(N,s,null)),P&&!e.showModal||_===(_="center-all modal-container "+(s.showModal?"show-modal":"")+" svelte-fsnz0w")||h(t,"class",_)},i(e){P||(w(R,e),w(j,e),b(()=>{k&&k.end(1),v||(v=x(o,T,{y:-20,duration:450,delay:200})),v.start()}),b(()=>{q&&q.end(1),A||(A=x(t,V,{})),A.start()}),P=!0)},o(e){S(R,e),S(j,e),v&&v.invalidate(),k=y(o,T,{y:-20,duration:450}),A&&A.invalidate(),q=y(t,V,{}),P=!1},d(e){e&&i(t),R&&R.d(e),j&&j.d(e),e&&(k&&k.end(),q&&q.end()),M()}}}function Q(e,t,s){let{showModal:a}=t,{$$slots:r={},$$scope:n}=t;return e.$set=(e=>{"showModal"in e&&s("showModal",a=e.showModal),"$$scope"in e&&s("$$scope",n=e.$$scope)}),{showModal:a,click_handler:function(t){p(e,t)},$$slots:r,$$scope:n}}class Z extends s{constructor(t){super(),a(this,t,Q,X,e,["showModal"])}}function ee(e){var s,a,o,f,p,v,g;return{c(){s=r("div"),a=r("div"),o=n(),f=r("div"),this.h()},l(e){s=l(e,"DIV",{id:!0,class:!0},!1);var t=c(s);a=l(t,"DIV",{id:!0,class:!0},!1),c(a).forEach(i),o=u(t,"\n  "),f=l(t,"DIV",{id:!0,class:!0},!1),c(f).forEach(i),t.forEach(i),this.h()},h(){h(a,"id","box"),h(a,"class","svelte-12rrru0"),h(f,"id","hill"),h(f,"class","svelte-12rrru0"),h(s,"id","loader"),h(s,"class","svelte-12rrru0")},m(e,t){d(e,s,t),m(s,a),m(s,o),m(s,f),g=!0},p:t,i(e){g||(b(()=>{v&&v.end(1),p||(p=x(s,V,{})),p.start()}),g=!0)},o(e){p&&p.invalidate(),v=y(s,V,{}),g=!1},d(e){e&&(i(s),v&&v.end())}}}class te extends s{constructor(t){super(),a(this,t,null,ee,e,[])}}function se(e){var t,s=new Z({props:{showModal:e.showModal,$$slots:{default:[oe]},$$scope:{ctx:e}}});return s.$on("click",e.click_handler),{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,a){k(s,e,a),t=!0},p(e,t){var a={};e.showModal&&(a.showModal=t.showModal),(e.$$scope||e.formState||e.fieldInputs)&&(a.$$scope={changed:e,ctx:t}),s.$set(a)},i(e){t||(w(s.$$.fragment,e),t=!0)},o(e){S(s.$$.fragment,e),t=!1},d(e){_(s,e)}}}function ae(e){var t,s=new te({});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,a){k(s,e,a),t=!0},i(e){t||(w(s.$$.fragment,e),t=!0)},o(e){S(s.$$.fragment,e),t=!1},d(e){_(s,e)}}}function re(e){var t,s,a,n,f;return{c(){t=r("h2"),s=o("SUCCESS"),this.h()},l(e){t=l(e,"H2",{class:!0},!1);var a=c(t);s=u(a,"SUCCESS"),a.forEach(i),this.h()},h(){h(t,"class","success-message svelte-nl8v9q")},m(e,a){d(e,t,a),m(t,s),f=!0},i(e){f||(b(()=>{n&&n.end(1),a||(a=x(t,fly,{y:20,duration:500,delay:200})),a.start()}),f=!0)},o(e){a&&a.invalidate(),n=y(t,fly,{y:-20,duration:500,delay:0}),f=!1},d(e){e&&(i(t),n&&n.end())}}}function ne(e){var t,s,a,n,f;return{c(){t=r("h2"),s=o("ERROR"),this.h()},l(e){t=l(e,"H2",{class:!0},!1);var a=c(t);s=u(a,"ERROR"),a.forEach(i),this.h()},h(){h(t,"class","success-message svelte-nl8v9q")},m(e,a){d(e,t,a),m(t,s),f=!0},i(e){f||(b(()=>{n&&n.end(1),a||(a=x(t,fly,{y:20,duration:500,delay:200})),a.start()}),f=!0)},o(e){a&&a.invalidate(),n=y(t,fly,{y:-20,duration:500,delay:0}),f=!1},d(e){e&&(i(t),n&&n.end())}}}function oe(e){var t,s,a,p,v,g,$,E,b,x,y,k,_,A,I,R,N,j,L,C,D,O,T,V,F,H,U,J,z,Y,B,G,K,W,X,Q,Z=e.formState.submittingForm&&ae(),ee=e.formState.formSuccess&&re(),te=e.formState.formError&&ne();return{c(){t=r("div"),s=r("div"),a=r("div"),p=r("h2"),v=o("Get In Touch"),g=n(),$=r("p"),E=o("Hi There! I’m Josh, \n                            I bring projects to life by innovating across every aspect of the customer journey. \n                            Send me a message if you are looking to hire a developer, collaborate on a project, or have a potential business opportunity."),x=n(),y=r("form"),k=r("label"),_=r("span"),A=o("Name"),I=n(),R=r("input"),N=n(),j=r("label"),L=r("span"),C=o("Email"),D=n(),O=r("input"),T=n(),V=r("label"),F=r("span"),H=o("Message"),U=n(),J=r("textarea"),z=n(),Y=r("input"),G=n(),Z&&Z.c(),K=n(),ee&&ee.c(),W=n(),te&&te.c(),this.h()},l(e){t=l(e,"DIV",{class:!0},!1);var r=c(t);s=l(r,"DIV",{class:!0},!1);var n=c(s);a=l(n,"DIV",{class:!0},!1);var o=c(a);p=l(o,"H2",{class:!0},!1);var h=c(p);v=u(h,"Get In Touch"),h.forEach(i),g=u(o,"\n                        "),$=l(o,"P",{class:!0},!1);var f=c($);E=u(f,"Hi There! I’m Josh, \n                            I bring projects to life by innovating across every aspect of the customer journey. \n                            Send me a message if you are looking to hire a developer, collaborate on a project, or have a potential business opportunity."),f.forEach(i),o.forEach(i),x=u(n,"\n                    "),y=l(n,"FORM",{class:!0},!1);var d=c(y);k=l(d,"LABEL",{class:!0},!1);var m=c(k);_=l(m,"SPAN",{class:!0},!1);var w=c(_);A=u(w,"Name"),w.forEach(i),I=u(m,"\n                            "),R=l(m,"INPUT",{name:!0,type:!0,class:!0},!1),c(R).forEach(i),m.forEach(i),N=u(d,"\n                        "),j=l(d,"LABEL",{class:!0},!1);var b=c(j);L=l(b,"SPAN",{class:!0},!1);var S=c(L);C=u(S,"Email"),S.forEach(i),D=u(b,"\n                            "),O=l(b,"INPUT",{required:!0,name:!0,type:!0,class:!0},!1),c(O).forEach(i),b.forEach(i),T=u(d,"\n                        "),V=l(d,"LABEL",{class:!0},!1);var q=c(V);F=l(q,"SPAN",{class:!0},!1);var P=c(F);H=u(P,"Message"),P.forEach(i),U=u(q,"\n                            "),J=l(q,"TEXTAREA",{name:!0,rows:!0,type:!0,class:!0},!1),c(J).forEach(i),q.forEach(i),z=u(d,"\n                        "),Y=l(d,"INPUT",{type:!0,value:!0,class:!0},!1),c(Y).forEach(i),d.forEach(i),G=u(n,"\n\n                "),Z&&Z.l(n),K=u(n,"\n                "),ee&&ee.l(n),W=u(n,"\n                "),te&&te.l(n),n.forEach(i),r.forEach(i),this.h()},h(){h(p,"class","svelte-nl8v9q"),h($,"class","svelte-nl8v9q"),h(a,"class",b="text-container "+(e.formState.hideFields?"hide-content":"")+" "+(e.formState.hideFields?"hide-content":"")+" svelte-nl8v9q"),h(_,"class","svelte-nl8v9q"),h(R,"name","name"),h(R,"type","text"),h(R,"class","svelte-nl8v9q"),h(k,"class","svelte-nl8v9q"),h(L,"class","svelte-nl8v9q"),O.required=!0,h(O,"name","email"),h(O,"type","email"),h(O,"class","svelte-nl8v9q"),h(j,"class","svelte-nl8v9q"),h(F,"class","svelte-nl8v9q"),h(J,"name","message"),h(J,"rows","6"),h(J,"type","textarea"),h(J,"class","svelte-nl8v9q"),h(V,"class","svelte-nl8v9q"),h(Y,"type","submit"),Y.value="Send Message",h(Y,"class","svelte-nl8v9q"),h(y,"class",B="gform "+(e.formState.hideFields?"hide-content":"")+"\n                        "+(e.formState.formSuccess?"hide-content":"")+" svelte-nl8v9q"),h(s,"class","flex-container svelte-nl8v9q"),h(t,"class","form-container svelte-nl8v9q"),Q=f(y,"submit",M(e.handleSubmit))},m(r,n){d(r,t,n),m(t,s),m(s,a),m(a,p),m(p,v),m(a,g),m(a,$),m($,E),m(s,x),m(s,y),m(y,k),m(k,_),m(_,A),m(k,I),m(k,R),e.input0_binding(R),m(y,N),m(y,j),m(j,L),m(L,C),m(j,D),m(j,O),e.input1_binding(O),m(y,T),m(y,V),m(V,F),m(F,H),m(V,U),m(V,J),e.textarea_binding(J),m(y,z),m(y,Y),m(s,G),Z&&Z.m(s,null),m(s,K),ee&&ee.m(s,null),m(s,W),te&&te.m(s,null),X=!0},p(e,t){X&&!e.formState||b===(b="text-container "+(t.formState.hideFields?"hide-content":"")+" "+(t.formState.hideFields?"hide-content":"")+" svelte-nl8v9q")||h(a,"class",b),X&&!e.formState||B===(B="gform "+(t.formState.hideFields?"hide-content":"")+"\n                        "+(t.formState.formSuccess?"hide-content":"")+" svelte-nl8v9q")||h(y,"class",B),t.formState.submittingForm?Z?w(Z,1):((Z=ae()).c(),w(Z,1),Z.m(s,K)):Z&&(q(),S(Z,1,1,()=>{Z=null}),P()),t.formState.formSuccess?ee?w(ee,1):((ee=re()).c(),w(ee,1),ee.m(s,W)):ee&&(q(),S(ee,1,1,()=>{ee=null}),P()),t.formState.formError?te?w(te,1):((te=ne()).c(),w(te,1),te.m(s,null)):te&&(q(),S(te,1,1,()=>{te=null}),P())},i(e){X||(w(Z),w(ee),w(te),X=!0)},o(e){S(Z),S(ee),S(te),X=!1},d(s){s&&i(t),e.input0_binding(null),e.input1_binding(null),e.textarea_binding(null),Z&&Z.d(),ee&&ee.d(),te&&te.d(),Q()}}}function le(e){var t,s,a=e.showModal&&!1===ce&&se(e);return{c(){a&&a.c(),t=A()},l(e){a&&a.l(e),t=A()},m(e,r){a&&a.m(e,r),d(e,t,r),s=!0},p(e,s){s.showModal&&!1===ce?a?(a.p(e,s),w(a,1)):((a=se(s)).c(),w(a,1),a.m(t.parentNode,t)):a&&(q(),S(a,1,1,()=>{a=null}),P())},i(e){s||(w(a),s=!0)},o(e){S(a),s=!1},d(e){a&&a.d(e),e&&i(t)}}}let ce=!1;function ie(e,t,s){let{showModal:a}=t,r=[],n={submittingForm:!1,formSuccess:!1,formError:!1,hideFields:!1};function o(e){setTimeout(()=>{const e=Object.entries(n);for(const[t,a]of e)n[t]=!1,s("formState",n);r.forEach(e=>{e.value=""})},e)}return e.$set=(e=>{"showModal"in e&&s("showModal",a=e.showModal)}),{showModal:a,fieldInputs:r,formState:n,handleSubmit:async function(e){n.submittingForm=!0,s("formState",n),n.hideFields=!0,s("formState",n),n.formSuccess=!1,s("formState",n);const t={method:"POST",body:function(e,t){let s=new FormData;return t.forEach(t=>{s.append(`${t}`,`${e[t].value}`)}),s}(e.target,["name","email","message"])};try{const a=await fetch("https://script.google.com/macros/s/AKfycbyfIRXEeqnLPVq4s2hG_b35lmcm2FCn768QWC9Wfg/exec",t);await a.json(),n.submittingForm=!1,s("formState",n),n.formSuccess=!0,s("formState",n),o(1600)}catch(e){n.submittingForm=!1,s("formState",n),n.formError=!0,s("formState",n),o(1600)}},click_handler:function(t){p(e,t)},input0_binding:function(e){v[e?"unshift":"push"](()=>{r[0]=e,s("fieldInputs",r)})},input1_binding:function(e){v[e?"unshift":"push"](()=>{r[1]=e,s("fieldInputs",r)})},textarea_binding:function(e){v[e?"unshift":"push"](()=>{r[2]=e,s("fieldInputs",r)})}}}class ue extends s{constructor(t){super(),a(this,t,ie,le,e,["showModal"])}}const{window:he}=j;function fe(e){var t,s,a,p,v,g,$,E,x,y,A,q,P,M,N,j,L,C,D,O,T,V,F,H,U,J,z,Y,B,K,W,X,Q,Z,ee,te,se,ae,re,ne,oe,le,ce=!1,ie=()=>{ce=!1};b(e.onwindowscroll);var fe=new G({props:{toggle:de}});e.hamburger_1_binding(fe),fe.$on("click",e.togglerOff);var me=new ue({props:{showModal:e.showModal}});return me.$on("click",e.click_handler_1),{c(){s=r("header"),a=r("nav"),p=r("a"),v=r("p"),g=r("span"),$=o("<h1>"),E=o("Hi There"),x=r("span"),y=o("!"),A=r("span"),q=o("</h1>"),P=n(),fe.$$.fragment.c(),M=n(),N=r("ul"),j=r("li"),L=r("span"),C=n(),D=r("li"),O=r("a"),T=o("Home"),F=n(),H=r("li"),U=r("a"),J=o("About"),Y=n(),B=r("li"),K=r("a"),W=o("Experience"),Q=n(),Z=r("li"),ee=r("a"),te=o("Contact"),ne=n(),me.$$.fragment.c(),this.h()},l(e){s=l(e,"HEADER",{class:!0},!1);var t=c(s);a=l(t,"NAV",{class:!0},!1);var r=c(a);p=l(r,"A",{href:!0,class:!0},!1);var n=c(p);v=l(n,"P",{class:!0},!1);var o=c(v);g=l(o,"SPAN",{class:!0},!1);var h=c(g);$=u(h,"<h1>"),h.forEach(i),E=u(o,"Hi There"),x=l(o,"SPAN",{class:!0},!1);var f=c(x);y=u(f,"!"),f.forEach(i),A=l(o,"SPAN",{class:!0},!1);var d=c(A);q=u(d,"</h1>"),d.forEach(i),o.forEach(i),n.forEach(i),P=u(r,"\n        "),fe.$$.fragment.l(r),M=u(r,"\n        "),N=l(r,"UL",{class:!0},!1);var m=c(N);j=l(m,"LI",{class:!0},!1);var w=c(j);L=l(w,"SPAN",{class:!0},!1),c(L).forEach(i),w.forEach(i),C=u(m,"\n            "),D=l(m,"LI",{class:!0},!1);var b=c(D);O=l(b,"A",{rel:!0,href:!0,class:!0},!1);var S=c(O);T=u(S,"Home"),S.forEach(i),b.forEach(i),F=u(m,"\n            "),H=l(m,"LI",{class:!0},!1);var k=c(H);U=l(k,"A",{rel:!0,href:!0,class:!0},!1);var _=c(U);J=u(_,"About"),_.forEach(i),k.forEach(i),Y=u(m,"\n            "),B=l(m,"LI",{class:!0},!1);var I=c(B);K=l(I,"A",{href:!0,class:!0},!1);var R=c(K);W=u(R,"Experience"),R.forEach(i),I.forEach(i),Q=u(m,"\n            "),Z=l(m,"LI",{class:!0},!1);var V=c(Z);ee=l(V,"A",{href:!0,class:!0},!1);var z=c(ee);te=u(z,"Contact"),z.forEach(i),V.forEach(i),m.forEach(i),r.forEach(i),t.forEach(i),ne=u(e,"\n\n"),me.$$.fragment.l(e),this.h()},h(){h(g,"class","code svelte-1u03qux"),h(x,"class","logo-hover svelte-1u03qux"),h(A,"class","code svelte-1u03qux"),h(v,"class","svelte-1u03qux"),h(p,"href","/"),h(p,"class","logo svelte-1u03qux"),h(L,"class","close svelte-1u03qux"),h(j,"class","close-container svelte-1u03qux"),h(O,"rel","prefetch"),h(O,"href","/"),h(O,"class","svelte-1u03qux"),h(D,"class",V=I(void 0===e.segment?"selected":"")+" svelte-1u03qux"),h(U,"rel","prefetch"),h(U,"href","/about"),h(U,"class","svelte-1u03qux"),h(H,"class",z=I("about"===e.segment?"selected":"")+" svelte-1u03qux"),h(K,"href","/experience"),h(K,"class","svelte-1u03qux"),h(B,"class",X=I("experience"===e.segment?"selected":"")+" svelte-1u03qux"),h(ee,"href","javascript:void(0)"),h(ee,"class","svelte-1u03qux"),h(Z,"class",se=(e.showModal?"selected":"")+" open-modal svelte-1u03qux"),h(N,"class",ae="navigation "+(e.showModal?"modal-active":"")+" svelte-1u03qux"),h(a,"class",re=I(e.reduceNavSize?"scrolled container":"container")+" svelte-1u03qux"),h(s,"class","svelte-1u03qux"),le=[f(he,"scroll",()=>{ce=!0,clearTimeout(t),t=setTimeout(ie,100),e.onwindowscroll()}),f(p,"click",e.click_handler),f(j,"click",e.togglerOff),f(O,"click",e.setActiveNavOnClick),f(U,"click",e.setActiveNavOnClick),f(K,"click",e.setActiveNavOnClick),f(ee,"click",e.openModal)]},m(e,t){d(e,s,t),m(s,a),m(a,p),m(p,v),m(v,g),m(g,$),m(v,E),m(v,x),m(x,y),m(v,A),m(A,q),m(a,P),k(fe,a,null),m(a,M),m(a,N),m(N,j),m(j,L),m(N,C),m(N,D),m(D,O),m(O,T),m(N,F),m(N,H),m(H,U),m(U,J),m(N,Y),m(N,B),m(B,K),m(K,W),m(N,Q),m(N,Z),m(Z,ee),m(ee,te),d(e,ne,t),k(me,e,t),oe=!0},p(e,s){e.windowY&&!ce&&(ce=!0,clearTimeout(t),scrollTo(he.pageXOffset,s.windowY),t=setTimeout(ie,100));var r={};e.toggle&&(r.toggle=de),fe.$set(r),oe&&!e.segment||V===(V=I(void 0===s.segment?"selected":"")+" svelte-1u03qux")||h(D,"class",V),oe&&!e.segment||z===(z=I("about"===s.segment?"selected":"")+" svelte-1u03qux")||h(H,"class",z),oe&&!e.segment||X===(X=I("experience"===s.segment?"selected":"")+" svelte-1u03qux")||h(B,"class",X),oe&&!e.showModal||se===(se=(s.showModal?"selected":"")+" open-modal svelte-1u03qux")||h(Z,"class",se),oe&&!e.showModal||ae===(ae="navigation "+(s.showModal?"modal-active":"")+" svelte-1u03qux")||h(N,"class",ae),oe&&!e.reduceNavSize||re===(re=I(s.reduceNavSize?"scrolled container":"container")+" svelte-1u03qux")||h(a,"class",re);var n={};e.showModal&&(n.showModal=s.showModal),me.$set(n)},i(e){oe||(w(fe.$$.fragment,e),w(me.$$.fragment,e),oe=!0)},o(e){S(fe.$$.fragment,e),S(me.$$.fragment,e),oe=!1},d(t){t&&i(s),e.hamburger_1_binding(null),_(fe),t&&i(ne),_(me,t),R(le)}}}let de=!1;function me(e,t,s){let a,r,n,o,{segment:l}=t,c=!1,i={home:!1,about:!1,experience:!1};function u(){window.innerWidth<1023&&n&&n.$$.ctx.hamburger.click()}function h(){let e=Object.entries(i);for(let[t,a]of e)i[t]=!1,s("activeNavigation",i)}return N(()=>{!function(){let e=window.location.pathname;"/"===e?(i.home=!0,s("activeNavigation",i)):"/about"===e?(i.about=!0,s("activeNavigation",i)):"/experience"===e&&(i.experience=!0,s("activeNavigation",i))}()}),e.$set=(e=>{"segment"in e&&s("segment",l=e.segment)}),e.$$.update=((e={windowY:1})=>{e.windowY&&(o=function(e){s("reduceNavSize",c=e>75)}(r))}),{segment:l,showModal:a,windowY:r,hamburger:n,reduceNavSize:c,activeNavigation:i,togglerOff:u,resetActiveNav:h,setActiveNavOnClick:function(){let e=Object.entries(i),t=`${this.innerHTML.toLowerCase()}`;for(let[a,r]of e)a===t?(i[a]=!0,s("activeNavigation",i)):(i[a]=!1,s("activeNavigation",i));u()},openModal:function(){s("showModal",a=!0)},onwindowscroll:function(){r=he.pageYOffset,s("windowY",r)},click_handler:function(){h(),i.home=!0,s("activeNavigation",i)},hamburger_1_binding:function(e){v[e?"unshift":"push"](()=>{s("hamburger",n=e)})},click_handler_1:function(){const e=a=!1;return s("showModal",a),e}}}class pe extends s{constructor(t){super(),a(this,t,me,fe,e,["segment"])}}function ve(e){var t,s,a,p,v,g,$,E,b,x,y,A,q,P,M,I,R,N,j,L,C,D,O,T,V,H,U,J,z,Y,B,G,K,W,X,Q,Z,ee,te,se,ae,re,ne,oe,le,ce,ie,he=(new Date).getFullYear()+"",fe=new F({props:{text:"Joshua.micah.roper@gmail.com"}}),de=new F({props:{text:"Download PDF"}}),me=new ue({props:{showModal:e.showModal}});return me.$on("click",e.click_handler),{c(){t=r("script"),s=n(),a=r("footer"),p=r("div"),v=r("div"),g=r("p"),$=o("Feel free to shoot me an "),E=r("a"),b=o("email"),x=o(" & connect through "),y=r("a"),A=o("social."),q=n(),P=r("a"),M=o("Reach out!"),I=n(),R=r("div"),N=r("div"),j=r("p"),L=o("Get In Touch!"),C=n(),D=r("a"),fe.$$.fragment.c(),O=n(),T=r("div"),V=r("p"),H=o("View Resume"),U=n(),J=r("a"),de.$$.fragment.c(),z=n(),Y=r("div"),B=r("p"),G=o("@ "),K=o(he),W=o(" Joshua Roper Development"),X=n(),Q=r("div"),Z=r("a"),ee=r("i"),te=n(),se=r("a"),ae=r("i"),re=n(),ne=r("a"),oe=r("i"),le=n(),me.$$.fragment.c(),this.h()},l(e){t=l(e,"SCRIPT",{src:!0,class:!0},!1),c(t).forEach(i),s=u(e,"\n\n"),a=l(e,"FOOTER",{class:!0},!1);var r=c(a);p=l(r,"DIV",{class:!0},!1);var n=c(p);v=l(n,"DIV",{class:!0},!1);var o=c(v);g=l(o,"P",{class:!0},!1);var h=c(g);$=u(h,"Feel free to shoot me an "),E=l(h,"A",{href:!0,class:!0},!1);var f=c(E);b=u(f,"email"),f.forEach(i),x=u(h," & connect through "),y=l(h,"A",{href:!0,target:!0,class:!0},!1);var d=c(y);A=u(d,"social."),d.forEach(i),h.forEach(i),q=u(o,"\n            "),P=l(o,"A",{class:!0,href:!0},!1);var m=c(P);M=u(m,"Reach out!"),m.forEach(i),o.forEach(i),I=u(n,"\n        "),R=l(n,"DIV",{class:!0},!1);var w=c(R);N=l(w,"DIV",{class:!0},!1);var S=c(N);j=l(S,"P",{class:!0},!1);var k=c(j);L=u(k,"Get In Touch!"),k.forEach(i),C=u(S,"\n                "),D=l(S,"A",{href:!0,class:!0},!1);var _=c(D);fe.$$.fragment.l(_),_.forEach(i),S.forEach(i),O=u(w,"\n            "),T=l(w,"DIV",{class:!0},!1);var F=c(T);V=l(F,"P",{class:!0},!1);var ce=c(V);H=u(ce,"View Resume"),ce.forEach(i),U=u(F,"\n                "),J=l(F,"A",{href:!0,download:!0,class:!0},!1);var ie=c(J);de.$$.fragment.l(ie),ie.forEach(i),F.forEach(i),w.forEach(i),n.forEach(i),z=u(r,"\n    "),Y=l(r,"DIV",{class:!0},!1);var ue=c(Y);B=l(ue,"P",{class:!0},!1);var pe=c(B);G=u(pe,"@ "),K=u(pe,he),W=u(pe," Joshua Roper Development"),pe.forEach(i),X=u(ue,"\n        "),Q=l(ue,"DIV",{class:!0},!1);var ve=c(Q);Z=l(ve,"A",{href:!0,"aria-label":!0,target:!0,class:!0},!1);var ge=c(Z);ee=l(ge,"I",{class:!0},!1),c(ee).forEach(i),ge.forEach(i),te=u(ve,"\n            "),se=l(ve,"A",{href:!0,"aria-label":!0,target:!0,class:!0},!1);var $e=c(se);ae=l($e,"I",{class:!0},!1),c(ae).forEach(i),$e.forEach(i),re=u(ve,"\n            "),ne=l(ve,"A",{href:!0,"aria-label":!0,target:!0,class:!0},!1);var Ee=c(ne);oe=l(Ee,"I",{class:!0},!1),c(oe).forEach(i),Ee.forEach(i),ve.forEach(i),ue.forEach(i),r.forEach(i),le=u(e,"\n\n"),me.$$.fragment.l(e),this.h()},h(){h(t,"src","https://kit.fontawesome.com/1309990c29.js"),h(t,"class","svelte-a2ulkx"),h(E,"href","mailto:joshua.micah.roper@gmail.com"),h(E,"class","svelte-a2ulkx"),h(y,"href","https://www.linkedin.com/in/jr-dev"),h(y,"target","blank"),h(y,"class","svelte-a2ulkx"),h(g,"class","headline svelte-a2ulkx"),h(P,"class","open-modal svelte-a2ulkx"),h(P,"href","javascript:void(0)"),h(v,"class","left svelte-a2ulkx"),h(j,"class","title svelte-a2ulkx"),h(D,"href","mailto:joshua.micah.roper@gmail.com"),h(D,"class","svelte-a2ulkx"),h(N,"class","text-cta svelte-a2ulkx"),h(V,"class","title svelte-a2ulkx"),h(J,"href","./images/resume-joshua-roper.pdf"),h(J,"download",""),h(J,"class","svelte-a2ulkx"),h(T,"class","text-cta svelte-a2ulkx"),h(R,"class","right svelte-a2ulkx"),h(p,"class","container footer-container svelte-a2ulkx"),h(B,"class","copyright svelte-a2ulkx"),h(ee,"class","fab fa-github svelte-a2ulkx"),h(Z,"href","https://www.github.com/Jrope21"),h(Z,"aria-label","link to Joshua Roper's GitHub account"),h(Z,"target","blank"),h(Z,"class","svelte-a2ulkx"),h(ae,"class","fab fa-linkedin svelte-a2ulkx"),h(se,"href","https://www.linkedin.com/in/JR-dev"),h(se,"aria-label","link to Joshua Roper's LinkedIn account"),h(se,"target","blank"),h(se,"class","svelte-a2ulkx"),h(oe,"class","fas fa-envelope svelte-a2ulkx"),h(ne,"href","mailto:joshua.micah.roper@gmail.com"),h(ne,"aria-label","link to send Joshua Roper an email"),h(ne,"target","blank"),h(ne,"class","svelte-a2ulkx"),h(Q,"class","social-icons svelte-a2ulkx"),h(Y,"class","bottom-row container svelte-a2ulkx"),h(a,"class","svelte-a2ulkx"),ie=f(P,"click",e.openModal)},m(e,r){m(document.head,t),d(e,s,r),d(e,a,r),m(a,p),m(p,v),m(v,g),m(g,$),m(g,E),m(E,b),m(g,x),m(g,y),m(y,A),m(v,q),m(v,P),m(P,M),m(p,I),m(p,R),m(R,N),m(N,j),m(j,L),m(N,C),m(N,D),k(fe,D,null),m(R,O),m(R,T),m(T,V),m(V,H),m(T,U),m(T,J),k(de,J,null),m(a,z),m(a,Y),m(Y,B),m(B,G),m(B,K),m(B,W),m(Y,X),m(Y,Q),m(Q,Z),m(Z,ee),m(Q,te),m(Q,se),m(se,ae),m(Q,re),m(Q,ne),m(ne,oe),d(e,le,r),k(me,e,r),ce=!0},p(e,t){var s={};e.showModal&&(s.showModal=t.showModal),me.$set(s)},i(e){ce||(w(fe.$$.fragment,e),w(de.$$.fragment,e),w(me.$$.fragment,e),ce=!0)},o(e){S(fe.$$.fragment,e),S(de.$$.fragment,e),S(me.$$.fragment,e),ce=!1},d(e){i(t),e&&(i(s),i(a)),_(fe),_(de),e&&i(le),_(me,e),ie()}}}function ge(e,t,s){let a;return{showModal:a,openModal:function(){s("showModal",a=!0)},click_handler:function(){const e=a=!1;return s("showModal",a),e}}}class $e extends s{constructor(t){super(),a(this,t,ge,ve,e,[])}}function Ee(e){var t,s,a,o,f,m,p=new pe({props:{segment:e.segment}});const v=e.$$slots.default,b=g(v,e,null);var x=new $e({});return{c(){p.$$.fragment.c(),t=n(),s=r("div"),a=n(),o=r("main"),b&&b.c(),f=n(),x.$$.fragment.c(),this.h()},l(e){p.$$.fragment.l(e),t=u(e,"\n"),s=l(e,"DIV",{class:!0},!1),c(s).forEach(i),a=u(e,"\n"),o=l(e,"MAIN",{},!1);var r=c(o);b&&b.l(r),r.forEach(i),f=u(e,"\n"),x.$$.fragment.l(e),this.h()},h(){h(s,"class","background")},m(e,r){k(p,e,r),d(e,t,r),d(e,s,r),d(e,a,r),d(e,o,r),b&&b.m(o,null),d(e,f,r),k(x,e,r),m=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),p.$set(s),b&&b.p&&e.$$scope&&b.p($(v,t,e,null),E(v,t,null))},i(e){m||(w(p.$$.fragment,e),w(b,e),w(x.$$.fragment,e),m=!0)},o(e){S(p.$$.fragment,e),S(b,e),S(x.$$.fragment,e),m=!1},d(e){_(p,e),e&&(i(t),i(s),i(a),i(o)),b&&b.d(e),e&&i(f),_(x,e)}}}function we(e,t,s){let{segment:a}=t,{$$slots:r={},$$scope:n}=t;return e.$set=(e=>{"segment"in e&&s("segment",a=e.segment),"$$scope"in e&&s("$$scope",n=e.$$scope)}),{segment:a,$$slots:r,$$scope:n}}class be extends s{constructor(t){super(),a(this,t,we,Ee,e,["segment"])}}function xe(e){var t,s,a=e.error.stack+"";return{c(){t=r("pre"),s=o(a)},l(e){t=l(e,"PRE",{},!1);var r=c(t);s=u(r,a),r.forEach(i)},m(e,a){d(e,t,a),m(t,s)},p(e,t){e.error&&a!==(a=t.error.stack+"")&&L(s,a)},d(e){e&&i(t)}}}function Se(e){var s,a,f,p,v,g,$,E,w,b=e.error.message+"";document.title=s=e.status;var x=e.dev&&e.error.stack&&xe(e);return{c(){a=n(),f=r("h1"),p=o(e.status),v=n(),g=r("p"),$=o(b),E=n(),x&&x.c(),w=A(),this.h()},l(t){a=u(t,"\n\n"),f=l(t,"H1",{class:!0},!1);var s=c(f);p=u(s,e.status),s.forEach(i),v=u(t,"\n\n"),g=l(t,"P",{class:!0},!1);var r=c(g);$=u(r,b),r.forEach(i),E=u(t,"\n\n"),x&&x.l(t),w=A(),this.h()},h(){h(f,"class","svelte-8od9u6"),h(g,"class","svelte-8od9u6")},m(e,t){d(e,a,t),d(e,f,t),m(f,p),d(e,v,t),d(e,g,t),m(g,$),d(e,E,t),x&&x.m(e,t),d(e,w,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&L(p,t.status),e.error&&b!==(b=t.error.message+"")&&L($,b),t.dev&&t.error.stack?x?x.p(e,t):((x=xe(t)).c(),x.m(w.parentNode,w)):x&&(x.d(1),x=null)},i:t,o:t,d(e){e&&(i(a),i(f),i(v),i(g),i(E)),x&&x.d(e),e&&i(w)}}}function ye(e,t,s){let{status:a,error:r}=t;return e.$set=(e=>{"status"in e&&s("status",a=e.status),"error"in e&&s("error",r=e.error)}),{status:a,error:r,dev:!1}}class ke extends s{constructor(t){super(),a(this,t,ye,Se,e,["status","error"])}}function _e(e){var t,s,a=[e.level1.props],r=e.level1.component;function n(e){let t={};for(var s=0;s<a.length;s+=1)t=C(t,a[s]);return{props:t}}if(r)var o=new r(n());return{c(){o&&o.$$.fragment.c(),t=A()},l(e){o&&o.$$.fragment.l(e),t=A()},m(e,a){o&&k(o,e,a),d(e,t,a),s=!0},p(e,s){var l=e.level1?D(a,[s.level1.props]):{};if(r!==(r=s.level1.component)){if(o){q();const e=o;S(e.$$.fragment,1,0,()=>{_(e,1)}),P()}r?((o=new r(n())).$$.fragment.c(),w(o.$$.fragment,1),k(o,t.parentNode,t)):o=null}else r&&o.$set(l)},i(e){s||(o&&w(o.$$.fragment,e),s=!0)},o(e){o&&S(o.$$.fragment,e),s=!1},d(e){e&&i(t),o&&_(o,e)}}}function Ae(e){var t,s=new ke({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,a){k(s,e,a),t=!0},p(e,t){var a={};e.error&&(a.error=t.error),e.status&&(a.status=t.status),s.$set(a)},i(e){t||(w(s.$$.fragment,e),t=!0)},o(e){S(s.$$.fragment,e),t=!1},d(e){_(s,e)}}}function qe(e){var t,s,a,r,n=[Ae,_e],o=[];function l(e,t){return t.error?0:1}return t=l(0,e),s=o[t]=n[t](e),{c(){s.c(),a=A()},l(e){s.l(e),a=A()},m(e,s){o[t].m(e,s),d(e,a,s),r=!0},p(e,r){var c=t;(t=l(0,r))===c?o[t].p(e,r):(q(),S(o[c],1,1,()=>{o[c]=null}),P(),(s=o[t])||(s=o[t]=n[t](r)).c(),w(s,1),s.m(a.parentNode,a))},i(e){r||(w(s),r=!0)},o(e){S(s),r=!1},d(e){o[t].d(e),e&&i(a)}}}function Pe(e){var t,s=[{segment:e.segments[0]},e.level0.props];let a={$$slots:{default:[qe]},$$scope:{ctx:e}};for(var r=0;r<s.length;r+=1)a=C(a,s[r]);var n=new be({props:a});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,s){k(n,e,s),t=!0},p(e,t){var a=e.segments||e.level0?D(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(a.$$scope={changed:e,ctx:t}),n.$set(a)},i(e){t||(w(n.$$.fragment,e),t=!0)},o(e){S(n.$$.fragment,e),t=!1},d(e){_(n,e)}}}function Me(e,t,s){let{stores:a,error:r,status:n,segments:o,level0:l,level1:c=null}=t;return O(J,a),e.$set=(e=>{"stores"in e&&s("stores",a=e.stores),"error"in e&&s("error",r=e.error),"status"in e&&s("status",n=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)}),{stores:a,error:r,status:n,segments:o,level0:l,level1:c}}class Ie extends s{constructor(t){super(),a(this,t,Me,Pe,e,["stores","error","status","segments","level0","level1"])}}const Re=[],Ne=[{js:()=>import("./index.92be458c.js"),css:["index.92be458c.css","TextAnimation.7189b7ad.css"]},{js:()=>import("./experience.dc31adcb.js"),css:["experience.dc31adcb.css"]},{js:()=>import("./creative-revolt.666c058c.js"),css:["TextAnimation.7189b7ad.css","ProjectDetailTemplate.957c917f.css"]},{js:()=>import("./university-park.f7c5f58a.js"),css:["TextAnimation.7189b7ad.css","ProjectDetailTemplate.957c917f.css"]},{js:()=>import("./stallion.03758bf2.js"),css:["TextAnimation.7189b7ad.css","ProjectDetailTemplate.957c917f.css"]},{js:()=>import("./halcyon.1975b774.js"),css:["TextAnimation.7189b7ad.css","ProjectDetailTemplate.957c917f.css"]},{js:()=>import("./about.e5c27ff8.js"),css:["about.e5c27ff8.css"]}],je=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/experience\/?$/,parts:[{i:1}]},{pattern:/^\/projects\/creative-revolt\/?$/,parts:[null,{i:2}]},{pattern:/^\/projects\/university-park\/?$/,parts:[null,{i:3}]},{pattern:/^\/projects\/stallion\/?$/,parts:[null,{i:4}]},{pattern:/^\/projects\/halcyon\/?$/,parts:[null,{i:5}]},{pattern:/^\/about\/?$/,parts:[{i:6}]}];const Le="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ce,De,Oe,Te=!1,Ve=[],Fe="{}";const He={page:U({}),preloading:U(null),session:U(Le&&Le.session)};let Ue,Je;He.session.subscribe(async e=>{if(Ue=e,!Te)return;Je=!0;const t=Qe(new URL(location.href)),s=De={},{redirect:a,props:r,branch:n}=await st(t);s===De&&await tt(a,n,r,t.page)});let ze,Ye=null;let Be,Ge=1;const Ke="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},We={};function Xe(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,a=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(a):t[s]=a}),t}function Qe(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Le.baseUrl))return null;let t=e.pathname.slice(Le.baseUrl.length);if(""===t&&(t="/"),!Re.some(e=>e.test(t)))for(let s=0;s<je.length;s+=1){const a=je[s],r=a.pattern.exec(t);if(r){const s=Xe(e.search),n=a.parts[a.parts.length-1],o=n.params?n.params(r):{},l={host:location.host,path:t,query:s,params:o};return{href:e.href,route:a,match:r,page:l}}}}function Ze(){return{x:pageXOffset,y:pageYOffset}}async function et(e,t,s,a){if(t)Be=t;else{const e=Ze();We[Be]=e,t=Be=++Ge,We[Be]=s?e:{x:0,y:0}}Be=t,Ce&&He.preloading.set(!0);const r=Ye&&Ye.href===e.href?Ye.promise:st(e);Ye=null;const n=De={},{redirect:o,props:l,branch:c}=await r;if(n===De&&(await tt(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=We[t];if(a){const t=document.getElementById(a.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}We[Be]=e,e&&scrollTo(e.x,e.y)}}async function tt(e,t,s,a){if(e)return function(e,t={replaceState:!1}){const s=Qe(new URL(e,document.baseURI));return s?(Ke[t.replaceState?"replaceState":"pushState"]({id:Be},"",e),et(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(He.page.set(a),He.preloading.set(!1),Ce)Ce.$set(s);else{s.stores={page:{subscribe:He.page.subscribe},preloading:{subscribe:He.preloading.subscribe},session:He.session},s.level0={props:await Oe};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)rt(e.nextSibling);rt(e),rt(t)}Ce=new Ie({target:ze,props:s,hydrate:!0})}Ve=t,Fe=JSON.stringify(a.query),Te=!0,Je=!1}async function st(e){const{route:t,page:s}=e,a=s.path.split("/").filter(Boolean);let r=null;const n={error:null,status:200,segments:[a[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{n.error="string"==typeof t?new Error(t):t,n.status=e}};let l;Oe||(Oe=Le.preloaded[0]||z.call(o,{host:s.host,path:s.path,query:s.query,params:{}},Ue));let c=1;try{const r=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const h=a[l];if(function(e,t,s,a){if(a!==Fe)return!0;const r=Ve[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,h,i,r)&&(u=!0),n.segments[c]=a[l+1],!t)return{segment:h};const f=c++;if(!Je&&!u&&Ve[l]&&Ve[l].part===t.i)return Ve[l];u=!1;const{default:d,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(at);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Ne[t.i]);let p;return p=Te||!Le.preloaded[l+1]?m?await m.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},Ue):{}:Le.preloaded[l+1],n[`level${f}`]={component:d,props:p,segment:h,match:i,part:t.i}}))}catch(e){n.error=e,n.status=500,l=[]}return{redirect:r,props:n,branch:l}}function at(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const a=document.createElement("link");a.rel="stylesheet",a.href=t,a.onload=(()=>e()),a.onerror=s,document.head.appendChild(a)})}function rt(e){e.parentNode.removeChild(e)}function nt(e){const t=Qe(new URL(e,document.baseURI));if(t)return Ye&&e===Ye.href||function(e,t){Ye={href:e,promise:t}}(e,st(t)),Ye.promise}let ot;function lt(e){clearTimeout(ot),ot=setTimeout(()=>{ct(e)},20)}function ct(e){const t=ut(e.target);t&&"prefetch"===t.rel&&nt(t.href)}function it(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=ut(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,a=String(s?t.href.baseVal:t.href);if(a===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const r=new URL(a);if(r.pathname===location.pathname&&r.search===location.search)return;const n=Qe(r);if(n){et(n,null,t.hasAttribute("sapper-noscroll"),r.hash),e.preventDefault(),Ke.pushState({id:Be},"",r.href)}}function ut(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function ht(e){if(We[Be]=Ze(),e.state){const t=Qe(new URL(location.href));t?et(t,e.state.id):location.href=location.href}else(function(e){Be=e})(Ge=Ge+1),Ke.replaceState({id:Be},"",location.href)}!function(e){var t;"scrollRestoration"in Ke&&(Ke.scrollRestoration="manual"),t=e.target,ze=t,addEventListener("click",it),addEventListener("popstate",ht),addEventListener("touchstart",ct),addEventListener("mousemove",lt),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ke.replaceState({id:Ge},"",t);const s=new URL(location.href);if(Le.error)return function(e){const{host:t,pathname:s,search:a}=location,{session:r,preloaded:n,status:o,error:l}=Le;Oe||(Oe=n&&n[0]),tt(null,[],{error:l,status:o,session:r,level0:{props:Oe},level1:{props:{status:o,error:l},component:ke},segments:n},{host:t,path:s,query:Xe(a),params:{}})}();const a=Qe(s);return a?et(a,Ge,!0,e):void 0})}({target:document.querySelector("#sapper")});
