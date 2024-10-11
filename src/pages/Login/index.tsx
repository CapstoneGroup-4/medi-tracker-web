import DefaultLayout from "@/layouts/default";
import { useTitle } from "ahooks";
import { FC } from "react";
import LoginForm from "./components/login-form";
export interface LoginProps {}
const Login: FC<LoginProps> = () => {
  useTitle("Login | MediTracker");
  return (
    <DefaultLayout>
      <div
        className="flex flex-col justify-center items-center h-full "
        style={{
          backgroundColor: "linear-gradient(153deg, #FFFFFF 0%, #EAFAFC 100%)",
        }}
      >
        <div className="text-5xl text-primary font-bold mb-8">Log In</div>
        <LoginForm />
      </div>
    </DefaultLayout>
  );
};

export default Login;
