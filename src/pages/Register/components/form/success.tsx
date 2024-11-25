import React, { FC } from "react";
export interface SuccessProps { }
const Success: FC<SuccessProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative">
        <img
          src="/sign-success.svg"
          alt=""
          className="w-[600px] h-[300px] mr-8"
        />
        <div className="text-2xl font-bold absolute bottom-6 left-4 right-0 text-center">
          Congratulations!
        </div>
      </div>
      <div className="text-lg text-textNormal mt-6">
        Your account has been successfully created
      </div>
    </div>
  );
};

export default Success;
