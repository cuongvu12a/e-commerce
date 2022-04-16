import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TableColumnType } from 'antd';

import { replaceArrayNumberFromText } from '@utils';
import { Table, Button, Input, Pagination } from '@ui';
import { AddSupplier } from './AddSupplier';

interface Data {
  name: string;
  age: number;
  address: string;
}

type DataSource<T> = T & {
  key: string;
};

const dataSource: DataSource<Data>[] = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

export const Supplier = () => {
  const [visible, setVisible] = useState(false);
  const [previewData, setPreviewData] = useState<Data | null>(null);
  const { t } = useTranslation();

  const columns: TableColumnType<any>[] = useMemo(() => {
    return [
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
        render: (el: Data, record: Data) => {
          return (
            <button
              onClick={() => {
                setPreviewData(record);
                setVisible(true);
              }}
            >
              {el}
            </button>
          );
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];
  }, []);

  return (
    <div className='flex flex-col gap-7'>
      <div className='py-4 bg-gray-50 dark:bg-neutral-50 rounded-md section-shadow'>
        <div className='flex justify-end items-center gap-4 px-4 pb-4'>
          <Input
            palette='primary'
            placeholder={t`placeholder.search`}
            isTransformPlaceholder
            containerClass='w-full max-w-xs'
          />
          <Button
            palette='primary'
            type='primary'
            onClick={() => setVisible(true)}
          >{t`button.addSupplier`}</Button>
        </div>
        <Table
          palette='primary'
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
        <div className='flex justify-between items-center mt-7 px-4'>
          <span className='text-gray-700 dark:text-neutral-700'>
            {replaceArrayNumberFromText(t`content.showingEntries`, [1, 10, 50])}
          </span>
          <Pagination palette='primary' defaultCurrent={1} total={50} />
        </div>
      </div>
      <AddSupplier
        data={previewData?.name}
        visible={visible}
        onClose={() => {
          setVisible(false);
          setPreviewData(null);
        }}
      />
    </div>
  );
};
