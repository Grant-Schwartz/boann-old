import { Image, Box } from '@chakra-ui/react';
import { FC } from 'react';
import {
    Link as RouteLink
} from "react-router-dom";
  

interface NavItemProps {
    icon?: string;
    link: string;
    children?: JSX.Element | JSX.Element[] | string;
}  

export const NavItem: FC<NavItemProps> = ({ icon, link, children }) => {
    return (
        <Box
            height="35px"
            width="35px"
            backgroundColor="gray.200"
            display="flex"
            alignContent="center"
            justifyContent="center"
            borderRadius="6px"
        >
            <RouteLink to={link}>
                {icon ?  <Image src={icon} marginTop="7px"/> : null}
                {children}
            </RouteLink>
        </Box>
    );
};