import React, {Component} from 'react';
import basePath from './../config/config';

class MemberCard extends Component {

    render() {
        let outerElmeClass = 'member--card-outer-div';

        return (
            <div className="member--cards std__internal__block" id="member--cards">
                {this.props.membersData.map ((item, index)=> {


                        {/*if (this.props.membersData.length - 1 === index) {*/}
                            {/*outerElmeClass = 'member--card-outer-div-last';*/}
                        {/*} else {*/}
                            {/*outerElmeClass = 'member--card-outer-div';*/}
                        {/*}*/}

                    outerElmeClass = 'member--card-outer-div';

                        let elem = <div className={outerElmeClass} key={index}>
                            <div className="img-content">
                                <img src={basePath+item.src} alt="" className="member--card-img"/>
                                <button style={{backgroundImage:`url('./build/icons/roundBtn.png')`}}></button>
                            </div>
                            <div className="member--card-name-div">
                                <span className="member--card-name-div--name">{item.name}</span>
                                <span className="member--card-name-div--position">{item.position}</span>
                            </div>
                            <div className="member--card-social-facebook">
                                <img src={basePath+"icons/facebook.png"} alt="facebook"/>
                            </div>
                            <div className="member--card-social-twitter">
                                <img src={basePath+"icons/twitter.png"} alt="twitter"/>
                            </div>
                            <div className="member--card-social-skype">
                                <img src={basePath+"icons/skype.png"} alt="skype"/>
                            </div>
                            <div className="member--card-social-vimeo">
                                <img src={basePath+"icons/vimeo.png"} alt="vimeo"/>
                            </div>
                        </div>

                        return elem
                    }
                )}
            </div>
        )
    }

    componentDidMount() {

    }
}

export default MemberCard;