
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VerificationStatusCard({ result }) {
  const verified = result?.verified;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Bundle Verification</Text>

      <Text style={[
        styles.status,
        { color: verified ? '#16A085' : '#E67E22' }
      ]}>
        {result
          ? verified ? 'VERIFIED' : 'VERIFICATION FAILED'
          : 'NOT VERIFIED YET'}
      </Text>

      <Text style={styles.message}>
        {result?.message || 'Download a file to check its integrity.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 18,
    marginTop: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#172B4D',
  },
  status: {
    fontSize: 14,
    fontWeight: '800',
    marginTop: 12,
  },
  message: {
    fontSize: 13,
    color: '#7A869A',
    marginTop: 8,
  },
});
