function findPendingTrips(id, allTrips, allDestinations){
let pendingTrips = allTrips.filter(trip => {
    return trip.userID === id && trip.status === "pending"
})
let pendingTripDescription = pendingTrips.map(trip => {
    return trip = {
        travelers: trip.travelers, 
        duration: trip.duration, 
        date: trip.date, 
        destination: allDestinations.find(location => trip.destinationID === location.id).destination
    }
}) 
return pendingTrips.length > 0 ? pendingTripDescription : `You currently have no pending trips.`; 
}

export { findPendingTrips }