import React from 'react';
import { Global, css } from '@emotion/core';
import { darken } from 'polished';

const borderRadius = '3px';
const darkenValue = 0.08;
const colors = {
  primary: 'hsl(226, 100%, 45%)',
  primaryLight: 'hsl(226, 83%, 73%)',
  primaryLighter: 'hsl(225, 86%, 95%)',
  secondary: 'hsl(50, 100%, 50%)',
  secondaryLight: 'hsl(50, 100%, 75%)',
  light: 'hsl(0, 0%, 100%)',
  danger: '#DC143C',
  success: '#14dc50',
  successLight: 'hsla(138, 83%, 47%, .1)',
  dangerLight: 'hsla(348, 83%, 47%, .1)',
  lighter: '#F4F4F4',
  text: 'hsl(225, 31%, 53%)',
  textLight: 'hsl(225, 31%, 77%)',
  gradient: 'linear-gradient(93.08deg, #0037e7 0%, #456dee 100vw)',
  gradientSmall: 'linear-gradient(93.08deg, #0037e7 0%, #456dee 100vw)',
  gradientMedium: 'linear-gradient(93.08deg, #0037e7 0%, #456dee 100vw)',
  overlayGradient:
    'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 100%)',
  section: 'transparent',
  box: '#FBFBFB'
};

const button = {
  fontSize: '16px',
  fontFamily: 'Overpass Mono',
  fontWeight: 700,
  border: '2px',
  height: '50px',
  paddingVertical: '20px'
};

const boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.05)';

export const theme = {
  borderRadius,
  darkenValue,
  colors,
  button,
  boxShadow,
  name: 'default',
  maxWidth: 1184,
  space: [0, 5, 10, 20, 30, 40, 80, 100, 120, 140],
  breakpoints: ['32em', '48em', '64em'],
  title: {
    lineHeight: 1.25,
    fontFamily: 'Heebo'
  },
  text: {
    lineHeight: 1.5,
    fontFamily: 'Work Sans'
  },
  form: {
    borderRadius,
    borderSize: '2px',
    height: '50px',
    checkboxSize: '24px',
    radioSize: '24px',
    paddingVertical: '15px',
    labelPadding: '5px',
    colors: {
      default: colors.text,
      disabled: colors.textLight
    }
  },
  modal: {
    overlay: {
      background: 'hsla(226, 100%, 45%, .5)'
    },
    content: {
      boxShadow,
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      background: colors.light,
      borderRadius: '2px',
      padding: '40px'
    }
  },
  tabs: {
    borderRadius,
    borderHeight: '6px',
    fontFamily: 'Overpass Mono',
    paddingBottom: '18px'
  },
  fontSize: {
    h1: '54px',
    h2: '36px',
    h3: '28px',
    h4: '20px',
    h5: '14px',
    h6: '12px',
    span: '10px', // h7
    p: '16px',
    pBig: '19px',
    small: '12px'
  },
  avatar: {
    size: {
      default: '70px',
      big: '100px',
      small: '50px'
    }
  },
  buttons: {
    primary: {
      border: 'none',
      color: colors.light,
      backgroundColor: colors.primary,
      '&:hover': {
        backgroundColor: darken(darkenValue, colors.primary)
      },
      '&:disabled': {
        backgroundColor: colors.textLight
      }
    },
    secondary: {
      border: 'none',
      color: colors.light,
      backgroundColor: colors.secondary,
      '&:hover': {
        backgroundColor: darken(darkenValue, colors.secondary)
      },
      '&:disabled': {
        backgroundColor: colors.textLight
      }
    },
    light: {
      border: `${button.border} solid ${colors.light}`,
      color: colors.primary,
      backgroundColor: colors.light,
      '&:hover': {
        backgroundColor: darken(darkenValue, colors.light)
      },
      '&:disabled': {
        color: colors.textLight
      }
    },
    outlined: {
      border: `${button.border} solid ${colors.primary}`,
      color: colors.primary,
      backgroundColor: 'transparent',
      '&:hover': {
        color: darken(darkenValue, colors.primary),
        border: `${button.border} solid ${darken(darkenValue, colors.primary)}`
      },
      '&:disabled': {
        border: `${button.border} solid ${colors.textLight}`,
        color: colors.textLight
      }
    },
    social: {
      border: `${button.border} solid ${colors.primaryLighter}`,
      color: colors.primary,
      backgroundColor: 'transparent',
      '&:hover': {
        color: darken(darkenValue, colors.primary),
        border: `${button.border} solid ${darken(
          darkenValue,
          colors.primaryLighter
        )}`
      }
    },
    outlinedLight: {
      border: `${button.border} solid ${colors.light}`,
      color: colors.light,
      backgroundColor: 'transparent',
      '&:hover': {
        color: darken(darkenValue, colors.light),
        border: `${button.border} solid ${darken(darkenValue, colors.light)}`
      },
      '&:disabled': {
        border: `${button.border} solid ${colors.textLight}`,
        color: colors.textLight
      }
    },
    ghost: {
      border: 'none',
      padding: 0,
      color: colors.primary,
      backgroundColor: 'transparent',
      '&:hover': {
        color: darken(darkenValue, colors.primary)
      },
      '&:disabled': {
        color: colors.textLight
      }
    },
    ghostTextLight: {
      border: 'none',
      padding: 0,
      color: colors.textLight,
      backgroundColor: 'transparent',
      '&:hover': {
        color: darken(darkenValue, colors.textLight)
      }
    },
    outlinedSecondary: {
      border: `${button.border} solid ${colors.secondary}`,
      color: colors.secondary,
      backgroundColor: 'transparent',
      '&:hover': {
        color: darken(darkenValue, colors.secondary),
        border: `${button.border} solid ${darken(
          darkenValue,
          colors.secondary
        )}`
      },
      '&:disabled': {
        border: `${button.border} solid ${colors.textLight}`,
        color: colors.textLight
      }
    }
  }
};

