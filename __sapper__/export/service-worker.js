!function(){"use strict";const e=["client/creative-revolt.e5481610.js","client/TextAnimation.bcfd1543.js","client/index.1940cc30.js","client/stallion.b332fe96.js","client/university-park.1704e12b.js","client/halcyon.4f8c8476.js","client/index.6dfde1c3.js","client/index.f20e3ef3.js","client/about.1f6e5a0a.js","client/ProjectDetailTemplate.d6df2feb.js","client/experience.71e1464d.js","client/client.a33a06a6.js"].concat(["service-worker-index.html","background-images/so-white.png","favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon/site.webmanifest","favicon.png","global.css.BAK","images/creative-revolt/about-cta-min.png","images/creative-revolt/about-min.png","images/creative-revolt/home-ctas-min.png","images/creative-revolt/home-min.png","images/creative-revolt/writing-class-min.png","images/halcyon/dining-min.png","images/halcyon/events-min.png","images/halcyon/home-cta-min.png","images/halcyon/home-min.png","images/halcyon/spotlight-min.png","images/stallion/stallion-11-min.png","images/stallion/stallion-2-min.png","images/stallion/stallion-4-min.png","images/stallion/stallion-5-min.png","images/stallion/stallion-6-min.png","images/university-park/form-min.png","images/university-park/home-min.png","images/university-park/home-video-min.png","images/university-park/library-min.png","images/university-park/newsletter-min.png","manifest.json","pdfs/resume-joshua-roper.pdf","thumbnails/Jorden-Background-Gray-min.jpg","thumbnails/halcyon-5-min.jpg","thumbnails/professional-hero-min.jpg","thumbnails/stallion-thumb-a-min.jpg","thumbnails/uptexas-thumb-min.jpg"]),n=new Set(e);self.addEventListener("install",n=>{n.waitUntil(caches.open("cache1588552561520").then(n=>n.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1588552561520"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&n.has(i.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1588552561520").then(async n=>{try{const i=await fetch(e.request);return n.put(e.request,i.clone()),i}catch(i){const t=await n.match(e.request);if(t)return t;throw i}}))))})}();
