import React from 'react';

import Main from '../Main';
import MenuBar from '../MenuBar';
import SideBar from '../SideBar';

import {
    Container,
    Wrapper,
    Header,
    MenuBotton,
    MenuBottonCenter,
    LeftSide,
    FacebookIcon,
    SearchIcon,
    CenterSide,
    HomeIcon,
    PlayIcon,
    ShopIcon,
    GroupIcon,
    RightSide,
    Avatar,
    ProfileName,
    PlusIcon,
    BellIcon,
} from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <Header>
                <LeftSide>
                    <MenuBotton>
                        <FacebookIcon />
                    </MenuBotton>
                    <MenuBotton>
                        <SearchIcon />
                    </MenuBotton>
                </LeftSide>
                <CenterSide>
                    <MenuBottonCenter lineColor='none'>
                        <HomeIcon />
                    </MenuBottonCenter>
                    <MenuBottonCenter lineColor='blue'>
                        <PlayIcon />
                    </MenuBottonCenter>
                    <MenuBottonCenter lineColor='none'>
                        <ShopIcon />
                    </MenuBottonCenter>
                    <MenuBottonCenter lineColor='none'>
                        <GroupIcon />
                    </MenuBottonCenter>
                </CenterSide>
                <RightSide>
                    <Avatar />
                    <ProfileName />
                    <MenuBotton>
                        <PlusIcon />
                    </MenuBotton>
                    <MenuBotton>
                        <BellIcon />
                    </MenuBotton>
                </RightSide>
            </Header>
            <Wrapper>
                <MenuBar />
                <Main />
                <SideBar />
            </Wrapper>
        </Container>
    )
}

export default Layout;