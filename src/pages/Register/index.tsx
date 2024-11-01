import DefaultLayout from "@/layouts/default";
import { useTitle } from "ahooks";
import { FC, useState } from "react";
import ResgiterType from "./components/type";
import { Button } from "@nextui-org/button";
import PersonalForm from "./components/personal-form";
import { Link } from "@nextui-org/link";
import Verify from "./components/email-verify";
import Success from "./components/success";
import ProfessionalForm from "./components/professional-form";
import { Progress } from "@nextui-org/react";
export interface LoginProps {}
const Login: FC<LoginProps> = () => {
  useTitle("Register | MediTracker");
  const [type, setType] = useState<ResgiterType>("personal");
  const [steps, setSteps] = useState(1);
  const renderSteps = () => {
    switch (steps) {
      case 1:
        return <ResgiterType type={type} onChange={setType} />;
      case 2:
        return <PersonalForm />;
      case 3:
        return <ProfessionalForm />;
      case 4:
        return <Verify />;
      case 5:
        return <Success />;
    }
  };
  const progress = () => {
    switch (steps) {
      case 1:
        return 20;
      case 2:
        return 40;
      case 3:
        return 60;
      case 4:
        return 80;
      case 5:
        return 100;
    }
  };
  const registerProgress = progress();
  return (
    <DefaultLayout>
      <div
        className="flex flex-col justify-center items-center h-full "
        style={{
          backgroundColor: "linear-gradient(153deg, #FFFFFF 0%, #EAFAFC 100%)",
        }}
      >
        <div className="text-5xl text-primary font-bold mb-8">Register Now</div>
        <div className="flex w-full  relative max-w-4xl 2xl:max-w-[756px]  2xl:h-[500px] flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <Progress
            value={registerProgress}
            className="absolute top-0 left-0 right-0 px-8"
          />
          {renderSteps()}
        </div>
        {steps < 5 ? (
          <div className="mb-2 max-w-4xl text-textSub 2xl:max-w-[756px]  text-sm mt-2 text-right w-full">
            Already have an account?{" "}
            <Link href="/login" size="sm">
              Sign In
            </Link>
          </div>
        ) : null}
        <div className="flex gap-4 mt-3">
          {steps > 1 && steps < 5 ? (
            <Button
              onClick={() => {
                if (steps === 4 && type === "personal") {
                  setSteps(2);
                } else {
                  setSteps(steps - 1);
                }
              }}
              isDisabled={!type}
              variant="bordered"
              color="primary"
              className="w-[140px]  bg-white"
            >
              Back
            </Button>
          ) : null}
          {steps < 5 ? (
            <Button
              onClick={() => {
                if (type === "personal" && steps === 2) {
                  setSteps(4);
                } else {
                  setSteps(steps + 1);
                }
              }}
              isDisabled={!type}
              color="primary"
              className="w-[140px] "
            >
              {steps === 4 ? "Verify" : "Next"}
            </Button>
          ) : (
            <Button
              as={Link}
              href="/login"
              color="primary"
              className="w-[140px] "
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Login;
