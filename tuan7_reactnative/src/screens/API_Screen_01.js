import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function API_Screen_01() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const handlenaviate = () => {
        if (name === '') {
            Alert.alert('Nhập tên!!!');
            return;
        }
        navigation.navigate('API_Screen_02', {
            name: name
        });
    }
    return (
        <View style={{ flex: 100, width: '100%' }}>
            <View style={{ flex: 55, width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#8353E2' }}>MANAGE YOUR</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#8353E2' }}>
                    TASK
                </Text>

            </View>
            <View style={{ flex: 20, width: '100%', alignItems: 'center' }}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="mail-outline" size={24} style={{ marginLeft: 10 }} />
                    <TextInput placeholder="Enter your name"
                        value={name}
                        onChangeText={(text) => setName(text)} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 25, width: '100%', justifyContent: 'center', alignItems: 'center' }}
            >
                <TouchableOpacity style={styles.buttonsub}
                    onPress={handlenaviate}
                >
                    <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 20, }}>GET STARTED</Text>
                    <Ionicons name="arrow-forward-outline" size={22} color="white" />
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