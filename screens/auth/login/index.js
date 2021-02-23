import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Header from '../../../components/header/index'
import SignInForm from '../../../components/auth/signIn/index'
import styles from './styles'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header name='Welcome Back' />
      <Text style={styles.subHeader}>Please login to continue</Text>
      <SignInForm />
    </SafeAreaView>
  )
}

export default LoginScreen
