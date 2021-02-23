import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  subHeader: {
    color: colors.gray,
    position: 'absolute',
    width: 170,
    height: 18,
    top: 143,
    bottom: 651,
    left: 135,
  },
})

export default styles
