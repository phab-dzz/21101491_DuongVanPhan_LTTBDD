import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Sreen4_a from './src/Screen4_a';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Sreen4_a />
      <StatusBar style="auto" />
    </SafeAreaView>
    // <View style={styles.container}>
    //     <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
