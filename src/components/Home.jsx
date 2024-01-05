import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Cards from './Cards';
import CardsItem from './CardsItem';
import CardItemLast from './CardItemLast';
import CardShopBy from './CardShopBy';
import CardFeatured from '../CardFeatured';
import CardWhatsNew from './CardWhatsNew';


export default function Home() {
  return (
    <>
    <Carousel >
    
    <Carousel.Item>
    <div className="row">
        <div className="col-5">
            <div className='bd-colr'><br />
                <h1 className='ms-3'>HP Winter Fiesta</h1><br />
            </div>
            <div className='bd-colr-lit'> <br />
              <h3 className='ms-2'>New Tech For Your Holiday Cheer</h3> <br />
            </div>
            <div className='ms-3'>
              <h5> <br />Enjoy these Laptop offers:</h5><br />
              <ul>
                <li> Up to ₹10000.00 cashback*</li>
                <li>Up to ₹21000.00 laptop exchange bonus*</li>
                <li>Add Warranty+Antivirus from ₹2999.00*</li>
                <li>Add on Adobe Creative Cloude at ₹2499.00*</li>
              </ul>
            </div>
          <button className='btn btn-dark ms-4'>Shope Now</button> <br /><br />
          <h6 className='ms-3'>*Promotion ends 30 Nov 2023. Exclusions and other T&Cs apply.</h6>
        </div>
        

        <div className="col-7">
        <img style={{marginLeft:'-30px'}} src="https://in-files.apjonlinecdn.com/landingpages/hero-carousel/images/w100_winter2023_desktop.jpg" alt="no image" />

        </div>
      </div>
    </Carousel.Item>

    <Carousel.Item>
    <div className="row">
        <div className="col-5">
            <div className='bd-colr'><br />
                <h1 className='ms-3'>HP Winter Fiesta</h1><br />
            </div>
            <div className='bd-colr-lit'> <br />
              <h3 className='ms-2'>New Tech For Your Holiday Cheer</h3> <br />
            </div>
            <div className='ms-3'>
              <h5> <br />Enjoy these Laptop offers:</h5><br />
              <ul>
                <li> Up to ₹10000.00 cashback*</li>
                <li>Up to ₹21000.00 laptop exchange bonus*</li>
                <li>Add Warranty+Antivirus from ₹2999.00*</li>
                <li>Add on Adobe Creative Cloude at ₹2499.00*</li>
              </ul>
            </div>
          <button className='btn btn-dark ms-4'>Shope Now</button> <br /><br />
          <h6 className='ms-3'>*Promotion ends 30 Nov 2023. Exclusions and other T&Cs apply.</h6>
        </div>
        

        <div className="col-7">
        <img style={{marginLeft:'-30px'}} src="https://in-files.apjonlinecdn.com/landingpages/hero-carousel/images/w100_printer_p2_desktop_v1.jpg" alt="no image" />

        </div>
      </div>
    </Carousel.Item>

    <Carousel.Item>
    <div className="row">
        <div className="col-5">
            <div className='bd-colr3'><br /> <br /><br />
                <h2 className='ms-3 text-white'>Unleash your creativity with HP ZBook</h2><br /><br /><br />
            </div>
            <hr />
            
            <div className='ms-3 '> 
              <h5> <br />Enjoy these Laptop offers:</h5><br />
              <ul>
                <li> Up to ₹10000.00 cashback*</li>
                <li>Up to ₹21000.00 laptop exchange bonus*</li>
                <li>Add Warranty+Antivirus from ₹2999.00*</li>
                <li>Add on Adobe Creative Cloude at ₹2499.00*</li>
              </ul>
            </div>
          <button className='btn btn-dark ms-4'>Shope Now</button> <br /><br />
          <h6 className='ms-3'>*Promotion ends 30 Nov 2023. Exclusions and other T&Cs apply.</h6>
        </div>
        

        <div className="col-7">
        <img style={{marginLeft:'-30px'}} src="https://in-files.apjonlinecdn.com/landingpages/hero-carousel/images/w100_zbook_p2_desktop_v1.jpg" alt="no image" />

        </div>
      </div>
    </Carousel.Item>
  </Carousel>

  <div className='d-flex mt-5' style={{marginLeft:'250px'}}>
    <h2 className='text-primary me-4 mt-3'>Hp Delivers</h2>
    <div className='d-flex'>
      <p>
      <h6 className='m-4'>100% Original <br />Products</h6>
      </p>
      <p className='vertical'>
      <h6 className='m-4'>Free Next Day <br />Delivery</h6>
      </p>
      <p className='vertical'>
      <h6 className='m-4'>0% Interest-free <br />EMI</h6>
      </p>
      <p className='vertical'>
      <h6 className='m-4'>Exclusive <br /> Promotions</h6>
      </p>
      <p className='vertical'>
     <h6 className='m-4'> Laptop <br /> Exchange</h6>
      </p>
    </div>
    
  </div>
  <div>
    <h3 style={{marginLeft:'98px'}}>Recommended for you</h3>
  </div>
  <div className='d-flex ms-5'>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
  </div>

  <div className='d-flex ms-5'>
    <CardsItem/>
    <CardsItem/>
    <CardsItem/>
    <CardsItem/>
    <CardsItem/>
    <CardItemLast/>
  </div>

  <h3 className='mt-5 ms-4'>Shop by User</h3>
  <div className='d-flex'>
    <CardShopBy/>
    <CardShopBy/>
    <CardShopBy/>
    <CardShopBy/>
  </div>

  <h3 className='mt-4 ms-4'>Featured</h3>
  <div className='d-flex'>
    <CardFeatured/>
    <CardFeatured/>
    <CardFeatured/>
  </div>

  <h2 className='mt-5 mb-4' style={{marginLeft:'113px'}}>What's New</h2>
  <div>
    <CardWhatsNew/>
  </div> <br /><br /><br />

  <div className="container-fluid">
  <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" width={'20px'} alt="no image" />
  <h6 className='ms-4' style={{marginTop:'-20px'}}> India  | Order by phone:  Sales:1800-419-4962</h6>
  <hr />
  <div className='mb-5'>
    <img src="https://in-media.apjonlinecdn.com/wysiwyg/icon/visa.gif" alt="no image" />
    <img src="https://in-media.apjonlinecdn.com/wysiwyg/icon/master.gif" alt="no image" />
    <img src="https://in-media.apjonlinecdn.com/wysiwyg/icon/cashcare.gif" alt="no image" />
    <img src="https://in-media.apjonlinecdn.com/wysiwyg/icon/mobikwik.gif" alt="no image" />
    <img src="https://in-media.apjonlinecdn.com/wysiwyg/icon/paytm.gif" alt="no image" />
    <img src="https://in-media.apjonlinecdn.com/wysiwyg/icon/MicrosoftTeams-image_2_.png" alt="no image" />
    <img src="https://in-media.apjonlinecdn.com/wysiwyg/icon/cod.gif" alt="no image" />
    <img src="https://in-media.apjonlinecdn.com/wysiwyg/icon/interest_free_icon.gif" alt="no image" />
  </div>
  </div>
  </>
  )
}
