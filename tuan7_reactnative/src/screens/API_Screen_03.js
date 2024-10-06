import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView, Image } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function API_Screen_03({ route }) {
    const navigation = useNavigation();
    const { name = '' } = route.params || '';
    const [job, setJob] = useState('');
    const getItemsApi = "https://6701579eb52042b542d782e5.mockapi.io/foods";
    const [items, setItems] = useState([]);
    const addItems = async () => {
        if (job === '') {
            Alert.alert("không được để trống!!");
            return false;
        }
        try {
            const response = await axios.post(getItemsApi, { name: job });
            setItems((prevUsers) => [...prevUsers, response.data]);

            return true;
        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
            return false;
        }
    };

    const handleadd = async () => {
        const isAdded = await addItems();
        if (isAdded) {
            navigation.navigate('API_Screen_02', {
                name: name
            });
        }
    };





    return (

        <View style={{ flex: 100, width: '100%', marginTop: 15 }}>
            <View style={{ flex: 40, width: '100%' }}>
                <View style={{ flex: 30, width: '100%', flexDirection: 'row', alignItems: 'center' }}>

                    <Image source={require('../../img/avatar.png')} style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 20 }} />

                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 'bolf' }}> Hi {name}</Text>
                        <Text style={{ fontSize: 15, color: '#000' }}>Have agrate day a head</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ marginLeft: 10 }}

                    >
                        <Ionicons name="arrow-back" size={24} style={{ marginLeft: 100 }} />
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 70, width: '100%', alignItems: 'center', gap: 60 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30 }}>ADD YOUR JOB</Text>
                    <TouchableOpacity style={{ width: '90%', borderWidth: 1, borderColor: '#000', height: 45, flexDirection: 'row', borderRadius: 10, alignItems: 'center', gap: 10 }}>

                        <Image source={require('../../img/sach.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                        <TextInput placeholder="input your job"
                            onChangeText={(text) => setJob(text)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 180, height: 50, backgroundColor: '#00BDD6', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}

                        onPress={handleadd}
                    >
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }}>FINISH</Text>
                        <Ionicons name='arrow-forward' size={20} color={'#fff'} />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{ flex: 60, alignItems: 'center', width: '100%', marginTop: 10, justifyContent: 'center' }}>
                <Image source={require('../../img/anh.png')} style={{ height: 150, width: 150 }} />
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