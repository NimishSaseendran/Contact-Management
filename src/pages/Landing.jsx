import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin } from '../services/AllApis';
import { useNavigate } from 'react-router-dom';


function Landing() {

    const [loginDetail, setLoginDetails] = useState({
        email:"", password:""
    })

    const nav = useNavigate()

    const handleLogin = async () =>{
        console.log(loginDetail);
        const { email, password } = loginDetail
        if(!email || !password){
            toast.warning('Enter All Fields !!!')
        } else {
            const result = await userLogin(email, password)
            if(result.status == 200){
                if(result.data.length>0){
                    console.log(result.data[0]);
                    sessionStorage.setItem('userData', JSON.stringify(result.data[0]))
                    toast.success('Login Successful ...')
                    nav('/main')
                    setLoginDetails({
                        email:"", password:""
                    })
                } else {
                    toast.warning('Invalid Email or Password')
                }
                
            } else {
                toast.error('Something went Wrong')
            }
        }
        
    }

    return (
        <>
            <div className='container my-5'>
                <Row className='m-0 d-flex shadow justify-content-center align-items-center' style={{ height: '80vh' }}>
                    <Col className='bg-light' style={{ height: '100%' }} sm={12} md={6}>
                        <div className='d-flex flex-column align-items-center justify-content-center text-black' style={{ height: '100%', width: '100%' }}>
                            <p className='m-0'>Nice to see you again</p>
                            <h2 className='fw-semibold mb-5 text-black'>WELCOME BACK</h2>
                            <p className='px-5' style={{ textAlign: 'justify', textIndent: '50px' }}>Welcome to the Contact Management System—a simple and efficient platform to organize and manage your contacts. Whether you're keeping track of personal connections or business relationships, our user-friendly interface allows you to easily add, update, view, or delete contacts. Enjoy a streamlined experience designed to help you stay organized and connected effortlessly.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}
                    className='bg-info'
                    style={{
                        height: '100%', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px',
                        borderTopRightRadius: '20px', borderBottomRightRadius: '20px'
                    }}>
                        <div className='container d-flex justify-content-center align-items-center' style={{height:'100%'}}>
                            <div className='container p-5'>
                                <h2 className='text-center mb-3 fw-semibold'>Login</h2>
                                <FloatingLabel controlId="username" label="Email" className='mb-2'>
                                    <Form.Control type="text" placeholder="Username" onChange={(e)=>setLoginDetails({...loginDetail,email:e.target.value})}/>
                                </FloatingLabel>
                                <FloatingLabel controlId="password" label="Password" className='mb-4'>
                                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setLoginDetails({...loginDetail,password:e.target.value})} />
                                </FloatingLabel>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button className='btn btn-outline-dark fw-semibold w-50' onClick={handleLogin}>Login</button>
                                    <Link className='text-black ms-3' to={'/sign-up'}>New to here?Signup</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Landing