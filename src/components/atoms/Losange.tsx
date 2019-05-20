import styled from '@emotion/styled';
import { theme } from '@root';

const Losange = styled('span')`
  display: inline-block;
  border: 2px solid ${theme.colors.primaryLighter};
  height: 10px;
  width: 10px;
  box-sizing: border-box;
  transform: rotate(45deg);
  border-radius: 2px;
`;

export default Losange;
