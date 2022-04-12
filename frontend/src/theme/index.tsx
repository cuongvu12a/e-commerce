import React, { useState, useContext } from 'react';
import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from 'styled-components';

import { STORAGE_KEYS, StorageGetItem, StorageSetItem } from '@api';

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
        primary: '#7367F01F',
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
        primary: '#7367F01F',
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

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>(
  ({ theme }) => `
  .ant-select-item.ant-select-item-option{
    padding: 0;
    .ant-select-item-option-content{
      background: ${theme.colors.bg.section};
    }
  }
  .ant-select-dropdown{
    background: ${theme.colors.bg.section};
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 6px;
  }
`
);

export const useMode = () => useContext(ContextMode);
