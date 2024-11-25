import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { FC } from "react";
import { Form, FormInstance } from "antd";

export interface Professional {
  userId?: number;
  professionalId: string;
  personalId: string;
  license: string;
  licenseAuthority: string;
  jobTitle: string;
  specialization: string;
  clinicName: string;
  membership?: string;
}

export interface ProfessionalProps {
  value?: Professional;
  onChange?: (value: Professional) => void;
  form: FormInstance<Professional>;
}

const Professional: FC<ProfessionalProps> = ({ onChange, form }) => {
  return (
    <div>
      <div className="text-[28px] font-semibold ">
        verify your professional credentials
      </div>
      <Form<Professional>
        form={form}
        onValuesChange={(_, allValues) => {
          console.log(allValues);

          onChange?.(allValues as Professional);
        }}
        className={"grid grid-cols-12 flex-col gap-4 py-8 pt-6"}
      >
        <Form.Item
          name="license"
          rules={[
            { required: true, message: "Please input your license number" },
            {
              max: 20,
              message: "License number cannot be longer than 20 digits",
            },
          ]}
          className="col-span-12 md:col-span-6"
        >
          <Input
            label="Professional License Number"
            name="license"
            isRequired
            placeholder="Type your license number here"
            labelPlacement="outside"
          />
        </Form.Item>

        <Form.Item
          name="licenseAuthority"
          className="col-span-12 md:col-span-6"
        >
          <Input
            label="Issuing Authority"
            name="licenseAuthority"
            placeholder="Type your issuing authority here"
            labelPlacement="outside"
          />
        </Form.Item>

        <Form.Item
          name="jobTitle"
          rules={[{ required: true, message: "Please select your job title" }]}
          valuePropName="selectedKeys"
          trigger="onSelectionChange"
          getValueFromEvent={(e) => e.currentKey}
          className="col-span-12 md:col-span-6"
        >
          <Select
            label="Job Title"
            name="jobTitle"
            placeholder="Select Job Title"
            labelPlacement="outside"
          >
            <SelectItem key={1} value="Doctor">
              Doctor
            </SelectItem>
            <SelectItem key={2} value="Nurse">
              Nurse
            </SelectItem>
          </Select>
        </Form.Item>

        <Form.Item
          name="specialization"
          rules={[
            { required: true, message: "Please input your specialization" },
            {
              max: 20,
              message: "Specialization cannot be longer than 20 characters",
            },
          ]}
          className="col-span-12 md:col-span-6"
        >
          <Input
            label="Specialization"
            name="specialization"
            isRequired
            placeholder="Type your specialization here"
            labelPlacement="outside"
          />
        </Form.Item>

        <Form.Item
          name="clinicName"
          rules={[
            {
              required: true,
              message: "Please input your hospital/clinic name",
            },
          ]}
          className="col-span-12 md:col-span-6"
        >
          <Input
            label="Hospital/Clinic Name"
            name="clinicName"
            isRequired
            placeholder="Type your hospital/clinic name here"
            labelPlacement="outside"
          />
        </Form.Item>

        <Form.Item name="membership" className="col-span-12 md:col-span-6">
          <Input
            label="Association Membership"
            name="membership"
            placeholder="Type your association membership here"
            labelPlacement="outside"
          />
        </Form.Item>

        <Form.Item
          name="personalId"
          rules={[
            { required: true, message: "Please upload your personal ID" },
            {
              max: 20,
              message: "Personal ID cannot be longer than 20 digits",
            },
          ]}
          className="col-span-12 md:col-span-6"
        >
          <Input
            label="Personal ID"
            name="personalId"
            placeholder="Type your personal ID here"
            labelPlacement="outside"
          />
        </Form.Item>

        <Form.Item
          name="professionalId"
          rules={[
            { required: true, message: "Please upload your professional ID" },
            {
              max: 20,
              message: "Professional ID cannot be longer than 20 digits",
            },
          ]}
          className="col-span-12 md:col-span-6"
        >
          <Input
            label="Professional ID"
            name="professionalId"
            placeholder="Type your professional ID here"
            labelPlacement="outside"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Professional;
