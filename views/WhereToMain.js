// this is the initial page when user enters
import { StyleSheet, Text , TextInput, View} from 'react-native';
import React, {useState} from 'react';


export default function WhereToMain({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
      <View style={styles.circle4} />
      <View style={styles.circle5} />
      <View style={styles.circle6} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  circle1: {
    width: 240,
    height: 240,
    backgroundColor: 'rgba(245, 184, 26, 0.6)',
    borderRadius: 240 / 2,
    position: 'absolute',
    left: 19,
    top: 53,
  },
  circle2: {
    // backgroundColor:
    backgroundColor: 'rgba(106, 195, 244, 0.6)',
    position: 'absolute',
    width: 120,
    height: 120,
    left: 239,
    top: 233,
    borderRadius: 120 / 2,
  },
  circle3: {

  },
  circle4: {

  },
  circle5: {

  },
  circle6: {

  }
  
});

