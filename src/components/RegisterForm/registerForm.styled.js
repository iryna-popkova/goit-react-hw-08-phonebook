import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 15px;
  border: 3px solid blueviolet;
  border-radius: 4px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: lightskyblue;
  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  color: black;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid pink;
  color: blueviolet;
  forn-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: lightskyblue;
  }
`;
