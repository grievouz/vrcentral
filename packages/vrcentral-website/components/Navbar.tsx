"use client";

import clsx from "clsx";
import { useSession, signIn, signOut } from "next-auth/react";
import { HOST } from "@app/env";
import { useRouter, usePathname } from "next/navigation";
import { FaviconSvg } from "./FaviconSvg";
import { LoginSvg } from "./LoginSvg";
import { Button } from "./Button";
import Link from "next/link";

interface NavbarProps {
  bottomBorder?: boolean;
}

export const Navbar = (props: NavbarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "fixed w-full z-20 top-0 left-0",
        props.bottomBorder && "border-b border-zinc-600",
        pathname === "/auth/signin" && "hidden",
      )}
    >
      <div
        className={
          "flex items-center justify-between mx-auto p-4 max-w-screen-lg"
        }
      >
        <Link href={HOST} className={"flex items-center"}>
          <FaviconSvg className={"h-8 pr-3"} />
          <span className={"text-2xl font-semibold whitespace-nowrap"}>
            {"VRCentral"}
          </span>
        </Link>

        <Button
          className={"hover:underline active:text-blue-400"}
          onClick={() => router.push("/auth/signin")}
        >
          {"Login"}
          <LoginSvg className={"h-6 pl-1"} />
        </Button>
      </div>
    </nav>
  );
};
