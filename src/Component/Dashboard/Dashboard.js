import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import AppointmentsByDate from './AppointmentsByDate/AppointmentsByDate';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Dashboard/AppointmentsByDate/Appointment.css"
const Dashboard = () => {
   
    const [selectTheDates, setSelectTheDates] = useState(new Date());
    console.log(selectTheDates);
    const [appointment, setAppointment] = useState([]);

   const handleDateChange = date => {
        setSelectTheDates(date.toDateString());
         fetch('http://localhost:5001/appointmentsByDate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({date: date.toDateString()})
      })
      .then(res => res.json())
      .then(data => setAppointment(data));
    }
    return (
        <section class="container-fluid background text-black">
            <h2 className="d-flex justify-content-center">Please select date to see appointment</h2>
            <div className="row d-flex justify-content-center">
           <div className="d-flex justify-content-center  col-md-2 col-sm-12">
           <Sidebar/>
           </div>
           <div style={{height:"20rem"}} className="d-flex justify-content-center col-md-5 col-sm-12">
           <Calendar onChange={handleDateChange} />
           </div>
           <div className="col-md-5 col-sm-12">

          {
              appointment.length > 0 ?
              <AppointmentsByDate appointment={appointment}/>
              :
              <h1>No Appointment for this date</h1>
          }
           </div>
        </div>
        </section>
    );
};

export default Dashboard;