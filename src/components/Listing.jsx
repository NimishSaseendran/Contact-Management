import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { addList, getList, deleteList, updateList } from '../services/AllApis';
import { toast } from 'react-toastify';

function Listing() {
    const [show, setShow] = useState(false);
    const [list, setList] = useState({ role: "", listing: [] });
    const [allLists, setAllLists] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        showLists();
    }, []);

    const showLists = async () => {
        const result = await getList();
        setAllLists(result.data);
    };

    const handleDelete = async (id) => {
        const result = await deleteList(id);
        if (result.status == 200) {
            showLists();
            toast.success('List Deleted ...');
        } else {
            toast.error('Failed to delete !!!');
        }
    };

    const handleList = async () => {
        const result = await addList(list);
        console.log(result);
        if (result.status == 201) {
            toast.success('List Added ...');
            handleClose();
            setList({ role: "", listing: [] });
            showLists();
        } else {
            toast.error('Failed to Add List');
        }
    };

    const dropHandler = async (e, list) => {
        const contact = JSON.parse(e.dataTransfer.getData("contact"));
        list.listing.push(contact);

        const result = await updateList(list.id, list);
        if (result.status == 200) {
            toast.success(`${contact.fullname} added to ${list.role}`);
            showLists();
        } else {
            toast.error('Failed to update the list');
        }
    };

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='ms-1 p-2 shadow' style={{ backgroundColor: '#e6e6e6' }}>
                <div className='d-flex align-items-center justify-content-between '>
                    <h2 className='text-black'>Lists</h2>
                    <button className='btn btn-outline-info me-5' onClick={handleShow}><i className="fa-solid fa-plus" /></button>
                </div>

                <div className="d-flex flex-wrap">
                    {allLists.map((item) => (
                        <div
                            key={item.id}
                            className="m-2 p-3"
                            style={{
                                width: '100%',
                                backgroundColor: '#f8f9fa', 
                                border: '1px solid #ddd', 
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                            }}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandler(e, item)}
                        >
                            <div className="d-flex align-items-center justify-content-between">
                                <h5>{item.role}</h5>
                                <button className="btn" onClick={() => handleDelete(item.id)}>
                                    <i className="fa-regular fa-trash-can fa-lg" style={{ color: "#800000" }} />
                                </button>
                            </div>

                            <div>
                                {item.listing && item.listing.length > 0 ? (
                                    item.listing.map((contact) => (
                                        <div
                                            key={contact.id}
                                            className="mt-2 p-2"
                                            style={{
                                                backgroundColor: '#e6e6e6',
                                                borderRadius: '4px',
                                                border: '1px solid #ccc', // Add a light border for each contact
                                            }}
                                        >
                                            <p><strong>Name:</strong> {contact.fullname}</p>
                                            <p><strong>Role:</strong> {contact.role}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-muted">No contacts in this list</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title className='text-white'>Add List</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <FloatingLabel controlId="floatingRole" label="Job Role">
                        <Form.Control
                            type="text"
                            placeholder="Role"
                            value={list.role}
                            onChange={(e) => setList({ ...list, role: e.target.value })}
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer className='bg-dark border-dark'>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="info" onClick={handleList} className='text-black'>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Listing;
