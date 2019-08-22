import React, { Component } from "react";
import {Container} from 'reactstrap';
import HorizontalNav from "../HorizontalNav";
import Sidebar from "../Sidebar";
// import CartBtn from "../CartBtn";
import "./Navigation.css"

class Navigation extends Component  {
  state = {
    // windowSize: false,
  };


componentDidMount() {
  window.addEventListener("resize", this.resize.bind(this));
    this.resize();
}

resize(){
  let currentHideNav = (window.innerWidth >= 760);
    if (currentHideNav !== this.state.windowSize) {
        this.setState({
          windowSize: currentHideNav
        });
    }
  }

  render() {
    return (
  <div>
  <Container className="navigationContainer">
    {this.state.windowSize ? <HorizontalNav /> : <Sidebar/>}
  </Container>
  </div>
);
}
}

export default Navigation;
