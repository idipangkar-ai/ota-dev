
const OTA_MANIFEST = {
  updateId: 'update-001',

  appId: 'com.myapp',

  version: '1.0.1',

  runtimeVersion: '1.0.0',

  platform: 'android',

  channel: 'development',

  releaseMessage: 'First OTA test update',

  isMandatory: false,

  bundle: {
    id: 'bundle-001',
    fileName: 'index.android.bundle',
    size: 102400,
    checksum: 'sample-checksum-001',
  },

  createdAt: '2026-11-11T10:00:00.000Z',
};

export default OTA_MANIFEST;
