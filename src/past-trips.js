function viewPastTrips(id, allTrips, allDestinations) {
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    allPastTrips.length = allPastTrips.length -1 
    let pastTrips = allPastTrips.map(trip => {
        return trip = {
            destination: allDestinations.find(place => place.id === trip.destinationID).destination, 
            travelers: trip.travelers, 
            date: trip.date, 
            duration: trip.duration
        };
    });
    return pastTrips; 
};

function viewPreviousTrip(id, allTrips, allDestinations){
    let previousTripLocation; 
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    allPastTrips.length = allPastTrips.length - 1 
    let recentTrip = allPastTrips.slice(-1)
    if(recentTrip.length >= 1){
    return previousTripLocation = allDestinations.find(place => {
        return place.id === recentTrip[0].destinationID
    }).destination;
    } else {
    return `You have not been on any trips yet.`;
    };
};

function viewUpcomingTrip(id, allTrips){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    let pastTripDestination = allPastTrips.map(destination => {
        return destination = {
            destinationID: destination.destinationID,
            date: destination.date, 
            duration: destination.duration
        };
    });
    return pastTripDestination.slice(-1);
};

export { viewPastTrips, viewUpcomingTrip, viewPreviousTrip }

