
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import UpdateCheckerCard from '../components/UpdateCheckerCard';
import DownloadManagerCard from '../components/DownloadManagerCard';
import VerificationStatusCard from '../components/VerificationStatusCard';
import AppVersionDemo from '../components/AppVersionDemo';

import TEST_DOWNLOAD from '../ota/testDownload';

import {
  startDownload,
  DOWNLOAD_STATUS,
} from '../ota/downloadManager';

import { verifyBundle } from '../ota/bundleVerifier';
import { checkForUpdate } from '../ota/updateChecker';
import { COLORS } from '../shared/constants/colors';

export default function HomeScreen() {
  const [updateResult, setUpdateResult] = useState(null);
  const [checking, setChecking] = useState(false);

  const [downloadStatus, setDownloadStatus] = useState(
    DOWNLOAD_STATUS.IDLE
  );

  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadError, setDownloadError] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const downloadTaskRef = useRef(null);
  const cancelledRef = useRef(false);

  useEffect(() => {
    runUpdateCheck();
  }, []);

  const runUpdateCheck = () => {
    setChecking(true);

    try {
      const result = checkForUpdate();
      setUpdateResult(result);
      console.log('OTA CHECK RESULT:', result);
    } catch (error) {
      console.log('OTA CHECK ERROR:', error);

      setUpdateResult({
        status: 'CHECK_FAILED',
        message: 'Something went wrong while checking updates.',
      });
    } finally {
      setChecking(false);
    }
  };

  const handleDownload = async () => {
    if (downloadStatus === DOWNLOAD_STATUS.DOWNLOADING) {
      return;
    }

    cancelledRef.current = false;

    setDownloadProgress(0);
    setDownloadError('');
    setVerificationResult(null);
    setDownloadStatus(DOWNLOAD_STATUS.DOWNLOADING);

    try {
      const task = startDownload({
        url: TEST_DOWNLOAD.url,
        fileName: TEST_DOWNLOAD.fileName,
        onProgress: progress => {
          setDownloadProgress(progress.percentage);
        },
      });

      downloadTaskRef.current = task;

      const result = await task.promise;

      if (cancelledRef.current) {
        return;
      }

      console.log('Downloaded file:', result.filePath);

      const verification = await verifyBundle(
        result.filePath,
        TEST_DOWNLOAD.checksum
      );

      console.log('BUNDLE VERIFICATION:', verification);

      setVerificationResult(verification);
      setDownloadProgress(100);
      setDownloadStatus(DOWNLOAD_STATUS.DOWNLOADED);

    } catch (error) {
      if (cancelledRef.current) {
        setDownloadStatus(DOWNLOAD_STATUS.CANCELLED);
      } else {
        console.log('Download error:', error);

        setDownloadError(error.message || 'Download failed');
        setDownloadStatus(DOWNLOAD_STATUS.FAILED);
      }
    } finally {
      downloadTaskRef.current = null;
    }
  };

  const handleCancelDownload = () => {
    cancelledRef.current = true;

    setDownloadStatus(DOWNLOAD_STATUS.CANCELLED);

    downloadTaskRef.current?.cancel();
    downloadTaskRef.current = null;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AppVersionDemo />
        <UpdateCheckerCard
          result={updateResult}
          loading={checking}
          onCheck={runUpdateCheck}
        />

        <DownloadManagerCard
          status={downloadStatus}
          progress={downloadProgress}
          error={downloadError}
          onDownload={handleDownload}
          onCancel={handleCancelDownload}
        />

        <VerificationStatusCard
          result={verificationResult}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 25,
  },
});
