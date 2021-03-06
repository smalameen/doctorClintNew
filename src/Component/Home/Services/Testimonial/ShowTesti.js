import React from 'react';
import { Card } from 'react-bootstrap';

const ShowTesti = ({review}) => {
    return (
        <div>
            <Card style={{width: '18rem', margin:"1rem"}}>
                    <Card.Body>
                      <Card.Text style={{backgroundColor:"#EC524B"}}>
                       {review.name}
                      </Card.Text>
                      <Card.Text>
                       {review.profession}
                      </Card.Text>
                      <Card.Text>
                       {review.review}
                      </Card.Text>
                    </Card.Body>
                    
                  </Card> 
        </div>
    );
};

export default ShowTesti;