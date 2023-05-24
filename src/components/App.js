'use strict';

import React from 'react';
import Layout from './Layout.js'
import People from './People.js'

// const rootAPI = ['https://swapi.dev/api/?format=json'];
const peopleAPI = ['https://swapi.dev/api/people/?format=json'];
const filmsAPI = ['https://swapi.dev/api/films/?format=json'];

export default class App extends React.Component {

    render() {
        return(
		  <Layout>
		  	<People filmsAPI={filmsAPI} peopleAPI={peopleAPI}/>
		  </Layout>
        );
    }
}