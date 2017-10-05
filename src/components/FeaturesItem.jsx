import React,{Component} from 'react';
import basePath from './../config/config';

class Features_item extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //
    //     }
    // }

    render(){

        // featuresArr

        return(
               <div>
                   {this.props.featuresArr.map((item,index)=>
                       <img className="landing-features-img" src={basePath+item.src} alt="" key={index}/>
                   )}
               </div>
        )
    }


}

export default Features_item;