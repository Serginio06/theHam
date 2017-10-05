import React, {Component} from 'react';
import AchievementsItem from './AchievementsItem.jsx'

class Achievements_features extends Component {

    render() {

        return (
            <div className="achievements-features" id="achievements-features">
                <AchievementsItem featuresArr={this.props.featuresImgArr} startCounter={this.startCounter}/>
            </div>
        )
    }

}

export default Achievements_features;