import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import AppointmentFrom from "../AppointmentFrom/AppointmentFrom";

const BookingCard = ({ booking, date }) => {

  const [open, setOpen] = useState(false);
 
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);




  return (
    <div>
      <Card style={{width: '18rem', margin:"1rem", alignItems:"center"}}>
        <Card.Body>
          <Card.Title>{booking.subject}</Card.Title>
          <Card.Text>
            {booking.time}
          </Card.Text>
          <Card.Text>
          {booking.date}
          </Card.Text>
          <Card.Text>
          {booking.visitingHour}
          </Card.Text>
          <Card.Text>
          Total space available {booking.totalSpace}
          </Card.Text>
          <Button onClick={() => onOpenModal()}  variant="primary">Book Now</Button>
        </Card.Body>
      </Card>
      <AppointmentFrom onCloseModal={onCloseModal} open={open}/>
      <div>
      </div>
    </div>
  );
};

export default BookingCard;


