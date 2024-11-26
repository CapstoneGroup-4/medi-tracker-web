import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  DatePicker,
  DateValue,
} from "@nextui-org/react";
import { Form, message } from "antd";
import type {
  MedicalRecord,
  MedicalRecordCreate,
} from "@/api/models/MedicalRecord";
import { Calendar } from "@internationalized/date";
import { useAtomValue } from "jotai";
import { GlobalUserAtom } from "@/global";
import { useState } from "react";
import to from "await-to-js";

interface MedicalRecordModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  createMedicalRecord: (values: MedicalRecordCreate) => Promise<MedicalRecord>;
}

export const MedicalRecordModal = ({
  isOpen,
  onOpenChange,
  createMedicalRecord,
}: MedicalRecordModalProps) => {
  const [form] = Form.useForm<MedicalRecordCreate>();
  const user = useAtomValue(GlobalUserAtom);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: MedicalRecordCreate) => {
    if (!user?.id) {
      return;
    }
    const doctorId = user?.roles.find((role) => role.role === "DOCTOR")?.id;
    if (!doctorId) {
      return;
    }
    setIsLoading(true);
    const [err, res] = await to(
      createMedicalRecord({
        ...values,
        dateOfDiagnosis: values.dateOfDiagnosis.toString(),
        doctorId,
      })
    );
    setIsLoading(false);
    message.success("Medical record created successfully");
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Medical Record</ModalHeader>
            <ModalBody>
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                  label="Patient Email"
                  name="userEmail"
                  rules={[
                    { required: true, message: "Please input patient email!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Primary Diagnosis"
                  name="primaryDiagnosis"
                  rules={[
                    {
                      required: true,
                      message: "Please input primary diagnosis!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Date of Diagnosis"
                  name="dateOfDiagnosis"
                  rules={[
                    {
                      required: true,
                      message: "Please input date of diagnosis!",
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>

                <Form.Item
                  label="Comment"
                  name="comment"
                  rules={[{ required: true, message: "Please input comment!" }]}
                >
                  <Input />
                </Form.Item>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button
                isLoading={isLoading}
                color="primary"
                onPress={() => form.submit()}
              >
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
