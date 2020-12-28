import React from 'react';
import { useHistory } from 'react-router-dom';
import chair from "../../images/chair.png";

const NavMain = () => {

    let history = useHistory();
    const handleAppointment = () => {
        history.push("/appointment")
    }
    return (
        <main style={{height:"500px"}} className="row d-flex align-items-center">
            
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:" #3A4256"}}>New Smile <br/> starts from here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sit minus ipsa, omnis nostrum qui.</p>
                <button onClick={()=>handleAppointment()} className="btn btn-primary">Get appointment</button>

            </div>
            <div className="col-md-6 col-sm-16">
                <img className="img-fluid" src={chair} alt=""/>

            </div>

           
        </main>
    );
};

export default NavMain;