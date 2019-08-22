import React, { useEffect, useState }from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    ActivityIndicator
} from 'react-native';

import styles from './styles/personStyles';
import api from '../services/api';

export default function Person( { navigation } ) {
    const [person, setPerson] = useState([]);
    const [films, setFilms] = useState([]);
    const [species, setSpecies] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [starships, setStarships] = useState([]);

    const url =  navigation.getParam('url');

    useEffect(() => {
        async function loadPerson(){
            const response = await api.get(url);
            const { data } = response;
            
            setPerson(data);
            setFilms(data.films);    
            setSpecies(data.species);
            setVehicles(data.vehicles);        
            setStarships(data.starships);            
        }
        
        loadPerson();
    },[]);

    return(
        <SafeAreaView style= { styles.container }>
            <ScrollView style= { styles.scroll }>
                <View style= { styles.card }>
                    <View style= { styles.info }>
                        <Text style= { styles.name }>{ person.name }</Text>
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Altura: { person.height }cm</Text>
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Peso: { person.mass }Kg</Text>
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Cor do Cabelo: { person.hair_color }</Text>
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Cor da Roupa: { person.skin_color }</Text>
                    </View>

                    <View style= { styles.linha }></View>

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Cor do Olho: { person.eye_color }</Text>
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Ano de Nascimento: { person.birth_year }</Text>
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Genero: { person.gender }</Text>
                    </View>
                    
                    <View style= { styles.linha } />

                    <View style = { styles.info }>
                        <Text style= { styles.textInfo }>Planeta Natal: { person.homeworld }</Text>
                    </View>
                    
                    <View style= { styles.linha } />

                    <View style={ styles.info }>
                        {films.map((film, index) => (

                            <Text style={ styles.textInfo } key= {index}>Filme { index + 1 }: {film} </Text>
                        ))}
                    </View>
                    
                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                            {species.map((specie, index) => (

                                <Text style={ styles.textInfo } key= {index}>Specie { index+1 }: {specie}</Text>
                            ))}
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                            { vehicles.length === 0
                                ? <Text style= { styles.mensagemVazio }>Não Possúi Veículos</Text>
                                : (
                                    vehicles.map((vehicle, index) => (
                                        <Text style={ styles.textInfo } key= {index}>Vehicle { index+1 }: {vehicle}</Text>
                                    ))
                                )
                            }
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                            { starships.length === 0
                                ? <Text style= { styles.mensagemVazio }>Não Possúi Naves Estelares</Text>
                                : (
                                    starships.map((starship, index) => (
                                        <Text style={ styles.textInfo } key= {index}>Nave Estelar { index+1 }: {starship}</Text>
                                    ))
                                )
                            }
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Criado em: { person.created }</Text>
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Editado em: { person.edited }</Text>
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>URL: { person.url }</Text>
                    </View>

                </View>
            </ScrollView>
            {person.length === 0 &&
                <View style={styles.containerActivity}>
                    <ActivityIndicator size= {50} color= 'white' />
                    <Text style= { styles.textActivity }>Carregando...</Text>
                </View>
            }
        </SafeAreaView>
    )
}