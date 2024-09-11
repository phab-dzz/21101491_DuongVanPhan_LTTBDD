import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Screen07() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [showPassword, setshowPassword] = useState(false);
    function showAlert() {
        if (email.length === 0 || password.length === 0) {
            Alert.alert('email hoặc password chưa được nhập');
        }
        else
            Alert.alert(`Login Success`);
    }
    const toggleShowPassword = () => {
        setshowPassword(!showPassword);
    }
    return (
        <View style={{ flex: 100, backgroundColor: '#23235B' }}>
            <View style={{ flex: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
                <View style={{ flex: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>PASSWORD{'\n'} GENERATOR</Text>
                </View>
                <TextInput
                    style={{ width: '80%', height: 50, backgroundColor: '#151537' }}

                    placeholderTextColor="#d3d3d3"
                    multiline
                    secureTextEntry={true}
                />



            </View>
            <View style={{ flex: 40, width: '100%', alignItems: 'center', gap: 20 }}>

                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Password length</Text>
                    <TextInput style={{ backgroundColor: 'white', width: 100 }} />

                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }} >Include lower case letters</Text>
                    <Checkbox
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor: 'white',
                            marginRight: 8,
                        }}
                        value={true}
                    />

                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Include uppercase letters</Text>
                    <Checkbox
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor: 'white',
                            marginRight: 8,
                        }}
                    />

                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Include number</Text>
                    <Checkbox
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor: 'white',
                            marginRight: 8,
                        }}
                    />

                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Include special symbol</Text>
                    <Checkbox
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor: 'white',
                            marginRight: 8,
                        }}
                    />

                </View>
            </View>
            <View style={{ flex: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{
                        width: '80%',
                        alignItems: 'center',
                        height: 60,
                        justifyContent: 'center',
                        backgroundColor: '#3B3B98',

                    }}
                    onPress={() => alert('Password generated')}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}
                    >
                        GENERATE PASSWORD
                    </Text>
                </TouchableOpacity>


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
    button: {
        width: '90%',
        alignItems: 'center',
        height: 55,
        justifyContent: 'center',
        backgroundColor: '#000',
        marginTop: 30,

    }
});

export default Screen07;