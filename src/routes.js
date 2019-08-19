import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import PeopleList from './pages/PeopleList';
import Person from './pages/Person'

export default createAppContainer(
    createSwitchNavigator({
        PeopleList,
        Person,
    })
)