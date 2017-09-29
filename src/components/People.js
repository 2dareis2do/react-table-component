'use strict';

import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';

var tableStyle = {
  display: 'inline-block',
  width: '100%',
  paddingBottom: '1rem'
};

var tHeadStyle = {
  display: 'inline-block',
  width: '100%'
}

var trStyle = {
  display: 'inline-block',
  width: '100%'
}

var tdStyle = {
  display: 'inline-block',
  width: '25%'
}

var tBodyStyle = {
  display: 'inline-block',
  width: '100%'
}

var containerStyle = {
  padding: '1rem'
}

var thStyle = {
  width: '25%',
  display: 'inline-block',
  fontWeight: '600',
  textAlign: 'left',
  lineHeight: '2'
}

var titleStyle = {
  color: 'blue',
  WebkitTextFillColor: 'initial',
  fontSize: '1.8rem',
  paddingBottom: '1rem'
}

var buttonStyle = {
  cursor: 'pointer'
}

var supStyle = {
  color: 'red',
  WebkitTextFillColor: 'initial'
}

var blueStyle = {
  color: 'blue'
}

var redStyle = {
  color: 'red'
}

var noneStyle = {
  display: 'none'
}

export default class People extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      people: [],
      order:[]
     };
  }

  componentDidMount() {

    this.importState = this.importState.bind(this);

    let peopleAPI = this.props.peopleAPI;
    let filmsAPI = this.props.filmsAPI;

    axios.all([
      axios.get(peopleAPI),
      axios.get(filmsAPI)
    ])
    .then(this.checkStatus)
    .then(this.parseJSON)
    .then(this.importState)
    .catch(function(err) {
      console.log(err);
    });

  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  checkStatus(msgs){
  if (msgs[0].status >= 200 && msgs[0].status < 300 && msgs[1].status >= 200 && msgs[1].status < 300) {
    console.log('SUCCESS');
    return msgs
    var error = new Error(msgs.statusText)
    error.msgs = msgs
    throw error
  }
}

  importState(items) {
    if (items[0].data.results.length) {
      items[0].data.results.forEach((arrayItem) => {
        arrayItem.isHidden = true;
    });
    }
    this.setState({people:items[0].data.results});
    this.setState({films:items[1].data.results});
  }

  parseJSON(response) {
  return response;
}

  test(){
    console.log('test')
  }

 urlToTitle(url) {
    if (this.state.films.length) {
        switch(url) {
          case this.state.films[0].url:
              return this.state.films[0].title
              break;
          case this.state.films[1].url:
              return this.state.films[1].title
              break;
           case this.state.films[2].url:
              return this.state.films[2].title
              break;
          case this.state.films[3].url:
              return this.state.films[3].title
              break;
          case this.state.films[4].url:
              return this.state.films[4].title
              break;
          case this.state.films[5].url:
              return this.state.films[5].title
              break;
          case this.state.films[6].url:
              return this.state.films[6].title
              break;
          case this.state.films[7].url:
              return this.state.films[7].title
              break;
          default:
              return 'unknown'
        }
    }

}

  sortCol(items, direction) {
    if (direction === "ASC") {
      items.sort(function(b,a) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      });
    } else {
      items.sort(function(a,b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      });
    }

    this.setState({people:items});
  }

  handleClick() {

  if (this.state.order !== "ASC") {
    this.state.order = "ASC";
  } else {
    this.state.order = "DESC";
  }
    this.sortCol(this.state.people, this.state.order);
  }


  handleReveal(e) {

    if (this.state.people.length) {

      this.state.people.forEach((arrayItem, i) => {

        if (arrayItem.name === e) {

          if (arrayItem.isHidden) {

            arrayItem.isHidden = false;

            if (this.state.people.length) {
              this.setState({people:this.state.people});
            }

          } else {

            arrayItem.isHidden = true;

            if (this.state.people.length) {
              this.setState({people:this.state.people});
            }

          }

        }

      });

    }
  }

  render() {

    return (

      <div style={containerStyle}>

        <h1 style={titleStyle}>Star Wars People:</h1>

        {this.props.children}

        <table style={tableStyle}>
            <thead style={tHeadStyle}>
              <tr style={trStyle}>

                <th style={thStyle}>
                    <button onClick={ () => this.handleClick() } title="click to sort" style={buttonStyle}>Character 
                      <sup style={Object.assign({},supStyle,redStyle)}>*</sup>
                    </button>
                </th>
                <th style={thStyle}>Gender</th>
                <th style={thStyle}>Height (meters)</th>
                <th style={thStyle}>Mass</th>

              </tr>
            </thead>
          <tbody style={tBodyStyle}>
         {this.state.people.map((person, index) => {
            return (
                <tr key={index} style={trStyle}>
                  <td style={tdStyle}>
                    <button onClick={ (e) => this.handleReveal(person.name) } title="click to reveal films" style={buttonStyle}>{person.name} 
                      <sup style={Object.assign({},supStyle,blueStyle)}>*</sup>
                    </button>
                  </td>
                  <td style={tdStyle}>{person.gender}</td>
                  <td style={tdStyle}>{person.height}</td>
                  <td style={tdStyle}>{person.mass}</td>
                  <td style={{display: !person.isHidden ? 'block' : 'none' }}>

                  <h3>Films</h3>

                  <ul>
                    {person.films.map((filmItem, index) => {
                      let filmName = this.urlToTitle(filmItem);
                      return (
                        <li key={index}>{filmName}</li>
                      );
                    })}
                  </ul>

                </td>

              </tr>
            );
          })}

         </tbody>


        </table>

        <p><sup style={Object.assign({},supStyle,redStyle)}>*</sup> Denotes sortable column - click header to sort</p>
        <p><sup style={Object.assign({},supStyle,blueStyle)}>*</sup> Denotes expandable row - click name to expand</p>

      </div>

    );
  }

}

