const increase = document.querySelectorAll(' .plus-minus .increase');
const decrease = document.querySelectorAll(' .plus-minus .decrease');
const product_counter = document.querySelectorAll(" .plus-minus span");
const discount=document.querySelector('.discount');
const navbarr=document.querySelector('.navbarr');
console.log(product_counter);
console.log(increase[0]);
console.log(decrease);
window.addEventListener('scroll',()=>{
  if(window.scrollY>0){
      discount.style.cssText="display: none;";
      navbarr.style.cssText="overflow: hidden";
      navbarr.classList.add("fixed-top");
  }else{
      discount.style.cssText="display: block;";
      navbarr.classList.remove("fixed-top");
  }
})
for (let i = 0; i < product_counter.length;i++) {
increase[i].addEventListener('click',()=>{
    console.log("Increasing");
    product_counter[i].innerHTML=parseInt(product_counter[i].innerHTML)+1
  });
  
  decrease[i].addEventListener('click',()=>{
    if(parseInt(product_counter[i].innerHTML)>1){
      product_counter[i].innerHTML=parseInt(product_counter[i].innerHTML)-1
      
    }
    console.log("decrease")
    
  });

}