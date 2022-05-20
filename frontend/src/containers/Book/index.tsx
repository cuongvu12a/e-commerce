import { useState, useMemo, useEffect } from 'react';
import { TableColumnType } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { AspectRatio, Image } from '@components/Image';
import { Table, Button, Input, Pagination } from '@ui';
import { Book as BookModel } from '@models';
import { getAllBook, deleteBook } from '@api';
import { AddBook } from './AddBook';

type DataSource<T> = T & {
  key: string;
};

export const Book = () => {
  const [delStatus, setDelStatus] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState<DataSource<BookModel>[]>([]);
  const [previewData, setPreviewData] = useState<BookModel | null>(null);

  const columns: TableColumnType<any>[] = useMemo(() => {
    return [
      {
        title: 'Media',
        key: 'media',
        dataIndex: 'material',
        render: (el: any, record: BookModel) => {
          return (
            <AspectRatio ratio={[16, 9]}>
              <Image src={record.material} />
            </AspectRatio>
          );
        },
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        render: (el: any, record: BookModel) => {
          return (
            <div className='flex gap-3'>
              <button
                onClick={() => {
                  setPreviewData(record);
                  setVisible(true);
                }}
                className='text-green-600 text-lg'
              >
                <EditOutlined />
              </button>
              <button
                onClick={async () => {
                  const res = await deleteBook(record);
                  setDelStatus(!res);
                }}
                className='text-red-600 text-lg'
              >
                <DeleteOutlined />
              </button>
            </div>
          );
        },
      },
    ];
  }, []);

  useEffect(() => {
    const handle = async () => {
      const res = await getAllBook();
      setDataSource(
        res.map((val) => {
          const result: DataSource<BookModel> = {
            key: `${val.id}`,
            ...val,
          };
          return result;
        })
      );
    };
    handle();
  }, [visible, delStatus]);

  return (
    <div className='flex flex-col gap-7'>
      <div className='py-4 bg-gray-50 dark:bg-neutral-50 rounded-md section-shadow'>
        <div className='flex justify-end items-center gap-4 px-4 pb-4'>
          <Input
            palette='primary'
            placeholder='search'
            isTransformPlaceholder
            containerClass='w-full max-w-xs'
          />
          <Button
            palette='primary'
            type='primary'
            onClick={() => setVisible(true)}
          >
            Add Book
          </Button>
        </div>
        <Table
          palette='primary'
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
        <AddBook
          data={previewData}
          visible={visible}
          onClose={() => {
            setVisible(false);
            setPreviewData(null);
          }}
        />
      </div>
    </div>
  );
};
