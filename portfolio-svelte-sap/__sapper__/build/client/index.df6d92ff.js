import{S as e,i as r,s as t,e as a,a as s,c as o,b as c,d as n,f as l,g as i,h,j as p,n as f,t as m,y as g,q as d,v as u,z as v,M as j,I as $,B as w,C as x,N as b}from"./index.4dc7dbb5.js";import{T as E}from"./TextAnimation.3b6a0ace.js";function N(e){var r,t,m,g;return{c(){r=a("img"),t=s(),m=a("div"),g=a("div"),this.h()},l(e){r=o(e,"IMG",{width:!0,height:!0,src:!0,alt:!0,class:!0},!1),c(r).forEach(n),t=l(e,"\n"),m=o(e,"DIV",{class:!0},!1);var a=c(m);g=o(a,"DIV",{class:!0},!1),c(g).forEach(n),a.forEach(n),this.h()},h(){i(r,"width","1px"),i(r,"height","1px"),i(r,"src","images/drawing.jpg"),i(r,"alt",""),i(r,"class","svelte-rziffi"),i(g,"class","hero-image svelte-rziffi"),i(m,"class","box svelte-rziffi")},m(e,a){h(e,r,a),h(e,t,a),h(e,m,a),p(m,g)},p:f,i:f,o:f,d(e){e&&(n(r),n(t),n(m))}}}function I(e){return{}}class S extends e{constructor(e){super(),r(this,e,I,N,t,[])}}function y(e){var r,t,g,d,u,v,j,$;return{c(){r=a("h2"),t=m("I am a"),g=s(),d=a("h1"),u=m("Front End Developer"),v=s(),j=a("h3"),$=m("Joshua Roper"),this.h()},l(e){r=o(e,"H2",{class:!0},!1);var a=c(r);t=l(a,"I am a"),a.forEach(n),g=l(e,"\n"),d=o(e,"H1",{class:!0},!1);var s=c(d);u=l(s,"Front End Developer"),s.forEach(n),v=l(e,"\n"),j=o(e,"H3",{class:!0},!1);var i=c(j);$=l(i,"Joshua Roper"),i.forEach(n),this.h()},h(){i(r,"class","svelte-1tgod8q"),i(d,"class","svelte-1tgod8q"),i(j,"class","svelte-1tgod8q")},m(e,a){h(e,r,a),p(r,t),h(e,g,a),h(e,d,a),p(d,u),h(e,v,a),h(e,j,a),p(j,$)},p:f,i:f,o:f,d(e){e&&(n(r),n(g),n(d),n(v),n(j))}}}class T extends e{constructor(e){super(),r(this,e,null,y,t,[])}}function D(e){var r,t,m,j,$,w=new S({}),x=new T({});return{c(){r=a("div"),t=a("div"),w.$$.fragment.c(),m=s(),j=a("div"),x.$$.fragment.c(),this.h()},l(e){r=o(e,"DIV",{class:!0},!1);var a=c(r);t=o(a,"DIV",{class:!0},!1);var s=c(t);w.$$.fragment.l(s),s.forEach(n),m=l(a,"\n    "),j=o(a,"DIV",{class:!0},!1);var i=c(j);x.$$.fragment.l(i),i.forEach(n),a.forEach(n),this.h()},h(){i(t,"class","hero svelte-1fxoc0"),i(j,"class","text svelte-1fxoc0"),i(r,"class","hero-container svelte-1fxoc0")},m(e,a){h(e,r,a),p(r,t),g(w,t,null),p(r,m),p(r,j),g(x,j,null),$=!0},p:f,i(e){$||(d(w.$$.fragment,e),d(x.$$.fragment,e),$=!0)},o(e){u(w.$$.fragment,e),u(x.$$.fragment,e),$=!1},d(e){e&&n(r),v(w),v(x)}}}class Y extends e{constructor(e){super(),r(this,e,null,D,t,[])}}function V(e){var r,t,g,d,u,v,j;return{c(){r=a("a"),t=a("div"),g=a("div"),d=a("span"),u=m("View Website"),v=s(),j=a("img"),this.h()},l(e){r=o(e,"A",{target:!0,href:!0,class:!0},!1);var a=c(r);t=o(a,"DIV",{class:!0},!1);var s=c(t);g=o(s,"DIV",{class:!0},!1);var i=c(g);d=o(i,"SPAN",{},!1);var h=c(d);u=l(h,"View Website"),h.forEach(n),i.forEach(n),v=l(s,"\n      "),j=o(s,"IMG",{src:!0,alt:!0,class:!0},!1),c(j).forEach(n),s.forEach(n),a.forEach(n),this.h()},h(){i(g,"class","overlay svelte-1qotutf"),i(j,"src",e.imgSrc),i(j,"alt",""),i(j,"class","svelte-1qotutf"),i(t,"class","img-container svelte-1qotutf"),i(r,"target","blank"),i(r,"href",e.url),i(r,"class","svelte-1qotutf")},m(e,a){h(e,r,a),p(r,t),p(t,g),p(g,d),p(d,u),p(t,v),p(t,j)},p(e,t){e.imgSrc&&i(j,"src",t.imgSrc),e.url&&i(r,"href",t.url)},i:f,o:f,d(e){e&&n(r)}}}function q(e,r,t){let{imgSrc:a,projectName:s,url:o}=r;return e.$set=(e=>{"imgSrc"in e&&t("imgSrc",a=e.imgSrc),"projectName"in e&&t("projectName",s=e.projectName),"url"in e&&t("url",o=e.url)}),{imgSrc:a,projectName:s,url:o}}class C extends e{constructor(e){super(),r(this,e,q,V,t,["imgSrc","projectName","url"])}}function k(e){var r,t,f,w,x,b,N,I,S,y,T,D,Y=new E({props:{text:"View Website"}});return{c(){r=a("div"),t=a("h2"),f=m(e.projectName),w=s(),x=a("p"),b=a("span"),N=m(e.projectYear),I=s(),y=s(),T=a("a"),Y.$$.fragment.c(),this.h()},l(a){r=o(a,"DIV",{},!1);var s=c(r);t=o(s,"H2",{class:!0},!1);var i=c(t);f=l(i,e.projectName),i.forEach(n),w=l(s,"\n    "),x=o(s,"P",{class:!0},!1);var h=c(x);b=o(h,"SPAN",{class:!0},!1);var p=c(b);N=l(p,e.projectYear),p.forEach(n),I=l(h,"\n        "),h.forEach(n),y=l(s,"\n    "),T=o(s,"A",{target:!0,href:!0,class:!0},!1);var m=c(T);Y.$$.fragment.l(m),m.forEach(n),s.forEach(n),this.h()},h(){i(t,"class","svelte-ebfybp"),i(b,"class","year svelte-ebfybp"),S=new j(e.projectText,null),i(x,"class","svelte-ebfybp"),i(T,"target","blank"),i(T,"href",e.url),i(T,"class","svelte-ebfybp")},m(e,a){h(e,r,a),p(r,t),p(t,f),p(r,w),p(r,x),p(x,b),p(b,N),p(x,I),S.m(x),p(r,y),p(r,T),g(Y,T,null),D=!0},p(e,r){D&&!e.projectName||$(f,r.projectName),D&&!e.projectYear||$(N,r.projectYear),D&&!e.projectText||S.p(r.projectText),D&&!e.url||i(T,"href",r.url)},i(e){D||(d(Y.$$.fragment,e),D=!0)},o(e){u(Y.$$.fragment,e),D=!1},d(e){e&&n(r),v(Y)}}}function A(e,r,t){let{projectName:a,url:s,projectText:o,projectYear:c}=r;return e.$set=(e=>{"projectName"in e&&t("projectName",a=e.projectName),"url"in e&&t("url",s=e.url),"projectText"in e&&t("projectText",o=e.projectText),"projectYear"in e&&t("projectYear",c=e.projectYear)}),{projectName:a,url:s,projectText:o,projectYear:c}}class H extends e{constructor(e){super(),r(this,e,A,k,t,["projectName","url","projectText","projectYear"])}}function P(e,r,t){const a=Object.create(e);return a.card=r[t],a.index=t,a}function R(e){var r,t,f,m,j,$,w=new C({props:{imgSrc:e.card.imgSrc,url:e.card.url}}),x=new H({props:{projectName:e.card.projectName,url:e.card.url,projectText:e.card.projectText,projectYear:e.card.projectYear}});return{c(){r=a("div"),t=a("div"),w.$$.fragment.c(),f=s(),m=a("div"),x.$$.fragment.c(),j=s(),this.h()},l(e){r=o(e,"DIV",{class:!0,index:!0},!1);var a=c(r);t=o(a,"DIV",{class:!0},!1);var s=c(t);w.$$.fragment.l(s),s.forEach(n),f=l(a,"\n                "),m=o(a,"DIV",{class:!0},!1);var i=c(m);x.$$.fragment.l(i),i.forEach(n),j=l(a,"\n            "),a.forEach(n),this.h()},h(){i(t,"class","image-container svelte-1w3h4qb"),i(m,"class","text-container svelte-1w3h4qb"),i(r,"class","card-container svelte-1w3h4qb"),i(r,"index",e.index)},m(e,a){h(e,r,a),p(r,t),g(w,t,null),p(r,f),p(r,m),g(x,m,null),p(r,j),$=!0},p(e,r){var t={};e.portfolioCards&&(t.imgSrc=r.card.imgSrc),e.portfolioCards&&(t.url=r.card.url),w.$set(t);var a={};e.portfolioCards&&(a.projectName=r.card.projectName),e.portfolioCards&&(a.url=r.card.url),e.portfolioCards&&(a.projectText=r.card.projectText),e.portfolioCards&&(a.projectYear=r.card.projectYear),x.$set(a)},i(e){$||(d(w.$$.fragment,e),d(x.$$.fragment,e),$=!0)},o(e){u(w.$$.fragment,e),u(x.$$.fragment,e),$=!1},d(e){e&&n(r),v(w),v(x)}}}function B(e){for(var r,t,f,g,v,j,$,E=e.portfolioCards,N=[],I=0;I<E.length;I+=1)N[I]=R(P(e,E,I));const S=e=>u(N[e],1,1,()=>{N[e]=null});return{c(){r=s(),t=a("section"),f=a("h2"),g=m("Selected Works"),v=s(),j=a("div");for(var e=0;e<N.length;e+=1)N[e].c();this.h()},l(e){r=l(e,"\n\n\n"),t=o(e,"SECTION",{class:!0},!1);var a=c(t);f=o(a,"H2",{class:!0},!1);var s=c(f);g=l(s,"Selected Works"),s.forEach(n),v=l(a,"\n    "),j=o(a,"DIV",{class:!0},!1);for(var i=c(j),h=0;h<N.length;h+=1)N[h].l(i);i.forEach(n),a.forEach(n),this.h()},h(){document.title="Badass Portfolio Business",i(f,"class","svelte-1w3h4qb"),i(j,"class","projects-container svelte-1w3h4qb"),i(t,"class","svelte-1w3h4qb")},m(e,a){h(e,r,a),h(e,t,a),p(t,f),p(f,g),p(t,v),p(t,j);for(var s=0;s<N.length;s+=1)N[s].m(j,null);$=!0},p(e,r){if(e.portfolioCards){E=r.portfolioCards;for(var t=0;t<E.length;t+=1){const a=P(r,E,t);N[t]?(N[t].p(e,a),d(N[t],1)):(N[t]=R(a),N[t].c(),d(N[t],1),N[t].m(j,null))}for(w(),t=E.length;t<N.length;t+=1)S(t);x()}},i(e){if(!$){for(var r=0;r<E.length;r+=1)d(N[r]);$=!0}},o(e){N=N.filter(Boolean);for(let e=0;e<N.length;e+=1)u(N[e]);$=!1},d(e){e&&(n(r),n(t)),b(N,e)}}}function F(e){return{portfolioCards:[{url:"https://www.visithalcyon.com/cmx-cinebistro",imgSrc:"images/halcyon-5.jpg",projectName:"Halcyon",projectYear:"2019",projectText:"I was one of the Front End Developers on the project primarily tasked with creating the movies page and events directory. Across the project I worked with <strong>multiple API’s</strong>, <strong>React Static</strong>, and developed <strong>clean code</strong> for other advanced React components."},{url:"https://www.uptexas.org",imgSrc:"images/uptexas-home3.jpg",projectName:"University Park",projectYear:"2019",projectText:"I was tasked with being the <strong>sole developer</strong> on a <strong>complete Front-End redesign</strong>. Keeping their current users in mind, the goal was to make the website feel more modern, and offer a better user experience when navigating to each individual page. Across the entire project I implemented several dynamically generated content pages / sliders, <strong>form verification</strong>, and several <strong>third party integrations</strong>."},{url:"https://www.creativerevolt.com",imgSrc:"images/Jorden-Background-Gray.jpg",projectName:"Creative Revolt",projectYear:"2018",projectText:"This was a freelance project to <strong>rework the website layout</strong> and tailor the feel of the website to her personal writing style. I <strong>revamped the color palette</strong> to better match her personality, adjusted her website for <strong>SEO</strong>, and created the landing page as well as multiple pages across the platform."}]}}class W extends e{constructor(e){super(),r(this,e,F,B,t,[])}}function z(e){var r,t,m,j,$=new Y({}),w=new W({});return{c(){r=s(),t=a("div"),$.$$.fragment.c(),m=s(),w.$$.fragment.c(),this.h()},l(e){r=l(e,"\n\n"),t=o(e,"DIV",{class:!0},!1);var a=c(t);$.$$.fragment.l(a),m=l(a,"\n    "),w.$$.fragment.l(a),a.forEach(n),this.h()},h(){document.title="Home | Front End Developer - Joshua Roper",i(t,"class","container svelte-rig25y")},m(e,a){h(e,r,a),h(e,t,a),g($,t,null),p(t,m),g(w,t,null),j=!0},p:f,i(e){j||(d($.$$.fragment,e),d(w.$$.fragment,e),j=!0)},o(e){u($.$$.fragment,e),u(w.$$.fragment,e),j=!1},d(e){e&&(n(r),n(t)),v($),v(w)}}}export default class extends e{constructor(e){super(),r(this,e,null,z,t,[])}}
