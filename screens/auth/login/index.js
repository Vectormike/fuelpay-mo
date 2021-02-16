import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import styles from './styles'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.subHeader}>Please login to continue</Text>
    </SafeAreaView>
  )
}

export default LoginScreen
