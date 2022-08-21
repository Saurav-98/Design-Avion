import React from 'react';
import logo from '../assets/logo.png';

import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavContainer>
      <Wrapper>
        <Left>
          <Logo>
            <img src={logo} alt="desined logo " />
          </Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Join Today</Button>
      </Wrapper>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  height: 105px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 200px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Menu = styled.ul`
  display: flex;
`;
const MenuItem = styled.li`
  margin-right: 2rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 0.65rem 1rem;
  background-color: #de0101;
  color: white;
  font-weight: bold;
  border-radius: 0.65rem;
  cursor: pointer;
`;
