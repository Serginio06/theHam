import React, {Component} from 'react';
import basePath from './../config/config';
import {services} from './../data/services.js'


class ServiceTabContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            index:this.props.category
        }

    }

    render() {
        console.log ('ServiceTabContent loaded');
        console.log ('ServiceTabContent this.props= ', this.props);
        var index = this.props.category;
        // if (this.props.category ) {
        //     index = 1;
        // } else {
        //     index = 2;
        // }

        console.log('index=', index);


        return (
            <div className="std__internal__block">
                <div className="service--tab--content">
                    <img src={basePath + services[index].src} alt="Service"
                         className="service--tab--content--img"></img>
                    <p className="service--tab--content--description">{services[index].text}</p>
                    {/*<div className="service--tab--content--description">{this.state.tabText}</div>*/}
                    {/*<h2>ServiceTabContent displayed</h2>*/}
                </div>
            </div>
        )
    }
}

export default ServiceTabContent;