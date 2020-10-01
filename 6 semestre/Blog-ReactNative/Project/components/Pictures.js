import React, { Component } from 'react';
import { Button, View, Text, Navigator, TouchableHighlight, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Appbar, Card } from 'react-native-paper';

export default class Pictures extends Component {
  render() {
    return (
    
      <Card>
      <Card.Cover style={styles.pictures} source={{ uri: 'https://picsum.photos/700' }}/>
      <Card.Cover style={styles.pictures} source={{ uri: 'https://picsum.photos/700' }}/>
      <Card.Cover style={styles.pictures} source={{ uri: 'https://picsum.photos/700' }}/>
      <Card.Cover style={styles.pictures} source={{ uri: 'https://picsum.photos/700' }}/>
      <Card.Cover style={styles.pictures} source={{ uri: 'https://picsum.photos/700' }}/>
      <Card.Cover style={styles.pictures} source={{ uri: 'https://picsum.photos/700' }}/>
      <Card.Cover style={styles.pictures} source={{ uri: 'https://picsum.photos/700' }}/>
      <Card.Cover style={styles.pictures} source={{ uri: 'https://picsum.photos/700' }}/>
      </Card>
      
    )
  }
}

const styles = StyleSheet.create({
  space:{
    width: '100%', 
    height: 100, 
   
  },
   pictures:{
    marginTop:10, borderRadius:3
  },
 backGround:{
  flex:1, 
  flexDirection: 'column',
  backgroundColor:'black'
 }
})