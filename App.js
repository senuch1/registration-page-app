import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, onPress } from 'react-native';
import { Icon } from '@rneui/themed';



export default function App() {


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const userInfo = {
      name,
      phone,
      email,
    };
    ('Result', { userInfo });
  };


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>HOMEWORK 1</Text>
        <Icon
          name='sc-telegram'
          type='evilicon'
          color='white'
          size={50}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        placeholder="Ваше имя"
        placeholderTextColor={'white'}
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPhone(text)}
        placeholder="Ваш телефон"
        placeholderTextColor={'white'}
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder="Ваша почта"
        placeholderTextColor={'white'}
        keyboardType="text"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text >Press Here</Text>
      </TouchableOpacity>
      <View>
        <Text>Информация:</Text>
        <Text>Имя: {name}</Text>
        <Text>Телефон: {phone}</Text>
        <Text>Почта: {email}</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66A5AD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
  },
  title: {
    color: 'white',
    fontSize: '24'
  },
  input: {
    height: 40,
    margin: 8,
    padding: 30,
    borderWidth: 1,
    borderColor: 'white',
  },
  button: {
    height: 80,
    width: 160,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    color: 'white',
    borderColor: 'white',
  }
});