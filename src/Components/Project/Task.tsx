import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";


export const Task = ({ task }: any) => {
    return (
        <Box width="100%" height="150px" backgroundColor="gray.300" borderRadius="5px">
            <Flex padding="10px" paddingTop="5px" paddingBottom="0px">
                <Heading size="lg" fontSize="28px" fontWeight="700">{task.name}</Heading>
            </Flex>
            <Flex padding="10px" paddingTop="0px">
                <Text color="gray.700">{task.body}</Text>
            </Flex>
        </Box>
    );
}