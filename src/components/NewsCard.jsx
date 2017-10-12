import React, {Component} from 'react';
import {Link} from 'react-router';

import newsPic1 from './../images/service8.jpeg';
import newsPic2 from './../images/service7.jpeg';

var newsPics = [newsPic1, newsPic2];

class NewsCard extends Component {

    render() {
        this.title = 'Amazing blog post';
        let outerElmeClass = '';
        let newImgSrc;

        return (
            <div className="news--cards std__internal__block" id="news--cards">
                {this.props.news.map (
                    (item, index)=> {
                        let transformedDate = new Date (item.date);

                        outerElmeClass = 'news--card-outer-div';

                        if (index % 2 === 0) {
                            newImgSrc = newsPics[0]
                        } else {
                            newImgSrc = newsPics[1]
                        }


                        let elem =

                                <Link className="news-div" key={index} to={"/news/" + item.id}>

                                    {/*<div className="news-div">*/}
                                    <div className={outerElmeClass}>

                                        <img className="news--card-img" src={newImgSrc} alt="this.title"></img>
                                        {/*<div className="news--card-img" style={newImg}></div>*/}
                                        <div className="news--card-name-div">
                                            <span className="news--card-name-div--name">{this.title + "_" + (
                                            +index + 1
                                            )}</span>
                                        </div>
                                    </div>
                                    <div
                                        className="news__date-wrapper">
                                        <div className="news__date">
                                        <span>
                                          {transformedDate.getDate ()}
                                        </span>

                                            <span>
                                          {transformedDate.toLocaleString ("en-us", {month: "short"})}
                                        </span>
                                        </div>
                                    </div>
                                </Link>


                        return elem
                    }
                )
                }
            </div>
        )
    }
}

export default NewsCard;