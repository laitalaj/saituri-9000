import { Link, Outlet } from "@tanstack/router";
import React from "react";
import { createGlobalStyle, styled } from "styled-components";
import { gray } from "./theme";
import { StyledLink } from "./common/StyledLink";
import { pink } from "./theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GlobalCss = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${gray.x900};
    color: ${gray.x50};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 16px;
  gap: 16px;
  width: 100%;

  background: ${gray.x800};

  border-bottom: 1px solid ${gray.x700};
`;

const NavButtons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 16px;
`;

const NavButton = styled.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
`;

const Logo = styled(StyledLink)`
  font-size: 24px;
  font-weight: 900;
  line-height: 32px;
  min-width: max-content;

  & > :nth-child(2) {
    color: ${pink.x500};
    font-weight: 700;
  }
` as typeof Link;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1200px;
  min-width: 320px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
`;

export function Layout() {
  return (
    <Container>
      <GlobalCss />
      <NavContainer>
        <Logo to="/">
          <span>Saituri&nbsp;</span>
          <span>9000</span>
        </Logo>
        <NavButtons>
          <NavButton>Etusivu</NavButton>
        </NavButtons>
      </NavContainer>
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
}