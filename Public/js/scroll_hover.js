
function AddAnimation(el_class) {
    return observer = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add(el_class);
            }else{
                entry.target.classList.remove(el_class);
            }
        }
        )
    }, { threshold: 0.5 })
    
}



const gambar_dituju = document.querySelectorAll('.gambar_percobaan') ; 
gambar_dituju.forEach((el)=> AddAnimation('img_target_mobile').observe(el)) ;


const categories_first = document.querySelectorAll('.first-card') ; 
categories_first.forEach((el)=>  AddAnimation('first-card-mobile').observe(el))  ;


const categories_second = document.querySelectorAll('.second-card') ; 
categories_second.forEach((el)=>  AddAnimation('second-card-mobile').observe(el)) 

const categories_third = document.querySelectorAll('.third-card') ; 
categories_third.forEach((el)=>  AddAnimation('third-card-mobile').observe(el)) 

const categories_first_text = document.querySelectorAll('.description_categories_1') ; 
categories_first_text.forEach((el) =>  AddAnimation('description_categories_1_mobile').observe(el)) 

const categories_second_text = document.querySelectorAll('.description_categories_2') ; 
categories_second_text.forEach((el) =>  AddAnimation('description_categories_2_mobile').observe(el))

const categories_third_text = document.querySelectorAll('.description_categories_3') ; 
categories_third_text.forEach((el) =>  AddAnimation('description_categories_3_mobile').observe(el))

'layout_effect2'
const layout_effect2= document.querySelectorAll('.layout_effect2') ; 
layout_effect2.forEach((el) =>  AddAnimation('layout_effect2_mobile').observe(el))
const layout_effect1= document.querySelectorAll('.layout_effect1') ; 
layout_effect1.forEach((el) =>  AddAnimation('layout_effect1_mobile').observe(el))
const layout_effect3= document.querySelectorAll('.layout_effect3') ; 
layout_effect3.forEach((el) =>  AddAnimation('layout_effect3_mobile').observe(el))