var seconds=document.getElementsByClassName("seconds");
var minutes=document.getElementsByClassName("minutes");
var currMinute=0;
var currSec=0
var timerID=setInterval(function timer(){
    currSec+=1;
  if(currSec==60)
  {
    minutes[0].textContent=currMinute+=1;
    seconds[0].textContent=0;
    currSec=0;
  }
  else if(currMinute==59&&currSec==60)
  {
    currSec=0;
    currMinute=0;
    seconds[0].textContent=0;
    minutes[0].textContent=0;
  }
  else {
      seconds[0].textContent=currSec;
  }
},1000);
