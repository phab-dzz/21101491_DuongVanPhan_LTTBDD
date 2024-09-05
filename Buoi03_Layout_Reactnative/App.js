import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FirstScreens from './src/screens/firstscreens';
import Sreens02 from './src/screens/Screen02';
import Sreens03 from './src/screens/Screen03';
import Sreens04 from './src/screens/Screen04';
import Screen05 from './src/screens/Screen05';
import Screen06 from './src/screens/Screen06';
import Screen07 from './src/screens/Screen07';
import Screen08 from './src/screens/Screen08';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="hide" />
      <Screen08 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});