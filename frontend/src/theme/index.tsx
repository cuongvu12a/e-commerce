import React, { useState, useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { STORAGE_KEYS, StorageGetItem, StorageSetItem } from '@api';
import { GlobalStyle } from './GlobalStyle';

type Mode = 'light' | 'dark';

type Theme = Record<Mode, DefaultTheme>;

const theme: Theme = {
  light: {
    colors: {
      primary: '#7367f0',
      success: '#28C76F',
      danger: '#EA5455',
      warning: '#FF9F43',
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
        "table-header": '#f3f2f7'
      },
    },
  },
  dark: {
    colors: {
      primary: '#7367f0',
      success: '#28C76F',
      danger: '#EA5455',
      warning: '#FF9F43',
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
        "table-header": '#343d55'
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
  mode: StorageGetItem(STORAGE_KEYS.THEME) || 'light',
  switchMode: () => {},
});

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const [currentMode, setCurrentMode] = useState<Mode>(
    StorageGetItem(STORAGE_KEYS.THEME) || 'light'
  );

  const switchMode = () => {
    const result = currentMode === 'light' ? 'dark' : 'light';
    StorageSetItem(STORAGE_KEYS.THEME, result);
    setCurrentMode(result);
  };

  return (
    <ContextMode.Provider
      value={{
        mode: currentMode,
        switchMode,
      }}
    >
      <ThemeProvider theme={theme[currentMode]}>
        <div className={`${currentMode} w-full h-full`}>{children}</div>
        <GlobalStyle theme={theme[currentMode]} />
      </ThemeProvider>
    </ContextMode.Provider>
  );
};

export const useMode = () => useContext(ContextMode);
