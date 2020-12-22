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
  width: 100%;
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;

    display: flex;
    justify-content: space-between;
`;

export const Header = styled.div`
    z-index: 2;
    position: sticky;
    background: var(--secondary);
    justify-content: space-between;

    display: flex;


    border-bottom: 1px solid var(--outline);
`;

export const MenuBotton = styled.button`
  width: 100%;
`;

export const MenuBottonCenter = styled.div<ILineColorProps>`
  width: 100%;
  margin-top: 10px;
  padding: 11px 0 10px;

  border-bottom: 3px solid ${props => props.lineColor};
`;

export const LeftSide = styled.div`
  display: flex;
  padding-left: 10px;
`;

const iconCSS = css`
    flex-shrink: 0;

    width: 30px;
    height: 100%;
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

  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  
`;

export const HomeIcon = styled(Home)`
  ${iconCSS};
`;
export const PlayIcon = styled(Play)`
  ${iconCSS};
`;
export const ShopIcon = styled(Shop)`
  ${iconCSS};
`;
export const GroupIcon = styled(Group)`
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