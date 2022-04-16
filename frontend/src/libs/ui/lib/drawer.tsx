import { ReactNode } from 'react';
import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from 'antd';

interface DrawerProps extends AntDrawerProps {
  children: ReactNode;
}

export const Drawer = ({ className, ...rest }: DrawerProps) => {
  return <AntDrawer {...rest} className={`${className || ''}`} width={420} />;
};
