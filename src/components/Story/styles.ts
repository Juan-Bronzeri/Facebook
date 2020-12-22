import styled from 'styled-components';
import { RightArrowAlt } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
`;

export const StoryContainer = styled.div`
    position: relative;
    display: grid;

    justify-items: center;
    border-radius: 10px;

    grid-template-columns: auto auto auto auto;
    grid-gap: 19px;

    background-color: #2196F3;
    padding: 10px;
    margin-right: 12px;
`;

export const Avatar = styled.div`

    width: 39px;
    height: 39px;

    flex-shrink: 0;

    border-radius: 50%;
    background: var(--gray);
`; 

export const More = styled.div`
    position: absolute;
    z-index: 2;
    top: 40%;
    left: calc(100% - 20px);

    width: 44px;
    height: 44px;

    flex-shrink: 0;

    border-radius: 50%;
    background: var(--gray);
`;

export const ArrowRight = styled(RightArrowAlt)`
position: absolute;
    width: 50%;
    height: 50%;

    top: 25%;
  left: 25%;

    justify-content: center;
`;

