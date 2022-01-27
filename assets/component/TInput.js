import { StyleSheet,TextInput, Text, View } from 'react-native';
import React,{useState} from 'react';
import { Globalstyle } from './Globalstyle';

const TInput = () => {
    const [text,onChangeText]=useState('');
    const [text2,onChangeText2]=useState('');
  return (
    <View>
        <View>
      <TextInput
      style={Globalstyle.Tinput}
      onChangeText={onChangeText}
      value={text}
      placeholder='Your Email'
      />
        </View>
    {/* //Second input */}
        <View>
       <TextInput
      style={Globalstyle.Tinput}
      onChangeText={onChangeText2}
      value={text2}
      placeholder='Password'
      />
      </View>

    </View>
  );
};

export default TInput;

const styles = StyleSheet.create({});
