let homeCount = 0
let guestCount = 0
let homeScore = document.getElementById("home-el")
let guestScore = document.getElementById("guest-el")

 function homeAddOne(){
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



