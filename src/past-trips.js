function viewPastTrips(id, allTrips, allDestinations) {
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(a.date) - new Date(b.date))
    allPastTrips.pop()
   
        let pastTrips = allPastTrips.map(trip => {
        return trip = {
            destination: allDestinations.find(place => place.id === trip.destinationID).destination, 
            image: allDestinations.find(place => place.id === trip.destinationID).image, 
            alt: allDestinations.find(place => place.id === trip.destinationID).alt,
            travelers: trip.travelers, 
            date: trip.date, 
            duration: trip.duration
        };
    });
    return pastTrips;
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

export { viewPastTrips, viewUpcomingTrip }

