import styled from '@emotion/styled';

export const ListItem = styled.li`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const RemoveButton = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid blueviolet;
  display: flex;
  align-items: center;

  &:hover {
    background-color: pink;
  }
`;

export const ContactData = styled.p`
  color: black;
`;
