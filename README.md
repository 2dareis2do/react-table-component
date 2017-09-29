# 5 day weather forecast

## About

This is a 5 day weather forecaster that I have put together using javascript.

I have used React to create this app.

## Installation

This app has been devleoped with node js and utilises various npm modules. Just be sure to have [Node](http://nodejs.org/) installed first. Then simply clone the repo as usual and then use:

    $ npm install

This should install any required dependencies needed in order to run the code.

I have set up this demo to use webpack. Webpack is used to transpile all the required code to run in a clients machine. To run:

    $ NODE_ENV=production node_modules/.bin/webpack -p

This app should be available localhost on port 8080 i.e. http://localhost:8080

    $ node_modules/.bin/http-server src/static

However as requested this has been set up to run serverside as well. To run in serverside mode

    $ NODE_ENV=production node_modules/.bin/babel-node --presets 'react,es2015' src/server.js

I have also created a wrapper for this that makes it easier to deploy on server. To run simply:

	$ node server-wrapper.js

If this runs ok, you should be able to view at localhost:8123. Please feel free to change your port within server.js to suit


## Next Steps

* Unit testing/Linting
* Suggestions from you


## Feedback

To leave feedback, open an issue in the
[Issues section](https://github.com/2dareis2do/five-day-forecast/issues).
[Live Demo](http://dev.danlobo.co.uk/node).
