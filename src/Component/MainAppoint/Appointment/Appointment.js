import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Book from '../Book/Book';
import BookAppo from '../BookAppo/BookAppo';
import BookingCard from '../BookingCard/BookingCard';
import Main from '../Main/Main';


const Appointment = () => {
    const [selectTheDate, setSelectTheDate] = useState(new Date());
   const handleDate = date => {
        setSelectTheDate(date);
        
    }
    return (
        <div>
            <Main handleDate={handleDate}/>
            {/* <Book /> */}
            <BookAppo time={selectTheDate} date={selectTheDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;