import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: blueviolet;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 4px 6px;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid lightskyblue;
  color: blueviolet;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
  background-color: pink;

  &:hover {
    background-color: lightskyblue;
  }
`;
