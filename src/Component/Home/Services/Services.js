import React from 'react';
import oneImg from "../../../images/tooth (1).png";
import twoImg from "../../../images/001-dental.png";
import threeImg from "../../../images/tooth.png";
import { Card } from 'react-bootstrap';
const fakeData = [
    {
    title: "Fluoride Treatment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ex illum ipsa vel voluptatibus similique.",
    img: oneImg,
    
},{
    title: "Dat Falan",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ex illum ipsa vel voluptatibus similique.",
    img: twoImg,
    background: "dark"
},{
    title: "Noyun dat lagan",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ex illum ipsa vel voluptatibus similique.",
    img: threeImg,
   
}

];

const Services = () => {
    return (
       <div style={{ marginTop:"6rem", textAlign:"center"}}>
           <h2 style={{color:"#1cc7c1"}}>Our Services</h2>
           <h1>Service we provide</h1>
            <div className="d-flex justify-content-center" style={{ marginTop:"5rem"}}>
           {
               fakeData.map(tooth=>(
                <Card style={{ width: '18rem', height:"18rem", marginLeft:"2rem", alignItems:"center", padding:"10px", border:"none"}}>
                <Card.Img style={{ height: '8rem', width: '8rem'}} src={tooth.img}/>
                <Card.Body>
                  <Card.Title>{tooth.title}</Card.Title>s
                  <Card.Text>
                    {tooth.description}
                  </Card.Text>
                </Card.Body>
              </Card>
               ))
           } 
        </div>
        
       </div>
    );
};

export default Services;