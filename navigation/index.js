import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Welcome from '../screens/welcome'

const Navigator = createSwitchNavigator({ Welcome }, { initialRouteName: 'Welcome', headerMode: 'none' })

export default createAppContainer(Navigator)
