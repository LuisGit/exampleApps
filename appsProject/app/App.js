import React from 'react';
import Routes from './navigation/Routes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { appStyle, theme } from './styles/appStyle';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={appStyle.container}>
        <ThemeProvider them={theme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
