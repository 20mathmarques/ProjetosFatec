import React, { Component, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableHighlightBase, Image, Linking } from 'react-native';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Appbar,Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import Pictures from '../components/Pictures';
import {getBlogs, deleteBlogs,editBlogs,getFilmes,deleteFilmes} from '../actions/Index';
import {connect} from 'react-redux';
import { Container, 
  Button,
  Content, 
  Card, 
  CardItem, 
  Thumbnail, 
 
  Left, 
  Body, 
  Right } 
  from 'native-base';

import _ from 'lodash';


class Filmes extends Component {
  
  componentDidMount(){
    this.props.getFilmes()
  }
    
  render(){

    

    const OpenURLButton = ({ url, children }) => {
      const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);
      

  return <Button title={children} onPress={handlePress} />
    };    
      return (
     
  
      <View style={{backgroundColor:'black', height:'100%'}}>
  
        <Header/>
  
          <FlatList 
          style={styles.list}
          data={this.props.listOfFilmes}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>{
            return(
            <Container style={styles.itens}>
                  <Content>  
                    <Card>
                      <CardItem>
                        <Left>
                        <Body>
                          <Text>{item.nome}</Text>
                          <Text note>{item.genero}</Text>
                        </Body>
                        </Left>
                      </CardItem>
                      
                       <CardItem cardBody>
                          <Image source={item.foto}/>
                        </CardItem>
                      
                        <CardItem>
                          <Left>
                        <Text>Click ao lado </Text>
                       <Body style={{justifyContent:'center'}}>
                       
                       <OpenURLButton  url={item.link}>VHh</OpenURLButton>
                      
                      </Body>
                        </Left>
                  
        
                      
                      </CardItem>
                    </Card>
                  
                  </Content>
                 
                
                
                  <View style={styles.blogList}>
                   
                    <TouchableOpacity onPress={() => this.props.deleteFilmes(item.key)}>
                      <View>
                        <Icon size={30} color="black" name="close"/>
                      </View>
                    </TouchableOpacity>
  
                  </View>
                  
                </Container >
              )
            }}
            />
      </View>
      );
    }
  }
  function mapStateToProps(state){
  
      const listOfFilmes = _.map(state.filmesList.filmesList, (val, key) =>{
        return{
          ...val,
          key:key
        }
      })
  
    return{
        listOfFilmes
    }
  }
  
const styles = StyleSheet.create({
  space:{
    backgroundColor:'white', 
    height:'auto'
  },
  logo:{
      width:200,
      height:140,
      marginLeft:105,
      borderRadius:5
  },
  list:{
    width:'100%',
    height:'80%',
   
  },
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#ffff',
    padding:10
  },
  itens:{
    elevation:8,
    marginBottom:15,
    borderRadius:10,
    padding:20,
    backgroundColor:'black',
    height:'80%',
    backgroundColor:'white'

  },
  title:{
    fontSize:28,
    color:'#ffff',
    fontWeight:'bold',
    marginBottom:10
  },
  text:{
    fontSize:20,
    lineHeight:30,
    color:'#ffff'
  },
  blogList:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginTop:0,
    height:'16%',
    color:'white',
    
  },
  underLineText: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  backGround:{
    backgroundColor:'black' ,
    height:'100%'
  }
})

export default connect(mapStateToProps, {getFilmes,deleteFilmes })(Filmes);