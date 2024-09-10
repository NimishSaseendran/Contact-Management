import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUser, checkEmail, userLogin } from '../services/AllApis';

function Signup() {

    const [signUpDetails, setSignUpDetails] = useState({
        fullname: "", phone: "", email: "", password: ""
    })

    const nav = useNavigate()

    const handleSignup = async () => {
        const { fullname, phone, email, password } = signUpDetails
        if (!fullname || !phone || !email || !password) {
            toast.warning('Enter All Inputs')
        } else {
            const result = await checkEmail(email)
            if (result.data.length > 0) {
                toast.warning("Email Already Exist. Use Another Email")
            } else {
                const result = await createUser(signUpDetails)
                if(result.status == 201){
                    toast.success('Registration Successful ...')
                    setSignUpDetails({
                        fullname: "", phone: "", email: "", password: ""
                    })
                    nav('/')
                }

            }
        }
    }

    return (
        <>
            <Row className='d-flex align-items-center justify-content-center m-0 bg-dark' style={{ height: '100vh' }}>
                <Col sm={12} md={6} lg={4}>
                    <div className='shadow px-5 py-4' style={{ 'borderRadius': '20px' }}>
                        <h2 className='text-center text-white fw-bold mb-4'>Sign Up</h2>
                        <FloatingLabel controlId="username" label="Full Name" className='mb-3'>
                            <Form.Control type="text" placeholder="FullName" onChange={(e) => setSignUpDetails({ ...signUpDetails, fullname: e.target.value })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="phone" label="Phone No:" className='mb-3'>
                            <Form.Control type="number" placeholder="Phone" onChange={(e) => setSignUpDetails({ ...signUpDetails, phone: e.target.value })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="email" label="Email" className='mb-3'>
                            <Form.Control type="email" placeholder="email" onChange={(e) => setSignUpDetails({ ...signUpDetails, email: e.target.value })} />
                        </FloatingLabel>
                        <FloatingLabel controlId="password" label="Password" className='mb-3'>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setSignUpDetails({ ...signUpDetails, password: e.target.value })} />
                        </FloatingLabel>
                        <div className='d-flex justify-content-between align-items-center'>
                            <button className='btn btn-outline-info w-50 fw-semibold' onClick={handleSignup}>Signup</button>
                            <Link to={'/'}>Already a User?</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Signup