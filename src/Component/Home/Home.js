import React from 'react';
import Header from '../Head/Header';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';
import ChildImg from './Services/ChildImg';
import Doctor from './Services/Doctor';
import FormField from './Services/FormField';
import Services from './Services/Services';
import Testimonial from './Services/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <ChildImg/>
            <Doctor/>
            <Testimonial/>
            <Doctors/>
            <FormField/>
            <Footer/>
            
        </div>
    );
};

export default Home;