import React from 'react';

import
{
    SafeAreaView,
    Text
} from 'react-native'

export default function Vehicle({ navigation }){
    const url = navigation.getParam('url');

    return(
        <SafeAreaView>
            <Text>Vehicle { url }</Text>
        </SafeAreaView>
    );
}