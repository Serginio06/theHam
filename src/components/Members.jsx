import React,{Component} from 'react';
import MemberCard from './MemberCard.jsx';
import {membersData} from './../data/membersData';
import basePath from './../config/config';

class Members extends Component {

    render(){
        return(
            <div className="members" id="members">
                <h2 className="black-text">Meet Out Team
                    <img src={basePath+"images/stripes.png"} alt="" className="strips--img"/>
                </h2>
                <MemberCard membersData={membersData} />
            </div>
        )
    }
}

export default Members;