import React, { Component } from "react";
import {Row, Col} from 'reactstrap';
import { Link } from "react-router-dom";
import CartBtn from "../CartBtn";
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
              <Link to="/">
                <img className="leLogo" src="http://lee-elmers.com/wp-content/uploads/2018/04/LEblacklogo-02.png" alt="logo"/>
              </Link>
            </div>
          </Col>
        </Row>
        <Row id="mainUlRow">
        <ul id="mainUl">
          <li className="li">
            <Link to="/hats" className="page">Hats</Link>
          </li>
          <li className="li">
            <Link to="/candles" className="page">Candles</Link>
          </li>
          <li className="li"> 
            <Link to="/holsters_sheaths" className="page">Holsters & Sheaths</Link>
          </li>
          <li className="li">
            <Link to="/kitchenware" className="page">Kitchenware</Link>
          </li>
          <li className="li">
            <Link to="/wearables" className="page">Wearables</Link>
          </li>
          <li className="li">
            <Link to="/wedding" className="page">Wedding</Link>
          </li>
          <li className="li">
            <Link to="/pet" className="page">Pet Products</Link>
          </li>
          <li className="li">
            <Link to="/specialties" className="page">Specialties</Link>
          </li>
          <li className="li">
            <Link to="/accesories" className="page">Accesories</Link>
          </li>
          <li className="li companyPage">Company
          <ul id="subUl">
              <li className="subLi">
              <Link to="/about" className="page">About</Link>
              </li>
              <li className="subLi">
              <Link to="/our_work" className="page">Our Work</Link>
              </li>
              <li className="subLi">
              <Link to="/contact" className="page">Contact</Link>
              </li>
          </ul>
          </li>
          <li className="li">
            <CartBtn id="cartBtn"/>
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
