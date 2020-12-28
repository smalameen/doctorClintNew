import React from "react";
import { Button, Form } from "react-bootstrap";

const FormField = () => {
  return (
    <div style={{ backgroundColor: "#3A4256", color:"white", padding:"1rem"}}>
      <Form className="container" style={{width:"30rem", alignItems:"centre"}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control style={{height:"10rem"}} type="text" placeholder="Message" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormField;
