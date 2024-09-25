import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Sreen4_a from './src/Screen4_a';
import Sreen4_b from './src/Screen4_b';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Sreen4_a />

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
