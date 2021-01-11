import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import ServiceApi from '../../Service';
import { Col, Row } from 'react-bootstrap';

class Contact extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
            <Header />
            <section className="container-fluid">
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col className="partner">
                                <span style={{fontSize: "50px"}}>C</span>
                                <span>ONTACT US</span>
                            </Col>
                        </Row>
                        <div style={{position: "relative", top: "8em", borderLeft: "500px solid #034fb3", height: "4px", marginLeft: "7.5em"}} />
                        <Row>
                            <Col md={6}>
                                <div className="ourwork-one">
                                        <p style={{fontSize: "20px"}}>អាសយដ្ឋាន ៖ </p>
                                        <p style={{fontSize: "20px"}}>ផ្ទះលេខ៤៥អ៊ី៨E2 ផ្លូវ វត្ថអង្គតាមិញ សង្កាត់កាកាប១ ខណ្ឌពោធិ៍សែនជ័យ រាជធានីភ្នំពេញ</p>

                                        <p style={{fontSize: "20px"}}>ទូរសព្ទ័លេខ ៖ 012589111</p>
                                        
                                        <p style={{fontSize: "20px"}}>អ៊ីមែល​​​ ៖ </p>

                                        <p><a href="mailto:nfo@ccacambodia.org.kh">nfo@ccacambodia.org.kh</a></p>
                                        <p><a href="mailto:director@ccacambodia.org.kh">director@ccacambodia.org.kh</a></p>
                                        <p><a href="mailto:board@ccacambodia.org.kh">board@ccacambodia.org.kh</a></p>
                                        <p><a href="mailto:ccacambodia2019@gmail.com">ccacambodia2019@gmail.com</a></p>
                                </div>
                            </Col>
                            <Col md={6}>
                                 <img className="home-banner banner-contact" src="assets/img/22-04-201927_1.jpg"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={6}>
                        <img className="home-banner" src="assets/img/001.png"/>
                    </Col>
                </Row>
            </section>
            <Footer />
            </div>
        )
    }
}

export default Contact;