import React from "react";
import Card from "./Card";
import {vegatablevitamins} from "../vitaminsuses";

const Vegitables=(props) => {
    return(
       <>

        <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
              <div className="row gy-2">
       {
           vegatablevitamins.map((val,ind)=>{
               return(
                   <Card 
                   key={ind}
                   imgsrc={val.imgsrc}
                   name={val.name}
                   vitname={val.vitname}
                   desc={val.desc}
                   calorie={val.calorie}
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

export default Vegitables;