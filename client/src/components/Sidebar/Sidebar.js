import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
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
    <div id="sidebarBox">
      <Navbar color="faded" light id="sidebarNavBox">
        <NavbarToggler onClick={this.toggle} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar id="menuBox">
            <NavItem className="menuI">
              <Link href="#" className="menuTitle">Hats</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link href="#" className="menuTitle">Candles</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link href="#" className="menuTitle">Holsters & Sheaths</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link href="#" className="menuTitle">Kitchenware</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link href="#" className="menuTitle">Wearables</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link href="#" className="menuTitle">Pet Products</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link href="#" className="menuTitle">Specialties</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link href="#" className="menuTitle">Accesories</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link href="#" className="menuTitle">About</Link>
            </NavItem>
            <NavItem className="menuI">
              <Link href="#" className="menuTitle">Our Work</Link>
            </NavItem>
            <NavItem className="menuIC">
              <Link href="#" className="menuTitle">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
      </Row>
      <Row>
        <Col className="leLogoBoxSB">
        <img className="leLogoSB" src="http://lee-elmers.com/wp-content/uploads/2018/04/LEblacklogo-02.png" alt="logo"/> 
        </Col>
      </Row>
    </div>
    );
  }
}

export default Sidebar;
