import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Post from '../screens/Post';
import Filmes from '../screens/Filmes';
import Edit from '../screens/Edit';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Icon from 'react-native-vector-icons';



const Stack = createStackNavigator();

 function StackScreen() {
  return (
    
    
      <Stack.Navigator>

        <Stack.Screen name="Filmes" component={Filmes} />
        <Stack.Screen name="Post" component={TabScreen} />
      
      </Stack.Navigator>
      
  );
}


const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Filmes" component={Filmes} options={{
         tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={'black'} size={30} />
          ),
          tabBarLabel:()=>(
          <Text style={{color:'black'}}>Filmes</Text>
          )}}/>

        <Tab.Screen name="Escrever" component={Post}options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil-remove-outline" color={'black'} size={30} />
          ),
          tabBarLabel:()=>(
            <Text style={{color:'black'}}>Adcionar Filmes</Text>
          )
          }}/>
      </Tab.Navigator>
      </NavigationContainer>
  );
}