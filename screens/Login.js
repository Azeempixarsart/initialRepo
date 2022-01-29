import { StyleSheet, Image, Text, View, LogBox, Pressable } from 'react-native';
import React from 'react';
import { Globalstyle } from '../assets/component/Globalstyle';
import TInput from '../assets/component/TInput';
// import SignUp from './SignUp';
// import Forgetpassword from './Forgetpassword';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

LogBox.ignoreAllLogs();
const Login = ({navigation}) => {
    return (
        <View style={Globalstyle.container}>
            <KeyboardAwareScrollView style={Globalstyle.container}>
                <View style={{ height: wp("70%"), width: wp("100%"), alignItems: 'center', justifyContent: 'flex-end', }}>
                    <Image source={require('../assets/Img/login.png')}style={{height:120,width:120}} />
                    <Pressable>
                    < Text style={Globalstyle.text} >Account Log In </Text>
                    </Pressable>
                </View>
               


                <TInput />
                <Pressable style={{alignItems:'center',marginBottom:20}}onPress={()=>navigation.navigate('signup')}>
                <Text style={{color:'#000',fontWeight:'300'}}>New to Pixarsart?  <Text  style={{color:'red',fontWeight:'500'}}>
                    Sign Up</Text></Text>
                    </Pressable>
                <Pressable style={{height:wp("20%"),width:wp("100%"),alignItems:'center'}}>
            <Text style={{ fontSize: 15, fontWeight: '300', color: '#000',}}onPress={()=>navigation.navigate('forgetpassword')}>Forgot Password</Text>
            </Pressable>
            <Pressable style={{height:wp("20%"),width:wp("100%"),alignItems:'center'}}>
            <Text style={{ fontSize: 15, fontWeight: '300', color: '#000',}}onPress={()=>navigation.navigate('home')}>Web View</Text>
            </Pressable>
         


            </KeyboardAwareScrollView>

        </View>
    );
};

export default Login;

const styles = StyleSheet.create({});
