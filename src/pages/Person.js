import React, { useEffect, useState }from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import styles from './styles/personStyles';
import api from '../services/api'

export default function People( { navigation } ) {
    const [person, setPerson] = useState([]);
    const [films, setFilm] = useState([]);
    const [species, setSpecies] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [starships, setStarships] = useState([]);

    const name = navigation.getParam('name'); 

    useEffect(() => {
        async function loadPerson(){
            const response = await api.get(`/people/?search=${name}`);
            const result =  response.data.results[0]

            setPerson(result);
            setFilm(result.films);    
            setSpecies(result.species);
            setVehicles(result.vehicles);        
            setStarships(result.starships);
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
                        <TouchableOpacity style={ styles.button } onPress= { () => navigation.navigate('Planet', {url: person.homeworld}) }>
                            <Text style= { styles.textButton }>Terra Natal</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style= { styles.linha } />

                    <View style={ styles.infoButton }>
                        {films.map((film, index) => (
                            <TouchableOpacity style={ styles.button } onPress={ () => navigation.navigate('Film', { url: film }) } key={ index+1 }>
                                <Text style={ styles.textButton }>Filme { index + 1 } </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    
                    <View style= { styles.linha } />

                    <View style= { styles.infoButton }>
                            {species.map((specie, index) => (
                                <TouchableOpacity style= { styles.button } onPress={ () => navigation.navigate('Specie', { url: specie }) } key= { index+1 }>
                                    <Text style={ styles.textButton }>Specie { index+1 }</Text>
                                </TouchableOpacity>
                            ))}
                    </View>

                    <View style= { styles.linha } />

                    <View style= { styles.infoButton }>
                            { vehicles.length === 0
                                ? <Text style= { styles.mensagemVazio }>Não Tem Veículos</Text>
                                : (
                                    vehicles.map((vehicle, index) => (
                                        <TouchableOpacity style= { styles.button } onPress={ () => navigation.navigate('Vehicle', { url: vehicle }) } key= { index+1 }>
                                            <Text style={ styles.textButton }>Vehicle { index+1 }</Text>
                                        </TouchableOpacity>
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
                                        <TouchableOpacity style= { styles.button } onPress={ () => navigation.navigate('Starship', { url: starship }) } key= { index+1 }>
                                            <Text style={ styles.textButton }>Nave Estelar { index+1 }</Text>
                                        </TouchableOpacity>
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