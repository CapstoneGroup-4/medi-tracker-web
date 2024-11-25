import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface ShareModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onOk: () => Promise<void>;
}

export const ShareModal = ({ isOpen, onOpenChange, onOk }: ShareModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOk = async () => {
    try {
      setIsLoading(true);
      await onOk();
      onOpenChange(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Confirm Share</ModalHeader>
            <ModalBody>
              Are you sure you want to share this item? This action cannot be
              undone.
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={handleOk} isLoading={isLoading}>
                Share
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
