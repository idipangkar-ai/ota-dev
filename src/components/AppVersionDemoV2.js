
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppVersionDemoV2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My OTA Demo</Text>

      <Text style={styles.version}>Version 1.0.1</Text>

      <Text style={styles.message}>
        Welcome to the updated app!
      </Text>

      <Text style={styles.theme}>GREEN EDITION</Text>

      <Text style={styles.newFeature}>
        ✨ New feature: OTA update successful!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9F9F0',
    padding: 25,
    borderRadius: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#14532D',
  },
  version: {
    fontSize: 18,
    fontWeight: '700',
    color: '#16A34A',
    marginTop: 12,
  },
  message: {
    fontSize: 15,
    color: '#14532D',
    marginTop: 10,
  },
  theme: {
    fontSize: 12,
    fontWeight: '800',
    color: '#16A34A',
    marginTop: 15,
  },
  newFeature: {
    fontSize: 13,
    fontWeight: '600',
    color: '#14532D',
    marginTop: 12,
  },
});
