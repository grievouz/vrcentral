import "./global.css";
import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@components/Navbar";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VRCentral",
  description: "The VRChat community’s package registry",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
      },
      {
        url: "/favicon-32x32.png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },
};

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang={"en"} className={"h-full"}>
      <body
        className={clsx("h-full text-zinc-200 bg-slate-900", inter.className)}
      >
        <Providers>
          <Navbar bottomBorder={false} />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
