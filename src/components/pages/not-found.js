import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div style= {{textAlign: "center"}}>
        <img src="https://i.imgur.com/qIufhof.png" alt="notfound" style= {{width:"400px",height:"400px"}}/>
        <div id="info">
          <h3>This page could not be found</h3>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
