import React from 'react';

import {
    Container,
    StoryContainer,
    Avatar,
    More,
    ArrowRight
} from './styles';

const Story: React.FC = () => {
    return (
        <Container>
            <StoryContainer>
                <Avatar />
            </StoryContainer>
            <StoryContainer>
                <Avatar />
            </StoryContainer>
            <StoryContainer>
                <Avatar />
            </StoryContainer>
            <StoryContainer>
                <Avatar />
            </StoryContainer>
            <StoryContainer>
                <Avatar />
            </StoryContainer>
            <StoryContainer>
                <Avatar />
                <More>
                    <ArrowRight />
                </More>
            </StoryContainer>
        </Container>
    )
}

export default Story;