
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../shared/constants/colors';

export default function UpdateStatus({ onCheck }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Update Status</Text>

      <View style={styles.card}>
        <View style={styles.icon}>
          <Text style={styles.check}>✓</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>You're up to date</Text>
          <Text style={styles.description}>
            No new updates available for your app.
          </Text>
        </View>

        <View style={styles.dot} />
      </View>

      <Pressable style={styles.button} onPress={onCheck}>
        <Text style={styles.buttonText}>
          ↻  Check for Updates
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: COLORS.navy,
    fontSize: 17,
    fontWeight: '800',
    marginTop: 27,
    marginBottom: 13,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: COLORS.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    color: COLORS.green,
    fontSize: 23,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: COLORS.navy,
    fontSize: 14,
    fontWeight: '700',
  },
  description: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 5,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: COLORS.green,
  },
  button: {
    backgroundColor: COLORS.blue,
    borderRadius: 15,
    paddingVertical: 17,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },
});
