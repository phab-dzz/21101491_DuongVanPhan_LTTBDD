import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView,Image ,ScrollView} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function detail_portrait({route}) {
  const {item}=route.params||{};
  const price=item.price.toFixed(2);
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const[items,setItems]= useState([]);
    const a= new Array(6).fill(0)
 
    const handlenaviate = () => {
       
        navigation.navigate('master_portrait');
    }
   
    
    return (
        <SafeAreaView style={styles.container}>
        <View style={{flex:60,width:'100%',alignItems:'center',marginTop:30}}>
           <View style={{flex:75,width:'100%',
      justifyContent:'center',alignItems:'center'
      }}>
       <Image source={require('../../../img/donut/donut_yellow.png') }style={{width:230,height:230}} />
      </View>
      <View style={{flex:25,width:'90%'}}>
      <Text style={{fontWeight:'bold',fontSize:22}}>
      Pink Donut
      </Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text>
     {item.title||''}
      </Text>
      <Text style={{fontWeight:'bold',fontSize:20}}>
      ${price}
      </Text>
      </View>
      </View>
       
        </View>
        <View
         style={{flex:40,width:'100%',alignItems:'center'}}>

        <View style={{flex:20,flexDirection:'row',justifyContent:'space-between',width:'90%',alignItems:'center'}}>
        <View>    
         <Ionicons name="time-outline" size={20} color="#000"/>  
        <Text style={{fontWeight:'bold'}}>
        30 min
        </Text>
        </View>
        <View style={{width:100,height:15,flexDirection:'row',gap:10}}>
          <Pressable style={{height:20,width:20,backgroundColor:'#F1B000',justifyContent:'center',alignItems:'center',borderRadius:5}}>
        <Ionicons name="add-outline" size={15}  color="#fff"/>
           </Pressable>
        <Text>
        1
        </Text>
         <Pressable style={{height:20,width:20,backgroundColor:'#F1B000',justifyContent:'center',alignItems:'center',borderRadius:5}}>
        <Ionicons name="remove-outline" size={15} color="#fff" />
           </Pressable>
        </View>
        </View>
         <View style={{flex:40,}}>
         <Text style={{fontWeight:'bold' , fontSize:20}}>
         Restaurants info
         </Text>
         <Text>   Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
        </View>
         <View style={{flex:30,width:'100%',alignItems:'center',justifyContent:'center'}}>
         <Pressable 
         style={{
           width:'90%',
           height:50,
           backgroundColor:'#F1B000'
           ,borderRadius:10,
           justifyContent:'center'
           ,alignItems:'center'
         }}
         onPress={handlenaviate}
         >
         <Text style={{fontWeight:'bold',fontSize:22,color:'#fff'}}>

         Add to cart
         </Text>
         </Pressable>
        </View>

        </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 100,
   backgroundColor:'#fff',
        width:'100%',
    },
    header:{
      flex:30,  
      width:'100%', 
      alignItems:'center'
    },
    body:{
    flex:75,
    alignItems:'center',
    width:'100%',
    gap:10
    },
    button: 
       {
        width:100,
         height:35,
         borderWidth:1,
         borderColor:'#000',
         borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
       }
});