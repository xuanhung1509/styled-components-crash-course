import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  padding: 15px 60px;
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-family: inherit;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
