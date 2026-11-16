
import { checkForUpdate } from './updateChecker';

export function testUpdateChecker() {

  const result = checkForUpdate();

  console.log('========== OTA CHECK ==========');

  console.log('Status:', result.status);

  console.log('Message:', result.message);

  if (result.update) {
    console.log('Available Version:', result.update.version);
    console.log('Update ID:', result.update.updateId);
  }

  console.log('================================');

  return result;
}
