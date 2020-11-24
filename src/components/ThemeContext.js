import React from 'react';

export const themes = {
  light: {
    foreground: '#333',
    background: '#f7f7f7',
  },
  dark: {
    foreground: '#ffffff',
    background: '#333333',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);