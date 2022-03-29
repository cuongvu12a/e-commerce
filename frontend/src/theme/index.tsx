import React, { useState, useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

type Mode = 'light' | 'dark';

type Theme = Record<Mode, DefaultTheme>;

const theme: Theme = {
  light: {
    colors: {
      primary: '#7367f0',
      divider: '#E9EAEC',
      border: '#D8D6DE',
      text: {
        placeholder: '#B9B9C3',
        primary: '#6E6B7B',
        secondary: '#5E5873',
      },
      bg: {
        body: '#F8F8F8',
        section: '#FFFFFF',
      },
    },
  },
  dark: {
    colors: {
      primary: '#7367f0',
      divider: '#3B4253',
      border: '#404656',
      text: {
        placeholder: '#B9B9C3',
        primary: '#B4B7BD',
        secondary: '#D0D2D6',
      },
      bg: {
        body: '#161D31',
        section: '#283046',
      },
    },
  },
};

interface ThemeWrapperProps {
  children: React.ReactNode;
}

interface ValueContextMode {
  mode: Mode;
  switchMode: () => void;
}

const ContextMode = React.createContext<ValueContextMode>({
  mode: 'light',
  switchMode: () => {},
});

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const [currentMode, setCurrentMode] = useState<Mode>('dark');

  const switchMode = () => {
    setCurrentMode((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <ContextMode.Provider
      value={{
        mode: currentMode,
        switchMode,
      }}
    >
      <ThemeProvider theme={theme[currentMode]}>{children}</ThemeProvider>
    </ContextMode.Provider>
  );
};

export const useMode = () => useContext(ContextMode);
