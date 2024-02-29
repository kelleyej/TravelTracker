import chai from 'chai';
const expect = chai.expect;
import { findPendingTrips } from '../src/pending-trips';
import { trips } from '../src/data/sample-trips';
import { destinations } from '../src/data/sample-destinations';

describe('pending-trip.js', function() {
    describe('find pending trips', function() {
        it('should find any pending trips for a single traveler', function() {
            const pendingTrips = findPendingTrips(2, trips, destinations)

            expect(pendingTrips).to.deep.equal([{
                travelers: 1, 
                duration: 9, 
                date: "2022/11/20", 
                destination: "Stockholm, Sweden"
            }]);
        });
    });
    it('should return a message if the traveler has no pending trips', function() {
        const noPendingTrips = findPendingTrips(4, trips, destinations)

        expect(noPendingTrips).to.equal(`You currently have no pending trips.`)
    });
});