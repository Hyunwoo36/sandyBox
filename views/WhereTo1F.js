import { StyleSheet, Text , TextInput, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const pbvImg = require('../assets/pbvModel.png');
const mapImg = require('../assets/mapImg.png');

export default WhereTo1F = ({ navigation }) => {

    const [firstFive, setFirstFive] = useState(true);
    const [secondFive, setSecondFive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFirstFive(false);
            setSecondFive(true);
            // create a circle, you are here text, arrived address and position accordingly
            // navigation.navigate("");
        }, 5000); 
    });
    
    return (
        <View style = {styles.container}>
            <Image source = {mapImg} style={styles.mapImg}/>
            <Text>Estimated time of arrival: 8 min</Text>
            <Image source = {pbvImg} style = {styles.pbvImg}/>
            <View style = {styles.feedbackContainer}>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    mapImg: {
        position: 'absolute',
        width: 320,
        height: 177,
        left: 35,
        top: 159,
    },
    pbvImg: {
        position: 'absolute',
        width: 347,
        height: 270,
        left: 22,
        top: 361,

    },

    
});