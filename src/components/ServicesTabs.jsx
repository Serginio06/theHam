import React, {Component} from 'react';
import basePath from './../config/config';
// import {Link} from 'react-router'


class ServicesTabs extends Component {

    constructor(props) {
        super (props);
        this.state = {
            tabSrc: this.props.services[0].src,
            tabText: this.props.services[0].text,
            // tabTitle: this.props.services[0].title,
        }
    }

    onTabClick(index) {

        this.setState ({tabSrc: this.props.services[index].src});
        this.setState ({tabText: this.props.services[index].text});

        this.tab[index].className = "services--tab--title active";
        this.tab[this.activeTab].className = "services--tab--title";
        this.activeTab = index;
        // this.render();
    }


    render() {
        this.tab = [];

        // console.log ('ServicesTabs this.props=', this.props);

        return (
            <div className="services--tabs std__internal__block">
                <div className="services--tab">
                    {this.props.services.map ((item, index)=>
                        <div className="services--tab--title" ref={(tab)=>this.tab[index] = tab} key={index}
                             onClick={this.onTabClick.bind (this, index)}>
                            {item.title}
                        </div>
                    )}
                </div>
                <div className="service--tab--content">
                    <img src={basePath + this.state.tabSrc} alt="Service" className="service--tab--content--img"></img>
                    <p className="service--tab--content--description">{this.state.tabText}</p>
                    {/*<div className="service--tab--content--description">{this.state.tabText}</div>*/}
                </div>

            </div>
        )
    }

    componentDidMount() {
        this.activeTab = 0;
        this.tab[0].className = "services--tab--title active"
    }
}

export default ServicesTabs
// {/*onClick={this.onTabClick.bind (this, index)}*/}Tabs;