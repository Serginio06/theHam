import React, {Component} from 'react';
import AchievementsFeatures from './AchievementsFeatures.jsx'
import {achievementsArr} from './../data/achievementsArr'


class Achievements extends Component {

    render() {


        return (
            <div className="achievements" id="achievements">
                <AchievementsFeatures featuresImgArr={achievementsArr} />
            </div>
        )
    }
}

export default Achievements;