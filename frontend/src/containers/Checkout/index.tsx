import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

import { Pagination } from '@ui';
import { IconGrid, IconList } from '@components/Icons';
import { ProductItem } from '@components/ProductItem';

export const Checkout = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-7'>
      <Row gutter={28}>
        <Col span={18}>
          <Row gutter={28}>
            <Col span={24}>
              {/* <ProductItem mode='fromCart' /> */}
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <div className='h-20 bg-gray-50 dark:bg-neutral-50 rounded-md section-shadow'></div>
        </Col>
      </Row>
    </div>
  );
};
