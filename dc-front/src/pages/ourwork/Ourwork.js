import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import ServiceApi from '../../Service';

class Ourwork extends React.Component {

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
                                <div class="col-md-9 col-sm-8">
                                    <div>
                                        {/* <h4><a href="about-me.html">ABOUT US</a></h4> */}
                                        {/* <p><div dangerouslySetInnerHTML={{__html: this.state.companies.map( item => item.description) }}></div></p> */}
                                        <p style={{fontSize: "18px", marginBottom: "10px", fontWeight: "bold", lineHeight: "4"}}>អត្ថប្រយោជន៏កាចូលជាសមាជិក</p>

                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-  ទទួលបានការប្រឹក្សាយោបល់អំពីកាដឹកនាំក្រុមហ៊ុន</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-  ទទួលបានការរៀបច្បាប់ និង ប្រឹក្សាអំពីហានិភ័យក្រុមហ៊ុន</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-  ពេលសមាជិកមានបញ្ហា សមាគម បញ្ជូនមេធាវីរបស់សមាគមទៅជួយការពារសិទ្ធិ</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-  ប្រជុំប្រចាំខែដើម្បីធ្វើបច្ចុប្បន្នភាព និង ចែករំលែកបទពិសោធន៏</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-  ការពារផលប្រយោជន៏ស្របច្បាប់របស់សមាជិក ពីការប្រកួតប្រជែងមិនស្មើភាពគ្នា និង ការលួចវាយប្រហាពីក្រោយខ្នង</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-  ទទួលបានលិខិតបញ្ជាក់ពីសមាគមលើស្តង់ដាររបស់ក្រុមហ៊ុន</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-  ទទួលបានលិខិតធានាលើទំនុកចិត្តពីសមាគមទៅដៃគូ និង រោងចក្រ</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-  ផ្គូរផ្គងកិច្ចសហប្រតិបត្តិការបរទេស រវាងសមាជិក និង រោងចក្រ</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-  ផ្សារផ្ជាប់ពាណិជ្ជកម្ម និង ពិពណ៌អន្តរជាតិ</p>

                                        <p style={{fontSize: "18px", marginBottom: "10px", fontWeight: "bold", lineHeight: "4"}}>ប្រការ២៖ បេសកម្ម</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-គាំទ្រការខ្សែរសង្វាក់ផលិតផលិតផលគ្រឿងសម្អាងក្នុងស្រុក ដែលមានការទទួលស្គាល់ពូមន្ទីពិសោធន៍ជាតិ។ លើការផលិតតាមបច្ចេកទេសឲ្យបានត្រឹមត្រូវតាមស្ដាងដាក្រសួងពាក់ព័ន្ធ។</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-លើកស្ទួននូវផលិតផលក្នុងស្រុកចំពោះម្ចាស់កម្មសិទ្ធករ ដែលបានចុះបញ្ជីការទទួលស្គាល់គ្រប់ស្ថាប័នពាក់ព័ន្ធ ក្នុងការស្វែងរកទីផ្សារ ជៀសវាងការផលិត ឬវេចខ្ចប់ផលិតផលគ្រឿងសម្អាងក្លែងក្លាយ។</p>
                                        <p style={{fontSize: "15px", marginBottom: "10px"}}>-ផ្ដល់ការប្រឹក្សាផ្លូវច្បាប់ ដោះស្រាយវិវាទដែលជាហានិភ័យរវាងម្ចាស់អាជីវកម្មគ្រឿងសម្អាងស្របច្បាប់នៅកម្ពុជា។</p>
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

export default Ourwork;