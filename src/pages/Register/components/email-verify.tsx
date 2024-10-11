import React, { FC, useState, useRef, KeyboardEvent, ChangeEvent } from "react";
import { Input, Link } from "@nextui-org/react";

export interface VerifyProps {}

const Verify: FC<VerifyProps> = () => {
  const [verificationCode, setVerificationCode] = useState<string[]>(
    Array(6).fill("")
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);

      // 自动聚焦到下一个输入框
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && verificationCode[index] === "" && index > 0) {
      // 当前输入框为空且按下删除键时，聚焦到前一个输入框
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      <p className="text-[28px] font-semibold mb-2">
        Verify your email account
      </p>
      <p className="text-[#586166] mb-10 text-base font-medium">
        You're almost there! We sent a verification code to{" "}
        <span className="font-semibold">john.doe@gmail.com</span> Please enter
        the verification code
      </p>
      <div className="flex flex-col gap-4 justify-end">
        <div className="flex space-x-3 justify-center">
          {verificationCode.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              value={digit}
              radius="sm"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(index, e.target.value)
              }
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                handleKeyDown(index, e)
              }
              className="w-20  text-center  "
              color="primary"
              classNames={{
                mainWrapper: "mb-0",
                inputWrapper: "data-[hover=true]:border-primary",
              }}
              size="lg"
              variant="bordered"
              maxLength={1}
            />
          ))}
        </div>
        <div className="text-sm  text-textSub flex justify-end pr-20">
          Didn’t get the code?&nbsp;
          <Link
            className="text-primary cursor-pointer"
            underline="always"
            size="sm"
          >
            Resend
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Verify;
