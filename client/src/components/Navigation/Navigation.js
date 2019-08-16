import React, { Component } from "react";
import {Container, Row, Col} from 'reactstrap';
import HorizontalNav from "../HorizontalNav";
import Sidebar from "../../components/Sidebar"
import "./Navigation.css"

class Navigation extends Component  {
  state = {
    windowSize: false,
  };


componentDidMount() {
  window.addEventListener("resize", this.resize.bind(this));
    this.resize();
}

resize(){
  let currentHideNav = (window.innerWidth >= 760);
    if (currentHideNav !== this.state.windowSize) {
        this.setState({windowSize: currentHideNav});
    }
  }

   

  render() {
    return (
  <div>
  <Container className="navigationContainer">
    {/* <Row className="testt"> */}
    {this.state.windowSize ? <HorizontalNav /> : <Sidebar/>}
    {/* </Row> */}
  </Container>
  </div>
);
}
}

export default Navigation;
