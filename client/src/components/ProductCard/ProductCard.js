import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

// const imgTag = "le_golfcard"

const ProductCard = props => (
    // https://scontent.cdninstagram.com/vp/e2b7502839a5f6d4e216c648b091cf27/5DCF88E0/t51.2885-15/sh0.08/e35/s640x640/66656980_1218894461652176_6656340937380864611_n.jpg?_nc_ht=scontent.cdninstagram.com
    <div>
    <Link to={"/details/" + props.id} className="productLink">
        <div className="card productImgBox">
        
                <img src={`/assets/images/${props.image}.png`} className="card-img-top productImg" alt="hat"/>
            
        <div className="card-body cardText">
            <figcaption>{props.title}</figcaption>
            <span className="price">{props.price}</span>
        </div>
        </div>
        </Link>
    </div>

   
);

export default ProductCard;

 