import { createAppContainer, createSwitchNavigator } from "react-navigation"
import Welcome from "../screens/WelcomeScreen"
const Navigator = createSwitchNavigator({Welcome})

export default createAppContainer(Navigator)