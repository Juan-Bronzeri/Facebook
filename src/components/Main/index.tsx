import React from 'react';

import { 
  Container,
  Story,
  Avatar,
  More,
  ArrowRight
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Story>
        <Avatar />
      </Story>
      <Story>
        <Avatar />
      </Story>
      <Story>
        <Avatar />
      </Story>
      <Story>
        <Avatar />
      </Story>
      <Story>
        <Avatar />
      </Story>
      <Story>
        <Avatar />
        <More>
          <ArrowRight />
        </More>
      </Story>
      
    </Container>
  )
}

export default Main;