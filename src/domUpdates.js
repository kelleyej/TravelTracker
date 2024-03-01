import { getData, runPost } from './apiCalls.js'
import { viewPreviousTrip, calculateAnnualTripCost, viewUpcomingTrip, viewPastTrips } from './past-trips.js'
import { findPendingTrips } from './pending-trips.js'

// Query Selectors
const dashboardHeader = document.querySelector('h1');
const dashboardParagraph = document.querySelector('p');
const globeButton = document.querySelector('img');
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
const loginButton = document.querySelector('.login-button')

// EventListeners
// window.addEventListener('load', renderTravelerData)
globeButton.addEventListener('click', function() {
    displayMoneySpent(currentTraveler.id, allTrips, allDestinations)
});
bookTrip.addEventListener('click', function() {
    bookNextTrip()
    console.log("IS THIS WORKING?")
})
bookTripForm.addEventListener('submit', function(event) {
    event.preventDefault()
 return runPost(allTrips, currentTraveler, destinationSelection, travelers, date, duration)
  
     .then(data => {
        renderTravelerData()
        
     })

});
submitButton.addEventListener('click', backToMain)
showEstimateButton.addEventListener('click', function() {
    displayPendingTripCost(destinationSelection, duration, allDestinations)
})

loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    authenticateLogin()
})


function authenticateLogin(){
   let array = [...Array(51).keys()]
   let modifiedArray = array.shift()
   let numberArray = array.map(element => {
    return Number(element)
   })
   numberArray.forEach(number => {
    if(username.value === `traveler${number}` && password.value === "travel"){
        console.log("YAYAY")
    }
 })
 console.log(username.value)
 
}
function findCurrentTraveler(username){
    
}

//Global Variables
let currentTraveler; 
let allTrips;
let allDestinations; 

// Functions
function renderTravelerData(){
getData()
.then(([travelers, trips, destinations]) => {
    if(!currentTraveler){
       currentTraveler = travelers.travelers[Math.floor(Math.random() * travelers.travelers.length)] 
    }

    allTrips = trips.trips
    allDestinations = destinations.destinations
    welcomeTraveler(currentTraveler, allTrips, allDestinations);
    displayUpcomingTrip(currentTraveler.id, allTrips, allDestinations);
    displayPastTrips(currentTraveler.id, allTrips, allDestinations)
    listDestinations(allDestinations)
    displayPendingTrips(currentTraveler.id, allTrips, allDestinations)
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
    imageDisplay.classList.add('hidden');
    moneySpentDisplay.classList.remove('hidden');
    let amountSpent = calculateAnnualTripCost(id, allTrips, allDestinations)
    moneyDisplay.innerText = `You have spent $${amountSpent} so far this year.`
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
    if(pendingTrips === `You currently have no pending trips.`){
        pendingTripParagraph.innerText = "You currently have no pending trips."
    } else {
    pendingTrips.forEach(trip => {
      postTripSection.innerHTML += `Currently waiting approval for a trip to ${trip.destination} on ${trip.date} with ${trip.travelers} other travelers!`
    })
    }
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
    showCost.innerText = `This trip is estimated to cost approximately $${cost}.`
}