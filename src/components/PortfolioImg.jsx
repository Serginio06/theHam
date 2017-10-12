import React, {Component} from 'react';
import basePath from './../config/config';
import portfolioImgSrc from './../icons/info-btn.png';

class PortfolioImg extends Component {

    constructor(props) {
        super (props);
        this.state = {
            showCategory: false
        }
    }

    switchCategory() {
        console.log ('img selection');
    }

    showImgCategory(e) {
        // console.log ('e.target=', e.target.getAttribute('data-category'));

        let target = e.target;
        this.targetOfPopUpOver = target;


        // let target = angular.element (document.querySelector (selector));
        let top = target.getBoundingClientRect ().top;
        // let elmentTop = target.top + window.scrollY;
        let left = target.getBoundingClientRect ().left;
        let right = target.getBoundingClientRect ().right;
        let bottom = target.getBoundingClientRect ().bottom;
        // console.log('bottom',bottom);
        // console.log('top',top);

        // let middleTop = (
        //         top + (
        //             bottom - top
        //         ) / 2
        //     ) - 10;
        // var middleSide = (
        //         left + (
        //             right - left
        //         ) / 2
        //     ) - 50;

        // this.categoryPopup.innerHTML = target.getAttribute('data-category');
        this.categoryPopupText.innerHTML = target.getAttribute ('data-category');
        this.categoryPopup.style.top = top + 'px';
        this.categoryPopup.style.left = left + 'px';

        setTimeout (()=> {
            this.categoryPopup.style.width = (
                right - left
                ) + 'px';
            this.categoryPopup.style.height = (
                bottom - top
                ) + 'px';
        });

    }

    hideImgCategory() {
        this.categoryPopup.className = 'portfolio--category--popup';
        this.categoryPopup.style.height = 0 + 'px';
        this.targetOfPopUpOver = "";
    }


    handleScroll(elementId) {
        if ( this.targetOfPopUpOver) {

            let target = this.targetOfPopUpOver;
            let top = target.getBoundingClientRect ().top;
            this.categoryPopup.style.top = top + 'px';
        }
    }

    componentWillMount() {

        this.targetOfPopUpOver = "";
    }


    render() {
        this.tab = [];
        // console.log ('this.props.portfolioImages= ', this.props.portfolioImages);

        return (
            <div className="portfolio__img-wrapper std__internal__block__mobile">
                {this.props.portfolioImages.map ((item, index)=>
                    <img src={basePath + item.src} className="portfolio--images" alt={item.category} key={index}
                         data-category={this.props.portfolioTabsTitle[item.category - 1].title}
                         onMouseOver={this.showImgCategory.bind (this)}
                    />
                )}

                <div className="portfolio--category--popup" ref={(div)=>this.categoryPopup = div}
                     onMouseLeave={this.hideImgCategory.bind (this)}>
                        <img className="portfolio--category--popupImg" src={portfolioImgSrc} alt="portfolio_info"/>
                        <span className="portfolio--category--popupSpan" ref={(div)=>this.categoryPopupText = div}>aslkfjdlksjd</span>

                </div>
            </div>
        )
    }

    componentDidMount() {
        this.handleScroll = this.handleScroll.bind (this, 'portfolio');
        window.addEventListener ('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener ('scroll', this.handleScroll);
    }

}

export default PortfolioImg;