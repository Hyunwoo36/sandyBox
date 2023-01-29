import { StyleSheet, Text , TextInput, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const pbvImg = require('../assets/pbvModel.png');
const mapImg = require('../assets/mapImg.png');

export default WhereTo1F = ({ navigation }) => {

    useEffect(() => {
        // setTimeout(() => {
           
            // create a circle, you are here text, arrived address and position accordingly
        //     navigation.navigate("");
        // }, 5000); 
    });
    
    return (
        <View style = {styles.container}>
            <Image source = {mapImg} />
            <Text>Estimated time of arrival: 8 min</Text>
            <Image source = {pbvImg} />
            <View style = {styles.feedbackContainer}>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    
});