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
        "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "lit up city at night",
        "travelers": 2,
        "duration": 10
        },
        {
        "date": "2022/04/30",
        "destination": "Sydney, Austrailia",
        "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "opera house and city buildings on the water with boats",
        "travelers": 3,
        "duration": 18
        }]) ;
    
      expect(pastTrips2).to.deep.equal([{
        "date": "2022/02/07",
        "destination": "Madrid, Spain",
        "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "city with clear skys and a road in the day time",
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
      const upcomingTrip = viewUpcomingTrip(4, trips, destinations)
      const upcomingTrip2 = viewUpcomingTrip(7, trips, destinations)

      expect(upcomingTrip).to.deep.equal([{
        destination: "Stockholm, Sweden",
        image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "city with boats on the water during the day time",
        date: "2022/09/24", 
        duration: 10
      }]);

      expect(upcomingTrip2).to.deep.equal([])
      expect(upcomingTrip2.length).to.equal(0)
    });
  });
});
