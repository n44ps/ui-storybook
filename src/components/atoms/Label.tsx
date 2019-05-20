import React, { FC } from 'react';
import styled from '@emotion/styled';
import { theme } from '@root';
import { SubH3 } from '@atoms';

interface LabelProps {
  className?: string;
  children?: any;
  disabled?: boolean;
}

const Label: FC<LabelProps> = ({ children, className, disabled }) => (
  <SubH3 className={className} disabled={disabled}>
    <span>{children}</span>
  </SubH3>
);

const StyledLabel = styled(Label)`
  position: absolute;
  z-index: 1;
  top: -${theme.form.labelPadding};
  left: -${theme.form.borderSize};
  width: calc(100% + ${theme.form.borderSize} * 2);
  box-sizing: border-box;
  display: flex;
  ${({ disabled, theme }) =>
    disabled && `color: ${theme.form.colors.disabled}`};
  &::before,
  &::after {
    display: inline-block;
    content: "";
    border-width: 0;
    border-style: solid;
    border-top-width: ${theme.form.borderSize};
    border-color: ${({ theme, disabled }) =>
      disabled ? theme.form.colors.disabled : theme.form.colors.default};
    top: ${theme.form.labelPadding};
    position: relative;
    z-index: 1;
  }
  &::before {
    left: 0;
    padding-left: calc(
      ${theme.form.paddingVertical} - ${theme.form.borderSize} * 2
    );
    border-radius: ${theme.form.borderRadius} 0 0 0;
    border-left-width: ${theme.form.borderSize};
  }
  &::after {
    flex: 1;
    right: 0;
    border-radius: 0 ${theme.form.borderRadius} 0 0;
    border-right-width: ${theme.form.borderSize};
  }
  span {
    padding: 0 ${theme.form.labelPadding};
    font-family: ${theme.title.fontFamily};
    color: inherit;
  }
`;

export const InlineLabel = styled(props => <SubH3 {...props} />)`
  color: inherit;
`;

export default StyledLabel;
