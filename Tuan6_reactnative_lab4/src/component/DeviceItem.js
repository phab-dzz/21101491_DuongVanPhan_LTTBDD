import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
function DeviceItem({ item }) {

    const maxStars = 5;
    return (
        <View style={styles.container}>
            <Image source={item.image} style={{ width: 155, height: 90 }} />
            <View style={styles.Viewmid} >
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {Array.from({ length: maxStars }).map((_, index) => {
                        const starIcon = index < item.star ? 'star' : 'star-outline';
                        return (
                            <Ionicons
                                key={index}
                                name={starIcon}
                                size={15}
                                color="#FFD700"
                                style={styles.star}
                            />
                        );
                    })}
                    <Text style={{ fontSize: 15, }}>(15)</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}> {item.gia}</Text>

                    <Text style={{ fontSize: 15, }}> -39%</Text>
                </View>
            </View>




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',

        width: 180,
        height: 200,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,

    },
    Viewmid: {
        width: '95%'


    },
    star: {
        marginHorizontal: 2,
    },
});
export default DeviceItem;