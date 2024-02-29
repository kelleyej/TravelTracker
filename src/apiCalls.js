let allData = [
    fetch('http://localhost:3001/api/v1/travelers'),
    fetch('http://localhost:3001/api/v1/trips'),
    fetch('http://localhost:3001/api/v1/destinations')
]

// function postData(){
//     fetch('http://localhost:3001/api/v1/trips', {
//      method: 'POST', 
//      body: JSON.stringify({
//         id: , 
//         userID: ,
//         destinationID: , 
//         travelers: , 
//         date: , 
//         duration: ,
//         status: "pending", 
//         suggestedActivities: []
//         }), 
//      headers: {
//         'Content-type': 'application/json'
//      },
//     })
//     fetch('http://localhost:3001/api/v1/destinations', {
//         method: 'POST',
//         body: JSON.stringify({
//             id: , 
//             destination: , 
//             estimatedLodgingCostPerDay: , 
//             estimatedFlightCostPerPerson: ,
//             image: , 
//             alt: 
//         }),
//         headers: {
//             'Content-type': 'application/json'
//         }
//     })
// }

function getData(){
    return Promise.all(allData)
    .then(response => {
        return Promise.all(response.map(res => {
        return res.json()
        }))
    })
}

export { getData }