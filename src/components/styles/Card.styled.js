import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout || 'row'};
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 40px;
  margin: 40px 0;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
  }

  img {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;
