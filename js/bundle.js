!function(e){var t={};function s(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(c,a,function(t){return e[t]}.bind(null,a));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){e.exports=s(1)},function(e,t,s){"use strict";s.r(t);s(2),s(3),s(4),s(5);var c=document.querySelector("header"),a=document.querySelector("#burger-btn"),i=document.getElementById("menu"),n=document.querySelector("body"),o=document.getElementById("back-burger-btn"),l=document.querySelector("main"),d=document.querySelector(".padding-menu-box"),r=document.querySelector(".message"),u=document.querySelector(".header-navbar-btn-message"),v=document.querySelector(".phone"),m=document.querySelector(".header-navbar-btn-phone"),L=document.querySelector(".feedback-menu"),y=document.querySelector(".request-call"),f=document.querySelector(".feedback-menu-btn"),p=document.querySelector("#cancelRequestCallMenu"),b=(document.getElementById("dots"),document.getElementById("more")),g=document.getElementById("read-more"),S=document.getElementById("hidden"),k=document.getElementById("read-more-brands"),E=document.getElementById("hidden-brands"),h=(document.querySelectorAll(".brands-cards"),document.querySelector("#swiper")),q=document.querySelector("#swiper-variety"),w=document.getElementById("read-more-brands-variety"),x=document.getElementById("hidden-brands-variety");a.addEventListener("click",(function(){i.classList.add("active"),c.classList.add("active"),l.classList.add("active"),n.classList.add("modal-open")})),o.addEventListener("click",(function(){i.classList.remove("active"),c.classList.remove("active"),l.classList.remove("active"),n.classList.remove("modal-open")})),l.addEventListener("click",(function(e){d.classList.contains(e.target)||(i.classList.remove("active"),c.classList.remove("active"),l.classList.remove("active"),n.classList.remove("modal-open")),d.classList.contains(e.target)||(L.classList.remove("active"),c.classList.remove("active"),l.classList.remove("active"),n.classList.remove("modal-open")),d.classList.contains(e.target)||(y.classList.remove("active"),c.classList.remove("active"),l.classList.remove("active"),n.classList.remove("modal-open"))})),r.addEventListener("click",(function(){c.classList.add("active"),l.classList.add("active"),n.classList.add("modal-open"),!1===y.classList.contains("active")&&L.classList.add("active"),!0===y.classList.contains("active")&&(y.classList.remove("active"),L.classList.add("active"))})),f.addEventListener("click",(function(){L.classList.remove("active"),c.classList.remove("active"),l.classList.remove("active"),n.classList.remove("modal-open")})),u.addEventListener("click",(function(){n.classList.add("modal-open"),c.classList.add("active"),l.classList.add("active"),!1===y.classList.contains("active")&&L.classList.add("active"),!0===y.classList.contains("active")&&(y.classList.remove("active"),L.classList.add("active"))})),p.addEventListener("click",(function(){y.classList.remove("active"),c.classList.remove("active"),l.classList.remove("active"),n.classList.remove("modal-open")})),m.addEventListener("click",(function(){c.classList.add("active"),l.classList.add("active"),n.classList.add("modal-open"),!1===L.classList.contains("active")&&y.classList.add("active"),!0===L.classList.contains("active")&&(L.classList.remove("active"),y.classList.add("active"))})),v.addEventListener("click",(function(){c.classList.add("active"),l.classList.add("active"),n.classList.add("modal-open"),!1===L.classList.contains("active")&&y.classList.add("active"),!0===L.classList.contains("active")&&(L.classList.remove("active"),y.classList.add("active"))})),!1===g.classList.contains("active")&&S.classList.add("active"),g.onclick=function(){g.classList.add("active"),b.classList.add("active"),S.classList.remove("active")},S.onclick=function(){S.classList.add("active"),b.classList.remove("active"),g.classList.remove("active")};var B,I,P;new Swiper(".swiper",{direction:"horizontal",spaceBetween:15,slidesPerView:"auto",breakpoints:(B={700:{slidesPerView:1.5}},I="700",P={lidesPerView:4,spaceBetween:10,enabled:!1},I in B?Object.defineProperty(B,I,{value:P,enumerable:!0,configurable:!0,writable:!0}):B[I]=P,B),pagination:{el:".swiper-pagination",clickable:!0}});E.style.display="none",k.onclick=function(){h.style.height="auto",k.style.display="none",E.style.display="inline-flex"},E.onclick=function(){h.style.height="200px",E.style.display="none",k.style.display="inline-flex"},x.style.display="none",w.onclick=function(){q.style.height="auto",w.style.display="none",x.style.display="inline-flex"},x.onclick=function(){q.style.height="200px",x.style.display="none",w.style.display="inline-flex"}},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){}]);
//# sourceMappingURL=bundle.js.map