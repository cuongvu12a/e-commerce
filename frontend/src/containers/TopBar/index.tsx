import styled from 'styled-components';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

import { Locales } from '@components/Locales';
import { ThemeSelect } from '@components/ThemeSelect';
import { UserActions } from '@components/UserActions';

interface TopBarProps {
  containerClass?: string;
}

export const TopBar = ({ containerClass }: TopBarProps) => {
  const { t } = useTranslation();

  return (
    <TopBarWrapper
      className={`${
        containerClass || ''
      } rounded-md section-shadow`}
    >
      <Row
        className='justify-between items-center px-4'
        gutter={16}
        style={{ minHeight: '3.75rem' }}
      >
        <Col></Col>
        <Col>
          <Row className='items-center' gutter={16}>
            <Col>
              <Locales />
            </Col>
            <Col>
              <ThemeSelect />
            </Col>
            <Col>
              <UserActions />
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
  `
);
