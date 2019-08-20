import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Text } from 'react-native';

import Main from './Pages/Main';
import peoplePage from './Pages/peoplePage/page'


const Routes = createAppContainer(
    createStackNavigator({
        Main,
        peoplePage,
    }, {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerTitle: <Text style={{ color: '#fff', fontSize: 20}}>Pessoas</Text>,
            headerStyle: {
                backgroundColor: '#7B84DB'
            },
            headerTintColor: "#fff"
        },
    })
);

export default Routes;