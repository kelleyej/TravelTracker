import chai from 'chai';
const expect = chai.expect;
import { calculateAnnualTripCost, calculateAnnualFlightCost, calculateAnnualLodgingCost, calculatePendingTripCost } from '../src/expenses';
import { trips } from '../src/data/sample-trips';
import { destinations } from '../src/data/sample-destinations';

describe('trip-expenses.js', function() {
    describe('calculate annual trip cost', function() {
        it('should calculate the cost of travel for the year for a single traveler', function() {
          const totalCost = calculateAnnualTripCost(6, trips, destinations)
          const totalCost2 = calculateAnnualTripCost(5, trips, destinations)
    
          expect(totalCost).to.equal("2546.50")
          expect(totalCost2).to.equal("6385.50")
        });

        it('should return zero cost if single traveler has not traveled this year', function() {
          const noTravel = calculateAnnualTripCost(7, trips, destinations)

          expect(noTravel).to.equal("0.00")
        });
      });
    
    describe('calculate annual flight cost', function() {
        it('should calculate the cost of flights for the year for a single traveler', function() {
          const flightCost = calculateAnnualFlightCost(2, trips, destinations)
    
          expect(flightCost).to.equal("1750.00")
        });

        it('should return zero cost if single traveler has not traveled this year', function() {
          const noFlight = calculateAnnualFlightCost(7, trips, destinations)

          expect(noFlight).to.equal("0.00")
        });
      });
    
    describe('calculate annual loding cost', function() {
        it('should calculate the cost of lodging for the year for a single traveler', function() {
          const lodgingCost = calculateAnnualLodgingCost(1, trips, destinations);
          const lodgingCost2 = calculateAnnualLodgingCost(2, trips, destinations);
    
          expect(lodgingCost).to.equal("800.00")
          expect(lodgingCost2).to.equal("2550.00")
        });

        it('should return zero cost if single traveler has not traveled this year', function() {
          const noLodging = calculateAnnualLodgingCost(7, trips, destinations)

          expect(noLodging).to.equal("0.00")
        });
    });

    describe('calculate estimate cost for booking trip', function() {
      it('should calculate the cost of a potential trip to book', function() {
        const bookingCost = calculatePendingTripCost(1, 3, destinations)

        expect(bookingCost).to.equal("671.00")
      });
    });
});