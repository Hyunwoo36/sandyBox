import { StyleSheet, Text , Image, Pressable, TextInput, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { AppButton } from './appButton.js';
import { MainPage } from './MainPage.js';

export const InputText = () => {

    const [text, onChangeText] = useState('Tap here to put your code!');
    const onPress = () => {
        alert('wow');
    };

    return (
        <SafeAreaView style = {styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                value= {text}
            />
            <AppButton onPress = {onPress} style = {styles.button}/>
            
            
            
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