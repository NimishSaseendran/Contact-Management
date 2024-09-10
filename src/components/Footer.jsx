import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <div style={{ backgroundColor: '#343A40' }}>
                <Row className='m-0 text-white px-5 pb-3 pt-5'>
                    <Col sm={12} md={6} lg={4}>
                        <h4 className='text-white'>Solution</h4>
                        <ul type='none'>
                            <li>Services</li>
                            <li>Products</li>
                            <li>Free Quote</li>
                            <li>Contact Sales</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <h4 className='text-white'>Resources</h4>
                        <ul type='none'>
                            <li>Blog</li>
                            <li>Help Center</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <h4 className='text-white'>Company</h4>
                        <ul type='none'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Our Team</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>
                </Row>
                <section>
                <footer className="text-center" style={{backgroundColor:'#22262a'}}>
                        <div className="pt-4">
                            <section>
                                <a
                                    className="btn btn-link btn-floating btn-lg text-white m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a
                                    className="btn btn-link btn-floating btn-lg text-white m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>

                                <a
                                    className="btn btn-link btn-floating btn-lg text-white m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-google"></i>
                                </a>

                                <a
                                    className="btn btn-link btn-floating btn-lg text-white m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>

                                <a
                                    className="btn btn-link btn-floating btn-lg text-white m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>

                                <a
                                    className="btn btn-link btn-floating btn-lg text-white m-1"
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                            </section>
                        </div>

                        <div className="text-center text-white pb-3">
                            © 2024 Copyright
                        </div>
                    </footer>
                </section>

            </div>
        </>
    )
}

export default Footer