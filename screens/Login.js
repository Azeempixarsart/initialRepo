import { StyleSheet,Image, Text, View } from 'react-native';
import React from 'react';
import { Globalstyle } from '../assets/component/Globalstyle';
import TInput from '../assets/component/TInput';

const Login = () => {
    return (
        <View style={Globalstyle.container}>
            <View style={{alignItems:'center'}}>
                <Image source={require('../assets/Img/login.png')}/>
                
            </View>
            <Text style={Globalstyle.text}>Account Log In </Text>
            <TInput/>
           
                
            
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({});
