import RootStack from './src/common/app/RootStack';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {ToastProvider} from 'react-native-styled-toast';

const theme = {
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
  colors: {
    text: '#0A0A0A',
    background: '#FFF',
    border: '#E2E8F0',
    muted: '#F0F1F3',
    success: '#7DBE31',
    error: '#FC0021',
    info: '#00FFFF',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <RootStack />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
