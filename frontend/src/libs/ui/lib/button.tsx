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
        className={`${className || ''} font-medium rounded text-xs text-white`}
      />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<ButtonWrapperProps>(
  ({ palette, theme }) => `
  .ant-btn{
    height: 38px;
    border-color:${theme.colors[palette]} !important;   
  }
  .ant-btn-primary {
    background: ${theme.colors[palette]} !important;  
    &:hover{
      box-shadow: 0 8px 25px -8px ${theme.colors[palette]};
    } 
  } 
  .ant-btn:not(.ant-btn-primary){
    color: ${theme.colors[palette]} !important;  
    &:hover{
      background: ${theme.colors[palette]}1F !important;  
    } 
  }
  `
);
