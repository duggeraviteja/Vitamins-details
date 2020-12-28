import React from "react";
import vitaminsdetails from "../vitaminsdetails"
import Card2 from "./Card2";


const About=() =>{
    return(

<div className="container-fluid mt-5">
  <div className="row">
    <div className="col-10 mx-auto">
        <div className="row">
 {
     vitaminsdetails.map((val,ind)=>{
         return(
             <Card2 
             key={ind}
             vitamin_name={val.vitamin_name}
             chemical_name={val.chemical_name}
             source={val.source}
             deficiency_disease={val.deficiency_disease}
             />

         ); 
     })
 }
  
  </div>
</div>
 </div>
</div>



    );
}
export default About;