export const anchorStyle = `
  font-family: "Overpass Mono";
  color: ${colors.primary};
  background-image: linear-gradient(
    to right,
    ${colors.primaryLighter} 75%,
    ${colors.primaryLighter} 75%
  );
  background-position: 0 bottom;
  background-repeat: repeat-x;
  background-size: 8px 8px;
  font-size: 15px;
  &:hover {
    color: ${darken(darkenValue, colors.primary)};
}`;

export const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        fill: currentColor;
      }
      *:not(svg) {
        font-family: Work Sans;
        color: inherit;
        box-sizing: border-box;
      }
      footer {
        position: relative;
        z-index: -1;
      }
      a {
        text-decoration: none;
      }
      p a,
      li a,
      span a {
        ${anchorStyle}
      }
      code {
        font-family: "Overpass Mono";
        background: ${colors.primaryLighter};
        font-size: 15px;
      }
      li + li {
        margin-top: 10px;
      }
      ul {
        color: ${colors.text};
        font-family: ${theme.text.fontFamily};
        font-size: ${theme.fontSize.p};
        line-height: 1.5;
      }
      .ReactModal__Body--open {
        overflow: hidden;
        .ReactModalPortal {
          position: relative;
          z-index: 1;
        }
      }
      @media (max-width: ${breakpointsName.small}) {
        .ReactModal__Content {
          left: 20px !important;
          right: 20px !important;
          top: 20px !important;
          transform: inherit !important;
        }
      }
    `}
  />
);

export const themeLight = {
  name: 'light',
  ...theme,
  colors: {
    ...theme.colors,
    primary: colors.light,
    text: colors.light,
    textLight: colors.primaryLight,
    lighter: colors.primaryLight,
    section: colors.gradient
  },
  form: {
    ...theme.form,
    colors: {
      default: colors.light,
      disabled: darken(darkenValue, colors.light)
    }
  },
  buttons: {
    ...theme.buttons,
    outlined: theme.buttons.outlinedLight,
    primary: theme.buttons.light,
    light: theme.buttons.primary
  }
};
export const breakpointsName = {
  small: '32em',
  medium: '48em',
  large: '64em'
};

export default theme;
