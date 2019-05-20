import styled from '@emotion/styled';
import { theme, bs } from '@root';
import {
  space,
  width,
  color,
  WidthProps,
  SpaceProps,
  ColorProps,
  textAlign,
  TextAlignProps
} from 'styled-system';

interface Props extends ColorProps, SpaceProps, WidthProps, TextAlignProps {
  className?: string;
  disabled?: boolean;
  as?: string;
}

const commonStyle: any = `
  font-family: ${theme.title.fontFamily};
  line-height: 1.25;
  margin: 0;
`;

export const H1 = styled<'h1', Props>('h1')`
  ${commonStyle};
  ${space}
  ${width}
  ${color}
  ${textAlign}
  font-size: ${theme.fontSize.h2};
  font-weight: 900;
  @media (min-width: ${bs.small}) {
    font-size: ${theme.fontSize.h1};
  }
`;

export const H2 = styled<'h2', Props>('h2')`
  ${commonStyle};
  ${space}
  ${width}
  ${color}
  ${textAlign}
  font-size: ${theme.fontSize.h2};
  font-weight: 900;
`;

export const H3 = styled<'h3', Props>('h3')`
  ${commonStyle};
  ${space}
  ${width}
  ${color}
  ${textAlign}
  font-size: ${theme.fontSize.h3};
  font-weight: 900;
`;

export const H4 = styled<'h4', Props>('h4')`
  ${commonStyle};
  ${space}
  ${width}
  ${color}
  ${textAlign}
  font-size: ${theme.fontSize.h4};
`;

export const SubH1 = styled<'h5', Props>('h5')`
  ${commonStyle};
  ${space}
  ${width}
  ${color}
  ${textAlign}
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${theme.fontSize.h5};
`;

export const SubH2 = styled<'h6', Props>('h6')`
  ${commonStyle};
  ${space}
  ${width}
  ${color}
  ${textAlign}
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${theme.fontSize.h6};
`;

export const SubH3 = styled<'span', Props>('span')`
  ${commonStyle};
  ${space}
  ${width}
  ${color}
  ${textAlign}
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${theme.fontSize.span};
`;
