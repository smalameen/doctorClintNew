import React from 'react';
import InforCard from '../InfoCard/InforCard';
import clock from '../../../images/clock.png';
import phone from '../../../images/phone.png';
import map from '../../../images/googleMap.png';


const fakeData = [
    {
    title: "Opening hour",
    description: "We are open 7 days",
    icon: {clock},
    background: "primary"
},{
    title: "Visit Our location",
    description: "Brooklyn, NY 1000, USA",
    icon: {map},
    background: "dark"
},{
    title: "Call us Now!",
    description: "+880198888888",
    icon: {phone},
    background: "primary"
}

];

const BusinessInfo = () => {
    return (
       <div className="d-flex justify-content-center">
            <section className="w-75 row" style={{marginTop:"4rem"}}>
            {
                fakeData.map(info =>(<InforCard info={info}></InforCard>))
            }

        </section>
       </div>
    );
};

export default BusinessInfo;