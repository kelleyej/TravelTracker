import chai from 'chai';
const expect = chai.expect;
import { formatDate, setMinDate, findCurrentYear } from '../src/dates';

describe('modify-dates.js', function() {
    describe('modify date format', function() {
        it('should reformat date to display correctly', function() {
            const date = formatDate("2023/05/06")

            expect(date).to.equal("05/06/2023")
        });
    });
    describe('set minimum date for date input field', function() {
        it('should reformat date to set minimum date in date input field', function() {
            const minimumDate = setMinDate("2020/06/12");

            expect(minimumDate).to.equal("2020-06-12")
        });
    });
    describe('find current year', function() {
        it('should find the current year based on year of upcoming trip', function() {
            const currentYear = findCurrentYear("2025/02/12");

            expect(currentYear).to.equal("2025")
        });
    });
});