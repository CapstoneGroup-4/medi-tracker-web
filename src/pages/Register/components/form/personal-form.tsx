import { Checkbox, Input, Link, Select, SelectItem } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import React, { FC } from "react";
import { Form, FormInstance } from "antd";
import { User } from "@/api/models/User";
export type UserWithTerms = User & {
  terms?: boolean;
  confirmPassword?: string;
  region?: string | undefined;
};
export const Region = {
  canada: "+1",
  zh: "+86",
} as const;
export interface PersonalFormProps {
  value?: UserWithTerms;
  onChange?: (value: UserWithTerms) => void;
  form: FormInstance<UserWithTerms>;
  region: string;
  onChangeRegion: (value: string) => void;
}
const PersonalForm: FC<PersonalFormProps> = ({
  value,
  form,
  onChange,
  region,
  onChangeRegion,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    React.useState(false);

  const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  return (
    <div>
      <div className="text-[28px] font-semibold ">Input your information</div>
      <Form<UserWithTerms>
        form={form}
        onValuesChange={(_, allValues) => {
          onChange?.(allValues as UserWithTerms);
        }}
        className={"grid grid-cols-12 flex-col gap-x-4 py-8 pt-6"}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Please input your name" },
            {
              max: 20,
              message: "Username cannot be longer than 20 characters",
            },
          ]}
          className="col-span-12  md:col-span-6"
        >
          <Input
            label="Name"
            aria-label="name"
            name="name"
            autoComplete="username"
            isRequired
            placeholder="Type your name here"
            labelPlacement="outside"
          />
        </Form.Item>

        <Form.Item
          name="sin"
          rules={[
            { required: true, message: "Please input your SIN" },
            {
              max: 9,
              message: "SIN must be 9 digits",
            },
          ]}
          className="col-span-12 md:col-span-6"
        >
          <Input
            className="col-span-12 md:col-span-6"
            label="SIN"
            aria-label="sin"
            name="sin"
            placeholder="Type your SIN here"
            labelPlacement="outside"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",
              message: "Please input your email",
            },
          ]}
          className="col-span-12 md:col-span-6"
        >
          <Input
            className="col-span-12 md:col-span-6"
            label="Email"
            aria-label="email"
            name="email"
            autoComplete="email"
            isRequired
            placeholder="john.doe@gmail.com"
            type="email"
            labelPlacement="outside"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              max: 14,
              message: "Phone number cannot be longer than 14 digits",
            },
          ]}
          className="col-span-12 md:col-span-6"
        >
          <Input
            className="col-span-12 md:col-span-6"
            label="Phone"
            aria-label="phone"
            name="phone"
            autoComplete="tel"
            startContent={
              <div className="relative">
                <Select
                  classNames={{
                    trigger: "shadow-none  !bg-transparent ",
                  }}
                  selectedKeys={[region ?? "canada"]}
                  onSelectionChange={(e) => {
                    onChangeRegion(e.currentKey ?? "");
                  }}
                  defaultSelectedKeys={["canada"]}
                  variant="flat"
                  size="sm"
                  aria-label="region"
                  className="w-[72px]"
                >
                  <SelectItem aria-label="canada" key="canada" value="canada">
                    +1
                  </SelectItem>
                  <SelectItem aria-label="usa" key="zh" value="zh">
                    +86
                  </SelectItem>
                </Select>
                <div className="absolute w-[1px] h-[32px] bg-default-300 right-0 top-0 "></div>
              </div>
            }
            labelPlacement="outside"
            placeholder="Type your phone number here"
          />
        </Form.Item>

        <Form.Item
          name="gender"
          rules={[{ required: true, message: "Please select your gender" }]}
          valuePropName="selectedKeys"
          trigger="onSelectionChange"
          getValueFromEvent={(e) => e.currentKey}
          className="col-span-12 md:col-span-6"
        >
          <Select
            label="Gender"
            aria-label="gender"
            name="gender"
            placeholder="Type your gender here"
            color="default"
            labelPlacement="outside"
          >
            <SelectItem aria-label="male" key={0} value="Male">
              Male
            </SelectItem>
            <SelectItem aria-label="female" key={1} value="Female">
              Female
            </SelectItem>
            <SelectItem aria-label="other" key={2} value="Other">
              Other
            </SelectItem>
          </Select>
        </Form.Item>

        <Form.Item name="age" className="col-span-12 md:col-span-6">
          <Input
            className="col-span-12 md:col-span-6"
            label="Age"
            autoComplete="age"
            aria-label="age"
            name="age"
            labelPlacement="outside"
            placeholder="Type your age here"
            type="number"
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Please input your password" }]}
          name="password"
          className="col-span-12 md:col-span-6"
        >
          <Input
            className="col-span-12 md:col-span-6"
            label="Password"
            aria-label="password"
            autoComplete="new-password"
            name="password"
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isPasswordVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            placeholder="*********"
            type={isPasswordVisible ? "text" : "password"}
            labelPlacement="outside"
            isRequired
          />
        </Form.Item>

        <Form.Item
          rules={[
            { required: true, message: "Please input your confirm password" },
            {
              validator: (_, value) => {
                if (value !== form.getFieldValue("password")) {
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                }
                return Promise.resolve();
              },
            },
          ]}
          name="confirmPassword"
          className="col-span-12 md:col-span-6"
        >
          <Input
            className="col-span-12 md:col-span-6"
            label="Confirm Password"
            name="confirm-password"
            autoComplete="new-password"
            aria-label="confirm-password"
            placeholder="*********"
            isRequired
            labelPlacement="outside"
            endContent={
              <button type="button" onClick={toggleConfirmVisibility}>
                {isConfirmPasswordVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            type={isConfirmPasswordVisible ? "text" : "password"}
          />
        </Form.Item>

        <Form.Item
          valuePropName="isSelected"
          trigger="onValueChange"
          rules={[{ required: true, message: "Please agree to the terms" }]}
          name="terms"
          className="col-span-12"
        >
          <Checkbox
            className="col-span-12 m-0 p-2 text-left text-textSub"
            aria-label="terms-and-privacy-agreement"
            color="primary"
            name="terms-and-privacy-agreement "
            size="sm"
          >
            <span className="text-textSub">
              Creating an account means you agree with our{" "}
            </span>
            <Link className="mx-1 text-primary underline" href="#" size="sm">
              Terms of Service, Privacy Policy
            </Link>
            .
          </Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalForm;
