
const hamburger=document.querySelector("#hamburger");
const menu=document.querySelector("#menu");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
})


const hLinks=document.querySelectorAll(".hLink");

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden");
       hamburger.classList.toggle("bg-white");
    })
})

const body=document.querySelector("body");
const moon=document.querySelector("#moon");

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark");//Default olarak dark class i body de olmayacak ama tiklayinca dark olacak tekrar tiklayinca kaldiracak
   
})