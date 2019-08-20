import React, { useState, useEffect } from 'react';
import { View, FlatList, StatusBar, Button, StyleSheet } from 'react-native';

import { Peoples, Name} from './styles';

export default function App( { navigation }) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  async function loadPage(pageNumber = page){
    if (total && pageNumber > total) return;
    
    const response = await fetch(`https://swapi.co/api/people/?page=${pageNumber}`);
    
    const data = await response.json();
    
    const totalResults = response.headers.get('X-Total-Count');

    setTotal(Math.floor(totalResults / 10));
    setResults([... results, ... data.results]);
    setPage(pageNumber + 1);
  }

  
  useEffect ( () => {
    loadPage();
  }, []);
  
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor='#333332'></StatusBar>
      <FlatList
        contentContainerStyle={styles.list} 
        data={results}
        keyExtractor={ item =>  item.name}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.2}
        renderItem={ ({ item }) => (
          <Peoples>
            
            <Name style={{ textAlign: 'center'}}>{item.name}</Name>
                  
            <Button
              onPress={ () => {
                navigation.navigate("peoplePage", {results: item});
              }}
              title="Mais Informações"
              color= "#7881D6" 
            />
          </Peoples>
        )} 
      />
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc",
  },
  
  list: {
    padding: 20,
  },

});