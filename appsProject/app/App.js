import React from 'react';
import Routes from './navigation/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { appStyle, theme } from './styles/appStyle';

const App = () => {
  return (
    <SafeAreaView style={appStyle.container}>
      <ThemeProvider them={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
