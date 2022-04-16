import React from 'react';
import {
  Dropdown as AntDropDown,
  DropDownProps as AntDropDownProps,
} from 'antd';

interface DropDownProps extends AntDropDownProps {
  children: React.ReactNode
}

export const DropDown = ({ ...rest }: DropDownProps) => {
  return <AntDropDown {...rest} />;
};
