import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import Column from 'Assets/column.svg';
import Task from 'Assets/task.svg';
import Tag from 'Assets/tag.svg';

export const NewButton: FC = () => {
    return (
        <Menu>
            <MenuButton as={Button} colorScheme="brand" rightIcon={<ChevronDownIcon />}>
                New
            </MenuButton>
            <MenuList boxShadow="md">
                <MenuItem _hover={{ bg: 'blue.50' }}><Image src={Task} marginRight="2px"/>New Task</MenuItem>
                <MenuItem _hover={{ bg: 'green.50' }}><Image src={Column} marginRight="2px"/>New Column</MenuItem>
                <MenuItem _hover={{ bg: 'orange.50' }}><Image src={Tag} marginRight="2px"/>New Tag</MenuItem>
            </MenuList>
        </Menu>
    );
}