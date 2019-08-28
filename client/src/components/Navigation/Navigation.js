import React, { Component } from "react";
import {Container} from 'reactstrap';
import HorizontalNav from "../HorizontalNav";
import Sidebar from "../Sidebar";
// import CartBtn from "../CartBtn";
import "./Navigation.css"

class Navigation extends Component  {
  state = {
    // windowSize: false,
    cartQuantity: []
  };


componentDidMount() {
  window.addEventListener("resize", this.resize.bind(this));
    this.resize();
 
    
  const localData = JSON.parse(localStorage.getItem('Cart'));
  console.log("CART: ")
  console.log(localData)
  if(!localData){
    this.setState({cartQuantity: []})
  } else {
  this.setState({cartQuantity: localData})
  }

}

// componentWillUpdate() {
//   const localData = JSON.parse(localStorage.getItem('Cart'));
//   console.log("CART Update: ")
//   console.log(localData)
//   if(localData.length === this.state.cartQuantity.length){
//     return
//   } else {
//     this.setState({cartQuantity: localData})
//   }

// }

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
    {this.state.windowSize 
      ? 
      <HorizontalNav 
      cartQuantity={this.state.cartQuantity}
      /> 
      : 
      <Sidebar
      cartQuantity={this.state.cartQuantity}
      />}
  </Container>
  </div>
);
}
}

export default Navigation;
