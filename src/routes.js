import { createAppContainer, createStackNavigator } from 'react-navigation';

import PeopleList from './pages/PeopleList';
import Person from './pages/Person';
import Planet from './pages/Planet';
import Specie from './pages/Specie';
import Film from './pages/Film';
import Vehicle from './pages/Vehicle';
import Starship from './pages/Starschip';

export default createAppContainer(
    createStackNavigator({
        Planet,
        PeopleList,
        Person,
        Specie,
        Film,
        Vehicle,
        Starship
    },{
        headerMode: 'none',
    })
)