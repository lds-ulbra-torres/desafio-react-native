/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import api from '../services/Api'

const App = ( { navigation } ) => {

  async function listPeoples(){
    const response = await api.get('/people');

    const { results } = response.data

    console.log(results);
    
    navigation.navigate('Pessoa');
  }

  return (
    <View style={styles.container}>
      <Text>Lista das peoples!!</Text>

      <TouchableOpacity style={styles.button} onPress={listPeoples}>
        <Text style={styles.textButton}>Apertaaa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  button:{
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textButton:{
    color: '#fff'
  }
});

export default App;
