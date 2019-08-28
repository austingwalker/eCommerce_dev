import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
// import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard"
import "./Wedding.css"

class Wedding extends Component {
  state = {
        products: []
  };

componentDidMount(){
      this.renderProducts()
}
  
renderProducts = () => {
  API.getProducts("wedding")
    .then(res => {
      this.setState({ products: res.data})
    })
    .catch(err => console.log(err));   
}

  render() {
    return (
      <div className="productPageBox">
         <header className="productHeader">Wedding Collection</header>
        <Container className="productContainer">
        <Row>
            {this.state.products.map(item => (
              <Col md="3" className="productCardCol" key={item.id}>
              <ProductCard
                    key={item.id}
                    id={item.id}
                    image={item.img}
                    title={item.title}
                    description={item.description}
                    price={item.price}
              />  
              </Col>
            ))}   
          </Row>
        </Container>
      </div>
    );
  }
}

export default Wedding;
