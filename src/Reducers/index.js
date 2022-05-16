import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import routeReducer from './routeReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    userReducer:userReducer,
    routeReducer:routeReducer,
    dashboardReducer:dashboardReducer
})

export default rootReducer