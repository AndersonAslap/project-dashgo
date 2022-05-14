import { Text } from '@chakra-ui/react';

interface logoProps {
  text: string;
}

export function Logo({ text }: logoProps) {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
    >
      {text}
      <Text as="span" marginLeft="1" color="pink.500">.</Text>
    </Text>
  );
}