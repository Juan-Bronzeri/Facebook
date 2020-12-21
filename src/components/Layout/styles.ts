import styled, { css } from 'styled-components';

import {
  Facebook,
  Search,
  Home,
  Play,
  Shop,
  Group,
  Plus,
  Bell
} from '../../styles/Icons';

interface ILineColorProps {
  lineColor: string;
}

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
`;

export const Header = styled.div`
    z-index: 2;
    position: sticky;
    top: 0;
    bottom: 0;
    background: var(--secondary);
    justify-content: space-between;

    display: flex;
    align-items: center;

    text-align: left;

    border-bottom: 1px solid var(--outline);
`;

export const MenuBotton = styled.button`
  width: 100%;
`;

export const LeftSide = styled.div`
  display: flex;
  padding-left: 10px;
`;

const iconCSS = css`
    flex-shrink: 0;

    width: 30px;
    height: 30px;
    color: var(--white);
`;

export const FacebookIcon = styled(Facebook)`
  flex-shrink: 0;
  padding-left: 10px;
  width: 55px;
  height: 45px;
  > path {
    color: var(--facebook);
  }
`;
export const SearchIcon = styled(Search)`
padding-left: 10px;
  ${iconCSS};
`;
export const CenterSide = styled.div`
  display: flex;
  width: 37%;
  justify-content: space-between;

  margin-top: 10px;
    padding: 11px 0 10px;
    text-align: center;

    font-weight: bold;
    font-size: 15px;

    outline: 0;
    cursor: pointer;

    border-bottom: 3px solid blue;
`;

export const HomeIcon = styled(Home)<ILineColorProps>`
  ${iconCSS};
`;
export const PlayIcon = styled(Play)<ILineColorProps>`
  ${iconCSS};
`;
export const ShopIcon = styled(Shop)<ILineColorProps>`
  ${iconCSS};
`;
export const GroupIcon = styled(Group)<ILineColorProps>`
  ${iconCSS};
`;
export const RightSide = styled.div`
  display: flex;
`;

export const Avatar = styled.div``;

export const ProfileName = styled.div``;

export const PlusIcon = styled(Plus)`
  ${iconCSS};
`;
export const BellIcon = styled(Bell)`
  ${iconCSS};
`;