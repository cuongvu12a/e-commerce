import {
  Radio as AntRadio,
  RadioProps as AntRadioProps,
  RadioGroupProps as AntRadioGroupProps,
} from 'antd';
import styled, { Palette } from 'styled-components';

interface RadioGroupWrapperProps {
  palette: Palette;
}

interface RadioGroupProps extends RadioGroupWrapperProps, AntRadioGroupProps {
  containerClass?: string;
}

export const RadioGroup = ({
  palette,
  containerClass,
  className,
  ...rest
}: RadioGroupProps) => {
  return (
    <RadioGroupWrapper palette={palette} className={`${containerClass || ''}`}>
      <AntRadio.Group
        {...rest}
        className={`${className || ''}`}
      />
    </RadioGroupWrapper>
  );
};

const RadioGroupWrapper = styled.div<RadioGroupWrapperProps>(
  ({ palette, theme }) => `
  .ant-radio-button-wrapper{
    height: 38px;
    padding: 0 12px;
    border-color: ${theme.colors[palette]} !important;
    box-shadow: none !important;
    background: transparent !important;
    color:  ${theme.colors[palette]} !important;
    &:first-child{
      border-radius: 6px 0 0 6px;
    }
    &:last-child{
      border-radius: 0 6px 6px 0;
    }
    &::before{
      background: transparent !important;
    }
  }
  .ant-radio-button-wrapper-checked{
    background: ${theme.colors[palette]}33 !important;
  } 
  `
);
