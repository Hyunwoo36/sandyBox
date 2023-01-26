import { StyleSheet, Text , View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { auth } from '../src/firebase/config.js';

export default MainPage = ({navigation}) => {

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("FirstPage")
        })
        .catch(error => alert(error.message))
    };

    return (
        <View style = {styles.container} >
            <View style = {styles.logoutContainer}>
                <Text>user Email: {auth.currentUser?.email}</Text>
                <TouchableOpacity
                    onPress={handleSignOut}
                >
                    <Text style={styles.buttonText}>Sign out</Text>
                </TouchableOpacity>
            </View>
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
    logoutContainer: {
        position: 'absolute',
        width: 89,
        height: 58,
        left: 267,
        top: 34,
        backgroundColor: '#D9D9D9',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Arial Hebrew',
        fontSize: 13,
        fontWeight: 'light',
    }

});
