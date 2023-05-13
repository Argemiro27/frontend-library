import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Menu = styled.nav`
  flex: 0 0 200px;
  background-color: #333;
  color: #fff;
`;

const Section = styled.div`
  flex: 1;
  padding: 20px;
`;

const MenuItem = styled.a`
  display: block;
  padding: 10px;
  color: inherit;
  text-decoration: none;
  &:hover {
    background-color: #555;
  }
`;

type MenuItemType = {
  title: string;
  content: React.ReactNode;
};

const Dashboard: React.FC<{ menuItems: MenuItemType[] }> = ({ menuItems }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const handleMenuItemClick = (index: number) => {
    setActiveItemIndex(index);
  };

  return (
    <Container>
      <Menu>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(index)}
            style={activeItemIndex === index ? { backgroundColor: '#555' } : {}}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
      <Section>{menuItems[activeItemIndex].content}</Section>
    </Container>
  );
};

export default Dashboard;
