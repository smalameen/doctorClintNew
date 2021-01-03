import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar'

const AddDoctor = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
  const [newInfo, setNewInfo] = useState({})
  const [files, setFiles] = useState(null)

  const handleBlur = (e) => {
    const newData = { ...newInfo }
    newData[e.target.name] = [e.target.value]
    setNewInfo(newData);
    console.log(newData);
  }

  const handleFiles = (e) => {
      const newFiles = e.target.files[0];
      setFiles(newFiles);
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', files);
    formData.append('email', newInfo.email);
    formData.append('name', newInfo.name);
    formData.append('phoneNumber', newInfo.phoneNumber);
    fetch('http://localhost:5001/addDoctor', {
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
    <div className="row container-fluid d-flex justify-content-center">
      <div className="col-md-3 mt-5 ml-5 col-sm-6">
        <Sidebar />
      </div>
      <div className="col-md-8 mt-5 col-sm-12">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Enter Your name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control onBlur={handleBlur} type="number" name="phoneNumber" placeholder="Enter Your name" />
          </Form.Group>
          <Form.Group>
            <Form.Check  onChange={handleFiles} type="file" name="file"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default AddDoctor
