import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground, Pressable} from 'react-native';


const backgroundImg = require('./assets/example1.png');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source = {backgroundImg} resizeMode = "cover" style={styles.image}>
      <Pressable style={styles.button} onPress={() => alert('Nuri JJANG!')}>
        <Text>Press this shit</Text>
      </Pressable>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40876E',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});


// image source can be called from Network in the form of uri