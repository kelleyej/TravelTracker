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
           date: setMinDate(date.value), 
           duration: Number(duration.value),
           status: "pending", 
           suggestedActivities: []
           }), 
        headers: {
           'Content-type': 'application/json'
        }
    });
};  

function getData(){
    return Promise.all(runGet())
    .then(responses => {
        if(responses.every(response => response.ok)) {
            return Promise.all(responses.map(res => {
            return res.json()
        }))
        } else {
            let responseText = responses.find(response => !response.ok).statusText
            let responseCode = responses.find(response => !response.ok).status
            throw new Error(`${responseCode} - ${responseText}`)
        }
    })
    .catch(error => {
        let errorText = error.message
        throw new Error (`${errorText}`)
    });
};

export { getData, runPost }