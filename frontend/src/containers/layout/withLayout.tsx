import { Navigate } from 'react-router-dom';
import { Row, Col, Spin } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { useTranslation } from 'react-i18next';

import { ROUTE } from '@constants';
import { useAuthStatus } from '@hooks';
import { TopBar } from '@containers/TopBar';
import { NavigationMenu } from '@containers/NavigationMenu';

export const withLayout = (Component: React.FC) => () => {
  const { t } = useTranslation();
  const { isChecking, userInfo, error } = useAuthStatus();
  if (isChecking)
    return (
      <Spin className='flex justify-center items-center h-full' size='large' />
    );
  if (!userInfo) return <Navigate to={ROUTE.LOGIN} />;
  return (
    <Row className='relative w-full h-full bg-gray-100 dark:bg-neutral-100'>
      <Col>
        <NavigationMenu />
      </Col>
      <Col className='flex-1 h-full'>
        <Scrollbars>
          <div className='flex flex-col min-h-full py-3 px-8'>
            <div className='sticky top-0 left-0 right-0 pb-8 bg-gray-100 dark:bg-neutral-100'>
              <TopBar />
            </div>
            <Component />
            <span className='mt-auto pt-3 text-gray-700 dark:text-neutral-700'>
              {t`content.copyright`}
            </span>
          </div>
        </Scrollbars>
      </Col>
    </Row>
  );
};
