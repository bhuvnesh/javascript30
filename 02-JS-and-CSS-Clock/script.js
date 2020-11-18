function setDate() {
      
  const now = new Date();

  const sec = now.getSeconds();
  const secondsDegree = ((sec/60 )* 360)+ 90;
  document.querySelector(".second-hand").style.transform = `rotate(${secondsDegree}deg)`;

  const minute = now.getMinutes();
  const minutesDegree = ((minute/60 )* 360)+((sec/60)*6) + 90;
  document.querySelector(".min-hand").style.transform = `rotate(${minutesDegree}deg)`;

  const hour = now.getHours();
  const hoursDegree = ((hour/12 )* 360)+((minute/60)*30) + 90;
  document.querySelector(".hour-hand").style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate, 1000);