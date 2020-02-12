import { Platform } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export function getPlatformType(): 'I' | 'A' {
  return Platform.OS.substr(0, 1).toUpperCase() as 'I' | 'A';
}
