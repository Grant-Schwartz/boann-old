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

	return (
		<Box
			marginLeft="25px"
			marginRight="25px"
			marginTop="20px"
		>
			<Flex justifyContent="space-between">
				<Heading>
					My Projects
				</Heading>
				<Button
					colorScheme="brand"
				>
					New Project
				</Button>
			</Flex>
			<ProjectGrid />
			
		</Box>
	);
}