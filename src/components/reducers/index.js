/**
 * Created by sergiiivanchenko on 14/07/2017.
 */

import {combineReducers} from 'redux';
import newsStore from './NewsReducer';
import newsFilterStore from './NewsFilterReducer';
import feedbackStore from './FeedbackReducer';

export default combineReducers({
    newsStore,
    feedbackStore,
    newsFilterStore
})






