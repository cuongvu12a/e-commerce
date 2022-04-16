import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { InputSearch } from '@ui';

interface SearchProductProps {
  containerClass?: string;
}

export const SearchProduct = ({ containerClass }: SearchProductProps) => {
  const { t } = useTranslation();

  return (
    <SearchProductWrapper className={`${containerClass || ''} overflow-hidden`}>
      <InputSearch placeholder={t`placeholder.searchProduct`}/>
    </SearchProductWrapper>
  );
};

const SearchProductWrapper = styled.div(
  ({ theme }) => `
  .ant-input-group-addon{
    background: transparent;
    pointer-events: none;
  }
  .ant-btn{
    height: 3rem;
    border: none !important;
    color: ${theme.colors.text.placeholder} !important;
  }
  .ant-input{
    height: 3rem;
    padding-left: 16px;
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
    color: ${theme.colors.text.primary};
    transition: all .1s ease;
    &::placeholder{
      color: ${theme.colors.text.placeholder};
      font-size: 13px;
      transition: all .1s ease;
    }
    &:focus::placeholder{
      transform: translateX(6px);
    }
  }
`
);
