import { combineReducers } from 'redux'

import need from './need';
import flashMessages from './flashMessages'

export default combineReducers({
    need,
    flashMessages
});