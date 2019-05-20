import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3, H4, SubH1, SubH2, SubH3, Text } from '@atoms';

storiesOf('Typography', module)
  .add('h1', () => <H1>Hello H1</H1>)
  .add('h2', () => <H2>Hello H2</H2>)
  .add('h3', () => <H3>Hello H3</H3>)
  .add('h4', () => <H4>Hello H4</H4>)
  .add('sub h1', () => <SubH1>Hello SubH1</SubH1>)
  .add('sub h2', () => <SubH2>Hello SubH2</SubH2>)
  .add('sub h3', () => <SubH3>Hello SubH3</SubH3>)
  .add('p', () => (
    <Text>
      You may be a doctor. But I'm the Doctor. The definite article, you might
      say.
    </Text>
  ));
