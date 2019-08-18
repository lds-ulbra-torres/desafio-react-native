import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import ListPeoples from './pages/ListPeoples';

export default createAppContainer(
    createSwitchNavigator({
        ListPeoples,
    })
)