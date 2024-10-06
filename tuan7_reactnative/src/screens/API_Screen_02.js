import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView, Image } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function API_Screen_02({ route }) {
    const navigation = useNavigation();
    const { name } = route.params || '';
    const getItemsApi = "https://6701579eb52042b542d782e5.mockapi.io/foods";
    const [items, setItems] = useState([]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            getItems();
        }, 1000);


        return () => clearInterval(intervalId);

    }, []);
    const getItems = async () => {
        try {
            const response = await axios.get(getItemsApi);

            setItems(response.data);

        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
        }
    };
    const navigateAPI3 = () => {
        navigation.navigate('API_Screen_03', {
            name: name
        })
    }

    const Itemsbox = ({ items }) => {
        return (
            <TouchableOpacity style={{ height: 50, width: '90%', borderRadius: 20, backgroundColor: '#DEE1E62B', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Image source={require('../../img/tick.png')} style={{ width: 25, height: 25 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{items.name || ''}</Text>
                </View>
                <Image source={require('../../img/pen.png')} style={{ width: 25, height: 25, marginRight: 10 }} />
            </TouchableOpacity>
        );
    }


    return (

        <View style={{ flex: 100, width: '100%', marginTop: 0 }}>
            <View style={{ flex: 25, width: '100%' }}>
                <View style={{ flex: 60, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ marginLeft: 10 }}

                    >
                        <Ionicons name="arrow-back" size={24} style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                    <Image source={require('../../img/avatar.png')} style={{ width: 50, height: 50, marginLeft: 100, borderRadius: 50 }} />

                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 'bolf' }}> Hi {name || ''}</Text>
                        <Text style={{ fontSize: 15, color: '#000' }}>Have agrate day a head</Text>
                    </View>

                </View>
                <View style={{ flex: 40, width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: '90%', borderWidth: 1, borderColor: '#000', height: 45, flexDirection: 'row', borderRadius: 10, alignItems: 'center' }}>
                        <Ionicons name="search" size={24} style={{ marginLeft: 10 }} />
                        <TextInput placeholder="Search" />
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ flex: 55, width: '100%', alignItems: 'center' }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Itemsbox items={item} />
                    )}
                    contentContainerStyle={{ width: '100%', alignItems: 'center', gap: 10 }}
                />
                {/* <View style={{ width: '100%', height: 100, borderWidth: 1, borderColor: '#000' }}>
                    {items && items.length > 0 && <Itemsbox items={items[0]} />}
                </View> */}





            </View>
            <View style={{ flex: 20, alignItems: 'center', width: '100%', marginTop: 10 }}>
                <TouchableOpacity
                    style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#00BDD6', justifyContent: 'center', alignItems: 'center' }}
                    onPress={navigateAPI3}
                >
                    <Ionicons name="add" size={50} color="#fff" />
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 100,


    },
    button: {
        marginTop: 20,
        width: 335,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10

    }
    , buttonsub: {


        backgroundColor: '#00BDD6',
        flexDirection: 'row',
        width: 200,
        height: 45,
        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center',
    }
});