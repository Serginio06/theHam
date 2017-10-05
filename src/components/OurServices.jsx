import React, {Component} from 'react';
import ServicesTabs from './ServicesTabs.jsx'
import {services} from './../data/services.js'
import basePath from './../config/config';

class OurServices extends Component {

    render() {
        
        return (
            <div className="services" id="services">
                <h2 className="black-text">Our services
                    <img src={basePath+"images/stripes.png"} alt="" className="strips--img"/>
                </h2>

                <ServicesTabs services={services}/>
            </div>
        )
    }
}

export default OurServices;