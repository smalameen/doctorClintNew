import React, { useEffect, useState } from 'react';
import { Card} from 'react-bootstrap';
import axios from 'axios';
import ShowTesti from './ShowTesti';



const clients = [
    {
        name:"Al Amin",
        profession:"Army",
        img:`https://ibb.co/1nxypSb`,
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor tenetur illum, officiis omnis voluptate dolores et a voluptates corporis?"
    },
    {
        name:"Fahim",
        profession:"Army",
        img:`https://ibb.co/1nxypSb`,
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor tenetur illum, officiis omnis voluptate dolores et a voluptates corporis?"
    },
    {
        name:"Sakib",
        profession:"Army",
        img:`https://ibb.co/gvGtSSw`,
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor tenetur illum, officiis omnis voluptate dolores et a voluptates corporis?"
    }
];

const Testimonial = () => {

    const [data, setPosts]=useState([]);
    console.log(data);
    const getPosts = async () => {
      try {
    const userPosts = await axios.get("http://localhost:5001/reviews")
        
        setPosts(userPosts.data);  // set State
      
      } catch (err) {
        console.error(err.message);
      }
    };
      
      useEffect(()=>{
        
        getPosts()
    }, [])  
    return (
        <div className="container mt-4">
            <div style={{textAlign:"center"}}>
                <h1>Testimonial</h1> <br/>
                <h2>What our clients say about our services!</h2>

            </div>
            <div className="d-flex p-1 justify-content-center">
                {
                    data.map(review =>(
                        <ShowTesti review={review}></ShowTesti>
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonial;

