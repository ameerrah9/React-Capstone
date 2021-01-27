import React, { Component } from "react";
import TeamInfo from './TeamInfo'

const NBA_URL='https://api.sportsdata.io/v3/nba/scores/json/Standings/{2021}'
const NBA_API_KEY='3358924ca0a945b5b7c0bdbaedafe4db'
const requestHeaders = {
    headers: {
      'Ocp-Apim-Subscription-Key': NBA_API_KEY,
    },
};

export default class Team extends Component {
  // constructor for
  constructor() {
    // allows you to
    super();

    // Define the initial state:
    this.state = {
      // ...set state
        teams: []
    };
  }

  componentDidMount() {
    fetch(NBA_URL, requestHeaders)
      .then(res => res.json())
      //.then(resp => console.log(resp));

      .then(resp => this.setState({ teams: resp }));
  }

  // any method
  // method template => arrow func:
  handleClick = () => {
    // Update our state here...
  };

  render() {
    return (
      <>
        <h1>GAME ZONE</h1>
        <h2 >The Latest Teams:</h2>
        <TeamInfo teams={this.state.teams} />
      </>
    );
  }
}