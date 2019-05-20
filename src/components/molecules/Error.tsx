import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@root';
import { AlertTriangle } from 'react-feather';

const Error = styled('small')`
  color: inherit;
  font-size: ${theme.fontSize.small};
`;

const ErrorComponent = ({ error }: any) => (
  <>
    <AlertTriangle /> <Error>{error}</Error>
  </>
);

export default ErrorComponent;
