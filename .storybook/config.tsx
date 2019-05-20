import React from 'react';
import { addDecorator, configure, addParameters } from '@storybook/react';
import theme, { themeLight, GlobalStyles } from '../src/theme';
import styles from '@sambego/storybook-styles';
import { withThemesProvider } from 'storybook-addon-emotion-theme';

const themes = [theme, themeLight];

addDecorator(
  styles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '90%',
    margin: '0 auto',
  })
);

addParameters({
  backgrounds: [
    { name: 'default', value: theme.colors.lighter, default: true },
    { name: 'default', value: theme.colors.light },
    { name: 'blue', value: theme.colors.gradient },
  ],
});

addParameters({
  options: {
    brandTitle: '',
    brandUrl: '',
    isFullscreen: false,
    panelPosition: 'right',
    showSearchBox: false,
    downPanelInRight: false,
    sortStoriesByKind: false,
    hierarchySeparator: null,
    sidebarAnimations: true,
    selectedAddonPanel: undefined,
  },
});

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));

addDecorator(withThemesProvider(themes));

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
