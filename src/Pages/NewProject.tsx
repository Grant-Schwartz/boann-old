import { Button, Divider, Heading, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInsert } from "react-supabase";
import { useAuth } from "Utils/Auth";
import { DBResponse } from "Utils/Response";


export const NewProject: FC = () => {
    let navigate = useNavigate();
    const { user } = useAuth();
    const [name, setName] = useState<string>("");
    const [response, setResponse] = useState<DBResponse>();
    const [{ fetching }, execute] = useInsert('projects');
    const [{ fetching: fetching_column }, execute_column] = useInsert('columns');
    const [{ fetching: fetching_task }, execute_task] = useInsert('tasks');
    const createProject = async (name: string) => {

        if (name.trim() === "") {
          console.log('in')
          setResponse({ error: true, message: "Please enter a valid name" })
          return
        } else {
          if (user) {
            const { data, error } = await execute(
              {
                  name: name,
                  owner: user['id']
              }
            )
            const { data: data_column, error: error_column} = await execute_column(
              {
                name: 'New Column',
                index: 0,
                project: data[0]['id']

              }
            )
            const { data: data_task, error: task_error } = await execute_task(
              {
                name: 'New Task',
                body: 'This is a task!',
                image: "",
                weight: 0,
                tags: [],
                column: data_column[0]['id']
              }
            )
            if (error) {
              setResponse({ error: true, message: error.message })
            } else {
              console.log(data)
              return navigate(`/project/${data[0].owner}`)
            }
          }  
        }
    }
    return (
        <Modal isOpen={true} onClose={() => navigate('/projects')}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader as={Heading} size="lg" fontWeight="700">Create A New Project</ModalHeader>
            <ModalBody>
                <Input placeholder="Project Name" value={name} onChange={(e) => setName(e.target.value)} size="md" />
                {response ? <Text margin="0px" marginTop="3px"  color={response.error ? "red" : "green"}>{response.message}</Text> : null}
            </ModalBody>
            <Divider marginTop="30px"/>
          <ModalFooter>
            <Button colorScheme="gray" marginRight="10px" onClick={() => navigate('/projects')}>
              Cancel
            </Button>
            <Button colorScheme="brand" isLoading={fetching} onClick={() => createProject(name)}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
}