
import ReactNativeBlobUtil from 'react-native-blob-util';

export const DOWNLOAD_STATUS = {
  IDLE: 'IDLE',
  DOWNLOADING: 'DOWNLOADING',
  DOWNLOADED: 'DOWNLOADED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
};

export function startDownload({
  url,
  fileName,
  onProgress,
}) {
  const directory =
    ReactNativeBlobUtil.fs.dirs.DocumentDir;

  const filePath = `${directory}/${fileName}`;

  const task = ReactNativeBlobUtil
    .config({
      path: filePath,
      overwrite: true,
    })
    .fetch('GET', url);

  task.progress({ interval: 250 }, (received, total) => {
    if (total > 0 && onProgress) {
      const percentage = Math.floor(
        (received / total) * 100
      );

      onProgress({
        received,
        total,
        percentage,
      });
    }
  });

  const promise = task.then(response => {
    const status = response.info().status;

    if (status < 200 || status >= 300) {
      throw new Error(`Download failed: HTTP ${status}`);
    }

    return {
      status: DOWNLOAD_STATUS.DOWNLOADED,
      filePath: response.path(),
      fileSize: response.info().headers?.['Content-Length'],
    };
  });

  return {
    promise,
    cancel: () => task.cancel(),
  };
}
