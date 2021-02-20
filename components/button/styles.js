import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
})

export default styles
