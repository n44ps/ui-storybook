import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Field, Form, Formik } from 'formik';
import { Fieldset, InlineInput } from '@molecules';

storiesOf('Forms', module)
  .add('Input text', () => (
    <Formik
      initialValues={{ firstname: 'Cody' }}
      onSubmit={() => null}
      render={() => (
        <Form>
          <Fieldset
            name='firstname'
            label='Firstname'
            placeholder='Enter your firstname'
          />
        </Form>
      )}
    />
  ))
  .add('Input text disabled', () => (
    <Formik
      initialValues={{ firstname: 'Cody' }}
      onSubmit={() => null}
      render={() => (
        <Form>
          <Fieldset
            name='firstname'
            label='Firstname'
            placeholder='Enter your firstname'
            disabled={true}
          />
        </Form>
      )}
    />
  ))
  .add('Input text error', () => (
    <Formik
      initialValues={{ firstname: 'Cody' }}
      onSubmit={() => null}
      render={() => (
        <Form>
          <Fieldset
            name='firstname'
            label='Firstname'
            placeholder='Enter your firstname'
            error={'C\'est un trop beau prénom'}
          />
        </Form>
      )}
    />
  ))
  .add('Input mail', () => (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={() => null}
      render={() => (
        <Form>
          <Fieldset
            name='email'
            label='Email address'
            placeholder='john@doe.com'
          />
        </Form>
      )}
    />
  ))
  .add('Select', () => (
    <Formik
      initialValues={{}}
      onSubmit={() => null}
      render={() => (
        <Form>
          <Fieldset name='course' label='Choose a course' component='select'>
            <option value='bar'>foo</option>
          </Fieldset>
        </Form>
      )}
    />
  ))
  .add('Select disabled', () => (
    <Formik
      initialValues={{}}
      onSubmit={() => null}
      render={() => (
        <Form>
          <Fieldset
            name='course'
            label='Choose a course'
            component='select'
            disabled={true}
          >
            <option value='bar'>foo</option>
          </Fieldset>
        </Form>
      )}
    />
  ))
  .add('Checkbox', () => (
    <Formik
      initialValues={{ agreement: false }}
      onSubmit={() => null}
      render={({ values: { agreement } }) => (
        <Form>
          <Field
            name='agreement'
            type='checkbox'
            label='Do you agree ?'
            component={InlineInput}
            checked={agreement}
          />
        </Form>
      )}
    />
  ))
  .add('Checkbox disabled', () => (
    <Formik
      initialValues={{ agreement: false }}
      onSubmit={() => null}
      render={({ values: { agreement } }) => (
        <Form>
          <Field
            name='agreement'
            type='checkbox'
            label='Do you agree ?'
            component={InlineInput}
            checked={agreement}
            disabled={true}
          />
        </Form>
      )}
    />
  ));
