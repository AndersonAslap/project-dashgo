import { Flex, Input, Icon, HStack, Box, Text, Avatar } from '@chakra-ui/react';
import { Logo } from './Logo';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

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

            <Flex
                as="label"
                flex="1"
                paddingY="4"
                paddingX="8"
                marginLeft="6"
                maxWidth={400}
                alignSelf="center"
                position="relative"
                backgroundColor="gray.800"
                borderRadius="full"
            >
                <Input
                    color="gray.50"
                    variant="unstyled"
                    placeholder="Buscar na plataforma"
                    _placeholder={{ color: 'gray.400' }}
                    paddingX="4"
                    marginRight="4"
                >
                </Input>

                <Icon as={RiSearchLine} fontSize="20" />
            </Flex>

            <Flex
                align="center"
                marginLeft="auto"
            >
                <HStack
                    spacing="8"
                    marginX="8"
                    paddingRight="8"
                    paddingY="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>

                <Flex align="center">
                    <Box marginRight="4" textAlign="right">
                        <Text>Anderson Aslap</Text>
                        <Text color="gray.300" fontSize="small">anderson@email.com</Text>
                    </Box>

                    <Avatar size="md" name="Anderson Adolfo" src="https://avatars.githubusercontent.com/u/43682613?s=400&u=8b8d038f960148a8396fcfbadc11e00fbee40e7f&v=4" />
                </Flex>
            </Flex>

        </Flex>
    );
}