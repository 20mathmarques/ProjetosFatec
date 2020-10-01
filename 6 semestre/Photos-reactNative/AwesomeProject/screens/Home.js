import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar, Button,Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import Pictures from '../components/Pictures';

function Home({ navigation }) {
  return (
      
    <View style={styles.backGround}>
     
      <Header/>
        <Pictures/>
     
    </View>

  )
}



const styles = StyleSheet.create({
  space:{
    backgroundColor:'black', 
    height:100 
  },
    pictures:{
      width: '90%', 
      height: 300, 
      backgroundColor: 'red',
      marginTop:10, 
      marginLeft:20, 
      borderRadius:10
    },
    backGround:{
      flex:1, 
      flexDirection: 'column',
      backgroundColor:'black'
    }
    })
export default Home;
