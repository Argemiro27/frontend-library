import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import { colors } from '../../../styles/global';

export interface ILayout extends HTMLProps<HTMLElement> {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex; /* Adicionado */
  width: 100%;
`;

const SidebarContainer = styled.div`
  width: 200px; /* Defina a largura do menu aqui */
`;

const Content = styled.div`
  min-height: 100vh;
  flex: 1;
`;

const Layout = ({ children }: ILayout) => {
  return (
    <Container>
      <ContentContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>{children}</Content>
      </ContentContainer>
    </Container>
  );
}

export default Layout;
