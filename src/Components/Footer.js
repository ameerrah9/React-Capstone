import React from 'react';
import { connect } from "react-redux"
//import {Link} from 'react-router-dom'

const Footer = () => {

  return (
      <div className="Footer">
      </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Footer)