
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../shared/constants/colors';

export default function AppInfoCard() {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>↗</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>My React Native App</Text>
          <Text style={styles.subtitle}>Mobile Application</Text>
        </View>

        <View style={styles.badge}>
          <View style={styles.dot} />
          <Text style={styles.badgeText}>LIVE</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.versions}>
        <View>
          <Text style={styles.label}>CURRENT VERSION</Text>
          <Text style={styles.version}>1.0.0</Text>
        </View>

        <View style={styles.verticalDivider} />

        <View>
          <Text style={styles.label}>BUILD NUMBER</Text>
          <Text style={styles.version}>100</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: COLORS.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: COLORS.blue,
    fontSize: 26,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    color: COLORS.navy,
    fontSize: 15,
    fontWeight: '700',
  },
  subtitle: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 5,
  },
  badge: {
    backgroundColor: COLORS.lightGreen,
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: COLORS.green,
    marginRight: 5,
  },
  badgeText: {
    color: COLORS.green,
    fontSize: 9,
    fontWeight: '800',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 20,
  },
  versions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 35,
  },
  verticalDivider: {
    width: 1,
    height: 36,
    backgroundColor: COLORS.border,
  },
  label: {
    color: COLORS.secondary,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  version: {
    color: COLORS.navy,
    fontSize: 20,
    fontWeight: '800',
    marginTop: 7,
  },
});
