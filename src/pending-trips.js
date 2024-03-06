function findPendingTrips(id, allTrips, allDestinations) {
    let pendingTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "pending"
    });
    let tripInfo = pendingTrips.map(info => {
        return {
            duration: info.duration, 
            travelers: info.travelers, 
            date: info.date, 
            destination: allDestinations.find(place => place.id === info.destinationID).destination,
            image: allDestinations.find(place => place.id === info.destinationID).image,
            alt: allDestinations.find(place => place.id === info.destinationID).alt, 
        }
    }).sort((a, b) => new Date(a.date) - new Date(b.date));

   return tripInfo;
};
      
export { findPendingTrips }
