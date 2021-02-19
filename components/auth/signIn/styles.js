import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

const styles = StyleSheet.create({
  form: {
    position: 'absolute',
    // width: 175,
    // height: 30,
    // top: 143,
    // left: 120,
  },
  input: {
    backgroundColor: '#F7F7F7',
    borderRadius: 5,
    borderColor: '#E8E8E8',
    margin: 10,
    width: 175,
    height: 30,
    top: 253,
    left: 110,
  },
  button: {
    position: 'absolute',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
})

export default styles
