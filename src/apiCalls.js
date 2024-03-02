function runGet(){
let allData = [
    fetch('http://localhost:3001/api/v1/travelers'),
    fetch('http://localhost:3001/api/v1/trips'),
    fetch('http://localhost:3001/api/v1/destinations')
]
return allData; 
}

function runPost(allTrips, traveler, destinationSelection, travelers, date, duration){
    return fetch('http://localhost:3001/api/v1/trips', {
        method: 'POST', 
        body: JSON.stringify({
           id: allTrips.length + 1, 
           userID: traveler.id,
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
}

function getData(){
    return Promise.all(runGet())
    .then(response => {
        return Promise.all(response.map(res => {
        return res.json()
        }));
    });
};

export { getData, runPost }