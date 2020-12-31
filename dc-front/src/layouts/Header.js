import React from 'react';
import axios from 'axios';
import ServiceApi from '../Service';
import ScrollUpButton from "react-scroll-up-button"; //Add this line
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            companies: []
        }
    }

    // componentDidMount(){
    //     // Get Companies All
    //     axios.get(`${ServiceApi}/api/v1/company/1`).then( respone => {
    //         this.setState({ companies: respone.data.data });
    //     }).catch( error =>  console.log(error))
    // }

    render(){
        return(
            <>
                <div className="header-top">
                    <div className="row">
                         <div className="col-md-12">
                             <div className="row">
                                 <div className="col-md-6">
                                    <div className="logo">
                                        <img src="assets/img/logo/logo.jpg" />
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="logo">
                                        <ul className="menu-top">
                                            <li className="active">
                                                <a href="#">Home</a>
                                            </li>
                                            <li>
                                                <a href="#">Our People</a>
                                            </li>
                                            <li>
                                                <a href="#">Our Work</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Publication</a>
                                            </li>
                                        </ul>
                                    </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;