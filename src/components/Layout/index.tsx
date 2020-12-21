import React from 'react';

import Main from '../Main';
import MenuBar from '../MenuBar';
import SideBar from '../SideBar';

import {
    Container,
    Wrapper,
    Header,
    MenuBotton,
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
                    <MenuBotton>
                        <HomeIcon lineColor='red' />
                    </MenuBotton>
                    <MenuBotton>
                        <PlayIcon lineColor='blue' />
                    </MenuBotton>
                    <MenuBotton>
                        <ShopIcon lineColor='red' />
                    </MenuBotton>
                    <MenuBotton>
                        <GroupIcon lineColor='blue' />
                    </MenuBotton>
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