var e=document.querySelector(".main-nav"),a=document.querySelector(".main-nav__toggle"),t=document.querySelector(".page-body");a.addEventListener("click",()=>{e.classList.contains("main-nav--closed")?(e.classList.remove("main-nav--closed"),setTimeout(()=>{e.classList.add("main-nav--opened"),t.style.overflow="hidden"},200)):e.classList.contains("main-nav--opened")&&(e.classList.remove("main-nav--opened"),setTimeout(()=>{e.classList.add("main-nav--closed"),t.style.overflowY="auto"},200))});var c=document.querySelectorAll(".main-nav__link"),l=()=>{window.innerWidth<1400&&c.forEach(n=>{let s=i=>{i.preventDefault(),e.classList.contains("main-nav--opened")&&(e.classList.remove("main-nav--opened"),setTimeout(()=>{e.classList.add("main-nav--closed"),setTimeout(()=>{t.style.overflowY="auto";let o=document.querySelector(n.getAttribute("href"));o&&o.scrollIntoView({behavior:"smooth"})},400)},200))};n.addEventListener("click",s),window.addEventListener("resize",()=>{window.innerWidth>=1400?(n.removeEventListener("click",s),e.classList.contains("main-nav--opened")&&(e.classList.remove("main-nav--opened"),e.classList.add("main-nav--closed"),t.style.overflowY="auto")):n.addEventListener("click",s)})})};l();