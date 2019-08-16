import React, { Component } from "react";
// import API from "../../utils/API";
import { Row, Col } from 'reactstrap';
// import { Link } from "react-router-dom";
import Insta from "../../components/Insta"
import axios from 'axios'
import "./Home.css"

class Home extends Component {
  state = {
    instaRow1: [],
    instaRow2: [],
  };

  componentDidMount() {
    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=##########')
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
     
      <div>
        <Row id="homeContainer">
          {/* <Col > */}
          <div className="storyColVid">
            {/* <iframe width="560" height="315" src="https://www.youtube.com/watch?v=RrAFyWIpkOQ" frameborder="0" allowfullscreen></iframe> */}

            <iframe id="storyVid" width="560" height="315" src="https://www.youtube.com/embed/RrAFyWIpkOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" ></iframe>
          </div>
          {/* </Col> */}
          {/* <Col className="storyCol"> */}
          <div className="storyColP">
            <p className="storyP">We repurpose upcycled goods and leather to create beautiful new items that you’ll treasure for years to come. You can commission gorgeous gun holsters, knife sheaths, custom leather belts, kitchen & barware and more. We’ll consult with you to get an idea of what you’re looking for, then bring it to life.</p>

            <p className="storyP">We bring our trademark attention to detail and craftsmanship to every single piece that we make, so you can rest easy knowing you’re getting something quality and original.</p>
          </div>
          {/* </Col> */}
        </Row>
        <Insta
          instaRow1={this.state.instaRow1}
          instaRow2={this.state.instaRow2}
        />
      </div>

    );
  }
}

export default Home;
