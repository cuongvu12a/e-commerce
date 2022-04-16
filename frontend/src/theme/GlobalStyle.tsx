import { DefaultTheme, createGlobalStyle } from 'styled-components';

import DrawerStyled from './components/drawer';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>(
  ({ theme }) => `
  .section-shadow{
    box-shadow: 0 4px 24px 0 #22292F1A;
  }
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
  ${DrawerStyled(theme)}
`
);
