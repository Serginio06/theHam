import React, {Component} from 'react';
import {connect} from 'react-redux';
import {asyncGetInitNews} from './actions/async';
import logoImg from './../images/Logo.png';
import backBtnImg from './../icons/arrow_white_left_256.png';
import {Link} from "react-router"

class NewsDetails extends Component {
    constructor(props) {
        super (props);
        this.state = {
            logoImg: {backgroundImage: `url(${logoImg})`},
            backBtnImg: {backgroundImage: `url(${backBtnImg})`}
        }
    }

    componentWillMount() {
        this.props.onGetInitNews ();
    }

    render() {


        let generateNewsCard = '';
        if (this.props.newsStore.length > 1) {
            generateNewsCard = <div className="news-details--messags-content">
                <div className="news-details--msg-title" aria-label="Right Align">
                    Date: <span
                    className="news-details--date">{this.props.newsStore[this.props.id].date}</span></div>
                <div className="news-details--msg-msg">{this.props.newsStore[this.props.id].text}</div>
            </div>;
        }

        return (
            <div>
                <div className="news-details_header__title">
                    <Link to="/" className="news-details_header__logo">
                        <div className="header__logo" style={this.state.logoImg}></div>
                    </Link>
                    <Link to="/" className="news-details_header__backBtn">
                        <div className="news-details_header__logo" style={this.state.backBtnImg}></div>
                    </Link>
                </div>
                <div className="news-details-form" id="member--cards">
                    {generateNewsCard}
                </div>
            </div>
        )
    }
}


export default connect (
    store => (
    {
        newsStore: store.newsStore
    }
    ),
    dispatch => (
    {
        onGetInitNews: ()=> {
            dispatch (asyncGetInitNews ());

        }
    }
    )
) (NewsDetails);