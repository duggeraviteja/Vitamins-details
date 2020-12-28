import React from "react";
import {fruitsdetails} from "../vitaminsdetails";
import Card3 from "./Card3";

const VegetablesVitamins = () => {
  return(
          <>
<div className="container-fluid mt-5">
<div className="row">
  <div className="col-10 mx-auto">
      <div className="row gy-2">
{
   fruitsdetails.map((val,ind)=>{
       return(
           <Card3
           key={ind}
           name={val.name}
           vitamin={val.vitamin}
           calories={val.calories}
           carbohydrate={val.carbohydrate}
           fiber={val.fiber}
           sugar={val.sugar}
           fat={val.fat}
           protein={val.protein}
           manganese={val.manganese}
           potassium={val.potassium}
           imgsrc={val.imgsrc}
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
export default VegetablesVitamins;

