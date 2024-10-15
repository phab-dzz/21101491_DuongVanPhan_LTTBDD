import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function master_portrait() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  const a = new Array(6).fill(0)

  const getItemsApi = "https://6701579eb52042b542d782e5.mockapi.io/foods";
  useEffect(() => {
    getapi();
  }, [])
  const getapi = async () => {
    try {
      const res = await axios.get(getItemsApi);
      setItems(res.data);
    }
    catch (error) {
      console.error(error);
    }
  };


  const handlenaviate = (component) => {
    navigation.navigate('detail_portrait', {
      item: component
    });
  }
  const Donut = ({ item }) => {
    const images = {
      'donut_red.png': require('../../../img/donut/donut_red.png'),
      'donut_yellow.png': require('../../../img/donut/donut_yellow.png'),
      'tasty_donut.png': require('../../../img/donut/tasty_donut.png'),
      'tasty_donut1.png': require('../../../img/donut/tasty_donut1.png'),

    };
    const path = images[item.url];

    return (
      <TouchableOpacity
        style={styles.donutContainer}
        onPress={() => handlenaviate(item)}
      >
        <Image source={path} style={styles.donutImg} />
        <View style={{ marginTop: 10, marginLeft: 10, gap: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>
            {item.title || ''}

          </Text>
          <Text>
            {item.content || ''}
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
            {item.price || ''}
          </Text>
        </View>
        <Image source={require('../../../img/plus_button.png')} style={styles.donutPlush} />

      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 25, width: '95%' }}>
          <Text>    Welcome, jala!  </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Choice you Best food
          </Text>
          <View style={{ flex: 40, width: '95%' }}>
            <TouchableOpacity
              style={{
                width: '100%', height: 46, borderWidth: 1, backgroundColor: '#fff', marginTop: 20
              }}
            >
              <TextInput placeholder={'Search food'} />
            </TouchableOpacity>
          </View>


          <View style={{ flex: 30, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <TouchableOpacity
              style={styles.button}

              onPress={() => getapi()}
            >
              <Text style={{ fontWeight: 'bold' }}> Donut   </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ fontWeight: 'bold' }}> Pink Donut </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={{ fontWeight: 'bold' }}>  Floating </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={items}
          renderItem={({ item }) => <Donut item={item} />}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#fff',
    width: '100%'
  },

  donutContainer: {
    width: 350,
    height: 115,
    backgroundColor: '#F4DDDD',
    borderRadius: 10,
    flexDirection: 'row',

  },
  donutImg: {
    width: 110,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10
  },
  donutPlush:
  {
    height: 45, width: 45,
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  header: {
    flex: 30,
    marginTop: 35,
    width: '100%',
    alignItems: 'center'
  },
  body: {
    flex: 75,
    alignItems: 'center',
    width: '100%',
    gap: 10
  },
  button:
  {
    width: 100, height: 35, borderWidth: 1, borderColor: '#000', borderRadius: 10,
    justifyContent: 'center', alignItems: 'center'
  }
});