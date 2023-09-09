import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from "./profileReducer";



const allReducers=combineReducers({
    auth:authReducer,
    profile:profileReducer
})

export default allReducers
