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
  Dot,
  Data,
  WorldIcon,
  MoreIcon,
  Footer
} from './styles';

const Post: React.FC = () => {
  return (
    <Container>
      <Body>
        <ul>
          <li>
            <Content>
              <Avatar />
              <Header>
                <strong>Juan</strong>
                <MoreIcon />
              </Header>
              <Data>
                10 h <Dot /> <WorldIcon />
              </Data>
            </Content>
          </li>
          <li>
            <Description>TesteTesteTesteTesteTesteTeste TesteTeste TesteTesteTesteTeste TesteTeste TesteTesteTesteTesteTesteTesteTeste TesteTesteTesteTesteTeste Teste TesteTesteTeste TesteTesteTesteTesteTesteTesteTeste TesteTesteTesteTeste TesteTesteTesteTesteTeste TesteTesteTesteTeste TesteTesteTeste TesteTesteTeste</Description>
          </li>
          <li>
            <ImageContent />
            <Footer>
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
            </Footer>
          </li>
        </ul>
      </Body>
    </Container>
  )
}

export default Post;