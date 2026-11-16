
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../shared/constants/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.eyebrow}>MANAGE YOUR APPLICATION</Text>
        <Text style={styles.title}>OTA Dashboard</Text>
      </View>

      <View style={styles.profile}>
        <Text style={styles.profileText}>O</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  eyebrow: {
    color: COLORS.secondary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  title: {
    color: COLORS.navy,
    fontSize: 27,
    fontWeight: '800',
    marginTop: 7,
  },
  profile: {
    width: 46,
    height: 46,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: COLORS.blue,
    fontSize: 21,
    fontWeight: '800',
  },
});
