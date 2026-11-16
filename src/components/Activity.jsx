
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../shared/constants/colors';

export default function Activity() {
  return (
    <View>
      <Text style={styles.heading}>Recent Activity</Text>

      <View style={styles.card}>
        <ActivityItem
          title="Application initialized"
          description="Version 1.0.0 installed successfully"
          time="Current session"
          completed
        />

        <ActivityItem
          title="OTA service pending"
          description="Waiting for OTA configuration"
          time="Not connected"
        />
      </View>
    </View>
  );
}

function ActivityItem({ title, description, time, completed }) {
  return (
    <View style={styles.item}>
      <View style={styles.timeline}>
        <View
          style={[
            styles.dot,
            completed && styles.completedDot,
          ]}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      <Text style={completed ? styles.success : styles.pending}>
        {completed ? '✓' : 'PENDING'}
      </Text>
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
  card: {
    backgroundColor: COLORS.white,
    padding: 17,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  item: {
    flexDirection: 'row',
    minHeight: 75,
  },
  timeline: {
    width: 22,
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#CBD2DF',
    marginTop: 4,
  },
  completedDot: {
    backgroundColor: COLORS.green,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: COLORS.navy,
    fontSize: 13,
    fontWeight: '700',
  },
  description: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 5,
  },
  time: {
    color: '#A5ADBA',
    fontSize: 10,
    marginTop: 6,
  },
  success: {
    color: COLORS.green,
    fontWeight: 'bold',
    fontSize: 17,
  },
  pending: {
    color: '#C18A32',
    fontSize: 8,
    fontWeight: '800',
  },
});
