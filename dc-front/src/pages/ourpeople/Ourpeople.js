import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import DetailOurPeople from '../../layouts/DetailOurPeople';

class Ourpeople extends React.Component {
    render(){
        return(
            <>
            <Header />
            <br/>
            <DetailOurPeople />
            <Footer />
            </>
        );
    }
}

export default Ourpeople;