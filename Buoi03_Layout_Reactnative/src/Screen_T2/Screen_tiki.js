import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert, Button } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
function Screen_tiki() {
    const [count, setCount] = useState(1);
    const [money, setMoney] = useState(141800);

    const increment = () => {
        setMoney(money + 141800)
        setCount(count + 1);

    };
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        }).format(value);
    };
    const decrement = () => {


        setCount(count > 1 ? count - 1 : 1);
        setMoney(money > 141800 ? money - 141800 : 141800);

    };

    const discount = () => {
        let dis = 0.1 * money
        setMoney(money - dis)
        Alert.alert(`Áp dụng mã giảm giá 10% thành công! với tiền giảm là: ${formatCurrency(dis)}`)
    }
    return (
        <View style={{ flex: 100, backgroundColor: '#d1c9c9', marginTop: 25 }}>
            <View style={{ flex: 45, width: '100%', backgroundColor: '#fff' }}>
                <View style={{ flex: 70, flexDirection: 'row', }}>
                    <View style={{ flex: 40, }}>
                        <Image source={require('../../assets/book.png')} style={{ marginLeft: 15, width: 120, height: 150 }} />
                        <Text style={{
                            fontSize: 15, fontWeight: 'bold', marginLeft: 15,
                            marginTop: 10
                        }}>
                            Mã giảm giá đã lưu
                        </Text>
                    </View>
                    <View style={{ flex: 60, gap: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                            Nguyên hàm phân tích và ứng dụng
                            {'\n'}
                            Cung cấp bởi Tiki Trading
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
                            {formatCurrency(money)}
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray', textDecorationLine: 'line-through', }}>
                            141.000đ
                        </Text>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={styles.container_number}>
                                    <Button title="-" onPress={decrement} color='gray' />
                                    <Text style={styles.counterText}>{count}</Text>
                                    <Button title="+" onPress={increment} color='gray' />
                                </View>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'blue', marginRight: 10 }}>
                                    Mua sau
                                </Text>

                            </View>

                        </View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'blue' }}>
                            Xem tại đây
                        </Text>

                    </View>

                </View>
                <View style={{ flex: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <View style={styles.textdis}>
                        <Image source={require('../../assets/yellow_block.png')} style={{ width: 40, height: 20 }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
                            Mã giảm giá
                        </Text>


                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'blue', width: '30%', height: 60, alignItems: 'center',
                            justifyContent: 'center', marginRight: 10

                        }}
                        onPress={discount}
                    >
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>
                            Áp dụng
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ flex: 55, width: '100%', justifyContent: 'space-between' }}>
                <View>
                    <View style={{ height: 60, marginTop: 10, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 15, color: '#000' }}>
                            Bạn có phiếu quà tặng Tiki/Got it/Urbox?
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 15, color: 'blue' }}>
                            Nhập tại đây?
                        </Text>


                    </View>
                    <View style={{ height: 65, marginTop: 10, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 15, color: '#000' }}>
                            Tạm tính
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 15, color: 'red', marginRight: 10 }}>
                            141.800đ
                        </Text>


                    </View>
                </View>
                <View style={{ height: 130, marginTop: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 30 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'gray', marginLeft: 15, }}>

                            Thành Tiền
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 15, color: 'red', marginRight: 10 }}>
                            141.800đ
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'red', width: '92%', height: 50, alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => Alert.alert(`Đặt hàng thành công! với Tổng tiền là: ${formatCurrency(money)}`)}
                    >
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff' }}>
                            TIẾN HÀNH ĐẶT HÀNG
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container_number: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,


    },
    counterText: {
        fontSize: 20,
        marginHorizontal: 10,
    },
    textdis: {
        width: '60%', borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, height: 60, marginLeft: 15
    }
});
export default Screen_tiki;
