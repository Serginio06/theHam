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
import FullVersion from './FullVersion.jsx';



class App extends Component {


    render() {
        // console.log ('this.props.children=', this.props.children);
        // console.log ('this.props.routes=', this.props.routes);
        // console.log ('this.props.params=', this.props.params);
        var FullVrsionComponent;

        // if ( this.props.children ) {
        //
        // }


        return (
            <div className="app">

                {this.props.children ? this.props.children : <FullVersion /> }
                <Footer/>

                {/*<Landing/>*/}
                {/*<OurServices/>*/}


                {/*/!*<div className="services-div">{this.props.children}</div>*!/*/}
                {/*<About/>*/}
                {/*<Portfolio/>*/}
                {/*<Members/>*/}
                {/*<Achievements/>*/}
                {/*<News/>*/}
                {/*/!*<div className="news-details">{this.props.children}</div>*!/*/}

                {/*<Feedback/>*/}
                {/*<ContactUs/>*/}


            </div>
        );
    }

}

export default App;