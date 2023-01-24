// this is the initial page when user enters Settings
import { StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default SettingsPage = ({ navigation }) => {
  return (
    <View style = {styles.mainContainer}>
        <View style = {styles.containerOne}>

        </View>

        <View style = {styles.containerTwo}>

        </View>

        <View style = {styles.containerThree}>

        </View>

        <View style = {styles.containerFour}>

        </View>

        <View style = {styles.containerFive}>

        </View>

        <View style = {styles.containerSix}>

        </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    containerOne: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 158,
        borderRadius: 20,
        backgroundColor: '#EDEBEB',
        borderWidth: 0.5,

    },
    containerTwo: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 255,
        borderRadius: 20,
        backgroundColor: '#EDEBEB',
        borderWidth: 0.5,

    },
    containerThree: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 352,
        borderRadius: 20,
        backgroundColor: '#EDEBEB',
        borderWidth: 0.5,

    },
    containerFour: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 449,
        borderRadius: 20,
        backgroundColor: '#EDEBEB',
        borderWidth: 0.5,

    },
    containerFive: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 546,
        borderRadius: 20,
        backgroundColor: '#EDEBEB',
        borderWidth: 0.5,

    },
    containerSix: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 643,
        borderRadius: 20,
        backgroundColor: '#EDEBEB',
        borderWidth: 0.5,

    },
});

