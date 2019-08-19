import React, { Component } from "react";
// import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard"
import "./Hats.css"

class Hats extends Component {
  state = {
  };

  

  render() {
    return (
     
      <div className="productPageBox">
         <header className="productHeader">Hat Collection</header>
        <Container className="productContainer">
          
        <Row>
            
            {/* {this.state.portfolioItemsOne.map(item => ( */}
              <Col md="3" className="productCardCol">
              <ProductCard
                    // key={item.id}
                    // id={item.id}
                    // image={item.image}
                    // name={item.name}
                    // description={item.description}
                    // technologies={item.technologies}
                    // deployedUrl={item.deployedUrl}
                    // githubRepo={item.githubRepo}
              />  
              </Col>
              <Col md="3" className="productCardCol">
              <ProductCard
                    // key={item.id}
                    // id={item.id}
                    // image={item.image}
                    // name={item.name}
                    // description={item.description}
                    // technologies={item.technologies}
                    // deployedUrl={item.deployedUrl}
                    // githubRepo={item.githubRepo}
              />  
              </Col>
              <Col md="3" className="productCardCol">
              <ProductCard
                    // key={item.id}
                    // id={item.id}
                    // image={item.image}
                    // name={item.name}
                    // description={item.description}
                    // technologies={item.technologies}
                    // deployedUrl={item.deployedUrl}
                    // githubRepo={item.githubRepo}
              />  
              </Col>
              <Col md="3" className="productCardCol">
              <ProductCard
                    // key={item.id}
                    // id={item.id}
                    // image={item.image}
                    // name={item.name}
                    // description={item.description}
                    // technologies={item.technologies}
                    // deployedUrl={item.deployedUrl}
                    // githubRepo={item.githubRepo}
              />  
              </Col>
              <Col md="3" className="productCardCol">
              <ProductCard
                    // key={item.id}
                    // id={item.id}
                    // image={item.image}
                    // name={item.name}
                    // description={item.description}
                    // technologies={item.technologies}
                    // deployedUrl={item.deployedUrl}
                    // githubRepo={item.githubRepo}
              />  
              </Col>
              <Col md="3" className="productCardCol">
              <ProductCard
                    // key={item.id}
                    // id={item.id}
                    // image={item.image}
                    // name={item.name}
                    // description={item.description}
                    // technologies={item.technologies}
                    // deployedUrl={item.deployedUrl}
                    // githubRepo={item.githubRepo}
              />  
              </Col>
              <Col md="3" className="productCardCol">
              <ProductCard
                    // key={item.id}
                    // id={item.id}
                    // image={item.image}
                    // name={item.name}
                    // description={item.description}
                    // technologies={item.technologies}
                    // deployedUrl={item.deployedUrl}
                    // githubRepo={item.githubRepo}
              />  
              </Col>
              <Col md="3" className="productCardCol">
              <ProductCard
                    // key={item.id}
                    // id={item.id}
                    // image={item.image}
                    // name={item.name}
                    // description={item.description}
                    // technologies={item.technologies}
                    // deployedUrl={item.deployedUrl}
                    // githubRepo={item.githubRepo}
              />  
              </Col>
              
            {/* ))}    */}
            
          </Row>
        </Container>
      </div>

    );
  }
}

export default Hats;
