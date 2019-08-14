import React, { Component } from "react";
// import API from "../../utils/API";
import { Row, Col } from 'reactstrap';
// import { Link } from "react-router-dom";
import axios from 'axios'
import "./Home.css"

class Home extends Component {
  state = {
    instaRow1: [],
    instaRow2: [],
  };

  componentDidMount() {
    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=18089565266.844d947.aa967012aafe470cb906a68ba2f12128')
    .then(res => {
     console.log(res.data.data);
     const fullArr = res.data.data
     const arr12 = fullArr.slice(0, 12)
      console.log(arr12)
      let arr = arr12;
      let half = Math.floor(arr.length / 2)

      let arrFirstHalf = arr.slice(0, half);
      let arrSecondHalf = arr.slice(half, arr.length);

      console.log(arrFirstHalf)
      console.log(arrSecondHalf)



      this.setState({
        instaRow1: arrFirstHalf,
        instaRow2: arrSecondHalf,

      })
    })
    .catch(error => {
      console.log(error);
    })
  }


  render() {
    return (
     
      <div className="homeContainer">
        <Row id="instaRow1">
          {this.state.instaRow1.map(pic => (
            <div className="instaBox" key={pic.images.standard_resolution.url}>
              <img className="imgBox"src={pic.images.standard_resolution.url} alt="instagram"/>
            </div>
          ))}
        </Row>
        <Row id="instaRow2">
          {this.state.instaRow2.map(pic => (
            <div className="instaBox" key={pic.images.standard_resolution.url}>
              <img className="imgBox"src={pic.images.standard_resolution.url} alt="instagram"/>
            </div>
          ))}
        </Row>
      </div>

    );
  }
}

export default Home;
