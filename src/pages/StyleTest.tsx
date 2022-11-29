import React from 'react';
import styled from 'styled-components';

 const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Counter: React.FC = () => {
  return (
    <Wrapper>
    <Title>
      Styled Component Test this that style is rendered
    </Title>
  </Wrapper>
  );
};
  
export default Counter;