import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardItemLast() {
  return (
    <>
   <Card className='mt-5 bg bg-dark' style={{width:'225px',height:'252px'}}>
      <ListGroup variant="flush">
        <ListGroup.Item className='bg bg-dark text-white'>Intel 13th gen Laptops <i class="fa-solid fa-greater-than fa-beat-fade"></i></ListGroup.Item>
        <ListGroup.Item className='bg bg-dark text-white'>Gaming Laptops <i class="fa-solid fa-greater-than fa-beat-fade"></i></ListGroup.Item>
        <ListGroup.Item className='bg bg-dark text-white'>Premium Laptops <i class="fa-solid fa-greater-than fa-beat-fade"></i></ListGroup.Item>
        <ListGroup.Item className='bg bg-dark text-white'>Bussness Laptops <i class="fa-solid fa-greater-than fa-beat-fade"></i></ListGroup.Item>
        <ListGroup.Item className='bg bg-dark text-white'>Laser Jet Printer <i class="fa-solid fa-greater-than fa-beat-fade"></i></ListGroup.Item>
      </ListGroup>
    </Card>
    </>
  )
}

export default CardItemLast