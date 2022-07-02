import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { FC } from "react";
import { CommandSectionProps } from "./Commands";
import { CommandSection } from "./CommandSection";

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
    commands:  CommandSectionProps[];
    setCommandOpen: (active: boolean) => void;
}

const CommandPaletteOverlay = () => (
    <ModalOverlay
      bg='blackAlpha.50'
      backdropFilter='blur(3px)'
    />
  )

export const CommandPalette: FC<CommandPaletteProps> = ({isOpen, onClose, setCommandOpen, commands}) => {
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
                    {commands ? commands.map((section, index) => (
                        <CommandSection key={index} sectionName={section.sectionName} items={section.items} setCommandOpen={setCommandOpen}/>
                    )) : null}
                    </>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

