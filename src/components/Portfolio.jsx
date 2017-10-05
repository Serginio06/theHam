import React,{Component} from 'react';
import {portfolioTabsTitle} from './../data/portfolioTabsTitle';
import PortfolioTabs from './PortfolioTabs.jsx';
import basePath from './../config/config';

class Portfolio extends Component {

    render(){
        return(
            <div className="portfolio" ref={(comp)=>this.component = comp} id="portfolio">
                <h2 className="black-text">Our Amazing work
                    <img src={basePath+"images/stripes.png"} alt="portfolio" className="strips--img"/>
                </h2>
                <PortfolioTabs portfolioTabsTitle={portfolioTabsTitle}/>
            </div>
        )
    }


}

export default Portfolio;