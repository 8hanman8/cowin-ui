import React, { Component } from "react";
import {AiOutlineMail} from 'react-icons/ai'

class Footer extends Component {
  render() {
    return (
      <div style={styles.footer}>
        <div style={styles.footerSection}>
          <div style={styles.leftblock}>
            <span>For Grievances & Feedback:</span>
            <span style={{display: "table-cell",paddingLeft: "5px"}}><AiOutlineMail style={{verticalAlign: "text-bottom"}}/></span>
            <span style={{paddingLeft: "5px"}}>support@cowin.gov.in</span>
          </div>
          <div style={styles.rightblock}>
            <ul style={{margin:"0",padding:"0",listStyle:"none"}}>
                <li style={{display: "inline-block"}}>
                    <span style={{marginRight:"8px",paddingRight:"8px",borderRight:"1px solid"}}>Privacy Policy</span>
                </li>
                <li style={{display: "inline-block"}}>
                    <span>Terms of Service</span>
                </li>
            </ul>
            <span style={{marginLeft:"10px"}}> Copyright © 2021 COWIN. All Rights Reserved </span>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  footer: {
    backgroundColor: "#001f60",
    height: "40px",
    color: "white",
    font: "14px Roboto, sans-serif",
    position: "fixed",
    bottom: "0px",
    left: "0px",
    width: "100%",
    textAlign: "center",
  },
  footerSection: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "40px"
  },
  leftblock: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    marginLeft: "220px"
  },
  rightblock: {
      marginRight: "200px",
      display: "flex",
      alignItems: "center"
  }
};

export default Footer;
