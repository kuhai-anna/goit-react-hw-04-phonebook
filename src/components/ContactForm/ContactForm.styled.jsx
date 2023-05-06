import styled from 'styled-components';
import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as Message,
} from 'formik';

export const Form = styled(FormikForm)`
  margin: 0 auto;
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(4)};
  width: ${props => props.theme.spacing(72)};

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: ${props => props.theme.colors.bgd};
`;

export const FormField = styled.div`
  :not(:last-of-type) {
    margin-bottom: ${props => props.theme.spacing(3)};
  }
  :last-of-type {
    margin-bottom: ${props => props.theme.spacing(7)};
  }
`;

export const FormLabel = styled.label`
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: 500;
`;

export const LabelText = styled.span`
  display: block;
  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const Field = styled(FormikField)`
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  width: ${props => props.theme.spacing(67.5)};

  outline: none;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.spacing(1)};

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.borderHover};
  }
`;

export const FormButton = styled.button`
  margin: 0 auto;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};

  outline: none;
  border: 1px solid transparent;
  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.btn};

  font-size: 16px;

  transition-property: background-color, border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.btnHover};
    border-color: ${props => props.theme.colors.borderHover};
  }
`;

export const ErrorMessage = styled(Message)`
  margin-top: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(1)};

  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.colors.textError};
`;
