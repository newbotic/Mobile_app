import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home — this is a text??</Text>
      <Text style={styles.hint}>If you don't see this, try reloading the app (dev menu → Reload)</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 22,
    color: '#111',
    marginBottom: 8,
  },
  hint: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
})