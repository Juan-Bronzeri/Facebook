import React from 'react';

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  ComentIcon,
  RetweetIcon,
  LikeIcon,
  Dot
} from './styles';

const Post: React.FC = () => {
  return (
    <Container>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Juan</strong>
            <span>@juan.dias</span>
            <Dot />
            <time>16 de dez</time>
          </Header>
          <Description>Learning</Description>
          <ImageContent />
          <Icons>
            <Status>
              <ComentIcon />
                            20
                        </Status>
            <Status>
              <RetweetIcon />
                            20
                        </Status>
            <Status>
              <LikeIcon />
                            50
                        </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Post;