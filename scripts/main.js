var C=e=>{e.forEach(t=>{t.classList.remove("arrow-accordion__item--current")})},d=(e,t)=>{requestAnimationFrame(()=>{let r=e.querySelector(".arrow-accordion__description"),n=t.querySelector(".arrow-accordion__list");window.innerWidth>=1400&&r.offsetHeight>=n.offsetHeight?n.style.height=`${r.offsetHeight}px`:n.style.height="auto"})},_=document.querySelector(".foreigners"),i=_.querySelectorAll(".arrow-accordion__item");d(i[0],_);for(let e=0;e<i.length;e++)i[e].addEventListener("click",()=>{C(i),i[e].classList.toggle("arrow-accordion__item--current"),i[e].addEventListener("transitionend",()=>{i[e].getBoundingClientRect().top>=0||i[e].scrollIntoView({behavior:"smooth"}),d(i[e],_)},{once:!0})});window.addEventListener("resize",()=>{for(let e=0;e<i.length;e++)i[e].classList.contains("arrow-accordion__item--current")&&d(i[e],_)});var f=document.querySelector(".residence"),o=f.querySelectorAll(".arrow-accordion__item");d(o[0],f);for(let e=0;e<o.length;e++)o[e].addEventListener("click",()=>{C(o),o[e].classList.toggle("arrow-accordion__item--current"),o[e].addEventListener("transitionend",()=>{o[e].getBoundingClientRect().top>=0||o[e].scrollIntoView({behavior:"smooth"}),d(o[e],f)},{once:!0})});window.addEventListener("resize",()=>{for(let e=0;e<o.length;e++)o[e].classList.contains("arrow-accordion__item--current")&&d(o[e],f)});var s=document.querySelector(".main-nav"),W=document.querySelector(".main-nav__toggle"),v=document.querySelector(".page-body");W.addEventListener("click",()=>{s.classList.contains("main-nav--closed")?(s.classList.remove("main-nav--closed"),setTimeout(()=>{s.classList.add("main-nav--opened"),v.style.overflow="hidden"},200)):s.classList.contains("main-nav--opened")&&(v.style.overflowY="auto",s.classList.remove("main-nav--opened"),setTimeout(()=>{s.classList.add("main-nav--closed")},200))});var R=document.querySelectorAll(".main-nav__link"),$=()=>{window.innerWidth<1400&&R.forEach(e=>{let t=r=>{r.preventDefault(),s.classList.contains("main-nav--opened")&&(v.style.overflowY="auto",s.classList.remove("main-nav--opened"),setTimeout(()=>{s.classList.add("main-nav--closed"),setTimeout(()=>{let n=document.querySelector(e.getAttribute("href"));n&&n.scrollIntoView({behavior:"smooth"})},400)},200))};e.addEventListener("click",t),window.addEventListener("resize",()=>{window.innerWidth>=1400?(e.removeEventListener("click",t),s.classList.contains("main-nav--opened")&&(s.classList.remove("main-nav--opened"),s.classList.add("main-nav--closed"),v.style.overflowY="auto")):e.addEventListener("click",t)})})};$();D();async function D(){await ymaps3.ready;let{YMap:e,YMapDefaultSchemeLayer:t,YMapDefaultFeaturesLayer:r,YMapMarker:n}=ymaps3,g=new e(document.getElementById("map"),{location:{center:[46.010245,51.538828],zoom:13}});g.addChild(new t),g.addChild(new r);let x=document.createElement("div");x.className="page-main__map-marker";let Y=new n({coordinates:[46.010245,51.538828]},x);g.addChild(Y)}import P from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";var c=(e,t)=>{setTimeout(()=>{for(let r=0;r<e.length;r++)e[r].classList.contains("swiper-slide-active")&&(t.textContent=`0${r+1}`)},0)};var L=new P(".swiperNews",{direction:"horizontal",speed:500,spaceBetween:24,loop:!0,autoHeight:!0,breakpoints:{1400:{slidesPerView:4}}}),F=document.querySelector(".news__arrow--left"),j=document.querySelector(".news__arrow--right");F.addEventListener("click",()=>{L.slidePrev()});j.addEventListener("click",()=>{L.slideNext()});var N=document.querySelector(".news__slide--current"),O=document.querySelector(".news__slide--last"),y=document.querySelectorAll(".news__item");O.textContent=`0${y.length}`;c(y,N);L.on("slideChange",()=>{c(y,N)});var ce=new P(".swiperInnerNews",{direction:"horizontal",speed:500,spaceBetween:40,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});import z from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";var a=document.querySelectorAll(".plus-accordion__button"),S=()=>{a.forEach(e=>{e.parentElement.classList.contains("plus-accordion__inner--current")&&e.parentElement.classList.remove("plus-accordion__inner--current")})},l=null,u=null;function T(){window.innerWidth<1400&&(u=new z(".swiperPrograms2",{direction:"horizontal",loop:!0,slidesPerView:"auto",autoHeight:!0,breakpoints:{1400:{autoHeight:!1}}}),l=new z(".swiperPrograms1",{direction:"horizontal",loop:!0,slidesPerView:"auto",controller:{control:u}}))}function G(){l!==null&&u!==null&&(l.destroy(),u.destroy(),l=null,u=null)}T();window.addEventListener("resize",()=>{window.innerWidth<1400?T():G()});var J=document.querySelector(".programs__arrow--left"),K=document.querySelector(".programs__arrow--right");J.addEventListener("click",()=>{l&&(l.slidePrev(),S())});K.addEventListener("click",()=>{l&&(l.slideNext(),S())});for(let e=0;e<a.length;e++)a[e].addEventListener("click",()=>{for(let t=0;t<a.length;t++)t!==e&&a[t].parentElement.classList.contains("plus-accordion__inner--current")&&a[t].parentElement.classList.remove("plus-accordion__inner--current");a[e].parentElement.classList.toggle("plus-accordion__inner--current"),a[e].parentElement.addEventListener("transitionend",()=>{let t=document.querySelector(".programs__list");t.style.height="auto"})});var h=document.querySelectorAll(".programs__name-item"),A=document.querySelectorAll(".programs__item"),B=()=>{if(window.innerWidth>=1400)for(let e=0;e<h.length;e++)h[e].addEventListener("click",()=>{S(),h.forEach(t=>{t.classList.contains("programs__name-item--current")&&t.classList.remove("programs__name-item--current")}),h[e].classList.add("programs__name-item--current"),A.forEach(t=>{t.classList.contains("programs__item--current")&&t.classList.remove("programs__item--current")}),A[e].classList.add("programs__item--current")})};B();window.addEventListener("resize",()=>{B()});var Q=document.querySelectorAll(".search__button"),U=document.querySelector(".main-nav").querySelector(".search__input"),H=document.querySelector(".main-nav").querySelector(".search");Q.forEach(e=>{e.addEventListener("click",t=>{let r=e.parentElement,n=e.parentElement.querySelector(".search__input");n.value||(t.preventDefault(),r.classList.contains("search--invisible")?(r.classList.remove("search--invisible"),n.addEventListener("transitionend",()=>{n.focus()})):n.focus())})});U.addEventListener("blur",()=>{H.classList.contains("search--invisible")||H.classList.add("search--invisible")});import m from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";var ue=new m(".swiperMain",{direction:"horizontal",speed:500,loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),p=document.querySelector(".region"),X=p.querySelector(".info-template__arrow--left"),Z=p.querySelector(".info-template__arrow--right"),V=p.querySelector(".info-template__slide--current"),ee=p.querySelector(".info-template__slide--last"),E=new m(".swiperText1",{direction:"horizontal",speed:500,loop:!0,autoHeight:!0});X.addEventListener("click",()=>{E.slidePrev()});Z.addEventListener("click",()=>{E.slideNext()});var q=p.querySelectorAll(".text-slider__item");ee.textContent=`0${q.length}`;c(q,V);E.on("slideChange",()=>{c(q,V)});var w=document.querySelector(".science"),te=w.querySelector(".info-template__arrow--left"),re=w.querySelector(".info-template__arrow--right"),M=w.querySelector(".info-template__slide--current"),ne=w.querySelector(".info-template__slide--last"),k=new m(".swiperText2",{direction:"horizontal",speed:500,loop:!0,autoHeight:!0});te.addEventListener("click",()=>{k.slidePrev()});re.addEventListener("click",()=>{k.slideNext()});var b=w.querySelectorAll(".text-slider__item");ne.textContent=`0${b.length}`;c(b,M);k.on("slideChange",()=>{c(b,M)});var I={direction:"horizontal",speed:500,loop:!0,autoHeight:!0,centeredSlides:!0,slidesPerView:"auto",effect:"coverflow",coverflowEffect:{depth:0,rotate:0,scale:.78,slideShadows:!1,stretch:17},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},me=new m(".swiperPicture1",I),pe=new m(".swiperPicture2",I);
