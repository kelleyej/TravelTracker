import { getData } from './apiCalls.js'
import { viewPreviousTrip, calculateAnnualTripCost, viewUpcomingTrip, viewPastTrips } from './past-trips.js'

// Query Selectors
const dashboardHeader = document.querySelector('h1');
const dashboardParagraph = document.querySelector('p')
const globeButton = document.querySelector('img');
const moneySpentDisplay = document.querySelector('.money-spent');
const imageDisplay = document.querySelector('.image-container');
const moneyDisplay = document.querySelector('.money-display')
const upcomingTripSection = document.querySelector('.upcoming-trip')
const pastTripSection = document.querySelector('.past-trip')

// EventListeners
window.addEventListener('load', renderTravelerData)
globeButton.addEventListener('click', function() {
    displayMoneySpent(currentTraveler.id, allTrips, allDestinations)
});


//Global Variables
let currentTraveler; 
let allTrips;
let allDestinations; 

// Functions
function renderTravelerData(){
getData()
.then(([travelers, trips, destinations]) => {
    currentTraveler = travelers.travelers[Math.floor(Math.random() * travelers.travelers.length)]
    allTrips = trips.trips
    allDestinations = destinations.destinations
    welcomeTraveler(currentTraveler, allTrips, allDestinations);
    displayUpcomingTrip(currentTraveler.id, allTrips, allDestinations);
    displayPastTrips(currentTraveler.id, allTrips, allDestinations)
})
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
   let location = viewPastTrips(id, allTrips)
    let nameOfLocation = allDestinations.filter(loc => {
        return location.includes(loc.id)
    })
    console.log(location)
    nameOfLocation.forEach(place => {
        pastTripSection.innerHTML += `You visited ${place.destination}.<br>`
    })
   
  
}