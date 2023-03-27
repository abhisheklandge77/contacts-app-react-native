import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Praise Array</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#010a1c',
    padding: 16,
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});