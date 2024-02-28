import { getData } from './apiCalls.js'
import { viewPreviousTrip, calculateAnnualTripCost } from './past-trips.js'

// Query Selectors
const dashboardHeader = document.querySelector('h1');
const dashboardParagraph = document.querySelector('p')
const globeButton = document.querySelector('img');
const moneySpentDisplay = document.querySelector('.money-spent');
const imageDisplay = document.querySelector('.image-container');
const moneyDisplay = document.querySelector('.money-display')

// EventListeners
window.addEventListener('load', renderTravelerData)
globeButton.addEventListener('click', function() {
    displayMoneySpent(currentTraveler.id, allTrips, allDestinations, "2022")
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
})
}

function welcomeTraveler({id, name}, allTrips, allDestinations){
    dashboardHeader.innerText = `Welcome back, ${name}!`
    let previousTrip = viewPreviousTrip(id, allTrips, allDestinations)
    console.log(previousTrip)
    if(previousTrip !== ''){
       dashboardParagraph.innerText = `How was your trip to ${previousTrip}?` 
    } else {
        dashboardParagraph.innerText = `You have not been on any trips yet. Plan yours today!`
    }
}

function displayMoneySpent(id, allTrips, allDestinations, year){
    imageDisplay.classList.add('hidden');
    moneySpentDisplay.classList.remove('hidden');
    let amountSpent = calculateAnnualTripCost(id, allTrips, allDestinations, year)
    moneyDisplay.innerText = `You have spent $${amountSpent} so far this year.`
}