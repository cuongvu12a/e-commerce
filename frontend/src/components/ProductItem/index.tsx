import styled from 'styled-components';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button, Ellipsis } from '@ui';
import { Product } from '@models';
import { ModeProductItem, ROUTE } from '@constants';
import {
  IconShoppingCart,
  IconHeartEmpty,
  IconHeart,
  IconStar,
  IconStarEmpty,
  IconStarHalf,
  IconRemove,
} from '@components/Icons';
import { AspectRatio, Image } from '@components/Image';

interface ProductItemProps {
  mode: ModeProductItem;
  product: Product;
}

export const ProductItem = ({ mode, product }: ProductItemProps) => {
  const { t } = useTranslation();

  return (
    <ProductItemWrapper className='flex rounded-md section-shadow bg-gray-50 dark:bg-neutral-50'>
      <Col span={6} className='p-4'>
        <div className='mx-auto' style={{ maxWidth: '10rem' }}>
          <Link to={ROUTE.SHOP}>
            <AspectRatio ratio={[3, 4]}>
              <Image src={product.material} />
            </AspectRatio>
          </Link>
        </div>
      </Col>
      <Col span={12} className='flex flex-col gap-2 py-6 px-4'>
        <Link
          to={ROUTE.SHOP}
          className='text-gray-700 dark:text-neutral-700 hover:text-violet-600 dark:hover:text-violet-600 font-semibold'
        >
          {product.name}
        </Link>
        <span className='text-gray-800 dark:text-neutral-800 text-xs'>
          By&nbsp;
          <Link
            to={ROUTE.SHOP}
            className='text-violet-600 hover:text-violet-600 font-semibold'
          >
            Admin
          </Link>
        </span>
        <span className='text-gray-700 dark:text-neutral-700'>
          <IconStar className='w-5 text-orange-600' />
          <IconStar className='w-5 text-orange-600' />
          <IconStarHalf className='w-5 text-orange-600' />
          <IconStarEmpty className='w-5' />
          <IconStarEmpty className='w-5' />
        </span>
        <Ellipsis
          line={5}
          className='text-gray-700 dark:text-neutral-700'
          style={{ lineHeight: 1.5 }}
        >
          {product.description}
        </Ellipsis>
      </Col>
      <Col
        span={6}
        className='flex flex-col justify-center p-4 border-l border-gray-200 dark:border-neutral-200'
      >
        <span className='text-center text-lg font-medium text-violet-600'>
          {`$${product.price}`}
        </span>
        {mode === 'fromCart' && (
          <Button palette='primary' className='flex items-center w-full mt-4'>
            <IconRemove className='w-4 ' />
            {/* <IconHeartEmpty className='w-4 text-gray-700 dark:text-neutral-700' /> */}
            <span className='text-sm'>{t`button.remove`}</span>
          </Button>
        )}
        <Button
          palette='primary'
          type={mode === 'fromCart' ? 'primary' : 'default'}
          className='flex items-center w-full mt-4'
        >
          {/* <IconHeart className='w-4 text-red-600' /> */}
          <IconHeartEmpty
            className={`w-4  ${
              mode === 'fromCart'
                ? 'text-white'
                : 'text-gray-700 dark:text-neutral-700'
            }`}
          />
          <span className='text-sm'>{t`button.wishlist`}</span>
        </Button>
        {mode !== 'fromCart' && (
          <Button
            palette='primary'
            type='primary'
            className='flex items-center w-full mt-4'
          >
            <IconShoppingCart className='w-4' />
            {/* <span className='text-sm'>{t`button.viewInCart`}</span> */}
            <span className='text-sm'>{t`button.addToCart`}</span>
          </Button>
        )}
      </Col>
    </ProductItemWrapper>
  );
};

const ProductItemWrapper = styled(Row)(
  () => `
  transition: all .3s ease;
  &:hover{
    transform: translateY(-5px);
    box-shadow: 0 4px 25px 0 #22292f40;
  }
`
);
