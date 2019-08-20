import React from "react";
import { Link } from "react-router-dom";
// import {Row, Col} from 'reactstrap';
import "./CartBtnMenu.css"

const CartBtnMenu = () => (
  
  <div className="cartBtnBox">
    <Link to="/cart" id="cartBtnMenu">
      <div >
        <i class="fas fa-shopping-cart"></i>  0  Cart

      </div>
    </Link>
  </div>

);

export default CartBtnMenu;
