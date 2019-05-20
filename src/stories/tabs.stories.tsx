import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SubH2, H2, Text } from '@atoms';
import { Tabs, Tab } from '@molecules';

storiesOf('Tabs', module).add('Tabs', () => (
  <Tabs isBlock>
    <Tab name='Coding Day'>
      <SubH2 color='primary'>Mentors</SubH2>
      <Text>1 mentor expert & passionné pour 5 participants</Text>
    </Tab>
    <Tab name='Coding Week'>
      <SubH2 color='secondary'>Hello World</SubH2>
      <H2 color='primary'>Hello World</H2>
      <Text>
        Brave heart, Clara. For some people, small, beautiful events are what
        life is all about! Jamie, remind me to give you a lesson in tying knots,
        sometime. Black tie...Whenever I wear this, something bad always
        happens.
      </Text>
    </Tab>
  </Tabs>
));
