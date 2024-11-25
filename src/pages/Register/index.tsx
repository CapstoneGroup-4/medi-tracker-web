import DefaultLayout from "@/layouts/default";
import { useTitle } from "ahooks";
import { to } from "await-to-js";
import { FC, useEffect, useState } from "react";
import ResgiterType from "./components/form/type";
import { Button } from "@nextui-org/button";
import PersonalForm, {
  Region,
  UserWithTerms,
} from "./components/form/personal-form";
import { Link } from "@nextui-org/link";
import Verify from "./components/form/email-verify";
import Success from "./components/form/success";
import ProfessionalForm, {
  Professional,
} from "./components/form/professional-form";
import { Progress } from "@nextui-org/react";
import { Form, message } from "antd";
import { AuthControllerService, VerificationControllerService } from "@/api";
export interface LoginProps { }
const Login: FC<LoginProps> = () => {
  useTitle("Register | MediTracker");
  const [type, setType] = useState<ResgiterType>("USER");
  const [steps, setSteps] = useState(1);
  const [userSignUp, setUserSignUp] = useState<UserWithTerms>({
    region: "canada",
    username: "",
    email: "",
    password: "",
    gender: 0,
    terms: false,
    confirmPassword: "",
  });
  const [professionalForm] = Form.useForm();

  const [personalForm] = Form.useForm();
  const [doctorSignup, setDoctorSignup] = useState<Professional>();
  const [region, setRegion] = useState("canada");
  const [code, setCode] = useState("");
  const [signUpId, setSignUpId] = useState<number>();
  const [sendingEmailLoading, setSendingEmailLoading] = useState(false);
  useEffect(() => {
    setUserSignUp({
      region: "canada",
      username: "",
      email: "",
      password: "",
      gender: 0,
      terms: false,
      confirmPassword: "",
    });
  }, [type]);
  const renderSteps = () => {
    switch (steps) {
      case 1:
        return <ResgiterType type={type} onChange={setType} />;
      case 2:
        return (
          <PersonalForm
            onChange={setUserSignUp}
            region={region}
            onChangeRegion={setRegion}
            form={personalForm}
            value={userSignUp}
          />
        );
      case 3:
        return (
          <ProfessionalForm
            onChange={setDoctorSignup}
            form={professionalForm}
            value={doctorSignup}
          />
        );
      case 4:
        return <Verify code={code} onChange={setCode} />;
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
  const isNextUser =
    steps === 2 &&
    userSignUp?.password &&
    userSignUp.email &&
    userSignUp.gender &&
    userSignUp.username;
  const onNext = async () => {
    try {
      setSendingEmailLoading(true);
      switch (steps) {
        case 2:
          await personalForm.validateFields();

          const { confirmPassword, region, terms, ...requestBody } = userSignUp;

          const [signupUserError, signupUserRes] = await to(
            AuthControllerService.registerUser({
              requestBody: {
                ...requestBody,
                age: Number(userSignUp.age),
                gender: Number(userSignUp.gender),
                phone: String(userSignUp.phone),
                role: type,
              },
            })
          );

          if (signupUserRes && !signupUserError) {
            message.success("Email sent successfully");
            setSignUpId(signupUserRes.id);
            if (type === "USER") {
              setSteps(4);
            } else {
              setSteps(3);
            }
          }
          break;

        case 3:
          if (!signUpId) {
            message.error("User ID is required");
            return;
          }
          if (!doctorSignup?.professionalId) {
            message.error("Professional ID is required");
            return;
          }
          await professionalForm.validateFields();

          const doctorRequestBody = {
            ...doctorSignup,
            jobTitle: Number(doctorSignup.jobTitle) === 1 ? "Doctor" : "Nurse",
            userId: signUpId,
          };
          const [_doctorError, doctorRes] = await to(
            AuthControllerService.doctorVerification({
              requestBody: doctorRequestBody,
            })
          );
          if (doctorRes && !_doctorError) {
            message.success(
              "Doctor registered successfully, email has been sent"
            );
            setSteps(steps + 1);
          }
          break;

        case 4:
          const [err] = await to(
            VerificationControllerService.verifyCode({
              email: userSignUp?.email,
              code,
            })
          );

          if (!err) {
            message.success("Email verified successfully");
            setSteps(steps + 1);
          }
          break;

        default:
          setSteps(steps + 1);
          break;
      }
    } catch (err) {
      message.error(err as string);
    } finally {
      setSendingEmailLoading(false);
    }
  };
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
            aria-label="register-progress"
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
          {steps > 1 && steps <= 2 ? (
            <Button
              onClick={() => {
                if (steps === 4 && type === "USER") {
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
                onNext();
              }}
              isDisabled={!type}
              isLoading={sendingEmailLoading}
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
