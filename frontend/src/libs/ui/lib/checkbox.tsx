import {
  Checkbox as AntCheckbox,
  CheckboxProps as AntCheckboxProps,
} from 'antd';
import styled, { Palette } from 'styled-components';

interface CheckboxWrapperProps {
  palette: Palette;
}

interface CheckboxProps extends AntCheckboxProps, CheckboxWrapperProps {}

export const Checkbox = ({ palette, ...rest }: CheckboxProps) => {
  return (
    <CheckboxWrapper palette={palette}>
      <AntCheckbox {...rest} />
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div<CheckboxWrapperProps>(
  ({ palette, theme }) => `
  .ant-checkbox-inner{
    background: ${theme.colors.bg.section};
    border-color: ${theme.colors.border};
  }
  .ant-checkbox-input{
    &:hover, &:focus{
      & ~ .ant-checkbox-inner {
        border-color: ${theme.colors[palette]};
      }
    }
  }
  .ant-checkbox-checked{
    .ant-checkbox-inner {
      border-color: ${theme.colors[palette]};
      background: ${theme.colors[palette]};
    }
    &::after{
      border-color: ${theme.colors[palette]};
    }
  }
  `
);
