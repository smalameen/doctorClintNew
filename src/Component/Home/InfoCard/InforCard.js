import React from 'react';
import clock from '../../../images/clock.png';
import phone from '../../../images/phone.png';
import map from '../../../images/googleMap.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Info.css";

const InforCard = ({info}) => {
    return (
        <div style={{color: 'white', justifyContent: "center"}} className="col-md-4 col-sm-12 mt-2 mb-1 ">
           <div className={`d-flex justify-content-center info-container info-${info.background}`}>
           <div>
           <FontAwesomeIcon style={{height:"4rem", width:"4rem", marginRight:"1rem"}} icon={info.icon}></FontAwesomeIcon>
            </div>
           <div>
            <h4>{info.title}</h4>
            <p>{info.description}</p>
           </div>
           </div>
        </div>
    );
};

export default InforCard;