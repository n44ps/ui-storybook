import React from 'react';
import { Flex } from '@rebass/grid/emotion';

const Row = ({ mx, ...props }: any) => <Flex {...props} mx={mx} />;

Row.defaultProps = {
  mx: -3
};

export default Row;
