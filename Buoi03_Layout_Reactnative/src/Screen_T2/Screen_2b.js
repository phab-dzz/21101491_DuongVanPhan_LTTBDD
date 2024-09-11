import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';

function Screen_2b() {
    const star = new Array(5).fill(0);
    const [text, settext] = useState('')
    const showImage = () => {
        Alert.alert("Chọn ảnh upload!");
    }
    return (
        <View style={{ flex: 100, width: '100%' }}>
            <View style={{ flex: 20, width: '80%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Image source={require('../../assets/usb.png')} style={{ width: 75, height: 75, marginLeft: 65 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>
                    USB Bluetooth Music Receiver {'\n'}
                    HJX-001- Biến loa trưởng thành loa {'\n'}
                    bluetooth
                </Text>
            </View>
            <View style={{ flex: 80, width: '100%', }}>
                <View style={{ flex: 20, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Cực kỳ hài lòng</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        {star.map((item, index) => (
                            <Ionicons key={index} name="star" size={35} style={{ marginLeft: 20 }} color="yellow" />
                        ))}
                    </View>
                </View>
                <View style={{ flex: 60, width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ flex: 35, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={styles.Button_image}
                            onPress={showImage}
                        >
                            <Ionicons name="camera" size={50} />
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}> Thêm hình ảnh</Text>


                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 65 }}>
                        <View style={styles.container}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
                                placeholderTextColor="#d3d3d3"
                                multiline
                                value={text}
                                onChangeText={settext}
                            />
                            <Text style={styles.linkText}>https://meet.google.com/nsj-ojwi-xpp</Text>
                        </View>

                    </View>




                </View>
                <View style={{ flex: 20, width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity
                        style={styles.Button_submit}
                        onPress={() => Alert.alert('Cảm ơn bạn đã gửi đánh giá: \n' + text)}
                    >
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>Gửi</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    textInput: {
        flexDirection: 'row',
        width: '90%',
        height: 55,
        backgroundColor: '#f5df84',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f2d455',
        paddingHorizontal: 10,
        marginBottom: 30,

    },
    container: {
        width: '80%',
        margin: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,

    },
    textInput: {
        height: 150,

        fontSize: 20,
        color: '#000',
    },
    linkText: {
        marginTop: 10,
        fontSize: 14,
        color: 'black',
        textAlign: 'right',
    },
    Button_image: {
        borderWidth: 1,
        width: '80%',
        height: 70,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button_submit: {

        width: '80%',
        height: 50,
        borderWidth: 1,
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default Screen_2b;