import React from 'react';
//import TeamsContainer from './containers/TeamsContainer'
import { connect } from "react-redux"
//import {Link} from 'react-router-dom'

const MainContainer = ( { currentUser }) => {

  return (
      <div className="MainContainer">
        Hello
      </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MainContainer)