
import React from 'react';
import { StatusBar } from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F5F7FB"
      />

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#F5F7FB',
        }}
        edges={['top', 'bottom', 'left', 'right']}
      >
        <HomeScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
