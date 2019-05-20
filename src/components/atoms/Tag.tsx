import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@root';
import { SubH2 } from '@atoms';
import { alignSelf } from 'styled-system';

const Tag = styled(props => <SubH2 {...props} />)`
  background: ${theme.colors.secondary};
  color: ${theme.colors.light};
  border-radius: 30px;
  height: 30px;
  line-height: 30px;
  display: inline-flex;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  ${alignSelf}
`;

export default Tag;
