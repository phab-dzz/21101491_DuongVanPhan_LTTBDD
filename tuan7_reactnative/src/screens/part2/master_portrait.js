import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView,Image ,ScrollView} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function master_portrait() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const[items,setItems]= useState([]);
    const a= new Array(6).fill(0)

    const getItemsApi = "https://6701579eb52042b542d782e5.mockapi.io/foods";
      useEffect(()=>{
       getapi();
     },[]
   )
   const getapi= async ()=>{
     try{
       const res= await axios.get(getItemsApi);
  
       setItems(res.data);

     }
     catch(error){
       console.error(error);

     }
   };

 
    const handlenaviate = () => {
        if (name === '') {
            Alert.alert('Nhập tên!!!');
            return;
        }
        navigation.navigate('API_Screen_02', {
            name: name
        });
    }
    const Donut=({item})=>{
      return( 
        <TouchableOpacity
       style={{width:350,height:115, backgroundColor:'#F4DDDD',borderRadius:10,flexDirection:'row',
       }}
        >
        <Image  source={require('../../../img/donut/donut_red 1.png')}  style={{width:110,height:100,borderRadius:10,marginTop:10,marginLeft:10}}/>
        <View style={{marginTop:10,marginLeft:10,gap:10}}>
        <Text style={{fontWeight:'bold'}}>
        {item.title||''}

        </Text>
         <Text>
         {item.content||''}
        </Text>
         <Text style={{fontWeight:'bold'}}>
         {item.price||''}
        </Text>
        </View>
        <Image  source={require('../../../img/plus_button.png')} style={{height:45,width:45,position:'absolute',bottom:0,right:0}}/>

      </TouchableOpacity>
      );
    }
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <View style={{flex:25,width:'95%'}}>
        <Text>
        Welcome, jala!
        </Text>
        <Text style={{fontWeight:'bold',fontSize:20}}>
        Choice you Best food
        </Text>
        <View style={{flex:40,width:'90%'}}>
 <TouchableOpacity
        style={{width:266,height:46,borderWidth:1,backgroundColor:'#fff',marginTop:20
        }}
        >
        <TextInput  placeholder={'Search food'}/>
        </TouchableOpacity>
        </View>
       

        <View style={{flex:30,flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
  <TouchableOpacity
       style={styles.button}

       onPress={()=>getapi()}
       >
       <Text style={{fontWeight:'bold'}}>
       Donut
       </Text>
       </TouchableOpacity>
         <TouchableOpacity
       style={styles.button}
       >
       <Text style={{fontWeight:'bold'}}>
       Pink Donut
       </Text>
       </TouchableOpacity>
         <TouchableOpacity
       style={styles.button}
       >
       <Text style={{fontWeight:'bold'}}>
       Floating
       </Text>
       </TouchableOpacity>
        </View>
        </View>
        </View>
         <View style={styles.body}>
        <FlatList
          data={items}
         
         renderItem={({ item }) => <Donut item={item} />}

                        contentContainerStyle={{ gap:10}}    
             />
        </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 100,
   
        width:'100%'


    },
    header:{
      flex:30,
       
      marginTop:35,
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
width:100, height:35,borderWidth:1,borderColor:'#000',borderRadius:10,
justifyContent:'center',alignItems:'center'

       }
});