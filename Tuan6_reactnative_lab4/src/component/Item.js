import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
function Item({ item }) {
    return (
        <View style={styles.container}>
            <Image source={item.image} style={{ width: 75, height: 75 }} />
            <View>
                <Text style={{ fontSize: 20 }}>{item.title}</Text>
                <Text style={{ fontSize: 18, color: 'red' }}>Shop: {item.shop}</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: 'red',
                height: 40,
                width: 80,
                justifyContent: 'center',
                Item: 'center',
            }}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Chat</Text>
            </TouchableOpacity>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',

    },
});
export default Item;