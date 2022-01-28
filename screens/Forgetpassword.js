import { StyleSheet, Text,Image, View, Pressable } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Globalstyle } from '../assets/component/Globalstyle';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Login from './Login';
import ForgetP from '../assets/component/ForgetP';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Forgetpassword = ({navigation}) => {
  return (
    <View style={Globalstyle.container}>
      <KeyboardAwareScrollView style={Globalstyle.container}>
          <Pressable onPress={()=> navigation.goBack()} style={{margin:10}}>
          <Icon3 name='arrow-back' size={30}/>
          </Pressable>
          <View style={{alignItems:'center',justifyContent:'flex-end',height:wp("70%")}}>
            <Image source={require('../assets/Img/login.png')} style={{height:100,width:100}}/>
            <Text style={Globalstyle.text}>Forgot Your Password</Text>
          </View>
          <ForgetP/>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Forgetpassword;

const styles = StyleSheet.create({});
