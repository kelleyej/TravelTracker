function viewPastTrips(id, allTrips, allDestinations){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    allPastTrips.length = allPastTrips.length -1 
    let pastTrips = allPastTrips.map(trip => {
        return trip = {
            destination: allDestinations.find(place => place.id === trip.destinationID).destination, 
            travelers: trip.travelers, 
            date: trip.date, 
        }
    })
    console.log(pastTrips)
    return pastTrips; 
};

function viewPreviousTrip(id, allTrips, allDestinations){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
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
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    let lastTrip = allPastTrips.splice(-1)
    let year = lastTrip[0].date.split('/')[0]
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
    console.log((totalTripCost + (totalTripCost * .10)).toFixed(2))
    return (totalTripCost + (totalTripCost * .10)).toFixed(2);
}

function viewUpcomingTrip(id, allTrips){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
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

