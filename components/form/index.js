import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

const Form = ({ action, value }) => {
  return <TextInput value={value} style={styles.input} onChange={action} />
}

export default Form
