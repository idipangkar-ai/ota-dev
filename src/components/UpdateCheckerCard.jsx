
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { COLORS } from '../shared/constants/colors';

export default function UpdateCheckerCard({
  result,
  loading,
  onCheck,
}) {
  const isAvailable =
    result?.status === 'UPDATE_AVAILABLE';

  const isCurrent =
    result?.status === 'UP_TO_DATE';

  const isError =
    result &&
    !isAvailable &&
    !isCurrent;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>OTA Update Checker</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {loading ? 'CHECKING' : 'CLIENT'}
          </Text>
        </View>
      </View>

      <View style={styles.versionCard}>
        <Text style={styles.label}>AVAILABLE UPDATE</Text>

        <Text style={styles.version}>
          {loading
            ? 'Checking...'
            : result?.update?.version || '--'}
        </Text>

        <Text style={styles.description}>
          {loading
            ? 'Checking for available updates...'
            : result?.message || 'Waiting for update check.'}
        </Text>

        {!loading && (
          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor: isAvailable
                  ? '#E6F7F0'
                  : isCurrent
                  ? '#EDF1F7'
                  : '#FFF1E8',
              },
            ]}
          >
            <Text
              style={[
                styles.statusText,
                {
                  color: isAvailable
                    ? COLORS.green
                    : isCurrent
                    ? COLORS.secondary
                    : '#D97735',
                },
              ]}
            >
              {result?.status || 'NOT CHECKED'}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.details}>
        <Detail
          label="Installed version"
          value="1.0.0"
        />

        <Detail
          label="Runtime version"
          value="1.0.0"
        />

        <Detail
          label="Platform"
          value="Android"
        />

        <Detail
          label="Channel"
          value="Development"
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={onCheck}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>
            ↻  Check for Updates
          </Text>
        )}
      </Pressable>

      {isAvailable && (
        <View style={styles.availableMessage}>
          <Text style={styles.availableText}>
            A compatible update is available.
            Download functionality is coming next.
          </Text>
        </View>
      )}

      {isError && (
        <Text style={styles.errorText}>
          Please review the update configuration.
        </Text>
      )}
    </View>
  );
}

function Detail({ label, value }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginTop: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  heading: {
    color: COLORS.navy,
    fontSize: 16,
    fontWeight: '800',
  },
  badge: {
    backgroundColor: COLORS.lightBlue,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: COLORS.blue,
    fontSize: 9,
    fontWeight: '800',
  },
  versionCard: {
    backgroundColor: '#F5F7FB',
    padding: 16,
    borderRadius: 15,
  },
  label: {
    color: COLORS.secondary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  version: {
    color: COLORS.navy,
    fontSize: 30,
    fontWeight: '800',
    marginTop: 8,
  },
  description: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: 5,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 12,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '800',
  },
  details: {
    marginTop: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  detailLabel: {
    color: COLORS.secondary,
    fontSize: 12,
  },
  detailValue: {
    color: COLORS.navy,
    fontSize: 12,
    fontWeight: '700',
  },
  button: {
    backgroundColor: COLORS.blue,
    borderRadius: 13,
    padding: 16,
    alignItems: 'center',
    marginTop: 18,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '800',
  },
  availableMessage: {
    backgroundColor: '#E6F7F0',
    padding: 11,
    borderRadius: 10,
    marginTop: 12,
  },
  availableText: {
    color: COLORS.green,
    fontSize: 11,
    lineHeight: 17,
  },
  errorText: {
    color: '#D97735',
    fontSize: 11,
    marginTop: 12,
  },
});
