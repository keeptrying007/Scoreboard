let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-el")
let guestScore = document.getElementById("guest-el")
let timeEl = document.getElementById("time-el")
const foulEl = document.querySelector("#foul-el")
const foulAddOne = document.querySelector("#foulAddOne-btn")
let foulCount = 0
let guestFoulCount = 0
let foulGuestEL = document.getElementById("foulGuest-el")
const foulGuestAddOneBTN = document.getElementById("foulGuestAddOne-btn")

 function homeAddOne (){
    homeCount = homeCount + 1
    homeScore.textContent = homeCount
 }

 function homeAddTwo(){
    homeCount = homeCount + 2
    homeScore.textContent = homeCount
 }

 function homeAddThree(){
    homeCount = homeCount + 3
    homeScore.textContent = homeCount
 }

 function guestAddOne(){
    guestCount = guestCount +1
    guestScore.textContent = guestCount
 }

 function guestAddTwo(){
    guestCount = guestCount +2
    guestScore.textContent = guestCount
 }

 function guestAddThree(){
    guestCount = guestCount +3
    guestScore.textContent = guestCount
 }


 const timer = document.querySelector('.timer');
 const minutes = document.getElementById('minutes');
 const seconds = document.getElementById('seconds');
 const startBtn = document.getElementById('start');
 const stopBtn = document.getElementById('stop');
 
 let countDown;
 let timeInSeconds = 5400; 
 
 function startCountdown() {
   countDown = setInterval(() => {
     timeInSeconds--;
     const minutesLeft = Math.floor(timeInSeconds / 60);
     const secondsLeft = timeInSeconds % 60;
 
     minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
     seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
 
     if (timeInSeconds === 0) {
       clearInterval(countDown);
     }
   }, 1000);
 }
 
 function stopCountdown() {
   clearInterval(countDown);
 }
 
 startBtn.addEventListener('click', startCountdown);
 stopBtn.addEventListener('click', stopCountdown);



var timeLeft2 = 30;
var countdownTimer2;
var timer2 = document.getElementById('timer2');
var startBtn2 = document.getElementById('start-btn2');
var stopBtn2 = document.getElementById('stop-btn2');

function startTimer2() {
  countdownTimer2 = setInterval(function() {
    timeLeft2--;
    timer2.innerHTML = timeLeft2;
  
    if (timeLeft2 <= 0) {
      timeLeft2 = 30
    }
  }, 1000);
}

function stopTimer2() {
  clearInterval(countdownTimer2);
}

startBtn2.addEventListener('click', startTimer2);
stopBtn2.addEventListener('click', stopTimer2);

foulAddOne.addEventListener("click", function(){
   foulCount = foulCount + 1
   foulEl.textContent = foulCount
   if(foulCount === 7){
      alert("Free Throw")
   }
})

foulGuestAddOneBTN.addEventListener("click", function (){
   guestFoulCount = guestFoulCount + 1
   foulGuestEL.textContent = guestFoulCount
   if(guestFoulCount === 7){
      alert("Free Throw")
   }
})



