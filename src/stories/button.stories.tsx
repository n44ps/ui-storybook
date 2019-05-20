import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@atoms';
import { Anchor } from 'react-feather';

storiesOf('Button', module)
  .add('Primary', () => <Button>Hello Button</Button>)
  .add('Secondary', () => <Button variant='secondary'>Hello Button</Button>)
  .add('Light', () => <Button variant='light'>Hello Button</Button>)
  .add('Ghost', () => <Button variant='ghost'>Hello Button</Button>)
  .add('Primary Outlined', () => (
    <Button variant='outlined'>Hello Button</Button>
  ))
  .add('Secondary Outlined', () => (
    <Button variant='outlinedSecondary'>Hello Button</Button>
  ))
  .add('Light Outlined', () => (
    <Button variant='outlinedLight'>Hello Button</Button>
  ))
  .add('With Icon', () => (
    <Button>
      Hello Button
      <Anchor />
    </Button>
  ))
  .add('With Icon Outlined', () => (
    <Button variant='outlined'>
      Hello Button
      <Anchor />
    </Button>
  ))
  .add('Disabled', () => <Button disabled>Hello Button</Button>)
  .add('Outlined disabled', () => (
    <Button variant='outlined' disabled>
      Hello Button
    </Button>
  ))
  .add('Ghost disabled', () => (
    <Button variant='ghost' disabled>
      Hello Button
    </Button>
  ));
