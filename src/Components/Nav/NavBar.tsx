import { Flex, HStack, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from './NavItem';
import Logo from 'Assets/logo.svg';
import Project from 'Assets/project.svg';
import Settings from 'Assets/settings.svg';

export const NavBar: FC = () => {
    console.log(Logo)
    return (
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
                <NavItem link="/projects" icon={Project} />
                <NavItem link="/settings" icon={Settings} />
            </HStack>
        </Flex>
    );
};