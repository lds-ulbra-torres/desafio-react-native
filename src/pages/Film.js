import React from 'react';

import
{
    SafeAreaView,
    Text
} from 'react-native'

export default function Film({ navigation }){
    const url = navigation.getParam('url');

    return(
        <SafeAreaView>
            <Text>Filme: {url}</Text>
        </SafeAreaView>
    );
}