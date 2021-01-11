import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import ServiceApi from '../Service';
import { Col, Row } from 'react-bootstrap';

class DetailOurPeople extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <section className="container-fluid">
                <Row>
                    <Col md={12} xs={12} lg={12}>
                        <Row>
                            <Col className="partner">
                                <span style={{fontSize: "50px"}}>P</span>
                                <span>ARTNER</span>
                            </Col>
                        </Row>
                        <div style={{position: "relative", top: "8em", borderLeft: "500px solid #034fb3", height: "4px", marginLeft: "7.5em"}} />
                            <Row className="ourpeople-area" style={{width: "60em"}}>
                                <Col md={6} xs={6} lg={6}>
                                    <div>
                                        <img className="img-thumbnail-ourpeople" src="/assets/img/photo.jpg" alt />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="ourpeople-content" style={{fontFamily: "Khmer OS Bokor"}}>
                                        <p style={{fontSize: "50px", textAlign: "center", marginLeft: "-8em", lineHeight: "3"}}>តេង ប៊ុនថុន</p>
                                        <p style={{fontSize: "20px", textAlign: "center", marginLeft: "-21em"}}>ប្រធានក្រុមប្រឹក្សាភិបាល</p>
                                        <p style={{fontSize: "20px", textAlign: "center", marginLeft: "-19em"}}>លេខទូរស័ព្ទ ៖ 012 320 320</p>
                                        <p style={{fontSize: "20px", textAlign: "center", marginLeft: "-13.6em"}}>អ៊ីម៉ែល ៖ <a href="mailto:board@ccacambodia.org.kh">board@ccacambodia.org.kh</a></p>
                                    </div>
                                </Col>
                            </Row>
                    </Col>
                </Row>
            </section> 
            </div>
        );
    }
}

export default DetailOurPeople;