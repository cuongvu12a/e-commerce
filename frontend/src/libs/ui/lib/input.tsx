import { useState } from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import styled, { Palette } from 'styled-components';
import { IconEye, IconEyeInvisible } from '@components/Icons';
interface InputWrapperProps {
  palette: Palette;
  isTransformPlaceholder?: boolean;
}

interface InputProps extends AntInputProps, InputWrapperProps {
  containerClass?: string;
}

export const Input = ({
  palette,
  isTransformPlaceholder,
  containerClass,
  ...rest
}: InputProps) => {
  return (
    <InputWrapper
      palette={palette}
      isTransformPlaceholder={isTransformPlaceholder}
      className={`${containerClass || ''}`}
    >
      <AntInput {...rest} />
    </InputWrapper>
  );
};

export const InputPassword = ({
  palette,
  containerClass,
  className,
  ...rest
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <InputWrapper
      palette={palette}
      className={`${containerClass || ''} relative`}
    >
      <AntInput
        {...rest}
        type={isVisible ? 'text' : 'password'}
        className={`${className || ''} pr-7`}
      />
      <InputIconWrap
        palette={palette}
        className='flex items-center w-4 cursor-pointer text-base text-gray-700 dark:text-neutral-700'
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <IconEyeInvisible /> : <IconEye />}
      </InputIconWrap>
    </InputWrapper>
  );
};

const InputWrapper = styled.div<InputWrapperProps>(
  ({ palette, isTransformPlaceholder, theme }) => `
  .ant-input{
    height: 38px;
    border-radius: 6px;
    border-color: ${theme.colors.border};
    background: ${theme.colors.bg.section} !important;
    color: ${theme.colors.text.primary};
    &:hover, &:focus{
      box-shadow: 0 0 6px 0 ${theme.colors[palette]};
      border: 1px solid ${theme.colors[palette]};
    }
    &::placeholder{
      color: ${theme.colors.text.placeholder};
    }
    ${
      isTransformPlaceholder &&
      `
        &::placeholder{
          transition: all .1s ease;
        }
        &:focus::placeholder{
          transform: translateX(6px);
        }

      `
    }
  }
`
);

const InputIconWrap = styled.span<InputWrapperProps>(
  ({ palette, theme }) => `
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  &:hover{
    color: ${theme.colors[palette]};
  }
`
);

export const InputSearch = AntInput.Search;
