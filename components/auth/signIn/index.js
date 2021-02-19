import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
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
    <View style={styles.form}>
      <TextInput value='Email Address' style={styles.input} onChange={onEmailChange} />
      <TextInput value='Password' style={styles.input} onChange={onPasswordChange} />
      <Button title='Login' style={styles.button} />
    </View>
  )
}

SignInForm.propTypes = {}

export default SignInForm
