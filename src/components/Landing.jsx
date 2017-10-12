import React,{Component} from 'react';
// import './../css/landing.css';
import LandingMenu from './LandingMenu.jsx'
import LandingImg from './LandingImg.jsx'
import LandingFeatures from './LandingFeatures.jsx'
import {featuresImgPathArr} from './../data/featuresImgPathArr'


class Landing extends Component {

    render(){


        return(
            <div className="landing" id="top">
                <LandingMenu scrollTo={this.props.scrollTo}/>
                <LandingImg/>
                <LandingFeatures featuresImgArr={featuresImgPathArr}/>
            </div>
        )
    }
}

export default Landing;