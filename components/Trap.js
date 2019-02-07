import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class Trap extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Trap',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi! you are Stuck in trap</Text>
        <Text style={styles.text}>Kindly connect to Appropiate WIFI and restart App</Text>
        <Text style={styles.text}>Android >= 8 users also need location to be turned on </Text>
      </View>
      )
  }
}
export default Trap
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})
