import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import SignInForm from '../../../components/auth/signIn/index'
import styles from './styles'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.subHeader}>Please login to continue</Text>
      <SignInForm />
    </SafeAreaView>
  )
}

export default LoginScreen
