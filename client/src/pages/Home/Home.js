import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from 'axios'
import "./Home.css"

class Home extends Component {
  state = {
    
  };

  // componentDidMount() {
  //   API.getTest()
  //     .then(res =>
  //       this.setState({ test: res.data})
  //     )
  //     .catch(err => console.log(err));
  // }

  // componentDidMount(){
  //   // http://localhost:3000/#access_token=18089565266.844d947.aa967012aafe470cb906a68ba2f12128
  //   axios.get('https://www.instagram.com/l_e_dev/')
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
      
  // }



  render() {
    return (
     
      <div className="homeContainer">
        <Row>
          <Col >
          <div>
            Hello World!
           </div>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Home;
