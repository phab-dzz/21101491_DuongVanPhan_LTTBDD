import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import DeviceItem from './component/DeviceItem';


const DATA = [
    {
        id: '1',
        title: 'Cáp chuyển từ Cổng USB sang PS2',
        image: require('../img/giac_chuyen.png'),
        gia: '69.900 đ',
        star: 4
    },

    {
        id: '2',
        title: 'Cáp chuyển từ Cổng USB sang PS2',
        image: require('../img/daynguon.png'),
        gia: '70.900 đ',
        star: 4
    },
    {
        id: '3',
        title: 'Cáp chuyển từ Cổng USB sang PS2',
        image: require('../img/dauchuyendoi.png'),
        gia: '69.900 đ',
        star: 3
    },
    {
        id: '4',
        title: 'Cáp chuyển từ Cổng USB sang PS2',
        image: require('../img/dauchuyendoi1.png'),
        gia: '69.900 đ',
        star: 4
    }, {
        id: '5',
        title: 'Cáp chuyển từ Cổng USB sang PS2',
        image: require('../img/carbusbtop.png'),
        gia: '69.900 đ',
        star: 3.5
    }, {
        id: '6',
        title: 'Cáp chuyển từ Cổng USB sang PS2',
        image: require('../img/daucam1.png'),
        gia: '69.900 đ',
        star: 4
    },
];

function Screen4_b() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <SafeAreaView style={styles.container}>


            <View style={{ backgroundColor: '#1BA9FF', width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50 }}>
                <Ionicons name="arrow-back-outline" size={32} color={'#fff'} />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#fff',
                        width: 180,
                        height: 35,
                        alignItems: 'center',
                        flexDirection: 'row', alignItems: 'center'
                    }}

                >
                    <Ionicons name="search-outline" size={30} color={'#000'} />
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Dây sạc usb</Text>
                </TouchableOpacity>
                <View>
                    <Ionicons name="cart-outline" size={32} color={'#fff'} />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>1</Text>
                    </View>
                </View>

                <Ionicons name="ellipsis-horizontal-outline" size={32} color={'#fff'} />
                {/* <Text>Phan dz</Text> */}
            </View>

            <View style={{ height: "90%", }}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                backgroundColor: isHovered ? '#fff' : '#fff',
                                margin: 10
                            }}
                            onPressIn={() => setIsHovered(true)}
                            onPressOut={() => setIsHovered(false)}
                        >
                            <DeviceItem item={item} />
                        </TouchableOpacity>



                    )
                    }


                />
            </View>


            <View style={styles.bottom}>
                <Ionicons name="list-outline" size={35} />
                <Ionicons name="home-outline" size={35} />
                <Ionicons name="return-up-back-outline" size={35} />
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: '#fff',

        width: '100%',

    },
    badge: {
        position: 'absolute',
        right: -10,
        top: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    bottom: {
        width: '100%', backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: "space-around", height: 50, alignItems: 'center', position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    }
});
export default Screen4_b;