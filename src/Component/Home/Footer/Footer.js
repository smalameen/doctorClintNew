import React from "react";
import "../../../Component/Home/Footer/Footer.css";
import { faPhone, faClock, faGifts } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const style = {
  backgroundImage: "url(../../../images/Mask Group 4.png)",
  color:"black",
  fontSize:"1rem",
  backgroundSize:"cover",
  padding:"10px", 
  fontWeight:"700",
  fontColor:"black"

}

const Footer = () => {
  return (
    <section className="p-2">
      <div className="row" class="row-container">
       
        <div style={style} className="d-flex col-lg-12 justify-content-between background-footer">
          
          <div>
            <h4>Social media</h4>
            
             <FontAwesomeIcon icon={faGifts}/> <br/> <br/>
           <a href="#">consectetur adipisicing</a> <br/> <br/>
           <a href="#">consectetur adipisicing</a> <br/> <br/>
          </div>

          <div>
          <h4>Social media</h4>

          <a href="#"> consectetur adipisicing.</a> <br/> <br/>
           <a href="#">consectetur adipisicing</a> <br/> <br/>
           <a href="#">consectetur adipisicing</a> <br/> <br/>
           <a href="#">consectetur adipisicing</a> <br/> <br/>
          </div>

          <div>
          <h4>Social media</h4>

          <a href="#"> consectetur adipisicing.</a> <br/> <br/>
           <a href="#">consectetur adipisicing</a> <br/> <br/>
           <a href="#">consectetur adipisicing</a> <br/> <br/>
          </div>

          <div>
          <h4>Social media</h4>

          <a href="#"> consectetur adipisicing.</a> <br/> <br/>
           <a href="#">consectetur adipisicing</a> <br/> <br/>
           <a href="#">consectetur adipisicing</a> <br/> <br/>
           <a href="#">consectetur adipisicing</a> <br/> <br/>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Footer;
