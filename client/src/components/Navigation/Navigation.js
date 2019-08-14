import React, { Component } from "react";
import {Container, Row, Col, 
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';
import "./Navigation.css"

class Navigation extends Component  {
  state = {
    isOpen: false
  };

  toggle = () =>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
  <div>
  <Container className="navigationContainer">
    <Row>
      <Col className="leLogoBox">
      <img className="leLogo" src="http://lee-elmers.com/wp-content/uploads/2018/04/LEblacklogo-02.png" alt="logo"/> 
      </Col>
    </Row>
    <Row>
    <Col className="navCol">
      <Navbar light expand="md">
      
          <NavbarToggler onClick={this.toggle}/>
       
          <Collapse isOpen={this.state.isOpen} navbar>
          {/* className="m-auto" */}
            <Nav className="m-auto navBox"  navbar >
              <NavItem className="navItem alignCenter">
                <NavLink href="#">Hats</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="#">Candles</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="#">Custom Holsters & Shealths</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="#">Kitchenware</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="#">Wearables</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="#">Wedding</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="#">Pet Products</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="#">Specialties</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink href="#">Accesories</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Company
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    About
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Our Work
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Contact
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

      </Col>
    </Row>
  </Container>
  </div>
 
 
  // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  //   <a className="navbar-brand" href="/">
      
  //   </a>
  // </nav>
);
}
}

export default Navigation;
