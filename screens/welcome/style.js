import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
import metrics from '../../assets/metrics/metrics'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  button: {
    borderRadius: 100,
    backgroundColor: colors.light,
    position: 'absolute',
    width: 180,
    height: 40,
    left: 130,
    top: 386,
  },
})

export default styles
