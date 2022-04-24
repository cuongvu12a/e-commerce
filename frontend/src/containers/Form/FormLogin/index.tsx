import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector, login } from '@store';
import { LoginFormValue } from '@models';
import { REGEX_EMAIL, ROUTE } from '@constants';
import { Divider } from '@components/Divider';
import { SocialButtons } from '@containers/SocialButtons';
import {
  Form,
  FormItem,
  useForm,
  Button,
  Input,
  InputPassword,
  Checkbox,
} from '@ui';

export const FormLogin = () => {
  const { loading, userInfo, error } = useSelector().auth;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [form] = useForm();

  form.setFieldsValue({
    email: 'dungvql132@gmail.com',
    password: '123',
  });

  const onFinish = async (values: LoginFormValue) => {
    dispatch(login(values));
  };

  return (
    <div className='w-full max-w-md px-4'>
      <div className='text-2xl font-medium text-gray-800 dark:text-neutral-800'>
        {t`title.loginPage`}
      </div>
      <div className='mb-8 text-sm text-gray-700 dark:text-neutral-700'>{t`content.loginPage`}</div>
      <>
        <Form form={form} onFinish={onFinish} name='form-login'>
          <FormItem
            name='email'
            label={t`label.email`}
            className='flex-col text-xs'
            rules={[
              { required: true, message: t`message.requireEmail` },
              {
                pattern: REGEX_EMAIL,
                message: t`message.validEmail`,
              },
            ]}
          >
            <Input placeholder={t`placeholder.email`} palette='primary' />
          </FormItem>
          <div className='relative'>
            <FormItem
              name='password'
              label={t`label.password`}
              className='flex-col text-xs'
              rules={[
                { required: true, message: t`message.requirePassword` },
                // {
                //   min: 8,
                //   message: t`message.minLengthPassword`,
                // },
              ]}
            >
              <InputPassword
                placeholder={t`placeholder.password`}
                palette='primary'
              />
            </FormItem>
            <Link
              to={ROUTE.FORGOT_PASSWORD}
              className='absolute top-0 right-0 flex items-center h-8 capitalize text-xs text-violet-600'
            >{t`content.forgotPassword`}</Link>
          </div>
          <FormItem name='remember' valuePropName='checked'>
            <Checkbox
              palette='primary'
              className='text-gray-800 dark:text-neutral-800'
            >{t`label.rememberMe`}</Checkbox>
          </FormItem>
          <FormItem>
            <Button
              className='w-full'
              htmlType='submit'
              children={t`button.loginSubmit`}
              type='primary'
              palette='primary'
            />
          </FormItem>
        </Form>
      </>
      <div className='flex gap-7 justify-center mb-1 text-gray-700 dark:text-neutral-700'>
        <span>{t`content.newOnOurPlatform`}</span>
        <Link
          to={ROUTE.REGISTER}
          className='text-violet-600'
        >{t`content.createAnAccount`}</Link>
      </div>
      <Divider containerClass='mb-2' content='or'/>
      <SocialButtons />
    </div>
  );
};
