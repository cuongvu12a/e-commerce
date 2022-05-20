import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';

import styled, { Palette } from 'styled-components';

type SelectTypes = 'locales' | 'default';

interface SelectWrapperProps {
  palette: Palette;
  type?: SelectTypes;
}

interface SelectProps extends AntSelectProps, SelectWrapperProps {
  containerClass?: string;
  customOptions?:
    | {
        label: string;
        value: string | number;
        flag?: string;
      }[];
}

export const Select = ({
  palette,
  type,
  customOptions = [],
  ...rest
}: SelectProps) => {
  return (
    <SelectWrapper palette={palette}>
      {
        <AntSelect
          {...rest}
          showArrow={type !== 'locales'}
          bordered={type !== 'locales'}
          dropdownRender={(content) => (
            <DropdownWrapper palette={palette}>{content}</DropdownWrapper>
          )}
        >
          {customOptions?.map((el) => (
            <Option key={el.value} value={el.value}>
              <div
                className={`option-selected flex gap-2 h-full items-center justify-start pl-2 font-normal text-gray-700 dark:text-neutral-700`}
              >
                {el.flag && (
                  <img src={el.flag} alt={el.label} className='w-5' />
                )}
                <span>{el.label}</span>
              </div>
            </Option>
          ))}{' '}
        </AntSelect>
      }
    </SelectWrapper>
  );
};

export const { Option } = AntSelect;

const SelectWrapper = styled.div<SelectWrapperProps>(
  ({ palette, theme }) => `
  .ant-select-selector{
    height: 38px !important;
    border-radius: 6px !important;
  }
  .ant-select-focused , .ant-select:hover {
    .ant-select-selector{
      border-color: ${theme.colors[palette]} !important;
      box-shadow: 0 0 6px 0 ${theme.colors[palette]}!important;
    }
  }`
);

const DropdownWrapper = styled.div<SelectWrapperProps>(
  ({ palette, theme }) => `

  .ant-select-item-option-active .option-selected{
    color: ${theme.colors[palette]};
    background: ${theme.colors[palette]}1F;
  }
`
);
