const navbar_dekstop = document.querySelector(".navbar_dekstop") ; 
const navbar_mobile = document.querySelector(".navbar_mobile") ; 


window.addEventListener("scroll", () =>{
    console.log(window.scrollY);
    
    if (window.scrollY >=500) {
        navbar_dekstop.classList.add("scroll-down-nav") ; 
        navbar_mobile.classList.add("scroll-down-nav") ; 
    }else {
        navbar_dekstop.classList.remove("scroll-down-nav");
        navbar_mobile.classList.remove("scroll-down-nav") ; 
    }
})