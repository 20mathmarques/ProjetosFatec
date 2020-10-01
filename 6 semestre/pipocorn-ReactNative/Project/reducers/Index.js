import {combineReducers} from 'redux';
//import UserRedux from './UserRedux';
//import AuthReducer from './AuthReducer';
import GeneroRedux from './GeneroRedux';
import FilmesRedux from './FilmesRedux';
import LoadingRedux from './LoadingRedux';


/*const rootReducer = combineReducers({
    userList:UserRedux
})

export default rootReducer;*/

export default combineReducers({
   // auth: AuthReducer,
    filmesList:FilmesRedux,
    generoList:GeneroRedux,
    loadingReducer:LoadingRedux
})