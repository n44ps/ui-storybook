import styled from '@emotion/styled';
import { theme } from '@root';

import {
  space,
  width,
  color,
  WidthProps,
  SpaceProps,
  ColorProps,
  TextAlignProps,
  textAlign
} from 'styled-system';

interface Props extends ColorProps, SpaceProps, WidthProps, TextAlignProps {
  big?: boolean;
  ref?: any;
}

const Text = styled<'p', Props>('p')`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${theme.text.fontFamily};
  font-size: ${props => (props.big ? theme.fontSize.pBig : theme.fontSize.p)};
  margin: 0;
  line-height: 1.5;
  ${space}
  ${width}
  ${color}
  ${textAlign}
`;

export default Text;
