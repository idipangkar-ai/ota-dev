
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { COLORS } from '../shared/constants/colors';
import { DOWNLOAD_STATUS } from '../ota/downloadManager';

export default function DownloadManagerCard({
  status,
  progress,
  onDownload,
  onCancel,
  error,
}) {
  const isDownloading = status === DOWNLOAD_STATUS.DOWNLOADING;
  const isDownloaded = status === DOWNLOAD_STATUS.DOWNLOADED;
  const isFailed = status === DOWNLOAD_STATUS.FAILED;
  const isCancelled = status === DOWNLOAD_STATUS.CANCELLED;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Download Manager</Text>

        <Text style={styles.status}>
          {status.replaceAll('_', ' ')}
        </Text>
      </View>

      <View style={styles.fileCard}>
        <Text style={styles.label}>TEST DOWNLOAD</Text>

        <Text style={styles.fileName}>
          ota-transfer-test.pdf
        </Text>

        <Text style={styles.description}>
          Sample PDF file for testing OTA file transfers.
        </Text>

        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>
            Download progress
          </Text>

          <Text style={styles.percentage}>
            {progress}%
          </Text>
        </View>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progressFill,
              { width: `${progress}%` },
            ]}
          />
        </View>

        {isDownloading && (
          <View style={styles.loadingRow}>
            <ActivityIndicator size="small" color={COLORS.blue} />
            <Text style={styles.loadingText}>
              Downloading file...
            </Text>
          </View>
        )}

        {isDownloaded && (
          <Text style={styles.successText}>
            ✓ File downloaded successfully!
          </Text>
        )}

        {isCancelled && (
          <Text style={styles.cancelText}>
            Download cancelled.
          </Text>
        )}

        {isFailed && (
          <Text style={styles.errorText}>
            {error || 'Download failed.'}
          </Text>
        )}
      </View>

      {!isDownloading ? (
        <Pressable
          style={styles.downloadButton}
          onPress={onDownload}
        >
          <Text style={styles.buttonText}>
            {isDownloaded ? 'Download Again' : 'Start Download'}
          </Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.cancelButton}
          onPress={onCancel}
        >
          <Text style={styles.cancelButtonText}>
            Cancel Download
          </Text>
        </Pressable>
      )}
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
  title: {
    color: COLORS.navy,
    fontSize: 16,
    fontWeight: '800',
  },
  status: {
    color: COLORS.blue,
    fontSize: 9,
    fontWeight: '800',
  },
  fileCard: {
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
  fileName: {
    color: COLORS.navy,
    fontSize: 17,
    fontWeight: '800',
    marginTop: 10,
  },
  description: {
    color: COLORS.secondary,
    fontSize: 11,
    marginTop: 5,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    marginBottom: 9,
  },
  progressLabel: {
    color: COLORS.secondary,
    fontSize: 11,
  },
  percentage: {
    color: COLORS.navy,
    fontSize: 12,
    fontWeight: '800',
  },
  progressBackground: {
    height: 9,
    backgroundColor: '#E2E8F2',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: 9,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
  },
  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    gap: 8,
  },
  loadingText: {
    color: COLORS.secondary,
    fontSize: 11,
  },
  successText: {
    color: COLORS.green,
    fontSize: 12,
    fontWeight: '700',
    marginTop: 14,
  },
  cancelText: {
    color: '#C18A32',
    fontSize: 12,
    marginTop: 14,
  },
  errorText: {
    color: '#D9534F',
    fontSize: 12,
    marginTop: 14,
  },
  downloadButton: {
    backgroundColor: COLORS.blue,
    borderRadius: 13,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '800',
  },
  cancelButton: {
    backgroundColor: '#FCEAEA',
    borderRadius: 13,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  cancelButtonText: {
    color: '#D9534F',
    fontSize: 13,
    fontWeight: '800',
  },
});
