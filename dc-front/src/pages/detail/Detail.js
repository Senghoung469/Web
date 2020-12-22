import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import axios from 'axios';
import Moment from 'react-moment';
import ServiceApi from '../../Service';

class Detail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            postDetail: [],
            popularPost: []
        }
    }

    componentDidMount(){
        // Get Post All 
        axios.get(`${ServiceApi}/api/v1/post/${this.state.id}`).then( respone => {
            this.setState({ postDetail: respone.data.data });
        }).catch( error =>  console.log(error))

        // Get Popular Post
        axios.get(`${ServiceApi}/api/v1/post/limit`).then( respone => {
            this.setState({ popularPost: respone.data.data });
        }).catch( error =>  console.log(error))
    }

    render(){
        return(
            <>
            <Header />
            {/*============================== categories-area-start ================================*/}
            <section className="categories-area">
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    {
                        this.state.postDetail.map(item => {
                            return <div className="category-border-content">
                            <div className="category-detail category">
                            <div className="category-img">
                            <img className="img-responsive" width="338px" height="245px" src={`${ServiceApi}/uploads/${item.thumbnail}`} alt />
                                <div className="category-overlay">
                                </div>
                            </div>
                            <div className="category-text read-more clearfix">
                                <h4><a href={`/index/detail/${item.id}`}>{ item.title }</a></h4>
                                <span style={ { color: "orange" } }>ID: {item.barcode}</span>&nbsp;&nbsp;&nbsp;
                                <span className="art"><i class="fa fa-calendar" aria-hidden="true"></i> Date: <Moment format="YYYY/MM/DD hh:mm:ss">{ item.createdAt }</Moment></span>
                                <hr/>
                                <p>{item.description}</p>
                                {/* <div className="quote"><p><i className="fa fa-quote-left" />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem<i className="fa fa-quote-right" /></p></div> */}
                                <p><div dangerouslySetInnerHTML={{__html: item.body }}></div></p>
                                <div className="read-more-more clearfix">
                                <div className="share-comment-section floatright">
                                    <div className="share single-page">
                                    <span>share:</span>&nbsp;
                                    <a href><i className="fa fa-facebook" /></a>
                                    <a href><i className="fa fa-twitter" /></a>
                                    <a href><i className="fa fa-pinterest" /></a>
                                    <a href><i className="fa fa-instagram" /></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        })
                    }
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <div className="row">
                        <div className="popular-post-border-content">
                        <div className="popular-post-content">
                            <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="popular-post-title red">
                                <h4>New posts</h4>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            {
                                this.state.popularPost.map(item => {
                                    return <div className="col-md-12 col-sm-12">
                                            <div className="category-detail popular-post-single top">
                                                <div className="recent-post-img">
                                                    <a href={`${ServiceApi}/uploads/${item.thumbnail}`}>
                                                        <img width="89px" height="89px" src={`${ServiceApi}/uploads/${item.thumbnail}`} alt />
                                                    </a>
                                                </div>
                                                <div className="popular-post-single-text">
                                                    <span className="art"><i class="fa fa-calendar" aria-hidden="true"></i> Date: <Moment format="YYYY/MM/DD hh:mm:ss">{ item.createdAt }</Moment></span>
                                                    <br/><br/>
                                                    <a href={`/index/detail/${item.id}`}><h5><p>{item.title}</p></h5></a>
                                                </div>
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
            </section>
            <Footer />
            </>
        );
    }
}

export default Detail;