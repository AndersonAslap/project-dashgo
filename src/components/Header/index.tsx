import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { Profile } from './Profile';
import { NotificationsNav } from './NotificationsNav';
import { SearchBox } from './SearchBox';

export function Header() {
    return (
        <Flex
            as="header"
            width="100%"
            maxWidth={1480}
            height="20"
            marginX="auto"
            marginTop="4"
            paddingX="6"
            alignItems="center"
        >

            <Logo text="dashgo" />

            <SearchBox />

            <Flex
                align="center"
                marginLeft="auto"
            >
                <NotificationsNav />

                <Profile
                    name="Anderson Aslap"
                    email="anderson@email.com"
                    urlImage="https://avatars.githubusercontent.com/u/43682613?s=400&u=8b8d038f960148a8396fcfbadc11e00fbee40e7f&v=4"
                />

            </Flex>

        </Flex>
    );
}