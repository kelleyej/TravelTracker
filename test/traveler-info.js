import chai from 'chai';
const expect = chai.expect;
import { findTraveler } from '../src/traveler';
import { travelers } from '../src/data/sample-travelers';

describe('traveler-info.js', function() {
    describe('find a single traveler', function() {
        it('should return the name of a single traveler', function() {
            const traveler = findTraveler(2, travelers); 
            const traveler2 = findTraveler(3, travelers);
           
            expect(traveler).to.equal("Rachael Vaughten")
            expect(traveler2).to.equal("Sibby Dawidowitsch")
           
        });
        
        it('should return a message if the traveler is not in the database', function() {
            const unknownTraveler = findTraveler(8, travelers)

            expect(unknownTraveler).to.equal('We cannot find your information. Please create an account.')
        });
    });
});
 
  