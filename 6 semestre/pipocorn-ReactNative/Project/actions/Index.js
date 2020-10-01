import firebase from '../fb';
import {Actions} from 'react-native-router-flux';
import {CHANGE_LOGIN_EMAIL,
    CHANGE_LOGIN_PASSWORD, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGIN_USER_LOADING,
    REGISTER_USER_LOADING,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL} from './types';

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


export function getFilmes(){
    return(dispatch) => {

        dispatch({
            type:"FILMES_LOADING_STATUS",
            payload:true
        })
        firebase.database().ref('/filmes').on('value', snapshot =>{
            dispatch({
                type:"FILMES_FETCH",
                payload:snapshot.val()
            })
        })
        
        dispatch({
            type:"FILMES_LOADING_STATUS",
            payload:false
        })
    }
}


export function postFilmes(nome,genero,link,foto){
    return(dispatch) =>{
        firebase.database().ref('/filmes').push({nome,genero,link,foto})
    }
}


export function deleteFilmes(key){
    return(dispatch) =>{
        firebase.database().ref(`/filmes/${key}`).remove()
    }
}

/*export function editBlogs(title,content,key){
    return(dispatch) =>{
        firebase.database().ref(`/blogs/`).child(key).update({title, content})
    }
}*/