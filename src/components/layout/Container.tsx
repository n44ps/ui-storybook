import styled from '@emotion/styled';
import { Box, Flex } from '@rebass/grid/emotion';
import { theme } from '@root';
import React, { FC } from 'react';
import { SpaceProps, FlexDirectionProps, AlignItemsProps } from 'styled-system';

interface Props extends SpaceProps, FlexDirectionProps, AlignItemsProps {
  children: any;
  full?: boolean;
  className?: string;
}

const Content: FC<any> = props => <Flex {...props} />;

const Container: FC<Props> = ({ children, py, className, ...props }) => (
  <Box className={className}>
    <StyledContent py={py} flexDirection='column' {...props}>
      {children}
    </StyledContent>
  </Box>
);

const StyledContent = styled(Content)`
  max-width: ${({ full }: any) => (full ? '100%' : `${theme.maxWidth}px`)};
  margin: 0 auto;
`;

const StyledContainer = styled(Container)`
  ${({ full }) => full && 'overflow: hidden;'}
  background: ${({ theme }) => theme.colors.section};
  position: relative;
  z-index: 1;
`;

Container.defaultProps = {
  mx: 'auto',
  px: [3, 3, 3, 0],
  py: 0
};

export default StyledContainer;
