import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Forgetpassword from './screens/Forgetpassword';

const Stack=createStackNavigator();


const App = () => {
  useEffect(()=> {
SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ headerShown: false}}
      >
        
        
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='signup'component={SignUp}/>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='forgetpassword'component={Forgetpassword}/>
        
      </Stack.Navigator>

    </NavigationContainer>
   
  );
};

export default App;

const styles = StyleSheet.create({});
