function calculateAnnualTripCost(id, allTrips, allDestinations) {
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(b.date) - new Date(a.date))
    let year = allPastTrips[0].date.split('/')[0]
    let annualTrips = allPastTrips.filter(trip => {
        return trip.date.split('/')[0] === year; 
    });
    let totalTripCost = annualTrips.reduce((total, trip) => {
        return total += ((trip.duration * (allDestinations.find(destination => {
        return destination.id === trip.destinationID
       })).estimatedLodgingCostPerDay) + allDestinations.find(destination =>{
        return destination.id === trip.destinationID
       }).estimatedFlightCostPerPerson) 
    }, 0);
    return (totalTripCost + (totalTripCost * .10)).toFixed(2);
};

function calculateAnnualFlightCost(id, allTrips, allDestinations){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(b.date) - new Date(a.date))
    let year = allPastTrips[0].date.split('/')[0]
    let annualTrips = allPastTrips.filter(trip => {
        return trip.date.split('/')[0] === year; 
    });
    let totalFlightCost = annualTrips.reduce((total, trip) => {
        return total += allDestinations.find(destination => {
        return destination.id === trip.destinationID
       }).estimatedFlightCostPerPerson
    }, 0);
    return totalFlightCost.toFixed(2)
}

function calculateAnnualLodgingCost(id, allTrips, allDestinations){
    let allPastTrips = allTrips.filter(trip => {
        return trip.userID === id && trip.status === "approved"; 
    }).sort((a, b) => new Date(b.date) - new Date(a.date))
    let year = allPastTrips[0].date.split('/')[0]
    let annualTrips = allPastTrips.filter(trip => {
        return trip.date.split('/')[0] === year; 
    });
    let totalLodgingCost = annualTrips.reduce((total, trip) => {
        return total += trip.duration * (allDestinations.find(destination => {
        return destination.id === trip.destinationID
       })).estimatedLodgingCostPerDay
    }, 0);
    return totalLodgingCost.toFixed(2);
}

export { calculateAnnualTripCost, calculateAnnualFlightCost, calculateAnnualLodgingCost }