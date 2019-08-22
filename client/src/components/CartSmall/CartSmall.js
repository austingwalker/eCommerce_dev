import React, { Component } from "react";
// import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
// import { Link } from "react-router-dom";
import "./CartSmall.css"

class CartLarge extends Component {
  state = {
    quantity: 1
  };

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
      <Container>
        <Row>
          <div className="cartItemBoxS">
            <div className="itemPicBoxS">
              <img  src="https://scontent.cdninstagram.com/vp/e2b7502839a5f6d4e216c648b091cf27/5DCF88E0/t51.2885-15/sh0.08/e35/s640x640/66656980_1218894461652176_6656340937380864611_n.jpg?_nc_ht=scontent.cdninstagram.com" className="card-img-top itemPicS" alt="hat"/>
            </div>
          <div className="itemDescriptionS">
              <figcaption className="cartItemTitleS">Hat</figcaption>
              <p>Cutom ATX Leather Patch Hat</p>
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
              <div className="cartItemTotalS">$30.00</div>
            </div>
            </Col>
        </Row>
        </Container>
        </form>
      </div>

    );
  }
}

export default CartLarge;
