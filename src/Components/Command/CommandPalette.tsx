import { Divider, Flex, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { StarIcon, AddIcon, LockIcon, SettingsIcon } from '@chakra-ui/icons';
import { FC, useState } from "react";
import { CommandSection } from "./CommandSection";
import { useSignOut } from "react-supabase";

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
    setCommandOpen: (active: boolean) => void;
}

const CommandPaletteOverlay = () => (
    <ModalOverlay
      bg='blackAlpha.50'
      backdropFilter='blur(3px)'
    />
  )

export const CommandPalette: FC<CommandPaletteProps> = ({isOpen, onClose, setCommandOpen}) => {
    const [{ error }, signOut] = useSignOut()
    const [search, setSearch] = useState<string>();
	async function onClickSignOut() {
		const { error } = await signOut()
		console.log(error)
	}
    const commands = [
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
                    url: '/new',
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
                    onClick: signOut,
                    command: 'l'
                },
            ]
        }
    ]
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} >
            <CommandPaletteOverlay />
            <ModalContent
                borderRadius="10px"
                borderColor="gray.300"
                borderWidth="1px"
                shadow="none"
            >
                <ModalBody
                    w="100"
                >
                    <>
                    <Input 
                        placeholder="What would you like to do?" 
                        border="none"
                        focusBorderColor="#fff"
                        marginBottom="3px"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    /> 
                    <Divider />
                    <>
                    {commands.map((section, index) => (
                        <CommandSection key={index} sectionName={section.sectionName} items={section.items} setCommandOpen={setCommandOpen}/>
                    ))}
                    </>
                    </>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

