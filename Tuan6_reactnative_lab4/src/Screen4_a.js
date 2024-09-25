import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Item from './component/Item';
const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu',
    image: require('../img/ca_nau_lau.png'),
    shop: 'Devang'
  },

  {
    id: '2',
    title: '1KG GÀ BƠ TỎI',
    image: require('../img/ga_bo_toi.png'),
    shop: 'LTD Food'
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    image: require('../img/xa_can_cau.png'),
    shop: 'Thế giới đồ chơi'
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hinh',
    image: require('../img/do_choi_dang_mo_hinh.png'),
    shop: 'Thế giới đồ chơi'
  }, {
    id: '5',
    title: 'Lãnh đạo đơn giản',
    image: require('../img/lanh_dao_gian_don.png'),
    shop: 'Minh Long Book'
  }, {
    id: '6',
    title: 'Hiểu lòng trẻ em',
    image: require('../img/hieu_long_con_tre.png'),
    shop: 'Minh Long Book'
  }, {
    id: '7',
    title: 'Trump nha lanh dao',
    image: require('../img/trump.png'),
    shop: 'bao thanh nien'
  },
];

function Sreen4_a() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.Header}>
        <Ionicons name="arrow-back-outline" size={32} color={'#fff'} />
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Chat</Text>
        <Ionicons name="cart-outline" size={32} color={'#fff'} />
        {/* <Text>Phan dz</Text> */}
      </View>
      <View style={styles.Text}>
        <Text style={{ color: '#000' }}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại {'\n'}chat với shop!</Text>
      </View>
      <View style={{ height: 540 }}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}

          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: isHovered ? '#fff' : '#fff'
              }}
              onPressIn={() => setIsHovered(true)}
              onPressOut={() => setIsHovered(false)}
            >
              <Item item={item} />
            </TouchableOpacity>
          )
          }


        />
      </View>


      <View style={{ width: '100%', backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: "space-around", height: 50, alignItems: 'center' }}>
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
  Header: {
    backgroundColor: '#1BA9FF', width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50
  },
  Text: { borderBottomWidth: 1, borderBottomColor: "#d1bcbc", backgroundColor: '#bccbd4', width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50 }
});
export default Sreen4_a;