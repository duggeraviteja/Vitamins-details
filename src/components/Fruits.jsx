import React from "react";
import vitaminsuses from "../vitaminsuses";
import Card from "./Card";
const Fruits=() => {
    return(
            <>
<div className="container-fluid mt-5">
  <div className="row">
    <div className="col-10 mx-auto">
        <div className="row">
 {
     vitaminsuses.map((val,ind)=>{
         return(
             <Card 
             key={ind}
             imgsrc={val.imgsrc}
             name={val.name}
             vitname={val.vitname}
             desc={val.desc}
             />

         ); 
     })
 }
  
  </div>
</div>
 </div>
</div>











            </>



        
    );
}
export default Fruits;