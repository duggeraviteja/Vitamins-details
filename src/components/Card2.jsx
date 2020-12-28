import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../../node_modules/aos/dist/aos";

const Card2=(props) => {


    useEffect(() => {
        AOS.init({
        offset:200,
        duration:500,
        easing: 'ease-in-sine',
        });
      }, []);

    return(

<div className="col-md-4 col-11 mx-auto mb-5 ">
<div className=" pl-2 ccard"  data-aos={"zoom-in-up"}>

       <div className="d-flex text-center">    <label className="m-2 pt-2"> vitamin </label> <h5 className="card-title ml-1 mt-1">{props.vitamin_name}  </h5></div>
<hr />
  <div className="d-flex"> <label >ChemicalName </label> <h5 className="ml-1">{props.chemical_name}</h5></div>

  <div className="d-flex"><label>Resourcses:</label>   <h6 className="m-1">  {props.source} </h6></div>
  <div><p> <label> deficiency_disease:</label>{props.deficiency_disease} </p></div>

</div>
</div>

    );
}
export default Card2;
