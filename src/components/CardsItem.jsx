import React from 'react'
import Card from 'react-bootstrap/Card';
import  './Cardstem.css'

function CardsItem() {
  return (
    <div className='mt-5 me-2 ms-2'>
        <Card id='card' style={{ width: '' }}>
        <Card.Title className='text-center'>Card Title</Card.Title>
      <Card.Img className='mx-4' variant="top" src="https://in-media.apjonlinecdn.com/wysiwyg/2023/category_block/laptops.png" style={{width:'176px',height:'145'}}/>
      <Card.Body>
        <Card.Text> </Card.Text>
        <h6>From:₹22,299</h6>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardsItem