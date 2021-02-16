import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Welcome from '../screens/welcome'
import Login from '../screens/auth/login/index'

const Navigator = createSwitchNavigator({ Welcome, Login }, { initialRouteName: 'Login', headerMode: 'none' })

export default createAppContainer(Navigator)
