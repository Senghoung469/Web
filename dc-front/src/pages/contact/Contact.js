import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import ServiceApi from '../../Service';

class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            companies: []
        }
    }

    componentDidMount(){
        // Get Companies All
        axios.get(`${ServiceApi}/api/v1/company/1`).then( respone => {
            this.setState({ companies: respone.data.data});
        }).catch( error =>  console.log(error))
    }

    render(){
        return(
            <>
            <Header />
            <br/>
            <section class="about-area">
                <div class="container">
                    <div class="row">
                        <div class="about-information-area-border">
                            <div class="about-information-area-content">
                                <div class="col-md-3 col-sm-4 col-xs-12">
                                    <div class="about-self-content">
                                        <div class="personal-information">
                                            <div class="about-indetails">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-9 col-sm-8">
                                    <div class="about-personal-information-text-content">
                                        {/* <h4><a href="about-me.html">FOR MORE INFORMATION PLEASE CONTACT US</a></h4> */}
                                            <ul>
                                                <li style={{fontSize: "18px", marginBottom: "10px", fontWeight: "bold"}}>អាសយដ្ឋាន ៖</li>
                                                <li style={{fontSize: "18px", marginBottom: "10px"}}>ផ្ទះលេខ៤៥អ៊ី៨E2 ផ្លូវ វត្ថអង្គតាមិញ សង្កាត់កាកាប១ ខណ្ឌពោធិ៍សែនជ័យ រាជធានីភ្នំពេញ</li>
                                                <li style={{fontSize: "18px", marginBottom: "10px", fontWeight: "bold"}}>ទូរសព្ទ័លេខ ៖ </li>
                                                <li style={{fontSize: "18px", marginBottom: "10px"}}>012589111</li>
                                                <li style={{fontSize: "18px", marginBottom: "10px", fontWeight: "bold"}}>អ៊ីមែល​​​ ៖ </li>
                                                <li><a href="mailto:info@ccacambodia.org.kh">info@ccacambodia.org.kh</a></li>
                                                <li><a href="mailto:director@ccacambodia.org.kh">director@ccacambodia.org.kh</a></li>
                                                <li><a href="mailto:board@ccacambodia.org.kh"></a></li>
                                                <li><a href="mailto:ccacambodia2019@gmail.com">ccacambodia2019@gmail.com</a></li>
                                            </ul>

                                            <img width="432.25px" height="160px" src="/assets/img/logo/side.jpg"/>

                                        <div className="about-indetails">
                                            {/* <ul>
                                                <li><h4><i class="fa fa-hospital-o" aria-hidden="true"></i> COMPANY NAME: { this.state.companies.map(item => item.name)}</h4></li><br/>
                                                <li><h4><i class="fa fa-phone-square" aria-hidden="true"></i> PHONE: { this.state.companies.map(item => item.phone)}</h4></li><br/>
                                                <li><h4><i class="fa fa-envelope-o" aria-hidden="true"></i> EMAIL: <a href={`mailto:${this.state.companies.map(item => item.email)}`}>{ this.state.companies.map(item => item.email)}</a></h4></li><br/>
                                                <li><h4><i class="fa fa-map-marker" aria-hidden="true"></i> ADDRESS: { this.state.companies.map(item => item.address)}</h4></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            </>
        );
    }
}

export default Contact;