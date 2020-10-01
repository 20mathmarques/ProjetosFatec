import React, { Component } from 'react';
import { Navigator, View, Text,  TouchableHighlight,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Avatar } from 'react-native-paper';
import Header from '../components/Header';

 function Config ({ navigation }) {

  

    return (
    <View style={styles.backGround}>
     <ScrollView>
      <Header/>
      
      <View style={styles.chooices}>
        <Avatar.Image style={{marginLeft:20, size:60}} source={require('../assets/icon.png')} />
        <Text style={styles.text}>Nome do Usuario</Text>
      </View>
    
        <View style={styles.choices}>
        <Button mode='outlined' >
          <Icon name="user" 
            color="white" 
            size="20"/>
              <Text style={styles.text}>Perfil</Text>
          </Button>
          <Button mode='outlined' >
          <Icon name="sign-out" 
            color="white" 
            size="20"/>
              <Text style={styles.text}>Sair</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
    )
  }


const styles = StyleSheet.create({
  space:{
    backgroundColor:'black', 
    height:100 
  },
  choices:{
   width: '99%', 
   height: 'auto', 
   marginLeft:2,
   backgroundColor: '#242322',
   borderWidth:0.3,
   borderColor:'#1C1B1A',
   marginBottom:30,
 },
 chooices:{
  width: '99%', 
  height: 'auto', 
  marginLeft:2,
  backgroundColor: '#242322',
  borderWidth:0.3,
  borderColor:'#1C1B1A',
  marginBottom:30,
  marginTop:50,
  flexDirection:'row'
 },
 backGround:{
  flex:1, 
  flexDirection: 'column',
  backgroundColor:'black'
 },
 title:{
  color:'white', 
  textAlign:'left', 
  fontSize:40, 
  fontFamily:'Arial',
  marginLeft:20
 },
 text:{
  color:'white',
  fontSize:15,
  fontFamily:'Arial',
  textAlign:'center',
  marginTop:25,
  marginLeft:65
  
 }
})

export default Config;