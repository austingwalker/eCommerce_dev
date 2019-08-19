import React, { Component } from "react";
// import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import "./Details.css"

class Details extends Component {
  state = {
    quantity: 1
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleQuantityChange = (event) => {
  //   event.preventDefault()
  //   if(event.target.value === "-"){
  //     this.state.quantity--
  //   }
  //   if(event.target.value === "+"){
  //     this.state.quantity++
  //   }
  // }

  log = () => {
    alert(this.state.quantity)
  }


  render() {
    return (
     
      <div>
        <Container>
        <Row>
          <Col>
            <div className="detailsPic">
              <img src="https://scontent.cdninstagram.com/vp/e2b7502839a5f6d4e216c648b091cf27/5DCF88E0/t51.2885-15/sh0.08/e35/s640x640/66656980_1218894461652176_6656340937380864611_n.jpg?_nc_ht=scontent.cdninstagram.com" className="card-img-top" alt="hat"/>
            </div>
            </Col>
            <Col>
            <div id="detailsBox">
              <div id="itemPrice">
                <figcaption className="item">Hat</figcaption>
                <span className="price">$30.00</span>
              </div>
              <div id="descriptionBox">
                <p className="description">Custom made leather patch snapback lids.</p>
              </div>
              <div className="quantityBox">
                <form className="quantityForm">
                <label id="quantityLabel"><strong>QUANTITY</strong></label>
                    <div>
                      <input type="number" className="form-control quantityEdit" name="quantity" value={this.state.quantity} placeholder="" onChange={this.handleInputChange}/>
                    </div>
                  <button type="submit" class="btn btn-primary addToCartBtn">ADD TO CART</button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        </Container>
      </div>

    );
  }
}

export default Details;
