import { createAppContainer, createStackNavigator } from 'react-navigation';

import PeopleList from './pages/PeopleList';
import Person from './pages/Person';
import Home from './pages/Home';

export default createAppContainer(
    createStackNavigator({
        Home,
        PeopleList,
        Person,
    },{
        headerMode: 'none',
    })
)