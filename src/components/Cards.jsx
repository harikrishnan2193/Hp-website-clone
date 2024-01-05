import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <div className='ms-5 mt-4'>
        <Card style={{ width: '300px' }} className='shadow'>
            <h6 className='text-danger ms-2'>Get flat ₹3500.00 cashback</h6>
      <Card.Img variant="top" className='mt-3'  src="https://in-media.apjonlinecdn.com/catalog/product/c/0/c08192495_2_4.png" />
      <Card.Body>
        <Card.Title><h5>HP Victus Gaming Laptop 39.62 cm 15-fa0353TX</h5></Card.Title>
        <Card.Text>
          <ul>
            <li>12th Generation Intel® Core™ i7 processor</li>
            <li>Windows 11 Home</li>
            <li>39.6 cm (15.6) diagonal, FHD display</li>
            <li>NVIDIA® GeForce RTX™ 3050</li>
            <li>16 GB RAM DDR4</li>
            <li>512 GB PCIe® NVMe™ SSD Hard drive</li>
          </ul>
          <hr />

          <h6>₹101,705 <span style={{backgroundColor:'yellow'}}>SAVE ₹11,715</span></h6>
          <h3>₹89,990</h3>
        </Card.Text>
        <Button variant="dark" className='w-100'>Shope Now</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards