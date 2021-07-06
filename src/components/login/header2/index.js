import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Covid19logo from '../../../assets/icons/covid19logo.jpg'
import './index.css'

class Header2 extends Component {
  render() {
    return (
      <div className="header2">
        <div className="flex-item1">
          <img
            src={Covid19logo}
            alt="logo"
            style = {{width: 185}}
          />
        </div>
        <div className="flex-item2">
            <Link to='/register' className="direct-link">
                <button id="regSignBtn">Register/ Sign in yourself</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default Header2;
