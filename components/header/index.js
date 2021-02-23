import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

const Header = ({ name }) => {
  return <Text style={styles.header}>{name}</Text>
}

export default Header
