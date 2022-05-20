import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from '@components/Upload';
import { Drawer, useForm, Form, FormItem, Input, Button } from '@ui';
import { Laptop } from '@models';
import { createLaptop, updateLaptop } from '@api';

interface AddLaptopProps {
  visible: boolean;
  onClose: () => void;
  data: Laptop | null;
}

export const AddLaptop = ({ data, visible, onClose }: AddLaptopProps) => {
  const [media, setMedia] = useState<string>('');
  const { t } = useTranslation();
  const [form] = useForm();
  const handleFinish = async (values: Laptop) => {
    values.material = media;
    if (!data) {
      const res = await createLaptop(values);
    } else {
      const res = await updateLaptop({ ...data, ...values });
    }
    onClose();
  };

  useEffect(() => {
    if (!data) {
      setMedia('');
      form.resetFields();
      form.setFieldsValue({
        discount: 0,
      });
    } else {
      setMedia(data.material);
      form.setFieldsValue(data);
    }
  }, [visible]);

  return (
    <Drawer
      title={data ? t`title.editLaptop` : t`title.addLaptop`}
      visible={visible}
      closable={false}
      onClose={onClose}
    >
      <div>
        <Image currentImage={media} handleResult={(val) => setMedia(val)} />
      </div>
      <Form form={form} onFinish={handleFinish}>
        <FormItem
          name='name'
          label='Name'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='barCode'
          label='BarCode'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='price'
          label='Price'
          required
          className='flex-col text-xs'
        >
          <Input type={'number'} placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='discount'
          label='Discount'
          required
          className='flex-col text-xs'
        >
          <Input type={'number'} placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='description'
          label='Description'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem name='CPU' label='CPU' required className='flex-col text-xs'>
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem name='GPU' label='GPU' required className='flex-col text-xs'>
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='screen'
          label='Screen'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem>
          <Button
            className='w-full'
            htmlType='submit'
            children={'Submit'}
            type='primary'
            palette='primary'
          />
        </FormItem>
      </Form>
    </Drawer>
  );
};
