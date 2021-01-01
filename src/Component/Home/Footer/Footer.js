import React from "react";
import "../../../Component/Home/Footer/Footer.css";
// import FontAwesome from 'react-fontawesome'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


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
