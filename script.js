var seconds=document.getElementsByClassName("seconds");
var minutes=document.getElementsByClassName("minutes");
var currMinute=0;
var currSec=0
var started=true;
var timerID=setInterval("timer()",1000);
  function timer() {
    currSec+=1;
    console.log(currSec);
    if(currSec==60)
    {
      if(currMinute<=9){
        minutes[0].textContent="0"+currMinute;
      }
      else {
        minutes[0].textContent=currMinute+=1;
      }
      seconds[0].textContent=0;
      currSec=0;
    }
    else if(currMinute==59&&currSec==60)
    {
      currSec=0;
      currMinute=0;
      seconds[0].textContent="0"+0;
      minutes[0].textContent="0"+0;
    }
    else {
      if(currSec<=9){
        seconds[0].textContent="0"+currSec;
      }
      else {
        seconds[0].textContent=currSec;
      }
    }
  }
function reset() {
  console.log("adas");
  currMinute=0;
  currSec=0
  seconds[0].textContent="0"+0;
  minutes[0].textContent="0"+0;
}
function pause()
{
  if(started==true)
  {
    clearInterval(timerID);
    started=false
  }
  else {
    timerID=setInterval("timer()",1000);
    started=true;
  }
}
$("#reset").click(function(){
  reset();
});
$("#start").click(function () {
  pause();
})
