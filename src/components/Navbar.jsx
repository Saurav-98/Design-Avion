import React from 'react';

import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavContainer>
      <Wrapper>
        <span>Logo</span>
        <span>Button</span>
      </Wrapper>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;
const Left = styled.div``;
