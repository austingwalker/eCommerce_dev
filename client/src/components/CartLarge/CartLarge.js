import React, { Component } from "react";
// import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
// import { Link } from "react-router-dom";
import "./CartLarge.css"

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
     
      <div id="shoppingCartBox">
        <header className="productHeader">Shopping Cart</header>
        <Container id="shoppingCartContainer">
          <Row>
          {/* <div className="cartItemHeader">PRODUCT</div>
          <div className="cartPriceHeader">PRICE</div>
          <div className="cartQuantityHeader">QUANTITY</div>
          <div className="cartTotalHeader">TOTAL</div> */}

          </Row>
          <Row>
          <table className="table table-striped cartTable">
                  <thead>
                    <tr>
                      <th>PRODUCT</th>
                      {/* <th>Details</th> */}
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th id="thTotal">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                  {/* {this.state.files.map(file => ( */}
                    <tr id="form-row">
                     <td>
                     {/* <Link className="btn btn-link fileName" to={"/viewfile/"}>file name</Link> */}
                     <div className="cartItemBox">
                       <div className="itemPicBox">
                        <img  src="https://scontent.cdninstagram.com/vp/e2b7502839a5f6d4e216c648b091cf27/5DCF88E0/t51.2885-15/sh0.08/e35/s640x640/66656980_1218894461652176_6656340937380864611_n.jpg?_nc_ht=scontent.cdninstagram.com" className="card-img-top itemPic" alt="hat"/>
                      </div>
                      <div className="itemDescription">
                        <figcaption className="cartItemTitle">Hat</figcaption>
                        <p>Cutom ATX Leather Patch Hat</p>
                      </div>
                     </div>
                     </td>
                     <td className="priceTd">
                      <div className="cartPrice">$30.00</div>
                     </td>
                     <td>
                     <div className="cartQuantityBox">
                     {/* <Link className="btn btn-link viewFileLink" to={"/ViewFile/"}>View File</Link> */}
                     <input type="number" className="form-control cartQuantity" name="quantity" value={this.state.quantity} placeholder="" onChange={this.handleInputChange}/>
                     </div>
                     </td>
                     <td>
                     <div className="cartItemTotal">$30.00</div>
                     </td>
                    </tr>
                    {/* ))} */}
                  </tbody>
                  </table>
            {/* <div>
            <form action="/api/cart" method="post">
              <div id="cartItem">
                <div id="cartItemPic">
                  <img src="https://scontent.cdninstagram.com/vp/e2b7502839a5f6d4e216c648b091cf27/5DCF88E0/t51.2885-15/sh0.08/e35/s640x640/66656980_1218894461652176_6656340937380864611_n.jpg?_nc_ht=scontent.cdninstagram.com" className="card-img-top" alt="hat"/>
                </div>
                <div id="cartItemDescription">
                  <p>Cutom ATX Leather Patch Hat</p>
                </div>
              </div>
              <div id="cartPrice">
                <span className="price">$30.00</span>
              </div>
              <div id="cartQuantity">
                <input type="number" className="form-control quantityEdit" name="quantity" value={this.state.quantity} placeholder="" onChange={this.handleInputChange}/>
              </div>
              <div id="cartItemTotal">
                <span className="price">$30.00</span>
              </div>
              <button type="submit" class="btn btn-primary">CHECK OUT</button>
              </form>
            </div> */}
          </Row>
        </Container>
      </div>

    );
  }
}

export default CartLarge;
