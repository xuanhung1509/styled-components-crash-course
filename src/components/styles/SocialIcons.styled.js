import styled from 'styled-components';

export const StyledSocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  li {
    list-style: none;
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
  }
`;
