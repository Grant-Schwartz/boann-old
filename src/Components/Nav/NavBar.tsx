import { Flex, HStack, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from './NavItem';
import Logo from 'Assets/logo.svg';
import Command from 'Assets/command.svg';
import { CommandPalette } from 'Components/Command/CommandPalette';
import Hotkeys from 'react-hot-keys';
import { preLoginCommands, projectCommands, projectsCommands } from 'Components/Command/Commands';
import { CommandSectionProps } from 'Components/Command/Commands';

export const NavBar = () => {
    const [commandOpen, setCommandOpen] = useState<boolean>(false);
    const [commands, setCommands] = useState<CommandSectionProps[]>(preLoginCommands)
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/projects') {
            setCommands(projectsCommands);
        }
        else if (location.pathname.split('/').length >= 3 && location.pathname.split('/')[1] === 'projects') {
            setCommands(projectCommands)
        }
        else {
            setCommands(preLoginCommands)
        }
    }, [location]);
    return (
        <>
            <Hotkeys
                keyName="command+/"
                onKeyDown={() => setCommandOpen(!commandOpen)}
            >
                <CommandPalette isOpen={commandOpen} onClose={() => setCommandOpen(false)} setCommandOpen={setCommandOpen} commands={commands} />
            </Hotkeys>
            <Flex
                justifyContent="space-between"
                borderBottomWidth="3px"
                height="90px"
            >
                <HStack marginLeft="30px">
                    <Link to="/">
                        <Image src={Logo} />
                    </Link>
                </HStack>
                <HStack marginRight="30px">
                    <NavItem onClick={setCommandOpen} icon={Command} />
                </HStack>
                {/* : null} */}
            </Flex>
        </>
    );
};