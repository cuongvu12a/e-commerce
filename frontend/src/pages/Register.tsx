import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { FormRegister } from '@containers/Form';
import { BannerRegister, Logo } from '@components/Icons';
import { ROUTE } from '@constants';

export const Register = () => {
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
          <BannerRegister />
        </Col>
        <Col
          span={24}
          lg={9}
          className='flex justify-center items-center h-full p-3 xl:px-12 bg-gray-50 dark:bg-neutral-50'
        >
          <FormRegister />
        </Col>
      </Row>
    </>
  );
};

export default Register;
