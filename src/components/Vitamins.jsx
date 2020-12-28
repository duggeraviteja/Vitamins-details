import React from "react";
import { NavLink } from "react-router-dom";
import fru from "../components/images/fruits-1.svg";
import vit from "../components/images/medicine.svg";
import veg from "../components/images/veg1.svg";




 const Vitamins=()=>{
     return(
         <>

<div className="container-fluid mt-5">
  <div className="row">
    <div className="col-10 mx-auto">
        <div className="row gy-5 mb-5">
            <div className="col-md-4 col-10 mx-auto">
            <div className="card vit-card">
            <img src={vit}  alt="vitamins" className="img-fluid pl-2 aligin-content-center animated-2"/>
  <div className="card-body">
    <b className="text-capitalize">Vitamins and uses</b>
    <p className="card-text">Explore vitamins and Resourcses and deficiency diseases</p>
    <NavLink  exact to="/about-vitamins" className="btn btn-start">Let's Start</NavLink>
  </div>
</div>
 </div>


 <div className="col-md-4 col-10 mx-auto">
            <div className="card vit-card">
  <img src={fru} className="card-img-top animated-2" alt=".a"/>
  <div className="card-body">
    <b className="title">Fruits Vitamins</b>
    <p className="card-text">Let's explore different fruits with different vitamins </p>
    <NavLink exact to="/fruits-vitamins" className="btn btn-start">Let's Start</NavLink>
  </div>
</div>
 </div>

          <div className="col-md-4 col-10 mx-auto">
            <div className="card vit-card">
  <img src={veg} className="card-img-top animated-2" alt=".a"/>
  <div className="card-body">
    <b className="title">Vegitables vitamins</b>
    <p className="card-text">Let's explore different Vegetables with different vitamins</p>
    <NavLink to="/vegitables-vitamins" className="btn btn-start">Let's start</NavLink>
  </div>
</div>
     </div>

        </div>
        </div>
        </div>
        </div>
        



         </>

     );
 }
 export default Vitamins;














