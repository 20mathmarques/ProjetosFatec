import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlightBase } from 'react-native';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Appbar,Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import Pictures from '../components/Pictures';
import {getBlogs, deleteBlogs,editBlogs} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';


class Blogs extends Component {
  
componentDidMount(){
  this.props.getBlogs()
}
  
render(){
  
    return (

    <View style={styles.container}>
        <FlatList 
        style={styles.list}
        data={this.props.listOfBlogs}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>{
          return(
              <View style={styles.itens}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.content}</Text>
               
                <View style={styles.blogList}>
                 
            {/*      <TouchableOpacity onPress={() => this.props.navigation.navigate("Edi",{...item})} >
                    <View style={{marginRight:15}}>
                      <Icon size={30} color="white" name="edit"/>
                    </View>
                  </TouchableOpacity>
*/}
                  <TouchableOpacity onPress={() => this.props.deleteBlogs(item.key)}>
                    <View>
                      <Icon size={30} color="white" name="close"/>
                    </View>
                  </TouchableOpacity>

                </View>
              </View>
            )
          }}
          />
    </View>
    );
  }
}
function mapStateToProps(state){

    const listOfBlogs = _.map(state.blogList.blogList, (val, key) =>{
      return{
        ...val,
        key:key
      }
    })

  return{
      listOfBlogs
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
    width:'100%'
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
    backgroundColor:'#575FCF',
    padding:20
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
    marginTop:25
  }
})

export default connect(mapStateToProps, {getBlogs,deleteBlogs,editBlogs })(Blogs);