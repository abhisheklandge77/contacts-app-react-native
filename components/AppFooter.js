import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>	&#169; Praise Array {new Date().getFullYear()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#010a1c',
    padding: 16,
    // position: 'absolute',
    // bottom: 0,
    // width: '100%',
  },
  
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});