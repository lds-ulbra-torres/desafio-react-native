import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import ListPeoples from './pages/ListPeoples';
import Pessoa from './pages/Pessoa'

export default createAppContainer(
    createSwitchNavigator({
        ListPeoples,
        Pessoa
    })
)