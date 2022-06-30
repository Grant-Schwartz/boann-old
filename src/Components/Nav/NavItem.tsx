import { Image, Box } from '@chakra-ui/react';
import { FC } from 'react';
import {
    Link as RouteLink
} from "react-router-dom";
  

interface NavItemProps {
    icon?: string;
    link?: string;
    onClick?: (active: boolean) => void;
    children?: JSX.Element | JSX.Element[] | string;
}  

export const NavItem: FC<NavItemProps> = ({ icon, link, onClick, children }) => {
    return (
        <Box
            height="35px"
            width="35px"
            backgroundColor="gray.200"
            display="flex"
            alignContent="center"
            justifyContent="center"
            borderRadius="6px"
            _hover={{ bg: 'gray.300' }}
            transition="background-color 0.1s linear"
            onClick={onClick ? () => onClick?.(true) : undefined}
        >
            {link ?
            <RouteLink to={link}>
                {icon ?  <Image src={icon} marginTop="7px"/> : null}
                {children}
            </RouteLink>
            :
            <div>
                {icon ?  <Image src={icon} marginTop="8px"/> : null}
                {children}
            </div>
            }
        </Box>
    );
};