import chai from 'chai';
const expect = chai.expect;
import { findPendingTrips } from '../src/pending-trips';
import { trips } from '../src/data/sample-trips';
import { destinations } from '../src/data/sample-destinations';

describe('pending-trip.js', function() {
    describe('find pending trips', function() {
        it('should find any pending trips for a single traveler', function() {
            const pendingTrips = findPendingTrips(2, trips, destinations)
            const noPendingTrips = findPendingTrips(4, trips, destinations)

            expect(pendingTrips).to.deep.equal([{
                    duration: 9,
                    travelers: 1,
                    date: "2022/11/20",
                    destination: "Stockholm, Sweden"
                }]);
            
            expect(noPendingTrips).to.deep.equal([])
        });
    
        it('should return the number of pending trips for a single traveler', function() {
            const pendingTrips = findPendingTrips(2, trips, destinations)
            const noPendingTrips = findPendingTrips(4, trips, destinations)

            expect(pendingTrips.length).to.equal(1)
            expect(noPendingTrips.length).to.equal(0)
        });      
   }); 
});