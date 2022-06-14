import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  align-items: flex-start;
  gap: 1rem;

  & > * {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: ${({ reverse }) =>
      (reverse && 'column-reverse') || 'column'};
  }
`;
