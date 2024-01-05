import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardFeatured() {
  return (
    <>
    <Col>
        <Row>
        <Card className='mt-4 ms-4 border-light' style={{ width: '470px' }}>
          <Card.Img variant="top" src="https://in-media.apjonlinecdn.com/wysiwyg/Featured.jpg" />
          <Card.Body>
            <Card.Text>
              <h5>Discover 13th Intel® Core™ Processors</h5>
              <h6>Redefining power and speed for peak productivity</h6>
            </Card.Text>
            <Button variant="dark" className='mt-3'>Learn More</Button>
          </Card.Body>
        </Card>
        </Row>
        <Row>
        <Card className='mt-4 ms-4 border-light' style={{ width: '470px' }}>
          <Card.Img variant="top" src="https://in-media.apjonlinecdn.com/wysiwyg/Featured_Offer_1.png" />
          <Card.Body>
            <Card.Text>
              <h5>Discover 13th Intel® Core™ Processors</h5>
              <h6>Redefining power and speed for peak productivity</h6>
            </Card.Text>
            <Button variant="dark" className='mt-3'>Learn More</Button>
          </Card.Body>
        </Card>
        </Row>
    </Col>
    </>
  )
}

export default CardFeatured