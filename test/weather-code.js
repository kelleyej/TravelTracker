import chai from 'chai';
const expect = chai.expect;
import { findWeatherCode } from '../src/weather';
import { weatherCodes } from '../src/data/codes';

describe('weather-code.js', function() {
    describe('current weather description', function() {
        it('should return description of weather based on a code provided', function() {
            const weather = findWeatherCode(3, weatherCodes)

            expect(weather).to.equal("overcast")
        });
    });
});