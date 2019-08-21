import React, { useEffect, useState }from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
} from 'react-native';

import styles from './styles/personStyles';
import api from '../services/api';

export default function People( { navigation } ) {
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
        <ScrollView style= { styles.scroll }>
            <SafeAreaView style= { styles.container }>
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

                    <View style = { styles.infoButton }>
                        <Text style= { styles.textButton }>Planeta Natal: { person.homeworld }</Text>
                    </View>
                    
                    <View style= { styles.linha } />

                    <View style={ styles.infoButton }>
                        {films.map((film, index) => (

                            <Text style={ styles.textButton } key= {index}>Filme { index + 1 }: {film} </Text>
                        ))}
                    </View>
                    
                    <View style= { styles.linha } />

                    <View style= { styles.infoButton }>
                            {species.map((specie, index) => (

                                <Text style={ styles.textButton } key= {index}>Specie { index+1 }: {specie}</Text>
                            ))}
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.infoButton }>
                            { vehicles.length === 0
                                ? <Text style= { styles.mensagemVazio }>Não Tem Veículos</Text>
                                : (
                                    vehicles.map((vehicle, index) => (
                                        <Text style={ styles.textButton } key= {index}>Vehicle { index+1 }: {vehicle}</Text>
                                    ))
                                )
                            }
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.infoButton }>
                            { starships.length === 0
                                ? <Text style= { styles.mensagemVazio }>Não Tem Naves Estelares</Text>
                                : (
                                    starships.map((starship, index) => (
                                        <Text style={ styles.textButton } key= {index}>Nave Estelar { index+1 }: {starship}</Text>
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
            </SafeAreaView>
        </ScrollView>
    )
}