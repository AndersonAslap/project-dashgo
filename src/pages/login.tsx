import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

type SingInFormData = {
  email: string;
  password: string;
}

export default function SingIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSingIn: SubmitHandler<SingInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSingIn)}
      >

        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" {...register("email")} />
          <Input name="password" label="Senha" type="password" {...register("password")} />
        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
