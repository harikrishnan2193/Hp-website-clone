import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardShopBy() {
  return (
    <>

      <Card className='mt-4 ms-4 border-light' style={{ width: '350px' }}>
      <Card.Img variant="top" src="https://in-media.apjonlinecdn.com/wysiwyg/shop_by_user_1.jpg" />
      <Card.Body>
        <Card.Text>
          <h5>Exclusive Student Store</h5>
          <h6>Back To School Sale is live!</h6>
        </Card.Text>
        <Button variant="dark">Learn More</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default CardShopBy