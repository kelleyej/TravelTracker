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
                    destination: "Stockholm, Sweden",
                    image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    alt: "city with boats on the water during the day time"
                }]);
            
            expect(noPendingTrips).to.deep.equal([])
        });
    
        it('should return the number of pending trips for a single traveler', function() {
            const pendingTrips = findPendingTrips(2, trips, destinations)
            const noPendingTrips = findPendingTrips(4, trips, destinations)

            expect(pendingTrips.length).to.equal(1)
            expect(noPendingTrips.length).to.equal(0)
        });  

        it('should return all pending trips in ascending order by date', function() {
            const orderOfTrips = findPendingTrips(7, trips, destinations)

            expect(orderOfTrips).to.deep.equal([
                {
                    duration: 6,
                    travelers: 5,
                    date: "2021/08/05",
                    destination: "Sydney, Austrailia",
                    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    alt: "opera house and city buildings on the water with boats"
                },
                {
                    duration: 4,
                    travelers: 2,
                    date: "2022/10/18",
                    destination: "Cartagena, Colombia",
                    image: "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                    alt: "boats at a dock during the day time"
                }
            ]);
        });
   }); 
});