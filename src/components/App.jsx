import React from "react";
import Navbar from "./Navbar";
import VegetablesVitamins from "./VegetablesVitamins";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Vegitables from "./Vegitables";
import Fruits from "./Fruits";
import Vitamins from "./Vitamins";
import "../style.css";
import {Switch,Route, Redirect} from "react-router-dom";
import FruitsVitamins from "./FruitsVitamins";

const App = () => {
    return(
        <div>
        <Navbar />

        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-vitamins" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/vitamins" component={Vitamins} />
        <Route exact path="/fruits-vitamins" component={Fruits} />
        <Route exact path="/vegitables-vitamins" component={Vegitables} />
        <Route exact path="/veg-vit" component={VegetablesVitamins} />
        <Route exact path="/fru-vit" component={FruitsVitamins} />


        <Redirect to="/" />
        </Switch>

        </div>
    );
}

export default App;
