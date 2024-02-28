import chai from 'chai';
const expect = chai.expect;
import { viewPastTrips, viewUpcomingTrip } from '../src/past-trips';
import { trips } from '../src/data/sample-trips';

describe('trip-history.js', function() {
  describe('find all past trips', function() {
    it('should find all past trips for a single traveler', function() {
      const pastTrips = viewPastTrips(4, trips)
      // const pastTrips2 = viewPastTrips(3, trips)

      expect(pastTrips).to.deep.equal([6, 3,])
      // expect(pastTrips2).to.deep.equal([7])
    });
  });

  describe('find upcoming trip', function() {
    it('should find an upcoming trip for a single traveler', function() {
      const upcomingTrip = viewUpcomingTrip(4, trips)

      expect(upcomingTrip).to.deep.equal([2])
    });
  });
});
