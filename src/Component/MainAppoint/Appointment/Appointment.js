import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Book from '../Book/Book';
import BookAppo from '../BookAppo/BookAppo';
import BookingCard from '../BookingCard/BookingCard';
import Main from '../Main/Main';


const Appointment = () => {
    const [selectTheDate, setSelectTheDate] = useState(new Date());
   let handleDate = date => {
        setSelectTheDate(date);
    }
    return (
        <div>
            <Main handleDate={handleDate}/>
            <Book time={selectTheDate} date={selectTheDate}/>
            <BookAppo/>
            <Footer/>
        </div>
    );
};

export default Appointment;