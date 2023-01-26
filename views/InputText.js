import { StyleSheet, Text , Image, Pressable, TextInput, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';

import { AppButton } from './appButton.js';

import { auth } from '../config/firebase.js';

export const InputText = ({ navigation }) => {

    
    const [text, onChangeText] = useState('Tap here to put your code!');
    const [email, setEmail] = useState('Enter your email');
    const [password, setPassword] = useState('Set your Password');

    const onPressFirstPageButton = () => {
        
        // backend TODOS!!!
        auth.createUserwithEmailAndPassword(email, password);
        // check if user is validated
        // check input validation
        // check if user is validated
        navigation.navigate('MainPage');
    };

    return (
        <SafeAreaView style = {styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                value= {text}
            />
            
            <AppButton onPress = {onPressFirstPageButton} style = {styles.button}/>
        
            
        </SafeAreaView>
        
    
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'rgba(245, 184, 26, 0.56)',
        flexWrap: 'wrap',
        height: 41,
        width: 288,
        margin: 12,
        padding: 10,
        borderRadius: 30,
        position: 'absolute',
        left: 51,
        top: 443,
    },
    input: {
        color: '#FFFFFF',
        padding: 15,
        paddingBottom: 25,
      },
})