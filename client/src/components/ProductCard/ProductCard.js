import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";


const ProductCard = props => (
    <div>
    <Link to={"/details/" + props.id} className="productLink">
        <div className="card productImgBox">
            <img src={`/assets/images/${props.image}.png`} className="card-img-top productImg" alt="hat"/>
        <div className="card-body cardText">
            <figcaption>{props.title}</figcaption>
            <span className="price">${props.price}</span>
        </div>
        </div>
        </Link>
    </div>
);

export default ProductCard;

 