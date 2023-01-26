// this is the initial page when user enters
import { StyleSheet, Text , ImageBackground, TextInput, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {InputText} from './InputText.js';
import Svg, {Path} from 'react-native-svg';

import { auth } from '../config/firebase.js';

const backgroundImg = require('../assets/background2.png');

export default function FirstPage({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("MainPage");
      }
    })

    return unsubscribe
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  };

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .then(navigation.navigate("MainPage"))
    .catch(error => alert(error.message))
    
  };

  return (
    <View style={styles.container}>
      <ImageBackground source = {backgroundImg} resizeMode = "cover" style={styles.image}>
      <LogoSvg/>

      <Text style = {styles.codeText}>Hi! Welcome to BubblY! </Text>
      <TextInput placeholder = 'Email' value = {email} onChangeText = {setEmail} style = {styles.textEmail} />
      <TextInput placeholder = 'Password' value = {password} onChangeText = {setPassword} style ={styles.textEmail} />
      <InputText navigation = {navigation} />
      </ImageBackground>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const LogoSvg = () => {
  return (
    <View style = {styles.logo}>
        <Svg width="109" height="106" viewBox="0 0 109 106" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Path d="M40.0899 39.0093C42.0603 39.1904 44.6396 39.5264 47.4075 40.149C52.4864 41.2915 57.6944 43.2897 61.1066 46.6086C64.5146 49.9234 66.5658 54.9774 67.7398 59.9066C68.3773 62.5835 68.7229 65.0792 68.9101 66.9904C66.9396 66.809 64.3603 66.4726 61.5925 65.8497C56.5133 64.7067 51.3052 62.7082 47.893 59.39C44.4854 56.0762 42.4343 51.0227 41.2603 46.0936C40.6227 43.4165 40.2771 40.9206 40.0899 39.0093Z" stroke="#F5B81A" stroke-width="7"/>
          <Path d="M91.875 53C91.875 72.9289 75.2344 89.25 54.5 89.25C33.7656 89.25 17.125 72.9289 17.125 53C17.125 33.0711 33.7656 16.75 54.5 16.75C75.2344 16.75 91.875 33.0711 91.875 53Z" stroke="#F5B81A" strokeWidth="7"/>
        </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
  },
  codeText: {
    fontFamily: 'Arial Hebrew',
    fontSize: 24,
    fontWeight: 'bold',
    color: "#FFFFFF",
    position: 'absolute',
    width: 274,
    height: 38,
    left: 65,
    top: 405,
  },
  logo: {
    position: 'absolute',
    width: 109,
    height: 106,
    top: 256,
    left: 140,
  }
});

