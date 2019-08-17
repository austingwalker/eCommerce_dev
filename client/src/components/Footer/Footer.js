import React from "react";
import {Row, Col} from 'reactstrap';
import "./Footer.css"

const Footer = () => (
  
  <div className="compFooter">
    <Row>
      <div className="bba">
        BEATEN, BATTERED, MADE ANEW
      </div>
    </Row>
    <Row className="footerSections">
      <Col className="footerCol1">
        
      </Col>
      <Col className="footerCol2">
        <p id="trademark">© 2019, Lee-Elmers</p>
      </Col>
      <Col className="footerCol3">
        <h4 id="connect">Connect</h4>
        <p id="email">Contact us <a id="contact" href="mailto:contact@leeelmers.com">contact@leeelmers.com</a></p>
      </Col>
    </Row>
  </div>

  // <nav className="navbar navbar-expand-lg navbar-dark bg-primary footer">
   
  // </nav>
);

export default Footer;
