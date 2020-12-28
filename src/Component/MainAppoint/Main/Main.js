import React from 'react';
import chair from "../../../images/chair.png";
import Calendars from "../Calendar/Calendars";
import 'react-calendar/dist/Calendar.css';
import "../../../Component/Head/NavMain.css";



const Main = ({handleDate}) => {
    return (
        <div className="container" class="header-container">
            <main style={{height:"500px"}} className="row justify-content-center">
            
          <div style={{marginTop:"4rem"}}>
          <Calendars handleDate={handleDate}/>
          </div>
            
            <div style={{marginTop:"3rem"}} className="col-md-6 col-sm-16">
                <img className="img-fluid" src={chair} alt=""/>

            </div>

           
        </main>
        </div>
    );
};

export default Main;