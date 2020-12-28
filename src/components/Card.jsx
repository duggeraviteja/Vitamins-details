import React ,{ useEffect }from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card=(props) => {


  useEffect(() => {
    AOS.init({
    offset:80,
    duration:500,
    easing: 'ease-in-sine',
    });
  }, []);

    return(
    
<>

    <div className="col-md-4 col-10 mx-auto mb-5">
    <div className="pos-vit"  data-aos={"fade-up"}>
        <div>
        <img src={props.imgsrc} className="image-fluid img-d" alt="fruit-img"/> 
    <h5 className="card-title ml-2 mt-2">{props.name}</h5>
    <h4> {props.vitname}</h4>
    </div>
  
    <p className="card-text ">{props.desc}</p>
    
  </div>
</div>


</>
    );
}
export default Card;