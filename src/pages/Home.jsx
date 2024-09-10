import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Listing from '../components/Listing';
import ContactList from '../components/ContactList';
import Footer from '../components/Footer';
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEmployee, getEmployeeContact, deleteContact, updateEmployee } from '../services/AllApis';
import { toast } from 'react-toastify';

function Home() {
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [empDetail, setEmpDetail] = useState({
    fullname: "", email: "", phone: "", role: "", city: "", dateAdded: ""
  });
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getEmployeeContact();
    setContacts(result.data);
  };

  const handleAdd = async () => {
    if (isEditing) {
      const result = await updateEmployee(selectedContact.id, empDetail);
      if (result.status === 200) {
        toast.success('Contact Updated ...');
      } else {
        toast.warning('Failed to Update Contact !!!');
      }
      setIsEditing(false);
      setSelectedContact(null);
    } else {
      const currentDate = new Date().toLocaleDateString('en-GB');
      empDetail.dateAdded = currentDate;
      const result = await addEmployee(empDetail);
      if (result.status === 201) {
        toast.success('Contact Added ...');
      } else {
        toast.warning('Failed to Add Contact !!!');
      }
    }

    setEmpDetail({
      fullname: "", email: "", phone: "", city: "", role: "", dateAdded: ""
    });
    getData();
    handleClose();
  };

  const handleDelete = async (id) => {
    const result = await deleteContact(id);
    if (result.status === 200) {
      toast.success('Contact Deleted ...');
      getData();
    } else {
      toast.warning('Failed to Delete !!!');
    }
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setEmpDetail({
      fullname: contact.fullname,
      email: contact.email,
      phone: contact.phone,
      city: contact.city,
      role: contact.role
    });
    setIsEditing(true);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setIsEditing(false);
    setSelectedContact(null);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Header />
        <section>
          <Row className='m-0 my-5'>
            <Col sm={12} lg={2} className='p-0 home-c1'>
              <Listing />
            </Col>
            <Col sm={12} lg={10} className='home-c2'>
              <h2 className='text-black'>Employee Contact Management</h2>
              <div className='d-flex justify-content-between mt-4'>
                <input className='form-control border border-dark w-50' type="text" placeholder='Search' />
                <button className='btn btn-info w-25' onClick={handleShow}>
                  <i className="fa-solid fa-user-plus me-3" />Add New
                </button>
              </div>
              <ContactList contacts={contacts} handleDelete={handleDelete} handleEdit={handleEdit} />
            </Col>
          </Row>
        </section>
        <Footer/>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton className='bg-dark'>
            <Modal.Title className='text-white'>
              {isEditing ? 'Edit Employee' : 'Add New Employee'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='bg-dark'>
            <FloatingLabel controlId="name" label="Full Name" className='mb-2'>
              <Form.Control type="text" placeholder="name" value={empDetail.fullname} onChange={(e) => setEmpDetail({ ...empDetail, fullname: e.target.value })} />
            </FloatingLabel>
            <FloatingLabel controlId="email" label="Email" className='mb-2'>
              <Form.Control type="email" placeholder="email" value={empDetail.email} onChange={(e) => setEmpDetail({ ...empDetail, email: e.target.value })} />
            </FloatingLabel>
            <FloatingLabel controlId="phone" label="Phone" className='mb-2'>
              <Form.Control type="number" placeholder="phone" value={empDetail.phone} onChange={(e) => setEmpDetail({ ...empDetail, phone: e.target.value })} />
            </FloatingLabel>
            <FloatingLabel controlId="city" label="City" className='mb-2'>
              <Form.Control type="text" placeholder="city" value={empDetail.city} onChange={(e) => setEmpDetail({ ...empDetail, city: e.target.value })} />
            </FloatingLabel>
            <FloatingLabel controlId="role" label="Job Role">
              <Form.Control type="text" placeholder="role" value={empDetail.role} onChange={(e) => setEmpDetail({ ...empDetail, role: e.target.value })} />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer className='bg-dark'>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" className='text-black' onClick={handleAdd}>
              {isEditing ? 'Update' : 'Save'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Home;
