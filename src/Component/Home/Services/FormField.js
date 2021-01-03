import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";


const FormField = () => {

  const [newInfo, setNewInfo] = useState([]);

  const handleBlur = (e) => {
    const newData = {...newInfo}
    newData[e.target.name] = [e.target.value]
    setNewInfo(newData);
    console.log(newData);
  }
//   const history = useHistory()
// const goToTest =()=>{
// history.push('/testimonial')
// }

  const handleReview = () => {
    const formData = new FormData()
    formData.append('email', newInfo.email);
    formData.append('review', newInfo.review);
    fetch('http://localhost:5001/userReview', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
}

  return (
    <div style={{ backgroundColor: "#3A4256", color:"white", padding:"1rem"}}>
      <Form onSubmit={handleReview} className="container" style={{width:"30rem", alignItems:"centre"}}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control onBlur={handleBlur} name="review" style={{height:"10rem"}} type="text" placeholder="Message" />
        </Form.Group>
        
        <Button type="type"  variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormField;
