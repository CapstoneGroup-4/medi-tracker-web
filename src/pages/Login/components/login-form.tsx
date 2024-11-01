import React from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex w-full max-w-lg flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
      <p className="pb-2 text-xl font-medium">Nice to see you again!</p>
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          label="Email Address"
          name="email"
          placeholder="Enter your email"
          labelPlacement="outside"
          type="email"
          variant="bordered"
        />
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
        <div className="flex items-center justify-between px-1 py-2">
          <Checkbox name="remember" size="sm">
            Remember me
          </Checkbox>
          <Link className="text-default-500" href="#" size="sm">
            Forgot password?
          </Link>
        </div>
        <Button color="primary" type="submit">
          Log In
        </Button>
      </form>
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
