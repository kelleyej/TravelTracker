import chai from 'chai';
const expect = chai.expect;
import { viewPastTrips, viewUpcomingTrip } from '../src/past-trips';
import { trips } from '../src/data/sample-trips';
import { destinations } from '../src/data/sample-destinations';

describe('trip-history.js', function() {
  describe('find all past trips', function() {
    it('should find all past trip descriptions for a single traveler', function() {
      const pastTrips = viewPastTrips(4, trips, destinations);
      const pastTrips2 = viewPastTrips(6, trips, destinations);
      const noPastTrips = viewPastTrips(3, trips, destinations)
      
      expect(pastTrips).to.deep.equal([{
        "date": "2022/02/25",
        "destination": "Jakarta, Indonesia",
        "travelers": 2,
        "duration": 10
        },
        {
        "date": "2022/04/30",
        "destination": "Sydney, Austrailia",
        "travelers": 3,
        "duration": 18
        }]) ;
    
      expect(pastTrips2).to.deep.equal([{
        "date": "2022/02/07",
        "destination": "Madrid, Spain",
        "travelers": 6,
        "duration": 4
        }
        ])

      expect(noPastTrips).to.deep.equal([]) 

      expect(noPastTrips.length).to.equal(0)
      expect(pastTrips.length).to.equal(2)
      expect(pastTrips2.length).to.equal(1)
      });
    });
  
  describe('find upcoming trip', function() {
    it('should find an upcoming trip for a single traveler', function() {
      const upcomingTrip = viewUpcomingTrip(4, trips)
      const upcomingTrip2 = viewUpcomingTrip(7, trips)

      expect(upcomingTrip).to.deep.equal([{
        destinationID: 2, 
        date: "2022/09/24", 
        duration: 10
      }]);

      expect(upcomingTrip2).to.deep.equal([])
      expect(upcomingTrip2.length).to.equal(0)
    });
  });
});
