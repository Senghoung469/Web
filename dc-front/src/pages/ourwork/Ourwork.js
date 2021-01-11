import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import ServiceApi from '../../Service';
import { Col, Row } from 'react-bootstrap';

class Ourwork extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{
                backgroundImage: "url('assets/img/backround.jpg')",
                backgroundColor: "#cccccc",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
                }}>
            <Header />
            <section className="container-fluid">
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col className="partner">
                                <span style={{fontSize: "50px"}}>P</span>
                                <span>ARTNER</span>
                            </Col>
                        </Row>
                        <div style={{position: "relative", top: "8em", borderLeft: "500px solid #034fb3", height: "4px", marginLeft: "7.5em"}} />
                        <div className="ourwork-one">
                            <p style={{fontSize: "20px", lineHeight: "3"}}>អត្ថប្រយោជន៏កាចូលជាសមាជិក</p>
                            
                            <p>-  ទទួលបានការប្រឹក្សាយោបល់អំពីកាដឹកនាំក្រុមហ៊ុន</p>
                            <p>-  ទទួលបានការរៀបច្បាប់ និង ប្រឹក្សាអំពីហានិភ័យក្រុមហ៊ុន</p>
                            <p>-  ពេលសមាជិកមានបញ្ហា សមាគម បញ្ជូនមេធាវីរបស់សមាគមទៅជួយការពារសិទ្ធិ</p>
                            <p>-  ប្រជុំប្រចាំខែដើម្បីធ្វើបច្ចុប្បន្នភាព និង ចែករំលែកបទពិសោធន៏</p>
                            <p>-  ការពារផលប្រយោជន៏ស្របច្បាប់របស់សមាជិក ពីការប្រកួតប្រជែងមិនស្មើភាពគ្នា និង ការលួចវាយប្រហាពីក្រោយខ្នង</p>
                            <p>-  ទទួលបានលិខិតបញ្ជាក់ពីសមាគមលើស្តង់ដាររបស់ក្រុមហ៊ុន</p>
                            <p>-  ទទួលបានលិខិតធានាលើទំនុកចិត្តពីសមាគមទៅដៃគូ និង រោងចក្រ</p>
                            <p>-  ផ្គូរផ្គងកិច្ចសហប្រតិបត្តិការបរទេស រវាងសមាជិក និង រោងចក្រ</p>
                            <p>-  ផ្សារផ្ជាប់ពាណិជ្ជកម្ម និង ពិពណ៌អន្តរជាតិ</p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <img className="home-banner" style={{marginTop: "32em"}} src="assets/img/ourworkone.png"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <img className="home-banner" style={{marginTop: "25em"}} src="assets/img/002.png"/>
                    </Col>
                    <Col md={6}>
                        <div className="ourwork-one" style={{position: "absolute", marginLeft: "-30px", top: "18em"}}>
                            <p style={{fontSize: "20px", lineHeight: "3"}}>ប្រការ២៖ បេសកម្ម</p>

                            <p>- គាំទ្រការខ្សែរសង្វាក់ផលិតផលិតផលគ្រឿងសម្អាងក្នុងស្រុក ដែលមានការទទួលស្គាល់ពូមន្ទីពិសោធន៍ជាតិ។
                            លើការផលិតតាមបច្ចេកទេសឲ្យបានត្រឹមត្រូវតាមស្ដាងដាក្រសួងពាក់ព័ន្ធ។</p>
                            <p>- កស្ទួននូវផលិតផលក្នុងស្រុកចំពោះម្ចាស់កម្មសិទ្ធករ ដែលបានចុះបញ្ជីការទទួលស្គាល់គ្រប់ស្ថាប័នពាក់ព័ន្ធ
                            ក្នុងការស្វែងរកទីផ្សារ ជៀសវាងការផលិត ឬវេចខ្ចប់ផលិតផលគ្រឿងសម្អាងក្លែងក្លាយ។</p>
                            <p>- ផ្ដល់ការប្រឹក្សាផ្លូវច្បាប់ ដោះស្រាយវិវាទដែលជាហានិភ័យរវាងម្ចាស់អាជីវកម្មគ្រឿងសម្អាងស្របច្បាប់នៅកម្ពុជា។</p>
                        </div>
                    </Col>
                </Row>
            </section>
            <Footer />
            <br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default Ourwork;