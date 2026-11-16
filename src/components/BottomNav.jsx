
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../shared/constants/colors';

const tabs = [
  { name: 'Home', icon: '⌂' },
  { name: 'Releases', icon: '⇧' },
  { name: 'Settings', icon: '⚙' },
];

export default function BottomNav({ activeTab, onChange }) {
  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const active = activeTab === tab.name;

        return (
          <Pressable
            key={tab.name}
            style={styles.item}
            onPress={() => onChange(tab.name)}
          >
            <Text style={[styles.icon, active && styles.active]}>
              {tab.icon}
            </Text>

            <Text style={[styles.label, active && styles.active]}>
              {tab.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    color: '#A3ACBA',
    fontSize: 22,
  },
  label: {
    color: '#A3ACBA',
    fontSize: 10,
    marginTop: 4,
    fontWeight: '600',
  },
  active: {
    color: COLORS.blue,
    fontWeight: '800',
  },
});
