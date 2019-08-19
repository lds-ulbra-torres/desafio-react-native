import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import styles from './styles/peopleStyles';
import api from '../services/api';


export default function App ( { navigation } ) {
  const [ people, setPeople ] = useState([]);

  useEffect(() => {
    async function loadPeople(){

      const response = await api.get('/people');
  
      const { results } = response.data
  
      setPeople(results);
      
    }

    loadPeople();
  }, []);

  return (
    <ScrollView>

      <SafeAreaView style={styles.container}>

        <Text style= { styles.title }>Selecione o Personagem:</Text>

        {people.map((person, index) => (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Person', {name: person.name})} key= {index+1}>

            <Text style={styles.textButton}>{person.name}</Text>

          </TouchableOpacity>
        ))}
      
      </SafeAreaView>

    </ScrollView>
  );
};
