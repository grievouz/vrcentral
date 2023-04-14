"use client";

import { signIn } from "next-auth/react";
import { Button } from "@components/Button";
import { GithubSvg } from "@components/GithubSvg";

export const SignInForm = () => {
  return (
    <form
      className={"space-y-4 flex flex-col items-center"}
      action={"#"}
      onClick={() => signIn("github")}
    >
      <Button
        bg={"primary"}
        className={"w-full flex items-center justify-center"}
      >
        <GithubSvg className={"h-6 pr-2"} />
        {"Sign in with Github"}
      </Button>
      <div className={"flex items-center w-full"}>
        <div className={"h-0.5 flex-1 bg-slate-400"} />
        <span className={"px-2"}>{"or"}</span>
        <div className={"h-0.5 flex-1 bg-slate-400"} />
      </div>
      <div className={"space-y-4 w-full"}>
        <div>
          <label htmlFor={"email"} className={"block text-sm font-medium"}>
            {"Your email"}
          </label>
          <input type={"email"} name={"email"} id={"email"} />
        </div>
        <div>
          <label htmlFor={"password"} className={"block text-sm font-medium"}>
            {"Password"}
          </label>
          <input type={"password"} name={"password"} id={"password"} />
        </div>
      </div>
    </form>
  );
};
