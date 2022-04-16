import { Link } from 'react-router-dom';
import { Row, Col, Spin } from 'antd';
import { Navigate } from 'react-router-dom';

import { useAuthStatus } from '@hooks';
import { FormLogin } from '@containers/Form';
import { BannerLogin, Logo } from '@components/Icons';
import { ROUTE } from '@constants';

export const Login = () => {
  const { isChecking, userInfo, error } = useAuthStatus();
  if (isChecking)
    return (
      <Spin className='flex justify-center items-center h-full' size='large' />
    );
  if (userInfo) return <Navigate to={ROUTE.HOME} />;
  return (
    <>
      <Link to={ROUTE.HOME} className='text-violet-600'>
        <Logo className='fixed top-9 left-10 z-10' />
      </Link>
      <Row className='items-center h-full'>
        <Col
          span={0}
          lg={15}
          className='lg:flex items-center justify-center h-full p-16 bg-gray-100 dark:bg-neutral-100'
        >
          <BannerLogin />
        </Col>
        <Col
          span={24}
          lg={9}
          className='flex justify-center items-center h-full p-3 xl:px-12 bg-gray-50 dark:bg-neutral-50'
        >
          <FormLogin />
        </Col>
      </Row>
    </>
  );
};

export default Login;
