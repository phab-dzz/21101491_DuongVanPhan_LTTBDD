import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-web';
import Item from './component/Item';
const DATA = [
  {

    title: 'Ca nấu lẩu',
    image: require('../../img/ca_nau_lau.png'),
    shop: 'Devang'
  },
  // {
  //   title: '1KG GÀ BƠ TỎI',
  //   image: require('../../img/ga_bo_toi.png'),
  //   shop: 'LTD Food'
  // },
  // {
  //   title: 'Xe cần cẩu đa năng',
  //   image: require('../../img/xa_can_cau.png'),
  //   shop: 'Thế giới đồ chơi'
  // },
  // {
  //   title: 'Đồ chơi dạng mô hinh',
  //   image: require('../../img/do_choi_dang_mo_hinh.png'),
  //   shop: 'Thế giới đồ chơi'
  // }, {
  //   title: 'Lãnh đạo đơn giản',
  //   image: require('../../img/lanh_dao_gian_don.png'),
  //   shop: 'Minh Long Book'
  // }, {
  //   title: 'Hiểu lòng trẻ em',
  //   image: require('../../img/hieu_long_con_tre.png'),
  //   shop: 'Minh Long Book'
  // }, {
  //   title: 'Trump nha lanh dao',
  //   image: require('../../img/trump.png'),
  //   shop: 'bao thanh nien'
  // },
];
function Sreen4_a() {
  return (
    <View style={styles.container}>


      <View style={{ backgroundColor: '#1BA9FF', width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50 }}>
        <Ionicons name="arrow-back-outline" size={32} color={'#fff'} />
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Chat</Text>
        <Ionicons name="cart-outline" size={32} color={'#fff'} />
        {/* <Text>Phan dz</Text> */}
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "gray", backgroundColor: '#bccbd4', width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50 }}>
        <Text style={{ color: '#000' }}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại {'\n'}chat với shop!</Text>
      </View>
      <View style={{ backgroundColor: 'red', height: 600 }}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {

            // <TouchableOpacity style={{
            //   backgroundColor: 'red',
            //   height: 80,
            //   width: '100%',
            //   justifyContent: 'center',

            // }}
            // >
            {/* <Image source={item.image} style={{ width: 75, height: 75 }} /> */ }
            <Text style={{ fontSize: 20 }}>{item.title}</Text>
            // <Item item={item} />
          }
            // </TouchableOpacity>

          }


        />
      </View>


      <View style={{ width: '100%', backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: "space-around", height: 40 }}>
        <Ionicons name="list-outline" size={32} />
        <Ionicons name="home-outline" size={32} />
        <Ionicons name="return-up-back-outline" size={32} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#fff',

    width: '100%',

  },
});
export default Sreen4_a;