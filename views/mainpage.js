import { StyleSheet, Text , View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default MainPage = ({navigation}) => {
    return (
        <View style = {styles.container} >
            <View style = {styles.container_top}>
                
                <Text style = {styles.textOne} onPress={()=>{navigation.navigate('WhereToPage')}}>Where To?</Text>
                
            </View>
            <View style = {styles.container_bottom}>
                <Text style = {styles.textSec} onPress= {()=>{navigation.navigate('SettingsPage')}}>Settings</Text>
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
