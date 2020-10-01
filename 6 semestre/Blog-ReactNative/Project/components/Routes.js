import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Post from '../screens/Post';
import Blogs from '../screens/Blogs';
import Edit from '../screens/Edit';
import Icon from 'react-native-vector-icons';



const Stack = createStackNavigator();

function StackScreen() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    
  );
}


const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Blog" component={StackScreen} options={{
         tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={'#575FCF'} size={30} />
          ),
          tabBarLabel:()=>(
          <Text style={{color:'#575FCF'}}>Blog</Text>
          )}}/>

        <Tab.Screen name="Escrever" component={Post}options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil-remove-outline" color={'#575FCF'} size={30} />
          ),
          tabBarLabel:()=>(
            <Text style={{color:'#575FCF'}}>Escrever</Text>
          )
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}