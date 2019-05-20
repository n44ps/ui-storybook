import styled from '@emotion/styled';
import { theme } from '@root';
import { SubH2 } from '@atoms';
import { Heart } from 'react-feather';
import React, { FC } from 'react';
import { Box } from '@rebass/grid/emotion';

interface Props {
  mark: number;
  className?: string;
}

const Mark: FC<Props> = ({ mark, className }) => (
  <Box mt={3}>
    <SubH2 className={className}>
      <Heart />
      {mark}
    </SubH2>
  </Box>
);

const StyledMark = styled(Mark)`
  background: transparent;
  border: ${theme.button.border} solid ${theme.colors.primaryLighter};
  color: ${theme.colors.text};
  border-radius: 30px;
  height: 30px;
  line-height: 30px;
  display: inline-flex;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  svg {
    color: ${theme.colors.secondary};
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

export default StyledMark;
