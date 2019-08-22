import React from "react";
import { Link } from "react-router-dom";
// import {Row, Col} from 'reactstrap';
import "./CartBtn.css"

const CartBtn = () => (
  
  <div className="cartBtnBox">
    <Link to="/cart" id="cartBtn">
      <div>
        <i className="fas fa-shopping-cart"></i>  0  Cart
      </div>
    </Link>
  </div>

);

export default CartBtn;