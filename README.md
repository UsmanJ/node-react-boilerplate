# Venue Hunt

## Synopsis

This application allows users to enter a town or city name and returns the most popular venues in the area. It is
using a FourSquare API.

The webapp was built in ES6 using Node and React with Redux. Client side and server side have been kept separate.
The client side makes a call to the server which then makes a call to the Foursquare API. The response is returned to
the client and rendered.

## Technologies Used

* NodeJS
* Express
* React
* Redux


## Build & development

After cloning the repo:

* Go into the `./` and `./client` folder of the project and run `npm install` in each folder separately

* Run `npm start` from the root of the project

This will run the client and server on different ports but both will be able to speak to each other.