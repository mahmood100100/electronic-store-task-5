const discount=document.querySelector('.discount');
const navbarr=document.querySelector('.navbarr');
const toUp=document.querySelector('.toUpbtn');
const timeRemaining = document.querySelector('.timeRemaining');
const increase = document.querySelector('.hidden .plus-minus .increase');
const decrease = document.querySelector('.hidden .plus-minus .decrease');
const product_counter = document.querySelector(".hidden .plus-minus span");
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
function downtime_counter(){
  const days= document.querySelector ('.time-remaining .days');
  const hours= document.querySelector ('.time-remaining .hours');
  const minutes= document.querySelector ('.time-remaining .minutes');
  const seconds= document.querySelector ('.time-remaining .seconds');
    const dis_date = new Date();
    dis_date.setDate(dis_date.getDate() + 123);
    dis_date.setHours(20,15,4,0);
    function updateCountdown() {
        const new_date = new Date();
        const dis_time = dis_date - new_date;
        if (dis_time > 0) {
          const day = Math.floor(dis_time / (1000 * 60 * 60 * 24));
          const hour = Math.floor((dis_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minute = Math.floor((dis_time % (1000 * 60 * 60)) / (1000 * 60));
          const second = Math.floor((dis_time % (1000 * 60)) / 1000);
    
          days.innerHTML=day;
          hours.innerHTML=hour;
          minutes.innerHTML=minute;
          seconds.innerHTML=second;
        } else {
            days.innerHTML=0;
            hours.innerHTML=0;
            minutes.innerHTML=0;
            seconds.innerHTML=0;
        }
      }
      setInterval(updateCountdown, 1000);
}
function downtime_counterb(){
  const daysb = document.querySelectorAll ('.finish-in .days');
const hoursb= document.querySelectorAll ('.finish-in .hours');
const minutesb= document.querySelectorAll ('.finish-in .minutes');
const secondsb= document.querySelectorAll ('.finish-in .seconds');
    const dis_date = new Date();
    dis_date.setDate(dis_date.getDate() + 123);
    dis_date.setHours(20,15,4,0);
    function updateCountdown() {
        const new_date = new Date();
        const dis_time = dis_date - new_date;
        if (dis_time > 0) {
          const day = Math.floor(dis_time / (1000 * 60 * 60 * 24));
          const hour = Math.floor((dis_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minute = Math.floor((dis_time % (1000 * 60 * 60)) / (1000 * 60));
          const second = Math.floor((dis_time % (1000 * 60)) / 1000);
          for (let i = 0; i <daysb.length ; i++) {
            daysb[i].innerHTML=day;
          }
          for (let i = 0; i <hoursb.length ; i++) {
            hoursb[i].innerHTML=hour;
          }
          for (let i = 0; i <minutesb.length ; i++) {
            minutesb[i].innerHTML=minute;
          }
          for (let i = 0; i <secondsb.length ; i++) {
            secondsb[i].innerHTML=second;
          }
        } 
      }
      setInterval(updateCountdown, 1000);
}
downtime_counter();
downtime_counterb();

window.addEventListener('scroll',()=>{
  if(window.scrollY>timeRemaining.offsetTop){
      toUp.classList.remove("opacity-0","invisible");
  }else{
      toUp.classList.add("opacity-0","invisible");
  }
})

const loader=document.querySelector('.loading_spinner');
window.addEventListener('load',()=>{
  setTimeout(()=>{
      loader.classList.add('opacity-0','invisible');
      document.body.style.overflow="auto";
  },1000)
});

toUp.addEventListener('click',()=>{
  window.scroll(
      {
          top:0,
          behavior:"smooth"
      }
  )
})

increase.addEventListener('click',()=>{
  console.log("Increasing");
  product_counter.innerHTML=parseInt(product_counter.innerHTML)+1
});

decrease.addEventListener('click',()=>{
  if(parseInt(product_counter.innerHTML)>1){
    product_counter.innerHTML=parseInt(product_counter.innerHTML)-1
    
  }
  console.log("decrease")
  
});