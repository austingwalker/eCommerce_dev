import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = props => (

    <div>
    <Link to="/details" className="productLink">
        <div className="card productImg">
                <img src="https://scontent.cdninstagram.com/vp/e2b7502839a5f6d4e216c648b091cf27/5DCF88E0/t51.2885-15/sh0.08/e35/s640x640/66656980_1218894461652176_6656340937380864611_n.jpg?_nc_ht=scontent.cdninstagram.com" className="card-img-top" alt="hat"/>
            
        <div className="card-body cardText">
            <figcaption><Link to="" className="item">Hat</Link></figcaption>
            <span className="price">$30.00</span>
        </div>
        </div>
        </Link>
    </div>

   
);

export default ProductCard;

 