import styled from 'styled-components';
import { RightArrowAlt } from '../../styles/Icons';

export const Container = styled.div`
    display: flex; 
    width: 35%;
    
    margin-top: 10px;
  
    height: 18vh;
`;

export const Story = styled.div`
    display: grid;
    width: 16%;

    border-radius: 10px;

    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;

    background-color: #2196F3;
    padding: 10px;
    margin-right: 10px;
`;

export const Avatar = styled.div`
   
    position: relative;
    width: 39px;
    height: 39px;

    flex-shrink: 0;

    border-radius: 50%;
    background: var(--gray);
`; 

export const More = styled.div`
    position: absolute;
    z-index: 2;
    top: 14.5%;
    left: calc(66% + 8px);

    width: 42px;
    height: 42px;

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
