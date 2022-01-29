import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const Home = () => {
  return (
    <WebView source={{ uri: 'https://reactnative.dev/' }} />
   
  );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
    }
});


// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { WebView } from 'react-native-webview';

// // ...
// export default class Home extends Component {
//   render() {
//     return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
//   }
// }