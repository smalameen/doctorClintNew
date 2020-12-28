import React from 'react';
import { Button, Image } from 'react-bootstrap';
import child from "../../../images/Mask Group 3.png";

const ChildImg = () => {
    return (
        <div className="container row p-5 mt-5">
            <div className="col-md-5 col-sm-12">
            <Image style={{height:"30rem", width:"30rem", marginLeft:"10px", overflow:"hidden"}} src={child}  />

            </div>
            <div className="col-md-6 col-sm-12" style={{marginLeft:"5rem"}}>
                <h2>We provide you the best, <br/> Yes doctors in the world</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum doloribus alias corporis reiciendis consequatur eveniet ipsa omnis, minus ex, dolore libero at eos consectetur maiores incidunt laudantium amet in vel modi. Quod ad laboriosam eaque adipisci, repellat quos eius, sint voluptatum architecto sunt maxime molestias molestiae itaque unde cupiditate culpa.</p>
                

                <Button style={{border:"none", width:"9rem", backgroundColor:"#1cc7c1"}}>Learn More</Button>

            </div>
            
        </div>
    );
};

export default ChildImg;