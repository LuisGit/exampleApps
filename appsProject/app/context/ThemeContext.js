import React, { useState } from 'react';
import { theme, darkTheme } from '../styles/theme/Theme';
import { Switch, Text } from 'react-native';

const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={darkMode ? darkTheme : theme}>
      {children}
      <Text>Dark Mode?</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
