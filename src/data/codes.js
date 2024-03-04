
45, 48	Fog and depositing rime fog
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail
const weatherCodes = [
    {
        code: 0,
        description: "clear sky"
    },
    {
        code: 1,
        description: "mainly clear"
    },
    {
        code: 2,
        description: "partly cloudy"
    },
    {
        code: 3,
        description: "overcast"
    },
    {
        code: 45,
        description: "fog"
    },
    {
        code: 48,
        description: "despoiting rime fog"
    },
    {
        code: 51,
        description: "light drizzle"
    },
    {
        code: 53,
        description: "moderate drizzle"
    },
    {
        code: 55,
        description: "dense drizzle"
    },
    {
        code: 56,
        description: "light freezing drizzle"
    },
    {
        code: 57,
        description: "dense freezing drizzle"
    },
    {
        code: 61,
        description: "slight rain"
    },
    {
        code: 63,
        description: "moderate rain"
    },
    {
        code: 65,
        description: "heavy rain"
    },
    {
        code: 66,
        description: "light freezing rain"
    },
    {
        code: 67,
        description: "heavy freezing rain"
    },
    {
        code: 71,
        description: "slight snowfall"
    },
    {
        code: 73,
        description: "moderate snowfall"
    },
    {
        code: 75,
        description: "heavy snowfall"
    },
    {
        code: 77,
        description: "snow grains"
    },
    {
        code: 80,
        description: "slight rain showers"
    },
    {
        code: 81,
        description: "moderate rain showers"
    },
    {
        code: 82,
        description: "violent rain showers"
    },
    {
        code: 85,
        description: "slight snow showers"
    },
    {
        code: 86,
        description: "heavy snow showers"
    },
    {
        code: 95,
        description: "slight thunderstorm"
    },
    {
        code: 96,
        description: "thunderstorm with slight hail"
    },
    {
        code: 99,
        description: "thunderstorm with heavy hail"
    }
]

export { weatherCodes }