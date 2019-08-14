import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <Router>
    <div className="siteContent">
    <div  className="switchBox">
    <Navigation/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
      <Footer className="footerTag"/> 
    </div>
    </div>
  </Router> 
);

export default App;
