import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/About.css';

const About = () => {
    return (
        <section className="about-section py-5" id="about">
            <Container>
                <h2 className="section-title text-center mb-5 animate__animated animate__fadeIn">About Me</h2>
                <Row className="align-items-center d-flex">
                    <Col lg={4} className="mb-4 mb-lg-0">
                        <div className="profile-image-wrapper animate__animated animate__fadeInLeft">
                            <img src="images\raseem pas.jpg" alt="Profile" className="img-fluid rounded-circle" />
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="about-content animate__animated animate__fadeInRight">
                            <h3 className="mb-4">Web developer & Flutter Developer </h3>
                            <p className='mt-5'>
                                My name is Raseem. I am from Karunagappally. I have completed +2 Commerce
                                at HSS MODEL Karunagappally. Currently, I'm passionate about mobile
                                development using Flutter. My family consists of 4 members including me: 
                                father Yoousuf, mother Sheeja, and my sister Rabiya.
                                I love coding and I'm continuously improving my skills.
                            </p>
                            <Row className="info-grid mb-4">
                                <Col sm={6} className="info-item">
                                    <h6>Name: <span className="text-muted">Raseem</span></h6>
                                </Col>
                                <Col sm={6} className="info-item">
                                    <h6>Birthday: <span className="text-muted">02 March 2005</span></h6>
                                </Col>
                                <Col sm={6} className="info-item">
                                    <h6>+2: <span className="text-muted">Commerce</span></h6>
                                </Col>
                                <Col sm={6} className="info-item">
                                    <h6>Interests: <span className="text-muted">Friends, Football, Coding</span></h6>
                                </Col>
                                <Col sm={6} className="info-item">
                                    <h6>Phone: <span className="text-muted">7025696582</span></h6>
                                </Col>
                                <Col sm={6} className="info-item">
                                    <h6>Email: <span className="text-muted">raseem9009@gmail.com</span></h6>
                                </Col>
                                <Col sm={6} className="info-item">
                                    <h6>Address: <span className="text-muted">Kayithavanayill Kadathoor K S Puram PO Karunagappally</span></h6>
                                </Col>
                                <Col sm={6} className="info-item">
                                    <h6>Freelance: <span className="text-muted">Available</span></h6>
                                </Col>
                            </Row>
                            {/* <div className="cta-buttons">
                                <a href="#hire" className="btn btn-primary me-3 animate__animated animate__fadeInUp">Hire Me</a>
                                <a href="#learn-more" className="btn btn-outline-primary animate__animated animate__fadeInUp animate__delay-1s">Learn More</a>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
