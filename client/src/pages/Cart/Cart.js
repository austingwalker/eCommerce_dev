import React, { Component } from "react";
// import API from "../../utils/API";
import { Container} from 'reactstrap';
// import { Link } from "react-router-dom";
import CartLarge from "../../components/CartLarge"
import CartSmall from "../../components/CartSmall"
import "./Cart.css"

class Cart extends Component {
  state = {
    quantity: 1
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
    <Container className="cartContainer">
      {this.state.windowSize  ? <CartLarge /> : <CartSmall/>}
    </Container>
    </div>

    );
  }
}

export default Cart;
