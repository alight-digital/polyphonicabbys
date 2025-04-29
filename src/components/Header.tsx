import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

// Styled Components
const HeaderContainer = styled.header`
  width: 100%;
  background-color: #121121;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 9999;
  top: 0;
`;

const Logo = styled.div`
  font-size: 24px;
  color: #fff;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const LinkStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  width: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.div`
  height: 5px;
  background-color: #fff;
  border-radius: 5px;
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  top: 60px;
  right: 0;
  background-color: #000;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  justify-content: center;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MobileNavItem = styled.li`
  margin: 15px 0;
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderContainer>
      <Logo>
        <LinkStyled to="/">
          <StaticImage
            src="../images/logo.png"
            alt="Polyphonic Abyss Logo"
            placeholder="blurred"
            layout="constrained"
            width={200}
          />
        </LinkStyled>
      </Logo>

      

      <NavLinks>
        <NavItem>
          <LinkStyled to="/">DOMOV</LinkStyled>
        </NavItem>
        <NavItem>
          <LinkStyled to="/about">O NÁS</LinkStyled>
        </NavItem>
        <NavItem>
          <LinkStyled to="/services">SLUŽBY</LinkStyled>
        </NavItem>
        <NavItem>
          <LinkStyled to="/contact">KONTAKT</LinkStyled>
        </NavItem>
      </NavLinks>
          
      <Hamburger onClick={toggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </Hamburger>

      <MobileMenu isOpen={isMenuOpen}>
        <MobileNavLinks>
          <MobileNavItem>
            <LinkStyled to="/">DOMOV</LinkStyled>
          </MobileNavItem>
          <MobileNavItem>
            <LinkStyled to="/about">O NÁS</LinkStyled>
          </MobileNavItem>
          <MobileNavItem>
            <LinkStyled to="/services">SLUŽBY</LinkStyled>
          </MobileNavItem>
          <MobileNavItem>
            <LinkStyled to="/contact">KONTAKT</LinkStyled>
          </MobileNavItem>
        </MobileNavLinks>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
