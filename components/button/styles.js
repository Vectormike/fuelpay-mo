import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    top: 273,
    left: 100,
    width: 340,
    height: 55,
  },
  appButtonText: {
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    display: 'flex',
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
})

export default styles
