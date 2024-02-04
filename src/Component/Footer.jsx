import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
  } from 'mdb-react-ui-kit';
function Footer() {
  return (
   <>
   <div className="foot" style={{backgroundColor:'lightgray',color:'black'}}>
    <br /><br />
       <MDBFooter className='text-dark text-left text-lg-left'>
      <MDBContainer  className='p-1'>
        <MDBRow >
         

          <MDBCol lg='4' md='6' style={{fontSize:'16px',gap:'5px'}}  className='mb-4 mb-md-0 '>
            <h5 className='text-uppercase'><b>BROWSE</b> </h5>
            <ul className='list-unstyled mb-0'>
            <li>
                <a href='#!' className='text-black'>
                Streaming Library
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                Live TV
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                Live News
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                Live Sports
                </a>
                                  </li>
                                  <li>
                <a href='#!' className='text-black'>
                TV Shows
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                Movies
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                Originals
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                Networks
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                Kids
                </a>
                                  </li>
                                  <li>
                <a href='#!' className='text-black'>
                FX
                </a>
              </li>
              </ul>    
                          </MDBCol>
                          <MDBCol lg='4' md='6' style={{fontSize:'16px',gap:'5px'}}  className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'> <b>HELP</b></h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-black'>
                Account & Billing
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                Plans & Pricing
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                Supported Devices
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
               
                Accessibility
                </a>
              </li>
            </ul>
              </MDBCol>
           

           <MDBCol lg='4' md='6' style={{fontSize:'16px',gap:'5px'}}  className='mb-4 mb-md-0'>
           <h5 className='text-uppercase mb-0'><b>ABOUT US</b> </h5>

                <ul className='list-unstyled'>
                <li>
                    <a href='#!' className='text-black'>
                    Shop Hulu
                    </a>
                </li>
                <li>
                    <a href='#!' className='text-black'>
                    Press
                    </a>
                </li>
                <li>
                    <a href='#!' className='text-black'>
                    Jobs
                    </a>
                </li>
                <li>
                    <a href='#!' className='text-black'>
                    Contact
                    </a>
                                    </li>
                                    <li>
                    <a href='#!' className='text-black'>
                    Guides | What to Watc
                    </a>
                </li>
                </ul>
              </MDBCol>
                          
               <MDBCol lg='4' md='6' style={{fontSize:'15px',gap:'5px',marginLeft:'5px',marginLeft:'900px',marginBottom:'800px'}}  className='mb-4 mb-md-0'>
           
              </MDBCol>
          
                          
        </MDBRow>
         </MDBContainer>
         <MDBRow >
        
      <MDBCol lg='6' md='12' style={{marginLeft:'70px'}} className='mb-4 mb-md-0'> <hr />
                  <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" size='lg' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" size='lg'/>
          </a>
          <a href='' className='me-4 text-reset' size='xl'>
            <MDBIcon fab icon="youtube" />
          </a>
          <a href='' className='me-4 text-reset' size='xl'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
          </MDBCol>
      <div className='text-center p-3'>
        {/* &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
        MX Media & Entertainment. All rights reserved.
        </a> */}
                  </div>
          </MDBRow>
    </MDBFooter>
    </div>
   </>
  )
}

export default Footer