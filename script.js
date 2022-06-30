let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");
let calculateTimeBtn = document.getElementById("calculateTimeBtn");
function calculateTime() {
  var a = new Date(startTime.value).getTime();
  var b = new Date(endTime.value).getTime();
  if (a < b) {
    Swal.fire(msToTime(Math.abs(a - b)));
  } else if(a > b) {
    Swal.fire({
      icon: "error",
      text: "Something went wrong!",
      footer: "End date is older than start date.",
    });
  }
  else {
    Swal.fire("You didn't enter any date!");
  }
}
function msToTime(duration) {
    if (duration>=3660000) {
  hours = duration / 3600000;  
  preMinutes = duration - (Math.floor(hours) * 3600000);
  minutes = preMinutes / 60000;
  finalHours = Math.floor(hours); 
  finalMinutes = Math.floor(minutes);
  console.log(hours, preMinutes, duration);
  return finalHours + " hours " + finalMinutes + " minutes";}
    else if (duration<3660000) {
    minutes = duration / 60000;
    finalMinutes = Math.floor(minutes);
    return finalMinutes + " minutes";}
}
