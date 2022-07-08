import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, Flex, Button, SimpleGrid, Text, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRealtime } from "react-supabase";
import { motion } from 'framer-motion'

const IconHover = {
	hover: {
		x: 2
	}
}

const ProjectCard = (project: any) => {
	const navigate = useNavigate(); 
	return (
		<Box as={motion.div} onClick={() => navigate(`/projects/${project.project.id}`)} height="100px" whileHover="hover" backgroundColor="gray.100" borderRadius="6px" borderWidth="1px" borderColor="gray.300">
			<Flex alignItems="center">
				<Heading margin="10px" color="gray.600" size="lg">{project.project.name}</Heading>
				<motion.div variants={IconHover}>
				<ArrowForwardIcon color="gray.600" w={6} h={6} />
				</motion.div>
			</Flex>
		</Box>
	);
}

const ProjectGrid = (data: any) => {
	return (
		<SimpleGrid columns={[1, null, 4]} spacing={10} marginTop="30px">
			{data.projects.map((project: any) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</SimpleGrid>
	);
}

export const Projects: FC = () => {
	const [{ data, error, fetching }, reexecute] = useRealtime('projects');
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
					as={Link}
					to="/projects/new"
				>
					New Project
				</Button>
			</Flex>
			{error  ?
			<Text>An error occured finding your projects</Text>
			:
			data ? <ProjectGrid projects={data} /> : null
			}
		</Box>
	);
}