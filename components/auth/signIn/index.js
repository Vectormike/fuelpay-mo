import React, { useState } from 'react'
import { SafeAreaView, View, Text, TextInput, Alert } from 'react-native'
import AppButton from '../../button/index'
import Form from '../../form/index'
import styles from './styles'

const SignInForm = (props) => {
  const [details, setDetails] = useState({ email: '', password: '' })

  const onEmailChange = (e) => {
    setDetails({ email: e.target.value })
  }

  const onPasswordChange = (e) => {
    setDetails({ password: e.target.value })
  }

  const onSubmit = () => {
    Alert.alert('Hi')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Form value='Email Address' action={onEmailChange} />
      <TextInput value='Password' style={styles.input} onChange={onPasswordChange} />
      <AppButton title='Login' onPress={onSubmit} />
    </SafeAreaView>
  )
}

SignInForm.propTypes = {}

export default SignInForm
