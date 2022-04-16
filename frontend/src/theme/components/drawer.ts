import { DefaultTheme } from 'styled-components';

export default (theme: DefaultTheme) => `
  .ant-drawer-header{
    background: ${theme.colors.bg.body};
  }
  .ant-drawer-title{
    color: ${theme.colors.text.secondary};
  }
  .ant-drawer-body{
    background: ${theme.colors.bg.section};
  }
`;
