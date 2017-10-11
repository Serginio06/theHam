import React, {Component} from 'react';
// import {Link} from 'react-router';
import NewsCard from './NewsCard.jsx';
import {connect} from 'react-redux';
// import {asyncGetInitNews, asyncMoreNews} from './actions/async'
import {asyncGetInitNews} from './actions/async'
import basePath from './../config/config';

class News extends Component {

    moreNewsClick() {

        if (this.moreNews <= 25) {
            this.props.onMoreNews (this.moreNews);
            this.moreNews = this.moreNews + 8;
        }

    }

    componentWillMount() {
        this.props.onGetInitNews ();
        this.moreNews = 15;
    }

    render() {

        // console.log('this.props.newsStore= ', this.props.newsStore);

        let generateNewsCard = '';
        if (this.props.newsStore) {
            generateNewsCard = <NewsCard news={this.props.newsStore}/>;
        }

        return (
            <div className="news" id="news">
                <h2 className="black-text">Breaking news
                    <img src={basePath+"images/stripes.png"} alt="" className="strips--img"/>
                </h2>

                {generateNewsCard}
                <div className="news__moreNewsBtn_wrapper">
                    <button className="green-btn" onClick={this.moreNewsClick.bind (this)}><span
                        className="glyphicon glyphicon-plus" aria-hidden="true"></span> Load More
                    </button>
                </div>
            </div>
        )
    }
}

// export default News;
export default connect (
    store => (
    {
        // userStore: store.newsStore.filter ((item,index) => userStore.age.includes (store.usersFilterStore))
        newsStore: store.newsStore.filter ((item, index) => {return index <= store.newsFilterStore}),
        // newsStore: store.newsStore,
        newsFilterStore: store.newsFilterStore
        // usersFilterStore: store.usersFilterStore
    }
    ),
    dispatch => (
    {
        onMoreNews: (quantity)=> {
            dispatch ({
                type: "GET-MORE-NEWS",
                payload: quantity
            });
            // dispatch (asyncMoreNews (quantity))
        },
        onGetInitNews: ()=> {
            dispatch (asyncGetInitNews ());

        }
    }
    )
) (News);