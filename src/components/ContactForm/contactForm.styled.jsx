import styled from '@emotion/styled';
import {
  Form as StyledForm,
  Field as FormFieldStyled,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const FormContainer = styled.div``;

export const Form = styled(StyledForm)`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 12px;
  border: 3px solid blueviolet;
  border-radius: 4px;
  margin: 0 auto;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: lightskyblue;
  font-size: 20px;
  font-weight: 500;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
  font-weight: 600;
`;

export const Field = styled(FormFieldStyled)`
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
  border: 3px solid lightskyblue;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: pink;
  }
`;
