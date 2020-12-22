import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import ServiceApi from '../Service';

class ProductPost extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            popularPost: []
        }
    }

    componentDidMount(){
        // Get Post All
        axios.get(`${ServiceApi}/api/v1/post/pagination/${this.state.activePage}`).then( respone => {
            this.setState({ posts: respone.data.data });
            this.setState({totalItemsCount: respone.data.totalItems})
        }).catch( error =>  console.log(error))

        // Get Companies All
        axios.get(`${ServiceApi}/api/v1/post/limit`).then( respone => {
            this.setState({ popularPost: respone.data.data });
        }).catch( error =>  console.log(error))
    }

    render(){
        return(
            <>
            {/*========================== categories-area-start ==========================*/}
            <section className="categories-area">
                <div className="container">
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-8">
                        {
                            this.state.posts.map( item => {
                                return <div className="category-detail category-border-content section-padding">
                                    <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                    <div className="category-img">
                                        <img className="img-fluid" width="338px" height="245px" src={`${ServiceApi}/uploads/${item.thumbnail}`} alt />
                                        <div className="category-overlay"></div>
                                    </div>
                                    </div>
                                    <div className="col-md-6 fix col-sm-6">
                                        <div className="video-content-text">
                                        <h5><a href={`/index/detail/${item.id}`}>{item.title}</a></h5>
                                        <br/>
                                        <span class="art">{item.description}</span>
                                        <p className="art"><i class="fa fa-calendar" aria-hidden="true"></i> Date: <Moment format="YYYY/MMM/DD hh:mm:ss A">{ item.createdAt }</Moment></p>
                                        <div className="category-link"><a href={`/index/detail/${item.id}`}>view more</a></div>
                                        {/* <div className="share-comment-section">
                                            <div className="share">
                                            <span>share: </span>
                                            <a href={`https://facebook.com/sharer/sharer.php?u=${window.origin}/index/detail/${item.id}`} target="_blank" ><i className="fa fa-facebook" /></a>
                                            <a href><i className="fa fa-twitter" /></a>
                                            <a href><i className="fa fa-pinterest" /></a>
                                            <a href><i className="fa fa-instagram" /></a>
                                            </div>
                                        </div> */}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="col-md-4">
                    <div className="sidebar-widget">
                        <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="follow-widget">
                            {/* <div className="follow-me-section">
                                <div className="follow-me-title"><h4>follow me on</h4></div>
                                <div className="follow-me-social-link">
                                <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a>
                                <a href="https://twitter.com/twitter" target="_blank" ><i className="fa fa-twitter" /></a>
                                <a href="https://www.pinterest.com/"><i className="fa fa-pinterest" target="_blank" /></a>
                                <a href="https://www.instagram.com/"><i className="fa fa-instagram" target="_blank" /></a>
                                </div>
                            </div> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="sidebar-widget">
                        <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="popular-post-border-content">
                            <div className="popular-post-content">
                                <div className="popular-post-title">
                                <h4>New posts</h4>
                                </div>
                                {
                                    this.state.popularPost.map( item => {
                                        return <div className="category-detail popular-post-single top">
                                                 <div className="popular-post-single-img">
                                                    <a href={`${ServiceApi}/uploads/${item.thumbnail}`}>
                                                      <img className="img-fluid" width="89px" height="89px" src={`${ServiceApi}/uploads/${item.thumbnail}`} alt />
                                                    </a>
                                                </div>
                                                <div className="popular-post-single-text">
                                                    <i class="fa fa-calendar" aria-hidden="true"></i> Date: <Moment format="YYYY/MMM/DD hh:mm:ss A">{ item.createdAt }</Moment>
                                                    <br/><br/>
                                                    <a href={`/index/detail/${item.id}`}><h6>{item.title}</h6></a>
                                                </div>
                                        </div>
                                    })
                                }
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*========================== asked-section-area-start ==========================*/}
            <section className="asked-section-area">
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <div>

                    </div>
                    </div>
                </div>
                </div>
            </section>
            </>
        )
    }
}

export default ProductPost;