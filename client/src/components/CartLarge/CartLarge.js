import React, { Component } from "react";
// import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
// import { Link } from "react-router-dom";
import "./CartLarge.css"

class CartLarge extends Component {
  state = {
    quantity: 1,
    cart: []
  };

  componentWillMount() {
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
     
      <div id="shoppingCartBox">
        <header className="productHeader">Shopping Cart</header>
        <Container id="shoppingCartContainer">
          <Row>
          </Row>
          <Row>
          <table className="table table-striped cartTable">
                  <thead>
                    <tr>
                      <th>PRODUCT</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th id="thTotal">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.cart.map(i => (
                    <tr id="form-row">
                     <td>
                     <div className="cartItemBox">
                       <div className="itemPicBox">
                        <img  src={`/assets/images/${i.img}.png`} className="card-img-top itemPic" alt="hat"/>
                      </div>
                      <div className="itemDescription">
                        <figcaption className="cartItemTitle">{i.title}</figcaption>
                        <p>{i.description}</p>
                      </div>
                     </div>
                     </td>
                     <td className="priceTd">
                      <div className="cartPrice">{i.price}</div>
                     </td>
                     <td>
                     <div className="cartQuantityBox">
                     {/* <Link className="btn btn-link viewFileLink" to={"/ViewFile/"}>View File</Link> */}
                     <input type="number" className="form-control cartQuantity" name="quantity" value={this.state.quantity} placeholder="" onChange={this.handleInputChange}/>
                     </div>
                     </td>
                     <td>
                     <div className="cartItemTotal">${i.price*i.quantity}.00</div>
                     {/* {`${i.price*i.quantity}`} */}
                     </td>
                    </tr>
                    ))}
                  </tbody>
                  </table>
          </Row>
        </Container>
      </div>

    );
  }
}

export default CartLarge;
