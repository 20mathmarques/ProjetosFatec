import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Button,Caption } from 'react-native-paper';

export default class MyComponent extends React.Component {
    render() {
        return (
            <Button syyle={styles.button}/>
            );
    }
}

const styles = StyleSheet.create({
    button:{
        width:"38%", textAlign:'center', marginTop:40, marginLeft:"32%"
       },
})