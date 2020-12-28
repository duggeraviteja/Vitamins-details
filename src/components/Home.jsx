import React from "react";
import { NavLink } from "react-router-dom";
import vitamin from "../components/images/vitamins.svg";

const Home = () => {
    return (
        <>
            <section id="head-section" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 mb-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="text-justify text-left">
                                    Vitamins and minerals are essential they perform hundreds of roles in the body.Learn vitamin- <br/> <span className="vit mb-2">  </span>
                                    </h1>
                                    <div className="mt-2">
                                        <NavLink to="/vitamins" className=" btn-start"> Let's Start</NavLink>
                                    </div>
                                   
                                </div>
                              
                    
                                <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center flex-column">
                                    <img src={vitamin} alt="vitamins" className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
