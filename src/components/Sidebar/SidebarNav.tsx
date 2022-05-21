import { Box, Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
    return (
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
                    <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                    <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
                </Stack>
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <Stack
                    spacing="4"
                    marginTop="8"
                    align="stretch"
                >
                    <NavLink icon={RiInputMethodLine} href="/form">Formulários</NavLink>
                    <NavLink icon={RiGitMergeLine} href="automations">Automação</NavLink>
                </Stack>
            </NavSection>
        </Stack>
    );
}