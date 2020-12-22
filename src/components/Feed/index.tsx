import React from 'react';

import Post from '../Post';

import { 
    Container,
    Posts,
} from './styles';

const Feed: React.FC = () => {
  return (
      <Container>
            <Posts>
                <Post />
            </Posts>
      </Container>
  )
}

export default Feed;