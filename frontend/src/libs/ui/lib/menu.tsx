import {
  Menu as AntMenu,
  MenuProps as AntMenuProps,
  MenuItemProps as AntMenuItemProps,
} from 'antd';
import styled, { Palette } from 'styled-components';

interface MenuWrapperProps {
  palette: Palette;
}

interface MenuProps extends AntMenuProps, MenuWrapperProps {
  containerClass?: string;
}

export const Menu = ({ palette, containerClass, ...rest }: MenuProps) => {
  return (
    <MenuWrapper palette={palette} className={`${containerClass || ''}`}>
      <AntMenu {...rest} />
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div<MenuProps>(
  ({ palette, theme }) => `
  .ant-menu{
    border: none;
  }
  .ant-dropdown-menu{
    background: ${theme.colors.bg.section};
  }
  .ant-dropdown-menu-item{
    color: ${theme.colors.text.primary};
  }
  .ant-dropdown-menu-item-active{
    background: ${theme.colors.primary}1F;
    color: ${theme.colors.primary};
  }
  `
);

interface MenuItemProps extends AntMenuItemProps {
  content: string;
  icon?: React.ReactNode;
}

export const MenuItem = ({ icon, content, ...rest }: MenuItemProps) => {
  return (
    <AntMenu.Item {...rest}>
      <div className='flex gap-2 items-center'>
        {icon}
        <span>{content}</span>
      </div>
    </AntMenu.Item>
  );
};

export const SubMenu = AntMenu.SubMenu;
