import React, { Component } from "react";
import {Container, Row, Col} from 'reactstrap';
  import { Link } from "react-router-dom";
import "./HorizontalNav.css"

class HorizontalNav extends Component  {
  state = {
    dropdownOpen: false
  };

  // toggle = () =>{
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen
  //   });
  // }


  render() {
    return (

      <div id="navBox">
        <Row id="logoRow">
          <Col className="leLogoBox">
          <div>
            <img className="leLogo" src="http://lee-elmers.com/wp-content/uploads/2018/04/LEblacklogo-02.png" alt="logo"/> 
          </div>
          </Col>
        </Row>
        <Row id="mainUlRow">
        <ul id="mainUl">
          <li className="li">
            <Link href="#" className="page">Hats</Link>
          </li>
          <li className="li">
            <Link href="#" className="page">Candles</Link>
          </li>
          <li className="li"> 
            <Link href="#" className="page">Holsters & Shealths</Link>
          </li>
          <li className="li">
            <Link href="#" className="page">Kitchenware</Link>
          </li>
          <li className="li">
            <Link href="#" className="page">Wearables</Link>
          </li>
          <li className="li">
            <Link href="#" className="page">Wedding</Link>
          </li>
          <li className="li">
            <Link href="#" className="page">Pet Products</Link>
          </li>
          <li className="li">
            <Link href="#" className="page">Specialties</Link>
          </li>
          <li className="li">
            <Link href="#" className="page">Accesories</Link>
          </li>
          <li className="li companyPage">Company
          <ul id="subUl">
              <li className="subLi">
              <Link href="#" className="page">About</Link>
              </li>
              <li className="subLi">
              <Link href="#" className="page">Our Work</Link>
              </li>
              <li className="subLi">
              <Link href="#" className="page">Contact</Link>
              </li>
          </ul>
          </li>
          </ul>
        </Row>
       </div>

      // <div id="navBox">
      //   <Row id="logoRow">
      //     <Col className="leLogoBox">
      //     <div>
      //       <img className="leLogo" src="http://lee-elmers.com/wp-content/uploads/2018/04/LEblacklogo-02.png" alt="logo"/> 
      //     </div>
      //     </Col>
      //   </Row>
      //   <Row id="mainUlRow">
      //   <ul id="mainUl">
      //     <li className="li">
      //       <Link href="#" className="page">Hats</Link>
      //     </li>
      //     <li className="li">
      //       <Link href="#" className="page">Candles</Link>
      //     </li>
      //     <li className="li"> 
      //       <Link href="#" className="page">Holsters & Shealths</Link>
      //     </li>
      //     <li className="li">
      //       <Link href="#" className="page">Kitchenware</Link>
      //     </li>
      //     <li className="li">
      //       <Link href="#" className="page">Wearables</Link>
      //     </li>
      //     <li className="li">
      //       <Link href="#" className="page">Wedding</Link>
      //     </li>
      //     <li className="li">
      //       <Link href="#" className="page">Pet Products</Link>
      //     </li>
      //     <li className="li">
      //       <Link href="#" className="page">Specialties</Link>
      //     </li>
      //     <li className="li">
      //       <Link href="#" className="page">Accesories</Link>
      //     </li>
      //     <li className="li companyPage">Company
      //     <ul id="subUl">
      //         <li className="subLi">
      //         <Link href="#" className="page">About</Link>
      //         </li>
      //         <li className="subLi">
      //         <Link href="#" className="page">Our Work</Link>
      //         </li>
      //         <li className="subLi">
      //         <Link href="#" className="page">Contact</Link>
      //         </li>
      //     </ul>
      //     </li>
      //     </ul>
      //   </Row>
      //  </div>
 
);
}
}

export default HorizontalNav;
