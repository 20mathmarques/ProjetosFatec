import 
{CHANGE_LOGIN_EMAIL,
CHANGE_LOGIN_PASSWORD, 
LOGIN_USER_SUCCESS,
LOGIN_USER_ERROR,
LOGIN_USER_LOADING,
REGISTER_USER_LOADING,
REGISTER_USER_SUCCESS,
REGISTER_USER_FAIL} 
from '../actions/types'

    const INITIAL_STATE ={
        email:'',
        password:'',
        error:'',
        sucess:'',
        loading:null
    };

    export default (state = INITIAL_STATE, action) =>{
        switch(action.type) {
        case CHANGE_LOGIN_EMAIL:
            return {...state, email: action.payload};
        case CHANGE_LOGIN_PASSWORD:
            return {...state, password: action.payload};
        case LOGIN_USER_LOADING:
            return{...state, loading:true}
        case LOGIN_USER_SUCCESS:
            return {...INITIAL_STATE, sucess:'Cadastro Feito com sucesso'};
        case LOGIN_USER_ERROR:
            return {...state,error:action.payload, loading:false}
        case REGISTER_USER_LOADING:
            return {...state, loading:true}
        case REGISTER_USER_SUCCESS:
            return INITIAL_STATE;
        case REGISTER_USER_FAIL:
            return {...state, error: action.payload, loading:false}
        default:
            return state;
        }
    };   