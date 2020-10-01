import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar, Button,Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, ThemeConsumer } from 'react-native-elements';
import Header from '../components/Header';
import {connect} from 'react-redux';
import {changeLoginEmail, changeLoginPassword, registerUser} from '../actions';

import _ from 'lodash';

class Register extends Component {

  onRegisterUser(){
    const {email, password } = this.props
    this.props.registerUser({
       email, 
       password
      })
  }

  renderMessage(){
    if(this.props.error){ 
    return (
      <Text style={{color:'red',textAlign:'center'}}>{this.props.error}</Text>
    );
    }else if (this.props.sucess){
      return (
        <Alert style={{color:'green',textAlign:'center'}}>{this.props.sucess}</Alert>
      );
    }
  }


  render(){
    return (
      <View style={styles.backGround}>
      <ScrollView>
        <Header/>
        <View style={styles.form}>
        <Input
          textContentType="emailAddres"
          placeholder='Email'
          onChangeText={(text)=> this.props.changeLoginEmail(text)}
          inputStyle={styles.input}
          value={this.props.email}
          leftIcon={
            <Icon
              name='envelope-o'
              size='30'
              style={styles.icon}
            />
            }
            />
        <Input
          textContentType="password"
          placeholder='Senha'
          onChangeText={(text)=> this.props.changeLoginPassword(text)}
          inputStyle={styles.input}
          value={this.props.password}
          secureTextEntry={true}
          leftIcon={
            <Icon
              name='lock'
              size='30'
              style={styles.icon}
            />
          }
        />

        
        
        {this.renderMessage()}

        <Button labelStyle={{color:'black'}} mode="outlined" 
         style={styles.buttonC} 
         onPress={this.onRegisterUser.bind(this)}>
          Cadastrar
        </Button>

      </View>
      </ScrollView>
    </View>
    );
  }
}
const mapStateToProps = ({auth}) =>{
  const {email,password,error,sucess,loading} = auth
  return{
    email,
    password,
    error,
    loading,
    sucess

  }
}


const styles = StyleSheet.create({

  backGround:{
   flex:1, 
   flexDirection: 'column',
   backgroundColor:'black'
  },
  buttonLogin:{
   width:"38%", 
   textAlign:'center', 
   marginTop:40, 
   marginLeft:"32%",
   backgroundColor:'black'
  },
  buttonC:{
   width:"38%", 
   textAlign:'center', 
   marginTop:40, 
   marginLeft:"32%",
   backgroundColor:'white'
  },
 
  title:{
   color:'white', 
   textAlign:'center', 
   fontSize:40, 
   fontFamily:'Arial',
   marginTop:50
  },
  form:{
   backgroundColor:'#1C1B1A',
   width:"92%",
   marginLeft:20, 
   height:'auto', 
   marginTop:30, 
   borderRadius:3
  },
  input:{  
   marginLeft:-4,
   marginTop:40,
   height:50,
   backgroundColor:'white'
  },
  icon:{
   color:'black',
   backgroundColor:'white',
   height:50,
   width:35,
   marginTop:40,
    
  },
  caption:{color:'white', textAlign:'center',marginTop:50}
 })

 
 export default connect(
   mapStateToProps,
   {changeLoginEmail, 
    changeLoginPassword,

    registerUser
  })(Register);
