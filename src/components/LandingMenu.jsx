import React, {Component} from 'react';
// import {menuIconClick} from './../js/menuHandler'
import {menuItemClick} from './../js/menuHandler'
import logoImg from './../images/Logo.png';
var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Landing_menu extends Component {
    constructor(props){
        super(props);
        this.state={
            setActiveClass:'activeMenu',
            logoImg:{backgroundImage:`url(${logoImg})`}
        }
    }

    handleSetActive(e){
        console.log('e= ', e);
        console.log('arguments= ', arguments);
        // e.target.style.className = 'activeMenu';
    }

    handleSetInactive(e){
        console.log(e);
        // e.target.style.className = '';
    }



    render() {
        
        return (
            <div className="header__title">
                <div className="header__logo" style={this.state.logoImg} onClick={this.scrollToTop.bind(this)}></div>
                <div className="header__menu" id="header__menu">
                    <div className="header__menuItem_wrapper">
                        <div className="header__menuItem" ><Link onClick={menuItemClick.bind(this)} activeClass="activeMenuItm" to="top" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Home</Link></div>
                        <div className="header__menuItem" ><Link onClick={menuItemClick.bind(this)} activeClass="activeMenuItm" to="services" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Services</Link></div>
                        <div className="header__menuItem" ><Link onClick={menuItemClick.bind(this)} activeClass="activeMenuItm" to="about" spy={true} smooth={'easeOutQuart'} duration={1500} offset={-60} isDynamic={true}>About</Link></div>
                        <div className="header__menuItem" ><Link onClick={menuItemClick.bind(this)} activeClass="activeMenuItm" to="portfolio" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Work</Link></div>
                        <div className="header__menuItem" ><Link onClick={menuItemClick.bind(this)} activeClass="activeMenuItm" to="achievements" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Testimonial</Link></div>
                        <div className="header__menuItem" ><Link onClick={menuItemClick.bind(this)} activeClass="activeMenuItm" to="feedback" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Blog</Link></div>
                        <div className="header__menuItem" ><Link onClick={menuItemClick.bind(this)} activeClass="activeMenuItm" to="members" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Team</Link></div>
                        <div className="header__menuItem" ><Link onClick={menuItemClick.bind(this)} activeClass="activeMenuItm" to="contacts" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Contact</Link></div>
                    </div>

                    {/*<a href="javascript:void(0);" id="header__menu--icon"*/}
                    <button id="header__menu--icon"
                       onClick={menuItemClick.bind(this)}>&#9776;</button>
                </div>
            </div>
        )
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function() {
            // console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function() {
            // console.log("end", arguments);
        });

        scrollSpy.update();

    }
    scrollToTop() {
        scroll.scrollToTop();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
}

export default Landing_menu;