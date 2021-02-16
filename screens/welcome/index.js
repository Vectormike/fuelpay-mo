import React from 'react'
import { SafeAreaView, View, Text, Alert, Button } from 'react-native'
import styles from './style'

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button title='Gas Pay' onPress={() => Alert.alert('Left button pressed')} />
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen
