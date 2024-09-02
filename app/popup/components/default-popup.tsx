import { ModalBody, Modal, ModalHeader, ModalFooter, Button } from "@nextui-org/react";
import { useCurrentTab } from "../../hooks/use-current-tab";

export const DefaultPopup = () => {
    const { currentTab } = useCurrentTab()

    const handleClick = () => {
        if (currentTab?.id) {
            chrome.tabs.sendMessage(currentTab.id, { type: 'echo-popup', message: 'Hello content!' }, function () {
                console.log('[popup] message response')
            });
        } else {
            console.log('[popup] no current tab')
        }
    }

    return (
        <Modal className='rounded-none' isOpen={true}>
            <ModalHeader>
                Example popup
            </ModalHeader>
            <ModalBody>
                Popup Content
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleClick}>
                    Sent message to content
                </Button>
            </ModalFooter>
        </Modal>
    )
}