!function(){"use strict";const e=[].concat(["service-worker-index.html","favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon/site.webmanifest","favicon.png","global.css","great-success.png","images/Jorden-Background-Gray copy.jpg","images/Jorden-Background-Gray.jpg","images/Uptexas-home.jpg","images/Uptexas-home2.jpg","images/WBUH.jpeg","images/anbtx/www.anbtx.com_mobile-deposit(iPad Pro) (1).png","images/anbtx/www.anbtx.com_mobile-deposit(iPad Pro).png","images/anbtx/www.anbtx.com_mobile-deposit(iPad).png","images/anbtx/www.anbtx.com_mobile-deposit(iPhone 6_7_8).png","images/anbtx/www.anbtx.com_mobile-deposit.png","images/bub.jpeg","images/creative-revolt/screencapture-creativerevolt-about-2019-09-16-20_11_44.png","images/creative-revolt/www.creativerevolt.com_(iPad Pro).png","images/creative-revolt/www.creativerevolt.com_(iPad).png","images/creative-revolt/www.creativerevolt.com_(iPhone 6_7_8).png","images/creative-revolt/www.creativerevolt.com_.png","images/creativeShiz.png","images/drawing.JPG","images/halcyon-2.jpg","images/halcyon-3.jpg","images/halcyon-4.jpg","images/halcyon-5.jpg","images/halcyon.jpeg","images/hero-doe.png","images/newYork.jpg","images/resume-joshua-roper.pdf","images/so-white.png","images/university-park-cta.jpeg","images/uptexas/desktop.png","images/uptexas/hero.png","images/uptexas/lgImg.png","images/uptexas/sidenav.png","images/uptexas/uptexasReal.jpg","images/uptexas/www.uptexas.org_(iPad Pro).png","images/uptexas/www.uptexas.org_(iPad).png","images/uptexas/www.uptexas.org_(iPhone X).png","images/uptexas-thumb.jpg","images/wbuh/www.webuyuglyhouses.com_peace-of-mind-new-leaf-b_ (1).png","images/wbuh/www.webuyuglyhouses.com_peace-of-mind-new-leaf-b_(iPad Pro).png","images/wbuh/www.webuyuglyhouses.com_peace-of-mind-new-leaf-b_(iPad).png","images/wbuh/www.webuyuglyhouses.com_peace-of-mind-new-leaf-b_(iPhone 6_7_8).png","images/wbuh/www.webuyuglyhouses.com_peace-of-mind-new-leaf-b_.png","logo-192.png","logo-512.png","manifest.json"]),a=new Set(e);self.addEventListener("install",a=>{a.waitUntil(caches.open("cache1576040161158").then(a=>a.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const a of e)"cache1576040161158"!==a&&await caches.delete(a);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&a.has(i.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1576040161158").then(async a=>{try{const i=await fetch(e.request);return a.put(e.request,i.clone()),i}catch(i){const n=await a.match(e.request);if(n)return n;throw i}}))))})}();
