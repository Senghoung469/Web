import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import DetailOurPeople from '../../layouts/DetailOurPeople';

class Ourpeople extends React.Component {
    render(){
        return(
            <div style={{
                backgroundImage: "url('assets/img/backround.jpg')",
                backgroundColor: "#cccccc",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
                }}>
            <Header />
            <br/>
                <DetailOurPeople />
            <Footer />
            </div>
        );
    }
}

export default Ourpeople;