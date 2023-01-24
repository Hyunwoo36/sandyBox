import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text , ImageBackground, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from './views/MainPage.js';
import FirstPage from './views/FirstPage.js';
import WhereToMain from './views/WhereToMain.js';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} options = {{headerShown: false}}/>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="WhereToPage" component = {WhereToMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}