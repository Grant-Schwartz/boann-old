import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "Utils/Supabase";


export const Project: FC = () => {
    let params = useParams();
    const [project, setProject] = useState();
    useEffect(() => {
        getProject()
    }, []);
    const getProject = async () => {
        let { data, error, status } = await supabase
        .from('projects')
        .select('*')
        .eq('id', params.projectId)
        .single()
        setProject(data);
    }
    return (
        <Box
			marginLeft="25px"
			marginRight="25px"
			marginTop="20px"
		>
            <Flex justifyContent="space-between">
				<Heading>
                {project ? project['name'] : null}
				</Heading>
				<Button
					colorScheme="brand"
				>
					New
				</Button>
			</Flex>
            
        </Box>
    );
}