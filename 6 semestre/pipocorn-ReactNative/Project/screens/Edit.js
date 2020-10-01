import React, { Component } from 'react';
import { View, Text, StyleSheet,Button} from 'react-native';
import { TextInput,  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import Pictures from '../components/Pictures';
import {editBlogs} from '../actions/Index';
import {connect} from 'react-redux';

class Edit extends Component{
  
  state={
    title:this.props.navigation.state.params.title,
    content:this.props.navigation.state.params.content,
    key:this.props.navigation.state.params.key
  }

  submit = () =>{
    this.props.editBlogs(this.state.title,this.state.content, this.state.key);

    this.setState({
      title:"",
      content:"",
      key:""
    })
  }

  render(){
    console.log('kkskkskkskks', this.props.navigation.state.params)
    return (
      <View >
        <Header style={styles.container}/>
        <Text style={styles.title}>Post</Text>
        <TextInput    
        mode="flat"
        style={styles.input} 
        placeholder="Título" 
        onChangeText={title => this.setState({title})} 
        value={this.state.title}/>
        <TextInput    
        mode="flat"
        style={styles.content} 
        placeholder="Digite o Blog aqui" 
        onChangeText={content => this.setState({content})} 
        value={this.state.content}/>
        <Button title="Enviar" onPress={this.submit} />
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
  }
})

export default connect(null, {editBlogs})(Edit);
