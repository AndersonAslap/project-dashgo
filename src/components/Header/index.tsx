import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { Logo } from './Logo';
import { Profile } from './Profile';
import { NotificationsNav } from './NotificationsNav';
import { SearchBox } from './SearchBox';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {

    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

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

            {!isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                />
            )}

            <Logo text="dashgo" />


            {isWideVersion && <SearchBox />}

            <Flex
                align="center"
                marginLeft="auto"
            >
                <NotificationsNav />

                <Profile
                    name="Anderson Aslap"
                    email="anderson@email.com"
                    urlImage="https://avatars.githubusercontent.com/u/43682613?s=400&u=8b8d038f960148a8396fcfbadc11e00fbee40e7f&v=4"
                    showProfileData={isWideVersion}
                />

            </Flex>


        </Flex>
    );
}