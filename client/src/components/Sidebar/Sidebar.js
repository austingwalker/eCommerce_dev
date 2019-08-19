import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import CartBtn from "../CartBtn";
import "./Sidebar.css"

class Sidebar extends Component {
  state = {
    collapsed: true,
  }  

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

render() {
  return (
    <div>
    <Row id="sidebarRow">
    <CartBtn/>
    <div id="sidebarBox">
      <Navbar color="faded" light id="sidebarNavBox">
        <NavbarToggler onClick={this.toggle} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar id="menuBox">
            <NavItem className="menuI">
              <Link to="/hats" className="menuTitle">Hats</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link to="/candles" className="menuTitle">Candles</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link to="/holsters_sheaths" className="menuTitle">Holsters & Sheaths</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link to="/kitchenware" className="menuTitle">Kitchenware</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link to="/wearables" className="menuTitle">Wearables</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link to="/wedding" className="menuTitle">Wedding</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link to="/pet" className="menuTitle">Pet Products</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link to="/specialties" className="menuTitle">Specialties</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link to="/accesories" className="menuTitle">Accesories</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link to="/about" className="menuTitle">About</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link to="/our_work" className="menuTitle">Our Work</Link>
            </NavItem>
            <NavItem className="menuIC">
              <Link to="/contact" className="menuTitle">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
      </Row>
      <Row>
        <Col className="leLogoBoxSB">
          <Link to="/">
            <img className="leLogoSB" src="http://lee-elmers.com/wp-content/uploads/2018/04/LEblacklogo-02.png" alt="logo"/>
          </Link> 
        </Col>
      </Row>
    </div>
    );
  }
}

export default Sidebar;
