import { SignInForm } from "./SignInForm";

const SignInPage = async () => {
  return (
    <>
      <h1 className={"text-xl font-bold leading-tight tracking-tight"}>
        {"Welcome back"}
      </h1>
      <SignInForm />
    </>
  );
};

export default SignInPage;
