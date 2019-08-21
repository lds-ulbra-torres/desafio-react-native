import React, { useEffect, useState, Component } from 'react';

import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import styles from './styles/peopleStyles';
import api from '../services/api';

export default function App({ navigation }) {
  const [ people, setPeople ] = useState([]);
  const [ nav, setNav ] = useState([]);
  let [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPeople() {
      setPeople([]);
      const response = await api.get(`people/?page=${page}`);      

      const { results } = response.data
      setNav(response.data);
      setPeople(results);
    }
    loadPeople();
  }, [page]);

  return (
    <ScrollView style={ styles.scroll }>
      <SafeAreaView style={ styles.container }>
        <Text style={ styles.title }>Selecione o Personagem:</Text>

        {people.map((person, index) => (
          <TouchableOpacity style={ styles.button } onPress={ () => navigation.navigate('Person', { url: person.url }) } key={ index + 1 }>

            <Text style={ styles.textButton }>{ person.name }</Text>

          </TouchableOpacity>
        ))}

        <View style= { styles.buttonContainer }>
          {
            nav.previous != null 
            ? <TouchableOpacity style= { styles.navButton } onPress= {() => setPage(page-1) }>
                <Text style= { styles.navText }>Pagina Anterior</Text>
              </TouchableOpacity>
            : <View/>
          }          

          {
            nav.next != null 
            ? <TouchableOpacity style= { styles.navButton } onPress= {() => setPage(page+1) }>
                <Text style= { styles.navText }>Proxima Pagina</Text>
              </TouchableOpacity>
            : <View/>
          }

        </View>


        <Text style= { styles.textPage }>Pagina {page}</Text>

        {people.length === 0 &&
          <View style={styles.containerActivity}>
            <ActivityIndicator size= {50} color= 'white' />
            <Text style= { styles.textActivity }>Carregando...</Text>
          </View>
        }
      </SafeAreaView>
    </ScrollView>
  );
};