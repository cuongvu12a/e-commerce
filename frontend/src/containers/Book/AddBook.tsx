import { useState, useEffect } from 'react';

import { Image } from '@components/Upload';
import { Drawer, useForm, Form, FormItem, Input, Button, Select } from '@ui';
import { Book, Author, Publisher } from '@models';
import { createBook, updateBook, getAllAuthor, getAllPublisher } from '@api';

interface AddClothesProps {
  visible: boolean;
  onClose: () => void;
  data: Book | null;
}

export const AddBook = ({ data, visible, onClose }: AddClothesProps) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [publishers, setPublishers] = useState<Publisher[]>([]);
  const [media, setMedia] = useState<string>('');
  const [form] = useForm();
  const handleFinish = async (values: Book) => {
    values.material = media;
    if (!data) {
      const res = await createBook(values);
    } else {
      const res = await updateBook({ ...data, ...values });
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

  useEffect(() => {
    const handle = async () => {
      const [listAuthor, listPublisher] = await Promise.all([
        getAllAuthor(),
        getAllPublisher(),
      ]);
      setAuthors(listAuthor);
      setPublishers(listPublisher);
    };
    handle();
  }, []);

  return (
    <Drawer
      title={data ? 'Edit Book' : 'Add Book'}
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
          name='authorId'
          label='Author'
          required
          className='flex-col text-xs'
        >
          <Select
            customOptions={(authors || []).map((el) => ({
              value: el.id,
              label: el.name,
            }))}
            palette='primary'
            type='default'
          />
        </FormItem>
        <FormItem
          name='publisherId'
          label='Publisher'
          required
          className='flex-col text-xs'
        >
          <Select
            customOptions={(publishers || []).map((el) => ({
              value: el.id,
              label: el.name,
            }))}
            palette='primary'
            type='default'
          />
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
          name='ISBN'
          label='ISBN'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='title'
          label='Title'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='summary'
          label='Summary'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' />
        </FormItem>
        <FormItem
          name='numberOfPage'
          label='Number of page'
          required
          className='flex-col text-xs'
        >
          <Input placeholder='' palette='primary' type={'number'} />
        </FormItem>
        <FormItem
          name='language'
          label='Language'
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
