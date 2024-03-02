import { getData, runPost } from './apiCalls.js'
import { viewPreviousTrip, calculateAnnualTripCost, viewUpcomingTrip, viewPastTrips, calculateAnnualLodgingCost, calculateAnnualFlightCost } from './past-trips.js'
import { findPendingTrips } from './pending-trips.js'
import { quotes } from '../src/data/travel-quotes'

// Query Selectors
const dashboardHeader = document.querySelector('h1');
const dashboardParagraph = document.querySelector('p');
const globeButton = document.querySelector('.globe');
const moneySpentDisplay = document.querySelector('.money-spent');
const imageDisplay = document.querySelector('.image-container');
const moneyDisplay = document.querySelector('.money-display');
const upcomingTripSection = document.querySelector('.upcoming-trip');
const pastTripSection = document.querySelector('.past-trip');
const bookTrip = document.querySelector('.book-button');
const mainDisplay = document.querySelector('.main-display');
const bookDisplay = document.querySelector('.book-display');
const header = document.querySelector('header');
const bookTripForm = document.querySelector('.book-trip-form');
const date = document.querySelector('.date');
const travelers = document.querySelector('.travelers');
const duration = document.querySelector('.duration');
const destinationSelection = document.querySelector('select');
const pendingTripsSection = document.querySelector('.pending-trips');
const pendingTripParagraph = document.querySelector('.pending-trip-para');
const submitButton = document.querySelector('.submit-button');
const postTripSection = document.querySelector('.post-trips')
const showEstimateButton = document.querySelector('.show-estimate');
const bookTripSection = document.querySelector('.book-trip')
const showCost = document.querySelector('.show-cost')
const loginForm = document.querySelector('.login-form')
const username = document.querySelector('.enter-username');
const password = document.querySelector('.enter-password')
const textContainer = document.querySelector('.text-container')
const loginPage = document.querySelector('.login-page')
const quote = document.querySelector('.quote')
const feedback = document.querySelector('.feedback');
const agentMessage = document.querySelector('.agent-message')
const footer = document.querySelector('footer');
const displayLodgingCost = document.querySelector('.lodging-cost');
const displayTotalCost = document.querySelector('.total-cost');
const displayFligthCost = document.querySelector('.flight-cost')
// EventListeners
window.addEventListener('load', function() {
    renderRandomQuote(quotes)
})
// globeButton.addEventListener('click', function() {
//     displayMoneySpent(traveler.id, allTrips, allDestinations)
// });
bookTrip.addEventListener('click', function() {
    bookNextTrip()
    console.log("IS THIS WORKING?")
})
bookTripForm.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log("HELPPPP")
 return runPost(allTrips, traveler, destinationSelection, travelers, date, duration)
     .then(data => {
        clearForm()
        backToMain()
        renderTravelerData()
     })
});

showEstimateButton.addEventListener('click', function() {
    displayPendingTripCost(destinationSelection, duration, allDestinations, travelers)
  
})

function clearForm(){
    date.value = '';
    duration.value = '';
    travelers.value = '';
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    authenticateLogin()
    authenticate()
    changeToMainDisplay()
    findCurrentTraveler(travelerUsername)
    console.log('current traveler:', currentTraveler)
    
})

function renderRandomQuote(quotes){
   let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
   quote.innerText = `${randomQuote}`
}
let authorizePassword = false;
let authorizeUsername = false;  

function changeToMainDisplay(){
    if(authorizePassword === true && authorizeUsername === true){
    mainDisplay.classList.remove("hidden");
    textContainer.classList.remove("hidden")
    loginPage.classList.add("hidden")
    footer.classList.remove("hidden")
    renderTravelerData()
    }
}

function authenticateLogin(){
   let array = [...Array(51).keys()]
   let modifiedArray = array.shift()
   let numberArray = array.map(element => {
    return Number(element)
   })
   numberArray.forEach(number => {
    if(username.value === `traveler${number}`){
        authorizeUsername = true; 
    } if(password.value === "travel"){
        authorizePassword = true; 
    }
})
 
 travelerUsername = username.value; 
 travelerUsername = travelerUsername.split('')
 console.log(travelerUsername)
}

function authenticate(){
if(!authorizePassword){
    feedback.innerText = "Your password is incorrect."
} if(!authorizeUsername){
    feedback.innerText = "Your username is incorrect."
}
}


function findCurrentTraveler(travelerUsername){
    let password; 
    let newPassword;
 
    if(travelerUsername.length === 9){
      password = travelerUsername.splice(-1)
      newPassword = password.join('')
    } else if (travelerUsername.length === 10){
     password = travelerUsername.splice(-2)
     newPassword = password.join('')
    }
    console.log(newPassword)
    currentTraveler = newPassword; 
  }

//Global Variables
let currentTraveler; 
let allTrips;
let allDestinations; 
let travelerUsername; 
let traveler; 

