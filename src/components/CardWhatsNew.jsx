import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';



function CardWhatsNew() {
  return (
    <>
        <Carousel>

        <Carousel.Item>
    <div className="row" style={{marginLeft:'130px',marginRight:'60px'}}>
        <div className="col-6">
        <img width={'100%'} style={{marginLeft:'-30px'}} src="https://in-media.apjonlinecdn.com/latestproducts_latest/t5/pc169804210358874.jpg" alt="no image" />
        <div className='mt-4' style={{marginLeft:'-30px'}}>
          <h2>Discover 13th Intel® Core™ Processors</h2>
          <h4>Redefining power and speed for peak productivity</h4>
          
          <Button className='me-3 ms-3 mt-3' variant="dark">Learn More</Button>
          <Button className='mt-3' variant="light">Learn More</Button>
        </div>
      

        </div>

        <div className="col-6">
        <img width={'100%'} style={{marginLeft:'-30px'}} src="https://in-media.apjonlinecdn.com/latestproducts_latest/ti/pc169779692322103.jpg" alt="no image" />
        <div className='mt-4' style={{marginLeft:'-30px'}}>
          <h2>Discover 13th Intel® Core™ Processors</h2>
          <h4>Redefining power and speed for peak productivity</h4>
          
          <Button className='me-3 ms-3 mt-3' variant="dark">Learn More</Button>
          <Button className='mt-3' variant="light">Learn More</Button>
        </div>

        </div>

      </div>
    </Carousel.Item>

    <Carousel.Item>
    <div className="row" style={{marginLeft:'130px',marginRight:'60px'}}>
        <div className="col-6">
        <img width={'100%'} style={{marginLeft:'-30px'}} src="https://in-media.apjonlinecdn.com/latestproducts_latest/nf/pc169562965225707.jpg" alt="no image" />
        <div className='mt-4' style={{marginLeft:'-30px'}}>
          <h2>Discover 13th Intel® Core™ Processors</h2>
          <h4>Redefining power and speed for peak productivity</h4>
          
          <Button className='me-3 ms-3 mt-3' variant="dark">Learn More</Button>
          <Button className='mt-3' variant="light">Learn More</Button>
        </div>

        </div>
      
        <div className="col-6">
        <img width={'100%'} style={{marginLeft:'-30px'}} src="https://in-media.apjonlinecdn.com/latestproducts_latest/c0/pc169561926964244.jpg" alt="no image" />
        <div className='mt-4' style={{marginLeft:'-30px'}}>
          <h2>Discover 13th Intel® Core™ Processors</h2>
          <h4>Redefining power and speed for peak productivity</h4>
          
          <Button className='me-3 ms-3 mt-3' variant="dark">Learn More</Button>
          <Button className='mt-3' variant="light">Learn More</Button>
        </div>

        </div>
      </div>
    </Carousel.Item>

        </Carousel>
    </>
  )
}

export default CardWhatsNew