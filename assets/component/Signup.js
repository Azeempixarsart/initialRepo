import { StyleSheet, TextInput, Text, Image, View } from 'react-native';
import React, { useState } from 'react';
import { Globalstyle } from './Globalstyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";



const Signup = () => {
    const [text, onChangeText] = useState('');
    const [text2, onChangeText2] = useState('');
    return (
        <View style={{ height: wp("130%"), width: wp("100%"), alignItems: 'center', justifyContent: 'center' }}>
            {/* Name */}
            <View style={Globalstyle.Tinput}>
                <Icon3 name='person-outline' size={25} style={{ left: 20 }} />
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Your Name'
                    style={{ left: 20, fontWeight: '400', color: '#000' }}
                />
            </View>
            {/* email */}
            <View style={Globalstyle.Tinput}>
                <Icon name='email-outline' size={25} style={{ left: 20 }} />
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Your Email'
                    style={{ left: 20, fontWeight: '400', color: '#000' }}
                />
            </View>
            {/* //Password*/}
            <View style={Globalstyle.Tinput}>
                <Icon2 name='unlock' size={25} style={{ left: 20 }} />
                <TextInput
                    onChangeText={onChangeText2}
                    value={text2}
                    placeholder='Password'
                    style={{ left: 20, fontWeight: '400', color: '#000' }}
                />
            </View >
            {/* confirm Password */}
            <View style={Globalstyle.Tinput}>
                <Icon2 name='unlock' size={25} style={{ left: 20 }} />
                <TextInput
                    onChangeText={onChangeText2}
                    value={text2}
                    placeholder='Confirm Password'
                    style={{ left: 20, fontWeight: '400', color: '#000' }}
                />
            </View >
            <View style={Globalstyle.TinputButton}>
                <Text style={{ fontSize: 20, color: '#fff' }} >Sign Up</Text>
                <Icon2 name='arrowright' size={20} style={{ color: '#fff' }} />

            </View>
            <View style={Globalstyle.TinputButton2}>
                <Image source={require('../Img/googleimg.png')} style={{ height: 40, width: 40 }} />
                <Text style={{ fontSize: 20, marginHorizontal: 10 }} >Sign in with Google</Text>


            </View >


        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({});
