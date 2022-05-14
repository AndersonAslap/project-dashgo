import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    name: string;
    email: string;
    urlImage: string;
}

export function Profile({ name, email, urlImage }: ProfileProps) {
    return (
        <Flex align="center">
            <Box marginRight="4" textAlign="right">
                <Text>{name}</Text>
                <Text color="gray.300" fontSize="small">{email}</Text>
            </Box>

            <Avatar size="md" name={name} src={urlImage} />
        </Flex>
    );
}