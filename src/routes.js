import { createAppContainer, createStackNavigator } from 'react-navigation';

import PeopleList from './pages/PeopleList';
import Person from './pages/Person';

export default createAppContainer(
    createStackNavigator({
        PeopleList,
        Person,
    },{
        headerMode: 'none',
    })
)