import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

import { replaceArrayNumberFromText } from '@utils';
import { Product } from '@models';
import { Pagination } from '@ui';
import { ProductItem } from '@components/ProductItem';
import { Divider } from '@components/Divider';

export const Checkout = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const handle = async () => {
      // setProducts(res.data);
    };
    handle();
  }, []);

  return (
    <div className='flex flex-col gap-7'>
      <Row gutter={28}>
        <Col span={18}>
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
        <Col span={6}>
          <div className='bg-gray-50 dark:bg-neutral-50 p-5 rounded-md section-shadow'>
            <h4 className='mb-5 text-gray-800 dark:text-neutral-800 font-medium text-lg'>{t`title.priceDetails`}</h4>
            <div className='flex justify-between mb-3'>
              <h5 className='text-gray-700 dark:text-neutral-700'>
                {replaceArrayNumberFromText(t`content.priceOfItems`, [3])}
              </h5>
              <span className='text-gray-700 dark:text-neutral-700 font-semibold'>
                $699.30
              </span>
            </div>
            <div className='flex justify-between mb-3'>
              <h5 className='text-gray-700 dark:text-neutral-700'>{t`content.deliveryCharges`}</h5>
              <span className='text-green-600'>{t`content.free`}</span>
            </div>
            <Divider containerClass='my-5' />
            <PayPalScriptProvider
              options={{
                'client-id':
                  'AXkCo5BP4Y9APaXAW1Qguvovkd-aqjcLwIZo-Ol9XqcQBGX5HlhtpY49lo777AVQkEV6yjCbzMBVi1Up',
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  console.log('createOrder');

                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: '1.99',
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  console.log('onApprove');
                  if (!actions || !actions?.order) return new Promise(() => {});
                  return actions.order.capture().then((details) => {
                    const name = details?.payer?.name?.given_name;
                    console.log(name);
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        </Col>
      </Row>
    </div>
  );
};
