
import React from "react";
import Card3 from "./Card3";
import { vegiatblesdetails} from "../vitaminsdetails";

const FruitsVitamins =() => {
    return(

<>
<div className="container-fluid mt-5">
<div className="row">
  <div className="col-10 mx-auto">
      <div className="row gy-2">
{
   vegiatblesdetails.map((val,ind)=>{
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

export default FruitsVitamins;