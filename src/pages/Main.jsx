import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import MainCard from '../components/MainCard';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Main() {

    const nav = useNavigate()

    const btnLogout = () =>{
        nav('/')
        toast.success('Logout Successful ...')
    }
    const btnHome = () =>{
        nav('/home')
    }

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand ><i className="fa-solid fa-address-book me-2"></i>Contact Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to={'/main'}>Home</Nav.Link>
            <Nav.Link to={'/main'}>About</Nav.Link>
            <Nav.Link to={'/main'}>Contact</Nav.Link>
            <Nav.Link to={'/main'}>Users</Nav.Link>
            <Nav.Link to={'/main'}>Categories</Nav.Link>
            <button className='btn btn-danger ms-3' onClick={btnLogout}>Logout</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section className='container'>
        <Row className='d-flex align-items-center mt-4' style={{height:'70vh'}}>
            <Col sm={12} md={6}>
            <h2 className='text-black'>Contact Management</h2>
            <p>Contact management is an online platform for managing employee Contacts.</p>
            <div className='d-grid'>
                <button className='btn btn-info' onClick={btnHome}>Let's Go ...</button>
            </div>
            </Col>
            <Col className='py-4 text-center' sm={12} md={6} style={{objectFit:'cover'}}>
            <img src="https://website-assets-fw.freshworks.com/attachments/cjuwek45n01w4ztg0bh9cvq4q-contact-management-software.one-half.png" alt="intro Image" className='img-fluid rounded'/>
            </Col>
        </Row>
    </section>

    <section>
        <h2 className='text-center text-black mt-4'>Features</h2>
        <div className='d-flex flex-wrap justify-content-around my-5'>
            <MainCard />
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Main