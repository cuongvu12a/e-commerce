import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

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

export const FormRegister = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [form] = useForm();

  const onFinish = async (values: any) => {
    console.log(values);
  };

  return (
    <div className='w-full max-w-md px-4'>
      <div className='text-2xl font-medium text-gray-800 dark:text-neutral-800'>
        {t`title.registerPage`}
      </div>
      <div className='mb-8 text-sm text-gray-700 dark:text-neutral-700'>{t`content.registerPage`}</div>
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
          <FormItem
            name='password'
            label={t`label.password`}
            className='flex-col text-xs'
            rules={[
              { required: true, message: t`message.requirePassword` },
              {
                min: 8,
                message: t`message.minLengthPassword`,
              },
            ]}
          >
            <InputPassword
              placeholder={t`placeholder.password`}
              palette='primary'
            />
          </FormItem>
          <FormItem name='agree' valuePropName='checked'>
            <Checkbox
              palette='primary'
              className='text-gray-800 dark:text-neutral-800'
            >
              <span>{t`label.agree`}</span>{' '}
              <Link
                to={ROUTE.REGISTER}
                className='text-violet-600'
              >{t`label.privacyPolicyTerms`}</Link>
            </Checkbox>
          </FormItem>
          <FormItem>
            <Button
              className='w-full'
              htmlType='submit'
              children={t`button.registerSubmit`}
              type='primary'
              palette='primary'
            />
          </FormItem>
        </Form>
      </>
      <div className='flex gap-7 justify-center mb-1 text-gray-700 dark:text-neutral-700'>
        <span>{t`content.alreadyHaveAnAccount`}</span>
        <Link
          to={ROUTE.LOGIN}
          className='text-violet-600'
        >{t`content.signInInstead`}</Link>
      </div>
      <Divider containerClass='mb-2' />
      <SocialButtons />
    </div>
  );
};
