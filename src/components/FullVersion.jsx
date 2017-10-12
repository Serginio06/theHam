import React, {Component} from 'react';
import Landing from './Landing.jsx';
import Members from './Members.jsx';
import Achievements from './Achievements.jsx';
import News from './News.jsx';
import About from './About.jsx';
import OurServices from './OurServices.jsx';
import Portfolio from './Portfolio.jsx';
import Feedback from './Feedback.jsx';
import ContactUs from './ContactUs.jsx';

class FullVersion extends Component {


    render() {

        // console.log('FullVersion this.props.scrollTo=', this.props.scrollTo);
        // console.log('FullVersion this.props', this.props);
        // console.log('FullVersion window.location.pathname=', window.location.pathname);

        return (
            <div className="app">
                <Landing/>
                <OurServices/>
                <About/>
                <Portfolio/>
                <Members/>
                <Achievements/>
                <News/>
                <Feedback/>
                <ContactUs/>
            </div>
        );
    }

}

export default FullVersion;