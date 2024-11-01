import {
    Checkbox,
    divider,
    Input,
    Link,
    Select,
    SelectItem,
  } from "@nextui-org/react";
  import { Icon } from "@iconify/react";
  import React, { FC } from "react";
  export interface PersonalFormProps {}
  const PersonalForm: FC<PersonalFormProps> = () => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
      React.useState(false);
  
    const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmVisibility = () =>
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    return (
      <div>
        <div className="text-[28px] font-semibold ">Input your information</div>
        <form className={"grid grid-cols-12 flex-col gap-4 py-8 pt-6"}>
          <Input
            className="col-span-12  md:col-span-6"
            label="Name"
            name="name"
            isRequired
            placeholder="Type your name here"
            labelPlacement="outside"
          />
  
          <Input
            className="col-span-12 md:col-span-6"
            label="SIN"
            name="sin"
            placeholder="Type your SIN here"
            labelPlacement="outside"
          />
  
          <Input
            className="col-span-12 md:col-span-6"
            label="Email"
            name="email"
            isRequired
            placeholder="john.doe@gmail.com"
            type="email"
            labelPlacement="outside"
          />
  
          <Input
            className="col-span-12 md:col-span-6"
            label="Phone"
            name="phone"
            startContent={
              <div className="relative">
                <Select
                  classNames={{
                    trigger: "shadow-none  !bg-transparent ",
                  }}
                  defaultSelectedKeys={["canada"]}
                  variant="flat"
                  size="sm"
                  className="w-[72px]"
                >
                  <SelectItem key="canada" value="canada">
                    +86
                  </SelectItem>
                  <SelectItem key="usa" value="usa">
                    +1
                  </SelectItem>
                </Select>
                <div className="absolute w-[1px] h-[32px] bg-default-300 right-0 top-0 "></div>
              </div>
            }
            labelPlacement="outside"
            placeholder="Type your phone number here"
          />
  
          <Select
            className="col-span-12 md:col-span-6"
            label="Gender"
            name="gender"
            placeholder="Type your gender here"
            color="default"
            labelPlacement="outside"
          >
            <SelectItem key="male" value="male">
              Male
            </SelectItem>
            <SelectItem key="female" value="female">
              Female
            </SelectItem>
            <SelectItem key="other" value="other">
              Other
            </SelectItem>
          </Select>
  
          <Input
            className="col-span-12 md:col-span-6"
            label="Age"
            name="age"
            labelPlacement="outside"
            placeholder="Type your age here"
            type="number"
          />
  
          <Input
            className="col-span-12 md:col-span-6"
            label="Password"
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
  
          <Input
            className="col-span-12 md:col-span-6"
            label="Confirm Password"
            name="confirm-password"
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
          <Checkbox
            defaultSelected
            className="col-span-12 m-0 p-2 text-left text-textSub"
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
        </form>
      </div>
    );
  };
  
  export default PersonalForm;
  