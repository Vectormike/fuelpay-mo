import React, { useState } from 'react'
import { SafeAreaView, View, TextInput, Button } from 'react-native'
import styles from './styles'

const SignInForm = (props) => {
  const [details, setDetails] = useState({ email: '', password: '' })

  const onEmailChange = (e) => {
    setDetails({ email: e.target.value })
  }

  const onPasswordChange = (e) => {
    setDetails({ password: e.target.value })
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput value='Email Address' style={styles.input} onChange={onEmailChange} />
      <TextInput value='Password' style={styles.input} onChange={onPasswordChange} />
      <Button title='Login' style={styles.btn} />
    </SafeAreaView>
  )
}

SignInForm.propTypes = {}

export default SignInForm
