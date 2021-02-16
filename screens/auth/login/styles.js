import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  header: {
    color: colors.headerDark,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 25,
    lineHeight: 30,
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center',
    letterSpacing: -0.2,
    position: 'absolute',
    width: 175,
    height: 30,
    top: 143,
    left: 120,
  },
  subHeader: {
    color: colors.gray,
    width: 170,
    height: 18,
    left: 130,
    top: 143,
  },
})

export default styles
