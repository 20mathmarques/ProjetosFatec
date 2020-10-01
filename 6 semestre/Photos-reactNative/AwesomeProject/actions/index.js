import * as firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

//import firebase from '../backend/fb';
//importar actions types (tipos de ação)
import {CHANGE_LOGIN_EMAIL,
    CHANGE_LOGIN_PASSWORD, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGIN_USER_LOADING,
    REGISTER_USER_LOADING,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL} from './types';
import { render } from 'react-dom';
import { Button } from 'react-native-paper';
import HomeStackScreen from '../components/routes';


    export const changeLoginEmail = (email) => {
        return{
        type:CHANGE_LOGIN_EMAIL,
        payload: email
        }
    };

    export const changeLoginPassword = (password) => {
        return{
            type:CHANGE_LOGIN_PASSWORD,
            payload: password
        }
    };

    export const loginUser = (userInfo) =>{
        return (dispatch) => {
            dispatch({
                type:LOGIN_USER_LOADING
            })
            firebase.auth().signInWithEmailAndPassword(userInfo.email,userInfo.password)
            .then((response)=>{
                console.log(response);
                
                dispatch({
                    type:LOGIN_USER_SUCCESS
                })
        
                Actions.Home();
            })
            .catch((error)=>{
                dispatch({
                    type:LOGIN_USER_ERROR,
                    payload:error.message
                })
            })
        }
    }

    export const registerUser = (userInfo) =>{
        return(dispatch) =>{
            dispatch({
                type: REGISTER_USER_LOADING
            })
            firebase.auth().createUserWithEmailAndPassword(userInfo.email,userInfo.password)
            .then((response) => {
                console.log(response);

                dispatch({
                    type: REGISTER_USER_SUCCESS
                })

                Actions.Login()

            })
            .catch((error) =>{
                console.log(error);

                dispatch({
                    type:REGISTER_USER_FAIL,
                    payload:error.message
                })
            })
        }
    };