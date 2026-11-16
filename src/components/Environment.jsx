
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../shared/constants/colors';

export default function Environment() {
  return (
    <View>
      <Text style={styles.heading}>Environment</Text>

      <View style={styles.row}>
        <InfoCard label="CHANNEL" value="Development" icon="⌘" />
        <InfoCard label="PLATFORM" value="React Native" icon="◈" />
      </View>
    </View>
  );
}

function InfoCard({ label, value, icon }) {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>{icon}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: COLORS.navy,
    fontSize: 17,
    fontWeight: '800',
    marginTop: 27,
    marginBottom: 13,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 11,
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  iconText: {
    color: COLORS.blue,
    fontSize: 18,
  },
  label: {
    color: COLORS.secondary,
    fontSize: 9,
    fontWeight: '700',
  },
  value: {
    color: COLORS.navy,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 7,
  },
});
