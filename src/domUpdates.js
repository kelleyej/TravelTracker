import { getData, runPost } from './apiCalls.js'
import { viewUpcomingTrip, viewPastTrips } from './past-trips.js'
import { findPendingTrips } from './pending-trips.js'
import { quotes } from '../src/data/travel-quotes.js'
import { coordinates } from '../src/data/coordinates.js'
import { formatDate, findCurrentYear, setMinDate, findYesterday } from './dates.js'
import { findWeatherCode } from './weather.js'
import { weatherCodes } from './data/codes.js'
import { calculateAnnualTripCost, calculateAnnualLodgingCost, calculateAnnualFlightCost, calculatePendingTripCost } from './expenses.js'

// Query Selectors
const upcomingTripSection = document.querySelector('.upcoming-trip');
const pastTripSection = document.querySelector('.past-trip');
const bookTrip = document.querySelector('.book-button');
const mainDisplay = document.querySelector('.main-display');
const bookDisplay = document.querySelector('.book-display');
const bookTripForm = document.querySelector('.book-trip-form');
const date = document.querySelector('.date');
const travelers = document.querySelector('.travelers');
const duration = document.querySelector('.duration');
const destinationSelection = document.querySelector('select');
const postTripSection = document.querySelector('.post-trips');
const showEstimateButton = document.querySelector('.show-estimate');
const showCost = document.querySelector('.show-cost');
const loginForm = document.querySelector('.login-form');
const username = document.querySelector('.enter-username');
const password = document.querySelector('.enter-password');
const headerTextContainer = document.querySelector('.header-text-container');
const loginPage = document.querySelector('.login-page');
const quote = document.querySelector('.quote');
const loginFeedback = document.querySelector('.login-feedback');
const agentMessage = document.querySelector('.agent-message');
const footer = document.querySelector('footer');
const displayLodgingCost = document.querySelector('.lodging-cost');
const displayTotalCost = document.querySelector('.total-cost');
const displayFlightCost = document.querySelector('.flight-cost');
const quoteHeader = document.querySelector('.quote-header');
const mainHeader = document.querySelector('.main-header');
const welcomeName = document.querySelector('.welcome-name');
const logoutButton = document.querySelector('.logout')
const backToMainButton = document.querySelector('.back-to-main');
const lastLogoutButton = document.querySelector('.back-to-login');
const weather = document.querySelector('.current-weather');
const yearExpense = document.querySelector('h3');
const errorDisplay = document.querySelector('.error-display');
const clearLoginButton = document.querySelector('.clear-form');
const clearBookingFormButton = document.querySelector('.clear-booking-form');
const minutesIndex = document.getElementById('minutes');
const hoursIndex = document.getElementById('hours');
const secondsIndex = document.getElementById('seconds');
const todayDate = document.querySelector('.today-date');

// EventListeners
window.addEventListener('load', function(){
    renderRandomQuote(quotes)
});
clearBookingFormButton.addEventListener('click', clearBookingForm)
logoutButton.addEventListener('click', logOut);
backToMainButton.addEventListener('click', backToMain);
lastLogoutButton.addEventListener('click', backToLogin);
clearLoginButton.addEventListener('click', clearLoginForm)
loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    authenticateLogin()
    displayLoginFeedback()
    changeToMainDisplay()
    findCurrentTraveler(travelerUsername)
    startCountdown();
    setInterval(startCountdown, 1000);
});
showEstimateButton.addEventListener('click', function() {
    displayPendingTripCost(destinationSelection, duration, allDestinations, travelers)
});
bookTrip.addEventListener('click', bookNextTrip)

bookTripForm.addEventListener('submit', function(event) {
    event.preventDefault()
    return runPost(allTrips, traveler, destinationSelection, travelers, date, duration)
    .then(response => {
        if(!response.ok){
            let responseText = response.statusText
            let responseCode = response.status
            throw new Error(`Failed to Post ${responseCode} - ${responseText}`)
        } else {
            return response; 
        }
    })
    .then(data => {
        clearBookingForm()
        backToMain()
        renderTravelerData()
    })
    .catch(error => {
        renderErrorMessage(error)
     });
});

//Global Variables
let currentTraveler; 
let allTrips;
let allDestinations; 
let travelerUsername; 
let traveler; 
let currentDate; 
let weatherDisplay; 
let authorizePassword = false;
let authorizeUsername = false;
let countdownDate = new Date().setHours(new Date().getHours() + 24)

// Functions
function renderTravelerData(){
    getData()
    .then(([travelers, trips, destinations]) => {
        traveler = travelers.travelers[currentTraveler - 1]
        allTrips = trips.trips
        allDestinations = destinations.destinations
        welcomeTraveler(traveler, allTrips, allDestinations);
        displayUpcomingTrip(traveler.id, allTrips, allDestinations);
        displayPastTrips(traveler.id, allTrips, allDestinations)
        listDestinations(allDestinations)
        displayPendingTrips(traveler.id, allTrips, allDestinations)
        displayMoneySpent(traveler.id, allTrips, allDestinations)
        date.min = setMinDate(currentDate); 
        getCurrentWeather(coordinates, allDestinations)
        displayTodayDate(currentDate)
    })
    .catch(error => {
        renderErrorMessage(error)
    });
};

