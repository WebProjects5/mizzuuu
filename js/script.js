
if (!window.Notification) {
  console.log("Browser does not support notifications.");
} else {
  if(Notification.permission!="granted")
      Notification.requestPermission();
}


var bday = false, notNotified1= true,notNotified2=true;
let clicked = 0;
var d = new Date();
  function setTimer() {
      d = new Date();  
      let year = 0;
      if(d.getMonth()>9) {
          if(d.getMonth()==10 && d.getDate()<=16) year = d.getFullYear();
          else year = d.getFullYear()+1;
      }

      else year = d.getFullYear();

      let d2 = new Date(year,10,16,0,0);
      var milliseconds = d2-d;
      var day, hour, minute, seconds;
      seconds = Math.floor(milliseconds / 1000);
      minute = Math.floor(seconds / 60);
      seconds = seconds % 60;
      hour = Math.floor(minute / 60);
      minute = minute % 60;
      day = Math.floor(hour / 24);
      hour = hour % 24;
      document.getElementById("header2").innerHTML= "<h3> There are "+day+" days, "+hour+" hours, "+minute+" minutes and "+seconds+" seconds to go for your next birthday</h3>";
  }

function showTime() {
  let d1 = new Date();
  let d2 = new Date(2001,10,16,5,5,0);
  
  if(d1.getMonth()==10 && d1.getDate()==16){
      bday = true;
      document.getElementById("header1").style.display="block";
      document.getElementById("footer1").style.display="block";
      document.getElementById("header2").style.display="none";
  }
  else{
      bday = false;
      document.getElementById("header1").style.display="none";
      document.getElementById("footer1").style.display="none";
      document.getElementById("header2").style.display="block";  
  }
  // and here 
  if ( d1.getMonth() === 10 && d1.getDate() === 13 && d1.getHours() < 21 ) {
    notifyUser(1);
  }
  if (d1.getMonth() === 10 && d1.getDate() >= 13 && d1.getHours() === 22) {
    notifyUser(2);
  }

  let d = d1-d2;
  let secs= Math.floor(d/1000);
  let mins = Math.floor(secs/60); 
  let hours = Math.floor(mins/60);
  let days = Math.floor(hours/24);
  let months = Math.floor(days/30);
  let years = Math.floor((days-4)/365);

  let currentTime =  years+ " years, "+months+" months, "+days+" days, " + hours + " hours, " + mins + " minutes, " + secs+" seconds ";

  document.getElementById("clock").innerHTML = currentTime;
          
}

setInterval(showTime, 1000);

if(!bday){
setInterval(setTimer,1000);
}
// change here
if(d.getDate()!=13){ 
  notNotified2 = true;
  notNotified2 = true; 
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}}

function secretMsg(){
  clicked +=1;
  if(clicked>=5){
      modal.style.display = "block";
      clicked = 0;
  }
}

function notifyUser(i) {
    if (Notification.permission === "granted" && i==1 && notNotified1) {
      push.create("Happy Birthday Mizzuuuu 🎉🎂!!!",
      { 
        body:"Happy birthday idiot. Have a nice day and enjoy a lot ok 😉",
        icon:"../images/cake.png"
       });    
      notNotified1 = false;
    }

    if (Notification.permission === "granted" && i==2 && notNotified2) {
      push.create("Happy Birthday Mizzuuuu 🥳🎉", 
      { 
        body:"Last wish is also mine 😜. How was your day mizzuuu ? Hope u enjoyed a lot." ,
        icon:"../images/logo.png"
    } );
      notNotified2 = false;
    } 
  
}
