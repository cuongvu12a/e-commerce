import {
  Pagination as AntPagination,
  PaginationProps as AntPaginationProps,
} from 'antd';
import styled, { Palette } from 'styled-components';

interface PaginationWrapperProps {
  palette: Palette;
}

interface PaginationProps extends PaginationWrapperProps, AntPaginationProps {
  containerClass?: string;
}

export const Pagination = ({
  containerClass,
  palette,
  ...rest
}: PaginationProps) => {
  return (
    <PaginationWrapper palette={palette} className={`${containerClass || ''}`}>
      <AntPagination {...rest} />
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div<PaginationWrapperProps>(
  ({ palette, theme }) => `
  .ant-pagination-prev, .ant-pagination-next{
    margin: 0 0.5rem;
  }
  .ant-pagination-item-link{
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    background: ${theme.colors[palette]}1F !important;
    color: ${theme.colors[palette]} !important;
  }
  li:not(.ant-pagination-disabled) .ant-pagination-item-link:hover{
    background: ${theme.colors[palette]} !important;
    color: white !important;
  }

  .ant-pagination-item{
    position: relative;
    margin: 0;
    border: none;
    background: ${theme.colors[palette]}1F !important;
    color: ${theme.colors[palette]} !important;
    a{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: currentColor;
    }
    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: scale(1.15);
    }
  }
  .ant-pagination-item:hover,.ant-pagination-item-active{
    background: transparent;
    color: white !important;
    &::before{
      background: ${theme.colors[palette]} !important;
    }
  }
  .ant-pagination li:nth-child(2){
    border-radius: 50% 0 0 50%;
  }
  .ant-pagination li:nth-last-child(2){
    border-radius: 0 50% 50% 0;
  }
`
);
