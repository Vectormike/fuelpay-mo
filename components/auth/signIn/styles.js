import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    // width: 175,
    // height: 30,
    // top: 143,
    // left: 120,
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    width: 340,
    height: 55,
    top: 253,
    left: 110,
  },
  btn: {
    position: 'absolute',
    backgroundColor: colors.primary,
    borderRadius: 1,
    width: 340,
    height: 55,
    top: 353,
    left: 110,
  },
})

export default styles
