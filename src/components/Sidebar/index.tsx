import { Box, Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
    return (
        <Box
            as="aside"
            width="64"
            marginRight="8"
        >
            <Stack
                spacing="12"
                align="flex-start"
            >
                <NavSection title="Geral">
                    <Stack
                        spacing="4"
                        marginTop="8"
                        align="stretch"
                    >
                        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                        <NavLink icon={RiContactsLine}>Usuários</NavLink>
                    </Stack>
                </NavSection>

                <NavSection title="AUTOMAÇÃO">
                    <Stack
                        spacing="4"
                        marginTop="8"
                        align="stretch"
                    >
                        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
                        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
                    </Stack>
                </NavSection>
            </Stack>
        </Box>
    );
}