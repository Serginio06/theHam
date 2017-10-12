import React, {Component} from 'react';
import Footer from './Footer.jsx';
import FullVersion from './FullVersion.jsx';

class App extends Component {

    render() {
        
        // console.log('APP this.props.params.scrollTo= ', this.props.params.scrollTo);
        
        return (
            <div className="app">

                {this.props.children ? this.props.children : <FullVersion scrollTo={this.props.params.scrollTo} /> }
                <Footer scrollTo={this.props.params.scrollTo}/>
            </div>
        );
    }

}

export default App;