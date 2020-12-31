import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

class Home extends React.Component {
    render(){
        return (
            <>
            <Header />
            {/*============================== categories-area-start ================================*/}
            <section className="categories-area">
                <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                    <div className="category-border-content">
                            <div className="category-detail">
                                <div className="category-img">
                                    <img class="img-thumbnail" src="/assets/img/post/1.jpg" alt />
                                    {/* <div className="category-overlay">
                                    </div> */}
                                </div>
                            </div>
                            <div className="category-detail">
                                <div className="category-img">
                                    <img class="img-thumbnail" src="/assets/img/post/2.jpg" alt />
                                    {/* <div className="category-overlay">
                                    </div> */}
                                </div>
                            </div>
                            <div className="category-detail">
                                <div className="category-img">
                                    <img class="img-thumbnail" src="/assets/img/post/3.jpg" alt />
                                    {/* <div className="category-overlay">
                                    </div> */}
                                </div>
                            </div>
                            <div className="category-detail">
                                <div className="category-img">
                                    <img class="img-thumbnail" src="/assets/img/post/4.jpg" alt />
                                    {/* <div className="category-overlay">
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-8">
                        <div className="row">
                            <div className="col-md-12">
                                <span style={{fontSize: "25px", fontWeight: "bold", color: "gray"}}>WELCOME TO </span>
                                <span style={{fontSize: "25px", fontWeight: "bold", color: "red"}}> CCA</span>
                                <span style={{fontSize: "25px", fontWeight: "bold", color: "gray"}}> Cosmetics Of </span>
                                <span style={{fontSize: "25px", fontWeight: "bold", color: "gray"}}> Consultant Association</span>

                                {/* <p style={{fontSize: "25px", fontWeight: "bold", marginBottom: "10px", position: "relative", left: "235px", lineHeight: "2"}}>ព្រះរាជាណាចក្រកម្ពុជា</p>
                                <p style={{fontSize: "25px", fontWeight: "bold", marginBottom: "10px", position: "relative", left: "212px", lineHeight: "2"}}>ជាតិ សាសនា​ ព្រះមហាក្សត្រ</p>
                                <p style={{position: "relative", left: "320px", fontSize: "18px", lineHeight: "2"}}>លក្ខន្តិកៈ</p>
                                <p style={{position: "relative", left: "200px", fontSize: "18px", lineHeight: "2"}}>Cosmetics of Consultant Association</p>
                                <p style={{position: "relative", left: "320px", fontSize: "18px", lineHeight: "2"}}>C.C.A</p>
                                <p style={{position: "relative", left: "320px", fontSize: "18px", lineHeight: "2"}}>ជំពូកទី១</p>
                                <p style={{position: "relative", left: "252px", fontSize: "18px", lineHeight: "2"}}>អំពីគោលបំណង និងបេសកម្ម</p> */}

                                <p style={{fontSize: "25px", fontWeight: "bold", marginBottom: "10px", position: "relative", lineHeight: "2"}}>ប្រការ១៖ គោលបំណង</p>

                                <p style={{position: "relative", left: "90px", fontSize: "15px", marginBottom: "10px"}}>សមាគមអ្នកប្រឹក្សាយោបលគ្រឿងសម្អាងមានគោលបំពណងដូចខាងក្រោម៖</p>
                                <p style={{position: "relative", left: "90px", fontSize: "15px", marginBottom: "10px"}}>-ចូលរួមសហការជាមួយអជ្ញាធរ  ស្ថាប័នពាក់ព័ន្ធ លើកកម្ពស់ និងទប់ស្កាត់គ្រឿងសម្អាងក្លែងក្លាយដែលកំពុងបំផ្លាញសុខភាពអ្នកប្រើប្រាស។</p>
                                <p style={{position: "relative", left: "90px", fontSize: "15px", marginBottom: "10px"}}>-គាំទ្រដល់ផលិតផល ដែលនាំចូលដោយមានការចុះបញ្ជីត្រឹមត្រូវ និងទទួលស្គាល់ដោយមន្ទីពាក់ព័ន្ធរបស់កម្ពុជា។</p>
                                <p style={{position: "relative", left: "90px", fontSize: "15px", marginBottom: "10px"}}>-រកទីផ្សា កន្លែងតាំងពិព័រណ៌ និងបង្កើតទីផ្សារ សម្រាប់ដាក់តាំងលក់ផលិតផលគ្រឿងសម្អាងក្នុងស្រុក និងក្រៅស្រុក។</p>
                                <p style={{position: "relative", left: "90px", fontSize: "15px", marginBottom: "10px"}}>-ជួយគាំពារ និងលើកកម្ពស់ដល់អាជីវករដែលជាម្ចាស់ផលិតផលគ្រឿងសម្អាងក្មុងស្រុកឲ្យមានការទទួលស្គាល់ជាផ្លូវការពីក្រស្ថាប័នពាក់ព័ន្ធ ដែលជាសក្ដានុពល ឆ្ពោះទៅរកការប្រកួតប្រជែងផលិតផលិតផលគ្រឿងសម្អាងកម្ពុជានៅលើទីផ្សា។</p>
                                <p style={{position: "relative", left: "90px", fontSize: "15px", marginBottom: "10px"}}>-ជួយគាំពារ និងលើកកម្ពស់ដល់អាជីវករដែលជាម្ចាស់ផលិតផលគ្រឿងសម្អាងក្មុងស្រុកឲ្យមានការទទួលស្គាល់ជាផ្លូវការពីក្រស្ថាប័នពាក់ព័ន្ធ ដែលជាសក្ដានុពល ឆ្ពោះទៅរកការប្រកួតប្រជែងផលិតផលិតផលគ្រឿងសម្អាងកម្ពុជានៅលើទីផ្សា។</p>

                                <p style={{fontSize: "25px", fontWeight: "bold", marginBottom: "10px", position: "relative", lineHeight: "2"}}>ប្រការ២៖ បេសកម្ម</p>

                                <p style={{position: "relative", left: "90px", fontSize: "15px", marginBottom: "10px"}}>-គាំទ្រការខ្សែរសង្វាក់ផលិតផលិតផលគ្រឿងសម្អាងក្នុងស្រុក ដែលមានការទទួលស្គាល់ពូមន្ទីពិសោធន៍ជាតិ។ លើការផលិតតាមបច្ចេកទេសឲ្យបានត្រឹមត្រូវតាមស្ដាងដាក្រសួងពាក់ព័ន្ធ។</p>
                                <p style={{position: "relative", left: "90px", fontSize: "15px", marginBottom: "10px"}}>-លើកស្ទួននូវផលិតផលក្នុងស្រុកចំពោះម្ចាស់កម្មសិទ្ធករ ដែលបានចុះបញ្ជីការទទួលស្គាល់គ្រប់ស្ថាប័នពាក់ព័ន្ធ ក្នុងការស្វែងរកទីផ្សារ ជៀសវាងការផលិត ឬវេចខ្ចប់ផលិតផលគ្រឿងសម្អាងក្លែងក្លាយ។</p>
                                <p style={{position: "relative", left: "90px", fontSize: "15px", marginBottom: "10px"}}>-ផ្ដល់​ការប្រឹក្សាផ្លូវច្បាប់ ដោះស្រាយវិវាទដែលជាហានិភ័យរវាងម្ចាស់អាជីវកម្មគ្រឿងសម្អាងស្របច្បាប់នៅកម្ពុជា។</p>                             

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer />
            </>
        )
    }
}

export default Home;