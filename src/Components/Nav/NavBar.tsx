import { Flex, HStack, Image } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from './NavItem';
import Logo from 'Assets/logo.svg';
import Project from 'Assets/project.svg';
import Command from 'Assets/command.svg';
import { useAuth } from 'Utils/Auth';
import { CommandPalette } from 'Components/Command/CommandPalette';
import Hotkeys from 'react-hot-keys';

export const NavBar: FC = () => {
    const { session } = useAuth();
    const [commandOpen, setCommandOpen] = useState<boolean>(false);
    return (
        <>
            <Hotkeys
                keyName="command+/"
                onKeyDown={() => setCommandOpen(!commandOpen)}
            >
                <CommandPalette isOpen={commandOpen} onClose={() => setCommandOpen(false)} setCommandOpen={setCommandOpen} />
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
                {/* {session ? */}
                <HStack marginRight="30px">
                    <NavItem link="/projects" icon={Project} />
                    <NavItem onClick={setCommandOpen} icon={Command} />
                </HStack>
                {/* : null} */}
            </Flex>
        </>
    );
};