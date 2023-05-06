import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const FilterLabelText = styled.span`
  margin-bottom: ${props => props.theme.spacing(1)};

  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 18px;
`;

export const FilterField = styled.input`
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  width: ${props => props.theme.spacing(75.5)};

  outline: none;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.bgd};

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.borderHover};
  }
`;
