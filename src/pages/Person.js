import React, { useEffect, useState }from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import styles from './styles/peopleStyles';
import api from '../services/api'

export default function People( { navigation } ) {
    const [person, setPerson] = useState([]);
    const id = navigation.getParam('id');

    useEffect(() => {
        async function loadPerson(){
            const response = await api.get(`/people/${id}`);

            setPerson(response.data);
        }
        loadPerson()
    });

    return(
        <ScrollView>
            <SafeAreaView style= { styles.container }>
                <View style= { styles.card }>
                    <View style= { styles.info }>
                        <Text style= { styles.name }>{ person.name }</Text>
                    </View>

                    <View style= { styles.linha }></View>

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Altura: { person.height }cm</Text>
                    </View>

                    <View style= { styles.linha }></View>

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Peso: { person.mass }Kg</Text>
                    </View>

                    <View style= { styles.linha }></View>

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Cor do Cabelo: { person.hair_color }</Text>
                    </View>

                    <View style= { styles.linha }></View>

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Cor da Roupa: { person.skin_color }</Text>
                    </View>

                    <View style= { styles.linha }></View>

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Cor do Olho: { person.eye_color }</Text>
                    </View>

                    <View style= { styles.linha }></View>

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Ano de Nascimento: { person.birth_year }</Text>
                    </View>

                    <View style= { styles.linha }></View>

                    <View style= { styles.info }>
                        <Text style= { styles.textInfo }>Genero: { person.gender }</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
