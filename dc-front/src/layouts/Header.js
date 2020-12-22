import React from 'react';
import axios from 'axios';
import ServiceApi from '../Service';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

class Header extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            companies: []
        }
    }

    componentDidMount(){
        // Get Companies All
        axios.get(`${ServiceApi}/api/v1/company/1`).then( respone => {
            this.setState({ companies: respone.data.data });
        }).catch( error =>  console.log(error))
    }

    render(){
        return(
        <>
            <div id="preloader"></div>
            {/*============================== top-area-start================================*/}
            <section className="top-area">
                <div className="container">
                <div className="row">
                    <div className="top-area-content">
                    {
                        this.state.companies.map(item => {
                            return <div className="col-md-6 col-sm-6 col-xs-5">
                                <div className="logo text-left">
                                    <a><img src={`${ServiceApi}/uploads/${item.logo}`} alt /></a>
                                </div>
                            </div>
                        })
                    }
                    {/* <div className="col-md-6 col-sm-6 col-xs-7">
                        <div className="social-icon text-right">
                        <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a>
                        <a href="https://twitter.com/twitter" target="_blank" ><i className="fa fa-twitter" /></a>
                        <a href="https://www.pinterest.com/"><i className="fa fa-pinterest" target="_blank" /></a>
                        <a href="https://www.instagram.com/"><i className="fa fa-instagram" target="_blank" /></a>
                        </div>
                    </div> */}
                    </div>
                </div>
                </div>
            </section>
            {/*============================== menu-area-start ================================*/}
            <section className="menu-area">
                <div className="container">
                <div className="row">
                    <div className="menu-area-content clearfix">
                    <div className="col-md-12 col-sm-9 col-xs-12">
                        <div className="main-menu text-left">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">                                       
                            <li><a href="/index/home">HOME</a></li>
                            <li><a href="/index/ourpeople">OUR PEOPLE</a></li>
                            <li><a href="/index/ourwork">OUR WORK</a></li>
                            <li><a href="/index/product">PRODUCT</a></li>
                            <li><a href="/index/contact">CONTACT US</a></li>
                            <li><a href="/index/about">ABOUT US</a></li>
                            <li><a href="/index/publication">PUBLICATION</a></li>
                            </ul>
                        </div>    
                        </div>
                    </div>
                    {/* <div className="col-md-5 col-sm-3 col-xs-12">
                        <div className="search-btn text-right">
                        <form>
                            <input type="search" placeholder="Type to search here" />
                            <button type="submit"><i className="fa fa-search" /></button>
                        </form>
                        </div>
                    </div> */}
                    </div>
                </div>
                </div>
            </section>
            <ScrollUpButton style={{width: 50}} ToggledStyle={{right: 20}}/>
            </>
        );
    }
}

export default Header;