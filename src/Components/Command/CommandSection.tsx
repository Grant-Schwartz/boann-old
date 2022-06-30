import { FC } from "react";
import { Box,  Flex, HStack, Text, Image, ComponentWithAs, IconProps, Icon, Code, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

interface Command {
    icon: ComponentWithAs<"svg", IconProps>;
    label: string;
    url?: string;
    onClick?: () => void;
    command?: string;
    color?: string;
    setCommandOpen?: (active: boolean) => void;
}

interface CommandSection {
    sectionName: string;
    items: Command[]; 
    setCommandOpen: (active: boolean) => void;
}

function CommandItem({ icon, label, url, onClick, command, color, setCommandOpen }: Command) {
    return (
        url ? 
        <Flex 
            as={Link} 
            to={url}
            onClick={setCommandOpen ? () => setCommandOpen(false) : undefined}
            alignItems="center"
            padding="5px"
            borderRadius="3px"
            _hover={color ? { bg: `${color}.50`, textDecoration: "none", color: `${color}.500`, textColor: `${color}.500` } : { bg: 'gray.50', textDecoration: "none" }}
            justifyContent="space-between"
        >
            <HStack>
                <Icon as={icon} height="15px" />
                <Text color="black" letterSpacing="0.02em">{label}</Text>
            </HStack>
            {command ? 
            <Code>{command}</Code>
            : null}
        </Flex>
        : 
        <Flex 
            onClick={() => { if (onClick) { onClick () }; if (setCommandOpen) { setCommandOpen(false); }}} 
            alignItems="center"
            padding="5px"
            borderRadius="3px"
            _hover={color ? { bg: `${color}.50`, textDecoration: "none", color: `${color}.500`, textColor: `${color}.500` } : { bg: 'gray.50', textDecoration: "none" }}
            justifyContent="space-between"
        >
            <HStack>
                <Icon as={icon} height="15px" />
                <Text color="black" letterSpacing="0.02em">{label}</Text>
            </HStack>
            {command ? 
            <Code>{command}</Code>
            : null}
        </Flex>
    );
}

export const CommandSection: FC<CommandSection> = ({ sectionName, items, setCommandOpen }) => {
    return (
        <Box
            marginTop="10px"
        >
            <>
            <Text textTransform="uppercase" fontSize="12px">{sectionName}</Text>
            {items.map((item, index) => (
                <CommandItem key={index} icon={item.icon} label={item.label} url={item.url} onClick={item.onClick} command={item.command} color={item.color} setCommandOpen={setCommandOpen} />
            ))}
            </>
        </Box>
    );
}