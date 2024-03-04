import chai from 'chai';
const expect = chai.expect;
import { viewPastTrips, viewUpcomingTrip, viewPreviousTrip } from '../src/past-trips';
import { trips } from '../src/data/sample-trips';
import { destinations } from '../src/data/sample-destinations';

describe('trip-history.js', function() {
  describe('find all past trips', function() {
    it('should find all past trips for a single traveler', function() {
      const pastTrips = viewPastTrips(4, trips, destinations);
      const pastTrips2 = viewPastTrips(6, trips, destinations);
      
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
      });
    
    it('should return a message if there are no past trips for a single traveler', function() {
      const noPastTrips = viewPastTrips(3, trips, destinations);

      expect(noPastTrips).to.equal(`You have no past trips documented. Make travel plans today!`)
    });
    });

  describe('view previous trip', function() {
    it('should find the location of the most recent trip for a single traveler', function() {
      const previousTrip = viewPreviousTrip(5, trips, destinations);
      const previousTrip2 = viewPreviousTrip(4, trips, destinations);

      expect(previousTrip).to.equal("Tokyo, Japan");
      expect(previousTrip2).to.equal("Sydney, Austrailia");
    });
    
    it('should return a message if a single traveler has no previous trips', function() {
      const noPreviousTrip = viewPreviousTrip(3, trips, destinations);

      expect(noPreviousTrip).to.equal(`You have not been on any trips yet.`)
    })
  });

  describe('find upcoming trip', function() {
    it('should find an upcoming trip for a single traveler', function() {
      const upcomingTrip = viewUpcomingTrip(4, trips)

      expect(upcomingTrip).to.deep.equal([{
        destinationID: 2, 
        date: "2022/09/24", 
        duration: 10
      }]);
    });
  });
});
