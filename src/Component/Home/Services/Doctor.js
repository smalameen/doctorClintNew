import React from "react";
import { Button, Image } from "react-bootstrap";
import doctorImage from "../../../../src/images/5790-removebg.png";
import "./doctor.css";

const Doctor = () => {
  return (
    <div style={{marginTop:"10rem", backgroundImage:"../../../images/Group 140.png", backgroundColor: " #3A4256"}}>
      <div
        style={{ height: "29rem"}}
        className="row  d-flex"
      >
        <div className="col-sm-6">
          <Image style={{ height: "39rem", transform: "translateY(-10rem)"}} src={doctorImage} rounded></Image>
        </div>
        <div style={{ height: "29rem", padding: "1rem" }} className="col-sm-6">
          <h3 style={{ color: "#1cc7c1" }}>Appointment</h3> <br /> <br />
          <h2 style={{ color: "white" }}>
            Today you can make appointment for this post other wise the
            appointment will be filled up :D
          </h2>{" "}
          <br /> <br />
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            quaerat, libero aut eum pariatur vitae.
          </p>
          <Button style={{ backgroundColor: "#1cc7c1" }}>Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
