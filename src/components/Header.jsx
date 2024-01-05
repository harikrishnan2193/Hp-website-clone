import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';



export default function Header() {

  
  return (
    <>
      <div className='d-flex'>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img style={{marginLeft:'30px',marginTop:'10px'}}
                alt="no image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png"
                width="55"
                height="55"
                className="d-inline-block align-top"
              />
              <div style={{marginTop:'-55px',marginLeft:'90px'}}><input style={{height:'50px',width:'350px',fontSize:'small'}} type="text" placeholder='what are you looking for?'  />
              <div className='btn' style={{marginLeft:'-41px'}}><i class="fa-solid fa-magnifying-glass" ></i></div>
              </div>
              <InputGroup >
    
        </InputGroup>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div style={{marginLeft:'853px'}} className='mt-2'> 
          <a className='text-black' href="" style={{display:'block',alignItems:'end',textDecoration:'none'}}><u>Sales:1800-419-4962</u></a>
          <div style={{fontSize:'30px'}}>
            <i class="fa-solid fa-headset me-3"></i>
            <i class="fa-solid fa-cart-shopping me-3"></i>
            <i class="fa-solid fa-location-dot me-2"></i>
            <i class="fa-solid fa-address-book me-3"></i>
          </div>
        </div>
      </div>
      <hr />
      
      <div className='d-flex'>
        <h6 className='me-5 ms-3'>Laptops</h6>
        <h6 className='me-5'>Desktops</h6>
        <h6 className='me-5'>Printers</h6>
        <h6 className='me-5'>Ink&Toner</h6>
        <h6 className='me-5'>Monitors</h6>
        <h6 className='me-5'>Care Pack</h6>
        <h6 className='me-5 text-danger'>sale</h6>
        <h6>Support</h6>
      </div>
      
      
    </>
  )
}
