import { getData, postData } from './apiCalls.js'
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
const airplaneButton = document.querySelector('button');
const mainDisplay = document.querySelector('.main-display');
const bookDisplay = document.querySelector('.book-display');
const header = document.querySelector('header');
const form = document.querySelector('form');
const date = document.querySelector('.date');
const travelers = document.querySelector('.travelers');
const duration = document.querySelector('.duration');
const destinationSelection = document.querySelector('select')

// EventListeners
window.addEventListener('load', renderTravelerData)
globeButton.addEventListener('click', function() {
    displayMoneySpent(currentTraveler.id, allTrips, allDestinations)
});
airplaneButton.addEventListener('click', bookNextTrip)
form.addEventListener('submit', function(event) {
    event.preventDefault()
    fetch('http://localhost:3001/api/v1/trips', {
     method: 'POST', 
     body: JSON.stringify({
        id: allTrips.length + 1, 
        userID: currentTraveler.id,
        destinationID: Number(destinationSelection.value), 
        travelers: Number(travelers.value), 
        date: date.value, 
        duration: Number(duration.value),
        status: "pending", 
        suggestedActivities: []
        }), 
     headers: {
        'Content-type': 'application/json'
     }
    })
     .then(res => res.json())
     .then(data => console.log(data))
})

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
    listDestinations(allDestinations)
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
    let trips = viewPastTrips(id, allTrips, allDestinations)
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

function displayPendingTrips(){
    
}