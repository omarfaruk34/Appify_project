import React from 'react'
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"
import { BiBell } from "react-icons/bi"
import { AiOutlineMessage } from "react-icons/ai"
import { RiArrowDownSLine } from "react-icons/ri"
import { BiSearchAlt2 } from "react-icons/bi"

export default function NavBar() {
  return (
    <div className='sticky-top nav-bar-area'>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
            <img className='logo-img me-5' src="https://i.ibb.co/7VZLnzV/appifylab-logo.png" height="25px" width="50px" mt-20 alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='bg-secondary'/>
        <Navbar.Collapse id="navbarScroll" className='nav-menu mx-2'>

          <form className='nav-search-box rounded-pill d-flex d-none d-sm-block'>
                         <span className='text-secondary'><BiSearchAlt2 /></span>
                        <input type="search" placeholder='Search' />
          </form>

          <div className='d-flex justify-content-around align-items-center nav-item menu'>
              <Nav className=" fs-5 item ul">
                <Nav.Link as={NavLink} to="/" className='text-light li' ><AiOutlineHome /></Nav.Link>
                <Nav.Link as={NavLink} to="/bodyarea" className='text-light li' ><FaUsers /></Nav.Link>
                <Nav.Link className='text-light li' ><BiBell /></Nav.Link>
                <Nav.Link className='text-light li' ><AiOutlineMessage /></Nav.Link>
                
              </Nav>

              <div className='mx-3 text-light user-profile' >
                  <img className='nav-user me-2 img-fluid rounded-circle' src="https://s.car.info/g/no-avatar.jpg" alt="" />
                  <span className='display-name'> Adnan Chowdhury</span><span><RiArrowDownSLine /></span>
            </div>
          </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}





