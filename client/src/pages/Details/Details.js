import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
import ContentEditable from 'react-contenteditable'
// import { Link } from "react-router-dom";
import "./Details.css"

class Details extends Component {
  state = {
    quantity: 1,
    item: {}
  };

  componentDidMount() {
    API.getDetails(this.props.match.params.id)
      .then(res => { 
        this.setState({ item: res.data })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleQuantityChange = (event) => {
    event.preventDefault()
    console.log(this.state.quantity)
    console.log(event.target.value)
    if(event.target.value === "-"){
      this.setState({quantity: this.state.quantity - 1})
      
    }
    if(event.target.value === "+"){
      this.setState({quantity: this.state.quantity + 1})
    }
  }

  // addQuantity = () => {
  //   console.log(this.state.quantity)
  //   this.setState({quantity: this.state.quantity++})
    
  // }

  // subtractQuantity = () => {
  //   console.log("sub clicked")
  //   this.state.quantity--
  // }

  createCartContents = (e) => {
    e.preventDefault()
    const q = parseInt(this.state.quantity)
    this.setState({
      item: {...this.state.item,
        quantity: q
      }
    }, this.addToCart)
    // const q = this.state.quantity
    // // e.preventDefault()
   
   
  }

  addToCart = () => {
    this.props.update(this.state.item)
    //  //localStorage.clear()
    // let currentCart = JSON.parse(localStorage.getItem('Cart'));
    // if(!currentCart){
    //   currentCart = []
    // }
    // currentCart.push(this.state.item)
    // localStorage.setItem('Cart', JSON.stringify(currentCart))
  }

  log = () => {
    console.log("Post item: ")
    console.log(this.state.item)
  }


  render() {
    return (
     
      <div>
        <Container>
        <Row>
          <Col>
            <div className="detailsPic">
              <img src={`/assets/images/${this.state.item.img}.png`} className="card-img-top" alt="hat"/>
            </div>
            </Col>
            <Col>
            <div id="detailsBox">
              <div id="itemPrice">
                <figcaption className="item">{this.state.item.title}</figcaption>
                <span className="price">{this.state.item.price}</span>
              </div>
              <div id="descriptionBox">
                <p className="description">{this.state.item.description}</p>
              </div>
              <div>
                <label id="quantityLabel"><strong>QUANTITY</strong></label>
              </div>
              <div className="quantityBox">
                {/* <form className="quantityForm"> */}
                <div id="addSubQ">
                  <div id="minusBtnBox">
                  <button id="minusBtn" onClick={this.handleQuantityChange} value="-">-</button>
                  </div> 
                  <div className="quantityEdit">{this.state.quantity}</div>
                  <div id="addBtnBox">
                  <button id="addBtn" onClick={this.handleQuantityChange} value="+">+</button>
                  </div>
                </div>
                {/* ------------------------------------------------------------------------ */}
                {/* <button onClick={this.handleQuantityChange} value="-">-</button>
                <ContentEditable
                    innerRef={this.contentEditable}
                    html={this.state.quantity.toString()} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={this.handleChange} // handle innerHTML change
                    tagName='article' // Use a custom HTML tag (uses a div by default)
                  />
                  <button onClick={this.handleQuantityChange} value="+">+</button> */}
                  {/* ------------------------------------------------------------------------ */}
                    {/* <div>
                      <input type="number" className="form-control quantityEdit" name="quantity" value={this.state.quantity} placeholder="" onChange={this.handleInputChange}/>
                    </div> */}
                  <button type="submit" className="btn btn-primary addToCartBtn" onClick={this.createCartContents}>ADD TO CART</button>
                {/* </form> */}
              </div>
            </div>
            <button className="btn btn-primary addToCartBtn" onClick={this.log}>log</button>
          </Col>
        </Row>
        </Container>
      </div>

    );
  }
}

export default Details;
