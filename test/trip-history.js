import chai from 'chai';
const expect = chai.expect;
import { viewPastTrips, viewUpcomingTrip, calculateAnnualTripCost, viewPreviousTrip } from '../src/past-trips';
import { trips } from '../src/data/sample-trips';
import { destinations } from '../src/data/sample-destinations';

describe('trip-history.js', function() {
  describe('find all past trips', function() {
    it('should find all past trips for a single traveler', function() {
      const pastTrips = viewPastTrips(4, trips)
      // const pastTrips2 = viewPastTrips(3, trips)

      expect(pastTrips).to.deep.equal([6, 3])
      // expect(pastTrips2).to.deep.equal([7])
    });
  });

  describe('find upcoming trip', function() {
    it('should find an upcoming trip for a single traveler', function() {
      const upcomingTrip = viewUpcomingTrip(4, trips)

      expect(upcomingTrip).to.deep.equal([{destinationID: 2, date: "2022/09/24", duration: 10}])
    });
  });

  describe('calculate annual trip cost', function() {
    it('should calculate the cost of travel for the year for a single traveler', function() {
      const totalCost = calculateAnnualTripCost(6, trips, destinations, "2022")

      expect(totalCost).to.equal(1375)
    })
  })

  describe('view previous trip', function() {
    it('should find the location of the most recent trip for a single traveler', function() {
      const previousTrip = viewPreviousTrip(5, trips, destinations);

      expect(previousTrip).to.equal("Lima, Peru")
    })
  })
});
