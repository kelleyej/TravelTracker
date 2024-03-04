function findWeatherCode(num, weatherCodes){
    let weatherDescription = weatherCodes.find(weather => {
        return weather.code === num
    })

    return weatherDescription ? weatherDescription.description : 'Error: no weather description found.'
    
};

export { findWeatherCode }