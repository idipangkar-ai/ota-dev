
import ReactNativeBlobUtil from 'react-native-blob-util';

export async function calculateChecksum(filePath) {
  const exists = await ReactNativeBlobUtil.fs.exists(filePath);

  if (!exists) {
    throw new Error('Downloaded file does not exist.');
  }

  const checksum = await ReactNativeBlobUtil.fs.hash(
    filePath,
    'sha256'
  );

  return checksum.toLowerCase();
}

export async function verifyBundle(filePath, expectedChecksum) {
  if (!expectedChecksum) {
    throw new Error('Expected checksum is missing.');
  }

  const actualChecksum = await calculateChecksum(filePath);

  const isValid =
    actualChecksum === expectedChecksum.toLowerCase();

  return {
    verified: isValid,
    actualChecksum,
    expectedChecksum,
    message: isValid
      ? 'Bundle integrity verified.'
      : 'Bundle integrity verification failed.',
  };
}
