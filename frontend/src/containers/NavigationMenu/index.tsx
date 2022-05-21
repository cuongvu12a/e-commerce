import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Menu, MenuItem, SubMenu } from '@ui';
import { ROUTE } from '@constants';
import {
  Logo,
  IconHome,
  IconCircle,
  IconShoppingCart,
  IconFile,
} from '@components/Icons';

export const NavigationMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectMenuItem = (value: { key: string }) => {
    const listPath = Object.values(ROUTE) as string[];
    if (!listPath.includes(value.key)) return;
    navigate(value.key);
  };

  return (
    <NavigationWrapper className='h-full bg-gray-50 dark:bg-neutral-50 py-8 px-4 w-60'>
      <div className='mb-2 px-4'>
        <Link to={ROUTE.HOME}>
          <Logo />
        </Link>
      </div>
      <Menu
        palette='primary'
        mode='inline'
        onSelect={handleSelectMenuItem}
        defaultSelectedKeys={[location.pathname]}
      >
        <SubMenu
          key='dashboard'
          icon={<IconHome className='w-6' />}
          title={t`button.dashboard`}
        >
          <MenuItem
            key={ROUTE.DASHBOARD_eCOMMERCE}
            content={t`button.eCommerce`}
            icon={<IconCircle className='w-2' />}
          />
          <MenuItem
            key={ROUTE.DASHBOARD_ANALYTICS}
            content={t`button.analytics`}
            icon={<IconCircle className='w-2' />}
          />
        </SubMenu>
      </Menu>
      <div className='mt-4 mb-3 px-4 text-xs text-gray-700 dark:text-neutral-700 uppercase'>
        {t`title.appsAndPages`}
      </div>
      <Menu
        palette='primary'
        mode='inline'
        onSelect={handleSelectMenuItem}
        defaultSelectedKeys={[location.pathname]}
      >
        <SubMenu
          key='e-commerce'
          icon={<IconShoppingCart className='w-6' />}
          title={t`button.eCommerce`}
        >
          <MenuItem
            key={ROUTE.SHOP}
            content={t`button.shop`}
            icon={<IconCircle className='w-2' />}
          />
          <MenuItem
            key={ROUTE.WISHLIST}
            content={t`button.wishlist`}
            icon={<IconCircle className='w-2' />}
          />
          <MenuItem
            key={ROUTE.CHECKOUT}
            content={t`button.checkout`}
            icon={<IconCircle className='w-2' />}
          />
        </SubMenu>
        <SubMenu
          key='manage'
          icon={<IconFile className='w-6' />}
          title={t`button.manage`}
        >
          <MenuItem
            key={ROUTE.LAPTOP}
            content={t`button.laptop`}
            icon={<IconCircle className='w-2' />}
          />
          <MenuItem
            key={ROUTE.CLOTHES}
            content={'Clothes'}
            icon={<IconCircle className='w-2' />}
          />
          <MenuItem
            key={ROUTE.BOOK}
            content={'Book'}
            icon={<IconCircle className='w-2' />}
          />
        </SubMenu>
      </Menu>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div(
  ({ theme }) => `
  box-shadow: 0 0 15px 0 #22292F0D;
  .ant-menu{
    background: ${theme.colors.bg.section};
    transition: none;
  }
  .ant-menu-submenu-arrow{
    color: currentColor !important;
  }
  .ant-menu-submenu-active .ant-menu-submenu-title, .ant-menu-item-active{
    transform: translateX(8px);
  }
  .ant-menu-submenu-title , .ant-menu-item{
    padding: 10px 16px !important;
    background: transparent !important;
    font-size: 1rem;
    color: ${theme.colors.text.primary} !important;
    transition: transform 0.1s ease, color 0s, background 0s !important;
  }
  .ant-menu-item{
    border-radius: 6px;
    background: transparent !important;
    overflow: hidden;
    transition: transform 0.1s ease, color 0s, background 0s !important;
    &:after{
      border: none !important;
    }
  }
  .ant-menu-item-selected{
    background: linear-gradient(118deg,${theme.colors.primary},${theme.colors.primary}b3) !important;
    box-shadow: 0 0 10px 1px ${theme.colors.primary}b3;
    color: white !important;
  }
`
);
