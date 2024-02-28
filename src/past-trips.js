function viewPastTrips(id, allTrips){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    let pastTripDestination = allPastTrips.map(destination => {
        return destination.destinationID
    })
    pastTripDestination.length = pastTripDestination.length - 1
    return pastTripDestination; 
};

function viewPreviousTrip(id, allTrips, allDestinations){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    allPastTrips.length = allPastTrips.length - 1
    let recentTrip = allPastTrips.slice(-1)
    let previousTripLocation = allDestinations.find(place => {
        return place.id === recentTrip[0].destinationID
    })
    return allPastTrips ? previousTripLocation.destination : `You have not been on any trips yet.`; 
}

function calculateAnnualTripCost(id, allTrips, allDestinations) {
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    let lastTrip = allPastTrips.splice(-1)
    let year = lastTrip[0].date.split('/')[0]
    // allPastTrips.length = allPastTrips.length - 1;
    let annualTrips = allPastTrips.filter(trip => {
        return trip.date.split('/')[0] === year; 
    })
    console.log(annualTrips)
    let totalTripCost = annualTrips.reduce((total, trip) => {
       return total += ((trip.duration * (allDestinations.find(destination => {
        return destination.id === trip.destinationID
       })).estimatedLodgingCostPerDay) + allDestinations.find(destination =>{
        return destination.id === trip.destinationID
       }).estimatedFlightCostPerPerson) 
    }, 0)
    return totalTripCost + (totalTripCost * .10);
}

function viewUpcomingTrip(id, allTrips){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    let pastTripDestination = allPastTrips.map(destination => {
        return destination = {
            destinationID: destination.destinationID,
            date: destination.date, 
            duration: destination.duration
        }
    })
    return pastTripDestination.slice(-1);
}

export { viewPastTrips, viewUpcomingTrip, calculateAnnualTripCost, viewPreviousTrip }


// id: 7,
// destination: "Paris, France",
// estimatedLodgingCostPerDay: 100,
// estimatedFlightCostPerPerson: 395,
// image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
// alt: "city during the day time with eiffel tower"
// },
// id: 10,
// userID: 3,
// destinationID: 7,
// travelers: 6,
// date: "2022/07/23",
// duration: 17,
// status: "approved",
// suggestedActivities: [ ]
// },