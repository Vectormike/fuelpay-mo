import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome Back</Text>
      <Text style={styles.titleH2}>Please login to continue</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    background: colors.background,
  },
  titleText: {
    fontSize: 25,
    color: colors.dark,
    fontWeight: bold,
    lineHeight: 30,
    display: flex,
    textAlign: center,
    position: absolute,
  },
  titleH2: {
    fontSize: 15,
    display: flex,
    alignItems: 'flex-end',
    textAlign: center,
    fontFamily: Inter,
    fontStyle: normal,
    color: colors.lightDark,
  },
})

export default LoginScreen
