import React from 'react';
import { Box } from '@rebass/grid/emotion';

const Column = ({ px, ...props }: any) => <Box {...props} px={px} flex='1' />;

Column.defaultProps = {
  mx: 3
};

export default Column;
