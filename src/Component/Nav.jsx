import React, { useEffect, useState } from 'react'
import './Nav.css'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
function Nav() {
  const [openNavText, setOpenNavText] = useState(false);
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll",()=> {
      if (window.scrollY > 600)
      {
        setShow(true)
      }
      else {
        setShow(false)
      }
    })
  })
 
  // console.log(show);

  return (
    <div className={`${show && 'nav-black'} nav`} style={{boxShadow:'none'}} >
    <MDBNavbar expand='lg' style={{width:'100%',fontWeight:'bold',fontSize:20}}>
 <MDBContainer fluid>
   <MDBNavbarBrand href='#'>
     <img width={'70px'} style={{marginLeft:'20px'}} src="https://www.disneyadvertising.com/wp-content/uploads/2023/09/das_hulu-logo_2x.png" alt="mx-player" />
</MDBNavbarBrand>
   <MDBNavbarToggler
     type='button'
     data-target='#navbarText'
     aria-controls='navbarText'
     aria-expanded='false'
     aria-label='Toggle navigation'
     onClick={() => setOpenNavText(!openNavText)}
   >
     <MDBIcon icon='bars' fas />
   </MDBNavbarToggler>
   <MDBCollapse navbar open={openNavText}>
     <MDBNavbarNav className='mr-auto mb-2 mb-lg-0' style={{paddingLeft:'8%'}} >

       <MDBNavbarItem>
         <MDBNavbarLink active aria-current='page' href='#'>
         {/* <span className='navbar-text text-light'> <MDBIcon fas icon="home" /> </span> */}
         </MDBNavbarLink>
       </MDBNavbarItem>
       <MDBNavbarItem>
         <MDBNavbarLink href='#' style={{color:'darkgray',fontSize:'18px'}}> <b> TV Shows </b></MDBNavbarLink>
       </MDBNavbarItem> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <MDBNavbarItem>
         <MDBNavbarLink href='#' style={{color:'darkgray',fontSize:'18px'}}> <b> Movies </b></MDBNavbarLink>
       </MDBNavbarItem> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <MDBNavbarItem>
         <MDBNavbarLink href='#' style={{color:'darkgray',fontSize:'18px'}}> <b> Originals </b> </MDBNavbarLink>
       </MDBNavbarItem> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <MDBNavbarItem>
         <MDBNavbarLink href='#' style={{color:'darkgray',fontSize:'18px'}}> <b> Kids </b> </MDBNavbarLink>
       </MDBNavbarItem> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <MDBNavbarItem>
         <MDBNavbarLink href='#' style={{color:'darkgray',fontSize:'18px'}}> <b> Networks </b> </MDBNavbarLink>
       </MDBNavbarItem>
       <MDBNavbarItem>
         {/* <MDBNavbarLink href='#' style={{color:'gray'}}><MDBIcon fas icon="angle-down" size='xs' /></MDBNavbarLink> */}
       </MDBNavbarItem>




     </MDBNavbarNav>
    
   </MDBCollapse>
 </MDBContainer>
       <MDBNavbarItem>
       <MDBBtn  color='transparent' className='btn' style={{color:'white',width:'220px',fontSize:'15px'}}>  <b> STRT YOUR FREE TRAIL</b></MDBBtn>
       </MDBNavbarItem> &nbsp;&nbsp;&nbsp;
 <MDBNavbarItem>
         <MDBNavbarLink href='#' style={{color:'darkgray',marginRight:'25px',fontSize:'16px'}}> <b>LOGIN</b> </MDBNavbarLink>
       </MDBNavbarItem>
 <MDBNavbarItem>
         <MDBNavbarLink href='#' style={{color:'white'}}>  </MDBNavbarLink>
       </MDBNavbarItem>
</MDBNavbar>
</div>
  )
}

export default Nav