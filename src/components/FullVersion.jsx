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
import Footer from './Footer.jsx';
import ServicesTabs from './ServicesTabs.jsx'

class FullVersion extends Component {


    render() {
        // console.log ('FullVersion this.props=', this.props);
        // console.log ('this.props.routes=', this.props.routes);

        return (
            <div className="app">
                <Landing/>
                <OurServices/>
                {/*<ServicesTabs />*/}
                {/*<ServiceTabContent category={this.props.category}/>*/}
                <About/>
                <Portfolio/>
                <Members/>
                <Achievements/>
                <News/>
                <Feedback/>
                <ContactUs/>
                {/*<Footer/>*/}

            </div>
        );
    }

}

export default FullVersion;