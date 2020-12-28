import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendars = ({ handleDate }) => {
  return (
    <div style={{ boxShadow: "10px 10px 8px 10px #d1d1d1" }}>
      <Calendar onChange={handleDate} />
    </div>
  );
};

export default Calendars;
