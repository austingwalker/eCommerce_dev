import React from "react";
import {Row, Col} from 'reactstrap';
import { Link } from "react-router-dom";
import "./Insta.css"

const Insta = (props) => (
  <div className="instaContainer">
    <Row >
    
    <Col id="instaBtnCol">
    <a href="https://www.instagram.com/l_e_dev/" target="_blank">
    <div id="instaBtnBox">
      <button id="instaBtn">Follow Us on Instagram</button> 
    </div>
    </a>
    </Col>
    
    </Row>
    <Row id="instaRow1">
      {props.instaRow1.map(pic => (
        <div className="instaBox"key={pic.images.standard_resolution.url}>
          <a href={pic.link} target="_blank"><p className="caption">{pic.caption.text}</p></a>
          <a className="imgBox" href={pic.link} target="_blank"> <img className="imgBox" src={pic.images.standard_resolution.url} alt="instagram"/></a>
        </div>
      ))}
    </Row>
    <Row id="instaRow2">
      {props.instaRow2.map(pic => (
        <div className="instaBox" key={pic.images.standard_resolution.url}>
         <a href={pic.link} target="_blank"><p className="caption">{pic.caption.text}</p></a>
         <a className="imgBox" href={pic.link} target="_blank"> <img className="imgBox" src={pic.images.standard_resolution.url} alt="instagram"/></a>
        </div>
      ))}
    </Row>
  </div>
);

export default Insta;
