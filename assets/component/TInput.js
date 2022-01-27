import { StyleSheet, TextInput, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Globalstyle } from './Globalstyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const TInput = () => {
    const [text, onChangeText] = useState('');
    const [text2, onChangeText2] = useState('');
    return (
        <View>
            <View style={Globalstyle.Tinput}>
                <Icon name='email-outline' size={25} style={{left:20}} />
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Your Email'
                    style={{left:20,fontWeight:'400',color:'#000'}}
                />
            </View>
            {/* //Second input */}
            <View style={Globalstyle.Tinput}>
               <Icon2 name='unlock' size={25} style={{left:20}} />
                <TextInput
                    onChangeText={onChangeText2}
                    value={text2}
                    placeholder='Password'
                    style={{left:20,fontWeight:'400',color:'#000'}}
                />
            </View >
            <View style={Globalstyle.TinputButton}>
                <Text style={{fontSize:20,color:'#fff'}} >Sign in</Text>
                <Icon2 name='arrowright' size={20} style={{color:'#fff'}}/>

            </View>

        </View>
    );
};

export default TInput;

const styles = StyleSheet.create({});
