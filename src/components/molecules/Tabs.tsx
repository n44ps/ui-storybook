/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC, useState } from 'react';
import { darken } from 'polished';
import styled from '@emotion/styled';
import { Block } from '@layout';
import { theme } from '@root';
import { space } from 'styled-system';
import { Box, Flex } from '@rebass/grid/emotion';

interface Children<T> {
  props: T;
}

interface Tabs {
  children: Children<Tab>[];
  isBlock?: boolean;
  [x: string]: any;
}

interface Tab {
  name: string;
  children?: any;
  active?: number;
}

const Tabs: FC<Tabs> = ({ children, isBlock, ...rest }) => {
  const [active, setActive] = useState(0);
  const Content = isBlock ? (
    <Block
      css={css`
        overflow: hidden;
      `}
    >
      {children[active].props.children}
    </Block>
  ) : (
    <Box px={5} pt={5}>
      {children[active].props.children}
    </Box>
  );

  return (
    <Box {...rest}>
      <TabsHeading>
        {children.map(({ props: { name } }, index) => (
          <Name
            key={`name_${name}`}
            active={active === index}
            onClick={() => setActive(index)}
          >
            {name}
          </Name>
        ))}
      </TabsHeading>
      {Content}
    </Box>
  );
};

const borderBottom = `
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${theme.tabs.borderHeight};
    border-radius: ${theme.tabs.borderRadius};
    width: 100%;
`;

const TabsHeading: any = styled(Flex)`
    position: relative;
    &:before {
        ${borderBottom}
        background: ${({ theme }) => theme.colors.lighter};
    }
`;

const Name: FC<any> = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
  font-family: ${theme.tabs.fontFamily};
  color: ${({ theme }) => theme.colors.textLight};
  padding-bottom: ${theme.tabs.paddingBottom};
  transition: all 0.2s ease;
  &:before {
    ${borderBottom}
  }
  ${({ active, theme }) =>
    active &&
    `
        transition: all .2s ease;
        color: ${theme.colors.primary};
        &:before {
            background: ${theme.colors.primary};
        }
    `}
  ${({ active }) =>
    !active &&
    `
        cursor: pointer;
        &:hover {
            color: ${({ theme }: any) =>
              darken(theme.darkenValue, theme.colors.textLight)};
        }
    `}
`;

Name.defaultProps = {
  active: false
};

const StyledTabs = styled(Tabs)`
  ${space};
`;

export default StyledTabs;

export const Tab: FC<Tab> = () => null;
