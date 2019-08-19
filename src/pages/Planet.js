import React from 'react';

import
{
    SafeAreaView,
    Text
} from 'react-native'

export default function Planet({ navigation }){
    const url = navigation.getParam('url');

    return(
        <SafeAreaView>
            <Text>Planet: {url}</Text>
        </SafeAreaView>
    );
}