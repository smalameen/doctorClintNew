import React from 'react';
import { Card} from 'react-bootstrap';

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
    return (
        <div className="container mt-4">
            <div style={{textAlign:"center"}}>
                <h1>Testimonial</h1> <br/>
                <h2>What our clients say about our services!</h2>

            </div>
            <div className="d-flex p-1 justify-content-center">
                {
                    clients.map((client) => 
                    <Card style={{width: '18rem', margin:"1rem"}}>
                    <Card.Body>
                      <Card.Text>
                       {client.text}
                      </Card.Text>
                      <Card.Text>
                       {client.profession}
                      </Card.Text>
                    </Card.Body>
                    <Card.Img style={{height:"10px", width:"10px"}} 
                    src={client.img} rounded/>
                  </Card>)
                }
            </div>
        </div>
    );
};

export default Testimonial;