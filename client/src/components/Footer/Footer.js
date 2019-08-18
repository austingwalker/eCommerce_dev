import React from "react";
import { Link } from "react-router-dom";
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
    <Col md="2"></Col>
      <Col className="footerCol1">
        <h4 className="footerTitle" id="vendor">Vendor Location</h4>
        <p id="heaven"><strong>Fragrance of Heaven Candles</strong></p>
        <p className="footerP">3501 50th St.</p>
        <p className="footerP">Lubbock, TX 79413</p>
        {/* <h4 id="mailing">Mailing Address</h4>
        <p className="footerP">8512 Valencia Ave</p>
        <p className="footerP">Lubbock, TX 79424</p> */}

      </Col>
      <Col className="footerCol2">
        <h4 className="footerTitle" id="mailing">Mailing Address</h4>
        <p className="footerP">8512 Valencia Ave</p>
        <p className="footerP">Lubbock, TX 79424</p>
        <p className="trademark">© 2019, Lee-Elmers</p>
        
      </Col>
      <Col className="footerCol3">
        <h4 className="footerTitle" id="company">Company</h4>
        <p className="footerP"><Link className="footerNav" to="/about">About</Link></p>
        <p className="footerP"><Link className="footerNav" to="/our_work">Our Work</Link></p>
        <p className="footerP"><Link className="footerNav" to="/about">Contact</Link></p>
      </Col>
      <Col md="2"></Col>
    </Row>
  </div>

  // <nav className="navbar navbar-expand-lg navbar-dark bg-primary footer">
   
  // </nav>
);

export default Footer;
