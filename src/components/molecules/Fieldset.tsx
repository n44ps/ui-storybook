/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC } from 'react';
import styled from '@emotion/styled';
import { toColorString, parseToRgb } from 'polished';
import { ChevronsDown } from 'react-feather';
import { ErrorMessage, Field, FieldAttributes } from 'formik';
import { Label } from '@atoms';
import { Error } from '@molecules';
import { theme } from '@root';

interface FieldProps {
  label?: string;
  theme?: {};
  className?: string;
  name?: any;
  component?: any;
  render?: any;
  disabled?: boolean;
}

const Fieldset: FC<FieldProps & FieldAttributes<any>> = ({
  name,
  label,
  className,
  component,
  render,
  disabled,
  ...rest
}) => {
  const RenderComp = render;
  const isSelect = component === 'select';
  const props = render
    ? { render: () => <RenderComp {...createOptions()} /> }
    : { component, ...rest };
  return (
    <label className={className}>
      <Label disabled={disabled}>{label}</Label>
      <StyledField disabled={disabled} id={name} name={name} {...props} />
      <ErrorMessage name={name} render={msg => <Error error={msg} />} />
      {isSelect && (
        <ChevronsDown
          css={css`
            position: absolute;
            z-index: -1;
            right: 0;
          `}
        />
      )}
    </label>
  );
};

const StyledField = styled(Field)`
  height: 100%;
  width: 100%;
  flex: 1;
  border: none;
  font-size: inherit;
  background: transparent;
  outline: none;
  color: inherit;
  appearance: none;
  text-indent: 1px;
  padding: 0 ${theme.form.paddingVertical};
  ${({ component }) =>
    component === 'select' &&
    `
      padding: 0 calc(${theme.form.paddingVertical} * 2 + 24px) 0 ${
      theme.form.paddingVertical
    };
      option {
        color: ${theme.colors.primary};
      }
    `}
  &[type="number"] {
    padding: 0;
  }
  text-overflow: "";
  ::placeholder {
    color: ${({ theme }) => theme.form.colors.disabled};
    opacity: 1;
  }
  ${({ disabled }) =>
    disabled &&
    `
  cursor: not-allowed;
`}
  display: flex;
  align-items: center;
`;

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: theme.fontSize.p,
        fontFamily: theme.text.fontFamily,
        color: toColorString(parseToRgb(theme.form.colors.default)),
        '::placeholder': {
          color: toColorString(parseToRgb(theme.form.colors.disabled))
        }
      },
      invalid: {
        color: theme.colors.danger
      }
    }
  };
};

const StyledFieldset = styled(Fieldset)`
  position: relative;
  z-index: 0;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: ${theme.form.height};
  padding: ${({ render }) =>
    !!render
      ? `${theme.form.borderSize} ${theme.form.paddingVertical} 0`
      : `${theme.form.borderSize} 0 0 0`};
  font-size: ${theme.fontSize.p};
  font-family: ${theme.text.fontFamily};
  position: relative;
  box-sizing: border-box;
  border: ${theme.form.borderSize} solid;
  border-top: none;
  border-radius: ${theme.form.borderRadius};
  border-color: ${({ theme }) => theme.form.colors.default};
  color: ${({ theme }) => theme.form.colors.default};
  ${({ disabled, theme }: any) =>
    disabled &&
    `
    color: ${theme.form.colors.disabled};
    border-color: ${theme.form.colors.disabled};
    cursor: not-allowed;
  `}
  small {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    padding-top: 5px;
  }
  svg {
    padding: 0 ${theme.form.paddingVertical};
  }
  svg + svg {
    padding-left: 0;
  }
  small + svg {
    display: none;
  }
  > div {
    flex: 1;
  }
`;

export default StyledFieldset;
