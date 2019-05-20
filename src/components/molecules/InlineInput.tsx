import React, { FC } from 'react';
import styled from '@emotion/styled';
import { theme } from '@root';
import { InlineLabel } from '@atoms';
import { Check } from 'react-feather';

interface InputProps {
  [x: string]: any;
  label?: string;
  disabled?: boolean;
}

interface FakeInputProps {
  checked?: boolean;
  disabled?: boolean;
  type?: string;
}

const Input: FC<InputProps> = ({
  label,
  disabled,
  type,
  id,
  field,
  checked,
  className,
  ...rest
}) => (
  <label className={className} htmlFor={id}>
    <input
      type={type}
      id={id}
      disabled={disabled}
      checked={checked}
      {...field}
      {...rest}
    />
    <FakeInput type={type} disabled={disabled} checked={checked}>
      {checked && <Check />}
    </FakeInput>
    <InlineLabel>{label}</InlineLabel>
  </label>
);

Input.defaultProps = {
  label: 'Text',
  disabled: false
};

const FakeInput = styled<'div', FakeInputProps>('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.light};
  width: ${theme.form.checkboxSize};
  height: ${theme.form.checkboxSize};
  border: ${theme.form.borderSize} solid;
  border-radius: ${({ type }) =>
    type === 'checkbox' ? theme.form.borderRadius : theme.form.radioSize};
  border-color: inherit;
  background: ${({ checked }) => (checked ? theme.colors.text : 'transparent')};
  box-sizing: border-box;
  transition: all 0.2s ease;
`;

const WrappedInput = styled(Input)`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${theme.colors.text};
  border-color: ${theme.colors.text};
  ${({ disabled }) =>
    disabled &&
    `
        cursor: not-allowed;
        border-color: ${theme.colors.textLight};
        color: ${theme.colors.textLight};
    `}
  input {
    display: none;
  }
  div {
    margin-right: 10px;
  }
`;

export default WrappedInput;
