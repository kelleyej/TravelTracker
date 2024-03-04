// function displayCurrentWeather(coordinates, allDestinations){
//     let location = coordinates.find(place => {
//         return place.destination === weatherDisplay; 
//     })
    
//      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=de097255829b2751c79ce43b8bebb127&units=imperial`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         return displayTripWeather(data, allDestinations)
//     })
//     }

//     function displayTripWeather(data, allDestinations){
//         let locationImage = allDestinations.find(place => {
//             return place.destination === weatherDisplay; 
//         })
//         weather.innerHTML = '';
//         weather.innerHTML += 
//         `<img alt="${locationImage.alt}" class="display-image" src=${locationImage.image}>
//         <h2>current weather: ${data.weather[0].description}</h2>
//         <p class="weath-descrip">In ${weatherDisplay}, it currently feels like ${data.main.feels_like}℉ with ${data.main.humidity}% humidity. Wind speeds are ${data.wind.speed} mph.</p>`
//     }

//     export { displayCurrentWeather, displayTripWeather }

function setKey(){
    return "de097255829b2751c79ce43b8bebb127"
}

export { setKey }