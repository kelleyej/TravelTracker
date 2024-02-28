import chai from 'chai';
const expect = chai.expect;
import { viewPastTrips } from '../src/past-trips';
import { trips } from '../src/data/sample-trips';

describe('trip-history.js', function() {
  describe('find all past trips', function() {
    it('should find all past trips for a single traveler', function() {
      const pastTrips = viewPastTrips(4, trips)
      const pastTrips2 = viewPastTrips(3, trips)

      expect(pastTrips).to.deep.equal([14, 29, 35])
      expect(pastTrips2).to.deep.equal([50])
    });
  });
});
