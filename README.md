# React Table Component


## About

This is a React Table Component that I have put together using javascript and ES6 based React.


## Installation

This component has been developed with node js and utilises various npm modules. Just be sure to have [Node](http://nodejs.org/) installed first. Then simply clone the repo as usual and then use:

    $ npm install

This should install any required dependencies needed in order to run the code.

I have set up this demo to use webpack. Webpack is used to transpile all the required code to run in a clients machine. To run:

    $ NODE_ENV=production node_modules/.bin/webpack -p

This component should be available localhost on port 8080 i.e. http://localhost:8080

    $ node_modules/.bin/http-server static

# Running on your Web Server

This has been set up to run serverside as well. To run in serverside mode

    $ NODE_ENV=production node_modules/.bin/babel-node --presets 'react,es2015' src/server.js

I have also created a wrapper for this that makes it easier to deploy on server. To run simply:

	$ node server-wrapper.js

If this runs ok, you should be able to view at localhost:8123. Please feel free to change your port within server.js to suit


## Next Steps

* Unit testing/Linting
* Suggestions from you


## Feedback

To leave feedback, open an issue in the
[Issues section](https://github.com/2dareis2do//react-table-component/issues).

[Demo](http://dev.danlobo.co.uk/devproto/react-table-component/static/) available here.

