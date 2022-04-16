import { Table as AntTable, TableProps as AntTableProps } from 'antd';
import styled, { Palette } from 'styled-components';

interface TableWrapperProps {
  palette: Palette;
}

interface TableProps extends AntTableProps<any>, TableWrapperProps {
  containerClass?: string;
}

export function Table({
  palette,
  containerClass,
  className,
  ...rest
}: TableProps) {
  return (
    <TableWrapper
      palette={palette}
      className={`${containerClass || ''}`}
    >
      <AntTable
        {...rest}
        className={`${className || ''}`}
      />
    </TableWrapper>
  );
}

const TableWrapper = styled.div<TableWrapperProps>(
  ({ palette, theme }) => `
  .ant-table{
    background: ${theme.colors.bg['table-header']} !important;
  }
  .ant-table-thead{
    .ant-table-cell{
      background: ${theme.colors.bg['table-header']} !important;
      color: ${theme.colors.text.secondary} !important;
      border-color: ${theme.colors.divider} !important;
    }
  }
  .ant-table-tbody{
    .ant-table-cell{
      background: ${theme.colors.bg.section} !important;
      border-color: ${theme.colors.divider} !important;
    }
  }
  `
);