function getCurrentWeather(coordinates, allDestinations){
    let location = coordinates.find(place => {
        return place.destination === weatherDisplay; 
    })
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=1`)
    .then(res => {
        if(!res.ok) {
            let responseText = response.statusText
            let responseCode = response.status
            throw new Error(`${responseCode} - ${responseText}`)
        } else {
            return res.json()
        }  
    })  
    .then(data => {
        return displayTripWeather(data, allDestinations)
    })
    .catch(error => {
        renderErrorMessage(error)
    });
};

function displayTripWeather(data, allDestinations){
    let locationImage = allDestinations.find(place => {
        return place.destination === weatherDisplay; 
    })
    weather.innerHTML = '';
    weather.innerHTML += 
    `<img alt="${locationImage.alt}" class="display-image" src=${locationImage.image}>
    <h2>current weather: ${findWeatherCode(data.current.weather_code, weatherCodes)}</h2>
    <p class="weath-descrip">In ${weatherDisplay}, the temperature is currently ${data.current.temperature_2m}℉ with ${data.current.relative_humidity_2m}% humidity. Wind speeds are ${data.current.wind_speed_10m} mph.</p>`
};

function startCountdown(){
    const now = new Date().getTime();
    const countdown = new Date(countdownDate).getTime();
    const difference = (countdown - now)/1000

    let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((difference % (60 * 60)) / 60);
    let seconds = Math.floor(difference % 60);

    hoursIndex.innerHTML = formatTime(hours, "hours");
    minutesIndex.innerHTML = formatTime(minutes, "minutes");
    secondsIndex.innerHTML = formatTime(seconds, "seconds");
};

function formatTime(time, interval) {
    return `${time} ${interval} `
  };

function clearBookingForm(){
    date.value = '';
    duration.value = '';
    travelers.value = '';
    showCost.innerText = '';
};

function clearLoginForm(){
    username.value = '';
    password.value = '';
    loginFeedback.innerText = '';
    authorizeUsername = false; 
    authorizePassword = false; 
    username.disabled = false; 
    password.disabled = false;
};

function renderRandomQuote(quotes){
   let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
   quote.innerText = `${randomQuote}`
};
  
function changeToMainDisplay(){
    if(authorizePassword === true && authorizeUsername === true){
        mainDisplay.classList.remove("hidden");
        headerTextContainer.classList.remove("hidden");
        loginPage.classList.add("hidden");
        footer.classList.remove("hidden");
        quoteHeader.classList.add("hidden");
        mainHeader.classList.remove("hidden");
        renderTravelerData();
    };
};

function displayTodayDate(currentDate){
    let newDate = findYesterday(currentDate)
    todayDate.innerHTML = `TODAY: ${newDate}`
};

function authenticateLogin(){
   let array = [...Array(51).keys()]
   let modifiedArray = array.shift()
   let numberArray = array.map(element => {
    return Number(element)
   })
   numberArray.forEach(number => {
    if(username.value === `traveler${number}`){
        authorizeUsername = true; 
        username.disabled = true; 
    } if(password.value === "travel"){
        authorizePassword = true; 
        password.disabled = true; 
    }
    });
    travelerUsername = username.value; 
    travelerUsername = travelerUsername.split('')
};

function displayLoginFeedback(){
    if(!authorizePassword){
        loginFeedback.innerText = "Your password is incorrect."
        password.value = '';
    } if(!authorizeUsername){
        loginFeedback.innerText = "Your username is incorrect."
         username.value = '';
    } if(!authorizeUsername && !authorizePassword){
    loginFeedback.innerText = `Both your username and password are incorrect.`
    }
};

function findCurrentTraveler(travelerUsername){
    let password; 
    let newPassword;
 
    if(travelerUsername.length === 9){
      password = travelerUsername.splice(-1)
      newPassword = password.join('')
    } else if (travelerUsername.length === 10){
     password = travelerUsername.splice(-2)
     newPassword = password.join('')
    }
    currentTraveler = newPassword; 
  };

function renderErrorMessage(error) {
    mainDisplay.classList.add("hidden");
    bookDisplay.classList.add("hidden")
    mainHeader.classList.add("hidden");
    footer.classList.add("hidden");
    errorDisplay.classList.remove("hidden");
    errorDisplay.innerHTML += error; 
};

function backToMain(){
    mainDisplay.classList.remove("hidden");
    mainHeader.classList.remove("hidden");
    bookDisplay.classList.add("hidden");
    footer.classList.remove("hidden");
};

function welcomeTraveler({name}){
    welcomeName.innerText = `Welcome back, ${name}!`
};

function backToLogin(){
    bookDisplay.classList.add("hidden");
    quoteHeader.classList.remove("hidden");
    loginPage.classList.remove("hidden");
    clearLoginForm();
};

function logOut(){
    clearLoginForm() 
    mainDisplay.classList.add("hidden");
    headerTextContainer.classList.add("hidden")
    footer.classList.add("hidden");
    quoteHeader.classList.remove("hidden");
    mainHeader.classList.add("hidden")
    loginPage.classList.remove("hidden");
};

function displayMoneySpent(id, allTrips, allDestinations){
    let totalCost = calculateAnnualTripCost(id, allTrips, allDestinations)
    let flightCost = calculateAnnualFlightCost(id, allTrips, allDestinations)
    let lodgingCost = calculateAnnualLodgingCost(id, allTrips, allDestinations)
    yearExpense.innerText = `Travel Expenses in ${findCurrentYear(currentDate)}`
    displayTotalCost.innerText = `$${totalCost}`
    displayFlightCost.innerText = `$${flightCost}`
    displayLodgingCost.innerText = `$${lodgingCost}`
};

function displayUpcomingTrip(id, allTrips, allDestinations){
    let upcomingTrip = viewUpcomingTrip(id, allTrips)
    let locationOfTrip = allDestinations.find(location => {
        return location.id === upcomingTrip[0].destinationID
    }) 
    upcomingTripSection.innerText = `On ${formatDate(upcomingTrip[0].date)}, you will be leaving for ${locationOfTrip.destination} for ${upcomingTrip[0].duration} days!`
    currentDate = upcomingTrip[0].date; 
    weatherDisplay = locationOfTrip.destination
};

function displayPastTrips(id, allTrips, allDestinations){
    let trips = viewPastTrips(id, allTrips, allDestinations)
        if(trips.length === 0){
            pastTripSection.innerHTML = 'You have not documented any past travel.'
        } else {
            pastTripSection.innerHTML = '';
        trips.forEach(({date, destination, duration, travelers}) => {
            if(travelers === 1){
                pastTripSection.innerHTML += `On ${formatDate(date)}, you went on a solo adventure to ${destination} for ${duration} days.<br><br>`
            } else if(travelers === 2) {
                pastTripSection.innerHTML += `On ${formatDate(date)}, you visited ${destination} with ${travelers - 1} other traveler for ${duration} days.<br><br>`
            } else {
                pastTripSection.innerHTML += `On ${formatDate(date)}, you visited ${destination} with ${travelers - 1} other travelers for ${duration} days.<i class="star">★<i><br><br>`
            }    
        });
    };
    let allStars = document.querySelectorAll('.star')
    allStars.forEach((star, index) => {
        star.id = index; 
         star.addEventListener('click', function(event){
            if(star.id === event.target.id && star.classList.contains('star')){
                // star.classList.add('hidden')
               star.classList.toggle('active')
            //    star.classList.remove('hidden')
            }
            
        })
       
    })
    
};

function bookNextTrip(){
    mainDisplay.classList.add("hidden");
    mainHeader.classList.add("hidden")
    bookDisplay.classList.remove("hidden")
    footer.classList.add("hidden");
};

function listDestinations(allDestinations){
    allDestinations.forEach(({id, destination}) => {
        destinationSelection.innerHTML += 
        `<option value=${id}>${destination}</option>`
    });
};

function displayPendingTrips(id, allTrips, allDestinations){
    let pendingTrips = findPendingTrips(id, allTrips, allDestinations)
    if(pendingTrips.length === 0){
        postTripSection.innerHTML = 'You do not currently have any pending trips.'
    } else {
        postTripSection.innerHTML = '';
        pendingTrips.forEach(({travelers, destination, date, duration}) => {
            if(travelers === 1){
                postTripSection.innerHTML += `Currently waiting approval for a solo trip to ${destination} on ${formatDate(date)} for ${duration} day(s).<br><br>`
            } else if(travelers === 2) {
                postTripSection.innerHTML += `Currently waiting approval for a trip to ${destination} on ${formatDate(date)} with ${travelers - 1} other traveler for ${duration} day(s).<br><br>`
            } else {
            postTripSection.innerHTML += `Currently waiting approval for a trip to ${destination} on ${formatDate(date)} with ${travelers - 1} other travelers for ${duration} day(s).<br><br>`
            }    
        });
    };
    disableBookTrip(id, allTrips, allDestinations)
};

function disableBookTrip(id, allTrips, allDestinations){
    let pendingTrips = findPendingTrips(id, allTrips, allDestinations)
    if(pendingTrips.length >= 4){
        agentMessage.innerText = `You cannot book more trips at this time. The maximum allowed is four bookings. Please wait for agent approval.`
        bookTrip.disabled = true; 
    } else {
        agentMessage.innerText = '';
        bookTrip.disabled = false; 
    };
};

function displayPendingTripCost(destinationSelection, duration, allDestinations) {
    let cost = calculatePendingTripCost(Number(destinationSelection.value), Number(duration.value), allDestinations)
    if(travelers.value !== '' && duration.value !== ''){
      showCost.innerText = `This trip is estimated to cost approximately $${cost} per person.`  
    } else {
        showCost.innerText = `Please fill out all fields to estimate total trip cost.`
    };
};

