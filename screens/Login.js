import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';
import { Globalstyle } from '../assets/component/Globalstyle';
import TInput from '../assets/component/TInput';

const Login = () => {
    return (
        <View style={Globalstyle.container}>
            <View style={{ alignItems: 'center', flex:1,justifyContent:'flex-end',marginBottom:10}}>
                <Image source={require('../assets/Img/login.png')} />
                <Text style={Globalstyle.text}>Account Log In </Text>
            </View>
            <View style={{ marginTop:10}}>
               
                <TInput />
            </View>
            <View style={{ flex: 1 ,alignItems:'center'}}>
                <Text style={{ fontSize: 15, fontWeight: '300', color: '#000' }}>Forget Password</Text>
            </View>

        </View>
    );
};

export default Login;

const styles = StyleSheet.create({});
