import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Hats from "./pages/Hats";
import Candles from "./pages/Candles";
import Holsters_Sheaths from "./pages/Holsters_Sheaths";
import Kitchenware from "./pages/Kitchenware";
import Wearables from "./pages/Wearables";
import Wedding from "./pages/Wedding";
import Pet from "./pages/Pet";
import Specialties from "./pages/Specialties";
import Accesories from "./pages/Accesories";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
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
        <Route exact path="/hats" component={Hats} />
        <Route exact path="/candles" component={Candles} />
        <Route exact path="/holsters_sheaths" component={Holsters_Sheaths} />
        <Route exact path="/kitchenware" component={Kitchenware} />
        <Route exact path="/wearables" component={Wearables} />
        <Route exact path="/wedding" component={Wedding} />
        <Route exact path="/pet" component={Pet} />
        <Route exact path="/specialties" component={Specialties} />
        <Route exact path="/accesories" component={Accesories} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/our_work" component={OurWork} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer className="footerTag"/> 
    </div>
    </div>
  </Router> 
);

export default App;

