import { Container } from '@layout';
import React, { FC } from 'react';
import { SpaceProps, BackgroundProps } from 'styled-system';
import { withTheme } from 'emotion-theming';

interface SectionProps extends SpaceProps, BackgroundProps {
  children: any;
  full?: boolean;
  id?: string;
}

const Section: FC<SectionProps> = ({ children, ...rest }) => (
  <Container {...rest} py={7}>
    {children}
  </Container>
);

export default withTheme(Section);
