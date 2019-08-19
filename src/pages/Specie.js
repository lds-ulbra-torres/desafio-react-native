import React from 'react';

import
{
    SafeAreaView,
    Text
} from 'react-native'

export default function Specie({ navigation }){
    const url = navigation.getParam('url');

    return(
        <SafeAreaView>
            <Text>Specie { url }</Text>
        </SafeAreaView>
    );
}