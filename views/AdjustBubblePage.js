// this is the initial page when user enters Settings
import { StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default AdjustBubble = ({ navigation }) => {
  return (
    <View style = {styles.mainContainer}>
        <Text style = {styles.titleText}>Adjust Bubbles</Text>
        <View style = {styles.containerOne}>
            <Text>A</Text><Text>Home</Text><Text>img</Text>
        </View>

        <View style = {styles.containerTwo}>
            <Text>B</Text><Text>UCSD</Text>
        </View>

        <View style = {styles.containerThree}>
            <Text>C</Text><Text>hMart</Text>
        </View>

        <View style = {styles.containerFour}>
            <Text>D</Text><Text>Harry's home</Text>
        </View>

        <View style = {styles.containerFive}>
            <Text>E</Text><Text>Hospital</Text>
        </View>

        <View style = {styles.containerSix}>
            <Text>F</Text><Text>Pacific Beach</Text>
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
        backgroundColor: 'rgba(245,184,26,0.3)',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 20,
    },
    containerTwo: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 255,
        borderRadius: 20,
        backgroundColor: 'rgba(135,148,182,0.5)',
        flexDirection: 'row',
    },
    containerThree: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 352,
        borderRadius: 20,
        backgroundColor: 'rgba(244,165,129,0.5)',
        flexDirection: 'row',
    },
    containerFour: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 449,
        borderRadius: 20,
        backgroundColor: 'rgba(140,183,168,0.5)',
        flexDirection: 'row',

    },
    containerFive: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 546,
        borderRadius: 20,
        backgroundColor: 'rgba(166,219,249,0.6)',
        flexDirection: 'row',
    },
    containerSix: {
        position: 'absolute',
        width: 335,
        height: 82,
        left: 27,
        top: 643,
        borderRadius: 20,
        backgroundColor: 'rgba(251, 177, 234, 0.5)',
        flexDirection: 'row',
    },
    titleText: {
        position: 'absolute',
        fontFamily: 'Arial Hebrew',
        fontSize: 30,
        fontWeight: 'bold',
        left: 94,
        top: 69,
    },

});

