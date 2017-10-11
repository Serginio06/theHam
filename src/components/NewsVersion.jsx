import React, {Component} from 'react';
import LandingMenu from './LandingMenu.jsx';
// import Members from './Members.jsx';
// import Achievements from './Achievements.jsx';
// import News from './News.jsx';
// import About from './About.jsx';
// import OurServices from './OurServices.jsx';
// import Portfolio from './Portfolio.jsx';
// import Feedback from './Feedback.jsx';
// import ContactUs from './ContactUs.jsx';
import NewsDetails from './NewsDetails.jsx';
// import {RouterState} from 'react-router';

class NewsVersion extends Component {


    render() {
        // console.log ('this.props.children=', this.props.children);
        // console.log ('this.props.routes=', this.props.routes);
        // console.log ('RouterState=', RouterState);

        console.log('NewsVersion this.props=', this.props);

        return (
            <div className="app">
                {/*<LandingMenu />*/}
                <NewsDetails id={this.props.params.id}/>
                {/*<Landing/>*/}
                {/*<OurServices/>*/}
                {/*<About/>*/}
                {/*<Portfolio/>*/}
                {/*<Members/>*/}
                {/*<Achievements/>*/}
                {/*<News/>*/}
                {/*<Feedback/>*/}
                {/*<ContactUs/>*/}
                {/*<Footer/>*/}

            </div>
        );
    }

}

export default NewsVersion;