import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

import { replaceArrayNumberFromText } from '@utils';
import { Cart } from '@models';
import { Pagination } from '@ui';
import { ProductItem } from '@components/ProductItem';
import { Divider } from '@components/Divider';
import { getAllCarts, createOrder } from '@api';

export const Checkout = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Cart[]>([]);

  useEffect(() => {
    const handle = async () => {
      const res = await getAllCarts();
      console.log(res);
      setProducts(res);
    };
    handle();
  }, []);

  return (
    <div className='flex flex-col gap-7'>
      <Row gutter={28}>
        <Col span={16} xxl={18}>
          <Row gutter={[28, 28]}>
            {products.map((el) => (
              <Col span={24} key={el.id}>
                {(el?.bookId || el.clothesId || el?.laptopId) && (
                  <ProductItem
                    product={el?.bookId || el.clothesId || el?.laptopId}
                    mode={
                      el?.bookId ? 'book' : el?.clothesId ? 'clothes' : 'laptop'
                    }
                    isFromCart
                    setProduct={setProducts}
                  />
                )}
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={8} xxl={6}>
          <div className='bg-gray-50 dark:bg-neutral-50 p-5 rounded-md section-shadow'>
            <h4 className='mb-5 text-gray-800 dark:text-neutral-800 font-medium text-lg'>{t`title.priceDetails`}</h4>
            <div className='flex justify-between mb-3'>
              <h5 className='text-gray-700 dark:text-neutral-700'>
                {replaceArrayNumberFromText(t`content.priceOfItems`, [
                  products.length,
                ])}
              </h5>
              <span className='text-gray-700 dark:text-neutral-700 font-semibold'>
                {`$${products.reduce((total: number, value) => {
                  let sum = 0;
                  sum +=
                    value?.bookId?.price ||
                    value?.clothesId?.price ||
                    value?.laptopId?.price ||
                    0;
                  return total + sum;
                }, 0)}`}
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
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: '1'
                          // value: `${products.reduce((total: number, value) => {
                          //   let sum = 0;
                          //   sum +=
                          //     value?.bookId?.price ||
                          //     value?.clothesId?.price ||
                          //     value?.laptopId?.price ||
                          //     0;
                          //   return total + sum;
                          // }, 0)}`,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  if (!actions || !actions?.order) return new Promise(() => {});
                  return actions.order.capture().then(async (details) => {
                    const carts = products.map(
                      (el) =>
                        el?.bookId?.id ||
                        el?.clothesId?.id ||
                        el?.laptopId?.id ||
                        0
                    );
                    const res = await createOrder({ carts });
                    if (!res) return;
                    setProducts([]);
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
