(()=>{var e={111:()=>{const e=document.body,t={enable(){r=window.pageYOffset,e.style.overflow="hidden",e.style.position="fixed",e.style.top=`-${r}px`,e.style.width="100%"},disable(){e.style.removeProperty("overflow"),e.style.removeProperty("position"),e.style.removeProperty("top"),e.style.removeProperty("width"),window.scrollTo(0,r)}},o=document.querySelector(".mobile-menu");document.querySelectorAll(".burger").forEach((e=>{e.addEventListener("click",(r=>{r.preventDefault(),e.classList.contains("is-active")?(o.classList.remove("open"),t.disable()):(o.classList.add("open"),t.enable())}))}));let r=0;document.querySelectorAll("a[data-inner-navigation]").forEach((e=>{e.addEventListener("click",(r=>{r.preventDefault(),t.disable(),o.classList.remove("open");document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))},389:()=>{const e=document.querySelectorAll(".faq-item");document.addEventListener("DOMContentLoaded",(()=>{e.forEach((e=>{setTimeout((()=>{const t=e.offsetHeight,o=parseFloat(window.getComputedStyle(e.querySelector(".faq-top")).getPropertyValue("margin-bottom")),r=e.querySelector(".faq-top").offsetHeight+o+o;e.setAttribute("data-expanded-height",t),e.setAttribute("data-height",r),e.style.height=`${r}px`,e.addEventListener("click",(t=>{e.classList.contains("open")?(e.classList.remove("open"),e.style.height=`${e.getAttribute("data-height")}px`):(e.classList.add("open"),e.style.height=`${e.getAttribute("data-expanded-height")}px`)}))}),1e3)}))}))},332:()=>{google.maps.event.addDomListener(window,"load",(function(){var e={zoom:11,center:new google.maps.LatLng(40.67,-73.94),styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]},t=document.querySelector(".js-map"),o=new google.maps.Map(t,e);new google.maps.Marker({position:new google.maps.LatLng(40.67,-73.94),map:o,title:"Snazzy!"})}))},995:()=>{new Swiper(".swiper-our-mission",{direction:"horizontal",slidesPerView:1,breakpoints:{768:{slidesPerView:1,spaceBetween:10},320:{slidesPerView:1,spaceBetween:10}},pagination:{el:".swiper-pagination-our-mission",type:"bullets",clickable:!0}})},976:()=>{new Swiper(".swiper-our-works",{direction:"horizontal",slidesPerView:1,navigation:{nextEl:".swiper-our-works .swiper-button-next-our-works",prevEl:".swiper-our-works .swiper-button-prev-our-works "},pagination:{el:".swiper-pagination-our-works",type:"bullets",clickable:!0},breakpoints:{768:{slidesPerView:1,spaceBetween:45},320:{slidesPerView:1,spaceBetween:45}}})},350:()=>{new Swiper(".reviews-swiper",{direction:"horizontal",slidesPerView:1,loop:!0,focus:"center",breakpoints:{768:{slidesPerView:3,spaceBetween:55}},pagination:{el:".swiper-pagination-reviews-swiper",type:"bullets",clickable:!0}})}},t={};function o(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(995),o(976),o(350),o(111),o(389),o(332)})()})();
//# sourceMappingURL=index.cd9ee5525d26abd70ba4.js.map