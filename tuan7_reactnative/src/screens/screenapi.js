import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Alert, Pressable, TextInput } from 'react-native';
import axios from 'axios';
export default function screenapi() {
    const showUserApi = "https://66fc8f50c3a184a84d174f6d.mockapi.io/datauser";
    const [name, setName] = useState('');
    const [user, setUser] = useState([]);
    const [id, setId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const getUsers = () => {
      axios
        .get(showUserApi)
        .then((res) => {
          setUser(res.data);
  
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const addUser = () => {
      const newUser = {
        name
      }
  
      if (newUser.name === '') {
        Alert.alert('Lỗi', 'Vui lòng nhập tên người dùng.');
        return;
      }
      axios
        .post(showUserApi, newUser)
        .then((res) => {
          setUser((prevUsers) => [...prevUsers, res.data]);
          Alert.alert('Thành công', 'Người dùng đã được thêm!');
        })
        .catch((err) => {
          console.log(err);
          Alert.alert('Lỗi', 'Có lỗi xảy ra khi thêm người dùng.');
        });
    };
    const editUser = (user) => {
      setName(user.name);
      setId(user.id);
    }
    const updateUser = () => {
  
      axios
        .put(`${showUserApi}/${id}`, { name })
        .then((res) => {
          setUser((prevUsers) =>
            prevUsers.map((user) => (user.id === id ? res.data : user))
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const deleteUser = (userId) => {
      axios
        .delete(`${showUserApi}/${userId}`)
        .then(() => {
          setUser((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const handleReset = () => {
  
      setUser(null);
      getUsers();
    };
    useEffect(() => {
      getUsers();
  
    }, []);
  
  return (
    <View style={styles.container}>
      <View style={{ flex: 40, width: '100%', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <TextInput style={{ borderWidth: 1, width: 200, height: 30, borderRadius: 10 }} placeholder="Nhập tên user" value={name}
          onChangeText={(text) => setName(text)}
        />


        <TouchableOpacity style={styles.button}
          onPress={addUser}>
          <Text style={{ color: '#FFF', textAlign: 'center' }}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}

          onPress={updateUser}>
          <Text style={{ color: '#FFF', textAlign: 'center' }}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: '#FFF', textAlign: 'center' }}>delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={handleReset}>
          <Text style={{ color: '#FFF', textAlign: 'center' }}>reset</Text>
        </TouchableOpacity>

      </View>
      <View style={{ flex: 60, width: '100%' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
          Hiển thị danh sách user
        </Text>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>Error loading users</Text>
        ) : (
          <FlatList
            data={user}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ borderWidth: 1, width: '100%', flexDirection: 'row', height: 45, gap: 10, justifyContent: 'space-between' }}>
                <View>  <Text>{item.id}</Text>
                  <Text>{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.buttonsub}
                    onPress={() => deleteUser(item.id)}>
                    <Text style={{ color: '#FFF', textAlign: 'center' }}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonsub}

                    onPress={() => editUser(item)}>
                    <Text style={{ color: '#FFF', textAlign: 'center' }}>Edit</Text>
                  </TouchableOpacity>
                </View>


              </View>
            )}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 100,
  
  
    },
    button: {
      backgroundColor: 'blue',
      width: 200,
      height: 35,
      borderRadius: 5,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
    , buttonsub: {
      backgroundColor: 'green',
      width: 50,
      height: 35,
      borderRadius: 5,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
