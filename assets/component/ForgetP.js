import { StyleSheet, TextInput, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Globalstyle } from './Globalstyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

  
  

const ForgetP = () => {
    const [text, onChangeText] = useState('');
    return (
        <View style={{height:wp("80%"), width:wp("100%"), backgroundColor:'transparent', alignItems:'center',justifyContent:'center'}}>
            <View style={Globalstyle.Tinput}>
                <Icon name='email-outline' size={25} style={{left:20}} />
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Write Your Email'
                    style={{left:20,fontWeight:'400',color:'#000'}}
                />
            </View>
          
            <View style={Globalstyle.TinputButton}>
                <Text style={{fontSize:20,color:'#fff'}} >Send Link</Text>
                <Icon2 name='arrowright' size={20} style={{color:'#fff'}}/>

            </View >
            <View>
                <Text style={{alignItems:'center',fontSize:13,color:'#000000'}}>
                    Check Your Email to Reset Your Password
                </Text>
            </View>
           
        </View>
    );
};

export default ForgetP;

const styles = StyleSheet.create({});
