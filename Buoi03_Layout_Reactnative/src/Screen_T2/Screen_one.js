import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';

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
        <View style={{ flex: 100, backgroundColor: '#FBCB00' }}>
            <View
                style={{
                    flex: 20,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 15 }}>LOGIN</Text>
            </View>
            <View
                style={{
                    flex: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >

                <View style={styles.textInput}>
                    <Ionicons name="person" size={30} color="#000" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'black'}
                        keyboardType='text'
                        style={{ marginLeft: 15 }}
                        value={email}
                        onChangeText={(text) => setemail(text)}
                    />
                </View>


                <View style={styles.textInput}>
                    <Ionicons name="lock-closed" size={30} color="#000" style={styles.icon} />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'black'}
                        keyboardType='password'
                        secureTextEntry={!showPassword}
                        style={{ marginLeft: 15 }}
                        value={password}
                        onChangeText={(text) => setpassword(text)}

                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={{ marginLeft: 200 }}>
                        <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={30} color="#000" />
                    </TouchableOpacity>

                    {/* <Image source={require('../../assets/eye.png')} style={{ marginLeft: 200 }} />
              */}

                </View>





            </View>
            <View style={{ flex: 45, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={showAlert}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}
                    >
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <View style={{ flex: 50, alignItems: 'center', fontWeight: 'bold', marginTop: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Forgot your password?</Text>

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