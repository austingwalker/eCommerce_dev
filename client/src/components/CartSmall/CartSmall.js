import React, { Component } from "react";
// import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
// import { Link } from "react-router-dom";
import "./CartSmall.css"

class CartLarge extends Component {
  state = {
    quantity: 1,
    cart: []
  };

  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem('Cart'));
    console.log("CARTDATA: ")
    console.log(cartData)
    this.setState({cart: cartData})
    
}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
     
      <div className="shoppingCartBoxS">
      <form>
      {this.state.cart.map(i => (
      
      <Container>
        <Row>
          <div className="cartItemBoxS">
            <div className="itemPicBoxS">
              <img  src={`/assets/images/${i.item.img}.png`} className="card-img-top itemPicS" alt="hat"/>
            </div>
          <div className="itemDescriptionS">
              <figcaption className="cartItemTitleS">{i.item.title}</figcaption>
              <p>{i.item.description}</p>
            </div>
          </div>
        </Row>
        <Row>
         <Col></Col>
         <Col></Col>
            <Col>
            <div className="quantityBoxS">
            <figcaption className="cartQuantityTitle"><strong>Quantity</strong></figcaption>
              <div className="cartQuantityBoxS">
                <input type="number" className="form-control cartQuantityS" name="quantity" value={this.state.quantity} placeholder="" onChange={this.handleInputChange}/>
              </div>
              </div> 
              </Col>
              <Col>
            <div >
            <figcaption className="cartTotalTitle"><strong>Total</strong></figcaption>
              <div className="cartItemTotalS">{i.item.price}</div>
            </div>
            </Col>
        </Row>
        </Container>
        ))}
        </form>
      </div>

    );
  }
}

export default CartLarge;
