import React, { useState } from 'react';
import { SidebarWrapper } from './style';
import * as S from './style';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const Sidebar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { title: 'Painel', icon: <DashboardIcon />, path: '/adm/dashboard' },
    { title: 'Estoque', icon: <ShoppingCartIcon />, path: '/adm/estoque' },
    { title: 'Vendas', icon: <MonetizationOnIcon />, path: '/vendas' },
    { title: 'Configurações', icon: <SettingsIcon />, path: '/settings' },
  ]);

  return (
    <SidebarWrapper>
      <S.Menu>
        {menuItems.map((item) => (
          <S.MenuItemWrapper key={item.title}>
            <S.MenuItemLink href={item.path}>
              <S.MenuItemIcon>{item.icon}</S.MenuItemIcon>
              <span>{item.title}</span>
            </S.MenuItemLink>
          </S.MenuItemWrapper>
        ))}
      </S.Menu>

      <S.TabMenu>
        {menuItems.map((item) => (
          <S.TabMenuItem key={item.title} href={item.path}>
            <S.MenuItemIcon>{item.icon}</S.MenuItemIcon>
          </S.TabMenuItem>
        ))}
      </S.TabMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;
