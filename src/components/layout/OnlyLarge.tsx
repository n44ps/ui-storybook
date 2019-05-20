import styled from '@emotion/styled';
import { Box } from '@rebass/grid/emotion';
import { bs } from '@root';

const OnlyLarge: any = styled(Box)`
  display: none;
  @media (min-width: ${bs.large}) {
    display: block;
  }
`;

export default OnlyLarge;
