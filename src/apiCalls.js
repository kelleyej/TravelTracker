let allData = [
    fetch('http://localhost:3001/api/v1/travelers'),
    fetch('http://localhost:3001/api/v1/trips'),
    fetch('http://localhost:3001/api/v1/destinations')
]

// function postData(){
//     fetch('http://localhost:3001/api/v1/trips')
//     .then()
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