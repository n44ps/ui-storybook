import styled from '@emotion/styled';
import { theme } from '@root';
import { space, height, SpaceProps, HeightProps } from 'styled-system';
import { FC } from 'react';
import { Flex } from '@rebass/grid/emotion';

interface Props extends SpaceProps, HeightProps {
  [x: string]: any;
}

const Block: FC<Props> = styled(Flex)`
  ${height}
  ${space}
  background: ${theme.colors.light};
  box-shadow: ${theme.boxShadow};
  border-radius: 2px;
`;

Block.defaultProps = {
  pt: 4,
  px: 5,
  pb: 5,
  flexDirection: 'column'
};

export default Block;
