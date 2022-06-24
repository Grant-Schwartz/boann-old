import { Box, Button, Center, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import { useState, FC, MouseEvent } from 'react'
import useAuth, { isEmail } from 'Utils/Auth';


export const SignIn: FC = () => {
    const [email, setEmail] = useState<string>('')
    const { login, loading, response } = useAuth();
    const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        login(email);
      }
    return (
        <Box
			margin="20px"
		>
			<Flex justifyContent="center">
				<Heading>
					Hey there ✌️
				</Heading>
            </Flex>
            <Flex justifyContent="center">
                <Text>Sign in with your email via Magic Link</Text>
            </Flex>
            <Center>
                <FormControl
                maxWidth="500px"
                marginTop="30px"
                backgroundColor="gray.50"
                padding="20px"
                borderRadius="7px"
                borderColor="gray.100"
                borderWidth="1px"
                >
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' backgroundColor="white" isDisabled={loading} onChange={(e) => setEmail(e.target.value)}/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    {response ? <FormHelperText color={response.error ? "red" : "green"}>{response.message}</FormHelperText> : null}
                    <Button
                        mt={4}
                        colorScheme="brand"
                        isLoading={loading}
                        onClick={handleLogin}
                        type="submit"
                    >
                        Submit
                    </Button>
                </FormControl>
            </Center>
        </Box>
    );
};