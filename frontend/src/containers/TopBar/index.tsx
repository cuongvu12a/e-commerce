import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import { Logo } from '@components/Icons';
import { Locales } from '@components/Locales';
import { ThemeSelect } from '@components/ThemeSelect';
import { ROUTE } from '@constants';

export const TopBar = () => {
  return (
    <TopBarWrapper className='fixed top-0 left-0 w-full'>
      <Row
        className='justify-between items-center px-4'
        gutter={16}
        style={{ minHeight: '3.75rem' }}
      >
        <Col>
          <Link to={ROUTE.HOME}>
            <Logo />
          </Link>
        </Col>
        <Col>
          <Row className='items-center' gutter={8}>
            <Col>
              <Locales />
            </Col>
            <Col>
              <ThemeSelect />
            </Col>
          </Row>
        </Col>
      </Row>
    </TopBarWrapper>
  );
};

const TopBarWrapper = styled.div(
  ({ theme }) => `
    background: ${theme.colors.bg.section};
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  `
);
