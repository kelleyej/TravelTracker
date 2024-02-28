import { getData } from './apiCalls.js'
import { viewPreviousTrip } from './past-trips.js'

// Query Selectors
const dashboardHeader = document.querySelector('h1');
const dashboardParagraph = document.querySelector('p')

// EventListeners
window.addEventListener('load', renderTravelerData)

//Global Variables
let currentTraveler; 

// Functions
function renderTravelerData(){
getData()
.then(([travelers, trips, destinations]) => {
    currentTraveler = travelers.travelers[Math.floor(Math.random() * travelers.travelers.length)]
    welcomeTraveler(currentTraveler, trips.trips, destinations.destinations)
})
}

function welcomeTraveler({id, name}, allTrips, allDestinations){
    dashboardHeader.innerText = `Welcome back, ${name}!`
    let previousTrip = viewPreviousTrip(id, allTrips, allDestinations)
    console.log(previousTrip)
    dashboardParagraph.innerText = `How was your trip to ${previousTrip}?`
}