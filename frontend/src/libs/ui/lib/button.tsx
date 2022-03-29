import { Button as AntButton, ButtonProps as AntButtonProp } from 'antd';
import styled, { Palette } from 'styled-components';

interface ButtonWrapperProps {
  palette: Palette;
}

interface ButtonProps extends AntButtonProp, ButtonWrapperProps {
  containerClass?: string;
}

export const Button = ({
  palette,
  containerClass,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper
      palette={palette}
      className={`${containerClass || ''} font-medium rounded`}
    >
      <AntButton
        {...rest}
        className={`${className || ''} font-medium rounded`}
      />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<ButtonWrapperProps>(
  ({ palette, theme }) => `
  .ant-btn {
    height: 38px;
    background: ${theme.colors[palette]} !important;  
    border-color:${theme.colors[palette]} !important;    
  }
  `
);
