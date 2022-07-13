import { Box, Flex, Heading } from "@chakra-ui/react";
import { NewButton } from "Components/Buttons/NewButton";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "Utils/Supabase";
import { Column } from 'Components/Project/Column';


export const Project: FC = () => {
    let params = useParams();
    const [project, setProject] = useState<any>();
    useEffect(() => {
        getProject()
    }, []);
    const getProject = async () => {
        let { data: project, error, status } = await supabase
        .from('projects')
        .select('*')
        .eq('id', params.projectId)
        .single()

        let { data: columns, error: columns_error, status: columns_status } = await supabase
        .from('columns')
        .select('*')
        .eq('project', project.id)

        project.columns = columns

        for (var i = 0; i < project.columns.length; i++) {
            let { data: tasks, error: tasks_error, status: tasks_status } = await supabase
            .from('tasks')
            .select('*')
            .eq('column', project.columns[i].id)
            .order('weight', { ascending: true })

            project.columns[i].tasks = tasks
        }
        console.log(project)
        setProject(project);
    }
    if (!project) return <div>Loading</div>;
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
				<NewButton />
			</Flex>
            
            <Flex marginTop="10px">
                {project.columns.map((column: any, index: number ) => (
                    <Column key={index} data={column} />
                ))}
            </Flex>
        </Box>
    );
}