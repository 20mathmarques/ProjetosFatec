    import {combineReducers} from 'redux';

    import BlogReducer from './BlogReducer';
    import LoadingRedux from './LoadingRedux';

    const rootReducer = combineReducers({
        blogList:BlogReducer,
        loadingReducer:LoadingRedux
    })

    export default rootReducer;