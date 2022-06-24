import { Box, Heading, Flex, Button, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import useAuth from "Utils/Auth";

const ProjectGrid: FC = () => {
	return (
		<SimpleGrid>

		</SimpleGrid>
	);
}

export const Projects: FC = () => {
	const { user, logout } = useAuth();
	return (
		<Box
			margin="20px"
		>
			<Flex justifyContent="space-between">
				<Heading>
					My Boards
				</Heading>
				<Button
					colorScheme="brand"
				>
					New Board
				</Button>
				<Button
					onClick={logout}
				>
					Logout
				</Button>
			</Flex>
			<ProjectGrid />
			
		</Box>
	);
}