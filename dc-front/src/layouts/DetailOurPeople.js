import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import ServiceApi from '../Service';

class DetailOurPeople extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            // activePage: 1
        }
    }

    // handlePageChange(pageNumber) {
    //     this.setState({activePage: pageNumber});
    // }

    componentDidMount(){
        // Get Post All 
        axios.get(`${ServiceApi}/api/v1/post/pagination/${this.state.activePage}`).then( respone => {
            this.setState({ posts: respone.data.data });
        }).catch( error =>  console.log(error))

        // Get Companies All
        axios.get(`${ServiceApi}/api/v1/post/limit`).then( respone => {
            this.setState({ popularPost: respone.data.data });
        }).catch( error =>  console.log(error))
    }

    render(){
        return(
            <>
            {/*=================================== categories-area-start ================================*/}
            <section className="categories-area">
                <div className="container">
                <div className="row section-padding">
                    <div className="col-md-8 col-md-offset-1">
                        <div className="category-detail category-border-content section-padding">
                            <p style={{ fontSize: "20px", fontWeight: "bold", color: "gray", lineHeight: "2"}}>OUR PEOPLE</p>
                            <p style={{ fontSize: "15px", fontWeight: "bold", color: "gray", lineHeight: "3"}}>PARTNERS</p>
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="category-img-edit">
                                        <img className="img-thumbnail" src="/assets/img/photo.jpg" alt />
                                        {/* <div className="category-overlay"></div> */}
                                    </div>
                                </div>
                            <div className="col-md-8 fix col-sm-8">
                                <div className="category-text-edit">
                                    <p>តេង ប៊ុនថុន</p>
                                    <p>ប្រធានក្រុមប្រឹក្សាភិបាល</p>
                                    <p>លេខទូរស័ព្ទ 012 320 320</p>
                                    <p>អ៊ីម៉ែល <a href="mailto:board@ccacambodia.org.kh">board@ccacambodia.org.kh</a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section> 
            </>
        );
    }
}

export default DetailOurPeople;