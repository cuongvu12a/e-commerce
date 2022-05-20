import { useState, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

import { getAllBook, getAllClothes, getAllLaptop } from '@api';
import { Laptop, Book, Clothes } from '@models';
import { RadioGroup, Pagination } from '@ui';
import { SearchProduct } from '@components/Input';
import { ModeProductItem } from '@constants';
import { ProductItem } from '@components/ProductItem';

const optionsWithDisabled: {
  label: ReactNode;
  value: ModeProductItem;
}[] = [
  { label: <span>Laptop</span>, value: 'laptop' },
  { label: <span>Clothes</span>, value: 'clothes' },
  { label: <span>Book</span>, value: 'book' },
];

export const Shop = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Clothes[] | Book[] | Laptop[]>([]);
  const [modeProductItem, setModeProductItem] =
    useState<ModeProductItem>('laptop');

  useEffect(() => {
    const handle = async () => {
      const res =
        modeProductItem === 'laptop'
          ? await getAllLaptop()
          : modeProductItem === 'clothes'
          ? await getAllClothes()
          : await getAllBook();
      if (!res) return;
      setProducts(res);
    };
    handle();
  }, [modeProductItem]);

  return (
    <div className='flex flex-col gap-7'>
      <Row gutter={28} className='text-gray-800 dark:text-neutral-800'>
        <Col span={6} className='flex items-center'>{t`content.filters`}</Col>
        <Col span={18} className='flex justify-between items-center'>
          <span>
            {products.length}&nbsp;{t`content.resultsFound`}
          </span>
          <RadioGroup
            palette='primary'
            optionType='button'
            buttonStyle='solid'
            options={optionsWithDisabled}
            value={modeProductItem}
            onChange={(event) => {
              setModeProductItem(event.target.value);
            }}
          />
        </Col>
      </Row>
      <Row gutter={28}>
        <Col span={6}>
          <div className='h-20 bg-gray-50 dark:bg-neutral-50 rounded-md section-shadow'></div>
        </Col>
        <Col span={18}>
          <SearchProduct containerClass='mb-7 bg-gray-50 dark:bg-neutral-50 rounded-md section-shadow' />
          <Row gutter={[28, 28]}>
            {products.map((el) => (
              <Col span={24} key={el.id}>
                <ProductItem product={el} />
              </Col>
            ))}
          </Row>
          <Pagination
            palette='primary'
            containerClass='flex justify-center mt-7'
            defaultCurrent={1}
            total={50}
          />
        </Col>
      </Row>
    </div>
  );
};
