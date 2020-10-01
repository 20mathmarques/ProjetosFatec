import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import Pictures from '../components/Pictures';
import {postBlogs} from '../actions';
import {connect} from 'react-redux';

class Post extends Component{
  
  state={
    title:"",
    content:""
  }

  submit = () =>{
    this.props.postBlogs(this.state.title, this.state.content)
    this.setState({
      title:"",
      content:""
    })
    this.props.navigation.navigate('Blogs')
  }

  render(){
    return (
      <View >
        <Header style={styles.container}/>
        <Text style={styles.title}>Post</Text>
        <TextInput    
        mode="flat"
        style={styles.input} 
        placeholder="Título" 
        onChangeText={title => this.setState({title})} 
        value={this.state.title}
        />
        
        <TextInput    
        mode="flat"
        multiline="true"
        style={styles.content} 
        placeholder="Digite o Blog aqui" 
        onChangeText={content => this.setState({content})} 
        value={this.state.content}/>

        <Button icon="send" mode="contained" onPress={this.submit} style={styles.button}>Enviar</Button>

      </View>
    );
    } 
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#ffff',
    padding:30
  },
  title:{
    textAlign:'center',
    fontSize:20,
    fontStyle:'normal',
    marginTop:50
  },
  input:{
    marginTop:20,
    width:"50%",
    borderColor:'gray',
    borderWidth:1,
    height:'auto',
    marginTop:50,
    marginLeft:'25%'
  },
  content:{
    marginTop:20,
    width:"70%",
    borderColor:'gray',
    borderWidth:1,
    height:'40%',
    marginTop:50,
    marginLeft:'15%'
  },
  button:{
    width:'40%',
    alignItems:'center',
    marginLeft:'30%',
    marginTop:5
  }
})

export default connect(null, {postBlogs})(Post);
