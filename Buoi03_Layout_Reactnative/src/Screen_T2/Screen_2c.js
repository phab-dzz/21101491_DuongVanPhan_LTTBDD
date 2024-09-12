import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Screen07() {

    const [password, setPassword] = useState('');
    function generatePass() {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';

        for (let i = 1; i <= 8; i++) {
            let char = Math.floor(Math.random()
                * str.length + 1);

            pass += str.charAt(char)
        }

        return pass;
    }
    const handleGenerate = () => {
        setPassword(generatePass());
    }

    return (
        <View style={{ flex: 100, backgroundColor: '#23235B' }}>
            <View style={{ flex: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
                <View style={{ flex: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>PASSWORD{'\n'} GENERATOR</Text>
                </View>
                <TextInput
                    style={{ width: '80%', height: 50, backgroundColor: '#151537', color: 'white', fontSize: 20 }}
                    value={password}
                    placeholderTextColor="#d3d3d3"
                    multiline
                    secureTextEntry={true}
                />



            </View>
            <View style={{ flex: 40, width: '100%', alignItems: 'center', gap: 20 }}>

                <View style={styles.text_row}>
                    <Text style={styles.text}>Password length</Text>
                    <TextInput style={{ backgroundColor: 'white', width: 100, color: 'black' }}
                        value={password.length.toString()}
                    />

                </View>
                <View style={styles.text_row}>
                    <Text style={styles.text} >Include lower case letters</Text>
                    <Checkbox
                        style={styles.Checkbox}
                        value={true}
                    />

                </View>
                <View style={styles.text_row}>
                    <Text style={styles.text}>Include uppercase letters</Text>
                    <Checkbox
                        style={styles.Checkbox}
                    />

                </View>
                <View style={styles.text_row}>
                    <Text style={styles.text}>Include number</Text>
                    <Checkbox
                        style={styles.Checkbox}
                    />

                </View>
                <View style={styles.text_row}>
                    <Text style={styles.text}>Include special symbol</Text>
                    <Checkbox
                        style={styles.Checkbox}
                    />

                </View>
            </View>
            <View style={{ flex: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleGenerate}
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
        width: '80%',
        alignItems: 'center',
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#3B3B98',


    },
    text_row: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    Checkbox: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        marginRight: 8,
    }
});

export default Screen07;