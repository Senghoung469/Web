import React from 'react';
import axios from 'axios';
import ServiceApi from '../Service';
import ScrollUpButton from "react-scroll-up-button"; //Add this line
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Col,
    Row,
    Container,
    ContainerFluid
} from 'react-bootstrap';

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
                <div>
                    <div className="header-top">
                        <Row>
                            <Col xs={12} md={12}>
                                <Navbar bg="light" expand="lg" className="fixed-top">
                                    <Navbar.Brand href="#home"><img className="logo-top" src="assets/img/logo/logo.jpg" /></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="mr-auto"></Nav>
                                        <Nav>
                                            <Nav.Link href="home">Home</Nav.Link>
                                            <Nav.Link href="ourpeople">Our People</Nav.Link>
                                            <Nav.Link href="ourwork">Our Works</Nav.Link>
                                            <Nav.Link href="product">Products</Nav.Link>
                                            <Nav.Link href="contact">Contact Us</Nav.Link>
                                            <Nav.Link href="about">About Us</Nav.Link>
                                            <Nav.Link href="publication">Publication</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;