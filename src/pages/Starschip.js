import React from 'react';

import
{
    SafeAreaView,
    Text
} from 'react-native'

export default function Starchip({ navigation }){
    const url = navigation.getParam('url');

    return(
        <SafeAreaView>
            <Text>Startship: {url}</Text>
        </SafeAreaView>
    );
}