function findWeatherCode(num, weatherCodes){
    let weatherDescription = weatherCodes.find(weather => {
        return weather.code === num
    })
;
    return weatherDescription.description
    
};

export { findWeatherCode }