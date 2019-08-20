import React, { useEffect, useState } from 'react';
import
{
    SafeAreaView,
    Text
} from 'react-native';

import api from '../services/api';
import styles from './styles/personStyles';

export default function Planet({ navigation }){
    const url = 'https://swapi.co/api/planets/2/' /*navigation.getParam('url');*/
    const [ planet, setPlanet ] = useState({});

    useEffect(() => {
        async function loadPlanet(){
            const results = await api.get(url);

            setPlanet(results.data);
        }

        loadPlanet();
    }, [])




    return(
        <SafeAreaView>
            <Text>Planet: {planet.name}</Text>
        </SafeAreaView>
    );
}