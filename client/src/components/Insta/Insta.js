import React from "react";
import {Row} from 'reactstrap';
import "./Insta.css"

const Insta = (props) => (
  <div className="instaContainer">
    <Row id="btnRow">
      <button>Follow Us on Instagram  </button> 
      <i className="fab fa-instagram fa-3x"></i>
    </Row>
    <Row id="instaRow1">
      {props.instaRow1.map(pic => (
        <div className="instaBox"key={pic.images.standard_resolution.url}>
          <img className="imgBox"src={pic.images.standard_resolution.url} alt="instagram"/>
          <h5>{pic.caption.text}</h5>
        </div>
      ))}
    </Row>
    <Row id="instaRow2">
      {props.instaRow2.map(pic => (
        <div className="instaBox" key={pic.images.standard_resolution.url}>
          <img className="imgBox"src={pic.images.standard_resolution.url} alt="instagram"/>
          <h5>{pic.caption.text}</h5>
        </div>
      ))}
    </Row>
  </div>
);

export default Insta;
