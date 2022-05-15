import { combineReducers } from 'redux';
import routeReducer from './routeReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    userReducer:userReducer,
    routeReducer:routeReducer
})

export default rootReducer