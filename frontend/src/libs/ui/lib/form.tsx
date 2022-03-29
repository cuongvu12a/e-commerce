import {
  Form as AntForm,
  FormProps as AntFormProps,
  FormItemProps as AntFormItemProps,
} from 'antd';
import styled from 'styled-components';

interface FormProps extends AntFormProps {}

export const Form = ({ ...rest }: FormProps) => {
  return (
    <FormWrapper>
      <AntForm {...rest} />
    </FormWrapper>
  );
};

const FormWrapper = styled.div(({}) => ``);

export const useForm = () => AntForm.useForm();

interface FormItemProps extends AntFormItemProps {}

export const FormItem = ({ ...rest }: FormItemProps) => {
  return (
    <FormItemWrapper>
      <AntForm.Item {...rest} />
    </FormItemWrapper>
  );
};

const FormItemWrapper = styled.div(
  ({ theme }) => `
  .ant-form-item-label{
    color: ${theme.colors.text.secondary};
    font-size: 12px;
    text-align: start;
    > label{
      font-size: inherit;
      color: inherit;
      &::after{
        display: none;
      }
    }
  }
`
);
