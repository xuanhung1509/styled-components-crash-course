import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 100px 0 60px;
  background: ${({ theme }) => theme.colors.footer};
  color: #fff;

  img {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    width: 100%;
  }

  p {
    margin-top: 20px;
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;

    p {
      text-align: center;
    }
  }
`;
