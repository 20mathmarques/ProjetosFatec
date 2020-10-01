import {combineReducers} from 'redux';
import UserRedux from './UserRedux';
import AuthReducer from './AuthReducer';


/*const rootReducer = combineReducers({
    userList:UserRedux
})

export default rootReducer;*/

export default combineReducers({
    auth: AuthReducer
})