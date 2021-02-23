import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

const styles = StyleSheet.create({
  header: {
    color: colors.headerDark,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 25,
    lineHeight: 30,
    display: 'flex',
    textAlign: 'center',
    letterSpacing: -0.2,
    position: 'absolute',
    width: 175,
    height: 30,
    top: 104,
    bottom: 678,
  },
})

export default styles
