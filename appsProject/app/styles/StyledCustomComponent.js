import React, { useContext } from 'react';
import { View, Text as RNText } from 'react-native';

import ThemeContext from '../context/ThemeContext';

const Box = ({ style, padding, margin, backgroundColor, ...rest }) => {
  const theme = useContext(ThemeContext);

  return (
    <View
      style={{
        margin: theme.spacing[margin],
        padding: theme.spacing[padding],
        backgroundColor: theme.colors[backgroundColor],
        ...style,
      }}
      {...rest}
    />
  );
};

const Text = ({ style, variant, color, ...rest }) => {
  const theme = useContext(ThemeContext);

  return (
    <RNText
      style={{
        color: theme.colors[color],
        ...theme.textVariants[variant],
        ...style,
      }}
      {...rest}
    />
  );
};

export { Box, Text };
