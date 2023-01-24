import { StyleSheet, Text , Image, Pressable, TextInput, SafeAreaView, View, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';

export default MainPage = ({navigation}) => {
    return (
        <View style = {styles.container} >
            
            <View style = {{flex:1, backgroundColor: 'rgba(64, 135, 110, 0.7)'}}>
                <TouchableOpacity onPress = {() => {navigation.navigate('WhereToPage')}} >
                    <Text style = {styles.textOne}>Where To?</Text>
                </TouchableOpacity>
            </View>
            
            
            <View style = {{flex:1, backgroundColor: 'rgba(236, 105, 45, 0.7)'}}>
                <Text style = {styles.textSec}>Settings</Text>
            </View>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        padding: 5,
    },
    textOne: {
        fontFamily: 'Arial Hebrew',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        position: 'absolute',
        width: 145,
        height: 30,
        left: 122,
        top: 196,
    },
    textSec: {
        fontFamily: 'Arial Hebrew',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        position: 'absolute',
        width: 145,
        height: 30,
        left: 122,
        top: 196,
    },
})
