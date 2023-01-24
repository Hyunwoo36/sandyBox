import { StyleSheet, Text , View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default MainPage = ({navigation}) => {
    return (
        <View style = {styles.container} >
            <View style = {styles.container_top}>
                <TouchableOpacity onPress = {() => {navigation.navigate('WhereToPage')}} >
                    <Text style = {styles.textOne}>Where To?</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.container_bottom}>
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
    container_top: {
        flex:1,
        backgroundColor: 'rgba(64, 135, 110, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_bottom: {
        flex:1,
        backgroundColor: 'rgba(236, 105, 45, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOne: {
        fontFamily: 'Arial Hebrew',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    textSec: {
        fontFamily: 'Arial Hebrew',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
