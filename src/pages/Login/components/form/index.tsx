"use client";
import React, { useState } from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { Form, message } from "antd";
import { LoginRequest } from "@/api/models/LoginRequest";
import { useNavigate } from "react-router-dom";
import { AuthControllerService, OpenAPI } from "@/api";
import to from "await-to-js";
import { useAtom } from "jotai";
import { GlobalUserAtom } from "@/global";

export type SignInRequestType = LoginRequest & {
  remember: boolean;
};
export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [form] = Form.useForm();
  const [_, setGlobalUser] = useAtom(GlobalUserAtom);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (values: SignInRequestType) => {
    const requestBody = {
      username: values.username,
      password: values.password,
    };
    setLoading(true);
    const [err, res] = await to(
      AuthControllerService.authenticateUser({
        requestBody,
      })
    );
    if (!err && res) {
      setGlobalUser(res);
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("user", JSON.stringify(res));
      OpenAPI.TOKEN = res.accessToken;
      message.success("Login successful");
      navigate("/workspace/dashboard");
    } else {
      // message.error(err.message);
    }
    setLoading(false);
  };
  return (
    <div className="flex w-full max-w-lg flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
      <p className="pb-2 text-xl font-medium">Nice to see you again!</p>
      <Form<SignInRequestType>
        form={form}
        onFinish={handleLogin}
        className="flex flex-col gap-3"
      >
        <Form.Item
          name={"username"}
          rules={[
            {
              required: true,
              message: "Please enter your username",
            },
          ]}
        >
          <Input
            label="Username"
            name="username"
            placeholder="Enter your username"
            labelPlacement="outside"
            type="text"
            variant="bordered"
          />
        </Form.Item>
        <Form.Item
          name={"password"}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <Input
            labelPlacement="outside"
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
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
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
        </Form.Item>
        <div className="flex items-center justify-between px-1 py-2">
          <Form.Item name={"remember"} noStyle>
            <Checkbox name="remember" size="sm">
              Remember me
            </Checkbox>
          </Form.Item>
          <Link className="text-default-500" href="#" size="sm">
            Forgot password?
          </Link>
        </div>
        <Form.Item noStyle>
          <Button isLoading={loading} color="primary" type="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
      <div className="flex items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <Divider className="flex-1" />
      </div>
      <p className="text-center text-small">
        Need to create an account?&nbsp;
        <Link href="/register" size="sm">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
