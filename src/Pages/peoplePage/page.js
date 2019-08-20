import React, {useState, useEffect} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';


export default function Page({ navigation }) {
  const [results, setResults] = useState({});

  useEffect( () => {
    async function loadPage() {
      const response = await fetch(`${navigation.state.params.results.url}`);
    
      const data = await response.json();

      setResults(data);
    }
    
    loadPage();
  }, [])
  
  return(
  <ScrollView style={styles.Container}>
    <Text style={styles.Title}>Nome:</Text>
      <Text style={styles.Results}>{results.name}</Text>
      
    <Text style={styles.Title}>Altura: </Text>
      <Text style={styles.Results}>{results.height}</Text>
      
    <Text style={styles.Title}>Peso:</Text>
      <Text style={styles.Results}>{results.mass}</Text>

    <Text style={styles.Title}>Cor do cabelo:</Text>
      <Text style={styles.Results}>{results.hair_color}</Text>

    <Text style={styles.Title}>Cor de pele:</Text>
      <Text style={styles.Results}>{results.skin_color}</Text>

    <Text style={styles.Title}>Cor dos olhos:</Text>
      <Text style={styles.Results}>{results.eye_color}</Text>

    <Text style={styles.Title}>Data de nascimento:</Text>
      <Text style={styles.Results}>{results.birth_year}</Text>

    <Text style={styles.Title}>Gênero:</Text>
      <Text style={styles.Results}>{results.gender}</Text>

    <Text style={styles.Title}>Terra Natal:</Text>
      <Text style={styles.Results}>{results.homeworld}</Text>

    <Text style={styles.Title}>Filmes:</Text>
      <Text style={styles.Results}>{results.films}</Text>

    <Text style={styles.Title}>Espécie:</Text>
      <Text style={styles.Results}>{results.species}</Text>

    <Text style={styles.Title}>Veículo:</Text>
      <Text style={styles.Results}>{results.vehicles}</Text>

    <Text style={styles.Title}>Nave:</Text>
      <Text style={styles.Results}>{results.starships}</Text>

    <Text style={styles.Title}>Criado em:</Text>
      <Text style={styles.Results}>{results.created}</Text>

    <Text style={styles.Title}>Editado em:</Text>
      <Text style={styles.Results}>{results.edited}</Text>

  </ScrollView>
  );
}


const styles = StyleSheet.create({
  Container:{
    padding: 5,
  },

  Title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7881D6'
  },

  Results: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 20,
    borderColor: '#656DB5',
    color: '#686e73',
  }
});


Page.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.state.params.results.name,
  });