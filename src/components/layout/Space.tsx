import React from 'react';
import styled from '@emotion/styled';
import { space, textAlign } from 'styled-system';

const classnames = (...args: any) => args.join(' ');
const getClassName = (el: any) => (el.props && el.props.className) || '';

export const StyledChildren: any = (props: any) => {
  const { className, children } = props;
  const styledChildren = React.Children.toArray(children).map((child: any) =>
    React.cloneElement(child, {
      className: classnames(getClassName(child), className)
    })
  );

  return styledChildren;
};

const Space = styled(StyledChildren)([], [textAlign, space]);

export default Space;
