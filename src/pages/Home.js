import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles/homeStyles';
export default function Home({ navigation }){
    return(
        <SafeAreaView style = {styles.container}>
            <Text style={ styles.title }>Desafio LDS</Text>
            <Text style={ styles.type }>React-Native</Text>
            <Text style={ styles.name }>-- Luciel Vitor --</Text>
            <TouchableOpacity style={ styles.button } onPress= { () => navigation.navigate('PeopleList') }>
                <Text style={ styles.textButton }>Listar os Personagens</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}