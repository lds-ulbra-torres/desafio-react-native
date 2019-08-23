import React, { useEffect, useState } from 'react';

import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from 'react-native';

import styles from './styles/peopleStyles';
import api from '../services/api';

export default function PeopleList({ navigation }) {
  const [ people, setPeople ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ loading, setLoading ] = useState( false );
  const [ end, setEnd ] = useState( false );

  async function loadPeople() {
    if( loading ) return;
    if( end ) return;

    setLoading( true );

    const response = await api.get(`people/?page=${page}`);      
    const { results } = response.data;

    setPeople([ ...people, ...results ]);

    setPage(page + 1);

    setLoading( false );
    
    !response.data.next && setEnd( true );
    
  }

  useEffect(() => {
    loadPeople();
  }, []);

  return (
    <SafeAreaView style={ styles.container }>

      <View style= { styles.content }>

        <Text style={ styles.title }>Selecione o Personagem:</Text>

        <FlatList 
          style= { styles.flatList }
          data= { people }
          onEndReached={() => loadPeople()}
          onEndReachedThreshold={0.2}
          keyExtractor= { item => item.url }
          renderItem = {({ item }) =>(

              <TouchableOpacity style={ styles.button } onPress={ () => navigation.navigate('Person', { url: item.url }) }>
                <Text style={ styles.textButton }>{ item.name }</Text> 
              </TouchableOpacity>    

            )}
          ListFooterComponent= { () => (

              loading
              ?
                <View style= { styles.loadFooter }>

                  <ActivityIndicator size= 'large' color= 'white'/>
                  <Text style= { styles.textFooter }>Carregando...</Text>

                </View>
              :
                end &&
                  <Text style= { styles.textFooter }>Fim!</Text>

            )}
        />
      </View>

      {people.length === 0 &&
        <View style={styles.containerActivity}>

          <ActivityIndicator size= {50} color= 'white' />
          <Text style= { styles.textActivity }>Carregando...</Text>

        </View>
      }

    </SafeAreaView>
  );
};