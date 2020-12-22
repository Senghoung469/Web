import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ProductPost from '../../layouts/ProductPost';

class Home extends React.Component {
    render(){
        return(
            <>
            <Header />
            <ProductPost />
            <Footer />
            </>
        );
    }
}

export default Home;