import { Box, Heading, Link, Icon, Flex } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Task } from 'Components/Project/Task';

export const Column = ({ data }: any) => {
    return (
        <Box height="500px" width="300px" backgroundColor="gray.100" borderRadius="10px">
            <Flex alignItems="center" justifyContent="space-between" padding="10px">
                <Heading size="md" fontWeight="500" color="gray.600">{data.name}</Heading>
                <Link><Icon as={SettingsIcon} color="gray.600"/></Link>
            </Flex>
            {data.tasks.map((task: any, index: any) => (
                <Box padding="10px">
                    <Task key={index} task={task} />
                </Box>
            ))}
        </Box>
    );
}