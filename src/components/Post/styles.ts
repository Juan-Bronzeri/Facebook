import styled, { css } from 'styled-components';
import { 
    Bell,
    World,
    More
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 18px;

  padding: 14px 0px;
    border-radius: 10px;

  background: var(--secondary);

  border-bottom: 1px solid var(--outline);
`;

export const Retweeted = styled.div`
    display: flex;
    align-items: center;

    font-size: 13px;
    color: var(--gray);
`;

export const UserIcon = styled(Bell)`
    width: 16px;
    height: 16px;

    margin-left: 35px;
    margin-right: 9px;

    > path {
        fill: var(--gray);
    }
`;
export const Body = styled.div`
    display: flex;

    margin: 0px;

    position: relative;
    > ul {
        list-style-type: none;
        width: 100%;
    }
`;
export const Avatar = styled.div`
    width: 49px;
    height: 49px;

    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);

    position: absolute;
    top: 0;
    left: 15px;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 74px;
    padding-right: 20px;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    justify-content: space-between;

    > strong {
        margin-right: 5px;
    }

    > column-span {
        color: var(--gray);
    }

    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    margin: 8px 6px;
    
`;
export const Data = styled.p`
    display: flex;
    font-size: 12px;
    margin-top: 4px;
`;

export const WorldIcon = styled(World)`
    width: 15px;
    height: 15px;
    margin-top: 2px;
`;

export const MoreIcon = styled(More)`
    width: 22px;
    height: 22px;
    cursor: pointer;
`;

export const Description = styled.p`
    font-size: 14px;
    padding-left: 15px;
    margin-top: 10px;
    word-wrap: break-word;
`;

export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));

    background: var(--outline);

    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

export const Footer = styled.div`
    display: flex;
    margin: 0 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--outline);
    border-top: 1px solid var(--outline);
    margin-top: 15px;
`;

export const Icons = styled.div`
   display: flex;
   width: 80%;
   justify-content: space-between;
   
   > div {
       cursor: pointer;

       &:hover {
           opacity: 0.7;
       }
   }
`;
export const Status = styled.div`
    display: flex;
    align-items: center;

    font-size: 14px;

    > svg {
        margin-right: 5px;
    }

    &:nth-child(1) {
        & > svg path {
            color: var(--gray);
        }
    }
    &:nth-child(2) {
        color: var(--retweet);
        > svg path {
            fill: var(--retweet);
        }
    }
    &:nth-child(3) {
        color: var(--like);
        > svg {
            fill: var(--like);
        }
    }
`;

const iconCSS = css`
    width: 19px;
    height: 19px;
`;

export const ComentIcon = styled(Bell)`
    ${iconCSS}
`;
export const RetweetIcon = styled(Bell)`
    width: 18px;
    height: 17px;
`;
export const LikeIcon = styled(Bell)`
    ${iconCSS}
`;
