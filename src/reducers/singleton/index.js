import { combineReducers } from 'redux'
import alert from './alert'
import loader from './loader'

const index = combineReducers({
    alert,
    loader
});

export default index