'use strict';

import React from 'react';
import Layout from './Layout.js'
import People from './People.js'

const rootAPI = ['https://swapi.co/api/?format=json'];
const peopleAPI = ['https://swapi.co/api/people/?format=json'];
const filmsAPI = ['https://swapi.co/api/films/?format=json'];

export default class App extends React.Component {

    render() {
        return(
		  <Layout>
		  	<People filmsAPI={filmsAPI} peopleAPI={peopleAPI}/>
		  </Layout>
        );
    }
}