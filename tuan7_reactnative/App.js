// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView } from 'react-native';
import axios from 'axios';
import API_Screen_01 from './src/screens/API_Screen_01';
import API_Screen_02 from './src/screens/API_Screen_02';
import detail_portrait from './src/screens/part2/detail_portrait';
import master_portrait from './src/screens/part2/master_portrait';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import API_Screen_03 from './src/screens/API_Screen_03';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      
        screenOptions={{
          headerShown: false,
          //  headerTitleAlign: 'center', 
          animation: 'slide_from_left' // Hiệu ứng chuyển cảnh
        }}
      >
      
        <Stack.Screen name="detail_portrait" component={detail_portrait} />
        <Stack.Screen name="detail_portrait" component={detail_portrait} />
        <Stack.Screen name="API_Screen_01" component={API_Screen_01} />
        <Stack.Screen name="API_Screen_02" component={API_Screen_02} />
        <Stack.Screen name="API_Screen_03" component={API_Screen_03} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <API_Screen_03 />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,


  },
  button: {
    backgroundColor: 'blue',
    width: 200,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
  , buttonsub: {
    backgroundColor: 'green',
    width: 50,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});