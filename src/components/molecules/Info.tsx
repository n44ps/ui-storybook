import React, { FC } from 'react';
import styled from '@emotion/styled';
import { theme } from '@root';
import { SubH2, SubH3 } from '@atoms';
import { space, SpaceProps } from 'styled-system';

interface InfoProps extends SpaceProps {
  title: string;
  text: string;
  icon: any;
  className?: string;
}

const Info: FC<InfoProps> = ({ title, text, icon: Icon, className }) => (
  <article className={className}>
    <Icon />
    <div>
      <SubH2 color='primary' mb={1}>
        {title}
      </SubH2>
      <SubH3 color='textLight'>{text}</SubH3>
    </div>
  </article>
);

const StyledInfo = styled(Info)`
  ${space}
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  background: ${theme.colors.light};
  box-shadow: ${theme.boxShadow};
  color: ${theme.colors.primary};
  border-radius: 2px;
  padding: 10px 15px;
  box-sizing: border-box;
  svg {
    margin-right: 10px;
  }
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledInfo;
