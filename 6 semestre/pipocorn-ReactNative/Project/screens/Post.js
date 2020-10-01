import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import Pictures from '../components/Pictures';
import {postFilmes} from '../actions/Index';
import {connect} from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

class Post extends Component{
  
  state={
    nome:"",
    categoria:"",
    link:"",
    foto:"",
  }

  submit = () =>{
    this.props.postFilmes(this.state.nome, this.state.categoria, this.state.link, this.state.foto)
    this.setState({
      nome:"",
      categoria:"",
      link:"",
      foto:""
    })
    this.props.navigation.navigate('Blogs')
  }

  render(){

  

    return (
      <View style={{backgroundColor:'black', height:'100%'}} >
         <ScrollView>
        <Header/>
      
        <TextInput    
          mode="flat"
          style={styles.input} 
          placeholder="Nome:" 
          onChangeText={nome => this.setState({nome})} 
          value={this.state.nome}
        />

        <TextInput    
          mode="flat"
          style={styles.input} 
          placeholder="Categoria" 
          onChangeText={categoria => this.setState({categoria})} 
          value={this.state.categoria}
        />

         <TextInput    
          mode="flat"
          style={styles.input} 
          placeholder="Link:" 
          onChangeText={link => this.setState({link})} 
          value={this.state.link}
        />

         <TextInput    
          mode="flat"
          style={styles.input} 
          placeholder="Foto:" 
          onChangeText={foto => this.setState({foto})} 
          value={this.state.foto}
        />


       <Button icon="send" mode="contained" onPress={this.submit} style={styles.button}>Cadastrar</Button>
       </ScrollView>
      </View>
    );
    } 
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'black',
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
    width:"70%",
    borderColor:'gray',
    borderWidth:1,
    height:'auto',
    marginTop:50,
    marginLeft:'15%'
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
    marginTop:10
  }
})

export default connect(null, {postFilmes})(Post);
