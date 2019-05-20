import React, { FC, Children } from 'react';
import styled from '@emotion/styled';
import { theme } from '@root';
import {
  variant,
  space,
  SpaceProps,
  display,
  DisplayProps
} from 'styled-system';
import { Space } from '@layout';

interface ButtonProps extends SpaceProps, DisplayProps {
  disabled?: boolean;
  full?: boolean;
  isSubmitting?: boolean;
  variant?: string;
  [x: string]: any;
}

const Button: FC<ButtonProps> = ({
  children,
  isSubmitting,
  as,
  type,
  ...rest
}) => {
  const length = Children.count(children);
  return (
    <StyledButton {...rest} as={as} type={as === undefined ? type : null}>
      {Children.map(children, (Child: any, index) => {
        const isObject = typeof Child === 'object';
        return isObject ? (
          <Space mr={index === 0 && length > 1 ? 3 : 0} ml={index >= 1 ? 3 : 0}>
            {Child}
          </Space>
        ) : (
          Child
        );
      })}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  full: false,
  type: 'button'
};

const ButtonStyle = variant({
  key: 'buttons'
});

const StyledButton = styled<'button', ButtonProps>('button')`
  outline: none;
  font-size: ${theme.button.fontSize};
  font-family: ${theme.button.fontFamily};
  height: ${theme.button.height};
  border-radius: ${theme.button.height};
  padding: 0 ${theme.button.paddingVertical};
  ${space}
  box-sizing: border-box;
  display: inline-flex;
  letter-spacing: 2px;
  text-transform: lowercase;
  width: ${(props: any) => (props.full ? '100%' : 'auto')};
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.2s ease;
  }
  ${display}
  ${ButtonStyle};
`;

export default Button;
