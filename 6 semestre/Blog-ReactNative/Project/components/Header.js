import * as React from 'react';
import { Appbar, Card } from 'react-native-paper';
import { Navigator, View, Text,  TouchableHighlight,StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';


export default class MyComponent extends React.Component {
    render() {
        return (
            <Appbar.Header style={styles.space}>
               <Image style={styles.logo} source={require('../assets/BlogLogo.jpg')}/>
            </Appbar.Header>
            );
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
    }
})