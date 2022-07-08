import { AddIcon, InfoOutlineIcon, LockIcon, SettingsIcon, StarIcon, UnlockIcon } from "@chakra-ui/icons";
import { ComponentWithAs, IconProps } from "@chakra-ui/react";

interface Command {
    icon: ComponentWithAs<"svg", IconProps>;
    label: string;
    url?: string;
    onClick?: () => void;
    command?: string;
    color?: string;
}

export interface CommandSectionProps {
    sectionName: string;
    items: Command[]; 
}

export const projectsCommands: CommandSectionProps[] = [
    {
        sectionName: 'Projects',
        items: [
            {
                icon: StarIcon,
                label: 'My Projects',
                url: '/projects',
                command: 'p',
                color: 'blue'
            },
            {
                icon: AddIcon,
                label: 'New Project',
                url: '/projects/new',
                command: 'n',
                color: 'green'
            }
        ]
    },
    {
        sectionName: 'Account',
        items: [
            {
                icon: SettingsIcon,
                label: 'Settings',
                url: '/settings',
            },
            {
                icon: LockIcon,
                label: 'Logout',
                url: '/signout',
                command: 'l'
            },
        ]
    }
]



export const preLoginCommands: CommandSectionProps[] = [
    {
        sectionName: 'Navigation',
        items: [
            {
                icon: StarIcon,
                label: 'Home',
                url: '/',
            },
            { 
                icon: InfoOutlineIcon,
                label: 'About',
                url: '/about',
            }
        ]
    },
    {
        sectionName: 'Account',
        items: [
            {
                icon: UnlockIcon,
                label: 'Sign In',
                url: '/signin'
            }
        ]
    }
]
