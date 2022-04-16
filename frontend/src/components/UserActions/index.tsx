import { useMemo } from 'react';
import { Row, Col, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { STORAGE_KEYS, StorageRemoveItem } from '@api';
import { ROUTE } from '@constants';
import { DropDown, Menu, MenuItem } from '@ui';
import { IconLogout } from '@components/Icons';

export const UserActions = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const menu = useMemo(() => {
    const handleLogout = () => {
      StorageRemoveItem(STORAGE_KEYS.TOKEN);
      navigate(ROUTE.LOGIN);
    };

    return (
      <Menu palette='primary'>
        <MenuItem
          key='logout'
          icon={<IconLogout className='w-4' />}
          content={t`button.logout`}
          onClick={handleLogout}
        />
      </Menu>
    );
  }, []);

  return (
    <DropDown overlay={menu} trigger={['click']} className='cursor-pointer'>
      <Row gutter={8}>
        <Col className='flex flex-col items-end text-gray-700 dark:text-neutral-700'>
          <span className=' font-semibold  text-sm'>John Doe</span>
          <span className='text-xs'>cuongvu.acc@gmail.com</span>
        </Col>
        <Col>
          <Avatar size={40}>Avatar</Avatar>
        </Col>
      </Row>
    </DropDown>
  );
};
