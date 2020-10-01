
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Router,Scene,Stack} from 'react-native-router-flux';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Config from '../screens/Config'


//const Stack = createStackNavigator();

 export default function HomeStackScreen() {
  return (
    <NavigationContainer>
      <Router>
        <Stack key="root">
        <Scene  key="Login" 
        component={Login}
        hideNavBar={true} 
        options={{ 
          headerStyle:{ 
            backgroundColor:'black',
            }, 
            headerTintColor:'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:24
            },
            }}
        />
        <Scene key="Register" 
        component={Register}
        hideNavBar={true}
        options={{ 
          headerStyle:{ 
            backgroundColor:'black',
            
            }, 
            headerTintColor:'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:24
            },
            headerBackTitleVisible:false,

          }}
        />

        <Scene 
          
          key='Home' 
          component={Home}
          tabs={true}
          options={{ title: 'Sair'}}
          headerStyle={{
            backgroundColor:'black',
            title: 'Sair'
          
          }}
        />

         <Scene 
          
          key='Config' 
          component={Config}
          tabs={true}
          options={{ 
          headerStyle:{ 
            backgroundColor:'black',
            }, 
            headerLeft:false,
            headerBackTitleVisible:false,
            headerTruncatedBackTitle:false,
            headerTitle:false,
            tabBarVisible: false

          }}
        />
  
  </Stack>
  </Router>
  </NavigationContainer>
  );
}

/*const Tab = createMaterialBottomTabNavigator()

 function  HomeScreen() {
  return (
    
      <Tab.Navigator >
        <Tab.Screen name="Home"key='Homescreen'  component={Home} options={{
       
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={'white'} size={30} />
        ),

        }}
       />
  
        <Tab.Screen name="Config" component={Config}  
          
          options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={'white'} size={30}  />
          ),

          }}
         />
      </Tab.Navigator>
    
  );
}
*/
