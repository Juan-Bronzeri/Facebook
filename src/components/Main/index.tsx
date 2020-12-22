import React from 'react';

import Story from '../Story';
import Feed from '../Feed';

import {
  Container,
  StoryProfider
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <StoryProfider>
        <Story />
      </StoryProfider>
      <Feed />
    </Container>
  )
}

export default Main;