// Functions
function renderTravelerData(){
getData()
.then(([travelers, trips, destinations]) => {
    traveler = travelers.travelers[currentTraveler - 1]
    console.log('render:', traveler)
    allTrips = trips.trips
    allDestinations = destinations.destinations
    welcomeTraveler(traveler, allTrips, allDestinations);
    displayUpcomingTrip(traveler.id, allTrips, allDestinations);
    displayPastTrips(traveler.id, allTrips, allDestinations)
    listDestinations(allDestinations)
    displayPendingTrips(traveler.id, allTrips, allDestinations)
    displayMoneySpent(traveler.id, allTrips, allDestinations)
})
}

function backToMain(){
    mainDisplay.classList.remove("hidden");
    header.classList.remove("hidden")
    bookDisplay.classList.add("hidden")
}

function welcomeTraveler({id, name}, allTrips, allDestinations){
    dashboardHeader.innerText = `Welcome back, ${name}!`
    let previousTrip = viewPreviousTrip(id, allTrips, allDestinations)
    if(previousTrip !== ''){
       dashboardParagraph.innerText = `How was your trip to ${previousTrip}?` 
    } else {
        dashboardParagraph.innerText = `You have not been on any trips yet. Plan yours today!`
    }
}

function displayMoneySpent(id, allTrips, allDestinations){
    let totalCost = calculateAnnualTripCost(id, allTrips, allDestinations)
    let flightCost = calculateAnnualFlightCost(id, allTrips, allDestinations)
    let lodgingCost = calculateAnnualLodgingCost(id, allTrips, allDestinations)
    displayTotalCost.innerText = `$${totalCost}`
    displayFligthCost.innerText = `$${flightCost}`
    displayLodgingCost.innerText = `$${lodgingCost}`
}

function displayUpcomingTrip(id, allTrips, allDestinations){
    let upcomingTrip = viewUpcomingTrip(id, allTrips)
    let locationOfTrip = allDestinations.find(location => {
        return location.id === upcomingTrip[0].destinationID
    })
    upcomingTripSection.innerText = `On ${upcomingTrip[0].date}, you will be leaving for ${locationOfTrip.destination} for ${upcomingTrip[0].duration} days!`
}

function displayPastTrips(id, allTrips, allDestinations){
    let trips = viewPastTrips(id, allTrips, allDestinations)
    pastTripSection.innerHTML = '';
    trips.forEach(trip => {
        pastTripSection.innerHTML += `On ${trip.date}, you visited <span>${trip.destination}</span> with ${trip.travelers - 1} other traveler(s)!<br><br>`
    })
}

function bookNextTrip(){
    mainDisplay.classList.add("hidden");
    header.classList.add("hidden")
    bookDisplay.classList.remove("hidden")
}

function listDestinations(allDestinations){
allDestinations.forEach(location => {
 destinationSelection.innerHTML += 
 `<option value=${location.id}>${location.destination}</option>`
    })
}

function displayPendingTrips(id, allTrips, allDestinations){
    let pendingTrips = findPendingTrips(id, allTrips, allDestinations)
    postTripSection.innerHTML = '';
    if(pendingTrips.length === 0){
        pendingTripParagraph.innerText = "You currently have no pending trips."
    } else if (pendingTrips.length > 0 && pendingTrips.length <= 3) {
    pendingTrips.forEach(trip => {
      postTripSection.innerHTML += `Currently waiting approval for a trip to ${trip.destination} on ${trip.date} with ${trip.travelers} other travelers!<br><br>`
    })
    } else {
        for(let i = 0; i < pendingTrips.length ; i++){
            postTripSection.innerHTML += `Currently waiting approval for a trip to ${pendingTrips[i].destination} on ${pendingTrips[i].date} with ${pendingTrips[i].travelers} other travelers!<br><br>`
            if(i === 2){
            break;   
            } 
        }
        agentMessage.innerText = `You cannot book more trips at this time. Please wait for agent approval.`
        // bookTrip.disabled = true; 
    }
    console.log(pendingTrips.length)
}

function calculatePendingTripCost(destinationSelection, duration, allDestinations){
    let findLocation = allDestinations.find(location => {
        return location.id === Number(destinationSelection.value)
    })
    let tripCost = ((Number(duration.value) * findLocation.estimatedLodgingCostPerDay) + findLocation.estimatedFlightCostPerPerson)
    let agentFee = tripCost * .10
    let totalCost = (tripCost + agentFee).toFixed(2)
    return totalCost; 
}

function displayPendingTripCost(destinationSelection, duration, allDestinations) {
    let cost = calculatePendingTripCost(destinationSelection, duration, allDestinations)
    if(travelers.value !== '' && duration.value !== ''){
      showCost.innerText = `This trip is estimated to cost approximately $${cost}.`  
    } else {
        showCost.innerText = `Please fill out all fields to estimate total trip cost.`
    }
}