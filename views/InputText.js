import { StyleSheet, Text , Image, Pressable, TextInput, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';

import { AppButton } from './appButton.js';

export const InputText = ({ navigation }) => {

    const [text, onChangeText] = useState('Tap here to put your code!');

    return (
        <SafeAreaView style = {styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                value= {text}
            />
            
            <AppButton onPress = {() => {navigation.navigate('MainPage')}} style = {styles.button}/>
        
            
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