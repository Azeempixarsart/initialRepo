import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
    }
});