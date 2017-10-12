import React, {Component} from 'react';
import NewsDetails from './NewsDetails.jsx';

class NewsVersion extends Component {


    render() {

        return (
            <div className="app">
                <NewsDetails id={this.props.params.id}/>
            </div>
        );
    }
}

export default NewsVersion;