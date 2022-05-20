import { useState, useEffect } from 'react';

import { Image } from '@components/Upload';
import { Drawer, useForm, Form, FormItem, Input, Button, Select } from '@ui';
import { Clothes } from '@models';
import { createClothes, updateClothes } from '@api';

interface AddClothesProps {
  visible: boolean;
  onClose: () => void;
  data: Clothes | null;
}

export const AddClothes = ({ data, visible, onClose }: AddClothesProps) => {
  const [media, setMedia] = useState<string>('');
  const [form] = useForm();
  const handleFinish = async (values: Clothes) => {
    values.material = media;
    if (!data) {
      const res = await createClothes(values);
    } else {
      const res = await updateClothes({ ...data, ...values });
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
      title={data ? 'Edit Clothes' : 'Add Clothes'}
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
        <FormItem
          name='type'
          label='Type'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='size'
          label='Size'
          required
          className='flex-col text-xs'
        >
          <Select
            customOptions={[
              { label: 'S', value: 'S' },
              { label: 'M', value: 'M' },
              { label: 'L', value: 'L' },
              { label: 'XL', value: 'XL' },
              { label: 'XXL', value: 'XXL' },
            ]}
            palette='primary'
            type='default'
          />
        </FormItem>
        <FormItem
          name='season'
          label='Season'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='brand'
          label='Brand'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='origin'
          label='Origin'
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
