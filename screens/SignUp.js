import { StyleSheet, Image, Text, View, LogBox, Pressable } from 'react-native';
import React from 'react';
import { Globalstyle } from '../assets/component/Globalstyle';
import Signup from '../assets/component/Signup';
import Icon3 from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Login from './Login';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

LogBox.ignoreAllLogs();
const SignUp = ({navigation}) => {
    return (
        <View style={Globalstyle.container}>
            <KeyboardAwareScrollView style={Globalstyle.container}>
                <Pressable onPress={() => navigation.goBack()} style={{ margin: 10 }}>
                    <Icon3 name='arrow-back' size={30} />
                </Pressable>
                <View style={{ height: wp("50%"), width: wp("100%"), alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Image source={require('../assets/Img/login.png')} style={{ height: 100, width: 100 }} />
                    < Text style={Globalstyle.text2}>Account Sign Up </Text>

                </View>



                <Signup />
                <View style={{ height: wp("20%"), width: wp("100%"), alignItems: 'center' }}>

                </View>


            </KeyboardAwareScrollView>

        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({});
