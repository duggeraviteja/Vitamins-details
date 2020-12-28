import React, { useEffect }from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Card3=(props)=>{

  useEffect(() => {
    AOS.init({
    offset:200,
    duration:500,
    easing: 'ease-in-sine',
    });
  }, []);



    return(
        <>

<div  className="col-md-4 col-10 mx-auto mb-5"> 
<div className="card fru-card"  data-aos={"zoom-in"}>
 <table>
  <thead>
      <th><h4 className="card-title ml-2 mt-2">{props.name}</h4> </th>
  <td> <img className="img-card3" src={props.imgsrc} alt="aaa"/></td>
  </thead>
  <tbody>
 
    <tr>
      <th scope="row"> vitamin</th>
      <td>{props.vitamin}</td>
    </tr>
    <tr>
      <th scope="row">calories</th>
      <td>J{props.calories}</td>
    </tr>
    <tr>
      <th scope="row">carbohydrate</th>
      <td>{props.carbohydrate}</td>
    </tr>
    <tr>
      <th scope="row">fiber</th>
      <td>{props.fiber}</td>
    </tr>
    <tr>
      <th scope="row">sugar</th>
      <td>{props.sugar}</td>
    </tr>
    <tr>
      <th scope="row">fat</th>
      <td>{props.fat}</td>
    </tr>
    <tr>
      <th scope="row">protein</th>
      <td>{props.protein}</td>
    </tr>
    <tr>
      <th scope="row">manganese</th>
      <td>{props.manganese}</td>
    </tr>
    <tr>
      <th scope="row">potassium</th>
      <td>{props.potassium}</td>
    </tr>
   
  </tbody>
</table>

</div>
</div>



        </>
    );
}

export default Card3;







