const slider=document.getElementById("gradeSlider");
const before=document.querySelector(".grade-before");
const divider=document.querySelector(".grade-divider");
const knob=document.querySelector(".grade-knob");
function updateGrade(){const value=slider.value;before.style.clipPath=`inset(0 ${100-value}% 0 0)`;divider.style.left=value+"%";knob.style.left=value+"%";}
slider.addEventListener("input",updateGrade);updateGrade();
const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".topbar nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>nav.classList.remove("open")));
const revealItems=document.querySelectorAll(".project-card,.service-grid article,.about-content");
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target)}}),{threshold:.12});
revealItems.forEach(item=>observer.observe(item));
