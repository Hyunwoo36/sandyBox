import { StyleSheet, Text , View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
// this page's color is not fully covered
export default SettingsPage = ({navigation}) => {
    return (
        <View style = {styles.container} >
           <View style = {styles.box1}>
                <Text style = {styles.text}>Ride history</Text>
           </View>
           <View style = {styles.box2}>
                <Text style = {styles.text} onPress = {() => {navigation.navigate("AdjustBubblePage")}}>Adjust Bubbles</Text>
           </View>
           <View style = {styles.box3}>
                <Text style = {styles.text}>Device Settings</Text>
           </View>
           <View style = {styles.box4}>
                <Text style = {styles.text}>Account</Text>
           </View>
           <View style = {styles.box5}> 
                <Text style = {styles.text}>Help</Text>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    box1: {
        position: 'absolute',
        width: 347,
        height: 100,
        left: 21,
        top: 70,
        borderRadius: 30,
        backgroundColor: 'rgba(236,105,45,0.3)',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    box2: {
        position: 'absolute',
        width: 347,
        height: 100,
        left: 21,
        top: 205,
        borderRadius: 30,
        backgroundColor: 'rgba(236,105,45,0.3)',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    box3: {
        position: 'absolute',
        width: 347,
        height: 100,
        left: 21,
        top: 340,
        borderRadius: 30,
        backgroundColor: 'rgba(236,105,45,0.3)',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    box4: {
        position: 'absolute',
        width: 347,
        height: 100,
        left: 21,
        top: 475,
        borderRadius: 30,
        backgroundColor: 'rgba(236,105,45,0.3)',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    box5: {
        position: 'absolute',
        width: 347,
        height: 100,
        left: 21,
        top: 610,
        borderRadius: 30,
        backgroundColor: 'rgba(236,105,45,0.3)',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    text: {
        fontFamily: 'Arial Hebrew',
        fontSize: 30,
        textAlign: 'left',
    }
});
