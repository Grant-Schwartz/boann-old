import { Box, Heading, Flex, Button, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import { useSignOut } from "react-supabase";

const ProjectGrid: FC = () => {
	return (
		<SimpleGrid>

		</SimpleGrid>
	);
}

export const Projects: FC = () => {
	// eslint-disable-next-line
	const [{ error }, signOut] = useSignOut()
	async function onClickSignOut() {
		const { error } = await signOut()
		console.log(error)
	}
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
				<Button onClick={onClickSignOut}>
					Logout
				</Button>
			</Flex>
			<ProjectGrid />
			
		</Box>
	);
}