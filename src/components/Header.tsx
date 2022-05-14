import { Flex, Input, Icon } from '@chakra-ui/react';
import { Logo } from './Logo';
import { RiSearchLine } from 'react-icons/ri';

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

        </Flex>
    );
}