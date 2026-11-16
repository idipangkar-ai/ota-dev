
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppVersionDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My OTA Demo</Text>

      <Text style={styles.version}>Version 1.0.0</Text>

      <Text style={styles.message}>
        Welcome to the original app!
      </Text>

      <Text style={styles.theme}>BLUE EDITION</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAF2FF',
    padding: 25,
    borderRadius: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#173B70',
  },
  version: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563EB',
    marginTop: 12,
  },
  message: {
    fontSize: 15,
    color: '#173B70',
    marginTop: 10,
  },
  theme: {
    fontSize: 12,
    fontWeight: '800',
    color: '#2563EB',
    marginTop: 15,
  },
});
