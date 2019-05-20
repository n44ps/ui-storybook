/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { theme } from '@root';
import css from '@emotion/css';
import { Box } from '@rebass/grid/emotion';
import { FC } from 'react';
import { SpaceProps } from 'styled-system';

interface Props {
  children: any;
  type: 'success' | 'error';
}

const TextMessage: FC<Props> = styled('span')`
  font-family: "Overpass Mono";
  ${({ type }) => {
    const { danger, dangerLight, success, successLight } = theme.colors;
    const color = type === 'error' ? danger : success;
    const colorGradient = type === 'error' ? dangerLight : successLight;
    return `
    color: ${color};
    background-image: linear-gradient(
      to right,
      ${colorGradient} 75%,
      ${colorGradient} 75%
    );
  `;
  }}
  background-position: 0 bottom;
  background-repeat: repeat-x;
  background-size: 8px 8px;
  font-size: 15px;
`;

const Message: FC<Props & SpaceProps> = ({ children, type, ...rest }) => (
  <Box
    css={css`
      text-align: center;
    `}
    {...rest}
  >
    <TextMessage type={type}>{children}</TextMessage>
  </Box>
);

export default Message;
