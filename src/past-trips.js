function viewPastTrips(id, allTrips){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id; 
    }).map(destination => destination.destinationID)
    return allPastTrips; 
}

export { viewPastTrips }
