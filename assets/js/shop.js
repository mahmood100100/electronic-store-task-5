
const discount=document.querySelector('.discount');
const navbarr=document.querySelector('.navbarr');
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
          console.log(dis_time);
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
downtime_counterb();  