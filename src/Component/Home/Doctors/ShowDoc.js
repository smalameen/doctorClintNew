import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from 'react-bootstrap'
import { faPhone, faGifts } from '@fortawesome/free-solid-svg-icons';

const ShowDoc = ({ doctor }) => {
  return (
    <div>
      <Card style={{ width: '18rem', margin:"1rem" }}>
        <Card.Img style={{height:"10rem"}} variant="top" src={`data:image/png;base64, ${doctor.image.img}`} />
        <Card.Body>
          <div className="d-flex">
          <Card.Title className="mr-3">{doctor.name}</Card.Title>
          <FontAwesomeIcon icon={faPhone}/><p className="ml-1">{doctor.phoneNumber}</p>
          </div>

        </Card.Body>
      </Card>
    </div>
  )
}

export default ShowDoc
