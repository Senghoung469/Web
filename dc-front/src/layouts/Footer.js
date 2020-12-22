import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import ServiceApi from '../Service';

class Footer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            recentPost: [],
            companies: []
        }
    }

    componentDidMount(){
        // Get Popular Post
        axios.get(`${ServiceApi}/api/v1/post/limit`).then( respone => {
            this.setState({ recentPost: respone.data.data });
        }).catch( error =>  console.log(error))

        // Get Companies All
        axios.get(`${ServiceApi}/api/v1/company/1`).then( respone => {
            this.setState({ companies: respone.data.data});
        }).catch( error =>  console.log(error))
    }

    render(){
        return(
            <>
            {/*============================== footer-top-area-start ================================*/}  
            <section className="footer-top-area">
                <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-2">
                    {
                        this.state.companies.map( item => {
                            return <div className="footer-logo">
                                    <a href={`${ServiceApi}/uploads/${item.logo}`}><img src={`${ServiceApi}/uploads/${item.logo}`} alt /></a>
                            </div>
                        })
                    }
                    {/* <div className="footer-content">
                        <p>Share: </p>
                        <div className="footer-social-icon">
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-pinterest" /></a>
                        <a href><i className="fa fa-instagram" /></a>
                        </div>
                    </div> */}
                    </div>
                    <div className="col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-0">
                    <div className="subscription-input">
                        <h4 className="footer-title">Company Information</h4>
                        <div className="footer-top-area">
                           <ul>
                             <li><i class="fa fa-hospital-o" aria-hidden="true"></i> Company Name: { this.state.companies.map(item => item.name)}</li>
                             <li><i class="fa fa-phone-square" aria-hidden="true"></i> Phone: { this.state.companies.map(item => item.phone)}</li>
                             <li><i class="fa fa-envelope-o" aria-hidden="true"></i> EMAIL: <a href={`mailto:${this.state.companies.map(item => item.email)}`}>{ this.state.companies.map(item => item.email)}</a></li>
                             <li><i class="fa fa-map-marker" aria-hidden="true"></i> Address: { this.state.companies.map(item => item.address)}</li>
                           </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-0">
                    <div className="recent-post-content">
                        <h4 className="footer-title">recent post</h4>
                        {
                            this.state.recentPost.map( item => {
                                return <div className="recent-post-single">
                                    <div className="recent-post-img">
                                        <a href={`${ServiceApi}/uploads/${item.thumbnail}`}><img className="img-fluid" width="50px" height="55px" src={`${ServiceApi}/uploads/${item.thumbnail}`} alt /></a>
                                    </div>
                                    <div className="recent-post-text">
                                    <p className="art"><i class="fa fa-calendar" aria-hidden="true"></i> Date: <Moment format="YYYY/MMM/DD hh:mm:ss A">{ item.createdAt }</Moment></p>
                                        <br/>
                                        <a href={`/index/detail/${item.id}`}><h6><p>{item.title}</p></h6></a>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                    </div>
                </div>
                </div>
            </section> 
            {/*============================== footer-top-area-start ================================*/}    
            <section className="footer-bottom-area">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="footer-bottom-text text-center">
                        <p>BCosmetics of Consultant Association, All rights reserved.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </>
        );
    }
}

export default Footer;