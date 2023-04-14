import styles from "@app/page.module.css";

import { FaviconSvg } from "@components/FaviconSvg";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={clsx(
        "h-full flex flex-col items-center pt-64 bg-cover bg-center",
        styles["bg-hero"],
      )}
    >
      <div className={"flex flex-col items-center"}>
        <div className={"flex w-fit pb-8"}>
          <FaviconSvg className={"h-8 pr-3"} />
          <span className={"text-2xl font-semibold whitespace-nowrap"}>
            {"VRCentral"}
          </span>
        </div>
        <div
          className={clsx(
            "p-6 space-y-4 w-96 max-w-md bg-slate-700/50",
            "rounded-lg border border-slate-700",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
