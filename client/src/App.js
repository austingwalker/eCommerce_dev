import React, {useState, useEffect} from "react";
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
import Accessories from "./pages/Accessories";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";


const App = () => {

 const [state, setState] = useState({
    cartQuantity: [],
    changed: false
  })

  useEffect(() => {
  const localData = JSON.parse(localStorage.getItem('Cart'));
  if(!localData){
    setState({...state, cartQuantity: []})
  } else {
  setState({...state, 
    cartQuantity: localData,
    changed: false
  })
  }
  console.log(state.cartQuantity)
    
  }, [state.changed])

  const updateCart = (item) => {
    let currentCart = JSON.parse(localStorage.getItem('Cart'));
    if(!currentCart){
      currentCart = []
    }
    currentCart.push(item)
    localStorage.setItem('Cart', JSON.stringify(currentCart))
    setState({...state, changed: true})
    // renderNewCart()
  }

//  const renderNewCart = () => {
//   const localData = JSON.parse(localStorage.getItem('Cart'));
//   if(!localData){
//     setState({...state, cartQuantity: []})
//   } else {
//   setState({...state, cartQuantity: localData})
//   }
//  }

  let site = (
  <Router>
    <div className="siteContent">
    <div  className="switchBox">
    <Navigation
    quantity={state.cartQuantity}
    />
      <Switch>
        <Route exact path="/" render={() => <Home cartQuantity={state.cartQuantity}/>}/>
        <Route exact path="/hats" component={Hats} />
        <Route exact path="/candles" component={Candles} />
        <Route exact path="/holsters_sheaths" component={Holsters_Sheaths} />
        <Route exact path="/kitchenware" component={Kitchenware} />
        <Route exact path="/wearables" component={Wearables} />
        <Route exact path="/wedding" component={Wedding} />
        <Route exact path="/pet" component={Pet} />
        <Route exact path="/specialties" component={Specialties} />
        <Route exact path="/accessories" component={Accessories} />
        <Route exact path="/details/:id" render={(props) => <Details {...props} update={updateCart}/>}/>
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

  )
    return site
};

export default App;

