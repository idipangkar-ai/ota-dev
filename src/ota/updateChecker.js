
import OTA_CONFIG from './otaConfig';
import OTA_MANIFEST from './otaManifest';

export const UPDATE_STATUS = {
  AVAILABLE: 'UPDATE_AVAILABLE',
  UP_TO_DATE: 'UP_TO_DATE',
  INCOMPATIBLE: 'INCOMPATIBLE',
  DISABLED: 'UPDATE_DISABLED',
  INVALID: 'INVALID_MANIFEST',
};

export function checkForUpdate() {

  // 1. Check whether OTA is enabled
  if (!OTA_CONFIG.updateEnabled) {
    return {
      status: UPDATE_STATUS.DISABLED,
      message: 'OTA updates are disabled.',
    };
  }

  // 2. Validate manifest
  if (
    !OTA_MANIFEST ||
    !OTA_MANIFEST.updateId ||
    !OTA_MANIFEST.version ||
    !OTA_MANIFEST.runtimeVersion
  ) {
    return {
      status: UPDATE_STATUS.INVALID,
      message: 'Invalid OTA manifest.',
    };
  }

  // 3. Validate application ID
  if (OTA_CONFIG.appId !== OTA_MANIFEST.appId) {
    return {
      status: UPDATE_STATUS.INCOMPATIBLE,
      message: 'Application ID mismatch.',
    };
  }

  // 4. Validate platform
  if (OTA_CONFIG.platform !== OTA_MANIFEST.platform) {
    return {
      status: UPDATE_STATUS.INCOMPATIBLE,
      message: 'Platform mismatch.',
    };
  }

  // 5. Validate update channel
  if (OTA_CONFIG.channel !== OTA_MANIFEST.channel) {
    return {
      status: UPDATE_STATUS.INCOMPATIBLE,
      message: 'Update channel mismatch.',
    };
  }

  // 6. Validate runtime compatibility
  if (
    OTA_CONFIG.runtimeVersion !==
    OTA_MANIFEST.runtimeVersion
  ) {
    return {
      status: UPDATE_STATUS.INCOMPATIBLE,
      message: 'Runtime version mismatch.',
    };
  }

  // 7. Compare application versions
  const installedVersion = OTA_CONFIG.appVersion;
  const availableVersion = OTA_MANIFEST.version;

  if (installedVersion === availableVersion) {
    return {
      status: UPDATE_STATUS.UP_TO_DATE,
      message: 'Application is already up to date.',
    };
  }

  if (!isNewerVersion(availableVersion, installedVersion)) {
    return {
      status: UPDATE_STATUS.INCOMPATIBLE,
      message: 'Available update is not newer than installed version.',
    };
  }

  return {
    status: UPDATE_STATUS.AVAILABLE,
    message: 'A new OTA update is available.',
    update: OTA_MANIFEST,
  };
}


// Compare semantic versions
function isNewerVersion(available, installed) {

  const a = available.split('.').map(Number);
  const b = installed.split('.').map(Number);

  if (
    a.length !== 3 ||
    b.length !== 3 ||
    [...a, ...b].some(Number.isNaN)
  ) {
    return false;
  }

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) return true;
    if (a[i] < b[i]) return false;
  }

  return false;
}
