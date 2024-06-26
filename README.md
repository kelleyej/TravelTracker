# Travel Tracker ✈️

## Abstract
Welcome to the Travel Tracker! This application allows a user to login with unique credentials to view a dashboard displaying all past, upcoming, and pending trips for the specific traveler. The user is able to see the current weather forcast for the destination of the upcoming trip as well as view the current travel expenses for the year, including the price of the flight, lodging, and agent's fee. The user can also book future trips and designate the date, duration, number of travelers, and the destination. Lastly, the user can rate past trips using a four-star rating system. Happy traveling! 

## Contributors 
[Erin Kelley](https://github.com/kelleyej)

## Installation Instructions
- Clone the local server to your machine: `git clone git@github.com:turingschool-examples/travel-tracker-api.git`
- Run `cd travel-tracker-api`
- Run `npm install`
- Run `npm start`
- Navigate to this link: [Travel Tracker](https://kelleyej.github.io/TravelTracker/)
- Login with username: **traveler1** (you can login with any number between traveler1 - traveler50) and password: **travel**. 
- Use  `CTRL + C` to stop running the local server when done viewing the application. 

![Screenshot 2024-03-05 at 5 56 39 PM](https://github.com/kelleyej/TravelTracker/assets/120286689/ffe81fae-6d80-4850-b5ea-ed6e0c9364a6)

## Technologies Used
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat) ![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat) ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat) ![Mocha Badge](https://img.shields.io/badge/Mocha-8D6748?logo=mocha&logoColor=fff&style=flat) ![Chai Badge](https://img.shields.io/badge/Chai-A30701?logo=chai&logoColor=fff&style=flat) ![Lighthouse Badge](https://img.shields.io/badge/Lighthouse-F44B21?logo=lighthouse&logoColor=fff&style=flat) ![Visual Studio Code Badge](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=flat) ![Webpack Badge](https://img.shields.io/badge/Webpack-8DD6F9?logo=webpack&logoColor=000&style=flat)

## Context 
- This application was completed independently in the 12th week of my software development program. It took approximately 45+ hours to complete the project. 
- Goals:
    1. Make network requests to get data, post data, and updated the DOM accordingly. 
    2. Implement a robust testing suite using TDD. 
    3. Use object and array prototype methods. 
    4. Develop a highly accessible application, verified with lighthouse and the WAVE extension. 
- Wins: 
    1. Efficiently organized functions in separate files.
    2. Use of a public API to display real-time weather report. 
    3. Utilized pull request template and project board issues to stay organized throughout duration of project. 
    4. Developed testing suites with sad paths.
    5. Managed error handling with both POST and GET network requests.
    6. Completed extensions, such as implementing a 25 hour countdown timer and creating a star rating system. 
- Challenges:
    1. Interpreting provided data set to display dates and trips in a meaningful context. 
    2. Making application screen reader-assessible.

## Future Improvements 
- Utilize SASS for CSS styling. 
- Incorporate local/session storage to maintain star rating correctly for each traveler. 
